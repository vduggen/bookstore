<template>
  <v-container class="py-10">
    <header class="mb-5">
      <v-row>
        <v-col>
          <h1>Explorer</h1>
        </v-col>

        <v-col cols="4">
          <v-text-field
            append-icon="mdi-magnify"
            dense
            outlined
            class="rounded-lg"
            label="Find the book"
          />
        </v-col>
      </v-row>
    </header>

    <v-col>
      <v-row class="ma-0">
        <span class="text-h6 font-weight-medium">Popular Now</span>

        <v-spacer />

        <div v-show="books.length > 6">
           <v-btn id="button__prev" class="mr-1" color="primary" icon @click="prev">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>

          <v-btn id="button__next" color="primary" icon @click="next">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </v-row>

      <v-slide-group v-model="cardsView" class="py-4">
        <v-slide-item v-for="book in books" :key="book.id">
          <div
            :class="{
              'mr-4': book.id === 1,
              'mx-4': ![1, books.length - 1].includes(book.id),
              'ml-4': book.id === books.length - 1,
            }"
          >
            <CardBook
              :id="book.id"
              :img="book.img"
              :name="book.name"
              :rating="book.rating"
            />
          </div>
        </v-slide-item>
      </v-slide-group>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import CardBook from '@/components/CardBook.vue';
import MockBooks from '@/mocks/books.json';
import Component from 'vue-class-component';

@Component({ components: { CardBook } })
export default class HomeView extends Vue {
  cardsView = 5;

  books = MockBooks;

  next() {
    const NumberTotalOfList = this.books.length;
    const IS_START = this.cardsView === 0;
    const IS_END = this.cardsView === NumberTotalOfList;

    if (IS_START) {
      this.cardsView = 6;
    }

    if (!IS_END) {
      this.cardsView += 1;
    }
  }

  prev() {
    const NumberTotalOfList = this.books.length;
    const IS_START = this.cardsView === 0;
    const IS_END = this.cardsView === NumberTotalOfList;

    if (!IS_START) {
      this.cardsView -= 1;
    }

    if (IS_END) {
      this.cardsView = NumberTotalOfList - 7;
    }
  }
}
</script>

<style>
.v-slide-group__next,
.v-slide-group__prev {
  display: none !important;
}

#button__prev::before,
#button__next::before {
  opacity: 0.08;
}
</style>
