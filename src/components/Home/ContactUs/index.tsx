import Image from 'next/image'
import React, { useCallback, useState } from 'react'

import Button from '@/components/Button'

import Person from '../images/Person.svg'
import Phone from '../images/Phone.svg'
import style from './style.module.scss'
import { cn } from '@/utils/cn'

const ContactUs: React.FC = () => {
  const [name, setName] = React.useState('')
  const [contact, setContact] = React.useState('')
  const [demands, setDemands] = React.useState('')

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSend = useCallback(async () => {
    if (name && contact && demands) {
      setLoading(true)
      try {
        await fetch('/api/contactus', {
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
        setSuccess(true)
        setName('')
        setContact('')
        setDemands('')
      } finally {
        setLoading(false)
      }
    }
  }, [contact, demands, name])

  return (
    <div
      className={style.wrapper}
      id="ContactUs"
    >
      <div className={style.title}>
        <span>企业工作流升级</span>
        <span> 募世AI助您一臂之力</span>
      </div>

      <div className={cn(style.form, success ? style.success : undefined)}>
        {success ? (
          <div
            className="cursor-pointer self-center text-gray-500"
            onClick={() => {
              setSuccess(false)
            }}
          >
            再次预约
          </div>
        ) : (
          <>
            <label>
              <Person />
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
              <Phone />
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
          </>
        )}

        <Button
          disabled={loading || (!success && (!name || !contact || !demands))}
          loading={loading}
          className="w-full"
          onClick={success ? undefined : handleSend}
        >
          {success ? '感谢您的预约，我们将与您尽快联系' : '预约专家交流'}
        </Button>
      </div>
    </div>
  )
}

export default ContactUs
