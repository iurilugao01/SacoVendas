<script>
import DeliveryInfo from "./DeliveryInfo.vue";
export default {
  name: "AccountBox",
  components: {
    DeliveryInfo,
  },

  data() {
    return {
      showDeliveryInfo: false,
      showMoneyInfo: false,
    };
  },

  methods: {
    toggleShowDeliveryInfo() {
      this.showDeliveryInfo = !this.showDeliveryInfo;
    },
    toggleShowMoneyInfo() {
      this.showMoneyInfo = !this.showMoneyInfo;
    },
  },
};
</script>

<template>
  <div class="global-container">
    <div class="top-line">
      <span class="welcome-txt">Bem vindo de volta Usuario!</span>
      <img
        src="../assets/images/defaultProfileImage.jpg"
        alt="Foto de perfil"
      />
    </div>
    <div class="bottom-line">
      <div class="cash-box">
        <span>Saldo atual:</span>
        <span class="more-view-btn" @click="toggleShowMoneyInfo"
          >Vizualizar transações</span
        >
      </div>
      <div class="order-box">
        <span>Pedidos:</span>
        <span class="more-view-btn" @click="toggleShowDeliveryInfo()"
          >Ver mais</span
        >
      </div>
    </div>
  </div>
  <DeliveryInfo v-if="showDeliveryInfo" />
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

.global-container {
  background-color: #181717;
  color: #fff;

  width: 600px;
  height: auto;
  border-radius: 12px;
  margin-left: 90px;
  margin-top: 30px;
  padding: 20px;
  gap: 20px;

  display: flex;
  flex-direction: column;
}

.top-line {
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
}

.welcome-txt {
  align-items: center;
  font-size: 24px;
}

img {
  width: 60px;
  height: 60px;
  margin-left: 24px;
  border-radius: 50%;
  cursor: pointer;
}

.bottom-line {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.cash-box,
.order-box {
  background-color: #252525;
  padding: 10px 20px;
  border-radius: 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.more-view-btn {
  margin-top: 12px;
  font-size: 12px;
  color: #959595;
  cursor: pointer;
}
</style>
