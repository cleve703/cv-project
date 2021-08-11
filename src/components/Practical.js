import React from "react";

class Practical extends React.Component {
  render() {
    const { jobData, handleChangePractical, addJob, jobs } = this.props;
    return (
      <div>
        <ul class="naked-list">
          {jobs.map((job) => {
            return  ( <li key={job.id}>
                        <ul class="naked-list">
                          <li>{job.companyName}</li>
                          <li>{job.positionTitle}</li>
                          <li>{job.jobDescription}</li>
                          <li>{job.datesWorked}</li>
                        </ul>
                      </li>
                    )
          })}
        </ul>
      
        <fieldset>
          <input
            onChange={ e => handleChangePractical(e)}
            name="companyName"
            type="text"
            placeholder="Company Name"
            value={jobData.companyName}
          />
          <input
            onChange={ e => handleChangePractical(e)}
            name="positionTitle"
            type="text"
            placeholder="Position Title"
            value={jobData.positionTitle}
          />
          <input
            onChange={ e => handleChangePractical(e)}
            name="jobDescription"
            type="text"
            placeholder="Job Description"
            value={jobData.jobDescription}
          />
          <input
            onChange={ e => handleChangePractical(e)}
            name="datesWorked"
            type="text"
            placeholder="Dates Worked"
            value={jobData.datesWorked}
          />
          <button type="button" onClick={addJob}>Add a job</button>
        </fieldset>
      </div>
    )
  }
}

export default Practical
