import React from 'react';

export default function FormRegis() {
  const [divisionForm, setDivisionForm] = React.useState('');
  const [groupForm, setGroupForm] = React.useState('');
  const [fullNameForm, setFullNameForm] = React.useState('');
  const [phoneNumberForm, setPhoneNumberForm] = React.useState('');

  const submitForm = () => {
    const payload = {
      name: fullNameForm,
      phone: phoneNumberForm,
      division: divisionForm,
      group: groupForm,
    };
    console.log(payload);
  };
  return (
    <section
      id="formContact"
      className="mt-0 mt-lg-3 form-contact bg-ar-dark text-white"
    >
      <section className="container text-center">
        <h1 className="title my-4 mx-auto">
          Sudah Siap Membuka #pintupertama Anda?
        </h1>
        <p className="subtitle w-80 my-4 mx-auto">
          Keputusan finansial paling penting dalam hidup Anda dimulai dari sini,
          karenanya tim Arrayan Group selalu siap untuk membantu Anda dalam
          setiap langkahnya
        </p>
      </section>
      {/* the form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
        className="form ar-form"
      >
        <div className="container d-flex flex-column justify-content-center align-items-center mx-auto">
          <div className="row w-100 no-gutters">
            <div className="col-12 pt-2 pb-3 col-md-6">
              <select
                // type="select"
                id="division"
                name="division"
                value={divisionForm}
                onChange={(e) => setDivisionForm(e.target.value)}
                className="input-form rounded-0 py-2"
                placeholder="Bagian Yang Ingin Dihubungi"
              >
                <option value="" selected className="d-none">
                  Bagian Yang Ingin Dihubungi
                </option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="col-12 pt-2 pb-3 col-md-6">
              <select
                value={groupForm}
                onChange={(e) => setGroupForm(e.target.value)}
                name="group"
                id="group"
                className="input-form rounded-0 py-2"
              >
                <option value="" selected className="d-none">
                  Perumahan Arrayan Group
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div className="row w-100 no-gutters">
            <div className="col-12 pt-2 pb-3 col-md-6">
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={fullNameForm}
                onChange={(e) => setFullNameForm(e.target.value)}
                className="input-form rounded-0 py-2 w-100"
                placeholder="Nama Lengkap"
              />
            </div>
            <div className="col-12 pt-2 pb-3 col-md-6">
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumberForm}
                onChange={(e) => setPhoneNumberForm(e.target.value)}
                className="input-form rounded-0 py-2 w-100"
                placeholder="Nama Lengkap"
              />
            </div>
          </div>
          <button type="submit" className="btn-ar rounded btn-form my-4">
            Hubungi Kami
          </button>
        </div>
      </form>
    </section>
  );
}
