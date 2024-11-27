import React, { useState } from "react";
import PageContainer from "../../components/containers/PageContainer";
import Header from "../../components/headers/Header";
import Button from "../../components/buttons/Button";
import StrayView from "./views/StrayView";
import InformationReportView from "./views/InformationReportView";
import FoundView from "./views/FoundView";
import LostView from "./views/LostView";
import PostedView from "./views/PostedView";
import { useParams, useSearchParams } from "react-router-dom";
import HistoryView from "./views/HistoryView";

function View({ view, data, setView, setData }) {
  if (view === "stray")
    return <StrayView setView={setView} setData={setData} />;
  if (view === "info") return <InformationReportView data={data} view={view} />;
  if (view === "found")
    return <FoundView setView={setView} setData={setData} />;
  if (view === "lost") return <LostView setView={setView} setData={setData} />;
  if (view === "posted")
    return <PostedView setView={setView} setData={setData} />;
  if (view === "history")
    return <HistoryView setView={setView} setData={setData} />;
  return <></>;
}

function btnActive(name, view, param = "") {
  if (view === name || param === name)
    return "w-full text-white bg-primary-1 border-[1px] rounded-lg font-bold";
  return "w-full bg-white border-[#1794A1] border-[1px] rounded-lg font-bold";
}
function ReportsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [view, setView] = useState(searchParams.get("v") ?? "stray");
  const [data, setData] = useState(null);

  return (
    <div>
      <PageContainer>
        <Header />
        <div className="grid grid-cols-3 h-[80vh]">
          <div className="border-r-2 border-gray-400 h-full col-span-1">
            <h1 className="text-left primary-1 text-[30px]">Reports</h1>
            <div className="w-[80%] text-center my-2">
              <Button
                className={btnActive("stray", view, searchParams.get("v"))}
                onClick={() => {
                  setView("stray");
                  searchParams.set("v", "stray");
                  setSearchParams(searchParams);
                }}
                default
              >
                Stray Pets
              </Button>
            </div>
            <div className="w-[80%] text-center my-2 text-black">
              <Button
                className={btnActive("lost", view, searchParams.get("v"))}
                onClick={() => {
                  setView("lost");
                  searchParams.set("v", "lost");
                  setSearchParams(searchParams);
                }}
                default
              >
                Lost Pets
              </Button>
            </div>
            <div className="w-[80%] text-center my-2 text-black">
              <Button
                className={btnActive("found", view, searchParams.get("v"))}
                onClick={() => {
                  setView("found");
                  searchParams.set("v", "found");
                  setSearchParams(searchParams);
                }}
                default
              >
                Found Pets
              </Button>
            </div>
            <div className="w-[80%] text-center my-2 text-black">
              <Button
                className={btnActive("posted", view, searchParams.get("v"))}
                onClick={() => {
                  setView("posted");
                  searchParams.set("v", "posted");
                  setSearchParams(searchParams);
                }}
                default
              >
                Posted to Adoption
              </Button>
            </div>
            <div className="w-[80%] text-center my-2 text-black">
              <Button
                className={btnActive("history", view, searchParams.get("v"))}
                onClick={() => {
                  setView("history");
                  searchParams.set("v", "history");
                  setSearchParams(searchParams);
                }}
                default
              >
                History
              </Button>
            </div>
          </div>
          {/* Display view */}
          {View({ view, setView: setView, data, setData })}
        </div>
      </PageContainer>
    </div>
  );
}

export default ReportsPage;
