import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { locationListDataProps } from '../../helpers/locationListData';
import './AddressModal.scss';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../searchBar/SearchBar';
import place from '../../assets/images/place.svg'


interface AddressModalProps {
    action: boolean;
    popupHandler: (e:any) => void;
    onChange: (e:any) => void;
    selectPlace: (e:any) => void;
    address: locationListDataProps[];
    search: string;
  }

const AddressModal: FC<AddressModalProps> = (props) => {
    const { action, popupHandler, onChange, selectPlace, address, search} = props;
  
    return (
    <div className={`address-modal ${action ? 'show' : ''}`}>
        <div className="background" onClick={popupHandler}></div>
        <div className="address-box">
            <div className="address-box-top">
                <div onClick={popupHandler} className='address-close'>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                <div className="address-modal-text">
                    <span className="text">Cek makanan yang tersedia di lokasi kamu</span>
                </div>
                <div className="address-search-bar">
                    <SearchBar value={search} onChange={onChange}/>
                </div>
                <div className="address-list">
                {search.length < 4 ?
                    address.map(item =>(
                        <div className="list-item" onClick={() => selectPlace(item.location_name)}>
                            <img alt='search' src={place} />
                            <div className="list-name">
                                <h1>{item.location_name}</h1>
                                <p>{item.location_street}</p>
                            </div>
                        </div> 
                    ))
                :
                address
                    // eslint-disable-next-line
                    .filter(item => {
                        if (!search) return true
                        if (item.location_name.toLowerCase().includes(search) || item.location_street.toLowerCase().includes(search)) {
                            return true
                    }
                    })
                    .map(item => (
                        <div className="list-item" onClick={() => selectPlace(item.location_name)}>
                            <img alt='search' src={place} />
                            <div className="list-name">
                                <h1>{item.location_name}</h1>
                                <p>{item.location_street}</p>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    </div>
  );
};

export default AddressModal;
