import React from "react";
import Header from "../../others/Header";
import CreateTask from "../../others/CreateTask";
import AllTask from "../../others/AllTask";

const AdminDashboard = (props) => {
  
  return (
    <div className="min-h-screen  p-5">
      <Header changeUser={props.changeUser} data={props.data} />
      <CreateTask  />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
