import giraffe from "../assets/pexels-photo3.jpeg";

const Images = () => {
  return (
    <div>
      <img
        alt="A imagem mostra uma moça virada de costas, sando uma boina em frente a uma livraria"
        src="/pexels-photo1.jpeg"
      />

      <img src={giraffe} alt="duas girafas em seu habitat natural" />
    </div>
  );
};

export default Images;
