import React, {useState, useEffect} from 'react'
import './index.css'
import {useCostumHooks} from '../../context'

const BookRow = ({ item }) => {
    // const [css, setCss] = useState({
    //     "bookClass": "book_row", "imageClass": "book_cover_image_conatiner", "fullBookCss": "full_book", "infoClass": "book_info", "authorClass": "book_author", "titleClass": "book_title", "progressClass": "reading_process"
    // })
    const [bookClass, setBookClass] = useState("book_row")
    const [imageClass, setImageClass] = useState("book_cover_image_conatiner")
    const [fullBookClass, setFullBookClass] = useState("full_book")
    const [infoClass, setInfoClass] = useState("book_info")
    const [authorClass, setAuthorClass] = useState("book_author")
    const [titleClass, setTitleClass] = useState("book_title")
    const [progressClass, setProgressClass] = useState("reading_process")
    const [genreClass, setGenreClass] = useState("book_genre")
    const [genreCss, setGenreCss] = useState("genre")
    const [percentClass, setPercentClass] = useState("percent")
    const {grid} = useCostumHooks()
    
    useEffect(() => {
        if(grid) {
            setBookClass("book_row")
            setImageClass("book_cover_image_conatiner")
            setFullBookClass("full_book")
            setInfoClass("book_info")
            setAuthorClass("book_author")
            setTitleClass("book_title")
            setProgressClass("reading_process")
            setGenreClass("book_genre")
            setGenreCss("genre")
            setPercentClass("percent")
        } else {
            setBookClass("book_col")
            setImageClass("book_cover_image_conatiner_list")
            setFullBookClass("")
            setInfoClass("book_info_list")
            setAuthorClass("book_author_list")
            setTitleClass("book_title_list")
            setProgressClass("reading_process_list")
            setGenreClass("book_genre_list")
            setGenreCss("genre_list")
            setPercentClass("percent_list")
        }
    }, [grid])

    return (
        <div className={bookClass}>
            <div className={fullBookClass}>
                <div className={progressClass}>
                    <span className={percentClass}>{item.progress}%</span>
                </div>
                <div className={genreClass}>
                    <span className={genreCss}>{item.genre}</span></div>
                <img src={item.image} alt="book cover" className={imageClass}></img>
            </div>
            <div className={infoClass}>
                <span className={authorClass}>{item.title}</span>
                <span className={titleClass}>{item.writer}</span>
            </div>

        </div>
    )
}

export default BookRow
