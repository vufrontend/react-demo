import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import ListGif from '../../components/listGif/ListGif';
import { AppHeader, LightBoxImage } from '../../components/common';
import { fetchTrendings } from './actions';

const propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showLightBox: false,
      lightBoxUrl: null
    }
  }
  toogleLightBox = () => {
    this.setState(prevState =>({...prevState, showLightBox: !prevState.showLightBox}))
  }
  setUrl = (url) => {
    this.setState({
      lightBoxUrl: url
    },()=>this.toogleLightBox())
  }
  componentDidMount() {
    this.props.fetchTrendings();
  }
  handleGifClick = (url) => {
    if(url){
      this.setUrl(url);
    }
  }
  render() {
    const {data, loading} = this.props;
    return (
      <div className="app">
        <AppHeader/>
        <ListGif 
          data={data} 
          loading={loading} 
          handleClick={this.handleGifClick}
        />
        <LightBoxImage
          src={this.state.lightBoxUrl}
          isOpen={this.state.showLightBox}
          onClose={this.toogleLightBox}
        />
      </div>
    );
  }
}
const mapStateToProps= state => ({
  data: state.get('AppReducer').get('data').toJS(),
  loading: state.get('AppReducer').get('loading')
});

App.propTypes = propTypes;

export default connect(mapStateToProps,{fetchTrendings})(App);
