import React from "react";
import {
  API_LINKS,
  ApplicationConstants,
} from "../../../contants/ApplicationConstants";
import Button from "../../buttons/Button";
import { PetData } from "../../utilities/models/PetData";
import { RedirectTo } from "../../utilities/PageUtils";

/**
 *
 * @param {PetData} petData
 * @returns
 */
function ReportStrayCard({ petData }) {
  return (
    <div className="w-full bg-gray-100 rounded-xl my-2">
      <div className="p-4 flex">
        <div className="w-12 h-12 overflow-hidden rounded-md">
          <img
            className="w-12 h-12 object-cover"
            src={API_LINKS.MEDIA_DOWNLOAD(petData.id)}
          />
        </div>
        <div className="mx-2">
          <p>Report Type: {petData.reportType}</p>
          <p>
            Status: <a className="text-green-600">{petData.status}</a>
          </p>
        </div>
        <div className="flex items-center m-auto mr-0">
          <Button
            onClick={() =>
              RedirectTo(
                ApplicationConstants.ROUTE_REPORT_STRAY + "/" + petData.id
              )
            }
            icon={"fa-solid fa-circle-info text-xl"}
            default
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default ReportStrayCard;
