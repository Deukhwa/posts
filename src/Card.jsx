import './Card.css';
/* eslint-disable react/prop-types */

const Card = ({ id, featured_media, title, _embedded, dateString, link }) => {
  const dateObject = new Date(dateString);
  const date = dateObject.getDate();
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth();
  const monthNames = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <div id={id} className="col-4 col-medium-2 card-container">
      <header className="card-header">
        <h5 className="p-muted-heading u-no-margin--bottom">
          cloud and server
        </h5>
      </header>
      <div className="card-content">
        <div>
          <img alt="Card image" src={featured_media} />
        </div>
        <h3 className="p-heading--4">
          <a href={link}>{title.rendered}</a>
        </h3>
        <p className="u-no-padding--bottom p-heading--6">
          By <a href={_embedded.author[0].link}>{_embedded.author[0].name}</a>{' '}
          on {date} {monthNames[month]} {year}
        </p>
      </div>
      <p className="card-footer">Article</p>
    </div>
  );
};

export default Card;

/**
 *
 */
