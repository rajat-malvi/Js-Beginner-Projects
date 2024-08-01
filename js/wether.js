// const responseDto=[{
//     "asin": "B0CZDY1ZKX",
//     "product_title": "Boldfit Sports T Shirt for Men Quick Dry Fit Tshirt for Men Gym T Shirts for Men for Casual Wear Workout T Shirts for Man Active Gym Wear for Men Running T-Shirts for Men T Shirt for Man",
//     "product_price": "₹399",
//     "product_original_price": "₹999",
//     "currency": "INR",
//     "product_star_rating": "4.8",
//     "product_num_ratings": 74,
//     "product_url": "https://www.amazon.in/dp/B0CZDY1ZKX",
//     "product_photo": "https://m.media-amazon.com/images/I/61zfo184NoL._AC_UL960_FMwebp_QL65_.jpg",
//     "product_num_offers": 1,
//     "product_minimum_offer_price": "₹399",
//     "is_best_seller": true,
//     "is_amazon_choice": false,
//     "is_prime": false,
//     "climate_pledge_friendly": false,
//     "sales_volume": "200+ bought in past month",
//     "delivery": "FREE Delivery by Amazon",
//     "has_variations": true
// }]

let pera=document.querySelector('#pera');
let place= document.querySelector('#wether');
let amazon=document.querySelector("#amazonCard");

document.querySelector("#submit-btn").addEventListener('click',async (e)=>{
    e.preventDefault();
    let placeValue= place.value;
    const url = `https://open-weather13.p.rapidapi.com/city/${placeValue}/EN`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '34effcbd40mshff0b44100061139p17fa91jsna1ad49221bdc',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
    };
    let responseJson=await featchResponse(url,options);
    pera.textContent=responseJson.weather[0].main;
    let mainWeather = responseJson.weather[0].main;
    console.log(mainWeather);
    amazon = getProduct(mainWeather, 'man');
    console.log("amazon product object:  " + amazon);
})


// amzon product:
async function getProduct(wether,gender){
    const serchQuery=`${wether}%20cloths%20for%20${gender}`
    // const url = `https://amazon-product-info2.p.rapidapi.com/Amazon/search.php?keywords=${serchQuery}&searchIndex=All`;
    const url=`https://real-time-amazon-data.p.rapidapi.com/search?query=${serchQuery}&page=2&country=IN&sort_by=BEST_SELLERS&product_condition=ALL`
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '34effcbd40mshff0b44100061139p17fa91jsna1ad49221bdc',
            'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
        }
    };
    let response=await featchResponse(url,options);
    // response=await response.json()

    console.log("response dto " +response);
    amazonCardShow(response);
}



async function featchResponse(url,options){
    let result='';
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        result = error;
        return result;
    }

}


function amazonCardShow(responseDto) {
    // Select the element where you want to append the product cards
    let arr= responseDto.data.products

    responseDto.forEach((item) => {
        // Create a new div element to hold the card
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="product-img">
                <img src="${item.Images.Primary.Large.URL}" alt="">
            </div>
            <div class="info">
                <div class="info">
                    <div class="color" style="background-color:${item.ItemInfo.ProductInfo.Color.DisplayValue};"></div>
                    <div class="size">#${item.ItemInfo.ProductInfo.Size.DisplayValue}</div>
                </div>
                <div class="price">${item.Offers.Listings[0].Price.DisplayAmount}</div>
            </div>
        `;

        // Append the card to the container
        amazon.appendChild(card);
    });
}

amazonCardShow(responseDto)
