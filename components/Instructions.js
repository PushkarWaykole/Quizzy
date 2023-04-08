import React from 'react'

const Instructions = () => {
  return (
    <div>
        <h1 className='text-3xl text-center mt-10 mb-5'>The instructions are: </h1>
        <div  className='bg-sky-200 bg-opacity-50 rounded-lg flex flex-row justify-center items-center border-2 border-sky-600 p-9 gap-10'>
        <div >
            <p className='p-5 bg-white h-[4rem] font-bold rounded-lg m-3'>The quiz contains 10 MCQ Questions.</p>
            <p className='p-5 bg-white h-[4rem] font-bold rounded-lg m-3'>Each question may have 4 or 2 options.</p>
            <p className='p-5 bg-white h-[4rem] font-bold rounded-lg m-3'>4 Options for Multiple choice quesions</p>
            <p className='p-5 bg-white h-[4rem] font-bold rounded-lg m-3'>2 options for True or False type of quesions.</p>
            <p className='p-5 bg-white h-[4rem] font-bold rounded-lg m-3'>Your final score will always be displyed on the top right corner.</p>
        </div>
        </div>
    </div>
  )
}

export default Instructions



