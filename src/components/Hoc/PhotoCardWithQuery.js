import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { PhotoCard } from '../PhotoCard'

const query = gql`
    query getSinglePhoto($id: ID!){
        photo(id: $id){
            id
            categoryId
            src
            likes
            liked
            userId
        }
    }
`

export const PhotoCardWithQuery = ({id}) => {
    const { loading, error, data } = useQuery(query, { variables: { id: id }})
    
    if(error) return <h2>Internal server error.</h2>

    if(loading) return <h3>Loading...</h3>

    return <PhotoCard {...data.photo}/>
}