import React from 'react'
import Logo from './assets/logo.svg'

function Sidebar() {
    const Items = [
        { id: 1, title: 'Wellet', url: 'https://i.ibb.co/QNXfKyz/wallet.png' },
        { id: 2, title: 'Statistics', url: 'https://i.ibb.co/mRy7wrz/statistics.png' },
        { id: 3, title: 'Transactions', url: 'https://i.ibb.co/hcx94xJ/worldwide.png' },
        { id: 4, title: 'Exchange', url: 'https://i.ibb.co/nrpM2BC/store.png' },
        { id: 5, title: 'News', url: 'https://i.ibb.co/JRrV6B8/newspaper.png' }
    ];

    const listItems = Items.map((item) =>
        <li className="list" key={item.id}><a href="#"><img className="icon" src={item.url}/>{item.title}</a></li>
    );

    return (
        <div className="sidebar">
            <a href="#" className="brand"><img src={Logo} alt="imagem da logo" />Mine&Shine</a>
            <ul className="sidebarContent">
                <li className="list"><a href="#" className="activeList"><img src="https://i.ibb.co/1rsMD2g/home.png" className="icon"/>Dashboard</a></li>
                {listItems}
            </ul>
            <ul className="activeDevice">

            </ul>
        </div>
    )
}

export default Sidebar;