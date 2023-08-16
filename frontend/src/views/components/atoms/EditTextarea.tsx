import React from "react";

interface EditTextareaProps {
  inputTitle: string;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const EditTextarea = ({ inputTitle, inputValue, setInputValue }: EditTextareaProps) => {
  return (
    <div className="input-part">
      <div className="flex items-center">
        <b className="input-title">{inputTitle}</b>
        <p className="required">必須</p>
      </div>
      <textarea
        placeholder="introduce"
        className="input-text whitespace-pre-wrap h-40"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></textarea>
    </div>
  )
}

export default EditTextarea
