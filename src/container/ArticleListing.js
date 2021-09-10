import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setArticles } from '../redux/actions/ArticleActions';
import ArticleComponent from './ArticleComponent';

const ArticleListing = () => {
  const dispatch = useDispatch();
  const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;
  const fetchArticles = async () => {
    const response = await axios.get(REACT_APP_BASE_URL + '/svc/mostpopular/v2/viewed/7.json?api-key=' + REACT_APP_API_KEY).catch((error) => console.log(error, 'error'));
    dispatch(setArticles(response.data.results));
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className='ui grid container'>
      <ArticleComponent />
    </div>
  );
};

export default ArticleListing;
