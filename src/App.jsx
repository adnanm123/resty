import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Results from "./Components/Results";

const App = () => {
  const [data, setData] = useState(null);
  const [headers, setHeaders] = useState(null);
  const [requestParams, setRequestParams] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleApiCall = (params) => {
    setRequestParams(params);
  };

  useEffect(() => {
    if (requestParams) {
      setLoading(true);
      axios({
        method: requestParams.method,
        url: requestParams.url,
        data: requestParams.body,
      })
      .then(response => {
        setData(response.data);
        setHeaders(response.headers);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error making the API call", error);
        setLoading(false);
      });
    }
  }, [requestParams]);

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div className="api-info">
          <div>Request Method: {requestParams?.method}</div>
          <div>URL: {requestParams?.url}</div>
          <Form handleApiCall={handleApiCall} />
        </div>
        <div className="results">
          <strong>Headers:</strong>
          <pre>{JSON.stringify(headers, null, 2)}</pre>
          <Results data={data} loading={loading} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
