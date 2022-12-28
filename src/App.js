import React from "react"
import { Logo } from "./components/Logo"
import { GlobalStyle } from "./Styles/GlobalStyles"
import { ListOfPhotoCards } from "./components/ListOfPhotoCards"
import { ListOfCategories } from "./components/ListOfCategories"

export default function App(){
    return(
        <>
            <GlobalStyle />
            <Logo/>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={1}/>
        </>
    )
}