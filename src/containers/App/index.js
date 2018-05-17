import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
// import logo from '../../assets/images/logo.svg';
import AppHeader from '../../components/common/appHeader';
import ListGif from '../../components/listGif/ListGif';
import { fetchTrendings } from './actions';

const propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired
}
class App extends Component {
  componentDidMount() {
    this.props.fetchTrendings();
  }
  
  render() {
    const {data, loading} = this.props;
    return (
      <div className="app">
        <AppHeader/>
        <ListGif data={data} loading={loading}/>
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
