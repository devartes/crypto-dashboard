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
    // -----
    const CryptoInformations = [
        { id: 1, title: "BTC/USD", value: "$18 928.15", url: 'https://i.ibb.co/64J75dM/arrow-up.png' },
        { id: 2, title: "ETH/USD", value: "$591.8874", url: 'https://i.ibb.co/64J75dM/arrow-up.png' },
        { id: 3, title: "XRP/USD", value: "$0.61688", url: 'https://i.ibb.co/64J75dM/arrow-up.png' },
        { id: 9, title: "Litecoin/USD", value: "$87.9917", url: 'https://i.ibb.co/qp4XbNs/arrow-down.png' }
    ];



    const CryptoInformationlist = CryptoInformations.map((CryptoInformation) =>
        <li key={CryptoInformation.id} className="CryptoColor">
            <span className="CoinType">{CryptoInformation.title}</span>
            <div className="CryptoStatus">
                <span className="CryptoValue">{CryptoInformation.value}</span>
                <img src={CryptoInformation.url} />
            </div>
        </li>
    );
    // --
    

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
                            <input type="search" id="search" placeholder="Enter Search Term" />
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
                                        <div className="BalanceInUSD">
                                            <span className="TitleBalance">Available balance in USD</span>
                                            <span id="BalanceData">134,510.15</span>
                                        </div>
                                        <div className="BalanceInformation">
                                            <div className="TransactionsContainer">
                                                <div className="Transactions">
                                                    <span className="TransactionTitle">
                                                        Transactions
                                                    </span>
                                                    <span id="TransactionDetails">
                                                        34,405
                                                    </span>
                                                </div>
                                                <div className="Wallets">
                                                    <span className="WalletsTitle">
                                                        Wallets
                                                    </span>
                                                    <span id="WalletsDetails">
                                                        23
                                                    </span>
                                                </div>
                                            </div>
                                            <div id="LastActivity">
                                                Last activity at 21 May,2021
                                            </div>
                                        </div>
                                    </div>
                                    <img src="https://i.ibb.co/YRn85xH/bitcoin-logo.png"></img>
                                </div>
                                <div className="WalletType">
                                    <div className="WalletPrimary">
                                        <span id="WalletPrimaryTitle">NioWallet</span>
                                        <div id="WalletPrimaryData">4.434953
                                            <span id="CoinSymbol">NIO</span>
                                        </div>
                                        <span id="WalletPrimaryIcon">
                                            <img src="https://i.ibb.co/DGyGF1j/bitcoin-icon.png"></img>
                                        </span>
                                    </div>
                                    <div className="WalletSecundary">
                                        <span id="WalletSecundaryTitle">Ethereum Wallet</span>
                                        <div id="WalletSecundaryData">0.000298
                                            <span id="CoinSymbol">ETH</span>
                                        </div>
                                        <span id="WalletSecundaryIcon">
                                            <img src="https://i.ibb.co/6b7gjgP/ethereum-icon.png"></img>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="CryptoComparison">
                                <ul>
                                    {CryptoInformationlist}
                                </ul>
                            </div>
                        </div>
                        <div className="CompaniesList">5</div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DashboardContent;