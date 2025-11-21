document.addEventListener('DOMContentLoaded', function () {

// wenn die Seite geladen ist, wird der globe   earth.html  im iFrame in den urspruenglichen Zustand gesetzt
// ansonsten brennt der globe nach einem Klick  hothouse_earth.html , permanent  
window.addEventListener("load", (event) => {
  //console.log("page is fully loaded");
  var changeSrcIframe = document.getElementById("hotHouseIframe");
  // hier wird die  Datenquelle  des iFrame aktualisiert 
  changeSrcIframe.src = "./earth.html";  
  //console.log(changeSrcIframe);
  // hier wird das #document/html/body/div  ueberschrieben, aus der oben angegebenen Datenquelle
  // sowas wie ein browserinterner reload. Umgeht Probleme wie Cross origin, undefinierte Funktionen, ...    
  document.getElementById('hotHouseIframe').src += ''; 
  });
  
function clickIstErfolgt() {
 //console.log("bildwechsel");
 var changeSrcIframe = document.getElementById("hotHouseIframe");
 //console.log("War: " + changeSrcIframe.src);
 changeSrcIframe.src = "./hothouse_earth.html";
 //console.log("Ist: " + changeSrcIframe.src);  
 //document.getElementById("kamera_button_was_clicked").title = "Klicken Sie bei Bedarf bitte HIER auf den Zurück-Button.";
 //document.getElementById("kamera_button_was_clicked").classList.add("link_im_text_xtrasmall"); 
 document.getElementById("kamera_button_was_clicked").appendChild(document.createTextNode("∞"));
 document.getElementById("kamera_button_was_clicked").fontWeight = "900" 
 document.getElementById("div_MyButton").style.display = "none";  
}


function setzeFocusAuf_article_timesup() {
 //console.log("in  setzeFocusAuf_article_timesup  angekommen"); 
 closeDivsOpenContainerContent(); 
 //window.alert("setzeFocusAuf_article_timesup vor #Time_is_up"); 
 window.location = "#Time_is_up"; 
 //window.alert("setzeFocusAuf_article_timesup hinter #Time_is_up"); 
}


(function () {
  const second = 1000,
        minute = second * 60,
        hour   = minute * 60,
        day    = hour * 24;
  
  
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),

	  // Hier  das Zieldatum  einstellen
      // Hier mit einem selbst gewaehlten Zieldatum, beginnend ab -countDown- einen Countdown zu starten    (happy birthday)
      // Zieldatum  war 2028, dann 2026, 2024. Aber weil die Verbindung zum Satelliten jetzt steht ==>          31.08.2024
      // Einspeisung des Todesvirus vorbereiten - AMOC initialsieren
	  // ---------------------------------------------------------------------------------------
	  // Benutzerbereich:   MM/DD und YY sind ohne jede Vorkenntnis aenderbar
	  // Wenn man keinen Satelliten hat, ist das hier ein Countdown
	  // Und wie man es kennt, passiert etwas, wenn der Countdown  distance < 0  abgelaufen ist
	  // 10 - 09 - 08 - 07 -06 - 05 - 04 - 03 - 02 - 01 - ignition, jetzt startet u.a. AMOC 
	  diferenceYear = 2024 ,
      //          MM DD  	  
      dayMonth = "08/31/",
	  // Ende des Benutzerbereichs
	  // ----------------------------------------------------------------------------------------
      dDay = dayMonth + diferenceYear;	  
	    
      const countDown = new Date(dDay).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;			  

        document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);		

        //was soll passieren? Nullen anzeigen und ...
        if (distance < 0) {
          document.getElementById("highnoon").innerText = "";		
          document.getElementById("highnoon").style.fontWeight = "700";
		  document.getElementById("highnoon").style.marginTop = "3px";		  
		  document.getElementById("days").textContent  = "0";
		  document.getElementById("hours").textContent = "0";
		  document.getElementById("minutes").textContent = "0";
		  document.getElementById("seconds").textContent = "0";		  
		  
		  // Wann war TimeUp? Haben wir selbt oben festgelegt.
		   const countdownEndeDatum     = document.createElement("p");
		   countdownEndeDatum.classList.add("videotitel");
		  // WOHIN mit den Daten?
		   var locationInDomTimesUp = document.getElementById("timesUp");
          // das Monitor-DIV sichtbar schalten
		   document.getElementById("timesUp").style.display = "block";		   
		   countdownEndeDatum.innerText = "440 ppm CO2 sind nicht mehr zu vermeiden.";		   
		   locationInDomTimesUp.appendChild(countdownEndeDatum);		   
		  		  
		  // Musik anbieten	
          // der Link
          // Ende der menschlichen Zivilisation   https://www.youtube.com/watch?v=CjwV0zlHxOo
          // Entspannungsmusik  https://www.youtube.com/watch?v=hHaz2-cZ_1A		  
		  document.getElementById("a_href_tres_mexicanos_tocando").href = "https://www.youtube.com/watch?v=Cy7UcHLtma0";
          document.getElementById("a_href_tres_mexicanos_tocando").target = "_blank";          	  
		  document.getElementById("tres_mexicanos_tocando").title = "Mark Benecke, Time is up, Youtube-Vortrag aktueller Messdaten im Zusammenhang mit dem Klimawandel, 11.07.2024";
          document.getElementById("warum_gibt_es").title = "Warum gab es das 1.5 Grad Celsius Ziel?";		  
		  // Animation starten
		  // das link-img	
		  document.getElementById("tres_mexicanos_tocando").src = "images/ani_mexicano.gif"
		  
		  // Link auf die Hitzetabelle setzen 
		  var insertLink    = document.createElement("a");
		  var locationInDom = document.getElementById("highnoon");		  
		  insertLink.href  = "https://www.climate-service-center.de/products_and_publications/publications/detail/062996/index.php.de";
		  insertLink.title = "Es ist heiß und wird jedes Jahr heißer.";		  
		  insertLink.textContent = "Aufrecht. Edel und gut. Einen Daumen im Arsch, und den anderen in die Luft strecken!";
		  insertLink.target = "_blank";
		  insertLink.className = "link_im_text_xtrasmall";
		  locationInDom.appendChild(insertLink);
		  

          document.getElementById("div_MyButton").style.display = "block";
		  var locationInDomGlobe = document.getElementById("div_MyButton");
		  var buttonElement = document.createElement("button");
          buttonElement.appendChild(document.createTextNode("∞ CLICK ∞"));
		  buttonElement.style.fontWeight = "900"
		  buttonElement.setAttribute("name", "hot_house_button");
		  buttonElement.setAttribute("title", "Tippen Sie hier um eine Illustration der Auswirkungen einzublenden");
		  buttonElement.classList.add("link_im_text_xtrasmall");
		  locationInDomGlobe.appendChild(buttonElement);

		  
		  
          // die Monitor-DIVs sichtbar schalten
          document.getElementById("text_countdown_abgelaufen").style.display = "block";
          document.getElementById("mexicanos_headline").style.display = "block";		  
		  document.getElementById("timesUp").style.display = "block";
		  document.getElementById("hotHouseEarth").style.display = "flex";
          document.getElementById("button_was_clicked").style.display = "block";		  
		  document.getElementById("klimawandel_wirkung").style.display = "block";
		  
		  document.getElementById("klimawandel_wirkung_lizenzen").style.display = "block";
		  document.getElementById("klimawandel_wirkung_musik").style.display = "block";
		  
		  document.getElementById("klimawandel_reaktion").style.display = "block";
		  document.getElementById("klimawandel_reaktion_2").style.display = "block";
          document.getElementById("klimawandel_methankrater").style.display = "block";
		  document.getElementById("if_hover_hotHouseEarth").style.display = "block";
          document.getElementById("klimawandel_methankrater_text").style.display = "block";
          document.getElementById("widerstand").style.display = "block";
		  document.getElementById("offer_information_sitemap_times_up").style.display = "block";
		  
		   
		   // eventListener: Was soll uberwacht werden, und was soll passieren, wenn das Ereignis eintritt
		      // const div = document.getElementById('hotHouseEarth');
           
		   // hover:   	   
		   // div.addEventListener('mouseenter', function addLinks(){
           
		   // Wir sind hier  innerhalb der Funktion addlinks !!
		   // Diese Funktion wird nur, aber immer dann, ausgefuehrt, wenn der Eventlistener ein mouseenter=hover registriert
		   
		   // Ist etwas angekommen?
		     // window.alert('Oh... ja');
			 // console.log('hover detected: hotHouseEarth ');
			 // console.log(div);
			   
			   // Aufgaben:
			   // console zeigt alles an:  Aufgaben definieren	   
			   
			   // Wenn der eventhandler nicht mehr gebraucht wird, entfernen:				  
			   // hier wird der Event-Listener entfernt				  				   
				  // div.removeEventListener('mouseenter', addLinks);
				  // console.log('EventListener entfernt: hotHouseEarth ');
			      // console.log(div);				             				   
		   
          // }, false);
		   
		  // console.log("hover EventHandler aktiv");		   
		  // Ende hover
		  

          // Start click		  
		  // var div = document.getElementById('hotHouseIframe');		  
	      // aber diesmal  click
			 const listenToDivMyBotton = document.getElementById('div_MyButton');		  
			 listenToDivMyBotton.addEventListener('click', function button_hothouse(){		  
						   
			   // die Aufgaben sind in der Funktion  clickIstErfolgt()  definiert
			   clickIstErfolgt();           	
					   
		  // Wir sind hier  innerhalb der Funktion button_hothouse() !!
	      // Diese Funktion wird nur, aber immer dann, ausgefuehrt, wenn der Eventlistener ein click registriert
		  // Ist etwas angekommen?
			   //window.alert('Oh... ein Klick');
			   //console.log('click detected: hotHouseIframe');
		  // console zeigt alles an,also Aufgaben einbauen	  
		  
		  // EventHandler abschalten: 
		     listenToDivMyBotton.removeEventListener('click', button_hothouse);
			 //console.log('EventListener click entfernt: button');
			 //console.log(listenToDivMyBotton);
			 //window.alert(listenToDivMyBotton);		                    				  
							  
		  }, false); //console.log("click EventHandler aktiv");          		  
		  // Ende click
		  
		  // HTML-Elemente, a,img,p ... definieren		  		  
		  var   insertLinkMethankrater       = document.createElement("a");
		  var   insertTextLink               = document.createElement("a");
		  var   insertBildMethankrater       = document.createElement("img");		   		  
		  	  
		  // Attribute von a,img,p ... definieren
		  // Methankrater
		  insertLinkMethankrater.href   = "https://www.mdpi.com/2076-3263/11/2/71#";
		  insertLinkMethankrater.title  = "So sieht ein Kipppunkt aus!";		  
		  insertLinkMethankrater.alt    = "Permafrost taut ==> Methankrater";
		  insertLinkMethankrater.target = "_blank";	  
		  insertBildMethankrater.src    = "./images/sibirien_erdhuegel.jpg";
		  insertBildMethankrater.alt   = "Permafrost taut ==> Methankrater";
		  insertBildMethankrater.title = "2023, Bildquelle: www.mdpi.com, New Catastrophic Gas Blowout and Giant Crater on the Yamal Peninsula in 2020";
		  insertBildMethankrater.classList.add("img_link_video");		  
		  
		  insertTextLink.href   = "https://www.spektrum.de/news/7000-gasblasen-woelben-sich-in-sibirien-auf/1443175";
		  insertTextLink.textContent  = "23.3.2017: 7000 Gashügel wölben sich in Sibirien auf";
		  insertTextLink.title  = "Hothouse Earth: ==> mindestens Jahrhunderte unkontollierbarer Anstieg der globalen Durchschnittstemperatur"; 
		  insertTextLink.alt    = "Permafrost taut ==> Methankrater";
		  insertTextLink.target = "_blank";		  
          insertTextLink.className = "link_im_text_xtrasmall";          
		  
		  // Text und Bild als a href in den DOM schreiben
		  // WOHIN mit den Daten?
		  var locationInDomMethankrater = document.getElementById("klimawandel_methankrater");	
          
		  // Krater		  	  
          locationInDomMethankrater.appendChild(insertTextLink);          
          insertBildMethankrater.style.marginBottom = "5px";		  
		  locationInDomMethankrater.appendChild(insertLinkMethankrater).appendChild(insertBildMethankrater);	  
		  
		  
		  // AMOC (noch ist Zeit, die Helme aufzusetzen)
		  var   insertLinkAmoc       = document.createElement("a");
		  var   insertTextLinkAmoc   = document.createElement("a");
		  var   insertBildAmoc       = document.createElement("img");

          insertLinkAmoc.href   = "https://www.youtube.com/watch?v=re2bDPejzhI";
		  insertLinkAmoc.title  = "So sieht ein Kipppunkt aus!";		  
		  insertLinkAmoc.alt    = "CO2 und CH4 ==> globale Durschnittstemperatur steigt ==> AMOC Stillstand";
		  insertLinkAmoc.target = "_blank";	  
		  insertBildAmoc.src    = "./images/countdown_golfstrom.jpg";
		  insertBildAmoc.alt    = "Permafrost taut ==> Methankrater";
		  insertBildAmoc.title  = "CO2 und CH4 Eruptionen ==> globale durschnittstemperatur steigt ==> AMOC Stillstand";
		  insertBildAmoc.classList.add("img_link_video");
          		  
		  insertTextLinkAmoc.href   = "https://www.youtube.com/watch?v=ZHNNW8c_FaA";
		  insertTextLinkAmoc.textContent  = "7.6.2024: Risiko eines Kollaps des AMOC";          	  
		  insertTextLinkAmoc.title  = "Hothouse Earth: ==> mindestens Jahrhunderte unkontollierbarer Anstieg der globalen Durchschnittstemperatur";   
		  insertTextLinkAmoc.alt    = "Permafrost taut ==> Methankrater";
		  insertTextLinkAmoc.target = "_blank";
          insertTextLinkAmoc.classList.add("link_im_text_xtrasmall");
		  // Text und Bild als a href in den DOM schreiben 		  
          locationInDomMethankrater.appendChild(insertTextLinkAmoc);	      
		  locationInDomMethankrater.appendChild(insertLinkAmoc).appendChild(insertBildAmoc);
		  locationInDomMethankrater.style.marginTop = "8px";

		  
		  // WIRKUNG		  
		  //Bilder WIRKUNGEN
		  // WOHIN mit den Daten?
		  var locationInDomWirkung    = document.getElementById("klimawandel_wirkung");		  
		  //DüRRE
		  var   insertLinkDuerre      = document.createElement("a");
          insertLinkDuerre.href       = "https://www.youtube.com/watch?v=-Vp67phRFMI";
		  insertLinkDuerre.title      = "globale Durschnittstemperatur steigt ==> Austrocknung und Dürre";		  
		  insertLinkDuerre.alt        = "Austrocknung und Dürre";
		  insertLinkDuerre.target     = "_blank";		  
		  var   insertBildDuerre      = document.createElement("img");
		  insertBildDuerre.src        = "./images/countdown_duerre.jpg";
		  insertBildDuerre.alt        = "Austrocknung und Dürre";
		  insertBildDuerre.title      = "globale Durschnittstemperatur steigt ==> Austrocknung und Dürre";
		  insertBildDuerre.classList.add("img_link_video");
		  locationInDomWirkung.appendChild(insertLinkDuerre).appendChild(insertBildDuerre);		  
		  //FEUER
		  var   insertLinkFeuer      = document.createElement("a");
          insertLinkFeuer.href       = "https://www.youtube.com/watch?v=KdG3F3N2GUE";
		  insertLinkFeuer.title      = "globale Durschnittstemperatur steigt ==> Waldbrände";		  
		  insertLinkFeuer.alt        = "Waldbrände";
		  insertLinkFeuer.target     = "_blank";		  
		  var   insertBildFeuer      = document.createElement("img");
		  insertBildFeuer.src        = "./images/countdown_esepa_waldbrand.jpg";
		  insertBildFeuer.alt        = "Waldbrände";
		  insertBildFeuer.title      = "globale Durschnittstemperatur steigt ==> Waldbrände";
		  insertBildFeuer.classList.add("img_link_video");
		  locationInDomWirkung.appendChild(insertLinkFeuer).appendChild(insertBildFeuer);
		  //Sturm
		  var   insertLinkSturm      = document.createElement("a");
          insertLinkSturm.href       = "https://www.youtube.com/watch?v=NaNh6MQTkCY";
		  insertLinkSturm.title      = "globale Durschnittstemperatur steigt ==> Stürme, Hurricans und Tornados";		  
		  insertLinkSturm.alt        = "Stürme, Hurricans und Tornados";
		  insertLinkSturm.target     = "_blank";		  
		  var   insertBildSturm      = document.createElement("img");
		  insertBildSturm.src        = "./images/countdown_tornado_bützow.jpg";
		  insertBildSturm.alt        = "Stürme, Hurricans und Tornados";
		  insertBildSturm.title      = "globale Durschnittstemperatur steigt ==> Stürme, Hurricans und Tornados";
		  insertBildSturm.classList.add("img_link_video");
		  locationInDomWirkung.appendChild(insertLinkSturm).appendChild(insertBildSturm);
		  //Starkregen		  
		  var   insertLinkStarkregen  = document.createElement("a");
          insertLinkStarkregen.href   = "https://www.youtube.com/watch?v=sCeREyLdR7Y";
		  insertLinkStarkregen.title  = "globale Durschnittstemperatur steigt ==> Starkregen und Überschwemmungen";		  
		  insertLinkStarkregen.alt    = "Starkregen und Überschwemmungen";
		  insertLinkStarkregen.target = "_blank";		  
		  var   insertBildStarkregen  = document.createElement("img");
		  insertBildStarkregen.src    = "./images/countdown_unwetter_mit_starkregen.jpg";
		  insertBildStarkregen.alt    = "Starkregen und Überschwemmungen";
		  insertBildStarkregen.title  = "globale Durschnittstemperatur steigt ==> Starkregen und Überschwemmungen";
		  insertBildStarkregen.classList.add("img_link_video");
		  locationInDomWirkung.appendChild(insertLinkStarkregen).appendChild(insertBildStarkregen);
		  //Überschwemmungen		  
		  var   insertLinkFlut        = document.createElement("a");
          insertLinkFlut.href         = "https://www.youtube.com/watch?v=y2-Zeb_1fsI";
		  insertLinkFlut.title        = "globale Durschnittstemperatur steigt ==> Starkregen und Überschwemmungen";		  
		  insertLinkFlut.alt          = "Starkregen und Überschwemmungen";
		  insertLinkFlut.target       = "_blank";		  
		  var   insertBildFlut        = document.createElement("img");
		  insertBildFlut.src          = "./images/countdown_unwetter_radkersburg.jpg";
		  insertBildFlut.alt          = "Starkregen und Überschwemmungen";
		  insertBildFlut.title        = "globale Durschnittstemperatur steigt ==> Starkregen und Überschwemmungen";
		  insertBildFlut.classList.add("img_link_video");
		  locationInDomWirkung.appendChild(insertLinkFlut).appendChild(insertBildFlut);		  
		  // Bilder REAKTION
		  // WOHIN mit den Daten?
		  var locationInDomReaktion    = document.getElementById("klimawandel_reaktion");		  
		  var   insertLinkMarine       = document.createElement("a");
          insertLinkMarine.href        = "https://www.youtube.com/watch?v=gIJTP9tPCF4";
		  // // insertLinkMarine.title = "Die Veranstalter von Krieg, Armut und Klimakatastrophe erklären ihre Hoheit über die Reaktion ihrer Opfer. Durch die Schaffung einer Rechtslage definieren sie, was ihre Opfer zu tun und zu unterlassen haben";		  
		  insertLinkMarine.alt         = "Die Verursacher der Klimakatastrophe überwachen die Reaktion ihrer Opfer.";
		  insertLinkMarine.target      = "_blank";			  
		  var   insertBildMarine       = document.createElement("img");
		  insertBildMarine.src         = "./images/countdown_flugzeugtraeger_regenbogen.jpg";
		  insertBildMarine.alt         = "Die Veranstalter von Krieg, Armut und Klimakatastrophe erklären ihre Hoheit über die Reaktion ihrer Opfer. Durch die Schaffung einer Rechtslage definieren sie ihre Zuständigkeit für das, was ihre Opfer zu tun und zu unterlassen haben";
		  insertBildMarine.title       = "Die Veranstalter von Krieg, Armut und Klimakatastrophe erklären ihre Hoheit über die Reaktion ihrer Opfer. Durch die Schaffung einer Rechtslage definieren sie ihre Zuständigkeit für das, was ihre Opfer zu tun und zu unterlassen haben";
		  insertBildMarine.style.marginBottom = "-12px";		   
		  insertBildMarine.classList.add("img_link_video");		  
		  locationInDomReaktion.appendChild(insertLinkMarine).appendChild(insertBildMarine);

          //Link auf den Klimaartikel-Artikel in  offer_information_sitemap_times_up  erzeugen
		  
          const locationInDomTimesUpInformation    = document.getElementById("offer_information_sitemap_times_up");
          const insertPInDomTimesUp                = document.createElement("p");
		  insertPInDomTimesUp.textContent          = "Aus aktuellem Anlass: Die vom IPPC im Jahr 2018 vorgeschlagene Begrenzung der durchschnittlichen Erderwärmung auf 1.5°C ist nicht mehr zu erreichen. Die Folgen einer globalen Erwärmung um 2.0°C gegenüber einem gemessenen vorindustriellen Niveau, und die damit determinierten, globalen, physikalischen und ökologischen Wirkungen, werden Realität. Klicken Sie auf diesen Absatz um eine Einleitung zu diesem Thema anzuzeigen.";
		  insertPInDomTimesUp.className            = "stories_txt";
          locationInDomTimesUpInformation.appendChild(insertPInDomTimesUp);		  
		  		  
		  locationInDomTimesUpInformation.addEventListener('click', function show_article_timesup(){		  
						   
			   // die Aufgaben sind in der Funktion  clickIstErfolgt()  definiert
			   setzeFocusAuf_article_timesup();					   
		  
		  // Ist etwas angekommen?			   
		  // console.log('click detected: show_article_timesup');
		  // console zeigt alles an,also Aufgaben einbauen	  
		  
		  // EventHandler abschalten:  HIER nicht; weil auch, wenn man von NEWS kommt, wird der Listener gebraucht 
		     //locationInDomTimesUpInformation.removeEventListener('click', show_article_timesup);
			 //console.log('EventListener click entfernt: show_article_timesup');			 
			 		                    				  
							  
		  }, false);
		  
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());
  
  });