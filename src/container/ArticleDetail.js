import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedArticle, removeSelectedArticle, setArticles } from '../redux/actions/ArticleActions';
const ArticleDetail = () => {
  const { REACT_APP_BASE_URL, REACT_APP_API_KEY, REACT_APP_NY_IMAGE } = process.env;
  const { id } = useParams();
  const articles = useSelector((state) => state.allArticles.articles);
  let article = useSelector((state) => state.article);
  const { title, media, published_date, section, url, byline, abstract } = article;
  const dispatch = useDispatch();

  const fetchArticles = async () => {
    const response = await axios.get(REACT_APP_BASE_URL + '/svc/mostpopular/v2/viewed/7.json?api-key=' + REACT_APP_API_KEY).catch((error) => console.log(error, 'error'));
    dispatch(setArticles(response.data.results));
  };
  const fetchArticleDetail = async (id) => {
    if (articles.length < 1) {
      fetchArticles();
    }
    const response = articles.find((i) => i.id == id);
    dispatch(selectedArticle(response));
  };

  useEffect(() => {
    if (id && id !== '') fetchArticleDetail(id);
    return () => {
      dispatch(removeSelectedArticle());
    };
  }, [id, articles]);
  let image = REACT_APP_NY_IMAGE;
  if (Object.keys(article).length !== 0 && media.length > 0 && media[0].type == 'image') {
    image = media[0]['media-metadata'][1].url;
  }
  return (
    <div className='ui grid container'>
      {Object.keys(article).length === 0 ? (
        <div className='ui segment loading-screen'>
          <div className='ui active inverted dimmer'>
            <div className='ui medium text loader'>Preparing Article..</div>
          </div>
        </div>
      ) : (
        <div className='ui placeholder segment'>
          <div className='ui two column stackable grid vertically divided'>
            <div className='middle aligned row'>
              <div className='column lp'>
                <img className='ui fluid image' src={image} />
              </div>
              <div className='column rp'>
                <h1>{title}</h1>
                <h3 className='ui'> -- {section}</h3>
                <p>{abstract}</p>
                <a class='left aligned ui button' href={url} target='_blank'>
                  Go Read Full Article on New york Times
                </a>
              </div>
            </div>
            <div className='row'>
              <span className='column'>
                <div className='extra content'>
                  <span className='right floated'>
                    <i className='calendar icon'></i> {published_date}
                  </span>
                  <br />
                  <br />
                  <br />
                  <span>
                    <i className='user icon'></i>
                    {byline.slice(0, 15)}
                  </span>
                </div>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleDetail;
