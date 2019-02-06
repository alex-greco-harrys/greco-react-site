import React from "react";
import "./styles/about.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="left-container">
          <p>
            This is the shorthand for flex-grow, flex-shrink and flex-basis
            combined. The second and third parameters (flex-shrink and
            flex-basis) are optional. Default is 0 1 auto.
          </p>
          <p>
            This defines the default size of an element before the remaining
            space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a
            keyword. The auto keyword means "look at my width or height
            property" (which was temporarily done by the main-size keyword until
            deprecated). The content keyword means "size it based on the item's
            content" - this keyword isn't well supported yet, so it's hard to
            test and harder to know what its brethren max-content, min-content,
            and fit-content do.
          </p>
        </div>
        <div className="right-container">
          <p>
            This defines the alignment along the main axis. It helps distribute
            extra free space left over when either all the flex items on a line
            are inflexible, or are flexible but have reached their maximum size.
            It also exerts some control over the alignment of items when they
            overflow the line.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
