import React from 'react';
import {useSelector} from 'react-redux';
import * as Yup from 'yup';
import {Formik} from 'formik';

const schemaID = Yup.object().shape({
  target: Yup.string('pilih target yang ingin dihubungi').required(
    'pilih target yang ingin dihubungi!',
  ),
  project_id: Yup.number('pilih kluster perumahan yang ingin dihubungi')
    .min(1, 'pilih kluster perumahan yang ingin dihubungi')
    .required('pilih kluster perumahan yang ingin dihubungi'),
  name: Yup.string('nama hanya terdiri dari huruf')
    .min(2, 'nama harus lebih dari 2 huruf')
    .max(30, 'nama terlalu panjang')
    .required('nama harus dimasukkan'),
  contact: Yup.string('masukkan format nomor ponsel yang benar')
    .matches(/^08[1-9][0-9]{6,11}$/, 'Masukkan format nomor ponsel yang benar')
    .required('nomor ponsel harus dimasukkan'),
  message: Yup.string('pesan harus dimasukkan').required(
    'pesan harus dimasukkan',
  ),
});

export default function Form({submitForm = () => {}}) {
  const initialValue = {
    target: '',
    project_id: 0,
    name: '',
    contact: '',
    message: '',
  };
  const projects = useSelector((state) => state.homeData.projects);

  const forceNum = (e, setValue) => {
    const value = e.target.value.replace(/[^\d]+/g, '');
    setValue(value);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValue}
      validationSchema={schemaID}
      validateOnBlur
      onSubmit={submitForm}
    >
      {(props) => {
        const {
          touched,
          errors,
          handleSubmit,
          values,
          handleChange,
          handleBlur,
          setFieldValue,
        } = props;
        return (
          <form
            onSubmit={handleSubmit}
            id="contact-us"
            name="contact-us"
            className="form ar-form"
          >
            <div className="container d-flex flex-column justify-content-center align-items-center mx-auto">
              <div className="row w-100 no-gutters">
                <div className="col-12 pt-2 pb-3 col-md-6">
                  <select
                    // type="select"
                    id="target"
                    name="target"
                    value={values.target}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input-form rounded-0 py-2"
                    placeholder="Bagian Yang Ingin Dihubungi"
                  >
                    <option value="" selected className="d-none">
                      Bagian Yang Ingin Dihubungi
                    </option>
                    <option value="SALES">Sales</option>
                    <option value="MARKETING">Marketing</option>
                    <option value="CUSTOMER SERVICE">Customer Service</option>
                  </select>
                  {errors.target && touched.target ? (
                    <div className="text-light small">{errors.target}</div>
                  ) : null}
                </div>
                <div className="col-12 pt-2 pb-3 col-md-6">
                  <select
                    value={values.project_id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="project_id"
                    id="project_id"
                    className="input-form rounded-0 py-2"
                  >
                    <option value="null" selected className="d-none">
                      Perumahan Arrayan Group
                    </option>
                    {projects.map((val, index) => (
                      <option key={index} value={val.id}>
                        {val.title}
                      </option>
                    ))}
                  </select>
                  {errors.project_id && touched.project_id ? (
                    <div className="text-light small">{errors.project_id}</div>
                  ) : null}
                </div>
              </div>
              <div className="row w-100 no-gutters">
                <div className="col-12 pt-2 pb-3 col-md-6">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input-form rounded-0 py-2 w-100"
                    placeholder="Nama Lengkap"
                  />
                  {errors.name && touched.name ? (
                    <div className="text-light small">{errors.name}</div>
                  ) : null}
                </div>
                <div className="col-12 pt-2 pb-3 col-md-6">
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    value={values.contact}
                    onChange={(e) =>
                      forceNum(e, (val) => {
                        setFieldValue('contact', val);
                      })
                    }
                    onBlur={handleBlur}
                    className="input-form rounded-0 py-2 w-100"
                    placeholder="Nomor Telepon"
                  />
                  {errors.contact && touched.contact ? (
                    <div className="text-light small">{errors.contact}</div>
                  ) : null}
                </div>
              </div>
              <div className="row w-100 no-gutters">
                <div className="col-12">
                  <input
                    type="text"
                    id="message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input-form rounded-0 py-2 w-100"
                    placeholder="Pesan"
                  />
                  {errors.message && touched.message ? (
                    <div className="text-light small">{errors.message}</div>
                  ) : null}
                </div>
              </div>
              <button
                name="contact-us"
                type="submit"
                className="btn-ar rounded btn-form my-4"
              >
                Hubungi Kami
              </button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}
