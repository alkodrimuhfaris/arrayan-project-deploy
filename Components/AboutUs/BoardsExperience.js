import React from 'react';

export default function BoardsExperience({selectedBoards = 0}) {
  const AsmatAmin = () => (
    <article className="py-lg-0 py-3 container w-100">
      <h3 className="desc-title-modal">Working Experience</h3>
      <p className="desc-card-modal">1995 - 2001</p>
      <ul className="list-card-modal-board">
        <li>PT Amin Raksatama Industri - Director</li>
      </ul>
      <p className="desc-card-modal">2001 - present</p>
      <ul className="list-card-modal-board">
        <li>PT Sri Pertiwi Sejati Group – President Director</li>
        <li>PT Budi Langgeng Persada – President Director</li>
        <li>PT Arrayan Nusantara Group – President Director</li>
        <li>Pollux Adhitama Kencana – CEO</li>
      </ul>
      <p className="desc-card-modal-underline">
        List of public housing that have been built:
      </p>
      <ul className="list-card-modal-board">
        <li>Kota Serang Baru Residence</li>
        <li>Kota Mega Regency Residence</li>
        <li>Grand Cikarang City Residence</li>
        <li>Villa Kencana CIkarang Residence</li>
        <li>Grand VIsta CIkarang Residence</li>
        <li>Villa Kencana Karawang Residence</li>
        <li>Grand Subang Residence</li>
        <li>Grand CIkarang City 2 Residence</li>
      </ul>
      <p className="desc-card-modal-underline">
        List of apartment development under construction:
      </p>
      <ul className="list-card-modal-board">
        <li>Superblock Chadstone Cikarang</li>
      </ul>
    </article>
  );

  const HengkiS = () => (
    <article className="py-lg-0 py-3 container w-100">
      <h3 className="desc-title-modal">Working Experience</h3>
      <ul className="list-card-modal-board">
        <li>2011 – Present: PT. Arrayan Bekasi Development - Director</li>
        <li>2011 – Present: PT. Karawang Arrayan Development – Director</li>
        <li>2011 – Present: PT. Alexandra Citra Pertiwi – Director</li>
      </ul>
    </article>
  );

  const RachmatW = () => (
    <article className="py-lg-0 py-3 container w-100">
      <h3 className="desc-title-modal">Working Experience</h3>
      <ul className="list-card-modal-board">
        <li>2000 – 2008: Megapolitan Group</li>
        <ul>
          <li>2000 – 2001: Internal Auditor</li>
          <li>2001 – 2002: Managing Director Assistant</li>
          <li>2002: Temporary Mall Manager</li>
          <li>2002 – 2007: Finance & Accounting Manager</li>
          <li>2007 – 2008: Finance Manager</li>
        </ul>
        <li>
          2008 – 2010: PT. Grand Uway Development - Senior Finance & Accounting
          Manager
        </li>
        <li>2010 – 2019: PT. Deyon Resources – Senior Finance Controller</li>
        <li>2015 – 2019: PT. Renadi Realti Mandiri – Chief Finance Officer</li>
        <li>
          2019 – Present: PT. Arrayan Nusantara Development – Chief Finance
          Officer
        </li>
      </ul>
    </article>
  );

  const AstiB = () => (
    <article className="py-lg-0 py-3 container w-100">
      <h3 className="desc-title-modal">Working Experience</h3>
      <ul className="list-card-modal-board">
        <li>1997 – Present: PT. Pelayaran Intilintas Tirthanusantara</li>
        <ul>
          <li>1997 – 2014: President Commissioner</li>
          <li>2014 – Present: Director</li>
        </ul>
        <li>2018 – Present: PT. Basis Utama Prima – Executive Director</li>
        <li>
          2020 – Present: PT. Arrayan Nusantara Development – Member of the
          Board of Commissioner
        </li>
      </ul>
    </article>
  );

  const Experience = [AsmatAmin, HengkiS, RachmatW, AstiB];

  return Experience[selectedBoards]();
}
