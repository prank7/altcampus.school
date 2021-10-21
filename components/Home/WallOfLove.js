import Masonry from 'react-masonry-css';
import Tweet from '../../components/Tweet';
const breakpointColumnsObj = {
  default: 3,
  1280: 3,
  1024: 2,
  768: 2,
  640: 1
};

function WallOfLove({ tweets }) {
  return (
    <section className="wall-of-love pt-8 pb-12 sm:pt-24 sm:pb-24">
      <div className="container px-8 sm:px-3 mx-auto break-words">
        <header className="text-center mb-12">
          <h2 className="text-4xl sm:text-5.5xl text-gray-500 font-bold">
            Our wall of love
          </h2>
        </header>
        {/* <article className="items-start wall-of-love-wrapper"> */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {tweets.map((tweet) => (
            <Tweet hideImage key={tweet.id} {...tweet} />
          ))}
        </Masonry>
        {/* </article> */}
      </div>
    </section>
  );
}

export default WallOfLove;
