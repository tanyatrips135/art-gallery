import React from "react";
import Category from "../components/Category";

const Collections = () => (
  <div className="Collections">
    <Category imageSrc="/davinci/leonardo_da_vinci.png" text="Davinci" />
    <Category imageSrc="/monet/claude_monet.png" text="Monet" />
    <Category imageSrc="/picasso/pablo_picasso.png" text="Picasso" />
    <Category imageSrc="/vangogh/vincent_van_gogh.png" text="Van Gogh" />
  </div>
);

export default Collections;