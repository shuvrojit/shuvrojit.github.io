import ContactForm from "@/components/body/ContactForm";

const ContactPage = () => {
  return (
    <>
      <ContactForm
        formDescription="If you have any questions or concerns, please feel free to contact us. We will get back to you as soon as possible."
        imageSrc="/images/contact.svg"
        imageAlt="Contact Us"
      />
    </>
  );
};

export default ContactPage;
