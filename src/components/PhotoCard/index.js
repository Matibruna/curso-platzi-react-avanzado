import React, { useEffect, useRef, useState } from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import { ImgWrapper, Image, Button, Article } from './styles'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE }) => {

    const ref = useRef(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        const observer = new window.IntersectionObserver(function (entries){
            const { isIntersecting } = entries[0]
            console.log(isIntersecting)
            if(isIntersecting){
                setShow(true)
                observer.disconnect()
            }
        })
        observer.observe(ref.current)
    }, [ref])

    return(
        <Article ref={ref}>
            {
                show ? 

                <>
                    <a href={`/detail/${id}`}>
                        <ImgWrapper>
                            <Image src={src} />                   
                        </ImgWrapper>
                    </a>

                    <Button>
                        <MdFavoriteBorder size='32px' /> {likes} likes!
                    </Button>
                </>
                :
                <>
                </>
            }
        </Article>
    )
}