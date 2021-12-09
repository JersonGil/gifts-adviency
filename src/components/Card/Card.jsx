import { Fragment } from "react";

import PropTypes from "prop-types";
import CardContainer from "./styles";

const Card = ({ children, ...props }) => {
  return (
    <Fragment>
      <CardContainer className="card" {...props}>
        {children}
      </CardContainer>
    </Fragment>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object)
  ])
};

//
// Card.Head Component
//
Card.Header = ({ children, ...props }) => (
  <CardContainer.Header {...props}>{children}</CardContainer.Header>
);

//
// Types
//
Card.Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.object)
  ])
};

Card.Header.displayName = "Card.Header";

//
// Card.Body Component
//
Card.Body = ({ children, ...props }) => (
  <CardContainer.Body {...props}>{children}</CardContainer.Body>
);

//
// Types
//
Card.Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.object)
  ])
};

Card.Body.displayName = "Card.Body";

//
// Card.Footer Component
//
Card.Footer = ({ children, ...props }) => (
  <CardContainer.Footer {...props}>{children}</CardContainer.Footer>
);

//
// Types
//
Card.Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.object)
  ])
};

Card.Footer.displayName = "Card.Footer";

export default Card;
