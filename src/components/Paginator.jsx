import React, { useState, useEffect } from "react";

const Paginator = ({ pageSelected, totalPages, currentPageProp }) => {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(currentPageProp);

  useEffect(() => {
    const pagesAux = [];
    for (let i = 0; i < totalPages; i++) {
      pagesAux.push(i + 1);
    }
    setPages(pagesAux);
  }, [totalPages,currentPageProp ]);

  const setPage = (page) => {
    setCurrentPage(page - 1);
    pageSelected(page - 1);
  };

  const back = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage);
      pageSelected(currentPage);
    }
  };

  const forward = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage);
      pageSelected(currentPage);
    }
  };

  return (
    <>
      <div className="pagination">
        <div onClick={back}>&laquo;</div>
        {pages.map((page) => {
          return (
            <div
              key={page}
              className={page === currentPage + 1 ? "active" : ""}
              onClick={() => setPage(page)}
            >
              {page}
            </div>
          );
        })}
        <div>{}</div>
        <div onClick={forward}>&raquo;</div>
      </div>
    </>
  );
};

export default Paginator;
