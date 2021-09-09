import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setArticles } from '../redux/actions/ArticleActions';
import ArticleComponent from './ArticleComponent';

const ArticleListing = () => {
  const dispatch = useDispatch();
  const fetchArticles = async () => {
    const response = await axios.get('https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=jb5movQcyBeAP4H62JMwrtTGGTi3T5lj').catch((error) => console.log(error, 'error'));
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
