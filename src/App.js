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
  };

  addJob = (e) => {
    e.preventDefault();
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
    console.log(this.state)
  }

  render() {
    const { generalData, schoolData, jobData, jobs, schools } = this.state;
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
          />
          <Practical 
            jobData={jobData} 
            jobs={jobs}
            handleChangePractical={this.handleChangePractical}
            addJob={this.addJob}
            deleteJob={this.deleteJob}
          />
          <button type="submit">Finalize</button>
          <button type="button">Edit</button>
        </form>
      </div>
    )
  }
}

export default App;
