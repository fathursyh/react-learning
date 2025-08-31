import { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { UserProgressContext } from "../../store/UserProgressContext";

export default function CustomModal({ children, open, className = "" }) {
  const modalRef = useRef(null);
  const { hideCart } = useContext(UserProgressContext);
  useEffect(() => {
    const modal = modalRef.current;
    if (open) {
      modal.showModal();
    }
    return () => modal.close();
  }, [open]);
  return createPortal(
    <dialog ref={modalRef} className={`modal ${className}`} onClose={hideCart} onClick={(e) => e.target.close()}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </dialog>,
    document.getElementById("modal")
  );
}
