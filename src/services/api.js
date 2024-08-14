export const fetchVendors = async () => {
  const response = await fetch("/raw.json");
  const data = await response.json();
  return data;
};
