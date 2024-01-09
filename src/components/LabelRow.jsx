import React from 'react'

const LabelRow = ({title}) => {
  return (
    <div className='center ribbon  w-2/3 md:w-1/2  py-4 font-bold text-xl text-white relative bg-primary text-center'>
      {title}
    </div>
  )
}

export default LabelRow
