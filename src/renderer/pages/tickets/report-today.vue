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
    <table class="table table-sm table-striped small table-hover" style="margin-top: 10px" >
      <thead>
        <th>DATA</th>
        <th>HORA</th>
        <th>RAMAL</th>
        <th>NOME USUARIO</th>
        <th></th>
        <th>TIPO</th>
        <th>Nº EXTERNO</th>
        <th>ATRIBUTO</th>
        <th>ATENDIMENTO</th>
        <th>LIGACAO</th>
      </thead>
      <tBody>
        <tr v-for="ticket in tickets" :key="ticket.id">
          <td>{{ ticket.data_inicio }}</td>
          <td align="center">{{ ticket.hora_inicio }}</td>
          <td align="center">{{ ticket.responsavel }}</td>
          <td>{{ ticket.nome_usuario }}</td>
          <td>{{ ticket.atributo_ligacao }}</td>
          <td>{{ ticket.tipo }}</td>
          <td>{{ ticket.numero_externo }}</td>
          <td :class=" ticket.atributo == 'NAO ATENDIDA' ? 'bg-danger-light' : ticket.atributo == 'OCUPADA/INDISPONIVEL' ? 'bg-warning-light' : 'bg-success-light' " > {{ ticket.atributo }} </td>
          <td align="center"> {{ ticket.tempo_atendimento == "00:00:00" ? null : ticket.tempo_atendimento }} </td>
          <td align="center"> {{ ticket.tempo_ligacao == "00:00:00" ? null : ticket.tempo_ligacao }} </td>
        </tr>
      </tBody>
    </table>
  </div>
</template>

<script>
import Tickets from "../../models/tickets";
import Vue from "vue";

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
};
</script>

