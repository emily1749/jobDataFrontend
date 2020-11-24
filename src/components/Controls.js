import React from 'react';
import BubbleSort from './sortingAlgorithms/BubbleSort';
import MergeSort from './sortingAlgorithms/MergeSort';

const Controls = () => {
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

      {/* <div>
      <div>
        <h2>Location</h2>
      </div>

      <form onSubmit={this.onSubmit}>
        <div className='location-container'>
          <div>
            <label>City:</label>

            <input
              type='text'
              name='city'
              className='input-text'
              value={city}
              onChange={this.onChange}
            />
          </div>

          <div>
            <label>State:</label>

            <input
              type='text'
              name='state'
              className='input-text'
              value={state}
              onChange={this.onChange}
            />
          </div>

          <div>
            <div className='buttonHolder'>
              <button className='btn' style={{ color: this.state.buttonColor }}>
                Submit Location
              </button>
            </div>
          </div>
        </div>
      </form>
    </div> */}

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

export default Controls;
