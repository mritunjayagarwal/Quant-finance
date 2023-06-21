import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import img from './img/logo.png';
import handImg from './img/easy-buy-hand-img.png';
import missionImg from './img/mission-main.png';
import dex from './img/dex.png';
import etherScan from './img/9.png';
import pdf from './whitepaper.pdf';

const Home = () => {
    return (
        <>
            <main>
                <nav class="navbar navbar-expand-lg py-3 m-0 w-100" data-aos="fade-down" data-aos-delay="800">
                    <div className='container'>
                        <Link class="navbar-brand" to="/"><img src={img} style={{ "width": "80px", "height": "auto", "margin-left": "-20px" }} />Quant Finance</Link>
                        <button class="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fa fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse text-white" id="navbarText">
                            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link to="/" class="px-3 pt-2 btn-link active">
                                        Home
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <a href={pdf} target = "_blank" class="px-3 pt-2 btn-link">
                                        Whitepaper
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <Link to="/swap">
                                        <button className="buy-sell-btn" style={{ "margin-top": "-20px" }}>Buy / Sell</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section style={{ "padding": "50px 0 0 0" }}>
                    <div className="container">
                        <div class="row">
                            <div class="col-lg-3 d-flex align-items-center justify-content-center">
                                <div className='w-100 panel'>
                                    <div>
                                        <a href="">
                                            <h1 className="main-link">Multichain Dex <span class="pull-right"><i className='fa fa-arrow-right'></i></span></h1>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="">
                                            <h1 className="main-link">AI Pathfinder <span class="pull-right"><i className='fa fa-arrow-right'></i> </span></h1>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="">
                                            <h1 className="main-link">Mev Protection <span class="pull-right"><i className='fa fa-arrow-right'></i> </span></h1>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="">
                                            <h1 className="main-link">Batch Auctioning <span class="pull-right"><i className='fa fa-arrow-right'></i> </span></h1>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 d-flex align-items-center justify-content-center">
                                <img src={img} class="img-fluid logo-img" alt="" />
                            </div>
                            <div class="col-lg-6 d-flex align-items-center justify-content-center">
                                <div>
                                    <p className='mission-para'>Quant finance utilizes AI pathfinding & Batch auctioning to identify the most affordable price for your trade from various exchanges and aggregators, including Uniswap and 1inch. Additionally, it safeguards you against MEV bots, setting it apart from other solutions.</p>
                                    <div class="d-flex">
                                        <div class="pr-2">
                                            <a href={pdf} target = "_blank">
                                            <button class="btn btn-light btn-top">Docs</button>
                                            </a>
                                        </div>
                                        <div class="px-2">
                                            <a href="https://t.me/quantfinanceerc">
                                                <button class="btn btn-light btn-top">Community</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7 d-flex align-items-center">
                                <h1 class="about-head about-main text-uppercase">Unleashing <span className='strokeme'>unparalleled price dominance</span> in the crypto space</h1>
                            </div>
                            <div class="col-lg-5 d-flex align-items-center justify-content-center">
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
                                    <h1 class="text-center">Competitive Rates</h1>
                                    <p class="text-center">Exchange your preferred coins and alternative assets for ETH, with transaction fees as low as 0.1% per swap.</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div className='feature-list'>
                                    <h1 class="text-center">Seamless Swaps</h1>
                                    <p class="text-center">Eliminate the need for manual price comparison across platforms like 1inch, Uniswap, or other exchanges. Instead, our swap leverages an AI-based pathfinder to search and identify the optimal price from all available sources.</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div className='feature-list'>
                                    <h1 class="text-center">Chain Agnostic</h1>
                                    <p class="text-center">Our decentralized exchange (DEX) ensures multichain compatibility (Binance Smart Chain, Arbitrum) providing users with a diverse range of chain options to utilize.                  </p>
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
                                    <p className='mt-3 mission-para'>At Quant Finance, our mission is to empower retail traders by providing innovative solutions that enhance their trading journey. Through the utilization of advanced technologies such as batch auctions and AI-based pathfinders, we strive to offer our users the most competitive swapping rates in the market. We are dedicated to delivering a fully professional decentralized exchange (DEX) user experience, ensuring that retail traders can trade with confidence and efficiency. Our commitment to excellence drives us to continuously improve and provide a platform that empowers retail traders in their pursuit of financial success.</p>
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
                        <h1 class="text-center about-head">Why <span class="strokeme">QUANT?</span></h1>
                        <div class="row mt-5">
                            <div class="col-lg-4">
                                <div className='feature-list'>
                                    <h1 class="text-center">Permissionless Trading</h1>
                                    <p class="text-center">Quant Finance offers a fully permissionless trading experience, allowing users to trade any tokens and build integrations without limitations. This open approach empowers individuals to participate in decentralized finance (DeFi) without barriers, promoting financial inclusivity and accessibility.</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div className='feature-list'>
                                    <h1 class="text-center">Enhanced Liquidity and Optimal Prices</h1>
                                    <p class="text-center">Through its innovative Batch Auctions and AI Path finders, Quant Finance maximizes liquidity and facilitates efficient matching of orders. This results in better prices for individual traders and significant gas fee optimization. By tapping into on-chain liquidity and leveraging batch auctions, Quant Finance ensures users can access the most favorable prices available in the market.</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div className='feature-list'>
                                    <h1 class="text-center">MEV Protection and Fair Settlement</h1>
                                    <p class="text-center">Quant Finance prioritizes the protection of traders from various forms of Miner Extractable Value (MEV), such as front/back running or sandwich attacks. By utilizing decentralized solvers who compete to provide optimal batch settlement solutions, the protocol establishes a fair and transparent mechanism for trade settlement. Traders can have confidence in the integrity of their transactions and the equitable execution of orders.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="container">
                        <h1 class="text-center about-head">JOIN OUR <span className='strokeme'>COMMUNITY</span></h1>
                        <div class="mt-3">
                            <div class="row d-flex justify-content-center">
                                <div class="col-lg-3 col-md-6">
                                    <a class="touch-link" href="https://t.me/quantfinanceerc" style={{ "color": "#fff" }}>
                                        <div class="touch-card">
                                            <p><i class="fa fa-telegram"></i> Telegram</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <a class="touch-link" href="https://twitter.com/quantfinanceerc" style={{ "color": "#fff" }}>
                                        <div class="touch-card">
                                            <p><i class="fa fa-twitter"></i> Twitter</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="touch-card">
                                        <p><i class="fa fa-medium"></i> Medium</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <a class="touch-link" href="mailto: me@gmail.com" style={{ "color": "#fff" }}>
                                        <div class="touch-card">
                                            <p><i class="fa fa-envelope"></i> Mail</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="touch-card">
                                        <p><img src={dex} style={{ "width": "40px", "height": "auto" }} /> Dextools</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="touch-card">
                                        <p><img src={etherScan} style={{ "width": "40px", "height": "auto" }} /> Etherscan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <h5 class="text-center">&copy; 2023 Quant Finance. All Rights Reserved</h5>
                </footer>
            </main>
        </>
    )
}

export default Home
