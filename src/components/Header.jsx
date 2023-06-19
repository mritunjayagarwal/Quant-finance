import React from 'react'
import { Link } from 'react-router-dom';
import eth from '../Home/img/eth.png';


function Header({ address, isConnected, connect, disconnect }) {

  return (
    <header>
      <nav class="navbar navbar-expand-lg py-3 m-0 w-100 fixed-top" data-aos="fade-down" data-aos-delay="800">
        <Link class="navbar-brand me-2" to="/">Crypto</Link>
        <button class="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse text-white" id="navbarText">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="px-3 pt-2 btn-link active">
                Swap
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/" class="px-3 pt-2 btn-link">
                Pool
              </Link>
            </li>
            <li class="nav-item">
              <a href="#project" class="px-3 pt-2 btn-link">
                Bridge
              </a>
            </li>
            <li>
              <a href = "#project">
                <img src={eth} className='mr-3' style = {{ "width": "40px", "height": "auto", "margin-top": "-5px"}} alt="" />
              </a>
            </li>
            <li class="nav-item">
              <button className="btn-grad py-3 px-3"
                onClick={() => {
                  if (isConnected) disconnect()
                  else connect()
                }} style={{ "border": "unset" }}>
                {isConnected
                  ? 'Disconnect Wallet'
                  : 'Connect Wallet'}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header