import React from 'react'

const ActressesList = ({ actresses }) => {
  return (
    <div className="col-33" key={actresses.id}>
      <div className="card">
        <div className="card-img">
          <img src={actresses.image} alt={actresses.name} />
        </div>
        <div className="description">
          <>
            <span>{actresses.name}</span>
            <span>{actresses.birth_year}</span>
            <span>{actresses.nationality}</span>
            <span>{actresses.awards}</span>
            <p>{actresses.biography}</p>
          </>
        </div>
      </div>
    </div>
  )
}

export default ActressesList
