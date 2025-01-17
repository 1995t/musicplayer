import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Body from '../Body/body';
import { useDispatch } from 'react-redux';
import { searchData } from '../../../components/slice';

export const Navbar = () => {
    const [inputVal,setInputVal]=useState('');
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(searchData(inputVal));
    },[inputVal]);
    
  return (
    <>
    <nav>
        <div className='navbar'>
            <div className='logoSection'>
                <div className='wynkLogo'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="24" fill="url(#paint0_linear_1943_5392)"></rect><rect width="48" height="48" rx="24" fill="url(#paint1_linear_1943_5392)" fill-opacity="0.2"></rect><rect width="48" height="48" rx="24" fill="url(#paint2_linear_1943_5392)" fill-opacity="0.6"></rect><path d="M11.3507 25.7738H10.4395C10.5407 18.3826 16.2107 12.4088 23.5007 12.4088C23.6019 12.4088 23.6019 12.4088 23.6019 12.4088V13.3201C23.5007 13.3201 23.5007 13.3201 23.5007 13.3201C16.8182 13.3201 11.3507 18.8888 11.3507 25.7738ZM30.1832 17.3701L30.0819 18.6863C32.0057 20.4076 33.2207 22.9388 33.2207 25.7738C33.2207 31.0388 28.9682 35.3926 23.7032 35.3926C18.4382 35.3926 14.1857 31.0388 14.1857 25.7738C14.1857 20.5088 18.5395 16.1551 23.7032 16.1551C24.7157 16.1551 25.6269 16.3576 26.5382 16.6613L26.6394 15.6488C25.7282 15.3451 24.6144 15.2438 23.6019 15.2438C17.7295 15.1426 13.072 19.9013 13.072 25.7738C13.072 31.6463 17.932 36.4051 23.7032 36.4051C29.4744 36.4051 34.2332 31.6463 34.2332 25.7738C34.2332 22.3313 32.6132 19.2938 30.1832 17.3701ZM29.7782 21.0151L29.5757 23.1413C29.9807 23.9513 30.1832 24.8626 30.1832 25.8751C30.1832 29.4188 27.2469 32.4563 23.7032 32.4563C20.0582 32.4563 17.2232 29.4188 17.2232 25.8751C17.2232 22.3313 20.1595 19.2938 23.7032 19.2938C24.6144 19.2938 25.4244 19.4963 26.2344 19.8001L26.3357 18.4838C25.5257 18.1801 24.6144 17.9776 23.6019 17.9776C19.3495 17.9776 15.907 21.4201 15.907 25.7738C15.907 30.1276 19.3495 33.5701 23.6019 33.5701C27.8544 33.5701 31.2969 30.0263 31.2969 25.7738C31.3982 24.0526 30.7907 22.3313 29.7782 21.0151ZM28.3607 10.0801L26.8419 23.6476C26.8419 23.6476 25.1207 22.1288 22.6907 22.8376C20.362 23.5463 20.1595 25.2676 20.1595 25.6726C20.1595 26.4826 20.7669 28.6088 23.5007 29.0138C26.8419 29.4188 27.7532 27.3938 27.8544 26.6851C28.0569 25.9763 28.8669 18.1801 28.8669 18.1801L29.2719 13.9276C29.2719 13.9276 31.6007 13.8263 32.8157 14.9401C33.9294 16.0538 33.5244 17.4713 33.3219 18.0788C33.1194 18.5851 32.8157 18.9901 33.2207 18.8888C33.5244 18.7876 34.4357 17.8763 34.6382 16.8638C34.9419 14.8388 33.3219 13.8263 33.1194 13.5226C32.9169 13.2188 30.9932 12.1051 30.6894 11.8013C30.3857 11.4976 29.8794 10.8901 29.8794 10.2826L28.3607 10.0801Z" fill="#040404" fill-opacity="0.2"></path><path d="M12.1603 25.7738H11.249C11.3503 18.3826 17.0203 12.4088 24.3103 12.4088C24.4115 12.4088 24.4115 12.4088 24.4115 12.4088V13.3201C24.3103 13.3201 24.3103 13.3201 24.3103 13.3201C17.6278 13.3201 12.1603 18.8888 12.1603 25.7738ZM30.9928 17.3701L30.8915 18.6863C32.8153 20.4076 34.0303 22.9388 34.0303 25.7738C34.0303 31.0388 29.7778 35.3926 24.5128 35.3926C19.2478 35.3926 14.9953 31.0388 14.9953 25.7738C14.9953 20.5088 19.349 16.1551 24.5128 16.1551C25.5253 16.1551 26.4365 16.3576 27.3478 16.6613L27.449 15.6488C26.5378 15.3451 25.424 15.2438 24.4115 15.2438C18.539 15.1426 13.8815 19.9013 13.8815 25.7738C13.8815 31.6463 18.7415 36.4051 24.5128 36.4051C30.284 36.4051 35.0428 31.6463 35.0428 25.7738C35.0428 22.3313 33.4228 19.2938 30.9928 17.3701ZM30.5878 21.0151L30.3853 23.1413C30.7903 23.9513 30.9928 24.8626 30.9928 25.8751C30.9928 29.4188 28.0565 32.4563 24.5128 32.4563C20.8678 32.4563 18.0328 29.4188 18.0328 25.8751C18.0328 22.3313 20.969 19.2938 24.5128 19.2938C25.424 19.2938 26.234 19.4963 27.044 19.8001L27.1453 18.4838C26.3353 18.1801 25.424 17.9776 24.4115 17.9776C20.159 17.9776 16.7165 21.4201 16.7165 25.7738C16.7165 30.1276 20.159 33.5701 24.4115 33.5701C28.664 33.5701 32.1065 30.0263 32.1065 25.7738C32.2078 24.0526 31.6003 22.3313 30.5878 21.0151ZM29.1703 10.0801L27.6515 23.6476C27.6515 23.6476 25.9303 22.1288 23.5003 22.8376C21.1715 23.5463 20.969 25.2676 20.969 25.6726C20.969 26.4826 21.5765 28.6088 24.3103 29.0138C27.6515 29.4188 28.5628 27.3938 28.664 26.6851C28.8665 25.9763 29.6765 18.1801 29.6765 18.1801L30.0815 13.9276C30.0815 13.9276 32.4103 13.8263 33.6253 14.9401C34.739 16.0538 34.334 17.4713 34.1315 18.0788C33.929 18.5851 33.6253 18.9901 34.0303 18.8888C34.334 18.7876 35.2453 17.8763 35.4478 16.8638C35.7515 14.8388 34.1315 13.8263 33.929 13.5226C33.7265 13.2188 31.8028 12.1051 31.499 11.8013C31.1953 11.4976 30.689 10.8901 30.689 10.2826L29.1703 10.0801Z" fill="url(#paint3_linear_1943_5392)"></path><defs><linearGradient id="paint0_linear_1943_5392" x1="27.6" y1="11.2" x2="27.6" y2="49.2" gradientUnits="userSpaceOnUse"><stop stop-color="#FF685E"></stop><stop offset="1" stop-color="#DC1C4A"></stop></linearGradient><linearGradient id="paint1_linear_1943_5392" x1="41.2" y1="40" x2="6.4" y2="3.6" gradientUnits="userSpaceOnUse"><stop stop-color="#FF5E98" stop-opacity="0"></stop><stop offset="1" stop-color="#8711E3" stop-opacity="0.83"></stop></linearGradient><linearGradient id="paint2_linear_1943_5392" x1="33.2" y1="21.2" x2="32.8" y2="48.8" gradientUnits="userSpaceOnUse"><stop stop-color="#290613" stop-opacity="0"></stop><stop offset="1" stop-color="#03153A" stop-opacity="0.79"></stop></linearGradient><linearGradient id="paint3_linear_1943_5392" x1="14.4894" y1="13.9276" x2="33.9294" y2="36.2026" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="0.24299" stop-color="#FFFAFA"></stop><stop offset="1" stop-color="#DEDDDD"></stop></linearGradient></defs></svg>
                </div>
                <span className='logoText'>Wynk Music</span>
            </div>
            <div className='nonlogoSection'>
            <div className='searchSection'>
            <span className='searchIcon' data-testid="searchIcon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.4434 16.4434L20.9997 20.9997" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
              <input className='searchItem' type="search" name="" id="" placeholder='Search Songs' onChange={(e)=>{setInputVal(e.target.value)}}/>
            </div>
            <div className="subscriptionSection">
            <span><svg className='subsIcon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1943_5431)"><rect x="4.125" y="3" width="15.75" height="18" rx="2" stroke="currentColor" stroke-width="1.5"></rect><path d="M9 16.1738H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><g clip-path="url(#clip1_1943_5431)"><path d="M12.3372 13.2729L10.176 10.5687L10.1885 10.0328C11.2028 10.1027 11.9914 9.99537 12.1748 9.03592L10.0136 9.02351L10.3634 8.43772L12.0874 8.46254C11.8247 7.9166 11.1023 7.84931 9.97607 7.8894L10.3634 7.31602L14.0239 7.31055L13.6616 7.87679H12.6496C12.8346 8.07203 12.97 8.29667 12.9745 8.48742L14.0239 8.47496L13.6616 9.03574L12.962 9.0482C12.8527 9.88472 12.0842 10.38 11.113 10.4938L13.2887 13.2722L12.3373 13.2727V13.2727L12.3372 13.2729Z" fill="currentColor" stroke="currentColor" stroke-width="0.00236424"></path></g></g><defs><clipPath id="clip0_1943_5431"><rect width="24" height="24" fill="white"></rect></clipPath><clipPath id="clip1_1943_5431"><rect width="4.05064" height="5.97455" fill="white" transform="translate(9.97461 7.30078)"></rect></clipPath></defs></svg></span>
            <span className='subsText'>
                Manage Subscription
            </span>
            </div>
            <div className='nologoDivide'></div>
            <div className="loginSection">
                <div>
                <span><svg className='loginLogo' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.90625 20.2508C3.82775 18.6544 5.15328 17.3287 6.74958 16.407C8.34588 15.4853 10.1567 15 12 15C13.8433 15 15.6541 15.4853 17.2504 16.407C18.8467 17.3287 20.1722 18.6544 21.0938 20.2508" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                </div>
                <div>
                    <span className='loginText'>Login</span>
                </div>
            </div>
            <div className="dropdownMenu">
                <div>
                <span><svg className='menu' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M3.75 12.1211H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.75 6.12109H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.75 18.1211H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                </div>
            </div>
            </div>
            
        </div>
    </nav>
    
    </>
  )
}
