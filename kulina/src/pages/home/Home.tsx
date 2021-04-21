import React, { useEffect, useState } from 'react';
import { faAngleDown, faArrowLeft, faChevronRight, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Home.scss';
import { useLocation } from 'react-router-dom';
import { productListData, productListDataProps } from '../../helpers/productListData';
import RatingDisplay from '../../components/ratingDisplay/RatingDisplay';
import { priceToRupiah } from '../../helpers/priceToRupiah';
import { CalculateCart } from '../../models/CartModel';
import { locationListDataProps } from '../../helpers/locationListData';
import AddressModal from '../../components/addressModal/AddressModal';

interface dateProps {
    changeTabs: number | undefined;
    }

function Home()  {
    const [product,setProduct] = useState([] as productListDataProps[])
    const [address, setAddress] = useState([] as locationListDataProps[])
    const location = useLocation();
    const changeTab =
      location.state && (location.state as dateProps).changeTabs;
    console.log('tab', changeTab);
    const [selectedMenu, setSelectedMenu] = useState(
      // eslint-disable-next-line
      changeTab != undefined ? changeTab : 0
    );
    const [toggleCart, setToggleCart] = useState(false)
    const [toggleAddress, setToggleAddress] = useState(false)
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);


    useEffect(()=> {
        setProduct(productListData);

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

    return (
        <div className="home">
            <meta name="viewport"
                content="width=device-width, initial-scale=1">
                    
            </meta>
            <div className="header">
                <FontAwesomeIcon icon={faArrowLeft} style={{fontSize: '30px'}} />
                <div className="address-choice">
                    <h2>Alamat Pengantaran</h2>
                    <span className="address">Tokopedia Tower</span>
                    <FontAwesomeIcon onClick={showAddress} icon={faAngleDown} style={{marginLeft: '10px', color:'red', cursor:'pointer'}} />
                </div>
            </div>
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
                        <Tab selectedClassName='selected' className='menu'>
                            <div className="date-item">
                                <div className="day">
                                    SAB
                                </div>
                                <div className="date">
                                    15
                                </div>
                            </div>
                        </Tab>
                        <Tab selectedClassName='selected' className='menu'>
                            <div className="date-item">
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
                        <Tab selectedClassName='selected' className='menu'>
                            <div className="date-item">
                                <div className="day">
                                    SAB
                                </div>
                                <div className="date">
                                    22
                                </div>
                            </div>
                        </Tab>
                        <Tab selectedClassName='selected' className='menu'>
                            <div className="date-item">
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
                                        Kamis, 13 Maret 2019
                                    </div>
                                    <div className="product-list">
                                        {
                                            product.map((data, i)=> {
                                                return(
                                                    <div className="item-list" key={i}>
                                                        <img className="image" src={data.product_image} alt="food-pic"/>
                                                        <div className="mid">
                                                            <RatingDisplay rating={data.rating} color="red" withNumber={true} starStyles={starStyle} />
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
                                {/* <div className="panel-wrapper">
                                    <div className="date-header">
                                        Kamis, 13 Maret 2019
                                    </div>
                                    <div className="product-list">
                                        {
                                            product.map((data)=> {
                                                return(
                                                    <div className="item-list">
                                                        <img className="image" src={data.product_image} alt="food-pic"/>
                                                        <div className="mid">
                                                            <RatingDisplay rating={data.rating} color="red" withNumber={true} starStyles={starStyle} />
                                                            <span className="title">{data.food_name}</span>
                                                            <div className="by">
                                                                by {data.product_brand} . {data.vendor}
                                                            </div>
                                                            <div className="price">
                                                                <span className="price-tag">{priceToRupiah(data.price)}</span>
                                                                <button className="button">
                                                                    Add <FontAwesomeIcon icon={faPlus}/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )
                                            })
                                        }
                                    </div>
                                </div> */}
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
                                {/* <div className="panel-wrapper">
                                    <div className="date-header">
                                        Kamis, 13 Maret 2019
                                    </div>
                                    <div className="product-list">
                                        {
                                            product.map((data)=> {
                                                return(
                                                    <div className="item-list">
                                                        <img className="image" src={data.product_image} alt="food-pic"/>
                                                        <div className="mid">
                                                            <RatingDisplay rating={data.rating} color="red" withNumber={true} starStyles={starStyle} />
                                                            <span className="title">{data.food_name}</span>
                                                            <div className="by">
                                                                by {data.product_brand} . {data.vendor}
                                                            </div>
                                                            <div className="price">
                                                                <span className="price-tag">{priceToRupiah(data.price)}</span>
                                                                <button className="button" onClick={()=>addToCart(1)}>
                                                                    Add <FontAwesomeIcon icon={faPlus}/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )
                                            })
                                        }
                                    </div>
                                </div> */}
                            </TabPanel>
                            <TabPanel className="panel">

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
                    <TabPanel>
                        x
                    </TabPanel>
                </Tabs>
            </div>
                <AddressModal
                    popupHandler={showAddress}
                    action={toggleAddress}
                    address={address}
                />
                {cartModal() }
        </div>
    );

};

export default Home