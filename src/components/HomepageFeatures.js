import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Create robot swarms",
    Png: require("../../static/img/robot_swarm.png").default,
    description: (
      <>
        You are a space cadet in the Galaxy of Morpheus. Create robots and enjoy
        your new adventure.
      </>
    ),
  },
  {
    title: "Mine Resources",
    Png: require("../../static/img/galaxy.png").default,
    description: (
      <>
        The planets are rich of expensive resources. Mine them and upgrade your
        fleet of robots. Beware of pirates!
      </>
    ),
  },
  {
    title: "Engage in fights",
    Png: require("../../static/img/fight.png").default,
    description: (
      <>
        Will you be a pacifist or a warmonger. Fight other players in this
        battle of the galaxy.
      </>
    ),
  },
];

function Feature({ Png, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={Png} alt={title} className={styles.featurePng} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
