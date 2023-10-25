import Image from 'next/image'
import React, { useCallback } from 'react'

import Button from '@/components/Button'

import person from '../images/Person.svg'
import phone from '../images/Phone.svg'
import style from './style.module.css'

const ContactUs: React.FC = () => {
  const [name, setName] = React.useState('')
  const [contact, setContact] = React.useState('')
  const [demands, setDemands] = React.useState('')
  const handleSend = useCallback(() => {
    console.log('name && contact && demands: ', name, contact, demands)
    if (name && contact && demands) {
      fetch('/api/contactus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          contact,
          demands,
        }),
      })
    }
  }, [contact, demands, name])

  return (
    <div
      className={style.wrapper}
      id="ContactUs"
    >
      <div className={style.title}>企业工作流升级 募世AI助您一臂之力</div>

      <div className={style.form}>
        <label>
          <Image
            src={person}
            alt="person"
          />
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
            name="name"
            placeholder="输入您的姓名"
          />
        </label>
        <label>
          <Image
            src={phone}
            alt="person"
          />
          <input
            value={contact}
            onChange={(e) => {
              setContact(e.target.value)
            }}
            name="contact"
            placeholder="输入您的联系方式"
          />
        </label>
        <label>
          <textarea
            value={demands}
            onChange={(e) => {
              setDemands(e.target.value)
            }}
            rows={4}
            name="demands"
            placeholder="您的使用场景"
          />
        </label>
        <Button
          disabled={!name || !contact || !demands}
          className="w-full"
          onClick={handleSend}
        >
          预约专家交流
        </Button>
      </div>
    </div>
  )
}

export default ContactUs
