import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Active = () => {
  const [Data, setData] = useState([]);
  const [id,setId]=useState(0)
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();
  //Submit//
  const onSubmit = (data) => {
    var allData = Data;

    allData.push({id:id,name:data.name,email:data.email,status:data.status});
    setData(allData);
    setValue("name", "");
    setValue("email", "");
    setValue("status", "");
    setId(id+1)
  };
  const handleChange = (id) => {
    debugger
    let object = Data;
    object.forEach((item) => {
      if (item.id === id) {
        item.status = item.status === "active" ? "inactive" : "active";
      }
    });
    setData({ ...Data, object });
  };

  console.log("DAta", Data);

  return (
    <div className="Example">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter User Name"
            {...register("name", { required: true })}
          />
          <p className="error"> {errors.name && <p>This is required.</p>}</p>
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Enter User Email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              },
            })}
          />
          <p className="error">
            {errors.email?.type === "required" && "Email Address is required"}
          </p>
          <p className="error">
            {errors.email?.type === "pattern" && "must add Valid email"}
          </p>
        </div>
        <select name="status" {...register("status")}>
          <option>select</option>
          <option value="active">Active</option>
          <option value="inactive">InActive</option>
        </select>
        <input type="submit" />
      </form>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Data.filter((el) => {
            return el.status === "active";
          }).map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.status}</td>
                <td>
                  <button onClick={() => handleChange(item.id)}>Active</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Inactive */}
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Data.filter((el) => {
            return el.status === "inactive";
          }).map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.status}</td>
                <td>
                  <button onClick={() => handleChange(item.id)}>InActive</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Active;
