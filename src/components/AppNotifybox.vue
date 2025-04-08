<script setup>
const notifys = [
  {
    tittle: "Seu pedido saiu para entrega",
    type: "delivery",
    viewed: false,
    dateCreated: "2024-08-24 13:38:56",
    content: "lorem",
  },
  {
    tittle: "Adição da caixa de entrada",
    type: "new",
    viewed: false,
    dateCreated: "2024-08-24 13:38:56",
    content: "",
  },
  {
    tittle: "Mensagem do fornecedor",
    type: "message",
    viewed: false,
    dateCreated: "2024-08-24 13:38:56",
    content: "lorem",
  },
  {
    tittle: "Alerta! pagamentos pendentes",
    type: "alert",
    viewed: false,
    dateCreated: "2024-08-24 13:38:56",
    content:
      "ainda nao foi emitido o pagamento do lote de 32000 sacos de lixo de medio porte",
  },
  {
    tittle: "Novos produtos adicionados",
    viewed: false,
    dateCreated: "2024-08-24 13:38:56",
    content: "ienvidnvcsdncosdncodskmcakmcaos",
  },
];
</script>

<template>
  <div class="notify-container">
    <div class="notify-container-header">
      <span>Notificações</span>
      <span class="mark-all-btn">
        Marcar <br />
        como lidas
      </span>
    </div>
    <div class="entry-box" v-for="(notify, index) in notifys" :key="index">
      <div class="notify-message">
        <i
          :class="{
            bi: true,
            'bi-star': notify.type === 'new',
            'bi-box': notify.type === 'delivery',
            'bi-chat-dots': notify.type === 'message',
            'bi-exclamation-circle-fill': notify.type === 'alert',
            'bi-info-circle': !notify.type,
          }"
        ></i>
        <div class="notify-message-content">
          <span>{{ notify.tittle }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.notify-container {
  display: flex;
  flex-direction: column;
  position: absolute;

  background-color: #252525;
  width: 16rem;
  margin-top: 15rem;
  right: 10rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: #000;
}

.notify-container-header {
  display: flex;
  justify-content: space-between;
}

.mark-all-btn {
  font-size: 12px;
  cursor: pointer;
}

.notify-message {
  display: flex;
  flex-direction: row;
}

.notify-message-content {
  margin-left: 12px;
}

.bi-lightbulb-fill {
  color: #d0ff00;
}

.bi-exclamation-circle-fill {
  color: #c51e01;
}
</style>
