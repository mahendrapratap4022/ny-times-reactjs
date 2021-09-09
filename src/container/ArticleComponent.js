import { React } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ArticleComponent = () => {
  const articles = useSelector((state) => state.allArticles.articles);
  const renderList = articles.map((article) => {
    const { asset_id, title, media, published_date, section, byline, abstract } = article;
    let image = process.env.REACT_APP_NY_IMAGE;
    if (media.length > 0 && media[0].type == 'image') {
      image = media[0]['media-metadata'][1].url;
    }
    return (
      <div className='four wide column' key={asset_id}>
        <Link to={`/article/${asset_id}`}>
          <div className='ui link cards'>
            <div className='card'>
              <div className='image'>
                <img src={image} alt={title} />
              </div>
              <div className='content'>
                <div className='header'>{title.length > 40 ? title.slice(0, 40) + '...' : title.slice(0, 30)}</div>
                <div className='meta'>{section}</div>
                <div className='description'>{abstract}</div>
              </div>
              <div className='extra content'>
                <span className='right floated'>
                  <i className='calendar icon'></i> {published_date}
                </span>
                <span>
                  <i className='user icon'></i>
                  {byline.slice(0, 15)}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <>
      {articles.length ? (
        renderList
      ) : (
        <div className='ui segment loading-screen'>
          <div className='ui active inverted dimmer'>
            <div className='ui medium text loader'>Preparing Articles..</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ArticleComponent;
