import { useState, useEffect } from "react"
import axios from "axios"
import ActressesList from "./assets/ActressesList"
import ActorsList from "./assets/ActorsList"
function App() {
  const [actorsList, SetActorList] = useState([])
  const [actressesList, SetActressesList] = useState([])
  const [fullList, SetfullList] = useState([])


  // Sezione Attrici
  const genereteActos = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then(resp => {
      // console.log(resp.data)
      SetActressesList(resp.data)
      // console.log(actressesList)
    });
  };
  useEffect(genereteActos, [])
  console.log(actorsList)
  //Sezioni Attori
  const genereteActresses = () => {
    axios.get("https://lanciweb.github.io/demo/api/actors/").then(resp => {
      SetActorList(resp.data)
    });
  };
  useEffect(genereteActresses, [])
  console.log(actressesList)

  const allActors = [...actorsList, ...actressesList]
  // SetfullList(allActors)

  return (
    <div className="container">
      <div className="row">
        {/* {allActors.map((act) => {
          return (
            <div className="col-33" key={act.id}>
              <div className="card">
                <div className="card-img">
                  <img src={act.image} alt={act.name} />
                </div>
                <div className="description">
                  <>
                    <span>{act.name}</span>
                    <span>{act.birth_year}</span>
                    <span>{act.nationality}</span>
                    <span>{act.awards}</span>
                    <p>{act.biography}</p>
                  </>
                </div>
              </div>
            </div>
          )
        })} */}
        {actressesList.map((actresses) => {
          return (
            <ActressesList key={actresses.id} actresses={actresses} />
          )
        })},

        {actorsList.map((actors) => {
          return (
            <ActorsList key={actors.id} actors={actors} />
          )
        })}
      </div>
    </div >
  )
}

export default App
