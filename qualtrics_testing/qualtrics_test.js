Qualtrics.SurveyEngine.addOnload(function () {

    /*Place your JavaScript here to run when the page loads*/

    /* Change 1: Hiding the Next button */
    // Retrieve Qualtrics object and save in qthis
    var qthis = this;

    // Hide buttons
    qthis.hideNextButton();

    /* Change 2: Defining and load required resources */
    var github_url = "https://anitarestrepo16.github.io/new_stroop/qualtrics_testing";

    // the below urls must be accessible with your browser
    // for example, https://kywch.github.io/jsPsych/jspsych.js
    var requiredResources = [
        github_url + "../jspsych.js",
        github_url + "../plugins/jspsych-html-keyboard-response.js",
		github_url + "../plugins/jspsych-instructions.js",
		github_url + "../plugins/jspsych-survey-text.js",
		github_url + "../plugins/jspsych-html-button-response.js",
		"https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"
    ];

    function loadScript(idx) {
        console.log("Loading ", requiredResources[idx]);
        jQuery.getScript(requiredResources[idx], function () {
            if ((idx + 1) < requiredResources.length) {
                loadScript(idx + 1);
            } else {
                initExp();
            }
        });
    }

    if (window.Qualtrics && (!window.frameElement || window.frameElement.id !== "mobile-preview-view")) {
        loadScript(0);
    }

    /* Change 3: Appending the display_stage Div using jQuery */
    // jQuery is loaded in Qualtrics by default
    jQuery("<div id = 'display_stage_background'></div>").appendTo('body');
    jQuery("<div id = 'display_stage'></div>").appendTo('body');

    /* Change 6: Defining necessary variables and functions for saving the results */
    // experimental session-defining variables
    var task_name = "test"; // change this for each individual task
    var sbj_id = "${e://Field/workerId}";

    // you must put your save_data php url here.
    var save_url = "https://users.rcc.uchicago.edu/~ar277/exp_data/save_data.php";
    var data_dir = task_name;

    // my preference is to include the task and sbj_id in the file name
    var file_name = task_name + '_' + sbj_id; 

    function save_data_csv() {
        jQuery.ajax({
            type: 'post',
            cache: false,
            url: save_url,
            data: {
                data_dir: data_dir,
                file_name: file_name + '.csv', // the file type should be added
                exp_data: jsPsych.data.get().csv()
            }
        });
    }

    var hello_trial = {
        type: 'html-keyboard-response',
        stimulus: 'Hello world!'
    }

    /* Change 4: Wrapping jsPsych.init() in a function */
    function initExp() {

        jsPsych.init({
            timeline: [hello_trial],
            display_element: 'display_stage',

            /* Change 5: Adding the clean up and continue functions.*/
            on_finish: function (data) {

                /* Change 7: Calling the save function -- CHOOSE ONE! */
                // include the participant ID in the data
                // this must be done before saving
                jsPsych.data.get().addToLast({participant: sbj_id});

                save_data_csv();

                // clear the stage
                jQuery('display_stage').remove();
                jQuery('display_stage_background').remove();

                // simulate click on Qualtrics "next" button, making use of the Qualtrics JS API
                qthis.clickNextButton();
            }
        });
    }
});

Qualtrics.SurveyEngine.addOnReady(function () {
    /*Place your JavaScript here to run when the page is fully displayed*/

});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/

});