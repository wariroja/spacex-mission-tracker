import React from 'react'
import { TextField } from '@mui/material'


interface FilterProps {
    label: string
    value: string 
    onChange: (e: any) => void
    
  }

export default function FilterBar({ label, value, onChange, ...other }: FilterProps ) {
    return (
        <>
            <TextField
                label="search"
                value={value}
                onChange={onChange}
                {...other}
                sx = {{margin: "20px", width: "600px"}}
            />
            <div className="italic" data-testid="filter">
            Search for a mission, or sort by name and year launched
            </div>
        </>
    )
}
