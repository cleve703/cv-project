import React from "react";

class General extends React.Component {
  render() {
    const { generalData, handleChangeGeneral } = this.props;
    return (
    <div>
      <fieldset>
        <input
          onChange={ e => handleChangeGeneral(e)}
          name="firstName"
          type="text"
          value={generalData.firstName}
          placeholder="First Name"
        />
        <input
          onChange={ e => handleChangeGeneral(e)}
          name="lastName"
          type="text"
          value={generalData.lastName}
          placeholder="Last Name"
        />
        <input
          onChange={ e => handleChangeGeneral(e)}
          name="streetAddress"
          type="text"
          value={generalData.streetAddress}
          placeholder="Street Address"
        />
        <input
          onChange={ e => handleChangeGeneral(e)}
          name="cityStateZip"
          type="text"
          value={generalData.cityStateZip}
          placeholder="City, State, Zip"
        />
        <input
          onChange={ e => handleChangeGeneral(e)}
          name="phoneNumber"
          type="text"
          value={generalData.phoneNumber}
          placeholder="Phone"
        />
        <input
          onChange={ e => handleChangeGeneral(e)}
          name="emailAddress"
          type="text"
          value={generalData.emailAddress}
          placeholder="Email"
        />
        <input
          onChange={ e => handleChangeGeneral(e)}
          name="linkedIn"
          type="text"
          value={generalData.linkedIn}
          placeholder="LinkedIn"
        />
      </fieldset>
    </div>
    )
  }
}

export default General
