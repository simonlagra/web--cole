
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
        
        timer(3000, () => { parseQuizz(quizz_id) })
    }

    let resultatsjs = () => {
        console.log('résultats')

        showAnswer(quizz_id)
    }
    
    const router = {
        index : indexjs,
        quizz : quizzjs,
        resultats : resultatsjs
    }
    
    let parse_router = (id) => {
        router?.[id]()
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
            for (let k of questions) {
                console.log(k.question)
                content = `
                    <br>
                    <br>
                    <br>
                    <img src="${k.image}">
                    <br>
                    <span class="question">${k.question}</span>
                    <br>
                    <form>
                        <div>
                            <label for="${k.reponses[0]}">
                                <input class="with-gap" type="radio" id="${k.reponses[0]}" name="${k}" value="${k.reponses[0]}">
                                <span class="blue-text text-lighten-2">${k.reponses[0]}</span>
                            </label>
                        </div>

                        <div>
                            <label for="${k.reponses[1]}">
                                <input class="with-gap" type="radio" id="${k.reponses[1]}" name="${k}" value="${k.reponses[1]}">
                                <span class="blue-text text-lighten-2">${k.reponses[1]}</span>
                            </label>
                        </div>

                        <div>
                            <label for="${k.reponses[2]}">
                                <input class="with-gap" type="radio" id="${k.reponses[2]}" name="${k}" value="${k.reponses[2]}">
                                <span class="blue-text text-lighten-2">${k.reponses[2]}</span>
                            </label>
                        </div>
                    </form>
                `
                $(".div").append(content)
            }
            $(".div").append(`<button id="verif" class="btn blue lighten-1 grey-text text-darken-3 waves-effect waves-light" onClick="reponses()">Vérification</button>`)
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

    console.log();
    new URL(location.href).searchParams.get('quizz_id') === null? parse_router('index') : parse_router('quizz') //ajouter condition sur resultatsjs

    

})()

let reponses = () => {
    location.href='resultats.html'
}