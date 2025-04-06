import { verifySession } from "@/lib/session";
import { Sidebar } from "../sidebar/sidebar";

export default async function SidebarWrapper() {
  const { isAuth, user_id } = await verifySession();

  if (!isAuth) return null;

  return <Sidebar user_id={user_id} />;
}
