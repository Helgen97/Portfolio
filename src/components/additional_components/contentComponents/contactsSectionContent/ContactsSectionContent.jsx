import { CONTACTS_SECTION_CONTENT } from "../../../../constants/content";
import ContactBlock from "../../contactBlock/ContactBlock";

const ContactsSectionContent = () => {
  return (
    <div className="content">
      <div className="contact-box">
        {CONTACTS_SECTION_CONTENT.map((contact) => (
          <ContactBlock
            key={contact.label}
            label={contact.label}
            link={contact.link}
            linkText={contact.linkText}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactsSectionContent;
