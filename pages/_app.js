import '../styles/globals.css';
import '../styles/globals.scss';
import '../styles/global-sm.scss';
import '../styles/global-md.scss';
import '../styles/global-lg.scss';
import '../styles/global-xl.scss';
import '../styles/width.css';
import '../styles/height.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />;
}

export default MyApp;
