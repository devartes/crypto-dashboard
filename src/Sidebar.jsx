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
        <li className="list" key={item.id}><a href="#"><img className="icon" src={item.url} />{item.title}</a></li>
    );

    return (
        <div className="sidebar">
            <div>
                <a href="#" className="brand"><img src={Logo} alt="imagem da logo" />Mine&Shine</a>
                <ul className="sidebarContent">
                    <li className="list"><a href="#" className="activeList"><img src="https://i.ibb.co/1rsMD2g/home.png" className="icon" />Dashboard</a></li>
                    {listItems}
                </ul>
            </div>

            <div className="activeDevice">
                <span>Active device</span>
                <div className="iphone">
                    <ul className="iphoneContent">
                        <li>
                            <img src="https://i.ibb.co/0YT6kft/iphone.png" />
                        </li>
                        <li className="iphoneStatus">
                            <span className="iphoneName">Iphone 6s Plus</span>
                            <span className="IphoneStatusColor">Active</span>
                        </li>
                        <li>
                            <img src="https://i.ibb.co/QYdz0D9/dots.png" alt="dots" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;