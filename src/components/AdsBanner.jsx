import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import useFetch from '../hooks/useFetch';
import BASE_URL from '../hooks/baseUrl';

const AdsBanner = () => {
  const MySwal = withReactContent(Swal);
  const { data: popup } = useFetch(BASE_URL + '/ads-banner'); // Fetching popup data

  // Function to display the banner popup
  const adsFire = () => {
    if (popup && popup.img_url) {
      MySwal.fire({
        imageUrl: popup.img_url,
        imageHeight: 150,
        text: '🙏🏻မင်္ဂလာရှိသော နေ့ခင်းလေးပါ👦🏻 သူငယ်ချင်းမိတ်ဆက် 10%💰 🏠အိမ်မှာနေရင်း 🎰 AMK Max Win 999 မှာပူးပေါင်းပြီး🤝 အလွယ်တကူ ဝင်ငွေရှာလိုက်ပါ သူငယ်ချင်းမိတ်ဆက်ပေးပြီး ဘယ်မှာမှ မရနှိင်တဲ့ 🏆ဆုလက်ဆောင် 10% များရယူပါနော်  AMK Max Win 999 🙏🙏🙏🤝🙏🙏🙏',
      });
    } else {
      console.warn('Popup data or img_url is not available.');
    }
  };

  // Use effect to trigger the popup when popup.img_url is available
  useEffect(() => {
    if (popup && popup.img_url) {
      adsFire();
    }
  }, [popup]); // Only re-run effect if popup changes

  return <div></div>; // Empty div as placeholder
};

export default AdsBanner;
