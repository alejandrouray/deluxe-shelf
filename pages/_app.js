import React from "react";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import PropTypes from "prop-types";

import "tailwindcss/tailwind.css";
import "styles/global.css";
import "styles/nprogress.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-typeahead/css/Typeahead.css";

import Layout from "components/Layout";

import Store from "store/";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Deluxe Shelf</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Store>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </Store>
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
