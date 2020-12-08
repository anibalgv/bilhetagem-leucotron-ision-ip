<template>
  <div style="margin-top: -20px">
    <div class="row">
      <div class="col-12">
      
      </div>
    </div>
    <div class="row col-12" v-if="tickets.length > 0">
      <TableTickets :tickets="tickets"></TableTickets>
      ELAPSED TIME: {{ totalTime }}
    </div>
  </div>
</template>

<script>
import Tickets from "../../models/tickets";
import Dates from "../../models/dates";
import Calls from "../../models/calls";
import TableTickets from '../../components/tickets/table-tickets-component.vue';

export default {
  name: "",
  methods: {
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
    
  },
  data: function () {
    return {
      tickets: [],
      ramais: [],
      dateInterval: { start: "2020-09-01", end: "2020-10-30" },
      totalTime: "00:00:00",
    };
  },
  mounted: function () {
    this.getTickets();
    this.monthText = new Dates().getMonthsText();
    let ramaisRaw = new Tickets().getRamais();
    ramaisRaw.map((ramal) => {
      this.ramais.push(ramal.responsavel);
    });
  },
  components: {
    'TableTickets': TableTickets
  }
};
</script>

<style>
</style>