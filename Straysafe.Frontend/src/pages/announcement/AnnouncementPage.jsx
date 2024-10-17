import React, { useEffect, useState } from "react";
import PageContainer from "../../components/containers/PageContainer";
import Header from "../../components/headers/Header";
import Button from "../../components/buttons/Button";
import AnnouncementCard from "../../components/cards/AnnouncementCard";
import { AnnouncementData } from "../../components/utilities/models/AnnouncementData";
import AddOrEditAnnouncementModal from "../../components/modals/AddOrEditAnnouncementModal";
import { GetAllAnnouncements } from "../../components/utilities/services/DataHandler";

function AnnouncementPage() {
  const [showModal, setShowModal] = useState(false);
  const [announcementData, setAnnouncementData] = useState(null);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
    (async () => {
      const announcements = await GetAllAnnouncements();
      setAnnouncements(announcements);
    })();
  };

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
          refresh={refresh}
        />
      )}
      <PageContainer className={`${showModal && "blur-sm"}`}>
        <Header />
        <h1 className="text-[30px] primary-1 font-bold my-4">Announcements</h1>
        <div className="text-right w-100 hidden sm:block">
          <Button onClick={handleShowModal}>Add an Announcement</Button>
        </div>
        <div className="relative w-[95%] md:w-[80%] left-[50%] translate-x-[-50%] my-8">
          {announcements.map((announcement) => {
            return (
              <AnnouncementCard
                AnnouncementData={announcement}
                key={announcement.id}
                actionCallback={handleEditAnnouncement}
                editable
              />
            );
          })}
        </div>
      </PageContainer>
    </>
  );
}

export default AnnouncementPage;
