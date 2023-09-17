import { Link as Scroll } from "react-scroll";

const Link = ({ toId, className, children, additionalClickEvent }) => {

  const onClick = () => {
    additionalClickEvent && additionalClickEvent();
  }

  return (
    <Scroll to={toId} onClick={onClick} className={className} smooth nofollow>
      {children}
    </Scroll>
  );
};

export default Link;
