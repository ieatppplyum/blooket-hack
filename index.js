(()=>{
  function main(startOn){
    if(!localStorage.getItem('prefs')){
      localStorage.setItem('prefs', '{"essentialPatches": true}');
    }
    document.body.innerHTML = '';
    window.ifr = document.createElement('iframe');
    ifr.src = location.href;
    ifr.style.border = 'none';
    ifr.style.position = 'absolute';
    ifr.style.top = '0';
    ifr.style.left = '0';
    ifr.style.height = '100vh';
    ifr.style.width = '100vw';
    ifr.style.zIndex = '10';
    document.body.appendChild(ifr);
    window.win = ifr.contentWindow;
    setInterval(() => {
      if(win.document.title !== document.title){
        document.title = win.document.title;
      }
      if(win.location.href.split('/')[win.location.href.split('/').length - 1] !== location.href.split('/')[location.href.split('/').length - 1]){
        history.pushState(null, null, '/' + win.location.href.split('/')[win.location.href.split('/').length - 1]);
      }
    }, 10);
    setTimeout(() => {
      let writeVal = '<!doctype html><html lang="en" translate="no"><head><link rel="icon" href="/favicon.ico"><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"><script src="https://kit.fontawesome.com/984809ea42.js" crossorigin="anonymous"></script><style>.grecaptcha-badge{opacity:0}.vis-network{outline:0}</style><title>Blooket</title></head><body style="height: 0"><div id="app"></div>';
      const scripts = [
        "https://thatfrueddued.github.io/blooket-hack/scripts/0.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/1.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/2.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/3.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/4.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/5.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/6.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/7.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/8.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/9.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/10.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/12.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/13.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/14.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/15.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/16.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/17.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/18.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/19.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/20.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/21.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/22.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/23.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/24.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/25.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/26.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/27.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/28.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/29.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/30.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/31.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/32.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/33.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/34.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/35.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/36.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/37.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/38.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/39.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/40.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/41.js",
        "https://thatfrueddued.github.io/blooket-hack/scripts/loader.js"
      ];
      for(let script of scripts){
        writeVal += '<script src="' + script + '"></script>';
      }
      if(JSON.parse(localStorage.getItem('prefs')).essentialPatches){
        win.navTo = function(page){
          document.body.removeChild(ifr);
          console.log('here!');
          main(page);
        }
      }
      win.getPref = function(pref){
        const prefArr = pref.split('/');
        let currentVal = JSON.parse(localStorage.getItem('prefs'));
        for(let val of prefArr){
          if(typeof currentVal[val] !== 'undefined'){
            currentVal = currentVal[val];
          } else {
            return false;
          }
        }
        return currentVal;
      }
      win.document.write(writeVal + '</body></html>');
      if(startOn) win.history.pushState(null, null, startOn);
    });
  }
  main();
})();
