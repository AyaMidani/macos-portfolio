import React from 'react'
import WindowWrapper from '#hoc/WindowWrapper.jsx'
import useWindowStore from '#store/window.js'
import { WindowControls } from '#components'

function Image() {
  const { windows } = useWindowStore()
  const data = windows.imgfile?.data

  if (!data) {
    return null
  }

  const { name, imageUrl } = data

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>
      <div className="image-content p-4">
        {imageUrl && (
          <div className="image-container">
            <img src={imageUrl} alt={name} className="max-w-full" />
          </div>
        )}
      </div>
    </>
  )
}

const ImageWindow = WindowWrapper(Image, 'imgfile')

export default ImageWindow