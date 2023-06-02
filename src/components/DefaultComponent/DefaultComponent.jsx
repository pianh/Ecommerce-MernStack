import React from 'react'
import HeaderComponent from '../HeaderComponents/HeaderComponent'
//Nhan children
const DefaultComponent = ({children}) => {
  return (
    <div>
      <HeaderComponent />
      {children}
    </div>
  )
}

export default DefaultComponent
