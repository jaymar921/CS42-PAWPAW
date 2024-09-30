export class AnnouncementData{
    /**
     * 
     * @param {{title: String, imageSrc: URL, postDate: Date, location: String, content: String }} param0 
     */
    constructor({title, imageSrc, postDate = new Date(), location, content}) {
        this.Title = title,
        this.ImageSource = imageSrc;
        this.PostDate = postDate;
        this.Location = location;
        this.Content = content;
    }
}