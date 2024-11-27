import React from "react";
import Button from "../buttons/Button";
import {
  API_LINKS,
  ApplicationConstants,
} from "../../contants/ApplicationConstants";
import { PetData } from "../utilities/models/PetData";
import { RedirectTo } from "../utilities/PageUtils";

function AdoptPetCard({ onClick, source, prefered = false, petData = null }) {
  return (
    <div>
      <div
        className={`relative w-[330px] ${
          prefered ? "bg-orange-300" : "bg-[#EEF0F3]"
        } rounded-[20px] flex justify-center m-auto mt-2`}
      >
        <div className="text-center">
          <div className="overflow-hidden rounded-[35px] border-2 border-black w-fit mt-[30px]">
            <img
              className="w-[200px] h-[200px] object-cover"
              src={API_LINKS.MEDIA_DOWNLOAD(source)}
            />
          </div>
          <p className="mt-2 text-xl primary-1 font-bold">{petData?.name}</p>
          <Button className="mt-4 mb-8" onClick={onClick}>
            View Details
          </Button>

          {prefered && (
            <p className="absolute bottom-0 left-0 py-2 text-xs text-center w-full">
              Matched your{" "}
              <a
                className="cursor-pointer"
                onClick={() => {
                  RedirectTo(ApplicationConstants.ROUTE_PROFILE);
                }}
              >
                preference
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdoptPetCard;
