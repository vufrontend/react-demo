import React, { Component } from 'react';

class AppHeader extends Component {
    render() {
        return (
            <header className="app-header ">
                <div className="navbar fixed-top">
                    <div className="logo-wrapper">
                        <img src={require('../../assets/images/message-media-logo-2016.png')} alt="message media"/>
                    </div>
                </div>
            </header>
        );
    }
}

export default AppHeader;