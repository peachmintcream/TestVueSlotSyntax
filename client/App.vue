<template>
  <v-app id="app">
    <v-container>
      <v-card color="#c2f2e0">
        <v-layout>
          <v-spacer></v-spacer>
          <v-flex>
            <v-icon>
              fa fa-edit
            </v-icon>
          </v-flex>
        </v-layout>
      </v-card>
      <simple-slot></simple-slot>
      <test-date-picker></test-date-picker>
    </v-container>
  </v-app>
</template>

<script>
import SimpleSlot from '/imports/components/SimpleSlot'
import TestDatePicker from '/imports/components/TestDatePicker'

export default {
  data() {
    return {
      date: new Date(),
    }
  },
  components: {
    SimpleSlot,
    TestDatePicker,
  }
}
</script>

<style>
#app {
  background-color: #fcd5ae;
}
</style>
