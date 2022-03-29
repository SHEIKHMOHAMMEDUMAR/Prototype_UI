import { Dashboard, Money, Settings, Speed, Widgets } from '@material-ui/icons'
import React from 'react'
import "./sidebar.css"
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='top'><Dashboard/><span>Dashboard</span></div>
        <div className='icon'><Money/><span>Transaction</span></div>
        <div className='icon'><Widgets/><span> Entites</span></div>
        <div className='icon'><Speed/><span> Health</span></div>
        <div className='bot'><Settings/><span>Settings</span></div>
    </div>
  )
}