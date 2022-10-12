
import React, { useState, useEffect } from 'react'
import Form from './Form'
import Stepper from './Stepper'
import Form2 from './Form2'

import { useSelector } from 'react-redux'


const LandingPageComponent = (props) => {
  const page1 = useSelector(state => state.pageOne.value)
  const [form, setForm] = useState(false)
  const [success, setSuccess] = useState(false)


  useEffect(() => {
    if (props.data.num === '1') {
      setForm(true)
      setSuccess(false)

    } else if (props.data.num === '2') {
      setForm(true)

    } else if (props.data.num === '3') {
      setForm(false)
    } else {
      setSuccess(true)

    }

  }, [props])

  return (

    <div>
      <div className=' mt-16 pt-16 flex justify-center mb-8'>
        <img className='h-10 contrast-100' src="loogoo.png" alt="" />
      </div>
      <div className='m-3'>
        <Stepper color={page1} />
      </div>
      {success ? <img className='mx-auto h-20 my-5' src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" alt="" /> : null}
      <div>
        <h1 className='text-3xl font-bold'>{page1.one}</h1>
      </div>
      <span className='text-slate-400'>{page1.oneSub}</span>

      <div className='my-5 mt-16 mx-auto ' >
        {form ? <Form data={page1.num} /> : <Form2 data={page1.num} />}
      </div>
    </div>
  )
}

export default LandingPageComponent