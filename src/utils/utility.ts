export const filterByTitle = (data: any[], titles: string[]) => {
  if (titles.length === 0) {
    return data;
  }
  return data.filter((item) => titles.includes(item.title));
};
