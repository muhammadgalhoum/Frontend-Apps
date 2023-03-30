function show(x) {
  toolDiv = document.createElement('div');
  toolDiv.textContent = 'Tooltip';

  toolDiv.style.cssText = "position: absolute; z-index: 9999; padding: inherit; margin: 0;\
  color: white; background-color: #333; border-radius: inherit; transition: 0.5s;";

  toolTip = document.createElement('span');

  toolTip.style.cssText = "width: 0; height: 0; position: absolute; border-style: solid;\
  border-width: 6px; z-index: 1; border-color: transparent";

  if (x.id === 'top') {
    toolDiv.style.top = '-35px';
    toolDiv.style.left = '50%';
    toolDiv.style.transform = 'translateX(-50%)';

    toolTip.style.bottom = '-11px';
    toolTip.style.left = '50%';
    toolTip.style.transform = 'translateX(-50%)';
    toolTip.style.borderTopColor = '#333';
  }
  else if (x.id === 'right') {
    toolDiv.style.top = '0';
    toolDiv.style.left = '170%';
    toolDiv.style.transform = 'translateX(-50%)';

    toolTip.style.top = '50%';
    toolTip.style.left = '-11px';
    toolTip.style.transform = 'translateY(-50%)';
    toolTip.style.borderRightColor = '#333';
  }
  else if (x.id === 'bottom') {
    toolDiv.style.bottom = '-35px';
    toolDiv.style.left = '50%';
    toolDiv.style.transform = 'translateX(-50%)';

    toolTip.style.top = '-11px';
    toolTip.style.left = '50%';
    toolTip.style.transform = 'translateX(-50%)';
    toolTip.style.borderBottomColor = '#333';
  }
  else if (x.id === 'left') {
    toolDiv.style.top = '50%';
    toolDiv.style.left = '-158%';
    toolDiv.style.transform = 'translateY(-50%)';

    toolTip.style.top = '50%';
    toolTip.style.right = '-11px';
    toolTip.style.transform = 'translateY(-50%)';
    toolTip.style.borderLeftColor = '#333';
  }

  toolDiv.appendChild(toolTip);
  x.appendChild(toolDiv);
}

function hide(x) {
  x.removeChild(x.firstElementChild)
}