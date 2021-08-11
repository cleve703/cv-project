import React from "react";

class Practical extends React.Component {
  render() {
    const { jobData, handleChangePractical, addJob, jobs, deleteJob } = this.props;
    return (
      <div>
          {jobs.map((job) => {
            return  ( <fieldset key={job.id}>
                        <input value={job.companyName} disabled />
                        <input value={job.positionTitle} disabled />
                        <input value={job.jobDescription} disabled />
                        <input value={job.datesWorked} disabled />
                        <button type="button" onClick={ () => deleteJob(job.id)}>Delete</button>
                      </fieldset>
                    )
          })}
      
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
