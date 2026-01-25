
// Build potential chart filenames
const candidates = [
  `assets/img/${key}-spec.png`,
  `assets/img/${key}-specs.png`,
  `assets/img/${key}_spec.png`,
];
// handle your typo example
if (key === 'grinding-balls') candidates.unshift('assets/img/griding-balls-spec.png');

const chartImg = document.getElementById('spec-chart');
const specTable = document.getElementById('spec-table');

function tryNext(i) {
  if (i >= candidates.length) {
    chartImg.style.display = 'none';
    specTable.style.display = 'table';
    return;
  }
  const src = candidates[i];
  const probe = new Image();
  probe.onload = function () {
    chartImg.src = src;
    chartImg.style.display = 'block';
    specTable.style.display = 'none';
  };
  probe.onerror = function () { tryNext(i + 1); };
  probe.src = src;
}
tryNext(0);
