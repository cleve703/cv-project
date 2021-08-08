import React from "react";

class Education extends React.Component {
  render() {
    const { educationData, handleChangeEducation } = this.props;
    return (
      <fieldset>
        <div>
          <input
            onChange={ e => handleChangeEducation(e)}
            name="schoolName"
            placeholder="School Name"
            value={educationData.schoolName}
          />
          <input
            onChange={ e => handleChangeEducation(e)}
            name="schoolLocation"
            placeholder="School Location"
            value={educationData.schoolLocation}
          />
          <input
            onChange={ e => handleChangeEducation(e)}
            name="degreeType"
            placeholder="Degree Type"
            value={educationData.degreeType}
          />
          <input
            onChange={ e => handleChangeEducation(e)}
            name="datesAttended"
            placeholder="Dates Attended"
            value={educationData.datesAttended}
          />
        </div>
      </fieldset>
    )
  }
}

export default Education
