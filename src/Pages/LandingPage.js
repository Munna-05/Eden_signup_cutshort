import React, { useEffect } from 'react'
import { useState } from 'react'
import LandingPageComponent from '../components/LandingPageComponent'
const LandingPage = (props) => {
    let [one,setOne] = useState('')
    let[oneSub,setOneSub]=useState('')
    const [color,setColor]=useState('')
    const [color2,setColor2]=useState('')
    const [color3,setColor3]=useState('')
    const [color4,setColor4]=useState('')
    const[border,setBorder]=useState('')
    const [form,setForm] = useState(true)
    const num = props.page
    useEffect(()=>{
        if(props.page=='1'){
            setOne('Welcome! First things first...')
            setOneSub('You can always change them later')
            setColor('bg-indigo-500 text-white')
            setColor2('')
            setBorder('')
            setForm(true)
            
        }else if(props.page=='2'){
            setOne('Lets setup a home for all of your work')
            setOneSub('You can always create another workspace later.')
            setColor('bg-indigo-500 text-white')
            setColor2('bg-indigo-500 text-white')
            setBorder('border-indigo-500')
            setColor3('')
            setColor4('')

        }else if(props.page=='3'){
            setOne('How are you planning to use Eden?')
            setOneSub("We"+"'"+"ll streamline your setup experience accordingly.")
            setColor2('bg-indigo-500 text-white')
            setColor3('bg-indigo-500 text-white')
            setColor('bg-indigo-500 text-white')
            setBorder('border-indigo-500')
            setColor4('')


        }else if(props.page=='4'){
            setOne('Congratualations,Erin!')
            setOneSub('You have completed onboarding,you can start using the Eden!')
            setColor2('bg-indigo-500 text-white')
            setColor3('bg-indigo-500 text-white')
            setColor4('bg-indigo-500 text-white')
            setColor('bg-indigo-500 text-white')
            setBorder('border-indigo-500')


        }else{
            setOne('')
            setOneSub('')
            setColor('')
            setColor2('')
            setColor3('')
            setColor4('')
            setBorder('')
            
        }
        
    },[props])
    const data={
        one,oneSub,color,color2,border,form,num,color3,color4
    }

    return (
        <div><LandingPageComponent data={data}/></div>
    )
}

export default LandingPage