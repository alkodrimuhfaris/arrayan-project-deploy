import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ModalConfirm from '../ModalConfirm/ModalConfirm';
import ModalLoading from '../ModalLoading/ModalLoading';
import actions from '../../redux/actions/index';
import Form from './Form';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  // modal confirm
  const [loading, setLoading] = React.useState(false);
  const [payload, setPayload] = React.useState({});
  const [resForm, setResForm] = React.useState({
    reset: () => {},
  });
  const [openNotif, setOpenNotif] = React.useState(false);
  const [propNotif, setPropNotif] = React.useState({
    content: () => <text>Are you sure want to continue</text>,
    confirm: () => {},
    confirmTxt: 'Ya',
    close: () => {},
    closeTxt: 'Tidak',
    useOneBtn: false,
    icon: 'i',
    title: 'Warning!',
  });

  const {success, error, pending, message} = useSelector(
    (state) => state.postRegistration,
  );

  const submitForm = (val, {resetForm}) => {
    setLoading(true);
    setPayload(val);
    setResForm({reset: () => resetForm()});
    dispatch(actions.registrationActions.postRegistration(val));
  };

  React.useEffect(() => {
    if (success) {
      setLoading(false);
      setPropNotif({
        content: () => <text>{message}</text>,
        confirm: () => resForm.reset(),
        confirmTxt: 'Kembali',
        useOneBtn: true,
        icon: 's',
        title: 'Success',
      });
      setOpenNotif(true);
    }
    if (error) {
      setLoading(false);
      setPropNotif({
        content: () => <text>{message}</text>,
        confirmTxt: 'Kirim Ulang?',
        confirm: () => submitForm(payload),
        closeTxt: 'Batal',
        useOneBtn: false,
        icon: 'e',
        title: 'Gagal',
      });
    }
  }, [pending]);

  return (
    <section
      id="formContact"
      className="mt-0 mt-lg-3 form-contact bg-ar-dark text-white"
    >
      <ModalLoading loading={loading} />
      <ModalConfirm
        modalOpen={openNotif}
        setModalOpen={setOpenNotif}
        clearFunction={() =>
          dispatch(actions.registrationActions.clearNotifRegistration())
        }
        {...propNotif}
      />
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
      <Form submitForm={submitForm} />
    </section>
  );
}
