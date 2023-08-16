import React from "react";

interface EditInputProps {
  inputTitle: string;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const EditInput = ({
  inputTitle,
  inputValue,
  setInputValue,
}: EditInputProps) => {
  return (
    <div className="">
      <div className="flex items-center">
        <b className="input-title">{inputTitle}</b>
        <p className="required">必須</p>
      </div>
      <input
        type="text"
        placeholder=""
        className="input-text"
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value);
        }}
      />
    </div>
  );
};

export default EditInput;
