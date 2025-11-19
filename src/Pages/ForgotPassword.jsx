import React from "react";
import { showSuccess } from "../components/Alert";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleSubmitBtn = async (e) => {
    e.preventDefault();
    await showSuccess("Form Submitted Successfully");
    navigate("/auth/login");
    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmitBtn} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input required type="email" className="input" placeholder="Email" />
          <div className="pl-25">
            <a href="www.gmail.com" target="_blank">
              <button type="submit" className="btn btn-primary w-fit">
                reset
              </button>
            </a>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ForgotPassword;
