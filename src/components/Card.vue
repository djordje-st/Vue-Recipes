<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="item.image" :alt="item.label" />
      </figure>
    </div>
    <button @click="show">Toggle</button>
    <div v-show="isActive" class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ item.label }}</p>
          <p class="subtitle is-6">{{ item.source }}</p>
        </div>
      </div>

      <div class="content">
        <ul>
          <li v-for="(ingredient,i) in item.ingredientLines" :key="i">{{ ingredient }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["item"],
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    show() {
      this.isActive = !this.isActive;
    }
  }
};
</script>
