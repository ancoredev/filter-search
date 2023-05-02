import React from 'react'

const Modal = ({ isOpen, onClose, children}) => {

  return (
    <div 
      className={isOpen ? "modal-container active" : "modal-container"} 
      onClick={onClose}
    >
      <div className="modal-inner" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal