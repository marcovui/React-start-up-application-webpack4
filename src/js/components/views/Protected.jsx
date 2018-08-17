import React from 'react';
import Header from '../structural/Header';

const Protected = (props) => {
  const { title } = props;
  const { subTitle } = props;
  return (
    <div>
      <Header title={title} />
      <div className="section">
        <div className="container">
          {subTitle}
        </div>
      </div>
    </div>
  );
};

export default Protected;