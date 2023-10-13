import React, {useState,useEffect} from 'react'
import './ContainerCards.css'
import MainPageCards from './MainPageCards';
import { Link } from 'react-router-dom';


const ContainerCards = (props) => {

    const [data, setData] = useState([]);
    const [laptops, setLaptops] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:8080/api/Daraz/mobiles");
            const data = await response.json();
            setData(data);
        };
        fetchData();
    }, []);

    console.log(data);

    useEffect(() => {
        const fetchLaptops = async () => {
            const response = await fetch("http://localhost:8080/api/Daraz/laptops");
            const data = await response.json();

            setLaptops(data);
        };
        fetchLaptops();
    }, []);
    console.log(laptops);



    const title = props.title;
    const mobilesArray = Array.isArray(data) ? data : [];
    const laptopArray = Array.isArray(laptops) ? laptops : [];


    console.log(`Active Category Container ${props.activeCategory}`)

    


    if (title === 'Mobiles') {
        return (
            <>
                <div className='main__container' >
                    <div className='container__title'>
                        <h1 >{props.title}</h1>
                        <Link to='/mobiles'>
                        <a href='/'>View More</a>
                        </Link>
                    </div>
                    <div className='container__card'>
                        {mobilesArray.slice(6,12).map((item) => {
                            return (
                                <MainPageCards
                                    key={item._id}
                                    id={item._id}
                                    name={item.name}
                                    original_price={item.originalPrice}
                                    current_price={item.currentPrice}
                                    image={item.productImg}
                                    discount={item.discount}
                                    category={item.Category}
                                    database = {item.Database}
                                />
                            );
                        })}
                        
                    </div>
                </div>
            </>
        );
    }

    if (title === 'Laptops') {
        return (
            <>
                <div className='main__container' >
                    <div className='container__title'>
                        <h1 >{props.title}</h1>
                        <Link to='/laptops'>
                        <a href='/'>View More</a>
                        </Link>
                    </div>
                    <div className='container__card'>

                        {laptopArray.slice(12,18).map((item) => {
                            return (
                                <MainPageCards
                                    key={item._id}
                                    id={item._id}
                                    name={item.name}
                                    original_price={item.originalPrice}
                                    current_price={item.price}
                                    image={item.productImg}
                                    discount={item.discount}
                                    category = {item.Category}
                                    database = {item.Database}
                                />
                            );
                        })}

                    </div>
                </div>
            </>
        );
    }

    const recommended = [...mobilesArray.slice(9, 13), ...laptopArray.slice(20, 24)];


    if (title === 'Recommended') {
        const recommendedArray = Array.isArray(recommended) ? recommended : [];
        return (
            <>
                <div className='main__container' >
                    <div className='container__title'>
                        <h1 >{props.title}</h1>
                        <a href='/'>View More</a>
                    </div>
                    <div className='container__card'>

                        {recommendedArray.slice(0,7).map((item) => {
                            return (
                                <MainPageCards
                                    key={item._id}
                                    id={item._id}
                                    name={item.name}
                                    original_price={item.originalPrice}
                                    current_price={item.currentPrice || item.price}
                                    image={item.productImg}
                                    discount={item.discount}
                                    category={item.Category}
                                    database = {item.Database}
                                />
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }






    // return (
    //     <>
    //         <div className='main__container' >
    //             <div className='container__title'>
    //                 <h1 >{props.title}</h1>
    //                 <a href='/'>View More</a>
    //             </div>
    //             <div className='container__card'>

    //                 {mobilesArray.slice(0,10).map((item) => {
    //                     return (
    //                         <MainPageCards
    //                             key={item._id}
    //                             id={item._id}
    //                             name={item.name}
    //                             original_price={item.originalPrice}
    //                             current_price={item.currentPrice}

    //                             image={item.productImg}
    //                             discount={item.discount}
    //                         />
    //                     );
    //                 })}
                    
    //             </div>
    //         </div>
    //     </>
    // );
};

export default ContainerCards;