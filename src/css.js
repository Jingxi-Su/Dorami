const string = `
/*大家好~
* 新人苏靖惜为大家带来新作品啦
* 这次给大家展示哆啦美
*她是哆啦A梦的小妹妹哦
*首先
*给哆啦美加上粉嫩的背景
*/
.background * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.background *::after {
  box-sizing: border-box;
}

.background *::before {
  box-sizing: border-box;
}
.background {
  background-color: #ffc0cb;
  min-height: 60vh;
  position: relative;
}
/*哆啦美的头上有一个红色蝴蝶结*/
.ribbon {
  border: 5px solid black;
  position: absolute;
  display: block;
  width: 120px;
  height: 150px;
  background-color: red;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  top: -10px;
  left: 50%;
  margin-left: -60px;
}
#ribbon-right {
  transform: rotate(15deg) translateX(80px);
}
#ribbon-left {
  transform: rotate(-15deg) translateX(-80px);
}
/*和哥哥不一样的是，哆啦美是黄色的*/
#head {
  border: 5px solid black;
  border-radius: 50% 50% 45% 45%;
  width: 310px;
  height: 300px;
  position: absolute;
  background-color: #f7f977;
  left: 50%;
  top: 60px;
  margin-left: -155px;
}
#head-white {
  border: 5px solid black;
  border-radius: 50% 50% 45% 45%;
  width: 240px;
  height: 220px;
  position: absolute;
  background-color: white;
  left: 50%;
  top: 120px;
  margin-left: -120px;
}
/*给哆啦美画上漂亮的眼睛*/
.eyebrow {
  position: absolute;
  width: 70px;
  height: 60px;
  border: 4px solid #000;
  border-color: black transparent transparent transparent;
  border-radius: 90%/100px 100px 0 0;
  left: 50%;
  top: 142px;
  margin-left: -35px;
}
#eyebrow-right {
  transform: rotate(10deg) translateX(60px);
}
#eyebrow-left {
  transform: rotate(-10deg) translateX(-60px);
}
.eyelash {
  position: absolute;
  border-left: 3.5px solid black;
  height: 16px;
  left: 50%;
}
#eyelash-left1 {
  top: 174px;
  transform: rotate(-33deg) translateX(-65px) translateY(-43px);
  z-index: 100;
}
#eyelash-left2 {
  top: 169px;
  transform: translateX(-58px);
  z-index: 100;
}
#eyelash-left3 {
  top: 174px;
  transform: rotate(33deg) translateX(-30px) translateY(20px);
  z-index: 100;
}
#eyelash-right1 {
  top: 174px;
  transform: rotate(-33deg) translateX(30px) translateY(20px);
  z-index: 100;
}
#eyelash-right2 {
  top: 169px;
  transform: translateX(56px);
  z-index: 100;
}
#eyelash-right3 {
  top: 174px;
  transform: rotate(33deg) translateX(65px) translateY(-43px);
  z-index: 100;
}
.eye {
  position: absolute;
  background-color: transparent;
  border: 4px solid black;
  height: 65px;
  width: 60px;
  border-radius: 50%;
  left: 50%;
  top: 182px;
  margin-left: -30px;
  z-index: 10;
}
#eye-right {
  transform: translateX(58px);
}
#eye-left {
  transform: translateX(-58px);
}
.eye-pupil {
  position: absolute;
  background-color: black;
  height: 42px;
  width: 40px;
  border-radius: 50%;
  left: 50%;
  top: 192px;
  margin-left: -20px;
}
#eye-pupil-right {
  transform: translateX(57px);
}
#eye-pupil-left {
  transform: translateX(-57px);
}
.eye-white {
  position: absolute;
  background-color: white;
  width: 14px;
  height: 16px;
  left: 50%;
  top: 203px;
  margin-left: -8px;
  border-radius: 50%;
}
#eye-white-left {
  transform: translateX(57px);
}
#eye-white-right {
  transform: translateX(-57px);
}
/*哆啦美的眼睛里有星星哦*/
.eye-start {
  position: absolute;
  background-color: white;
  width: 11px;
  height: 11px;
  top: 203px;
  margin-left: -8px;
  left: 50%;
}
#eye-start-left {
  transform: rotate(45deg) translateX(-50px) translateY(55px);
}
#eye-start-right {
  transform: rotate(45deg) translateX(30px) translateY(-28px);
}
/*接下来给哆啦美画上鼻子和粉扑扑的脸颊*/
#nose {
  position: absolute;
  border-radius: 50%;
  background-color: pink;
  height: 25px;
  width: 40px;
  border: solid 4px black;
  top: 246px;
  left: 50%;
  margin-left: -20px;
}
#nose-white {
  position: absolute;
  border-radius: 50%;
  background-color: white;
  height: 12px;
  width: 12px;
  top: 250px;
  left: 49.8%;
}
#nose-top {
  position: absolute;
  height: 20px;
  width: 40px;
  border-radius: 50%;
  border: solid 2px black;
  border-bottom: 0;
  border-left: 0;
  border-right: 0;
  top: 236px;
  left: 50%;
  margin-left: -20px;
}
.blush {
  position: absolute;
  background-color: pink;
  border-radius: 50%;
  height: 34px;
  width: 34px;
  left: 50%;
  margin-left: -18px;
  top: 240px;
}
#blush-left {
  transform: translateX(-90px);
}
#blush-right {
  transform: translateX(90px);
}
/*哆啦美很爱笑哦*/
#mouth {
  position: absolute;
  height: 15px;
  width: 60px;
  top: 285px;
  left: 50%;
  margin-left: -30px;
  border-radius: 0 0 80px 80px;
  border: solid 4px #000000;
  border-top: none;
}
/*最后，哆啦美和哥哥一样也有小铃铛哦*/
#collar {
  position: absolute;
  height: 35px;
  width: 200px;
  top: 325px;
  left: 50%;
  margin-left: -100px;
  background-color: #3399ff;
  border-radius: 25% 25% 25% 25%;
  border: 5px solid black;
}
.bell {
  position: absolute;
  background-color: yellow;
  height: 60px;
  width: 60px;
  border: solid black 5px;
  border-radius: 50%;
  top: 330px;
  left: 50%;
  margin-left: -30px;
}
.bell .bell-front {
  position: absolute;
  background-color: yellow;
  height: 16px;
  width: 60px;
  border: solid black 5px;
  border-radius: 30%;
  top: 34%;
  left: 50%;
  margin-left: -30px;
}
.bell .bell-front-hole {
  position: absolute;
  background-color: black;
  height: 20px;
  width: 20px;
  border: solid black 5px;
  border-radius: 50%;
  top: 68%;
  left: 50%;
  margin-left: -10px;
}
/*加点动画吧*/
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(5deg);
  }
  66% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.bell:hover {
  transform-origin: center top;
  animation: wave 0.2s infinite;
}
/*把鼠标放在铃铛上可以看到不一样的效果哦*/
`

export default string;