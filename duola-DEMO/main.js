!function () {
    let info = document.querySelector('#info');
    let container = document.querySelector('#container');
    let paper = document.querySelector('#paper');
    let style = document.querySelector('#style');
    let n = 1;
    let timer;
    let duration = 50;

    var buttonList = document.getElementById('buttonList');
    var button = buttonList.getElementsByTagName("button");
    for(var i=0;i<button.length;i++){
        button[i].onclick = function(){
            for(var j=0;j<button.length;j++){
                button[j].className = "";
            }
            this.className = "active";
            let speeds = this.getAttribute('data-speed');
            switch(speeds){
                case 'slow':
                    duration = 100;
                    break;
                case 'normal':
                    duration = 50;
                    break;
                case 'fast':
                    duration = 1;
                    break;
            }
        }
    }
    
    timer = setTimeout(function WriteCode() {
        paper.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.css);
        style.innerHTML = code.substring(0, n);
        paper.scrollTop = paper.scrollHeight;
        n += 7;
        if (n < code.length) {
            timer = setTimeout(WriteCode, duration);
        } 
    }, 1)
}();