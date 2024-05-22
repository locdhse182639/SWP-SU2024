import React from 'react';
import './Content.css';
import Round from '../../assets/svg/home/round.49562.svg';
import Princess from '../../assets/svg/home/princ.f337a.svg';
import Emerald from '../../assets/svg/home/emerald.94864.svg';
import Asscher from '../../assets/svg/home/asscher.e5f5d.svg';
import Cushion from '../../assets/svg/home/cushion.d010e.svg';
import Marquise from '../../assets/svg/home/marquise.6d0e0.svg';
import Radiant from '../../assets/svg/home/radiant.ce57b.svg';
import Oval from '../../assets/svg/home/oval.6d624.svg';
import Pear from '../../assets/svg/home/pear.946c6.svg';
import Heart from '../../assets/svg/home/heart.d57b8.svg';

export default class Content extends React.Component {
    render() {
        const bannerStyle = {
            backgroundImage: 'url(/assets/img/home/Banner.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '60vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            marginTop: '60px', // Adjust this value to match the height of your navbar
        };

        const exploreItems = [
            { id: 1, title: 'Engagement Rings', image: '/assets/img/home/EngagementRings.c8589.jpg', link: '/engagement-rings' },
            { id: 2, title: 'Wedding Rings', image: '/assets/img/home/Wedding.69505.jpg', link: '/wedding-rings' },
            { id: 3, title: 'Diamonds', image: '/assets/img/home/Diamond.14343.jpg', link: '/diamonds' },
            { id: 4, title: 'Diamond Jewelry', image: '/assets/img/home/Diamond_Jewelry.5d9ab.jpg', link: '/diamond-jewelry' },
            { id: 5, title: 'Necklace', image: '/assets/img/home/Necklaces.4b8c8.jpg', link: '/necklace' },
        ];

        const diamondCuts = [
            { id: 1, title: 'Round', image: Round, link: '/diamond/round' },
            { id: 2, title: 'Princess', image: Princess, link: '/diamond/princess' },
            { id: 3, title: 'Emerald', image: Emerald, link: '/diamond/Emerald' },
            { id: 4, title: 'Asscher', image: Asscher, link: '/diamond/asscher' },
            { id: 5, title: 'Cushion', image: Cushion, link: '/diamond/cushion' },
            { id: 6, title: 'Marquise', image: Marquise, link: '/diamond/marquise' },
            { id: 7, title: 'Radiant', image: Radiant, link: '/diamond/radiant' },
            { id: 8, title: 'Oval', image: Oval, link: '/diamond/oval' },
            { id: 9, title: 'Pear', image: Pear, link: '/diamond/pear' },
            { id: 10, title: 'Heart', image: Heart, link: '/diamond/heart' },
        ];

        const designSectionStyle = {
            backgroundImage: `url(/assets/img/home/DYO_Banner.dde8f.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '60vh',
            padding: '60px 20px',
            color: '#fff'
        };

        return (
            <div>
                <div style={bannerStyle}>
                    <div className="overlay">
                        <div className="banner-content">
                            <h2>Eternal Radiance</h2>
                            <p>When you find a well-crafted ring, it becomes a sparkling love affair—that never ends. Find your one and only.</p>
                            <div className="banner-buttons">
                                <a href="/engagement" className="btn btn-primary">Shop Engagement</a>
                                <a href="/jewelry" className="btn btn-secondary">Shop Jewelry</a>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="explore-section">
                    <h2>Explore MatchaLatte</h2>
                    <div className="explore-items">
                        {exploreItems.map(item => (
                            <div key={item.id} className="explore-item">
                                <a href={item.link}>
                                    <img src={item.image} alt={item.title} />
                                    <p>{item.title}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="explore-diamonds-section">
                    <h2>Explore Diamonds</h2>
                    <div className="explore-diamonds">
                        {diamondCuts.map(cut => (
                            <div key={cut.id} className="diamond-item">
                                <a href={cut.link}>
                                    <img src={cut.image} alt={cut.title} />
                                    <p>{cut.title}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                <section style={designSectionStyle}>
                    <div className="design-content-wrapper">
                        <div className="design-content">
                            <img src="/assets/img/Logo/Remove-bg.ai_1716348335959.png" alt="Brand Logo" className="logo-img" />
                            <h2>Design Your Own Engagement Ring</h2>
                            <p>Bring your love to life with a handcrafted design that perfectly suits your relationship, budget and style. Our expert artisans will pour their passion into every detail of your beautiful custom engagement ring.</p>
                            <div className="design-buttons">
                                <a href="/settings" className="btn btn-primary">Shop Settings</a>
                                <a href="/diamonds" className="btn btn-secondary">Shop Diamonds</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
