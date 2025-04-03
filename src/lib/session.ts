import "server-only";

import { PROCESS } from "@/database/env";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ISessionPayload } from "./definitions";


const secretKey = PROCESS.JWT.SECRET;
const key = new TextEncoder().encode(secretKey);

const cookie = {
  name: "session",
  option: { httpOnly: true, secure: true, sameSite: "lax", path: "/" },
  duration: 24 * 60 * 60 * 100,
};

export async function encrypt(payload: ISessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1day")
    .sign(key);
}

export async function decrypt(session: string | undefined = ""): Promise<ISessionPayload | null> {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });
    return payload as ISessionPayload;
  } catch (error) {
    return null;
  }
}

export async function createSession(user_id: string) {
  const expiresAt = new Date(Date.now() + cookie.duration);
  const session = await encrypt({ user_id, expiresAt });

  (await cookies()).set("session", session, {
    httpOnly: true,
    secure: false,
    expires: expiresAt,
    sameSite: "strict",
    // path: "/",
  });

  return { success: true };
}

export async function verifySession(): Promise<{ isAuth: boolean; user_id: string }> {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.user_id) {
    redirect("/login");
  }

  return { isAuth: true, user_id: session.user_id };
}

export async function deleteSession() {
  (await cookies()).delete("session");
  redirect("/login");
}
