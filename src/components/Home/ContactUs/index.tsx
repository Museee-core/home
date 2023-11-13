import useTranslation from 'next-translate/useTranslation'
import React, { useCallback, useState } from 'react'

import Button from '@/components/Button'
import { cn } from '@/utils/cn'

import Company from '../images/Company.svg'
import Email from '../images/Email.svg'
import Person from '../images/Person.svg'
import Phone from '../images/Phone.svg'
import Scope from '../images/scope.svg'
import style from './style.module.scss'

const fields = ['company', 'fullName', 'phone', 'email', 'useCase']
const images = [Company, Person, Phone, Email, Scope]

const ContactUs: React.FC = () => {
  const { t } = useTranslation('home')
  const [form, setForm] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSend = useCallback(async () => {
    const { company, fullName, phone, email, useCase } = form
    if (fullName && (phone || email) && useCase) {
      setLoading(true)
      try {
        await fetch('/api/contactus', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            company,
            fullName,
            phone,
            email,
            useCase,
          }),
        })
        setSuccess(true)
        setForm({})
        setLoading(true)
      } finally {
        setLoading(false)
      }
    }
  }, [form])

  return (
    <div
      className={style.wrapper}
      id="ContactUs"
    >
      <div className={style.title}>
        <span>{t('contactus.title')}</span>
      </div>

      <div className={cn(style.form, success ? style.success : undefined)}>
        {success ? (
          <div
            className="cursor-pointer self-center text-gray-500"
            onClick={() => {
              setSuccess(false)
            }}
          >
            {t('contactus.again')}
          </div>
        ) : (
          <>
            {(
              t('contactus.form', undefined, {
                returnObjects: true,
              }) as string[]
            ).map((item, index) => {
              const Icon = images[index]
              return (
                <label key={index}>
                  <Icon />
                  <input
                    value={form[fields[index]]}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        [fields[index]]: e.target.value,
                      })
                    }}
                    name="name"
                    placeholder={item}
                  />
                </label>
              )
            })}
          </>
        )}

        <Button
          disabled={
            loading ||
            !(form.fullName && (form.phone || form.email) && form.useCase)
          }
          loading={loading}
          className="w-full"
          onClick={success ? undefined : handleSend}
        >
          {t(success ? 'contactus.success' : 'appointment')}
        </Button>
      </div>
    </div>
  )
}

export default ContactUs
