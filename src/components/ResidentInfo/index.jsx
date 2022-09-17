import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { RamContext } from "../../context"
import './ResidentInfo.sass'

const ResidentInfo = ({resident}) => {
    
    const [character, setCharacter] = useState({})

    const {
        isLoading,
        setIsLoading
    } = useContext(RamContext)
    
    useEffect(() => {
        axios.get(resident)
            .then(res => setCharacter(res.data))
    }, [resident])


    return (
        <div className="residentInfoContainer">
            <picture>
                <img src={character?.image} alt="" />
            </picture>
            <div className="residentInfoContent">
                <h3>{character?.name}</h3>
                <p><span></span> {character?.status} - {character?.species}</p>
                <p>Origin</p>
                <span>{character.origin?.name}</span>
                <p>Episodes where appear</p>
                <span>{character.episode?.length}</span>
            </div>
        </div>
    )
}

export { ResidentInfo }