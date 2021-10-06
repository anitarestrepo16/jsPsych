/* create empty timeline variable to fill with trials */
var timeline = [];

/* show instructions on the screen in white text */
var instructions_block = {
    type: "html-keyboard-response",
    stimulus: `<p style= 'color: white;'>In this task a word will appear in the middle of the screen. 
    When the word appears respond with the <strong>color of the text</strong> as quickly as you can.<br> 
    <span style = "color: rgb(232, 0, 0)">Press <strong>R</strong> for RED</span><br> 
    <span style = "color: rgb(255, 255, 0)">Press <strong>Y</strong> for YELLOW</span><br>
    <span style = "color: rgb(0, 125, 0)">Press <strong>G</strong> for GREEN</span><br>
    <span style = "color: rgb(23, 5, 250)">Press <strong>B</strong> for BLUE</span><br> 
    Press any key to continue.</p>`,
    post_trial_gap: 750,
    data: {
        task: "instructions"
    }
};

/* add instructions to timeline variable */
timeline.push(instructions_block);

/* Second instructions screen with practice-specific info */
var practice_start = {
    type: "html-keyboard-response",
    stimulus: `<p style= 'color: white;'>We will start with some practice trials. <br>
    <br> 
    During the practice trials, if you press the wrong key, you will see the word <strong>WRONG</strong> on the screen.
     If you press the correct key, you will see the word <strong>CORRECT</strong> on the screen. 
     After the practice trials we will begin the real game.<br> 
     <br>
    Press any key to continue.</p>`,
    post_trial_gap: 750,
    data: {
        task: "instructions"
    }
};

/* add practice instructions to timeline variable */
timeline.push(practice_start);

/* create the fixation cross in white */
var fixation = {
    type: 'html-keyboard-response',
    stimulus: '<div style="font-size:60px; color: white;">+</div>',
    choices: jsPsych.NO_KEYS,
    trial_duration: 750,
    task: "fixation"
}


/* add practice block */
/* create array of practice words */
/* 30 practice words for the first block */
var block_1_practice_words = [
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>RED</strong></p>`, correct_response: 'r', word: 'red', color: 'red', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>RED</strong></p>`, correct_response: 'b', word: 'red', color: 'blue', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>RED</strong></p>`, correct_response: 'y', word: 'red', color: 'yellow', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>RED</strong></p>`, correct_response: 'g', word: 'red', color: 'green', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>HAIRPIN</strong></p>`, correct_response: 'r', word: 'hairpin', color: 'red', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>HAIRPIN</strong></p>`, correct_response: 'b', word: 'hairpin', color: 'blue', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>HAIRPIN</strong></p>`, correct_response: 'y', word: 'hairpin', color: 'yellow', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>HAIRPIN</strong></p>`, correct_response: 'g', word: 'hairpin', color: 'green', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>GREEN</strong></p>`, correct_response: 'r', word: 'green', color: 'red', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>GREEN</strong></p>`, correct_response: 'b', word: 'green', color: 'blue', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>GREEN</strong></p>`, correct_response: 'y', word: 'green', color: 'yellow', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>GREEN</strong></p>`, correct_response: 'g', word: 'green', color: 'green', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>ITEM</strong></p>`, correct_response: 'r', word: 'item', color: 'red', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>ITEM</strong></p>`, correct_response: 'b', word: 'item', color: 'blue', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>ITEM</strong></p>`, correct_response: 'y', word: 'item', color: 'yellow', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>ITEM</strong></p>`, correct_response: 'g', word: 'item', color: 'green', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>YELLOW</strong></p>`, correct_response: 'r', word: 'yellow', color: 'red', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>YELLOW</strong></p>`, correct_response: 'b', word: 'yellow', color: 'blue', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>YELLOW</strong></p>`, correct_response: 'y', word: 'yellow', color: 'yellow', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>YELLOW</strong></p>`, correct_response: 'g', word: 'yellow', color: 'green', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>PENCIL</strong></p>`, correct_response: 'r', word: 'pencil', color: 'red', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>PENCIL</strong></p>`, correct_response: 'b', word: 'pencil', color: 'blue', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>PENCIL</strong></p>`, correct_response: 'y', word: 'pencil', color: 'yellow', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>PENCIL</strong></p>`, correct_response: 'g', word: 'pencil', color: 'green', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>BLUE</strong></p>`, correct_response: 'r', word: 'blue', color: 'red', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>BLUE</strong></p>`, correct_response: 'b', word: 'blue', color: 'blue', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>BLUE</strong></p>`, correct_response: 'y', word: 'blue', color: 'yellow', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>BLUE</strong></p>`, correct_response: 'g', word: 'blue', color: 'green', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>HAIRPIN</strong></p>`, correct_response: 'r', word: 'hairpin', color: 'red', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>ITEM</strong></p>`, correct_response: 'b', word: 'item', color: 'blue', category: 'practice'}
];
/* 5 practice words for second block */
var block_2_practice_words = [
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>HAIRPIN</strong></p>`, correct_response: 'r', word: 'hairpin', color: 'red', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>RED</strong></p>`, correct_response: 'b', word: 'red', color: 'blue', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>GREEN</strong></p>`, correct_response: 'y', word: 'green', color: 'yellow', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>ITEM</strong></p>`, correct_response: 'g', word: 'item', color: 'green', category: 'practice'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>PENCIL</strong></p>`, correct_response: 'r', word: 'pencil', color: 'red', category: 'practice'}
];

/* create a practice variable that specifies the aspects of the practice trials (what to click, how long it lasts) and save the relevant trial-level data */
var practice = {
    data: jsPsych.timelineVariable("data"),
    type: "html-keyboard-response",
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: ['r', 'b', 'g', 'y'], /* only valid keyboard presses are r, b, g or y */
    trial_duration: 5000, /* if nothing is pressed, move on to next after 5000ms */
    /* record the relevant variables that each item of the "practice_words" array is tagged with */
    data: {
        task: 'response', /* label the word trials as response trials to differentiate from fixation trials */ 
        correct_response: jsPsych.timelineVariable('correct_response'),
        word: jsPsych.timelineVariable('word'),
        color: jsPsych.timelineVariable('color'),
        category: jsPsych.timelineVariable('category')
    },
    on_finish: function(data) {
        data.accuracy = jsPsych.pluginAPI.compareKeys(data.response, data.correct_response)
        }
}

var feedback = {
    on_start: function(trial) {
        var last_trial_accuracy = jsPsych.data.get().last(1).values()[0].accuracy;
        if (last_trial_accuracy == 1) {
            var fdbck = "CORRECT"; // give a variable for feedback
        } else {
            var fdbck = "WRONG";// give a variable for feedback
        }
        var fdbck_trial_stim = "<div style='font-family: Arial, Helvetica, sans-serif; font-size: 60px; color: white;'><b>" + fdbck + "</b></div>";
        trial.data = {task: "feedback", stimulus: fdbck};
        trial.stimulus = fdbck_trial_stim;
    },
    data: "",
    type: "html-keyboard-response",
    stimulus: "",
    choices: jsPsych.NO_KEYS,
    trial_duration: 500
};

var practice_procedure = {
    timeline: [fixation, practice, feedback], /* intersperse fixation, practice word, feedback */
    timeline_variables: jsPsych.randomization.shuffle(block_1_practice_words) /* randomize the order of appearance of words */
};

/* add the actual full procedure to the timeline after the instructions */
timeline.push(practice_procedure);

var end_practice = {
    type: "html-keyboard-response",
    stimulus: `<p style= 'color: white;'> You have completed the practice trials. Press any key to continue. </p>`,
    post_trial_gap: 750,
    data: {
        task: "end_practice"
    }
}

timeline.push(end_practice);

/* create trials with questions from Pittsburgh Sleep Quality Index - one item per variable */
var sleep1 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how often have you had trouble sleeping because you cannot get to sleep within 30 minutes? </p>`,
    choices: ['Not during the past month', 'Less than once a week', 'Once or twice a week', 'Three or more times a week'],
    data: {
        task: "PSQI5a"
    }
}
var sleep2 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how often have you had trouble sleeping because you wake up in the middle of the night or early morning? </p>`,
    choices: ['Not during the past month', 'Less than once a week', 'Once or twice a week', 'Three or more times a week'],
    data: {
        task: "PSQI5b"
    }
}
var sleep3 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how often have you had trouble sleeping because you have to get up to use the bathroom? </p>`,
    choices: ['Not during the past month', 'Less than once a week', 'Once or twice a week', 'Three or more times a week'],
    data: {
        task: "PSQI5c"
    }
}
var sleep4 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how often have you had trouble sleeping because you cannot breathe comfortably? </p>`,
    choices: ['Not during the past month', 'Less than once a week', 'Once or twice a week', 'Three or more times a week'],
    data: {
        task: "PSQI5d"
    }
}
var sleep5 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how often have you had trouble sleeping because you cough or snore loudly? </p>`,
    choices: ['Not during the past month', 'Less than once a week', 'Once or twice a week', 'Three or more times a week'],
    data: {
        task: "PSQI5e"
    }
}
var sleep6 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how often have you had trouble sleeping because you feel too cold? </p>`,
    choices: ['Not during the past month', 'Less than once a week', 'Once or twice a week', 'Three or more times a week'],
    data: {
        task: "PSQI5f"
    }
}
var sleep7 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how often have you had trouble sleeping because you feel too hot? </p>`,
    choices: ['Not during the past month', 'Less than once a week', 'Once or twice a week', 'Three or more times a week'],
    data: {
        task: "PSQI5g"
    }
}
var sleep8 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how often have you had trouble sleeping because you had bad dreams? </p>`,
    choices: ['Not during the past month', 'Less than once a week', 'Once or twice a week', 'Three or more times a week'],
    data: {
        task: "PSQI5h"
    }
}
var sleep9 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how often have you had trouble sleeping because you have pain? </p>`,
    choices: ['Not during the past month', 'Less than once a week', 'Once or twice a week', 'Three or more times a week'],
    data: {
        task: "PSQI5i"
    }
}
var sleep10 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how would you rate your sleep quality overall? </p>`,
    choices: ['Very good', 'Fairly good', 'Fairly bad', 'Very bad'],
    data: {
        task: "PSQI6"
    }
}

var sleep11 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how often have you taken medicine (prescribed or "over the counter") to help you sleep? </p>`,
    choices: ['Not during the past month', 'Less than once a week', 'Once or twice a week', 'Three or more times a week'],
    data: {
        task: "PSQI7"
    }
}

var sleep12 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how often have you had trouble staying awake while driving, eating meals, or engaging in social activity? </p>`,
    choices: ['Not during the past month', 'Less than once a week', 'Once or twice a week', 'Three or more times a week'],
    data: {
        task: "PSQI8"
    }
}

var sleep13 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how much of a problem has it been for you to keep up enough enthusiasm to get things done? </p>`,
    choices: ['No problem at all', 'Only a very slight problem', 'Somewhat of a problem', 'A very big problem'],
    data: {
        task: "PSQI9"
    }
}

var sleep14 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> On average, how do you think your sleep quality compares to that of other people in your life (friends, family, etc.)? </p>`,
    choices: ['A lot worse', 'Slightly worse', 'About the same', 'Slightly better', 'A lot better'],
    data: {
        task: "sleep_others"
    }
}

var sleep15 = {
    type: "survey-text",
    questions: [
        {prompt: `<p style = 'color: white;'> During the past month, when have you usually gone to bed at night? </p>`, placeholder: `Type text here`}
    ],
    button_label: `Click to continue>`,
    data: {
        task: "PSQI1"
    }
}

var sleep16 = {
    type: "survey-text",
    questions: [
        {prompt: `<p style = 'color: white;'> During the past month, how long (in minutes) has it usually taken you to fall asleep each night? </p>`, placeholder: `Type text here`}
    ],
    button_label: `Click to continue>`,
    data: {
        task: "PSQI2"
    }
}

var sleep17 = {
    type: "survey-text",
    questions: [
        {prompt: `<p style = 'color: white;'> During the past month, when have you usually gotten up in the morning? </p>`, placeholder: `Type text here`}
    ],
    button_label: `Click to continue>`,
    data: {
        task: "PSQI3"
    }
}

var sleep18 = {
    type: "survey-text",
    questions: [
        {prompt: `<p style = 'color: white;'> During the past month, how many hours of actual sleep did you get at night? (this may be different than the number of hours you spend in bed) </p>`, placeholder: `Type text here`}
    ],
    button_label: `Click to continue>`,
    data: {
        task: "PSQI4"
    }
}

var sleep19 = {
    type: "survey-text",
    questions: [
        {prompt: `<p style = 'color: white;'> During the past month, have any external circumstances (for example crying babies, barking dogs, street noise) prevented you from getting a good night's sleep? Please explain. </p>`, placeholder: `Type text here`}
    ],
    button_label: `Click to continue>`,
    data: {
        task: "sleep_external"
    }
}

var sleep20 = {
    type: "survey-text",
    questions: [
        {prompt: `<p style = 'color: white;'> In the past month, has anyone in your household (apart from yourself) experienced problems sleeping? </p>`, placeholder: `Type text here`}
    ],
    button_label: `Click to continue>`,
    data: {
        task: "household_sleep"
    }
}

var wait = {
    type: "html-keyboard-response",
    stimulus: `<p style = 'color: white;'> Please wait a couple seconds for the start of the next color word game. </p>`,
    choices: jsPsych.NO_KEYS,
    trial_duration: function(){
        var last_trials_time_elapsed = jsPsych.data.get().last(4).values();
        var duration = 55000 - (last_trials_time_elapsed[0].rt + last_trials_time_elapsed[1].rt + last_trials_time_elapsed[2].rt + last_trials_time_elapsed[3].rt);
        return duration
    },
    data: {
        task: "wait"
    }
}

var ready = {
    type: "html-keyboard-response",
    stimulus: `<p style = 'color: orange; font-size: 50px'><strong> GET READY!
     The next game is starting in 5 seconds! </strong></p>`,
    choices: jsPsych.NO_KEYS,
    trial_duration: 5000,
    data: {
        task: "ready"
    }
}

/* create array of words for the stroop with relevant variables to save tagged on */
/* Pool 1 */
var pool1_soc_pos = [
    /* Social Positive*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>ACCEPTED</strong></p>`, correct_response: 'r', word: 'accepted', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>ACCEPTED</strong></p>`, correct_response: 'b', word: 'accepted', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>ACCEPTED</strong></p>`, correct_response: 'g', word: 'accepted', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>ACCEPTED</strong></p>`, correct_response: 'y', word: 'accepted', color: 'yellow', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>ADMIRED</strong></p>`, correct_response: 'r', word: 'admired', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>ADMIRED</strong></p>`, correct_response: 'b', word: 'admired', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>ADMIRED</strong></p>`, correct_response: 'g', word: 'admired', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>ADMIRED</strong></p>`, correct_response: 'y', word: 'admired', color: 'yellow', category: 'social_pos'},
     { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>BELONG</strong></p>`, correct_response: 'r', word: 'belong', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>BELONG</strong></p>`, correct_response: 'b', word: 'belong', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>BELONG</strong></p>`, correct_response: 'g', word: 'belong', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>BELONG</strong></p>`, correct_response: 'y', word: 'belong', color: 'yellow', category: 'social_pos'},
     { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>DEVOTED</strong></p>`, correct_response: 'r', word: 'devoted', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>DEVOTED</strong></p>`, correct_response: 'b', word: 'devoted', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>DEVOTED</strong></p>`, correct_response: 'g', word: 'devoted', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>DEVOTED</strong></p>`, correct_response: 'y', word: 'devoted', color: 'yellow', category: 'social_pos'},
     { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>GIVING</strong></p>`, correct_response: 'r', word: 'giving', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>GIVING</strong></p>`, correct_response: 'b', word: 'giving', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>GIVING</strong></p>`, correct_response: 'g', word: 'giving', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>GIVING</strong></p>`, correct_response: 'y', word: 'giving', color: 'yellow', category: 'social_pos'},
     { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>INCLUDED</strong></p>`, correct_response: 'r', word: 'included', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>INCLUDED</strong></p>`, correct_response: 'b', word: 'included', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>INCLUDED</strong></p>`, correct_response: 'g', word: 'included', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>INCLUDED</strong></p>`, correct_response: 'y', word: 'included', color: 'yellow', category: 'social_pos'},
     { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>CARING</strong></p>`, correct_response: 'r', word: 'caring', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>CARING</strong></p>`, correct_response: 'b', word: 'caring', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>CARING</strong></p>`, correct_response: 'g', word: 'caring', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>CARING</strong></p>`, correct_response: 'y', word: 'caring', color: 'yellow', category: 'social_pos'},
     { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>LOVED</strong></p>`, correct_response: 'r', word: 'loved', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>LOVED</strong></p>`, correct_response: 'b', word: 'loved', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>LOVED</strong></p>`, correct_response: 'g', word: 'loved', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>LOVED</strong></p>`, correct_response: 'y', word: 'loved', color: 'yellow', category: 'social_pos'}
]
var pool1_soc_neg = [
    /* Social Negative*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>ABUSED</strong></p>`, correct_response: 'r', word: 'abused', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>ABUSED</strong></p>`, correct_response: 'b', word: 'abused', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>ABUSED</strong></p>`, correct_response: 'g', word: 'abused', color: 'green', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>ABUSED</strong></p>`, correct_response: 'y', word: 'abused', color: 'yellow', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>BETRAYED</strong></p>`, correct_response: 'r', word: 'betrayed', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>BETRAYED</strong></p>`, correct_response: 'b', word: 'betrayed', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>BETRAYED</strong></p>`, correct_response: 'g', word: 'betrayed', color: 'green', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>BETRAYED</strong></p>`, correct_response: 'y', word: 'betrayed', color: 'yellow', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>DEFEATED</strong></p>`, correct_response: 'r', word: 'defeated', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>DEFEATED</strong></p>`, correct_response: 'b', word: 'defeated', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>DEFEATED</strong></p>`, correct_response: 'g', word: 'defeated', color: 'green', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>DEFEATED</strong></p>`, correct_response: 'y', word: 'defeated', color: 'yellow', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>EXCLUDED</strong></p>`, correct_response: 'r', word: 'excluded', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>EXCLUDED</strong></p>`, correct_response: 'b', word: 'excluded', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>EXCLUDED</strong></p>`, correct_response: 'g', word: 'excluded', color: 'green', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>EXCLUDED</strong></p>`, correct_response: 'y', word: 'excluded', color: 'yellow', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>HOSTILE</strong></p>`, correct_response: 'r', word: 'hostile', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>HOSTILE</strong></p>`, correct_response: 'b', word: 'hostile', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>HOSTILE</strong></p>`, correct_response: 'g', word: 'hostile', color: 'green', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>HOSTILE</strong></p>`, correct_response: 'y', word: 'hostile', color: 'yellow', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>INADEQUATE</strong></p>`, correct_response: 'r', word: 'inadequate', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>INADEQUATE</strong></p>`, correct_response: 'b', word: 'inadequate', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>INADEQUATE</strong></p>`, correct_response: 'g', word: 'inadequate', color: 'green', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>INADEQUATE</strong></p>`, correct_response: 'y', word: 'inadequate', color: 'yellow', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>INSULTED</strong></p>`, correct_response: 'r', word: 'insulted', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>INSULTED</strong></p>`, correct_response: 'b', word: 'insulted', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>INSULTED</strong></p>`, correct_response: 'g', word: 'insulted', color: 'green', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>INSULTED</strong></p>`, correct_response: 'y', word: 'insulted', color: 'yellow', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>RIDICULED</strong></p>`, correct_response: 'r', word: 'ridiculed', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>RIDICULED</strong></p>`, correct_response: 'b', word: 'ridiculed', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>RIDICULED</strong></p>`, correct_response: 'g', word: 'ridiculed', color: 'green', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>RIDICULED</strong></p>`, correct_response: 'y', word: 'ridiculed', color: 'yellow', category: 'social_neg'}
]
var pool1_emo_neg = [
    /* Emotion Negative*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>AFRAID</strong></p>`, correct_response: 'r', word: 'afraid', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>AFRAID</strong></p>`, correct_response: 'b', word: 'afraid', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>AFRAID</strong></p>`, correct_response: 'g', word: 'afraid', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>AFRAID</strong></p>`, correct_response: 'y', word: 'afraid', color: 'yellow', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>ANGUISH</strong></p>`, correct_response: 'r', word: 'anguish', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>ANGUISH</strong></p>`, correct_response: 'b', word: 'anguish', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>ANGUISH</strong></p>`, correct_response: 'g', word: 'anguish', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>ANGUISH</strong></p>`, correct_response: 'y', word: 'anguish', color: 'yellow', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>BRUTAL</strong></p>`, correct_response: 'r', word: 'brutal', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>BRUTAL</strong></p>`, correct_response: 'b', word: 'brutal', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>BRUTAL</strong></p>`, correct_response: 'g', word: 'brutal', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>BRUTAL</strong></p>`, correct_response: 'y', word: 'brutal', color: 'yellow', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>DISTRESS</strong></p>`, correct_response: 'r', word: 'distress', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>DISTRESS</strong></p>`, correct_response: 'b', word: 'distress', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>DISTRESS</strong></p>`, correct_response: 'g', word: 'distress', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>DISTRESS</strong></p>`, correct_response: 'y', word: 'distress', color: 'yellow', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>FEAR</strong></p>`, correct_response: 'r', word: 'fear', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>FEAR</strong></p>`, correct_response: 'b', word: 'fear', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>FEAR</strong></p>`, correct_response: 'g', word: 'fear', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>FEAR</strong></p>`, correct_response: 'y', word: 'fear', color: 'yellow', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>IRRITATED</strong></p>`, correct_response: 'r', word: 'irritated', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>IRRITATED</strong></p>`, correct_response: 'b', word: 'irritated', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>IRRITATED</strong></p>`, correct_response: 'g', word: 'irritated', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>IRRITATED</strong></p>`, correct_response: 'y', word: 'irritated', color: 'yellow', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>PANIC</strong></p>`, correct_response: 'r', word: 'panic', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>PANIC</strong></p>`, correct_response: 'b', word: 'panic', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>PANIC</strong></p>`, correct_response: 'g', word: 'panic', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>PANIC</strong></p>`, correct_response: 'y', word: 'panic', color: 'yellow', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>STRESS</strong></p>`, correct_response: 'r', word: 'stress', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>STRESS</strong></p>`, correct_response: 'b', word: 'stress', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>STRESS</strong></p>`, correct_response: 'g', word: 'stress', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>STRESS</strong></p>`, correct_response: 'y', word: 'stress', color: 'yellow', category: 'emotion_neg'}
]
var pool1_emo_pos = [
    /* Emotion Positive*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>BRAVE</strong></p>`, correct_response: 'r', word: 'brave', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>BRAVE</strong></p>`, correct_response: 'b', word: 'brave', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>BRAVE</strong></p>`, correct_response: 'g', word: 'brave', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>BRAVE</strong></p>`, correct_response: 'y', word: 'brave', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>DELIGHT</strong></p>`, correct_response: 'r', word: 'delight', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>DELIGHT</strong></p>`, correct_response: 'b', word: 'delight', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>DELIGHT</strong></p>`, correct_response: 'g', word: 'delight', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>DELIGHT</strong></p>`, correct_response: 'y', word: 'delight', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>ENJOY</strong></p>`, correct_response: 'r', word: 'enjoy', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>ENJOY</strong></p>`, correct_response: 'b', word: 'enjoy', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>ENJOY</strong></p>`, correct_response: 'g', word: 'enjoy', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>ENJOY</strong></p>`, correct_response: 'y', word: 'enjoy', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>HAPPY</strong></p>`, correct_response: 'r', word: 'happy', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>HAPPY</strong></p>`, correct_response: 'b', word: 'happy', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>HAPPY</strong></p>`, correct_response: 'g', word: 'happy', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>HAPPY</strong></p>`, correct_response: 'y', word: 'happy', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>JOYFUL</strong></p>`, correct_response: 'r', word: 'joyful', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>JOYFUL</strong></p>`, correct_response: 'b', word: 'joyful', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>JOYFUL</strong></p>`, correct_response: 'g', word: 'joyful', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>JOYFUL</strong></p>`, correct_response: 'y', word: 'joyful', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>LAUGH</strong></p>`, correct_response: 'r', word: 'laugh', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>LAUGH</strong></p>`, correct_response: 'b', word: 'laugh', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>LAUGH</strong></p>`, correct_response: 'g', word: 'laugh', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>LAUGH</strong></p>`, correct_response: 'y', word: 'laugh', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>PLEASED</strong></p>`, correct_response: 'r', word: 'pleased', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>PLEASED</strong></p>`, correct_response: 'b', word: 'pleased', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>PLEASED</strong></p>`, correct_response: 'g', word: 'pleased', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>PLEASED</strong></p>`, correct_response: 'y', word: 'pleased', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>PRIZE</strong></p>`, correct_response: 'r', word: 'prize', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>PRIZE</strong></p>`, correct_response: 'b', word: 'prize', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>PRIZE</strong></p>`, correct_response: 'g', word: 'prize', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>PRIZE</strong></p>`, correct_response: 'y', word: 'prize', color: 'yellow', category: 'emotion_pos'}
]
var pool1_color = [
    /* Color Stroop*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>GREEN</strong></p>`, correct_response: 'r', word: 'green', color: 'red', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>GREEN</strong></p>`, correct_response: 'b', word: 'green', color: 'blue', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>GREEN</strong></p>`, correct_response: 'y', word: 'green', color: 'yellow', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>GREEN</strong></p>`, correct_response: 'g', word: 'green', color: 'green', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>GREEN</strong></p>`, correct_response: 'g', word: 'green', color: 'green', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>GREEN</strong></p>`, correct_response: 'y', word: 'green', color: 'yellow', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>GREEN</strong></p>`, correct_response: 'b', word: 'green', color: 'blue', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>GREEN</strong></p>`, correct_response: 'r', word: 'green', color: 'red', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>RED</strong></p>`, correct_response: 'r', word: 'red', color: 'red', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>RED</strong></p>`, correct_response: 'b', word: 'red', color: 'blue', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>RED</strong></p>`, correct_response: 'y', word: 'red', color: 'yellow', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>RED</strong></p>`, correct_response: 'g', word: 'red', color: 'green', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>RED</strong></p>`, correct_response: 'g', word: 'red', color: 'green', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>RED</strong></p>`, correct_response: 'y', word: 'red', color: 'yellow', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>RED</strong></p>`, correct_response: 'b', word: 'red', color: 'blue', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>RED</strong></p>`, correct_response: 'r', word: 'red', color: 'red', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>BLUE</strong></p>`, correct_response: 'r', word: 'blue', color: 'red', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>BLUE</strong></p>`, correct_response: 'b', word: 'blue', color: 'blue', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>BLUE</strong></p>`, correct_response: 'y', word: 'blue', color: 'yellow', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>BLUE</strong></p>`, correct_response: 'g', word: 'blue', color: 'green', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>BLUE</strong></p>`, correct_response: 'g', word: 'blue', color: 'green', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>BLUE</strong></p>`, correct_response: 'y', word: 'blue', color: 'yellow', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>BLUE</strong></p>`, correct_response: 'b', word: 'blue', color: 'blue', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>BLUE</strong></p>`, correct_response: 'r', word: 'blue', color: 'red', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>YELLOW</strong></p>`, correct_response: 'r', word: 'yellow', color: 'red', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>YELLOW</strong></p>`, correct_response: 'b', word: 'yellow', color: 'blue', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>YELLOW</strong></p>`, correct_response: 'y', word: 'yellow', color: 'yellow', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>YELLOW</strong></p>`, correct_response: 'g', word: 'yellow', color: 'green', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>YELLOW</strong></p>`, correct_response: 'g', word: 'yellow', color: 'green', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>YELLOW</strong></p>`, correct_response: 'y', word: 'yellow', color: 'yellow', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>YELLOW</strong></p>`, correct_response: 'b', word: 'yellow', color: 'blue', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>YELLOW</strong></p>`, correct_response: 'r', word: 'yellow', color: 'red', category: 'color'}
]
var pool1_neutral = [
    /* Neutral */
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>BARREL</strong></p>`, correct_response: 'r', word: 'barrel', color: 'red', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>BARREL</strong></p>`, correct_response: 'b', word: 'barrel', color: 'blue', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>BARREL</strong></p>`, correct_response: 'g', word: 'barrel', color: 'green', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>BARREL</strong></p>`, correct_response: 'y', word: 'barrel', color: 'yellow', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>BOARD</strong></p>`, correct_response: 'r', word: 'board', color: 'red', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>BOARD</strong></p>`, correct_response: 'b', word: 'board', color: 'blue', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>BOARD</strong></p>`, correct_response: 'g', word: 'board', color: 'green', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>BOARD</strong></p>`, correct_response: 'y', word: 'board', color: 'yellow', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>CHIN</strong></p>`, correct_response: 'r', word: 'chin', color: 'red', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>CHIN</strong></p>`, correct_response: 'b', word: 'chin', color: 'blue', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>CHIN</strong></p>`, correct_response: 'g', word: 'chin', color: 'green', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>CHIN</strong></p>`, correct_response: 'y', word: 'chin', color: 'yellow', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>STATUE</strong></p>`, correct_response: 'r', word: 'statue', color: 'red', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>STATUE</strong></p>`, correct_response: 'b', word: 'statue', color: 'blue', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>STATUE</strong></p>`, correct_response: 'g', word: 'statue', color: 'green', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>STATUE</strong></p>`, correct_response: 'y', word: 'statue', color: 'yellow', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>SEAT</strong></p>`, correct_response: 'r', word: 'seat', color: 'red', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>SEAT</strong></p>`, correct_response: 'b', word: 'seat', color: 'blue', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>SEAT</strong></p>`, correct_response: 'g', word: 'seat', color: 'green', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>SEAT</strong></p>`, correct_response: 'y', word: 'seat', color: 'yellow', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>SQUARE</strong></p>`, correct_response: 'r', word: 'square', color: 'red', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>SQUARE</strong></p>`, correct_response: 'b', word: 'square', color: 'blue', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>SQUARE</strong></p>`, correct_response: 'g', word: 'square', color: 'green', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>SQUARE</strong></p>`, correct_response: 'y', word: 'square', color: 'yellow', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>STREET</strong></p>`, correct_response: 'r', word: 'street', color: 'red', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>STREET</strong></p>`, correct_response: 'b', word: 'street', color: 'blue', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>STREET</strong></p>`, correct_response: 'g', word: 'street', color: 'green', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>STREET</strong></p>`, correct_response: 'y', word: 'street', color: 'yellow', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>BOWL</strong></p>`, correct_response: 'r', word: 'bowl', color: 'red', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>BOWL</strong></p>`, correct_response: 'b', word: 'bowl', color: 'blue', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>BOWL</strong></p>`, correct_response: 'g', word: 'bowl', color: 'green', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>BOWL</strong></p>`, correct_response: 'y', word: 'bowl', color: 'yellow', category: 'neutral'}
];

/* Pool 2 */
var pool2_soc_pos = [
    /* Social Positive*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>CHARMING</strong></p>`, correct_response: 'r', word: 'charming', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>CHARMING</strong></p>`, correct_response: 'b', word: 'charming', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>CHARMING</strong></p>`, correct_response: 'g', word: 'charming', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>CHARMING</strong></p>`, correct_response: 'y', word: 'charming', color: 'yellow', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>DESIRED</strong></p>`, correct_response: 'r', word: 'desired', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>DESIRED</strong></p>`, correct_response: 'b', word: 'desired', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>DESIRED</strong></p>`, correct_response: 'g', word: 'desired', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>DESIRED</strong></p>`, correct_response: 'y', word: 'desired', color: 'yellow', category: 'social_pos'},
     { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>KIND</strong></p>`, correct_response: 'r', word: 'kind', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>KIND</strong></p>`, correct_response: 'b', word: 'kind', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>KIND</strong></p>`, correct_response: 'g', word: 'kind', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>KIND</strong></p>`, correct_response: 'y', word: 'kind', color: 'yellow', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>FRIENDLY</strong></p>`, correct_response: 'r', word: 'friendly', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>FRIENDLY</strong></p>`, correct_response: 'b', word: 'friendly', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>FRIENDLY</strong></p>`, correct_response: 'g', word: 'friendly', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>FRIENDLY</strong></p>`, correct_response: 'y', word: 'friendly', color: 'yellow', category: 'social_pos'},
     { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>LIKED</strong></p>`, correct_response: 'r', word: 'liked', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>LIKED</strong></p>`, correct_response: 'b', word: 'liked', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>LIKED</strong></p>`, correct_response: 'g', word: 'liked', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>LIKED</strong></p>`, correct_response: 'y', word: 'liked', color: 'yellow', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>LOYAL</strong></p>`, correct_response: 'r', word: 'loyal', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>LOYAL</strong></p>`, correct_response: 'b', word: 'loyal', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>LOYAL</strong></p>`, correct_response: 'g', word: 'loyal', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>LOYAL</strong></p>`, correct_response: 'y', word: 'loyal', color: 'yellow', category: 'social_pos'},
     { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>KISS</strong></p>`, correct_response: 'r', word: 'kiss', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>KISS</strong></p>`, correct_response: 'b', word: 'kiss', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>KISS</strong></p>`, correct_response: 'g', word: 'kiss', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>KISS</strong></p>`, correct_response: 'y', word: 'kiss', color: 'yellow', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>FAITHFUL</strong></p>`, correct_response: 'r', word: 'faithful', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>FAITHFUL</strong></p>`, correct_response: 'b', word: 'faithful', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>FAITHFUL</strong></p>`, correct_response: 'g', word: 'faithful', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>FAITHFUL</strong></p>`, correct_response: 'y', word: 'faithful', color: 'yellow', category: 'social_pos'}
]
var pool2_soc_neg = [
    /* Social Negative*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>LONELY</strong></p>`, correct_response: 'r', word: 'lonely', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>LONELY</strong></p>`, correct_response: 'b', word: 'lonely', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>LONELY</strong></p>`, correct_response: 'g', word: 'lonely', color: 'green', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>LONELY</strong></p>`, correct_response: 'y', word: 'lonely', color: 'yellow', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>DECEIVED</strong></p>`, correct_response: 'r', word: 'deceived', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>DECEIVED</strong></p>`, correct_response: 'b', word: 'deceived', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>DECEIVED</strong></p>`, correct_response: 'g', word: 'deceived', color: 'green', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>DECEIVED</strong></p>`, correct_response: 'y', word: 'deceived', color: 'yellow', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>DISLIKED</strong></p>`, correct_response: 'r', word: 'disliked', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>DISLIKED</strong></p>`, correct_response: 'b', word: 'disliked', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>DISLIKED</strong></p>`, correct_response: 'g', word: 'disliked', color: 'green', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>DISLIKED</strong></p>`, correct_response: 'y', word: 'disliked', color: 'yellow', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>INFERIOR</strong></p>`, correct_response: 'r', word: 'inferior', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>INFERIOR</strong></p>`, correct_response: 'b', word: 'inferior', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>INFERIOR</strong></p>`, correct_response: 'g', word: 'inferior', color: 'green', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>INFERIOR</strong></p>`, correct_response: 'y', word: 'inferior', color: 'yellow', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>HUMILIATED</strong></p>`, correct_response: 'r', word: 'humiliated', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>HUMILIATED</strong></p>`, correct_response: 'b', word: 'humiliated', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>HUMILIATED</strong></p>`, correct_response: 'g', word: 'humiliated', color: 'green', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>HUMILIATED</strong></p>`, correct_response: 'y', word: 'humiliated', color: 'yellow', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>PATHETIC</strong></p>`, correct_response: 'r', word: 'pathetic', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>PATHETIC</strong></p>`, correct_response: 'b', word: 'pathetic', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>PATHETIC</strong></p>`, correct_response: 'g', word: 'pathetic', color: 'green', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>PATHETIC</strong></p>`, correct_response: 'y', word: 'pathetic', color: 'yellow', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>REJECTED</strong></p>`, correct_response: 'r', word: 'rejected', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>REJECTED</strong></p>`, correct_response: 'b', word: 'rejected', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>REJECTED</strong></p>`, correct_response: 'g', word: 'rejected', color: 'green', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>REJECTED</strong></p>`, correct_response: 'y', word: 'rejected', color: 'yellow', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>UNWANTED</strong></p>`, correct_response: 'r', word: 'unwanted', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>UNWANTED</strong></p>`, correct_response: 'b', word: 'unwanted', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>UNWANTED</strong></p>`, correct_response: 'g', word: 'unwanted', color: 'green', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>UNWANTED</strong></p>`, correct_response: 'y', word: 'unwanted', color: 'yellow', category: 'social_neg'}
]
var pool2_emo_neg = [
    /* Emotion Negative*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>FRUSTRATED</strong></p>`, correct_response: 'r', word: 'frustrated', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>FRUSTRATED</strong></p>`, correct_response: 'b', word: 'frustrated', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>FRUSTRATED</strong></p>`, correct_response: 'g', word: 'frustrated', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>FRUSTRATED</strong></p>`, correct_response: 'y', word: 'frustrated', color: 'yellow', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>SAD</strong></p>`, correct_response: 'r', word: 'sad', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>SAD</strong></p>`, correct_response: 'b', word: 'sad', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>SAD</strong></p>`, correct_response: 'g', word: 'sad', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>SAD</strong></p>`, correct_response: 'y', word: 'sad', color: 'yellow', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>AGONY</strong></p>`, correct_response: 'r', word: 'agony', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>AGONY</strong></p>`, correct_response: 'b', word: 'agony', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>AGONY</strong></p>`, correct_response: 'g', word: 'agony', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>AGONY</strong></p>`, correct_response: 'y', word: 'agony', color: 'yellow', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>PAIN</strong></p>`, correct_response: 'r', word: 'pain', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>PAIN</strong></p>`, correct_response: 'b', word: 'pain', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>PAIN</strong></p>`, correct_response: 'g', word: 'pain', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>PAIN</strong></p>`, correct_response: 'y', word: 'pain', color: 'yellow', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>ANGRY</strong></p>`, correct_response: 'r', word: 'angry', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>ANGRY</strong></p>`, correct_response: 'b', word: 'angry', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>ANGRY</strong></p>`, correct_response: 'g', word: 'angry', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>ANGRY</strong></p>`, correct_response: 'y', word: 'angry', color: 'yellow', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>ANXIOUS</strong></p>`, correct_response: 'r', word: 'anxious', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>ANXIOUS</strong></p>`, correct_response: 'b', word: 'anxious', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>ANXIOUS</strong></p>`, correct_response: 'g', word: 'anxious', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>ANXIOUS</strong></p>`, correct_response: 'y', word: 'anxious', color: 'yellow', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>DEPRESSED</strong></p>`, correct_response: 'r', word: 'depressed', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>DEPRESSED</strong></p>`, correct_response: 'b', word: 'depressed', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>DEPRESSED</strong></p>`, correct_response: 'g', word: 'depressed', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>DEPRESSED</strong></p>`, correct_response: 'y', word: 'depressed', color: 'yellow', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>MISERY</strong></p>`, correct_response: 'r', word: 'misery', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>MISERY</strong></p>`, correct_response: 'b', word: 'misery', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>MISERY</strong></p>`, correct_response: 'g', word: 'misery', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>MISERY</strong></p>`, correct_response: 'y', word: 'misery', color: 'yellow', category: 'emotion_neg'}
]
var pool2_emo_pos = [
    /* Emotion Positive*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>CHEER</strong></p>`, correct_response: 'r', word: 'cheer', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>CHEER</strong></p>`, correct_response: 'b', word: 'cheer', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>CHEER</strong></p>`, correct_response: 'g', word: 'cheer', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>CHEER</strong></p>`, correct_response: 'y', word: 'cheer', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>COMFORT</strong></p>`, correct_response: 'r', word: 'comfort', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>COMFORT</strong></p>`, correct_response: 'b', word: 'comfort', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>COMFORT</strong></p>`, correct_response: 'g', word: 'comfort', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>COMFORT</strong></p>`, correct_response: 'y', word: 'comfort', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>SUCCESS</strong></p>`, correct_response: 'r', word: 'success', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>SUCCESS</strong></p>`, correct_response: 'b', word: 'success', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>SUCCESS</strong></p>`, correct_response: 'g', word: 'success', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>SUCCESS</strong></p>`, correct_response: 'y', word: 'success', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>HOPE</strong></p>`, correct_response: 'r', word: 'hope', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>HOPE</strong></p>`, correct_response: 'b', word: 'hope', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>HOPE</strong></p>`, correct_response: 'g', word: 'hope', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>HOPE</strong></p>`, correct_response: 'y', word: 'hope', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>LUCKY</strong></p>`, correct_response: 'r', word: 'lucky', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>LUCKY</strong></p>`, correct_response: 'b', word: 'lucky', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>LUCKY</strong></p>`, correct_response: 'g', word: 'lucky', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>LUCKY</strong></p>`, correct_response: 'y', word: 'lucky', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>PLEASURE</strong></p>`, correct_response: 'r', word: 'pleasure', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>PLEASURE</strong></p>`, correct_response: 'b', word: 'pleasure', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>PLEASURE</strong></p>`, correct_response: 'g', word: 'pleasure', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>PLEASURE</strong></p>`, correct_response: 'y', word: 'pleasure', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>TERRIFIC</strong></p>`, correct_response: 'r', word: 'terrific', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>TERRIFIC</strong></p>`, correct_response: 'b', word: 'terrific', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>TERRIFIC</strong></p>`, correct_response: 'g', word: 'terrific', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>TERRIFIC</strong></p>`, correct_response: 'y', word: 'terrific', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>BLISS</strong></p>`, correct_response: 'r', word: 'bliss', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>BLISS</strong></p>`, correct_response: 'b', word: 'bliss', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>BLISS</strong></p>`, correct_response: 'g', word: 'bliss', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>BLISS</strong></p>`, correct_response: 'y', word: 'bliss', color: 'yellow', category: 'emotion_pos'}
]
var pool2_color = [
    /* Color Stroop*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>GREEN</strong></p>`, correct_response: 'r', word: 'green', color: 'red', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>GREEN</strong></p>`, correct_response: 'b', word: 'green', color: 'blue', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>GREEN</strong></p>`, correct_response: 'y', word: 'green', color: 'yellow', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>GREEN</strong></p>`, correct_response: 'g', word: 'green', color: 'green', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>GREEN</strong></p>`, correct_response: 'g', word: 'green', color: 'green', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>GREEN</strong></p>`, correct_response: 'y', word: 'green', color: 'yellow', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>GREEN</strong></p>`, correct_response: 'b', word: 'green', color: 'blue', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>GREEN</strong></p>`, correct_response: 'r', word: 'green', color: 'red', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>RED</strong></p>`, correct_response: 'r', word: 'red', color: 'red', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>RED</strong></p>`, correct_response: 'b', word: 'red', color: 'blue', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>RED</strong></p>`, correct_response: 'y', word: 'red', color: 'yellow', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>RED</strong></p>`, correct_response: 'g', word: 'red', color: 'green', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>RED</strong></p>`, correct_response: 'g', word: 'red', color: 'green', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>RED</strong></p>`, correct_response: 'y', word: 'red', color: 'yellow', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>RED</strong></p>`, correct_response: 'b', word: 'red', color: 'blue', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>RED</strong></p>`, correct_response: 'r', word: 'red', color: 'red', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>BLUE</strong></p>`, correct_response: 'r', word: 'blue', color: 'red', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>BLUE</strong></p>`, correct_response: 'b', word: 'blue', color: 'blue', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>BLUE</strong></p>`, correct_response: 'y', word: 'blue', color: 'yellow', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>BLUE</strong></p>`, correct_response: 'g', word: 'blue', color: 'green', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>BLUE</strong></p>`, correct_response: 'g', word: 'blue', color: 'green', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>BLUE</strong></p>`, correct_response: 'y', word: 'blue', color: 'yellow', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>BLUE</strong></p>`, correct_response: 'b', word: 'blue', color: 'blue', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>BLUE</strong></p>`, correct_response: 'r', word: 'blue', color: 'red', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>YELLOW</strong></p>`, correct_response: 'r', word: 'yellow', color: 'red', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>YELLOW</strong></p>`, correct_response: 'b', word: 'yellow', color: 'blue', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>YELLOW</strong></p>`, correct_response: 'y', word: 'yellow', color: 'yellow', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>YELLOW</strong></p>`, correct_response: 'g', word: 'yellow', color: 'green', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>YELLOW</strong></p>`, correct_response: 'g', word: 'yellow', color: 'green', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>YELLOW</strong></p>`, correct_response: 'y', word: 'yellow', color: 'yellow', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>YELLOW</strong></p>`, correct_response: 'b', word: 'yellow', color: 'blue', category: 'color'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>YELLOW</strong></p>`, correct_response: 'r', word: 'yellow', color: 'red', category: 'color'}
]
var pool2_neutral = [
    /* Neutral */
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>PAPER</strong></p>`, correct_response: 'r', word: 'paper', color: 'red', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>PAPER</strong></p>`, correct_response: 'b', word: 'paper', color: 'blue', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>PAPER</strong></p>`, correct_response: 'g', word: 'paper', color: 'green', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>PAPER</strong></p>`, correct_response: 'y', word: 'paper', color: 'yellow', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>TABLE</strong></p>`, correct_response: 'r', word: 'table', color: 'red', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>TABLE</strong></p>`, correct_response: 'b', word: 'table', color: 'blue', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>TABLE</strong></p>`, correct_response: 'g', word: 'table', color: 'green', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>TABLE</strong></p>`, correct_response: 'y', word: 'table', color: 'yellow', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>CHAIR</strong></p>`, correct_response: 'r', word: 'chair', color: 'red', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>CHAIR</strong></p>`, correct_response: 'b', word: 'chair', color: 'blue', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>CHAIR</strong></p>`, correct_response: 'g', word: 'chair', color: 'green', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>CHAIR</strong></p>`, correct_response: 'y', word: 'chair', color: 'yellow', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>CABINET</strong></p>`, correct_response: 'r', word: 'cabinet', color: 'red', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>CABINET</strong></p>`, correct_response: 'b', word: 'cabinet', color: 'blue', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>CABINET</strong></p>`, correct_response: 'g', word: 'cabinet', color: 'green', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>CABINET</strong></p>`, correct_response: 'y', word: 'cabinet', color: 'yellow', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>FOOT</strong></p>`, correct_response: 'r', word: 'foot', color: 'red', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>FOOT</strong></p>`, correct_response: 'b', word: 'foot', color: 'blue', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>FOOT</strong></p>`, correct_response: 'g', word: 'foot', color: 'green', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>FOOT</strong></p>`, correct_response: 'y', word: 'foot', color: 'yellow', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>LOCKER</strong></p>`, correct_response: 'r', word: 'locker', color: 'red', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>LOCKER</strong></p>`, correct_response: 'b', word: 'locker', color: 'blue', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>LOCKER</strong></p>`, correct_response: 'g', word: 'locker', color: 'green', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>LOCKER</strong></p>`, correct_response: 'y', word: 'locker', color: 'yellow', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>KETTLE</strong></p>`, correct_response: 'r', word: 'kettle', color: 'red', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>KETTLE</strong></p>`, correct_response: 'b', word: 'kettle', color: 'blue', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>KETTLE</strong></p>`, correct_response: 'g', word: 'kettle', color: 'green', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>KETTLE</strong></p>`, correct_response: 'y', word: 'kettle', color: 'yellow', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>TAXI</strong></p>`, correct_response: 'r', word: 'taxi', color: 'red', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>TAXI</strong></p>`, correct_response: 'b', word: 'taxi', color: 'blue', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>TAXI</strong></p>`, correct_response: 'g', word: 'taxi', color: 'green', category: 'neutral'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>TAXI</strong></p>`, correct_response: 'y', word: 'taxi', color: 'yellow', category: 'neutral'}
];




/* create a variable that specifies the aspects of the word trials (what to click, how long it lasts) and save the relevant trial-level data. This doesn't yet
have actual stimuli pulled into it, it's just the mechanics of the trials */
var test = {
    type: "html-keyboard-response",
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: ['r', 'b', 'g', 'y'], /* only valid keyboard presses are r, b, g or y */
    trial_duration: 5000, /* if nothing is pressed, move on to next after 5000ms */
    /* record the relevant variables that each item of the "words" array is tagged with */
    data: {
        task: 'response', /* label the word trials as response trials to differentiate from fixation trials */ 
        correct_response: jsPsych.timelineVariable('correct_response'),
        word: jsPsych.timelineVariable('word'),
        color: jsPsych.timelineVariable('color'),
        category: jsPsych.timelineVariable('category')
    }
}


/* this creates a nested timeline where the individual items from the array of words (timeline_variables) are iterated with the fixation cross and all of that
becomes itself a block on the larger timeline -- make one nested timeline for each of the blocks (each stroop category) */
var soc_neg_procedure = {
    timeline: [fixation, test], /* intersperse word and fixation trials */
    timeline_variables: jsPsych.randomization.shuffle(pool1_soc_neg) /* randomize the order of appearance of words within the block*/
}
var soc_pos_procedure = {
    timeline: [fixation, test], /* intersperse word and fixation trials */
    timeline_variables: jsPsych.randomization.shuffle(pool1_soc_pos) /* randomize the order of appearance of words within the block */
}
var emo_pos_procedure = {
    timeline: [fixation, test], /* intersperse word and fixation trials */
    timeline_variables: jsPsych.randomization.shuffle(pool1_emo_pos) /* randomize the order of appearance of words within the block */
}
var emo_neg_procedure = {
    timeline: [fixation, test], /* intersperse word and fixation trials */
    timeline_variables: jsPsych.randomization.shuffle(pool1_emo_neg) /* randomize the order of appearance of words within the block */
}
var color_procedure = {
    timeline: [fixation, test], /* intersperse word and fixation trials */
    timeline_variables: jsPsych.randomization.shuffle(pool1_color) /* randomize the order of appearance of words within the block */
}
var neutral_procedure = {
    timeline: [fixation, test], /* intersperse word and fixation trials */
    timeline_variables: jsPsych.randomization.shuffle(pool1_neutral) /* randomize the order of appearance of words within the block */
}


/* attempt to get the blocks randomized */
/* create an array of arrays to get all the blocks into one array */
var blocks = [soc_neg_procedure, soc_pos_procedure, emo_neg_procedure, emo_pos_procedure, color_procedure, neutral_procedure]
/* shuffle the order of the blocks */
var random_order = jsPsych.randomization.shuffle(blocks);


/* create another level of nested timelines where we intersperse the blocks of words with the sleep questionnaire items */
var real_trials = {
    timeline: [random_order[0], sleep15, sleep1, sleep2, sleep3, wait, ready, random_order[1], sleep16, sleep4, sleep5, sleep6, wait, ready, random_order[2], sleep17, sleep7, sleep8, sleep9, wait, ready, random_order[3], sleep18, sleep10, sleep11, sleep12, wait, ready, random_order[4],sleep19, sleep13, sleep14, sleep20, wait, ready, random_order[5]]
}
/* add the real trials with their nested timelines to the larger first-level timeline */
timeline.push(real_trials);
