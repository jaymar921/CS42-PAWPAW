import React, { useState } from "react";
import Input from "../formElements/Input";
import Button from "../buttons/Button";
import { SaveUserPreference } from "../utilities/services/DataHandler";
import { GetProfileInformation } from "../utilities/services/AuthenticationHandler";

function UserPreferenceModal({
  onClose = () => {},
  preferenceValue = "",
  isUpdate = false,
  callBack = () => {},
}) {
  const [userPreference, setUserPreference] = useState(preferenceValue);
  const [SpaceSeparatedPreference, SetSpaceSeparatedPreference] = useState([
    ...preferenceValue.split(" "),
  ]);

  function UpdateSpaceSeparatedPreference(v) {
    var arr = v.split(" ");

    if (v !== "") SetSpaceSeparatedPreference(arr);
    else SetSpaceSeparatedPreference([]);
  }

  function SavePreference() {
    if (userPreference.trim() === "") {
      alert("Please enter something");
      return;
    }

    SaveUserPreference({
      userId: GetProfileInformation().id,
      spaceSeparatedPreference: userPreference,
    });
    alert("User preference saved. Thank you.");
    onClose();
    callBack();
  }
  return (
    <div className="absolute w-full h-full z-[99999]">
      <div className="relative left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] border-2 border-gray-200 w-fit w-max-[450px] p-2 rounded-lg shadow-lg bg-white">
        <h2 className="primary-1 text-xl font-bold">
          {isUpdate
            ? "Update your preference"
            : "Hi there! Can you share what you prefer?"}
        </h2>
        <p className="text-sm my-2">
          It would ease up our way of finding you the best result when looking
          for a pet
        </p>
        <Input
          containerClassname="relative w-full"
          className="w-100"
          placeholder="Write something separated in space..."
          set={(v) => {
            setUserPreference(v);
            UpdateSpaceSeparatedPreference(v.trim());
          }}
          value={userPreference}
        />
        {userPreference !== "" && (
          <div className="my-2">
            <p>You like: </p>
            <div className="grid grid-cols-5">
              {SpaceSeparatedPreference.map((v, i) => {
                return (
                  <p
                    className="p-1 border-[1px] border-orange-400 bg-orange-200 w-fit rounded-lg m-1"
                    key={i}
                  >
                    {v}
                  </p>
                );
              })}
            </div>
          </div>
        )}
        <div className="mt-2 text-center">
          <Button className="mr-1" onClick={SavePreference}>
            Save
          </Button>
          <Button className="ml-1 bg-red-400" onClick={onClose}>
            Next time
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserPreferenceModal;
