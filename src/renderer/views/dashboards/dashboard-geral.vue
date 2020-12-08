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
           <th>GENERAL INFORMATIONS</th>
           <th></th>
          </thead>
          <tbody>
            <tr v-for="info in generalChart.info" :key="info.label">
              <td>{{info.label}}</td> <td> {{info.count}}</td> 
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      
    </div>
  </div>
</template>

<script>
import Tickets from '../../models/tickets';
import Reports from "../../models/reports";
import ChartPie from "../../components/charts/chart-pie-component";
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
        info.push({label: key, count: value.length });
      });
      this.generalChart.labels = labels;
      this.generalChart.data = values;
      this.generalChart.info = info;
      console.log('[RENDERGENERALCHART]', this.generalChart);
    }
  },
  mounted: function () {
    
  },
  components: {
    ChartPie,
    DateBarComponent,
  },
};
</script>

<style>
</style>