<template>
  <div id="report-today">
    <table class="table table-sm table-striped small tableFixHead" id="tableFixHead">
      <thead >
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
          <td>{{ticket.data_inicio}}</td>
          <td align="center">{{ticket.hora_inicio}}</td>
          <td align="center">{{ticket.responsavel}}</td>
          <td align="center">{{ticket.tempo_ligacao == '00:00:00' ? null : ticket.tempo_ligacao }}</td>
          <td
            align="center"
          >{{ticket.tempo_atendimento == '00:00:00' ? null : ticket.tempo_atendimento }}</td>
          <td>{{ticket.numero_externo}}</td>
          <td>{{ticket.atributo_ligacao}}</td>
          <td>{{ticket.tipo}}</td>
          <td>{{ticket.atributo}}</td>
          <td>{{ticket.nome_usuario}}</td>
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
      const day = now.getDate();
      const month =
        now.getMonth() + 1 < 10
          ? "0" + (now.getMonth() + 1)
          : now.getMonth() + 1;
      const year = now.getFullYear();
      const today = `${year}-${month}-${day}`;
      const tickets = new Tickets().getByDate(today, today);
      return tickets;
    },
  },
  data: function () {
    return {
      tickets: [],
    };
  },
  mounted: function () {
    this.tickets = this.getTodayTickets();
  },
};
</script>

