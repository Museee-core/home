import { type GetStaticPaths } from 'next'

import Banner from '@/components/Home/Banner'
import ContactUs from '@/components/Home/ContactUs'
import ServiceProcess from '@/components/Home/ServiceProcess'
import Superiority from '@/components/Home/Superiority'

function Home() {
  return (
    <>
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
