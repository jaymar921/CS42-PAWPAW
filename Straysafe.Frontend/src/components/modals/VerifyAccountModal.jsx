import React from "react";
import Button from "../buttons/Button";
import VerifyAccountCard from "../cards/VerifyAccountCard";

function VerifyAccountModal({ showModal, closeModal }) {
  return (
    <div
      className={`${
        showModal
          ? "absolute top-0 left-0 w-full h-full transition-all duration-100 opacity-1 z-[100]"
          : "opacity-0 top-10 z-[-1] hidden"
      }`}
    >
      <div className="relative w-[80%] h-auto bg-white left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg shadow-md">
        <div className="text-right">
          <Button
            icon="fa-solid fa-x text-sm"
            className="w-10 h-10"
            onClick={closeModal}
          />
        </div>
        <div className="relative p-4">
          <h2 className="text-lg font-bold primary-1">Verify Accounts</h2>
          <div className="my-2 px-2 h-[200px] overflow-y-scroll">
            <VerifyAccountCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyAccountModal;
