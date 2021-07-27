<!--<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
-->

<template>
  <v-app dark>
    <div>
      <v-row class="mt-12" justify="center">
        <div style="font-size: 52px;color: #13274a;" >
          Something went wrong
        </div>
      </v-row>
      <v-row class="mt-4" justify="center">
        <div style="font-size: 24px;color: #13274a;" v-if="error.statusCode === 404">
           {{ pageNotFound }}
        </div>
        <div style="font-size: 24px;color: #13274a;" v-else-if="error.statusCode === 401">
           {{ notAuth }}.
        </div>
        <div style="font-size: 24px;color: #13274a;" v-else>
            {{ otherError }}
        </div>
      </v-row>

      <v-row class="mt-8" justify="center">
        <v-img src="/err.png" height="250" width="250" contain></v-img>
      </v-row>
    </div>

    <v-row justify="center" class="mt-10">
      <NuxtLink to="/">
      <v-btn color="#13274a" dark large depressed>go back home</v-btn>
      </NuxtLink>
    </v-row>

    
 <!--   <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>  -->
  </v-app>
</template>

<script>
export default {
  layout: 'err',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: 'Page Not Found ',
      otherError: 'An error occurred',
      notAuth:'Not authorized to view this page.'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
a {
  text-decoration: none;
}
</style>
