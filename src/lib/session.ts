import "server-only";

import { PROCESS } from "@/database/env";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SessionPayload } from "./definitions";

const secretKey = PROCESS.JWT.SECRET;
const key = new TextEncoder().encode(secretKey);

const cookie = {
  name: "session",
  option: { httpOnly: true, secure: true, sameSite: "lax", path: "/" },
  duration: 24 * 60 * 60 * 100,
};

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1day")
    .sign(key);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });
    return payload;
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

export async function verifySession() {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.user_id) {
    redirect("/login");
  }

  return { isAuth: true, user_id: Number(session.userId) };
}

export async function deleteSession() {
  (await cookies()).delete("session");
  redirect("/login");
}
