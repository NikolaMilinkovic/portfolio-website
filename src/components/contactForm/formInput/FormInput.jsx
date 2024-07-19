import React from 'react';
import './FormInput.scss';

function FormInput({
  label, id, name, type, placeholder, required, onChange, text = '', borderBottom, labelColor, customId,
}) {
  return (
    <div className="input-group">
      <label htmlFor={id} name={name} style={labelColor}>{label}</label>
      <input id={id} name={name} type={type} placeholder={placeholder} required={required} onChange={onChange} value={text} style={{ borderBottom: `${borderBottom}` }} data-custom-id={customId} />
    </div>
  );
}

export default FormInput;
