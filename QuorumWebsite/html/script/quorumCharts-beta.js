  function chartAreaKeydown() {
	 flag = false;
	 console.log("KEYDOWN EVENT");
	 //ENTER
	 if (event.keyCode == 13) {
		console.log("CHART AREA ENTER");
		this.firstChild.focus();
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
		this.firstChild.focus();
		flag = true;
	 }
	 //BACKSPACE
	 else if (event.keyCode == 8) {
		console.log("CATEGORY BACKSPACE");
		this.parentNode.focus();
		flag = true;
	 }
	 //RIGHT
	 else if(event.keyCode == 39){
		console.log("CATEGORY RIGHT");
		if(this.nextSibling)
			this.nextSibling.focus();
		else
			this.parentNode.firstChild.focus();
		flag = true;
	 }
	 //LEFT
	 else if(event.keyCode == 37){
		console.log("CATEGORY LEFT");
		if(this.previousSibling)
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
	 //BACKSPACE
	 if (event.keyCode == 8) {
		console.log("BAR BACKSPACE");
		this.parentNode.focus();
		flag = true;
	 }
	 //RIGHT
	 else if(event.keyCode == 39){
		console.log("BAR RIGHT");
		if(this.nextSibling)
			this.nextSibling.focus();
		else
			this.parentNode.firstChild.focus();
		flag = true;
	 }
	 //LEFT
	 else if(event.keyCode == 37){
		console.log("BAR LEFT");
		if(this.previousSibling)
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
			
			if (this.parentNode.classList.contains("quorum-chart-category-list"))
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
			
			if (this.parentNode.classList.contains("quorum-chart-category-list"))
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
  
  document.querySelectorAll('.quorum-chart-category-list').forEach(item => {
	  console.log("Adding category event handler");
	  item.addEventListener('keydown', categoryKeydown, false)
  })
  
  document.querySelectorAll('.quorum-chart-bar-list').forEach(item => {
	  console.log("Adding chart area event handler");
	  item.addEventListener('keydown', barKeydown, false)
  })
});