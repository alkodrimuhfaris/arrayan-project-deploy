export default ({
  maxPage,
  currentPage,
  setPages = (a) => a,
  setPrevElipsis = (a) => a,
  setNextElipsis = (a) => a,
}) => {
  if (maxPage <= 5) {
    const p = [];
    for (let i = 1; i <= maxPage; i++) {
      p.push(i);
    }
    setPages(p);
  } else if (currentPage <= 3 && maxPage > 5) {
    setPages([1, 2, 3, 4, 5]);
    setPrevElipsis(false);
    if (maxPage > 5) {
      setNextElipsis(true);
    }
  } else if (maxPage - currentPage <= 2 && maxPage > 5) {
    const p = [];
    for (let i = maxPage - 4; i <= maxPage; i++) {
      p.push(i);
    }
    setPages(p);
    setNextElipsis(false);
    if (maxPage - 5 > 1) {
      setPrevElipsis(true);
    }
  } else {
    const p = [];
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      p.push(i);
    }
    setPages(p);
    setNextElipsis(true);
    setPrevElipsis(true);
  }
};
