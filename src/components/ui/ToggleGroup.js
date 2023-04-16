import React from 'react'
import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import ViewModuleIcon from '@mui/icons-material/ViewModule'
import ViewListIcon from '@mui/icons-material/ViewList';

const ToggleGroup = ({ value, onChange }) => {
  return (
    <ToggleButtonGroup
      size="small"
      value={value}
      onChange={onChange}
      exclusive
    >
      <ToggleButton value="list" aria-label="list">
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton value="grid" aria-label="grid">
        <ViewModuleIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ToggleGroup