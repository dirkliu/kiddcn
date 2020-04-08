<template>
	<canvas id="clock" width="400" height="400"></canvas>
</template>

<script>
  function Clock () {
    this.ele = document.getElementById('clock')

    var width = this.ele.offsetWidth
    // 计算画布的高度
    var height = this.ele.offsetHeight
    this.ctx = this.ele.getContext('2d')
    // 设置宽高
    this.ctx.width = width
    this.ctx.height = height
  }

  Clock.prototype.run = function () {
    this.ctx.translate(200, 200)
    var date = new Date()
    this.paintPlate()
    this.paintPointer(date)
  }

  Clock.prototype.paintPlate = function () {
    this.ctx.save()
    this.ctx.lineWidth = 5
    this.ctx.beginPath()
    this.ctx.moveTo(195, 0)
    this.ctx.strokeStyle = '#000'
    this.ctx.arc(0, 0, 195, 0, 2 * Math.PI)
    this.ctx.stroke()
    this.ctx.closePath()
    this.ctx.restore()

    // 绘制时钟刻度；
    this.ctx.lineWidth = 3
    this.ctx.strokeStyle = '#333'
    this.ctx.beginPath()
    for (let i = 0; i < 12; i++) {
      this.ctx.rotate(30 * Math.PI / 180)
      this.ctx.moveTo(0, -180)
      this.ctx.lineTo(0, -194)
    }
    this.ctx.stroke()
    this.ctx.closePath()

    // 绘制小刻度
    this.ctx.lineWidth = 1
    this.ctx.strokeStyle = '#999'
    this.ctx.beginPath()
    for (let i = 0; i < 60; i++) {
      this.ctx.rotate(6 * Math.PI / 180)
      if (i % 5 === 4) {
        continue
      }
      this.ctx.moveTo(0, -185)
      this.ctx.lineTo(0, -194)
    }
    this.ctx.stroke()
    this.ctx.closePath()

    this.ctx.font = '20px Arial'
    this.ctx.fillStyle = '#333'
    this.ctx.textAlign = 'center'
    this.ctx.textBaseline = 'middle'
    for (let i = 1; i < 13; i++) {
      var angle = -90 + 30 * i
      this.ctx.fillText('' + i, 165 * Math.cos(angle / 180 * Math.PI), 165 * Math.sin(angle / 180 * Math.PI))
    }

    this.ctx.font = '40px 微软雅黑'
    this.ctx.fillStyle = '#f00'
    this.ctx.textAlign = 'center'
    this.ctx.textBaseline = 'middle'
    this.ctx.fillText('7♥月', 0, 60)
  }

  Clock.prototype.paintPointer = function (date) {
    var hour = date.getHours()
    var secs = date.getSeconds()
    var mins = date.getMinutes()

    // 绘制秒针
    this.ctx.save()
    this.ctx.lineWidth = 3
    this.ctx.strokeStyle = '#00f'
    this.ctx.rotate(secs * 6 * Math.PI / 180)

    this.ctx.beginPath()
    this.ctx.moveTo(0, 15)
    this.ctx.lineTo(0, -165)
    this.ctx.stroke()
    this.ctx.closePath()
    this.ctx.stroke()
    this.ctx.restore()

    // 绘制分针
    this.ctx.save()
    this.ctx.lineWidth = 5
    this.ctx.strokeStyle = '#0f0'
    this.ctx.rotate((mins * 6 + 0.1 * secs) * Math.PI / 180)
    this.ctx.beginPath()
    this.ctx.moveTo(0, 15)
    this.ctx.lineTo(0, -135)
    this.ctx.stroke()
    this.ctx.closePath()
    this.ctx.restore()

    // 绘制时针
    this.ctx.save()
    this.ctx.lineWidth = 8
    this.ctx.strokeStyle = '#333'
    this.ctx.rotate((30 * (hour - 12) + mins * 0.5 + 0.1 / 60 * secs) * Math.PI / 180)
    this.ctx.beginPath()
    this.ctx.moveTo(0, 15)
    this.ctx.lineTo(0, -90)
    this.ctx.stroke()
    this.ctx.closePath()
    this.ctx.restore()

    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.fillStyle = '#333'
    this.ctx.arc(0, 0, 10, 0, 2 * Math.PI)
    this.ctx.fill()
    this.ctx.closePath()
    this.ctx.restore()
  }

	export default {
		data () {
			return {}
		},

		mounted () {
     	var clock = new Clock()
      clock.run()
      setInterval(function () {
        clock.ctx.clearRect(-200, -200, 400, 400)
        var date = new Date()
        clock.paintPlate()
        clock.paintPointer(date)
      }, 500)
		}
	}
</script>

<style lang="scss">
  #clock{
    position: absolute;
    left:50%;
    margin-left:-200px;
  }	
</style>
