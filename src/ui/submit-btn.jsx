import React from 'react'

const Submit = ({label}) => {
  return (
    <div className='mb-3'>
        <button type='button' className='btn btn-warning w-100'>{label}</button>
    </div>
  )
}

export default Submit