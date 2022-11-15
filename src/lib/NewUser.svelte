<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<button class="add-user-button">Add User</button>

<style>
  .add-user-button {
    font-size: clamp(1rem, 5%, 2rem);
    font-weight: 600;
    cursor: pointer;
    border: none;
    border-radius: 0.25rem;
    background-color: hsl(158, 85%, 48%);
    color: var(--white);
    padding: 0.75rem 1.75rem;
  }

  @media (min-width: 992px) {
    .add-user-button {
      transition: background-color 0.3s ease;
    }

    .add-user-button:hover {
      background-color: hsl(158 85% 65%);
    }
  }
</style>
