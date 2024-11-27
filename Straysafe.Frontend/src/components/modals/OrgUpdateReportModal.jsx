import React, { useEffect, useState } from "react";
import TextArea from "../formElements/TextArea";
import Input from "../formElements/Input";
import SelectInput from "../formElements/SelectInput";
import Button from "../buttons/Button";
import { UpdateReportStray } from "../utilities/services/DataHandler";
import { GetProfileInformation } from "../utilities/services/AuthenticationHandler";
import { AccountRepository } from "../utilities/services/repositories/AccountRepository";
import { AuthConstants } from "../../contants/ApplicationConstants";

function OrgUpdateReportModal({ petData, onClose = () => {} }) {
  const [animalType, setAnimalType] = useState(petData.animalType);
  const [gender, setGender] = useState(petData.gender);
  const [weight, setWeight] = useState(petData.weight);
  const [height, setHeigth] = useState(petData.height);
  const [breed, setBreed] = useState(petData.breed);
  const [address, setAddress] = useState(petData.address);
  const [remarks, setRemarks] = useState(petData.remarks);
  const [owner, setOwner] = useState(
    petData.owner !== "" ? petData.owner : "Owner"
  );
  const [strayverList, setStrayverList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await loadStrayvers();
      setStrayverList(data[0]);
    })();
  }, [petData]);

  const loadStrayvers = async () => {
    const rp = new AccountRepository();
    const allAccounts = await rp.GetAccounts();

    const lst = [];
    const lstWithIds = [];
    allAccounts
      .filter((a) => a.role === AuthConstants.ROLE_STRAYVER)
      .forEach((a) => {
        lst.push(a.firstName + " " + a.lastName);
        lstWithIds.push({ name: a.firstName + " " + a.lastName, id: a.id });
      });

    return [lst, lstWithIds];
  };

  const saveChanges = async () => {
    petData.organization = GetProfileInformation().id;
    petData.animalType = animalType;
    petData.weight = weight;
    petData.height = height;
    petData.breed = breed;
    petData.address = address;
    petData.remarks = remarks;
    console.log(owner);
    if (owner !== "Owner") {
      const list = await loadStrayvers();
      const ownerData = list[1].filter((d) => d.name === owner)[0];
      petData.owner = ownerData.name;
    }

    console.log("submitted ", petData);
    await UpdateReportStray(petData);
    onClose();
  };

  return (
    <div className="absolute w-full h-full z-[9999] bg-[rgba(255,255,255,0.5)]">
      <div className="relative left-[50%] translate-x-[-50%] w-[350px] bg-white py-2 shadow-2xl rounded-lg">
        <h2 className="text-xl text-center py-2 font-bold primary-1">
          Update Report Information
        </h2>
        <div className="w-full mt-5 px-8">
          <div className="grid grid-cols-3 my-2">
            <div className="col-span-1 items-center flex w-full text-xs">
              <label className="text-right w-full pr-4 primary-1">Name:</label>
            </div>
            <div className="col-span-2 text-center items-center flex w-full text-sm primary-1 font-extrabold">
              {petData.name}
            </div>
          </div>

          <div className="grid grid-cols-3 my-2">
            <div className="col-span-1 items-center flex w-full text-xs">
              <label className="text-right w-full pr-4 primary-1">
                Animal Type:
              </label>
            </div>
            <div className="col-span-2 text-center items-center flex w-full text-sm">
              <SelectInput
                containerClassname="w-full"
                className="w-full"
                placeholder={"Animal Type"}
                options={["Dog", "Cat"]}
                selectedOption={setAnimalType}
                setValue={animalType}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 my-2">
            <div className="col-span-1 items-center flex w-full text-xs">
              <label className="text-right w-full pr-4 primary-1">
                Gender:
              </label>
            </div>
            <div className="col-span-2 text-center items-center flex w-full text-sm">
              <SelectInput
                containerClassname="w-full"
                className="w-full"
                placeholder={"Gender"}
                options={["Male", "Female"]}
                selectedOption={setGender}
                setValue={gender}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 my-2">
            <div className="col-span-1 items-center flex w-full text-xs">
              <label className="text-right w-full pr-4 primary-1">
                Weight:
              </label>
            </div>
            <div className="col-span-2 text-center items-center flex w-full text-sm">
              <Input
                containerClassname="w-full"
                className="w-full"
                type="number"
                set={setWeight}
                value={weight}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 my-2">
            <div className="col-span-1 items-center flex w-full text-xs">
              <label className="text-right w-full pr-4 primary-1">
                height:
              </label>
            </div>
            <div className="col-span-2 text-center items-center flex w-full text-sm">
              <Input
                containerClassname="w-full"
                className="w-full"
                type="number"
                set={setHeigth}
                value={height}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 my-2">
            <div className="col-span-1 items-center flex w-full text-xs">
              <label className="text-right w-full pr-4 primary-1">
                Report Type:
              </label>
            </div>
            <div className="col-span-2 text-center items-center flex w-full text-sm primary-1 font-extrabold">
              {petData.reportType}
            </div>
          </div>

          <div className="grid grid-cols-3 my-2">
            <div className="col-span-1 items-center flex w-full text-xs">
              <label className="text-right w-full pr-4 primary-1">Breed:</label>
            </div>
            <div className="col-span-2 text-center items-center flex w-full text-sm">
              <Input
                containerClassname="w-full"
                className="w-full"
                set={setBreed}
                value={breed}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 my-2">
            <div className="col-span-1 items-center flex w-full text-xs">
              <label className="text-right w-full pr-4 primary-1">
                Address:
              </label>
            </div>
            <div className="col-span-2 text-center items-center flex w-full text-sm">
              <Input
                containerClassname="w-full"
                className="w-full"
                set={setAddress}
                value={address}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 my-2">
            <div className="col-span-1 items-center flex w-full text-xs">
              <label className="text-right w-full pr-4 primary-1">
                Remarks:
              </label>
            </div>
            <div className="col-span-2 text-center items-center flex w-full text-sm">
              <TextArea
                containerClassname="w-full"
                className="w-full"
                set={setRemarks}
                value={remarks}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 my-2">
            <div className="col-span-1 items-center flex w-full text-xs">
              <label className="text-right w-full pr-4 primary-1">Owner:</label>
            </div>
            <div className="col-span-2 justify-center items-center flex w-full text-sm">
              <SelectInput
                containerClassname="w-full"
                className="w-full"
                placeholder={"Owner"}
                options={strayverList}
                selectedOption={setOwner}
                setValue={owner}
              />
            </div>
          </div>
        </div>
        <div className="text-center my-4">
          <Button onClick={saveChanges}>Save Changes</Button>
        </div>
      </div>
    </div>
  );
}

export default OrgUpdateReportModal;
