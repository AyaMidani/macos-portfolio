import dayjs from 'dayjs'
import React from 'react'
import { navIcons, navLinks } from '../constants'


function navbar() {
  return (
    <nav>
        <div>
            <img src="/images/logo.svg" alt="Apple Logo" />
            <p className='font-bold'>Aya's Portfolio</p>
            <ul>
                {navLinks.map(({id,name}) => (
                    <li key={id}><p>{name}</p></li>
                ))}
            </ul>
        </div>

        <div>
            <ul>
                {navIcons.map(({id,img}) => (
                    <li key={id}><img src={img} className='icon-hover' alt={`Icon ${id}`} /></li>
                ))}
            </ul>
            <time>{dayjs().format('ddd MMM D h:mm A')}</time>
        </div>
    </nav>
  )
}

export default navbar