import React from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import {
  onSort,
  fetchJobData,
  updateCityLocation,
  updateStateLocation,
} from '../actions';
import BubbleSort from './sortingAlgorithms/BubbleSort';
import MergeSort from './sortingAlgorithms/MergeSort';

const Controls = props => {
  const city = props.cityLocation;
  const state = props.stateLocation;
  const onCityInputChange = e => {
    props.updateCityLocation(e.target.value);
    // this.setState({
    //   [e.target.name]: e.target.value,
    // });
  };
  const onStateInputChange = e => {
    props.updateStateLocation(e.target.value);
    console.log(props.cityLocation);
  };
  const onFormSubmit = e => {
    e.preventDefault();
    // var self = this;
    // if (props.onSort === false) {
    let resultArrayFetch = [];
    // let { city, state } = this.state;

    // if (props.city && props.state) {
    // let cityCopy = props.city.replace(' ', '+');
    console.log('city: ' + props.cityLocation + 'State:' + props.stateLocation);

    //api call

    // this.setState(
    //   {
    //     loading: true,
    //     bubbleColor: '',
    //     quickColor: '',
    //     mergeColor: '',
    //   }
    // () => {}
    //   );
    // } else {
    //   self.setState({
    //     message: 'Please enter valid city and state',
    //     error: true,
    //   });
    // }
    // }
  };
  return (
    <div className='controls'>
      <div className='info-container'>
        <h1>Job Skills Data Analysis</h1>
        <p>
          This app analyzes and compares the percentage of job openings for
          several of the most popular programming languages per location. Enter
          a city and state to retrieve the location's data. Next, choose a
          sorting algorithm to visually sort the data!
        </p>
      </div>

      <div>
        <div>
          <h2>Location</h2>
        </div>

        <form onSubmit={onFormSubmit}>
          <div className='location-container'>
            <div>
              <label>City:</label>

              <input
                type='text'
                name='city'
                className='input-text'
                // value={city}
                onChange={onCityInputChange}
              />
            </div>

            <div>
              <label>State:</label>

              <input
                type='text'
                name='state'
                className='input-text'
                // value={state}
                onChange={onStateInputChange}
              />
            </div>

            <div>
              <div className='buttonHolder'>
                <button
                  className='btn'
                  // style={{ color: this.state.buttonColor }}
                >
                  Submit Location
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className='algorithms-container'>
        <div>
          <h2>Sorting Algorithm</h2>
        </div>
        <div>
          <BubbleSort />
        </div>

        <div>
          <MergeSort />
          {/* <button
            onClick={self.quickSort}
            className='sortingAlgorithm'
            style={{ color: this.state.quickColor }}
          >
            Quick Sort
          </button> */}
        </div>

        {/* <div>
          <button
            onClick={self.mergeSort}
            className='sortingAlgorithm'
            style={{ color: this.state.mergeColor }}
          >
            Merge Sort
          </button>
        </div>

        <div className='buttonHolder'>
          <button
            className='btn'
            style={{ color: this.state.buttonColor }}
            onClick={self.resetSort}
          >
            Reset Sort
          </button>
        </div> */}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    jobData: state.jobData,
    cityLocation: state.cityLocation,
    stateLocation: state.stateLocation,
  };
};

export default connect(mapStateToProps, {
  fetchJobData,
  updateStateLocation,
  updateCityLocation,
})(Controls);
