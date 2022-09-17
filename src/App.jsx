import axios from 'axios'
import React, { useContext, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { ResidentInfo } from './components/ResidentInfo'
import { Residents } from './components/Residents'
import { Search } from './components/Search'
import { WebPages } from './components/WebPages'
import { RamContext } from './context'

function App() {

  const {
    locations,
    error
  } = useContext(RamContext)

  let location

  if(locations.length <= 1) { 
    location = locations[0]
  } else {
    const data = [...locations]
    location = data[Math.floor(Math.random() * 125) + 1]
  }

  return (
    <React.Fragment>
      <Header />
      <Search />
      {error && <p>Lo sentimos, hubo un error</p>}
      {
        !location ? 
          <p>CARGANDOOOOOOOOO ALV.....</p>
        :
          <Residents location={location}>
            {
              location.residents.map(resident => (
                <ResidentInfo resident={resident} key={resident}/>
              ))
            }
          </Residents>
      }
      <WebPages />
    </React.Fragment>
  )
}

export default App
