import { ChatPosition } from "./ChatPosition";

export class ChatData{
    constructor({ID, ProfilePhoto, DisplayName, DateTimeStamp, Message, Postition = ChatPosition.Left}) {
        this.ID = ID;
        this.ProfilePhoto = ProfilePhoto;
        this.DisplayName = DisplayName;
        this.DateTimeStamp = DateTimeStamp;
        this.Message = Message;
        this.Position = Postition;
    }
}