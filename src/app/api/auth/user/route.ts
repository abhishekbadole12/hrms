// import { NextResponse } from "next/server";
// import User from "@/models/User";
// import { verifySession } from "@/lib/session";
// import { cache } from "react";

// export const getUser = cache(async () => {
//   try {
//     // 1. Verify user's session
//     const session = await verifySession();

//     // 2. Fetch user data
//     const user = await User.findOne({
//       where: { user_id: session.user_id },
//       attributes: ["user_id", "email", "user_role"],
//     });
//     console.log(user);

//     return NextResponse.json(user);
//   } catch (error: any) {
//     console.log(error);
//     return NextResponse.json({ error: error.message });
//   }
// });

// // export async function GET() {

// // }
