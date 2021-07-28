import React from 'react';
import {Modal, ModalBody, Button} from 'reactstrap';
import Icon from './Icons/index';

export default function ModalConfirm({
  modalOpen = false,
  setModalOpen = () => {},
  clearFunction = () => {},
  content = () => <p>Are you sure want to continue</p>,
  confirm = () => {},
  confirmTxt = 'Ya',
  close = () => {},
  closeTxt = 'Tidak',
  useOneBtn = false,
  icon = 'info',
  title = 'Warning!',
}) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(modalOpen);
  }, [modalOpen]);

  const doConfirm = (e) => {
    e.preventDefault();
    confirm();
    setOpen(false);
    setModalOpen(false);
    clearFunction();
  };

  const doCancel = (e) => {
    e.preventDefault();
    close();
    setOpen(false);
    setModalOpen(false);
    clearFunction();
  };

  return (
    <Modal className="kumbh-sans" isOpen={open}>
      <ModalBody>
        <div className="text-center my-3">
          <div className="py-2">
            <Icon icon={icon} />
          </div>
        </div>
        <div className="text-center my-3">
          <p className="font-weight-bold h5">{title}</p>
        </div>
        <div className="text-center">{content()}</div>
        <div className="d-flex my-3 justify-content-around">
          <Button
            color="success"
            outline
            name="confirm-modal"
            onClick={(e) => doConfirm(e)}
            className="rounded-pill px-4 border-0"
          >
            <p className="border-bottom">{confirmTxt}</p>
          </Button>
          {useOneBtn ? null : (
            <Button
              color="danger"
              name="close-modal"
              outline
              onClick={(e) => doCancel(e)}
              className="rounded-pill px-4 border-0"
            >
              <p className="border-bottom">{closeTxt}</p>
            </Button>
          )}
        </div>
      </ModalBody>
    </Modal>
  );
}
