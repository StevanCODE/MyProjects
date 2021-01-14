import React from 'react'
import Hero from '../components/HeroSection/Hero'
import InfoSection from '../components/InfoSection/InfoSection'
import InfoSection2 from '../components/InfoSection2/InfoSection2'
import InfoSection3 from '../components/InfoSection3/InfoSection3'
import { InfoData, InfoData2, InfoData3 } from '../data/InfoData'

const Home = () => {
    return (
        <>
            <Hero/>
            <InfoSection {...InfoData}/>
            <InfoSection {...InfoData2}/>
            <InfoSection2/>
            <InfoSection3/>
            <InfoSection {...InfoData3}/>

        </>
    )
}

export default Home
