import React from "react";

class Practical extends React.Component {
  render() {
    const { practicalData } = this.props;
    return (
      <ul>
        <li key={practicalData.id}>{practicalData.companyName}</li>
        <li key={practicalData.id}>{practicalData.positionTitle}</li>
        <li key={practicalData.id}>{practicalData.jobDescription}</li>
        <li key={practicalData.id}>{practicalData.datesWorked}</li>
      </ul>
    )
  }
}

export default Practical
