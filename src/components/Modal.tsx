import React, { ReactNode } from "react";
import { XIcon } from "@heroicons/react/outline";

interface ModalProps {
  title: string;
  children: ReactNode;
  handleCloseModal: () => void;
  isOpen?: boolean;
  mode?: "fullscreen" | "center";
}

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  handleCloseModal,
  mode = "fullscreen",
  isOpen = true,
}) => {
  return (
    <>
      {isOpen && (
        <div className="bg-black/60 fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
          <div
            className={`${
              mode === "fullscreen" ? "w-full h-full" : "w-[80%] max-h-max"
            } shadow relative lg:w-[30rem] lg:h-max`}
          >
            <div className="absolute top-0 left-0 w-full bg-primary p-3 flex items-center justify-between text-white">
              <div>{title}</div>
              <XIcon
                className="w-5 h-5 cursor-pointer font-bold"
                onClick={handleCloseModal}
              />
            </div>
            <div className="bg-white w-full h-full ">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
