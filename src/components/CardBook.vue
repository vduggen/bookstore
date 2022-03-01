<template>
  <v-card :to="`/books/${id}`" class="card" elevation="0">
    <header class="rounded-lg card__header">
      <img class="header__img" :src="img" :alt="name" />

      <v-chip color="white" class="rounded-lg primary--text header__rating">
        <v-icon class="mr-2" size="1rem">mdi-star</v-icon>

        <span class="subtitle-2">{{ rating }}</span>
      </v-chip>
    </header>

    <v-card-title class="subtitle-2 px-0">{{ name }}</v-card-title>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

const CardBookProps = Vue.extend({
  props: {
    name: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
});

export default class CardBook extends CardBookProps {}
</script>

<style scoped>
.card {
  max-width: 160px;
  margin: 0 auto;
}

.card__header {
  background: #f2f2f2;
  width: 160px;
  height: 180px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header__img {
  width: 95px;
}

.header__rating {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 15px;
  bottom: 30px;
}
</style>
