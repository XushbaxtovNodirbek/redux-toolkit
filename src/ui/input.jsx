import React from 'react'

const Input = ({label,type = 'text',state,setState}) => {
  return (
    <div className='mb-3'>
        <label className='form-label'>{label}</label>
        <input value={state} onChange={e => setState(e.target.value)} type={type} className='form-control' />
    </div>
  )
} 

export default Input