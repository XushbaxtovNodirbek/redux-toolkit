import React, { useState } from 'react'
import { Input,Hint, Submit } from '../ui'

const Login = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
            <div className='col-md-6'>
                <div className='card border-warning border-3 mt-5'>
                <div className='card-body'>
                    <h3 className='text-center mb-3'>Kirish</h3>
                    <form>
                    <Input label={'Foydalanuvchi nomini kiriting'} state={username} setState={setUsername}/>
                    <Input type={'password'} label={'Parolni kiriting'} state={password} setState={setPassword}/>
                    <Submit label={'Kirish'}/>
                    <Hint a={'yarating'} href={'/register'} warning={'Agrar hisobingiz bo\'lmasa uni'}/>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Login