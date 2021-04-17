import React from "react";
import renderer from "react-test-renderer";

import App from "./App";

describe("<App />", () => {
  it("has 3 child", () => {
    const tree: any = renderer.create(<App />).toJSON();
    console.log(tree);
    expect(tree?.children?.length).toBe(3);
  });
});
