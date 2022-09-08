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
    <section id='service' className='section__service'>
      <section className='section__text'>
        <p className='hashtag'>#MAXLLALLIRE</p>
        {/* <h2 className='title mobile'>Sencillo, rápido y a tu manera</h2> */}
        <h2 className='title'>Habilidades</h2>
        <p className='parragraph'>
          Mis aptitudes y validaciones destacadas.
        </p>
        {/* <p className='mobile'>
          Muestra los valores de tu marca y cómo puede ser parte de la vida del
          usuario que está leyendo. Generar identificación es la clave para
          conquistar a tu cliente.
        </p> */}
        <section className='section__lenguages desktop'>
          <section className='section__first'>
            <article className='article__lenguage'>
              <img className='image__article__lenguage' src={html} alt='Ícono de HTML' />
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
      <section className='section__lenguages section__lenguajes--mobile mobile'>
          <article className='article__lenguage'>
            <img className='image__article__lenguage' src={html} alt='Ícono de HTML' />
            <p className='parraph__article__lenguage'>HTML</p>
          </article>
          <article className='article__lenguage'>
            <img className='image__article__lenguage' src={css} alt='Ícono de CSS' title='Ícono de CSS' />
            <p className='parraph__article__lenguage'>CSS</p>
          </article>
          <article className='article__lenguage'>
            <img className='image__article__lenguage' src={sass} alt='Ícono de SASS' title='Ícono de SASS' />
            <p className='parraph__article__lenguage'>SASS</p>
          </article>
          <article className='article__lenguage'>
            <img className='image__article__lenguage'
              src={bootstrap}
              alt='Ícono de BOOTSTRAP'
              title='Ícono de BOOTSTRAP'
            />
            <p className='parraph__article__lenguage'>BOOTSTRAP</p>
          </article>
          <article className='article__lenguage'>
            <img className='image__article__lenguage' src={git} alt='Ícono de GIT' title='Ícono de GIT' />
            <p className='parraph__article__lenguage'>GIT</p>
          </article>
          <article className='article__lenguage'>
            <img className='image__article__lenguage'
              src={javascript}
              alt='Ícono de JAVASCRIPT'
              title='Ícono de JAVASCRIPT'
            />
            <p className='parraph__article__lenguage'>JAVASCRIPT</p>
          </article>
          <article className='article__lenguage'>
            <img className='image__article__lenguage' src={jquery} alt='Ícono de JQUERY' title='Ícono de JQUERY' />
            <p className='parraph__article__lenguage'>JQUERY</p>
          </article>
          <article className='article__lenguage'>
            <img className='image__article__lenguage'
              src={react}
              alt='Ícono de REACT JS'
              title='Ícono de REACT JS'
            />
            <p className='parraph__article__lenguage'>REACT JS</p>
          </article>
          <article className='article__lenguage'>
            <img className='image__article__lenguage'
              src={firebase}
              alt='Ícono de FIREBASE'
              title='Ícono de FIREBASE'
            />
            <p className='parraph__article__lenguage'>FIREBASE</p>
          </article>
      </section>
    </section>
  );
};
export default Service;
