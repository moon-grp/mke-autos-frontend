<template>
  <v-app dark>
    <div>
      <v-app-bar color="#13274a" height="100" flat>
        <nuxt-link to="/frames">
          <v-avatar size="50">
            <v-img class="mx-2" src="/mkep1.jpeg"></v-img>
          </v-avatar>
        </nuxt-link>

        <v-spacer></v-spacer>
        <nuxt-link to="/frames">
          <v-btn
            rounded
            color="#ecf4ff"
            dark
            text
            class="text-capitalize mx-2 hidden-sm-and-down"
            >frames</v-btn
          >
        </nuxt-link>

        <nuxt-link to="/frames">
          <v-btn
            rounded
            color="#ecf4ff"
            dark
            text
            class="text-capitalize mx-2 hidden-sm-and-down"
            >Entertainment</v-btn
          >
        </nuxt-link>

        <nuxt-link to="/garage">
          <v-btn
            rounded
            color="#ecf4ff"
            dark
            text
            class="text-capitalize mx-2 hidden-sm-and-down"
            >Autos</v-btn
          >
        </nuxt-link>
        <v-spacer></v-spacer>
        <nuxt-link to="/affiliate">
          <v-btn
            rounded
            color="#ecf4ff"
            dark
            text
            class="text-capitalize mx-2 hidden-sm-and-down"
            >sign in</v-btn
          >
        </nuxt-link>

        <v-app-bar-nav-icon
          dark
          @click.stop="drawer = !drawer"
          class="hidden-md-and-up"
        ></v-app-bar-nav-icon>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-title>
                <nuxt-link to="/frames">
                  <div class="text-capitalize navT">frames</div>
                </nuxt-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <nuxt-link to="/garage">
                  <div class="text-capitalize navT">Entertainment</div>
                </nuxt-link>
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
                <nuxt-link to="/garage">
                  <div class="text-capitalize mb-4 navT">Autos</div>
                </nuxt-link>
                 <nuxt-link to="/affiliate">
                  <div class="text-capitalize navT">Signin</div>
                </nuxt-link>
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <nuxt />
      </v-main>
    </div>
  </v-app>
</template>

<script>
import Loading from '~/components/loading.vue'

export default {
  components: {
    Loading,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      group: null,
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #ecf4ff;
}
a {
  text-decoration: none;
}

.fnt {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  color: #ecf4ff;
}

.navT {
  color: #13274a;
}
</style>
