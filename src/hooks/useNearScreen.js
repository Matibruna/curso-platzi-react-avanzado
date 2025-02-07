import { useState, useEffect, useRef } from "react";

export function useNearScreen(){
    const ref = useRef(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        const observer = new window.IntersectionObserver(function (entries){
            const { isIntersecting } = entries[0]
            if(isIntersecting){
                setShow(true)
                observer.disconnect()
            }
        })
        observer.observe(ref.current)
    }, [ref])

    return [show, ref]
}