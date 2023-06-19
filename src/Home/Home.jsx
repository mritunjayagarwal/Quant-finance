import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import img from './img/hero-img.png';
import handImg from './img/easy-buy-hand-img.png';
import missionImg from './img/mission-main.png'

const Home = () => {
    return (
        <>
            <main>
                <div>
                    <div className='container'>
                        <div class="d-flex justify-content-between py-3">
                            <Link to="/" className='navbar-brand'>CRYPTO</Link>
                            <Link to="/swap">
                                <button className="buy-sell-btn">Buy / Sell</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <section style={{ "padding": "100px 0 0 0" }}>
                    <div className="container">
                        <div class="row">
                            <div class="col-lg-3 d-flex align-items-center justify-content-center">
                                <div className='w-100'>
                                    <div>
                                        <a href="">
                                            <h1 className="main-link">Home <span class="pull-right"><i className='fa fa-arrow-right'></i></span></h1>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="">
                                            <h1 className="main-link">Whitepaper <span class="pull-right"><i className='fa fa-arrow-right'></i> </span></h1>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="">
                                            <h1 className="main-link">Home <span class="pull-right"><i className='fa fa-arrow-right'></i> </span></h1>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="">
                                            <h1 className="main-link">Home <span class="pull-right"><i className='fa fa-arrow-right'></i> </span></h1>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="">
                                            <h1 className="main-link">Home <span class="pull-right"><i className='fa fa-arrow-right'></i> </span></h1>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 d-flex align-items-center justify-content-center">
                                <img src={img} class="img-fluid" alt="" />
                            </div>
                            <div class="col-lg-6 d-flex align-items-center justify-content-center">
                                <p className='mission-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos excepturi doloremque, eum similique ullam perspiciatis reprehenderit dolorum? Iste porro totam delectus, molestias unde doloremque animi qui officiis nisi ab quae.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7 d-flex align-items-center">
                                <h1 class="about-head about-main">EASILY <span class="strokeme">BUY <br /> and SELL</span> CRYPTO & <br /> STABLECOINS</h1>
                            </div>
                            <div class="col-lg-5 d-flex align-items-center justify-content-end">
                                <img src={handImg} class="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4">
                                <div className="feature-list">
                                    <h1 class="text-center">Superior Rates</h1>
                                    <p class="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nobis impedit, nam aliquid id blanditiis ea beatae explicabo repellat est quo eveniet. Delectus impedit autem quibusdam velit saepe voluptatibus veniam?</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div className='feature-list'>
                                    <h1 class="text-center">Superior Rates</h1>
                                    <p class="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nobis impedit, nam aliquid id blanditiis ea beatae explicabo repellat est quo eveniet. Delectus impedit autem quibusdam velit saepe voluptatibus veniam?</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div className='feature-list'>
                                    <h1 class="text-center">Superior Rates</h1>
                                    <p class="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nobis impedit, nam aliquid id blanditiis ea beatae explicabo repellat est quo eveniet. Delectus impedit autem quibusdam velit saepe voluptatibus veniam?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 d-flex align-items-center justify-content-center">
                                <img src={missionImg} class="img-fluid" alt="" />
                            </div>
                            <div class="col-lg-6 d-flex align-items-center justify-content-center">
                                <div>
                                    <h1 className='about-head'>OUR <span className='strokeme'>MISSION</span></h1>
                                    <p className='mt-3 mission-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cupiditate cum qui explicabo tempora quam corporis saepe! Eum numquam adipisci eius suscipit atque impedit voluptatum nam quos laboriosam. Asperiores, repellat.</p>
                                    <button class="btn btn-primary mission-btn">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="container">
                        <h1 class="text-center about-head">I WANT TO <span className='strokeme'>BUY</span></h1>
                        <div class="row">
                            <div class="col-lg-3">
                                <div className='buy-item'>
                                    <div class="d-flex h-100">
                                        <div style={{ "flex": 1 }} className='d-flex align-items-center justify-content-center'>
                                            <h1 class="text-center buy-head">USDC</h1>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center p-2">
                                            <img src="https://cdn.moralis.io/eth/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png" style={{ "height": "50px", "margin": "10px" }} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div className='buy-item'>
                                    <div class="d-flex h-100">
                                        <div style={{ "flex": 1 }} className='d-flex align-items-center justify-content-center'>
                                            <h1 class="text-center buy-head">LINK</h1>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center p-2">
                                            <img src="https://cdn.moralis.io/eth/0x514910771af9ca656af840dff83e8264ecf986ca.png" style={{ "height": "50px", "margin": "10px" }} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div className='buy-item'>
                                    <div class="d-flex h-100">
                                        <div style={{ "flex": 1 }} className='d-flex align-items-center justify-content-center'>
                                            <h1 class="text-center buy-head">USDT</h1>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center p-2">
                                            <img src="https://cdn.moralis.io/eth/0xdac17f958d2ee523a2206206994597c13d831ec7.png" style={{ "height": "50px", "margin": "10px" }} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div className='buy-item'>
                                    <div class="d-flex h-100">
                                        <div style={{ "flex": 1 }} className='d-flex align-items-center justify-content-center'>
                                            <h1 class="text-center buy-head">GUSD</h1>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center p-2">
                                            <img src="https://cdn.moralis.io/eth/0x056fd409e1d7a124bd7017459dfea2f387b6d5cd.png" style={{ "height": "50px", "margin": "10px" }} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div className='buy-item'>
                                    <div class="d-flex h-100">
                                        <div style={{ "flex": 1 }} className='d-flex align-items-center justify-content-center'>
                                            <h1 class="text-center buy-head">DAI</h1>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center p-2">
                                            <img src="https://cdn.moralis.io/eth/0x6b175474e89094c44da98b954eedeac495271d0f.png" style={{ "height": "50px", "margin": "10px" }} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div className='buy-item'>
                                    <div class="d-flex h-100">
                                        <div style={{ "flex": 1 }} className='d-flex align-items-center justify-content-center'>
                                            <h1 class="text-center buy-head">WETH</h1>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center p-2">
                                            <img src="https://cdn.moralis.io/eth/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png" style={{ "height": "50px", "margin": "10px" }} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div className='buy-item'>
                                    <div class="d-flex h-100">
                                        <div style={{ "flex": 1 }} className='d-flex align-items-center justify-content-center'>
                                            <h1 class="text-center buy-head">WBTC</h1>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center p-2">
                                            <img src="https://cdn.moralis.io/eth/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png" style={{ "height": "50px", "margin": "10px" }} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div className='buy-item'>
                                    <div class="d-flex h-100">
                                        <div style={{ "flex": 1 }} className='d-flex align-items-center justify-content-center'>
                                            <h1 class="text-center buy-head">MATIC</h1>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center p-2">
                                            <img src="https://cdn.moralis.io/eth/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png" style={{ "height": "50px", "margin": "10px" }} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="container">
                        <h1 class="text-center about-head">Why <span class="strokeme">STABLY?</span></h1>
                        <div class="row mt-5">
                            <div class="col-lg-4">
                                <div className='feature-list'>
                                    <h1 class="text-center">Superior Rates</h1>
                                    <p class="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nobis impedit, nam aliquid id blanditiis ea beatae explicabo repellat est quo eveniet. Delectus impedit autem quibusdam velit saepe voluptatibus veniam?</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div className='feature-list'>
                                    <h1 class="text-center">Superior Rates</h1>
                                    <p class="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nobis impedit, nam aliquid id blanditiis ea beatae explicabo repellat est quo eveniet. Delectus impedit autem quibusdam velit saepe voluptatibus veniam?</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div className='feature-list'>
                                    <h1 class="text-center">Superior Rates</h1>
                                    <p class="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nobis impedit, nam aliquid id blanditiis ea beatae explicabo repellat est quo eveniet. Delectus impedit autem quibusdam velit saepe voluptatibus veniam?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="container">
                        <h1 class="text-center about-head">JOIN OUR <span className='strokeme'>COMMUNITY</span></h1>
                        <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rem voluptas, iure, quod ipsam error doloribus laborum dolor reprehenderit architecto accusantium facere itaque, eum nihil temporibus. Aperiam laboriosam ipsa at.</p>
                    </div>
                </section>
                <footer>
                    <h5 class="text-center">&copy; 2024 Company Name</h5>
                </footer>
            </main>
        </>
    )
}

export default Home
