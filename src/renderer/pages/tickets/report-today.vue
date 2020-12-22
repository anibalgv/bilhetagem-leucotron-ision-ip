<template>
  <div class="row" >
    <TableTickets v-bind:tickets="tickets" />
  </div>
</template>

<script>
import Tickets from "../../models/tickets";
import Vue from "vue";
import TableTickets from '../../components/tickets/table-tickets-component.vue';
import Dates from '../../models/dates';

export default {
  name: "report-today",
  methods: {
    getTodayTickets: function () { 
      const today = new Dates().getToday();
      const tickets = new Tickets().getByDate(today, today);
      return tickets;
    },
    
    refresh: function () {
      let input = document.querySelector("#input-search");
      input.value = "";
      this.search();
      input.focus();
    },
  },
  data: function () {
    return {
      tickets: [],
      column: 2,
    };
  },
  mounted: function () {
    this.tickets = this.getTodayTickets();
  },
  components:{'TableTickets': TableTickets}
};
</script>
<style>
.nao{
  color: 'red'
}
</style>

