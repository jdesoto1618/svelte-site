<script>
  import { createEventDispatcher } from "svelte";
  export let show;

  const dispatch = createEventDispatcher();

  const closeModal = () => {
    dispatch("closeModal");
  };

  const formSubmit = () => {
    dispatch("submit");
  };
</script>

<div class="modal-wrapper" style:display={show ? " block" : "none"}>
  <dialog class="add-user-dialog">
    <form
      on:submit|preventDefault={formSubmit}
      class="add-user-form"
      method="dialog"
    >
      <slot />
      <button on:click={closeModal} class="close-add-user-button" type="button"
        >Close</button
      >
      <slot name="right-button" />
    </form>
  </dialog>
</div>

<style>
  .modal-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: var(--white);
  }

  .add-user-dialog {
    display: block;
  }
</style>
