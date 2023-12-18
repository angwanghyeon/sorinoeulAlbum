import React from 'react';
import '../css/Home.css'

const Home = () => {
    return (
        <div className='container'>
            <nav className='nav-bar'>
                <img src="image/logo.png" alt="소리노을-로고" className='logo'/>
            </nav>
            <div className='box1'>
                <img src="image/png/lee.png" alt="이영훈 목사님" className='lee' />
            </div>
        </div>
    );
};

export default Home;