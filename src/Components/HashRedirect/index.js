import { HashLink } from "react-router-hash-link";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -90;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

/**
 * @description Creates a hashed redirect with an offset
 * @param {any} to {pathname: the link to component, hash(optional) : jump to hashed div}
 * @param {any} style optional
 * @param {any} onClick optional
 * @param {ReactComponentElement} content
 * @returns
 */
export default function HashRedirect(props) {
  return (
    <HashLink
      smooth
      to={props.to}
      style={props.style}
      scroll={(el) => scrollWithOffset(el)}
      onClick={() => {
        if (!!props.onClick) props.onClick();
      }}
    >
      {props.content}
    </HashLink>
  );
}
