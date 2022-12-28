import React, { useState, useEffect } from "react"
import { Category } from "../Category"
import { List, Item } from "./styles"

export const ListOfCategories = () => {

    const [categories, setCategories] = useState([])
    const [showFixed, setShowFixed] = useState(false)

    useEffect(function (){
        fetch('https://petgram-server-matiasb-matibruna.vercel.app/categories')
            .then( res => res.json() )
            .then( response => {
                setCategories(response)
            })
    }, [])

    useEffect(function(){
        const onScroll = e => {
            setShowFixed(window.scrollY > 200)
        }

        document.addEventListener('scroll', onScroll)

        return() => document.removeEventListener('scroll', onScroll)
    }, [showFixed])

    const renderList = (fixed = false) => (
        <List className={fixed ? 'fixed' : ''}>
            {
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