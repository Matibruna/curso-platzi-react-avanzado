import React from "react"
import { GlobalStyle } from "./GlobalStyles"
import { ListOfPhotoCards } from "./components/ListOfPhotoCards"
import { ListOfCategories } from "./components/ListOfCategories"

export default function App(){
    return(
        <>
            <GlobalStyle />
            <h1>Bienvenidos al curso de react avanzado.</h1>
            <ListOfCategories />
            <ListOfPhotoCards />
        </>
    )
}