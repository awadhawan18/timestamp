var express = require('express');
var router = express.Router();
var Sugar = require('sugar');
mon = require('./../Months.json');
/* GET home page. */
router.get('/', function(req, res){
    res.render('index');
});
router.get('/:id', function(req, res) {

    if(Number(req.params.id) && req.params.id<=8640000000000){
        var fullDate = Sugar.Date.create(req.params.id*1000);
        res.render('timestamp',{ Unix : req.params.id, Month :mon.months[fullDate.getMonth()],
            Day : fullDate.getDate(),
            Year :fullDate.getFullYear()})
    }
    else {
        var fullDate = Sugar.Date.create(req.params.id.toString());
        if(fullDate.toString()!=='Invalid Date'){
            res.render('timestamp',{ Unix : Math.floor((new Date(fullDate).getTime())/1000),
                Month :mon.months[fullDate.getMonth()],
                Day : fullDate.getDate(),
                Year :fullDate.getFullYear()})
        }
        else{
            res.render('timestamp',{ Unix : 'null', Month :'null',
                Day : null,
                Year : null})
        }
    }
    console.log(fullDate);

    /*else {
        res.render('index',{Unix : 'null',Month : 'null', Day : null, Year : null})
    }*/

});

module.exports = router;
