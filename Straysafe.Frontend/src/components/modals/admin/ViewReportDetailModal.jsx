import React, { useEffect, useState } from "react";
import { PetData } from "../../utilities/models/PetData";
import Button from "../../buttons/Button";
import { API_LINKS } from "../../../contants/ApplicationConstants";
import { DeleteReport } from "../../utilities/services/DataHandler";
import { AccountRepository } from "../../utilities/services/repositories/AccountRepository";

/**
 * @param {any} param0
 * @param {PetData} param0.reportData
 * @param {Function} param0.refresh
 */
function ViewReportDetailModal({ reportData, set, refresh = () => {} }) {
  const [ownerInformation, setOwnerInformation] = useState(undefined);
  const handleRemoveReport = async () => {
    const confirmation = confirm(
      "Are you sure you want to delete this report?"
    );

    if (!confirmation) return;

    const success = await DeleteReport(reportData.id);

    if (success) {
      alert("Report has been deleted");
      refresh();
      set(undefined);
    }
  };

  useEffect(() => {
    const setOwnerInfo = async () => {
      const aR = new AccountRepository();
      const accounts = await aR.GetAccounts();

      for (let account of accounts) {
        if (account.firstName + " " + account.lastName === reportData.owner) {
          setOwnerInformation(account);
          break;
        }
      }
    };

    setOwnerInfo();
  }, [reportData]);
  return (
    <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-full h-full z-[999]">
      <div className="absolute w-[500px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-100 rounded-xl shadow-xl">
        <div className="text-right">
          <Button
            icon={"fa-solid fa-xmark"}
            onClick={() => {
              set(undefined);
            }}
            className="rounded-bl-xl rounded-br-none rounded-tl-none"
          />
        </div>
        <div className="p-4 pt-2">
          <h2 className="text-center text-2xl font-bold primary-1 mb-2">
            {reportData.name} | {reportData.animalType}
          </h2>
          <div className="w-100 h-[300px] text-center overflow-hidden rounded-xl">
            <img
              className="w-full h-[300px] object-cover"
              src={API_LINKS.MEDIA_DOWNLOAD(reportData.id)}
            />
          </div>
          <h2 className="text-center text-xl primary-1 font-bold py-2">
            Details
          </h2>
          {!reportData.owner && (
            <div className="grid grid-cols-2 gap-3 text-md px-9 mt-2">
              <p className="text-left">Posted by</p>
              <p className="font-bold">
                {reportData.reporter.firstName} {reportData.reporter.lastName}
              </p>
            </div>
          )}
          <div className="grid grid-cols-2 gap-3 text-md px-9">
            <p className="text-left">Organization</p>
            <div className="font-bold">
              {reportData.organization ? (
                <p>
                  {reportData.organization?.firstName}{" "}
                  {reportData.organization?.lastName}
                </p>
              ) : (
                <p>-</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-md px-9 mt-2">
            <p className="text-left">Report Type</p>
            <p className="font-bold">{reportData.reportType}</p>
          </div>
          {reportData.owner === "" && (
            <div className="grid grid-cols-2 gap-3 text-md px-9 mt-2">
              <p className="text-left">Status</p>
              <p className="font-bold">{reportData.status}</p>
            </div>
          )}
          <div className="grid grid-cols-2 gap-3 text-md px-9 mt-2">
            <p className="text-left">
              {reportData.owner !== "" ? "Adoption Date" : "Report Date"}
            </p>
            <p className="font-bold">
              {new Date(reportData.reportDate).toDateString()}
              <br />
              {new Date(reportData.reportDate).toLocaleTimeString()}
            </p>
          </div>
          {reportData.owner !== "" && (
            <>
              <h2 className="text-center text-xl primary-1 font-bold py-2">
                Owner Information
              </h2>
              <div className="grid grid-cols-2 gap-3 text-md px-9 mt-2">
                <p className="text-left">Owner</p>
                <p className="font-bold">{reportData.owner}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-md px-9 mt-2">
                <p className="text-left">Contact Information</p>
                <p className="font-bold">
                  {ownerInformation?.email} ({ownerInformation?.contactNumber})
                </p>
              </div>
            </>
          )}
          {reportData.owner === "" && (
            <div className="grid grid-cols-2 gap-3 text-md px-9 mt-2">
              <p className="text-left">Action</p>
              <Button onClick={handleRemoveReport} className="bg-red-500">
                Delete
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewReportDetailModal;
