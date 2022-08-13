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
                    <h1 className="Title">Welcome to Dashboard</h1>
                    <div className="CryptoTabs">
                        <ul className="CryptoList">
                        {CryptoIconslist}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )

}

export default DashboardContent;