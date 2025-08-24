import React from "react";

const Signup = () => {
  return (
    <div className="flex justify-center my-50">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">SignUp</h2>
          <div className="my-3">
            <div className="flex space-x-4">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Firstname</legend>
                <input
                  type="text"
                  // value={emailId}
                  className="input"
                  placeholder="Type here"
                  // onChange={(e) => setEmailId(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Lastname</legend>
                <input
                  type="text"
                  // value={password}
                  className="input"
                  placeholder="Type here"
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </fieldset>
            </div>
            <div className="flex space-x-4">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Email ID</legend>
                <input
                  type="text"
                  // value={emailId}
                  className="input"
                  placeholder="Type here"
                  // onChange={(e) => setEmailId(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Password</legend>
                <input
                  type="text"
                  // value={password}
                  className="input"
                  placeholder="Type here"
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </fieldset>
            </div>
            <div className="flex space-x-4">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Age</legend>
                <input
                  type="number"
                  // value={emailId}
                  className="input"
                  placeholder="Type here"
                  // onChange={(e) => setEmailId(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Gender</legend>
                <select defaultValue="Pick a browser" className="select">
                  <option disabled={true}>Pick a gender</option>
                  <option>Chrome</option>
                  <option>FireFox</option>
                  <option>Safari</option>
                </select>
              </fieldset>
            </div>
            <legend className="fieldset-legend mt-2">Upload Image</legend>
            <input type="file" className="file-input file-input-neutral" />
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">SignUp</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
