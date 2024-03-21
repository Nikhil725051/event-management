import React from "react";
import Modal from "../../../common/components/Modal";

export const TicketPriceModal = ({
  showTicketPriceModal,
  setShowTicketPriceModal,
  ticketPrice,
  setTicketPrice,
}) => {
  return (
    <Modal
      showModal={showTicketPriceModal}
      setShowModal={setShowTicketPriceModal}
    >
      <div className="mb-5">
        <h1 className="text-center mb-5">Set Ticket Price</h1>
        <input
          type="text"
          id="ticketPrice"
          onChange={(e) => setTicketPrice(`Rs ${e.target.value}/ticket`)}
          placeholder="Enter price per ticket"
          className=" p-3 rounded-md flex-2 border-none bg-transparent w-full outline"
        />
      </div>
    </Modal>
  );
};
