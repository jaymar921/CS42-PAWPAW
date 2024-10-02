import React, { useState } from "react";
import { AnnouncementData } from "../utilities/models/AnnouncementData";
import Button from "../buttons/Button";
import Input from "../formElements/Input";
import FileInput from "../formElements/FileInput";
import TextArea from "../formElements/TextArea";

/**
 * @param {Object} param0
 * @param {Function} param0.showOrClose
 * @param {AnnouncementData} param0.announcementData
 */
function AddOrEditAnnouncementModal({ showOrClose, announcementData }) {
  const [title, setTitle] = useState(
    (announcementData && announcementData.Title) || ""
  );
  const [content, setContent] = useState(
    (announcementData && announcementData.Content) || ""
  );
  const [file, setFile] = useState();

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.1)] z-[99999]">
      <div className="relative w-[400px] h-auto left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-xl overflow-hidden">
        <div className="text-right">
          <Button icon={"fa-solid fa-xmark"} onClick={showOrClose} />
        </div>
        <h1 className="text-lg primary-1 font-bold text-center">
          Announcement
        </h1>
        <div className="w-[350px] relative left-[50%] translate-x-[-50%]">
          <label className="text-sm font-bold mt-2">Title</label>
          <Input
            placeholder="Title"
            containerClassname={"w-[350px]"}
            set={setTitle}
            value={title}
          />
          <label className="text-sm font-bold mt-2">Content</label>
          <TextArea
            placeholder="Content"
            containerClassname={"resize-none w-[350px] h-[100px]"}
            className={"resize-none"}
            set={setContent}
            value={content}
          />
          <label className="text-sm font-bold mt-2">Upload Image</label>
          <FileInput placeholder={"Image"} containerClassname={"mb-4"} />
          <div className="text-center mb-4">
            <Button>{announcementData ? "Update" : "Post"}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddOrEditAnnouncementModal;
