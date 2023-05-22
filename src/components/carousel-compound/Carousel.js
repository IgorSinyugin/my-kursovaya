import { useEffect, useRef, useState } from "react"
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'
import { CarouselContext } from "./carousel-context"
import "./Carousel.css"
import {Page} from './Page/Page'

export const Carousel = ({children}) =>{

    const [offset,setOffset] = useState(0)
    const [width,setWidth] = useState(1920)
    const windowElRef = useRef()


    useEffect(() => {
        const resizeHandler = () => {
          const _width = windowElRef.current.offsetWidth
          setWidth(_width)
          setOffset(0)
        }
        resizeHandler()
        window.addEventListener('resize', resizeHandler)
    
        return () => {
          window.removeEventListener('resize', resizeHandler)
        }
      }, [])

    const handleLeftArrowClick = () =>{
        setOffset((currentOffset) =>{
            const newOffset = currentOffset + width
            const maxOffset = -(width* (children.length - 1))
            if(newOffset > 0){
                return maxOffset
            }
            return Math.min(newOffset,0)
        })
    }
    const handleRightArrowClick = () =>{
        setOffset((currentOffset) =>{
            const newOffset = currentOffset - width
            const maxOffset = -(width* (children.length - 1))
            if(newOffset < maxOffset){
                return 0
            }
            return Math.max(newOffset,maxOffset)
        })

    }

    

    return(
        <CarouselContext.Provider value={{width}}>
            <div className="main-container">
                <div className="area_arrow" onClick={handleLeftArrowClick}>
                    <FaChevronLeft className="arrow"/>
                </div>
                <div className="window" ref={windowElRef}>
                    <div className="all-pages-container"
                    style={{
                        transform: `translateX(${offset}PX)`,
                    }}
                    >{children}</div>
                </div>
                <div className="area_arrow" onClick={handleRightArrowClick}>
                    <FaChevronRight className="arrow"/>
                </div>
            </div>
        </CarouselContext.Provider>
    )



}
Carousel.Page = Page