<form name="jksearch" action="http://www.google.com/search" method="get" onSubmit="jksitesearch(this)">

<p>Search JavaScript Kit:<br />
<input id="hiddenquery" type="hidden" name="q" />
<input name="qfront" type="text" style="width: 200px" value="navigator object" /> <input type="submit" value="Search" /><br />
<div style="font: bold 11px Verdana;">Google:<input name="se" type="radio" checked>  Yahoo:<input name="se" type="radio">  MSN:<input name="se" type="radio">
</div>

<script type="text/javascript">

// All-in-one Internal Site Search script- By JavaScriptKit.com (http://www.javascriptkit.com)
// For this and over 400+ free scripts, visit JavaScript Kit- http://www.javascriptkit.com/
// This notice must stay intact for use

//Enter domain of site to search.
var domainroot="www.javascriptkit.com"

var searchaction=[ //form action for the 3 search engines
"http://www.google.com/search",
"http://search.yahoo.com/search",
"http://search.msn.com/results.aspx"
]

var queryfieldname=["q","p","q"] //name of hidden query form for the 3 search engines

function switchaction(cur, index){
cur.form.action=searchaction[index]
document.getElementById("hiddenquery").name=queryfieldname[index]
}

function jksitesearch(curobj){
for (i=0; i< document.jksearch.se.length; i++){ //loop through radio to see which is checked
if (document.jksearch.se[i].checked==true)
switchaction(document.jksearch.se[i], i)
}
document.getElementById("hiddenquery").value="site:"+domainroot+" "+curobj.qfront.value
}


</script>

</p>

</form>

<p style="font: normal 11px Arial">This free script provided by<br />
<a href="http://www.javascriptkit.com">JavaScript Kit</a></p>