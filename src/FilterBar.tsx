import React from 'react'
import { TextField } from '@mui/material'


interface FilterProps {
    label: string
    name: string
    value: string 
    onChange: (e: any) => void
    
  }

export default function Input({ label, name, value, onChange, ...other }: FilterProps ) {
    return (
        <>
            <TextField
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                {...other}
                sx = {{margin: "20px", width: "600px"}}
            />
            <div className="italic">
            Search for a mission, or sort by name and year launched
            </div>
        </>
    )
}
