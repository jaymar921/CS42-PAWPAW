import React, { useEffect, useState } from "react";
import ChatUser from "./chat/ChatUser";
import Input from "../formElements/Input";
import {
  API_LINKS,
  ApplicationConstants,
} from "../../contants/ApplicationConstants";
import MessageContainer from "./MessageContainer";
import { ChatData } from "../utilities/models/chatUtility/ChatData";
import { useSearchParams } from "react-router-dom";
import { GetChatHubConnection } from "../utilities/services/chats/SignalRService";
import {
  GetFirstChat,
  GetLatestChat,
  RetrieveSingleAccount,
  SubmitChat,
} from "../utilities/services/DataHandler";
import { GetProfileInformation } from "../utilities/services/AuthenticationHandler";
import { RedirectTo } from "../utilities/PageUtils";

function ChatContainer({ minified = false }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [chatHubConnection, setChatHubConnection] = useState(null);
  const [chatInformation, setChatInformation] = useState(null);
  const [allChatInformations, setAllChatInformations] = useState(null);
  const [chatDatas, setChatDatas] = useState([]);
  const [focusChat, setFocusChat] = useState({ user1: null, user2: null });
  const [inputMessage, setInputMessage] = useState("");
  const [latestChat, setLatestChat] = useState("");
  let called = false;

  useEffect(() => {
    if (called) return;
    called = true;
    // setup chathub connection
    (async () => {
      if (chatHubConnection || chatInformation) return;
      let connection = await GetChatHubConnection();
      setChatHubConnection(connection);
      console.log("Websocket connection has created");

      const topic = searchParams.get("tp");
      const org = searchParams.get("og");
      const str = searchParams.get("st");

      if (topic && org && str)
        connection.invoke("GetChatInfo", str, org, topic, "");
      connection.invoke("GetAllChatInfo", GetProfileInformation().id);

      connection.on("ChatInformation", (data) => {
        // user enter the chat
        console.log("Entered Chat Session: " + data.chatInfo);
        // get latest chat
        setChatInformation(data);
      });

      connection.on("AllChatInformations", (data) => {
        (async () => {
          const newChatInfoArray = [];
          // user enter the chat
          for (let chatInfo of data) {
            const latestChat = await GetLatestChat(chatInfo.chatInfo);
            chatInfo.latest = latestChat.latest;
            const firstChat = await GetFirstChat(chatInfo.chatInfo);
            chatInfo.first = firstChat.first;

            chatInfo.sender = await RetrieveSingleAccount(
              firstChat.first?.sender
            );
            newChatInfoArray.push(chatInfo);
          }

          // get latest chat
          setAllChatInformations(newChatInfoArray);
        })();
      });

      (async () => {
        // set the focus chat

        const switchChat = searchParams.get("sw");

        // let's retrieve user information
        const user1 = await RetrieveSingleAccount(!switchChat ? str : org);
        const user2 = await RetrieveSingleAccount(!switchChat ? org : str);
        setFocusChat({ user1, user2 });
      })();
    })();
  }, [searchParams]);

  useEffect(() => {
    if (!chatHubConnection || !chatInformation) return;

    chatHubConnection.on("LatestChat-" + chatInformation.chatInfo, (chats) => {
      if (chats && chats.length > 0) {
        setChatDatas([...chatDatas, ...chats]);
      }
    });

    chatHubConnection.invoke("GetChatNotification");
  }, [chatHubConnection, chatInformation, chatDatas]);

  useEffect(() => {
    if (!chatHubConnection || !chatInformation) return;

    if (chatDatas.length > 0) {
      setTimeout(() => {
        let txb = document.getElementById(
          `message-${chatDatas[chatDatas.length - 1].id}`
        );
        txb.scrollIntoView();
      }, 100);
    }
    /**
     * Reserved
     */
  }, [chatHubConnection, chatInformation, chatDatas]);

  const handleSubmitChat = () => {
    if (inputMessage === "") return;
    const switchChat = searchParams.get("sw");
    const org = searchParams.get("og");
    const str = searchParams.get("st");
    let payload = new ChatData({
      chatInfo: chatInformation.chatInfo,
      sender: !switchChat ? str : org,
      recepient: !switchChat ? org : str,
      message: inputMessage,
      type: "msg",
    });

    SubmitChat(payload);
    setTimeout(() => {
      setInputMessage("");
    }, 100);
  };
  return (
    <div>
      <div className={`${!minified && "grid grid-cols-3 h-[80vh]"}`}>
        <div className="border-r-2 border-gray-400 h-full col-span-1">
          {!minified && (
            <>
              <h1 className="text-left primary-1 text-[30px]">Chats</h1>
              <div className="overflow-y-auto h-[500px]">
                {allChatInformations &&
                  allChatInformations.map((chatInfo) => {
                    var userProfile = GetProfileInformation();
                    const metaData = chatInfo.metadata.split("%|%");
                    if (
                      !chatInfo.sender ||
                      !chatInfo.metadata.includes(userProfile.id)
                    )
                      return <div key={chatInfo.id}></div>;
                    return (
                      <ChatUser
                        key={chatInfo.id}
                        displayName={`${chatInfo.sender?.firstName || ""} ${
                          chatInfo.sender?.lastName || ""
                        } - ${chatInfo.topic}`}
                        lastMessage={`${chatInfo.latest?.message || ""}`}
                        profilePhoto={API_LINKS.MEDIA_DOWNLOAD(
                          chatInfo.first?.sender
                        )}
                        onClick={() => {
                          RedirectTo(
                            ApplicationConstants.ROUTE_CHAT +
                              `?tp=${metaData[1]}&og=${metaData[3]}&st=${metaData[2]}&sw=false`
                          );
                        }}
                      />
                    );
                  })}
              </div>
            </>
          )}
        </div>
        <div className="h-full col-span-2">
          {searchParams.get("tp") && (
            <div className="relative left-[50%] translate-x-[-50%] w-[80%] h-[70%]">
              <ChatUser
                displayName={`${focusChat?.user2?.firstName} ${focusChat?.user2?.lastName}`}
                profilePhoto={API_LINKS.MEDIA_DOWNLOAD(focusChat?.user2?.id)}
              />
              <MessageContainer Chats={[...chatDatas]} focusChat={focusChat} />
              <div className="">
                <Input
                  type="text"
                  containerClassname="w-full"
                  placeholder="Message"
                  icon="fa-solid fa-paper-plane"
                  iconClicked={handleSubmitChat}
                  set={setInputMessage}
                  value={inputMessage}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatContainer;
