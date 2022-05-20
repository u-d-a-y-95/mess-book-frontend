export const getUsers = async (setter) => {
  try {
    const result = await (await fetch("http://localhost:4000/api/users/")).json();
    setter(result)
  } catch (error) {
    setter([]);
  }
};
