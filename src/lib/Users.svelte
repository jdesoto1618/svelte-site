<script>
  import { each } from "svelte/internal";
  import User from "./User.svelte";
  import FilterUser from "./FilterUser.svelte";
  import NewUser from "./NewUser.svelte";
  import { users, addNewUser, removeUser } from "../store";

  $: filteredUsers = $users;

  const filterUsers = ({ detail }) => {
    if (detail === "null") {
      filteredUsers = $users;
      return false;
    }
    const userStatus = detail === "true";
    filteredUsers = $users.filter((user) => user.active === userStatus);
  };
</script>

<div>
  <h1 class="user-heading">List of Users</h1>

  <div class="user-controls-wrapper">
    <FilterUser on:filter={filterUsers} />
    <NewUser on:newUser={addNewUser} />
  </div>

  <div class="user-container">
    {#each filteredUsers as user}
      <User on:removeUser={removeUser} {user} />
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

  .user-controls-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 2rem;
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
    .user-controls-wrapper {
      flex-direction: row;
      justify-content: space-between;
    }

    .user-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
