<template >
  <div class="col-12">
    <div class="row" style="z-index: 4; margin-top: -20px;">
        <DateBarComponent @onSelect="getSelectedDate" />
    </div>
    <div class="row"  style="z-index: 1; margin-top: -60;">
      <div class="col-6">
        <ChartPie id="generalChart" label="GENERAL INFOS" :labels="generalChart.labels" :data="generalChart.data" :options='generalChart.options' />
      </div>
      <div class="col-2"></div>
      <div class="col-4" style="margin-top: 135px;" v-show="generalChart.info[0]">
        <table class="table table-sm small">
          <thead>
           <th>GENERAL </th>
           <th>PERCENT</th>
           <th>TOTAL</th>
          </thead>
          <tbody>
            <tr v-for="info in generalChart.info" :key="info.label">
              <td>{{info.label}}</td> <td align="right">{{ info.percent}} %</td>  <td align="right"> {{info.count}}</td> 
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-5">
        <ChartHorizontalBar id="received-chart" label="RECEIVED INFOS" :labels="receivedChart.labels" :data="receivedChart.data" :options='generalChart.options' />
      </div>
      <div class="col-4"></div>
      <div class="col-3" style="margin-top: 0px;" v-show="receivedChart.labels[0]">
        <table class="table table-sm small table-striped">
          <thead>
           <th>RAMAL </th>
           <th>PERCENT</th>
           <th>TOTAL</th>
          </thead>
          <tbody>
            <tr v-for="info in receivedChart.info" :key="info.responsavel">
              <td>{{info.responsavel}}</td> <td align="right">{{ info.percent}} %</td>  <td align="right"> {{info.count}}</td> 
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Tickets from '../../models/tickets';
import Reports from "../../models/reports";
import ChartPie from "../../components/charts/chart-pie-component";
import ChartDoughnut from "../../components/charts/chart-doughnut-component";
import ChartHorizontalBar from "../../components/charts/chart-horizontalbar-component";
import DateBarComponent from "../../components/dates/date-bar-component";

export default {
  data: function () {
    return {
      generalChart : {
        labels: [],
        options:{
          responsive: true,
          maintainAspectRatio: true,
          legend: {
            display: true,
            position: "right",
            labels: {
              // fontColor: "white",
              // boxWidth: 20,
              // padding: 20,
            },
          },
        },
        data: [],
        info: [],
      },
      receivedChart: {
        labels : [],
        data: [],
        info: [],
        percent: [],
      },
      selectedDate : null,
      tickets : [],
    };
  }, //EMD data
  methods: {
    getSelectedDate(_response){
      if(!_response.date){
        return false;
      }
      this.selectedDate = _response.date;
      this.tickets = new Tickets().getByYearMonthDay( this.selectedDate.year, this.selectedDate.month, this.selectedDate.day );
      this.renderGeneralChart();
      this.renderOriginatedChart();
    },
    renderGeneralChart(){
      console.log('[RENDERGENERALCHART]');
      const generalCount = new Reports().getGeneralCount(this.tickets);
      const labels = []; 
      const values = [];
      const info   = [];
      Object.entries(generalCount).forEach(([key, value])=>{
        labels.push(key);
        values.push(value.length);
        info.push({
          label: key, 
          count: value.length, 
          percent: ((100 / this.tickets.length) * value.length ).toFixed(2)  
        });
      });
      this.generalChart.labels = labels;
      this.generalChart.data = values;
      this.generalChart.info = info;
      console.log('[RENDERGENERALCHART]', this.generalChart);
    },
    renderOriginatedChart(){
      console.log('[RENDERORIGINATEDCHART]');
      const filteredTickets = this.tickets.filter((item)=>{
        return item.tipo == "RECEBIDA";
      });
      let tickets = filteredTickets.reduce((prev, current, index)=>{
        prev[current.responsavel] = prev[current.responsavel] ? (prev[current.responsavel] + 1) : 1 ;
        return prev;
      },{});
      let labels = [];
      let data = [];
      let info = [];
      Object.entries(tickets).forEach(([key, value])=>{
        labels.push(key);
        data.push(value);
        info.push({
          responsavel: key, 
          count : value,
          percent: (( 100 / filteredTickets.length) * value).toFixed(2),
        });
      });
      this.receivedChart.labels = labels;
      this.receivedChart.data = data;
      this.receivedChart.info = info;
      console.log('filteredTickets :', filteredTickets);
      console.log('tickets :', tickets);
      console.log('receivedChart :', this.receivedChart);
    },
  },  //end methods
 
  mounted: function () {
    
  },
  components: {
    ChartPie,
    ChartDoughnut,
    ChartHorizontalBar,
    DateBarComponent,
  },
};
</script>

<style>
</style>