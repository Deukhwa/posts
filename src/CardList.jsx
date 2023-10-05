/* eslint-disable react/prop-types */
import Card from './Card';

const CardList = ({ posts }) => {
  return (
    <section className="p-strip">
      <div className="row u-equal-height">
        {posts.map((post) => (
          <Card
            key={post.id}
            id={post.id}
            featured_media={post.featured_media}
            title={post.title}
            _embedded={post._embedded}
            dateString={post.date}
            link={post.link}
          />
        ))}
      </div>
    </section>
  );
};

export default CardList;
