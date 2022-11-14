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
  <h1 class="user-heading">List of Users</h1>
  <div class="user-container">
    {#each getUsers() as { name, image, email, id }, index (id)}
      <div class="users-wrapper">
        <img class="user-image" src={image} alt={image} />
        <p class="user-name">{name}</p>
        <p class="user-email">{email}</p>
      </div>
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

  .user-image {
    max-width: 125px;
  }

  .user-name {
    font-weight: 700;
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
