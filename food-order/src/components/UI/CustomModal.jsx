import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function CustomModal({children, open, className = '' }) {
    const modalRef = useRef(null);
    useEffect(() => {
        if (open) {
            modalRef.current.showModal();
        }
    }, [open])
    return createPortal((
        <dialog ref={modalRef} className={`modal ${className}`}>{ children }</dialog>
    ), document.getElementById('modal'));
}