import { JsPsych, JsPsychPlugin, TrialType, parameterType } from "jspsych";

const info = <const>{
  name: "call-function",
  parameters: {
    /* Function to call */
    func: {
      type: parameterType.FUNCTION,
      pretty_name: "Function",
      default: undefined
    },
    /* Is the function call asynchronous? */
    async: {
      type: parameterType.BOOL,
      pretty_name: "Asynchronous",
      default: false
    }
  }
};

type Info = typeof info;

/**
 * jspsych-call-function
 * plugin for calling an arbitrary function during a jspsych experiment
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 **/

class CallFunctionPlugin implements JsPsychPlugin<Info> {
  info = info;

  constructor(private jsPsych: JsPsych) {}

  trial(display_element: HTMLElement, trial: TrialType<Info>) {
    //trial.post_trial_gap = 0;  // TO DO: TS error: number not assignable to type any[]. I don't think this param should be an array..?
    var return_val;

    const end_trial = () => {
      var trial_data = {
        value: return_val,
      };

      this.jsPsych.finishTrial(trial_data);
    }

    if (trial.async) {
      var done = function (data) {
        return_val = data;
        end_trial();
      };
      trial.func(done);
    } else {
      return_val = trial.func();
      end_trial();
    }
  }
}

export default CallFunctionPlugin;
