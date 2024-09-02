import CategoryList from '../../components/category-list/CategoryList'
import './home.component.scss'
const Home = () => {
  const categories = [
    {
      id: 1,
      item: "Casuals",
      Imgurl: "https://i.ibb.co/ZhsJFYr/Casual.jpg"
    },
    {
      id: 2,
      item: "Party",
      Imgurl: "https://i.ibb.co/KF8352b/Fashion-For-Women-Official-Online-Store.jpg"
    },
    {
      id: 3,
      item: "Leather",
      Imgurl: "https://i.ibb.co/B4L2K27/Jacket.png"
    },
    {
      id: 4,
      item: "Mens",
      Imgurl: "https://i.ibb.co/kSk88rp/Casuals.jpg"
    },
    {
      id: 5,
      item: "Womens",
      Imgurl: "https://i.ibb.co/k5BQs75/pose.jpg"
    },
    {
      id: 6,
      item: "Suite",
      Imgurl: "https://i.ibb.co/jGcs2sn/Suite.jpg"
    },
    {
      id: 7,
      item: "Ethnic",
      Imgurl: "https://i.ibb.co/RC05YFY/Ethnic.jpg"
    },
    {
      id: 8,
      item: "Exotic",
      Imgurl: "https://i.ibb.co/Npc9S70/Exotic.png"
    },
  ];

  return (
    <div className="Overview">
      <CategoryList categories={categories}/>
    </div>
  )
};
export default Home;
