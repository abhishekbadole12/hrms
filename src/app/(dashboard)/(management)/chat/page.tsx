import React from "react";
import type { Metadata } from "next";
import ChatPage from "@/page/management/chat";
//

export const metadata: Metadata = {
  title: "Chat",
  description: "HRMS employee",
};

export default function Chat() {
  return <ChatPage />;
}
