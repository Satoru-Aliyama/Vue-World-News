<template>
  <div class="category">
    <section class="">
      <h6 class="text-center">Select category</h6>
      <form>
        <div class="select">
          <div class="select__categories">
            <select v-model="currentSection">
              <option
                v-for="(section, index) in allSections"
                :value="section"
                :key="index"
                >{{ section }}</option
              >
            </select>
          </div>
          <div class="select__btn">
            <a @click="retrieve" class="btn">Retrieve</a>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["sections"],
  data() {
    return {
      currentSection: "home",
    };
  },
  computed: {
    allSections() {
      return this.sections;
    },
  },
  methods: {
    retrieve() {
      this.$emit("retrieve", this.currentSection);
      console.log("change");
    },
  },
};
</script>

<style lang="scss" scoped>
select {
  display: block;
  cursor: pointer;
}
.select {
  display: block;
  display: flex;
  justify-content: center;

  &__categories {
    width: 120px;
    padding-right: 15px;
  }

  &__btn {
    margin-top: 5px;
    width: 100px;
    color: #fff;
    padding-left: 5px;
  }

  & .btn:hover {
    color: #fff;
  }
}
</style>
