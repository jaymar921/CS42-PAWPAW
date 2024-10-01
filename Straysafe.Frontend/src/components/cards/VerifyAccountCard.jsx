import React from "react";
import Button from "../buttons/Button";

function VerifyAccountCard({ fileName = "fileName.ext" }) {
  return (
    <div className="relative w-full h-auto bg-gray-200 my-2">
      <div className="grid grid-cols-10 gap-5">
        <div className="block w-fit p-2 col-span-2">
          <div className="flex items-center w-fit">
            <i className="fa-solid fa-paperclip"></i>
            <p className="underline">{fileName}</p>
          </div>
          <div className="flex justify-center">
            <i className="fa-solid fa-image text-[40px]"></i>
          </div>
        </div>
        <div className="text-sm p-2 col-span-6">
          <p className="font-bold">MARO Animal Shelter</p>
          <p>123 Sanciangko Street, Cebu City</p>
          <p className="text-blue-600">maroshelter@gmail.com</p>
          <p className="text-blue-600">+63123123456</p>
        </div>
        <div className="flex w-fit p-2 col-span-2 justify-items-center">
          <div className="flex items-center w-fit gap-2 ">
            <Button
              icon="fa-solid fa-check"
              className="bg-green-500 w-10 h-10"
            />
            <Button icon="fa-solid fa-xmark" className="bg-red-500 w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyAccountCard;
