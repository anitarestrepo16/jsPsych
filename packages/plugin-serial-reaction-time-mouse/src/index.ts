import { JsPsych, JsPsychPlugin, TrialType, parameterType } from "jspsych";

const info = <const>{
  name: "serial-reaction-time-mouse",
  parameters: {
    target: {
      type: parameterType.INT,
      pretty_name: "Target",
      array: true,
      default: undefined,
      description:
        "The location of the target. The array should be the [row, column] of the target.",
    },
    grid: {
      type: parameterType.BOOL,
      pretty_name: "Grid",
      array: true,
      default: [[1, 1, 1, 1]],
      description: "This array represents the grid of boxes shown on the screen.",
    },
    grid_square_size: {
      type: parameterType.INT,
      pretty_name: "Grid square size",
      default: 100,
      description: "The width and height in pixels of each square in the grid.",
    },
    target_color: {
      type: parameterType.STRING,
      pretty_name: "Target color",
      default: "#999",
      description: "The color of the target square.",
    },
    response_ends_trial: {
      type: parameterType.BOOL,
      pretty_name: "Response ends trial",
      default: true,
      description: "If true, the trial ends after a mouse click.",
    },
    pre_target_duration: {
      type: parameterType.INT,
      pretty_name: "Pre-target duration",
      default: 0,
      description:
        "The number of milliseconds to display the grid before the target changes color.",
    },
    trial_duration: {
      type: parameterType.INT,
      pretty_name: "Trial duration",
      default: null,
      description: "How long to show the trial",
    },
    fade_duration: {
      type: parameterType.INT,
      pretty_name: "Fade duration",
      default: null,
      description:
        "If a positive number, the target will progressively change color at the start of the trial, with the transition lasting this many milliseconds.",
    },
    allow_nontarget_responses: {
      type: parameterType.BOOL,
      pretty_name: "Allow nontarget response",
      default: false,
      description: "If true, then user can make nontarget response.",
    },
    prompt: {
      type: parameterType.STRING,
      pretty_name: "Prompt",
      default: null,
      description: "Any content here will be displayed below the stimulus",
    }
  }
};

type Info = typeof info;

/**
 * jspsych-serial-reaction-time
 * Josh de Leeuw
 *
 * plugin for running a serial reaction time task with mouse responses
 *
 * documentation: docs.jspsych.org
 *
 **/
class SerialReactionTimeMousePlugin implements JsPsychPlugin<Info> {
  info = info;

  constructor(private jsPsych: JsPsych) {};

  trial(display_element: HTMLElement, trial: TrialType<Info>) {
    var startTime = -1;
    var response = {
      rt: null,
      row: null,
      column: null,
    };

    // display stimulus
    var stimulus = this.stimulus(trial.grid, trial.grid_square_size);
    display_element.innerHTML = stimulus;

    if (trial.pre_target_duration <= 0) {
      showTarget();
    } else {
      this.jsPsych.pluginAPI.setTimeout(function () {
        showTarget();
      }, trial.pre_target_duration);
    }

    //show prompt if there is one
    if (trial.prompt !== null) {
      display_element.insertAdjacentHTML("beforeend", trial.prompt);
    }

    function showTarget() {
      var resp_targets;
      if (!trial.allow_nontarget_responses) {
        resp_targets = [
          display_element.querySelector(
            "#jspsych-serial-reaction-time-stimulus-cell-" + trial.target[0] + "-" + trial.target[1]
          ),
        ];
      } else {
        resp_targets = display_element.querySelectorAll(
          ".jspsych-serial-reaction-time-stimulus-cell"
        );
      }
      for (var i = 0; i < resp_targets.length; i++) {
        resp_targets[i].addEventListener("mousedown", function (e) {
          if (startTime == -1) {
            return;
          } else {
            var info = <any>{};
            info.row = e.currentTarget.getAttribute("data-row");
            info.column = e.currentTarget.getAttribute("data-column");
            info.rt = performance.now() - startTime;
            after_response(info);
          }
        });
      }

      startTime = performance.now();

      if (trial.fade_duration == null) {
        display_element.querySelector<HTMLElement>(
          "#jspsych-serial-reaction-time-stimulus-cell-" + trial.target[0] + "-" + trial.target[1]
        ).style.backgroundColor = trial.target_color;
      } else {
        display_element.querySelector<HTMLElement>(
          "#jspsych-serial-reaction-time-stimulus-cell-" + trial.target[0] + "-" + trial.target[1]
        ).style.transition = "background-color " + trial.fade_duration;
        display_element.querySelector<HTMLElement>(
          "#jspsych-serial-reaction-time-stimulus-cell-" + trial.target[0] + "-" + trial.target[1]
        ).style.backgroundColor = trial.target_color;
      }

      if (trial.trial_duration !== null) {
        this.jsPsych.pluginAPI.setTimeout(endTrial, trial.trial_duration);
      }
    }

    function endTrial() {
      // kill any remaining setTimeout handlers
      this.jsPsych.pluginAPI.clearAllTimeouts();

      // gather the data to store for the trial
      var trial_data = {
        rt: response.rt,
        grid: trial.grid,
        target: trial.target,
        response: [parseInt(response.row, 10), parseInt(response.column, 10)],
        correct: response.row == trial.target[0] && response.column == trial.target[1],
      };

      // clear the display
      display_element.innerHTML = "";

      // move on to the next trial
      this.jsPsych.finishTrial(trial_data);
    }

    // function to handle responses by the subject
    function after_response(info) {
      // only record first response
      response = response.rt == null ? info : response;

      if (trial.response_ends_trial) {
        endTrial();
      }
    }
  };

  stimulus(grid, square_size: number, target?: number[], target_color?: string, labels?) {
    var stimulus =
      "<div id='jspsych-serial-reaction-time-stimulus' style='margin:auto; display: table; table-layout: fixed; border-spacing:" +
      square_size / 4 +
      "px'>";
    for (var i = 0; i < grid.length; i++) {
      stimulus +=
        "<div class='jspsych-serial-reaction-time-stimulus-row' style='display:table-row;'>";
      for (var j = 0; j < grid[i].length; j++) {
        var classname = "jspsych-serial-reaction-time-stimulus-cell";

        stimulus +=
          "<div class='" +
          classname +
          "' id='jspsych-serial-reaction-time-stimulus-cell-" +
          i +
          "-" +
          j +
          "' " +
          "data-row=" +
          i +
          " data-column=" +
          j +
          " " +
          "style='width:" +
          square_size +
          "px; height:" +
          square_size +
          "px; display:table-cell; vertical-align:middle; text-align: center; cursor: pointer; font-size:" +
          square_size / 2 +
          "px;";
        if (grid[i][j] == 1) {
          stimulus += "border: 2px solid black;";
        }
        if (typeof target !== "undefined" && target[0] == i && target[1] == j) {
          stimulus += "background-color: " + target_color + ";";
        }
        stimulus += "'>";
        if (typeof labels !== "undefined" && labels[i][j] !== false) {
          stimulus += labels[i][j];
        }
        stimulus += "</div>";
      }
      stimulus += "</div>";
    }
    stimulus += "</div>";

    return stimulus;
  };
}

export default SerialReactionTimeMousePlugin;
