<template>
  <div style="margin-top: -20px;">
    <!-- <small>{{selectedDate}}</small> -->
    <div class="row">
      <div class="btn-group btn-group-sm mr-1 mb-1" v-on:click="setYear">
        <button
          v-for="year in years"
          :key="year.toString()"
          :data-year="year[0]"
          class="year btn btn-success active"
        >{{year[0]}}</button>
      </div>
      <!-- </div> -->
      <!-- <div class="row"> -->
      <div class="btn-group btn-group-sm mr-1 mb-1" v-on:click="setMonth">
        <button data-month type="button" class="month btn btn-info active" style="display:none">ALL</button>
        <button data-month="01" type="button" class="month btn btn-info">JAN</button>
        <button data-month="02" type="button" class="month btn btn-info">FEB</button>
        <button data-month="03" type="button" class="month btn btn-info">MAR</button>
        <button data-month="04" type="button" class="month btn btn-info">APR</button>
        <button data-month="05" type="button" class="month btn btn-info">MAY</button>
        <button data-month="06" type="button" class="month btn btn-info">JUN</button>
        <button data-month="07" type="button" class="month btn btn-info">JUL</button>
        <button data-month="08" type="button" class="month btn btn-info">AGO</button>
        <button data-month="09" type="button" class="month btn btn-info">SET</button>
        <button data-month="10" type="button" class="month btn btn-info">OCT</button>
        <button data-month="11" type="button" class="month btn btn-info">NOV</button>
        <button data-month="12" type="button" class="month btn btn-info">DEC</button>
      </div>
    </div>
    <div class="row">
      <div class="btn-group btn-group-sm mr-2 mb-2" v-on:click="setDay">
        <button data-day type="button" class="day btn btn-primary active">ALL</button>
        <button data-day="01" type="button" class="day btn btn-primary">1</button>
        <button data-day="02" type="button" class="day btn btn-primary">2</button>
        <button data-day="03" type="button" class="day btn btn-primary">3</button>
        <button data-day="04" type="button" class="day btn btn-primary">4</button>
        <button data-day="05" type="button" class="day btn btn-primary">5</button>
        <button data-day="07" type="button" class="day btn btn-primary">6</button>
        <button data-day="08" type="button" class="day btn btn-primary">7</button>
        <button data-day="09" type="button" class="day btn btn-primary">8</button>
        <button data-day="10" type="button" class="day btn btn-primary">9</button>
        <button data-day="11" type="button" class="day btn btn-primary">10</button>
        <button data-day="12" type="button" class="day btn btn-primary">11</button>
        <button data-day="13" type="button" class="day btn btn-primary">12</button>
        <button data-day="14" type="button" class="day btn btn-primary">13</button>
        <button data-day="15" type="button" class="day btn btn-primary">14</button>
        <button data-day="16" type="button" class="day btn btn-primary">15</button>
        <!-- </div> -->
        <!-- <div class="btn-group btn-group-sm mr-2 mb-2" v-on:click="setDay"> -->
        <!-- <button type="button" class="day btn btn-primary active">ALL DAYS</button> -->
        <button data-day="16" type="button" class="day btn btn-primary">16</button>
        <button data-day="17" type="button" class="day btn btn-primary">17</button>
        <button data-day="18" type="button" class="day btn btn-primary">18</button>
        <button data-day="19" type="button" class="day btn btn-primary">19</button>
        <button data-day="20" type="button" class="day btn btn-primary">20</button>
        <button data-day="21" type="button" class="day btn btn-primary">21</button>
        <button data-day="22" type="button" class="day btn btn-primary">22</button>
        <button data-day="23" type="button" class="day btn btn-primary">23</button>
        <button data-day="24" type="button" class="day btn btn-primary">24</button>
        <button data-day="25" type="button" class="day btn btn-primary">25</button>
        <button data-day="26" type="button" class="day btn btn-primary">26</button>
        <button data-day="27" type="button" class="day btn btn-primary">27</button>
        <button data-day="28" type="button" class="day btn btn-primary">28</button>
        <button data-day="29" type="button" class="day btn btn-primary">29</button>
        <button data-day="30" type="button" class="day btn btn-primary">30</button>
        <button data-day="31" type="button" class="day btn btn-primary">31</button>
      </div>
    </div>

    <div class="row col-12 " v-if="tickets.length > 0">
      <table class="table table-sm small table-hover table-hcenter js-dataTable-buttons">
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
  </div>
</template>

<script>
import Tickets from "../../models/tickets";
// const query = new Tickets().getByMonth('2020','06', null);
// console.log('query:', query);

export default {
  name: "reports-month",
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
    setYear: function (event) {
      this.removeClassActive("year");
      event.target.classList.add("active");
      this.selectedDate["year"] = event.target.dataset.year;
      this.getTickets();
    },
    getTickets() {
      if (this.selectedDate.year && this.selectedDate.month) {
        this.tickets = new Tickets().getByYearMonthDay(
          this.selectedDate.year,
          this.selectedDate.month,
          this.selectedDate.day
        );
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
    };
  },
  mounted: function () {
    // this.getTickets();
    this.getYears();
  },
};

// jQuery(".js-dataTable-buttons").dataTable({
//   pageLength: 10,
//   lengthMenu: [
//     [5, 10, 15, 20],
//     [5, 10, 15, 20],
//   ],
//   autoWidth: false,
//   buttons: [
//     { extend: "copy", className: "btn btn-sm btn-alt-primary" },
//     { extend: "csv", className: "btn btn-sm btn-alt-primary" },
//     { extend: "print", className: "btn btn-sm btn-alt-primary" },
//   ],
//   dom:
//     "<'row'<'col-sm-12'<'text-center bg-body-light py-2 mb-2'B>>>" +
//     "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
// });
</script>


<style>
</style>