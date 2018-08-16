<template>
  <div class="teaLink">
    <ul class="teaLinkList clearfix">
      <li @click="goTeaHouse('原油茶馆', '1')" class="fl">
        <div class="rond rond1">
          <div class="test"></div>
        </div>
        <img src="@/assets/yy.png">
        <div class="">原油茶馆</div>
      </li>
      <li @click="goTeaHouse('股指茶馆', '2')" class="qli fl">
        <div class="rond rond2">
          <div class="test"></div>
        </div>
        <img src="@/assets/gp.png">
        <div class="">股指茶馆</div>
      </li>
      <li @click="goTeaHouse('外汇茶馆', '3')" class="fl">
        <div class="rond rond3">
          <div class="test"></div>
        </div>
        <img src="@/assets/wh.png">
        <div class="">外汇茶馆</div>
      </li>
      <li @click="goTeaHouse('贵金属茶馆', '4')" class="fl">
        <div class="rond rond4">
          <div class="test"></div>
        </div>
        <img src="@/assets/gjs.png">
        <div class="">贵金属茶馆</div>
      </li>
      <li @click="goTeaHouse('利率茶馆', '5')" class="qli fl">
        <div class="rond rond5">
          <div class="test"></div>
        </div>
        <img src="@/assets/lv.png">
        <div class="">利率茶馆</div>
      </li>
      <li @click="goTeaHouse('虚拟币茶馆', '6')" class="fl">
        <div class="rond rond6">
          <div class="test"></div>
        </div>
        <img src="@/assets/xnb.png">
        <div class="">虚拟币茶馆</div>
      </li>
    </ul>

  </div>
</template>

<script>
import { getCookie, checkPhone } from '@/common/utils/utilsPublic';

export default {
  name: 'teaLink',
  data () {
    return {
      userPhone: '',
      currentStatus: 'goIndex'
    }
  },
  methods: {
    // getCurrentStatus: function() {
    //   let currentStatus = this.$route.query.currentStatus;
    //   console.log(currentStatus);
    //   if (currentStatus) {
    //     this.currentStatus = currentStatus;
    //   }
    // },
    getUserInfo () {
      let userPhone = getCookie().userPhone;
      this.userPhone = userPhone;
    },
    goTeaHouse: function (type, id) {
      console.log(this.userPhone);
      if (checkPhone(this.userPhone)) {
        this.$router.push({
          path: 'teaHouse',
          query: {
            typeString: type,
            menuId: id
          }
        });
      } else {
        this.$router.push({
          path: 'login',
          query: {
            currentStatus: 'goIndex',
            pathUrl: 'index'
          }
        });
      }
    }
  },
  created() {
    this.getUserInfo();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.teaLink {
  width: 100%;
  background-color: #fff;
  font-size: 16px;
  .teaLinkList{
    padding: 20px 10px 0;
    li{
      width: 30%;
      margin-bottom: 20px;
      position: relative;
      .rond {
        height:66px;
        width:66px;
        border:1px solid #6e9ceb;
        border-radius:50%;
        position:absolute;
        top:1px;
        left:50%;
        margin-left: -33px;
        animation:rond 3s infinite;
        -webkit-animation:rond 3s infinite;
        .test{
          height:8px;
          width:8px;
          position:absolute;
          background-color:#6e9ceb;
          border-radius:50%;
          top:0px;
          left:8px;
          margin:1px;
        }
      }
      .rond2{
        border:1px solid #f15a4a;
        .test{
          background-color:#f15a4a;
        }
      }
      .rond3{
        border:1px solid #6ca9ff;
        .test{
          background-color:#6ca9ff;
        }
      }
      .rond4{
        border:1px solid #feb741;
        .test{
          background-color:#feb741;
        }
      }
      .rond5{
        border:1px solid #d6292c;
        .test{
          background-color:#d6292c;
        }
      }
      .rond6{
        border:1px solid #f6931a;
        .test{
          background-color:#f6931a;
        }
      }
      @keyframes rond {
        0% {transform : rotate(0deg);}
        100% {transform : rotate(360deg);}
      }
      @-webkit-keyframes rond {
        0%{-webkit-transform : rotate(0deg);}
        100%{-webkit-transform : rotate(360deg);}
      }
      img{
        width: 48px;
        margin:10px auto 25px;
      }
    }
    li.qli{
      margin:0 5%;
    }
  }
}
// img{display: block;}
// .cssBox {width:60px;height:60px;background-color: #fff;position: relative;}
// .cssBox .borderRadius {width: 55px;height: 55px;
//   position: absolute;left: 50%;top: 50%;margin: -27.5px 0 0 -27.5px;
//   -webkit-animation: rotating 2s ease 0s infinite;
//   animation: rotating 2s ease 0s infinite;
// }
// @-webkit-keyframes rotating {
//   0% {
//     -webkit-transform: rotate(0deg);
//     transform: rotate(0deg);
//     opacity: 1;
//   }
//   65% {
//     -webkit-transform: rotate(90deg);
//     transform: rotate(90deg);
//     opacity: 1;
//   }
//   100% {
//     -webkit-transform: rotate(90deg);
//     transform: rotate(90deg);
//     opacity: 0;
//   }
// }
// .cssBox .borderRadius .lfRaidus {width: 55px;height: 55px;border-radius: 27.5px 27.5px 0 0;position: relative;
//   -webkit-animation: lfRaidus 2s ease 0s infinite;
//   animation: lfRaidus 2s ease 0s infinite;
// }
// @-webkit-keyframes lfRaidus {
//   0% {
//       background: -moz-linear-gradient(right,red,black);background: -webkit-linear-gradient(right,#0F956F,#fff);background: -o-linear-gradient(right,red,black);
//   }
//   65% {
//       background: -moz-linear-gradient(right,red,black);background: -webkit-linear-gradient(right,#0F956F,#fff);background: -o-linear-gradient(right,red,black);
//   }
//   100% {
//       background: -moz-linear-gradient(right,red,black);background: -webkit-linear-gradient(right,#0F956F,#fff);background: -o-linear-gradient(right,red,black);
//   }
// }
// .cssBox .borderRadius .lfRaidus .ctRaidus {width: 52px;height: 26px;background-color: #fff;border-radius: 26px 26px 0 0;
//   position: absolute;left: 50%;bottom: 0;-webkit-transform: translate(-50%, 0);transform: translate(-50%, 0);
// }
// .cssBox .borderRadius .rtRaidus {width: 55px;height: 27.5px;border-radius: 0 0 27.5px 27.5px;position: relative;
//   -webkit-animation: rtRaidus 2s ease 0s infinite;
//   animation: rtRaidus 2s ease 0s infinite;
// }
// @-webkit-keyframes rtRaidus {
//   0% {
//     background: -moz-linear-gradient(right,red,black);background: -webkit-linear-gradient(right,#0F956F,#00FFA8);background: -o-linear-gradient(right,red,black);
//   }
//   65% {
//     background: -moz-linear-gradient(right,red,black);background: -webkit-linear-gradient(right,#0F956F,#00FFA8);background: -o-linear-gradient(right,red,black);
//   }
//   100% {
//     background: -moz-linear-gradient(right,red,black);background: -webkit-linear-gradient(right,#0F956F,#00FFA8);background: -o-linear-gradient(right,red,black);
//   }
// }
// .cssBox .borderRadius .rtRaidus .ctRaidus {width: 52px;height: 26px;background-color: #fff;border-radius: 0 0 131px 131px;
//   position: absolute;left: 50%;top: 0;-webkit-transform: translate(-50%, 0);transform: translate(-50%, 0);
// }
// .cssBox .borderRadius .rtRaidus .hfPoint {width: 7px;height: 5px;position: absolute;left: 0px;top: -5px;border-radius: 5px 5px 0 0;background-color: #00FFA8;}
// .cssBox .borderRadius .rtRaidus .rtPoint {width: 5px;height: 5px;position: absolute;left: 10px;top: -5px;border-radius: 5px;background-color: #00FFA8;}
// .cssBox .imageRadius {margin-top: 4px;opacity: 0;width: 100%;height: 100%;
//   position: absolute;left: 50%;top: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);
//   -webkit-animation: imageRadius 2s ease 0s infinite;
//   animation: imageRadius 2s ease 0s infinite;
// }
// @-webkit-keyframes imageRadius {
//   0% {
//     opacity: 0;
//   }
//   65% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// }
// .cssBox .waveRaidus {margin-top: 4px;opacity: 0;
//   position: absolute;left: 50%;top: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);
//   -webkit-animation: waveRaidus 2s ease-out 0s infinite;
//   animation: waveRaidus 2s ease-out 0s infinite;
// }
// @-webkit-keyframes waveRaidus {
//   0% {
//     width: 100%;height: 100%;
//     opacity: 0;
//   }
//   65% {
//     width: 100%;height: 100%;
//     opacity: 0;
//   }
//   66% {
//     width: 100%;height: 100%;
//     opacity: 0.8;
//   }
//   100% {
//     width: 130%;height: 130%;
//     opacity: 0;
//   }
// }
// .cssBox .pointRadius {width: 10px;height: 10px;border-radius: 100%;background-color: #FFF;border: 1px solid transparent;
//   position: absolute;left: 50%;top: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);
//   -webkit-animation: pointRadius 2s ease 0s;
//   animation: pointRadius 2s ease 0s;
// }
// @-webkit-keyframes pointRadius {
//   0% {width: 10px;height: 10px;border: 0;box-shadow: 0 0 0px 3px rgba(255,255,255,0.3), 0 0 0px 6px rgba(255,255,255,0.2), 0 0 0px 9px rgba(255,255,255,0.1);}
//   5% {width: 10px;height: 10px;border: 0;box-shadow: 0 0 0px 3px rgba(255,255,255,0.3), 0 0 0px 6px rgba(255,255,255,0.2), 0 0 0px 9px rgba(255,255,255,0.1);}
//   10% {width: 12px;height: 12px;border: 0;box-shadow: 0 0 0px 2px rgba(255,255,255,0.3), 0 0 0px 4px rgba(255,255,255,0.2), 0 0 0px 6px rgba(255,255,255,0.1);}
//   15% {width: 16px;height: 16px;border: 0;box-shadow: 0 0 0px 1px rgba(255,255,255,0.3), 0 0 0px 2px rgba(255,255,255,0.2), 0 0 0px 3px rgba(255,255,255,0.1);}
//   20% {width: 26px;height: 26px;border: 0;box-shadow: none;}
//   65% {width: 205px;height: 205px;border: 2px solid #CCC;}
//   100% {width: 205px;height: 205px;border: 2px solid #CCC;}
// }
</style>
