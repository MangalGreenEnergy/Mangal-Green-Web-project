import React from 'react'
import { useState, useEffect } from 'react';

import t1Img from "./img/team-1.jpg"
import t2Img from "./img/team-2.jpg"
import t3Img from "./img/team-3.jpg"
import "./Team.css"
const Team = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);
    const profileData = [
        { name: 'Tom Cruise', role: 'Full Stack Developer', imgSrc: t1Img },
        { name: 'David Wornar', role: 'Front End Developer', imgSrc: t2Img },
        { name: 'Vin Diesel', role: 'Back End Developer', imgSrc: t3Img },
    ];
  return (
    <div>
         {loading ? (
                <div className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            ) : (
                <div className='whole-page'>
                   <h2 className="section-heading">Our Team</h2>
                    <div className="home-container">
            {profileData.map((profile, index) => (
                <ProfileCard key={index} profile={profile} />
            ))}
        </div>
             </div>
               
            )}

      
    </div>
    
  )
}


const ProfileCard = ({ profile }) => {
    const { name, role, imgSrc } = profile;

    return (
        <div className="profile-card">
            <div className="img">
                <img src={imgSrc} alt={name} />
            </div>
            <div className="caption">
                <h3>{name}</h3>
                <p>{role}</p>
                <div className="social-links">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    );
}


export default Team