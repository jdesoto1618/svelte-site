<script>
  import userAvatar from "../assets/user-image.png";
  import { each } from "svelte/internal";
  import User from "./User.svelte";
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

  const getUsers = () => {
    return users;
  };
</script>

<div>
  <h1 class="user-heading">List of Users</h1>

  <div class="user-select-wrapper">
    <label for="user-type-select">User status:</label>
    <select class="user-type-select" name="user-filter">
      <option value="all">All</option>
      <option value="Active">Active</option>
      <option value="inactive">Inactive</option>
    </select>
  </div>

  <div class="user-container">
    {#each getUsers() as user}
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

  .user-select-wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 2rem;
  }

  .user-type-select {
    border-radius: 5px;
    border-color: lightsteelblue;
    padding: 0.5rem;
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
