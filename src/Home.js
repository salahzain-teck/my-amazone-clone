import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="Home">
        <div className="home__container">
        <img className="home__image" src=" https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_9A/Nov/Tallhero_1500x600._CB415248272_.jpg " />
        
        
    <div className="home__row">
      <Product 
        id = "25457896"
        title="Elon Musk: Success Secrets
        by George Ilian" 
        price = {27.00}
        image="https://m.media-amazon.com/images/I/61XMSZqc4bL._AC_SX768_SY576_.jpg" 
        rating={5} />
      
      <Product
        id = "45128798"
        title="New Apple iPhone 12 Pro Max (128GB, Pacific Blue) [Locked] + Carrier Subscription"
        price = {799}
        image =  "https://www.reliancedigital.in/medias/Apple-12-Pro-Smartphones-491901569-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzE3Mjl8aW1hZ2UvanBlZ3xpbWFnZXMvaGQzL2g2Ni85NDA3ODI4NDkyMzE4LmpwZ3w5NzIwMzk4ZmJmNWEwNmRiYmE4MzhmN2IwMzMzMDQwNTM3YmU0ODNlNTMzZWNiODVkOWM1Yzc4MWIxMGI2NDFi"        
        rating = {5}
      />
     </div>
    
    <div className="home__row">
    <Product 
      id = "154879856"
      title = "New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD Storage) - Space Gray (Latest Model)"
      price = {2301.61}
      rating= {5}
      image = "https://images-na.ssl-images-amazon.com/images/I/71an9eiBxpL._AC_SL1500_.jpg"/>
    <Product 
      id = "78451296"
      title = "Top Visionaries Who Changed the World (Revised Edition)"
      price = {28.99}
      rating = {4}
      image =  "https://m.media-amazon.com/images/I/61ZBlWOTwaL._AC_SX830_SY623_.jpg"/>
    <Product 
      id = "85962365"
      title = "Apple Watch Series 5 (GPS + Cellular, 44mm) - Space Gray Aluminium Case with Black Sport Band"
      price = {200}
      rating = {5}
      image = "https://images-na.ssl-images-amazon.com/images/I/71fp5ankbqL._SL1500_.jpg"/>
    </div>
    
     <div className="home__row">
     <Product 
       id = "12459687"
       title = "Acer Chromebook Spin 311 Convertible Laptop, Intel Celeron N4020, 11.6 HD Touch, 4GB LPDDR4, 32GB eMMC, Gigabit Wi-Fi 5, Bluetooth 5.0, Google Chrome, CP311-2H-C679"
       price = {269.00}
       rating = {4}
       image = "https://images-na.ssl-images-amazon.com/images/I/71c5W9NxN5L._AC_SL1500_.jpg" /> 
    </div>
    </div> 
    </div>
    )
}

export default Home 
