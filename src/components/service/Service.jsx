import esfera from "../../assets/image/esfera.png";
import man from "./../../assets/image/man.png";

const Service = () => {
  return (
    <section className='section__service'>
      <section className='section__text'>
        <p className='hashtag'>#MAXLLALLIRE</p>
        <h2 className='title'>Sencillo, rápido y a tu manera.</h2>
        <p className='parragraph'>
          Muestra los valores de tu marca y cómo puede ser parte de la vida del
          usuario que está leyendo. Generar identificación es la clave para
          conquistar a tu cliente.
        </p>
      </section>
      <div className='presentation-color' />
      <div className='container__image'>
        <img className='image esfera1' src={esfera} alt='Esfera' />
        <img className='image esfera2' src={esfera} alt='Esfera' />
        <img className='image esfera3' src={esfera} alt='Esfera' />
        <img className='image man' src={man} alt='Man' />
      </div>
    </section>
  );
};
export default Service;
