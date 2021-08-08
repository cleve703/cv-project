import React, { Component } from "react";
import uniqid from "uniqid";
import General from "./components/General";
import Education from "./components/Education";
import Practical from "./components/Practical";

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
      practicalData: {
        companyName: '',
        positionTitle: '',
        jobDescription: '',
        datesWorked: '',
        id: uniqid,
      }
    }
  }

  render() {
    const { generalData, educationData, practicalData } = this.state;
    return (
      <div className="cv-main">
        <General generalData={generalData} />
        <Practical practicalData={practicalData} />
        <Education educationData={educationData} />
      </div>
    )
  }
}

export default App;
