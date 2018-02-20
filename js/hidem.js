window.onload = function() {

    document.getElementById("openMenu").onclick = function() {

        var page = document.getElementById("page");
        var navpage = document.getElementById("navpage");

        if (page.style.visibility === 'hidden') {
            page.style.visibility = 'visible';
            navpage.style.visibility = 'hidden';
        }
        else {
            page.style.visibility = 'hidden';
            navpage.style.visibility = 'visible';
        }

    };
    
};
    