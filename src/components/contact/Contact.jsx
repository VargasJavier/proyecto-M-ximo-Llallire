import chat from "./../../assets/image/chat.png";
import chat2 from "./../../assets/image/chatDesktop.png";
import whatsapp from "./../../assets/image/whatsapp.png";

const Contact = () => {
  return (
    <section className='container__contact'>
      <img className='image' src={chat} alt='Imagen para contactos' />
      <img className='desktop' src={chat2} alt='Imagen para contactos' />
      <h2 className='subtitle'>¿Aún tienes dudas? ¡Contáctame!</h2>
      <h2 className='subtitle hidden'>Hablemos de tu proyecto</h2>
      <div className='content__decoration'>
        <div className='decoration'></div>
      </div>
      <section className='container__contact--desktop'>
        <section className='content__contact--desktop'>
          <p className='parraph'>
            Ofrecer un medio directo de comunicación. Puede ser un
            contacto@maxllallire.com.ar ¡O cree un formulario al costado para
            ponerse en contacto lo antes posible!
          </p>
          <article className='container__whatsapp'>
            <img src={whatsapp} alt='Ícono de Whatsapp' />
            <p>¡Oye! ¡Estamos en whatsapp!</p>
          </article>
        </section>
        <form className='form__contact' action=''>
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
          <button>Enviar</button>
        </form>
      </section>
    </section>
  );
};
export default Contact;
