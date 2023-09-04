const ContactBlock = ({ label, link, linkText }) => {
  return (
    <div className="contact-box__container">
      <p className="contact-box__label">{label}</p>
      <p className="contact-box__content">
        {!link && linkText}
        {link && <a href={link} target="_blank">{linkText}</a>}
      </p>
    </div>
  );
};

export default ContactBlock;
