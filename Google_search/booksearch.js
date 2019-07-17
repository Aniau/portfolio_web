var a=0; 
var b=40; 
var licznik2=0;

function bookSearch() 
{
	var szukaj = document.getElementById('search').value
	var autor = document.getElementById('author').value
	var dataP = document.getElementById('date').value
	var content = document.getElementById('content');
	var error = document.getElementById('p'); 
		var next="php&startIndex="+a+"&maxResults="+b; 
		
		a+=40; 

	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" +szukaj+"&"+next,dataType: "json",success: function(data){ 
			
				for(i=0;i<data.items.length;i++){ 
							var tytul = data.items[i].volumeInfo.title;
							var opis = data.items[i].volumeInfo.description; 
							var autorzy = data.items[i].volumeInfo.authors;
							var datam = data.items[i].volumeInfo.publishedDate;
							var jezyk = data.items[i].volumeInfo.language;
							var x = autorzy;
							licznik2++;
							if((document.getElementById('lang').value)!=""){
										var szjezyk=document.getElementById('lang').value;
										var c=(jezyk===szjezyk);
										console.log("Pozycja: "+licznik2+". Czy szukany jezyk: "+szjezyk+" jest taki jak książki "+jezyk+" wynik: "+c);
										
											if(c){
																	if (tytul == undefined){ 
																				tytul = "Missing title"; 
																	}
																	
																	else{
																				var tytul1;
																				tytul1 = tytul.slice(0,60);
																				tytul = tytul1 + "..."; 
																				tytul=(tytul.toUpperCase());
																	}
																	
																	if (opis == undefined){ 
																		opis = "Missing description"; 
																	}
																	
																	else{
																			var opis1;
																			opis1 = opis.slice(0,150);
																			opis = opis1 + "..."; 
																	}
															
																	if (autorzy == undefined){ 
																			autorzy = "Missing authors"; 
																	}
																	
															const ks = document.createElement('div');
															ks.setAttribute("class","pozycja");
															const h4 = document.createElement('h4');
															const h5 = document.createElement('h5');
															const h6 = document.createElement('h6');
															const h3 = document.createElement('h3');
															const img = document.createElement('img');				
															h4.innerHTML = tytul;
															h5.innerHTML = autorzy;
															h6.innerHTML = opis;
															h3.innerHTML = datam;
															img.setAttribute('src', data.items[i].volumeInfo.imageLinks.thumbnail);


															ks.append(h4);
															ks.append(h5);
															ks.append(h6);
															ks.append(h3);
															ks.append(img);

															content.append(ks);
															console.log("dodanie");
													}
													else{
														continue;
													}
							}
							
							if((document.getElementById('date').value)!=""){
									var dataP = document.getElementById('date').value;
									var dat = dataP.slice(0,4);
									var dan = datam.slice(0,4);
									var d = (dan == dat);
									console.log(licznik2+". Czy "+dat+" jest równa "+dan+" ? "+d);
							}

							if((document.getElementById('author').value)!=""){
									var autor=document.getElementById('author').value;
									var sx=x.toString();
									var sautor=autor.toString();
									var n= sx.indexOf(sautor);
									console.log("Pozycja: "+licznik+". Czy w "+x+" zawiera się wyraz: "+autor+" wynik: "+n);
							}
							
							if( n != (-1)){ 
							if (tytul == undefined){ 
								tytul = "Missing title"; 
							}
							else{
								var tytul1;
								tytul1 = tytul.slice(0,60); 
								tytul = tytul1 + "..."; 
								tytul=(tytul.toUpperCase());
							}
							if (opis == undefined){ 
								opis = "Missing description";
							}
							else{
								var opis1;
								opis1 = opis.slice(0,150); 
								opis = opis1 + "..."; 
							}
							
								if (autorzy == undefined){
								autorzy = "Missing authors"; 
							}
							const ks = document.createElement('div');
							ks.setAttribute("class","pozycja");
							const h4 = document.createElement('h4');
							const h5 = document.createElement('h5');
							const h6 = document.createElement('h6');
							const h3 = document.createElement('h3');
							const img = document.createElement('img');				
							h4.innerHTML = tytul;
							h5.innerHTML = autorzy;
							h6.innerHTML = opis;
							h3.innerHTML = datam;
							img.setAttribute('src', data.items[i].volumeInfo.imageLinks.thumbnail);


							ks.append(h4);
							ks.append(h5);
							ks.append(h6);
							ks.append(h3);
							ks.append(img);

							content.append(ks);
							console.log("dodanie");
							}
							else{ 
							continue;
							}
	}
		},
		type: 'GET'	
	});	
}
document.getElementById('button').addEventListener('click', bookSearch, false) 

var licznik=1;
var max1=0;
onwheel = function(){
licznik=window.pageYOffset;
if(licznik>max1){
	max1=licznik;
	}
if(licznik===max1){
	bookSearch();
	}
}

	$('#search').keyup(function() {
		if ($('#search').val() == "") {
			$('#button').disabled = true;
			$('#searchSpan').addClass('gray').removeClass('white');
		} else {
			$('#button').disabled = false;
			$('#searchSpan').addClass('white').removeClass('gray');
		}
	});
	
	$('#lang').keyup(function() {
		if ($('#lang').val() == "") {
			$('#button').disabled = true;
			$('#searchSpan').addClass('gray').removeClass('white');
		} else {
			$('#button').disabled = false;
			$('#searchSpan').addClass('white').removeClass('gray');
		}
	});
	
	$('#date').keyup(function() {
		if ($('#date').val() == "") {
			$('#button').disabled = true;
			$('#searchSpan').addClass('gray').removeClass('white');
		} else {
			$('#button').disabled = false;
			$('#searchSpan').addClass('white').removeClass('gray');
		}
	});
	
	$('#author').keyup(function() {
		if ($('#author').val() == "") {
			$('#button').disabled = true;
			$('#searchSpan').addClass('gray').removeClass('white');
		} else {
			$('#button').disabled = false;
			$('#searchSpan').addClass('white').removeClass('gray');
		}
	});