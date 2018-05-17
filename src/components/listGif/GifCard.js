import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    data: PropTypes.object.isRequired
}

class GifCard extends Component {
    render() {
        const data = this.props;
        console.log(data.data)
        if(!data){
            return null;
        }
        const {images} = data.data
        return (
            <div className="gif-block-wrapper col-lg-3 col-md-4 col-6">
                <div className="gif-block">
                    <div className="image-block">
                        {!!images.preview_webp && <img src={images.original.url} alt='trending gif'/>}
                    </div>
                    <div className="info-group-wrapper">
                        <ul className="info-group">
                            <li><i className="i-eye"></i>123</li>
                            <li><i className="i-comment"></i>123</li>
                            <li><i className="i-heart-o"></i>123</li>
                        </ul>
                    </div>
                </div>
                <div className="user-info-block">
                    <div className="user-icon">{!!data.data.user && <img src={data.data.user.avatar_url} alt='gif-trending'/>}</div>
                    <p className="user-name">{data.data.user.username}</p>
                </div>
            </div>
        );
    }
}

GifCard.propTypes = propTypes;

export default GifCard;