import React from 'react';
import { faAngleDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Home.scss';

const Home = () => {

    return (
        <div className="home">
            <div className="header">
                <FontAwesomeIcon icon={faArrowLeft} style={{fontSize: '30px'}} />
                <div className="address-choice">
                    <h2>Alamat Pengantaran</h2>
                    <span className="address">Tokopedia Tower</span>
                    <FontAwesomeIcon icon={faAngleDown} style={{marginLeft: '10px', color:'red'}} />
                </div>
            </div>
        </div>
    );

};

export default Home