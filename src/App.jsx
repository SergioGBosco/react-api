import { useState } from "react"
import axios from "axios"
import ActressesList from "./assets/ActressesList"
function App() {
  const [actorsList, SetActorList] = useState([])
  const [actressesList, SetActressesList] = useState([])


  // Sezione Attrici
  axios.get("https://lanciweb.github.io/demo/api/actresses/").then(resp => {
    // console.log(resp.data)
    SetActressesList(resp.data)
    // console.log(actressesList)
  })

  //Sezioni Attori
  axios.get("https://lanciweb.github.io/demo/api/actors/").then(resp => {
    SetActorList(resp.data)
  })


  return (
    <div className="container">
      <div className="row">
        {actressesList.map((actresses) => {
          return (
            <ActressesList key={actresses.id} actresses={actresses} />
          )
        })}
      </div>
    </div >
  )
}

export default App
