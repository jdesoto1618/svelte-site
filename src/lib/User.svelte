<script>
  export let user;
</script>

<div class="users-wrapper">
  <img class="user-image" src={user.image} alt={user.image} />
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

  .user-card-copy-wrapper {
    padding: 1rem;
  }

  .user-image {
    max-width: 125px;
  }

  .user-name {
    font-weight: 700;
  }
</style>
