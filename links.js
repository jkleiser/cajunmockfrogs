function r(s) {
  var rs = "";
  for (var p = 0; p < s.length; p++) { rs = s.charAt(p) + rs };
  return rs;
}

function completeMailLinks() {
  var a = document.getElementById("mailJon");
  var ra = r("moc.duolci@resielk.noj");
  a.setAttribute("href", "mailto:" + ra);
  a.appendChild(document.createTextNode(ra));
  a = document.getElementById("mailKetil");
  ra = r("on.1moc@ege.litek");
  a.setAttribute("href", "mailto:" + ra);
  a.appendChild(document.createTextNode(ra));
  a = document.getElementById("mailEystein");
  ra = r("on.enilno@neom-f-e");
  a.setAttribute("href", "mailto:" + ra);
  a.appendChild(document.createTextNode(ra));
}
