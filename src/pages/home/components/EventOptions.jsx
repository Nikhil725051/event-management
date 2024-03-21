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
import { TicketPriceModal } from "./TicketPriceModal";
import { TicketCapacityModal } from "./TicketCapacityModal";
export const EventOptions = ({
  visibility,
  setVisibility,
  ticketPrice,
  setTicketPrice,
  capacity,
  setCapacity,
}) => {
    const [showTicketPriceModal, setShowTicketPriceModal] = useState(false);
    const [showCapacityModal, setShowCapacityModal] = useState(false);
  return (
    <div className="flex flex-col gap-5 mb-4 bg-gray-100 p-5 w-full">
      <div className="flex gap-10 items-center justify-between">
        <label htmlFor="capacity" className="text-gray-700 mr-2">
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> Visibility
        </label>
        <select
          id="visibility"
          value={visibility}
          onChange={(e) => setVisibility(e.target.value)}
          className=" rounded-md py-2 px-3 focus:outline-none bg-transparent"
        >
          <option value="unlimited">Public</option>
          <option value="limited">Private</option>
        </select>
      </div>

      <div className="w-full border-t-2 bg-gray-500"></div>
      <div className="flex gap-10 items-center justify-between">
        <label htmlFor="tickets" className="text-gray-700 mr-2">
          <FontAwesomeIcon icon={faTicket}></FontAwesomeIcon> Tickets
        </label>
        <span>
          {ticketPrice}{" "}
          <FontAwesomeIcon
            onClick={() => setShowTicketPriceModal(true)}
            icon={faPencil}
            className="cursor-pointer"
          ></FontAwesomeIcon>
        </span>
      </div>
      <div className="w-full border-t-2 bg-gray-500"></div>
      <div className="flex gap-10 items-center justify-between">
        <label htmlFor="tickets" className="text-gray-700 mr-2">
          <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon> Capacity
        </label>
        <span>
          {capacity}{" "}
          <FontAwesomeIcon
            className="cursor-pointer"
            onClick={() => setShowCapacityModal(true)}
            icon={faPencil}
          ></FontAwesomeIcon>
        </span>
      </div>
      <div className="w-full border-t-2 bg-gray-500"></div>
      <div className="flex gap-10 items-center justify-between">
        <label htmlFor="tickets" className="text-gray-700 mr-2">
          <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon> Require
          Approval
        </label>

        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={(e) => setRequireApproval(e.target.checked)}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
      {/* Ticket price modal */}
      <TicketPriceModal
        ticketPrice={ticketPrice}
        setTicketPrice={setTicketPrice}
        showTicketPriceModal={showTicketPriceModal}
        setShowTicketPriceModal={setShowTicketPriceModal}
      />
      {/* Ticket capacity modal */}
      <TicketCapacityModal
        capacity={capacity}
        setCapacity={setCapacity}
        showCapacityModal={showCapacityModal}
        setShowCapacityModal={setShowCapacityModal}
      />
    </div>
  );
};
