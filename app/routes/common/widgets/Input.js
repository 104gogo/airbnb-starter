import React, { PropTypes, Component } from 'react'
import classNames from 'classnames';

export default class Input extends Component {
  supportPlaceholder() {
    return "undefined" != typeof document && "placeholder" in document.createElement("input");
  }

  renderPlaceholderText() {
    var gotValue = this.props.value || this.props.initialValue || this.props.defaultValue;
    var needsPlaceholding = this.props.placeholder && !this.supportPlaceholder() && !gotValue;
    return (
      <span className={className("input-placeholder-label", "screen-reader-only":needsPlaceholding)}>
        {this.props.placeholder}
      </span>
    );
  }

  render() {
    var labelClass = classNames("input-placeholder-group", this.props.labelClass);
    var isTextarea = this.props.type === 'textarea';
    var props = Object.assign({}, this.props);
    //delete props[labelClass];

    return (
      <label className={labelClass}>
        {renderPlaceholderText()}
        {isTextarea &&
          <textarea ref="input" {...props}/>}
        {!isTextarea && 
          <input ref="input" {...props} />}
      </label>
    );
  }

}

Input.propTypes = { 
    className: PropTypes.string,
    labelClass: PropTypes.string,
    id: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    onCompositionStart: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.any
};

Input.defaultProps = {placeholder: 'please input here:'};
