import React, { useState } from "react";
import { Input } from "antd";


const FloatInput = (props) => {
  const [focus, setFocus] = useState(false);
  let { label, value, placeholder, type, required } = props;

  if (!placeholder) placeholder = label;

  const isOccupied = focus || (value && value.length !== 0);

  const labelClass = isOccupied ? "label as-label" : "label as-placeholder";

  const requiredMark = required ? <span className="text-danger">*</span> : null;

  return (
    <div
      className="float-label"
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >   
    {
        type==='password'?
        (<Input onChange={props.onChange} type={type} defaultValue={value} style={{height: '56px'}}/>)
        :
        (<Input onChange={props.onChange} type={type} defaultValue={value} style={{height: '56px'}}/>)
    }
      {/* <Input onChange={props.onChange} type={type} defaultValue={value} style={{height: '56px'}}/> */}
      <label className={labelClass} style={{height: 'fit-content'}}>
        {isOccupied ? label : placeholder} {requiredMark}
      </label>
    </div>
  );
};

export default FloatInput;
