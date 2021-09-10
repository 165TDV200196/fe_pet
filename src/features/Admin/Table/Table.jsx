import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "../../../sass/Admin/Table.scss";
import { dot, edit, trash } from "../svg/IconSvg";
import { showAction } from "./TableJs";
export default function Table({
  dataSource,
  titleTable,
  onchangeEdit,
  onchangeDelete,
}) {
  const tableEl = useRef(null);
  useEffect(() => {
    showAction(tableEl.current);
  }, []);

  let arrTitle = [];
  for (let i = 0; i < titleTable.length; i++) {
    arrTitle.push(titleTable[i].name);
  }

  return (
    <div className="tableAdmin">
      <div className="search"></div>
      <table ref={tableEl}>
        <div className="blurJs"></div>
        <tr className="title">
          {titleTable.map((ok) => (
            <th>
              <p>{ok.title}</p>
            </th>
          ))}
        </tr>
        {dataSource.map((ok, index) => (
          <tr className="content" key={ok.key}>
            {arrTitle.map((oki, index1) => (
              <td>{ok[oki]}</td>
            ))}
            <td>
              <div className="action">{dot}</div>
            </td>
            <div className="action-content action-hident">
              <ul>
                <li>
                  <Link
                    onClick={() => {
                      onchangeDelete(ok.key);
                    }}
                  >
                    <div className="icon">{trash}</div>
                    <div className="text">Xoá</div>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      onchangeEdit(ok.key);
                    }}
                  >
                    <div className="icon">{edit}</div>
                    <div className="text">Sửa</div>
                  </Link>
                </li>
              </ul>
            </div>
          </tr>
        ))}
      </table>
    </div>
  );
}
