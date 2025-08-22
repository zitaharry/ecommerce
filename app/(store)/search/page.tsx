import React from "react";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { query: string };
}) => {
  const { query } = searchParams;

  return <div>SearchPage for {query}</div>;
};
export default SearchPage;
