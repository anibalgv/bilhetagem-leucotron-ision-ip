<template >
  <div class="col-12">
    <div class="row" style="z-index: 4; margin-top: -20px;">
        <DateBarComponent @onSelect="getSelectedDate" />
    </div>
    <div id="div-charts" v-show="generalChart.info[0]">
      <div class="block-header block-header-default" style="margin-top: 20px;">
            <h3 class="block-title strong">INFORMACAO GERAL</h3>
            <div class="block-options">
            </div>
          </div>
          <div class="block-content" style="background-color: #ffffff">
            <div >
              <div class="row">
                <div class="col-md-12 col-xl-12">
                  <div>
                    <div>
                      <div class="block-content">
                        <div class="row"  style="z-index: 1; margin-top: -110px; backgroud-color: #ffffff">
                          <div class="col-6">
                            <ChartPie id="generalChart" label="GENERAL INFOS" :labels="generalChart.labels" :data="generalChart.data" :options='generalChart.options' />
                          </div>
                          <div class="col-2"></div>
                          <div class="col-4" style="margin-top: 100px;" >
                            <table class="table table-sm small">
                              <thead>
                              <th>GENERAL</th>
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="block-header block-header-default" style="margin-top:20px;">
            <h3 class="block-title strong">LIGACOES RECEBIDAS  <small class="small">(TOP 1O)</small> </h3>
            <div class="block-options">
            </div>
          </div>
          <div class="block-content" style="background-color: #ffffff">
            <div >
              <div class="row">
                <div class="col-md-12 col-xl-12">
                  <div>
                    <div>
                      <div class="block-content">
                        <div class="row"  style="z-index: 1; backgroud-color: #ffffff; margin-top: -20px">
                          <div class="col-5">
                            <ChartDoughnut id="received-chart" label="RECEBIDAS" :labels="receivedChart.labels" :data="receivedChart.data" :options='generalChart.options' />
                          </div>
                          <div class="col-3"></div>
                          <div class="col-4" style="margin-top: 20px;">
                            <table class="table table-sm small">
                              <thead>
                                <th>RAMAL</th>
                                <th>PERCENT</th>
                                <th>TOTAL</th>
                              </thead>
                              <tbody>
                                <tr v-for="info in receivedChart.info" :key="info.responsavel">
                                  <td align="left">{{info.responsavel}}</td> <td align="left">{{ info.percent}} %</td>  <td align="left"> {{info.count}}</td> 
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="block-header block-header-default" style="margin-top: 20px;">
            <h3 class="block-title strong">LIGACOES REALIZADAS</h3>
            <div class="block-options">
            </div>
          </div>
          <div class="block-content" style="background-color: #ffffff">
            <div >
              <div class="row">
                <div class="col-md-12 col-xl-12">
                  <div>
                    <div>
                      <div class="block-content">
                        <div class="row"  style="z-index: 1; backgroud-color: #ffffff; margin-top: -20px;">
                          <div class="col-5">
                            <ChartDoughnut id="realizadas-chart" label="" :labels="realizadasChart.labels" :data="realizadasChart.data" :options='generalChart.options' />
                          </div>
                          <div class="col-3"></div>
                          <div class="col-4" style="margin-top: 20px;">
                            <table class="table table-sm small">
                              <thead>
                              <th>RAMAL </th>
                              <th>PERCENT</th>
                              <th>TOTAL</th>
                              </thead>
                              <tbody>
                                <tr v-for="info in realizadasChart.info" :key="info.responsavel">
                                  <td>{{info.responsavel}}</td> <td align="right">{{ info.percent}} %</td>  <td align="right"> {{info.count}}</td> 
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div> <!--END div-charts -->
  </div>
</template>

<script>
import Tickets from '../../models/tickets';
import Reports from "../../models/reports";
import DateBarComponent from "../../components/dates/date-bar-component";
import ChartPie from "../../components/charts/chart-pie-component";
import ChartRadar from "../../components/charts/chart-radar-component";
import ChartDoughnut from "../../components/charts/chart-doughnut-component";
import ChartHorizontalBar from "../../components/charts/chart-horizontalbar-component";
import BoxTitleSimple from "../../components/boxes/box-title-simple";

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
      realizadasChart: {
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
      this.RenderRecebidasChart();
      this.RenderOriginadasChart();
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
      this.generalChart.info = new Reports().SortByCountInverse(info);
      console.log('[RENDERGENERALCHART]', this.generalChart);
    },
    RenderRecebidasChart(){
      console.log('[RENDERRECEBIDASCHART]');
      const recebidas = this.tickets.filter((item)=>{
        return item.tipo == "RECEBIDA";
      });
      let recebidasGrouped = recebidas.reduce((prev, current, index)=>{
        prev[current.responsavel] = prev[current.responsavel] ? (prev[current.responsavel] + 1) : 1 ;
        return prev;
      },{});
      let info = [];
      Object.entries(recebidasGrouped).forEach(([key, value])=>{
        info.push({
          responsavel: key, 
          count : value,
          percent: (( 100 / recebidas.length) * value).toFixed(2),
        });
      });
      let tickets = info.sort((a, b) => b.count - a.count); 
      tickets = tickets.length > 10 ? tickets.slice(0, 10) : tickets;
      this.receivedChart.labels = tickets.map(item => item.responsavel);
      this.receivedChart.data = tickets.map(item => item.count);
      this.receivedChart.info = tickets;
    },
    RenderOriginadasChart(){
      console.log('[RENDERORIGINADASCHART]');
      const originadas = this.tickets.filter((item)=>{
        return item.tipo == "ORIGINADA";
      });
      let originadasGrouped = originadas.reduce((prev, current, index) => {
        prev[current.responsavel] = prev[current.responsavel] ? (prev[current.responsavel] + 1) : 1;
        return prev;
      },{});
      let info = [];
      Object.entries(originadasGrouped).forEach(([key, value])=>{
        info.push({
          responsavel: key, 
          count : value,
          percent: (( 100 / originadas.length) * value).toFixed(2),
        });
      });
      let tickets = info.sort((a, b) => b.count - a.count );
      tickets = tickets.length > 0 ? tickets.slice(0, 10) : tickets;
      this.realizadasChart.labels = tickets.map( item => item.responsavel);
      this.realizadasChart.data = tickets.map( item => item.count);
      this.realizadasChart.info = tickets;
    },
  },  //end methods
 
  mounted: function () {
    
  },
  components: {
    ChartPie,
    ChartRadar,
    ChartDoughnut,
    ChartHorizontalBar,
    DateBarComponent,
    BoxTitleSimple,
  },
};
</script>

<style>
</style>