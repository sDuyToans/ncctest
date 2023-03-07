import Content from "../component/content/content";
import Footer from "../component/footer/footer";
import Header from "../component/header/header";
import Navigation from "../component/navigation/navigation";
import './home.scss'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-nav">
        <Navigation />
      </div>
      <div className="home-content">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
