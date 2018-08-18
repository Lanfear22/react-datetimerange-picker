import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { getISOLocalDateTime } from './shared/dates';

export default class ValidityOptions extends PureComponent {
  onMinChange = (event) => {
    const { setState } = this.props;

    const { value } = event.target;

    setState({ minDate: value ? new Date(value) : null });
  }

  onMaxChange = (event) => {
    const { setState } = this.props;

    const { value } = event.target;

    setState({ maxDate: value ? new Date(value) : null });
  }

  render() {
    const {
      maxDate, minDate, required, setState,
    } = this.props;

    return (
      <fieldset id="ValidityOptions">
        <legend htmlFor="ValidityOptions">
          Minimum and maximum date
        </legend>

        <div>
          <label htmlFor="minDatetime">
            Minimum date
          </label>
          <input
            id="minDatetime"
            onChange={this.onMinChange}
            type="datetime-local"
            value={minDate ? getISOLocalDateTime(minDate) : ''}
          />
          &nbsp;
          <button
            onClick={() => setState({ minDate: null })}
            type="button"
          >
            Clear
          </button>
        </div>

        <div>
          <label htmlFor="maxDatetime">
            Maximum date
          </label>
          <input
            id="maxDatetime"
            onChange={this.onMaxChange}
            type="datetime-local"
            value={maxDate ? getISOLocalDateTime(maxDate) : ''}
          />
          &nbsp;
          <button
            onClick={() => setState({ maxDate: null })}
            type="button"
          >
            Clear
          </button>
        </div>

        <div>
          <input
            id="required"
            type="checkbox"
            checked={required}
            onChange={event => setState({ required: event.target.checked })}
          />
          <label htmlFor="required">
            Required
          </label>
        </div>
      </fieldset>
    );
  }
}

ValidityOptions.propTypes = {
  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  required: PropTypes.bool,
  setState: PropTypes.func.isRequired,
};
