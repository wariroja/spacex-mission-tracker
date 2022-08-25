import React from 'react'
import { TextField } from '@mui/material'


interface FilterProps {
    value: string 
    onChange: (e: any) => void
    
  }

export default function Input({ value, onChange, ...other }: FilterProps ) {
    return (
        <TextField
            value={value}
            onChange={onChange}
            {...other}
        />
    )
}
