interface PagePaginationProps {
  next: VoidFunction;
  prev: VoidFunction;
  currentPage: any;
  maxPage: any;
}

function PagePagination({
  next,
  prev,
  currentPage,
  maxPage,
}: PagePaginationProps) {
  return (
    <div className="flex justify-between items-center mx-5 mb-6">
      <p className="text-base sm:text-xl text-darkBlue">
        <strong>Página {currentPage}</strong> de {maxPage}
      </p>
      <nav aria-label="Page navigation">
        <ul className="flex list-style-none ">
          <li>
            <button
              onClick={prev}
              className={`${
                currentPage <= 1
                  ? "hover:bg-none cursor-default pointer-events-none text-gray-400"
                  : "hover:bg-gray-200 cursor-pointer text-gray-800"
              } page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none`}
              aria-disabled={currentPage <= 1}
              aria-label="Previous"
            >
              <i className="bx bx-chevrons-left text-2xl align-middle"></i>
            </button>
          </li>
          <li>
            <button
              onClick={next}
              className={`${
                currentPage >= maxPage
                  ? "hover:bg-none cursor-default pointer-events-none text-gray-400"
                  : "hover:bg-gray-200 cursor-pointer text-gray-800"
              } page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none`}
              aria-label="Next"
              aria-disabled={currentPage >= maxPage}
            >
              <i className="bx bx-chevrons-right text-2xl align-middle"></i>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PagePagination;
