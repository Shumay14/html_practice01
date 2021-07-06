<template>
  <div>
    <button @click="inputAmount(coin)" :key="coin" v-for="coin in coins">
      {{ coin }} 원 투입
    </button>
    <br />
    <label>음료자판기 잔돈:</label>
    <input type="text" v-model="total_vending_amount" readonly />
    <label>투입금액:</label>
    <input type="text" v-model="total_input_amount" readonly />
    <label>내지갑:</label>
    <input type="text" v-model="total_customer_amount" readonly />
    <br />
    <button
      @click="requestDrink(drink.drinkId)"
      :class="{ active: drink.price <= total_input_amount }"
      :key="drink.drinkId"
      v-for="drink in drinkList"
    >
      {{ drink.drinkName }} ({{ drink.price }}원, 재고:{{ drink.stock }})
    </button>
    <br />
    <div
      style="
        width: 100%;
        height: 150px;
        overflow-y: auto;
        border: 2px solid #222;
      "
    >
      <p :key="i" v-for="(msg, i) in messageList">{{ msg }}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      coins: [100, 500, 1000],
      total_vending_amount: 1000,
      total_input_amount: 0,
      total_customer_amount: 10000,
      messageList: [],
      drinkList: [
        {
          drinkId: "1",
          drinkName: "코카콜라",
          price: 700,
          stock: 5,
        },
        {
          drinkId: "2",
          drinkName: "오렌지주스",
          price: 1200,
          stock: 5,
        },
        {
          drinkId: "3",
          drinkName: "커피",
          price: 500,
          stock: 5,
        },
        {
          drinkId: "4",
          drinkName: "물",
          price: 700,
          stock: 5,
        },
        {
          drinkId: "5",
          drinkName: "보리차",
          price: 1200,
          stock: 5,
        },
        {
          drinkId: "6",
          drinkName: "포카리",
          price: 1000,
          stock: 5,
        },
        {
          drinkId: "7",
          drinkName: "뽀로로",
          price: 1300,
          stock: 5,
        },
      ],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    inputAmount(amount) {
      if (amount <= this.total_customer_amount) {
        //고객이 투입한 총금액
        this.total_input_amount += amount;
        //고객지갑에서 투입한 총금액 차감
        this.total_customer_amount -= amount;
        //음료자판기 가지고있는 잔돈 계산
        this.total_vending_amount += amount;

        this.messageList.push(`${amount}이 투입되었습니다.`);
        this.messageList.push(
          `총 투입금액은 ${this.total_input_amount} 입니다.`
        );
        this.messageList.push(
          `당신 지갑에는 ${this.total_customer_amount} 이 남았습니다.`
        );
      } else {
        this.messageList.push(
          `내 지갑에 남은 돈은 ${this.total_customer_amount} 입니다.`
        );
        this.messageList.push(`${amount} 를 투입할 수 없습니다.`);
      }
    },
    requestDrink(drinkId) {
      //바로 객체를 만들어주기위해 [0]을 넣음
      let drink = this.drinkList.filter((d) => d.drinkId == drinkId)[0];

      //재고가 0보다 큰 경우 if 문 실행, 아니면 else
      if (drink.stock > 0) {
        //음료가격이 투입한 금액보다 작거나 같은경우
        if (drink.price <= this.total_input_amount) {
          //changes = 총투입금액 - 음료가격
          let changes = this.total_input_amount - drink.price; //거스름돈

          //거스름돈이 자판기가 가진 잔돈보다 작으면
          if (changes <= this.total_vending_amount) {
            //거슬러준 잔돈만큼 자판기에서 빠져나감
            this.total_vending_amount -= changes;
            //총투입금액은 0으로 바뀜
            this.total_input_amount = 0;
            //고객지갑엔 거슬러받은 잔돈이 들어옴
            this.total_customer_amount += changes;
            //재고 차감됨
            drink.stock--;

            this.messsageList.push(
              `당신이 선택한 음료 ${drink.drinkName}를 구매하는데 성공했습니다.`
            );
            this.messsageList.push(
              `이제 당신의 지갑에는 ${this.total_customer_amount}가 남았습니다.`
            );
          } else {
            this.messsageList.push(
              `음료자판기에 잔돈이 ${this.total_vending_amount} 밖에 없어서 선택한 음료를 구매할 수 없습니다.`
            );
          }
        }
      } else {
        this.messsageList.push(
          `당신이 선택한 음료 ${drink.drinkName}는 현재 재고가 없습니다.`
        );
      }
    },
  },
};
</script>
<style scoped>
.active {
  background-color: yellow;
}
</style>