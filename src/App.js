import React from "react"
import { GlobalStyle } from "./GlobalStyles"
import { ListOfCategories } from "./components/listOfCategories"

export default function App(){
    return(
        <>
            <GlobalStyle />
            <h1>Bienvenidos al curso de react avanzado.</h1>
            <ListOfCategories />
        </>
    )
}