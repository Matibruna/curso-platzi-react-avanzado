import React from 'react'
import { useGetPhotos } from '../../hooks/useGetPhotos'
import { ListOfPhotoCardsComponent } from '../ListOfPhotoCards'

export const ListOfPhotoCards = ({categoryId}) => {
    const { data, loading, error } = useGetPhotos(categoryId)
    if (loading) return 'Loading...' // manejas el estado para que no te saque error mientras hace el fetch
    if (error) return <pre>{error.message}</pre>
    return (
      <ListOfPhotoCardsComponent photos={data.photos}/>
    )
  }