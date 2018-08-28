var pageContent=document.getElementById('page-content');
var loading=document.getElementById('loading');
function loadIng(){
      pageContent.style.display='none';
      setTimeout(showNow,3000);


}

function showNow(){
     loading.style.display='none';
	  pageContent.style.display='block';
}