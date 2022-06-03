import React from 'react'
import Scanner from '../home_components/Scanner'
import Agent from '../support_components/Agent'
import Services from '../support_components/Services'
import Topics from '../support_components/Topics'

const Support = () => {
  return (
    <div>
        <Services/>
        <Agent/>
        <Topics/>
        <Scanner/>
    </div>
  )
}

export default Support