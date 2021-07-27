<template>
  <v-stepper v-model="e1" class="mx-2">
    <v-stepper-header class="#13274a">
      <v-stepper-step class="#13274a" :complete="e1 > 1" step="1"> Disclaimer </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2"> Details </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3" :complete="e1 > 3"> Date of inspection </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="4"> Confirm details </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-6" flat>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <b
              >koko is that you are paying a non refundable fee of five thousand
              (5k) for inspection fee.</b
            >
          </v-card-text>
        </v-card>

        <v-btn color="#13274a" class="text-capitalize" dark @click="e1 = 2">
          I agree
        </v-btn>

        <v-btn class="text-capitalize" text @click="e1 = 1"> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-row class="mt-4">
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Name"
              outlined
              type="text"
              class="mt-2 text-capitalize"
              color="#13274a"
              v-model="name"
              :error-messages="nameError"
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Email"
              type="email"
              outlined
              class="text-capitalize"
              color="#13274a"
              v-model="email"
              :error-messages="emailError"
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Phone Number"
              outlined
              class="text-capitalize"
              color="#13274a"
              type="number"
              :error-messages="phoneNumberError"
              @input="$v.phoneNumber.$touch()"
              @blur="$v.phoneNumber.$touch()"
              v-model="phoneNumber"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="referee username"
              outlined
              readonly
              class="text-capitalize"
              color="#13274a"
              v-model="ref"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-btn
          color="#13274a"
          class="text-capitalize"
          dark
          @click="confirmDetails"
        >
          Continue
        </v-btn>

        <v-btn text class="text-capitalize" @click="e1 = 1"> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-row justify="center">
          <v-date-picker color="#13274a" v-model="picker"></v-date-picker>
        </v-row>

        <v-btn color="#13274a" class="text-capitalize" dark @click="e1 = 4">
          Continue</v-btn
        >

        <v-btn text class="text-capitalize" @click="e1 = 2"> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-row class="mt-4">
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Name"
              outlined
              type="text"
              class="mt-2 text-capitalize"
              color="#13274a"
              v-model="name"
              :error-messages="nameError"
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Email"
              type="email"
              outlined
              class="text-capitalize"
              color="#13274a"
              v-model="email"
              :error-messages="emailError"
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Phone Number"
              outlined
              class="text-capitalize"
              color="#13274a"
              type="number"
              :error-messages="phoneNumberError"
              @input="$v.phoneNumber.$touch()"
              @blur="$v.phoneNumber.$touch()"
              v-model="phoneNumber"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="4">
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="picker"
                label="Date of inspection"
                readonly
                 class="text-capitalize"
                  outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="picker"
              @input="menu2 = false"
              color="#13274a"
            ></v-date-picker>
          </v-menu>
          </v-col>
        </v-row>

        <v-btn color="#13274a" class="text-capitalize" dark @click=" openPaystack">
          Pay</v-btn
        >

        <v-btn text class="text-capitalize" @click="e1 = 1"> Cancel </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
export default {
  layout: 'bookings',
  mixins: [validationMixin],
  validations: {
    email: { required },

    phoneNumber: { required },
    name: { required },
  },
   head() {
    return {
      script: [{ src: 'https://js.paystack.co/v1/inline.js' }],
    }
  },
  data() {
    return {
      ref: '',
      new_data: '',
      e1: 1,
      email: '',
      address: '',
      phoneNumber: '',
      name: '',
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu2: false,
    }
  },
  computed: {
    nameError() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.required && errors.push('name is required')
      return errors
    },
    emailError() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.required && errors.push('email is required')
      return errors
    },
    addressError() {
      const errors = []
      if (!this.$v.address.$dirty) return errors
      !this.$v.address.required && errors.push('Address is required')
      return errors
    },
    phoneNumberError() {
      const errors = []
      if (!this.$v.phoneNumber.$dirty) return errors
      !this.$v.phoneNumber.required && errors.push('Phone number is required')
      return errors
    },
  },
  created() {
    //console.log(this.new_data)
    console.log(this.$route.query.page_data)
    if (this.$route.query.page_data == undefined) {
      this.ref = 'undefined'
    } else {
      this.ref = this.$route.query.page_data
    }
  },
  methods: {
    confirmDetails() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.e1 = 3
      }
    },
      openPaystack() {
      
        console.log(this.details)
        var name = this.name
        var email = this.email
        var phone = this.phoneNumber
        
        var date = this.picker
        var carName = this.$route.query.name
        var ref = this.ref
        var amount = "500000"
        var key = "pk_test_20beb29a9cd24d4c35105da9ac30711fd5978f3b"

        //  var key ="pk_test_20beb29a9cd24d4c35105da9ac30711fd5978f3b"

        var handler = PaystackPop.setup({
          key: key,
          email: email,
          amount: amount,
          ref: '' + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
          metadata: {
            custom_fields: [
              {
                display_name: 'Mobile Number',
                variable_name: 'mobile_number',
                value: '+2348012345678',
              },
            ],
          },
          callback: async function (response) {
            //  alert('success. transaction ref is ' + response.reference);
            console.log(response.reference)
            axios
              .post(
                `http://localhost:8000/api/v1/users/bookings`,
                {
                  referenceCode: response.reference,
                  name: name,
                  email: email,
                  phone: phone,
                  carName: carName,
                  ref: ref,
                  date: date,
                }
              )
              .then((res) => {
                console.log(res)
              })

        
          },
          onClose: function () {},
        })
        handler.openIframe()
      
      }
  },
  beforeRouteEnter(to, from, next){
     if(from.name === "garage-details"){
           next(true)
       }else{
           next({path:"/"})
       } 
       
  }
}
</script>
