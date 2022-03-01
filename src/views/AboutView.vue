<template>
  <v-container>
    <header>
      <v-btn to="/" icon color="primary">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-row>
        <v-col class="pl-0" cols="2">
          <img
            class="elevation-7 rounded-lg"
            :src="bookData.img"
            :alt="bookData.name"
            width="100%"
          />
        </v-col>

        <v-col>
          <h4 class="text-h6">{{ bookData.name }}</h4>
          <p class="subtitle-2 font-weight-light text--secondary">
            {{ bookData.author }}
          </p>

          <p>
            <span class="text--secondary">Ano do lançamento:</span>
            <span class="ml-2 font-weight-bold">{{ bookData.date }}</span>
          </p>

          <div class="d-flex align-center">
            <v-rating
              v-model="bookData.rating"
              readonly
              background-color="primary lighten-3"
              half-increments
              color="primary"
            />

            <p class="mb-0 ml-3 subtitle-1 font-weight-light">
              ({{ bookData.rating }}/5)
            </p>
          </div>
        </v-col>
      </v-row>
    </header>

    <v-divider class="my-4" />

    <h5 class="text-h5 font-weight-bold mb-3">Sinopse</h5>
    <p class="subtitle-1">{{ bookData.description }}</p>
  </v-container>
</template>

<script lang="ts">
import MockBooks from '@/mocks/books.json';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class AboutView extends Vue {
  get bookData() {
    const idParam = this.$route.params.id;

    const result = MockBooks.filter(({ id }) => String(id) === idParam);

    return result[0];
  }
}
</script>
