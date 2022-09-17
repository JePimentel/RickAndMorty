import React, { useState, useEffect, createContext } from "react"
import axios from "axios"

const RamContext = createContext()

const RamProvider = (props) => {
    const [isLoading, setIsLoading] = useState(true)
    const [locations, setLocations] = useState([])
    const [locationsQuantity, setLocationsQuantity] = useState(0)
    const [error, setError] = useState('')
   

    useEffect(() => {
        let data = []
        let response = []
        async function test() {
            try {
                for (let i = 1; i <= 7; i++) {
                    response = await axios.get(`https://rickandmortyapi.com/api/location?page=${i}`)
                    data = [...data, ...response.data.results]
                }
                setLocations(data)
                setLocationsQuantity(data.length)
            } catch (err) {
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }
        test()
    }, [])

    const locationsName = locations.map(location =>location['name'])

    return (
        <RamContext.Provider value={{
            locations,
            isLoading,
            setIsLoading,
            setLocations,
            locationsQuantity,
            error,
            locationsName
        }}>
            {props.children}
        </RamContext.Provider>
    )
}

export { RamProvider, RamContext }