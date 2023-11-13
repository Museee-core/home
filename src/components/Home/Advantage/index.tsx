import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

import s1 from '../images/Superiority-1.png'
import s2 from '../images/Superiority-2.png'
import s3 from '../images/Superiority-3.png'
import s4 from '../images/Superiority-4.png'
import style from './style.module.scss'

const images = [s1, s2, s3, s4]

const Advantage = () => {
  const { t } = useTranslation('home')
  return (
    <div
      className={style.wrapper}
      id="Advantage"
    >
      <div className="container mx-auto">
        <div className={style.title}>{t('advantage.title')}</div>
        <div className={style.listWrapper}>
          <div className={style.cardList}>
            {(
              t('advantage.content', undefined, {
                returnObjects: true,
              }) as Array<any>
            ).map((item, index) => (
              <div
                className={style.card}
                key={index}
              >
                <Image
                  src={images[index]}
                  alt="spec"
                />
                <div className={style.cardTitle}>{item.title}</div>
                <div className={style.cardContent}>{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantage
