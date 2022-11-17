import { writable } from "svelte/store";
import userAvatar from "/src/assets/user-image.png";

export const users = writable([
  {
    id: 1,
    image: userAvatar,
    name: "John1",
    email: "johnsemail1@email.com",
    active: false,
  },
  {
    id: 2,
    image: userAvatar,
    name: "John2",
    email: "johnsemail2@email.com",
    active: true,
  },
  {
    id: 3,
    image: userAvatar,
    name: "John3",
    email: "johnsemail3@email.com",
    active: false,
  },
  {
    id: 4,
    image: userAvatar,
    name: "John4",
    email: "johnsemail4@email.com",
    active: false,
  },
]);

export const removeUser = ({ detail }) => {
  users.update((_users) => _users.filter((user) => user.id !== detail));
};

export const addNewUser = ({ detail }) => {
  users.update((_users) => [
    {
      id: _users.length + 1,
      image: _users[0].image,
      ...detail,
    },
    ..._users,
  ]);
};
