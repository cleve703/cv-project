import React, { Component } from "react";
import uniqid from "uniqid";
import General from "./components/General";
import Education from "./components/Education";
import Practical from "./components/Practical";
import './styles/main.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      generalData: {
        fullName: '',
        streetAddress: '',
        cityStateZip: '',
        phoneNumber: '',
        emailAddress: '',
        linkedIn: '',
        id: uniqid(),
      },
      schoolData: {
        schoolName: '',
        schoolLocation: '',
        degreeType: '',
        datesAttended: '',
        id: uniqid(),
      },
      schools: [],
      jobData: {
        companyName: '',
        positionTitle: '',
        jobDescription: '',
        datesWorked: '',
        id: uniqid(),
      },
      jobs: [],
      draft: true,
    }
  }
  
  handleChangeGeneral = (e) => {
    this.setState((prevState) => {
      return {
        generalData: {
          fullName: prevState.generalData.fullName,
          streetAddress: prevState.generalData.streetAddress,
          cityStateZip: prevState.generalData.cityStateZip,
          phoneNumber: prevState.generalData.phoneNumber,
          emailAddress: prevState.generalData.emailAddress,
          linkedIn: prevState.generalData.linkedIn,
          [e.target.name]: e.target.value,
          id: prevState.generalData.id,
        }
      }
    });
  };

  handleChangeEducation = (e) => {
    this.setState((prevState) => {
      return {
        schoolData: {
          schoolName: prevState.schoolData.schoolName,
          schoolLocation: prevState.schoolData.schoolLocation,
          degreeType: prevState.schoolData.degreeType,
          datesAttended: prevState.schoolData.datesAttended,
          [e.target.name]: e.target.value,
          id: prevState.schoolData.id,
        }
      }
    });
  };

  handleChangePractical = (e) => {
    this.setState((prevState) => {
      return {
        jobData: {
          companyName: prevState.jobData.companyName,
          positionTitle: prevState.jobData.positionTitle,
          jobDescription: prevState.jobData.jobDescription,
          datesWorked: prevState.jobData.datesWorked,
          [e.target.name]: e.target.value,
          id: prevState.jobData.id,
        }
      }
    });
  };


  addSchool = (e) => {
    e.preventDefault();
    if (this.state.schoolData.schoolName !== '') {
      this.setState({
        schools: this.state.schools.concat(this.state.schoolData),
        schoolData: {
          schoolName: '',
          schoolLocation: '',
          degreeType: '',
          datesAttended: '',
          id: uniqid(),
        }
      });
    }
  };

  addJob = (e) => {
    e.preventDefault();
    if (this.state.jobData.companyName !== '') {
      this.setState({
        jobs: this.state.jobs.concat(this.state.jobData),
        jobData: {
          companyName: '',
          positionTitle: '',
          jobDescription: '',
          datesWorked: '',
          id: uniqid(),
        }
      });
    }
  }

  deleteSchool = (schoolId) => {
    this.setState({
      schools: this.state.schools.filter(school => school.id !== schoolId)
    })
  }
  
  deleteJob = (jobId) => {
    this.setState({
      jobs: this.state.jobs.filter(job => job.id !== jobId)
    })
  }
  
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.addJob(e);
    this.addSchool(e);
    this.setState({
      draft: !this.state.draft,
    })
  }

  render() {
    const { generalData, schoolData, jobData, jobs, schools, draft } = this.state;
    return (
      <div className="cv-main">
        <form onSubmit={this.handleSubmit}>
          <General 
            generalData={generalData}
            handleChangeGeneral={this.handleChangeGeneral} 
          />
          <Education 
            schoolData={schoolData}
            schools={schools} 
            handleChangeEducation={this.handleChangeEducation}
            addSchool={this.addSchool}
            deleteSchool={this.deleteSchool}
            draft={draft}
          />
          <Practical 
            jobData={jobData} 
            jobs={jobs}
            handleChangePractical={this.handleChangePractical}
            addJob={this.addJob}
            deleteJob={this.deleteJob}
            draft={draft}
          />
          <button type="submit" className={this.state.draft === true ? "" : "editable-off" }>Finalize</button>
          <button type="button" onClick={this.handleSubmit} className={this.state.draft === false ? "" : "editable-off" }>Edit</button>
        </form>
      </div>
    )
  }
}

export default App;
