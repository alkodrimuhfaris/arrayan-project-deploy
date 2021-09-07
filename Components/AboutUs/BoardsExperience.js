import React from 'react';
import AsmatAminExp from './BoardsExperience/AsmatAminExp';
import AstiBExp from './BoardsExperience/AstiBExp';
import HengkiExp from './BoardsExperience/HengkiExp';
import RachmatExp from './BoardsExperience/RachmatExp';

export default function BoardsExperience({selectedBoards = 0}) {
  const AsmatAmin = () => <AsmatAminExp />;

  const HengkiS = () => <HengkiExp />;

  const RachmatW = () => <RachmatExp />;

  const AstiB = () => <AstiBExp />;

  const Experience = [AsmatAmin, HengkiS, RachmatW, AstiB];

  return Experience[selectedBoards]();
}
