import React from "react";
import { Aggregator } from "../../Constant/index";
import Unilayer from "../../Components/unilayer";

function About() {
  return (
    <section className="about">
      <div className="container">
        <Unilayer item={Aggregator} />
      </div>
    </section>
  );
}

export default About;
