"use strict"

var	sImon = [];
var usEr = [];
var rOund = parseInt($("#rOund").val());
var counter = 0;
var anDoneS = false;

// FN SIMON SETUP

	// generates random number between 1 and 4
	function rAnDO() {

		return Math.floor( Math.random()*(4-1 +1) + 1);

	};

	// creates sImon sequence
	function GENsImon(rOund) {
		var array = [];

			for (var i = 0; i < rOund; i++) {
					
				console.log("I'm in");
				array[i] = rAnDO();

			};

		return array;

	};

	//runs the animation for the simon pattern on the page
	function sImonAnIMate(array,rOund) {

		anDoneS = false;
		var tImO;

		array.forEach(function (e,i,array){

			tImO = 900*i;

			setTimeout( function () {	

				// if (rOund >= 11) {

				// 	tImO = tImO/2;
				// }
			
				AnIMate(e);

				if (i==(array.length-1)) {

					console.log("setting anDoneS to true");
					anDoneS = true;
				}

			}, tImO);


		});



	};
	
	// animation for the block click
	function AnIMate(e) {
	

		var bUttOn = "B" + e;
		$("#" + bUttOn).css("opacity","0");

		setTimeout(function() {

			$("#" + bUttOn).css("opacity","1");

		}, 200);

	};


// Let's RUN THIS SHOW!!!!!
$("button").on ("click", function (event){

		var isStart = $(this).attr("id");

		
		if (isStart == "start") {

			rOund = 1;
			$("#rOund").val(rOund);
			counter = 0;
			usEr = [];
			confirm("click okay to start");
			sImon = GENsImon(rOund);
			isStart = true;

			sImonAnIMate(sImon,rOund);
		}



		if(anDoneS && isStart) {

			var bUttOnNum = parseInt($(this).attr("id").replace("B",""));

			AnIMate(bUttOnNum);			

			usEr[counter] = bUttOnNum;
			console.log(usEr);

			if ( usEr[counter]!= sImon[counter]) {

                console.log("I'm in it");
                counter = 0;
                usEr = [];
                alert("wa waaa waaaa you loose");
               
            } else {

                 counter++;

                    if (counter == sImon.length) {

                        rOund++;
                        counter = 0;
                        usEr = [];
                        sImon = [];
                        setTimeout(function() {
	                        confirm("good work\! moving on up\! ready for round " + rOund + "?");
	                        $("#rOund").val(rOund);
	                        sImon = GENsImon(rOund);
							
							setTimeout(function() {
								sImonAnIMate(sImon,rOund);
							}, 400);

                        }, 800)
            
                    }   
            }

            
		}



});
	

