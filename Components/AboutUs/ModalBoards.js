import React from 'react';
import {Modal, ModalBody} from 'reactstrap';
import getComponentWidth from '../../componentHelpers/getComponentWidth';
import useWindowDimensions from '../../componentHelpers/getWindowDimensions';

export default function ModalBoards({
  open = false,
  toggle,
  name = '',
  photo = '',
  position = '',
  desc = '',
}) {
  const [ref1, wRef1, hRef1] = getComponentWidth();
  const [ref2, wRef2, hRef2] = getComponentWidth();
  const {md} = useWindowDimensions();
  return (
    <Modal isOpen={open} toggle={toggle} centered size="lg">
      <ModalBody>
        <div className="container">
          <div className="row">
            <div
              ref={ref1}
              style={{
                height: md ? '568px' : `300px`,
              }}
              className="col-12 col-lg-3 position-relative"
            >
              <div
                style={{
                  left: 0,
                  top: 0,
                }}
                className="position-absolute w-100 h-100"
              >
                <div className="w-100 h-100 card-modal overflow-hidden">
                  <div
                    style={{
                      height: md ? '443px' : '200px',
                    }}
                    className="w-100  bg-secondary img-cont-card-mod"
                  >
                    {photo !== '' ? <img src={photo} alt={name} /> : null}
                  </div>
                  <div
                    style={{
                      height: md ? '125px' : '100px',
                    }}
                    className="w-100 d-flex flex-column justify-content-center align-items-center"
                  >
                    <h6 className="m-0 text-center text-ar-dark">{name}</h6>
                    <p className="m-0 p-0 text-center text-ar-dark">
                      {position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div ref={ref2} className="col-12 col-lg-9">
              <article className="py-lg-0 py-3 container w-100">
                <p className="desc-card-modal text-justify w-100">{desc}</p>
              </article>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}
