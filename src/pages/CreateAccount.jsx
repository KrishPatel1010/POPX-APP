import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../userContext.jsx";
import "./CreateAccount.css";

function PopXAccountForm() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });
  const navigate = useNavigate();
  const { setName, setEmail } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    setForm((prev) => ({
      ...prev,
      isAgency: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(form.fullName);
    setEmail(form.email);
    navigate("/profile");
  };

  return (
    <div className="popx-form-container">
      <h2 className="popx-title">Create your<br />PopX account</h2>
      <form onSubmit={handleSubmit}>
        <div className="popx-field">
          <label>Full Name<span className="popx-required">*</span></label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
            placeholder="Marry Doe"
            className="popx-input"
          />
        </div>
        <div className="popx-field">
          <label>Phone number<span className="popx-required">*</span></label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="Marry Doe"
            className="popx-input"
          />
        </div>
        <div className="popx-field">
          <label>Email address<span className="popx-required">*</span></label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Marry Doe"
            className="popx-input"
          />
        </div>
        <div className="popx-field">
          <label>Password<span className="popx-required">*</span></label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            placeholder="Marry Doe"
            className="popx-input"
          />
        </div>
        <div className="popx-field">
          <label>Company name</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Marry Doe"
            className="popx-input"
          />
        </div>
        <div className="popx-field">
          <label style={{ color: "black" }}>Are you an Agency?<span className="popx-required">*</span></label>
          <div className="popx-radio-group">
            <label style={{ color: "black" }} className="popx-radio-label">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={form.isAgency === "yes"}
                onChange={handleRadioChange}
                required
                className="popx-radio"
              />
              Yes
            </label>
            <label style={{ color: "black" }} className="popx-radio-label">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={form.isAgency === "no"}
                onChange={handleRadioChange}
                required
                className="popx-radio"
              />
              No
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="popx-submit-btn"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

function CreateAccount() {
  return (
    <div className="popx-outer-wrapper">
      <div className="popx-inner-wrapper">
        <PopXAccountForm />
      </div>
    </div>
  );
}

export default CreateAccount;
