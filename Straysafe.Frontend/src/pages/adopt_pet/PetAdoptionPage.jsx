import React from "react";
import Header from "../../components/headers/Header";
import PageContainer from "../../components/containers/PageContainer";
import CardContainer from "../../components/containers/CardContainer";
import AdoptPetCard from "../../components/cards/AdoptPetCard";
import { RedirectTo } from "../../components/utilities/PageUtils";
import { ApplicationConstants } from "../../contants/ApplicationConstants";

function PetAdoptionPage() {
  return (
    <div>
      <Header />
      <PageContainer>
        <h1 className="text-[30px] primary-1 font-bold my-4">Adopt a Pet</h1>
        <CardContainer>
          <AdoptPetCard
            onClick={() => {
              RedirectTo(ApplicationConstants.ROUTE_VIEW_PET_PROFILE("1"));
            }}
          />
          <AdoptPetCard
            onClick={() => {
              RedirectTo(ApplicationConstants.ROUTE_VIEW_PET_PROFILE("1"));
            }}
          />
          <AdoptPetCard
            onClick={() => {
              RedirectTo(ApplicationConstants.ROUTE_VIEW_PET_PROFILE("1"));
            }}
          />
          <AdoptPetCard
            onClick={() => {
              RedirectTo(ApplicationConstants.ROUTE_VIEW_PET_PROFILE("1"));
            }}
          />
        </CardContainer>
      </PageContainer>
    </div>
  );
}

export default PetAdoptionPage;
