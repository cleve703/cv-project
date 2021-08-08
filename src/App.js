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
        firstName: '',
        lastName: '',
        streetAddress: '',
        cityStateZip: '',
        phoneNumber: '',
        emailAddress: '',
        linkedIn: '',
        id: uniqid(),
      },
      educationData: {
        schoolName: '',
        schoolLocation: '',
        degreeType: '',
        datesAttended: '',
        id: uniqid(),
      },
      schools: [],
      practicalData: {
        companyName: '',
        positionTitle: '',
        jobDescription: '',
        datesWorked: '',
        id: uniqid(),
      },
      companies: [],
    }
  }
  
  handleChangeGeneral = (e) => {
    this.setState((prevState) => {
      return {
        generalData: {
          firstName: prevState.generalData.firstName,
          lastName: prevState.generalData.lastName,
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
        educationData: {
          schoolName: prevState.educationData.schoolName,
          schoolLocation: prevState.educationData.schoolLocation,
          degreeType: prevState.educationData.degreeType,
          datesAttended: prevState.educationData.datesAttended,
          [e.target.name]: e.target.value,
          id: prevState.educationData.id,
        }
      }
    });
  };

  handleChangePractical = (e) => {
    this.setState((prevState) => {
      return {
        practicalData: {
          companyName: prevState.practicalData.companyName,
          positionTitle: prevState.practicalData.positionTitle,
          jobDescription: prevState.practicalData.jobDescription,
          datesWorked: prevState.practicalData.datesWorked,
          [e.target.name]: e.target.value,
          id: prevState.practicalData.id,
        }
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    const { generalData, educationData, practicalData } = this.state;
    return (
      <div className="cv-main">
        <form onSubmit={this.handleSubmit}>
          <General 
            generalData={generalData}
            handleChangeGeneral={this.handleChangeGeneral} 
          />
          <Education 
            educationData={educationData} 
            handleChangeEducation={this.handleChangeEducation}
          />
          <Practical 
            practicalData={practicalData} 
            handleChangePractical={this.handleChangePractical}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default App;
