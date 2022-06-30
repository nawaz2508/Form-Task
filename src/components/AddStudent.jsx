import { useEffect, useState } from "react";
import axios from 'axios';
import { ShowStudents } from './ShowStudents';

export const AddStudent = () => {

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "" ,
        gender: "",
        age: "",
        tenth_score: "",
        twelth_score: "",
        preferred_branch: ""
    });

    const [data, setData] = useState([]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id] : value,
        });
        console.log(e.target);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data, formData]);

        axios.post('http://localhost:8080/students', formData).then(() => {
            alert("Data Submitted");
        });
    };

    useEffect(() => {
        getData();
    },[]);

    const getData = () => {
        axios.get('http://localhost:8080/students').then((res) => {
            setData(res.data);
            // console.log(res.data);
        });
    };

    

    return (
      <div>
        <form className="addstudent" onSubmit={handleSubmit}>
        <div>
          Firstname:{" "}
          <input
            value={formData.first_name}
            onChange={handleChange}
            id="first_name"
            type="text"
            name="first_name"
            className="first_name"
            placeholder="enter first name"
          />
        </div>
        <div>
          {" "}
          Last Name:
          <input
            value={formData.last_name}
            onChange={handleChange}
            id="last_name"
            type="text"
            name="last_name"
            className="last_name"
            placeholder="enter last name"
          />
        </div>
        <div>
          {" "}
          Email:
          <input
            value={formData.email}
            onChange={handleChange}
            id="email"
            type="email"
            name="email"
            className="email"
            placeholder="enter email"
          />
        </div>
  
        <div>
          Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
          <div>
            Male
            <input
              onChange={handleChange}
              id="gender"
              name="gender"
              className="male"
              type="radio"
              value="male"
              checked={formData.gender === "male"}
            />{" "}
            Female{" "}
            <input
              onChange={handleChange}
              id="gender"
              name="gender"
              className="female"
              type="radio"
              value="female"
              checked={formData.gender === "female"}
            />
          </div>
        </div>
        <div>
          Age{" "}
          <input
            value={formData.age}
            onChange={handleChange}
            id="age"
            type="number"
            name="age"
            className="age"
            placeholder="enter age"
          />
        </div>
        <div>
          Tenth Score:{" "}
          <input
            value={formData.tenth_score}
            onChange={handleChange}
            id="tenth_score"
            type="number"
            name="tenth_score"
            className="tenth_score"
            placeholder="enter 10th score"
          />{" "}
        </div>
        <div>
          Twelth Score:{" "}
          <input
            value={formData.twelth_score}
            onChange={handleChange}
            id="twelth_score"
            type="number"
            name="twelth_score"
            className="twelth_score"
            placeholder="enter 12th score"
          />{" "}
        </div>
        <div>
          <select
            onChange={handleChange}
            id="preferred_branch"
            value={formData.preferred_branch} // select dropdown needs both value and onChange attributes
            name="preferred_branch"
            className="preferred_branch"
          >
            <option value="law" id="law">law</option>
            <option value="commerce" id="commerce">commerce</option>
            <option value="science" id="science">science</option>
            <option value="sports" id="sports">sports</option>
            <option value="arts" id="arts">arts</option>
            <option value="acting" id="acting">acting</option>
          </select>
        </div>
  
        <input  className="submit" type="submit" value="Submit" />
        {
          // <div className="error"></div>
          // show this div with proper error before submitting form, if there's anything not provided
          // eg: first name missing, age cannot be greater than 100 etc
        }
      </form>
      
    </div>
    );  
  };