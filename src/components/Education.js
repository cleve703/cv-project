import React from "react";

class Education extends React.Component {
  render() {
    const { schoolData, handleChangeEducation, addSchool, schools } = this.props;
    return (
      <div>
        <ul class="naked-list">
          {schools.map((school) => {
            return  ( <li key={school.id}>
                        <ul class="naked-list">
                          <li>{school.schoolName}</li>
                          <li>{school.schoolLocation}</li>
                          <li>{school.degreeType}</li>
                          <li>{school.datesAttended}</li>
                        </ul>
                      </li>
                    )
          })}
        </ul>
        <fieldset>
          <input
            onChange={ e => handleChangeEducation(e)}
            name="schoolName"
            placeholder="School Name"
            value={schoolData.schoolName}
          />
          <input
            onChange={ e => handleChangeEducation(e)}
            name="schoolLocation"
            placeholder="School Location"
            value={schoolData.schoolLocation}
          />
          <input
            onChange={ e => handleChangeEducation(e)}
            name="degreeType"
            placeholder="Degree Type"
            value={schoolData.degreeType}
          />
          <input
            onChange={ e => handleChangeEducation(e)}
            name="datesAttended"
            placeholder="Dates Attended"
            value={schoolData.datesAttended}
          />
          <button type="button" onClick={addSchool}>Add a school</button>
        </fieldset>
      </div>
    )
  }
}

export default Education
