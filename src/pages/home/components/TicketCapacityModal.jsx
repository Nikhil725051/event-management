import React from "react";
import Modal from "../../../common/components/Modal";

export const TicketCapacityModal = ({
  showCapacityModal,
  setShowCapacityModal,
  Capacity,
  setCapacity,
}) => {
  return (
    <Modal
      showModal={showCapacityModal}
      setShowModal={setShowCapacityModal}
    >
      <div className="mb-5">
        <h1 className="text-center mb-5">Set Capacity</h1>
        <input
          type="text"
          id="capacity"
          onChange={(e) => setCapacity(`${e.target.value}`)}
          placeholder="Enter capacity"
          className=" p-3 rounded-md flex-2 border-none bg-transparent w-full outline"
        />
      </div>
    </Modal>
  );
};
