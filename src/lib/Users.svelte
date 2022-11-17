<script>
  import { each } from "svelte/internal";
  import { onMount } from "svelte";
  import { cubicIn } from "svelte/easing";
  import { tweened } from "svelte/motion";
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

  const progressBar = tweened(0, {
    duration: 1000,
    easing: cubicIn,
  });

  onMount(() => {
    progressBar.set(filteredUsers.length);
  });
</script>

<div>
  <h1 class="user-heading">List of Users</h1>

  <div class="user-controls-wrapper">
    <FilterUser on:filter={filterUsers} />
    <NewUser on:newUser={addNewUser} />
  </div>

  <progress class="progress-bar" max="10" min="0" value={$progressBar} />

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

  .progress-bar {
    width: 100%;
    margin-bottom: 2rem;
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
