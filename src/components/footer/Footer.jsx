import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <h2>Max Llallire</h2>
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
      <p className='notice'>Recibe noticias de Max</p>
      <form className='form__notice'>
        <input type='email' placeholder='nombre@email.com' />
        <button>Suscribite</button>
      </form>
      <hr />
      <p className='footer__parraph'>2022 - CODERHOUSE</p>
    </footer>
  );
};
export default Footer;
