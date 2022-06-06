import React from "react";

const ConteudoSingle = ({ title, children }) => {
  if (!children) {
    children =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente fugit quae sed nulla sit non voluptate expedita. Eius possimus error dolores animi reprehenderit ipsa totam, at laudantium, quod ad doloribus?";
  }

  if (!title) {
    title = "Content Title";
  }
  return (
    <>
      <div className="conteudo-single">
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </>
  );
};

export default ConteudoSingle;
