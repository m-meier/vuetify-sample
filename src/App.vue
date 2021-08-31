<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12" class="text-center">
            <h1 class="mb-4">Hello World</h1>

            <v-btn color="primary">
              {{ dialog ? "Close" : "Open" }} alpha11 dialog with parent
              activator

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
            <v-btn class="ml-2">
              Dropdown Menu <v-icon icon="mdi-chevron-down" />
              <v-menu activator="parent" anchor="bottom end">
                <v-sheet>
                  <v-list>
                    <v-list-item
                      v-for="i in 5"
                      :title="'List item with a long title ' + i"
                      :key="i"
                      link
                    />
                  </v-list>
                </v-sheet>
              </v-menu>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const dialog = ref(false);
</script>
