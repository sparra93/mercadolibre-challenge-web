import Head from 'next/head'
import MainView from '../components/home/MainView'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MercadoLibre Challenge</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-light.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-head-react="true" />
        <link rel="preload" href="https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-regular.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-head-react="true" />
        <link rel="preload" href="https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-semibold.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-head-react="true" />
      </Head>
      <MainView />
    </div>
  )
}
