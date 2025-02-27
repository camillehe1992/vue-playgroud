<template>
  <v-container class="pa-0" fluid>
    <v-row>
      <v-rol class="pa-2">
        <div class="text-h6 font-weight-bold">Profile</div>
      </v-rol>
    </v-row>
    <v-row>
      <v-col class="pa-2">
        <v-card>
          <v-tabs v-model="tab" align-tabs="title">
            <v-tab
              v-for="item in items"
              :key="item"
              :text="item"
              :value="item"
            ></v-tab>
          </v-tabs>

          <v-tabs-window v-model="tab">
            <v-tabs-window-item v-for="item in items" :key="item" :value="item">
              <v-card flat>
                <v-card-text>{{ text }}</v-card-text>
              </v-card>
            </v-tabs-window-item>
          </v-tabs-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ReportsView",
  data() {
    return {
      tab: null,
      items: ["Recents", "Favorites", "Nearby"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>
