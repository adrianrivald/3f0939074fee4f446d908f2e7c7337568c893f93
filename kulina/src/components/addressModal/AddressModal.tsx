import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, CSSProperties } from 'react';
import { locationListDataProps } from '../../helpers/locationListData';
import './AddressModal.scss';


interface AddressModalProps {
    action: boolean;
    popupHandler: (e:any) => void;
    address: locationListDataProps[]
  }

const AddressModal: FC<AddressModalProps> = (props) => {
    const { action, popupHandler, address} = props;
  
    return (
    <div className={`address-modal ${action ? 'show' : ''}`}>
        <div className="background" onClick={popupHandler}></div>
        <div className="address-box">
            <div className="address-box-top">
                {
                    address.map((data) => {
                        return (
                            <div>
                                {data.location_name}
                            </div>
                        )
                    })
                }
            </div>
            <div onClick={popupHandler} className='address-close'>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    </div>
  );
};

export default AddressModal;
