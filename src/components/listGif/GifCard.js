import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    data: PropTypes.object.isRequired,
    handleClick: PropTypes.func
}

class GifCard extends Component {
    handleClick = (url) =>{
        const {handleClick} = this.props;
        if(url){
            handleClick(url);
        }
    }
    renderGif = (images) =>{
        const originalUrl = images.original.url || null;
        return (
            <div className="image-block" onClick={() =>this.handleClick(originalUrl)}>
                {!!images.original && <img src={images.original.url} alt='trending gif'/>}
            </div>
        )
    }
    renderInfo = () =>{
        return (
            <div className="info-group-wrapper">
                <ul className="info-group">
                    <li><i className="i-eye"></i><span>123</span></li>
                    <li><i className="i-comment"></i><span>123</span></li>
                    <li><i className="i-heart-o"></i><span>123</span></li>
                </ul>
            </div>
        )
    }
    renderUserInfo = (data) => {
        if(!data){
            return (
                <div className="user-info-block emty">User profile is empty!</div>
            )
        }
        return (
            <div className="user-info-block">
                <div className="user-icon">{<img src={data.avatar_url} alt='gif-trending'/>}</div>
                <p className="user-name">{data.username}</p>
            </div>
        )
    }
    render() {
        const data = this.props;
        if(!data){
            return null;
        }
        const {images} = data.data
        return (
            <div className="gif-block-wrapper col-lg-3 col-md-4 col-6">
                <div className="gif-block">
                    {this.renderGif(images)}
                    {this.renderInfo()}
                </div>
                {this.renderUserInfo(data.data.user)}
            </div>
        );
    }
}

GifCard.propTypes = propTypes;

export default GifCard;