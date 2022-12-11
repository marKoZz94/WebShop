import React, {FC, useCallback} from 'react';

// Modal
import {Modal, ModalBtns} from '.';
import ModalClose from './ModalClose';
import ModalContainer from './ModalContainer';
import ModalBody from './ModalBody';

// Styles
import H2 from '../Headings/H2';

// Messages
import { FormattedMessage } from 'react-intl';
import generalMessages from '../../containers/generalMessages';
import styled from 'styled-components';

interface SuccessModal {
    modalAction: any;
    confirmButtonText: string;
    cancelButtonText: string;
    stateModal: boolean;
    areYouSure: any;
    text?: string;
}

const AreYouSureModal: FC<SuccessModal> = ({modalAction, stateModal, confirmButtonText, cancelButtonText, areYouSure, text}) => {

    const closeOnClick = useCallback(() => {
        modalAction(false)
        areYouSure(false)
    }, [areYouSure, modalAction]);

    const confirmOnClick = useCallback(() => {
        modalAction(false);
        areYouSure(true);
    }, [areYouSure, modalAction]);

    return (
        <Modal className={stateModal ? 'modalOpen' : ''}>
            <ModalContainer>
              <ModalClose onClick={closeOnClick}><svg fill="none" viewBox="0 0 24 24" height="24" width="24"><path d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12 4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586 6.225 4.81Z" fill="currentColor"/></svg></ModalClose>
              <ModalBody>
                <div className="u-text-center">
                  <H2><small>{text}</small></H2>
                  <ModalBtns>
                    <div className="modal-button-wrapper">
                        <Button onClick={confirmOnClick}>{confirmButtonText}</Button>
                        <Button onClick={closeOnClick}>{cancelButtonText}</Button>
                    </div>
                  </ModalBtns>
                </div>
              </ModalBody>
            </ModalContainer>
        </Modal>
    )
}

const Button = styled.button`
`;


export default AreYouSureModal;
