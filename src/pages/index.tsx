import Banner from '@/components/Home/Banner'
import ContactUs from '@/components/Home/ContactUs'
import ServiceProcess from '@/components/Home/ServiceProcess'
import Advantage from '@/components/Home/Advantage'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'

function Home() {
  const { t } = useTranslation('common')
  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <Banner />
      <Advantage />
      <ServiceProcess />
      <ContactUs />
    </>
  )
}

Home.getInitialProps = async () => {
  return {}
}

export default Home
