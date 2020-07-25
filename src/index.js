const getTargetEl = (el, nodeName = "SPAN") =>
  el.nodeName === nodeName
    ? el
    : el.parentElement
    ? getTargetEl(el.parentElement, nodeName)
    : undefined;

function createInput(options) {
  const input = document.createElement("input");
  input.className = options.inputClass || "insert-input";
  input.type = options.inputType || "text";
  input.value =
    typeof options.value === "function" ? options.value() : options.value;
  return input;
}

function createTextarea(options) {
  const textarea = document.createElement("textarea");
  textarea.className = options.inputClass || "insert-textarea";
  textarea.rows = options.rows || 1;
  textarea.value =
    typeof options.value === "function" ? options.value() : options.value;
  return textarea;
}

const targets = [];

function handle(el, binding) {
  const options = binding.value || {};

  const targetEl = getTargetEl(el, options.nodeName || "SPAN");

  if (targetEl) {
    let target = targets.find((v) => v.el === targetEl);
    if (!target) {
      target = {
        options,
        el: targetEl,
      };
      targets.push(target);
      let insertEl;
      targetEl.style.position = "relative";
      targetEl.addEventListener(options.type || "focus", () => {
        if (!insertEl) {
          insertEl =
            options.elType === "textarea"
              ? createTextarea(target.options)
              : createInput(target.options);
          targetEl.appendChild(insertEl);
          insertEl.focus();

          if (options.elType === "textarea") {
            insertEl.style.minHeight = insertEl.offsetHeight + "px";
            insertEl.onkeyup = (e) => {
              if (e && e.keyCode == 27) {
                e.target.blur();
              }
            };
          } else {
            insertEl.onkeyup = (e) => {
              if ((e && e.keyCode == 13) || e.keyCode == 27) {
                e.target.blur();
              }
            };
          }
          insertEl.onblur = () => {
            target.options.input && target.options.input(insertEl.value);
            targetEl.removeChild(insertEl);
            insertEl = undefined;
          };
        }
      });
    } else {
      target.options = options;
    }
  }
}

export default {
  inserted: handle,
  update: handle,
};
