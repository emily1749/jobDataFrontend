import React from 'react';
import axios from 'axios';
import './index.css';

import Loading from './Loading';
import BarGraph from './BarGraph';
import Controls from './Controls';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      // city: '',
      // state: '',
      // resultArrayOriginal: [
      //   ['Typescript', 0.2, 0, 0, 0],
      //   ['Ruby', 1.52, 0, 0, 1],
      //   ['Python', 27.21, 0, 0, 2],
      //   ['C++', 22.84, 0, 0, 3],
      //   ['Golang', 0.4, 0, 0, 9],
      //   ['Swift', 2.34, 0, 0, 4],
      //   ['Javascript', 17.16, 0, 0, 5],
      //   ['PHP', 2.44, 0, 0, 6],
      //   ['Java', 17.56, 0, 0, 7],
      //   ['C#', 8.22, 0, 0, 8],
      // ],
      resultArray: [
        ['Typescript', 0.2, 0, 0, 0],
        ['Ruby', 1.52, 0, 0, 1],
        ['Python', 27.21, 0, 0, 2],
        ['C++', 22.84, 0, 0, 3],
        ['Golang', 0.4, 0, 0, 9],
        ['Swift', 2.34, 0, 0, 4],
        ['Javascript', 17.16, 0, 0, 5],
        ['PHP', 2.44, 0, 0, 6],
        ['Java', 17.56, 0, 0, 7],
        ['C#', 8.22, 0, 0, 8],
      ],
      bubbleColor: '',
      // quickColor: '',
      // mergeColor: '',
      // onSort: false,
      // buttonColor: '',
      // loading: false,
      // locationSubmitted: true,
      // locationSubmitted: false,
      // initialData: false,
      // message: 'Please enter location',
      // error: false,
    };
  }

  render() {
    // const { city, state } = this.state;
    // var self = this;
    return (
      <div className='container'>
        <div className='controls-container'>
          <Controls />
        </div>

        <div className='barGraph-container'>
          {/* {this.state.initialData === false ||
          this.state.error === true ||
          (this.state.initialData === true && this.state.loading === true) ? (
            <Loading
              loading={this.state.loading}
              message={this.state.message}
            />
          ) : ( */}
          <BarGraph />
          {/* )} */}
        </div>
      </div>
    );
  }
}

export default App;
