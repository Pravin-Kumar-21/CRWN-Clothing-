import './categories.styles.scss';

const App = () => {
  const categories = [
    {
      id: 1,
      item: "Hats",
      Imgurl: "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      id: 2,
      item: "Sneakers",
      Imgurl: "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      id: 3,
      item: "Jackets",
      Imgurl: "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      id: 4,
      item: "Mens",
      Imgurl: "https://i.ibb.co/R70vBrQ/men.png"
    },
    {
      id: 5,
      item: "Womens",
      Imgurl: "https://i.ibb.co/GCCdy8t/womens.png"
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ id, item, Imgurl }) => (
        <div className="category-container" key={id}>
           <div
            className="background-image"
            style={{
              backgroundImage: `url(${Imgurl})`,
            }}
          />
          <div className="category-body-container">
            <h2>{item}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
