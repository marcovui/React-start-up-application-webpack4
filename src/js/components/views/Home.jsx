import React from 'react';
import Header from '../structural/Header';


const Home = (props) => {
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

export default Home;

/*
class Home extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <Header title={title} />
        <div className="section">
          <div className="container">
            {'aaa'}
          </div>
        </div>
      </div>
    );
  }
}
*/

/*
const Home = (props) => {
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

export default Home;
*/