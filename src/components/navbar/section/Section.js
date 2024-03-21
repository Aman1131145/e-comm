import React from 'react'
import './Section.scss'
import { RiArrowDropDownLine } from 'react-icons/ri'

function Section(_params) {
  return (
      <div className='Section'>
      <p>{_params.text}</p>
      <RiArrowDropDownLine className='drop-down' />
    </div>
  )
}

export default Section