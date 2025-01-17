import React, { useState } from "react";
import Header from "../../components/headers/Header";
import Input from "../../components/formElements/Input";
import Button from "../../components/buttons/Button";
import {
  minOfLength,
  RedirectTo,
  validateEmail,
} from "../../components/utilities/PageUtils";
import { UserData } from "../../components/utilities/models/UserData";
import { RegisterStraver } from "../../components/utilities/services/AuthenticationHandler";
import { ApplicationConstants } from "../../contants/ApplicationConstants";

function SignUpStraverPage() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");

  function showPasswordCallback() {
    setShowPassword(!showPassword);
  }

  async function SignUpSubmit() {
    var userData = new UserData({
      lastName: lastname,
      firstName: firstname,
      email,
      password,
      contactNumber: contactNumber,
      address,
    });

    if (!validateEmail(email)) {
      alert("Invalid Email Format");
      return;
    }

    if (!minOfLength(password, 5)) {
      alert("Password Must be minimum of 5 characters");
      return;
    }

    if (!minOfLength(lastname, 2)) {
      alert("Lastname Must be minimum of 2 characters");
      return;
    }

    if (!minOfLength(firstname, 2)) {
      alert("Password Must be minimum of 2 characters");
      return;
    }

    if (!minOfLength(contactNumber, 8)) {
      alert("Contact Number Must be minimum of 8 characters");
      return;
    }

    if (!minOfLength(address, 10)) {
      alert("Address Must be minimum of 10 characters");
      return;
    }

    var result = await RegisterStraver(userData);
    alert(result);
    RedirectTo(ApplicationConstants.ROUTE_LOGIN);
  }

  return (
    <div>
      <Header />
      <div className="absolute left-[50%] translate-x-[-50%]">
        <div className="w-[330px]">
          <div className="m-auto">
            <div className="my-2 justify-center text-center">
              <h1 className="text-[40px] font-bold">
                <span className="primary-1">Sign </span>
                <span className="brand-orange">Up</span>
              </h1>
            </div>

            <p className="text-[10px] mt-8">
              Please input your information correctly
            </p>

            <form>
              <div className="my-3">
                <Input
                  containerClassname={"w-[340px]"}
                  type="text"
                  placeholder={"Last Name"}
                  name="lastname"
                  value={lastname}
                  set={setLastname}
                />
              </div>
              <div className="my-3">
                <Input
                  containerClassname={"w-[340px]"}
                  type="text"
                  placeholder={"First Name"}
                  name="firstname"
                  value={firstname}
                  set={setFirstname}
                />
              </div>
              <div className="my-3">
                <Input
                  containerClassname={"w-[340px]"}
                  type="email"
                  placeholder={"Email"}
                  name="email"
                  value={email}
                  set={setEmail}
                  autoComplete={"username"}
                />
              </div>
              <div className="my-3">
                <Input
                  containerClassname={"w-[340px]"}
                  type={showPassword ? "text" : "password"}
                  placeholder={"Password"}
                  name="password"
                  iconClicked={showPasswordCallback}
                  set={setPassword}
                  value={password}
                  icon={"fa-solid fa-eye"}
                  autoComplete={"current-password"}
                />
              </div>
              <div className="my-3">
                <Input
                  containerClassname={"w-[340px]"}
                  type="number"
                  placeholder={"Contact Number"}
                  name="contactnum"
                  value={contactNumber}
                  set={setContactNumber}
                />
              </div>
              <div className="my-3">
                <Input
                  containerClassname={"w-[340px]"}
                  type="text"
                  placeholder={"Address"}
                  name="address"
                  value={address}
                  set={setAddress}
                />
              </div>
            </form>

            <div className="text-center mt-8">
              <Button className={"w-[150px] my-2"} onClick={SignUpSubmit}>
                Sign Up
              </Button>
              <p className="primary-1">
                Already have an account?{" "}
                <a
                  className="brand-orange cursor-pointer"
                  onClick={() => RedirectTo("login")}
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpStraverPage;
