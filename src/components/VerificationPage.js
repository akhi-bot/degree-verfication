import React, { Component, useState } from "react";
import { init, verifyDetails } from "./web3Client";

function VerifyDegree() {
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [userValid, setUserValid] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await init();
    setShowResponse(true);
    const data = await verifyDetails(Number(enrollmentNumber)); //tokenId=3 is to be taken from user to verify
    console.log(data);
    // setUserValid(depend on data response true either false)
    e.preventDefault();
  };
  return (
    <div className="verifyDegreeContainer">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <h2>Verify Degree</h2>
        </div>
        <div>
          <label htmlFor="text">Token Id</label>
          <input
            type="number"
            id="username"
            placeholder="Enter Unique Token Id"
            required
            onChange={(e) => setEnrollmentNumber(e.target.value)}
          />
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Verify Degree
          </button>
        </div>
      </form>
      {/* <button onClick={handleSubmit}> Verify Degree</button> */}
      {showResponse && (
        <p className="response">user is {userValid ? "valid" : "not valid"}</p>
      )}
    </div>
  );
}

export default VerifyDegree;
