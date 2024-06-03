import { Button, Checkbox, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Password = () => {
    let [password, setPassword] = useState("")
    let location = useLocation()
    let data = location.state
    let navigate = useNavigate()
    let [showPassword, setShowPassword] = useState(false)
    let [passwordError, setPasswordError] = useState("")

    useEffect(()=>{
        setPasswordError('')
    },[password])
    let submit = () => {
        if(!password){
            setPasswordError("Password is required");
        }else{
            navigate('/home')
        }
    }
    return (
        <div className='bg-slate-100 h-[100vh] flex justify-center items-center flex-col'>
            <div className='bg-white h-[28rem] w-[68.3rem] rounded-[24px] flex justify-center items-center'>
                <div className='h-[22rem] w-[28rem] mr-[80px]'>
                    <div className='pt-[30px] pl-[40px]'>
                        <svg xmlns="https://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" aria-hidden="true" jsname="jjf7Ff"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"></path><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"></path><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"></path><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"></path><path fill="none" d="M2 2h44v44H2z"></path></svg>
                    </div>
                    <div className='pt-[20px] pl-[40px]'>
                        <h1 className='text-[40px] pb-[20px]'><span>Welcome</span></h1>
                        <button className='border border-solid border-black flex p-[0px_10px_0px_10px] rounded-[24px] hover:bg-slate-200'>
                            <svg aria-hidden="true" class="Qk3oof" fill="currentColor" focusable="false" width="20px" height="25px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z"></path></svg>
                            <h1 className='pl-[10px] pr-[5px]'>{data}</h1>
                            <svg aria-hidden="true" class="Qk3oof u4TTuf" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"></path></svg>
                        </button>
                    </div>
                </div>
                
                <div className='h-[28rem] w-[40rem]'>
                    <div className='pt-[140px]'>
                        <h1>To continue, first verify it’s you</h1>
                    </div>
                    <div>
                        <h1 className='pt-[30px]'><TextField
                            label="Enter your password"
                            value={password}
                            type={showPassword ? 'text' : 'password'}
                            onChange={e => setPassword(e.target.value)}
                            error={passwordError !== ''} 
                            helperText={passwordError}
                            variant="outlined"
                            style={{ width: "500px" }}
                        /></h1>
                        <Checkbox checked={showPassword} onChange={(()=>setShowPassword(!showPassword))}/>
                        <span>Show Password</span>
                    </div>
                    <div className='flex pt-[30px] pl-[245px]'>
                        <div>
                            <Button variant="text">Try another way</Button>
                        </div>
                        <div className='pl-[40px]'>
                            <Button variant="contained" onClick={submit}>Next</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Password