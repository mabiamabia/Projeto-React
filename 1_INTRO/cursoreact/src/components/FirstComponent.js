import AnotherComponent from "./AnotherComponent";

function FirstComponent() {
  //Algum comentario

  const name = "Matheus";

  return (
    <div className="FirstComponent">
      {/* Comentario de multi linha*/}
      <p>Primeiro componente</p>

      {2 + 2}

      <p>Nome: {name}</p>
      <AnotherComponent />
    </div>
  );
}

export default FirstComponent;
