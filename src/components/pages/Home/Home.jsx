import React from 'react'
import './home.css'
import Navbar from '../../navbar/Navbar'
import backgroundbanner from '../../../assets/heroMov.png'
import titlehero from '../../../assets/titlehero.png'
import info from '../../../assets/info.png'
import play from '../../../assets/play.png'
import TitleCard from '../../titlecards/TitleCard'
import Footer from '../../footer/Footer'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className="hero">
                <img src={backgroundbanner} alt="" className='bannerimg' />
                <div className="herocaption">
                    <img src={titlehero} alt="" className='captionimg' />

                    <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
                    <div className="herobtns">
                        <button className='btn'><img src={play} alt="" />Play</button>
                        <button className='btn btn-dark'><img src={info} alt="" />Info</button>
                    </div>
                    <TitleCard />
                </div>
            </div>
            <div className="morecards">
                <TitleCard title={"Blockbuster Movies"} category={"top_rated"} />
                <TitleCard title={"Only on Netflix"} category={"popular"} />
                <TitleCard title={"Upcoming"} category={"upcoming"} />
                <TitleCard title={"Top picks for you"} category={"top_rated"} />

            </div>
            <Footer />
        </div>
    )
}

export default Home
