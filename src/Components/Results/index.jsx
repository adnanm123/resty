import React from 'react';
import ReactJson from 'react-json-view';
import './Results.scss';

function Results(props) {
  if (props.loading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      {props.data ? <ReactJson src={props.data} theme="shapeshifter" /> : null}
    </section>
  );
}

export default Results;