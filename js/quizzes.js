
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
        },
        "jeux": {
            title: "De quel jeu provient cette image ?",
            description: "On vous donne l'image, retrouvez le jeu !",
        },
        "couples": {
            title: "Les couples de dessins animés",
            description: "Essayez de reconnaitre ces célèbres couples de dessins animés.",
        },
        "webg2": {
            title: "La matière de Webg2",
            description: "Testez vos connaissances sur le cours de webg2",
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
        
        timer(3000, () => { doafter()})
    }

    let doafter = () => {
        //afficher le questionnaire
    }

    const router = {
        index : indexjs,
        quizz : quizzjs
    }

    let parse_router = (id) => {
        router?.[id]()
    }

    let getQuizzTitle = (id) => {
        console.log(quizzes?.[id]?.title)
    }

    let showQuizzTitle = (id) => {
        let content = `
            <div class="div">
                <div class="title">${quizzes?.[id]?.title}</div>
                <span class="desc">${quizzes?.[id]?.description}</span>
            </div>
        `
        $(".title").append(content)
    }

    let showQuizzDescription = (id) => {
        
    }

    let getQuizzDescription = (id) => {
        console.log(quizzes?.[id]?.description)
        document.write(quizzes?.[id]?.description)
    }

    let getQuizz = (id) => {
        getQuizzTitle(id)
        getQuizzDescription(id)
    }

    let getAllQuizz = () => {
        for (let k in quizzes) {
            console.log(quizzes[k])
        }
    }

    let fillSelect = () => {

        for(let key in quizzes) {
            $('<option/>', {id : `option-${key}`, value: key, text: quizzes[key].title}).appendTo($('#select'));
        }

        // for (const idQuizz in quizzes) {
        //     const quizz = quizzes[idQuizz].title;
        //     var monSelect = document.getElementById("select");
        //     var monOption = document.createElement("option");
        //     monOption.text = quizz;
        //     monSelect.add(monOption);
        // }
    }

    console.log();
    new URL(location.href).searchParams.get('quizz_id') === null? parse_router('index') : parse_router('quizz')

    

})()