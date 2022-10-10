import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Form = (props) => {
    const [form, setForm] = useState(false)
    const [form2, setForm2] = useState(false)
    let param = parseInt(props.data)
    console.log('form', props)
    param = param + 1
    if (param > 4) {
        param = ''
    }

    useEffect(() => {
        if (props.data == '1') {
            setForm(true)
        } else if (props.data == '2') {
            setForm(false)
        }

    })

    return (
        <div>

            {form ? <div className=''>
                <div className='flex px-6 text-sm text-slate-600 font-semibold mt-2' style={{ width: '90%' }}><span>Full Name</span><br /></div>
                <input className='border rounded py-3 mt-1 text-sm px-2' style={{ width: '90%' }} placeholder='Steve Jobs' type="text" />
                <div className='flex px-6 text-sm text-slate-600 font-semibold mt-2'><span>Display Name</span><br /></div>
                <input className='border rounded py-3 mt-1 text-sm px-2' style={{ width: '90%' }} placeholder='Steve' type="text" />


            </div> :
                <div>
                    <div className='flex px-6 text-sm text-slate-600 font-semibold mt-2' style={{ width: '90%' }}><span>Workspace Name</span><br /></div>
                    <input className='border rounded py-3 mt-1 text-sm px-2' style={{ width: '90%' }} placeholder='Steve Jobs' type="text" />
                    <div className='flex px-6 text-sm text-slate-600 font-semibold mt-2'><span>Workspace URL</span><br /></div>
                    <input className='border rounded-l py-3 mt-1 text-sm px-2 bg-slate-100 text-slate-400' style={{ width: '35%' }} placeholder='www.eden.com/' type="text" />
                    <input className='border-t border-r border-b rounded-r  py-3 mt-1 text-sm px-2' style={{ width: '55%' }} placeholder='Example' type="text" />
                </div>
            }



            <div className='mt-4'>

                <Link to={`/${param}`}>
                    <button className='mt-5 bg-indigo-600 font-semibold rounded-md text-white px-3 py-4' style={{ width: '90%' }}>Create Workspace</button>
                </Link>
            </div>
        </div>
    )
}

export default Form