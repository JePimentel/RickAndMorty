import React, { useContext, useState } from 'react'
import { RamContext } from '../../context'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './Search.sass'

const Search = () => {

     const [searchedLocation, setSearchedLocation] = useState('')

    const {
        locationsName
    } = useContext(RamContext)

    let valueToSearch = ''
    

    const getSearchedValue = (e) => {
        setSearchedLocation(e.target.value)
    }

    const findValue = () => {
        console.log(searchedLocation)
    }

    return (
        <div className="containerSearch" >
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={locationsName}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Location" onMouseEnter={getSearchedValue}/>}
                value={searchedLocation}
                onInputChange={getSearchedValue}
                onKeyDown={getSearchedValue}
            />
            <button 
                onClick={findValue}
            >
                Search
            </button>
        </div>
    )
}

export { Search }