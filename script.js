var checkpoint = 0;
$(document).ready(function(){ 
	var count = 0;
	var check = 0;
	var savepoint = [0, 0];
	var savepoint2 = [0, 0];
	var lock = [0,0,0,0,0,0,0,0,0,0,0,0];
	

	var card1 = [0,0,0,0,0,0];
	var card2 = [0,0,0,0,0,0];
	var i=0;
	var j=0;
	var Random_Val =0;
	////////////// 
	$('.score').append("<p>"+checkpoint+"</p>");
	for(i=0;i<6;i++){
		Random_Val = Math.floor((Math.random()*6)+1);
		for(j=0;j<i;j++){
			if(card1[j]==Random_Val){
				Random_Val = Math.floor((Math.random()*6)+1);
				j=0;
			}
		}
		card1[i] = Random_Val;
	}
	for(i=0;i<6;i++){
		Random_Val = Math.floor((Math.random()*6)+1);

		for(j=0;j<i;j++){
			if(card2[j]==Random_Val){
				Random_Val =Math.floor((Math.random()*6)+1);
				j=0;
			}
		}
		card2[i] = Random_Val;
	}
	////////////// 

	var Y = function(){
		if(count==2){
			if(savepoint[0] == savepoint[1]){
				lock[savepoint[0]-1] = 1;
				lock[savepoint[1]-1] = 1;
				checkpoint+=1;
				count=0;
			}
			else{
				alert("X")
				$('.c'+savepoint2[0]).toggleClass('k'+savepoint[0]);
				$('.c'+savepoint2[1]).toggleClass('k'+savepoint[1]);
				count=0;
	
			}
		}
	}
	$('.clear').click(function() {
		location.reload();
	});
	
	
	$('.c1').click(function(){
		if(lock[0]==0){
			$(this).addClass('k'+card1[0]);
			savepoint[count] = card1[0];
			savepoint2[count] = 1;
			count +=1;
			Y();
		}
	});
	$('.c2').click(function(){
		if(lock[1]==0){
			$(this).addClass('k'+card1[1]);
			savepoint[count] = card1[1];
			savepoint2[count] = 2;
			count +=1;
			Y();
		}
	});
	$('.c3').click(function(){
		if(lock[2]==0){
			$(this).addClass('k'+card1[2]);
			savepoint[count] = card1[2];
			savepoint2[count] = 3;
			count +=1;
			Y();
		}
	});
	$('.c4').click(function(){
		if(lock[3]==0){
			$(this).addClass('k'+card1[3]);
			savepoint[count] = card1[3];
			savepoint2[count] = 4;
			count +=1;
			Y();
		}
	});
	$('.c5').click(function(){
		if(lock[4]==0){
			$(this).addClass('k'+card1[4]);
			savepoint[count] = card1[4];
			savepoint2[count] = 5;
			count +=1;
			Y();
		}
	});
	$('.c6').click(function(){
		if(lock[5]==0){
			$(this).addClass('k'+card1[5]);
			savepoint[count] = card1[5];
			savepoint2[count] = 6;
			count +=1;
			Y();
		}
	});
	$('.c7').click(function(){
		if(lock[6]==0){
			$(this).addClass('k'+card2[0]);
			savepoint[count] = card2[0];
			savepoint2[count] = 7;
			count +=1;
			Y();
		}
	});
	$('.c8').click(function(){
		if(lock[7]==0){
			$(this).addClass('k'+card2[1]);
			savepoint[count] = card2[1];
			savepoint2[count] = 8;
			count +=1;
			Y();
		}
	});
	$('.c9').click(function(){
		if(lock[8]==0){
			$(this).addClass('k'+card2[2]);
			savepoint[count] = card2[2];
			savepoint2[count] = 9;
			count +=1;
			Y();
		}
	});
	$('.c10').click(function(){
		if(lock[9]==0){
			$(this).addClass('k'+card2[3]);
			savepoint[count] = card2[3];
			savepoint2[count] = 10;
			count +=1;
			Y();
		}
	});
	$('.c11').click(function(){
		if(lock[10]==0){
			$(this).addClass('k'+card2[4]);
			savepoint[count] = card2[4];
			savepoint2[count] = 11;
			count +=1;
			Y();
		}
	});
	$('.c12').click(function(){
		if(lock[11]==0){
			$(this).addClass('k'+card2[5]);
			savepoint[count] = card2[5];
			savepoint2[count] = 12;
			count +=1;
			Y();
		}
	});
});
