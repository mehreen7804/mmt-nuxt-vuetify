<template>
  <v-card>
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Form</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" label="Full Name" outlined></v-text-field>

        <v-checkbox v-model="anony" label="Remain Anonymous" color="primary"></v-checkbox>
        <v-text-field
          v-model="concern"
          :rules="concernRules"
          label="Area Of Concern"
          outlined
          required
        ></v-text-field>
        <v-textarea
          v-model="whyConcern"
          :rules="whyConcernRules"
          outlined
          label="Why it's a concern?"
          :counter="50"
          required
        ></v-textarea>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" :disabled="!valid" @click="validate" nuxt>Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    anony: false,
    concern: "",
    concernRules: [(v) => !!v || "This field is required"],
    whyConcern: "",
    whyConcernRules: [
      (v) => !!v || "This field is required",
      (v) => (v && v.length >= 50) || "it must be at least 50 characters",
    ],
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$router.push({
          path:
            "thankyou/?name=" +
            this.name +
            "&concern=" +
            this.concern +
            "&why=" +
            this.whyConcern +
            "&anon=" +
            this.anony,
        });
      }
    },
  },
};
</script>
