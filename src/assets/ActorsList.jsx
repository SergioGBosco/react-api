import React from 'react'

const ActorsList = ({ actors }) => {
  return (
    <div className="col-33" key={actors.id}>
      <div className="card">
        <div className="card-img">
          <img src={actors.image} alt={actors.name} />
        </div>
        <div className="description">
          <>
            <span>{actors.name}</span>
            <span>{actors.birth_year}</span>
            <span>{actors.nationality}</span>
            <span>{actors.awards}</span>
            <p>{actors.biography}</p>
          </>
        </div>
      </div>
    </div>
  )
}

export default ActorsList
