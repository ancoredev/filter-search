import React from 'react'

const Modal = ({ isOpen, onClose, children}) => {
  return (
    <div className="modal-container">
      {children}
    </div>
  )
}

export default Modal