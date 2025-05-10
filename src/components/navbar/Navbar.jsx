import React, { useEffect, useRef } from 'react'
import './navbar.css'
import logo from '../../assets/netflixlogo.png'
import search from '../../assets/searchlogo.png'
import sort from '../../assets/sortdown.png'
import profile from '../../assets/profileIcon.jpg'
import bell from '../../assets/bell.png'
import { logout } from '../../Firebase'
const Navbar = () => {
    const navRef = useRef()
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) {
                navRef.current.classList.add('navDark')
            } else {
                navRef.current.classList.remove('navDark')
            }
        })
    }, [])
    return (
        <div ref={navRef} className='navbar'>
            <div className="leftnav">
                <img src={logo} alt="" />
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className="rightnav">
                <img src={search} alt="" className='icons' />
                <p>Children</p>
                <img src={bell} alt="" className='icons' />
                <div className="nav-profile">
                    <img src={profile} alt="" className='profileimg' />
                    <img src={sort} alt="" width={15} />
                    <div className="dropdown">
                        <p onClick={() => { logout() }}>Sign Out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
