import React from 'react'
import "./Home.css"
import Product from './Product'


function Home() {
    return (

        <div className="home">
            <img
                className="Home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="" />

            {/* product id ,title ,price ,rating,image */}
            <div className="home_row">
                <Product
                    id="124590"
                    title="
                    BRÜ makes the perfect cup of tea at the push of a button. Use ANY tea. Set temperature, cup size & brew time. Saving you time & energy. "
                    price={600}
                    rating={4}
                    image="https://ksr-ugc.imgix.net/assets/026/658/385/5d6b2f9753c0a82921308eb3061d1b3e_original.png?ixlib=rb-2.1.0&crop=faces&w=1552&h=873&fit=crop&v=1569830696&auto=format&frame=1&q=92&s=3f57ad9ceea7f9fc482fb23909cb376d"
                />

                <Product
                    id="7598"
                    title="Android Tv with multiple potes and connxtion ,support all kind of phone connction"
                    price={500}
                    rating={4}
                    image="https://image3.mouthshut.com/images/Restaurant/Photo/-57641_68581.jpeg"
                />

            </div>
            <div className="home_row">
                <Product
                    id="1245890"
                    title="5.8-inch (14.7 cm) Super Retina XDR OLED display
                    Water and dust resistant (4 meters for up to 30 minutes, IP68)"
                    price={1100}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61ers6OzvUL._SL1024_.jpg"
                />

                <Product
                    id="1245890"
                    title="  Click to open expanded view Fitbit Versa 2 (NFC), Health & Fitness Smartwatch with Heart Rate"
                    price={250}
                    rating={3}
                    image="https://www.apple.com/v/watch/home/ab/images/meta/gps-lte/og__n5qzveqr596m.png"
                />
                <Product
                    id="1245890"
                    title="The Learn Startup:Book about how to bulid your oun amppyre"
                    price={11.56}
                    rating={4}
                    image="https://www.mswordcoverpages.com/wp-content/uploads/2018/12/Business-assignment-cover-page-2-CRC.png"
                />
            </div>

            <div className="home_row">
                <Product
                    id="1245890"
                    title=" 
                    TechHive
                    Which Echo should I get? A buyer's guide for Amazon's"
                    price={2000}
                    rating={3}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOOnQuvGWUwvk5aER1leYJjKqzBZr_DZkosw&usqp=CAU"
                />

            </div>



            {/* Product */}
        </div>
    )
}

export default Home
