import React from 'react'
import{ ITax} from "../Interfaces"

interface Props{
    tax:ITax;
}

const TaxList=({tax}:Props)=> {
  return (
    <div>{tax.month}{tax.tax}</div>
  )
}

export default TaxList