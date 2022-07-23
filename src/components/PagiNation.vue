<template>
  <nav>
    <ul class="nav nav-bar">
      <li>
        <button type="button" class="btn-success" @click="onClickFirstPage">
          First
        </button>
      </li>

      <li>
        <button type="button" class="btn-success">
          Previous
        </button>
      </li>

      <!-- Visible Buttons Start -->

      <li v-for="(page, index) in pages" class="pagination-item" :key="index">
        <button
          type="button"
          @click="onClickPage(page.name)"
          :disabled="page.isDisabled"
          :class="{ active: isPageActive(page.name) }"
        >
          {{ page.name }}
        </button>
      </li>

      <!-- Visible Buttons End -->

      <li>
        <button type="button" class="btn-success">
          Next
        </button>
      </li>

      <li>
        <button
          type="button"
          class="btn-success"
          @click="onClickLastPage"
          :disabled="isInLastPage"
        >
          Last
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1
      }

      // When on the last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons
      }

      // When inbetween
      return this.currentPage - 1
    },
    pages() {
      const range = []

      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        })
      }

      return range
    },

    isInFirstPage() {
      return this.currentPage === 1
    },
    isInLastPage() {
      return this.currentPage === this.totalPages
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit('pagechanged', 1)
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1)
    },
    onClickPage(page) {
      this.$emit('pagechanged', page)
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1)
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages)
    },
    pageChanged() {
      console.log('button clicked')
    },
  },
}
</script>
