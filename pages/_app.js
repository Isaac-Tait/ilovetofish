import 'tailwindcss/tailwind.css';
import 'nextjs-breadcrumbs/dist/index.css';

const { config } = require('@fortawesome/fontawesome-svg-core');
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
