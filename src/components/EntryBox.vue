<script>
export default {
  name: "EntryBox",
  data() {
    return {
      notifys: [
        {
          tittle: "Notificação de teste",
          type: "delivery",
          viewed: false,
          content: "lorem",
        },
        {
          tittle: "Notificação de teste",
          type: "new",
          viewed: true,
          content: "",
        },
        {
          tittle: "Notificação de teste",
          type: "message",
          viewed: false,
          content: "",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="global-container">
    <div class="top-line">
      <i class="bi bi-envelope"></i>
      <span>Caixa de entrada</span>
      <div class="entry-box">
        <div class="notify-msg" v-for="(notify, index) in notifys" :key="index">
          <div class="notify-header">
            <div>
              <i class="bi bi-star" v-if="notify.type === 'new'"></i>
              <i class="bi bi-box" v-if="notify.type === 'delivery'"></i>
              <i class="bi bi-book" v-if="notify.type === 'message'"></i>

              <span>{{ notify.tittle }}</span>
            </div>
            <div>
              <i class="bi bi-caret-down" v-if="notify.content"></i>
              <i class="bi bi-lightbulb-fill" v-if="!notify.viewed"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  padding: 30px;
  gap: 20px;

  display: flex;
  flex-direction: column;
}

i {
  margin-right: 8px;
}

.entry-box {
  background-color: #252525;
  width: 100%;
  height: auto;
  margin-top: 12px;
  border-radius: 12px;
  min-height: 16rem;
  padding: 12px;
}

.notify-msg {
  display: flex;
  background-color: #181717;
  width: 100%;
  height: 6vh;
  padding: 12px;
  border-radius: 16px;
  margin-bottom: 12px;
  align-items: center;
}
</style>
