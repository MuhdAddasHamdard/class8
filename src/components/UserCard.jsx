import React from "react";

const UserCard = (props) => {
  const { name, age, bio } = props;
  return (
    <div className="">
      <div className="bg-amber-300 p-6 max-w-sm rounded-lg shadow-md overflow-hidden">
        <h3 className="text-xl font-bold text-gray-800">Name: {name}</h3>
        <p className="text-gray-600 mt-2">Age: {age}</p>
        <p className="mt-2 text-gray-700">Bio: {bio}</p>
      </div>
    </div>
  );
};

export default UserCard;
