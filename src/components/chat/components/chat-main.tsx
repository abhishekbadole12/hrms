import React from "react";
//
import ChatMainHeader from "./chat-main-header";
import ChatMainBody from "./chat-main-body";
import ChatMainFooter from "./chat-main-footer";
//

export default function ChatMain() {
  return (
    <section className="w-8/12 h-full flex flex-col">
      <ChatMainHeader />
      <ChatMainBody />
      <ChatMainFooter />
    </section>
  );
}
