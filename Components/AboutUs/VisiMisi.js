import React from 'react';
import {visi, misi} from '../../lib/dto';

export default function VisiMisi() {
  return (
    <div className="visi-misi bg-ar-dark text-white py-5">
      <div className="container">
        <div className="visi">
          <h1>Visi</h1>
          <p>{visi}</p>
        </div>
        <div className="visi">
          <h1>Misi</h1>
          <ol className="m-0 p-0">
            {misi.map((val, idx) => (
              <li key={idx}>{val}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
