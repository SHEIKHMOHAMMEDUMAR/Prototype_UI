import React from 'react'
import "./topbar.css"
import img1 from "./perfios.png"
const {faker} = require("@faker-js/faker");
export default function Topbar() {
  return (
    <div className="topbar">
        <img src={img1} alt="logo" className='image1'/>
        <a href='-' className='userName'>{faker.name.firstName()}</a>
    </div>
  )
}