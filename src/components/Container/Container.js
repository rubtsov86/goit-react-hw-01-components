import PropTypes from 'prop-types';

export default function Container({ children }) {
  return <div className="section">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node,
};
