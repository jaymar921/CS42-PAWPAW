import React, { useState } from "react";
import Input from "../../../components/formElements/Input";
import PageContainer from "../../../components/containers/PageContainer";
import Button from "../../../components/buttons/Button";
import VerifyAccountModal from "../../../components/modals/VerifyAccountModal";

function UsersDashboard() {
  const [showVerifyAccountModal, setShowVerifyAccountModal] = useState(false);

  const showModal = () => {
    setShowVerifyAccountModal(!showVerifyAccountModal);
  };

  return (
    <div>
      <VerifyAccountModal
        showModal={showVerifyAccountModal}
        closeModal={showModal}
      />
      <PageContainer
        className={`${
          showVerifyAccountModal && "blur-sm"
        }  transition-all duration-200 z-20`}
      >
        <div className="grid grid-cols-4 items-center my-8">
          <h3 className="col-span-1 text-[25px] primary-1 font-bold">Users</h3>
          <div />
          <div className="col-span-2">
            <Input
              containerClassname="w-max-[400px] w-min-[200px] w-[400px]"
              type="text"
              placeholder="Search for something..."
              icon={"fa-solid fa-magnifying-glass"}
              iconClicked={() => {
                alert("search");
              }}
            />
          </div>
        </div>
        <div className="w-100 text-right">
          <Button className="text-sm" onClick={showModal}>
            Verify Accounts
          </Button>
        </div>
        <div className="w-100 my-8">
          <table className="w-full table-auto text-center">
            <thead>
              <tr>
                <th>User Type</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-gray-100 even:bg-white">
                <td>Strayver</td>
                <td>Jay</td>
                <td>jay@email.co</td>
                <td>09123123456</td>
                <td>Talisay</td>
                <td>
                  <Button icon="fa-solid fa-gear" default></Button>
                </td>
              </tr>
              <tr className="odd:bg-gray-100 even:bg-white">
                <td>Strayver</td>
                <td>Jay</td>
                <td>jay@email.co</td>
                <td>09123123456</td>
                <td>Talisay</td>
                <td>
                  <Button icon="fa-solid fa-gear" default></Button>
                </td>
              </tr>
              <tr className="odd:bg-gray-100 even:bg-white">
                <td>Strayver</td>
                <td>Jay</td>
                <td>jay@email.co</td>
                <td>09123123456</td>
                <td>Talisay</td>
                <td>
                  <Button icon="fa-solid fa-gear" default></Button>
                </td>
              </tr>
              <tr className="odd:bg-gray-100 even:bg-white">
                <td>Strayver</td>
                <td>Jay</td>
                <td>jay@email.co</td>
                <td>09123123456</td>
                <td>Talisay</td>
                <td>
                  <Button icon="fa-solid fa-gear" default></Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageContainer>
    </div>
  );
}

export default UsersDashboard;
