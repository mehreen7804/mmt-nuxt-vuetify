<template>
  <v-app>
    <Header />
    <v-main class="main">
      <v-container class="container">
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.main {
  background-color: bisque;
}
</style>

