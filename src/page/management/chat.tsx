import React from "react";
//
import ChatComponent from "@/components/chat/chat";
//

export default function ChatPage() {
  return (
    <>
      <p className="text-2xl font-semibold text-primary tracking-tight mb-5">
        Chat
      </p>
      <ChatComponent />
    </>
  );
}
