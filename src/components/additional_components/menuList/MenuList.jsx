import MobileMenuCloseButton from "../mobileMenuCloseButton";
import Link from "../scrollLink";
import { MENU_ITEMS } from "../../../constants/content";

const MenuList = ({ additionalClickEvent }) => {
  return (
    <ul>
      <li>
        <MobileMenuCloseButton onClickEvent={additionalClickEvent} />
      </li>
      {MENU_ITEMS.map((item) => {
        return (
          <li key={item.linkId}>
            <Link
              key={item.linkId}
              additionalClickEvent={additionalClickEvent}
              toId={item.linkId}
              className="menu_link"
            >
              {item.linkText}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuList;
