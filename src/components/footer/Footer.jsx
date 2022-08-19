import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <section className='footer__header'>
        <h2>Max Llallire</h2>
        <nav className='footer__nav'>
          <ul className='footer__ul'>
            <li className='footer__li'>
              <a href='#'>QUIEN SOY</a>
            </li>
            <li className='footer__li'>
              <a href='#'>HABILIDADES</a>
            </li>
            <li className='footer__li'>
              <a href='#'>SERVICIOS</a>
            </li>
            <li className='footer__li'>
              <a href='#'>CONTACTO</a>
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
        <p>Texto</p>
        <article className='social'>
          <a href=''>
            <FaInstagram className='icon' />
          </a>
          <a href=''>
            <FaFacebookF className='icon' />
          </a>
        </article>
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
