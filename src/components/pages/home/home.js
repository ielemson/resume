import React, { Fragment } from "react";
import {
  HeaderPartial,
  AsidePartial,
  SectionPArtial,
  Footer,
} from "../../partials";
const home = () => {
  return (
    <Fragment>
      <HeaderPartial />

      <div className="content-wrapper">
        <AsidePartial />
        <main>
          <SectionPArtial />
          <Footer />
        </main>
      </div>
    </Fragment>
  );
};

export default home;
