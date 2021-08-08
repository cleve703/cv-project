import React from "react";

class Practical extends React.Component {
  render() {
    const { practicalData } = this.props;
    return (
      <div>
        <input key={practicalData.id} placeholder="Company Name" value={practicalData.companyName}></input>
        <input key={practicalData.id} placeholder="Position Title" value={practicalData.positionTitle}></input>
        <input key={practicalData.id} placeholder="Job Description" value={practicalData.jobDescription}></input>
        <input key={practicalData.id} placeholder="Dates Worked" value={practicalData.datesWorked}></input>
      </div>
    )
  }
}

export default Practical
