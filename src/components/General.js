import React from "react";

class General extends React.Component {
  render() {
    const { generalData } = this.props;
    return (
      <ul>
        <li key={generalData.id}>{generalData.firstName}</li>
        <li key={generalData.id}>{generalData.lastName}</li>
        <li key={generalData.id}>{generalData.streetAddress}</li>
        <li key={generalData.id}>{generalData.cityStateZip}</li>
        <li key={generalData.id}>{generalData.phoneNumber}</li>
        <li key={generalData.id}>{generalData.emailAddress}</li>
        <li key={generalData.id}>{generalData.linkedIn}</li>
      </ul>
    )
  }
}

export default General
