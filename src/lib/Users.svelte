<script>
  import userAvatar from "../assets/user-image.png";
  import { each } from "svelte/internal";
  import User from "./User.svelte";
  import FilterUser from "./FilterUser.svelte";
  let users = [
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
  ];

  let filteredUsers = users;

  const filterUsers = ({ detail }) => {
    if (detail === "null") {
      filteredUsers = users;
      return false;
    }
    const userStatus = detail === "true";
    filteredUsers = users.filter((user) => user.active === userStatus);
  };
</script>

<div>
  <h1 class="user-heading">List of Users</h1>

  <FilterUser on:filter={filterUsers} />

  <div class="user-container">
    {#each filteredUsers as user}
      <User {user} />
    {:else}
      <p>No users found!</p>
    {/each}
  </div>
</div>

<style>
  .user-heading {
    text-align: center;
    color: var(--dark-font-color);
    margin-bottom: 4rem;
  }

  .user-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
  }

  @media (min-width: 768px) {
    .user-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 992px) {
    .user-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
