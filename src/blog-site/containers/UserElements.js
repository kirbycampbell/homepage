import React from "react";
import H1Element from "../elements/h1Element";
import PElement from "../elements/pElement";
import CodeElement from "../elements/codeElement";
import ImgElement from "../elements/imgElement";
import VideoElement from "./../elements/videoElement";
import AuthorElement from "./../elements/authorElement";

const UserElements = ({
  elements,
  writeContent,
  deleteElement,
  toggleView,
  toggleEdit,
  languageChoice
}) => {
  return (
    <div>
      {elements.map(element => {
        if (element.type === "h1") {
          return (
            <H1Element
              key={element.number}
              element={element}
              writeContent={writeContent}
              deleteElement={deleteElement}
            />
          );
        } else if (element.type === "author") {
          return (
            <AuthorElement
              key={element.number}
              element={element}
              writeContent={writeContent}
            />
          );
        } else if (element.type === "p") {
          return (
            <PElement
              key={element.number}
              element={element}
              writeContent={writeContent}
              deleteElement={deleteElement}
            />
          );
        } else if (element.type === "code") {
          return (
            <CodeElement
              key={element.number}
              element={element}
              writeContent={writeContent}
              deleteElement={deleteElement}
              toggleView={toggleView}
              toggleEdit={toggleEdit}
              languageChoice={languageChoice}
            />
          );
        } else if (element.type === "img") {
          return (
            <ImgElement
              key={element.number}
              element={element}
              writeContent={writeContent}
              deleteElement={deleteElement}
              toggleView={toggleView}
              toggleEdit={toggleEdit}
            />
          );
        } else if (element.type === "video") {
          return (
            <VideoElement
              key={element.number}
              element={element}
              writeContent={writeContent}
              deleteElement={deleteElement}
              toggleView={toggleView}
              toggleEdit={toggleEdit}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default UserElements;
