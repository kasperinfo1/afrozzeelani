import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./login.css";
import gasImg from "../../images/login/logingas.png";

const Login = () => {
  const navigate = useNavigate();

  const userVerifyHandler = async () => {
    try {
      const response = await axios.post("/user/loginUser", data);
      console.log(response);

      if (response) {
        alert("User logged in successfully");
        navigate("/home");
      }
    } catch (error) {
      alert(error.response.data.message || "An error occurred during login");
    }
  };

  const [data, setData] = useState({
    userEmail: "",
    userPass: ""
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (data.userEmail === "" || data.userPass === "") {
      alert("Please fill all the fields");
      return;
    }
    userVerifyHandler();
  };

  return (
    <div
      className="imsContainer d-flex"
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        maxWidth: "100%",
        minHeight: "100vh",
        padding: "0",
        margin: "0",
        backgroundColor: "#FFFFFF"
      }}
    >
      <div
        className="wrapper"
        style={{
          width: "100%",
          maxWidth: "440px",
          background: "#fff",
          borderRadius: "5px",
          padding: "25px",
          margin: "0 auto"
        }}
      >
        <div
          className="title"
          style={{
            fontSize: "30px",
            fontWeight: "600",
            color: "#151515"
          }}
        >
          <span>Welcome back</span>
        </div>
        <div
          className="signup-link"
          style={{ marginTop: "25px" }}
        >
          Don't have an account?{" "}
          <Link to="/Register">
            <span style={{ color: "#3377DE", textDecoration: "none" }}> Sign Up</span>
          </Link>
        </div>
        <form onSubmit={submitHandler} style={{ marginTop: "15px" }}>
          <div className="row" style={{ height: "45px", marginBottom: "15px" }}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={data.userEmail}
              onChange={(e) =>
                setData((prev) => ({ ...prev, userEmail: e.target.value }))
              }
              style={{
                width: "100%",
                height: "100%",
                paddingLeft: "15px",
                borderRadius: "5px",
                border: "1px solid lightgrey",
                fontSize: "16px",
                outline: "none",
                transition: "border 0.3s ease"
              }}
            />
          </div>
          <div className="row" style={{ height: "45px", marginBottom: "15px" }}>
            <input
              type="password"
              placeholder="Enter your Password"
              required
              value={data.userPass}
              onChange={(e) =>
                setData((prev) => ({ ...prev, userPass: e.target.value }))
              }
              style={{
                width: "100%",
                height: "100%",
                paddingLeft: "15px",
                borderRadius: "5px",
                border: "1px solid lightgrey",
                fontSize: "16px",
                outline: "none",
                transition: "border 0.3s ease"
              }}
            />
          </div>
          <div className="row button">
            <input
              type="submit"
              value="Login"
              style={{
                width: "100%",
                height: "45px",
                background: "#00006B",
                color: "#fff",
                fontSize: "20px",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px"
              }}
            />
          </div>
          <div className="pass">
            <a href="#" style={{ color: "#3377DE", fontSize: "17px", textDecoration: "none" }}>
              Forgot password?
            </a>
          </div>
        </form>
      </div>
      {/* Image Section */}
      <div
        className="image-container"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
          maxWidth: "400px",
          height: "100vh",
          position: "absolute",
          right: "0"
        }}
      >
        <img
          src={gasImg}
          alt="Login Illustration"
          style={{
            maxWidth: "250px",
            height: "600px",
            objectFit: "contain"
          }}
        />
      </div>
    </div>
  );
};

export default Login;



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import "./login.css";
// import gasImg from"../../images/login/logingas.png"

// const Login = () => {
//   const navigate = useNavigate();

//   const userVerifyHandler = async () => {
//     try {
//       const response = await axios.post("/user/loginUser", data);
//       console.log(response);

//       if (response) {
//         alert("User logged in successfully");
//         navigate("/home");
//       }
//     } catch (error) {
//       alert(error.response.data.message || "An error occurred during login");
//     }
//   };

//   const [data, setData] = useState({
//     userEmail: "",
//     userPass: ""
//   });

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (data.userEmail === "" || data.userPass === "") {
//       alert("Please fill all the fields");
//       return;
//     }
//     userVerifyHandler();
//   };

//   return (
//     <div className="container">
//       <div className="wrapper">
//         <div className="title">
//           <span>Welcome back</span>
//         </div>
//         <div className="signup-link">
//           Don't have an account? <Link to="/Register"><span> Sign Up</span></Link>
//         </div>
//         <form onSubmit={submitHandler}>
//           <div className="row">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               required
//               value={data.userEmail}
//               onChange={(e) =>
//                 setData((prev) => ({ ...prev, userEmail: e.target.value }))
//               }
//             />
//           </div>
//           <div className="row">
//             <input
//               type="password"
//               placeholder="Enter your Password"
//               required
//               value={data.userPass}
//               onChange={(e) =>
//                 setData((prev) => ({ ...prev, userPass: e.target.value }))
//               }
//             />
//           </div>
//           <div className="row button">
//             <input type="submit" value="Login" />
//           </div>
//           <div className="pass">
//             <a href="#">Forgot password?</a>
//           </div>
//         </form>
//       </div>
//   {/* Image Section */}
//   <div className="image-container">
//         <img src={gasImg} alt="Login Illustration" />
//       </div>
    
//     </div>
    
//   );
// };

// export default Login;
