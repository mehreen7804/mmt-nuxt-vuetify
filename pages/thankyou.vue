<template>
  <v-layout>
    <v-flex class="text-center">
      <template>
        <v-data-table :headers="headers" :items="desserts" class="elevation-1"></v-data-table>
        <v-btn color="primary" nuxt to="/">Go back to Home</v-btn>
      </template>
    </v-flex>
  </v-layout>
</template>
    

    <script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Concern", value: "concern" },
        { text: "Why Concern", value: "whyconcern" },
        { text: "Annonymous", value: "annonymous" },
      ],
      desserts: [
        {
          name: this.$route.query.name,
          concern: this.$route.query.concern,
          whyconcern: this.$route.query.why,
          annonymous: this.$route.query.anon ? "Yes" : "No",
        },
      ],
    };
  },
};
</script>
