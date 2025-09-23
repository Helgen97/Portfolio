import { memo } from "react";
import { CONTACTS_SECTION_CONTENT } from "../../../../constants/content";
import ContactBlock from "../../contactBlock/ContactBlock";

/**
 * A React component that renders the contacts section content.
 * Maps contact data to ContactBlock components within a contact box.
 * @returns {JSX.Element} The contacts section content
 */
const ContactsSectionContent = () => {
  return (
    <div className="content" role="region" aria-label="Contacts section">
      <div className="contact-box" role="list" aria-label="Contact list">
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

export default memo(ContactsSectionContent);
