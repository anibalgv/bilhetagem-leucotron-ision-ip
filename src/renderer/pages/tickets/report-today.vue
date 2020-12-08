<template>
  <div id="report-today">
    <div class="row" style="margin-top: -20px">
      <!-- <div class="form-inline col-md-12">
        <label for="" class="text "> RAMAL/NUMERO EXTERNO </label>
        <input
          type="text"
          id="input-search"
          v-on:change="search"
          class="form-control form-control-sm col-4"
          placeholder="type a number and press enter"
        />
      </div> -->
      <div class="form-inline col-md-12" >
        <!-- <label for="" class="control-label"> SEARCH &nbsp;</label> -->
        <input
          type="radio"
          v-on:click="refresh"
          v-model="column"
          id="search-ramal"
          value="2"
          checked
        />
        &nbsp;<label for="search-ramal" class="control-label"> Ramal </label>
        &nbsp;&nbsp;&nbsp;<input
          type="radio"
          v-on:click="refresh"
          v-model="column"
          id="search-numero-externo"
          value="5"
        />&nbsp;<label for="search-numero-externo" class="control-label">
          Numero externo
        </label>
        &nbsp;&nbsp;&nbsp;<input
          type="text"
          id="input-search"
          v-on:change="search"
          class="form-control form-control-sm col-4"
          placeholder="type a number and press enter"
        />
      </div>
    </div>
    <TableTickets v-bind:tickets="tickets" />
  </div>
</template>

<script>
import Tickets from "../../models/tickets";
import Vue from "vue";
import TableTickets from '../../components/tickets/table-tickets-component.vue';

export default {
  name: "report-today",
  methods: {
    getTodayTickets: function () {
      const now = new Date();
      const day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
      const month = now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
      const year = now.getFullYear();
      const today = `${year}-${month}-${day}`;
      const tickets = new Tickets().getByDate(today, today);
      return tickets;
    },
    search: function () {
      let inputText = document.querySelector("#input-search").value;
      let searchText = inputText.toUpperCase();
      let trs = document.getElementsByTagName("TR");
      for (let i = 0; i < trs.length; i++) {
        const tr = trs[i];
        let td_col2 = tr.getElementsByTagName("TD")[2];
        let td_col6 = tr.getElementsByTagName("TD")[6];

        if (td_col2) {
          let td_col2_text = td_col2.textContent || td_col2.innerText;
          let td_col6_text = td_col6.textContent || td_col6.innerText;
          if ((td_col2_text.toUpperCase().indexOf(searchText) > -1) || (td_col6_text.toUpperCase().indexOf(searchText) > -1))
            tr.style.display = "";
          else tr.style.display = "none";
        }
      }
      
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

