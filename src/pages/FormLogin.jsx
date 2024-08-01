import React, { useState } from 'react'
import { login } from '../services/auth/AuthServices';
import Cookies from 'universal-cookie';

export const FormLogin = () => {
    const [FailedResponse, setFailedResponse] = useState('')
    const cookies = new Cookies();
    const handleLogin = (event) => {
        event.preventDefault();
        console.log('disubmit');
        
        const data = {
            email: event.target.email.value,
            password: event.target.password.value,
        };
        login(data, (status, res) => {
            if(status){                
                cookies.set('Token', res.token)
                window.location.href = '/';
            }else{                
                setFailedResponse(res.response.data.message);
            }
        });
    }
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <form className='flex flex-col gap-4' onSubmit={handleLogin}>
            <h1 className='text-left text-blue-700 font-bold'>Login</h1>
            <input placeholder='email' className='border-2 border-blue-700' type="email" name='email'/>
            <input placeholder='password' className='border-2 border-blue-700' type="password" name='password'/>
            <button className='bg-blue-700 text-white rounded-md mt-3' type='submit'>Login</button>
            {FailedResponse && <p className='text-red-700 text-center'>{FailedResponse}</p>}            
        </form>
    </div>
  )
}
