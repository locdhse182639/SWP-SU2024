import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../education/css/sideBar.css';
import { routes } from '../../routes';

const Sidebar = () => {
    const [isMetalOpen, setIsMetalOpen] = useState(false);
    const [isPearlOpen, setIsPearlOpen] = useState(false);
    const [isDiamondOpen, setIsDiamondOpen] = useState(true);

    const toggleMetal = () => setIsMetalOpen(!isMetalOpen);
    const togglePearl = () => setIsPearlOpen(!isPearlOpen);
    const toggleDiamond = () => setIsDiamondOpen(!isDiamondOpen);

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <div className="section-header" onClick={toggleMetal}>
                        Jewelry Education {isMetalOpen ? '▴' : '▾'}
                    </div>
                    {isMetalOpen && (
                        <div style={{paddingLeft:'25%'}}>
                            <Link to="/jewelry-education"><p style={{textAlign:'left'}}>Metal Education</p></Link>
                            <Link to={routes.ringSize}><p style={{textAlign:'left'}}>Ring Size</p></Link>
                        </div>
                    )}
                </li>
                <li>
                    <div className="section-header" onClick={togglePearl}>
                        Service & Value {isPearlOpen ? '▴' : '▾'}
                    </div>
                    {isPearlOpen && (
                        <div style={{paddingLeft:'25%'}}>
                            <Link to="/pearl-education"><p style={{textAlign:'left'}}>Free Return</p></Link>
                        </div>
                    )}
                </li>
                <li>
                    <div className="section-header" onClick={toggleDiamond}>
                        Diamond Education {isDiamondOpen ? '▴' : '▾'}
                    </div>
                    {isDiamondOpen && (
                        <div style={{paddingLeft:'25%'}}>
                            <Link to="/diamond-education/4Cs"><p style={{textAlign:'left'}}>The 4Cs</p></Link>
                            <Link to="/diamond-education/cut"><p style={{textAlign:'left'}}>Cut</p></Link>
                            <Link to="/diamond-education/color"><p style={{textAlign:'left'}}>Color</p></Link>
                            <Link to="/diamond-education/clarity"><p style={{textAlign:'left'}}>Clarity</p></Link>
                            <Link to="/diamond-education/carat"><p style={{textAlign:'left'}}>Carat</p></Link>
                        </div>
                    )}
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
