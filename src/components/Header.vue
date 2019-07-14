<template>
  <header>
    <nav class="has-background-primary navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          <img src="@/assets/logo.png" height="28" alt="logo" />
          <span class="has-text-white has-text-weight-bold navbar-item">Vue Food</span>
        </div>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <form class="navbar-item" @submit.prevent="submitSearch">
            <b-field>
              <b-input
                placeholder="Search for a recipe..."
                @input="submitSearchTerm"
                v-model="searchTerm"
              ></b-input>
            </b-field>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchTerm: ""
    };
  },
  methods: {
    submitSearch() {
      this.$store.dispatch("searchFood");
    },
    submitSearchTerm() {
      this.$store.commit("updateSearchTerm", this.searchTerm);
    }
  }
};
</script>

<style lang="scss">
@media screen and (max-width: 1023px) {
  .navbar-brand,
  .navbar-tabs {
    justify-content: center;
  }
  .navbar .navbar-menu {
    display: block;
  }
}
</style>
