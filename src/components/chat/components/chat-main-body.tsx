import React from "react";
//
import Message from "./message";
//

export default function ChatMainBody() {
  const text = "Hello, abhishek badole";

  return (
    <div className="p-4 flex-1 overflow-y-auto">
      {[...Array(20)].map((_, i) => (
        <Message text={text} isCurrentUser={i % 2 == 0 && true} key={i}/>
      ))}
    </div>
  );
}
