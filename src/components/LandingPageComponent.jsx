
import React, { useState ,useEffect } from 'react'
import Form from './Form'
import Stepper from './Stepper'
import Form2 from './Form2'


const LandingPageComponent = (props) => {
  const [form,setForm] = useState(false)
  const[success,setSuccess]=useState(false)
  useEffect(()=>{
    if(props.data.num == '1'){
        setForm(true)
        setSuccess(false)
    }else if(props.data.num=='2'){
        setForm(true)
    }else if(props.data.num=='3'){
      setForm(false)
    }else{
      setSuccess(true)
    }
    
    },[props])

  console.log("landing page",props , form)
  const one ='Welcome! First things first...'
  const oneSub ='You can always change them later'
  
  

  return (

    <div>
      <div className=' mt-16 pt-16 flex justify-center mb-8'>
        {/* <img className='h-10' src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg" alt="" /> */}
        <img className='h-10 contrast-100' src="loogoo.png" alt="" />
        {/* <span className='my-auto text-3xl font-bold mx-3'>Eden</span> */}

      </div>
      <div className='m-3'>
        <Stepper color={props.data}/>
      </div>
      {success?<img className='mx-auto h-20 my-5' src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" alt="" />:null}
      <div>
        <h1 className='text-3xl font-bold'>{props.data.one}</h1>
      </div>
      <span className='text-slate-400'>{props.data.oneSub}</span>

      <div className='my-5 mt-16 mx-auto' style={{ width: '30vw' }}>
      {form?  <Form data={props.data.num}/>:<Form2 data={props.data.num}/>}
      

      </div>
    </div>
  )
}

export default LandingPageComponent