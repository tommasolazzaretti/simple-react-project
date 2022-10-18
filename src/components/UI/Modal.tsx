import React from "react";
import css from '../../styles/Modal.module.css';

interface ModalProps {
    isOpen: boolean;
    children: any;
    onContinue: () => void;
    onClose: () => void;
}

export default function Modal({isOpen, children, onContinue, onClose}: ModalProps) {
    return (
        <div
            className={css.modalWrapper}
            style={{display: isOpen ? 'block' : 'none'}}
        >
            <div className={css.modalContent}>
                {children}

                <div className="row fixed-bottom p-5">
                    <div className="col-auto">
                        <button className="btn btn-primary" onClick={() => onContinue()}>Continue</button>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-warning" onClick={() => onClose()}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}