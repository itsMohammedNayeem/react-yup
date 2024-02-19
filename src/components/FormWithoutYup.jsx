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

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    // return /^\S+@\S+\.\S+$/.test(email);
  };

  const isValidPassword = (password) => {
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    return (
      password.length >= 8 &&
      symbolRegex.test(password) &&
      numberRegex.test(password) &&
      upperCaseRegex.test(password) &&
      lowerCaseRegex.test(password)
    );
    // return /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
    //   password
    // );
  };

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
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    } else if (formData.phoneNumber.length !== 10) {
      errors.phoneNumber = "Phone Number should be 10 digits";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (!isValidPassword(formData.password)) {
      errors.password =
        "Password should contain at least 8 characters, 1 number, 1 symbol, 1 uppercase and 1 lowercase letter";
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (!isValidPassword(formData.password)) {
      errors.password =
        "Password should contain at least 8 characters, 1 number, 1 symbol, 1 uppercase and 1 lowercase letter";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!formData.age) {
      errors.age = "Age is required";
    } else if (formData.age <= 18 || formData.age >= 100) {
      errors.age =
        "You must be at least 18 years old and not older than 100 years";
    }

    if (!formData.gender) {
      errors.gender = "Gender is required";
    }

    if (formData.interests.length === 0) {
      errors.interests = "At least one interest is required";
    }

    if (!formData.birthDate) {
      errors.birthDate = "Birth Date is required";
    }

    setError(errors);

    return Object.keys(errors).length === 0;
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
          {error.firstName && (
            <div className="mt-2 text-xs text-red-500">{error.firstName}</div>
          )}
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
          {error.lastName && (
            <div className="mt-2 text-xs text-red-500">{error.lastName}</div>
          )}
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
          {error.email && (
            <div className="mt-2 text-xs text-red-500">{error.email}</div>
          )}
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
          {error.phoneNumber && (
            <div className="mt-2 text-xs text-red-500">{error.phoneNumber}</div>
          )}
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
          {error.password && (
            <div className="mt-2 text-xs text-red-500">{error.password}</div>
          )}
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
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
          {error.confirmPassword && (
            <div className="mt-2 text-xs text-red-500">
              {error.confirmPassword}
            </div>
          )}
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
          {error.age && (
            <div className="mt-2 text-xs text-red-500">{error.age}</div>
          )}
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
          {error.gender && (
            <div className="mt-2 text-xs text-red-500">{error.gender}</div>
          )}
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
          {error.interests && (
            <div className="mt-2 text-xs text-red-500">{error.interests}</div>
          )}
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
          {error.birthDate && (
            <div className="mt-2 text-xs text-red-500">{error.birthDate}</div>
          )}
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
