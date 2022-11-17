<script>
  import { createEventDispatcher, loop_guard } from "svelte/internal";
  import { fade } from "svelte/transition";

  export let user;

  const dispatch = createEventDispatcher();
  const removeUser = () => {
    dispatch("removeUser", user.id);
  };
</script>

<div class="users-wrapper" transition:fade>
  <div class="user-image-wrapper">
    <button on:click={removeUser} class="remove-user-button">x</button>
    <img class="user-image" src={user.image} alt={user.image} />
  </div>
  <div class="user-card-copy-wrapper">
    <p class="user-name">{user.name}</p>
    <p class="user-email">{user.email}</p>
  </div>
</div>

<style>
  .users-wrapper {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding-top: 1rem;
    text-align: center;
  }

  .user-image-wrapper {
    position: relative;
  }

  .remove-user-button {
    font-weight: 700;
    position: absolute;
    top: -0.5rem;
    right: 0.5rem;
    border: none;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: #ff9999;
    color: var(--white);
    transition: background-color 0.3s ease;
  }

  .user-card-copy-wrapper {
    padding: 1rem;
  }

  .user-image {
    max-width: 125px;
  }

  .user-name {
    font-weight: 700;
  }

  @media (min-width: 992px) {
    .remove-user-button:hover {
      background: red;
    }
  }
</style>
