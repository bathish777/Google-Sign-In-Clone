import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Box, Button, FormControl, FormHelperText, InputLabel, Link, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'

const EmailPage = () => {
    let [name, setName] = useState("")
    let [nameError,setNameError] = useState("")
    let navigate = useNavigate()
    useEffect(()=>{
        setNameError('')
    },[name])
    let submit = () =>{
        (!name)?setNameError('Email is required'):navigate('/password',{state:name})
    }
    return (
        <div className='bg-slate-100 h-[100vh] flex justify-center items-center flex-col grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            
            <div className='bg-white h-[28rem] w-[68.3rem] rounded-[24px] flex justify-center items-center'>
                <div className='h-[22rem] w-[28rem]'>
                    
                    <div className='pt-[30px] pl-[40px]'>
                        <svg xmlns="https://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" aria-hidden="true" jsname="jjf7Ff"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"></path><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"></path><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"></path><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"></path><path fill="none" d="M2 2h44v44H2z"></path></svg>
                    </div>
                    <div>
                        <h1 className='text-[35px] pt-[10px] pl-[40px]'><span>Sign in</span></h1>
                        <p className='pt-[20px] pl-[40px]'><span>Use your Google Account</span></p>
                    </div>
                </div>
                <div className='h-[28rem] w-[40rem]'>
                    <h1 className='pt-[120px] pl-[100px]'><TextField
                        label="Email or Phone"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        error={nameError !== ''}
                        helperText={nameError}
                        variant="outlined"
                        style={{ width: "500px" }}
                    /></h1>
                    <p className='text-blue-700 pl-[100px] pt-[5px]'><a href="">Forgot email?</a></p>
                    <p className='pl-[100px] pt-[50px]'>Not your computer? Use Guest mode to sign in privately.</p>
                    <p className='pl-[100px] text-blue-700'><a href="">Learn more about using Guest mode</a></p>
                    <div className='pt-[40px] pl-[320px] flex'>
                        <div>
                            <Button variant="text">Create account</Button>
                        </div>
                        <div className='pl-[40px]'>
                            <Button variant="contained" onClick={submit}>Next</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default EmailPage