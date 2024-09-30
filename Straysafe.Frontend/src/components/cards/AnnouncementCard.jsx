import React from "react";
import { AnnouncementData } from "../utilities/models/AnnouncementData";
import Button from "../buttons/Button";

/**
 *
 * @param {{AnnouncementData: AnnouncementData}} properties
 * @returns
 */
function AnnouncementCard({ AnnouncementData, editable }) {
  return (
    <div className="relative w-100 bg-gray-100 rounded-xl p-4 shadow-sm my-2">
      <div className="flex">
        <div className="col-span-3 w-[250px] h-[150px] rounded-xl overflow-hidden shadow-md">
          <img
            className="object-cover h-[150px]"
            src={AnnouncementData.ImageSource}
          />
        </div>
        <div className="col-span-6 p-2">
          <h1 className="font-bold text-lg">{AnnouncementData.Title}</h1>
          <div className="text-xs">
            <p>Date: {AnnouncementData.PostDate.toLocaleDateString()}</p>
            <p>Time: {AnnouncementData.PostDate.toLocaleTimeString()}</p>
            <p>Location: {AnnouncementData.Location}</p>
          </div>
          <p className="h-[58px] text-sm overflow-y-hidden">
            {AnnouncementData.Content}
          </p>
        </div>
        {editable && (
          <div className="col-span-1 text-center flex justify-center">
            <Button
              icon="fa-solid fa-gear"
              className="text-[30px]"
              default
            ></Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AnnouncementCard;
