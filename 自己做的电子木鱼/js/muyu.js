window.onload = function() {
    var qiao = document.getElementById("dzmy");
    var gd = 0;
    var no = document.getElementById("no");
    var voice = document.getElementById("musc");
    var qian = document.getElementById("qian");
    var six = document.getElementById("six");
    qiao.onclick = function() {

        qiao.style.cssText = "animation: muyu 0.1s infinite linear;"
        gd++;
        setTimeout(() => {
            qiao.style.cssText = "animation:0"
        }, 100)
        var p = document.createElement("p");
        var t = document.createTextNode("功德+1");
        p.appendChild(t);
        document.body.appendChild(p);
        p.id = "one";
        p.className = "one";

        setTimeout(() => {
            p.style.cssText = "animation: go 0.2s linear;"
        }, 100);
        setTimeout(() => {
            p.remove()
        }, 230)
        no.innerText = gd;
        voice.play();
    }
    six.onmouseenter = function() {
        qian.style.cssText = "display:block;"
    }
    six.onmouseleave = function() {
        qian.style.cssText = "display:none;"
    }
}