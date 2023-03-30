function burger(x) {
  spans = x.children;
  for (let i = 0; i < spans.length; i++) {
    if (i === 0) spans[i].classList.toggle('first');
    else if (i === 1) spans[i].classList.toggle('hide');
    else if (i === 2) spans[i].classList.toggle('last');
  }
}