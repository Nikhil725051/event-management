import React from 'react'
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
export const EventSchedule = ({startDate, setStartDate, endDate, setEndDate}) => {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
      <FontAwesomeIcon
        size="lg"
        icon={faCalendar}
        className=" text-gray-500 self-start sm:self-auto"
      ></FontAwesomeIcon>
      <div className="flex flex-col gap-5 mb-4 bg-gray-100 p-5 md:w-full sm:w-auto">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <label htmlFor="startDate" className="block font-bold mb-2 flex-1 sm:w-auto">
            Start
          </label>
          <input
            type="datetime-local"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 flex-2 sm:w-auto"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center">
          <label htmlFor="endDate" className="block font-bold mb-2 flex-1 sm:w-auto">
            End
          </label>
          <input
            type="datetime-local"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 flex-2 sm:w-auto"
          />
        </div>
        <div className="w-full border-t-2 bg-gray-500"></div>
        <div className="flex gap-5 items-center">
          <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
          <p>GMT +5:30 Calcutta</p>
        </div>
        <div className="w-full border-t-2 bg-gray-500"></div>
        <div className="flex gap-5 items-center">
          <FontAwesomeIcon icon={faTimeline}></FontAwesomeIcon>
          <p>Create Multi-Session Event</p>
        </div>
      </div>
    </div>
  )
}
