import React from "react";
import PropTypes from "prop-types";
import nodata from "../../assets/images/nodata.png";
import moment from "moment";
import { shortenUrlApi } from "../../services/AJAX";
export default function TableBuilder(props) {
  let { tableBodyConf } = props;
  if (tableBodyConf.length)
    return (
      <div class="table-wrapper-scroll-y my-custom-scrollbar">
        <table className="table custom-table">
          {tableHeading(props)}
          {tableBody(props)}
        </table>
      </div>
    );
  else
    return (
      <div className="no-data">
        <img src={nodata} alt="nodata" />
      </div>
    );
}

const tableHeading = ({ tableHeaderConf }) => {
  let headerList = tableHeaderConf.map((item) => {
    let { label } = item;
    return <th>{label}</th>;
  });
  return (
    <thead>
      <tr>{headerList}</tr>
    </thead>
  );
};

const tableBody = ({ tableBodyConf, onDelete }) => {
  let bodyList = tableBodyConf.map((item, idx) => {
    let { expandedUrl, shortenedUrl, creationDate, urlId } = item;
    return (
      <tr>
        <th scope="row">{idx + 1}</th>
        <td>
          {
            <a
              href={`${shortenUrlApi}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {shortenedUrl}
            </a>
          }
        </td>
        <td>{expandedUrl}</td>
        <td>{moment(creationDate).format("L")}</td>
        <td>
          <button
            className="btn btn-primary text-uppercase"
            onClick={() => onDelete(urlId)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return <tbody>{bodyList}</tbody>;
};

TableBuilder.propTypes = {
  tableBodyConf: PropTypes.array,
  tableHeaderConf: PropTypes.array,
};
