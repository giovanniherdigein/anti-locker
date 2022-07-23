<template>
  <div class="container custom-background">
    <img alt="Vue logo" src="./assets/logo.png" width="128" />
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#home"
          type="button"
          role="tab"
          aria-controls="home"
          aria-selected="true"
        >
          Home
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
        >
          Profile
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="messages-tab"
          data-bs-toggle="tab"
          data-bs-target="#messages"
          type="button"
          role="tab"
          aria-controls="messages"
          aria-selected="false"
        >
          Messages
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="settings-tab"
          data-bs-toggle="tab"
          data-bs-target="#settings"
          type="button"
          role="tab"
          aria-controls="settings"
          aria-selected="false"
        >
          Settings
        </button>
      </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content shadow">
      <div
        class="tab-pane active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
        tabindex="0"
      >
        <HomeView />
      </div>
      <div
        class="tab-pane"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
        tabindex="0"
      >
        ...
      </div>
      <div
        class="tab-pane"
        id="messages"
        role="tabpanel"
        aria-labelledby="messages-tab"
        tabindex="0"
      >
        ...
      </div>
      <div
        class="tab-pane"
        id="settings"
        role="tabpanel"
        aria-labelledby="settings-tab"
        tabindex="0"
      >
        ...
        <button class="btn btn-primary" @click="getTodos">GetTodos</button>
      </div>
    </div>
  </div>
</template>

<script>
import HomeView from './components/HomeView.vue'

// EXPORTING THE COMPONENTS AND DATA
export default {
  name: 'App',
  components: {
    HomeView,
  },
  computed: {},
  methods: {
    getTodos() {
      console.log('Button clicked')
    },
  },
}
</script>

<style>
.custom-background {
  max-width: 980px;
}
.tab-content {
  min-height: 80vh;
  margin-bottom: 4.5rem;
}
</style>
