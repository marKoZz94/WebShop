import React, {FC, useCallback} from 'react';

// Modal
import {Modal, ModalBtns} from '.';
import ModalClose from './ModalClose';
import ModalContainer from './ModalContainer';
import ModalBody from './ModalBody';

interface IModalSuccess {
    modal: boolean;
    closeModal: any;
    areYouSure?: any;
    text?: string;
    confirmButton?: string;
    closeButton?: string;
}

const ModalDelete: FC<IModalSuccess> = ({closeModal, modal, areYouSure, text, confirmButton, closeButton}) => {

    // close
    const closeOnClick = useCallback(() => {
        closeModal(false);
    }, [closeModal]);

    // confirm
    const confirmation = useCallback(() => {
      closeModal(false);
      areYouSure(true);
    }, [closeModal, areYouSure]);

    return (
      <Modal className={modal ? 'modalOpen' : ''}>
        <ModalContainer>
          <ModalClose onClick={closeOnClick}><svg fill="none" height="24"  viewBox="0 0 24 24" width="24"><path d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12 4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586 6.225 4.81Z" fill="currentColor"/></svg></ModalClose>
          <ModalBody>
            <div className="u-text-center">
              <h3>{text}</h3>
              <ModalBtns>
                <div className="modal-button-wrapper">
                  <button className="button button--primary" onClick={confirmation}>{confirmButton}</button>
                  <button className="button button--secondary" onClick={closeOnClick}>{closeButton}</button>
                </div>
              </ModalBtns>
            </div>
          </ModalBody>
        </ModalContainer>
      </Modal>
    )
}

export default ModalDelete;
