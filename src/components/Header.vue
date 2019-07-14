<template>
  <header>
    <form @submit.prevent="submitSearch">
      <input type="text" @input="submitSearchTerm" v-model="searchTerm" />
    </form>
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