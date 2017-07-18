import * as PropTypes from 'prop-types'

export default PropTypes.shape({
  subscribe: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired,
  getThemeState: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired
})
