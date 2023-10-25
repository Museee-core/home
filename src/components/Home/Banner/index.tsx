import React from 'react'

import style from './style.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Cone from '../images/Cone.png'
import RoundCube from '../images/RoundCube.png'
import Torus from '../images/Torus.png'
import Spec from '../images/spec.png'
import Button from '@/components/Button'

const Banner = () => {
  const router = useRouter()
  return (
    <>
      <div
        className={style.wrapper}
        id="Home"
      >
        <div className="flex h-[670px] flex-col">
          <div className="font-harmony mb-[37px] mt-[122px] text-center">
            <p className={style.font}>募世AI</p>
            <p className="text-2xl leading-10">为企业构建专属的工作流</p>
            <p className="text-2xl leading-10">
              为企业降本增效，让每一个员工的工作变得简明有趣。
            </p>
          </div>

          <Button
            onClick={() => {
              document
                .querySelector('#ContactUs')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            预约专家交流
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
      <div className="mx-auto h-[585px] w-container py-24">
        <div className={style.title}>
          下一代工作流程将围绕AI与人的协同关系展开，在无缝协作中发挥各自的优势。
        </div>

        <div className="relative mx-auto flex h-[326px] w-[1200px] gap-10">
          <Image
            src={Spec}
            className={style.spec}
            alt="spac"
          />
          <Image
            src={Spec}
            className={style.spec}
            alt="spac"
          />
          <div className={style.card}>
            <div className={style.cardTitleEn}>Efficiency</div>
            <div className={style.cardTitle}>高效推进工作流程</div>
            <div className={style.cardContent}>
              AI
              承担简单重复的工作，完成任务的初步执行，并基于反馈迭代。人将工作时间聚焦在更有创造力的事情上，同时完成精调、决策和反馈。
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardTitleEn}>Evolution</div>
            <div className={style.cardTitle}>自主优化进程</div>
            <div className={style.cardContent}>
              AI
              学习调用工具、模板与任务，进行初步配置，并在工作流中不断优化升级。
              人进行审核并配置微调，让工具真正为人服务。
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardTitleEn}>Equity</div>
            <div className={style.cardTitle}>公正评判效果</div>
            <div className={style.cardContent}>
              AI
              避免主观偏见带来的评判偏差，对任务进行公正评判，为决策提供有力依据。
              人及时客观全面数据，对结果进行终核及反馈。
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
