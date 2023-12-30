import React from 'react'
import { useState } from 'react'
import {Hint, Input, Submit} from '../ui'

const Register = () => {
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='container mt-5'>
            <div className='row justify-content-center'>
            <div className='col-md-6'>
                <div className='card border-warning border-3 mt-5'>
                <div className='card-body'>
                    <h3 className='text-center mb-3'>Ro'yxatdan o'tish</h3>
                    <form>
                    <Input type={'email'} label={'Email address'} state={email} setState={setEmail}/>
                    <Input label={'Foydalanuvchi nomi'} state={username} setState={setUsername}/>
                    <Input type={'password'} label={'Parol'} state={password} setState={setPassword}/>
                    <Submit label={'Ro\'yxatdan o\'tish'}/>
                    <Hint a={'kiriting'} href={'/login'} warning={'Agar hisobingiz bo\'lsa uni'}/>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Register