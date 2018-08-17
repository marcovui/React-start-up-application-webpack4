// src/js/components/List.js
import React from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';

const mapStateToProps = state => ({
  articles: state.articlesReducer.articles.map((article) => {
    const id = uuidv1();
    return { ...article, uid: id };
  }),
});

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.uid}>
        {el.title}
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;