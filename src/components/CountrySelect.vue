<template>
  <select
    v-model="selected"
    @change="onChange()"
    class="form-select mb-5 block w-full border p-3 rounded"
  >
    <option value="0">Select Country</option>
    <option v-for="country in countries" :value="country.ID" :key="country.ID">
      {{ country.Country }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CountrySelect",
  props: ["countries", "selected"],
  methods: {
    onChange(){
      const country = this.countries.find((item) => item.ID === this.selected)
      
      this.$emit('get-country', country)
    }
  }
};
</script>