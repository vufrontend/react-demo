import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GifCard from './GifCard';

const propTypes = {
    loading: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired
}

class ListGif extends Component {
    render() {
        const {data, loading} = this.props;
        if(loading){
            return (
                <div>
                    <p>Loading...........</p>
                </div>
            );
        }
        if(!data || data.length  < 1){
            return (
                <div>
                    <p>Your data is empty</p>
                </div>
            );
        }
        return (
            <div className="list-gif container-fluid">
                <div className="row">
                    {data.map(gif => 
                        <GifCard data={gif} key={gif.id}/>
                    )}
                </div>
            </div>
        );
    }
}

ListGif.propTypes = propTypes;

export default ListGif;