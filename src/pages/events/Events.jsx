import React, { useState } from "react";

const Events = () => {
  const events = localStorage.getItem("events")
    ? JSON.parse(localStorage.getItem("events"))
    : [];
  const [activeTab, setActiveTab] = useState("upcoming");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const participants = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
    },
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
    },
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
    },
  ];
  return (
    <div className="w-full">
      {/*Tabs*/}
      <div className="w-full flex justify-between items-center">
        <h1 className="mb-5 text-6xl">Events</h1>
        <ul
          className="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60"
          data-tabs="tabs"
          role="list"
        >
          <li
            className={`z-30 flex-auto text-center p-2 rounded-lg ${
              activeTab === "upcoming" ? "bg-white" : ""
            }`}
          >
            <a
              className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit ${
                activeTab === "upcoming" ? "text-blue-700" : "text-slate-700"
              }`}
              onClick={() => handleTabClick("upcoming")}
              role="tab"
              aria-selected={activeTab === "upcoming" ? "true" : "false"}
              aria-controls="upcoming"
            >
              <span className="ml-1">Upcoming</span>
            </a>
          </li>
          <li
            className={`z-30 flex-auto text-center p-2 rounded-lg ${
              activeTab === "past" ? "bg-white" : ""
            }`}
          >
            <a
              className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit ${
                activeTab === "past" ? "text-blue-700" : "text-slate-700"
              }`}
              onClick={() => handleTabClick("past")}
              role="tab"
              aria-selected={activeTab === "past" ? "true" : "false"}
              aria-controls="past"
            >
              <span className="ml-1">Past</span>
            </a>
          </li>
        </ul>
      </div>
      {/*Events*/}
      {events.map((event, i) => {
        return (
          <div key={i} className="flex gap-x-3">
            <div className="w-16 text-end">
              <span className="text-sm text-gray-500 dark:text-gray-400 font-bold">
                {new Date(event.startDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  weekday: "short",
                })}
              </span>
            </div>

            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
              <div className="relative z-10 size-7 flex justify-center items-center">
                <div className="size-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
              </div>
            </div>

            <div className="grow pt-0.5 pb-8">
              <div className="p-4 bg-white flex w-full justify-between gap-10 flex-wrap">
                <div className="flex-2">
                  {" "}
                  <p className="text-sm text-gray-400">
                    {new Date(event.startDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      weekday: "short",
                    })}
                  </p>
                  <div className="mt-2">
                    <h3 className="text-lg font-medium">{event.eventName}</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-sm mr-2">By OctoML</span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-gray-200 text-gray-500">
                        Virtual
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <span className="text-sm bg-blue-600 rounded-lg px-3 py-1 text-white">
                      Invited
                    </span>
                    <div className="flex">
                      {participants.map((participant, i) => {
                        return (
                          <img
                            src={participant.img}
                            key={i}
                            className="w-8 h-8 rounded-full ml-2 object-cover relative right-0 top-0"
                          />
                        );
                      })}
                      +126
                    </div>
                  </div>
                </div>

               <div className=" min-w-min max-w-80">
                 <img
                   className="rounded-lg object-cover w-full h-full"
                   src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 ></img>
               </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Events;
