import "./App.css";
import axios from "axios";
import { useState } from "react";

import ApiTable from "./components/ApiTable";

function App() {
  const [token, setToken] = useState("");

  const handleLogin = () => {
    setToken("fasdfsdgasg");

    // var config = {
    //   method: "post",
    //   url: "https://efatura.etrsoft.com/fmi/data/v1/databases/testdb/sessions",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: {"userName": "apitest", "password": "test123"},
    //   },
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // axios.post("https://efatura.etrsoft.com/fmi/data/v1/databases/testdb/sessions", {"userName": "apitest", "password": "test123"})
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Authorization", "Basic YXBpdGVzdDp0ZXN0MTIz");

    // var requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   redirect: "follow",
    // };

    // fetch(
    //   "https://efatura.etrsoft.com/fmi/data/v1/databases/testdb/sessions",
    //   requestOptions
    // )
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));
  };

  return (
    <div className="App">
      <div
        style={{
          margin: "auto",
          width: "100%",
          textAlign: "center",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <button className="btn btn-primary btn-lg" onClick={handleLogin}>
          Login
        </button>
      </div>

      {token ? (
        <ApiTable token={token} />
      ) : (
        <h4 className="text-white mt-5">"Lütfen giriş yapınız!..."</h4>
      )}
    </div>
  );
}

export default App;
