import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import { binaryExpression } from "@babel/types"

function primeiroJSX(){
  return {
    <div>
    Samuel Barros errado
    </div>
  }
}
const App = () => {

  return (
    <div className="App">
      {primeiroJSX()}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
