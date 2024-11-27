import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import useFetch from '../hooks/useFetch';
import BASE_URL from '../hooks/baseUrl';

const AdsBanner = () => {
  const MySwal = withReactContent(Swal);

  // Fetch the data from the API
  const { data: apiResponse } = useFetch(BASE_URL + '/ads-banner');

  // Extract `data` from the API response safely
  const popup = apiResponse?.data;

  const adsFire = () => {
    console.log('Executing adsFire function...');
    console.log('Popup data inside adsFire:', popup);

    if (popup && popup.img_url) {
      console.log('Popup img_url exists:', popup.img_url);
      MySwal.fire({
        imageUrl: popup.img_url,
        imageHeight: 150,
        // text:
        //   popup.text ||
        //   '🙏🏻မင်္ဂလာရှိသော နေ့ခင်းလေးပါ👦🏻 သူငယ်ချင်းမိတ်ဆက် 10%💰 🏠အိမ်မှာနေရင်း 🎰 AMK Max Win 999 မှာပူးပေါင်းပြီး🤝 အလွယ်တကူ ဝင်ငွေရှာလိုက်ပါ သူငယ်ချင်းမိတ်ဆက်ပေးပြီး ဘယ်မှာမှ မရနှိင်တဲ့ 🏆ဆုလက်ဆောင် 10% များရယူပါနော်  AMK Max Win 999 🙏🙏🙏🤝🙏🙏🙏',
      });
    } else {
      console.warn('Popup data or img_url is not available.');
    }
  };

  useEffect(() => {
    console.log('Running useEffect...');
    console.log('API Response:', apiResponse);
    console.log('Popup data extracted:', popup);

    if (popup && popup.img_url) {
      console.log('Popup img_url detected in useEffect:', popup.img_url);
      adsFire();
    } else {
      console.log('Popup or img_url is not ready yet.');
    }
  }, [apiResponse, popup]);

  return <div></div>;
};

export default AdsBanner;
