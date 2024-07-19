import React from 'react';
import './FormTextarea.scss';

function FormTextarea({
  label, id, name, placeholder, required, onChange, text = '', borderBottom, labelColor, customId,
}) {
  return (
    <div className="input-group">
      <label
        htmlFor={id}
        name={name}
        style={labelColor}
      >
        {label}
      </label>
      <textarea
        className="textarea"
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={text}
        style={{ borderBottom: `${borderBottom}` }}
        data-custom-id={customId}
      />
    </div>
  );
}

export default FormTextarea;
