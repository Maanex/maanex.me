

Vue.component('evaluation', {
    props: [ 'name', 'color', 'value', 'max' ],
    template: '#t-evaluation'
});

var app;
app = new Vue({
    el: '#app',
    data: {
        last: [ ],
        page: 'start',
        picked: -1,

        pages: {
            start: {
                title: 'swiggity swone, found my phone?',
                question: 'What describes your situation best?',
                options: [
                    [ 'I found your phone and I\'m willing to return it', 'niceguy' ],
                    [ 'I found your phone but I\'m not willing to return it', 'badguy' ],
                    [ 'I don\'t have your phone I just had a look at the lock screen', 'funnyguy' ],
                    [ 'What the hack is this? (aka none of the above)', 'confusedguy' ]
                ]
            },

            niceguy: {
                title: 'thanks u a lots',
                question: 'You know how to contact me? (WhatsApp & co won\'t work, obviously)',
                options: [
                    [ 'Yes', 'niceguyyes' ],
                    [ 'No', 'niceguyno' ],
                ]
            },
            niceguyyes: {
                title: 'Okay great!',
                question: 'Oh and whilst you\'re still here, wanna take a personality test?',
                options: [
                    [ 'Sure why not', ':../persotest' ],
                    [ 'Nope thanks', 'nicebye' ],
                ]
            },
            niceguyno: {
                title: 'That\'s unfortunate.',
                question: 'What do you prefer?',
                options: [
                    [ 'Twitter', ':https://twitter.com/Maanex_' ],
                    [ 'Instagram', ':https://instagram.com/Maanex_' ],
                    [ 'Email (ew)', ':mailto:maan91315@gmail.com' ],
                ]
            },

            badguy: {
                title: 'Aw sh*t',
                question: 'At least wanna tell me about it?',
                options: [
                    [ 'yes', 'niceguy' ],
                    [ 'yes', 'niceguy' ],
                    [ 'yes', 'niceguy' ],
                    [ 'maybe', 'niceguy' ],
                    [ 'no chance', 'badbye' ],
                ]
            },

            funnyguy: {
                title: 'Alright that\'s fine',
                question: 'Wanna do a quick personality test?',
                options: [
                    [ 'Sure why not', ':../persotest' ],
                    [ 'Nope thanks', 'nicebye' ],
                ]
            },
            confusedguy: {
                title: 'Well yeah whatever.',
                question: 'What\'s the weather like?',
                options: [
                    [ 'Too warm', 'weather' ],
                    [ 'Too cold', 'weather' ],
                    [ 'Too rainy', 'weather' ],
                    [ 'Too windy', 'weather' ],
                ]
            },
            weather: {
                title: 'Yeah totally agree on that one.',
                question: 'Wanna do a personality test? Asking for a friend.',
                options: [
                    [ 'Sure why not', ':../persotest' ],
                    [ 'Nope thanks', 'nicebye' ],
                ]
            },


            //

            nicebye: {
                title: 'Okay, cya',
                question: '',
                options: [ ]
            },
            badbye: {
                title: 'okay then go please',
                question: '',
                options: [ ]
            },
        }
    },
    computed: {
        secret: function() {
            return '#'+parseInt(this.picks).toString(32);
        }
    },
    methods: {
        next: function() {
            var domel = document.getElementById('content');
            domel.classList.add('out');

            var page = this.pages[this.page];
            if (!page.options) return;
            var pick = page.options[this.picked][1];

            setTimeout(() => {
                domel.classList.remove('out');
                domel.classList.add('in');
                this.last.push(this.page);

                if (page.perso) {
                    this.page = 'perso' + (parseInt(this.page.substring(5)) + 1);
                    for (var i = 0; i < this.perso.length; i++)
                        this.perso[i] += pick[i];
                    this.picks += this.picked;
                } else {
                    if (pick.startsWith(':')) window.location = pick.substring(1);
                    else this.page = pick;
                }
                this.picked = -1;
            }, 300);
            setTimeout(() => {
                domel.classList.remove('in');
            }, 320);
        },
        back: function() {
            var domel = document.getElementById('content');
            domel.classList.add('outr');
            setTimeout(() => {
                domel.classList.remove('outr');
                domel.classList.add('inr');
                this.page = this.last.splice(this.last.length - 1)[0];
                this.picked = -1;
            }, 300);
            setTimeout(() => {
                domel.classList.remove('inr');
            }, 320);
        }
    }
});