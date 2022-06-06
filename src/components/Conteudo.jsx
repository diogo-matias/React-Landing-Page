import React from "react";
import ConteudoSingle from "./ConteudoSingle";

const Conteudo = () => {
  return (
    <>
      <div className="conteudo">
        <div className="center">
          <ConteudoSingle></ConteudoSingle>
          <ConteudoSingle></ConteudoSingle>
          <ConteudoSingle></ConteudoSingle>
          <ConteudoSingle></ConteudoSingle>
        </div>
      </div>
    </>
  );
};

export default Conteudo;
