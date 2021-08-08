import React from "react";

class General extends React.Component {
  render() {
    const { generalData } = this.props;
    return (
    <div>
      <input type="text" key={generalData.id} value={generalData.firstName} placeholder="First Name"></input>
      <input type="text" key={generalData.id} value={generalData.lastName} placeholder="Last Name"></input>
      <input type="text" key={generalData.id} value={generalData.streetAddress} placeholder="Street Address"></input>
      <input type="text" key={generalData.id} value={generalData.cityStateZip} placeholder="City, State, Zip"></input>
      <input type="text" key={generalData.id} value={generalData.phoneNumber} placeholder="Phone"></input>
      <input type="text" key={generalData.id} value={generalData.emailAddress} placeholder="Email"></input>
      <input type="text" key={generalData.id} value={generalData.linkedIn} placeholder="LinkedIn"></input>
    </div>
    )
  }
}

export default General
