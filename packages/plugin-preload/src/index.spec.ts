import audioKeyboardResponse from "@jspsych/plugin-audio-keyboard-response";
import imageKeyboardResponse from "@jspsych/plugin-image-keyboard-response";
import videoKeyboardResponse from "@jspsych/plugin-video-keyboard-response";
import { JsPsych, initJsPsych } from "jspsych";
import { startTimeline } from "jspsych/tests/utils";

import preloadPlugin from ".";

describe("preload plugin", () => {
  let jsPsych: JsPsych;
  let pluginAPI: JsPsych["pluginAPI"];

  beforeEach(() => {
    jsPsych = initJsPsych();
    pluginAPI = jsPsych.pluginAPI;
  });

  describe("auto_preload", async () => {
    test("auto_preload method works with simple timeline and image stimulus", async () => {
      const spy = jest.spyOn(pluginAPI, "preloadImages").mockImplementation((x, cb) => {
        cb();
      });

      var preload = {
        type: preloadPlugin,
        auto_preload: true,
      };

      const { getHTML } = await startTimeline([
        {
          type: require("@jspsych/plugin-image-keyboard-response").default,
          stimulus: "img/foo.png",
          render_on_canvas: false,
        },
      ]);

      jsPsych.init({
        timeline: [preload, trial],
      });

      expect(spy.mock.calls[0][0]).toStrictEqual(["img/foo.png"]);
    });

    test("auto_preload method works with simple timeline and audio stimulus", async () => {
      const spy = jest.spyOn(pluginAPI, "preloadAudio").mockImplementation((x, cb) => {
        cb();
      });

      var preload = {
        type: preloadPlugin,
        auto_preload: true,
      };

      const { getHTML } = await startTimeline([
        {
          type: audioKeyboardResponse,
          stimulus: "sound/foo.mp3",
        },
      ]);

      jsPsych.init({
        timeline: [preload, trial],
      });

      expect(spy.mock.calls[0][0]).toStrictEqual(["sound/foo.mp3"]);
    });

    test("auto_preload method works with simple timeline and video stimulus", async () => {
      const spy = jest.spyOn(pluginAPI, "preloadVideo").mockImplementation((x, cb) => {
        cb();
      });

      var preload = {
        type: preloadPlugin,
        auto_preload: true,
      };

      const { getHTML } = await startTimeline([
        {
          type: videoKeyboardResponse,
          stimulus: "video/foo.mp4",
        },
      ]);

      jsPsych.init({
        timeline: [preload, trial],
      });

      expect(spy.mock.calls[0][0]).toStrictEqual(["video/foo.mp4"]);
    });

    test("auto_preload method works with nested timeline", async () => {
      const spy = jest.spyOn(pluginAPI, "preloadImages").mockImplementation((x, cb) => {
        cb();
      });

      var preload = {
        type: preloadPlugin,
        auto_preload: true,
      };

      const { getHTML } = await startTimeline([
        {
          type: imageKeyboardResponse,
          render_on_canvas: false,
          timeline: [{ stimulus: "img/foo.png" }],
        },
      ]);

      jsPsych.init({
        timeline: [preload, trial],
      });

      expect(spy.mock.calls[0][0]).toStrictEqual(["img/foo.png"]);
    });

    test("auto_preload method works with looping timeline", async () => {
      const spy = jest.spyOn(pluginAPI, "preloadImages").mockImplementation((x, cb) => {
        cb();
      });

      var preload = {
        type: preloadPlugin,
        auto_preload: true,
      };

      const { getHTML } = await startTimeline([
        {
          type: imageKeyboardResponse,
          stimulus: "img/foo.png",
          render_on_canvas: false,
        },
      ]);

      var count = 0;
      var loop = {
        timeline: [trial],
        loop_function: function () {
          if (count == 0) {
            return true;
          } else {
            return false;
          }
        },
      };

      jsPsych.init({
        timeline: [preload, loop],
      });

      expect(spy.mock.calls[0][0]).toStrictEqual(["img/foo.png"]);
    });

    test("auto_preload method works with conditional timeline", async () => {
      const spy = jest.spyOn(pluginAPI, "preloadImages").mockImplementation((x, cb) => {
        cb();
      });

      var preload = {
        type: preloadPlugin,
        auto_preload: true,
      };

      const { getHTML } = await startTimeline([
        {
          type: imageKeyboardResponse,
          stimulus: "img/foo.png",
          render_on_canvas: false,
        },
      ]);

      var count = 0;
      var conditional = {
        timeline: [trial],
        conditional_function: function () {
          if (count == 0) {
            return true;
          } else {
            return false;
          }
        },
      };

      jsPsych.init({
        timeline: [preload, conditional],
      });

      expect(spy.mock.calls[0][0]).toStrictEqual(["img/foo.png"]);
    });

    test("auto_preload method works with timeline variables when stim is statically defined in trial object", async () => {
      const spy = jest.spyOn(pluginAPI, "preloadImages").mockImplementation((x, cb) => {
        cb();
      });

      var preload = {
        type: preloadPlugin,
        auto_preload: true,
      };

      const { getHTML } = await startTimeline([
        {
          type: imageKeyboardResponse,
          stimulus: "img/foo.png",
          render_on_canvas: false,
          data: jsPsych.timelineVariable("data"),
        },
      ]);

      var trial_procedure = {
        timeline: [trial],
        timeline_variables: [
          { data: { trial: 1 } },
          { data: { trial: 2 } },
          { data: { trial: 3 } },
        ],
      };

      jsPsych.init({
        timeline: [preload, trial_procedure],
      });

      expect(spy.mock.calls[0][0]).toStrictEqual(["img/foo.png"]);
    });
  });

  describe("trials parameter", async () => {
    test("trials parameter works with simple timeline", async () => {
      const spy = jest.spyOn(pluginAPI, "preloadImages").mockImplementation((x, cb) => {
        cb();
      });

      const { getHTML } = await startTimeline([
        {
          type: imageKeyboardResponse,
          stimulus: "img/foo.png",
          render_on_canvas: false,
        },
      ]);

      var preload = {
        type: preloadPlugin,
        trials: [trial],
      };

      jsPsych.init({
        timeline: [preload],
      });

      expect(spy.mock.calls[0][0]).toStrictEqual(["img/foo.png"]);
    });

    test("trials parameter works with looping timeline", async () => {
      const spy = jest.spyOn(pluginAPI, "preloadImages").mockImplementation((x, cb) => {
        cb();
      });

      const { getHTML } = await startTimeline([
        {
          type: imageKeyboardResponse,
          stimulus: "img/foo.png",
          render_on_canvas: false,
        },
      ]);

      var count = 0;
      var loop = {
        timeline: [trial],
        loop_function: function () {
          if (count == 0) {
            return true;
          } else {
            return false;
          }
        },
      };

      var preload = {
        type: preloadPlugin,
        trials: [loop],
      };

      jsPsych.init({
        timeline: [preload],
      });

      expect(spy.mock.calls[0][0]).toStrictEqual(["img/foo.png"]);
    });

    test("trials parameter works with conditional timeline", async () => {
      const spy = jest.spyOn(pluginAPI, "preloadImages").mockImplementation((x, cb) => {
        cb();
      });

      const { getHTML } = await startTimeline([
        {
          type: imageKeyboardResponse,
          stimulus: "img/foo.png",
          render_on_canvas: false,
        },
      ]);

      var count = 0;
      var conditional = {
        timeline: [trial],
        conditional_function: function () {
          if (count == 0) {
            return true;
          } else {
            return false;
          }
        },
      };

      var preload = {
        type: preloadPlugin,
        trials: [conditional],
      };

      jsPsych.init({
        timeline: [preload],
      });

      expect(spy.mock.calls[0][0]).toStrictEqual(["img/foo.png"]);
    });

    test("trials parameter works with timeline variables when stim is statically defined in trial object", async () => {
      const spy = jest.spyOn(pluginAPI, "preloadImages").mockImplementation((x, cb) => {
        cb();
      });

      const { getHTML } = await startTimeline([
        {
          type: imageKeyboardResponse,
          stimulus: "img/foo.png",
          render_on_canvas: false,
          data: jsPsych.timelineVariable("data"),
        },
      ]);

      var trial_procedure = {
        timeline: [trial],
        timeline_variables: [
          { data: { trial: 1 } },
          { data: { trial: 2 } },
          { data: { trial: 3 } },
        ],
      };

      var preload = {
        type: preloadPlugin,
        trials: [trial_procedure],
      };

      jsPsych.init({
        timeline: [preload],
      });

      expect(spy.mock.calls[0][0]).toStrictEqual(["img/foo.png"]);
    });
  });

  describe("calls to pluginAPI preload functions", async () => {
    test("auto_preload, trials, and manual preload array parameters can be used together", async () => {
      const spy = jest.spyOn(pluginAPI, "preloadImages").mockImplementation((x, cb) => {
        cb();
      });

      var trial_1 = {
        type: imageKeyboardResponse,
        stimulus: "img/foo.png",
        render_on_canvas: false,
      };

      var trial_2 = {
        type: imageKeyboardResponse,
        stimulus: "img/bar.png",
        render_on_canvas: false,
      };

      var preload = {
        type: preloadPlugin,
        auto_preload: true,
        trials: [trial_2],
        images: ["img/fizz.png"],
      };

      jsPsych.init({
        timeline: [preload, trial_1],
      });

      expect(spy.mock.calls.length).toBe(1);
      expect(spy.mock.calls[0][0].length).toBe(3);
      expect(spy.mock.calls[0][0]).toContain("img/foo.png");
      expect(spy.mock.calls[0][0]).toContain("img/bar.png");
      expect(spy.mock.calls[0][0]).toContain("img/fizz.png");
    });

    test("plugin only attempts to load duplicate files once", async () => {
      const spy = jest.spyOn(pluginAPI, "preloadImages").mockImplementation((x, cb) => {
        cb();
      });

      var trial_1 = {
        type: imageKeyboardResponse,
        stimulus: "img/foo.png",
        render_on_canvas: false,
      };

      var trial_2 = {
        type: imageKeyboardResponse,
        stimulus: "img/foo.png",
        render_on_canvas: false,
      };

      var preload = {
        type: preloadPlugin,
        trials: [trial_2],
        images: ["img/foo.png"],
      };

      jsPsych.init({
        timeline: [preload, trial_1],
      });

      expect(spy.mock.calls.length).toBe(1);
      expect(spy.mock.calls[0][0]).toStrictEqual(["img/foo.png"]);
    });
  });

  describe("continue_after_error and error messages", async () => {
    test("experiment continues when image loads successfully", async () => {
      jest
        .spyOn(pluginAPI, "preloadImages")
        .mockImplementation((x, cb_complete, cb_load, cb_error) => {
          cb_load();
          cb_complete();
        });

      var preload = {
        type: preloadPlugin,
        auto_preload: true,
        error_message: "foo",
        max_load_time: 100,
      };

      const { getHTML } = await startTimeline([
        {
          type: imageKeyboardResponse,
          stimulus: "image.png",
          render_on_canvas: false,
        },
      ]);

      jsPsych.init({
        timeline: [preload, trial],
      });

      expect(getHTML()).toMatch(
        '<img src="image.png" id="jspsych-image-keyboard-response-stimulus"'
      );
    });

    test("error_message is shown when continue_after_error is false and files fail", async () => {
      jest
        .spyOn(pluginAPI, "preloadImages")
        .mockImplementation((x, cb_complete, cb_load, cb_error) => {
          cb_error({
            source: x,
            error: {},
          });
        });

      var preload = {
        type: preloadPlugin,
        auto_preload: true,
        error_message: "foo",
        max_load_time: 100,
        on_error: function (e) {
          expect(e).toContain("img/bar.png");
        },
      };

      const { getHTML } = await startTimeline([
        {
          type: imageKeyboardResponse,
          stimulus: "img/bar.png",
          render_on_canvas: false,
        },
      ]);

      jsPsych.init({
        timeline: [preload, trial],
      });

      expect(getHTML()).toMatch("foo");
    });

    test("error_message is shown when continue_after_error is false and loading times out", async () => {
      jest.useFakeTimers();

      var mock_fn = jest.fn(function (x) {
        return x;
      });

      jest
        .spyOn(pluginAPI, "preloadImages")
        .mockImplementation((x, cb_complete, cb_load, cb_error) => {
          // don't return anything here to simulate waiting forever for image to load
        });

      var preload = {
        type: preloadPlugin,
        auto_preload: true,
        error_message: "foo",
        max_load_time: 100,
        on_error: function (e) {
          mock_fn(e);
        },
      };

      const { getHTML } = await startTimeline([
        {
          type: imageKeyboardResponse,
          stimulus: "blue.png",
          render_on_canvas: false,
        },
      ]);

      jsPsych.init({
        timeline: [preload, trial],
      });

      jest.advanceTimersByTime(101);

      expect(mock_fn).toHaveBeenCalledWith("timeout");
      expect(getHTML()).toMatch("foo");
    });

    test("experiment continues when continue_after_error is true and files fail", async () => {
      var mock_fn = jest.fn(function (x) {
        return x;
      });
      jest
        .spyOn(pluginAPI, "preloadImages")
        .mockImplementation((x, cb_complete, cb_load, cb_error) => {
          cb_error({
            source: x,
            error: {},
          });
        });

      var preload = {
        type: preloadPlugin,
        images: ["img/foo.png"],
        error_message: "bar",
        max_load_time: null,
        continue_after_error: true,
        on_error: function (e) {
          mock_fn("loading failed");
        },
      };

      const { getHTML } = await startTimeline([
        {
          type: imageKeyboardResponse,
          stimulus: "blue.png",
          render_on_canvas: false,
        },
      ]);

      jsPsych.init({
        timeline: [preload, trial],
      });

      expect(mock_fn).toHaveBeenCalledWith("loading failed");
      expect(getHTML()).toMatch(
        '<img src="blue.png" id="jspsych-image-keyboard-response-stimulus"'
      );
    });

    test("experiment continues when continue_after_error is true and loading times out", async () => {
      jest.useFakeTimers();

      var mock_fn = jest.fn(function (x) {
        return x;
      });
      jest
        .spyOn(pluginAPI, "preloadImages")
        .mockImplementation((x, cb_complete, cb_load, cb_error) => {
          // don't return anything here to simulate waiting forever for image to load
        });

      var preload = {
        type: preloadPlugin,
        auto_preload: true,
        error_message: "bar",
        max_load_time: 100,
        continue_after_error: true,
        on_error: function (e) {
          mock_fn(e);
        },
      };

      const { getHTML } = await startTimeline([
        {
          type: imageKeyboardResponse,
          stimulus: "../media/blue.png",
          render_on_canvas: false,
        },
      ]);

      jsPsych.init({
        timeline: [preload, trial],
      });

      jest.advanceTimersByTime(101);

      expect(mock_fn).toHaveBeenCalledWith("timeout");
      expect(getHTML()).toMatch(
        '<img src="../media/blue.png" id="jspsych-image-keyboard-response-stimulus"'
      );
    });

    test("detailed error message is shown when continue_after_error is false and show_detailed_errors is true", async () => {
      var mock_fn = jest.fn(function (x) {
        return x;
      });
      jest
        .spyOn(pluginAPI, "preloadImages")
        .mockImplementation((x, cb_complete, cb_load, cb_error) => {
          cb_error({
            source: x,
            error: {},
          });
        });

      var preload = {
        type: preloadPlugin,
        images: ["img/foo.png"],
        error_message: "bar",
        show_detailed_errors: true,
        on_error: function (e) {
          mock_fn("loading failed");
        },
      };

      jsPsych.init({
        timeline: [preload],
      });

      expect(mock_fn).toHaveBeenCalledWith("loading failed");
      expect(getHTML()).toMatch("Error details");
    });
  });

  describe("display while loading", async () => {
    test("custom loading message is shown above progress bar if specified", async () => {
      var preload = {
        type: preloadPlugin,
        images: ["img/foo.png"],
        message: "bar",
        max_load_time: 100,
      };

      jsPsych.init({
        timeline: [preload],
      });

      expect(getHTML()).toMatch("bar");
      expect(getHTML()).toMatch('<div id="jspsych-loading-progress-bar-container');
    });

    test("progress bar is shown without message by default", async () => {
      var preload = {
        type: preloadPlugin,
        images: ["img/foo.png"],
        max_load_time: 100,
      };

      jsPsych.init({
        timeline: [preload],
      });

      expect(getHTML()).toMatch('<div id="jspsych-loading-progress-bar-container');
    });

    test("progress bar is not shown if show_progress_bar is false", async () => {
      var preload = {
        type: preloadPlugin,
        images: ["img/foo.png"],
        show_progress_bar: false,
        max_load_time: 100,
      };

      jsPsych.init({
        timeline: [preload],
      });

      expect(getHTML()).not.toMatch('<div id="jspsych-loading-progress-bar-container');
      expect(getHTML()).toMatch("");
    });
  });

  describe("on_success and on_error parameters", async () => {
    test("on_error/on_success callbacks are called during preload trial after each loading success/error", async () => {
      var mock_fn = jest.fn(function (x) {
        return x;
      });
      jest
        .spyOn(pluginAPI, "preloadImages")
        .mockImplementation((x, cb_complete, cb_load, cb_error) => {
          if (x.includes("blue.png")) {
            cb_load();
            cb_complete();
          } else {
            cb_error({
              source: x,
              error: {},
            });
          }
        });
      jest
        .spyOn(pluginAPI, "preloadVideo")
        .mockImplementation((x, cb_complete, cb_load, cb_error) => {
          cb_error({
            source: x,
            error: {},
          });
        });
      jest
        .spyOn(pluginAPI, "preloadAudio")
        .mockImplementation((x, cb_complete, cb_load, cb_error) => {
          cb_error({
            source: x,
            error: {},
          });
        });

      var preload_1 = {
        type: preloadPlugin,
        images: ["foo.png"],
        audio: ["bar.mp3"],
        video: ["buzz.mp4"],
        continue_after_error: true,
        on_error: function (e) {
          mock_fn("loading failed");
        },
        on_success: function (e) {
          mock_fn("loading succeeded");
        },
      };

      var preload_2 = {
        type: preloadPlugin,
        images: ["blue.png"],
        max_load_time: 100,
        on_error: function (e) {
          mock_fn("loading failed");
        },
        on_success: function (e) {
          mock_fn("loading succeeded");
        },
      };

      jsPsych.init({
        timeline: [preload_1, preload_2],
      });

      expect(mock_fn.mock.calls[0][0]).toBe("loading failed");
      expect(mock_fn.mock.calls[1][0]).toBe("loading failed");
      expect(mock_fn.mock.calls[2][0]).toBe("loading failed");
      expect(mock_fn.mock.calls[3][0]).toBe("loading succeeded");
    });

    test("on_error/on_success callbacks are not called after loading times out", async () => {
      var mock_fn = jest.fn(function (x) {
        return x;
      });
      var cancel_preload_spy = jest.spyOn(jsPsych.pluginAPI, "cancelPreloads");
      jest
        .spyOn(pluginAPI, "preloadImages")
        .mockImplementation((x, cb_complete, cb_load, cb_error) => {
          // empty to simulate timeout
        });
      jest
        .spyOn(pluginAPI, "preloadVideo")
        .mockImplementation((x, cb_complete, cb_load, cb_error) => {
          // empty to simulate timeout
        });
      jest
        .spyOn(pluginAPI, "preloadAudio")
        .mockImplementation((x, cb_complete, cb_load, cb_error) => {
          // empty to simulate timeout
        });
      jest.useFakeTimers();

      var preload = {
        type: preloadPlugin,
        images: ["img/foo.png", "blue.png"],
        audio: ["audio/bar.mp3"],
        video: ["video/buzz.mp4"],
        continue_after_error: true,
        max_load_time: 100,
        on_error: function (e) {
          if (e == "timeout") {
            mock_fn(e);
          } else {
            mock_fn("loading failed");
          }
        },
        on_success: function (e) {
          mock_fn("loading succeeded");
        },
      };

      jsPsych.init({
        timeline: [preload],
      });

      jest.advanceTimersByTime(101);

      expect(mock_fn).toHaveBeenCalledWith("timeout");
      expect(mock_fn).toHaveBeenLastCalledWith("timeout");
      expect(cancel_preload_spy).toHaveBeenCalled();
    });

    test("experiment stops with default error_message and on_error/on_success callbacks are not called after preload trial ends with error", async () => {
      var mock_fn = jest.fn(function (x) {
        return x;
      });
      var cancel_preload_spy = jest.spyOn(jsPsych.pluginAPI, "cancelPreloads");
      jest.useFakeTimers();
      jest
        .spyOn(pluginAPI, "preloadImages")
        .mockImplementation((x, cb_complete, cb_load, cb_error) => {
          if (x.includes("blue.png")) {
            cb_load();
            cb_complete();
          } else {
          }
        });
      jest
        .spyOn(pluginAPI, "preloadVideo")
        .mockImplementation((x, cb_complete, cb_load, cb_error) => {});
      jest
        .spyOn(pluginAPI, "preloadAudio")
        .mockImplementation((x, cb_complete, cb_load, cb_error) => {});

      var preload_1 = {
        type: preloadPlugin,
        images: ["img/foo.png"],
        audio: ["audio/bar.mp3"],
        video: ["video/buzz.mp4"],
        max_load_time: 100,
        on_error: function (e) {
          if (e == "timeout") {
            mock_fn(e);
          } else {
            mock_fn("loading failed");
          }
        },
        on_success: function (e) {
          mock_fn("loading succeeded");
        },
      };

      var preload_2 = {
        type: preloadPlugin,
        images: ["../media/blue.png"],
        max_load_time: 100,
        on_error: function (e) {
          mock_fn("loading failed");
        },
        on_success: function (e) {
          mock_fn("loading succeeded");
        },
      };

      jsPsych.init({
        timeline: [preload_1, preload_2],
      });

      jest.advanceTimersByTime(101);

      expect(mock_fn).toHaveBeenCalledWith("timeout");
      expect(mock_fn).toHaveBeenLastCalledWith("timeout");
      expect(getHTML()).toMatch("The experiment failed to load.");
      expect(cancel_preload_spy).toHaveBeenCalled();
    });
  });
});
