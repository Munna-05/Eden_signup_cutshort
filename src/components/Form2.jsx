import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Form2 = (props) => {
    const [button, setButton] = useState('')
    const [last, setLast] = useState(false)
    const [success,setSuccess]=useState(false)
    useEffect(() => {
        if (props.data == '4') {
            setButton('Launch Eden')
            setLast(false)
            setSuccess(true)
        } else {
            setButton('Create Workspace')
            setLast(true)
            setSuccess(false)

        }
    })
    let param = parseInt(props.data)
    console.log('form', props)
    param = param + 1
    if (param > 4) {
        param = ''
    }
    return (
        <div>
            
            {last ? <div className=' flex justify-center '>
                <div className='grid grid-cols-2 gap-9 h-40 '>
                    <div className='rounded border border-slate-300 border-1 hover:border-indigo-500' style={{ width: '12.4vw' }}>
                        <div className='h-16'>

                        </div>
                        <div className='px-3 pb-5'>
                            <div className='flex'>
                                <h5 className='text-sm font-bold mx-2 text-left'>For Myself</h5>
                            </div>
                            <div className='flex '>
                                <h5 className='text-sm mx-2 text-slate-400 text-left leading-6 mt-3'>Write better. Think more clearly. Stay organized</h5>
                            </div>
                        </div>

                    </div>
                    <div className='rounded border border-slate-300 border-1 hover:border-indigo-500' style={{ width: '12.4vw' }}>
                        <div className='h-16'>

                        </div>
                        <div className='px-3 pb-5'>
                            <div className='flex'>
                                <h5 className='text-sm font-bold mx-2 text-left'>With My Team</h5>
                            </div>
                            <div className='flex '>
                                <h5 className='text-sm mx-2 text-slate-400 text-left leading-6 mt-3'>Wikis, docs, tasks & projects, all in one place. </h5>
                            </div>
                        </div>

                    </div>




                </div>

               
            </div>
                :null}

            <div className='mt-1'>

                <Link to={`/${param}`}>
                    <button className='mt-5 bg-indigo-600 font-semibold rounded-md text-white px-3 py-4' style={{ width: '90%' }}>{button}</button>
                </Link>
            </div>

        </div>
    )
}

export default Form2