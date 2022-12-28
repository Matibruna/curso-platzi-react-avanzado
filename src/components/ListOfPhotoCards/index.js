import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery, gql } from '@apollo/client'

const ANIMALS_QUERY = gql`
    query getPhotos {
        photos {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`

const ListOfPhotoCardsComponent = () => {

    return(
        <ul>
            {
                [1,2,3,4,5].map( photoCard => <li key={photoCard}><PhotoCard id={photoCard}/></li> )
            }       
        </ul>
    )
}

export const ListOfPhotoCards = () => {
    const { data, loading, error } = useQuery(ANIMALS_QUERY)  // destructuras la data y el estado de loading y error 
    if (loading) return 'Loading...' // manejas el estado para que no te saque error mientras hace el fetch
    if (error) return <pre>{error.message}</pre>
    return (
      <ul>
        {data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
      </ul>
    )
  }
