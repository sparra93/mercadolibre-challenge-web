import Head from "next/head";
import React from "react";
import { MercadoLibreProvider } from "../lib/context";
import Layout from '../components/home/Layout'
import "../styles.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
    </Head>
    <MercadoLibreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MercadoLibreProvider>
  </>
);

export default MyApp;
