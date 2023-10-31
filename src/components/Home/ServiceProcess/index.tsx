import Image from 'next/image'
import React from 'react'

import flowImage from '../images/flows.png'
import style from './style.module.scss'

const ServiceProcess: React.FC = () => {
  return (
    <div
      className={style.wrapper}
      id="ServiceProcess"
    >
      <div className="h-[750px]">
        <div className={style.title}>服务流程</div>
        <div className={style.flow} />
      </div>
    </div>
  )
}

export default ServiceProcess
