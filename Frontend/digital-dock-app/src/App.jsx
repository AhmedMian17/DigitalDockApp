import './App.css'
import { BrowserRouter } from "react-router"
import Router from './Router'

function App() {

  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <div>Hi</div>
    </>
  )
}

export default App
