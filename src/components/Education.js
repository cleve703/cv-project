import React from "react";

class Education extends React.Component {
  render() {
    const { educationData } = this.props;
    return (
      <ul>
        <li key={educationData.id}>{educationData.companyName}</li>
        <li key={educationData.id}>{educationData.positionTitle}</li>
        <li key={educationData.id}>{educationData.jobDescription}</li>
        <li key={educationData.id}>{educationData.datesWorked}</li>
      </ul>
    )
  }
}

export default Education
