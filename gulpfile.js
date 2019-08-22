var gulp = require('gulp')
var express = require("express")

gulp.task('server', function (cb) {
  var app = express()
  app.use(express.static('./'))
  app.listen(9999)
  console.log('Develop server is running!')
  cb()
})

gulp.task('default', gulp.series(['server']))
