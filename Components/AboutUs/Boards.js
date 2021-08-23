import React from 'react';
import getComponentWidth from '../../componentHelpers/getComponentWidth';
import asmatA from '../../Assets/Boards/Asmat-Amin.jpg';
import paulusN from '../../Assets/Boards/Paulus-Nurwandono.jpg';
import rachmatW from '../../Assets/Boards/Rachmat-Wahyudi.jpg';
import ModalBoards from './ModalBoards';

export default function Boards() {
  const [ref1, wRef1, hRef2] = getComponentWidth();
  const boards = [
    {name: 'Asmat Amin', position: 'President Commissioner', photo: asmatA},
    {name: 'Hengki Esa Putra', position: 'Operational Director', photo: ''},
    {name: 'Rachmat Wahyudi', position: 'CFO', photo: rachmatW},
    {name: 'Astini B. Oudang', position: 'Commissioner', photo: ''},
  ];
  const desc = [
    'Asmat Amin lahir di Bekasi, Indonesia, pada Februari 1972 Pada tahun 1991 memperoleh gelar di Selandia Baru Dan setelah itu, ia memperoleh gelar Teknik Industri di Amerika Serikat di Universitas Toledo, Ohio Pada tahun 1995 ia kembali ke Indonesia untuk memulai bisnis produksi dan penjualan genteng Pada puncak krisis moneter tahun 1998 bisnisnya berkembang menjadi penambangan pasir dan kontraktor infrastruktur untuk jalan dan bangunan Rekam jejak yang terbukti sebagai pengembang yang menyediakan perumahan bagi pekerja berpenghasilan rendah sejak tahun 2001',
    'Hengki Esa Putra adalah seorang eksekutif senior dengan karir yang panjang di sektor real estate. Hengki Esa Putra sudah bergabung dengan Arrayan Group sejak 2011, dan sekarang menjabat sebagai direktur. Merupakan Lulusan Borobudur University, Hengka Esa Putra juga pernah menjabat posisi direktur di berbagai perusahaan diantaranya PT. Karawang Arrayan Development dan PT. Alexandra Citra Pertiwi.',
    'Rachmat telah menjadi CFO PT Arrayan Nusantara Development sejak Juni 2019 di mana ia bekerja sama dengan tim manajemen senior di semua aspek perencanaan bisnis dan keuangan serta penggalangan dana. Sebelumnya menjabat sebagai CFO PT Renadi Realti Mandiri, pengembang properti yang mengembangkan rumah tapak, proyek perhotelan, dan properti komersial. Rachmat telah berkecimpung di sektor properti Indonesia sejak tahun 2000 dan telah bekerja dengan perusahaan-perusahaan seperti Megapolitan Group, PT Grand Uway Development, dan PT Deyon Resources. Meraih gelar MBA dari Universitas Gadjah Mada dan merupakan akuntan berkualifikasi dengan gelar dari Universitas Diponogoro ',
    'Astini adalah anggota dewan komisaris PT Arrayan Nusantara Development Beliau memiliki pengalaman lebih dari 10 tahun di industri logistik, perkapalan, pelabuhan dan perdagangan. Saat ini menjabat sebagai Direktur Eksekutif PT Basis Utama Prima, sebuah perusahaan investasi yang terdiversifikasi dengan berbagai kepemilikan properti di Indonesia. Beliau juga merupakan Direktur Eksekutif PT Pelayaran Intilintas Trithanusantara sebuah perusahaan pelayaran dan jasa kelautan lepas pantai yang mendukung industri minyak gas lepas pantai. Dia memiliki gelar MBA dari Georgetown University, McDonough School of Business, MS dalam Riset Operasi dari Stanford University, dan BS di bidang Teknik Manufaktur dari Boston University',
  ];

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
            return (
              <div
                key={idx}
                ref={idx === 0 ? ref1 : null}
                style={{
                  height: `${wRef1 / 0.82}px`,
                }}
                className="col-lg-3 col-md-6 col-12"
              >
                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                  <button
                    onClick={() => {
                      setSelected(idx);
                      selectBoard(idx);
                      toggle();
                    }}
                    type="button"
                    className="card p-0"
                  >
                    {photo !== '' ? (
                      <div className="img-top">
                        <img src={photo} alt="asmat-a" />
                      </div>
                    ) : (
                      <div className="card-img-top bg-secondary img-replacer" />
                    )}
                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                      <h5 className="title m-0">{name}</h5>
                      <h6 className="subtitle m-0">{position}</h6>
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
