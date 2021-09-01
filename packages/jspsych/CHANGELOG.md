# jspsych

## 7.0.0
### Major Changes



- [#2066](https://github.com/jspsych/jsPsych/pull/2066) [`918a50b1`](https://github.com/jspsych/jsPsych/commit/918a50b17d9e125b5fd2ec8e17aee7a307bd68f7) Thanks [@jodeleeuw](https://github.com/jodeleeuw), [@becky-gilbert](https://github.com/becky-gilbert), [@bjoluc](https://github.com/bjoluc)! - Decompose jsPsych into multiple NPM packages (details and upgrading instructions go here)



- [#2100](https://github.com/jspsych/jsPsych/pull/2100) [`b0d77e7`](https://github.com/jspsych/jsPsych/commit/b0d77e79aaa7140de4bac37a70af69467478aee2) Thanks [@jodeleeuw](https://github.com/jodeleeuw)! - Renamed all getter-type functions to have `get` prefix to make it clearer what the role of these functions are. The following were affected:
  - `currentTimelineNodeID` -> `getCurrentTimelineNodeID`
  - `progress` -> `getProgress`
  - `startTime` -> `getStartTime`
  - `totalTime` -> `getTotalTime`
  - `currentTrial` -> `getCurrentTrial`
  - `initSettings` -> `getInitSettings`
  - `allTimelineVariables` -> `getAllTimelineVariables`

### Minor Changes



- [#2121](https://github.com/jspsych/jsPsych/pull/2121) [`03517a0`](https://github.com/jspsych/jsPsych/commit/03517a09c826d935114649174f4f1dc239bf36ea) Thanks [@zimmerrol](https://github.com/zimmerrol)! - Updated `turk.submitToTurk()` to use `POST` instead of `GET` to avoid errors where too much data is transmitted.
