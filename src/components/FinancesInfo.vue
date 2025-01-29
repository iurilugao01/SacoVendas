<script>
export default {
  name: "DeliveryInfo",
  methods: {
    onClickOutside() {
      this.$emit("close-transaction-info");
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
          <!--tag span indicando esc-->
          <i
            class="bi bi-x-circle"
            @click="$emit('close-transaction-info')"
          ></i>
        </div>
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
