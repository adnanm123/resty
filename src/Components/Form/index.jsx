import React, { useState } from 'react';
import './Form.scss';

function Form(props) {
  const [selectedMethod, setSelectedMethod] = useState('GET');
  const [url, setUrl] = useState('');
  const [jsonBody, setJsonBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: selectedMethod,
      url: url,
      body: jsonBody
    };
    props.handleApiCall(formData);
  };

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input 
            name='url' 
            type='text' 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type="submit">GO!</button>
        </label>
        <div className="methods">
          <span 
            id="get" 
            className={selectedMethod === 'GET' ? 'active' : ''}
            onClick={() => handleMethodChange('GET')}
          >
            GET
          </span>
          <span 
            id="post" 
            className={selectedMethod === 'POST' ? 'active' : ''}
            onClick={() => handleMethodChange('POST')}
          >
            POST
          </span>
          <span 
            id="put" 
            className={selectedMethod === 'PUT' ? 'active' : ''}
            onClick={() => handleMethodChange('PUT')}
          >
            PUT
          </span>
          <span 
            id="delete" 
            className={selectedMethod === 'DELETE' ? 'active' : ''}
            onClick={() => handleMethodChange('DELETE')}
          >
            DELETE
          </span>
        </div>
        {(selectedMethod === 'POST' || selectedMethod === 'PUT') && (
          <textarea 
            value={jsonBody}
            onChange={(e) => setJsonBody(e.target.value)}
            placeholder="Enter JSON data here"
          />
        )}
      </form>
    </>
  );
}

export default Form;
