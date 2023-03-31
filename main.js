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
var hourDisp;
function editClass() {
  if (classNum.value == '1st Class') {
    document.getElementById('c1').style.display = 'block'
    document.getElementById('c2').style.display = 'none'
    document.getElementById('c3').style.display = 'none'
    document.getElementById('c4').style.display = 'none'
  } else if (classNum.value == '2nd Class') {
    document.getElementById('c2').style.display = 'block'
    document.getElementById('c1').style.display = 'none'
    document.getElementById('c3').style.display = 'none'
    document.getElementById('c4').style.display = 'none'
  } else if (classNum.value == '3rd Class') {
    document.getElementById('c3').style.display = 'block'
    document.getElementById('c1').style.display = 'none'
    document.getElementById('c2').style.display = 'none'
    document.getElementById('c4').style.display = 'none'
  } else if (classNum.value == '4th Class') {
    document.getElementById('c4').style.display = 'block'
    document.getElementById('c1').style.display = 'none'
    document.getElementById('c2').style.display = 'none'
    document.getElementById('c3').style.display = 'none'
  }
}
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
function updateWindow() {
  time = new Date();
  hour = time.getHours();
  minute = time.getMinutes();
  x = hour + minute / 100;
  z = minute.toString();
  if (1 == 1) {
    if (z.length == 1) {
      document.getElementById('a').innerHTML = hourDisp + ':' + '0' + minute
    } else {
      document.getElementById('a').innerHTML = hourDisp + ':' + minute;
    }
  }
  if (typeof c1 !== undefined) {
    document.getElementById('c1').placeholder = c1;
  } else {}
  if (typeof c1 !== undefined) {
    document.getElementById('c2').placeholder = c2;
  } else {}
  if (typeof c1 !== undefined) {
    document.getElementById('c3').placeholder = c3;
  } else {}
  if (typeof c1 !== undefined) {
    document.getElementById('c4').placeholder = c4;
  } else {}
  day1 = time.getDay()
  document.getElementById('day').innerHTML = day;
  if (autoload == 1) {
    checkbox.checked = true
  } else {
    checkbox.checked = false
  }
  switch (hour) {
    case 0:
      hourDisp = 12
      break
    case 1:
      hourDisp = 1
      break
    case 2:
      hourDisp = 2
      break
    case 3:
      hourDisp = 3
      break
    case 4:
      hourDisp = 4
      break
    case 5:
      hourDisp = 5
      break
    case 6:
      hourDisp = 6
      break
    case 7:
      hourDisp = 7
      break
    case 8:
      hourDisp = 8
      break
    case 9:
      hourDisp = 9
      break
    case 10:
      hourDisp = 10
      break
    case 11:
      hourDisp = 11
      break
    case 12:
      hourDisp = 12
      break
    case 13:
      hourDisp = 1
      break
    case 14:
      hourDisp = 2
      break
    case 15:
      hourDisp = 3
      break
    case 16:
      hourDisp = 4
      break
    case 17:
      hourDisp = 5
      break
    case 18:
      hourDisp = 6
      break
    case 19:
      hourDisp = 7
      break
    case 20:
      hourDisp = 8
      break
    case 21:
      hourDisp = 9
      break
    case 22:
      hourDisp = 10
      break
    case 23:
      hourDisp = 11
      break
  }
  hotkeyelement.placeholder = String.fromCharCode(keybind)
  hotkeyelement.value = ''
  document.getElementById('hotKey').innerHTML = String.fromCharCode(keybind)
  switch (time.getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
}
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
function resetSettings() {
  keybind = 13;
  checkbox.checked = false;
  autoload = 0;
  saveSettings()
  save()
}
load()
save()
changeTab(0)
keybind = parseInt(keybind, 0)
console.log(parseInt(keybind, 0))
setInterval(updateWindow, 1000)
window.addEventListener('keydown', function(event) {
  if (event.keyCode == keybind & event.altKey == false) {
    if (checkbox.checked == true) {
      changePage()
    }
  }
})
setTimeout(function(endLoading) {
  document.getElementById('body').style.display = 'block'
}, 1000)
editClass()
