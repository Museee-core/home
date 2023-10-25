import React from 'react'
import style from './style.module.css'
import Button from '@/components/Button'

const ContactUs: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>企业工作流升级 募世AI助您一臂之力</div>

      <form className="mx-auto w-[600px]">
        <label>
          <input
            name="name"
            placeholder="输入您的姓名"
          />
        </label>
        <label>
          <input
            name="contact"
            placeholder="输入您的联系方式"
          />
        </label>
        <label>
          <input
            name="demands"
            placeholder="您的使用场景"
          />
        </label>
        <Button className="w-full">预约专家交流</Button>
      </form>
    </div>
  )
}

export default ContactUs
