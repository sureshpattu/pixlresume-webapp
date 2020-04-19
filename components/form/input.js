import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * InputBox Client invoice detail input box component
 * @extends Component
 */
class Input extends Component {
  /**
   * constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * render
   * @return {JSX}
   */
  render() {
    const {
      title,
      type,
      id,
      name,
      value,
      placeholder,
      rows,
      cols,
      themeClass = '',
      extraClass = '',
      onChange,
    } = this.props;
    let labelHtml;
    let inputHtml;
    if (title) {
      labelHtml = (<label className="control-label">{title}</label>);
    }
    if (type) {
      switch (type) {
      case 'text':
        inputHtml = (
          <input
            placeholder={placeholder ? placeholder : title ? title : null}
            value={value}
            id={id}
            name={name}
            onChange={onChange}
            className={`text-input ${extraClass}`}/>
        );
        break;
      case 'textarea':
        inputHtml = (
          <textarea
            placeholder={placeholder ? placeholder : title ? title : null}
            value={value}
            rows={rows ? rows : 'auto'}
            cols={cols ? cols : 'auto'}
            id={id}
            name={name}
            onChange={onChange}
            className={`textarea-input ${extraClass}`}/>
        );
        break;
      default:
        break;
      }
    }
    return (
      <div className={`form-group ${themeClass}`}>
        {labelHtml}
        <div className="box_sec">
          {inputHtml}
        </div>
      </div>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  themeClass: PropTypes.string,
  extraClass: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
};

export default Input;
