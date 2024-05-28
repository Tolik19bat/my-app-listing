import './App.css'
import Listing from "./components/Listing"
import dataJson from "./data"

function App() {

  const data = JSON.parse(dataJson);

  return (
    <>
    <Listing items={data}/>
    </>
  )
}

export default App
