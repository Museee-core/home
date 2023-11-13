import useTranslation from 'next-translate/useTranslation'
import React from 'react'

import style from './style.module.scss'

const ServiceProcess: React.FC = () => {
  const { t } = useTranslation('home')
  return (
    <div
      className={style.wrapper}
      id="ServiceProcess"
    >
      <div className="h-[750px]">
        <div className={style.title}>{t('serviceProcess.title')}</div>
        <div className={style.flow} />
      </div>
    </div>
  )
}

export default ServiceProcess
