const Employee = (props) => {
  return (
    <div
      style={{ padding: "20px 30px", backgroundColor: "black", color: "white" }}
    >
      <h1>Name: {props.data.name}</h1>
      <p>ID# {props.data.id}</p>
      <p>Department: {props.data.department}</p>
      <p> Role: {props.data.role} </p>
      <p>Start date: {props.data.startDate}</p>
      <img src={props.data.photo} alt="Identification"></img>
      <br></br>
      <br></br>
      <button onClick={props.resetState}>Back to List</button>
    </div>
  );
  //output all the data about the employee.
};

export default Employee;
