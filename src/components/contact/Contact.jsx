import chat from "./../../assets/image/chat.png";
import chat2 from "./../../assets/image/chatDesktop.png";
import whatsapp from "./../../assets/image/whatsapp.png";
import email from "./../../assets/image/icons/email.png";
import phone from "./../../assets/image/icons/phone.png";
import facebook from "./../../assets/image/icons/facebook.png";
import instagram from "./../../assets/image/icons/instagram.png";

const Contact = () => {
  return (
    <section className='container__contact'>
      <section className='container__contact--desktop'>
        <section className='content__contact--desktop'>
          <section className='content__contact--text'>
            <img className='image' src={chat} alt='Imagen para contactos' />
            <h2 className='subtitle'>¿Aún tienes dudas? ¡Contáctame!</h2>
            <section className='section__contact--text-desktop'>
              <p className='text__red desktop'>CONTACTAME</p>
              <h2 className='subtitle hidden'>Hablemos sobre tu proyecto</h2>
              <div className='content__decoration'>
                <div className='decoration'></div>
              </div>
            </section>
            <p className='parraph image'>
              Ofrecer un medio directo de comunicación. Puede ser un
              contacto@maxllallire.com.ar ¡O cree un formulario al costado para
              ponerse en contacto lo antes posible!
            </p>
            <article className='container__whatsapp'>
              <article className='content__social'>
                <img className='image' src={whatsapp} alt='Ícono de Whatsapp' />
                <p className='image'>¡Oye! ¡Estamos en whatsapp!</p>
              </article>
              <article className='content__social'>
                <img className='desktop' src={email} alt='Ícono de Whatsapp' />
                <p className='desktop'>maximollallire@gmail.com</p>
              </article>
              <article className='content__social'>
                <img className='desktop' src={phone} alt='Ícono de Whatsapp' />
                <p className='desktop'>1123921321</p>
              </article>
            </article>
          </section>
          <section className='content__contact--social desktop'>
            <p>Sigamos en contacto </p>
            <section>
              <a className='contact__a' href=''>
                <img src={instagram} alt='Ícono de Instagram' />
              </a>
              <a className='contact__a' href=''>
                <img src={facebook} alt='Ícono de Facebook' />
              </a>
            </section>
          </section>
        </section>
        <form className='form__contact' action=''>
          <div className='form__container--image'>
            <img className='desktop' src={chat2} alt='Imagen para contactos' />
          </div>
          <div>
            <label htmlFor=''>Name</label>
            <input type='text' placeholder='Nombre' />
          </div>
          <div>
            <label htmlFor=''>Email</label>
            <input type='email' placeholder='Email' />
          </div>
          <div>
            <label htmlFor=''>Telefone</label>
            <input type='number' placeholder='+51 11 9999 9999' />
          </div>
          <div>
            <label htmlFor=''>Mensaje</label>
            <input type='text' placeholder='Mensaje' />
          </div>
          <button>Enviar</button>
        </form>
      </section>
    </section>
  );
};
export default Contact;
