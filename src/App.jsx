import { useState, useEffect } from "react"
import axios from "axios"
import ActressesList from "./assets/ActressesList"
import ActorsList from "./assets/ActorsList"
function App() {
  const [actorsList, SetActorList] = useState([])
  const [actressesList, SetActressesList] = useState([])
  const [fullList, SetfullList] = useState([])
  const [searchActors, SetSearchActors] = useState(``)
  const [filteredActorsList, SetFilterredActorsList] = useState(``)


  // Sezione Attrici
  const generateActos = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then(resp => {
      // console.log(resp.data)
      SetActressesList(resp.data)
      // console.log(actressesList)
    });
  };
  useEffect(generateActos, [])

  //Sezioni Attori
  const generateActresses = () => {
    axios.get("https://lanciweb.github.io/demo/api/actors/").then(resp => {
      SetActorList(resp.data)
    });
  };
  useEffect(generateActresses, [])

  // Array di tutti gli attori 

  const generetateFullList = () => {
    const allActors = [...actorsList, ...actressesList]
    SetfullList(allActors)
  };

  //array per filtraggio
  const filteredList = fullList.filter(act => {
    return (
      act.name.toLowerCase().includes(searchActors)
    )
  });

  const handlesearch = (e) => {
    SetSearchActors(e.target.value)
  }


  useEffect(generetateFullList, [actorsList, actressesList])
  console.log(fullList)
  return (
    <div className="container">
      <div className="row">
        <div className="col-100">
          <h1>ATTORI FAMOSI</h1>
          <input type="text" className="search" placeholder="Cerca Attore il tuo attore preferito..." value={searchActors} onChange={handlesearch} />
        </div>
      </div>
      <div className="row">
        {filteredList.map((act, index) => {
          return (
            <div className="col-33" key={index}>
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
        })}
        {/* {actressesList.map((actresses) => {
          return (
            <ActressesList key={actresses.id} actresses={actresses} />
            )
            })},
            
            {actorsList.map((actors) => {
          return (
            <ActorsList key={actors.id} actors={actors} />
            )
            })} */}

      </div>
    </div >
  )
}

export default App
