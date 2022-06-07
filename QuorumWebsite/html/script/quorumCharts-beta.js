  function chartAreaKeydown() {
	 flag = false;
	 console.log("KEYDOWN EVENT");
	 //ENTER
	 if (event.keyCode == 13) {
		console.log("CHART AREA ENTER");
		this.getElementsByTagName('g')[0].focus();
		flag = true;
	 }
	 
	  if (flag) {
		event.stopPropagation();
		event.preventDefault();
	  }
 }

 function seriesKeydown() {
	 flag = false;
	 console.log("KEYDOWN EVENT");
	 //ENTER
	 if (event.keyCode == 13) {
		console.log("CATEGORY ENTER");
		this.getElementsByTagName('g')[0].focus();
		flag = true;
	 }
	 //ESCAPE
	 else if (event.keyCode == 27) {
		console.log("CATEGORY ESCAPE");
		this.parentNode.focus();
		flag = true;
	 }
	 //RIGHT
	 else if(event.keyCode == 39){
		console.log("CATEGORY RIGHT");
		if(this.nextSibling)
			this.nextSibling.focus();
		else
			this.parentNode.getElementsByTagName('g')[0].focus();
		flag = true;
	 }
	 //LEFT
	 else if(event.keyCode == 37){
		console.log("CATEGORY LEFT");
		if(this.previousSibling && this.previousSibling.tagName == 'g')
			this.previousSibling.focus();
		else
			this.parentNode.lastChild.focus();
		flag = true;
	 }
	 
	  if (flag) {
		event.stopPropagation();
		event.preventDefault();
	  }
 }

 function categoryKeydown() {
	 flag = false;
	 console.log("KEYDOWN EVENT");
	 //ENTER
	 if (event.keyCode == 13) {
		console.log("CATEGORY ENTER");
		this.getElementsByTagName('g')[0].focus();
		flag = true;
	 }
	 //ESCAPE
	 else if (event.keyCode == 27) {
		console.log("CATEGORY ESCAPE");
		this.parentNode.focus();
		flag = true;
	 }
	 //RIGHT
	 else if(event.keyCode == 39){
		console.log("CATEGORY RIGHT");
		if(this.nextSibling)
			this.nextSibling.focus();
		else
			this.parentNode.getElementsByTagName('g')[0].focus();
		flag = true;
	 }
	 //LEFT
	 else if(event.keyCode == 37){
		console.log("CATEGORY LEFT");
		if(this.previousSibling && this.previousSibling.tagName == 'g')
			this.previousSibling.focus();
		else
			this.parentNode.lastChild.focus();
		flag = true;
	 }
	 
	  if (flag) {
		event.stopPropagation();
		event.preventDefault();
	  }
 }
 
 
 function barKeydown() {
	 flag = false;
	 console.log("KEYDOWN EVENT");
	 //ESCAPE
	 if (event.keyCode == 27) {
		console.log("BAR ESCAPE");
		this.parentNode.focus();
		flag = true;
	 }
	 //RIGHT
	 else if(event.keyCode == 39){
		console.log("BAR RIGHT");
		if(this.nextSibling)
			this.nextSibling.focus();
		else
			this.parentNode.getElementsByTagName('g')[0].focus();
		flag = true;
	 }
	 //LEFT
	 else if(event.keyCode == 37){
		console.log("BAR LEFT");
		if(this.previousSibling && this.previousSibling.tagName == 'g')
			this.previousSibling.focus();
		else
			this.parentNode.lastChild.focus();
		flag = true;
	 }
	 //UP
	 else if(event.keyCode == 38){
		console.log("BAR UP");
		var svgId = getChartID(this);
		
		if (svgId == null)
			return;
		console.log("ID: " + svgId);
		
		if(typeof quorum_chart_value_order != "undefined" && quorum_chart_value_order != null) {
			var value_order = quorum_chart_value_order[svgId];
			
			if (this.parentNode.classList.contains("quorum-chart-category-list") || this.parentNode.classList.contains("quorum-chart-series-list"))
				value_order = value_order[this.parentNode.id];
				
			if (value_order[this.id] != null) {
				 var current = value_order[this.id];
				 var index = Object.keys(value_order).indexOf(this.id);
				 var length = Object.keys(value_order).length
				 if(index < length - 1) {
					 var next = Object.keys(value_order)[index + 1];
					 document.getElementById(next).focus();
				 }
				 /*else {
					 var next = Object.keys(value_order)[0];
					 document.getElementById(next).focus();
					 flag = true;
				 }*/
			}
		}
		flag = true;
	 }
	 //DOWN
	 else if(event.keyCode == 40){
		console.log("BAR DOWN");
		var svgId = getChartID(this);
		
		if (svgId == null)
			return;
		console.log("ID: " + svgId);
		
		if(typeof quorum_chart_value_order != "undefined" && quorum_chart_value_order != null) {
			var value_order = quorum_chart_value_order[svgId];
			
			if (this.parentNode.classList.contains("quorum-chart-category-list") || this.parentNode.classList.contains("quorum-chart-series-list"))
				value_order = value_order[this.parentNode.id];
			
			if (value_order != null && value_order[this.id] != null) {
				 var current = value_order[this.id];
				 var index = Object.keys(value_order).indexOf(this.id);
				 if(index > 0) {
					 var previous = Object.keys(value_order)[index - 1];
					 document.getElementById(previous).focus();
				 }
				 /*else {
					 var length = Object.keys(value_order).length;
					 var previous = Object.keys(value_order)[length - 1];
					 document.getElementById(previous).focus();
					 flag = true;
				 }*/
			}
		}
		flag = true;
	 }
	 
	  if (flag) {
		event.stopPropagation();
		event.preventDefault();
	  }
 }

 function plotKeydown() {
	flag = false;
	console.log("KEYDOWN EVENT");
	//ENTER
	if (event.keyCode == 13) {
	  console.log("PLOT ENTER");
	  this.getElementsByTagName('g')[0].focus();
	  flag = true;
	 }
	//ESCAPE
	if (event.keyCode == 27) {
	 console.log("PLOT ESCAPE");
	 this.parentNode.focus();
	 flag = true;
	}
	//RIGHT
	else if(event.keyCode == 39){
	 console.log("PLOT RIGHT");
	 if(this.nextSibling)
	   this.nextSibling.focus();
	 else
	   this.parentNode.getElementsByTagName('g')[0].focus();
	 flag = true;
	}
	//LEFT
	else if(event.keyCode == 37){
	 console.log("PLOT LEFT");
	 if(this.previousSibling && this.previousSibling.tagName == 'g')
	   this.previousSibling.focus();
	 else
	   this.parentNode.lastChild.focus();
	 flag = true;
	}
	
	 if (flag) {
	 event.stopPropagation();
	 event.preventDefault();
	 }
  }
 
 function gainFocus(id) {
	 document.getElementById(id).classList.add('focus');
 }
 
 function loseFocus(id) {
	 document.getElementById(id).classList.remove('focus');
 }
 
 function getChartID( node ) {
	 console.log("getChartID");
	if (node == null || node.tagName == null){
		console.log("null");
		return null;
	}
	else if (node.tagName.toLowerCase() == "svg"){
		console.log("svg");
		return node.id;
	}
	else {
		console.log("recurse");
		return getChartID(node.parentNode)
	}
 }

window.addEventListener('load', function () {
	
  document.querySelectorAll('.quorum-chart-area').forEach(item => {
	  console.log("Adding chart area event handler");
	  item.addEventListener('keydown', chartAreaKeydown, false)
  })
  
  document.querySelectorAll('.quorum-chart-series-list').forEach(item => {
	  console.log("Adding series event handler");
	  item.addEventListener('keydown', seriesKeydown, false)
  })
  
  document.querySelectorAll('.quorum-chart-category-list').forEach(item => {
	  console.log("Adding category event handler");
	  item.addEventListener('keydown', categoryKeydown, false)
  })
  
  document.querySelectorAll('.quorum-chart-bar-list').forEach(item => {
	  console.log("Adding chart area event handler");
	  item.addEventListener('keydown', barKeydown, false)
  })

  document.querySelectorAll('.quorum-chart-plot-list').forEach(item => {
	console.log("Adding chart area event handler");
	item.addEventListener('keydown', plotKeydown, false)
  })
});