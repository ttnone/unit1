/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
//this is the quotes
var array = {scrip: [
"And  so  we  know  and  rely  on  the  love  God  has  for  us. God  is  love. Whoever  lives  in  love  lives  in  God, and  God  in  them",
"But  he  said  to  me  My  grace  is  sufficient  for you,  for  my  power  is  made  perfect  in  weakness.  Therefore  I  will  boast   all  the  more  gladly  about  my  weaknesses,  so   that  Christ’s  power  may  rest  on  me", 
"What  has   been   will  be  again,   what   has  been  done  will  be  done  again;  there  is  nothing  \nnew  under  the  sun",
"Who  shall  separate  us  from  the  love  of  Christ?  Shall  trouble  or  hardship  or  persecution  or  famine  or  nakedness  or  danger  or  sword?",
" But  we  believe  that  through  the  grace  of  the  Lord  Jesus  Christ  we  shall  be  saved,  even  as  they."],
verse:	["1 John 4:16","2 Corinthians 12:9","Ecclesiastes 1:9","Romans 8:35","Acts 15:11"],
    book:["NIV"]};
	//list of varibles from elemenst to colors
	var carry=["#0000FF","#33cc33","#ff66ff","#ff0066","#cc0000"];
 var tv=document.getElementsByClassName("source");
var  vt=document.getElementsByClassName("quote");
var ct=document.createElement("span");
var bae=document.createElement("span");
var chk=document.getElementsByTagName("body")

//genorator for randomness
function getRandomQuote(){
	
	var x =Math.floor(Math.random()*5);

return x;
}
function printQuote (){
	
	var d = getRandomQuote();
	// keeps 
		const rt= array.scrip[d].split();
		const ty= array.verse[d].split();
	var ti =Object.values(rt);
    var gt =Object.values(ty);
    var yy=Object.values(array.book[0]);
	    var fy =yy.join("");
	bae.innerHTML="2019";
		//$("p").find("span").append(fy);
		//add stuff to the body
		ct.innerHTML=fy;
	vt[0].innerHTML=ti;
	tv[0].innerHTML=gt;
	$(tv).append(ct);
	$(ct).append(bae);
	//changes colors
document.querySelector("body").style.background = carry[d];
	 
}

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.