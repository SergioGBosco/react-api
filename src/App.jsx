import { useState } from "react"
import axios from "axios"
function App() {
  const [actorsList, SetActorList] = useState([])
  const [actressesList, SetActressesList] = useState([])


  // Sezione Attrici
  axios.get("https://lanciweb.github.io/demo/api/actresses/").then(resp => {
    // console.log(resp.data)
    SetActressesList(resp.data)
    // console.log(actressesList)
  })


  return (
    <div className="container">
      <div className="row">
        {actressesList.map((actresses) => {
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
        })}
      </div>
    </div >
  )
}

export default App
