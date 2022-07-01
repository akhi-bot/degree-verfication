import React, { useState } from "react";
import { init, addDegree } from "./web3Client";
import { Upload, Button, Spin } from "antd";
import "antd/dist/antd.css";

// demo url
// "https://bafkreidizckp3bbotn7g4d7w6fbnrumleaobofwomwdqcraevtt5ef3hoy.ipfs.nftstorage.link/"
function AddDegree() {
  const [url, setUrl] = useState("");
  // const [surname, setSurname] = useState("");
  // const [enrollmentNumber, setEnrollmentNumber] = useState("");
  // const [fileInput, setFileInput] = useState("");
  const [userValid, setUserValid] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await init();
    console.log(url);

    // console.log(surname);
    // console.log(enrollmentNumber);
    const response = await addDegree(url); // link is to be taken from user who is authenticator and wants to add degreer to blockchain
    console.log(response);
    // setShowResponse(true); // set it when response is ok otherwise set it false
    // setUserValid(depend on data response true either false)
    e.preventDefault();
  };

  return (
    <div className="addDegreeContainer">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <h2>Add Degree Details</h2>
        </div>
        <div>
          <label htmlFor="name" style={{ fontSize: "2rem" }}>
            url
          </label>
          <input
            type="text"
            id="url"
            placeholder="Enter Your IPFS url"
            required
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        {/* <div>
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            id="surname"
            placeholder="Enter surname"
            required
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="enrollmentNumber">Enrollment Number</label>
          <input
            type="number"
            id="enrollmentNumber"
            placeholder="Enter Enrollment Number"
            required
            onChange={(e) => setEnrollmentNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="degree">Image</label>
          <Upload.Dragger
            listType="picture"
            onUpload={(e) => {
              console.log(e.target.files);
            }}
            showUploadList={{
              showRemoveIcon: true,
            }}
            accept=".json"
            // beforeUpload={(file) => {
            //   console.log({ file });
            //   return true;
            // }}
            defaultFileList={[
              {
                uid: "abc",
                name: "example.json",
                status: "uploading",
                percent: 50,
              },
            ]}
            iconRender={() => {
              return <Spin></Spin>;
            }}
            progress={{
              strokeWidth: 3,
              strokeColor: {
                "0%": "#f0f",
                "100%": "#ff0",
              },
              style: { top: 12 },
            }}
          >
            Drag degree details file here or
            <br />
            <Button>Click Upload</Button>
          </Upload.Dragger>
        </div> */}

        <div>
          <label />
          <button className="primary" type="submit">
            Add Degree
          </button>
        </div>
      </form>
      {showResponse && (
        <p className="response">user is {userValid ? "added" : "not added"}</p>
      )}
      {/* <button onClick={handleSubmit}> Add Degree </button> */}
    </div>
  );
}

export default AddDegree;
