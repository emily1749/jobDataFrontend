import React, { useEffect } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { updateResultArray } from '../actions';

const BarGraph = ({ resultArray }) => {
  const color = [
    'linear-gradient( #0278ae, #7aa7c9)', //blue
    'linear-gradient( #fddb3a, #ffefa0)', //yellow
    'linear-gradient( #79d70f, #bbd196)', //green
    'linear-gradient( #5c2a9d, #d789d7)', //purple
    'linear-gradient( #f76a8c, #ffaaa5)', //pink/red
  ];
  const renderList = () => {
    return resultArray.map((value, index) => {
      return (
        <div className='bargroup' key={value[0]}>
          <div
            className='bar'
            style={{
              backgroundImage: color[value[3]],

              height: `${value[1] * 10}px`,
            }}
          ></div>
          <h2>{value[0]}</h2>
          <p>{value[1]}%</p>
        </div>
      );
    });
  };

  console.log('BAR GRAPH RERENDERD');
  useEffect(() => {}, resultArray);
  return <div className='barGraph'>{renderList()};</div>;
};

const mapStateToProps = state => {
  return { resultArray: state.resultArray };
};

export default connect(mapStateToProps, { updateResultArray })(BarGraph);
