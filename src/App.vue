<script>
import { computed } from "vue";
import { RouterLink, RouterView } from "vue-router";

export default {
  provide() {
    return {
      searchedWord: computed(() => this.searchedWord),
    };
  },
  watch: {
    searchedWordInput(data) {
      if (!data) {
        this.searchedWord = null;
      }
    },

    searchedWordInput(newValue) {
      if (!newValue) {
        this.searchedWord = null;
      }
    },
  },
  data() {
    return {
      searchedWord: null,
      searchedWordInput: null,
    };
  },
  computed: {
    isHomePage() {
      return this.$route.path === "/";
    },
  },
  methods: {
    performSearch() {
      this.searchedWord = this.searchedWordInput;
    },
  },
};
</script>

<template>
  <header>
    <div class="container-fluid my-border my-container">
      <h1 class="navbar-title">Card Project</h1>
      <nav
        class="my-border p-4 d-flex justify-content-between align-items-center navbar"
      >
        <div class="navbar-links">
          <RouterLink to="/">Home</RouterLink> |
          <RouterLink to="/tablazat">Table</RouterLink> |
          <RouterLink to="/kepek">Favourite Characters</RouterLink> |
        </div>

        <div
          v-if="!isHomePage"
          class="d-flex align-items-center search-container"
          role="search"
        >
          <label
            for="searchedWord"
            class="form-label text-nowrap m-0 search-label"
          ></label>
          <input
            id="searchedWord"
            class="form-control me-2 ms-2 search-input"
            type="search"
            aria-label="Search"
            v-model="searchedWordInput"
          />
          <button
            class="btn btn-outline-warning search-button"
            type="submit"
            @click="performSearch"
          >
            Search
          </button>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
.container-fluid {
  background-color: #555;
  padding: 20px;
  border-radius: 10px;
}

.my-header {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.navbar-title {
  text-align: center;
  color: white;
  margin: 0;
}

.navbar {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 15px;
  border-radius: 8px;
}

.navbar-links {
  color: #4d3c24;
  font-weight: bold;
  margin: 0 10px;
  text-decoration: none;
}

.navbar-links a {
  color: #4d3c24;
  text-decoration: none;
}

.navbar-links a:hover {
  color: #3c3321;
}

.search-button {
  background-color: #e79510;
  border: none;
  font-weight: bold;
  color: white;
}

.search-button:hover {
  background-color: #e67e22;
}
</style>



