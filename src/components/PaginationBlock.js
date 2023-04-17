import React from 'react'
import { Stack, Pagination } from '@mui/material'

import { useSelector, useDispatch } from 'react-redux'
import { setCurrentPage } from '../features/productsSlice'

const PaginationBlock = () => {
  const dispatch = useDispatch();
  const { currentPage, pageCount } = useSelector(state => state.products);

  return (
    <Stack spacing={2}>
      <Pagination 
        count={pageCount}
        page={currentPage}
        onChange={(e, value) => dispatch(setCurrentPage({ currentPage: value }))}
        variant="outlined" 
        shape="rounded" 
      />
    </Stack>
  )
}

export default PaginationBlock