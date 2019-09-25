import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

export default function ComingSoon() {
    return(
      <>
        <Hero hero="defaultHero">
            <Banner title="Coming Soon" 
                    subtitle="This section is under construction">
              <Link to="/" 
                    className="btn-primary">
                go home
              </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
      </>
    );
}