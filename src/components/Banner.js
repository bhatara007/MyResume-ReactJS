import React from 'react'
import "./Banner.css"
import Typical from 'react-typical'


let bannerData = {
    title: "Hi Visitor",
    desc: "I'm Developer :)"
}
function Banner() {
    return (
        <div class='banner-bg'>
            <div className='container'>
                <div className='banner-con'>
                    <div className='profile'>
                        <img src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.0-9/124816270_3663850973671033_7014920873293793666_o.jpg?_nc_cat=103&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeFj-ql6_aM-m4imHy1_zXMbxnXjsBDMgfLGdeOwEMyB8iRKbLx8t2KBjzLfevp5Re3GOxxQH-jQzVnXUuujVtKV&_nc_ohc=pLBPZsoqXnMAX8_K3kW&_nc_ht=scontent.fbkk5-4.fna&oh=0780d728fcbd9f33d83f5fdaac02e1a6&oe=6059E5D7" alt="description of image">
                        </img>
                        <div className="caption"> 
                            <h3>Bhatara Chaemchan</h3>
                            <p> Software and Knowledge Engineering</p> 
                            <p>@ Kasetsart University</p>
                        </div>
                    </div>

                    <div className="banner-text">
                        <h1> {bannerData.title}</h1>
                        <p> I'm a
                            <Typical
                            loop = {Infinity}
                            wrapper='b'
                            steps={[
                                ' Developer💻',
                                1000,
                                ' CryptoMiner💰',
                                1000,
                                ' Doglover🐶',
                                1000
                            ]}
                            />
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Banner
