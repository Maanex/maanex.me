

Vue.component('evaluation', {
    props: [ 'name', 'color', 'value', 'max' ],
    template: '#t-evaluation'
});

var app;
app = new Vue({
    el: '#app',
    data: {
        last: [ ],
        page: 'perso0',
        picked: -1,

        // meme funny depression chill selfconf introextrovert
        perso: [ 0, 0, 0, 0, 0, 0 ],
        picks: '',

        pages: {
            perso0: {
                title: 'Personality Test',
                question: 'Are you ready? 15 Questions to go!',
                perso: true,
                options: [
                    [ 'Let\'s go!', [ 0, 0, 0, 0, 0, 0 ] ],
                ]
            },
            perso1: {
                title: 'Question 1',
                question: 'How was your day so far?',
                perso: true,
                options: [
                    [ 'Good', [ 0, 0, -1, 1, 0, 0 ] ],
                    [ 'Okay', [ 0, 0, 0, 0, 0, 0 ] ],
                    [ 'Bad',  [ 0, 0, 1, 0, 0, 0 ] ],
                    [ 'Yes',  [ 0, 1, 0, 0, 0, 0 ] ],
                ]
            },
            perso2: {
                title: 'Question 2',
                question: 'Would you smoke weed if it were legal?',
                perso: true,
                options: [
                    [ 'Absolutely',                [ 0, 1, 0, 1, 1, 0 ] ],
                    [ 'I\'d try',                  [ 0, 0, 0, 1, 0, 0 ] ],
                    [ 'Rather not',                [ 0, 0, 0, 0, 0, 0 ] ],
                    [ 'Even if it weren\'t legal', [ 1, 0, 1, 0, 1, 0 ] ],
                ]
            },
            perso3: {
                title: 'Question 3',
                question: '(╯°□°）╯︵ ┻━┻',
                perso: true,
                options: [
                    [ '┬──┬﻿ ノ( ゜-゜ノ)',  [ 1, 0, 0, 1, 0, -1 ] ],
                    [ '(╯°□°）╯ /(.□. \\）', [ 1, 1, 0, 0, 0, 1 ] ],
                    [ '( ͡° ͜ʖ ͡°)',            [ 1, 0, 1, 0, 0, 0 ] ],
                    [ 'What?',               [ -10, 0, 1, 0, 0, 0 ] ],
                ]
            },
            perso4: {
                title: 'Question 4',
                question: 'Tea?',
                perso: true,
                options: [
                    [ 'Always',        [ 0, 0, 0, 1, 0, 0 ] ],
                    [ 'Black only',    [ 1, 0, 0, 1, 0, 0 ] ],
                    [ 'Rather coffee', [ 0, 0, 0, 0, 0, 0 ] ],
                    [ 'No thanks',     [ 0, 0, 1, 0, 0, 0 ] ],
                ]
            },
            perso5: {
                title: 'Question 5',
                question: '2 Girls 1 Cup',
                perso: true,
                options: [
                    [ 'What is that?', [ -1, 0, 0, 0, 0, 0 ] ],
                    [ 'OMG NO',        [ 1, 0, 1, 0, 0, 0 ] ],
                    [ 'I enjoyed it',  [ 1, -10, 10, -10, 3, 0 ] ],
                    [ 'Next question', [ 1, 2, 0, 0, 1, 0 ] ],
                ]
            },
            perso6: {
                title: 'Question 6',
                question: 'Talking to strangers',
                perso: true,
                options: [
                    [ 'No problem',             [ 0, 0, -2, 1, 2, 2 ] ],
                    [ 'Rather not',             [ 0, 1, 0, 1, 1, 0 ] ],
                    [ 'The struggle is real',   [ 0, 0, 1, 0, 0, -2 ] ],
                    [ 'I never leave my house', [ 1, 0, 2, 0, 0, -2 ] ],
                ]
            },
            perso7: {
                title: 'Question 7',
                question: 'Your best friend',
                perso: true,
                options: [
                    [ 'Would do anything for me',    [ 0, 0, 0, 1, 1, 1 ] ],
                    [ 'Would do anything for money', [ 0, 2, 0, 0, 1, 1 ] ],
                    [ 'I\'m not even sure if they like me as much as I like them, I mean don\'t get it wrong we have a lot of fun together but I think they don\'t really care about me if I\'m not there :(', [ 0, 0, 3, 0, -2, -1 ] ],
                    [ 'I don\'t have friends',       [ 1, 0, 1, 0, 0, -1 ] ],
                ]
            },
            perso8: {
                title: 'Question 8',
                question: 'When I was younger,',
                perso: true,
                options: [
                    [ 'everything was better', [ 0, 0, 2, 0, 0, 0 ] ],
                    [ 'I was stupid',          [ 0, 0, 1, 1, 1, 0 ] ],
                    [ 'the earth was flat',    [ 1, 1, 0, 0, 0, 0 ] ],
                    [ 'I didn\'t know about Elephant Mary', [ 1, 0, 0, 0, 0, 0 ] ],
                ]
            },
            perso9: {
                title: 'Question 9',
                question: 'beep boop',
                perso: true,
                options: [
                    [ '01100100 01110101 01100011 01101011 00111111', [ 0, 1, 0, 1, 0, 0 ] ],
                    [ 'Have you tried turning it off and on again?',  [ 1, 1, 0, 0, 0, 0 ] ],
                    [ 'Hello sir your windows has a virus',           [ 1, 1, 0, 0, 0, 0 ] ],
                    [ 'What the heck is wrong with those questions?', [ 0, 0, 1, 0, 0, 0 ] ],
                ]
            },
            perso10: {
                title: 'Question 10',
                question: 'The glass is',
                perso: true,
                options: [
                    [ 'Half full',                [ 0, 0, -1, 1, 1, 0 ] ],
                    [ 'Half empty',               [ 0, 0, 1, 0, 1, 0 ] ],
                    [ 'What glass?',              [ 1, 1, 0, 0, 0, 0 ] ],
                    [ 'At least we have a glass', [ 0, 1, 0, 1, 0, 0 ] ],
                ]
            },
            perso11: {
                title: 'Question 11',
                question: 'What phrase describes you the best?',
                perso: true,
                options: [
                    [ 'Always Positive', [ 0, 0, -2, 1, 1, 1 ] ],
                    [ 'Full of energy',  [ 0, 0, 0, -1, 2, 2 ] ],
                    [ 'Couch Potato',    [ 1, 0, 1, 2, 0, -2 ] ],
                    [ 'I wanna die',     [ 1, 0, 3, 1, 0, -1 ] ],
                ]
            },
            perso12: {
                title: 'Question 13',
                question: 'What time is it?',
                perso: true,
                options: [
                    [ 'Too late',                  [ 0, 1, 1, 0, 0, 0 ] ],
                    [ 'No, it\'s never too late!', [ 0, 1, -1, 0, 0, 0 ] ],
                    [ '*Sigh*',                    [ 0, 0, 0, 0, 0, 0 ] ],
                    [ 'It\'s muffin time!',        [ 1, 1, -1, 1, 0, 0 ] ],
                ]
            },
            perso13: {
                title: 'Question 14',
                question: 'Did you notice we skipped question 12?',
                perso: true,
                options: [
                    [ 'Of course!',                       [ 0, 0, 0, 0, 1, 0 ] ],
                    [ 'Nope, I didn\'t notice!',          [ 0, 0, 0, 0, 0, 0 ] ],
                    [ 'We did not skip question 12!',     [ 0, 0, 0, 0, 1, 0 ] ],
                    [ 'I knew this question was coming.', [ 0, 1, 0, 0, 0, 0 ] ],
                ]
            },
            perso14: {
                title: 'Question 14',
                question: 'And now we\'re having question 14 twice, oof',
                perso: true,
                options: [
                    [ 'Yeah whatever...',       [ 0, 0, 0, 1, 0, 0 ] ],
                    [ 'Weird',                  [ 0, 0, 0, 0, 0, 0 ] ],
                    [ 'This is getting boring', [ 0, 0, 0, -1, 0, 0 ] ],
                    [ 'Creeper? Aww man!',      [ 2, 1, 0, 0, 0, 0 ] ],
                ]
            },
            perso15: {
                title: 'Question 15',
                question: 'How do you think your friends would judge you?',
                perso: true,
                options: [
                    [ 'Cool',    [ 1, 0, 0, 1, 1, 1 ] ],
                    [ 'Awkward', [ 0, 1, 1, 0, 0, -1 ] ],
                    [ 'Boring',    [ 1, 0, 0, 0, 0, -1 ] ],
                    [ 'Sad',     [ 0, 0, 2, 0, 0, -1 ] ],
                ]
            },
            perso16: {
                title: 'Done',
                question: 'The test is over',
                perso: true,
                options: [
                    [ 'See results', [ 0, 0, 0, 0, 0, 0 ] ],
                ]
            },

            perso17: {
                title: 'Personality Test Results',
                custom: 'persores',
            }
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