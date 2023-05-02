import React from 'react'
import './ContainerCards.css'
import NormalCard from './NormalCard';
const ContainerCards = (props) => {
    return (
        <>
            <div className='main__container' >
                <div className='container__title'>
                    <h1 >{props.title}</h1>
                    <a href='/'>View More</a>
                </div>
                <div className='container__card'>
                    <NormalCard />
                    <NormalCard />
                    <NormalCard />
                    <NormalCard />
                    <NormalCard />
                    <NormalCard />
                </div>
            </div>
        </>
    );
};

export default ContainerCards;