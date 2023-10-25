import Image from 'next/image'
import React from 'react'

import flowImage from '../images/flows.png'
import style from './style.module.css'

const ServiceProcess: React.FC = () => {
  return (
    <div
      className={style.wrapper}
      id="ServiceProcess"
    >
      <div className="h-[750px]">
        <div className={style.title}>服务流程</div>
        <Image
          src={flowImage}
          alt="flow"
          className="mx-auto w-[1200px]"
        />
      </div>
    </div>
  )
}

export default ServiceProcess
