<template>
  <div class="global-container">
    <div class="top-line">
      <i class="bi bi-envelope"></i>
      <span>Caixa de entrada</span>
      <div class="entry-box">
        <div v-for="(notify, index) in notifys" :key="index" class="notify-msg">
          <div class="notify-header">
            <div>
              <i
                :class="{
                  bi: true,
                  'bi-star': notify.type === 'new',
                  'bi-box': notify.type === 'delivery',
                  'bi-book': notify.type === 'message',
                  'bi-exclamation-circle-fill': notify.type === 'alert',
                  'bi-info-circle': !notify.type,
                }"
              ></i>
              <span>{{ notify.tittle }}</span>
            </div>
            <div>
              <i
                class="bi bi-lightbulb-fill"
                v-if="!notify.viewed && notify.content"
              ></i>
              <i
                :class="{
                  bi: true,
                  'bi-caret-down': !hoveredIndexState.has(index),
                  'bi-caret-down-fill': hoveredIndexState.has(index),
                  'rotate-icon': notifyContentState.has(index),
                }"
                @click="toggleNotify(index, notify)"
                @mouseenter="hoveredIndexState.add(index)"
                @mouseleave="hoveredIndexState.delete(index)"
                v-if="notify.content"
              ></i>
            </div>
          </div>

          <transition
            name="expand"
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
          >
            <div class="notify-content" v-if="notifyContentState.has(index)">
              <span class="notify-content-txt">{{ notify.content }}</span>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EntryBox",
  data() {
    return {
      hoveredIndexState: new Set(),
      notifyContentState: new Set(),
      notifys: [
        {
          tittle: "Seu pedido saiu para entrega",
          type: "delivery",
          viewed: false,
          content: "lorem",
        },
        {
          tittle: "Adição da caixa de entrada",
          type: "new",
          viewed: false,
          content: "",
        },
        {
          tittle: "Mensagem do fornecedor",
          type: "message",
          viewed: false,
          content: "lorem",
        },
        {
          tittle: "Alerta! pagamentos pendentes",
          type: "alert",
          viewed: false,
          content:
            "ainda nao foi emitido o pagamento do lote de 32000 sacos de lixo de medio porte",
        },
        {
          tittle: "Novos produtos adicionados",
          viewed: false,
          content: "ienvidnvcsdncosdncodskmcakmcaos",
        },
      ],
    };
  },
  methods: {
    toggleNotify(index, notify) {
      notify.viewed = true;
      if (this.notifyContentState.has(index)) {
        this.notifyContentState.delete(index);
      } else {
        this.notifyContentState.add(index);
      }
    },
    beforeEnter(el) {
      el.style.height = "0";
    },
    enter(el) {
      el.style.height = el.scrollHeight + "px";
    },
    afterEnter(el) {
      el.style.height = "auto";
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + "px";
    },
    leave(el) {
      void el.offsetHeight;
      el.style.height = "0";
    },
    afterLeave(el) {
      el.style.height = "auto";
    },
  },
};
</script>

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
  border-radius: 12px;
  margin-left: 90px;
  margin-top: 30px;
  padding: 30px;
  display: flex;
  flex-direction: column;
}

i {
  margin-right: 8px;
}

.entry-box {
  background-color: #252525;
  width: 100%;
  margin-top: 12px;
  border-radius: 12px;
  min-height: 16rem;
  padding: 12px;
}

.notify-msg {
  display: flex;
  flex-direction: column;
  background-color: #181717;
  width: 100%;
  padding: 12px;
  border-radius: 16px;
  margin-bottom: 12px;
}

.notify-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.notify-content {
  margin-top: 12px;
  margin-left: 24px;
  width: 80%;
  overflow: hidden;
}

.expand-enter-active,
.expand-leave-active {
  transition: height 0.3s ease;
}
.expand-enter,
.expand-leave-to {
  height: 0;
}

.bi-lightbulb-fill {
  color: #d0ff00;
}

.bi-exclamation-circle-fill {
  color: #c51e01;
}

.bi-caret-down,
.bi-caret-down-fill {
  display: inline-block;
  cursor: pointer;
  font-size: 20px;
  transition: transform 0.3s ease-in-out;
}

.rotate-icon {
  transform: rotate(0.5turn);
}
</style>
