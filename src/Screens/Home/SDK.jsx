import React from "react";
import SdkWidget from "../../Components/SDKwidget";
import { SDKList } from "../../Constant/index";

function SDK() {
  return (
    <section className="sdk">
      <div className="container">
        <div className="row">
          <SdkWidget item={SDKList} />
        </div>
      </div>
    </section>
  );
}

export default SDK;
