import WindowWrapper from '#hoc/WindowWrapper'
import React from 'react'
import { WindowControls } from '#components'
import { socials } from '#constants/index.js'

function Contact() {
  return (
    <>
    <div id="window-header">
        <WindowControls target="contact" />
          <h2>Contact Me</h2>
      </div>
    <div className='p-5 space-y-5'>
        <img src="/images/me.jpeg" alt="Me" className='w-30 h-30 rounded-full' />
        <h3>Let's connect!</h3>
        <p>Got an idea? A bug to squash? Feel free to reach out!</p>
        <p><a href="mailto:Ayamidani98@gmail.com">Ayamidani98@gmail.com</a></p>
        <ul>{socials.map(({id, link, text, icon, bg}) => (
          <li key={id} style={{backgroundColor: bg}}>
            <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
              <img src={icon} alt={text} className='size-5' />
              <p>{text}</p>
            </a>
          </li>
        ))}</ul>
    </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, "contact")
export default ContactWindow