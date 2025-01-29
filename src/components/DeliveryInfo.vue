<script>
import DeliveryDescription from "./DeliveryDescription.vue";

export default {
  name: "DeliveryInfo",
  components: {
    DeliveryDescription,
  },
  data() {
    return {
      deliveryDescriptionBox: null,

      deliverys: [
        {
          name: "geladeira",
          value: 3000,
          status: "",
          description: "definitvamente uma geladeira que gela coisas",
          img: "",
          alt: "",
        },
        {
          name: "fogao",
          value: 5000,
          status: "",
          description: "definitivamente um fogao que esquenta coisas",
          img: "",
          alt: "",
        },
        {
          name: "armario",
          value: 1000,
          status: "",
          description: "Com certeza um armario que serve pra guardar coisas",
          img: "",
          alt: "",
        },
      ],
    };
  },
  methods: {
    onClickOutside() {
      this.$emit("close-delivery-info");
    },
  },
};
</script>

<template>
  <div v-click-outside="onClickOutside" class="centered-container">
    <div class="delivery-info-container">
      <div class="delivery-info-top">
        <span>Seus Pedidos</span>
        <i class="bi bi-x-circle" @click="$emit('close-delivery-info')"></i>
      </div>
      <table>
        <tr>
          <th>Nome</th>
          <th>Valor</th>
          <th>Status</th>
          <th class="more-collum">Mais</th>
        </tr>
        <tr v-for="(delivery, index) in deliverys" :key="index">
          <td>{{ delivery.name ? delivery.name : "ERRO" }}</td>
          <td>{{ delivery.value ? delivery.value : "ERRO" }}</td>
          <td>{{ delivery.status ? delivery.status : "ERRO" }}</td>

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
</style>
