import React from "react";
import { UserTagData } from "interfaces/index";

export interface TableTrProps {
  trTitle: string;
  trData: UserTagData[];
}

const TableTrResearchTag = ({ trTitle, trData }: TableTrProps) => {
  const trStyle: React.CSSProperties = {
    display: "block",
    borderBottom: "1px solid #eee",
    margin: "10px 0 0",
    paddingBottom: "5px",
  };
  const tdLeftStyle: React.CSSProperties = {
    fontSize: "14px",
    fontWeight: 600,
    width: "80px",
  };
  const tdRightStyle: React.CSSProperties = {
    fontSize: "14px",
    whiteSpace: "pre-wrap",
  };

  return (
    <tr style={trStyle}>
      <td style={tdLeftStyle}>{trTitle}</td>
      <td style={tdRightStyle}>
        <div className="flex flex-wrap">
          {trData.map((tag) => (
            <p
              key={tag.id}
              className="bg-blue-base rounded-3xl text-white py-1 px-3 mr-1 mb-1"
            >
              {tag.tagName}
            </p>
          ))}
        </div>
      </td>
    </tr>
  );
};

export default TableTrResearchTag;
