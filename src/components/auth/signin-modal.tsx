import { IoMdClose } from "react-icons/io";
import { useModalStore } from "../../store/modal-store";
import SignIn from "./sign-in";

const SignInModal = () => {
  const { isOpen, closeModal } = useModalStore();

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`} onClick={() => closeModal()}>
      <div className="modal-box relative" onClick={(e) => e.stopPropagation()}>
        <div className="w-full flex justify-center items-center">
          <SignIn className="shadow-none" />
        </div>
        <div className="modal-action absolute top-0 right-2">
          <button className="btn btn-link" onClick={closeModal}>
            <IoMdClose size={21} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
