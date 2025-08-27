import React from 'react'

const UserCard = ({user}) => {
    console.log(user);
    const {firstName, LastName, photoUrl, age, gender, about} = user
  return (
    <div className="card bg-base-300 w-96 shadow-lg">
      <figure>
        <img
          src={photoUrl}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + LastName }</h2>
        {
            age && gender && <p>{age + "," + gender}</p>
        }
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
          <button 
            className="btn btn-secondary"
          >Ignore</button>
          <button
            className="btn btn-accent"
            >Intrested</button>
        </div>
      </div>
    </div>
  );
}

export default UserCard