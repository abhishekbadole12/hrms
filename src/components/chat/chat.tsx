import React from "react";
//
import BoxWrapper from "../wrapper/box-wrapper";
import ChatSidebar from "./components/chat-sidebar";
//

export default function ChatComponent() {
  return (
    <BoxWrapper className="w-full h-full pb-0">
      <ChatSidebar />
    </BoxWrapper>
  );
}
