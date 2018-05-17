
import Lightbox from 'react-images';
import React from 'react';
import PropTypes from 'prop-types';


const LightBoxImage = ({src, isOpen, onClose}) => {
    if(!src){
        return null;
    }
    return (
        <Lightbox
        images={[{ src: src}]}
        isOpen={isOpen}
        onClose={onClose}
        showImageCount={false}
      />
    )
};

LightBoxImage.propTypes = {
    src: PropTypes.string,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
}
export default LightBoxImage;