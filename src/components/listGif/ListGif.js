import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GifCard from './GifCard';

import { Spinner } from '../common/';

const propTypes = {
    loading: PropTypes.bool.isRequired,
    handleClick: PropTypes.func,
    data: PropTypes.array.isRequired
}

class ListGif extends Component {
    render() {
        const {data, loading, handleClick} = this.props;
        if(loading){
            return <Spinner />
        }
        if(!data || data.length  < 1){
            return (
                <div className="list-gif-empty">
                    <p>Your data is empty</p>
                </div>
            );
        }
        return (
            <div className="list-gif container-fluid">
                <div className="row">
                    {data.map(gif => 
                        <GifCard data={gif} key={gif.id} handleClick={handleClick}/>
                    )}
                </div>
            </div>
        );
    }
}

ListGif.propTypes = propTypes;

export default ListGif;