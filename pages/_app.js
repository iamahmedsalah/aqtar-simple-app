import "@/styles/globals.css";
import Head from 'next/head';



export const metadata = {
  title: "AQTAR-TASK",
  description: `Simple Products App`,
  image: "",
  url: "",
  type: "website",
  siteName: "AQTAR-TASK",
};

//Layout
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {

  return (
    <Layout>
        {/* Add the favicon */}
        <Head>
        <link  rel='favicon' href='/public/favicon.ico ' />
        <meta name="theme-color" content="#000" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content={metadata.type} />
        <meta property="og:site_name" content={metadata.siteName} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
      </Head>
      <Component  {...pageProps} />
    </Layout>
  );
}
