import React from 'react'
import { useEffect } from 'react';
import './App.css';

function App() {
  function handleCallbackResponse(response) {
    console.log("Encode JWT ID token: " + response.credential);
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

      </div>
    </div>
  );
}

export default App;