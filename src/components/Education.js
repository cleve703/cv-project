import React from "react";

class Education extends React.Component {
  render() {
    const { educationData } = this.props;
    return (
      <div>
        <input key={educationData.id} placeholder="School Name" value={educationData.companyName}></input>
        <input key={educationData.id} placeholder="School Location" value={educationData.positionTitle}></input>
        <input key={educationData.id} placeholder="Degree Type" value={educationData.jobDescription}></input>
        <input key={educationData.id} placeholder="Dates Attended" value={educationData.datesWorked}></input>
      </div>
    )
  }
}

export default Education
