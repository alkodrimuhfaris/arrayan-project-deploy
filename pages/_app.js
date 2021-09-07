import {Provider} from 'react-redux';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import * as gtag from '../lib/gtag';
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

const App = ({Component, pageProps}) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Provider store={store}>
      <FacebookPixel />
      <Component {...pageProps} />
    </Provider>
  );
};

function FacebookPixel() {
  const router = useRouter();
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(process.env.NEXT_PUBLIC_APP_API_FACEBOOK_PIXEL_ID);
        ReactPixel.pageView();

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView();
        });
      });
  });
  return null;
}

export default App;
