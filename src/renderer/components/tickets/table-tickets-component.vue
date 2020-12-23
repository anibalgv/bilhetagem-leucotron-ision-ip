<template>
  <div class="col-12">
      <div class="row">
        <div class="col-8"></div>
        <div class="col-4">
          <div class="input-group">
            <input type="text" id="input-filter" class=" form-control form-control-sm" v-model="filterTerm"  placeholder="type a number" />
            <button class="btn btn-sm btn-primary" @click="filter">Filter</button>
          </div>
        </div>
      </div>
    <table class="table table-sm table-striped small table-hover" style="margin-top: 10px">
      <thead>
        <th><a href="#" @click="sort($event, 'id')"><i :class="[ sortProperty == 'id' ? sortDirection == 'asc' ? 'fa fa-arrow-up small' : 'fa fa-arrow-down' : '' ]"></i> DATA  </a></th>
        <th><a href="#" @click="sort($event, 'hora_inicio')"> HORA </a></th>
        <th><a href="#" @click="sort($event, 'responsavel')"> RAMAL </a></th>
        <th><a href="#" @click="sort($event, 'nome_usuario')"> NOME USUARIOAL </a></th>
        <th></th>
        <th><a href="#" @click="sort($event, 'tipo')"> TIPO </a></th>
        <th><a href="#" @click="sort($event, 'numero_externo')"> Nº EXTERNO </a></th>
        <th><a href="#" @click="sort($event, 'atributo')"> ATRIBUTO </a></th>
        <th> ATENDIMENTO </th>
        <th> DURACAO </th>
      </thead>
      <tBody>
        <tr v-for="ticket in orderedTickets" :key="ticket.id" >
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
var _ = require('lodash');
export default {
  name: 'TableTickets',
  props: ["tickets"],
  data: function(){
    return {
      sortProperty: 'id',
      sortDirection: 'asc',
      filterTerm: '',
    }
  },
  computed : {
    orderedTickets: function(){
      const sorted =  _.sortBy(this.tickets, this.sortProperty);
      const ordered = this.sortDirection == 'desc' ? sorted.reverse() : sorted;
      return ordered;
    },
  },
  methods: {
    sort: function(_event, _sortProperty){
      _event.preventDefault();
      if(this.sortProperty == _sortProperty)
        this.sortDirection = this.sortDirection == 'asc' ? 'desc' : 'asc';
      this.sortProperty = _sortProperty;
      console.log('[SORT][SORTPROPERTY] => ', this.sortProperty );
      console.log('[SORT][SORTDIRECTION] => ', this.sortDirection );
    },
    filter: function(){
      const filterTerm = this.filterTerm.toUpperCase();
      let TRs = document.getElementsByTagName('TR');
      for (let i = 0; i < TRs.length; i++) {
        const tr = TRs[i];
        if (tr){
          let responsavel = tr.getElementsByTagName('td')[2].innerText.toUpperCase();
        let numero = tr.getElementsByTagName('td')[6].innerText.toUpperCase();
        if( responsavel.indexOf(filterTerm) > -1 || numero.indexOf(filterTerm) > -1 )
          tr.style.display = '';
        else
          tr.style.display = 'none';
        }
      }
      console.log('[FILTER] ', filterTerm);
    },
    search: function(_term){

    },
  },
};
</script>

<style>
</style>