import React from 'react'

const Instructions = () => {
  return (
    <div>
        <h1 className='text-3xl text-center mt-10 mb-5'>The instructions are: </h1>
        <div  className='flex flex-row justify-center items-center border-2 border-sky-600 p-10 '>
        <ul >
            <li className='p-5'>The quiz contains 10 MCQ Questions.</li>
            <li className='p-5'>Each question may have 4 or 2 options.</li>
            <li className='p-5'>4 Options for Multiple choice quesions</li>
            <li className='p-5'>2 options for True or False type of quesions.</li>
            <li className='p-5'>Your final score will always be displyed on the top right corner.</li>
        </ul>
        </div>
    </div>
  )
}

export default Instructions