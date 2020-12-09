<script>
import { HorizontalBar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  name: "ChartHorizontalBar",
  extends: HorizontalBar,
  mixins: [reactiveProp],
  props: ["label", "labels", "data", "options", "chartData"],
  mounted: function () {
    this.renderHorizontalBarChart();
  },
  computed: {
    ChartData: function () {
      return this.data;
    },
  },
  methods: {
    renderHorizontalBarChart: function () {
      this.renderChart(
        {
          labels: this.labels,
          datasets: [
            {
              
              label: this.label,
              data: this.ChartData,
              backgroundColor: [
                "rgba(171, 227, 125, 1)",
                "rgba(250, 219, 125, 1)",
                "rgba(117, 176, 235, 1)",

                "rgba(255, 0,0, 0.5)",
                "rgba(255, 0, 0, 0.25)",
                "rgba(255, 0, 0, 0.15)",

                "rgba(0, 231, 255, 0.9)",
                "rgba(0, 231, 255, 0.25)",
                "rgba(0, 231, 255, 0)",
              ],
              hoverBackgroundColor: [
                "rgba(171, 227, 125, .75)",
                "rgba(250, 219, 125, .75)",
                "rgba(117, 176, 235, .75)",
              ],
            },
          ],
          
        },
        this.options
      );
    },
  },
  watch: {
    data: function () {
      this.renderHorizontalBarChart();
    },
  },
}; //END export
</script>

<style>
</style>