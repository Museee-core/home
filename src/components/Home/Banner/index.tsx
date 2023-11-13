import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

import Button from '@/components/Button'

import Cone from '../images/Cone.png'
import RoundCube from '../images/RoundCube.png'
import Torus from '../images/Torus.png'
import style from './style.module.scss'

const Banner = () => {
  const { t } = useTranslation('home')
  return (
    <>
      <div
        className={style.wrapper}
        id="Home"
      >
        <div className={style.banner}>
          <div className={style.slogan}>
            <p className={style.name}>{t('banner.name')}</p>
            {(
              t('banner.slogan', undefined, {
                returnObjects: true,
              }) as string[]
            ).map((str, index) => (
              <p
                className={style.content}
                key={index}
              >
                {str}
              </p>
            ))}
          </div>

          <Button
            className={style.button}
            onClick={() => {
              document
                .querySelector('#ContactUs')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            {t('appointment')}
          </Button>
        </div>
        <Image
          src={Cone}
          alt="Cone"
          className={style.cone}
        />
        <Image
          src={Torus}
          alt="torus"
          className={style.torus}
        />
        <Image
          src={RoundCube}
          alt="RoundCube"
          className={style.roundCube}
        />
      </div>
      <div className={style.description}>
        <div className={style.title}>
          {(
            t('banner.description.title', undefined, {
              returnObjects: true,
            }) as string[]
          ).map((str, index) => (
            <div key={index}>{str}</div>
          ))}
        </div>

        <div className={style.cardList}>
          {(
            t('banner.description.content', undefined, {
              returnObjects: true,
            }) as string[][]
          ).map((str, index) => (
            <div
              className={style.card}
              key={index}
            >
              <div className={style.cardTitleEn}>{str[0]}</div>
              <div className={style.cardTitle}>{str[1]}</div>
              <div className={style.cardContent}>
                <span>{str[2]}</span>
                {str[3]}
              </div>
              <div className={style.cardContent}>
                <span>{str[4]}</span>
                {str[5]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Banner
