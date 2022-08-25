import esfera from "../../assets/image/esfera.png";
import man from "../../assets/image/man.png";
import html from "../../assets/image/lenguages/html.png";
import bootstrap from "../../assets/image/lenguages/bootstrap.png";
import css from "../../assets/image/lenguages/css.png";
import firebase from "../../assets/image/lenguages/firebase.png";
import javascript from "../../assets/image/lenguages/javascript.png";
import jquery from "../../assets/image/lenguages/jquery.png";
import react from "../../assets/image/lenguages/react.png";
import sass from "../../assets/image/lenguages/sass.png";
import git from "../../assets/image/lenguages/git.png";

const Service = () => {
  return (
    <section className='section__service'>
      <section className='section__text'>
        <p className='hashtag'>#MAXLLALLIRE</p>
        <h2 className='title mobile'>Sencillo, rápido y a tu manera</h2>
        <h2 className='title desktop'>Habilidades</h2>
        <p className='parragraph desktop'>
          Mis aptitudes y validaciones destacadas.
        </p>
        <p className='mobile'>
          Muestra los valores de tu marca y cómo puede ser parte de la vida del
          usuario que está leyendo. Generar identificación es la clave para
          conquistar a tu cliente.
        </p>
        <section className='section__lenguages desktop'>
          <section className='section__first'>
            <article className='article__lenguage'>
              <img src={html} alt='Ícono de HTML' />
              <p>HTML</p>
            </article>
            <article className='article__lenguage'>
              <img src={css} alt='Ícono de CSS' title='Ícono de CSS' />
              <p>CSS</p>
            </article>
            <article className='article__lenguage'>
              <img src={sass} alt='Ícono de SASS' title='Ícono de SASS' />
              <p>SASS</p>
            </article>
            <article className='article__lenguage'>
              <img
                src={bootstrap}
                alt='Ícono de BOOTSTRAP'
                title='Ícono de BOOTSTRAP'
              />
              <p>BOOTSTRAP</p>
            </article>
            <article className='article__lenguage'>
              <img src={git} alt='Ícono de GIT' title='Ícono de GIT' />
              <p>GIT</p>
            </article>
          </section>
          <section className='section__second'>
            <article className='article__lenguage'>
              <img
                src={javascript}
                alt='Ícono de JAVASCRIPT'
                title='Ícono de JAVASCRIPT'
              />
              <p>JAVASCRIPT</p>
            </article>
            <article className='article__lenguage'>
              <img src={jquery} alt='Ícono de JQUERY' title='Ícono de JQUERY' />
              <p>JQUERY</p>
            </article>
            <article className='article__lenguage'>
              <img
                src={react}
                alt='Ícono de REACT JS'
                title='Ícono de REACT JS'
              />
              <p>REACT JS</p>
            </article>
            <article className='article__lenguage'>
              <img
                src={firebase}
                alt='Ícono de FIREBASE'
                title='Ícono de FIREBASE'
              />
              <p>FIREBASE</p>
            </article>
          </section>
        </section>
      </section>
      <section className='container__design'>
        <div className='presentation-color' />
        <div className='container__image'>
          <img className='image esfera1' src={esfera} alt='Esfera' />
          <img className='image esfera2' src={esfera} alt='Esfera' />
          <img className='image esfera3' src={esfera} alt='Esfera' />
          <img className='image man' src={man} alt='Man' />
        </div>
      </section>
    </section>
  );
};
export default Service;
