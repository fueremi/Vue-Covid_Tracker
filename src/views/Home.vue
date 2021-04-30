<template>
  <div class="home" v-if="!loading">
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

  <div v-else>Fetching..</div>
</template>

<script>
// @ is an alias to /src
import DataTitle from "@/components/DataTitle";
import DataBoxes from "@/components/DataBoxes";
import CountrySelect from "@/components/CountrySelect";

export default {
  name: "Home",
  components: {
    DataTitle,
    DataBoxes,
    CountrySelect,
  },
  data() {
    return {
      title: "Global",
      dataDate: "",
      stats: {},
      countries: [],
      loading: true,
    };
  },
  methods: {
    getCountryData(country) {
      this.stats = country;
      this.title = country.Country;
    },
    clearCountryData() {
      this.title = "Global";
      this.stats = this.fetchingData()
    },
    fetchingData(){
      fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((res) => {
        this.dataDate = res.Date;
        this.stats = res.Global;
        this.countries = res.Countries;

        this.loading = false;
      });
    }
  },
  created() {
    this.fetchingData()
  },
};
</script>
