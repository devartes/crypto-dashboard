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
        <li className="List" key={item.id}><a href="#"><img className="Icon" src={item.url} />{item.title}</a></li>
    );

    return (
        <div className="Sidebar">
            <div>
                <a href="#" className="Brand"><img src={Logo} alt="imagem da logo" />Mine&Shine</a>
                <ul className="SidebarContent">
                    <li className="List"><a href="#" className="ActiveList"><img src="https://i.ibb.co/1rsMD2g/home.png" className="Icon" />Dashboard</a></li>
                    {listItems}
                </ul>
            </div>

            <div className="ActiveDevice">
                <span>Active device</span>
                <div className="Mac">
                    <ul className="IphoneContent">
                        <li>
                            <img src="https://i.ibb.co/0YT6kft/iphone.png" />
                        </li>
                        <li className="IphoneStatus">
                            <span className="IphoneName">Iphone 6s Plus</span>
                            <div className="IphoneStatusColor">
                                <span id="IconStatus"></span>Active
                            </div>
                        </li>
                        <li>
                            <img src="https://i.ibb.co/QYdz0D9/dots.png" alt="dots" />
                        </li>
                    </ul>
                    <ul className="MacContent">
                        <li>
                            <img src="https://i.ibb.co/0F2FrBN/macbook.png" />
                        </li>
                        <li className="MacStatus">
                            <span className="MacName">Macbook 2017</span>
                            <div className="MacStatusColor">
                                <span id="IconStatus"></span>Active
                            </div>
                        </li>
                        <li>
                            <img src="https://i.ibb.co/QYdz0D9/dots.png" alt="dots" />
                        </li>
                    </ul>
                    <div id="User"><img src="https://i.ibb.co/mhmKPk4/user.png"/></div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;