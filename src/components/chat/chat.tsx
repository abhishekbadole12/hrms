import React from "react";
//
import BoxWrapper from "../wrapper/box-wrapper";
import ChatSidebar from "./components/chat-sidebar";
import ChatMain from "./components/chat-main";
//

export default function ChatComponent() {
  return (
    <BoxWrapper className="w-full h-[88%] flex !p-0">
      <ChatSidebar />
      <ChatMain />
    </BoxWrapper>
  );
}
