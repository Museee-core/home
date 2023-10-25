import Banner from '@/components/Home/Banner'
import ContactUs from '@/components/Home/ContactUs'
import ServiceProcess from '@/components/Home/ServiceProcess'
import Superiority from '@/components/Home/Superiority'
import Head from 'next/head'

function Home() {
  return (
    <>
      <Head>
        <title>募世AI</title>
      </Head>
      <Banner />
      <Superiority />
      <ServiceProcess />
      <ContactUs />
    </>
  )
}

Home.getInitialProps = async () => {
  return {}
}

export default Home
