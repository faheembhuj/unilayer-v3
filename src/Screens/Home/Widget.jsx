import React from "react";
import SdkWidget from "../../Components/SDKwidget";
import { widget } from "../../Constant/index";

function Widget() {
  return (
    <section className="Widget">
      <div className="container">
        <div className="row">
          <SdkWidget item={widget} />
        </div>
      </div>
    </section>
  );
}

export default Widget;
