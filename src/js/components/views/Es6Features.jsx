import React from 'react';
import Header from '../structural/Header';


const Es6Features = (props) => {
  const { title } = props;
  const { subTitle } = props;
  return (
    <div>
      <Header title={title} />
      <div className="section">
        <div className="container">
          <a href="https://blog.pragmatists.com/top-10-es6-features-by-example-80ac878794bb" target="_blank" rel="noopener noreferrer" className="btn btn-link">Top 10 ES6 features by example</a>
          <ul className="mt-3 mb-3">
            <li>const and let keywords</li>
            <li>
              Array helper functions
              <ul>
                <li>forEach</li>
                <li>map</li>
                <li>filter</li>
                <li>find</li>
                <li>every</li>
                <li>some</li>
                <li>reduce</li>
              </ul>
            </li>
            <li>Arrow functions</li>
            <li>Classes</li>
            <li>Enhanced object literals</li>
            <li>Template strings</li>
            <li>Default function arguments</li>
            <li>
              Rest and spread operators
              <ul>
                <li>Spread - Shallow copy</li>
                <li>Spead - Merge arrays</li>
                <li>Rest</li>
              </ul>
            </li>
            <li>
              Destructuring
              <ul>
                <li>Of array</li>
                <li>Of object</li>
              </ul>
            </li>
            <li>
              Promises
              <ul>
                <li>
                  <a href="http://techinpink.com/2017/02/24/introduction-to-javascript-promises/" target="_blank" rel="noopener noreferrer" className="btn btn-link d-block text-left pl-0 pr-0">Introduction to JavaScript Promises</a>
                </li>
                <li>
                  <a href="https://scotch.io/tutorials/asynchronous-javascript-using-async-await" target="_blank" rel="noopener noreferrer" className="btn btn-link d-block text-left pl-0 pr-0">Asynchronous Javascript using Async - Await</a>
                </li>
              </ul>
            </li>
          </ul>
          <a href="https://webapplog.com/es6/" target="_blank" rel="noopener noreferrer" className="btn btn-link">Top 10 ES6 Features Every Busy JavaScript Developer Must Know</a>
          <ul className="mt-3 mb-3">
            <li>
              Multi-line Strings in ES6
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Es6Features;