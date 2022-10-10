import React from 'react'

const Stepper = (props) => {
    console.log('stepper',props)
    return (
        <div className='flex justify-center my-16'>

           
            <span className={`border rounded-full px-5 py-3.5 border-slate-500 ${props.color.color?props.color.color:null}`}>1</span>
            <hr className={`my-4 w-10  rounded border my-auto mt-6  border-indigo-500`}/>

            <hr className={`my-4 w-10 bg-gray-100 rounded border my-auto mt-6  ${props.color.border?props.color.border:null}`}/>
            <span className={`border rounded-full px-5 py-3.5 border-slate-400 ${props.color.color2?props.color.color2:null}`}>2</span>
            <hr className={`my-4 w-10 bg-gray-100 rounded border my-auto mt-6  ${props.color.border?props.color.border:null}`}/>

            <hr className={`my-4 w-10 bg-gray-100 rounded border my-auto mt-6  ${props.color.color3?props.color.border:null}`}/>
            <span className={`border rounded-full px-5 py-3.5 border-slate-400 ${props.color.color2?props.color.color3:null}`}>3</span>
            <hr className={`my-4 w-10 bg-gray-100 rounded border my-auto mt-6  ${props.color.color3?props.color.border:null}`}/>

            <hr className={`my-4 w-10 bg-gray-100 rounded border my-auto mt-6  ${props.color.color4?props.color.border:null}`}/>
            <span className={`border rounded-full px-5 py-3.5 border-slate-400 ${props.color.color2?props.color.color4:null}`}>4</span>
            {/* <hr className={`my-4 w-10 bg-gray-100 rounded border my-auto mt-6 dark:bg-gray-700 ${props.color.border?props.color.border:null}`}/> */}

           
            


        </div>
    )
}

export default Stepper