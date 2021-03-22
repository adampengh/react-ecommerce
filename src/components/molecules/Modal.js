import React, { useState } from 'react';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

const Modal = (props) => {
    const [showModal, setShowModal] = useState(true);

    if (!showModal) {
        return (<></>);
    } else {
        return (
            <div className="modal">
                <div className="modal__overlay"></div>
                <div className="modal__content">
                    <button className="modal__close-btn" onClick={() => setShowModal(false)}>
                        <CloseIcon />
                    </button>
                    <div className="modal__inner">
                        <header className="modal__header">
                            <p>Header</p>
                        </header>
                        <div className="modal__body">
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                            <p>Body</p>
                        </div>
                        <footer className="modal__footer">
                            <p>Footer</p>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;
