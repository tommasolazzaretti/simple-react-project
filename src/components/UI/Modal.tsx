import React from "react";
import css from '../../styles/Modal.module.css';

interface ModalProps {
    isOpen: boolean;
    children: any;
}

export default function Modal({isOpen, children}: ModalProps) {
    return (
        <div
            className={css.modalWrapper}
            style={{display: isOpen ? 'block' : 'none'}}
        >
            <div className={css.modalContent}>
                {children}
            </div>
        </div>
    )
}