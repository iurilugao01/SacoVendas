<script>
export default {
  name: "DeliveryInfo",
};
</script>

<template>
  <div class="centered-container">
    <div class="delivery-info-container">
      <div class="delivery-info-top">
        <span>Seus Pedidos</span>
        <i class="bi bi-x-circle"></i>
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

.bi-x-circle {
  font-size: 24px;
  cursor: pointer;
}
</style>
