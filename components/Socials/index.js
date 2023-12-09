import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button
          key={index}
          onClick={() => {
            social.title !== "Email"
              ? window.open(social.link)
              : window.open("mailto:abdullahshabir895@gmail.com");
          }}
        >
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;

//    onClick={() => window.open("mailto:abdullahshabir895@gmail.com")}
