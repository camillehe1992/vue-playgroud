<template>
  <v-container class="pa-0" fluid>
    <v-row>
      <v-rol class="pa-2">
        <div class="text-h6 font-weight-bold">Security</div>
      </v-rol>
    </v-row>
    <v-row>
      <v-col class="pa-2">
        <v-card>
          <v-tabs
            v-model="tab"
            align-tabs="center"
            color="deep-purple-accent-4"
          >
            <v-tab :value="1">Landscape</v-tab>
            <v-tab :value="2">City</v-tab>
            <v-tab :value="3">Abstract</v-tab>
          </v-tabs>

          <v-tabs-window v-model="tab">
            <v-tabs-window-item v-for="n in 3" :key="n" :value="n">
              <v-container fluid>
                <v-row>
                  <v-col v-for="i in 6" :key="i" cols="12" md="4">
                    <v-img
                      :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                      :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                      height="205"
                      cover
                    ></v-img>
                  </v-col>
                </v-row>
              </v-container>
            </v-tabs-window-item>
          </v-tabs-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AnalyticsView",
  data: () => ({
    tab: null,
  }),
};
</script>
