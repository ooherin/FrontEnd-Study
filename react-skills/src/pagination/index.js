import Pagination from "./Pagination.js";

// totalDataCount, perPage, page, pagePerGroup

const PaginationPage = () => {
  const props = { totalDataCount: 300, perPage: 10, page: 1, pagePerGroup: 10 };
  return <Pagination props={props} />;
};

export default PaginationPage;
