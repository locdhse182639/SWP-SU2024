import { Container } from '@mui/material'
import React from 'react'
import NavBar from '../components/navBar'

export default function EngagementRings() {
    
    const backgroundBannerStyle = {
        backgroundImage: `url(../assets/images/engagement-ring-banner.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '80vh'
    };

    return (
        <div>
            <NavBar />
            <Container>
                <div>
                    <backgroundBannerStyle/>
                </div>
            </Container>
        </div>
    )
}
