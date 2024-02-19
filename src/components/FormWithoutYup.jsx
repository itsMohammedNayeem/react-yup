import { useState } from "react";

const FormWithoutYup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    interests: [],
    birthDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="item-center text-center justify-center">
      <h1>Form Without Yup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name : </label>
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            name="firstName"
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name : </label>
          <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            name="lastName"
          />
        </div>

        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            name="email"
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number : </label>
          <input
            type="number"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            name="phoneNumber"
          />
        </div>

        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            name="password"
          />
        </div>

        <div>
          <label htmlFor="password">Confirm Password : </label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            name="confirmPassword"
          />
        </div>

        <div>
          <label htmlFor="age">Age : </label>
          <input
            type="number"
            placeholder="Age"
            value={formData.age}
            name="age"
          />
        </div>

        <div>
          <label htmlFor="gender">Gender : </label>
          <select value={formData.gender} name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="interests">Interests : </label>
          <label>
            <input
              type="checkbox"
              name="coding"
              checked={formData.interests.includes("coding")}
            />
            Coding
          </label>
          <label>
            <input
              type="checkbox"
              name="sports"
              checked={formData.interests.includes("sports")}
            />
            Sports
          </label>
          <label>
            <input
              type="checkbox"
              name="reading"
              checked={formData.interests.includes("reading")}
            />
            Reading
          </label>
        </div>

        <div>
          <label htmlFor="birthDate">Birth Date : </label>
          <input
            type="date"
            value={formData.birthDate}
            name="birthDate"
            placeholder="Enter your date of birth"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormWithoutYup;
