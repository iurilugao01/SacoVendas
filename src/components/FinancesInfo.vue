<script>
export default {
  name: "DeliveryInfo",
  methods: {
    closeBox() {
      this.$emit("close-transaction-info");
    },
  },
};
</script>

<template>
  <div class="centered-container">
    <div class="delivery-info-container">
      <div class="delivery-info-top">
        <span>Historico de transações</span>
        <i class="bi bi-x-circle" @click="closeBox()"></i>
      </div>
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
</style>
