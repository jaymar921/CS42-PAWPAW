import React, { useEffect, useState } from "react";
import Header from "../../components/headers/Header";
import PageContainer from "../../components/containers/PageContainer";
import CardContainer from "../../components/containers/CardContainer";
import AdoptPetCard from "../../components/cards/AdoptPetCard";
import { RedirectTo } from "../../components/utilities/PageUtils";
import {
  ApplicationConstants,
  AuthConstants,
} from "../../contants/ApplicationConstants";
import Button from "../../components/buttons/Button";
import { GetProfileInformation } from "../../components/utilities/services/AuthenticationHandler";
import {
  GetUserPreference,
  HasUserPreference,
  RetrieveReports,
} from "../../components/utilities/services/DataHandler";
import UserPreferenceModal from "../../components/modals/UserPreferenceModal";

function PetAdoptionPage() {
  const [petsForAdoption, setPetsForAdoption] = useState([]);
  const [showPreferenceModal, setShowPreferenceModal] = useState(false);

  useEffect(() => {
    const userData = GetProfileInformation();
    if (!userData) return;

    if (userData.role !== AuthConstants.ROLE_STRAYVER) return;

    async function checkHasPreference() {
      let hasPreference = await HasUserPreference(userData.id);

      // if no preference is set, set it
      setShowPreferenceModal(!hasPreference);
    }

    setTimeout(checkHasPreference, 1_000);
  }, []);

  useEffect(() => {
    async function API_CALL() {
      const data = await RetrieveReports();
      const filtered = data.filter((d) => d.status.toLowerCase() === "posted");
      filterByPreference(filtered);
    }

    API_CALL();
  }, []);

  const filterByPreference = async (filteredData) => {
    const userData = GetProfileInformation();
    if (!userData) {
      setPetsForAdoption(filteredData);
      return;
    }

    const hasPreference = await HasUserPreference(userData.id);

    if (!hasPreference) {
      setPetsForAdoption(filteredData);
      return;
    }

    const preference = await GetUserPreference(userData.id);

    let match = [];
    for (let preferStr of preference.split(" ")) {
      for (let report of filteredData) {
        if (
          JSON.stringify(report)
            .toLowerCase()
            .includes(preferStr.toLowerCase()) &&
          !match.includes(report)
        ) {
          report.prefered = true;
          match.push(report);
        }
      }
    }

    // add reports to match
    for (let report of filteredData) {
      if (!match.includes(report)) match.push(report);
    }
    setPetsForAdoption(match);
  };
  return (
    <div>
      <Header />
      <PageContainer>
        {showPreferenceModal && (
          <UserPreferenceModal
            onClose={() => {
              setShowPreferenceModal(false);
            }}
          />
        )}
        <h1 className="text-[30px] primary-1 font-bold my-4 px-4">
          Adopt a Pet
        </h1>
        <div className={`relative w-100 flex justify-end m-4`}>
          {GetProfileInformation()?.role ===
            AuthConstants.ROLE_ORGANIZATION && (
            <div>
              <Button
                className="fa-solid fa-plus w-[60px]"
                onClick={() => {
                  RedirectTo(ApplicationConstants.ROUTE_ADD_PET_FOR_ADOPTION);
                }}
              />
            </div>
          )}
        </div>
        <CardContainer>
          {petsForAdoption.map((petData) => (
            <AdoptPetCard
              key={petData.id}
              source={petData.id}
              prefered={petData.prefered}
              petData={petData}
              onClick={() => {
                RedirectTo(
                  ApplicationConstants.ROUTE_VIEW_PET_PROFILE(petData.id)
                );
              }}
            />
          ))}
        </CardContainer>
      </PageContainer>
    </div>
  );
}

export default PetAdoptionPage;
