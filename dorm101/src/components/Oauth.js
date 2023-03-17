import React from 'react'
import { useEffect, useState } from 'react';
import './App.css';
import { Navigate } from 'react-router-dom'
import jwt_decode from "jwt-decode"

function Oauth() {

  const [ user, setUser ] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encode JWT ID token: " + response.credential);
    var useObject = jwt_decode(response.credential);
    console.log(useObject);
    setUser(useObject);
  }

  useEffect (() => {
    /*global google */
    google.accounts.id.initialize({
      client_id : "350994420864-t176nkjqp4eoisgpkt9kfbpv016k5v70.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("SignInDiv"),
      {
        theme : "outline", size : "large"
      }
    );
  }, [])
  return (
    <div className="App p-10 pt-6 pl-20  ">
      <div id = "SignInDiv">
      { Object.keys(user).length !== 0 && 
         <Navigate to="/Home" />
      }
      </div>
    </div>
  );
}

export default Oauth;