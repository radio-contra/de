  /*
  audio.onclick = function(e) {
  e.preventDefault();

  var elm = e.target;
  var audio = document.getElementById('audio');
  
  alert(elm + ' / ' + audio);

  var source = document.getElementById('audioSource');
  source.src = elm.getAttribute('data-value');
  
  alert(source.src);

  audio.load(); //call this to just preload the audio without playing
  audio.play(); //call this to play the song right away
}; */


/*
function play_audio(usr_selection, event_src){

   alert(usr_selection);
*/   
   
   /*
   var usr_selected_audio = new Audio(usr_selection);
   var audio_event_src = 'myAudio_' + event_src;   
     
   var usr_selected_audio;   
   var audio_event_src; 
   */   
/*  
   if (document.getElementById(event_src).innerText == "Jetzt anhören") 
   {
       var usr_selected_audio        = new Audio(usr_selection);	   
       var audio_event_src           = 'myAudio_' + event_src;	   
   
       document.getElementById(event_src).innerText = "Wiedergabe Stopp";
	   usr_selected_audio.play();
	   alert('PLAY=JETZT anhoeren: ==> ' + document.getElementById(event_src).innerText + ' : ' + document.getElementById(audio_event_src).duration);
   }
   else 
   {
     document.getElementById(event_src).innerText = "Jetzt anhören";
*/	 
     /*	 
	 usr_selected_audio = document.getElementById(audio_event_src).currentSrc; 
	 audio_event_src = 'myAudio_' + event_src;
	 document.getElementById(audio_event_src).pause();
	 */	 
/*	 
     audio_event_src = 'myAudio_' + event_src;
	 usr_selected_audio = document.getElementById(audio_event_src).currentSrc;
	
     alert('AUDIO_id: = ' + audio_event_src);
	 alert('AUDIO_src: = ' + document.getElementById(audio_event_src).currentSrc);	
	 
	 document.getElementById(audio_event_src).pause();
	 document.getElementById(audio_event_src).currentTime = 0;
	 alert('PAUSE=Wiedergabe Stopp: ==> ' + document.getElementById(event_src).innerText);
	 
   }       

   alert('NACH dem Funktionsaufruf: ' + document.getElementById(event_src).innerText);
}
  


document.addEventListener('DOMContentLoaded', function () {

  function findeAuslöser(event) { 

    var elem = event.target,

        name = elem.nodeName,
		
		elem_id     = elem.id,
        elem_class	= elem.className;

    document.getElementById('ereignis').textContent = name;
		
    document.getElementById('idElement').textContent = elem_id;
	document.getElementById('classElement').textContent = elem_class;
  }  
  
  var seite = document.documentElement;
  seite.addEventListener('mouseover', findeAuslöser);
  seite.addEventListener('click', findeAuslöser); 

});
*/



/*  ------------- Test Position eines Objekts ermitteln  ANFANG  ----------  */

/*
function getPosition(element)
//der Aufruf dieser Funktion ermittelt die absoluten Koordinaten des Objekts element//
{
  var elem=element,tagname="",x=0,y=0;
  
   //solange elem ein Objekt ist und die Eigenschaft offsetTop enthaelt
   wird diese Schleife fuer das Element und all seine Offset-Eltern ausgefuehrt//
  while ((typeof(elem)=="object")&&(typeof(elem.tagName)!="undefined"))
  {
    y+=elem.offsetTop;                  // Offset des jeweiligen Elements addieren //
    x+=elem.offsetLeft;                 // Offset des jeweiligen Elements addieren //
    tagname=elem.tagName.toUpperCase(); // tag-Name ermitteln, Grossbuchstaben//

  //wenn beim Body-tag angekommen elem fuer Abbruch auf 0 setzen//
    if (tagname=="BODY")
      elem=0;

   //wenn elem ein Objekt ist und offsetParent enthaelt Offset-Elternelement ermitteln//
    if (typeof(elem)=="object")
      if (typeof(elem.offsetParent)=="object")
        elem=elem.offsetParent;
  }

  //Objekt mit x und y zurueckgeben//
  position=new Object();
  position.x=x;
  position.y=y;
  return position;
}


  /*
  //gibt eine Meldung mit x und y des zu elementId gehoerenden Elements aus ///
  function alertPosition(elementId){  
    
    var coords, element, divcolor;
	element=document.getElementById(elementId);
	divcolor = window.getComputedStyle(document.getElementById("introduce_news")).backgroundColor;
	//Aufruf der Funktion getPosition: Position bestimmen und melden //
    coords=getPosition(element);
    window.alert("Position "+elementId+": ("+coords.x+","+coords.y+")");
    window.alert(" DIV-color " + divcolor);
 }	
*/

/*  ------------- Test Position eines Objekts ermitteln  ENDE  ----------  */



/*  ------------- Test Liste aller Artikel generieren    Anfang  ----------  */

function erstelleSitemap()
{ 

  // wenn die UL schon existiert, UL loeschen
  if (document.getElementById('inhaltsverzeichnis')) {
      //window.alert("UL existiert schon.");
      var inhaltsverzeichnis = document.getElementById('inhaltsverzeichnis');
          inhaltsverzeichnis.parentNode.removeChild(inhaltsverzeichnis);
  }   
  
  // hole -alle- TAG LEGEND Objekte = Ueberschriften 
  var collection_ueberschriften = document.getElementsByTagName("legend");  
  var text_ueberschrift = "";
  
  // destination der UL definieren, UL und Listenelement erzeugen 
  var li_bgcolor = "";
  var myUL_destination = document.getElementById("div_sitemap_monitor");  
  var ul = document.createElement("ul");
  var li = document.createElement("li");
  //var a  = document.createElement('a');  
  var linktext = "";
  li.style=("line-height: 35px");
  ul.setAttribute("id", "inhaltsverzeichnis");
    
  // Untersuche den jeweiligen legend TAG, erstelle eine temporaere TAG-ID, und fuelle die UL
  for (let i = 0; i < collection_ueberschriften.length; i++) {
  
	  // die UL in das Dokument an destination einfuegen
      myUL_destination.appendChild(ul);
	  
	  //Farbwechsel Hintergrund je Listeneintrag
	  if(i%2===0){
         li_bgcolor = "#ffffff";
      }else{ li_bgcolor = "#f5f5dc"; }
	  
	  li = document.createElement('li');
      li.style=("line-height: 35px");
	  li.style.backgroundColor = li_bgcolor;	  
	  	  
	  //Nur Artikel aus introduce_news und datenfeld_content_stories in die Liste eintragen
	  if (collection_ueberschriften[i].parentNode.parentNode.id == document.getElementById("introduce_news").id) {    	       
		   
		   //das LEGEND TAG mit einer ID versehen
		   collection_ueberschriften[i].setAttribute("id", ("artikel_" + i));
		   
		   
		   
		   //ein neues a Objekt erzeugen + den TEXT des Links im Quellcode: href="#artikel.." + den hovertext + eine existierende CSS-Klasse zuweisen 
		   a = document.createElement('a');
		   a.href = "#artikel" + i;
		   a.title = collection_ueberschriften[i].innerText;
		   a.className += " link_im_text";		   
		   //die Uberschrift als Linktext zuweisen und den Verweis erzeugen
		   linkText = document.createTextNode(collection_ueberschriften[i].innerText);
		   a.appendChild(linkText);
		   
		   
		   
		   // und den Verweis selbst erzeugen 
		   a.setAttribute("href", "#artikel_" + i);		   
		   
		   //den Listeneintrag als Link erzeugen
           li.className += " " + collection_ueberschriften[i].parentNode.parentNode.id;		   
		   li.appendChild(a);

           li.addEventListener('click', function(e) {
              if (e.target.tagName === 'A'){                
				
				/*
				window.alert("e.target.innerText:= " + e.target.innerText);  					  // Was steht im A-Text
		        window.alert("e.target.href= " + e.target.href);  							      // was steht im A-Href 
                window.alert("e.target.parentNode.className= " + e.target.parentNode.className);  // die Klasse des ElternNode LI ermitteln				
				*/
				
				closeDivsOpenNews();
				
                // Die UL entfernen
				if (document.getElementById('inhaltsverzeichnis')) {
                    var inhaltsverzeichnis = document.getElementById('inhaltsverzeichnis');
                    inhaltsverzeichnis.parentNode.removeChild(inhaltsverzeichnis);
                }				
              }			  
			  
           });		   
		   
		   //das Listenelement in die UL eintragen
		   //console.log("Li: ", li);
           ul.appendChild(li);  
		   
	  } else if (collection_ueberschriften[i].parentNode.className == "datenfeld_content_stories") {
           collection_ueberschriften[i].setAttribute("id", ("artikel_" + i));
           a = document.createElement('a');
		   a.href = "#artikel" + i;		   
		   a.title = collection_ueberschriften[i].innerText.toString().replace(/[\n\t\r]/g,"").trim();
		   //console.log(a.title.trim());	   
		   
		   a.className += "link_im_text";		   
		   //collection_ueberschriften[i].innerText = "Hume: " + collection_ueberschriften[i].innerText;
           linkText = document.createTextNode(collection_ueberschriften[i].innerText);		   		   
		   
		   a.appendChild(linkText);
		   //console.log("linkText: " + a.title);		   
		   
		   a.setAttribute("href", "#artikel_" + i);
		   li.className += " " + collection_ueberschriften[i].parentNode.parentNode.parentNode.id;
		   //window.alert("datenfeld_content_stories==>Li Classname= " + collection_ueberschriften[i].parentNode.parentNode.parentNode.id);
           li.appendChild(a);

            li.addEventListener('click', function(e) {
              if (e.target.tagName === 'A'){                
				
				/*
				window.alert("e.target.innerText:= " + e.target.innerText);  					  // Was steht im A-Text
		        window.alert("e.target.href= " + e.target.href);  							      // was steht im A-Href
                window.alert("e.target.parentNode.className= " + e.target.parentNode.className);  // die Klasse des ElternNode LI ermitteln
				*/
				
				closeDivsOpenContainerContent();
                
				// Die UL entfernen
				if (document.getElementById('inhaltsverzeichnis')) {
                    var inhaltsverzeichnis = document.getElementById('inhaltsverzeichnis');
                    inhaltsverzeichnis.parentNode.removeChild(inhaltsverzeichnis);
                }              				
              }
           });
		   
		   // console.log(li);
           ul.appendChild(li);           	   
	    }        
    }
	
	
	/*
	//Man kann auch die UL ueberwachen
	
	var ul = document.getElementById('inhaltsverzeichnis');  // Parent

    ul.addEventListener('click', function(e) {
       if (e.target.tagName === 'LI'){
          window.alert("e.target.innerText:= " + e.target.innerText);  // Was steht im Li-Text
		  window.alert("e.target.firstChild.nodeName= " + e.target.firstChild.nodeName);  // was ist im 
       }
    });
    */
}

/*  ------------- Test Liste aller Artikel generieren    ENDE  ----------  */


var code;
		function createCaptcha(whoOrderedTheCapture, locationOfTextfield) {		   
		   var captchaTarget = 'generated' + whoOrderedTheCapture;
           
           // alert('captchaTarget: ' + captchaTarget + ' / locationOfTextfield: ' + locationOfTextfield); //
		   
		   //id des divs mit dem Captcha=   generatedCaptchaForEmail //
		   //whoOederedTheCapture       =   CaptchaForEMail //
		   let canvasID = whoOrderedTheCapture.replace("CaptchaFor","");
		   
		   // alert(canvasID);  //
		   
		  //das Captcha_Texfeld leeren// 
		  document.getElementById(captchaTarget).innerHTML = "";
		  //das input_Textfeld leeren//
		  document.getElementById(locationOfTextfield).value = "";
		  var charsArray =
		  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!$%&*";
		  var lengthOtp = 6;
		  var captcha = [];
		  for (var i = 0; i < lengthOtp; i++) {
			//below code will not allow Repetition of Characters
			var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
			if (captcha.indexOf(charsArray[index]) == -1)
			  captcha.push(charsArray[index]);
			else i--;
		  }
		  var canv = document.createElement("canvas");
		  canv.id = canvasID.toString();
		  canv.width = 125;
		  canv.height = 50;		  
		  var ctx = canv.getContext("2d");
		  
		  ctx.strokeStyle = "white";		  
		  ctx.font = "29px Georgia";
		  ctx.strokeText(captcha.join(""), 0, 30);
		  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
		  code = captcha.join("");
		  document.getElementById(captchaTarget).appendChild(canv); // adds the canvas to the body element
		}
		
		function validateCaptcha(whichCaptureToValidate, inputTxt, successAction) {
          // alert('whichCaptureToValidate: ' + whichCaptureToValidate + ' / inputTxt: ' + inputTxt + ' / successAction: ' + successAction); //		
		  event.preventDefault();
		  debugger		  
		  if (inputTxt.localeCompare(code) == 0) {			
            document.getElementById(whichCaptureToValidate).style.display = "none";
			document.getElementById(whichCaptureToValidate).value = "";
            document.getElementById(successAction.toString()).style.display = "block";            			
		  }else{			
			document.getElementById(whichCaptureToValidate).style.display = "none";
			document.getElementById(whichCaptureToValidate).value = "";			
		  }		  
		}

function openSchweinestall() {
document.getElementById("schweinestall").style.display = "block";
}	

function closeDivsOpenNews() {
  document.getElementById("container_promotion").style.display = "none";
  document.getElementById("container_content").style.display = "none";
  document.getElementById("introduce_next").style.display = "none";
  document.getElementById("introduce_order").style.display = "none";
  document.getElementById("introduce_datenschutz").style.display = "none";
  document.getElementById("kontakt_arten").style.display = "none";
  document.getElementById("sitemap_info").style.display = "none";
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("infoSitemap").style.display = "block";
  document.getElementById("GoHomeSitemapInfo").style.display = "none";  
  document.getElementById("introduce_news").style.display = "block";
  document.getElementById("erklaerung_datenschutz").style.display = "none";
  document.getElementById("erklaerung_agb").style.display = "none";
  document.getElementById("erklaerung_impressum").style.display = "none";  
}

function closeDivsOpenNext() {
  document.getElementById("container_promotion").style.display = "none";
  document.getElementById("container_content").style.display = "none";
  document.getElementById("introduce_news").style.display = "none";
  document.getElementById("introduce_order").style.display = "none";
  document.getElementById("introduce_datenschutz").style.display = "none";
  document.getElementById("kontakt_arten").style.display = "none";
  document.getElementById("sitemap_info").style.display = "none";
  document.getElementById("sidebar").style.display = "none";  
  document.getElementById("introduce_next").style.display = "block";
  document.getElementById("erklaerung_datenschutz").style.display = "none";
  document.getElementById("erklaerung_agb").style.display = "none";
  document.getElementById("erklaerung_impressum").style.display = "none";  
}

function closeDivsOpenOrder() {
  document.getElementById("container_content").style.display = "none";
  document.getElementById("introduce_news").style.display = "none";
  document.getElementById("kontakt_arten").style.display = "none";
  document.getElementById("sitemap_info").style.display = "none";
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("orderAmazon").style.display = "block";
  document.getElementById("orderAppleBooks").style.display = "block";
  document.getElementById("introduce_order").style.display = "block";    
}

<!-- wenn NUR der Verlag kontakt werden soll  -->
function closeDivsOpenPreOrder() {
  document.getElementById("container_content").style.display = "none";
  document.getElementById("introduce_news").style.display = "none";
  document.getElementById("kontakt_arten").style.display = "none";
  document.getElementById("sitemap_info").style.display = "none";  
  document.getElementById("orderAmazon").style.display = "none";
  document.getElementById("orderAppleBooks").style.display = "none";  
  document.getElementById("introduce_order").style.display = "block";    
}


<!-- wenn NUR der Autor kontakt werden soll  -->
function closeDivsOpenPreOrderAtAuthor() {
  document.getElementById("introduce_order").style.display = "none";  
  document.getElementById("introduce_datenschutz").style.display = "none"; 
  document.getElementById("sidebar").style.display = "none";  
  document.getElementById("kontakt_arten").style.display = "block";
  document.getElementById("information_kontaktarten").style.display = "block";
  document.getElementById("sitemap_info").style.display = "none";
  document.getElementById("kommentar_facebook").style.display = "none";
  document.getElementById("channelanmeldung_telegram").style.display = "none";  
  document.getElementById("erklaerung_datenschutz").style.display = "none";
  document.getElementById("erklaerung_agb").style.display = "none";
  document.getElementById("erklaerung_impressum").style.display = "none";    
}

function closeDivsOpenMyInfoDatenschutz() {
  document.getElementById("container_promotion").style.display = "none";
  document.getElementById("container_content").style.display = "none";
  document.getElementById("introduce_news").style.display = "none";
  document.getElementById("introduce_next").style.display = "none";
  document.getElementById("introduce_order").style.display = "none";
  document.getElementById("kontakt_arten").style.display = "none";
  document.getElementById("sitemap_info").style.display = "none";
  document.getElementById("sidebar").style.display = "none"; 
  document.getElementById("introduce_datenschutz").style.display = "block";  
  document.getElementById("erklaerung_datenschutz").style.display = "none";
  document.getElementById("erklaerung_agb").style.display = "none";
  document.getElementById("erklaerung_impressum").style.display = "none";   
}

function closeDivsOpenKontaktarten() {
  document.getElementById("container_promotion").style.display = "none";
  document.getElementById("container_content").style.display = "none";
  document.getElementById("introduce_news").style.display = "none";
  document.getElementById("introduce_next").style.display = "none";
  document.getElementById("introduce_order").style.display = "none";
  document.getElementById("introduce_datenschutz").style.display = "none"; 
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("kontakt_arten").style.display = "block";
  document.getElementById("sitemap_info").style.display = "none";
  document.getElementById("kommentar_facebook").style.display = "block";
  document.getElementById("channelanmeldung_telegram").style.display = "block"; 
  document.getElementById("erklaerung_datenschutz").style.display = "none";
  document.getElementById("erklaerung_agb").style.display = "none";
  document.getElementById("erklaerung_impressum").style.display = "none";  
}

function closeDivsOpenImpressum() {
  document.getElementById("container_promotion").style.display = "none";
  document.getElementById("container_content").style.display = "none";
  document.getElementById("introduce_news").style.display = "none";
  document.getElementById("introduce_next").style.display = "none";
  document.getElementById("introduce_order").style.display = "none";
  document.getElementById("kontakt_arten").style.display = "none";
  document.getElementById("sitemap_info").style.display = "none";
  document.getElementById("sidebar").style.display = "none"; 
  document.getElementById("introduce_datenschutz").style.display = "none";
  document.getElementById("erklaerung_datenschutz").style.display = "none"; 
  document.getElementById("erklaerung_agb").style.display = "none";
  document.getElementById("erklaerung_impressum").style.display = "block";    
}

function closeDivsOpenAgb() {
  document.getElementById("container_promotion").style.display = "none";
  document.getElementById("container_content").style.display = "none";
  document.getElementById("introduce_news").style.display = "none";
  document.getElementById("introduce_next").style.display = "none";
  document.getElementById("introduce_order").style.display = "none";
  document.getElementById("kontakt_arten").style.display = "none";
  document.getElementById("sitemap_info").style.display = "none";
  document.getElementById("sidebar").style.display = "none"; 
  document.getElementById("introduce_datenschutz").style.display = "none";
  document.getElementById("erklaerung_datenschutz").style.display = "none"; 
  document.getElementById("erklaerung_agb").style.display = "block";    
  document.getElementById("erklaerung_impressum").style.display = "none";   
}

function closeDivsOpenDatenschutz() {
  document.getElementById("container_promotion").style.display = "none";
  document.getElementById("container_content").style.display = "none";
  document.getElementById("introduce_news").style.display = "none";
  document.getElementById("introduce_next").style.display = "none";
  document.getElementById("introduce_order").style.display = "none";
  document.getElementById("kontakt_arten").style.display = "none";
  document.getElementById("sitemap_info").style.display = "none";
  document.getElementById("sidebar").style.display = "none"; 
  document.getElementById("introduce_datenschutz").style.display = "none";
  document.getElementById("erklaerung_datenschutz").style.display = "block";  
  document.getElementById("erklaerung_agb").style.display = "none";
  document.getElementById("erklaerung_impressum").style.display = "none";   
}

function closeDivsOpenSitemapInfo() {
  document.getElementById("container_promotion").style.display = "none";
  document.getElementById("container_content").style.display = "none";
  document.getElementById("introduce_news").style.display = "none";
  document.getElementById("introduce_next").style.display = "none";
  document.getElementById("introduce_order").style.display = "none";
  document.getElementById("kontakt_arten").style.display = "none";
  document.getElementById("sitemap_info").style.display = "block";
  document.getElementById("sidebar").style.display = "block";  
  document.getElementById("infoSitemap").style.display = "none";
  document.getElementById("GoHomeSitemapInfo").style.display = "block";  
  document.getElementById("introduce_datenschutz").style.display = "none";
  document.getElementById("erklaerung_datenschutz").style.display = "none";  
  document.getElementById("erklaerung_agb").style.display = "none";
  document.getElementById("erklaerung_impressum").style.display = "none";
  javascript:erstelleSitemap();  
}

function closeDivsOpenContainerContent() {
  document.getElementById("container_promotion").style.display = "none";
  document.getElementById("container_content").style.display = "block";
  document.getElementById("introduce_news").style.display = "none";
  document.getElementById("introduce_next").style.display = "none";
  document.getElementById("introduce_order").style.display = "none";
  document.getElementById("kontakt_arten").style.display = "none";
  document.getElementById("sitemap_info").style.display = "none";
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("infoSitemap").style.display = "block";
  document.getElementById("GoHomeSitemapInfo").style.display = "none";  
  document.getElementById("introduce_datenschutz").style.display = "none";
  document.getElementById("erklaerung_datenschutz").style.display = "none";  
  document.getElementById("erklaerung_agb").style.display = "none";
  document.getElementById("erklaerung_impressum").style.display = "none";    
}


function openDivCaptcha_email(whoOrderedTheCapture, locationOfTextfield){
  // alert('EMAIL: whoOrderedTheCapture: ' + whoOrderedTheCapture + ' / locationOfTextfield: ' + locationOfTextfield);  //
  document.getElementById("img_success").style.display = "none";
  createCaptcha(whoOrderedTheCapture, locationOfTextfield);  
  document.getElementById("div_captcha_email").style.display = "block";
}

function openDivCaptcha_telegram(whoOrderedTheCapture, locationOfTextfield){
  // alert('TELEGRAM: whoOrderedTheCapture: ' + whoOrderedTheCapture + ' / locationOfTextfield: ' + locationOfTextfield); //
  document.getElementById("telegram_success").style.display = "none";  
  createCaptcha(whoOrderedTheCapture, locationOfTextfield);  
  document.getElementById("div_captcha_telegram").style.display = "block";
}

function closeDivTelegramSuccess(){
document.getElementById("telegram_success").style.display = "none";
}