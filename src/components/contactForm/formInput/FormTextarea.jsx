import React from 'react';
import './FormTextarea.scss';

function FormTextarea({
  label, id, name, type, placeholder, required, onChange, text = '', borderBottom, labelColor, customId,
}) {
  return (
    <div className="input-group">
      <label htmlFor={id} name={name} style={labelColor}>{label}</label>
      <textarea id={id} name={name} type={type} placeholder={placeholder} required={required} onChange={onChange} value={text} style={{ borderBottom: `${borderBottom}` }} data-custom-id={customId} />
    </div>
  );
}

export default FormTextarea;
