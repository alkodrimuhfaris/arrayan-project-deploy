import React from 'react';
import {Modal, ModalBody, Button} from 'reactstrap';
import Icon from './Icons/index';

export default function ModalConfirm({
  modalOpen = false,
  setModalOpen = () => {},
  clearFunction = () => {},
  content = () => <text>Are you sure want to continue</text>,
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
          <text className="font-weight-bold h5">{title}</text>
        </div>
        <div className="text-center">{content()}</div>
        <div className="d-flex my-3 justify-content-around">
          <Button
            color="success"
            outline
            onClick={(e) => doConfirm(e)}
            className="rounded-pill px-4 border-0"
          >
            <text className="border-bottom">{confirmTxt}</text>
          </Button>
          {useOneBtn ? null : (
            <Button
              color="danger"
              outline
              onClick={(e) => doCancel(e)}
              className="rounded-pill px-4 border-0"
            >
              <text className="border-bottom">{closeTxt}</text>
            </Button>
          )}
        </div>
      </ModalBody>
    </Modal>
  );
}
