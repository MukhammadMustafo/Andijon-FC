import React from 'react'
import NewsBg from '../../assets/image/news-bg.png'
import Team_vid from "../../assets/image/Videos.png"

import './News.scss'
// import { heroData } from "../../assets/data/data"


// const listArr = []

function News() {

    return (
        <div>
            <div className="hero">
                <img src={NewsBg} alt="" />
            </div>
            <div className="container">
                <ul className='hero_list'>
                    <li className='hero_item'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQRwPbWvG6cLa2fZ4rz04yroTTpnNTC9s7A&usqp=CAU" alt="" />
                        <div className="hero_text">
                            <p>Ukrainian refugees face accommodation crisis as supply limits reached</p>
                            <h6>Cabinet subcommittee meeting today to <br /> discuss issue</h6>
                            <h5>Sun Jun 12 2022 - <br /> 21:59</h5>
                        </div>
                    </li>
                    <li className='hero_item'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQRwPbWvG6cLa2fZ4rz04yroTTpnNTC9s7A&usqp=CAU" alt="" />
                        <div className="hero_text">
                            <p>Ukrainian refugees face accommodation crisis as supply limits reached</p>
                            <h6>Cabinet subcommittee meeting today to <br /> discuss issue</h6>
                            <h5>Sun Jun 12 2022 - <br /> 21:59</h5>
                        </div>
                    </li>
                    <li className='hero_item'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQRwPbWvG6cLa2fZ4rz04yroTTpnNTC9s7A&usqp=CAU" alt="" />
                        <div className="hero_text">
                            <p>Ukrainian refugees face accommodation crisis as supply limits reached</p>
                            <h6>Cabinet subcommittee meeting today to <br /> discuss issue</h6>
                            <h5>Sun Jun 12 2022 - <br /> 21:59</h5>
                        </div>
                    </li>
                    <li className='hero_item'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQRwPbWvG6cLa2fZ4rz04yroTTpnNTC9s7A&usqp=CAU" alt="" />
                        <div className="hero_text">
                            <p>Ukrainian refugees face accommodation crisis as supply limits reached</p>
                            <h6>Cabinet subcommittee meeting today to <br /> discuss issue</h6>
                            <h5>Sun Jun 12 2022 - <br /> 21:59</h5>
                        </div>
                    </li>
                    <li className='hero_item'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQRwPbWvG6cLa2fZ4rz04yroTTpnNTC9s7A&usqp=CAU" alt="" />
                        <div className="hero_text">
                            <p>Ukrainian refugees face accommodation crisis as supply limits reached</p>
                            <h6>Cabinet subcommittee meeting today to <br /> discuss issue</h6>
                            <h5>Sun Jun 12 2022 - <br /> 21:59</h5>
                        </div>
                    </li>
                </ul>
                <div className="times">
                    <img src="https://static.sports.uz/uploads/2020/%D0%A8%D1%83%D1%85%D1%80%D0%B0%D1%82%D0%B1%D0%B5%D0%BA%202021/%D0%B0%D0%BD%D0%B4%D0%B8%D0%B6%D0%BE%D0%BD%D1%83%D1%83%D1%83%D1%83%D1%83_2.jpg" alt="" />
                    <div className="times_left">
                        <p className='times_text'>The Irish Times Irish Theatre Awards 2022: All the winners revealed</p>
                        <button className='times_btn'>Barchasi</button>
                    </div>
                </div>
            </div>
            <div className="team">
                <div className="team_list container">
                    <ul>
                        <li>
                            <img src="https://static.sports.uz/uploads/2020/%D0%A8%D1%83%D1%85%D1%80%D0%B0%D1%82%D0%B1%D0%B5%D0%BA%202021/%D0%B0%D0%BD%D0%B4%D0%B8%D0%B6%D0%BE%D0%BD%D1%83%D1%83%D1%83%D1%83%D1%83_2.jpg" alt="" />
                            <div className="team_text">
                                <p>The Irish Times Irish Theatre Awards 2022: <br />
                                    All the winners revealed</p>
                            </div>
                        </li>
                        <li>
                            <img src="https://static.sports.uz/uploads/2020/%D0%A8%D1%83%D1%85%D1%80%D0%B0%D1%82%D0%B1%D0%B5%D0%BA%202021/%D0%B0%D0%BD%D0%B4%D0%B8%D0%B6%D0%BE%D0%BD%D1%83%D1%83%D1%83%D1%83%D1%83_2.jpg" alt="" />
                            <div className="team_text">
                                <p>The Irish Times Irish Theatre Awards 2022: <br />
                                    All the winners revealed</p>
                            </div>
                        </li>
                        <li>
                            <img src="https://static.sports.uz/uploads/2020/%D0%A8%D1%83%D1%85%D1%80%D0%B0%D1%82%D0%B1%D0%B5%D0%BA%202021/%D0%B0%D0%BD%D0%B4%D0%B8%D0%B6%D0%BE%D0%BD%D1%83%D1%83%D1%83%D1%83%D1%83_2.jpg" alt="" />

                            <div className="team_text">
                                <p>The Irish Times Irish Theatre Awards 2022: <br />
                                    All the winners revealed</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="team_video container">
                <img src={Team_vid} alt="" />
                <button className='team_vid-btn'>More Videos </button>
            </div>
            <div className="girona">
                <div className="girona_fc container">
                    <ul>
                        <li>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/3ItC-bRRZRI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <p>Tens of thousands of demonstrators gathered across the US on Saturday to advocate for gun control following last month's massacre at a Texas elementary school.</p>
                            <h5>By Reuters  ●  Sun Jun 12 2022 - 09:42</h5>
                        </li>
                        <li>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/3ItC-bRRZRI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <p>Tens of thousands of demonstrators gathered across the US on Saturday to advocate for gun control following last month's massacre at a Texas elementary school.</p>
                            <h5>By Reuters  ●  Sun Jun 12 2022 - 09:42</h5>
                        </li>
                        <li>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/3ItC-bRRZRI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <p>Tens of thousands of demonstrators gathered across the US on Saturday to advocate for gun control following last month's massacre at a Texas elementary school.</p>
                            <h5>By Reuters  ●  Sun Jun 12 2022 - 09:42</h5>
                        </li>
                        <li>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/3ItC-bRRZRI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <p>Tens of thousands of demonstrators gathered across the US on Saturday to advocate for gun control following last month's massacre at a Texas elementary school.</p>
                            <h5>By Reuters  ●  Sun Jun 12 2022 - 09:42</h5>
                        </li>
                        <li>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/3ItC-bRRZRI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <p>Tens of thousands of demonstrators gathered across the US on Saturday to advocate for gun control following last month's massacre at a Texas elementary school.</p>
                            <h5>By Reuters  ●  Sun Jun 12 2022 - 09:42</h5>
                        </li>
                        <li>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/3ItC-bRRZRI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <p>Tens of thousands of demonstrators gathered across the US on Saturday to advocate for gun control following last month's massacre at a Texas elementary school.</p>
                            <h5>By Reuters  ●  Sun Jun 12 2022 - 09:42</h5>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default News