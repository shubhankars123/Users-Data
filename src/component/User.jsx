import React from "react";
import Education from './Education'
import General from "./General";
import Personal from "./Personal";
import Technical from "./Technical";

function User (props){
    const { firstName, lastName, email, age, phone,image, username, university, macAddress, ein, domain, ip, ssn } = props

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-3 mt-2 mb-2">
                    <Personal image={image} />
                </div>
                <div className="col-md-4 mb-2">
                    <General fName={firstName} lName={lastName} email={email} phone={phone} age={age} user={username} />
                </div>
                <div className="col-md-4 mb-2 mt-2">
                    <Education university={university} />
                    <Technical mac={macAddress} ein={ein} url={domain} ip={ip} ssn={ssn} />
                </div>
            </div>
        </div>
    )
}

export default User