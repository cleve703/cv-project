import React from "react";

class Education extends React.Component {
  render() {
    const { schoolData, handleChangeEducation, addSchool, schools, deleteSchool, draft } = this.props;
    let editableClass = ""
    draft ? editableClass = "" : editableClass = "editable-off";
    return (
      <div>
          {schools.map((school) => {
            return  ( <fieldset key={school.id}>
                          <input value={school.schoolName} disabled />
                          <input value={school.schoolLocation} disabled />
                          <input value={school.degreeType} disabled />
                          <input value={school.datesAttended} disabled />
                          <button type="button" className={editableClass} onClick={() => deleteSchool(school.id)}>Delete</button>
                      </fieldset>
                    )
          })}
        <fieldset className={editableClass}>
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
          <button type="button" className={editableClass} onClick={addSchool}>Add another school</button>
        </fieldset>
      </div>
    )
  }
}

export default Education
