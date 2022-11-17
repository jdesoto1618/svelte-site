<script>
  import { createEventDispatcher, onMount } from "svelte";
  import AddUserModal from "./AddUserModal.svelte";
  const dispatch = createEventDispatcher();

  let newUser = {};
  let showModal = false;

  const handleForm = () => {
    dispatch("newUser", newUser);
    showModal = false;
  };

  onMount(() => {
    const submitButton = document.querySelector(".form-submit-button");
    if (!newUser.name || !newUser.email) {
      submitButton.setAttribute("disabled", "true");
    }
  });

  $: disableSubmitButton = !newUser.name || !newUser.email;
</script>

<button on:click={() => (showModal = true)} class="add-user-button"
  >Add User</button
>

<AddUserModal
  on:closeModal={() => (showModal = false)}
  on:submit={handleForm}
  show={showModal}
>
  <h2 class="modal-heading">Add new user</h2>

  <div class="form-input-wrapper new-username">
    <label for="username">Username</label>
    <input
      bind:value={newUser.name}
      class="modal-input username"
      type="text"
      name="username"
    />
  </div>

  <div class="form-input-wrapper new-email">
    <label for="user-email">Email</label>
    <input
      bind:value={newUser.email}
      class="modal-input email"
      type="email"
      name="user-email"
    />
  </div>

  <div class="form-input-wrapper active-user">
    <p>Active?</p>
    <div class="active-user-wrapper">
      <label for="active">Yes</label>
      <input
        bind:group={newUser.active}
        value={true}
        class="active-input active"
        type="radio"
        name="active"
      />

      <label for="inactive">No</label>
      <input
        bind:group={newUser.active}
        value={false}
        class="active-input inactive"
        type="radio"
        name="inactive"
      />
    </div>
  </div>

  <button
    type="submit"
    disabled={disableSubmitButton}
    class="form-submit-button"
    slot="right-button">Create User</button
  >
</AddUserModal>

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
