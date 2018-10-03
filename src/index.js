import "./index.css"
import { render } from "react-dom"
import configureStore from "./stores/configureStore"
import React from "react"
import Root from "./components/Root"

const store = configureStore()

render(<Root store={store} />, document.getElementById("root"))
module.hot.accept()
