<template>
    <div class="col">
      <div class="card">
        <slot name="image"></slot>
        <div class="card-body">
          <slot name="name"></slot>
          <button
            type="button"
            class="search-button"
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
.search-button {
  background-color: #e79510;
  border: none;
  font-weight: bold;
  color: white;
  border-radius: 12px;
  padding: 5px 10px;
}

.search-button:hover {
  background-color: #e67e22;
}
  </style>