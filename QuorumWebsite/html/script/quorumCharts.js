  function chartInformationKeydown() {
	var svgId = getChartID(this);
	
	 flag = false;
	 //ENTER
	 if (event.keyCode == 13) {
		flag = true;
	 }
	 //PAGE UP / PAGE DOWN
	 else if(event.keyCode == 33 || event.keyCode == 34){
		flag = true;
	 }
	 //RIGHT / UP
	 else if(event.keyCode == 39 || event.keyCode == 38){
		if(this.nextSibling)
			this.nextSibling.focus();
		//else
		//	this.parentNode.getElementsByTagName('g')[0].focus();
		flag = true;
	 }
	 //LEFT / DOWN
	 else if(event.keyCode == 37 || event.keyCode == 40){
		if(this.previousSibling)
			this.previousSibling.focus();
		//else
		//	this.parentNode.lastChild.focus();
		flag = true;
	 }
	 
	  if (flag) {
		event.stopPropagation();
		event.preventDefault();
	  }
 }
  
  function chartAreaKeydown() {
	 flag = false;
	 //ENTER
	 if (event.shiftKey == false && event.keyCode == 13) {
		this.getElementsByTagName('g')[0].focus();
		flag = true;
	 }
	 //PAGE UP / PAGE DOWN
	 else if(event.keyCode == 33 || event.keyCode == 34){
		flag = true;
	 }
	 //ARROW KEYS
	 else if(event.keyCode == 39 || event.keyCode == 38 || event.keyCode == 37 || event.keyCode == 40){
		 flag = true;
	 }
	 
	  if (flag) {
		event.stopPropagation();
		event.preventDefault();
	  }
 }

 function seriesKeydown() {
	 flag = false;
	 //SHIFT + ENTER
	 if (event.shiftKey && event.keyCode == 13) {
		this.parentNode.focus();
		flag = true;
	 }
	 //ENTER
	 else if (event.shiftKey == false && event.keyCode == 13) {
		this.getElementsByTagName('g')[0].focus();
		flag = true;
	 }
	 //PAGE UP / PAGE DOWN
	 else if(event.keyCode == 33 || event.keyCode == 34){
		flag = true;
	 }
	 //RIGHT / UP
	 else if(event.keyCode == 39 || event.keyCode == 38){
		if(this.nextSibling)
			this.nextSibling.focus();
		else
			this.parentNode.getElementsByTagName('g')[0].focus();
		flag = true;
	 }
	 //LEFT / DOWN
	 else if(event.keyCode == 37 || event.keyCode == 40){
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
	 //SHIFT + ENTER
	 if (event.shiftKey && event.keyCode == 13) {
		this.parentNode.focus();
		flag = true;
	 }
	 //PAGE UP / PAGE DOWN
	 else if(event.keyCode == 33 || event.keyCode == 34){
		flag = true;
	 }
	 //ENTER
	 else if (event.shiftKey == false && event.keyCode == 13) {
		this.getElementsByTagName('g')[0].focus();
		flag = true;
	 }
	 //RIGHT / UP
	 else if(event.keyCode == 39 || event.keyCode == 38){
		if(this.nextSibling)
			this.nextSibling.focus();
		else
			this.parentNode.getElementsByTagName('g')[0].focus();
		flag = true;
	 }
	 //LEFT / DOWN
	 else if(event.keyCode == 37 || event.keyCode == 40){
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
	 //SHIFT + ENTER
	 if (event.shiftKey && event.keyCode == 13) {
		this.parentNode.focus();
		flag = true;
	 }
	 //ENTER
	 else if (event.keyCode == 13) {
		flag = true;
	 }
	 //PAGE UP
	 else if(event.keyCode == 33){
		var svgId = getChartID(this);
		
		if (svgId == null)
			return;
		
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
	 //PAGE DOWN
	 else if(event.keyCode == 34){
		var svgId = getChartID(this);
		
		if (svgId == null)
			return;
		
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
	 //RIGHT / UP
	 else if(event.keyCode == 39 || event.keyCode == 38){
		if(this.nextSibling)
			this.nextSibling.focus();
		else
			this.parentNode.getElementsByTagName('g')[0].focus();
		flag = true;
	 }
	 //LEFT / DOWN
	 else if(event.keyCode == 37 || event.keyCode == 40){
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
 
  function pointKeydown() {
	 flag = false;
	 //SHIFT + ENTER
	 if (event.shiftKey && event.keyCode == 13) {
		this.parentNode.focus();
		flag = true;
	 }
	 //ENTER
	 else if (event.keyCode == 13) {
		flag = true;
	 }
	 //PAGE UP
	 else if(event.keyCode == 33){
		var svgId = getChartID(this);
		
		if (svgId == null)
			return;
		
		if(typeof quorum_chart_value_order != "undefined" && quorum_chart_value_order != null) {
			var value_order = quorum_chart_value_order[svgId + "_y"];
			
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
	 //PAGE DOWN
	 else if(event.keyCode == 34){
		var svgId = getChartID(this);
		
		if (svgId == null)
			return;
		
		if(typeof quorum_chart_value_order != "undefined" && quorum_chart_value_order != null) {
			var value_order = quorum_chart_value_order[svgId + "_y"];
			
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
	 //RIGHT / UP
	 else if(event.keyCode == 39 || event.keyCode == 38){
		var svgId = getChartID(this);
		
		if (svgId == null)
			return;
		
		if(typeof quorum_chart_value_order != "undefined" && quorum_chart_value_order != null) {
			var value_order = quorum_chart_value_order[svgId + "_x"];
			
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
	 //LEFT / DOWN
	 else if(event.keyCode == 37 || event.keyCode == 40){
		var svgId = getChartID(this);
		
		if (svgId == null)
			return;
		
		if(typeof quorum_chart_value_order != "undefined" && quorum_chart_value_order != null) {
			var value_order = quorum_chart_value_order[svgId + "_x"];
			
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
	//SHIFT + ENTER
	if (event.shiftKey && event.keyCode == 13) {
	 this.parentNode.focus();
	 flag = true;
	}
	//ENTER
	else if (event.shiftKey == false && event.keyCode == 13) {
	  this.getElementsByTagName('g')[0].focus();
	  flag = true;
	 }
	 //PAGE UP
	 else if(event.keyCode == 33){
		var svgId = getChartID(this);
		
		if (svgId == null)
			return;
		
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
	 //PAGE DOWN
	 else if(event.keyCode == 34){
	var svgId = getChartID(this);
	
	if (svgId == null)
		return;
	
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
	 //RIGHT / UP
	 else if(event.keyCode == 39 || event.keyCode == 38){
	 if(this.nextSibling)
	   this.nextSibling.focus();
	 else
	   this.parentNode.getElementsByTagName('g')[0].focus();
	 flag = true;
	}
	 //LEFT / DOWN
	 else if(event.keyCode == 37 || event.keyCode == 40){
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
 
  function plotitemKeydown() {
	flag = false;
	//SHIFT + ENTER
	if (event.shiftKey && event.keyCode == 13) {
	 this.parentNode.focus();
	 flag = true;
	}
	 //ENTER
	 else if (event.keyCode == 13) {
		flag = true;
	 }
	 //PAGE UP / PAGE DOWN
	 else if(event.keyCode == 33 || event.keyCode == 34){
		flag = true;
	 }
	//RIGHT or UP
	else if(event.keyCode == 39 || event.keyCode == 38){
	 if(this.nextSibling)
	   this.nextSibling.focus();
	 else
	   this.parentNode.getElementsByTagName('g')[0].focus();
	 flag = true;
	}
	//LEFT or DOWN
	else if(event.keyCode == 37 || event.keyCode == 40){
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
	var node = document.getElementById(id)
	if (node != null)
		node.classList.add('focus');
 }
 
 function loseFocus(id) {
	var node = document.getElementById(id)
	if (node != null)
		node.classList.remove('focus');
 }
 
 function getChartID( node ) {
	if (node == null || node.tagName == null){
		return null;
	}
	else if (node.tagName.toLowerCase() == "svg"){
		return node.id;
	}
	else {
		return getChartID(node.parentNode)
	}
 }
 
 function speechViewerFocus() {
	var svgId = getChartID(this);
	if (svgId != null) {
		var speechViewer = document.getElementById(svgId + "_speechViewer") 
		if (speechViewer != null) {
			speechViewer.innerText = this.getAttribute("aria-label");
		}
	}
 }
 
 function speechViewerBlur() {
	var svgId = getChartID(this);
	if (svgId != null) {
		var speechViewer = document.getElementById(svgId + "_speechViewer") 
		if (speechViewer != null) {
			speechViewer.innerText = "";
		}
	}
 }

window.addEventListener('load', function () {
  document.querySelectorAll('.quorum-chart-information-list').forEach(item => {
	  item.addEventListener('keydown', chartInformationKeydown, false);
	  item.addEventListener('focus', speechViewerFocus, false);
  })
  document.querySelectorAll('.quorum-chart-area').forEach(item => {
	  item.addEventListener('keydown', chartAreaKeydown, false);
	  item.addEventListener('focus', speechViewerFocus, false);
  })
  
  document.querySelectorAll('.quorum-chart-series-list').forEach(item => {
	  item.addEventListener('keydown', seriesKeydown, false);
	  item.addEventListener('focus', speechViewerFocus, false);
  })
  
  document.querySelectorAll('.quorum-chart-category-list').forEach(item => {
	  item.addEventListener('keydown', categoryKeydown, false);
	  item.addEventListener('focus', speechViewerFocus, false);
  })
  
  document.querySelectorAll('.quorum-chart-bar-list').forEach(item => {
	  item.addEventListener('keydown', barKeydown, false);
	  item.addEventListener('focus', speechViewerFocus, false);
  })

  document.querySelectorAll('.quorum-chart-plot-list').forEach(item => {
	item.addEventListener('keydown', plotKeydown, false);
	item.addEventListener('focus', speechViewerFocus, false);
  })

  document.querySelectorAll('.quorum-chart-plotitem-list').forEach(item => {
	item.addEventListener('keydown', plotitemKeydown, false);
	item.addEventListener('focus', speechViewerFocus, false);
  })
  
  document.querySelectorAll('.quorum-chart-point-list').forEach(item => {
	item.addEventListener('keydown', pointKeydown, false);
	item.addEventListener('focus', speechViewerFocus, false);
  })
});