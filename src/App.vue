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
      <h1 class="navbar-title">Kártya Projekt</h1>
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
  background-color: #555; /* Aranysárga háttér */
  padding: 20px; /* Padding a konténeren belül */
  border-radius: 10px; /* Lekerekített sarkok */
}

.my-header {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Árnyék a fejlécre */
}

.navbar-title {
  text-align: center;
  color: white;
  margin: 0; /* Nincs margó */
}

.navbar {
  background-color: rgba(255, 255, 255, 0.8); /* Fehér háttér a navigációnak */
  padding: 15px; /* Padding a navigáción belül */
  border-radius: 8px; /* Lekerekített sarkok */
}

.navbar-links {
  color: #4d3c24; /* A linkek színe most szürke */
  font-weight: bold; /* Vastagabb betűtípus */
  margin: 0 10px; /* Margó a linkek között */
  text-decoration: none; /* Nincs aláhúzás */
}

.navbar-links a {
  color: #4d3c24; /* Linkek színe */
  text-decoration: none; /* Aláhúzás eltüntetése */
}

.navbar-links a:hover {
  color: #3c3321; /* Sötétebb szürke hover állapotban */
}

.search-button {
  background-color: #e79510; /* Narancssárga gomb */
  border: none; /* Nincs keret a gomb körül */
  font-weight: bold; /* Vastag betűtípus */
  color: white; /* Fehér szín a gomb szövegéhez */
}

.search-button:hover {
  background-color: #e67e22; /* Sötétebb narancssárga hover állapotban */
}
</style>



