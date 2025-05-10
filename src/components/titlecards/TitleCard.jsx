import React, { useEffect, useRef, useState } from 'react'
import './titlecard.css'
import cardsData from '../../assets/Card/card.jsx'
import { Link } from 'react-router-dom'

const TitleCard = ({ title, category }) => {
    const [apiData, setApiData] = useState([])
    const cardRef = useRef()
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjE5NjQwYzIyMGJmZmZiNmNiMzljZmI0NDM1ODYzMSIsIm5iZiI6MTc0NjgxNjgxNi42MzgsInN1YiI6IjY4MWU0ZjMwY2U3ZjAwNTFlODkyZTdiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9ElKNU3_D5TCzK2WBMOGmBkk_OjZtgCFM03qQxNZko4'
        }
    };



    const handleWheel = (event) => {
        event.preventDefault;
        cardRef.current.scrollLeft += event.deltaY;
    }
    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${category ? category : "upcoming"}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results))
            .catch(err => console.error(err));

        cardRef.current.addEventListener('wheel', handleWheel)
    }, [])

    return (
        <div className='titleCard'>
            <h2>{title ? title : 'Popular on Netflix'}</h2>
            <div className="cardlist" ref={cardRef}>
                {
                    apiData.map((card, index) => {
                        return <Link to={`/player/${card.id}`} className='card' key={index}>
                            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
                            <p>{card.original_title}</p>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default TitleCard
