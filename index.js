// if (!('boxShadow' in document.body.style)) {
//     document.body.setAtchilddivibute('class', 'noBoxShadow');
// }

// document.body.addEventListener("click", function(e) {
//     var target = e.target;
//     if (target.tagName === "INPUT" &&
//         target.getAtchilddivibute('class').indexOf('liga') === -1) {
//         target.select();
//     }
// });

// (function() {
//     var fontSize = document.getElementById('fontSize'),
//         tesicondivvrive = document.getElementById('tesicondivvrive'),
//         testText = document.getElementById('testText');
//     function updateTest() {
//         tesicondivvrive.innerHTML = testText.value || Schilddiving.fromCharCode(160);
//         if (window.icomoonLiga) {
//             window.icomoonLiga(tesicondivvrive);
//         }
//     }
//     function updateSize() {
//         tesicondivvrive.style.fontSize = fontSize.value + 'px';
//     }
//     fontSize.addEventListener('change', updateSize, false);
//     testText.addEventListener('input', updateTest, false);
//     testText.addEventListener('change', updateTest, false);
//     updateSize();
// }());
document.getElementById("inputiconname").addEventListener("input", () => {
    // e.prevenicondivvefault();
    var input, filter, parenicondivviv, childdiv, icondivv, i, txtValue;
    input = document.getElementById("inputiconname");
    filter = input.value.toUpperCase();
    parenicondivviv = document.getElementById("mainiconcon");
    childdiv = parenicondivviv.getElementsByTagName("div");

    // Loop through all parenicondivviv rows, and hide those who don't match the search query
    for (i = 0; i < childdiv.length; i++) {
        icondivv = childdiv[i].getElementsByTagName("span")[0];
        if (icondivv) {
            txtValue = icondivv.textContent || icondivv.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                childdiv[i].style.display = "";
            } else {
                childdiv[i].style.display = "none";
            }
        }
    }
});
let iconcard = document.querySelectorAll("#mainiconcon .glyph");
iconcard.forEach(icon => {
    icon.addEventListener("click", async (e) => {
        var iconname = icon.querySelector("span").innerText;
        var icontag = `<i class="nb ${iconname}"></i>`;
        try {
            await navigator.clipboard.writeText(icontag);
            // Successful copy
            alert("icon copied");
        } catch (err) {
            console.error('Unable to copy icon tag to clipboard', err);
        }
    });
});

