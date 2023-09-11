import Link from "../scrollLink";
import ToTopButtonSvg from "../../svg/toTopButtonSvg";

const ToTopButtonContainer = () => {
  return (
    <div className="toTopButton_container">
      <Link toId="top">
        <ToTopButtonSvg />
      </Link>
    </div>
  );
};

export default ToTopButtonContainer;
