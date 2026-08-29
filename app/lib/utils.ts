function generatePaginationNumbers(totalPages: number, currentPage: number) {
  if (totalPages < 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  //If current Page is on the first 3 pages then it is going to show 1 -> 2 -> 3 -> ... -> total - 2 -> total -1 -> total

  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  //If current Pages is on the last 3 it is going to be 1 -> 2 -> 3 -> ... ->total - 2 -> total- 1 -> total
  if (currentPage >= totalPages - 3) {
    return [1, 2, 3, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  //if the current page is somewhere in the middle then it is going to be 1 -> ... -> current -1 -> current -> current +1 -> ... -> total

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
}

export { generatePaginationNumbers };
