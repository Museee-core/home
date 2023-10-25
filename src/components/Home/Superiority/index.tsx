import React from 'react'
import style from './style.module.css'
import Image from 'next/image'

import s1 from '../images/Superiority-1.png'
import s2 from '../images/Superiority-2.png'
import s3 from '../images/Superiority-3.png'
import s4 from '../images/Superiority-4.png'

const Superiority = () => {
  return (
    <div className={style.wrapper}>
      <div
        className="mx-auto h-[640px] w-container py-24"
        id="Superiority"
      >
        <div className={style.title}>技术优势</div>
        <div className={style.cardList}>
          <div className={style.card}>
            <Image
              src={s1}
              alt="spec"
            />
            <div className={style.cardTitle}>工作流Copilot</div>
            <div className={style.cardContent}>
              我们的Copilot能在工作流的设计、配置、执行、结果评估上提供服务与支持，大幅降低原有的人工成本并提升执行质量。
            </div>
          </div>
          <div className={style.card}>
            <Image
              src={s2}
              alt="spec"
            />
            <div className={style.cardTitle}>工作流Copilot</div>
            <div className={style.cardContent}>
              我们的Copilot能在工作流的设计、配置、执行、结果评估上提供服务与支持，大幅降低原有的人工成本并提升执行质量。
            </div>
          </div>
          <div className={style.card}>
            <Image
              src={s3}
              alt="spec"
            />
            <div className={style.cardTitle}>工作流Copilot</div>
            <div className={style.cardContent}>
              我们的Copilot能在工作流的设计、配置、执行、结果评估上提供服务与支持，大幅降低原有的人工成本并提升执行质量。
            </div>
          </div>
          <div className={style.card}>
            <Image
              src={s4}
              alt="spec"
            />
            <div className={style.cardTitle}>工作流Copilot</div>
            <div className={style.cardContent}>
              我们的Copilot能在工作流的设计、配置、执行、结果评估上提供服务与支持，大幅降低原有的人工成本并提升执行质量。
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Superiority
