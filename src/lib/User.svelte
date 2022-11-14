<script>
  export let image;
  export let name;
  export let email;
  export let index;
</script>

<div class="users-wrapper">
  <img class="user-image" src={image} alt={image} />
  <div class="user-card-copy-wrapper">
    <p class="user-name">{name}</p>
    <p class="user-email">{email}</p>
  </div>
</div>

<style>
  .users-wrapper {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding-top: 1rem;
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
