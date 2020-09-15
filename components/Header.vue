<template>
  <div class="appheader">
    <v-toolbar class="hidden-sm-and-up" fixed dark>
      <span class="center nav_text">
        <v-toolbar-title>Share your concern</v-toolbar-title>
      </span>
    </v-toolbar>

    <v-toolbar fixed dark>
      <nuxt-link to="/" class="nav_link">
        <v-btn color="primary" flat dark>Home</v-btn>
      </nuxt-link>

      <nuxt-link to="/thankyou" class="nav_link">
        <v-btn color="primary">Form Data</v-btn>
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <span class="nav_text">Share your Concerns</span>
      </v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "appheader",
  data() {},
};
</script>

<style scoped>
.center {
  width: 100%;
  text-align: center;
}
.nav_text {
  color: #000000;
  justify-content: center;
}
.nav_link {
  text-decoration: none;
}
.nav_mobile_link {
  text-decoration: none;
  margin: 50px;
}
.logout_mobile_button {
  margin: 60px;
}
</style>