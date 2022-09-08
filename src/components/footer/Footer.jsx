import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <section className='container__footer-first'> 
        <section className='footer__header'>
          <h2>Max Llallire</h2>
          <nav className='footer__nav'>
            <ul className='footer__ul'>
              <li className='footer__li'>
                <a href='#presentacion'>QUIEN SOY</a>
              </li>
              <li className='footer__li'>
                <a href='#skills'>HABILIDADES</a>
              </li>
              <li className='footer__li'>
                <a href='#service'>SERVICIOS</a>
              </li>
              <li className='footer__li'>
                <a href='#contact'>CONTACTO</a>
              </li>
              <li className='footer__li'>
                <article className='social'>
                  <a href='#'>
                    <FaInstagram className='icon' />
                  </a>
                  <a href='#'>
                    <FaFacebookF className='icon' />
                  </a>
                </article>
              </li>
            </ul>
          </nav>
        </section>
        <section className='text__social'>
          <article className='social'>
            <a href=''>
              <FaInstagram className='icon' />
            </a>
            <a href=''>
              <FaFacebookF className='icon' />
            </a>
          </article>
        </section>
      </section>
      <section className='container__form'>
        <p className='notice'>Recibe noticias de Max</p>
        <form className='form__notice'>
          <input type='email' placeholder='nombre@email.com' />
          <button>Suscribite</button>
        </form>
      </section>
      <hr />
      <p className='footer__parraph'>2022 - CODERHOUSE</p>
    </footer>
  );
};
export default Footer;
