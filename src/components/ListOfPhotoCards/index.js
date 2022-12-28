import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCardsComponent = (props) => {

    return(
        <ul>
            {
                props.photos.map( photo => <li key={photo.id}><PhotoCard {...photo}/></li> )
            }       
        </ul>
    )
}
