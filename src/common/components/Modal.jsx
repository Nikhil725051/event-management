import React, { useState } from "react";

const Modal = ({ showModal, setShowModal, children }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-8 max-w-md mx-auto">
              {children}
              <div className="flex justify-end">
                <button
                  className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => setShowModal(false)}
                >
                  Done
                </button>
              
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
