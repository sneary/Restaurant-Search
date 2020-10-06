import axios from 'axios';

export default axios.create({
    // GET https://api.yelp.com/v3/businesses/{id}
    // GET https://api.yelp.com/v3/businesses/search
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer _sLWANFRo3E6s7JZTtuavfrCgwAzhRudp3td3mgHgmpjoE027i8OFZHwiTxRTzO8w25pFyENCfeGGvtxMftz0A8JN7PuP3gYFIXKT7vKX3r-mS1l5sAZA0XEqagKXnYx'
    }
});

