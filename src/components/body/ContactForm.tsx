import "./ContactForm.css";
import Image from "next/image";

type ContactFormProps = {
  formDescription: string;
  imageSrc: string;
  imageAlt: string;
};

const ContactForm = ({
  formDescription,
  imageSrc,
  imageAlt,
}: ContactFormProps) => {
  return (
    <div className="contact__container">
      <Image
        width={600}
        height={300}
        layout="responsive"
        className="contact__img"
        src={imageSrc}
        alt={imageAlt}
      />
      <div className="contact__form--container">
        <h1>Contact</h1>
        <p>{formDescription} </p>
        <form className="contact__form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
