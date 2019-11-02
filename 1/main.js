let cursor;
window.addEventListener('load', function(){
  cursor = document.querySelector('.cursor');
  document.querySelector('body').addEventListener('mousemove',cursorFunction);
});

function cursorFunction(e){
  cursor.style.width = event.pageX + "px";
}