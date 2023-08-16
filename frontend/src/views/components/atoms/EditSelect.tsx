import React, { useState } from 'react'
import Select from "react-select";
import { UserData } from "interfaces/index";

import Gender from "options/gender";
import Prefectures from "options/prefecture";
import Grade from "options/grade";
import Subject from "options/subject";
import Interest from "options/interest";
import Hobby from "options/hobby";

export interface EditSelectProps {
  selectTitle: string;
  general: { value: string; label: string } | null;
  onGeneralChange: Function;
  discrimination: string;
}


const EditSelect = ({ selectTitle, general, onGeneralChange, discrimination }: EditSelectProps) => {


  const handleGeneralChange = (selectedOption: any) => {
    onGeneralChange(selectedOption);
  };

  let options: { value: string; label: string }[] = [];

  if (discrimination === "gender") {
    options = Gender.GEN_OPTIONS.map(([value, label]) => ({
      value: value.toString(),
      label: label.toString(),
    }));
  } else if (discrimination === "grade") {
    options = Grade.GRD_OPTIONS.map(([value, label]) => ({
      value: value.toString(),
      label: label.toString(),
    }));
  } else if (discrimination === "subject") {
    options = Subject.SUB_OPTIONS.map(([value, label]) => ({
      value: value.toString(),
      label: label.toString(),
    }));
  } else if (discrimination === "prefecture" || discrimination === "birthplace") {
    options = Prefectures.PREF_OPTIONS.map(([value, label]) => ({
      value: value.toString(),
      label: label.toString(),
    }));
  }

  return (
    <div className="my-1">
      <div className="flex items-center">
        <b className="input-title">{selectTitle}</b>
        <p className="required">必須</p>
      </div>
      <Select
        className=""
        value={general}
        onChange={handleGeneralChange}
        options={options}
      />
    </div>
  )
}

export default EditSelect
