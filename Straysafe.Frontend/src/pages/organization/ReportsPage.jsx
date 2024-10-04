import React from "react";
import PageContainer from "../../components/containers/PageContainer";
import Header from "../../components/headers/Header";
import Button from "../../components/buttons/Button";
import TableView from "../../components/containers/TableView";

function ReportsPage() {
  return (
    <div>
      <PageContainer>
        <Header />
        <div className="grid grid-cols-3 h-[80vh]">
          <div className="border-r-2 border-gray-400 h-full col-span-1">
            <h1 className="text-left primary-1 text-[30px]">Reports</h1>
            <div className="w-[80%] text-center my-2">
              <Button className="w-full">Stray Pets</Button>
            </div>
            <div className="w-[80%] text-center my-2">
              <Button className="w-full bg-white border-[#1794A1] border-[1px] text-black">
                Found Pets
              </Button>
            </div>
          </div>
          <div className="h-full col-span-2">
            <div className="relative left-[50%] translate-x-[-50%] w-[80%] h-[70%]">
              <h1 className="text-xl font-bold primary-1">View: Stray Pets</h1>
              <TableView
                TableHeader={[
                  "Reported by",
                  "Animal Type",
                  "Report Date",
                  "Status",
                ]}
                TableRows={[
                  [
                    "User 1",
                    "Cat",
                    new Date().toLocaleDateString(),
                    <p
                      key={Math.random() * 999999}
                      className="bg-green-300 rounded-full p-1"
                    >
                      Reported
                    </p>,
                  ],
                  [
                    "User 1",
                    "Cat",
                    new Date().toLocaleDateString(),
                    <p
                      key={Math.random() * 999999}
                      className="bg-yellow-300 rounded-full p-1"
                    >
                      Rescued
                    </p>,
                  ],
                ]}
                actionChildren="View Report Details"
                actionClassName="border-[#1794A1] border-2 p-1 rounded-full"
              />
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}

export default ReportsPage;
