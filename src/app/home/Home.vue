<template>
	<div class="home">
  	<div class="header">
    	<h1>KiddCn 一条码虫的实验工厂</h1>
  	</div>
  	<article class="main">
    	<h1>计划中的事情：</h1>
    	<ul>
      	<li><a href="/#/clock">canvas时钟</a></li>
      	<li><a href="/#/icons">css绘制图标</a></li>
      	<li><a href="/#/chat">websockets</a></li>
        <li><a href="/#/chat">websockets</a></li>
        <li><a href="/#/lottery">抽奖转盘</a></li>
    	</ul>
  	</article>
  	<div class="footer">
    	copyright Jason 7
  	</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {}
		}
	}
</script>

<style>
  * {
    font-family: "microsoft yahei";
  }

  .header {
    padding: 30px 0;
    background-color: #39f;
    background-image: linear-gradient(to left, #f00 0%, #ff0 20%, #0f0 50%, #0ff 65%, #00f 80%, #f0f 100%);
  }

  .header h1 {
    text-align: center;
    padding: 0;
    margin: 0;
    color: #fff;
  }

  footer {
    line-height: 50px;
    color: #000;
  }

  .rainbow {
    width: 400px;
    height: 200px;
    border-radius: 200px 200px 0 0;
    background-color: #7367f3;
    overflow: hidden;
  }
  .rainbow::after {
    width: 400px;
    height: 400px;
    border-radius: 200px;
    display: block;
    content: "";
    background: -webkit-radial-gradient(farthest-side, #fff 50%, #f0f, #00f, #0ff, #0f0, #ff0, #f00); /* Safari 5.1 - 6.0 */
    background: -o-radial-gradient(farthest-side, #fff 50%, #f0f, #00f, #0ff, #0f0, #ff0, #f00); /* Opera 11.6 - 12.0 */
    background: -moz-radial-gradient(farthest-side, #fff 50%, #f0f, #00f, #0ff, #0f0, #ff0, #f00); /* Firefox 3.6 - 15 */
    background: radial-gradient(farthest-side, #fff 50%, #f0f, #00f, #0ff, #0f0, #ff0, #f00); /* 标准的语法 */    
  }
  </style>
