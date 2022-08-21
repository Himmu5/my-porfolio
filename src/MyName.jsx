import React from 'react'

export default function MyName() {
  return (
    <div className='flex flex-col justify-center  text-black shadow-xl bg-white pt-40 pl-4 pr-4 pb-40 m-5   sm:flex-row sm:gap-5 sm:p-40 sm:m-20 rounded-xl '>
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1AMwNu6MVJUqNhalcPPgF2rfWPNzn-5eODjVL7Pt972IB3ZuHQYXRwbRmxWAIehYE4ctCV2xnUP3Z3ZZsZR4Nc7LxNgWryEgBmsg69ay0SVltXZPgVOLt2VYVVa3X2cLeGexmKjQmcni6cTkAC-SNU1CHuW_O0KLGPWBZUG3ZxyXXlsWqujf2mAAM/s320/mypic.png" className='rounded-full' alt="" />
        <div className='flex flex-col'>
        <h1 className='text-center mt-10 text-5xl font-bold'>Hy, my name is Himanshu Chauhan </h1>
        <button className='mt-20 pl-4 pr-4 pt-2 pb-2 bg-orange-600 text-white w-1/2 self-center hover:bg-orange-400 rounded-xl '>Download Resume</button>
        </div>
    </div>
  )
}
