
import React from 'react'
import "./Project.css" 

function Project() {
    return (
        <div className='project-container'>
            <div className='project-header'>
                <h1> My Project</h1>
                <p> In my the 2 year as Software Engineering student</p>
            </div>
            <div className='timeline'>
                <ul>
                    <li>
                        <div className='content'>
                            <h2> This is title </h2>
                            <p> asfla;f;skdf;lkjg ijdijfkjksjdfsdfkj ds
                                lewkjlwkefwlkejflkwjfkwjefklwjfkjfkjifejwf
                                ;elflkw;fkewl;ekfw;lekfw;lkflwefk
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='content'>
                            <h2> This is title </h2>
                            <p> asfla;f;skdf;lkjg ijdijfkjksjdfsdfkj ds
                                lewkjlwkefwlkejflkwjfkwjefklwjfkjfkjifejwf
                                ;elflkw;fkewl;ekfw;lekfw;lkflwefk
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='content'>
                            <h2> This is title </h2>
                            <p> asfla;f;skdf;lkjg ijdijfkjksjdfsdfkj ds
                                lewkjlwkefwlkejflkwjfkwjefklwjfkjfkjifejwf
                                ;elflkw;fkewl;ekfw;lekfw;lkflwefk
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='content-con'>
                <section className='content'>
                    <div className="content-l">
                        <img src='https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.15752-9/152035794_460770868384253_3011601652157859483_n.png?_nc_cat=103&ccb=3&_nc_sid=ae9488&_nc_eui2=AeFcFhfkaODUWJByLJhGgKkr_CukMfRZBD38K6Qx9FkEPSooLPezUFFDVlWq6-oHDKBgOyhCuSRv9Ld0_Z3tV9lE&_nc_ohc=SwzXpxGYK2IAX_3DBRU&_nc_ht=scontent.fbkk5-4.fna&oh=762a908fa987ec206179e9985c54a76b&oe=605B335E'>
                        </img>
                    </div>
                </section>
                <section className='content'>
                    <div className="content-r">
                        <h2>Covid19 Web-application</h2>
                        <p>
                        This is a web-application that can show every Covid-19 case in Thailand 🇹🇭.
                        Users can add Line bot that can be interacted with and send the information to users (including cases and important information).
                        Most benefit of this application is users can get information about Covid-19 through Line bot and on web-page.
                        </p>
                    </div>
                </section>
            </div>
            <div className='content-con'>
                <section className='content'>
                    <div className="content-l">
                        <img src='https://github.com/OOP2020/pa4-bhatara007/blob/master/photo/Screen%20Shot%202563-05-13%20at%2001.20.40.png?raw=true'>
                        </img>
                    </div>
                </section>
                <section className='content'>
                    <div className="content-r">
                        <h2>Covid19 tracker</h2>
                        <p>
                        Covid 19 tracker Application gives you real time Covid-19 disease data of more than 200 countries since 2020-1-1 as follows : Total confirmed cases. 
                        New confirm cases New deaths Total deaths This project focuses on updating real time Covid-19 disease data from online sources and learns how to create a 
                        good GUI interface from JavaFX.
                        Main Features
                        - Get real time Covid19 disease data.
                        - Show pecentage different of Covid19 disease information day by day.
                        - Create historical line graphs of Covid19 disease data.
                        </p>
                    </div>
                </section>
            </div>
        </div>
        
    )
}

export default Project
