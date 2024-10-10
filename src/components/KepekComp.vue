<template>
    <div class="col">
      <div class="card">
        <slot name="image"></slot>
        <div class="card-body">
          <slot name="name"></slot>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#charInfoModal"
            @click="onClickReszletek()"
          >
            More
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["id"],
    methods: {
      onClickReszletek() {
        this.$emit("ModalOperating", { id: this.id });
      },
    },
  };
  </script>
  
  <style>
  </style>