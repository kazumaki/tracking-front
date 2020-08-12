import PropTypes from 'prop-types';

const measurementShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  created_at: PropTypes.instanceOf(Date),
});

const measurementsShape = PropTypes.objectOf({
  measurementShape,
});

const measurementTypeShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
});

export { measurementsShape, measurementShape, measurementTypeShape };
