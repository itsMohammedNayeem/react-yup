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

  const [error, setError] = useState();

  const validateForm = () => {
    let errors = {};

    if (!formData.firstName) {
      errors.firstName = "First Name is required";
    }

    if (!formData.lastName) {
      errors.lastName = "Last Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!formData.age) {
      errors.age = "Age is required";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      console.log("Form submitted", formData);
    } else {
      console.log("Form is not valid");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log("Form submitted");
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let newInterests = [...formData.interests];
    if (checked) {
      newInterests.push(name);
    } else {
      newInterests = newInterests.filter((interest) => interest !== name);
    }

    setFormData({ ...formData, interests: newInterests });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-center text-gray-900">
        Form Without Yup
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg space-y-6 bg-white p-8 border border-gray-300 rounded-lg shadow-sm"
      >
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name :
          </label>
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            name="firstName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name :
          </label>
          <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            name="lastName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email :
          </label>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number :
          </label>
          <input
            type="number"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            name="phoneNumber"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password :
          </label>
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            name="password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password :
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            Age :
          </label>
          <input
            type="number"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            name="age"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700"
          >
            Gender :
          </label>
          <select
            value={formData.gender}
            name="gender"
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <fieldset className="space-y-5">
          <legend className="text-sm font-medium text-gray-700">
            Interests :
          </legend>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                name="coding"
                checked={formData.interests.includes("coding")}
                onChange={handleCheckboxChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="coding" className="font-medium text-gray-700">
                Coding
              </label>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                name="sports"
                checked={formData.interests.includes("sports")}
                onChange={handleCheckboxChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="sports" className="font-medium text-gray-700">
                Sports
              </label>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                name="reading"
                checked={formData.interests.includes("reading")}
                onChange={handleCheckboxChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="reading" className="font-medium text-gray-700">
                Reading
              </label>
            </div>
          </div>
        </fieldset>

        <div>
          <label
            htmlFor="birthDate"
            className="block text-sm font-medium text-gray-700"
          >
            Birth Date :
          </label>
          <input
            type="date"
            value={formData.birthDate}
            onChange={handleChange}
            name="birthDate"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormWithoutYup;
