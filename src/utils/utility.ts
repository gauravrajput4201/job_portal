export const filterByTitle = (data: any[], titles: string[]) => {
  if (titles.length === 0) {
    return data;
  }
  return data.filter((item) => titles.includes(item.title));
};
export const filterByIds = (data: any[], ids: string[]) => {
  if (ids.length === 0) {
    return [];
  }
  return data.filter((item) => ids.includes(item.id));
};

export const getNamePrefix = (fullName: any) => {
  if (!fullName) return "GS";

  const nameParts = fullName.split(" ");
  if (nameParts.length < 2) return "";

  // Get the first letter of the first and last name
  const firstNameInitial = nameParts[0][0].toUpperCase();
  const lastNameInitial = nameParts[nameParts.length - 1][0].toUpperCase();

  return firstNameInitial + lastNameInitial;
};
