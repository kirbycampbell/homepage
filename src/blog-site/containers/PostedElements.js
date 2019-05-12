import React from "react";
import MorphElement from "./../elements/MorphElement";

const PostedElements = ({ elements }) => {
  return (
    <div>
      {elements.map(element => {
        return (
          <div key={element.number.integerValue || element.number.stringValue}>
            <MorphElement element={element} type={element.type.stringValue} />
          </div>
        );
      })}
    </div>
  );
};

export default PostedElements;
