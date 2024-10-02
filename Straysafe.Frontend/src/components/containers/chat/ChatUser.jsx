import React from "react";

function ChatUser({
  profilePhoto,
  displayName = "",
  lastMessage,
  onClick,
  className = "flex my-2 w-[90%]",
}) {
  return (
    <div
      className={className}
      onClick={() => onClick && onClick()}
      title={`Click to message ${displayName}`}
    >
      <div className="overflow-hidden">
        <img
          className="w-20 h-20 rounded-full object-cover"
          src={profilePhoto}
        />
      </div>
      <div className="flex items-center cursor-pointer">
        <div className="px-4 overflow-clip">
          <h1 className="font-bold text-xl">{displayName}</h1>
          <p className="text-gray-500 truncate w-[200px]">{lastMessage}</p>
        </div>
      </div>
    </div>
  );
}

export default ChatUser;
