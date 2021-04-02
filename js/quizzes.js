
(() => {
    "use strict";

    /**
     * Informations diverses sur les quiz.
     * @type{Record<string, Quiz>}
     */
     
    const quizzes = {
        "mer": {
            title: "Les animaux marins dans les dessins animés",
            description: "Des poissons et mammifères marins vous sont données. À vous de me donner leur nom.",
            data : questions_mer,
        },
        "jeux": {
            title: "De quel jeu provient cette image ?",
            description: "On vous donne l'image, retrouvez le jeu !",
            data : questions_jeux,
        },
        "couples": {
            title: "Les couples de dessins animés",
            description: "Essayez de reconnaitre ces célèbres couples de dessins animés.",
            data : questions_couples,
        },
        "webg2": {
            title: "La matière de Webg2",
            description: "Testez vos connaissances sur le cours de webg2",
            data : questions_webg2,
        }

    }

    let indexjs = () => {
        console.log('index')
        fillSelect()

        $('select').formSelect()
    }

    let quizzjs = () => {
        console.log('quizz')

        let quizz_id = new URL(location.href).searchParams.get('quizz_id')

        getQuizz(quizz_id)

        showQuizzTitle(quizz_id)

        showQuizzDescription(quizz_id)
        
        // timer(3000, () => { parseQuizz(quizz_id) })
        parseQuizz(quizz_id)
    }

    let resultatsjs = () => {
        console.log('résultats')

        // showAnswer(quizz_id)
    }
    
    const router = {
        index : indexjs,
        quizz : quizzjs,
        resultats : resultatsjs
    }
    
    let parse_router = () => {

        console.log(true)

        let redirect = "index" 
        
        if(location.href.match(/index.html$/i) == null) {
            for (let route in router) {
                let regexp = new RegExp(route + ".html", "i")
                console.log(regexp)
                console.log(route)
                console.log(location.href)

                if(regexp.test(location.href) === true) {
                    redirect = route
                    break
                }

            }

        } 

        redirect === null ? router?.["index"]() : router?.[redirect]()
        
    }
    
    let getQuizzTitle = (id) => {
        console.log(quizzes?.[id]?.title)
    }
    
    let showQuizzTitle = (id) => {
        let content = `
                <div class="title">${quizzes?.[id]?.title}</div>
        `
        $(".div").append(content)
    }
    
    let showQuizzDescription = (id) => {
        let content = `
                <span class="desc">${quizzes?.[id]?.description}</span>
        `
        $(".div").append(content)
    }
    
    /** 
     *  Parse le quizz pour afficher les questions sur la page :
     **/

    let parseQuizz = (...args) => {



        let questions = quizzes?.[args?.[0]]?.data

        let content;

        if(questions) {

            content = `<div class="container"><div class="row"><form id="resultats_form" action="resultats.html">`

            console.log(questions)

            for (let k of questions) {
                content += `<div class="question-img col s10 offset-s1"><img src="${k.image}">
                    <div class="question-title"><span class="question">${k.question}</span></div>
                    `

                for (let reponses in k.reponses) {
                    content += `<div class="">
                            <label for="${k.id}_${reponses}">
                                <input class="with-gap" type="radio" id="${k.id}_${reponses}" name="${k.id}" value="${reponses}">
                                <span class="blue-text text-lighten-2">${k.reponses[reponses]}</span>
                            </label>
                        </div>`
                }

                content += `</div>`
            }
            content += `<button id="verif" class="btn blue lighten-1 grey-text text-darken-3 waves-effect waves-light">Vérification</button></form></div></div>`
        
            $(".div").append(content)
        }

    }

    let getQuizzDescription = (id) => {
        console.log(quizzes?.[id]?.description)
    }

    let getQuizz = (id) => {
        getQuizzTitle(id)
        getQuizzDescription(id)
    }

    let fillSelect = () => {

        for(let key in quizzes) {
            $(`<option id="option_${key}" value="${key}">${quizzes?.[key]?.title}</option>`).appendTo($('#select'));
        }

    }

    let showAnswer = (id) => {
        //$('input[name=radioName]:checked').val();
        let content = `
            <span class="desc">${quizzes?.[id]?.data?.reponses?.[bonneReponses]}</span>
        `
        $(".div").append(content)
    }

    console.log(new URL(location.href));



    parse_router()

    

})()