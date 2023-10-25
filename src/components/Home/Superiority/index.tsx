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
            <div className={style.cardTitle}>行业模板</div>
            <div className={style.cardContent}>
              结合大量垂类客户/三方的领域知识、专用模型、专用工作流/任务模板构建行业模板，以更好更快更省地服务不同生态下的客户。
            </div>
          </div>
          <div className={style.card}>
            <Image
              src={s3}
              alt="spec"
            />
            <div className={style.cardTitle}>定制化RAG</div>
            <div className={style.cardContent}>
              分行业训练的copilot，可以帮助计算机更好地理解不同领域的信息，就像人们学习不同的专业知识一样，更准确地提供领域内知识。
            </div>
          </div>
          <div className={style.card}>
            <Image
              src={s4}
              alt="spec"
            />
            <div className={style.cardTitle}>多模态专用模型库</div>
            <div className={style.cardContent}>
              根据行业储备，我们提供不同行业的专业工具，并不断根据各个行业的需要来进行更新和改进。这些工具能够帮助在工作中更高效和专业地完成任务。
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Superiority
