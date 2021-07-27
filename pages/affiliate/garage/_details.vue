<template>
  <div class="productText">
    <v-container class="hidden-sm-and-down">
      <v-row class="mt-4">
        <v-col lg="5" md="5" sm="12" class="pl-4">
          <div class="pl-10">
            <!--      <v-img
            max-height="450"
            max-width="600"
            contain
            :src="products.imgUrl"
          ></v-img> -->

            <v-card max-width="280" class="mx-6 mt-4" color="#ECECEC">
              <v-row class="justify-center">
                <div>
                  <v-img
                    :src="products.mediaUrl"
                    height="400"
                    width="180"
                    contain
                  >
                  </v-img>
                </div>
              </v-row>

              <v-card-actions class="ca"> </v-card-actions>
            </v-card>
          </div>
        </v-col>
        <v-col lg="6" md="6" sm="12">
          <div class="pt-12">
            <h2 class="text-capitalize h2 mt-6 ti">{{ products.carname }}.</h2>

            <h5 class="text-capitalize mt-2 ti">
              {{ products.description }}
            </h5>
            <h2 class="text-capitalize mt-2 t2">{{ products.carprice }} NGN</h2>
            <h2 class="text-capitalize mt-2 t2">
              <b> Commission:</b> {{ products.commission }}
            </h2>
            <h2 class="text-capitalize mt-2 t2">
              <b> Location:</b> {{ products.location }}
            </h2>

            <!--      <div class="text-capitalize mt-2 caption">
            slash price: ₦{{ products.slashprice }}
          </div> 

          <div class="mt-2">
            <v-slider
              v-model="value"
              label="How many?"
              step="1"
              thumb-label="always"
              :thumb-size="18"
              color="#13274a"
            ></v-slider>
          </div>  -->
            <div>
              <v-text-field
                v-model="referrerLink"
                label="Referee link"
                outlined
                readonly
                append-icon="mdi-content-copy"
                color="#2979ff"
                class="pt-4"
                @click:append="clipBoard"
              ></v-text-field>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="hidden-md-and-up">
      <v-row class="mt-2">
        <v-col cols="12">
          <!--      <v-img
            max-height="450"
            max-width="600"
            contain
            :src="products.imgUrl"
          ></v-img> -->

          <v-card max-width="280" class="mt-2 mx-auto" color="#ECECEC">
            <v-row class="justify-center">
              <div>
                <v-img
                  :src="products.mediaUrl"
                  height="400"
                  width="180"
                  contain
                >
                </v-img>
              </div>
            </v-row>

            <v-card-actions class="ca"> </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-row class="justify-center">
            <h2 class="text-capitalize h2 mt-2 ti">{{ products.carname }}.</h2>
          </v-row>

          <v-row class="justify-center">
            <h5 class="text-capitalize mt-2 ti">
              {{ products.description }}
            </h5>
          </v-row>

          <v-row class="justify-center">
            <h2 class="text-capitalize mt-2 t2">{{ products.carprice }} NGN</h2>
            <h2 class="text-capitalize mt-2 t2">
              <b> Commission:</b> {{ products.commission }}
            </h2>
            <h2 class="text-capitalize mt-2 t2">
              <b> Location:</b> {{ products.location }}
            </h2>
          </v-row>
          <!--      <div class="text-capitalize mt-2 caption">
            slash price: ₦{{ products.slashprice }}
          </div> 

          <div class="mt-2">
            <v-slider
              v-model="value"
              label="How many?"
              step="1"
              thumb-label="always"
              :thumb-size="18"
              color="#13274a"
            ></v-slider>
          </div>  -->
          <v-row class="justify-center">
            <v-btn
              x-large
              rounded
              class="mt-2"
              color="#13274a"
              dark
              @click="getDetails"
            >
              <v-icon left> mdi-cart-variant </v-icon>
              {{ products.reflink }}
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
      <v-snackbar v-model="refClipBoard" top color="success" :timeout="timeout">
        Link copied to clipboard!
      </v-snackbar>

     
    </div>
    <loading v-if="loading" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Loading from '~/components/loading.vue'
export default {
  layout: 'frames',
  components: {
    Loading,
  },
  data() {
    return {
      timeout: 7000,
      id: this.$route.params.details,
      products: '',
      value: 0,
      prodName: '',
      prodPrice: '',
      loading: false,
      referrerLink: '',
      refClipBoard: false,
      dialog: false,
    }
  },

  created() {
    this.getProduct()
  },
  methods: {
    async clipBoard() {
      try {
        await this.$copyText(this.referrerLink)
        this.refClipBoard = true
      } catch (e) {
        console.error(e)
      }
    },
    ...mapMutations({
      addProductDetails: 'addProductDetails',
    }),
    getDetails() {
      let prod = {
        productName: this.products.productname,
        price: this.products.frameprice,
        qty: this.value,
      }
      this.addProductDetails(prod)
      this.$router.push({ name: 'checkout' })
    },
    async getProduct() {
      // const id = route.params.details
      this.loading = true
      const getProducts = await this.$axios.$get(
        `https://mrkayenterprise.herokuapp.com/api/v1/users/affiliate/viewcardetails/${this.id}`
      )
      console.log(getProducts)

      this.products = getProducts
      this.referrerLink = getProducts.refLink
      this.loading = false
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  font-size: 80px;
}

.imgh {
  height: 50%;
}
.productText {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  color: #000000;
}

a {
  text-decoration: none;
}

.ca {
  background: #13274a;
}

.v-card {
  border-radius: 35px 35px 35px 35px;
}

h2.ti {
  font-family: 'Montserrat', sans-serif;
  color: #2a2a2a;
  letter-spacing: 0px;
  font-size: xx-large;
}

h5.ti {
  font-family: 'Montserrat', sans-serif;
  color: #2a2a2a;
  letter-spacing: 0px;
  font: xx-small;
}

h2.t2 {
  font-family: 'Montserrat', sans-serif;
  color: #2a2a2a;
  letter-spacing: 0px;
  font: xx-large;
}
</style>
