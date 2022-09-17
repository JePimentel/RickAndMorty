import React from "react"
import './Residents.sass'

const Residents = ({children, location}) => {
    return (
        <section className="locationInfo">
            <h2>{location.name}</h2>
            <div className="locationInfoContent">
                <p><span>Type:</span> {location.type}</p>
                <p><span>Dimension:</span> {location.dimension}</p>
                <p><span>Population:</span> {location.residents.length}</p>
            </div>
            <div>
                {!location.residents.length && <p>No residents :c</p>}
                {children}
            </div>
        </section>
    )
}

export { Residents }