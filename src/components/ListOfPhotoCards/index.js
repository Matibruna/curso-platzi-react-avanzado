import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => {

    return(
        <ul>
            {
                [1,2,3,4,5].map( photoCard => <li key={photoCard}><PhotoCard/></li> )
            }       
        </ul>
    )
}
