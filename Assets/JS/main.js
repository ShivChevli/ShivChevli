$(document).ready(function () {

    // data = {
    //     datasets: [{
    //         data: [80, 85, 50, 40, 70],
    //         backgroundColor: [
    //             'rgba(50,153,0,.9)',
    //             'rgba(254,153,0,1)',
    //             'rgba(255,51,0,.9)',
    //             'rgba(152,0,101,1)',
    //             'rgba(1,0,102,.9)',
    //         ],
    //         borderColor: [
    //             'rgba(50,153,0,1)',
    //             'rgba(254,153,0,1)',
    //             'rgba(255,51,0,1)',
    //             'rgba(152,0,101,1)',
    //             'rgba(1,0,102,1)'
    //         ],
    //         borderWidth: 2
    //     }],

    //     // These labels appear in the legend and in the tooltips when hovering different arcs
    //     labels: [
    //         'HTML5',
    //         'CSS3',
    //         'Javascript',
    //         'Photoshop',
    //         'Bostrap'
    //     ]
    // };
    // var ctx = document.getElementById('mySkillChart').getContext('2d');
    // var myDoughnutChart = new Chart(ctx, {
    //     type: 'polarArea',
    //     data: data,
    //     options: {
    //         title: {
    //             display: true,
    //             text: "Skills",
    //             fontSize: 20,
    //             position: 'left',
    //             // padding: 20
    //         },
    //         legend: {
    //             display: true,
    //             position: 'right',
    //             labels: {
    //                 // This more specific font property overrides the global property
    //                 boxWidth: 100,
    //                 fontColor: 'black',
    //                 fontSize: 18,
    //                 padding: 25,
    //                 usePointStyle: true
    //             }
    //         },
    //         layout: {
    //             padding: {
    //                 left: 20,
    //                 right: 20,
    //                 // bottom: 10,
    //                 // top: 10,
    //             }
    //         },
    //         // tooltips: {
    //         //     bodyAlign: 'right',
    //         //     mode: 'index'
    //         // }
    //     }

    // });

    var typed_string = $('#spacification').data('typed-items');
    var typed = typed_string.split(',');
    new Typed('#spacification', {
        strings: typed,
        loop: true,
        typeSpeed: 70,
        backSpeed: 50,
        backxDelay: 2000
    });

    var typed_string_2 = $('#Head').data('typed-items');
    var typed_2 = typed_string_2.split(',');
    new Typed('#Head', {
        strings: typed_2,
        loop: true,
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 50,
        backxDelay: 200
    });

});
window.addEventListener("load", () => {
    document.querySelector('section.Loader-box1').style.opacity = "0";
    document.querySelector('section.Loader-box1').style.display = "none";
});
window.addEventListener("resize", () => {
    if (window.innerWidth <= 758) {
        document.querySelector('nav ul').style.display = "none";
        document.querySelector('.ToggleButton').onclick = function () {
            document.querySelector('nav ul').style.display = "block";
        }
    }
    else {
        document.querySelector('nav ul').style.display = "inline-block";
    }
});
document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.ScollUpArrow-box').addEventListener('click', () => {
        window.scrollTo(0, 0);
    })
    document.querySelectorAll('nav ul li span').forEach(span => {
        span.addEventListener('click', function () {
            var h = this.dataset.focu;
            // console.log(h);
            var s = document.querySelector(h).offsetTop;
            // console.log(s);
            window.scrollTo(0, s - 100);
            document.querySelector('.active').classList.remove('active');
            this.classList.add('active');
            if (window.innerWidth <= 758) {
                document.querySelector('nav ul').style.display = "none";

            }
        })
    });

    document.addEventListener("scroll", () => {
        if (window.scrollY > window.innerHeight) {
            document.querySelector('nav').style.height = "80px";
        }
        else {
            document.querySelector('nav').style.height = "100px";
        }
    })
    document.addEventListener("scroll", () => {
        var s = scrollY.toFixed();
        var about = document.querySelector('#about').offsetTop - 200;
        var skill = document.querySelector('#skill').offsetTop - 200;
        var project = document.querySelector('#project').offsetTop - 200;
        // var review = document.querySelector('#review').offsetTop - 200;
        var contect = document.querySelector('#cont').offsetTop;
        var end = window.innerHeight + Number(s);
        if (s > 0 && s <= about) {
            // console.log(s);
            document.querySelector('span.active').classList.remove('active');
            document.querySelector('#homeLable').classList.add('active');
        }
        else if (s > about && s <= skill) {
            // console.log(s);
            document.querySelector('.active').classList.remove('active');
            document.querySelector('#aboutLable').classList.add('active');
        }
        else if (s > skill && s <= project) {
            // console.log(s);
            document.querySelector('.active').classList.remove('active');
            document.querySelector('#skillLable').classList.add('active');
        }
        else if (end >= document.body.offsetHeight - 50) {
            // console.log(s);
            document.querySelector('.active').classList.remove('active');
            document.querySelector('#contectLable').classList.add('active');
        }
        else if (s > project && s <= contect) {
            // console.log(s);
            document.querySelector('.active').classList.remove('active');
            document.querySelector('#projectLable').classList.add('active');
        }
        // else if (s > review && s <= contect) {
        //     // console.log(s);
        //     document.querySelector('.active').classList.remove('active');
        //     // document.querySelector('#reviewLable').classList.add('active');
        // }

    })

    // array = document.querySelectorAll('.skillBox');
    // console.log(array);
    // array.forEach(div => {
    //     console.log(div);
    //     color = div.dataset.color;
    //     console.log(color);
    //     var h = div.children[2];
    //     console.log(h);
    //     // var t = window.getSelection(array[0].children[2], ':after');
    //     // var w = window.getComputedStyle(div.children[2], ':after');
    //     var w = document.querySelector(div.children[2]).plugins(':after');
    //     console.log(w);
    //     console.log(w.backgroundColor);
    //     w.backgroundColor = color;
    // });


    // paused animation state of project
    document.querySelector(".window-box").onmouseenter = function () {
        document.querySelector(".window-box").style.animationPlayState = "paused";
    };

    document.querySelector(".window-box").onmouseleave = function () {
        document.querySelector(".window-box").style.animationPlayState = "running";
    };

    document.querySelectorAll(".window").forEach(div => {
        div.onmouseenter = function () {
            this.children[1].style.display = "block";
        }
        div.onmouseleave = function () {
            this.children[1].style.display = "none";
        }
    })
    AOS.init({
        duration: "500"
    });
})