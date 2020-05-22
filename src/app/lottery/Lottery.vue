<template>
  <div class="lottery-page">
    <div class="lottery-box">
      <div class="illumination">
        <div class="illumination-bulp" 
          v-for="(n, index) in 24"
          :key="index" 
          :style="{transform: 'rotate(' + 15 * index + 'deg) translateY(-37.33333333vw)'}">
        </div>
      </div>

      <div class="lottery-turn" :class="isLottering && 'is-lottering'" :style="{transform: 'rotate('+ initArc +'deg)'}">
        <div class="lottery-sector">
          <div class="lottery-item" 
            v-for="(n, index) in 6" 
            :key="index" 
            :style="{transform: 'rotate(' + 60 * index + 'deg) skew(30deg)'}">
          </div>          
        </div>

        <div class="lottery-gifts">
          <div class="lottery-gift" 
            v-for="(n, index) in 6" 
            :key="index" 
            :style="{transform: 'translateX(-50%) rotate(' + 60 * index + 'deg)'}">
            <div class="gift-title">奖品{{index + 1}}</div>
            <div class="gift-img">
              <span class="gift-icon" 
                :style="{'background-color': bgColors[index]}">    
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="pointer"></div>
    </div>

    <div class="lottery-btn" @click="onLottery">开始抽奖</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isLottering: false,
      initArc: 0,
      bgColors: ['#365841', '#567800', '#ff0832', '#3eff09', '#0075ef', '#4321fe']
    }
  },

  methods: {
    onLottery () {
      this.isLottering = true
      this.initArc = 0
      setTimeout(() => {
        let lotteryNo = Math.round(Math.random() * 6)
        this.initArc = lotteryNo * 60
        this.isLottering = false
      }, 3000)
    }
  }
}
</script>

<style lang="scss">
$vw2rpx: 7.5;

@function rpx2vw($rpx) {
    @return $rpx / 7.5 + 0vw
}

* {
  margin: 0;
  padding: 0;
}

.lottery-page {
  padding: rpx2vw(40) 0;
  overflow: hidden;
}

.lottery-box {
  margin: rpx2vw(20) auto;
  width: rpx2vw(600);
  height: rpx2vw(600);
  background-color: #cfbd01;
  border-radius: 50%;
  border: rpx2vw(10) solid #febd04;
  position: relative;
}

.illumination {
  position: relative;
  height: 100%;

  .illumination-bulp {
    display: block;
    width: rpx2vw(16);
    height: rpx2vw(16);
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: rpx2vw(8);
    margin: rpx2vw(-8) 0 0 rpx2vw(-8);
    box-sizing: border-box;
    animation: twinkling 1.2s infinite ease-in-out;

    &:nth-child(2n + 1) {
      animation-delay: .6s;
    }
  }
}

@keyframes twinkling{
    0%{
        background: #fefdfc;
        border: 1px solid #fefdfc;
    }   
    25%{
        background: #fefdfc;
        border: none;
        box-shadow: 0px 0px 0 2px #eb6f21;
    }
    75%{
        background: #fefe00;
        border: 1px solid #fefe00;
    }
    100%{
        background: #fefe00;
        border: none;
        box-shadow: 0px 0px 0 2px #eb6f21;
    }
}

.lottery-turn {
  width: rpx2vw(500);
  height: rpx2vw(500);
  position: absolute;
  top: rpx2vw(50);
  left: rpx2vw(50);
  
  &.is-lottering {
    animation: turntable 1s linear infinite;
  }
}

@keyframes turntable {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.lottery-sector {
  width: rpx2vw(500);
  height: rpx2vw(500);
  position: absolute;
  overflow: hidden;
  border-radius: 50%;
  border: rpx2vw(8) solid #febd04;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .lottery-item {
    margin: 0;
    width: rpx2vw(250);
    height: rpx2vw(250);
    position: absolute;
    transform-origin: 100% 100%;

    &:nth-child(2n + 1) {
      background-color: #FEFEFE;
    }

    &:nth-child(2n) {
      background-color: #FFF0D0;
    }
  }
}

.lottery-gifts {
  width: rpx2vw(500);
  height: rpx2vw(500);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

.lottery-gift {
  position: absolute;
  display: block;
  margin: 0;
  width: rpx2vw(250);
  height: rpx2vw(250);
  left: 50%;
  color: #F44336;
  font-size: rpx2vw(28);
  line-height: rpx2vw(50);
  font-weight: bold;
  text-align: center;
  transform-origin: 50% 100%;

  .gift-icon {
    width: rpx2vw(40);
    height: rpx2vw(40);
    display: inline-block;
    border-radius: 50%;
  }
}

.pointer {
  width: rpx2vw(50);
  height: rpx2vw(50);
  position: absolute;
  left: 50%;
  top: 50%;
  transform:translate(-50%, -50%);
  background-color: #eb6f21;
  border-radius: 50%;

  &::before {
    content: " ";
    position: absolute;
    border-width: 0 rpx2vw(10) rpx2vw(150) rpx2vw(10);
    border-color: transparent transparent #eb6f21 transparent;
    border-style: solid;
    left: 50%;
    bottom: rpx2vw(25);
    transform:translateX(-50%);
  }
}

.lottery-btn {
  width: rpx2vw(200);
  height: rpx2vw(80);
  line-height: rpx2vw(80);
  text-align: center;
  font-size: rpx2vw(36);
  margin: rpx2vw(40) auto;
  background-color: #eb6f21;
  border-radius: rpx2vw(20);
  color: #fff;
}
</style>
