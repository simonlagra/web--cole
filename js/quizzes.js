
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

    };

    let getQuizzTitle = (id) => {
        console.log(quizzes?.[id]?.title)
    }

    let getQuizzDescription = (id) => {
        console.log(quizzes?.[id]?.description)
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

    // function fillSelect() {
    //     for (const idQuizz in quizzes) {
    //         const quizz = quizzes[idQuizz].title;
    //         var monSelect = document.getElementById("select");
    //         var monOption = document.createElement("option");
    //         monOption.text = quizz;
    //         monSelect.add(monOption);
    //     }
    // }

    // $('#quizz_form') ? (fillSelect(), $('select').formSelect()) : null

})()