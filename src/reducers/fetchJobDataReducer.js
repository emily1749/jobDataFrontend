export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_JOB_DATA':
      //   .then(response => {
      // console.log('RESPONSE' + response);
      let response = { ...action.payload };

      //   let responseArr = [];
      let totalNumberOfJobs = 0;
      let resultArrayFetch = [];

      Object.values(response).forEach(function(value) {
        totalNumberOfJobs += value;
      });

      for (const [key, value] of Object.entries(response)) {
        let keyResult = key;
        let percentage = ((value / totalNumberOfJobs) * 100).toFixed(2);
        resultArrayFetch.push([keyResult, percentage]);
      }

      //   if (resultArrayFetch.length < 10 || !resultArrayFetch) {
      //     self.setState({
      //       message:
      //         'Cannot find input location, please enter valid city and state',
      //       loading: false,
      //       error: true,
      //     });
      //   } else {
      resultArrayFetch.forEach((element, index) => {
        let percent = element[1];
        element[1] = parseFloat(percent);

        //push 0 to every element, later will use to update color of bar during sort
        element.push(0);
        //   resultArrayFetch.push([keyResult(name), percentage, color]);
      });
      const resultArrayCopy = JSON.parse(JSON.stringify(resultArrayFetch));

      return resultArrayCopy;
    default:
      return state;
  }
};
