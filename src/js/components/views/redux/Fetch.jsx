// src/js/components/Fetch.js
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  articles: state.articlesReducer.articles,
});

const ConnectedFetch = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedFetch);

export default List;