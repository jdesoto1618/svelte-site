<script>
  import userAvatar from "../assets/user-image.png";
  import { each } from "svelte/internal";
  let users = [
    {
      id: 1,
      image: userAvatar,
      name: "John1",
      email: "johnsemail1@email.com",
    },
    {
      id: 2,
      image: userAvatar,
      name: "John2",
      email: "johnsemail2@email.com",
    },
    {
      id: 3,
      image: userAvatar,
      name: "John3",
      email: "johnsemail3@email.com",
    },
    {
      id: 4,
      image: userAvatar,
      name: "John4",
      email: "johnsemail4@email.com",
    },
  ];

  const getUsers = () => {
    return users;
  };
</script>

<div>
  <h1>List of Users</h1>
  <div>
    {#each getUsers() as { name, image, email, id }, index (id)}
      <img src={image} alt={image} />
      <p>{name}</p>
      <p>{email}</p>
    {:else}
      <p>No users found!</p>
    {/each}
  </div>
</div>
