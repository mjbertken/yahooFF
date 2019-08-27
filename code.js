function testCDN(){
  return "Hello World";
}
var btn2 = document.createElement('button');
$(btn2).attr('id','run-js2');
$(btn2).html('run new js');
$('#playersearch').append(btn2)
$("body").on("click","#run-js2",function(){runNewJs()});
  function removeDumplicateValue(myArray){ 
      var newArray = [];
      $.each(myArray, function(key, value) {
        var exists=false;
        $.each(newArray, function(k, val2) {
          if(value.id == val2.id){ exists = true }; 
        });
        if(exists == false && value.id != ""){newArray.push(value);}
      });
      return newArray;
    }
var div0 = document.createElement('div');
var cb = document.createElement('button');
$(cb).attr('class','copyBtn').html('c');
$(div0).append(cb);
var txtarea = document.createElement('textarea');
var lenCount = document.createElement('span');
var playerCount = document.createElement('span');
$(lenCount).addClass('lenCount')
$(playerCount).addClass('playerCount')
$(div0).append(lenCount);
$(txtarea).attr('id','stringifyoutput');
$(div0).append(txtarea);
$(div0).append(playerCount);
$('#playersearch').append(div0);

var div1 = document.createElement('div');
var cb = document.createElement('button');
$(cb).attr('class','copyBtn').html('c');
$(div1).append(cb);
var ta1 = document.createElement('textarea');
var lenCount = document.createElement('span');
$(lenCount).addClass('lenCount')
$(div1).append(lenCount);
$(ta1).attr('id','out1');
$(div1).append(ta1);
$('#playersearch').append(div1);

var div2 = document.createElement('div');
var cb = document.createElement('button');
$(cb).attr('class','copyBtn').html('c');
$(div2).append(cb);
var ta2 = document.createElement('textarea');
var lenCount = document.createElement('span');
$(lenCount).addClass('lenCount')
$(div2).append(lenCount);
$(ta2).attr('id','out2');
$(div2).append(ta2);
$('#playersearch').append(div2);

var div3 = document.createElement('div');
var cb = document.createElement('button');
$(cb).attr('class','copyBtn').html('c');
$(div3).append(cb);
var ta3 = document.createElement('textarea');
var lenCount = document.createElement('span');
$(lenCount).addClass('lenCount')
$(div3).append(lenCount);
$(ta3).attr('id','out3');
$(div3).append(ta3);
$('#playersearch').append(div3);

var div4 = document.createElement('div');
var cb = document.createElement('button');
$(cb).attr('class','copyBtn').html('c');
$(div4).append(cb);
var ta4 = document.createElement('textarea');
var lenCount = document.createElement('span');
$(lenCount).addClass('lenCount')
$(div4).append(lenCount);
$(ta4).attr('id','out4');
$(div4).append(ta4);
$('#playersearch').append(div4);

function copyToClipboard(elmId) {
  var copyText = document.getElementById(elmId);
  copyText.select(); 
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
}
$( "body" ).on("click",".copyBtn",function(){copyToClipboard($(this).parent().find('textarea').attr('id'));});
function runNewJs(){
var a = 0;  
 var playerArr = [];
   var prevArr = $('#stringifyoutput').text();
  if(prevArr){
    playerArr = JSON.parse(prevArr);
  }
  $('.players tbody tr').each(function(){
    console.log('tr')
    a++;
    if(a<30){
        var playerObj = {};
        var col1 = $(this).find('.ysf-player-name');
        var nm = $(col1).find('a').html();
        var id = (($(col1).find('a').attr('href')+"^").replace("/^","").replace("^","").split('/')[($(col1).find('a').attr('href')+"^").replace("/^","").replace("^","").split('/').length-1])
        playerObj['id']=id;
        playerObj['name']=nm;
        var teamPos = $(col1).find('span').html();
        if(teamPos){
        playerObj['team']=teamPos.split('-')[0].trim();
        playerObj['position']=teamPos.split('-')[1].trim();
        }
        for(var x=6;x<25;x++){
        var col = $('thead').find('tr:nth-child(2)').find('th:nth-child('+x+')');
        var colTitle = $(col).attr('title');
        if($(col).children().length>0){
          col = $(col).find(':nth-child(1)');
          if($(col).children().length>0){
            col = $(col).find(':nth-child(1)');
          } 
        }
        var val = $(this).find('td:nth-child('+x+')');
        if($(val).children().length>0){
          val = $(val).find(':nth-child(1)');
          if($(val).children().length>0){
            val = $(val).find(':nth-child(1)');
          } 
        }
        var col =$(col).html(); if(colTitle){col=colTitle};
        if(playerObj['position']=="DEF"){
          col=defColAdj(col)
        }
        var val = $(val).html();//$(this).find('td:nth-child(6)').html();
        playerObj[col]=val;
      }
      if(playerObj['name']){
        playerObj['Source']='Yahoo';
        playerObj['Data Date']=new Date();
        playerArr.push(playerObj);
      }
    }
  });
  playerArr = removeDumplicateValue(playerArr)
  $('.playerCount').html(playerArr.length)
  var len = JSON.stringify(playerArr).length;
  var stringified = JSON.stringify(playerArr);
    if(len<192000){
      $('#out1').text(stringified.substring(0,48000));
      $('#out2').text(stringified.substring(48000,96000));
      $('#out3').text(stringified.substring(96000,144000));
      $('#out4').text(stringified.substring(144000));
    }
  $('#stringifyoutput').text(JSON.stringify(playerArr));
  updateLenCount('#stringifyoutput');
  updateLenCount('#out1');
  updateLenCount('#out2');
  updateLenCount('#out3');
  updateLenCount('#out4');
}
function updateLenCount(textElement){
  var len = $(textElement).text().length;
  $(textElement).parent().find('.lenCount').html(len);
}
function defColAdj(col){
  if(col=="Bye"){return col};
  if(col=="Fan Pts"){return col};
  if(col=="% Owned"){return col};
  if(col=="Proj"){return col};
  if(col=="Actual"){return col};
  return "Defensive "+col;
}
