import React from "react";
import Hero from "../components/hero";
import Logo from "../static/logo.svg";
import Row from "../components/row";
import Paragraph from "../components/paragraph";
import "./styles/about.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <Hero imageUrl={Logo} altText="Hero Image" />
      <div className="about-container">
        <Row>
          <Paragraph>
            In our last example, we had to declare a readonly member name and a
            constructor parameter theName in the Octopus class, and we then
            immediately set name to theName. This turns out to be a very common
            practice. Parameter properties let you create and initialize a
            member in one place. Here’s a further revision of the previous
            Octopus class using a parameter property:
          </Paragraph>
        </Row>
        <Row>
          <Paragraph>
            Notice how we dropped theName altogether and just use the shortened
            readonly name: string parameter on the constructor to create and
            initialize the name member. We’ve consolidated the declarations and
            assignment into one location. Parameter properties are declared by
            prefixing a constructor parameter with an accessibility modifier or
            readonly, or both. Using private for a parameter property declares
            and initializes a private member; likewise, the same is done for
            public, protected, and readonly.
          </Paragraph>
        </Row>
      </div>
    </div>
  );
};

export default AboutPage;
