

const CHARACTERS = [
    'mememan',
    'mister'
];

for (var name of CHARACTERS) {
    Vue.component(name, {
        props: [ '' ],
        template: '#t-' + name
    });
}

Vue.component('location', {
    props: [ 'game', 'name', 'background', 'script' ],
    template: '#t-location'
});

var app;
app = new Vue({
    el: '#app',
    data: {
        time: 0,

        game: {
            location: 'bed',
            inventory: [
            ]
        },

        objects: [
            {
                name: 'lem0n',
                img: 'lemon.png'
            },
            {
                name: 'fR!dsh',
                img: 'fridge.png'
            },
            {
                name: 'enslaved\ncleanness',
                img: 'toothpaste.webp'
            },
            {
                name: 'Peenut',
                img: 'peanut.png'
            },
            {
                name: 'Üron',
                img: 'iron.png'
            },
            {
                name: 'Cocnacolca',
                img: 'cocacola.webp'
            },
            {
                name: 'animal',
                img: 'animal.png'
            },
            {
                name: 'Cursur',
                img: 'cursor.png'
            },
            {
                name: 'BÖÄT',
                img: 'boat.png'
            },
            {
                name: 'fruit.png',
                img: 'fruit.png'
            },
            {
                name: 'erR0R',
                img: 'error.png'
            },
            {
                name: 'dimon',
                img: 'diamond.png'
            },
            {
                name: 'T̸͈̍̃͂̂̐̉̕͝e̷̮̺͓̘͙̫̅̈̒͆s̵̛̺͉̼͇̯̜̔̔̍̀͐̉̀͜ͅs̶̡̧̪̞̬̦͓͚̫̒́̿̒ͅe̴̡̩͎̭̩͙͑̏̓̍̉̊̅͠r̸̞̘̹͕̙̎͂̑̅͆́̅͝͝a̷͙̭̣̮̖͓̎̐͜͝c̶̖̱͇̮͓̐͑̀̐̋̇ṯ̷͚͓̟̤̻̬̂̀͂͋̄͂͠͝',
                img: 'tesseract.png'
            },
            {
                name: 'Cacc',
                img: 'cactus.webp'
            },
            {
                name: 'Sitting',
                img: 'officechair.png'
            },
            {
                name: '<undefined>',
                img: 'maiskolben.png'
            }
        ],

    },
    computed: {
        hoveranim: function() {
            return seed => {
                var t = this.time + seed;
                var x = Math.sin(t / 100) * 20 + Math.cos(t / 40) * 4;
                var y = Math.sin(t / 70) * 40;
                var rot = Math.cos(t / 200) * 10 + Math.sin(t / 80) * 3 - 5;
                var scale = 1 + Math.cos(t / 300) * .05 + Math.sin(t / 1000) * .1;
                return `transform: rotate(${rot}deg) scale(${scale}) translate(${x}px, ${y}px);`;
            }
        }
    },
    methods: {
        goto: function(dest) {
            window.playSound('sfx/clonc.mp3');
            this.game.location = dest;
            this.$nextTick(() => {
                var domel = document.getElementById('loc-'+dest);
                if (domel && domel.attributes.script) eval(domel.attributes.script.value);
                document.getElementById('mememan').className = '';
            });
        },
        dialogue: function(dia) {
            dialogue(dia);
        }
    }
});

setInterval(()=>app.time++,20);


function dialogue(t) {
    var delta = 0;
    var diadom = document.getElementById('dialogue');
    for (var a of t.split('\n')) {
        a = a.trim();
        var cont = a.substring(2);
        var conti = parseInt(cont);
        var key = a.substring(0, 1);

        switch (key) {
            case 'w':
                delta += conti * 1000;
                continue;
            default: break;
        }
        setTimeout((cont, conti, key, diadom) => {
            var split = cont.split(' ');
            switch (key) {
                case 's':
                    diadom.className = '';
                    diadom.classList.add(cont);
                    break;
                case 'p':
                    if (split[1].startsWith('!')) {
                        diadom.style.top = '';
                        diadom.style.bottom = split[1].substring(1);
                    } else {
                        diadom.style.top = split[1];
                        diadom.style.bottom = '';
                    }
                    if (split[0].startsWith('!')) {
                        diadom.style.left = '';
                        diadom.style.right = split[0].substring(1);
                    } else {
                        diadom.style.left = split[0];
                        diadom.style.right = '';
                    }
                    break;
                case 't':
                    for (var i = 0; i < cont.length; i++)
                        setTimeout(d => {
                            diadom.innerHTML = (cont+'').substring(0, d);
                        }, i * 70, i+1);
                    break;
                case 'a':
                    playSound(cont.startsWith('.')?cont.substring(2):`dialogue/${cont}.mp3`);
                    break;
                case 'c':
                    diadom.innerHTML = '';
                    break;
                case '+':
                    document.getElementById(cont.split(' ')[0]).classList.add(cont.split(' ')[1]);
                    break;
                case '-':
                    document.getElementById(cont.split(' ')[0]).classList.remove(cont.split(' ')[1]);
                    break;
                case 'g':
                    app.goto(cont);
                    break;
                default: break;
            }
        }, delta, cont, conti, key, diadom);
    }
}

function playSound(name) { new Audio(`./assets/${name}`).play(); }




window.playSound = playSound;
window.dialogue = dialogue;