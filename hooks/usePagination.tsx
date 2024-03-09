import { useState } from "react";

const usePagination = (data: any[], itemsPerPage: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = data.length === 0 ? 1 : Math.ceil(data.length / itemsPerPage);

  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  };

  const next = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  };

  const prev = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    9;
  };

  const jump = (page: any) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  };

  return {
    next,
    prev,
    jump,
    currentData,
    currentPage,
    setCurrentPage,
    maxPage,
  };
};

export default usePagination;
