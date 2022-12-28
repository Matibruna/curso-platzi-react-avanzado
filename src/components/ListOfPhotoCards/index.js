import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetPhotos } from '../../hooks/useGetPhotos'

const ListOfPhotoCardsComponent = () => {

    return(
        <ul>
            {
                [1,2,3,4,5].map( photoCard => <li key={photoCard}><PhotoCard id={photoCard}/></li> )
            }       
        </ul>
    )
}

export const ListOfPhotoCards = ({categoryId}) => {
    const { data, loading, error } = useGetPhotos(categoryId)
    if (loading) return 'Loading...' // manejas el estado para que no te saque error mientras hace el fetch
    if (error) return <pre>{error.message}</pre>
    return (
      <ul>
        {data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
      </ul>
    )
  }
