//alert("iweb-devtools-extension/fixChrome.js");

/**
 * 使用Chrome查看NC网报登录页面的时候，无法显示表单，其实是表单高度为0px
 */
const script1 = `
!function () {
  // nclogin_form 在login.jsp中定义
  document.getElementById('nclogin_form').style.height = '100%';
}();
`;
scripts = {
  script1: script1
}

// Find head tag, insert(run) script tag
function insertScript(scriptName, id) {
  log(`Try to insert <script> of ${scriptName} to <head>...`);
  var comment = document.createComment("This script tag is inserted by iweb-devtools-extension");
  var elt = document.createElement("script");
  elt.innerHTML = scripts[scriptName];
  document.head.appendChild(comment);
  document.head.appendChild(elt);
  log("Success to insert <script>")
}

setTimeout(insertScript.bind(null, "script1"), 1);
