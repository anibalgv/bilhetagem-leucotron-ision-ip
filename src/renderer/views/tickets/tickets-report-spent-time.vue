<template>
  <div style="margin-top: -20px">
    <!-- <small>{{selectedDate}}</small> -->
    <div class="row">
      <div class="col-12">
        <div class="btn-group btn-group-sm mr-1 mb-1" v-on:click="setRamal">
          <div class="col-md-12">
            <button
              v-for="ramal in ramais"
              :key="ramal.toString()"
              class="year btn"
            >
              {{ ramal }}
            </button>
          </div>
        </div>
        <!-- </div> -->
        <!-- <div class="row"> -->

        <div
          v-if="selectedDate.year || selectedDate.month || selectedDate.day"
          class="btn-group btn-group-sm mr-1 mb-1 pull-right"
        >
          <button class="btn btn-warning">
            {{ monthText[selectedDate.month - 1] || "" }}
            {{ selectedDate.day }} {{ selectedDate.year }}
          </button>
        </div>
      </div>
    </div>

    <div class="row col-12" v-if="tickets.length > 0">
      <table
        class="table table-sm small table-hover table-hcenter js-dataTable-buttons"
      >
        <thead>
          <th>DATA</th>
          <th>HORA</th>
          <th>RAMAL</th>
          <th>LIGACAO</th>
          <th>ATENDIMENTO</th>
          <th>Nº EXTERNO</th>
          <th></th>
          <th>TIPO</th>
          <th>ATRIBUTO</th>
          <th>NOME USUARIO</th>
        </thead>
        <tBody>
          <tr v-for="ticket in tickets" :key="ticket.id">
            <td>{{ ticket.data_inicio }}</td>
            <td align="center">{{ ticket.hora_inicio }}</td>
            <td align="center">{{ ticket.responsavel }}</td>
            <td align="center">
              {{
                ticket.tempo_ligacao == "00:00:00" ? null : ticket.tempo_ligacao
              }}
            </td>
            <td align="center"> {{ ticket.tempo_atendimento == "00:00:00" ? null : ticket.tempo_atendimento }} </td>
            <td>{{ ticket.numero_externo }}</td>
            <td>{{ ticket.atributo_ligacao }}</td>
            <td>{{ ticket.tipo }}</td>
            <td>{{ ticket.atributo }}</td>
            <td>{{ ticket.nome_usuario }}</td>
          </tr>
        </tBody>
      </table>
      ELAPSED TIME: {{ totalTime }}
    </div>
  </div>
</template>

<script>
import Tickets from "../../models/tickets";
import Dates from "../../models/dates";
import Calls from "../../models/calls";

export default {
  name: "",
  methods: {
    setDay: function (event) {
      this.removeClassActive("day");
      event.target.classList.add("active");
      this.selectedDate["day"] = event.target.dataset.day;
      this.getTickets();
    },
    setMonth: function (event) {
      this.removeClassActive("month");
      event.target.classList.add("active");
      this.selectedDate["month"] = event.target.dataset.month;
      this.getTickets();
    },
    setRamal: function (event) {
      this.removeClassActive("year");
      event.target.classList.add("active");
      this.selectedDate["year"] = event.target.dataset.year;
      this.getTickets();
    },
    getTickets() {
      let totalSeconds = 0;
      const dates = new Dates();
      const ticketsRaw = new Tickets().getByDate( this.dateInterval.start, this.dateInterval.end );
      const ticketsFiltred = ticketsRaw.filter((ticket) => {
        return ticket.tipo == "ORIGINADA";
      });
      this.tickets = ticketsFiltred;
      for (let i = 0; i < ticketsFiltred.length; i++) {
        let ticket = ticketsFiltred[i];
        let tmp = dates.TimeToSeconds(ticket.tempo_ligacao);
        totalSeconds += tmp ;
      }
      this.totalTime = dates.SecondsToTime(totalSeconds);
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
      ramais: [],
      dateInterval: { start: "2020-09-01", end: "2020-10-30" },
      totalTime: "00:00:00",
    };
  },
  mounted: function () {
    this.getTickets();
    this.getYears();
    this.monthText = new Dates().getMonthsText();
    let ramaisRaw = new Tickets().getRamais();
    ramaisRaw.map((ramal) => {
      this.ramais.push(ramal.responsavel);
    });
  },
};
</script>

<style>
</style>