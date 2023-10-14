import React from 'react'

const Badget = ({barTitle, badgetTitle}) => {
  return (
<div className="d-flex gap-5 align-items-center flex-wrap ">
    {barTitle} :
    {badgetTitle.map((badge) => (
      <p className={`${barTitle==='Categories' ? 'bg-primary' : barTitle==='Languages' ? 'bg-danger' : barTitle==='Companies' ? 'bg-success ' : null} rounded-2 p-2 mt-3` }>{badge.name}</p>
    ))}
  </div>
  )
}

export default Badget
