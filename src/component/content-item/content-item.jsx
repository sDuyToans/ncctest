import "./content-item.scss";
import CSSImage from '../../assets/css-icon.png';
import HTMLImage from '../../assets/html-icon.png';
import URLImage from '../../assets/url-icon.png'
const ContentItem = ({ imgUrl }) => {
    const returnImage = (imgUrl) => {
        console.log(imgUrl)
        switch(imgUrl){
            case 'css':
                return <img src={CSSImage} alt="css" />
                break;
            case 'html':
                return <img src={HTMLImage} alt="css" />
                break;
            case 'url':
                return <img src={URLImage} alt="css" />
                break;
            default:
                return <img src={CSSImage} alt="css" />
        }
    }
  return (
    <div className="content-item-container">
      <h3>Lorem ipsum dolor sit amet</h3>
      <div className="item-box">
        <div className="top-item">
          {
            returnImage(imgUrl)
          }
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
            sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
            accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
            massa in metus bibendum congue. Pellentesque ultrices liquam egestas
            nunc at
          </span>
        </div>
        <div className="bottom-item">
          <span>
            ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
            ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
            porta massa in metus bibendum congue. Pellentesque ultrices
            vestibulum mattis.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContentItem;
