import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faLocation,
  faTimeline,
  faEye,
  faPencil,
  faTicket,
  faBuilding,
  faCircleCheck,
  faLocationDot,
  faTimes,
  faTimesCircle,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { EventTheme } from "./components/EventTheme";
import { TicketPriceModal } from "./components/TicketPriceModal";
import { TicketCapacityModal } from "./components/TicketCapacityModal";
import { EventSchedule } from "./components/EventSchedule";
import { EventOptions } from "./components/EventOptions";

export const Home = () => {
  const today = new Date().toISOString().slice(0, 16); // get today's date and time in YYYY-MM-DDTHH:MM format
  const [eventName, setEventName] = useState("");
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("unlimited");
  const [visibility, setVisibility] = useState("public");
  const [color, setColor] = useState("");
  const [typeface, setTypeface] = useState("");

  const [ticketPrice, setTicketPrice] = useState("Free");

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      eventName,
      startDate,
      endDate,
      location,
      capacity,
      visibility,
      ticketPrice,
      color,
      typeface
    };
    const events = JSON.parse(localStorage.getItem("events")) || [];
    events.push(event);
    localStorage.setItem("events", JSON.stringify(events));

    toast.success("Event created successfully!");
    // Reset form fields
    setEventName("");
    setStartDate(today);
    setEndDate(today);
    setLocation("");
    setCapacity("unlimited");
    setVisibility("public");
    setTicketPrice("Free");
    setColor("");
    setTypeface("");
  };

  return (
    <>
      <div className="flex gap-8 mb-3 w-full">
        <a href="/events">Events</a>
        <a href="/">Calendars</a>
        <a href="/">Explore</a>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full"
      >
        <div className="w-full flex gap-8 flex-wrap">
          <div className="flex flex-col gap-5 flex-1">
            {/* Event Name */}
            <div className="mb-4">
              <input
                type="text"
                id="eventName"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="w-full rounded-md placeholder:text-[1.2rem] placeholder:font-extrabold focus:outline-none"
                placeholder="Event Name"
              />
            </div>
            {/* Event Schedule */}
            <EventSchedule
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
            />
            {/* Event Location */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center justify-start items-start">
              <FontAwesomeIcon
                size="lg"
                icon={faLocationDot}
                className=" text-gray-500"
              ></FontAwesomeIcon>
              <div className="flex flex-col gap-5 mb-4 bg-gray-100 p-5 w-full">
                <div className="">
                  <label
                    htmlFor="startDate"
                    className="block font-bold mb-2 flex-1"
                  >
                    Add Event Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Offline location or virtual link"
                    className="rounded-md flex-2 border-none bg-transparent w-full focus:outline-none"
                  />
                </div>
              </div>
            </div>
            {/* Event Options */}
            <EventOptions
              ticketPrice={ticketPrice}
              capacity={capacity}
              visibility={visibility}
              setTicketPrice={setTicketPrice}
              setCapacity={setCapacity}
              setVisibility={setVisibility}
            />
          </div>
          <div className="flex-1">
            <EventTheme
              color={color}
              setColor={setColor}
              typeface={typeface}
              setTypeface={setTypeface}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
        >
          Create Event
        </button>
      </form>
    </>
  );
};
