<template>
  <v-app>
    <v-main>
      <v-container fluid class="text-center">
        <h1 class="mb-4">Hello World</h1>

        <v-btn color="primary">
          {{ dialog ? "Close" : "Open" }} alpha11 dialog with parent activator

          <v-dialog v-model="dialog" activator="parent">
            <v-card
              title="Dialog header"
              text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut modi iusto ipsum molestiae doloribus rerum nulla amet eaque excepturi magni quaerat, libero porro, eligendi delectus neque sed quasi, quod sit!"
            >
              <template #actions>
                <v-spacer />
                <v-btn>Action 1</v-btn>
                <v-btn>Action 2</v-btn>
              </template>
            </v-card>
          </v-dialog>
        </v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const dialog = ref(false);
</script>
