<script>
export default {
  name: "DeliveryInfo",
  data() {
    return {
      transactionDescriptionBox: null,

      transactionsData: [
        {
          name: "Leno brega",
          value: 3240,
          type: "received",
          data: "11/02",
        },
        {
          name: "John doe",
          value: 0.2,
          type: "submited",
          data: "11/02",
        },
      ],
    };
  },
  methods: {
    onClickOutside() {
      this.$emit("close-transaction-info");
    },
  },
  computed: {
    transactionValue() {
      return (value, type) => {
        if (type === "submited") {
          return "-" + value;
        }
        return "+" + value;
      };
    },
  },
};
</script>

<template>
  <div v-click-outside="onClickOutside" class="centered-container">
    <div class="delivery-info-container">
      <div class="delivery-info-top">
        <span>Historico de transações</span>
        <div>
          <i
            class="bi bi-x-circle"
            @click="$emit('close-transaction-info')"
          ></i>
        </div>
      </div>
      <table>
        <tr>
          <th>Nome</th>
          <th>Valor</th>
          <th>Data</th>
          <th class="more-collum">Mais</th>
        </tr>
        <tr v-for="(transaction, index) in transactionsData" :key="index">
          <td>{{ transaction.name ? transaction.name : "ERRO" }}</td>
          <td
            :class="{
              'positive-value': transaction.type === 'received',
              'negative-value': transaction.type === 'submited',
            }"
          >
            {{ transactionValue(transaction.value, transaction.type) }}
          </td>
          <td>{{ transaction.data ? transaction.data : "ERRO" }}</td>

          <td class="more-collum">
            <i
              class="bi bi-plus-square"
              @click="
                deliveryDescriptionBox =
                  deliveryDescriptionBox === index
                    ? false
                    : (deliveryDescriptionBox = index)
              "
            ></i>
          </td>

          <DeliveryDescription
            @close-delivery-description="deliveryDescriptionBox = null"
            v-if="deliveryDescriptionBox === index"
            :productImg="delivery.img"
            :productAlt="delivery.alt"
          >
            {{ index }}
          </DeliveryDescription>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
.centered-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.delivery-info-container {
  background-color: #181717;
  color: #fff;

  border-radius: 8px;
  padding: 20px;
  width: 70vh;
  min-height: 60vh;
  border-radius: 12px;
}

.delivery-info-top {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

.bi-x-circle {
  font-size: 24px;
  cursor: pointer;
}

table {
  width: 100%;
  background-color: #0aa533;
  border-radius: 12px;
  border-spacing: 2px;
}

th,
td {
  height: 40px;
}

th {
  background-color: #252525;
}

td {
  background-color: #000;
  text-align: center;
}

.more-collum {
  max-width: 20px;
}

.bi-plus-square {
  cursor: pointer;
  font-size: 20px;
}

.positive-value {
  color: #026026;
}

.negative-value {
  color: #e11c12;
}
</style>
