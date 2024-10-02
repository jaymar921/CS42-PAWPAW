import React from "react";
import ChatUser from "./chat/ChatUser";
import Input from "../formElements/Input";
import { ApplicationConstants } from "../../contants/ApplicationConstants";
import MessageContainer from "./MessageContainer";
import { ChatData } from "../utilities/models/chatUtility/ChatData";
import { ChatPosition } from "../utilities/models/chatUtility/ChatPosition";

function ChatContainer() {
  return (
    <div>
      <div className="grid grid-cols-3 h-[80vh]">
        <div className="border-r-2 border-gray-400 h-full col-span-1">
          <h1 className="text-left primary-1 text-[30px]">Chats</h1>
          <div className="overflow-y-auto h-[500px]">
            <ChatUser
              displayName="Jayharron"
              lastMessage="Baligya ni?"
              profilePhoto={
                "https://th.bing.com/th/id/R.19fa7497013a87bd77f7adb96beaf768?rik=144XvMigWWj2bw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-High-Quality-Image.png&ehk=%2bat%2brmqQuJrWL609bAlrUPYgzj%2b%2f7L1ErXRTN6ZyxR0%3d&risl=&pid=ImgRaw&r=0"
              }
            />
            <ChatUser
              displayName="Jayharron"
              lastMessage="Baligya ni?"
              profilePhoto={
                "https://th.bing.com/th/id/R.19fa7497013a87bd77f7adb96beaf768?rik=144XvMigWWj2bw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-High-Quality-Image.png&ehk=%2bat%2brmqQuJrWL609bAlrUPYgzj%2b%2f7L1ErXRTN6ZyxR0%3d&risl=&pid=ImgRaw&r=0"
              }
            />
            <ChatUser
              displayName="Jayharron"
              lastMessage="Baligya ni?"
              profilePhoto={
                "https://th.bing.com/th/id/R.19fa7497013a87bd77f7adb96beaf768?rik=144XvMigWWj2bw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-High-Quality-Image.png&ehk=%2bat%2brmqQuJrWL609bAlrUPYgzj%2b%2f7L1ErXRTN6ZyxR0%3d&risl=&pid=ImgRaw&r=0"
              }
            />
            <ChatUser
              displayName="Jayharron"
              lastMessage="Baligya ni?"
              profilePhoto={
                "https://th.bing.com/th/id/R.19fa7497013a87bd77f7adb96beaf768?rik=144XvMigWWj2bw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-High-Quality-Image.png&ehk=%2bat%2brmqQuJrWL609bAlrUPYgzj%2b%2f7L1ErXRTN6ZyxR0%3d&risl=&pid=ImgRaw&r=0"
              }
            />
            <ChatUser
              displayName="Jayharron"
              lastMessage="Baligya ni?"
              profilePhoto={
                "https://th.bing.com/th/id/R.19fa7497013a87bd77f7adb96beaf768?rik=144XvMigWWj2bw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-High-Quality-Image.png&ehk=%2bat%2brmqQuJrWL609bAlrUPYgzj%2b%2f7L1ErXRTN6ZyxR0%3d&risl=&pid=ImgRaw&r=0"
              }
            />
          </div>
        </div>
        <div className="h-full col-span-2">
          <div className="relative left-[50%] translate-x-[-50%] w-[80%] h-[70%]">
            <ChatUser
              displayName="Jayharron"
              profilePhoto={ApplicationConstants.SampleCardImg}
            />
            <MessageContainer
              Chats={[
                new ChatData({
                  ID: 0,
                  ProfilePhoto: ApplicationConstants.SampleCardImg,
                  Message:
                    "Hello He wfm94 89f w9 4fmhw98 fmu98w 4uf9w u89f98w u98fu89w afmiuashmivfsh87ef 8he8fh e8fh7w8e h87mvwh87 vm87wer hm78vw78vh78 esf",
                  Postition: ChatPosition.Left,
                }),
                new ChatData({
                  ID: 0,
                  ProfilePhoto: ApplicationConstants.SampleCardImg,
                  Message: "Baligya ni?",
                  Postition: ChatPosition.Left,
                }),
                new ChatData({
                  ID: 0,
                  ProfilePhoto: ApplicationConstants.StraySafeLogo1,
                  Message: "Dili sir, for adoption ra",
                  Postition: ChatPosition.Right,
                }),
                new ChatData({
                  ID: 0,
                  ProfilePhoto: ApplicationConstants.SampleCardImg,
                  Message:
                    "Hello He wfm94 89f w9 4fmhw98 fmu98w 4uf9w u89f98w u98fu89w afmiuashmivfsh87ef 8he8fh e8fh7w8e h87mvwh87 vm87wer hm78vw78vh78 esf",
                  Postition: ChatPosition.Left,
                }),
                new ChatData({
                  ID: 0,
                  ProfilePhoto: ApplicationConstants.SampleCardImg,
                  Message: "Baligya ni?",
                  Postition: ChatPosition.Left,
                }),
                new ChatData({
                  ID: 0,
                  ProfilePhoto: ApplicationConstants.StraySafeLogo1,
                  Message: "Dili sir, for adoption ra",
                  Postition: ChatPosition.Right,
                }),
                new ChatData({
                  ID: 0,
                  ProfilePhoto: ApplicationConstants.SampleCardImg,
                  Message:
                    "Hello He wfm94 89f w9 4fmhw98 fmu98w 4uf9w u89f98w u98fu89w afmiuashmivfsh87ef 8he8fh e8fh7w8e h87mvwh87 vm87wer hm78vw78vh78 esf",
                  Postition: ChatPosition.Left,
                }),
                new ChatData({
                  ID: 0,
                  ProfilePhoto: ApplicationConstants.SampleCardImg,
                  Message: "Baligya ni?",
                  Postition: ChatPosition.Left,
                }),
                new ChatData({
                  ID: 0,
                  ProfilePhoto: ApplicationConstants.StraySafeLogo1,
                  Message: "Dili sir, for adoption ra",
                  Postition: ChatPosition.Right,
                }),
              ]}
            />
            <div className="">
              <Input
                containerClassname="w-full"
                placeholder="Message"
                icon="fa-solid fa-paper-plane"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatContainer;
