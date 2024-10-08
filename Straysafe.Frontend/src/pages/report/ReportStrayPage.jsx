import React, { useState } from "react";
import PageContainer from "../../components/containers/PageContainer";
import Header from "../../components/headers/Header";
import MobileView from "../../components/containers/MobileView";
import FileInput from "../../components/formElements/FileInput";
import Input from "../../components/formElements/Input";
import SelectInput from "../../components/formElements/SelectInput";
import TextArea from "../../components/formElements/TextArea";
import Button from "../../components/buttons/Button";

function ReportStrayPage() {
  const [file, setFile] = useState(null);
  const [petName, setPetName] = useState("");
  const [animalType, setAnimalType] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [reportType, setReportType] = useState("");
  const [breed, setBreed] = useState("");
  const [address, setAddress] = useState("");
  const [remark, setRemark] = useState("");

  const handleSubmit = () => {};

  return (
    <PageContainer>
      <Header />
      <MobileView className="px-8 mb-10">
        <div className="text-left">
          <h1 className="text-xl font-bold primary-1">
            Report an Animal{" "}
            <i className="fa-solid fa-bullhorn text-red-500"></i>
          </h1>

          <div className="w-[100%]">
            <FileInput
              set={setFile}
              placeholder="Upload Image"
              containerClassname="w-full"
            />

            <div className="grid grid-cols-3 my-2">
              <div className="col-span-1 items-center flex w-full">
                <label className="text-right w-full pr-4 primary-1">
                  Name:
                </label>
              </div>
              <div className="col-span-2 text-center items-center flex w-full">
                <Input
                  containerClassname="w-full"
                  set={setPetName}
                  value={petName}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 my-2">
              <div className="col-span-1 items-center flex w-full">
                <label className="text-right w-full pr-4 primary-1">
                  Animal Type:
                </label>
              </div>
              <div className="col-span-2 text-center items-center flex w-full">
                <SelectInput
                  placeholder="Type"
                  options={["Dog", "Cat"]}
                  selectedOption={setAnimalType}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 my-2">
              <div className="col-span-1 items-center flex w-full">
                <label className="text-right w-full pr-4 primary-1">
                  Gender:
                </label>
              </div>
              <div className="col-span-2 text-center items-center flex w-full">
                <SelectInput
                  placeholder="Gender"
                  options={["Male", "Female"]}
                  selectedOption={setGender}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 my-2">
              <div className="col-span-1 items-center flex w-full">
                <label className="text-right w-full pr-4 primary-1">
                  Weight:
                </label>
              </div>
              <div className="col-span-2 text-center items-center flex w-full">
                <Input
                  type="number"
                  placeholder="in kilogram"
                  value={weight}
                  set={setWeight}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 my-2">
              <div className="col-span-1 items-center flex w-full">
                <label className="text-right w-full pr-4 primary-1">
                  height:
                </label>
              </div>
              <div className="col-span-2 text-center items-center flex w-full">
                <Input
                  type="number"
                  placeholder="in inches"
                  value={height}
                  set={setHeight}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 my-2">
              <div className="col-span-1 items-center flex w-full">
                <label className="text-right w-full pr-4 primary-1">
                  Report Type:
                </label>
              </div>
              <div className="col-span-2 text-center items-center flex w-full">
                <SelectInput
                  placeholder="Report Type"
                  options={["Stray", "Lost", "Found"]}
                  selectedOption={setReportType}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 my-2">
              <div className="col-span-1 items-center flex w-full">
                <label className="text-right w-full pr-4 primary-1">
                  Breed:
                </label>
              </div>
              <div className="col-span-2 text-center items-center flex w-full">
                <Input
                  type="text"
                  placeholder=""
                  value={breed}
                  set={setBreed}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 my-2">
              <div className="col-span-1 items-center flex w-full">
                <label className="text-right w-full pr-4 primary-1">
                  Address:
                </label>
              </div>
              <div className="col-span-2 text-center items-center flex w-full">
                <Input
                  type="text"
                  placeholder="location"
                  value={address}
                  set={setAddress}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 my-2">
              <div className="col-span-1 items-center flex w-full">
                <label className="text-right w-full pr-4 primary-1">
                  Remarks:
                </label>
              </div>
              <div className="col-span-2 text-center items-center flex w-full">
                <TextArea
                  containerClassname="w-full"
                  className="w-full resize-none"
                  placeholder="Say something about the animal..."
                />
              </div>
            </div>

            <div className="text-center pt-4">
              <Button onClick={handleSubmit}>Report</Button>
            </div>
          </div>
        </div>
      </MobileView>
      <div className="text-center hidden sm:block primary-1 text-xl p-4 font-bold">
        Mobile View Only
      </div>
    </PageContainer>
  );
}

export default ReportStrayPage;
