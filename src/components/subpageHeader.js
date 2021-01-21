import React from "react"

const SubpageHeader = props => {
  return (
    <div className="subpage-header">
      <h1 className="subpage-header__title">{props.title}</h1>
    </div>
  )
}

export default SubpageHeader
