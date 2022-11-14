<script>
  import userAvatar from "../assets/user-image.png";
  import { each } from "svelte/internal";
  let users = [
    {
      image: userAvatar,
      name: "John1",
      email: "johnsemail1@email.com",
    },
    {
      image: userAvatar,
      name: "John2",
      email: "johnsemail2@email.com",
    },
    {
      image: userAvatar,
      name: "John3",
      email: "johnsemail3@email.com",
    },
    {
      image: userAvatar,
      name: "John4",
      email: "johnsemail4@email.com",
    },
  ];
</script>

<div>
  <h1>List of Users</h1>
  <div>
    {#each users as user}
      <img src={user.image} alt={user.image} />
      <p>{user.name}</p>
      <p>{user.email}</p>
    {/each}
  </div>
</div>
