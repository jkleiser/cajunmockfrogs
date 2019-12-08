function playInWindow(url, w, h) {
  try {
    var wh = "width=" + w + ", height=" + h;
    var wnm = "w" + w + "h" + h;
    var aux = window.open(url, wnm, "fullscreen=no, toolbar=no, status=no, menubar=no, scrollbars=no, resizable=yes, directories=no, location=no, " + wh);
    aux.focus();
  } catch (e) { alert(e); }
}
var a0 = "<li><a href=\"javascript:playInWindow('play/";
var a1 = "<li><a href=\"javascript:playInWindow('http://";
var a2 = "', 480, 148);\">";
var a3 = "</a>";
document.write("<ul>");
document.write(a0 + "BackDoor.html" + a2 + "Back Door" + a3);
document.write(a0 + "BoscoBlues.html" + a2 + "Bosco Blues" + a3);
document.write(a0 + "LoversWaltz.html" + a2 + "Lovers' Waltz" + a3);
document.write(a0 + "MamouTwoStep.html', 820, 640);\">Mamou Two-Step" + a3 + " (video, 2005)");
document.write("<li><a href='http://youtu.be/k1iDXsGDFPM'>Bayou Pom Pom</a> (YouTube video, 2013)");
document.write("<li><a href='http://youtu.be/t_YuPDE3sbc'>Zydeco Cha Cha</a> (YouTube video, 2013)");
document.write("</ul>");
