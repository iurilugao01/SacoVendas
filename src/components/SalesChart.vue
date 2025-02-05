<script>
import { defineComponent, reactive, computed } from "vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chart-3";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default defineComponent({
  components: { BarChart: Bar },
  setup() {
    const salesData = reactive({
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
      values: [5000, 8000, 6000, 7000, 9000, 11000],
    });

    const chartData = computed(() => ({
      labels: salesData.labels,
      datasets: [
        {
          label: "Total de Vendas",
          data: salesData.values,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    }));

    const chartOptions = computed(() => ({
      responsive: true,
      plugins: {
        tooltip: {
          callbacks: {
            label: (tooltipItem) => `R$ ${tooltipItem.raw.toLocaleString()}`,
          },
        },
      },
    }));

    return { chartData, chartOptions };
  },
});
</script>

<template>
  <div class="chart-container">
    <BarChart :chart-data="chartData" :chart-options="chartOptions" />
  </div>
</template>

<style scoped>
.chart-container {
  max-width: 600px;
  margin: auto;
}
</style>
