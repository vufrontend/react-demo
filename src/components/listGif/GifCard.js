import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    data: PropTypes.object.isRequired
}

class GifCard extends Component {
    render() {
        const data = this.props;
        // console.log(data.data.images.preview_webp)
        if(!data){
            return null;
        }
        const {images} = data.data
        return (
            <div className="gif-block-wrapper col-lg-3 col-md-4 col-6">
                <div className="gif-block">
                    <div className="image-block">{!!images.preview_webp && <img src={images.original.url} alt='gif-trending'/>}</div>
                    <div>{data.data.username}</div>
                </div>
            </div>
        );
    }
}

GifCard.propTypes = propTypes;

export default GifCard;