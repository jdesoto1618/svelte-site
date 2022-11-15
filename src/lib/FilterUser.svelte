<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const filterUsers = (event) => {
    dispatch("filter", event.target.value);
  };
</script>

<div class="user-select-wrapper">
  <label for="user-type-select">User status:</label>
  <select on:change={filterUsers} class="user-type-select" name="user-filter">
    <option value={null}>All</option>
    <option value={true}>Active</option>
    <option value={false}>Inactive</option>
  </select>
</div>

<style>
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
</style>
