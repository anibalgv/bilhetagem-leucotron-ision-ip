<template>
  <div class="row col-12">
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
        <th>DURACAO</th>
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
          <td> <i :class=" ticket.atributo == 'NAO ATENDIDA' ? 'fa fa-circle text-danger' : ticket.atributo == 'OCUPADA/INDISPONIVEL' ? 'fa fa-circle text-warning' : 'fa fa-circle text-success' " > </i> <span class="text-secondary small"> {{ ticket.atributo }} </span> </td>
          <td align="center"> {{ ticket.tempo_atendimento == "00:00:00" ? null : ticket.tempo_atendimento }} </td>
          <td align="center"> {{ ticket.tempo_ligacao == "00:00:00" ? null : ticket.tempo_ligacao }} </td>
        </tr>
      </tBody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableTickets',
  props: ["tickets"],
};
</script>

<style>
</style>