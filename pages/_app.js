import Router from "next/router";
import NProgress from "nprogress";

import "tailwindcss/tailwind.css";
import "styles/global.css";
import "styles/nprogress.css";

import Store from "store/";

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <Store>
      <Component {...pageProps} />;
    </Store>
  );
}
