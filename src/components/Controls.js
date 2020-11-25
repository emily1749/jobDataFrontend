import React, { useState, useEffect } from 'react';
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
import QuickSort from './sortingAlgorithms/QuickSort';

const Controls = props => {
  const [loading, setLoading] = useState(false);
  const city = props.cityLocation;
  const state = props.stateLocation;

  const onCityInputChange = e => props.updateCityLocation(e.target.value);
  const onStateInputChange = e => props.updateStateLocation(e.target.value);

  useEffect(() => {
    console.log('HERE');
    if (loading === true || !props.jobData) {
      console.log('in hloading');
      const fetchData = async () => {
        await props.fetchJobData('worcester', 'ma');
        console.log('DONE');
        console.log(props.jobData);
        setLoading(false);
      };
      fetchData();
      //   .then(res => {
      console.log(props.jobData);
      // });
    }
  }, [loading, props.jobData]);
  const onFormSubmit = async e => {
    e.preventDefault();
    // var self = this;
    // if (props.onSort === false) {
    let resultArrayFetch = [];

    // let { city, state } = this.state;

    // if (props.city && props.state) {
    // let cityCopy = props.city.replace(' ', '+');
    console.log('city: ' + props.cityLocation + 'State:' + props.stateLocation);
    await props.fetchJobData('worcester', 'ma').then(res => {
      console.log(res);
    });
    // console.log(props.jobData);
    // .then(response => {
    // console.log('RESPONSE' + response);
    // response = response.data;
    // let totalNumberOfJobs = 0;
    // Object.values(response).forEach(function(value) {
    //   totalNumberOfJobs += value;
    // });

    // for (const [key, value] of Object.entries(response)) {
    //   let keyResult = key;
    //   let percentage = ((value / totalNumberOfJobs) * 100).toFixed(2);
    //   resultArrayFetch.push([keyResult, percentage]);
    // }

    // // if (resultArrayFetch.length < 10 || !resultArrayFetch) {
    // //   self.setState({
    // //     message:
    // //       'Cannot find input location, please enter valid city and state',
    // //     loading: false,
    // //     error: true,
    // //   });
    // // } else {
    // resultArrayFetch.forEach((element, index) => {
    //   let percent = element[1];
    //   element[1] = parseFloat(percent);

    //   //push 0 to every element, later will use to update color of bar during sort
    //   element.push(0);
    //   //   resultArrayFetch.push([keyResult(name), percentage, color]);
    // });
    // const resultArrayCopy = JSON.parse(JSON.stringify(resultArrayFetch));

    // // self.setState({
    // //   loading: false,
    // //   resultArrayOriginal: resultArrayCopy,
    // //   resultArray: resultArrayFetch,
    // //   locationSubmitted: true,
    // //   initialData: true,
    // //   error: false,
    // // });
    // // }
    // });
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

        <form
          onSubmit={e => {
            e.preventDefault();

            setLoading(true);
          }}
        >
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
        <div>
          <QuickSort />
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
