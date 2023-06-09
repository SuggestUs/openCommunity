import { ChangeEvent, useContext } from "react";
import { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import CustomizedSnackbars from "../Alert/Alert.jsx";
import { Link, useNavigate } from "react-router-dom";
import { SignInRule, AlertRuel, ResultForAuth } from "../../utils/type.ts";
import { signInValidation } from "../../validation/signInValidation.ts";
import { signInWithAppwrite } from "../Appwrite/auth/signIn.app.ts";
import { MainContext } from "../context/context.tsx";

export default function SignInForUser() {
  const navigate = useNavigate();

  const mainContext = useContext(MainContext);

  const [alert, setAlert] = useState<AlertRuel>({
    display: false,
    severityType: "error",
    message: "",
  });

  const [signinData, setSignInData] = useState<SignInRule>({
    First_Name: "",
    Last_Name: "",
    Username: "",
    Email: "",
    Password: "",
    Confirm_Password: "",
  });
  const [initialLoading, setInitialLoading] = useState(false);

  const handleChangInValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignInData({
      ...signinData,
      [name]: value,
    });
  };

  const handleSignIn = async () => {
    setInitialLoading(true);
    const res: ResultForAuth = signInValidation(signinData);
    console.log("Result", res);
    if (res.isValid) {
      try {
        await signInWithAppwrite(signinData).then((_res) => {
          mainContext?.getSession();
          setInitialLoading(false);
          navigate("/home");
        });
      } catch (error: any) {
        const errorMessage: string = error.toString();
        setAlert({
          display: true,
          severityType: "error",
          message: errorMessage,
        });
      }
    } else {
      console.log("Insdide Else", res.message);
      setAlert({
        display: true,
        severityType: "error",
        message: res.message,
      });
    }
  };

  useEffect(() => {
    // setUserSignInData(objForUserSignInData)
  }, []);

  return (
    <div className="flex flex-col w-full ">
      <div className="alert-box absolute top-0 z-10 left-1 w-1/2">
        {alert.display && (
          <CustomizedSnackbars
            status={alert.severityType}
            message={alert.message}
            setAlert={setAlert}
            setClose={setInitialLoading}
          />
        )}
      </div>
      <div className="text-center">
        <FormControl fullWidth className="my-5">
          <TextField
            className="my-5"
            label="First Name"
            type="text"
            name="First_Name"
            onChange={handleChangInValue}
            style={{
              margin: "10px 0px",
            }}
            // value={}
            value={signinData.First_Name}
          />
          <TextField
            className="my-5"
            label="Last Name"
            type="text"
            name="Last_Name"
            onChange={handleChangInValue}
            style={{
              margin: "10px 0px",
            }}
            // value={objForUserSignInData.Last_Name}
          />
          <TextField
            className="my-5"
            label="Username"
            type="text"
            name="Username"
            onChange={handleChangInValue}
            style={{
              margin: "10px 0px",
            }}
            // value={objForUserSignInData.Last_Name}
          />
          <TextField
            className="my-5"
            label="Email"
            type="email"
            name="Email"
            onChange={handleChangInValue}
            style={{
              margin: "10px 0px",
            }}
            value={signinData.Email}
          />
          <TextField
            className="my-5"
            label="Password"
            type="password"
            name="Password"
            onChange={handleChangInValue}
            style={{
              margin: "10px 0px",
            }}
            value={signinData.Password}
          />
          <TextField
            className="my-5"
            label="Confirm Password"
            name="Confirm_Password"
            type="password"
            style={{
              margin: "10px 0px",
            }}
            onChange={handleChangInValue}
            value={signinData.Confirm_Password}
          />
        </FormControl>
      </div>
      <div className="my-auto space-y-5 flex flex-col ">
        <div
          className="bg-primary p-2 rounded-md border-2 cursor-pointer w-full text-black text-center mt-5"
          onClick={handleSignIn}
        >
          {initialLoading ? "Loading..." : "Sign Up"}
        </div>
        <Link to="/">
          <div className="w-full border-2 text-black p-2 rounded-md ">Back</div>
        </Link>
      </div>
    </div>
  );
}
