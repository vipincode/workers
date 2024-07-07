# Docs

# How to use modal

```jsx
import ServicesModal from "./modals";
import { useRef } from "react";

const VCard = () => {
  const modalRef = useRef < HTMLDialogElement > null;

  const handleActiveModal = () => {
    modalRef.current?.showModal();
  };

  return (
    <div className="max-w-sm" onClick={handleActiveModal}>
      <ServicesModal ref={modalRef} title="Hello!">
        <p>Press ESC key or click on ✕ button to close</p>
      </ServicesModal>
    </div>
  );
};

export default VCard;
```
