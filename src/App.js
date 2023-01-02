import React from "react"
import { Logo } from "./components/Logo"
import { GlobalStyle } from "./Styles/GlobalStyles"
import { ListOfPhotoCards } from "./components/Hoc/ListOfPhotoCards"
import { ListOfCategories } from "./components/ListOfCategories"
import { PhotoCardWithQuery } from "./components/Hoc/PhotoCardWithQuery"

export default function App(){

    const urlParams = new window.URLSearchParams(window.location.search)

    const detailId = urlParams.get('detail')

    return(
        <>
            <GlobalStyle />
            <Logo/>
            <ListOfCategories />
            {
                detailId ? 
                <PhotoCardWithQuery id={detailId} />
                :
                <ListOfPhotoCards categoryId={1}/>
            }
        </>
    )
}
