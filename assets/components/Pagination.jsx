import React from "react";

const Pagination = ({ currentPage, itemsPerPage, length, onPageChanged }) => {
  const pagesCount = Math.ceil(length / itemsPerPage);
  const pages = [];

  for (let index = 1; index <= pagesCount; index++) {
    pages.push(index);
  }
  return (
    <div>
      <ul className="pagination pagination-sm">
        <li className={"page-item" + (currentPage === 1 && " disabled")}>
          <button
            className="page-link"
            onClick={() => onPageChanged(currentPage - 1)}
          >
            &laquo;
          </button>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={"page-item" + (currentPage === page && " active")}
          >
            <button className="page-link" onClick={() => onPageChanged(page)}>
              {page}
            </button>
          </li>
        ))}
        <li
          className={"page-item" + (currentPage === pagesCount && " disabled")}
        >
          <button
            className="page-link"
            onClick={() => onPageChanged(currentPage + 1)}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </div>
  );
};

Pagination.getData = (items, currentPage, itemsPerPage) => {
      // d'où on part (start) pendant combien (itemsPerPage)
  const start = currentPage*itemsPerPage - itemsPerPage;
  return items.slice(start, start + itemsPerPage);

};

export default Pagination;
