import React, { useState } from "react";
import PageContainer from "../../components/containers/PageContainer";
import Header from "../../components/headers/Header";
import Button from "../../components/buttons/Button";
import AnnouncementCard from "../../components/cards/AnnouncementCard";
import { AnnouncementData } from "../../components/utilities/models/AnnouncementData";
import AddOrEditAnnouncementModal from "../../components/modals/AddOrEditAnnouncementModal";

function AnnouncementPage() {
  const [showModal, setShowModal] = useState(false);
  const [announcementData, setAnnouncementData] = useState(null);

  const handleShowModal = () => {
    setAnnouncementData(null);
    setShowModal(!showModal);
  };

  const handleEditAnnouncement = (a_data) => {
    setAnnouncementData(a_data);
    setShowModal(true);
  };
  return (
    <>
      {showModal && (
        <AddOrEditAnnouncementModal
          showOrClose={handleShowModal}
          announcementData={announcementData}
        />
      )}
      <PageContainer className={`${showModal && "blur-sm"}`}>
        <Header />
        <h1 className="text-[30px] primary-1 font-bold my-4">Announcements</h1>
        <div className="text-right w-100">
          <Button onClick={handleShowModal}>Add an Announcement</Button>
        </div>
        <div className="relative w-[95%] md:w-[80%] left-[50%] translate-x-[-50%] my-8">
          <AnnouncementCard
            AnnouncementData={
              new AnnouncementData({
                title: "🐾 Join Us for our annual adoption day! 🐾",
                imageSrc:
                  "https://i2.wp.com/www.smokeybarn.com/wp-content/uploads/2014/05/Pet-adoption-Day-slider.png",
                location: "Tabunok, Talisay City, Cebu, 6045",
                content:
                  "Come meet our furry friends looking for forever homes! Enjoy family-friendly activities, pet adtoption specials, and refreshments. Let's find perfect families!",
              })
            }
            editable
            actionCallback={handleEditAnnouncement}
          />
        </div>
      </PageContainer>
    </>
  );
}

export default AnnouncementPage;
