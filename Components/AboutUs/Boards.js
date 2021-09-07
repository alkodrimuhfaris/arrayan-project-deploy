import React from 'react';
import getComponentWidth from '../../componentHelpers/getComponentWidth';
import ModalBoards from './ModalBoards';
import {boards, desc} from '../../lib/dto';
import BoardCard from './BoardCard';

export default function Boards() {
  const [ref1, wRef1, hRef2] = getComponentWidth();

  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedBoard, setSelectedBoard] = React.useState({
    name: '',
    position: '',
    photo: '',
    desc: '',
    experience: () => {},
  });
  const [selected, setSelected] = React.useState(0);
  const toggle = () => setModalOpen((x) => !x);
  const selectBoard = (val) => {
    setSelectedBoard({
      ...boards[val],
      desc: desc[val],
    });
  };

  return (
    <div className="boards my-3 my-md-5">
      <ModalBoards
        experience={selected}
        open={modalOpen}
        toggle={toggle}
        {...selectedBoard}
      />
      <div className="container">
        <div className="row">
          <div className="col-12 mb-3 d-flex align-items-center justify-content-center title">
            <h1>Our Board</h1>
          </div>
        </div>
        <div className="row">
          {boards.map((val, idx) => {
            const {name, position, photo} = val;
            const boardProps = {
              idx,
              ref1,
              wRef1,
              setSelected,
              selectBoard,
              toggle,
              name,
              photo,
              position,
            };
            return <BoardCard {...boardProps} />;
          })}
        </div>
      </div>
    </div>
  );
}
