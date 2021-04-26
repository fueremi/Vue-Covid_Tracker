<template>
  <div class="home">
    <CountrySelect @get-country="getCountryData" :countries="countries" />

    <button
      @click="clearCountryData"
      v-if="stats.Country"
      class="bg-green-700 text-white rounded p-3 focus:outline-none hover:bg-green-600"
    >
      Clear Country
    </button>

    <DataTitle :text="title" :dataDate="dataDate" />
    
    <DataBoxes @get-country="getCountryData" :stats="stats" />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import DataTitle from '@/components/DataTitle'
import DataBoxes from '@/components/DataBoxes'
import CountrySelect from '@/components/CountrySelect'

export default {
  name: 'Home',
  components: {
    DataTitle,
    DataBoxes,
    CountrySelect
  },
  data(){
    return {
      title: 'Global',
      dataDate: '',
      status: {},
      countries: [],
    }
  },
  methods: {
    getCountryData(country) {
      this.stats = country
      this.title = country.Country
    },
    async clearCountryData() {
      this.title = 'Global'
      this.stats = this.$store.state.data.data.Global
    },
  },
  computed: {
    ...mapGetters({
      dataCovid19: 'getDataCovid19'
    })
  },
  created() {
    this.$store.dispatch('fetchData')

    this.dataDate = this.$store.state.data.Date
    this.stats = this.$store.state.data.data.Global
    this.countries = this.$store.state.data.data.Countries
  }
  
}
</script>
