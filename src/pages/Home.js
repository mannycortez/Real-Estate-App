import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'




export default function Home() {
    return(
        <>
        <Hero hero="defaultHero">
            <Banner title="Welcome All"
                    subtitle="rooms starting at $100/night">
              <Link to="/rooms" 
                    className="btn-primary">
                our rooms
              </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
    
        </>
  );
}
