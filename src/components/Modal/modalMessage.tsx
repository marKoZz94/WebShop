import React, {FC, useCallback} from 'react';

// Import Styles
import H2 from '../Headings/H2';
import P from '../Paragraph';

// Modal Components
import {Modal} from '.';
import ModalClose from './ModalClose';
import ModalContainer from './ModalContainer';
import ModalBody from './ModalBody';

interface IModalSuccess {
    modal: boolean;
    closeModal: Function;
    headerText?: string;
    text?: string;
}

const ModalMessage:FC<IModalSuccess> = ({closeModal, modal, headerText, text}) => {

    const closeOnClick = useCallback(() => {
        closeModal(false);
    }, [closeModal]);

    return (
      <Modal className={modal ? 'modalOpen' : ''}>
        <ModalContainer>
          <ModalClose onClick={closeOnClick}><svg fill="none" height="24" width="24" viewBox="0 0 24 24"><path d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12 4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586 6.225 4.81Z" fill="currentColor"/></svg></ModalClose>
          <ModalBody>
            <div className="modal-button-wrapper">
              <H2>{headerText}</H2>
              <P>{text}</P>
            </div>
          </ModalBody>
        </ModalContainer>
      </Modal>
    )
}

export default ModalMessage;
