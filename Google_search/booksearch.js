var a=0; // startowa wartość indeksu na 0
var b=12; // ilość załadowanych wyników
var licznik2=0;

function bookSearch() // deklaracja funkcji
{
	var szukaj = document.getElementById('search').value // pobranie wartości z pola tekstowego i wsadzenie do zmiennej szukaj
	var szukajJezyk = document.getElementById('lang').value // 
	var autor = document.getElementById('author').value
	var dataP = document.getElementById('date').value
	var content = document.getElementById('content'); // załadowanie bieżącej zawartości do zmiennej
	var error = document.getElementById('p'); // załadowanie bieżącej zawartości do zmiennej
	var next="php&startIndex="+a+"&maxResults="+b; // utworzenie kolejnej iteracji wyników
	a+=12; //zmiana startowej wartości indeksu o kolejne 12 wyników

	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" +szukaj+"&"+next,dataType: "json",success: function(data)
		{ // konkatenacja wysyłanego zapytania
				for(i=0;i<data.items.length;i++)
				{ // załadowanie odpowiedniej ilości wyników w pętli
							var tytul = data.items[i].volumeInfo.title; // pobranie do zmiennej opis, opisu ksiazki w kazdej iteracji
							var opis = data.items[i].volumeInfo.description; // pobranie do zmiennej opis, opisu ksiazki w kazdej iteracji
							var autorzy = data.items[i].volumeInfo.authors;
							var datam = data.items[i].volumeInfo.publishedDate;
							var jezyk = data.items[i].volumeInfo.language;
							var x = autorzy;

							if((document.getElementById('lang').value)!="")
							{
							var szjezyk=document.getElementById('lang').value;
							var c=(jezyk===szjezyk);
							console.log("Pozycja: "+licznik2+". Czy szukany jezyk: "+szjezyk+" jest taki jak książki "+jezyk+" wynik: "+c);
							
							if(c)
							{
									if (tytul == undefined){ // sprawdzenie czy tytul poprawnie się pobrał
								tytul = "Missing title"; // jeśli nie znaleziono tytulu, wyswietla komunikat
							}
							else
							{
								var tytul1;
								tytul1 = tytul.slice(0,60); // uciecie tytulu do 150 znaków
								tytul = tytul1 + "..."; // dodanie "..." do tytulu
								tytul=(tytul.toUpperCase());
							}
							if (opis == undefined){ // sprawdzenie czy opis poprawnie się pobrał
								opis = "Missing description"; // jeśli nie znaleziono opisu, wyswietla komunikat
							}
							else
							{
								var opis1;
								opis1 = opis.slice(0,150); // uciecie opisu do 150 znaków
								opis = opis1 + "..."; // dodanie "..." do opisu
							}
							
								if (autorzy == undefined){ // sprawdzenie czy opis poprawnie się pobrał
								autorzy = "Missing authors"; // jeśli nie znaleziono opisu, wyswietla komunikat
							}
								
								
							// wsadzenie odpowiednich elementow do tagów html
							const ks = document.createElement('div');
							ks.setAttribute("class","pozycja");
							//utworzenie klasy bloku "pozycja" dla pojedynczego wyniku - dla css
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
							else
							{
								continue;
							}
							}
							
							if((document.getElementById('date').value)!="")
							{
								console.log(datam);
							}

							if((document.getElementById('author').value)!="")
							{
								var autor=document.getElementById('author').value;
								var sx=x.toString(); // sx - pobrana nazwa autora
								var sautor=autor.toString(); // sautor - wpisana nazwa autora
								
								
								var aaa = sx.toUpperCase();
								sx=aaa;
								var bbb = sautor.toUpperCase();
								sautor=bbb;
								
								var n=  sx.indexOf(sautor); // sprawdzenie czy wpisana nazwa wystepuje w pobranej
								
								
								console.log("Pozycja: "+licznik+". Czy w "+sx+" zawiera się wyraz: "+sautor+" wynik: "+n);
								console.log(sautor + n);
							}
							
							if( n != (-1))
							{ 
								if (tytul == undefined)
								{
									// sprawdzenie czy tytul poprawnie się pobrał
									tytul = "Missing title"; // jeśli nie znaleziono tytulu, wyswietla komunikat
								}
								else
								{
									var tytul1;
									tytul1 = tytul.slice(0,60); // uciecie tytulu do 150 znaków
									tytul = tytul1 + "..."; // dodanie "..." do tytulu
									tytul=(tytul.toUpperCase());
								}
								if (opis == undefined)
								{ // sprawdzenie czy opis poprawnie się pobrał
									opis = "Missing description"; // jeśli nie znaleziono opisu, wyswietla komunikat
								}
								else
								{
									var opis1;
									opis1 = opis.slice(0,150); // uciecie opisu do 150 znaków
									opis = opis1 + "..."; // dodanie "..." do opisu
								}
								
								if (autorzy == undefined)
								{ // sprawdzenie czy opis poprawnie się pobrał
									autorzy = "Missing authors"; // jeśli nie znaleziono opisu, wyswietla komunikat
								}
							
							
								// wsadzenie odpowiednich elementow do tagów html
								const ks = document.createElement('div');
								ks.setAttribute("class","pozycja");
								//utworzenie klasy bloku "pozycja" dla pojedynczego wyniku - dla css
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
							}
							else
							{ 
								continue;
							}
				}
		},
		type: 'GET'	
	});	
}
document.getElementById('button').addEventListener('click', bookSearch, false) // wywołanie funkcji przez przycisk

// wywolywanie funkcji pobierajacej wyniki poprzez scrollowanie strony
var licznik=1;
var max1=0;
onwheel = function()
{
	licznik=window.pageYOffset;

	if(licznik>max1)
	{
		max1=licznik;
	}
	if(licznik===max1)
	{
		bookSearch();
	}
}

// dezaktywowanie i aktywowanie przycisku 'search', gdy pola sa puste lub uzupelnione
	$('#search').keyup(function() 
	{
		if ($('#search').val() == "") 
		{
			$('#button').disabled = true;
			$('#searchSpan').addClass('gray').removeClass('white');
		} 
		else 
		{
			$('#button').disabled = false;
			$('#searchSpan').addClass('white').removeClass('gray');
		}
	});
	
	$('#lang').keyup(function() 
	{
		if ($('#lang').val() == "") 
		{
			$('#button').disabled = true;
			$('#searchSpan').addClass('gray').removeClass('white');
		} 
		else 
		{
			$('#button').disabled = false;
			$('#searchSpan').addClass('white').removeClass('gray');
		}
	});
	
	$('#date').keyup(function() 
	{
		if ($('#date').val() == "") 
		{
			$('#button').disabled = true;
			$('#searchSpan').addClass('gray').removeClass('white');
		} 
		else 
		{
			$('#button').disabled = false;
			$('#searchSpan').addClass('white').removeClass('gray');
		}
	});
	
	$('#author').keyup(function() 
	{
		if ($('#author').val() == "") 
		{
			$('#button').disabled = true;
			$('#searchSpan').addClass('gray').removeClass('white');
		} 
		else
		{
			$('#button').disabled = false;
			$('#searchSpan').addClass('white').removeClass('gray');
		}
	});