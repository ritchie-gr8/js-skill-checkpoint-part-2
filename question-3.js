// เริ่มเขียนโค้ดตรงนี้
const getUsers = async () => {
  return fetch("https://jsonplaceholder.typicode.com/users");
};

const getUserWithNameLength = async (length) => {
  try {
    const users = await getUsers();

    if (!users.ok) throw new Error("Cannot fetch users");

    const usersJson = await users.json();

    return usersJson.reduce((acc, user) => {
      if (user.name.length > length) {
        acc.push(user.name);
      }

      return acc;
    }, []);
  } catch (error) {
    console.error("Error:", error);
  }
};

const usersWitnNameLengthAbove17 = await getUserWithNameLength(17);
console.log(usersWitnNameLengthAbove17);
