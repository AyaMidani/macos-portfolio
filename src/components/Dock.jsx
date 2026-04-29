import { dockApps } from '#constants';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import { Tooltip } from 'react-tooltip';
import gsap from 'gsap';
import useWindowStore from '#store/window.js';


gsap.registerPlugin(useGSAP);

function Dock() {
    const dockRef = useRef(null)
    const {openWindow, closeWindow, focusWindow, windows} = useWindowStore();
    const toggleApp = (app)=>{
        if(!app.canOpen) return;
        const window = windows[app.id];
        
        if (window.isOpen) {
            closeWindow(app.id);
        }
        else {
            openWindow(app.id);
        }
    }

    useGSAP(() => {
        const dock = dockRef.current;
        if(!dock) return () => {};
        const icons = dock.querySelectorAll('.dock-icon');
        const animateIcon = (mouseX)=>{
            const {left} = dock.getBoundingClientRect();
            icons.forEach((icon) => {
                const {left: l , width: w} = icon.getBoundingClientRect();
                const distance = Math.abs(mouseX - (l - left + w / 2));
                const intensity = Math.exp(-(distance ** 2.5) / 20000);
                gsap.to(icon,{scale:1 + 0.25 * intensity, y: -15 * intensity, duration:0.2, ease:'power1.out'})
            });
        }
        const handleMouseMove = (e) => {
            const {left} = dock.getBoundingClientRect();
            animateIcon(e.clientX - left);
        }
        const handleMouseLeave = () => {
            icons.forEach((icon) => gsap.to(icon,{scale:1, y:0, duration:0.3, ease:'power1.out'}))
        }
        dock.addEventListener('mousemove', handleMouseMove);
        dock.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            dock.removeEventListener('mousemove', handleMouseMove);
            dock.removeEventListener('mouseleave', handleMouseLeave);
        }
    },[]);

    
    return (
    <section id="dock">
        <div ref={dockRef} className='dock-container'>
            {
                dockApps.map(({id , icon, name, canOpen }) => (
                    <div key={id} className='relative flex justify-center'>
                        <button className={"dock-icon"} aria-label={name} data-tooltip-id="dock-tooltip" 
                        data-tooltip-content={name} data-tooltip-delay-show={200} onClick={()=> toggleApp({id,canOpen})}>
                            <img src={`/images/${icon}`} alt={name} loading='lazy' className={canOpen ? "" : "opacity-60"} />
                        </button>
                        <span className='absolute bottom-0 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity'>{name}</span>
                    </div>
                ))
            }
        <Tooltip id="dock-tooltip" place='top' className="tooltip" />
        </div>
    </section>
  )
}

export default Dock