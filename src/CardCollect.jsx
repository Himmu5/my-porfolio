import React from 'react'
import MyProject from './MyProject'

export default function CardCollect() {
  return (
    <div className='sm:ml-20 sm:mr-20 space-y-10 m-5 rounded-xl pt-10 pb-10 '>
        <h1 className='font-bold text-5xl text-center'>Project</h1>

        <MyProject photo="https://cdn.discordapp.com/attachments/1010741357431750817/1010741525732401233/Capture.JPG"/>
        <MyProject photo="https://cdn.discordapp.com/attachments/1010741357431750817/1010743138039631882/Spotify.JPG"/>
        <MyProject photo="https://cdn.discordapp.com/attachments/1010741357431750817/1010746527246987274/Responsive_Cards.jpeg"/>
        
    </div>
  )
}