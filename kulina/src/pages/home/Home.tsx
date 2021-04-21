import React, { useEffect, useState } from 'react';
import { faAngleDown, faChevronRight, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Home.scss';
import { useLocation } from 'react-router-dom';
import { lunchListData, dinnerListData, foodListDataProps } from '../../helpers/productListData';
import RatingDisplay from '../../components/ratingDisplay/RatingDisplay';
import { priceToRupiah } from '../../helpers/priceToRupiah';
import { locationListData, locationListDataProps } from '../../helpers/locationListData';
import AddressModal from '../../components/addressModal/AddressModal';
import backArrow from '../../assets/images/back-arrow.svg'
import styled from 'styled-components';
import Rating from '@material-ui/core/Rating';

interface dateProps {
    changeTabs: number | undefined;
    }

function Home()  {
    const [lunchFood, setLunchFood] = useState([] as foodListDataProps[])
    const [dinnerFood, setDinnerFood] = useState([] as foodListDataProps[])
    const [address, setAddress] = useState([] as locationListDataProps[])
    const location = useLocation();
    const changeTab =
      location.state && (location.state as dateProps).changeTabs;
    console.log('tab', changeTab);
    const [toggleCart, setToggleCart] = useState(false)
    const [toggleAddress, setToggleAddress] = useState(false)
    const [amount, setAmount] = useState(0);
    const [search, setSearch] = useState('');
    const [price, setPrice] = useState(0);
    const [selectedPlace, setSelectedPlace] = useState('')


    useEffect(()=> {
        setLunchFood(lunchListData);
        setDinnerFood(dinnerListData);
        setAddress(locationListData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const cartModal = () => {
        return (
            <div className={`cart-modal ${toggleCart ? 'show' : ''}`}>
                {/* <div className="background" onClick={popupHandler}></div> */}
                <div className="popup-box">
                    <div className="popup-box-top">
                        <div className="popup-box-title">
                        <span className="title">{amount} Items | {priceToRupiah(price)}</span> <br />
                        <span className="subtitle">Termasuk ongkos kirim</span>
                        </div>
                        <div onClick={popupHandler} className='popup-close'>
                            <FontAwesomeIcon icon={faShoppingCart} style={{marginRight: '10px'}}/>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const onChange = (e: any) => {
        e.preventDefault();
        const { value } = e.target;
        setSearch(value)
        if (value.length > 3) {

        }
        console.log(value,'value')
    }

    const selectPlace = (place: string) => {
        setSelectedPlace(place)
        setToggleAddress(false);
    }

    const popupHandler = () => {
        setToggleCart(!toggleCart);
    }

    const showAddress = () => {
        console.log(toggleAddress,'address')
        setToggleAddress(!toggleAddress)
    }

    const addToCart = (count:number, addPrice:number)=> {
        setAmount(amount + count)
        setPrice(price + addPrice)
        setToggleCart(true)
    }

    const starStyle = {
        width: '10px'
    }

    //Styled-components styling

    //Header
    const Header = styled.div`
        display: flex;
        align-items: center;
    `;

    const BackArrow = styled.img`
        width: 30px;
    `;

    const AddressTitleSection = styled.h2`
        color: #6e7679;
        font-size: 10px;
        margin: 0;
    `;

    const AddressData = styled.span`
        font-size: 14px;
        cursor: pointer;
    `;

    const AddressChoice = styled.div`
        margin-left: 15px;
    `;

    return (
        <div className="home">
            <meta name="viewport"
                content="width=device-width, initial-scale=1">
                    
            </meta>
            <Header>
                <BackArrow src={backArrow} onClick={showAddress} alt="back"/>
                <AddressChoice>
                    <AddressTitleSection>Alamat Pengantaran</AddressTitleSection>
                    <AddressData onClick={showAddress}>
                        {
                            selectedPlace === '' ? 'Tokopedia Tower' : selectedPlace
                        }
                    <FontAwesomeIcon icon={faAngleDown} style={{marginLeft: '10px', color:'#f9234a', cursor:'pointer'}} />
                    </AddressData>
                </AddressChoice>
            </Header>
            <div className="date-container">
                <Tabs>
                    <TabList className="menu-bar">
                        <Tab selectedClassName='selected' className='menu'>
                            <div className="date-item">
                                <span className="day">
                                    SEN
                                </span>
                                <span className="date">
                                    10
                                </span>
                            </div>
                        </Tab>
                        <Tab selectedClassName='selected' className='menu'>
                            <div className="date-item">
                                <div className="day">
                                    SEL
                                </div>
                                <div className="date">
                                    11
                                </div>
                            </div>
                        </Tab>
                        <Tab selectedClassName='selected' className='menu'>
                            <div className="date-item">
                                <div className="day">
                                    RAB
                                </div>
                                <div className="date">
                                    12
                                </div>
                            </div>
                        </Tab>
                        <Tab selectedClassName='selected' className='menu'>
                            <div className="date-item">
                                <div className="day">
                                    KAM
                                </div>
                                <div className="date">
                                    13
                                </div>
                            </div>
                        </Tab>
                        <Tab selectedClassName='selected' className='menu'>
                            <div className="date-item">
                                <div className="day">
                                    JUM
                                </div>
                                <div className="date">
                                    14
                                </div>
                            </div>
                        </Tab>
                        <Tab selectedClassName='selected' className='menu' disabled>
                            <div className="date-item disabled">
                                <div className="day">
                                    SAB
                                </div>
                                <div className="date">
                                    15
                                </div>
                            </div>
                        </Tab>
                        <Tab selectedClassName='selected' className='menu' disabled>
                            <div className="date-item disabled">
                                <div className="day">
                                    MIN
                                </div>
                                <div className="date">
                                    16
                                </div>
                            </div>
                        </Tab>
                        <Tab selectedClassName='selected' className='menu'>
                            <div className="date-item">
                                <div className="day">
                                    SEN
                                </div>
                                <div className="date">
                                    17
                                </div>
                            </div>
                        </Tab>
                        <Tab selectedClassName='selected' className='menu'>
                            <div className="date-item">
                                <div className="day">
                                    SEL
                                </div>
                                <div className="date">
                                    18
                                </div>
                            </div>
                        </Tab>
                        <Tab selectedClassName='selected' className='menu'>
                            <div className="date-item">
                                <div className="day">
                                    RAB
                                </div>
                                <div className="date">
                                    19
                                </div>
                            </div>
                        </Tab>
                        <Tab selectedClassName='selected' className='menu'>
                            <div className="date-item">
                                <div className="day">
                                    KAM
                                </div>
                                <div className="date">
                                    20
                                </div>
                            </div>
                        </Tab>
                        <Tab selectedClassName='selected' className='menu'>
                            <div className="date-item">
                                <div className="day">
                                    JUM
                                </div>
                                <div className="date">
                                    21
                                </div>
                            </div>
                        </Tab>
                        <Tab selectedClassName='selected' className='menu' disabled>
                            <div className="date-item disabled">
                                <div className="day">
                                    SAB
                                </div>
                                <div className="date">
                                    22
                                </div>
                            </div>
                        </Tab>
                        <Tab selectedClassName='selected' className='menu' disabled>
                            <div className="date-item disabled">
                                <div className="day">
                                    MIN
                                </div>
                                <div className="date">
                                    23
                                </div>
                            </div>
                        </Tab>
                    </TabList>
                    <TabPanel className="tab-content">
                        <Tabs>
                            <TabList className="time-bar">
                                <Tab selectedClassName='selected' className='menu'>
                                    Lunch
                                </Tab>
                                <Tab selectedClassName='selected' className='menu'>
                                    Dinner
                                </Tab>
                            </TabList>
                            <TabPanel className="panel">
                                <div className="panel-wrapper">
                                    <div className="date-header">
                                        Senin, 10 Maret 2019
                                    </div>
                                    <div className="product-list">
                                        {
                                            lunchFood.map((data, i)=> {
                                                return(
                                                    <div className="item-list" key={i}>
                                                        <img className="image" src={data.product_image} alt="food-pic"/>
                                                        <div className="mid">
                                                            <RatingDisplay rating={data.rating} withNumber={true} starStyles={starStyle} />
                                                            <span className="title">{data.food_name}</span>
                                                            <div className="by">
                                                                by {data.product_brand} . {data.vendor}
                                                            </div>
                                                            <div className="price">
                                                                <span className="price-tag">{priceToRupiah(data.price)}</span>
                                                                <button className="button" onClick={()=>addToCart(1, data.price)}>
                                                                    Add <FontAwesomeIcon icon={faPlus}/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )
                                            })
                                        }
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel className="panel">
                                <div className="panel-wrapper">
                                    <div className="date-header">
                                        Senin, 10 Maret 2019
                                    </div>
                                    <div className="product-list">
                                        {
                                            dinnerFood.map((data, i)=> {
                                                return(
                                                    <div className="item-list" key={i}>
                                                        <img className="image" src={data.product_image} alt="food-pic"/>
                                                        <div className="mid">
                                                            <RatingDisplay rating={data.rating} withNumber={true} starStyles={starStyle} />
                                                            <span className="title">{data.food_name}</span>
                                                            <div className="by">
                                                                by {data.product_brand} . {data.vendor}
                                                            </div>
                                                            <div className="price">
                                                                <span className="price-tag">{priceToRupiah(data.price)}</span>
                                                                <button className="button" onClick={()=>addToCart(1, data.price)}>
                                                                    Add <FontAwesomeIcon icon={faPlus}/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )
                                            })
                                        }
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </TabPanel>
                    <TabPanel className="tab-content">
                        <Tabs>
                            <TabList className="time-bar">
                                <Tab selectedClassName='selected' className='menu'>
                                    Lunch
                                </Tab>
                                <Tab selectedClassName='selected' className='menu'>
                                    Dinner
                                </Tab>
                            </TabList>
                            <TabPanel className="panel">
                                <div className="panel-wrapper">
                                    <div className="date-header">
                                        Selasa, 11 Maret 2019
                                    </div>
                                    <div className="product-list">
                                        {
                                            lunchFood.map((data, i)=> {
                                                return(
                                                    <div className="item-list" key={i}>
                                                        <img className="image" src={data.product_image} alt="food-pic"/>
                                                        <div className="mid">
                                                            <RatingDisplay rating={data.rating} withNumber={true} starStyles={starStyle} />
                                                            <span className="title">{data.food_name}</span>
                                                            <div className="by">
                                                                by {data.product_brand} . {data.vendor}
                                                            </div>
                                                            <div className="price">
                                                                <span className="price-tag">{priceToRupiah(data.price)}</span>
                                                                <button className="button" onClick={()=>addToCart(1, data.price)}>
                                                                    Add <FontAwesomeIcon icon={faPlus}/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )
                                            })
                                        }
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel className="panel">
                                <div className="panel-wrapper">
                                    <div className="date-header">
                                        Selasa, 11 Maret 2019
                                    </div>
                                    <div className="product-list">
                                        {
                                            dinnerFood.map((data, i)=> {
                                                return(
                                                    <div className="item-list" key={i}>
                                                        <img className="image" src={data.product_image} alt="food-pic"/>
                                                        <div className="mid">
                                                            <RatingDisplay rating={data.rating} withNumber={true} starStyles={starStyle} />
                                                            <span className="title">{data.food_name}</span>
                                                            <div className="by">
                                                                by {data.product_brand} . {data.vendor}
                                                            </div>
                                                            <div className="price">
                                                                <span className="price-tag">{priceToRupiah(data.price)}</span>
                                                                <button className="button" onClick={()=>addToCart(1, data.price)}>
                                                                    Add <FontAwesomeIcon icon={faPlus}/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )
                                            })
                                        }
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </TabPanel>
                    <TabPanel className="tab-content">
                        <Tabs>
                            <TabList className="time-bar">
                                <Tab selectedClassName='selected' className='menu'>
                                    Lunch
                                </Tab>
                                <Tab selectedClassName='selected' className='menu'>
                                    Dinner
                                </Tab>
                            </TabList>
                            <TabPanel className="panel">
                                <div className="panel-wrapper">
                                    <div className="date-header">
                                        Rabu, 12 Maret 2019
                                    </div>
                                    <div className="product-list">
                                        {
                                            lunchFood.map((data, i)=> {
                                                return(
                                                    <div className="item-list" key={i}>
                                                        <img className="image" src={data.product_image} alt="food-pic"/>
                                                        <div className="mid">
                                                            <RatingDisplay rating={data.rating} withNumber={true} starStyles={starStyle} />
                                                            <span className="title">{data.food_name}</span>
                                                            <div className="by">
                                                                by {data.product_brand} . {data.vendor}
                                                            </div>
                                                            <div className="price">
                                                                <span className="price-tag">{priceToRupiah(data.price)}</span>
                                                                <button className="button" onClick={()=>addToCart(1, data.price)}>
                                                                    Add <FontAwesomeIcon icon={faPlus}/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )
                                            })
                                        }
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel className="panel">
                                <div className="panel-wrapper">
                                    <div className="date-header">
                                        Rabu, 12 Maret 2019
                                    </div>
                                    <div className="product-list">
                                        {
                                            dinnerFood.map((data, i)=> {
                                                return(
                                                    <div className="item-list" key={i}>
                                                        <img className="image" src={data.product_image} alt="food-pic"/>
                                                        <div className="mid">
                                                            <RatingDisplay rating={data.rating} withNumber={true} starStyles={starStyle} />
                                                            <span className="title">{data.food_name}</span>
                                                            <div className="by">
                                                                by {data.product_brand} . {data.vendor}
                                                            </div>
                                                            <div className="price">
                                                                <span className="price-tag">{priceToRupiah(data.price)}</span>
                                                                <button className="button" onClick={()=>addToCart(1, data.price)}>
                                                                    Add <FontAwesomeIcon icon={faPlus}/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )
                                            })
                                        }
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </TabPanel>
                    <TabPanel className="tab-content">
                        <Tabs>
                            <TabList className="time-bar">
                                <Tab selectedClassName='selected' className='menu'>
                                    Lunch
                                </Tab>
                                <Tab selectedClassName='selected' className='menu'>
                                    Dinner
                                </Tab>
                            </TabList>
                            <TabPanel className="panel">
                                <div className="panel-wrapper">
                                    <div className="date-header">
                                        Kamis, 13 Maret 2019
                                    </div>
                                    <div className="product-list">
                                        {
                                            lunchFood.map((data, i)=> {
                                                return(
                                                    <div className="item-list" key={i}>
                                                        <img className="image" src={data.product_image} alt="food-pic"/>
                                                        <div className="mid">
                                                            <RatingDisplay rating={data.rating} withNumber={true} starStyles={starStyle} />
                                                            <span className="title">{data.food_name}</span>
                                                            <div className="by">
                                                                by {data.product_brand} . {data.vendor}
                                                            </div>
                                                            <div className="price">
                                                                <span className="price-tag">{priceToRupiah(data.price)}</span>
                                                                <button className="button" onClick={()=>addToCart(1, data.price)}>
                                                                    Add <FontAwesomeIcon icon={faPlus}/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )
                                            })
                                        }
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel className="panel">
                                <div className="panel-wrapper">
                                    <div className="date-header">
                                        Kamis, 13 Maret 2019
                                    </div>
                                    <div className="product-list">
                                        {
                                            dinnerFood.map((data, i)=> {
                                                return(
                                                    <div className="item-list" key={i}>
                                                        <img className="image" src={data.product_image} alt="food-pic"/>
                                                        <div className="mid">
                                                            <RatingDisplay rating={data.rating} withNumber={true} starStyles={starStyle} />
                                                            <span className="title">{data.food_name}</span>
                                                            <div className="by">
                                                                by {data.product_brand} . {data.vendor}
                                                            </div>
                                                            <div className="price">
                                                                <span className="price-tag">{priceToRupiah(data.price)}</span>
                                                                <button className="button" onClick={()=>addToCart(1, data.price)}>
                                                                    Add <FontAwesomeIcon icon={faPlus}/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )
                                            })
                                        }
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </TabPanel>
                    <TabPanel className="tab-content">
                        <Tabs>
                            <TabList className="time-bar">
                                <Tab selectedClassName='selected' className='menu'>
                                    Lunch
                                </Tab>
                                <Tab selectedClassName='selected' className='menu'>
                                    Dinner
                                </Tab>
                            </TabList>
                            <TabPanel className="panel">
                                <div className="panel-wrapper">
                                    <div className="date-header">
                                        Jumat, 14 Maret 2019
                                    </div>
                                    <div className="product-list">
                                        {
                                            lunchFood.map((data, i)=> {
                                                return(
                                                    <div className="item-list" key={i}>
                                                        <img className="image" src={data.product_image} alt="food-pic"/>
                                                        <div className="mid">
                                                            <RatingDisplay rating={data.rating} withNumber={true} starStyles={starStyle} />
                                                            <span className="title">{data.food_name}</span>
                                                            <div className="by">
                                                                by {data.product_brand} . {data.vendor}
                                                            </div>
                                                            <div className="price">
                                                                <span className="price-tag">{priceToRupiah(data.price)}</span>
                                                                <button className="button" onClick={()=>addToCart(1, data.price)}>
                                                                    Add <FontAwesomeIcon icon={faPlus}/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )
                                            })
                                        }
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel className="panel">
                                <div className="panel-wrapper">
                                    <div className="date-header">
                                        Jumat, 15 Maret 2019
                                    </div>
                                    <div className="product-list">
                                        {
                                            dinnerFood.map((data, i)=> {
                                                return(
                                                    <div className="item-list" key={i}>
                                                        <img className="image" src={data.product_image} alt="food-pic"/>
                                                        <div className="mid">
                                                            <RatingDisplay rating={data.rating} withNumber={true} starStyles={starStyle} />
                                                            <span className="title">{data.food_name}</span>
                                                            <div className="by">
                                                                by {data.product_brand} . {data.vendor}
                                                            </div>
                                                            <div className="price">
                                                                <span className="price-tag">{priceToRupiah(data.price)}</span>
                                                                <button className="button" onClick={()=>addToCart(1, data.price)}>
                                                                    Add <FontAwesomeIcon icon={faPlus}/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )
                                            })
                                        }
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </TabPanel>
                    <TabPanel>
                        x
                    </TabPanel>
                    <TabPanel>
                        x
                    </TabPanel>
                    <TabPanel>
                        x
                    </TabPanel>
                </Tabs>
            </div>
            <AddressModal
                popupHandler={showAddress}
                action={toggleAddress}
                address={address}
                search={search}
                onChange={onChange}
                selectPlace={selectPlace}
            />
            {cartModal() }
        </div>
    );

};

export default Home