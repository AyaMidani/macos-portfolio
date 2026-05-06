import React from 'react'
import WindowWrapper from '#hoc/WindowWrapper.jsx'
import useWindowStore from '#store/window.js'
import { WindowControls } from '#components'

function Text() {
  const { windows } = useWindowStore()
  const data = windows.txtfile?.data

  if (!data) {
    return null
  }

  const { name, subtitle, description } = data

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>
      <div className="text-content p-4">
        {subtitle && (
          <h3 className="text-lg font-medium mb-2">{subtitle}</h3>
        )}
        {description && description.map((paragraph, index) => (
          <p key={index} className="mb-3">{paragraph}</p>
        ))}
      </div>
    </>
  )
}

const TextWindow = WindowWrapper(Text, 'txtfile')

export default TextWindow