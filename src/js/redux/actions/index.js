// src/js/actions/index.js
import fetch from "isomorphic-fetch";
import axios from 'axios';
import { ADD_ARTICLE, LOAD_ARTICLE } from "../constants/action-types";

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });

const BASE_URL = 'http://localhost:3333';

function getImportArticlesCreator(payload) {
  return {
    type: LOAD_ARTICLE,
    payload,
  };
}

export function importArticles(payload) {
  return function importArticlesThunk(dispatch) {
    return fetch(`/data/articles.json`, {
      credentials: "same-origin",
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then((response) => {
      if (response.ok) return response.json();
      if (response.status === 401) window.location.replace(response.headers.get("Location"));
      return Promise.reject(new Error(`importArticles API returned error code: ${response.status} - ${response.statusText}`));
    }).then(json =>
      dispatch(getImportArticlesCreator(json))
    ).catch(error =>
      Promise.reject(error)
    );
  };
}
export function importArticlesAxios(payload) {
  return function importArticlesAxiosThunk(dispatch) {
    axios.get(`${BASE_URL}/api/articles`).then(res => {
      const articles = res.data;
      dispatch(getImportArticlesCreator(articles))
    });
  };
}