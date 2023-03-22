import "../styles/globals.css";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Store from "../context/Index";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Store>
        <Component {...pageProps} />
        <ToastContainer
          toastStyle={{ backgroundColor: "black", color: "#fff" }}
        />
      </Store>
    </>
  );
}

export default MyApp;
