import React from 'react'

import "./styles/_main.scss"

function DashboardContent() {
    const CryptoIcons = [
        { id: 1, url: 'https://i.ibb.co/mFDnZ81/bitcoin.png' },
        { id: 2, url: 'https://i.ibb.co/DMBLVTZ/ethereum.png' },
        { id: 3, url: 'https://i.ibb.co/2sP8JdL/ripple.png' },
        { id: 4, url: 'https://i.ibb.co/xfYf8R2/rchain.png' },
        { id: 5, url: 'https://i.ibb.co/tHZvpdg/chia.png' },
        { id: 6, url: 'https://i.ibb.co/pzzvXdK/coin-eagle.png' },
        { id: 7, url: 'https://i.ibb.co/25cKJQ7/litecoin.png' },
        { id: 8, url: 'https://i.ibb.co/f4KDpKM/dash.png' },
        { id: 9, url: 'https://i.ibb.co/8xwGFwx/zcash.png' }
    ];

    const CryptoIconslist = CryptoIcons.map((CryptoIcon) =>
        <li key={CryptoIcon.id}><a href="#" className="CryptoIconClick"><img className="CryptoImage" src={CryptoIcon.url} /></a></li>
    );

    return (
        <div>
            <div className="DashboardContent">
                <nav className="Navbar">
                    <div className="Welcome">
                        <h1 className="Title">Welcome to Dashboard</h1>
                        <div className="CryptoTabs">
                            <ul className="CryptoList">
                                {CryptoIconslist}
                            </ul>
                        </div>
                    </div>
                    <div className="SearchContainer">
                        <span>Search</span>
                        <form action=" " method="post">
                            <input type="search" id="search" placeholder="Enter Search Term"/>
                            <button type="submit" className="ButtonSearch"><img src="https://i.ibb.co/xLzk2qy/search.png" /></button>
                        </form>
                    </div>
                </nav>
                <div className="Overview">
                    <span>Overview</span>
                    <div className="OverviewContainer">
                        <div className="CoinContainer">
                            <div className="WalletContainer">
                                <div className="Coin">
                                    <div className="CoinInformation">
                                        oi1
                                    </div>
                                    <img src="https://i.ibb.co/YRn85xH/bitcoin-logo.png"></img>
                                </div>
                                <div className="WalletType">
                                    <div className="WalletPrimary">oi</div>
                                    <div className="WalletSecundary">oi</div>
                                </div>
                            </div>
                            <div className="CryptoComparison">
                                oi
                            </div>
                        </div>
                        <div className="CompaniesList">oi2</div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DashboardContent;