<script>
export default {
  name: "DeliveryDescription",
  props: ["productImg", "productAlt"],
  methods: {
    onClickOutside() {
      this.$emit("close-delivery-description");
    },
  },
};
</script>

<template>
  <div v-click-outside="onClickOutside" class="centered-description">
    <div class="delivery-description-container">
      <div class="delivery-description-top">
        <span>Informações do pedido</span>
        <i
          class="bi bi-x-circle"
          @click="$emit('close-delivery-description')"
        ></i>
      </div>
      <img
        :src="productImg"
        :alt="productAlt ? productAlt : 'imagem do produto'"
        v-if="productImg"
      />
      <span><slot></slot></span>
    </div>
  </div>
</template>

<style scoped>
.centered-description {
  position: fixed;
  top: 30%;
  left: -60%;
}

.delivery-description-container {
  background-color: #181717;
  color: #fff;

  border-radius: 8px;
  padding: 20px;
  width: 60vh;
  min-height: 40vh;
  border-radius: 12px;
}

.delivery-description-top {
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
