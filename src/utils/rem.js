(function (doc, win) {
  let docEl = win.document.documentElement
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let refreshRem = function () {
    let clientWidth = win.innerWidth
      || doc.documentElement.clientWidth
      || doc.body.clientWidth
    if (!clientWidth) return
    let fz
    let width = clientWidth
    fz = width / 375
    docEl.style.fontSize = fz + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, refreshRem, false)
  doc.addEventListener('DOMContentLoaded', refreshRem, false)
  refreshRem()
})(document, window)