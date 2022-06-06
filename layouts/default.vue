<template>
  <v-app>
    <v-navigation-drawer
      color="background_app"
      right
      floating
      permanent
      width="280px"
    >
      <SideBar />
    </v-navigation-drawer>
    <!-- <header id="top-bar" class="background">
      <v-list-item two-line>
        <v-list-item-avatar>
          <v-img :src="require('~/assets/profile.jpg')"></v-img>
        </v-list-item-avatar>
        <v-list-content>
          <v-list-item-title>حسن حسنقلی</v-list-item-title>
          <v-list-item-subtitle>وقت بخیر :)</v-list-item-subtitle>
        </v-list-content>
      </v-list-item>
    </header> -->
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/dashboard",
        },
      ],

      title: "Vuetify.js",
    };
  },
};
</script>

<style>
.theme--light.v-application {
  background: var(--v-background_app-base) !important;
}

#top-bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 23px 80px;
  gap: 1096px;

  position: absolute;
  width: 1464px;
  height: 99px;
  left: 80px;
  top: 40px;

  /* Background - Accent/White */

  background: #ffffff;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
  border-radius: 22px;
}
</style>
