import { useQuery, gql } from '@apollo/client'

export function useGetPhotos(categoryId){
    
    const getPhotos = gql`
    query getPhotos($categoryId: ID) {
        photos(categoryId: $categoryId) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }`

    return useQuery(getPhotos, { variables: { categoryId }})  // destructuras la data y el estado de loading y error     
}
