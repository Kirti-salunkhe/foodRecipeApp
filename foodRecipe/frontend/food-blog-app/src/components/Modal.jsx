import React from 'react'

export default function Modal({children, onClose}) {
  return (
    <>
        <div className='backdrop'onClick={onClose}></div>
            <dialog className='modal' open>
                {children}
            </dialog>
        
    </>
  )
}
