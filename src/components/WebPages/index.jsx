import axios from "axios"
import React, { useState, useEffect, useContext } from "react"
import { Pagination } from "@mui/material"
import './WebPages.sass'
import { RamContext } from "../../context"

const WebPages = () => {

    const [page, setPage] = useState(1)
    
    const { 
        locations,
        setLocations,
        locationsQuantity,
        isLoading
    } = useContext(RamContext)

    useEffect(() => {
        if(!isLoading) {
            async function getNewData () {
                const res = await axios.get(`https://rickandmortyapi.com/api/location/${page}`)
                setLocations([res.data])
            }
            console.log('useeffect de webpages')
            getNewData()
        }
    }, [page])


    const getCurrentPage = (e, value) => {
        setPage(value)
    }

    return (
        <div className="pages">
            <Pagination count={locationsQuantity} page={page} shape="rounded" onChange={getCurrentPage}/>
        </div>
    )
}

export { WebPages }