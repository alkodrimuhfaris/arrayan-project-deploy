import {Provider} from 'react-redux';
import store from '../redux/store';
import '../styles/globals.css';
import '../styles/globals.scss';
import '../styles/global-sm.scss';
import '../styles/global-md.scss';
import '../styles/global-lg.scss';
import '../styles/global-xl.scss';
import '../styles/width.css';
import '../styles/height.css';
import '../styles/IconStyle.scss';
import '../styles/ModalLoading.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({Component, pageProps}) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
