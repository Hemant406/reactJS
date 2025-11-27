import React from "react";

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-semibold text-xl text-white">
        Hello <br /> <span className="text-3xl">{props.data.firstName} 🖐</span>
      </h1>
      <button onClick={logOutUser} className="bg-red-500 text-white font-semibold rounded-3xl px-5 py-2 cursor-pointer active:scale-95">
        Log Out
      </button>
    </div>
  );
};

export default Header;
