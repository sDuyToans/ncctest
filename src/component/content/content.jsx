import ContentItem from '../content-item/content-item';
import './content.scss'

const Content = () => {
  return (
    <div className="content-container">
      <div className="paragraph-container">
        <h4 className="para-title">Lorem ipsum dolor sit asmet?</h4>
        <p className="para-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </p>
      </div>
      <div className="items-container">
            <ContentItem imgUrl={'css'}/>
            <ContentItem imgUrl={'html'}/>
            <ContentItem imgUrl={'url'}/>
        </div>
    </div>
  );
};

export default Content;
