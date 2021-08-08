import React from "react";

class Practical extends React.Component {
  render() {
    const { practicalData, handleChangePractical } = this.props;
    return (
      <div>
        <fieldset>
          <input 
            onChange={ e => handleChangePractical(e)}
            name="companyName"
            type="text"
            placeholder="Company Name" 
            value={practicalData.companyName} 
          />
          <input 
            onChange={ e => handleChangePractical(e)}
            name="positionTitle"
            type="text"
            placeholder="Position Title" 
            value={practicalData.positionTitle} 
          />
          <input
            onChange={ e => handleChangePractical(e)}
            name="jobDescription"
            type="text"
            placeholder="Job Description" 
            value={practicalData.jobDescription} 
          />
          <input 
            onChange={ e => handleChangePractical(e)}
            name="datesWorked"
            type="text"
            placeholder="Dates Worked" 
            value={practicalData.datesWorked} 
          />
          </fieldset>
      </div>
    )
  }
}

export default Practical
