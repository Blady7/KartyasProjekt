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
  background-color: #e79510; /* Narancssárga gomb */
  border: none; /* Nincs keret a gomb körül */
  font-weight: bold; /* Vastag betűtípus */
  color: white; /* Fehér szín a gomb szövegéhez */
  border-radius: 12px; /* Lekerekített sarkok */
  padding: 5px 10px; /* Extra padding a gomb körül */
}

.search-button:hover {
  background-color: #e67e22; /* Sötétebb narancssárga hover állapotban */
}
  </style>