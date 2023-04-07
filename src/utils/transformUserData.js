export const transformUserData = user => {
  const newUser = {
    name: user.name,
    email: user.email,
    avatarURL: user.avatarURL,
    avatarCloudId: user.avatarCloudId,
    favoritsRecipe: [...user.favoritsRecipe],
    shoppingList: [...user.shoppingList],
  };
  return newUser;
};
