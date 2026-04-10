if(!window.__chartScriptInitialized) {
window.__chartScriptInitialized = true;
 
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
		if(this.id.includes('boundingbox')) {
			if(this.parentElement.nextSibling) {
				this.parentElement.nextSibling.focus();
			}
		} else if(this.nextSibling)
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
		if(this.id.includes('boundingbox')){
			this.nextSibling.focus();
		} else
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

function showSelectionLabel(element) {
  const isStandalone = document.contentType === 'image/svg+xml';
  const label = document.getElementById('quorum-selection-label');

  if (!label || !element.hasAttribute('data-label-value')) return;

  label.innerText = element.dataset.labelValue;

  if (isStandalone) {
    const svgElement = document.documentElement;

	const svgRect = svgElement.getBoundingClientRect();
	const elRect  = element.getBoundingClientRect();

	// const scaleX = svgElement.viewBox.baseVal.width  / svgRect.width;
	// const scaleY = svgElement.viewBox.baseVal.height / svgRect.height;
const viewBoxAspect = svgElement.viewBox.baseVal.width / svgElement.viewBox.baseVal.height;
const svgRectAspect = svgRect.width / svgRect.height;

let scale;
if (svgRectAspect > viewBoxAspect) {
    // height is the constraining dimension, letterboxing on sides
    scale = svgElement.viewBox.baseVal.height / svgRect.height;
} else {
    // width is the constraining dimension, letterboxing on top/bottom
    scale = svgElement.viewBox.baseVal.width / svgRect.width;
}

const scaleX = scale;
const scaleY = scale;
	let position = 'top-left';
	if(element.hasAttribute('data-label-position')) {
		position = element.dataset.labelPosition;
	}

  	label.hidden = false;
	// const x = (elRect.left - svgRect.left) * scaleX;
	// const y = (elRect.top  - svgRect.top)  * scaleY;

	// const elX = (elRect.left - svgRect.left) * scaleX;
	// const elY = (elRect.top - svgRect.top) * scaleY;
	const offsetX = (svgRect.width  - svgElement.viewBox.baseVal.width  / scale) / 2;
	const offsetY = (svgRect.height - svgElement.viewBox.baseVal.height / scale) / 2;

	const elX = (elRect.left - svgRect.left - offsetX) * scale;
	const elY = (elRect.top  - svgRect.top  - offsetY) * scale;
	const elWidth = elRect.width * scaleX;
	const elHeight = elRect.height * scaleY;
	const gap = 4;
	const labelWidth  = label.offsetWidth;
	const labelHeight = label.offsetHeight;

	switch (position) {
		case 'top-left':
			x = elX;
			y = elY - labelHeight - gap;
			break;
		case 'top-center':
			x = elX + (elWidth / 2) - (labelWidth / 2);
			y = elY - labelHeight - gap;
			break;
		case 'top-right':
			x = elX + elWidth + gap;
			y = elY - labelHeight - gap;
			break;
		case 'center-left':
			x = elX + gap;
			y = elY + (elHeight / 2) - (labelHeight / 2);
			break;
		case 'center':
			x = elX + (elWidth  / 2) - (labelWidth  / 2);
			y = elY + (elHeight / 2) - (labelHeight / 2);
			break;
		case 'center-right':
			x = elX + elWidth + gap;
			y = elY + (elHeight / 2) - (labelHeight / 2);
			break;
		case 'bottom-left':
			x = elX + gap;
			y = elY + elHeight + gap;
			break;
		case 'bottom-center':
			x = elX + (elWidth / 2) - (labelWidth / 2);
			y = elY + elHeight + gap;
			break;
		case 'bottom-right':
			x = elX + elWidth - labelWidth;
			y = elY + elHeight + gap;
			break;
		default:
			x = elX;
			y = elY - labelHeight - gap;
	}
	// x = x * scaleX;
	// y = y * scaleY;
	label.style.left = x + 'px';
	label.style.top  = y + 'px';

	const targetFontSize = 16;
	label.style.fontSize = (targetFontSize * scaleX) + 'px';
  } 
  else {

    const elRect = element.getBoundingClientRect();
	label.hidden = false;
	let position = 'top-left';
	if(element.hasAttribute('data-label-position')) {
		position = element.dataset.labelPosition;
	}

  	label.hidden = false;

	const elX = elRect.left
	const elY = elRect.top
	const elWidth = elRect.width;
	const elHeight = elRect.height;
	const gap = 4;
	const labelWidth  = label.offsetWidth;
	const labelHeight = label.offsetHeight;

	switch (position) {
		case 'top-left':
			x = elX;
			y = elY - labelHeight - gap;
			break;
		case 'top-center':
			x = elX + (elWidth / 2) - (labelWidth / 2);
			y = elY - labelHeight - gap;
			break;
		case 'top-right':
			x = elX + elWidth + gap;
			y = elY - labelHeight - gap;
			break;
		case 'center-left':
			x = elX + gap;
			y = elY + (elHeight / 2) - (labelHeight / 2);
			break;
		case 'center':
			x = elX + (elWidth  / 2) - (labelWidth  / 2);
			y = elY + (elHeight / 2) - (labelHeight / 2);
			break;
		case 'center-right':
			x = elX + elWidth + gap;
			y = elY + (elHeight / 2) + (labelHeight / 2);
			break;
		case 'bottom-left':
			x = elX + gap;
			y = elY + elHeight + gap;
			break;
		case 'bottom-center':
			x = elX + (elWidth / 2) - (labelWidth / 2);
			y = elY + elHeight + gap;
			break;
		case 'bottom-right':
			x = elX + elWidth - labelWidth;
			y = elY + elHeight + gap;
			break;
		default:
			x = elX;
			y = elY - labelHeight - gap;
	}
    label.style.left = (x + window.scrollX) + 'px';
    label.style.top  = (y  + window.scrollY) + 'px';
  }
}

 function hideSelectionLabel() {
	let label = document.getElementById('quorum-selection-label');
	if (label) {
		label.hidden = true;
	}
 }
document.addEventListener('DOMContentLoaded', () => {
	let selectionLabel = document.getElementById('quorum-selection-label');
	const isStandalone = document.contentType === 'image/svg+xml';
	if(!selectionLabel) {
		selectionLabel = null;
		if(isStandalone)
			selectionLabel = document.createElementNS('http://www.w3.org/1999/xhtml','div');
		else
			selectionLabel = document.createElement('div');
		selectionLabel.id = 'quorum-selection-label';
		selectionLabel.style.pointerEvents = 'none';
		selectionLabel.style.position = 'absolute';
		selectionLabel.style.fontSize = '12px'
		selectionLabel.style.backgroundColor = 'white';
		selectionLabel.style.borderRadius = '6px';
		selectionLabel.style.border = '2px solid #999999';
		selectionLabel.style.padding = '2px';
		selectionLabel.style.zIndex = '9999';
		if(!isStandalone) {
			document.body.appendChild(selectionLabel);
		} else {
			let foreignObject = document.createElementNS('http://www.w3.org/2000/svg','foreignObject');
			foreignObject.setAttribute('width','1');
			foreignObject.setAttribute('height','1');
			foreignObject.style.overflow = 'visible';
			document.documentElement.appendChild(foreignObject);
			foreignObject.appendChild(selectionLabel);
		}
		selectionLabel.hidden = true;
	}
});


// var svg = document.querySelector('svg');

// svg.addEventListener('mouseover', event => {
//   const el = event.target.closest('[data-label]');
//   if (el) show(el, event);
// });

// svg.addEventListener('mouseout', event => {
//   const el = event.target.closest('[data-label]');
//   if (el) hide();
// });

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
  
  document.querySelectorAll('.quorum-chart').forEach(item => {
	item.addEventListener('focusin', event => {
  	const el = event.target.closest('[data-label-value]');
  		if (el) {
			showSelectionLabel(el);
		}  
	});
	item.addEventListener('focusout', event => {
	const el = event.target.closest('[data-label-value]');
		if (el){ 
			hideSelectionLabel();
		}
	});
	item.addEventListener('pointerover', event => {
	const el = event.target.closest('[data-label-value]');
  		if (el) {
			showSelectionLabel(el);
		}  
	});
	item.addEventListener('pointerout', event => {
	const el = event.target.closest('[data-label-value]');
		if (el){
				hideSelectionLabel();
		}
	});
  })
});

}