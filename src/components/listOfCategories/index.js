import React, { useState, useEffect } from "react"
import { Category } from "../Category"
import { List, Item } from "./styles"

function useCategoriesData(){

    const [categories, setCategories] = useState([])        
    const [loading, setLoading] = useState(false)

    useEffect(function (){
        setLoading(true)
        fetch('https://petgram-server-matiasb-matibruna.vercel.app/categories')
        .then( res => res.json() )
        .then( response => {
            setCategories(response)
            setLoading(false)
        })
    }, [])

    return { categories, loading }
}

export const ListOfCategories = () => {

    const { categories, loading } = useCategoriesData()
    const [showFixed, setShowFixed] = useState(false)

    useEffect(function(){
        const onScroll = e => {
            setShowFixed(window.scrollY > 200)
        }

        document.addEventListener('scroll', onScroll)

        return() => document.removeEventListener('scroll', onScroll)
    }, [showFixed])

    const renderList = (fixed = false) => (
        <List fixed={fixed}>
            {
                loading ?
                    <Item>
                        <Category key='loading'/>
                    </Item>
                :
                categories.map( category => 
                    <Item key={category.id}>
                        <Category {...category}/>
                    </Item>
                )
            }
        </List>
    )

    return(
        <>
            {
                renderList()
            }
            {
                showFixed && renderList(true)
            }
        </>
    )
}