goog.provide('app.browser');
app.browser.start = (function app$browser$start(){
return console.log("start");
});
app.browser.init = (function app$browser$init(){
console.log("init");

return app.browser.start();
});
app.browser.stop = (function app$browser$stop(){
return console.log("stop");
});
app.browser.click = (function app$browser$click(){
return alert("Hello, ClojureScript!");
});

//# sourceMappingURL=app.browser.js.map
