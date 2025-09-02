import { useState } from "react"
import axios from "axios"
function App() {
  const [actorsList, SetActorList] = useState([])
  const [actressesList, SetActressesList] = useState([])


  // Sezione Attrici
  axios.get("https://lanciweb.github.io/demo/api/actresses/").then(resp => {
    console.log(resp.data)
  })


  return (
    <>
      <div>esercizio di oggi Lista attori
      </div>
    </>
  )
}

export default App
