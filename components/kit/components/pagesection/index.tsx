import React, { FC } from "react";
import SectionDesc from "../../../site/section/SectionDesc";

const Pagesection: FC = () => {
  const pageSections = [
    {
      title: "CTA",
      items: 10,
      img: "images/sections/cta.svg",
      link: "/components/cta",
    },
    {
      title: "Testimonial",
      items: 6,
      img: "images/sections/testimonial.svg",
      link: "/components/testimonial",
    },
  ];

  return (
    <SectionDesc id="pagesection" items={pageSections} title="Page sections" />
  );
};

export default Pagesection;
