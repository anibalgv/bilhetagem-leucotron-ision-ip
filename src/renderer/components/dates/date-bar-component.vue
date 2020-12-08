<template>
  <div>
    <div class="row">
      <div class="btn-group btn-group-sm mr-1 mb-1" v-on:click="setYear">
        <button
          :data-year="year[0]"
          v-for="year in years"
          :key="year.toString()"
          class="year btn btn-success active"
        >
          {{ year[0] }}
        </button>
      </div>
      <div class="btn-group btn-group-sm mr-1 mb-1" v-on:click="setMonth">
        <button
          data-month
          type="button"
          class="month btn btn-info active"
          style="display: none"
        >
          ALL
        </button>
        <button data-month="01" type="button" class="month btn btn-info">
          JAN
        </button>
        <button data-month="02" type="button" class="month btn btn-info">
          FEB
        </button>
        <button data-month="03" type="button" class="month btn btn-info">
          MAR
        </button>
        <button data-month="04" type="button" class="month btn btn-info">
          APR
        </button>
        <button data-month="05" type="button" class="month btn btn-info">
          MAY
        </button>
        <button data-month="06" type="button" class="month btn btn-info">
          JUN
        </button>
        <button data-month="07" type="button" class="month btn btn-info">
          JUL
        </button>
        <button data-month="08" type="button" class="month btn btn-info">
          AGO
        </button>
        <button data-month="09" type="button" class="month btn btn-info">
          SET
        </button>
        <button data-month="10" type="button" class="month btn btn-info">
          OCT
        </button>
        <button data-month="11" type="button" class="month btn btn-info">
          NOV
        </button>
        <button data-month="12" type="button" class="month btn btn-info">
          DEC
        </button>
      </div>
      <div
        v-if="selectedDate.year || selectedDate.month || selectedDate.day"
        class="btn-group btn-group-sm mr-1 mb-1 pull-right"
      >
        <button class="btn btn-warning">
          {{ monthText[selectedDate.month - 1] || "" }} {{ selectedDate.day }}
          {{ selectedDate.year }}
        </button>
      </div>
    </div>
    <div class="row">
      <div class="btn-group btn-group-sm mr-2 mb-2" v-on:click="setDay">
        <button data-day type="button" class="day btn btn-primary active"> ALL </button>
        <button data-day="01" type="button" class="day btn btn-primary"> 1 </button>
        <button data-day="02" type="button" class="day btn btn-primary"> 2 </button>
        <button data-day="03" type="button" class="day btn btn-primary"> 3 </button>
        <button data-day="04" type="button" class="day btn btn-primary"> 4 </button>
        <button data-day="05" type="button" class="day btn btn-primary"> 5 </button>
        <button data-day="06" type="button" class="day btn btn-primary"> 6 </button>
        <button data-day="07" type="button" class="day btn btn-primary"> 7 </button>
        <button data-day="08" type="button" class="day btn btn-primary"> 8 </button>
        <button data-day="09" type="button" class="day btn btn-primary"> 9 </button>
        <button data-day="10" type="button" class="day btn btn-primary"> 10 </button>
        <button data-day="11" type="button" class="day btn btn-primary"> 11 </button>
        <button data-day="12" type="button" class="day btn btn-primary"> 12 </button>
        <button data-day="13" type="button" class="day btn btn-primary"> 13 </button>
        <button data-day="14" type="button" class="day btn btn-primary"> 14 </button>
        <button data-day="15" type="button" class="day btn btn-primary"> 15 </button>
        <button data-day="16" type="button" class="day btn btn-primary"> 16 </button>
        <button data-day="17" type="button" class="day btn btn-primary"> 17 </button>
        <button data-day="18" type="button" class="day btn btn-primary"> 18 </button>
        <button data-day="19" type="button" class="day btn btn-primary"> 19 </button>
        <button data-day="20" type="button" class="day btn btn-primary"> 20 </button>
        <button data-day="21" type="button" class="day btn btn-primary"> 21 </button>
        <button data-day="22" type="button" class="day btn btn-primary"> 22 </button>
        <button data-day="23" type="button" class="day btn btn-primary"> 23 </button>
        <button data-day="24" type="button" class="day btn btn-primary"> 24 </button>
        <button data-day="25" type="button" class="day btn btn-primary"> 25 </button>
        <button data-day="26" type="button" class="day btn btn-primary"> 26 </button>
        <button data-day="27" type="button" class="day btn btn-primary"> 27 </button>
        <button data-day="28" type="button" class="day btn btn-primary"> 28 </button>
        <button data-day="29" type="button" class="day btn btn-primary"> 29 </button>
        <button data-day="30" type="button" class="day btn btn-primary"> 30 </button>
        <button data-day="31" type="button" class="day btn btn-primary"> 31 </button>
      </div>
    </div>
  </div>
</template>

<script>
import Tickets from "../../models/tickets";
import Dates from "../../models/dates";

export default {
  name: "DateBarComponent",
  methods: {
    setDay: function (event) {
      this.removeClassActive("day");
      event.target.classList.add("active");
      this.selectedDate["day"] = event.target.dataset.day;
      this.setDate();
    },
    setMonth: function (event) {
      this.removeClassActive("month");
      event.target.classList.add("active");
      this.selectedDate["month"] = event.target.dataset.month;
      this.setDate();
    },
    setYear: function (event) {
      this.removeClassActive("year");
      event.target.classList.add("active");
      this.selectedDate["year"] = event.target.dataset.year;
      this.setDate();
    },
    setDate() {
      if (this.selectedDate.year && this.selectedDate.month) {
        this.$emit('onSelect', {
          date: this.selectedDate
        });
      }
      
    },
    getYears() {
      this.years = new Tickets().getYears();
    },
    removeClassActive(_class) {
      const elements = document.getElementsByClassName(_class);
      elements.forEach((element) => {
        element.classList.remove("active");
      });
    },
    
  },
  data: function () {
    return {
      selectedDate: { day: "", month: "", year: "" },
      tickets: [],
      years: [],
      monthText: [],
    };
  },
  mounted: function () {
    this.getYears();
    this.monthText = new Dates().getMonthsText();
  },
 
  
};
</script>

<style>
</style>