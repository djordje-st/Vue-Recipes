<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="item.image" :alt="item.label" />
      </figure>
    </div>
    <div class="has-text-centered">
      <button class="button is-primary" @click="isCardModalActive = true">Show Recipe</button>
    </div>

    <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="item.image" :alt="item.label" />
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ item.label }}</p>
                <p class="subtitle is-6">By: {{ item.source }}</p>
              </div>
            </div>

            <div class="content">
              <p
                class="is-marginless"
                v-if="item.totalTime > 0"
              >Time to make: {{ item.totalTime }} minutes.</p>
              <p class="subtitle is-6">{{ item.yield }} servings.</p>
              <b-taglist>
                <b-tag v-for="label in item.healthLabels" :key="label" type="is-info">{{ label }}</b-tag>
              </b-taglist>
              <p class="is-marginless">Ingredients:</p>
              <ul>
                <li v-for="(ingredient, i) in item.ingredientLines" :key="i">{{ ingredient }}</li>
              </ul>
              <a
                target="_blank"
                ref="noreferrer"
                class="button is-primary"
                :href="item.url"
              >View Full Recipe Here</a>
              <a
                target="_blank"
                ref="noreferrer"
                class="button is-secondary"
                :href="item.shareAs"
              >Share Recipe</a>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<style lang="scss" scoped>
.button {
  margin: 1rem;
}
</style>


<script>
export default {
  name: "Card",
  props: ["item"],
  data() {
    return {
      isCardModalActive: false
    };
  }
};
</script>
