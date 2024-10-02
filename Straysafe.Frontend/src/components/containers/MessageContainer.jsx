import React from "react";
import ChatBox from "./chat/ChatBox";
import { ChatPosition } from "../utilities/models/chatUtility/ChatPosition";
import { ApplicationConstants } from "../../contants/ApplicationConstants";
import { ChatData } from "../utilities/models/chatUtility/ChatData";

/**
 *
 * @param {Object} param0
 * @param {Array<ChatData>} param0.Chats
 * @returns
 */
function MessageContainer({ Chats = [] }) {
  return (
    <div className="relative w-full h-full overflow-y-auto">
      <div className="relative w-full h-fit bottom-0 top-auto">
        {Chats.map((chatData, index) => (
          <ChatBox
            key={`${index}-${chatData.ID}-${Math.floor(Math.random() * 99999)}`}
            message={chatData.Message}
            position={chatData.Position}
            profilePhoto={chatData.ProfilePhoto}
            dateTimeStamp={chatData.DateTimeStamp}
          />
        ))}
      </div>
    </div>
  );
}

export default MessageContainer;
