import { useState } from 'react'

const useModal = (initialModalState) => {
  const [open, setOpen] = useState(initialModalState);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return {
    open,
    handleClose,
    handleOpen
  }
}

export default useModal