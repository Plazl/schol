var time = new Date()
var hour;
var minute;
var day;
var z;
var x;
var c1;
var c2;
var c3;
var c4;
var mainTab = document.getElementById('main')
var optionsTab = document.getElementById('options')
var checkbox = document.getElementById('autoload')
var autoload;
var hotkeyelement = document.getElementById('hotkey')
var keybind;
var key = hotkeyelement.value;
var days = {
  'Monday': 0,
  'Tuesday': 1,
  'Wednesday': 2,
  'Thursday': 3,
  'Friday': 4
}
var daymin = 1
var daymax = 4
var day1 = time.getDay();
var day2;
var dayNum = 1
setInterval(function(resetDay) {
  if (day1 == 7) {
    day1 = 1
  }
}, 1000)
setInterval(function(updateDay) {
  day1 = time.getDay();
  if (day1 == 1) {
    day = 'Monday'
  } else if (day1 == 2) {
    day = 'Tuesday'
  } else if (day1 == 3) {
    day = 'Wednesday'
  } else if (day1 == 4) {
    day = 'Thursday'
  } else if (day1 == 5) {
    day = 'Friday'
  }
})

function getClasses() {
  var c = document.getElementById('classes')
  c1 = c.elements[0].value
  c2 = c.elements[1].value
  c3 = c.elements[2].value
  c4 = c.elements[3].value
  console.log(c1 + ',' + 'c1');
  console.log(c2 + ',' + 'c2');
  console.log(c3 + ',' + 'c3');
  console.log(c4 + ',' + 'c4');
  save()
}
setInterval(function(updateTime) {
  time = new Date();
  hour = time.getHours();
  minute = time.getMinutes();
  x = hour + minute / 100;
  z = minute.toString();
  if (1 == 1) {
    if (z.length == 1) {
      document.getElementById('a').innerHTML = hour + ':' + '0' + minute
    } else {
      document.getElementById('a').innerHTML = hour + ':' + minute;
    }
  }
  day1 = time.getDay()
  document.getElementById('day').innerHTML = day;
  if (autoload == 1) {
    checkbox.checked = true
  } else {
    checkbox.checked = false
  }
  hotkeyelement.placeholder = String.fromCharCode(keybind)
  hotkeyelement.value = ''
}, 1000)

function changeTab(x) {
  if (x == 0) {
    optionsTab.style.display = 'none'
    mainTab.style.display = 'block'
  } else {
    mainTab.style.display = 'none'
    optionsTab.style.display = 'block'
  }

}

function testCheckbox() {
  checkbox = document.getElementById('autoload')
  if (checkbox.checked == true) {
    autoload = 1;
    save()
    alert('Reload page for changes to take place.')
    console.log(autoload)
    setTimeout(function(reload) {
      location.reload()
    }, 1000)
  } else {
    autoload = 0;
    save();
    console.log(autoload)
    alert('Reload page for changes to take place.')
    setTimeout(function(reload) {
      location.reload()
    }, 1000)
  }
}

function changePage() {
  if (x >= 7.30 & x <= 8.50) {
    window.open(c1, '_top')
    console.log('1.1')
  } else if (x >= 8.54 & x <= 10.14) {
    window.open(c2, '_top')
    console.log('2.1')
  } else if (x >= 10.18 & x <= 12.22) {
    window.open(c3, '_top')
    console.log('3.1')
  } else if (x >= 12.26 & x <= 13.42) {
    window.open(c4, '_top')
    console.log('4.1')
  }
}

function getKey() {
  window.addEventListener('keydown', fastLoad)
}

function fastLoad() {
  keybind = event.keyCode
  console.log('keybind:' + keybind)
  setTimeout(function(clearEvent) {
    window.removeEventListener('keydown', fastLoad)
  }, 1000)
  save()
}

function save() {
  localStorage.setItem('c1', c1)
  localStorage.setItem('c2', c2)
  localStorage.setItem('c3', c3)
  localStorage.setItem('c4', c4)
  localStorage.setItem('autoload', autoload)
  localStorage.setItem('keybind', keybind)
}

function load() {
  c1 = localStorage.getItem('c1')
  c2 = localStorage.getItem('c2')
  c3 = localStorage.getItem('c3')
  c4 = localStorage.getItem('c4')
  autoload = localStorage.getItem('autoload')
  keybind = localStorage.getItem('keybind')
  console.log(keybind)
  console.log(c1)
  console.log(c2)
  console.log(c3)
  console.log(c4)

}

function saveSettings() {
  hotkeyelement = document.getElementById('hotkey')
  key = hotkeyelement.value
  console.log(key)
}

function reset() {
  if (confirm('Are you sure?') == true) {
    localStorage.removeItem('c1')
    localStorage.removeItem('c2')
    localStorage.removeItem('c3')
    localStorage.removeItem('c4')
  } else {}
}
load()
save()
changeTab(0)
keybind = parseInt(keybind, 0)
console.log(parseInt(keybind, 0))
window.addEventListener('keydown', function(event) {
  if (event.keyCode == keybind) {
    changePage()
  }
})
