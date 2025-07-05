"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/mqtt/build/lib/topic-alias-recv.js
var require_topic_alias_recv = __commonJS({
  "node_modules/mqtt/build/lib/topic-alias-recv.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var TopicAliasRecv = class {
      constructor(max) {
        this.aliasToTopic = {};
        this.max = max;
      }
      put(topic, alias) {
        if (alias === 0 || alias > this.max) {
          return false;
        }
        this.aliasToTopic[alias] = topic;
        this.length = Object.keys(this.aliasToTopic).length;
        return true;
      }
      getTopicByAlias(alias) {
        return this.aliasToTopic[alias];
      }
      clear() {
        this.aliasToTopic = {};
      }
    };
    exports2.default = TopicAliasRecv;
  }
});

// node_modules/readable-stream/lib/ours/primordials.js
var require_primordials = __commonJS({
  "node_modules/readable-stream/lib/ours/primordials.js"(exports2, module2) {
    "use strict";
    var AggregateError = class extends Error {
      constructor(errors) {
        if (!Array.isArray(errors)) {
          throw new TypeError(`Expected input to be an Array, got ${typeof errors}`);
        }
        let message = "";
        for (let i = 0; i < errors.length; i++) {
          message += `    ${errors[i].stack}
`;
        }
        super(message);
        this.name = "AggregateError";
        this.errors = errors;
      }
    };
    module2.exports = {
      AggregateError,
      ArrayIsArray(self2) {
        return Array.isArray(self2);
      },
      ArrayPrototypeIncludes(self2, el) {
        return self2.includes(el);
      },
      ArrayPrototypeIndexOf(self2, el) {
        return self2.indexOf(el);
      },
      ArrayPrototypeJoin(self2, sep) {
        return self2.join(sep);
      },
      ArrayPrototypeMap(self2, fn) {
        return self2.map(fn);
      },
      ArrayPrototypePop(self2, el) {
        return self2.pop(el);
      },
      ArrayPrototypePush(self2, el) {
        return self2.push(el);
      },
      ArrayPrototypeSlice(self2, start, end) {
        return self2.slice(start, end);
      },
      Error,
      FunctionPrototypeCall(fn, thisArgs, ...args) {
        return fn.call(thisArgs, ...args);
      },
      FunctionPrototypeSymbolHasInstance(self2, instance) {
        return Function.prototype[Symbol.hasInstance].call(self2, instance);
      },
      MathFloor: Math.floor,
      Number,
      NumberIsInteger: Number.isInteger,
      NumberIsNaN: Number.isNaN,
      NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
      NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
      NumberParseInt: Number.parseInt,
      ObjectDefineProperties(self2, props) {
        return Object.defineProperties(self2, props);
      },
      ObjectDefineProperty(self2, name, prop) {
        return Object.defineProperty(self2, name, prop);
      },
      ObjectGetOwnPropertyDescriptor(self2, name) {
        return Object.getOwnPropertyDescriptor(self2, name);
      },
      ObjectKeys(obj) {
        return Object.keys(obj);
      },
      ObjectSetPrototypeOf(target, proto) {
        return Object.setPrototypeOf(target, proto);
      },
      Promise,
      PromisePrototypeCatch(self2, fn) {
        return self2.catch(fn);
      },
      PromisePrototypeThen(self2, thenFn, catchFn) {
        return self2.then(thenFn, catchFn);
      },
      PromiseReject(err) {
        return Promise.reject(err);
      },
      PromiseResolve(val) {
        return Promise.resolve(val);
      },
      ReflectApply: Reflect.apply,
      RegExpPrototypeTest(self2, value) {
        return self2.test(value);
      },
      SafeSet: Set,
      String,
      StringPrototypeSlice(self2, start, end) {
        return self2.slice(start, end);
      },
      StringPrototypeToLowerCase(self2) {
        return self2.toLowerCase();
      },
      StringPrototypeToUpperCase(self2) {
        return self2.toUpperCase();
      },
      StringPrototypeTrim(self2) {
        return self2.trim();
      },
      Symbol,
      SymbolFor: Symbol.for,
      SymbolAsyncIterator: Symbol.asyncIterator,
      SymbolHasInstance: Symbol.hasInstance,
      SymbolIterator: Symbol.iterator,
      SymbolDispose: Symbol.dispose || Symbol("Symbol.dispose"),
      SymbolAsyncDispose: Symbol.asyncDispose || Symbol("Symbol.asyncDispose"),
      TypedArrayPrototypeSet(self2, buf, len) {
        return self2.set(buf, len);
      },
      Boolean,
      Uint8Array
    };
  }
});

// node_modules/readable-stream/lib/ours/util/inspect.js
var require_inspect = __commonJS({
  "node_modules/readable-stream/lib/ours/util/inspect.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      format(format, ...args) {
        return format.replace(/%([sdifj])/g, function(...[_unused, type]) {
          const replacement = args.shift();
          if (type === "f") {
            return replacement.toFixed(6);
          } else if (type === "j") {
            return JSON.stringify(replacement);
          } else if (type === "s" && typeof replacement === "object") {
            const ctor = replacement.constructor !== Object ? replacement.constructor.name : "";
            return `${ctor} {}`.trim();
          } else {
            return replacement.toString();
          }
        });
      },
      inspect(value) {
        switch (typeof value) {
          case "string":
            if (value.includes("'")) {
              if (!value.includes('"')) {
                return `"${value}"`;
              } else if (!value.includes("`") && !value.includes("${")) {
                return `\`${value}\``;
              }
            }
            return `'${value}'`;
          case "number":
            if (isNaN(value)) {
              return "NaN";
            } else if (Object.is(value, -0)) {
              return String(value);
            }
            return value;
          case "bigint":
            return `${String(value)}n`;
          case "boolean":
          case "undefined":
            return String(value);
          case "object":
            return "{}";
        }
      }
    };
  }
});

// node_modules/readable-stream/lib/ours/errors.js
var require_errors = __commonJS({
  "node_modules/readable-stream/lib/ours/errors.js"(exports2, module2) {
    "use strict";
    var { format, inspect } = require_inspect();
    var { AggregateError: CustomAggregateError } = require_primordials();
    var AggregateError = globalThis.AggregateError || CustomAggregateError;
    var kIsNodeError = Symbol("kIsNodeError");
    var kTypes = [
      "string",
      "function",
      "number",
      "object",
      // Accept 'Function' and 'Object' as alternative to the lower cased version.
      "Function",
      "Object",
      "boolean",
      "bigint",
      "symbol"
    ];
    var classRegExp = /^([A-Z][a-z0-9]*)+$/;
    var nodeInternalPrefix = "__node_internal_";
    var codes = {};
    function assert(value, message) {
      if (!value) {
        throw new codes.ERR_INTERNAL_ASSERTION(message);
      }
    }
    function addNumericalSeparator(val) {
      let res = "";
      let i = val.length;
      const start = val[0] === "-" ? 1 : 0;
      for (; i >= start + 4; i -= 3) {
        res = `_${val.slice(i - 3, i)}${res}`;
      }
      return `${val.slice(0, i)}${res}`;
    }
    function getMessage(key, msg, args) {
      if (typeof msg === "function") {
        assert(
          msg.length <= args.length,
          // Default options do not count.
          `Code: ${key}; The provided arguments length (${args.length}) does not match the required ones (${msg.length}).`
        );
        return msg(...args);
      }
      const expectedLength = (msg.match(/%[dfijoOs]/g) || []).length;
      assert(
        expectedLength === args.length,
        `Code: ${key}; The provided arguments length (${args.length}) does not match the required ones (${expectedLength}).`
      );
      if (args.length === 0) {
        return msg;
      }
      return format(msg, ...args);
    }
    function E(code, message, Base) {
      if (!Base) {
        Base = Error;
      }
      class NodeError extends Base {
        constructor(...args) {
          super(getMessage(code, message, args));
        }
        toString() {
          return `${this.name} [${code}]: ${this.message}`;
        }
      }
      Object.defineProperties(NodeError.prototype, {
        name: {
          value: Base.name,
          writable: true,
          enumerable: false,
          configurable: true
        },
        toString: {
          value() {
            return `${this.name} [${code}]: ${this.message}`;
          },
          writable: true,
          enumerable: false,
          configurable: true
        }
      });
      NodeError.prototype.code = code;
      NodeError.prototype[kIsNodeError] = true;
      codes[code] = NodeError;
    }
    function hideStackFrames(fn) {
      const hidden = nodeInternalPrefix + fn.name;
      Object.defineProperty(fn, "name", {
        value: hidden
      });
      return fn;
    }
    function aggregateTwoErrors(innerError, outerError) {
      if (innerError && outerError && innerError !== outerError) {
        if (Array.isArray(outerError.errors)) {
          outerError.errors.push(innerError);
          return outerError;
        }
        const err = new AggregateError([outerError, innerError], outerError.message);
        err.code = outerError.code;
        return err;
      }
      return innerError || outerError;
    }
    var AbortError = class extends Error {
      constructor(message = "The operation was aborted", options = void 0) {
        if (options !== void 0 && typeof options !== "object") {
          throw new codes.ERR_INVALID_ARG_TYPE("options", "Object", options);
        }
        super(message, options);
        this.code = "ABORT_ERR";
        this.name = "AbortError";
      }
    };
    E("ERR_ASSERTION", "%s", Error);
    E(
      "ERR_INVALID_ARG_TYPE",
      (name, expected, actual) => {
        assert(typeof name === "string", "'name' must be a string");
        if (!Array.isArray(expected)) {
          expected = [expected];
        }
        let msg = "The ";
        if (name.endsWith(" argument")) {
          msg += `${name} `;
        } else {
          msg += `"${name}" ${name.includes(".") ? "property" : "argument"} `;
        }
        msg += "must be ";
        const types = [];
        const instances = [];
        const other = [];
        for (const value of expected) {
          assert(typeof value === "string", "All expected entries have to be of type string");
          if (kTypes.includes(value)) {
            types.push(value.toLowerCase());
          } else if (classRegExp.test(value)) {
            instances.push(value);
          } else {
            assert(value !== "object", 'The value "object" should be written as "Object"');
            other.push(value);
          }
        }
        if (instances.length > 0) {
          const pos = types.indexOf("object");
          if (pos !== -1) {
            types.splice(types, pos, 1);
            instances.push("Object");
          }
        }
        if (types.length > 0) {
          switch (types.length) {
            case 1:
              msg += `of type ${types[0]}`;
              break;
            case 2:
              msg += `one of type ${types[0]} or ${types[1]}`;
              break;
            default: {
              const last = types.pop();
              msg += `one of type ${types.join(", ")}, or ${last}`;
            }
          }
          if (instances.length > 0 || other.length > 0) {
            msg += " or ";
          }
        }
        if (instances.length > 0) {
          switch (instances.length) {
            case 1:
              msg += `an instance of ${instances[0]}`;
              break;
            case 2:
              msg += `an instance of ${instances[0]} or ${instances[1]}`;
              break;
            default: {
              const last = instances.pop();
              msg += `an instance of ${instances.join(", ")}, or ${last}`;
            }
          }
          if (other.length > 0) {
            msg += " or ";
          }
        }
        switch (other.length) {
          case 0:
            break;
          case 1:
            if (other[0].toLowerCase() !== other[0]) {
              msg += "an ";
            }
            msg += `${other[0]}`;
            break;
          case 2:
            msg += `one of ${other[0]} or ${other[1]}`;
            break;
          default: {
            const last = other.pop();
            msg += `one of ${other.join(", ")}, or ${last}`;
          }
        }
        if (actual == null) {
          msg += `. Received ${actual}`;
        } else if (typeof actual === "function" && actual.name) {
          msg += `. Received function ${actual.name}`;
        } else if (typeof actual === "object") {
          var _actual$constructor;
          if ((_actual$constructor = actual.constructor) !== null && _actual$constructor !== void 0 && _actual$constructor.name) {
            msg += `. Received an instance of ${actual.constructor.name}`;
          } else {
            const inspected = inspect(actual, {
              depth: -1
            });
            msg += `. Received ${inspected}`;
          }
        } else {
          let inspected = inspect(actual, {
            colors: false
          });
          if (inspected.length > 25) {
            inspected = `${inspected.slice(0, 25)}...`;
          }
          msg += `. Received type ${typeof actual} (${inspected})`;
        }
        return msg;
      },
      TypeError
    );
    E(
      "ERR_INVALID_ARG_VALUE",
      (name, value, reason = "is invalid") => {
        let inspected = inspect(value);
        if (inspected.length > 128) {
          inspected = inspected.slice(0, 128) + "...";
        }
        const type = name.includes(".") ? "property" : "argument";
        return `The ${type} '${name}' ${reason}. Received ${inspected}`;
      },
      TypeError
    );
    E(
      "ERR_INVALID_RETURN_VALUE",
      (input, name, value) => {
        var _value$constructor;
        const type = value !== null && value !== void 0 && (_value$constructor = value.constructor) !== null && _value$constructor !== void 0 && _value$constructor.name ? `instance of ${value.constructor.name}` : `type ${typeof value}`;
        return `Expected ${input} to be returned from the "${name}" function but got ${type}.`;
      },
      TypeError
    );
    E(
      "ERR_MISSING_ARGS",
      (...args) => {
        assert(args.length > 0, "At least one arg needs to be specified");
        let msg;
        const len = args.length;
        args = (Array.isArray(args) ? args : [args]).map((a) => `"${a}"`).join(" or ");
        switch (len) {
          case 1:
            msg += `The ${args[0]} argument`;
            break;
          case 2:
            msg += `The ${args[0]} and ${args[1]} arguments`;
            break;
          default:
            {
              const last = args.pop();
              msg += `The ${args.join(", ")}, and ${last} arguments`;
            }
            break;
        }
        return `${msg} must be specified`;
      },
      TypeError
    );
    E(
      "ERR_OUT_OF_RANGE",
      (str, range, input) => {
        assert(range, 'Missing "range" argument');
        let received;
        if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
          received = addNumericalSeparator(String(input));
        } else if (typeof input === "bigint") {
          received = String(input);
          const limit = BigInt(2) ** BigInt(32);
          if (input > limit || input < -limit) {
            received = addNumericalSeparator(received);
          }
          received += "n";
        } else {
          received = inspect(input);
        }
        return `The value of "${str}" is out of range. It must be ${range}. Received ${received}`;
      },
      RangeError
    );
    E("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error);
    E("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error);
    E("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error);
    E("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error);
    E("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error);
    E("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    E("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error);
    E("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error);
    E("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error);
    E("ERR_STREAM_WRITE_AFTER_END", "write after end", Error);
    E("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError);
    module2.exports = {
      AbortError,
      aggregateTwoErrors: hideStackFrames(aggregateTwoErrors),
      hideStackFrames,
      codes
    };
  }
});

// node_modules/event-target-shim/dist/event-target-shim.js
var require_event_target_shim = __commonJS({
  "node_modules/event-target-shim/dist/event-target-shim.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var privateData = /* @__PURE__ */ new WeakMap();
    var wrappers = /* @__PURE__ */ new WeakMap();
    function pd(event) {
      const retv = privateData.get(event);
      console.assert(
        retv != null,
        "'this' is expected an Event object, but got",
        event
      );
      return retv;
    }
    function setCancelFlag(data) {
      if (data.passiveListener != null) {
        if (typeof console !== "undefined" && typeof console.error === "function") {
          console.error(
            "Unable to preventDefault inside passive event listener invocation.",
            data.passiveListener
          );
        }
        return;
      }
      if (!data.event.cancelable) {
        return;
      }
      data.canceled = true;
      if (typeof data.event.preventDefault === "function") {
        data.event.preventDefault();
      }
    }
    function Event(eventTarget, event) {
      privateData.set(this, {
        eventTarget,
        event,
        eventPhase: 2,
        currentTarget: eventTarget,
        canceled: false,
        stopped: false,
        immediateStopped: false,
        passiveListener: null,
        timeStamp: event.timeStamp || Date.now()
      });
      Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });
      const keys = Object.keys(event);
      for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        if (!(key in this)) {
          Object.defineProperty(this, key, defineRedirectDescriptor(key));
        }
      }
    }
    Event.prototype = {
      /**
       * The type of this event.
       * @type {string}
       */
      get type() {
        return pd(this).event.type;
      },
      /**
       * The target of this event.
       * @type {EventTarget}
       */
      get target() {
        return pd(this).eventTarget;
      },
      /**
       * The target of this event.
       * @type {EventTarget}
       */
      get currentTarget() {
        return pd(this).currentTarget;
      },
      /**
       * @returns {EventTarget[]} The composed path of this event.
       */
      composedPath() {
        const currentTarget = pd(this).currentTarget;
        if (currentTarget == null) {
          return [];
        }
        return [currentTarget];
      },
      /**
       * Constant of NONE.
       * @type {number}
       */
      get NONE() {
        return 0;
      },
      /**
       * Constant of CAPTURING_PHASE.
       * @type {number}
       */
      get CAPTURING_PHASE() {
        return 1;
      },
      /**
       * Constant of AT_TARGET.
       * @type {number}
       */
      get AT_TARGET() {
        return 2;
      },
      /**
       * Constant of BUBBLING_PHASE.
       * @type {number}
       */
      get BUBBLING_PHASE() {
        return 3;
      },
      /**
       * The target of this event.
       * @type {number}
       */
      get eventPhase() {
        return pd(this).eventPhase;
      },
      /**
       * Stop event bubbling.
       * @returns {void}
       */
      stopPropagation() {
        const data = pd(this);
        data.stopped = true;
        if (typeof data.event.stopPropagation === "function") {
          data.event.stopPropagation();
        }
      },
      /**
       * Stop event bubbling.
       * @returns {void}
       */
      stopImmediatePropagation() {
        const data = pd(this);
        data.stopped = true;
        data.immediateStopped = true;
        if (typeof data.event.stopImmediatePropagation === "function") {
          data.event.stopImmediatePropagation();
        }
      },
      /**
       * The flag to be bubbling.
       * @type {boolean}
       */
      get bubbles() {
        return Boolean(pd(this).event.bubbles);
      },
      /**
       * The flag to be cancelable.
       * @type {boolean}
       */
      get cancelable() {
        return Boolean(pd(this).event.cancelable);
      },
      /**
       * Cancel this event.
       * @returns {void}
       */
      preventDefault() {
        setCancelFlag(pd(this));
      },
      /**
       * The flag to indicate cancellation state.
       * @type {boolean}
       */
      get defaultPrevented() {
        return pd(this).canceled;
      },
      /**
       * The flag to be composed.
       * @type {boolean}
       */
      get composed() {
        return Boolean(pd(this).event.composed);
      },
      /**
       * The unix time of this event.
       * @type {number}
       */
      get timeStamp() {
        return pd(this).timeStamp;
      },
      /**
       * The target of this event.
       * @type {EventTarget}
       * @deprecated
       */
      get srcElement() {
        return pd(this).eventTarget;
      },
      /**
       * The flag to stop event bubbling.
       * @type {boolean}
       * @deprecated
       */
      get cancelBubble() {
        return pd(this).stopped;
      },
      set cancelBubble(value) {
        if (!value) {
          return;
        }
        const data = pd(this);
        data.stopped = true;
        if (typeof data.event.cancelBubble === "boolean") {
          data.event.cancelBubble = true;
        }
      },
      /**
       * The flag to indicate cancellation state.
       * @type {boolean}
       * @deprecated
       */
      get returnValue() {
        return !pd(this).canceled;
      },
      set returnValue(value) {
        if (!value) {
          setCancelFlag(pd(this));
        }
      },
      /**
       * Initialize this event object. But do nothing under event dispatching.
       * @param {string} type The event type.
       * @param {boolean} [bubbles=false] The flag to be possible to bubble up.
       * @param {boolean} [cancelable=false] The flag to be possible to cancel.
       * @deprecated
       */
      initEvent() {
      }
    };
    Object.defineProperty(Event.prototype, "constructor", {
      value: Event,
      configurable: true,
      writable: true
    });
    if (typeof window !== "undefined" && typeof window.Event !== "undefined") {
      Object.setPrototypeOf(Event.prototype, window.Event.prototype);
      wrappers.set(window.Event.prototype, Event);
    }
    function defineRedirectDescriptor(key) {
      return {
        get() {
          return pd(this).event[key];
        },
        set(value) {
          pd(this).event[key] = value;
        },
        configurable: true,
        enumerable: true
      };
    }
    function defineCallDescriptor(key) {
      return {
        value() {
          const event = pd(this).event;
          return event[key].apply(event, arguments);
        },
        configurable: true,
        enumerable: true
      };
    }
    function defineWrapper(BaseEvent, proto) {
      const keys = Object.keys(proto);
      if (keys.length === 0) {
        return BaseEvent;
      }
      function CustomEvent(eventTarget, event) {
        BaseEvent.call(this, eventTarget, event);
      }
      CustomEvent.prototype = Object.create(BaseEvent.prototype, {
        constructor: { value: CustomEvent, configurable: true, writable: true }
      });
      for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        if (!(key in BaseEvent.prototype)) {
          const descriptor = Object.getOwnPropertyDescriptor(proto, key);
          const isFunc = typeof descriptor.value === "function";
          Object.defineProperty(
            CustomEvent.prototype,
            key,
            isFunc ? defineCallDescriptor(key) : defineRedirectDescriptor(key)
          );
        }
      }
      return CustomEvent;
    }
    function getWrapper(proto) {
      if (proto == null || proto === Object.prototype) {
        return Event;
      }
      let wrapper = wrappers.get(proto);
      if (wrapper == null) {
        wrapper = defineWrapper(getWrapper(Object.getPrototypeOf(proto)), proto);
        wrappers.set(proto, wrapper);
      }
      return wrapper;
    }
    function wrapEvent(eventTarget, event) {
      const Wrapper = getWrapper(Object.getPrototypeOf(event));
      return new Wrapper(eventTarget, event);
    }
    function isStopped(event) {
      return pd(event).immediateStopped;
    }
    function setEventPhase(event, eventPhase) {
      pd(event).eventPhase = eventPhase;
    }
    function setCurrentTarget(event, currentTarget) {
      pd(event).currentTarget = currentTarget;
    }
    function setPassiveListener(event, passiveListener) {
      pd(event).passiveListener = passiveListener;
    }
    var listenersMap = /* @__PURE__ */ new WeakMap();
    var CAPTURE = 1;
    var BUBBLE = 2;
    var ATTRIBUTE = 3;
    function isObject(x) {
      return x !== null && typeof x === "object";
    }
    function getListeners(eventTarget) {
      const listeners = listenersMap.get(eventTarget);
      if (listeners == null) {
        throw new TypeError(
          "'this' is expected an EventTarget object, but got another value."
        );
      }
      return listeners;
    }
    function defineEventAttributeDescriptor(eventName) {
      return {
        get() {
          const listeners = getListeners(this);
          let node = listeners.get(eventName);
          while (node != null) {
            if (node.listenerType === ATTRIBUTE) {
              return node.listener;
            }
            node = node.next;
          }
          return null;
        },
        set(listener) {
          if (typeof listener !== "function" && !isObject(listener)) {
            listener = null;
          }
          const listeners = getListeners(this);
          let prev = null;
          let node = listeners.get(eventName);
          while (node != null) {
            if (node.listenerType === ATTRIBUTE) {
              if (prev !== null) {
                prev.next = node.next;
              } else if (node.next !== null) {
                listeners.set(eventName, node.next);
              } else {
                listeners.delete(eventName);
              }
            } else {
              prev = node;
            }
            node = node.next;
          }
          if (listener !== null) {
            const newNode = {
              listener,
              listenerType: ATTRIBUTE,
              passive: false,
              once: false,
              next: null
            };
            if (prev === null) {
              listeners.set(eventName, newNode);
            } else {
              prev.next = newNode;
            }
          }
        },
        configurable: true,
        enumerable: true
      };
    }
    function defineEventAttribute(eventTargetPrototype, eventName) {
      Object.defineProperty(
        eventTargetPrototype,
        `on${eventName}`,
        defineEventAttributeDescriptor(eventName)
      );
    }
    function defineCustomEventTarget(eventNames) {
      function CustomEventTarget() {
        EventTarget.call(this);
      }
      CustomEventTarget.prototype = Object.create(EventTarget.prototype, {
        constructor: {
          value: CustomEventTarget,
          configurable: true,
          writable: true
        }
      });
      for (let i = 0; i < eventNames.length; ++i) {
        defineEventAttribute(CustomEventTarget.prototype, eventNames[i]);
      }
      return CustomEventTarget;
    }
    function EventTarget() {
      if (this instanceof EventTarget) {
        listenersMap.set(this, /* @__PURE__ */ new Map());
        return;
      }
      if (arguments.length === 1 && Array.isArray(arguments[0])) {
        return defineCustomEventTarget(arguments[0]);
      }
      if (arguments.length > 0) {
        const types = new Array(arguments.length);
        for (let i = 0; i < arguments.length; ++i) {
          types[i] = arguments[i];
        }
        return defineCustomEventTarget(types);
      }
      throw new TypeError("Cannot call a class as a function");
    }
    EventTarget.prototype = {
      /**
       * Add a given listener to this event target.
       * @param {string} eventName The event name to add.
       * @param {Function} listener The listener to add.
       * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
       * @returns {void}
       */
      addEventListener(eventName, listener, options) {
        if (listener == null) {
          return;
        }
        if (typeof listener !== "function" && !isObject(listener)) {
          throw new TypeError("'listener' should be a function or an object.");
        }
        const listeners = getListeners(this);
        const optionsIsObj = isObject(options);
        const capture = optionsIsObj ? Boolean(options.capture) : Boolean(options);
        const listenerType = capture ? CAPTURE : BUBBLE;
        const newNode = {
          listener,
          listenerType,
          passive: optionsIsObj && Boolean(options.passive),
          once: optionsIsObj && Boolean(options.once),
          next: null
        };
        let node = listeners.get(eventName);
        if (node === void 0) {
          listeners.set(eventName, newNode);
          return;
        }
        let prev = null;
        while (node != null) {
          if (node.listener === listener && node.listenerType === listenerType) {
            return;
          }
          prev = node;
          node = node.next;
        }
        prev.next = newNode;
      },
      /**
       * Remove a given listener from this event target.
       * @param {string} eventName The event name to remove.
       * @param {Function} listener The listener to remove.
       * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
       * @returns {void}
       */
      removeEventListener(eventName, listener, options) {
        if (listener == null) {
          return;
        }
        const listeners = getListeners(this);
        const capture = isObject(options) ? Boolean(options.capture) : Boolean(options);
        const listenerType = capture ? CAPTURE : BUBBLE;
        let prev = null;
        let node = listeners.get(eventName);
        while (node != null) {
          if (node.listener === listener && node.listenerType === listenerType) {
            if (prev !== null) {
              prev.next = node.next;
            } else if (node.next !== null) {
              listeners.set(eventName, node.next);
            } else {
              listeners.delete(eventName);
            }
            return;
          }
          prev = node;
          node = node.next;
        }
      },
      /**
       * Dispatch a given event.
       * @param {Event|{type:string}} event The event to dispatch.
       * @returns {boolean} `false` if canceled.
       */
      dispatchEvent(event) {
        if (event == null || typeof event.type !== "string") {
          throw new TypeError('"event.type" should be a string.');
        }
        const listeners = getListeners(this);
        const eventName = event.type;
        let node = listeners.get(eventName);
        if (node == null) {
          return true;
        }
        const wrappedEvent = wrapEvent(this, event);
        let prev = null;
        while (node != null) {
          if (node.once) {
            if (prev !== null) {
              prev.next = node.next;
            } else if (node.next !== null) {
              listeners.set(eventName, node.next);
            } else {
              listeners.delete(eventName);
            }
          } else {
            prev = node;
          }
          setPassiveListener(
            wrappedEvent,
            node.passive ? node.listener : null
          );
          if (typeof node.listener === "function") {
            try {
              node.listener.call(this, wrappedEvent);
            } catch (err) {
              if (typeof console !== "undefined" && typeof console.error === "function") {
                console.error(err);
              }
            }
          } else if (node.listenerType !== ATTRIBUTE && typeof node.listener.handleEvent === "function") {
            node.listener.handleEvent(wrappedEvent);
          }
          if (isStopped(wrappedEvent)) {
            break;
          }
          node = node.next;
        }
        setPassiveListener(wrappedEvent, null);
        setEventPhase(wrappedEvent, 0);
        setCurrentTarget(wrappedEvent, null);
        return !wrappedEvent.defaultPrevented;
      }
    };
    Object.defineProperty(EventTarget.prototype, "constructor", {
      value: EventTarget,
      configurable: true,
      writable: true
    });
    if (typeof window !== "undefined" && typeof window.EventTarget !== "undefined") {
      Object.setPrototypeOf(EventTarget.prototype, window.EventTarget.prototype);
    }
    exports2.defineEventAttribute = defineEventAttribute;
    exports2.EventTarget = EventTarget;
    exports2.default = EventTarget;
    module2.exports = EventTarget;
    module2.exports.EventTarget = module2.exports["default"] = EventTarget;
    module2.exports.defineEventAttribute = defineEventAttribute;
  }
});

// node_modules/abort-controller/dist/abort-controller.js
var require_abort_controller = __commonJS({
  "node_modules/abort-controller/dist/abort-controller.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var eventTargetShim = require_event_target_shim();
    var AbortSignal = class extends eventTargetShim.EventTarget {
      /**
       * AbortSignal cannot be constructed directly.
       */
      constructor() {
        super();
        throw new TypeError("AbortSignal cannot be constructed directly");
      }
      /**
       * Returns `true` if this `AbortSignal`'s `AbortController` has signaled to abort, and `false` otherwise.
       */
      get aborted() {
        const aborted = abortedFlags.get(this);
        if (typeof aborted !== "boolean") {
          throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? "null" : typeof this}`);
        }
        return aborted;
      }
    };
    eventTargetShim.defineEventAttribute(AbortSignal.prototype, "abort");
    function createAbortSignal() {
      const signal = Object.create(AbortSignal.prototype);
      eventTargetShim.EventTarget.call(signal);
      abortedFlags.set(signal, false);
      return signal;
    }
    function abortSignal(signal) {
      if (abortedFlags.get(signal) !== false) {
        return;
      }
      abortedFlags.set(signal, true);
      signal.dispatchEvent({ type: "abort" });
    }
    var abortedFlags = /* @__PURE__ */ new WeakMap();
    Object.defineProperties(AbortSignal.prototype, {
      aborted: { enumerable: true }
    });
    if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") {
      Object.defineProperty(AbortSignal.prototype, Symbol.toStringTag, {
        configurable: true,
        value: "AbortSignal"
      });
    }
    var AbortController = class {
      /**
       * Initialize this controller.
       */
      constructor() {
        signals.set(this, createAbortSignal());
      }
      /**
       * Returns the `AbortSignal` object associated with this object.
       */
      get signal() {
        return getSignal(this);
      }
      /**
       * Abort and signal to any observers that the associated activity is to be aborted.
       */
      abort() {
        abortSignal(getSignal(this));
      }
    };
    var signals = /* @__PURE__ */ new WeakMap();
    function getSignal(controller) {
      const signal = signals.get(controller);
      if (signal == null) {
        throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${controller === null ? "null" : typeof controller}`);
      }
      return signal;
    }
    Object.defineProperties(AbortController.prototype, {
      signal: { enumerable: true },
      abort: { enumerable: true }
    });
    if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") {
      Object.defineProperty(AbortController.prototype, Symbol.toStringTag, {
        configurable: true,
        value: "AbortController"
      });
    }
    exports2.AbortController = AbortController;
    exports2.AbortSignal = AbortSignal;
    exports2.default = AbortController;
    module2.exports = AbortController;
    module2.exports.AbortController = module2.exports["default"] = AbortController;
    module2.exports.AbortSignal = AbortSignal;
  }
});

// node_modules/readable-stream/lib/ours/util.js
var require_util = __commonJS({
  "node_modules/readable-stream/lib/ours/util.js"(exports2, module2) {
    "use strict";
    var bufferModule = require("buffer");
    var { format, inspect } = require_inspect();
    var {
      codes: { ERR_INVALID_ARG_TYPE }
    } = require_errors();
    var { kResistStopPropagation, AggregateError, SymbolDispose } = require_primordials();
    var AbortSignal = globalThis.AbortSignal || require_abort_controller().AbortSignal;
    var AbortController = globalThis.AbortController || require_abort_controller().AbortController;
    var AsyncFunction = Object.getPrototypeOf(async function() {
    }).constructor;
    var Blob2 = globalThis.Blob || bufferModule.Blob;
    var isBlob = typeof Blob2 !== "undefined" ? function isBlob2(b) {
      return b instanceof Blob2;
    } : function isBlob2(b) {
      return false;
    };
    var validateAbortSignal = (signal, name) => {
      if (signal !== void 0 && (signal === null || typeof signal !== "object" || !("aborted" in signal))) {
        throw new ERR_INVALID_ARG_TYPE(name, "AbortSignal", signal);
      }
    };
    var validateFunction = (value, name) => {
      if (typeof value !== "function") {
        throw new ERR_INVALID_ARG_TYPE(name, "Function", value);
      }
    };
    module2.exports = {
      AggregateError,
      kEmptyObject: Object.freeze({}),
      once(callback) {
        let called = false;
        return function(...args) {
          if (called) {
            return;
          }
          called = true;
          callback.apply(this, args);
        };
      },
      createDeferredPromise: function() {
        let resolve;
        let reject;
        const promise = new Promise((res, rej) => {
          resolve = res;
          reject = rej;
        });
        return {
          promise,
          resolve,
          reject
        };
      },
      promisify(fn) {
        return new Promise((resolve, reject) => {
          fn((err, ...args) => {
            if (err) {
              return reject(err);
            }
            return resolve(...args);
          });
        });
      },
      debuglog() {
        return function() {
        };
      },
      format,
      inspect,
      types: {
        isAsyncFunction(fn) {
          return fn instanceof AsyncFunction;
        },
        isArrayBufferView(arr) {
          return ArrayBuffer.isView(arr);
        }
      },
      isBlob,
      deprecate(fn, message) {
        return fn;
      },
      addAbortListener: require("events").addAbortListener || function addAbortListener(signal, listener) {
        if (signal === void 0) {
          throw new ERR_INVALID_ARG_TYPE("signal", "AbortSignal", signal);
        }
        validateAbortSignal(signal, "signal");
        validateFunction(listener, "listener");
        let removeEventListener;
        if (signal.aborted) {
          queueMicrotask(() => listener());
        } else {
          signal.addEventListener("abort", listener, {
            __proto__: null,
            once: true,
            [kResistStopPropagation]: true
          });
          removeEventListener = () => {
            signal.removeEventListener("abort", listener);
          };
        }
        return {
          __proto__: null,
          [SymbolDispose]() {
            var _removeEventListener;
            (_removeEventListener = removeEventListener) === null || _removeEventListener === void 0 ? void 0 : _removeEventListener();
          }
        };
      },
      AbortSignalAny: AbortSignal.any || function AbortSignalAny(signals) {
        if (signals.length === 1) {
          return signals[0];
        }
        const ac = new AbortController();
        const abort = () => ac.abort();
        signals.forEach((signal) => {
          validateAbortSignal(signal, "signals");
          signal.addEventListener("abort", abort, {
            once: true
          });
        });
        ac.signal.addEventListener(
          "abort",
          () => {
            signals.forEach((signal) => signal.removeEventListener("abort", abort));
          },
          {
            once: true
          }
        );
        return ac.signal;
      }
    };
    module2.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
  }
});

// node_modules/readable-stream/lib/internal/validators.js
var require_validators = __commonJS({
  "node_modules/readable-stream/lib/internal/validators.js"(exports2, module2) {
    "use strict";
    var {
      ArrayIsArray,
      ArrayPrototypeIncludes,
      ArrayPrototypeJoin,
      ArrayPrototypeMap,
      NumberIsInteger,
      NumberIsNaN,
      NumberMAX_SAFE_INTEGER,
      NumberMIN_SAFE_INTEGER,
      NumberParseInt,
      ObjectPrototypeHasOwnProperty,
      RegExpPrototypeExec,
      String: String2,
      StringPrototypeToUpperCase,
      StringPrototypeTrim
    } = require_primordials();
    var {
      hideStackFrames,
      codes: { ERR_SOCKET_BAD_PORT, ERR_INVALID_ARG_TYPE, ERR_INVALID_ARG_VALUE, ERR_OUT_OF_RANGE, ERR_UNKNOWN_SIGNAL }
    } = require_errors();
    var { normalizeEncoding } = require_util();
    var { isAsyncFunction, isArrayBufferView } = require_util().types;
    var signals = {};
    function isInt32(value) {
      return value === (value | 0);
    }
    function isUint32(value) {
      return value === value >>> 0;
    }
    var octalReg = /^[0-7]+$/;
    var modeDesc = "must be a 32-bit unsigned integer or an octal string";
    function parseFileMode(value, name, def) {
      if (typeof value === "undefined") {
        value = def;
      }
      if (typeof value === "string") {
        if (RegExpPrototypeExec(octalReg, value) === null) {
          throw new ERR_INVALID_ARG_VALUE(name, value, modeDesc);
        }
        value = NumberParseInt(value, 8);
      }
      validateUint32(value, name);
      return value;
    }
    var validateInteger = hideStackFrames((value, name, min = NumberMIN_SAFE_INTEGER, max = NumberMAX_SAFE_INTEGER) => {
      if (typeof value !== "number")
        throw new ERR_INVALID_ARG_TYPE(name, "number", value);
      if (!NumberIsInteger(value))
        throw new ERR_OUT_OF_RANGE(name, "an integer", value);
      if (value < min || value > max)
        throw new ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value);
    });
    var validateInt32 = hideStackFrames((value, name, min = -2147483648, max = 2147483647) => {
      if (typeof value !== "number") {
        throw new ERR_INVALID_ARG_TYPE(name, "number", value);
      }
      if (!NumberIsInteger(value)) {
        throw new ERR_OUT_OF_RANGE(name, "an integer", value);
      }
      if (value < min || value > max) {
        throw new ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value);
      }
    });
    var validateUint32 = hideStackFrames((value, name, positive = false) => {
      if (typeof value !== "number") {
        throw new ERR_INVALID_ARG_TYPE(name, "number", value);
      }
      if (!NumberIsInteger(value)) {
        throw new ERR_OUT_OF_RANGE(name, "an integer", value);
      }
      const min = positive ? 1 : 0;
      const max = 4294967295;
      if (value < min || value > max) {
        throw new ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value);
      }
    });
    function validateString(value, name) {
      if (typeof value !== "string")
        throw new ERR_INVALID_ARG_TYPE(name, "string", value);
    }
    function validateNumber(value, name, min = void 0, max) {
      if (typeof value !== "number")
        throw new ERR_INVALID_ARG_TYPE(name, "number", value);
      if (min != null && value < min || max != null && value > max || (min != null || max != null) && NumberIsNaN(value)) {
        throw new ERR_OUT_OF_RANGE(
          name,
          `${min != null ? `>= ${min}` : ""}${min != null && max != null ? " && " : ""}${max != null ? `<= ${max}` : ""}`,
          value
        );
      }
    }
    var validateOneOf = hideStackFrames((value, name, oneOf) => {
      if (!ArrayPrototypeIncludes(oneOf, value)) {
        const allowed = ArrayPrototypeJoin(
          ArrayPrototypeMap(oneOf, (v) => typeof v === "string" ? `'${v}'` : String2(v)),
          ", "
        );
        const reason = "must be one of: " + allowed;
        throw new ERR_INVALID_ARG_VALUE(name, value, reason);
      }
    });
    function validateBoolean(value, name) {
      if (typeof value !== "boolean")
        throw new ERR_INVALID_ARG_TYPE(name, "boolean", value);
    }
    function getOwnPropertyValueOrDefault(options, key, defaultValue) {
      return options == null || !ObjectPrototypeHasOwnProperty(options, key) ? defaultValue : options[key];
    }
    var validateObject = hideStackFrames((value, name, options = null) => {
      const allowArray = getOwnPropertyValueOrDefault(options, "allowArray", false);
      const allowFunction = getOwnPropertyValueOrDefault(options, "allowFunction", false);
      const nullable = getOwnPropertyValueOrDefault(options, "nullable", false);
      if (!nullable && value === null || !allowArray && ArrayIsArray(value) || typeof value !== "object" && (!allowFunction || typeof value !== "function")) {
        throw new ERR_INVALID_ARG_TYPE(name, "Object", value);
      }
    });
    var validateDictionary = hideStackFrames((value, name) => {
      if (value != null && typeof value !== "object" && typeof value !== "function") {
        throw new ERR_INVALID_ARG_TYPE(name, "a dictionary", value);
      }
    });
    var validateArray = hideStackFrames((value, name, minLength = 0) => {
      if (!ArrayIsArray(value)) {
        throw new ERR_INVALID_ARG_TYPE(name, "Array", value);
      }
      if (value.length < minLength) {
        const reason = `must be longer than ${minLength}`;
        throw new ERR_INVALID_ARG_VALUE(name, value, reason);
      }
    });
    function validateStringArray(value, name) {
      validateArray(value, name);
      for (let i = 0; i < value.length; i++) {
        validateString(value[i], `${name}[${i}]`);
      }
    }
    function validateBooleanArray(value, name) {
      validateArray(value, name);
      for (let i = 0; i < value.length; i++) {
        validateBoolean(value[i], `${name}[${i}]`);
      }
    }
    function validateAbortSignalArray(value, name) {
      validateArray(value, name);
      for (let i = 0; i < value.length; i++) {
        const signal = value[i];
        const indexedName = `${name}[${i}]`;
        if (signal == null) {
          throw new ERR_INVALID_ARG_TYPE(indexedName, "AbortSignal", signal);
        }
        validateAbortSignal(signal, indexedName);
      }
    }
    function validateSignalName(signal, name = "signal") {
      validateString(signal, name);
      if (signals[signal] === void 0) {
        if (signals[StringPrototypeToUpperCase(signal)] !== void 0) {
          throw new ERR_UNKNOWN_SIGNAL(signal + " (signals must use all capital letters)");
        }
        throw new ERR_UNKNOWN_SIGNAL(signal);
      }
    }
    var validateBuffer = hideStackFrames((buffer, name = "buffer") => {
      if (!isArrayBufferView(buffer)) {
        throw new ERR_INVALID_ARG_TYPE(name, ["Buffer", "TypedArray", "DataView"], buffer);
      }
    });
    function validateEncoding(data, encoding) {
      const normalizedEncoding = normalizeEncoding(encoding);
      const length = data.length;
      if (normalizedEncoding === "hex" && length % 2 !== 0) {
        throw new ERR_INVALID_ARG_VALUE("encoding", encoding, `is invalid for data of length ${length}`);
      }
    }
    function validatePort(port, name = "Port", allowZero = true) {
      if (typeof port !== "number" && typeof port !== "string" || typeof port === "string" && StringPrototypeTrim(port).length === 0 || +port !== +port >>> 0 || port > 65535 || port === 0 && !allowZero) {
        throw new ERR_SOCKET_BAD_PORT(name, port, allowZero);
      }
      return port | 0;
    }
    var validateAbortSignal = hideStackFrames((signal, name) => {
      if (signal !== void 0 && (signal === null || typeof signal !== "object" || !("aborted" in signal))) {
        throw new ERR_INVALID_ARG_TYPE(name, "AbortSignal", signal);
      }
    });
    var validateFunction = hideStackFrames((value, name) => {
      if (typeof value !== "function")
        throw new ERR_INVALID_ARG_TYPE(name, "Function", value);
    });
    var validatePlainFunction = hideStackFrames((value, name) => {
      if (typeof value !== "function" || isAsyncFunction(value))
        throw new ERR_INVALID_ARG_TYPE(name, "Function", value);
    });
    var validateUndefined = hideStackFrames((value, name) => {
      if (value !== void 0)
        throw new ERR_INVALID_ARG_TYPE(name, "undefined", value);
    });
    function validateUnion(value, name, union) {
      if (!ArrayPrototypeIncludes(union, value)) {
        throw new ERR_INVALID_ARG_TYPE(name, `('${ArrayPrototypeJoin(union, "|")}')`, value);
      }
    }
    var linkValueRegExp = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
    function validateLinkHeaderFormat(value, name) {
      if (typeof value === "undefined" || !RegExpPrototypeExec(linkValueRegExp, value)) {
        throw new ERR_INVALID_ARG_VALUE(
          name,
          value,
          'must be an array or string of format "</styles.css>; rel=preload; as=style"'
        );
      }
    }
    function validateLinkHeaderValue(hints) {
      if (typeof hints === "string") {
        validateLinkHeaderFormat(hints, "hints");
        return hints;
      } else if (ArrayIsArray(hints)) {
        const hintsLength = hints.length;
        let result = "";
        if (hintsLength === 0) {
          return result;
        }
        for (let i = 0; i < hintsLength; i++) {
          const link = hints[i];
          validateLinkHeaderFormat(link, "hints");
          result += link;
          if (i !== hintsLength - 1) {
            result += ", ";
          }
        }
        return result;
      }
      throw new ERR_INVALID_ARG_VALUE(
        "hints",
        hints,
        'must be an array or string of format "</styles.css>; rel=preload; as=style"'
      );
    }
    module2.exports = {
      isInt32,
      isUint32,
      parseFileMode,
      validateArray,
      validateStringArray,
      validateBooleanArray,
      validateAbortSignalArray,
      validateBoolean,
      validateBuffer,
      validateDictionary,
      validateEncoding,
      validateFunction,
      validateInt32,
      validateInteger,
      validateNumber,
      validateObject,
      validateOneOf,
      validatePlainFunction,
      validatePort,
      validateSignalName,
      validateString,
      validateUint32,
      validateUndefined,
      validateUnion,
      validateAbortSignal,
      validateLinkHeaderValue
    };
  }
});

// node_modules/process/index.js
var require_process = __commonJS({
  "node_modules/process/index.js"(exports2, module2) {
    module2.exports = global.process;
  }
});

// node_modules/readable-stream/lib/internal/streams/utils.js
var require_utils = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/utils.js"(exports2, module2) {
    "use strict";
    var { SymbolAsyncIterator, SymbolIterator, SymbolFor } = require_primordials();
    var kIsDestroyed = SymbolFor("nodejs.stream.destroyed");
    var kIsErrored = SymbolFor("nodejs.stream.errored");
    var kIsReadable = SymbolFor("nodejs.stream.readable");
    var kIsWritable = SymbolFor("nodejs.stream.writable");
    var kIsDisturbed = SymbolFor("nodejs.stream.disturbed");
    var kIsClosedPromise = SymbolFor("nodejs.webstream.isClosedPromise");
    var kControllerErrorFunction = SymbolFor("nodejs.webstream.controllerErrorFunction");
    function isReadableNodeStream(obj, strict = false) {
      var _obj$_readableState;
      return !!(obj && typeof obj.pipe === "function" && typeof obj.on === "function" && (!strict || typeof obj.pause === "function" && typeof obj.resume === "function") && (!obj._writableState || ((_obj$_readableState = obj._readableState) === null || _obj$_readableState === void 0 ? void 0 : _obj$_readableState.readable) !== false) && // Duplex
      (!obj._writableState || obj._readableState));
    }
    function isWritableNodeStream(obj) {
      var _obj$_writableState;
      return !!(obj && typeof obj.write === "function" && typeof obj.on === "function" && (!obj._readableState || ((_obj$_writableState = obj._writableState) === null || _obj$_writableState === void 0 ? void 0 : _obj$_writableState.writable) !== false));
    }
    function isDuplexNodeStream(obj) {
      return !!(obj && typeof obj.pipe === "function" && obj._readableState && typeof obj.on === "function" && typeof obj.write === "function");
    }
    function isNodeStream(obj) {
      return obj && (obj._readableState || obj._writableState || typeof obj.write === "function" && typeof obj.on === "function" || typeof obj.pipe === "function" && typeof obj.on === "function");
    }
    function isReadableStream(obj) {
      return !!(obj && !isNodeStream(obj) && typeof obj.pipeThrough === "function" && typeof obj.getReader === "function" && typeof obj.cancel === "function");
    }
    function isWritableStream(obj) {
      return !!(obj && !isNodeStream(obj) && typeof obj.getWriter === "function" && typeof obj.abort === "function");
    }
    function isTransformStream(obj) {
      return !!(obj && !isNodeStream(obj) && typeof obj.readable === "object" && typeof obj.writable === "object");
    }
    function isWebStream(obj) {
      return isReadableStream(obj) || isWritableStream(obj) || isTransformStream(obj);
    }
    function isIterable(obj, isAsync) {
      if (obj == null)
        return false;
      if (isAsync === true)
        return typeof obj[SymbolAsyncIterator] === "function";
      if (isAsync === false)
        return typeof obj[SymbolIterator] === "function";
      return typeof obj[SymbolAsyncIterator] === "function" || typeof obj[SymbolIterator] === "function";
    }
    function isDestroyed(stream) {
      if (!isNodeStream(stream))
        return null;
      const wState = stream._writableState;
      const rState = stream._readableState;
      const state = wState || rState;
      return !!(stream.destroyed || stream[kIsDestroyed] || state !== null && state !== void 0 && state.destroyed);
    }
    function isWritableEnded(stream) {
      if (!isWritableNodeStream(stream))
        return null;
      if (stream.writableEnded === true)
        return true;
      const wState = stream._writableState;
      if (wState !== null && wState !== void 0 && wState.errored)
        return false;
      if (typeof (wState === null || wState === void 0 ? void 0 : wState.ended) !== "boolean")
        return null;
      return wState.ended;
    }
    function isWritableFinished(stream, strict) {
      if (!isWritableNodeStream(stream))
        return null;
      if (stream.writableFinished === true)
        return true;
      const wState = stream._writableState;
      if (wState !== null && wState !== void 0 && wState.errored)
        return false;
      if (typeof (wState === null || wState === void 0 ? void 0 : wState.finished) !== "boolean")
        return null;
      return !!(wState.finished || strict === false && wState.ended === true && wState.length === 0);
    }
    function isReadableEnded(stream) {
      if (!isReadableNodeStream(stream))
        return null;
      if (stream.readableEnded === true)
        return true;
      const rState = stream._readableState;
      if (!rState || rState.errored)
        return false;
      if (typeof (rState === null || rState === void 0 ? void 0 : rState.ended) !== "boolean")
        return null;
      return rState.ended;
    }
    function isReadableFinished(stream, strict) {
      if (!isReadableNodeStream(stream))
        return null;
      const rState = stream._readableState;
      if (rState !== null && rState !== void 0 && rState.errored)
        return false;
      if (typeof (rState === null || rState === void 0 ? void 0 : rState.endEmitted) !== "boolean")
        return null;
      return !!(rState.endEmitted || strict === false && rState.ended === true && rState.length === 0);
    }
    function isReadable(stream) {
      if (stream && stream[kIsReadable] != null)
        return stream[kIsReadable];
      if (typeof (stream === null || stream === void 0 ? void 0 : stream.readable) !== "boolean")
        return null;
      if (isDestroyed(stream))
        return false;
      return isReadableNodeStream(stream) && stream.readable && !isReadableFinished(stream);
    }
    function isWritable(stream) {
      if (stream && stream[kIsWritable] != null)
        return stream[kIsWritable];
      if (typeof (stream === null || stream === void 0 ? void 0 : stream.writable) !== "boolean")
        return null;
      if (isDestroyed(stream))
        return false;
      return isWritableNodeStream(stream) && stream.writable && !isWritableEnded(stream);
    }
    function isFinished(stream, opts) {
      if (!isNodeStream(stream)) {
        return null;
      }
      if (isDestroyed(stream)) {
        return true;
      }
      if ((opts === null || opts === void 0 ? void 0 : opts.readable) !== false && isReadable(stream)) {
        return false;
      }
      if ((opts === null || opts === void 0 ? void 0 : opts.writable) !== false && isWritable(stream)) {
        return false;
      }
      return true;
    }
    function isWritableErrored(stream) {
      var _stream$_writableStat, _stream$_writableStat2;
      if (!isNodeStream(stream)) {
        return null;
      }
      if (stream.writableErrored) {
        return stream.writableErrored;
      }
      return (_stream$_writableStat = (_stream$_writableStat2 = stream._writableState) === null || _stream$_writableStat2 === void 0 ? void 0 : _stream$_writableStat2.errored) !== null && _stream$_writableStat !== void 0 ? _stream$_writableStat : null;
    }
    function isReadableErrored(stream) {
      var _stream$_readableStat, _stream$_readableStat2;
      if (!isNodeStream(stream)) {
        return null;
      }
      if (stream.readableErrored) {
        return stream.readableErrored;
      }
      return (_stream$_readableStat = (_stream$_readableStat2 = stream._readableState) === null || _stream$_readableStat2 === void 0 ? void 0 : _stream$_readableStat2.errored) !== null && _stream$_readableStat !== void 0 ? _stream$_readableStat : null;
    }
    function isClosed(stream) {
      if (!isNodeStream(stream)) {
        return null;
      }
      if (typeof stream.closed === "boolean") {
        return stream.closed;
      }
      const wState = stream._writableState;
      const rState = stream._readableState;
      if (typeof (wState === null || wState === void 0 ? void 0 : wState.closed) === "boolean" || typeof (rState === null || rState === void 0 ? void 0 : rState.closed) === "boolean") {
        return (wState === null || wState === void 0 ? void 0 : wState.closed) || (rState === null || rState === void 0 ? void 0 : rState.closed);
      }
      if (typeof stream._closed === "boolean" && isOutgoingMessage(stream)) {
        return stream._closed;
      }
      return null;
    }
    function isOutgoingMessage(stream) {
      return typeof stream._closed === "boolean" && typeof stream._defaultKeepAlive === "boolean" && typeof stream._removedConnection === "boolean" && typeof stream._removedContLen === "boolean";
    }
    function isServerResponse(stream) {
      return typeof stream._sent100 === "boolean" && isOutgoingMessage(stream);
    }
    function isServerRequest(stream) {
      var _stream$req;
      return typeof stream._consuming === "boolean" && typeof stream._dumped === "boolean" && ((_stream$req = stream.req) === null || _stream$req === void 0 ? void 0 : _stream$req.upgradeOrConnect) === void 0;
    }
    function willEmitClose(stream) {
      if (!isNodeStream(stream))
        return null;
      const wState = stream._writableState;
      const rState = stream._readableState;
      const state = wState || rState;
      return !state && isServerResponse(stream) || !!(state && state.autoDestroy && state.emitClose && state.closed === false);
    }
    function isDisturbed(stream) {
      var _stream$kIsDisturbed;
      return !!(stream && ((_stream$kIsDisturbed = stream[kIsDisturbed]) !== null && _stream$kIsDisturbed !== void 0 ? _stream$kIsDisturbed : stream.readableDidRead || stream.readableAborted));
    }
    function isErrored(stream) {
      var _ref, _ref2, _ref3, _ref4, _ref5, _stream$kIsErrored, _stream$_readableStat3, _stream$_writableStat3, _stream$_readableStat4, _stream$_writableStat4;
      return !!(stream && ((_ref = (_ref2 = (_ref3 = (_ref4 = (_ref5 = (_stream$kIsErrored = stream[kIsErrored]) !== null && _stream$kIsErrored !== void 0 ? _stream$kIsErrored : stream.readableErrored) !== null && _ref5 !== void 0 ? _ref5 : stream.writableErrored) !== null && _ref4 !== void 0 ? _ref4 : (_stream$_readableStat3 = stream._readableState) === null || _stream$_readableStat3 === void 0 ? void 0 : _stream$_readableStat3.errorEmitted) !== null && _ref3 !== void 0 ? _ref3 : (_stream$_writableStat3 = stream._writableState) === null || _stream$_writableStat3 === void 0 ? void 0 : _stream$_writableStat3.errorEmitted) !== null && _ref2 !== void 0 ? _ref2 : (_stream$_readableStat4 = stream._readableState) === null || _stream$_readableStat4 === void 0 ? void 0 : _stream$_readableStat4.errored) !== null && _ref !== void 0 ? _ref : (_stream$_writableStat4 = stream._writableState) === null || _stream$_writableStat4 === void 0 ? void 0 : _stream$_writableStat4.errored));
    }
    module2.exports = {
      isDestroyed,
      kIsDestroyed,
      isDisturbed,
      kIsDisturbed,
      isErrored,
      kIsErrored,
      isReadable,
      kIsReadable,
      kIsClosedPromise,
      kControllerErrorFunction,
      kIsWritable,
      isClosed,
      isDuplexNodeStream,
      isFinished,
      isIterable,
      isReadableNodeStream,
      isReadableStream,
      isReadableEnded,
      isReadableFinished,
      isReadableErrored,
      isNodeStream,
      isWebStream,
      isWritable,
      isWritableNodeStream,
      isWritableStream,
      isWritableEnded,
      isWritableFinished,
      isWritableErrored,
      isServerRequest,
      isServerResponse,
      willEmitClose,
      isTransformStream
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/end-of-stream.js
var require_end_of_stream = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/end-of-stream.js"(exports2, module2) {
    "use strict";
    var process2 = require_process();
    var { AbortError, codes } = require_errors();
    var { ERR_INVALID_ARG_TYPE, ERR_STREAM_PREMATURE_CLOSE } = codes;
    var { kEmptyObject, once } = require_util();
    var { validateAbortSignal, validateFunction, validateObject, validateBoolean } = require_validators();
    var { Promise: Promise2, PromisePrototypeThen, SymbolDispose } = require_primordials();
    var {
      isClosed,
      isReadable,
      isReadableNodeStream,
      isReadableStream,
      isReadableFinished,
      isReadableErrored,
      isWritable,
      isWritableNodeStream,
      isWritableStream,
      isWritableFinished,
      isWritableErrored,
      isNodeStream,
      willEmitClose: _willEmitClose,
      kIsClosedPromise
    } = require_utils();
    var addAbortListener;
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === "function";
    }
    var nop = () => {
    };
    function eos(stream, options, callback) {
      var _options$readable, _options$writable;
      if (arguments.length === 2) {
        callback = options;
        options = kEmptyObject;
      } else if (options == null) {
        options = kEmptyObject;
      } else {
        validateObject(options, "options");
      }
      validateFunction(callback, "callback");
      validateAbortSignal(options.signal, "options.signal");
      callback = once(callback);
      if (isReadableStream(stream) || isWritableStream(stream)) {
        return eosWeb(stream, options, callback);
      }
      if (!isNodeStream(stream)) {
        throw new ERR_INVALID_ARG_TYPE("stream", ["ReadableStream", "WritableStream", "Stream"], stream);
      }
      const readable = (_options$readable = options.readable) !== null && _options$readable !== void 0 ? _options$readable : isReadableNodeStream(stream);
      const writable = (_options$writable = options.writable) !== null && _options$writable !== void 0 ? _options$writable : isWritableNodeStream(stream);
      const wState = stream._writableState;
      const rState = stream._readableState;
      const onlegacyfinish = () => {
        if (!stream.writable) {
          onfinish();
        }
      };
      let willEmitClose = _willEmitClose(stream) && isReadableNodeStream(stream) === readable && isWritableNodeStream(stream) === writable;
      let writableFinished = isWritableFinished(stream, false);
      const onfinish = () => {
        writableFinished = true;
        if (stream.destroyed) {
          willEmitClose = false;
        }
        if (willEmitClose && (!stream.readable || readable)) {
          return;
        }
        if (!readable || readableFinished) {
          callback.call(stream);
        }
      };
      let readableFinished = isReadableFinished(stream, false);
      const onend = () => {
        readableFinished = true;
        if (stream.destroyed) {
          willEmitClose = false;
        }
        if (willEmitClose && (!stream.writable || writable)) {
          return;
        }
        if (!writable || writableFinished) {
          callback.call(stream);
        }
      };
      const onerror = (err) => {
        callback.call(stream, err);
      };
      let closed = isClosed(stream);
      const onclose = () => {
        closed = true;
        const errored = isWritableErrored(stream) || isReadableErrored(stream);
        if (errored && typeof errored !== "boolean") {
          return callback.call(stream, errored);
        }
        if (readable && !readableFinished && isReadableNodeStream(stream, true)) {
          if (!isReadableFinished(stream, false))
            return callback.call(stream, new ERR_STREAM_PREMATURE_CLOSE());
        }
        if (writable && !writableFinished) {
          if (!isWritableFinished(stream, false))
            return callback.call(stream, new ERR_STREAM_PREMATURE_CLOSE());
        }
        callback.call(stream);
      };
      const onclosed = () => {
        closed = true;
        const errored = isWritableErrored(stream) || isReadableErrored(stream);
        if (errored && typeof errored !== "boolean") {
          return callback.call(stream, errored);
        }
        callback.call(stream);
      };
      const onrequest = () => {
        stream.req.on("finish", onfinish);
      };
      if (isRequest(stream)) {
        stream.on("complete", onfinish);
        if (!willEmitClose) {
          stream.on("abort", onclose);
        }
        if (stream.req) {
          onrequest();
        } else {
          stream.on("request", onrequest);
        }
      } else if (writable && !wState) {
        stream.on("end", onlegacyfinish);
        stream.on("close", onlegacyfinish);
      }
      if (!willEmitClose && typeof stream.aborted === "boolean") {
        stream.on("aborted", onclose);
      }
      stream.on("end", onend);
      stream.on("finish", onfinish);
      if (options.error !== false) {
        stream.on("error", onerror);
      }
      stream.on("close", onclose);
      if (closed) {
        process2.nextTick(onclose);
      } else if (wState !== null && wState !== void 0 && wState.errorEmitted || rState !== null && rState !== void 0 && rState.errorEmitted) {
        if (!willEmitClose) {
          process2.nextTick(onclosed);
        }
      } else if (!readable && (!willEmitClose || isReadable(stream)) && (writableFinished || isWritable(stream) === false)) {
        process2.nextTick(onclosed);
      } else if (!writable && (!willEmitClose || isWritable(stream)) && (readableFinished || isReadable(stream) === false)) {
        process2.nextTick(onclosed);
      } else if (rState && stream.req && stream.aborted) {
        process2.nextTick(onclosed);
      }
      const cleanup = () => {
        callback = nop;
        stream.removeListener("aborted", onclose);
        stream.removeListener("complete", onfinish);
        stream.removeListener("abort", onclose);
        stream.removeListener("request", onrequest);
        if (stream.req)
          stream.req.removeListener("finish", onfinish);
        stream.removeListener("end", onlegacyfinish);
        stream.removeListener("close", onlegacyfinish);
        stream.removeListener("finish", onfinish);
        stream.removeListener("end", onend);
        stream.removeListener("error", onerror);
        stream.removeListener("close", onclose);
      };
      if (options.signal && !closed) {
        const abort = () => {
          const endCallback = callback;
          cleanup();
          endCallback.call(
            stream,
            new AbortError(void 0, {
              cause: options.signal.reason
            })
          );
        };
        if (options.signal.aborted) {
          process2.nextTick(abort);
        } else {
          addAbortListener = addAbortListener || require_util().addAbortListener;
          const disposable = addAbortListener(options.signal, abort);
          const originalCallback = callback;
          callback = once((...args) => {
            disposable[SymbolDispose]();
            originalCallback.apply(stream, args);
          });
        }
      }
      return cleanup;
    }
    function eosWeb(stream, options, callback) {
      let isAborted = false;
      let abort = nop;
      if (options.signal) {
        abort = () => {
          isAborted = true;
          callback.call(
            stream,
            new AbortError(void 0, {
              cause: options.signal.reason
            })
          );
        };
        if (options.signal.aborted) {
          process2.nextTick(abort);
        } else {
          addAbortListener = addAbortListener || require_util().addAbortListener;
          const disposable = addAbortListener(options.signal, abort);
          const originalCallback = callback;
          callback = once((...args) => {
            disposable[SymbolDispose]();
            originalCallback.apply(stream, args);
          });
        }
      }
      const resolverFn = (...args) => {
        if (!isAborted) {
          process2.nextTick(() => callback.apply(stream, args));
        }
      };
      PromisePrototypeThen(stream[kIsClosedPromise].promise, resolverFn, resolverFn);
      return nop;
    }
    function finished(stream, opts) {
      var _opts;
      let autoCleanup = false;
      if (opts === null) {
        opts = kEmptyObject;
      }
      if ((_opts = opts) !== null && _opts !== void 0 && _opts.cleanup) {
        validateBoolean(opts.cleanup, "cleanup");
        autoCleanup = opts.cleanup;
      }
      return new Promise2((resolve, reject) => {
        const cleanup = eos(stream, opts, (err) => {
          if (autoCleanup) {
            cleanup();
          }
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
    module2.exports = eos;
    module2.exports.finished = finished;
  }
});

// node_modules/readable-stream/lib/internal/streams/destroy.js
var require_destroy = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/destroy.js"(exports2, module2) {
    "use strict";
    var process2 = require_process();
    var {
      aggregateTwoErrors,
      codes: { ERR_MULTIPLE_CALLBACK },
      AbortError
    } = require_errors();
    var { Symbol: Symbol2 } = require_primordials();
    var { kIsDestroyed, isDestroyed, isFinished, isServerRequest } = require_utils();
    var kDestroy = Symbol2("kDestroy");
    var kConstruct = Symbol2("kConstruct");
    function checkError(err, w, r) {
      if (err) {
        err.stack;
        if (w && !w.errored) {
          w.errored = err;
        }
        if (r && !r.errored) {
          r.errored = err;
        }
      }
    }
    function destroy(err, cb) {
      const r = this._readableState;
      const w = this._writableState;
      const s = w || r;
      if (w !== null && w !== void 0 && w.destroyed || r !== null && r !== void 0 && r.destroyed) {
        if (typeof cb === "function") {
          cb();
        }
        return this;
      }
      checkError(err, w, r);
      if (w) {
        w.destroyed = true;
      }
      if (r) {
        r.destroyed = true;
      }
      if (!s.constructed) {
        this.once(kDestroy, function(er) {
          _destroy(this, aggregateTwoErrors(er, err), cb);
        });
      } else {
        _destroy(this, err, cb);
      }
      return this;
    }
    function _destroy(self2, err, cb) {
      let called = false;
      function onDestroy(err2) {
        if (called) {
          return;
        }
        called = true;
        const r = self2._readableState;
        const w = self2._writableState;
        checkError(err2, w, r);
        if (w) {
          w.closed = true;
        }
        if (r) {
          r.closed = true;
        }
        if (typeof cb === "function") {
          cb(err2);
        }
        if (err2) {
          process2.nextTick(emitErrorCloseNT, self2, err2);
        } else {
          process2.nextTick(emitCloseNT, self2);
        }
      }
      try {
        self2._destroy(err || null, onDestroy);
      } catch (err2) {
        onDestroy(err2);
      }
    }
    function emitErrorCloseNT(self2, err) {
      emitErrorNT(self2, err);
      emitCloseNT(self2);
    }
    function emitCloseNT(self2) {
      const r = self2._readableState;
      const w = self2._writableState;
      if (w) {
        w.closeEmitted = true;
      }
      if (r) {
        r.closeEmitted = true;
      }
      if (w !== null && w !== void 0 && w.emitClose || r !== null && r !== void 0 && r.emitClose) {
        self2.emit("close");
      }
    }
    function emitErrorNT(self2, err) {
      const r = self2._readableState;
      const w = self2._writableState;
      if (w !== null && w !== void 0 && w.errorEmitted || r !== null && r !== void 0 && r.errorEmitted) {
        return;
      }
      if (w) {
        w.errorEmitted = true;
      }
      if (r) {
        r.errorEmitted = true;
      }
      self2.emit("error", err);
    }
    function undestroy() {
      const r = this._readableState;
      const w = this._writableState;
      if (r) {
        r.constructed = true;
        r.closed = false;
        r.closeEmitted = false;
        r.destroyed = false;
        r.errored = null;
        r.errorEmitted = false;
        r.reading = false;
        r.ended = r.readable === false;
        r.endEmitted = r.readable === false;
      }
      if (w) {
        w.constructed = true;
        w.destroyed = false;
        w.closed = false;
        w.closeEmitted = false;
        w.errored = null;
        w.errorEmitted = false;
        w.finalCalled = false;
        w.prefinished = false;
        w.ended = w.writable === false;
        w.ending = w.writable === false;
        w.finished = w.writable === false;
      }
    }
    function errorOrDestroy(stream, err, sync) {
      const r = stream._readableState;
      const w = stream._writableState;
      if (w !== null && w !== void 0 && w.destroyed || r !== null && r !== void 0 && r.destroyed) {
        return this;
      }
      if (r !== null && r !== void 0 && r.autoDestroy || w !== null && w !== void 0 && w.autoDestroy)
        stream.destroy(err);
      else if (err) {
        err.stack;
        if (w && !w.errored) {
          w.errored = err;
        }
        if (r && !r.errored) {
          r.errored = err;
        }
        if (sync) {
          process2.nextTick(emitErrorNT, stream, err);
        } else {
          emitErrorNT(stream, err);
        }
      }
    }
    function construct(stream, cb) {
      if (typeof stream._construct !== "function") {
        return;
      }
      const r = stream._readableState;
      const w = stream._writableState;
      if (r) {
        r.constructed = false;
      }
      if (w) {
        w.constructed = false;
      }
      stream.once(kConstruct, cb);
      if (stream.listenerCount(kConstruct) > 1) {
        return;
      }
      process2.nextTick(constructNT, stream);
    }
    function constructNT(stream) {
      let called = false;
      function onConstruct(err) {
        if (called) {
          errorOrDestroy(stream, err !== null && err !== void 0 ? err : new ERR_MULTIPLE_CALLBACK());
          return;
        }
        called = true;
        const r = stream._readableState;
        const w = stream._writableState;
        const s = w || r;
        if (r) {
          r.constructed = true;
        }
        if (w) {
          w.constructed = true;
        }
        if (s.destroyed) {
          stream.emit(kDestroy, err);
        } else if (err) {
          errorOrDestroy(stream, err, true);
        } else {
          process2.nextTick(emitConstructNT, stream);
        }
      }
      try {
        stream._construct((err) => {
          process2.nextTick(onConstruct, err);
        });
      } catch (err) {
        process2.nextTick(onConstruct, err);
      }
    }
    function emitConstructNT(stream) {
      stream.emit(kConstruct);
    }
    function isRequest(stream) {
      return (stream === null || stream === void 0 ? void 0 : stream.setHeader) && typeof stream.abort === "function";
    }
    function emitCloseLegacy(stream) {
      stream.emit("close");
    }
    function emitErrorCloseLegacy(stream, err) {
      stream.emit("error", err);
      process2.nextTick(emitCloseLegacy, stream);
    }
    function destroyer(stream, err) {
      if (!stream || isDestroyed(stream)) {
        return;
      }
      if (!err && !isFinished(stream)) {
        err = new AbortError();
      }
      if (isServerRequest(stream)) {
        stream.socket = null;
        stream.destroy(err);
      } else if (isRequest(stream)) {
        stream.abort();
      } else if (isRequest(stream.req)) {
        stream.req.abort();
      } else if (typeof stream.destroy === "function") {
        stream.destroy(err);
      } else if (typeof stream.close === "function") {
        stream.close();
      } else if (err) {
        process2.nextTick(emitErrorCloseLegacy, stream, err);
      } else {
        process2.nextTick(emitCloseLegacy, stream);
      }
      if (!stream.destroyed) {
        stream[kIsDestroyed] = true;
      }
    }
    module2.exports = {
      construct,
      destroyer,
      destroy,
      undestroy,
      errorOrDestroy
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/legacy.js
var require_legacy = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/legacy.js"(exports2, module2) {
    "use strict";
    var { ArrayIsArray, ObjectSetPrototypeOf } = require_primordials();
    var { EventEmitter: EE } = require("events");
    function Stream(opts) {
      EE.call(this, opts);
    }
    ObjectSetPrototypeOf(Stream.prototype, EE.prototype);
    ObjectSetPrototypeOf(Stream, EE);
    Stream.prototype.pipe = function(dest, options) {
      const source = this;
      function ondata(chunk) {
        if (dest.writable && dest.write(chunk) === false && source.pause) {
          source.pause();
        }
      }
      source.on("data", ondata);
      function ondrain() {
        if (source.readable && source.resume) {
          source.resume();
        }
      }
      dest.on("drain", ondrain);
      if (!dest._isStdio && (!options || options.end !== false)) {
        source.on("end", onend);
        source.on("close", onclose);
      }
      let didOnEnd = false;
      function onend() {
        if (didOnEnd)
          return;
        didOnEnd = true;
        dest.end();
      }
      function onclose() {
        if (didOnEnd)
          return;
        didOnEnd = true;
        if (typeof dest.destroy === "function")
          dest.destroy();
      }
      function onerror(er) {
        cleanup();
        if (EE.listenerCount(this, "error") === 0) {
          this.emit("error", er);
        }
      }
      prependListener(source, "error", onerror);
      prependListener(dest, "error", onerror);
      function cleanup() {
        source.removeListener("data", ondata);
        dest.removeListener("drain", ondrain);
        source.removeListener("end", onend);
        source.removeListener("close", onclose);
        source.removeListener("error", onerror);
        dest.removeListener("error", onerror);
        source.removeListener("end", cleanup);
        source.removeListener("close", cleanup);
        dest.removeListener("close", cleanup);
      }
      source.on("end", cleanup);
      source.on("close", cleanup);
      dest.on("close", cleanup);
      dest.emit("pipe", source);
      return dest;
    };
    function prependListener(emitter, event, fn) {
      if (typeof emitter.prependListener === "function")
        return emitter.prependListener(event, fn);
      if (!emitter._events || !emitter._events[event])
        emitter.on(event, fn);
      else if (ArrayIsArray(emitter._events[event]))
        emitter._events[event].unshift(fn);
      else
        emitter._events[event] = [fn, emitter._events[event]];
    }
    module2.exports = {
      Stream,
      prependListener
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/add-abort-signal.js
var require_add_abort_signal = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/add-abort-signal.js"(exports2, module2) {
    "use strict";
    var { SymbolDispose } = require_primordials();
    var { AbortError, codes } = require_errors();
    var { isNodeStream, isWebStream, kControllerErrorFunction } = require_utils();
    var eos = require_end_of_stream();
    var { ERR_INVALID_ARG_TYPE } = codes;
    var addAbortListener;
    var validateAbortSignal = (signal, name) => {
      if (typeof signal !== "object" || !("aborted" in signal)) {
        throw new ERR_INVALID_ARG_TYPE(name, "AbortSignal", signal);
      }
    };
    module2.exports.addAbortSignal = function addAbortSignal(signal, stream) {
      validateAbortSignal(signal, "signal");
      if (!isNodeStream(stream) && !isWebStream(stream)) {
        throw new ERR_INVALID_ARG_TYPE("stream", ["ReadableStream", "WritableStream", "Stream"], stream);
      }
      return module2.exports.addAbortSignalNoValidate(signal, stream);
    };
    module2.exports.addAbortSignalNoValidate = function(signal, stream) {
      if (typeof signal !== "object" || !("aborted" in signal)) {
        return stream;
      }
      const onAbort = isNodeStream(stream) ? () => {
        stream.destroy(
          new AbortError(void 0, {
            cause: signal.reason
          })
        );
      } : () => {
        stream[kControllerErrorFunction](
          new AbortError(void 0, {
            cause: signal.reason
          })
        );
      };
      if (signal.aborted) {
        onAbort();
      } else {
        addAbortListener = addAbortListener || require_util().addAbortListener;
        const disposable = addAbortListener(signal, onAbort);
        eos(stream, disposable[SymbolDispose]);
      }
      return stream;
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/buffer_list.js
var require_buffer_list = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/buffer_list.js"(exports2, module2) {
    "use strict";
    var { StringPrototypeSlice, SymbolIterator, TypedArrayPrototypeSet, Uint8Array: Uint8Array2 } = require_primordials();
    var { Buffer: Buffer2 } = require("buffer");
    var { inspect } = require_util();
    module2.exports = class BufferList {
      constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
      push(v) {
        const entry = {
          data: v,
          next: null
        };
        if (this.length > 0)
          this.tail.next = entry;
        else
          this.head = entry;
        this.tail = entry;
        ++this.length;
      }
      unshift(v) {
        const entry = {
          data: v,
          next: this.head
        };
        if (this.length === 0)
          this.tail = entry;
        this.head = entry;
        ++this.length;
      }
      shift() {
        if (this.length === 0)
          return;
        const ret = this.head.data;
        if (this.length === 1)
          this.head = this.tail = null;
        else
          this.head = this.head.next;
        --this.length;
        return ret;
      }
      clear() {
        this.head = this.tail = null;
        this.length = 0;
      }
      join(s) {
        if (this.length === 0)
          return "";
        let p = this.head;
        let ret = "" + p.data;
        while ((p = p.next) !== null)
          ret += s + p.data;
        return ret;
      }
      concat(n) {
        if (this.length === 0)
          return Buffer2.alloc(0);
        const ret = Buffer2.allocUnsafe(n >>> 0);
        let p = this.head;
        let i = 0;
        while (p) {
          TypedArrayPrototypeSet(ret, p.data, i);
          i += p.data.length;
          p = p.next;
        }
        return ret;
      }
      // Consumes a specified amount of bytes or characters from the buffered data.
      consume(n, hasStrings) {
        const data = this.head.data;
        if (n < data.length) {
          const slice = data.slice(0, n);
          this.head.data = data.slice(n);
          return slice;
        }
        if (n === data.length) {
          return this.shift();
        }
        return hasStrings ? this._getString(n) : this._getBuffer(n);
      }
      first() {
        return this.head.data;
      }
      *[SymbolIterator]() {
        for (let p = this.head; p; p = p.next) {
          yield p.data;
        }
      }
      // Consumes a specified amount of characters from the buffered data.
      _getString(n) {
        let ret = "";
        let p = this.head;
        let c = 0;
        do {
          const str = p.data;
          if (n > str.length) {
            ret += str;
            n -= str.length;
          } else {
            if (n === str.length) {
              ret += str;
              ++c;
              if (p.next)
                this.head = p.next;
              else
                this.head = this.tail = null;
            } else {
              ret += StringPrototypeSlice(str, 0, n);
              this.head = p;
              p.data = StringPrototypeSlice(str, n);
            }
            break;
          }
          ++c;
        } while ((p = p.next) !== null);
        this.length -= c;
        return ret;
      }
      // Consumes a specified amount of bytes from the buffered data.
      _getBuffer(n) {
        const ret = Buffer2.allocUnsafe(n);
        const retLen = n;
        let p = this.head;
        let c = 0;
        do {
          const buf = p.data;
          if (n > buf.length) {
            TypedArrayPrototypeSet(ret, buf, retLen - n);
            n -= buf.length;
          } else {
            if (n === buf.length) {
              TypedArrayPrototypeSet(ret, buf, retLen - n);
              ++c;
              if (p.next)
                this.head = p.next;
              else
                this.head = this.tail = null;
            } else {
              TypedArrayPrototypeSet(ret, new Uint8Array2(buf.buffer, buf.byteOffset, n), retLen - n);
              this.head = p;
              p.data = buf.slice(n);
            }
            break;
          }
          ++c;
        } while ((p = p.next) !== null);
        this.length -= c;
        return ret;
      }
      // Make sure the linked list only shows the minimal necessary information.
      [Symbol.for("nodejs.util.inspect.custom")](_, options) {
        return inspect(this, {
          ...options,
          // Only inspect one level.
          depth: 0,
          // It should not recurse.
          customInspect: false
        });
      }
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/state.js
var require_state = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/state.js"(exports2, module2) {
    "use strict";
    var { MathFloor, NumberIsInteger } = require_primordials();
    var { validateInteger } = require_validators();
    var { ERR_INVALID_ARG_VALUE } = require_errors().codes;
    var defaultHighWaterMarkBytes = 16 * 1024;
    var defaultHighWaterMarkObjectMode = 16;
    function highWaterMarkFrom(options, isDuplex, duplexKey) {
      return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
    }
    function getDefaultHighWaterMark(objectMode) {
      return objectMode ? defaultHighWaterMarkObjectMode : defaultHighWaterMarkBytes;
    }
    function setDefaultHighWaterMark(objectMode, value) {
      validateInteger(value, "value", 0);
      if (objectMode) {
        defaultHighWaterMarkObjectMode = value;
      } else {
        defaultHighWaterMarkBytes = value;
      }
    }
    function getHighWaterMark(state, options, duplexKey, isDuplex) {
      const hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
      if (hwm != null) {
        if (!NumberIsInteger(hwm) || hwm < 0) {
          const name = isDuplex ? `options.${duplexKey}` : "options.highWaterMark";
          throw new ERR_INVALID_ARG_VALUE(name, hwm);
        }
        return MathFloor(hwm);
      }
      return getDefaultHighWaterMark(state.objectMode);
    }
    module2.exports = {
      getHighWaterMark,
      getDefaultHighWaterMark,
      setDefaultHighWaterMark
    };
  }
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/safe-buffer/index.js"(exports2, module2) {
    var buffer = require("buffer");
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module2.exports = buffer;
    } else {
      copyProps(buffer, exports2);
      exports2.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/string_decoder/lib/string_decoder.js
var require_string_decoder = __commonJS({
  "node_modules/string_decoder/lib/string_decoder.js"(exports2) {
    "use strict";
    var Buffer2 = require_safe_buffer().Buffer;
    var isEncoding = Buffer2.isEncoding || function(encoding) {
      encoding = "" + encoding;
      switch (encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function _normalizeEncoding(enc) {
      if (!enc)
        return "utf8";
      var retried;
      while (true) {
        switch (enc) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return enc;
          default:
            if (retried)
              return;
            enc = ("" + enc).toLowerCase();
            retried = true;
        }
      }
    }
    function normalizeEncoding(enc) {
      var nenc = _normalizeEncoding(enc);
      if (typeof nenc !== "string" && (Buffer2.isEncoding === isEncoding || !isEncoding(enc)))
        throw new Error("Unknown encoding: " + enc);
      return nenc || enc;
    }
    exports2.StringDecoder = StringDecoder;
    function StringDecoder(encoding) {
      this.encoding = normalizeEncoding(encoding);
      var nb;
      switch (this.encoding) {
        case "utf16le":
          this.text = utf16Text;
          this.end = utf16End;
          nb = 4;
          break;
        case "utf8":
          this.fillLast = utf8FillLast;
          nb = 4;
          break;
        case "base64":
          this.text = base64Text;
          this.end = base64End;
          nb = 3;
          break;
        default:
          this.write = simpleWrite;
          this.end = simpleEnd;
          return;
      }
      this.lastNeed = 0;
      this.lastTotal = 0;
      this.lastChar = Buffer2.allocUnsafe(nb);
    }
    StringDecoder.prototype.write = function(buf) {
      if (buf.length === 0)
        return "";
      var r;
      var i;
      if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === void 0)
          return "";
        i = this.lastNeed;
        this.lastNeed = 0;
      } else {
        i = 0;
      }
      if (i < buf.length)
        return r ? r + this.text(buf, i) : this.text(buf, i);
      return r || "";
    };
    StringDecoder.prototype.end = utf8End;
    StringDecoder.prototype.text = utf8Text;
    StringDecoder.prototype.fillLast = function(buf) {
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
      this.lastNeed -= buf.length;
    };
    function utf8CheckByte(byte) {
      if (byte <= 127)
        return 0;
      else if (byte >> 5 === 6)
        return 2;
      else if (byte >> 4 === 14)
        return 3;
      else if (byte >> 3 === 30)
        return 4;
      return byte >> 6 === 2 ? -1 : -2;
    }
    function utf8CheckIncomplete(self2, buf, i) {
      var j = buf.length - 1;
      if (j < i)
        return 0;
      var nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0)
          self2.lastNeed = nb - 1;
        return nb;
      }
      if (--j < i || nb === -2)
        return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0)
          self2.lastNeed = nb - 2;
        return nb;
      }
      if (--j < i || nb === -2)
        return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) {
          if (nb === 2)
            nb = 0;
          else
            self2.lastNeed = nb - 3;
        }
        return nb;
      }
      return 0;
    }
    function utf8CheckExtraBytes(self2, buf, p) {
      if ((buf[0] & 192) !== 128) {
        self2.lastNeed = 0;
        return "\uFFFD";
      }
      if (self2.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 192) !== 128) {
          self2.lastNeed = 1;
          return "\uFFFD";
        }
        if (self2.lastNeed > 2 && buf.length > 2) {
          if ((buf[2] & 192) !== 128) {
            self2.lastNeed = 2;
            return "\uFFFD";
          }
        }
      }
    }
    function utf8FillLast(buf) {
      var p = this.lastTotal - this.lastNeed;
      var r = utf8CheckExtraBytes(this, buf, p);
      if (r !== void 0)
        return r;
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, p, 0, buf.length);
      this.lastNeed -= buf.length;
    }
    function utf8Text(buf, i) {
      var total = utf8CheckIncomplete(this, buf, i);
      if (!this.lastNeed)
        return buf.toString("utf8", i);
      this.lastTotal = total;
      var end = buf.length - (total - this.lastNeed);
      buf.copy(this.lastChar, 0, end);
      return buf.toString("utf8", i, end);
    }
    function utf8End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed)
        return r + "\uFFFD";
      return r;
    }
    function utf16Text(buf, i) {
      if ((buf.length - i) % 2 === 0) {
        var r = buf.toString("utf16le", i);
        if (r) {
          var c = r.charCodeAt(r.length - 1);
          if (c >= 55296 && c <= 56319) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] = buf[buf.length - 2];
            this.lastChar[1] = buf[buf.length - 1];
            return r.slice(0, -1);
          }
        }
        return r;
      }
      this.lastNeed = 1;
      this.lastTotal = 2;
      this.lastChar[0] = buf[buf.length - 1];
      return buf.toString("utf16le", i, buf.length - 1);
    }
    function utf16End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, end);
      }
      return r;
    }
    function base64Text(buf, i) {
      var n = (buf.length - i) % 3;
      if (n === 0)
        return buf.toString("base64", i);
      this.lastNeed = 3 - n;
      this.lastTotal = 3;
      if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
      } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
      }
      return buf.toString("base64", i, buf.length - n);
    }
    function base64End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed)
        return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
      return r;
    }
    function simpleWrite(buf) {
      return buf.toString(this.encoding);
    }
    function simpleEnd(buf) {
      return buf && buf.length ? this.write(buf) : "";
    }
  }
});

// node_modules/readable-stream/lib/internal/streams/from.js
var require_from = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/from.js"(exports2, module2) {
    "use strict";
    var process2 = require_process();
    var { PromisePrototypeThen, SymbolAsyncIterator, SymbolIterator } = require_primordials();
    var { Buffer: Buffer2 } = require("buffer");
    var { ERR_INVALID_ARG_TYPE, ERR_STREAM_NULL_VALUES } = require_errors().codes;
    function from(Readable, iterable, opts) {
      let iterator;
      if (typeof iterable === "string" || iterable instanceof Buffer2) {
        return new Readable({
          objectMode: true,
          ...opts,
          read() {
            this.push(iterable);
            this.push(null);
          }
        });
      }
      let isAsync;
      if (iterable && iterable[SymbolAsyncIterator]) {
        isAsync = true;
        iterator = iterable[SymbolAsyncIterator]();
      } else if (iterable && iterable[SymbolIterator]) {
        isAsync = false;
        iterator = iterable[SymbolIterator]();
      } else {
        throw new ERR_INVALID_ARG_TYPE("iterable", ["Iterable"], iterable);
      }
      const readable = new Readable({
        objectMode: true,
        highWaterMark: 1,
        // TODO(ronag): What options should be allowed?
        ...opts
      });
      let reading = false;
      readable._read = function() {
        if (!reading) {
          reading = true;
          next();
        }
      };
      readable._destroy = function(error, cb) {
        PromisePrototypeThen(
          close(error),
          () => process2.nextTick(cb, error),
          // nextTick is here in case cb throws
          (e) => process2.nextTick(cb, e || error)
        );
      };
      async function close(error) {
        const hadError = error !== void 0 && error !== null;
        const hasThrow = typeof iterator.throw === "function";
        if (hadError && hasThrow) {
          const { value, done } = await iterator.throw(error);
          await value;
          if (done) {
            return;
          }
        }
        if (typeof iterator.return === "function") {
          const { value } = await iterator.return();
          await value;
        }
      }
      async function next() {
        for (; ; ) {
          try {
            const { value, done } = isAsync ? await iterator.next() : iterator.next();
            if (done) {
              readable.push(null);
            } else {
              const res = value && typeof value.then === "function" ? await value : value;
              if (res === null) {
                reading = false;
                throw new ERR_STREAM_NULL_VALUES();
              } else if (readable.push(res)) {
                continue;
              } else {
                reading = false;
              }
            }
          } catch (err) {
            readable.destroy(err);
          }
          break;
        }
      }
      return readable;
    }
    module2.exports = from;
  }
});

// node_modules/readable-stream/lib/internal/streams/readable.js
var require_readable = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/readable.js"(exports2, module2) {
    "use strict";
    var process2 = require_process();
    var {
      ArrayPrototypeIndexOf,
      NumberIsInteger,
      NumberIsNaN,
      NumberParseInt,
      ObjectDefineProperties,
      ObjectKeys,
      ObjectSetPrototypeOf,
      Promise: Promise2,
      SafeSet,
      SymbolAsyncDispose,
      SymbolAsyncIterator,
      Symbol: Symbol2
    } = require_primordials();
    module2.exports = Readable;
    Readable.ReadableState = ReadableState;
    var { EventEmitter: EE } = require("events");
    var { Stream, prependListener } = require_legacy();
    var { Buffer: Buffer2 } = require("buffer");
    var { addAbortSignal } = require_add_abort_signal();
    var eos = require_end_of_stream();
    var debug = require_util().debuglog("stream", (fn) => {
      debug = fn;
    });
    var BufferList = require_buffer_list();
    var destroyImpl = require_destroy();
    var { getHighWaterMark, getDefaultHighWaterMark } = require_state();
    var {
      aggregateTwoErrors,
      codes: {
        ERR_INVALID_ARG_TYPE,
        ERR_METHOD_NOT_IMPLEMENTED,
        ERR_OUT_OF_RANGE,
        ERR_STREAM_PUSH_AFTER_EOF,
        ERR_STREAM_UNSHIFT_AFTER_END_EVENT
      },
      AbortError
    } = require_errors();
    var { validateObject } = require_validators();
    var kPaused = Symbol2("kPaused");
    var { StringDecoder } = require_string_decoder();
    var from = require_from();
    ObjectSetPrototypeOf(Readable.prototype, Stream.prototype);
    ObjectSetPrototypeOf(Readable, Stream);
    var nop = () => {
    };
    var { errorOrDestroy } = destroyImpl;
    var kObjectMode = 1 << 0;
    var kEnded = 1 << 1;
    var kEndEmitted = 1 << 2;
    var kReading = 1 << 3;
    var kConstructed = 1 << 4;
    var kSync = 1 << 5;
    var kNeedReadable = 1 << 6;
    var kEmittedReadable = 1 << 7;
    var kReadableListening = 1 << 8;
    var kResumeScheduled = 1 << 9;
    var kErrorEmitted = 1 << 10;
    var kEmitClose = 1 << 11;
    var kAutoDestroy = 1 << 12;
    var kDestroyed = 1 << 13;
    var kClosed = 1 << 14;
    var kCloseEmitted = 1 << 15;
    var kMultiAwaitDrain = 1 << 16;
    var kReadingMore = 1 << 17;
    var kDataEmitted = 1 << 18;
    function makeBitMapDescriptor(bit) {
      return {
        enumerable: false,
        get() {
          return (this.state & bit) !== 0;
        },
        set(value) {
          if (value)
            this.state |= bit;
          else
            this.state &= ~bit;
        }
      };
    }
    ObjectDefineProperties(ReadableState.prototype, {
      objectMode: makeBitMapDescriptor(kObjectMode),
      ended: makeBitMapDescriptor(kEnded),
      endEmitted: makeBitMapDescriptor(kEndEmitted),
      reading: makeBitMapDescriptor(kReading),
      // Stream is still being constructed and cannot be
      // destroyed until construction finished or failed.
      // Async construction is opt in, therefore we start as
      // constructed.
      constructed: makeBitMapDescriptor(kConstructed),
      // A flag to be able to tell if the event 'readable'/'data' is emitted
      // immediately, or on a later tick.  We set this to true at first, because
      // any actions that shouldn't happen until "later" should generally also
      // not happen before the first read call.
      sync: makeBitMapDescriptor(kSync),
      // Whenever we return null, then we set a flag to say
      // that we're awaiting a 'readable' event emission.
      needReadable: makeBitMapDescriptor(kNeedReadable),
      emittedReadable: makeBitMapDescriptor(kEmittedReadable),
      readableListening: makeBitMapDescriptor(kReadableListening),
      resumeScheduled: makeBitMapDescriptor(kResumeScheduled),
      // True if the error was already emitted and should not be thrown again.
      errorEmitted: makeBitMapDescriptor(kErrorEmitted),
      emitClose: makeBitMapDescriptor(kEmitClose),
      autoDestroy: makeBitMapDescriptor(kAutoDestroy),
      // Has it been destroyed.
      destroyed: makeBitMapDescriptor(kDestroyed),
      // Indicates whether the stream has finished destroying.
      closed: makeBitMapDescriptor(kClosed),
      // True if close has been emitted or would have been emitted
      // depending on emitClose.
      closeEmitted: makeBitMapDescriptor(kCloseEmitted),
      multiAwaitDrain: makeBitMapDescriptor(kMultiAwaitDrain),
      // If true, a maybeReadMore has been scheduled.
      readingMore: makeBitMapDescriptor(kReadingMore),
      dataEmitted: makeBitMapDescriptor(kDataEmitted)
    });
    function ReadableState(options, stream, isDuplex) {
      if (typeof isDuplex !== "boolean")
        isDuplex = stream instanceof require_duplex();
      this.state = kEmitClose | kAutoDestroy | kConstructed | kSync;
      if (options && options.objectMode)
        this.state |= kObjectMode;
      if (isDuplex && options && options.readableObjectMode)
        this.state |= kObjectMode;
      this.highWaterMark = options ? getHighWaterMark(this, options, "readableHighWaterMark", isDuplex) : getDefaultHighWaterMark(false);
      this.buffer = new BufferList();
      this.length = 0;
      this.pipes = [];
      this.flowing = null;
      this[kPaused] = null;
      if (options && options.emitClose === false)
        this.state &= ~kEmitClose;
      if (options && options.autoDestroy === false)
        this.state &= ~kAutoDestroy;
      this.errored = null;
      this.defaultEncoding = options && options.defaultEncoding || "utf8";
      this.awaitDrainWriters = null;
      this.decoder = null;
      this.encoding = null;
      if (options && options.encoding) {
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
      }
    }
    function Readable(options) {
      if (!(this instanceof Readable))
        return new Readable(options);
      const isDuplex = this instanceof require_duplex();
      this._readableState = new ReadableState(options, this, isDuplex);
      if (options) {
        if (typeof options.read === "function")
          this._read = options.read;
        if (typeof options.destroy === "function")
          this._destroy = options.destroy;
        if (typeof options.construct === "function")
          this._construct = options.construct;
        if (options.signal && !isDuplex)
          addAbortSignal(options.signal, this);
      }
      Stream.call(this, options);
      destroyImpl.construct(this, () => {
        if (this._readableState.needReadable) {
          maybeReadMore(this, this._readableState);
        }
      });
    }
    Readable.prototype.destroy = destroyImpl.destroy;
    Readable.prototype._undestroy = destroyImpl.undestroy;
    Readable.prototype._destroy = function(err, cb) {
      cb(err);
    };
    Readable.prototype[EE.captureRejectionSymbol] = function(err) {
      this.destroy(err);
    };
    Readable.prototype[SymbolAsyncDispose] = function() {
      let error;
      if (!this.destroyed) {
        error = this.readableEnded ? null : new AbortError();
        this.destroy(error);
      }
      return new Promise2((resolve, reject) => eos(this, (err) => err && err !== error ? reject(err) : resolve(null)));
    };
    Readable.prototype.push = function(chunk, encoding) {
      return readableAddChunk(this, chunk, encoding, false);
    };
    Readable.prototype.unshift = function(chunk, encoding) {
      return readableAddChunk(this, chunk, encoding, true);
    };
    function readableAddChunk(stream, chunk, encoding, addToFront) {
      debug("readableAddChunk", chunk);
      const state = stream._readableState;
      let err;
      if ((state.state & kObjectMode) === 0) {
        if (typeof chunk === "string") {
          encoding = encoding || state.defaultEncoding;
          if (state.encoding !== encoding) {
            if (addToFront && state.encoding) {
              chunk = Buffer2.from(chunk, encoding).toString(state.encoding);
            } else {
              chunk = Buffer2.from(chunk, encoding);
              encoding = "";
            }
          }
        } else if (chunk instanceof Buffer2) {
          encoding = "";
        } else if (Stream._isUint8Array(chunk)) {
          chunk = Stream._uint8ArrayToBuffer(chunk);
          encoding = "";
        } else if (chunk != null) {
          err = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
        }
      }
      if (err) {
        errorOrDestroy(stream, err);
      } else if (chunk === null) {
        state.state &= ~kReading;
        onEofChunk(stream, state);
      } else if ((state.state & kObjectMode) !== 0 || chunk && chunk.length > 0) {
        if (addToFront) {
          if ((state.state & kEndEmitted) !== 0)
            errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
          else if (state.destroyed || state.errored)
            return false;
          else
            addChunk(stream, state, chunk, true);
        } else if (state.ended) {
          errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
        } else if (state.destroyed || state.errored) {
          return false;
        } else {
          state.state &= ~kReading;
          if (state.decoder && !encoding) {
            chunk = state.decoder.write(chunk);
            if (state.objectMode || chunk.length !== 0)
              addChunk(stream, state, chunk, false);
            else
              maybeReadMore(stream, state);
          } else {
            addChunk(stream, state, chunk, false);
          }
        }
      } else if (!addToFront) {
        state.state &= ~kReading;
        maybeReadMore(stream, state);
      }
      return !state.ended && (state.length < state.highWaterMark || state.length === 0);
    }
    function addChunk(stream, state, chunk, addToFront) {
      if (state.flowing && state.length === 0 && !state.sync && stream.listenerCount("data") > 0) {
        if ((state.state & kMultiAwaitDrain) !== 0) {
          state.awaitDrainWriters.clear();
        } else {
          state.awaitDrainWriters = null;
        }
        state.dataEmitted = true;
        stream.emit("data", chunk);
      } else {
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront)
          state.buffer.unshift(chunk);
        else
          state.buffer.push(chunk);
        if ((state.state & kNeedReadable) !== 0)
          emitReadable(stream);
      }
      maybeReadMore(stream, state);
    }
    Readable.prototype.isPaused = function() {
      const state = this._readableState;
      return state[kPaused] === true || state.flowing === false;
    };
    Readable.prototype.setEncoding = function(enc) {
      const decoder = new StringDecoder(enc);
      this._readableState.decoder = decoder;
      this._readableState.encoding = this._readableState.decoder.encoding;
      const buffer = this._readableState.buffer;
      let content = "";
      for (const data of buffer) {
        content += decoder.write(data);
      }
      buffer.clear();
      if (content !== "")
        buffer.push(content);
      this._readableState.length = content.length;
      return this;
    };
    var MAX_HWM = 1073741824;
    function computeNewHighWaterMark(n) {
      if (n > MAX_HWM) {
        throw new ERR_OUT_OF_RANGE("size", "<= 1GiB", n);
      } else {
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
      }
      return n;
    }
    function howMuchToRead(n, state) {
      if (n <= 0 || state.length === 0 && state.ended)
        return 0;
      if ((state.state & kObjectMode) !== 0)
        return 1;
      if (NumberIsNaN(n)) {
        if (state.flowing && state.length)
          return state.buffer.first().length;
        return state.length;
      }
      if (n <= state.length)
        return n;
      return state.ended ? state.length : 0;
    }
    Readable.prototype.read = function(n) {
      debug("read", n);
      if (n === void 0) {
        n = NaN;
      } else if (!NumberIsInteger(n)) {
        n = NumberParseInt(n, 10);
      }
      const state = this._readableState;
      const nOrig = n;
      if (n > state.highWaterMark)
        state.highWaterMark = computeNewHighWaterMark(n);
      if (n !== 0)
        state.state &= ~kEmittedReadable;
      if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
        debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended)
          endReadable(this);
        else
          emitReadable(this);
        return null;
      }
      n = howMuchToRead(n, state);
      if (n === 0 && state.ended) {
        if (state.length === 0)
          endReadable(this);
        return null;
      }
      let doRead = (state.state & kNeedReadable) !== 0;
      debug("need readable", doRead);
      if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
      }
      if (state.ended || state.reading || state.destroyed || state.errored || !state.constructed) {
        doRead = false;
        debug("reading, ended or constructing", doRead);
      } else if (doRead) {
        debug("do read");
        state.state |= kReading | kSync;
        if (state.length === 0)
          state.state |= kNeedReadable;
        try {
          this._read(state.highWaterMark);
        } catch (err) {
          errorOrDestroy(this, err);
        }
        state.state &= ~kSync;
        if (!state.reading)
          n = howMuchToRead(nOrig, state);
      }
      let ret;
      if (n > 0)
        ret = fromList(n, state);
      else
        ret = null;
      if (ret === null) {
        state.needReadable = state.length <= state.highWaterMark;
        n = 0;
      } else {
        state.length -= n;
        if (state.multiAwaitDrain) {
          state.awaitDrainWriters.clear();
        } else {
          state.awaitDrainWriters = null;
        }
      }
      if (state.length === 0) {
        if (!state.ended)
          state.needReadable = true;
        if (nOrig !== n && state.ended)
          endReadable(this);
      }
      if (ret !== null && !state.errorEmitted && !state.closeEmitted) {
        state.dataEmitted = true;
        this.emit("data", ret);
      }
      return ret;
    };
    function onEofChunk(stream, state) {
      debug("onEofChunk");
      if (state.ended)
        return;
      if (state.decoder) {
        const chunk = state.decoder.end();
        if (chunk && chunk.length) {
          state.buffer.push(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
        }
      }
      state.ended = true;
      if (state.sync) {
        emitReadable(stream);
      } else {
        state.needReadable = false;
        state.emittedReadable = true;
        emitReadable_(stream);
      }
    }
    function emitReadable(stream) {
      const state = stream._readableState;
      debug("emitReadable", state.needReadable, state.emittedReadable);
      state.needReadable = false;
      if (!state.emittedReadable) {
        debug("emitReadable", state.flowing);
        state.emittedReadable = true;
        process2.nextTick(emitReadable_, stream);
      }
    }
    function emitReadable_(stream) {
      const state = stream._readableState;
      debug("emitReadable_", state.destroyed, state.length, state.ended);
      if (!state.destroyed && !state.errored && (state.length || state.ended)) {
        stream.emit("readable");
        state.emittedReadable = false;
      }
      state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
      flow(stream);
    }
    function maybeReadMore(stream, state) {
      if (!state.readingMore && state.constructed) {
        state.readingMore = true;
        process2.nextTick(maybeReadMore_, stream, state);
      }
    }
    function maybeReadMore_(stream, state) {
      while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
        const len = state.length;
        debug("maybeReadMore read 0");
        stream.read(0);
        if (len === state.length)
          break;
      }
      state.readingMore = false;
    }
    Readable.prototype._read = function(n) {
      throw new ERR_METHOD_NOT_IMPLEMENTED("_read()");
    };
    Readable.prototype.pipe = function(dest, pipeOpts) {
      const src = this;
      const state = this._readableState;
      if (state.pipes.length === 1) {
        if (!state.multiAwaitDrain) {
          state.multiAwaitDrain = true;
          state.awaitDrainWriters = new SafeSet(state.awaitDrainWriters ? [state.awaitDrainWriters] : []);
        }
      }
      state.pipes.push(dest);
      debug("pipe count=%d opts=%j", state.pipes.length, pipeOpts);
      const doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process2.stdout && dest !== process2.stderr;
      const endFn = doEnd ? onend : unpipe;
      if (state.endEmitted)
        process2.nextTick(endFn);
      else
        src.once("end", endFn);
      dest.on("unpipe", onunpipe);
      function onunpipe(readable, unpipeInfo) {
        debug("onunpipe");
        if (readable === src) {
          if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
            unpipeInfo.hasUnpiped = true;
            cleanup();
          }
        }
      }
      function onend() {
        debug("onend");
        dest.end();
      }
      let ondrain;
      let cleanedUp = false;
      function cleanup() {
        debug("cleanup");
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        if (ondrain) {
          dest.removeListener("drain", ondrain);
        }
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend);
        src.removeListener("end", unpipe);
        src.removeListener("data", ondata);
        cleanedUp = true;
        if (ondrain && state.awaitDrainWriters && (!dest._writableState || dest._writableState.needDrain))
          ondrain();
      }
      function pause() {
        if (!cleanedUp) {
          if (state.pipes.length === 1 && state.pipes[0] === dest) {
            debug("false write response, pause", 0);
            state.awaitDrainWriters = dest;
            state.multiAwaitDrain = false;
          } else if (state.pipes.length > 1 && state.pipes.includes(dest)) {
            debug("false write response, pause", state.awaitDrainWriters.size);
            state.awaitDrainWriters.add(dest);
          }
          src.pause();
        }
        if (!ondrain) {
          ondrain = pipeOnDrain(src, dest);
          dest.on("drain", ondrain);
        }
      }
      src.on("data", ondata);
      function ondata(chunk) {
        debug("ondata");
        const ret = dest.write(chunk);
        debug("dest.write", ret);
        if (ret === false) {
          pause();
        }
      }
      function onerror(er) {
        debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (dest.listenerCount("error") === 0) {
          const s = dest._writableState || dest._readableState;
          if (s && !s.errorEmitted) {
            errorOrDestroy(dest, er);
          } else {
            dest.emit("error", er);
          }
        }
      }
      prependListener(dest, "error", onerror);
      function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
      }
      dest.once("close", onclose);
      function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
      }
      dest.once("finish", onfinish);
      function unpipe() {
        debug("unpipe");
        src.unpipe(dest);
      }
      dest.emit("pipe", src);
      if (dest.writableNeedDrain === true) {
        pause();
      } else if (!state.flowing) {
        debug("pipe resume");
        src.resume();
      }
      return dest;
    };
    function pipeOnDrain(src, dest) {
      return function pipeOnDrainFunctionResult() {
        const state = src._readableState;
        if (state.awaitDrainWriters === dest) {
          debug("pipeOnDrain", 1);
          state.awaitDrainWriters = null;
        } else if (state.multiAwaitDrain) {
          debug("pipeOnDrain", state.awaitDrainWriters.size);
          state.awaitDrainWriters.delete(dest);
        }
        if ((!state.awaitDrainWriters || state.awaitDrainWriters.size === 0) && src.listenerCount("data")) {
          src.resume();
        }
      };
    }
    Readable.prototype.unpipe = function(dest) {
      const state = this._readableState;
      const unpipeInfo = {
        hasUnpiped: false
      };
      if (state.pipes.length === 0)
        return this;
      if (!dest) {
        const dests = state.pipes;
        state.pipes = [];
        this.pause();
        for (let i = 0; i < dests.length; i++)
          dests[i].emit("unpipe", this, {
            hasUnpiped: false
          });
        return this;
      }
      const index = ArrayPrototypeIndexOf(state.pipes, dest);
      if (index === -1)
        return this;
      state.pipes.splice(index, 1);
      if (state.pipes.length === 0)
        this.pause();
      dest.emit("unpipe", this, unpipeInfo);
      return this;
    };
    Readable.prototype.on = function(ev, fn) {
      const res = Stream.prototype.on.call(this, ev, fn);
      const state = this._readableState;
      if (ev === "data") {
        state.readableListening = this.listenerCount("readable") > 0;
        if (state.flowing !== false)
          this.resume();
      } else if (ev === "readable") {
        if (!state.endEmitted && !state.readableListening) {
          state.readableListening = state.needReadable = true;
          state.flowing = false;
          state.emittedReadable = false;
          debug("on readable", state.length, state.reading);
          if (state.length) {
            emitReadable(this);
          } else if (!state.reading) {
            process2.nextTick(nReadingNextTick, this);
          }
        }
      }
      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    Readable.prototype.removeListener = function(ev, fn) {
      const res = Stream.prototype.removeListener.call(this, ev, fn);
      if (ev === "readable") {
        process2.nextTick(updateReadableListening, this);
      }
      return res;
    };
    Readable.prototype.off = Readable.prototype.removeListener;
    Readable.prototype.removeAllListeners = function(ev) {
      const res = Stream.prototype.removeAllListeners.apply(this, arguments);
      if (ev === "readable" || ev === void 0) {
        process2.nextTick(updateReadableListening, this);
      }
      return res;
    };
    function updateReadableListening(self2) {
      const state = self2._readableState;
      state.readableListening = self2.listenerCount("readable") > 0;
      if (state.resumeScheduled && state[kPaused] === false) {
        state.flowing = true;
      } else if (self2.listenerCount("data") > 0) {
        self2.resume();
      } else if (!state.readableListening) {
        state.flowing = null;
      }
    }
    function nReadingNextTick(self2) {
      debug("readable nexttick read 0");
      self2.read(0);
    }
    Readable.prototype.resume = function() {
      const state = this._readableState;
      if (!state.flowing) {
        debug("resume");
        state.flowing = !state.readableListening;
        resume(this, state);
      }
      state[kPaused] = false;
      return this;
    };
    function resume(stream, state) {
      if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        process2.nextTick(resume_, stream, state);
      }
    }
    function resume_(stream, state) {
      debug("resume", state.reading);
      if (!state.reading) {
        stream.read(0);
      }
      state.resumeScheduled = false;
      stream.emit("resume");
      flow(stream);
      if (state.flowing && !state.reading)
        stream.read(0);
    }
    Readable.prototype.pause = function() {
      debug("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      this._readableState[kPaused] = true;
      return this;
    };
    function flow(stream) {
      const state = stream._readableState;
      debug("flow", state.flowing);
      while (state.flowing && stream.read() !== null)
        ;
    }
    Readable.prototype.wrap = function(stream) {
      let paused = false;
      stream.on("data", (chunk) => {
        if (!this.push(chunk) && stream.pause) {
          paused = true;
          stream.pause();
        }
      });
      stream.on("end", () => {
        this.push(null);
      });
      stream.on("error", (err) => {
        errorOrDestroy(this, err);
      });
      stream.on("close", () => {
        this.destroy();
      });
      stream.on("destroy", () => {
        this.destroy();
      });
      this._read = () => {
        if (paused && stream.resume) {
          paused = false;
          stream.resume();
        }
      };
      const streamKeys = ObjectKeys(stream);
      for (let j = 1; j < streamKeys.length; j++) {
        const i = streamKeys[j];
        if (this[i] === void 0 && typeof stream[i] === "function") {
          this[i] = stream[i].bind(stream);
        }
      }
      return this;
    };
    Readable.prototype[SymbolAsyncIterator] = function() {
      return streamToAsyncIterator(this);
    };
    Readable.prototype.iterator = function(options) {
      if (options !== void 0) {
        validateObject(options, "options");
      }
      return streamToAsyncIterator(this, options);
    };
    function streamToAsyncIterator(stream, options) {
      if (typeof stream.read !== "function") {
        stream = Readable.wrap(stream, {
          objectMode: true
        });
      }
      const iter = createAsyncIterator(stream, options);
      iter.stream = stream;
      return iter;
    }
    async function* createAsyncIterator(stream, options) {
      let callback = nop;
      function next(resolve) {
        if (this === stream) {
          callback();
          callback = nop;
        } else {
          callback = resolve;
        }
      }
      stream.on("readable", next);
      let error;
      const cleanup = eos(
        stream,
        {
          writable: false
        },
        (err) => {
          error = err ? aggregateTwoErrors(error, err) : null;
          callback();
          callback = nop;
        }
      );
      try {
        while (true) {
          const chunk = stream.destroyed ? null : stream.read();
          if (chunk !== null) {
            yield chunk;
          } else if (error) {
            throw error;
          } else if (error === null) {
            return;
          } else {
            await new Promise2(next);
          }
        }
      } catch (err) {
        error = aggregateTwoErrors(error, err);
        throw error;
      } finally {
        if ((error || (options === null || options === void 0 ? void 0 : options.destroyOnReturn) !== false) && (error === void 0 || stream._readableState.autoDestroy)) {
          destroyImpl.destroyer(stream, null);
        } else {
          stream.off("readable", next);
          cleanup();
        }
      }
    }
    ObjectDefineProperties(Readable.prototype, {
      readable: {
        __proto__: null,
        get() {
          const r = this._readableState;
          return !!r && r.readable !== false && !r.destroyed && !r.errorEmitted && !r.endEmitted;
        },
        set(val) {
          if (this._readableState) {
            this._readableState.readable = !!val;
          }
        }
      },
      readableDidRead: {
        __proto__: null,
        enumerable: false,
        get: function() {
          return this._readableState.dataEmitted;
        }
      },
      readableAborted: {
        __proto__: null,
        enumerable: false,
        get: function() {
          return !!(this._readableState.readable !== false && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
        }
      },
      readableHighWaterMark: {
        __proto__: null,
        enumerable: false,
        get: function() {
          return this._readableState.highWaterMark;
        }
      },
      readableBuffer: {
        __proto__: null,
        enumerable: false,
        get: function() {
          return this._readableState && this._readableState.buffer;
        }
      },
      readableFlowing: {
        __proto__: null,
        enumerable: false,
        get: function() {
          return this._readableState.flowing;
        },
        set: function(state) {
          if (this._readableState) {
            this._readableState.flowing = state;
          }
        }
      },
      readableLength: {
        __proto__: null,
        enumerable: false,
        get() {
          return this._readableState.length;
        }
      },
      readableObjectMode: {
        __proto__: null,
        enumerable: false,
        get() {
          return this._readableState ? this._readableState.objectMode : false;
        }
      },
      readableEncoding: {
        __proto__: null,
        enumerable: false,
        get() {
          return this._readableState ? this._readableState.encoding : null;
        }
      },
      errored: {
        __proto__: null,
        enumerable: false,
        get() {
          return this._readableState ? this._readableState.errored : null;
        }
      },
      closed: {
        __proto__: null,
        get() {
          return this._readableState ? this._readableState.closed : false;
        }
      },
      destroyed: {
        __proto__: null,
        enumerable: false,
        get() {
          return this._readableState ? this._readableState.destroyed : false;
        },
        set(value) {
          if (!this._readableState) {
            return;
          }
          this._readableState.destroyed = value;
        }
      },
      readableEnded: {
        __proto__: null,
        enumerable: false,
        get() {
          return this._readableState ? this._readableState.endEmitted : false;
        }
      }
    });
    ObjectDefineProperties(ReadableState.prototype, {
      // Legacy getter for `pipesCount`.
      pipesCount: {
        __proto__: null,
        get() {
          return this.pipes.length;
        }
      },
      // Legacy property for `paused`.
      paused: {
        __proto__: null,
        get() {
          return this[kPaused] !== false;
        },
        set(value) {
          this[kPaused] = !!value;
        }
      }
    });
    Readable._fromList = fromList;
    function fromList(n, state) {
      if (state.length === 0)
        return null;
      let ret;
      if (state.objectMode)
        ret = state.buffer.shift();
      else if (!n || n >= state.length) {
        if (state.decoder)
          ret = state.buffer.join("");
        else if (state.buffer.length === 1)
          ret = state.buffer.first();
        else
          ret = state.buffer.concat(state.length);
        state.buffer.clear();
      } else {
        ret = state.buffer.consume(n, state.decoder);
      }
      return ret;
    }
    function endReadable(stream) {
      const state = stream._readableState;
      debug("endReadable", state.endEmitted);
      if (!state.endEmitted) {
        state.ended = true;
        process2.nextTick(endReadableNT, state, stream);
      }
    }
    function endReadableNT(state, stream) {
      debug("endReadableNT", state.endEmitted, state.length);
      if (!state.errored && !state.closeEmitted && !state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.emit("end");
        if (stream.writable && stream.allowHalfOpen === false) {
          process2.nextTick(endWritableNT, stream);
        } else if (state.autoDestroy) {
          const wState = stream._writableState;
          const autoDestroy = !wState || wState.autoDestroy && // We don't expect the writable to ever 'finish'
          // if writable is explicitly set to false.
          (wState.finished || wState.writable === false);
          if (autoDestroy) {
            stream.destroy();
          }
        }
      }
    }
    function endWritableNT(stream) {
      const writable = stream.writable && !stream.writableEnded && !stream.destroyed;
      if (writable) {
        stream.end();
      }
    }
    Readable.from = function(iterable, opts) {
      return from(Readable, iterable, opts);
    };
    var webStreamsAdapters;
    function lazyWebStreams() {
      if (webStreamsAdapters === void 0)
        webStreamsAdapters = {};
      return webStreamsAdapters;
    }
    Readable.fromWeb = function(readableStream, options) {
      return lazyWebStreams().newStreamReadableFromReadableStream(readableStream, options);
    };
    Readable.toWeb = function(streamReadable, options) {
      return lazyWebStreams().newReadableStreamFromStreamReadable(streamReadable, options);
    };
    Readable.wrap = function(src, options) {
      var _ref, _src$readableObjectMo;
      return new Readable({
        objectMode: (_ref = (_src$readableObjectMo = src.readableObjectMode) !== null && _src$readableObjectMo !== void 0 ? _src$readableObjectMo : src.objectMode) !== null && _ref !== void 0 ? _ref : true,
        ...options,
        destroy(err, callback) {
          destroyImpl.destroyer(src, err);
          callback(err);
        }
      }).wrap(src);
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/writable.js
var require_writable = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/writable.js"(exports2, module2) {
    "use strict";
    var process2 = require_process();
    var {
      ArrayPrototypeSlice,
      Error: Error2,
      FunctionPrototypeSymbolHasInstance,
      ObjectDefineProperty,
      ObjectDefineProperties,
      ObjectSetPrototypeOf,
      StringPrototypeToLowerCase,
      Symbol: Symbol2,
      SymbolHasInstance
    } = require_primordials();
    module2.exports = Writable;
    Writable.WritableState = WritableState;
    var { EventEmitter: EE } = require("events");
    var Stream = require_legacy().Stream;
    var { Buffer: Buffer2 } = require("buffer");
    var destroyImpl = require_destroy();
    var { addAbortSignal } = require_add_abort_signal();
    var { getHighWaterMark, getDefaultHighWaterMark } = require_state();
    var {
      ERR_INVALID_ARG_TYPE,
      ERR_METHOD_NOT_IMPLEMENTED,
      ERR_MULTIPLE_CALLBACK,
      ERR_STREAM_CANNOT_PIPE,
      ERR_STREAM_DESTROYED,
      ERR_STREAM_ALREADY_FINISHED,
      ERR_STREAM_NULL_VALUES,
      ERR_STREAM_WRITE_AFTER_END,
      ERR_UNKNOWN_ENCODING
    } = require_errors().codes;
    var { errorOrDestroy } = destroyImpl;
    ObjectSetPrototypeOf(Writable.prototype, Stream.prototype);
    ObjectSetPrototypeOf(Writable, Stream);
    function nop() {
    }
    var kOnFinished = Symbol2("kOnFinished");
    function WritableState(options, stream, isDuplex) {
      if (typeof isDuplex !== "boolean")
        isDuplex = stream instanceof require_duplex();
      this.objectMode = !!(options && options.objectMode);
      if (isDuplex)
        this.objectMode = this.objectMode || !!(options && options.writableObjectMode);
      this.highWaterMark = options ? getHighWaterMark(this, options, "writableHighWaterMark", isDuplex) : getDefaultHighWaterMark(false);
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      const noDecode = !!(options && options.decodeStrings === false);
      this.decodeStrings = !noDecode;
      this.defaultEncoding = options && options.defaultEncoding || "utf8";
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = onwrite.bind(void 0, stream);
      this.writecb = null;
      this.writelen = 0;
      this.afterWriteTickInfo = null;
      resetBuffer(this);
      this.pendingcb = 0;
      this.constructed = true;
      this.prefinished = false;
      this.errorEmitted = false;
      this.emitClose = !options || options.emitClose !== false;
      this.autoDestroy = !options || options.autoDestroy !== false;
      this.errored = null;
      this.closed = false;
      this.closeEmitted = false;
      this[kOnFinished] = [];
    }
    function resetBuffer(state) {
      state.buffered = [];
      state.bufferedIndex = 0;
      state.allBuffers = true;
      state.allNoop = true;
    }
    WritableState.prototype.getBuffer = function getBuffer() {
      return ArrayPrototypeSlice(this.buffered, this.bufferedIndex);
    };
    ObjectDefineProperty(WritableState.prototype, "bufferedRequestCount", {
      __proto__: null,
      get() {
        return this.buffered.length - this.bufferedIndex;
      }
    });
    function Writable(options) {
      const isDuplex = this instanceof require_duplex();
      if (!isDuplex && !FunctionPrototypeSymbolHasInstance(Writable, this))
        return new Writable(options);
      this._writableState = new WritableState(options, this, isDuplex);
      if (options) {
        if (typeof options.write === "function")
          this._write = options.write;
        if (typeof options.writev === "function")
          this._writev = options.writev;
        if (typeof options.destroy === "function")
          this._destroy = options.destroy;
        if (typeof options.final === "function")
          this._final = options.final;
        if (typeof options.construct === "function")
          this._construct = options.construct;
        if (options.signal)
          addAbortSignal(options.signal, this);
      }
      Stream.call(this, options);
      destroyImpl.construct(this, () => {
        const state = this._writableState;
        if (!state.writing) {
          clearBuffer(this, state);
        }
        finishMaybe(this, state);
      });
    }
    ObjectDefineProperty(Writable, SymbolHasInstance, {
      __proto__: null,
      value: function(object) {
        if (FunctionPrototypeSymbolHasInstance(this, object))
          return true;
        if (this !== Writable)
          return false;
        return object && object._writableState instanceof WritableState;
      }
    });
    Writable.prototype.pipe = function() {
      errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
    };
    function _write(stream, chunk, encoding, cb) {
      const state = stream._writableState;
      if (typeof encoding === "function") {
        cb = encoding;
        encoding = state.defaultEncoding;
      } else {
        if (!encoding)
          encoding = state.defaultEncoding;
        else if (encoding !== "buffer" && !Buffer2.isEncoding(encoding))
          throw new ERR_UNKNOWN_ENCODING(encoding);
        if (typeof cb !== "function")
          cb = nop;
      }
      if (chunk === null) {
        throw new ERR_STREAM_NULL_VALUES();
      } else if (!state.objectMode) {
        if (typeof chunk === "string") {
          if (state.decodeStrings !== false) {
            chunk = Buffer2.from(chunk, encoding);
            encoding = "buffer";
          }
        } else if (chunk instanceof Buffer2) {
          encoding = "buffer";
        } else if (Stream._isUint8Array(chunk)) {
          chunk = Stream._uint8ArrayToBuffer(chunk);
          encoding = "buffer";
        } else {
          throw new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
        }
      }
      let err;
      if (state.ending) {
        err = new ERR_STREAM_WRITE_AFTER_END();
      } else if (state.destroyed) {
        err = new ERR_STREAM_DESTROYED("write");
      }
      if (err) {
        process2.nextTick(cb, err);
        errorOrDestroy(stream, err, true);
        return err;
      }
      state.pendingcb++;
      return writeOrBuffer(stream, state, chunk, encoding, cb);
    }
    Writable.prototype.write = function(chunk, encoding, cb) {
      return _write(this, chunk, encoding, cb) === true;
    };
    Writable.prototype.cork = function() {
      this._writableState.corked++;
    };
    Writable.prototype.uncork = function() {
      const state = this._writableState;
      if (state.corked) {
        state.corked--;
        if (!state.writing)
          clearBuffer(this, state);
      }
    };
    Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
      if (typeof encoding === "string")
        encoding = StringPrototypeToLowerCase(encoding);
      if (!Buffer2.isEncoding(encoding))
        throw new ERR_UNKNOWN_ENCODING(encoding);
      this._writableState.defaultEncoding = encoding;
      return this;
    };
    function writeOrBuffer(stream, state, chunk, encoding, callback) {
      const len = state.objectMode ? 1 : chunk.length;
      state.length += len;
      const ret = state.length < state.highWaterMark;
      if (!ret)
        state.needDrain = true;
      if (state.writing || state.corked || state.errored || !state.constructed) {
        state.buffered.push({
          chunk,
          encoding,
          callback
        });
        if (state.allBuffers && encoding !== "buffer") {
          state.allBuffers = false;
        }
        if (state.allNoop && callback !== nop) {
          state.allNoop = false;
        }
      } else {
        state.writelen = len;
        state.writecb = callback;
        state.writing = true;
        state.sync = true;
        stream._write(chunk, encoding, state.onwrite);
        state.sync = false;
      }
      return ret && !state.errored && !state.destroyed;
    }
    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len;
      state.writecb = cb;
      state.writing = true;
      state.sync = true;
      if (state.destroyed)
        state.onwrite(new ERR_STREAM_DESTROYED("write"));
      else if (writev)
        stream._writev(chunk, state.onwrite);
      else
        stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }
    function onwriteError(stream, state, er, cb) {
      --state.pendingcb;
      cb(er);
      errorBuffer(state);
      errorOrDestroy(stream, er);
    }
    function onwrite(stream, er) {
      const state = stream._writableState;
      const sync = state.sync;
      const cb = state.writecb;
      if (typeof cb !== "function") {
        errorOrDestroy(stream, new ERR_MULTIPLE_CALLBACK());
        return;
      }
      state.writing = false;
      state.writecb = null;
      state.length -= state.writelen;
      state.writelen = 0;
      if (er) {
        er.stack;
        if (!state.errored) {
          state.errored = er;
        }
        if (stream._readableState && !stream._readableState.errored) {
          stream._readableState.errored = er;
        }
        if (sync) {
          process2.nextTick(onwriteError, stream, state, er, cb);
        } else {
          onwriteError(stream, state, er, cb);
        }
      } else {
        if (state.buffered.length > state.bufferedIndex) {
          clearBuffer(stream, state);
        }
        if (sync) {
          if (state.afterWriteTickInfo !== null && state.afterWriteTickInfo.cb === cb) {
            state.afterWriteTickInfo.count++;
          } else {
            state.afterWriteTickInfo = {
              count: 1,
              cb,
              stream,
              state
            };
            process2.nextTick(afterWriteTick, state.afterWriteTickInfo);
          }
        } else {
          afterWrite(stream, state, 1, cb);
        }
      }
    }
    function afterWriteTick({ stream, state, count, cb }) {
      state.afterWriteTickInfo = null;
      return afterWrite(stream, state, count, cb);
    }
    function afterWrite(stream, state, count, cb) {
      const needDrain = !state.ending && !stream.destroyed && state.length === 0 && state.needDrain;
      if (needDrain) {
        state.needDrain = false;
        stream.emit("drain");
      }
      while (count-- > 0) {
        state.pendingcb--;
        cb();
      }
      if (state.destroyed) {
        errorBuffer(state);
      }
      finishMaybe(stream, state);
    }
    function errorBuffer(state) {
      if (state.writing) {
        return;
      }
      for (let n = state.bufferedIndex; n < state.buffered.length; ++n) {
        var _state$errored;
        const { chunk, callback } = state.buffered[n];
        const len = state.objectMode ? 1 : chunk.length;
        state.length -= len;
        callback(
          (_state$errored = state.errored) !== null && _state$errored !== void 0 ? _state$errored : new ERR_STREAM_DESTROYED("write")
        );
      }
      const onfinishCallbacks = state[kOnFinished].splice(0);
      for (let i = 0; i < onfinishCallbacks.length; i++) {
        var _state$errored2;
        onfinishCallbacks[i](
          (_state$errored2 = state.errored) !== null && _state$errored2 !== void 0 ? _state$errored2 : new ERR_STREAM_DESTROYED("end")
        );
      }
      resetBuffer(state);
    }
    function clearBuffer(stream, state) {
      if (state.corked || state.bufferProcessing || state.destroyed || !state.constructed) {
        return;
      }
      const { buffered, bufferedIndex, objectMode } = state;
      const bufferedLength = buffered.length - bufferedIndex;
      if (!bufferedLength) {
        return;
      }
      let i = bufferedIndex;
      state.bufferProcessing = true;
      if (bufferedLength > 1 && stream._writev) {
        state.pendingcb -= bufferedLength - 1;
        const callback = state.allNoop ? nop : (err) => {
          for (let n = i; n < buffered.length; ++n) {
            buffered[n].callback(err);
          }
        };
        const chunks = state.allNoop && i === 0 ? buffered : ArrayPrototypeSlice(buffered, i);
        chunks.allBuffers = state.allBuffers;
        doWrite(stream, state, true, state.length, chunks, "", callback);
        resetBuffer(state);
      } else {
        do {
          const { chunk, encoding, callback } = buffered[i];
          buffered[i++] = null;
          const len = objectMode ? 1 : chunk.length;
          doWrite(stream, state, false, len, chunk, encoding, callback);
        } while (i < buffered.length && !state.writing);
        if (i === buffered.length) {
          resetBuffer(state);
        } else if (i > 256) {
          buffered.splice(0, i);
          state.bufferedIndex = 0;
        } else {
          state.bufferedIndex = i;
        }
      }
      state.bufferProcessing = false;
    }
    Writable.prototype._write = function(chunk, encoding, cb) {
      if (this._writev) {
        this._writev(
          [
            {
              chunk,
              encoding
            }
          ],
          cb
        );
      } else {
        throw new ERR_METHOD_NOT_IMPLEMENTED("_write()");
      }
    };
    Writable.prototype._writev = null;
    Writable.prototype.end = function(chunk, encoding, cb) {
      const state = this._writableState;
      if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      let err;
      if (chunk !== null && chunk !== void 0) {
        const ret = _write(this, chunk, encoding);
        if (ret instanceof Error2) {
          err = ret;
        }
      }
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }
      if (err) {
      } else if (!state.errored && !state.ending) {
        state.ending = true;
        finishMaybe(this, state, true);
        state.ended = true;
      } else if (state.finished) {
        err = new ERR_STREAM_ALREADY_FINISHED("end");
      } else if (state.destroyed) {
        err = new ERR_STREAM_DESTROYED("end");
      }
      if (typeof cb === "function") {
        if (err || state.finished) {
          process2.nextTick(cb, err);
        } else {
          state[kOnFinished].push(cb);
        }
      }
      return this;
    };
    function needFinish(state) {
      return state.ending && !state.destroyed && state.constructed && state.length === 0 && !state.errored && state.buffered.length === 0 && !state.finished && !state.writing && !state.errorEmitted && !state.closeEmitted;
    }
    function callFinal(stream, state) {
      let called = false;
      function onFinish(err) {
        if (called) {
          errorOrDestroy(stream, err !== null && err !== void 0 ? err : ERR_MULTIPLE_CALLBACK());
          return;
        }
        called = true;
        state.pendingcb--;
        if (err) {
          const onfinishCallbacks = state[kOnFinished].splice(0);
          for (let i = 0; i < onfinishCallbacks.length; i++) {
            onfinishCallbacks[i](err);
          }
          errorOrDestroy(stream, err, state.sync);
        } else if (needFinish(state)) {
          state.prefinished = true;
          stream.emit("prefinish");
          state.pendingcb++;
          process2.nextTick(finish, stream, state);
        }
      }
      state.sync = true;
      state.pendingcb++;
      try {
        stream._final(onFinish);
      } catch (err) {
        onFinish(err);
      }
      state.sync = false;
    }
    function prefinish(stream, state) {
      if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === "function" && !state.destroyed) {
          state.finalCalled = true;
          callFinal(stream, state);
        } else {
          state.prefinished = true;
          stream.emit("prefinish");
        }
      }
    }
    function finishMaybe(stream, state, sync) {
      if (needFinish(state)) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
          if (sync) {
            state.pendingcb++;
            process2.nextTick(
              (stream2, state2) => {
                if (needFinish(state2)) {
                  finish(stream2, state2);
                } else {
                  state2.pendingcb--;
                }
              },
              stream,
              state
            );
          } else if (needFinish(state)) {
            state.pendingcb++;
            finish(stream, state);
          }
        }
      }
    }
    function finish(stream, state) {
      state.pendingcb--;
      state.finished = true;
      const onfinishCallbacks = state[kOnFinished].splice(0);
      for (let i = 0; i < onfinishCallbacks.length; i++) {
        onfinishCallbacks[i]();
      }
      stream.emit("finish");
      if (state.autoDestroy) {
        const rState = stream._readableState;
        const autoDestroy = !rState || rState.autoDestroy && // We don't expect the readable to ever 'end'
        // if readable is explicitly set to false.
        (rState.endEmitted || rState.readable === false);
        if (autoDestroy) {
          stream.destroy();
        }
      }
    }
    ObjectDefineProperties(Writable.prototype, {
      closed: {
        __proto__: null,
        get() {
          return this._writableState ? this._writableState.closed : false;
        }
      },
      destroyed: {
        __proto__: null,
        get() {
          return this._writableState ? this._writableState.destroyed : false;
        },
        set(value) {
          if (this._writableState) {
            this._writableState.destroyed = value;
          }
        }
      },
      writable: {
        __proto__: null,
        get() {
          const w = this._writableState;
          return !!w && w.writable !== false && !w.destroyed && !w.errored && !w.ending && !w.ended;
        },
        set(val) {
          if (this._writableState) {
            this._writableState.writable = !!val;
          }
        }
      },
      writableFinished: {
        __proto__: null,
        get() {
          return this._writableState ? this._writableState.finished : false;
        }
      },
      writableObjectMode: {
        __proto__: null,
        get() {
          return this._writableState ? this._writableState.objectMode : false;
        }
      },
      writableBuffer: {
        __proto__: null,
        get() {
          return this._writableState && this._writableState.getBuffer();
        }
      },
      writableEnded: {
        __proto__: null,
        get() {
          return this._writableState ? this._writableState.ending : false;
        }
      },
      writableNeedDrain: {
        __proto__: null,
        get() {
          const wState = this._writableState;
          if (!wState)
            return false;
          return !wState.destroyed && !wState.ending && wState.needDrain;
        }
      },
      writableHighWaterMark: {
        __proto__: null,
        get() {
          return this._writableState && this._writableState.highWaterMark;
        }
      },
      writableCorked: {
        __proto__: null,
        get() {
          return this._writableState ? this._writableState.corked : 0;
        }
      },
      writableLength: {
        __proto__: null,
        get() {
          return this._writableState && this._writableState.length;
        }
      },
      errored: {
        __proto__: null,
        enumerable: false,
        get() {
          return this._writableState ? this._writableState.errored : null;
        }
      },
      writableAborted: {
        __proto__: null,
        enumerable: false,
        get: function() {
          return !!(this._writableState.writable !== false && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
        }
      }
    });
    var destroy = destroyImpl.destroy;
    Writable.prototype.destroy = function(err, cb) {
      const state = this._writableState;
      if (!state.destroyed && (state.bufferedIndex < state.buffered.length || state[kOnFinished].length)) {
        process2.nextTick(errorBuffer, state);
      }
      destroy.call(this, err, cb);
      return this;
    };
    Writable.prototype._undestroy = destroyImpl.undestroy;
    Writable.prototype._destroy = function(err, cb) {
      cb(err);
    };
    Writable.prototype[EE.captureRejectionSymbol] = function(err) {
      this.destroy(err);
    };
    var webStreamsAdapters;
    function lazyWebStreams() {
      if (webStreamsAdapters === void 0)
        webStreamsAdapters = {};
      return webStreamsAdapters;
    }
    Writable.fromWeb = function(writableStream, options) {
      return lazyWebStreams().newStreamWritableFromWritableStream(writableStream, options);
    };
    Writable.toWeb = function(streamWritable) {
      return lazyWebStreams().newWritableStreamFromStreamWritable(streamWritable);
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/duplexify.js
var require_duplexify = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/duplexify.js"(exports2, module2) {
    var process2 = require_process();
    var bufferModule = require("buffer");
    var {
      isReadable,
      isWritable,
      isIterable,
      isNodeStream,
      isReadableNodeStream,
      isWritableNodeStream,
      isDuplexNodeStream,
      isReadableStream,
      isWritableStream
    } = require_utils();
    var eos = require_end_of_stream();
    var {
      AbortError,
      codes: { ERR_INVALID_ARG_TYPE, ERR_INVALID_RETURN_VALUE }
    } = require_errors();
    var { destroyer } = require_destroy();
    var Duplex = require_duplex();
    var Readable = require_readable();
    var Writable = require_writable();
    var { createDeferredPromise } = require_util();
    var from = require_from();
    var Blob2 = globalThis.Blob || bufferModule.Blob;
    var isBlob = typeof Blob2 !== "undefined" ? function isBlob2(b) {
      return b instanceof Blob2;
    } : function isBlob2(b) {
      return false;
    };
    var AbortController = globalThis.AbortController || require_abort_controller().AbortController;
    var { FunctionPrototypeCall } = require_primordials();
    var Duplexify = class extends Duplex {
      constructor(options) {
        super(options);
        if ((options === null || options === void 0 ? void 0 : options.readable) === false) {
          this._readableState.readable = false;
          this._readableState.ended = true;
          this._readableState.endEmitted = true;
        }
        if ((options === null || options === void 0 ? void 0 : options.writable) === false) {
          this._writableState.writable = false;
          this._writableState.ending = true;
          this._writableState.ended = true;
          this._writableState.finished = true;
        }
      }
    };
    module2.exports = function duplexify(body, name) {
      if (isDuplexNodeStream(body)) {
        return body;
      }
      if (isReadableNodeStream(body)) {
        return _duplexify({
          readable: body
        });
      }
      if (isWritableNodeStream(body)) {
        return _duplexify({
          writable: body
        });
      }
      if (isNodeStream(body)) {
        return _duplexify({
          writable: false,
          readable: false
        });
      }
      if (isReadableStream(body)) {
        return _duplexify({
          readable: Readable.fromWeb(body)
        });
      }
      if (isWritableStream(body)) {
        return _duplexify({
          writable: Writable.fromWeb(body)
        });
      }
      if (typeof body === "function") {
        const { value, write, final, destroy } = fromAsyncGen(body);
        if (isIterable(value)) {
          return from(Duplexify, value, {
            // TODO (ronag): highWaterMark?
            objectMode: true,
            write,
            final,
            destroy
          });
        }
        const then2 = value === null || value === void 0 ? void 0 : value.then;
        if (typeof then2 === "function") {
          let d;
          const promise = FunctionPrototypeCall(
            then2,
            value,
            (val) => {
              if (val != null) {
                throw new ERR_INVALID_RETURN_VALUE("nully", "body", val);
              }
            },
            (err) => {
              destroyer(d, err);
            }
          );
          return d = new Duplexify({
            // TODO (ronag): highWaterMark?
            objectMode: true,
            readable: false,
            write,
            final(cb) {
              final(async () => {
                try {
                  await promise;
                  process2.nextTick(cb, null);
                } catch (err) {
                  process2.nextTick(cb, err);
                }
              });
            },
            destroy
          });
        }
        throw new ERR_INVALID_RETURN_VALUE("Iterable, AsyncIterable or AsyncFunction", name, value);
      }
      if (isBlob(body)) {
        return duplexify(body.arrayBuffer());
      }
      if (isIterable(body)) {
        return from(Duplexify, body, {
          // TODO (ronag): highWaterMark?
          objectMode: true,
          writable: false
        });
      }
      if (isReadableStream(body === null || body === void 0 ? void 0 : body.readable) && isWritableStream(body === null || body === void 0 ? void 0 : body.writable)) {
        return Duplexify.fromWeb(body);
      }
      if (typeof (body === null || body === void 0 ? void 0 : body.writable) === "object" || typeof (body === null || body === void 0 ? void 0 : body.readable) === "object") {
        const readable = body !== null && body !== void 0 && body.readable ? isReadableNodeStream(body === null || body === void 0 ? void 0 : body.readable) ? body === null || body === void 0 ? void 0 : body.readable : duplexify(body.readable) : void 0;
        const writable = body !== null && body !== void 0 && body.writable ? isWritableNodeStream(body === null || body === void 0 ? void 0 : body.writable) ? body === null || body === void 0 ? void 0 : body.writable : duplexify(body.writable) : void 0;
        return _duplexify({
          readable,
          writable
        });
      }
      const then = body === null || body === void 0 ? void 0 : body.then;
      if (typeof then === "function") {
        let d;
        FunctionPrototypeCall(
          then,
          body,
          (val) => {
            if (val != null) {
              d.push(val);
            }
            d.push(null);
          },
          (err) => {
            destroyer(d, err);
          }
        );
        return d = new Duplexify({
          objectMode: true,
          writable: false,
          read() {
          }
        });
      }
      throw new ERR_INVALID_ARG_TYPE(
        name,
        [
          "Blob",
          "ReadableStream",
          "WritableStream",
          "Stream",
          "Iterable",
          "AsyncIterable",
          "Function",
          "{ readable, writable } pair",
          "Promise"
        ],
        body
      );
    };
    function fromAsyncGen(fn) {
      let { promise, resolve } = createDeferredPromise();
      const ac = new AbortController();
      const signal = ac.signal;
      const value = fn(
        async function* () {
          while (true) {
            const _promise = promise;
            promise = null;
            const { chunk, done, cb } = await _promise;
            process2.nextTick(cb);
            if (done)
              return;
            if (signal.aborted)
              throw new AbortError(void 0, {
                cause: signal.reason
              });
            ({ promise, resolve } = createDeferredPromise());
            yield chunk;
          }
        }(),
        {
          signal
        }
      );
      return {
        value,
        write(chunk, encoding, cb) {
          const _resolve = resolve;
          resolve = null;
          _resolve({
            chunk,
            done: false,
            cb
          });
        },
        final(cb) {
          const _resolve = resolve;
          resolve = null;
          _resolve({
            done: true,
            cb
          });
        },
        destroy(err, cb) {
          ac.abort();
          cb(err);
        }
      };
    }
    function _duplexify(pair) {
      const r = pair.readable && typeof pair.readable.read !== "function" ? Readable.wrap(pair.readable) : pair.readable;
      const w = pair.writable;
      let readable = !!isReadable(r);
      let writable = !!isWritable(w);
      let ondrain;
      let onfinish;
      let onreadable;
      let onclose;
      let d;
      function onfinished(err) {
        const cb = onclose;
        onclose = null;
        if (cb) {
          cb(err);
        } else if (err) {
          d.destroy(err);
        }
      }
      d = new Duplexify({
        // TODO (ronag): highWaterMark?
        readableObjectMode: !!(r !== null && r !== void 0 && r.readableObjectMode),
        writableObjectMode: !!(w !== null && w !== void 0 && w.writableObjectMode),
        readable,
        writable
      });
      if (writable) {
        eos(w, (err) => {
          writable = false;
          if (err) {
            destroyer(r, err);
          }
          onfinished(err);
        });
        d._write = function(chunk, encoding, callback) {
          if (w.write(chunk, encoding)) {
            callback();
          } else {
            ondrain = callback;
          }
        };
        d._final = function(callback) {
          w.end();
          onfinish = callback;
        };
        w.on("drain", function() {
          if (ondrain) {
            const cb = ondrain;
            ondrain = null;
            cb();
          }
        });
        w.on("finish", function() {
          if (onfinish) {
            const cb = onfinish;
            onfinish = null;
            cb();
          }
        });
      }
      if (readable) {
        eos(r, (err) => {
          readable = false;
          if (err) {
            destroyer(r, err);
          }
          onfinished(err);
        });
        r.on("readable", function() {
          if (onreadable) {
            const cb = onreadable;
            onreadable = null;
            cb();
          }
        });
        r.on("end", function() {
          d.push(null);
        });
        d._read = function() {
          while (true) {
            const buf = r.read();
            if (buf === null) {
              onreadable = d._read;
              return;
            }
            if (!d.push(buf)) {
              return;
            }
          }
        };
      }
      d._destroy = function(err, callback) {
        if (!err && onclose !== null) {
          err = new AbortError();
        }
        onreadable = null;
        ondrain = null;
        onfinish = null;
        if (onclose === null) {
          callback(err);
        } else {
          onclose = callback;
          destroyer(w, err);
          destroyer(r, err);
        }
      };
      return d;
    }
  }
});

// node_modules/readable-stream/lib/internal/streams/duplex.js
var require_duplex = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/duplex.js"(exports2, module2) {
    "use strict";
    var {
      ObjectDefineProperties,
      ObjectGetOwnPropertyDescriptor,
      ObjectKeys,
      ObjectSetPrototypeOf
    } = require_primordials();
    module2.exports = Duplex;
    var Readable = require_readable();
    var Writable = require_writable();
    ObjectSetPrototypeOf(Duplex.prototype, Readable.prototype);
    ObjectSetPrototypeOf(Duplex, Readable);
    {
      const keys = ObjectKeys(Writable.prototype);
      for (let i = 0; i < keys.length; i++) {
        const method = keys[i];
        if (!Duplex.prototype[method])
          Duplex.prototype[method] = Writable.prototype[method];
      }
    }
    function Duplex(options) {
      if (!(this instanceof Duplex))
        return new Duplex(options);
      Readable.call(this, options);
      Writable.call(this, options);
      if (options) {
        this.allowHalfOpen = options.allowHalfOpen !== false;
        if (options.readable === false) {
          this._readableState.readable = false;
          this._readableState.ended = true;
          this._readableState.endEmitted = true;
        }
        if (options.writable === false) {
          this._writableState.writable = false;
          this._writableState.ending = true;
          this._writableState.ended = true;
          this._writableState.finished = true;
        }
      } else {
        this.allowHalfOpen = true;
      }
    }
    ObjectDefineProperties(Duplex.prototype, {
      writable: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writable")
      },
      writableHighWaterMark: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writableHighWaterMark")
      },
      writableObjectMode: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writableObjectMode")
      },
      writableBuffer: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writableBuffer")
      },
      writableLength: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writableLength")
      },
      writableFinished: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writableFinished")
      },
      writableCorked: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writableCorked")
      },
      writableEnded: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writableEnded")
      },
      writableNeedDrain: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writableNeedDrain")
      },
      destroyed: {
        __proto__: null,
        get() {
          if (this._readableState === void 0 || this._writableState === void 0) {
            return false;
          }
          return this._readableState.destroyed && this._writableState.destroyed;
        },
        set(value) {
          if (this._readableState && this._writableState) {
            this._readableState.destroyed = value;
            this._writableState.destroyed = value;
          }
        }
      }
    });
    var webStreamsAdapters;
    function lazyWebStreams() {
      if (webStreamsAdapters === void 0)
        webStreamsAdapters = {};
      return webStreamsAdapters;
    }
    Duplex.fromWeb = function(pair, options) {
      return lazyWebStreams().newStreamDuplexFromReadableWritablePair(pair, options);
    };
    Duplex.toWeb = function(duplex) {
      return lazyWebStreams().newReadableWritablePairFromDuplex(duplex);
    };
    var duplexify;
    Duplex.from = function(body) {
      if (!duplexify) {
        duplexify = require_duplexify();
      }
      return duplexify(body, "body");
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/transform.js
var require_transform = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/transform.js"(exports2, module2) {
    "use strict";
    var { ObjectSetPrototypeOf, Symbol: Symbol2 } = require_primordials();
    module2.exports = Transform;
    var { ERR_METHOD_NOT_IMPLEMENTED } = require_errors().codes;
    var Duplex = require_duplex();
    var { getHighWaterMark } = require_state();
    ObjectSetPrototypeOf(Transform.prototype, Duplex.prototype);
    ObjectSetPrototypeOf(Transform, Duplex);
    var kCallback = Symbol2("kCallback");
    function Transform(options) {
      if (!(this instanceof Transform))
        return new Transform(options);
      const readableHighWaterMark = options ? getHighWaterMark(this, options, "readableHighWaterMark", true) : null;
      if (readableHighWaterMark === 0) {
        options = {
          ...options,
          highWaterMark: null,
          readableHighWaterMark,
          // TODO (ronag): 0 is not optimal since we have
          // a "bug" where we check needDrain before calling _write and not after.
          // Refs: https://github.com/nodejs/node/pull/32887
          // Refs: https://github.com/nodejs/node/pull/35941
          writableHighWaterMark: options.writableHighWaterMark || 0
        };
      }
      Duplex.call(this, options);
      this._readableState.sync = false;
      this[kCallback] = null;
      if (options) {
        if (typeof options.transform === "function")
          this._transform = options.transform;
        if (typeof options.flush === "function")
          this._flush = options.flush;
      }
      this.on("prefinish", prefinish);
    }
    function final(cb) {
      if (typeof this._flush === "function" && !this.destroyed) {
        this._flush((er, data) => {
          if (er) {
            if (cb) {
              cb(er);
            } else {
              this.destroy(er);
            }
            return;
          }
          if (data != null) {
            this.push(data);
          }
          this.push(null);
          if (cb) {
            cb();
          }
        });
      } else {
        this.push(null);
        if (cb) {
          cb();
        }
      }
    }
    function prefinish() {
      if (this._final !== final) {
        final.call(this);
      }
    }
    Transform.prototype._final = final;
    Transform.prototype._transform = function(chunk, encoding, callback) {
      throw new ERR_METHOD_NOT_IMPLEMENTED("_transform()");
    };
    Transform.prototype._write = function(chunk, encoding, callback) {
      const rState = this._readableState;
      const wState = this._writableState;
      const length = rState.length;
      this._transform(chunk, encoding, (err, val) => {
        if (err) {
          callback(err);
          return;
        }
        if (val != null) {
          this.push(val);
        }
        if (wState.ended || // Backwards compat.
        length === rState.length || // Backwards compat.
        rState.length < rState.highWaterMark) {
          callback();
        } else {
          this[kCallback] = callback;
        }
      });
    };
    Transform.prototype._read = function() {
      if (this[kCallback]) {
        const callback = this[kCallback];
        this[kCallback] = null;
        callback();
      }
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/passthrough.js
var require_passthrough = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/passthrough.js"(exports2, module2) {
    "use strict";
    var { ObjectSetPrototypeOf } = require_primordials();
    module2.exports = PassThrough;
    var Transform = require_transform();
    ObjectSetPrototypeOf(PassThrough.prototype, Transform.prototype);
    ObjectSetPrototypeOf(PassThrough, Transform);
    function PassThrough(options) {
      if (!(this instanceof PassThrough))
        return new PassThrough(options);
      Transform.call(this, options);
    }
    PassThrough.prototype._transform = function(chunk, encoding, cb) {
      cb(null, chunk);
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/pipeline.js
var require_pipeline = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/pipeline.js"(exports2, module2) {
    var process2 = require_process();
    var { ArrayIsArray, Promise: Promise2, SymbolAsyncIterator, SymbolDispose } = require_primordials();
    var eos = require_end_of_stream();
    var { once } = require_util();
    var destroyImpl = require_destroy();
    var Duplex = require_duplex();
    var {
      aggregateTwoErrors,
      codes: {
        ERR_INVALID_ARG_TYPE,
        ERR_INVALID_RETURN_VALUE,
        ERR_MISSING_ARGS,
        ERR_STREAM_DESTROYED,
        ERR_STREAM_PREMATURE_CLOSE
      },
      AbortError
    } = require_errors();
    var { validateFunction, validateAbortSignal } = require_validators();
    var {
      isIterable,
      isReadable,
      isReadableNodeStream,
      isNodeStream,
      isTransformStream,
      isWebStream,
      isReadableStream,
      isReadableFinished
    } = require_utils();
    var AbortController = globalThis.AbortController || require_abort_controller().AbortController;
    var PassThrough;
    var Readable;
    var addAbortListener;
    function destroyer(stream, reading, writing) {
      let finished = false;
      stream.on("close", () => {
        finished = true;
      });
      const cleanup = eos(
        stream,
        {
          readable: reading,
          writable: writing
        },
        (err) => {
          finished = !err;
        }
      );
      return {
        destroy: (err) => {
          if (finished)
            return;
          finished = true;
          destroyImpl.destroyer(stream, err || new ERR_STREAM_DESTROYED("pipe"));
        },
        cleanup
      };
    }
    function popCallback(streams) {
      validateFunction(streams[streams.length - 1], "streams[stream.length - 1]");
      return streams.pop();
    }
    function makeAsyncIterable(val) {
      if (isIterable(val)) {
        return val;
      } else if (isReadableNodeStream(val)) {
        return fromReadable(val);
      }
      throw new ERR_INVALID_ARG_TYPE("val", ["Readable", "Iterable", "AsyncIterable"], val);
    }
    async function* fromReadable(val) {
      if (!Readable) {
        Readable = require_readable();
      }
      yield* Readable.prototype[SymbolAsyncIterator].call(val);
    }
    async function pumpToNode(iterable, writable, finish, { end }) {
      let error;
      let onresolve = null;
      const resume = (err) => {
        if (err) {
          error = err;
        }
        if (onresolve) {
          const callback = onresolve;
          onresolve = null;
          callback();
        }
      };
      const wait = () => new Promise2((resolve, reject) => {
        if (error) {
          reject(error);
        } else {
          onresolve = () => {
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          };
        }
      });
      writable.on("drain", resume);
      const cleanup = eos(
        writable,
        {
          readable: false
        },
        resume
      );
      try {
        if (writable.writableNeedDrain) {
          await wait();
        }
        for await (const chunk of iterable) {
          if (!writable.write(chunk)) {
            await wait();
          }
        }
        if (end) {
          writable.end();
          await wait();
        }
        finish();
      } catch (err) {
        finish(error !== err ? aggregateTwoErrors(error, err) : err);
      } finally {
        cleanup();
        writable.off("drain", resume);
      }
    }
    async function pumpToWeb(readable, writable, finish, { end }) {
      if (isTransformStream(writable)) {
        writable = writable.writable;
      }
      const writer = writable.getWriter();
      try {
        for await (const chunk of readable) {
          await writer.ready;
          writer.write(chunk).catch(() => {
          });
        }
        await writer.ready;
        if (end) {
          await writer.close();
        }
        finish();
      } catch (err) {
        try {
          await writer.abort(err);
          finish(err);
        } catch (err2) {
          finish(err2);
        }
      }
    }
    function pipeline(...streams) {
      return pipelineImpl(streams, once(popCallback(streams)));
    }
    function pipelineImpl(streams, callback, opts) {
      if (streams.length === 1 && ArrayIsArray(streams[0])) {
        streams = streams[0];
      }
      if (streams.length < 2) {
        throw new ERR_MISSING_ARGS("streams");
      }
      const ac = new AbortController();
      const signal = ac.signal;
      const outerSignal = opts === null || opts === void 0 ? void 0 : opts.signal;
      const lastStreamCleanup = [];
      validateAbortSignal(outerSignal, "options.signal");
      function abort() {
        finishImpl(new AbortError());
      }
      addAbortListener = addAbortListener || require_util().addAbortListener;
      let disposable;
      if (outerSignal) {
        disposable = addAbortListener(outerSignal, abort);
      }
      let error;
      let value;
      const destroys = [];
      let finishCount = 0;
      function finish(err) {
        finishImpl(err, --finishCount === 0);
      }
      function finishImpl(err, final) {
        var _disposable;
        if (err && (!error || error.code === "ERR_STREAM_PREMATURE_CLOSE")) {
          error = err;
        }
        if (!error && !final) {
          return;
        }
        while (destroys.length) {
          destroys.shift()(error);
        }
        ;
        (_disposable = disposable) === null || _disposable === void 0 ? void 0 : _disposable[SymbolDispose]();
        ac.abort();
        if (final) {
          if (!error) {
            lastStreamCleanup.forEach((fn) => fn());
          }
          process2.nextTick(callback, error, value);
        }
      }
      let ret;
      for (let i = 0; i < streams.length; i++) {
        const stream = streams[i];
        const reading = i < streams.length - 1;
        const writing = i > 0;
        const end = reading || (opts === null || opts === void 0 ? void 0 : opts.end) !== false;
        const isLastStream = i === streams.length - 1;
        if (isNodeStream(stream)) {
          let onError2 = function(err) {
            if (err && err.name !== "AbortError" && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
              finish(err);
            }
          };
          var onError = onError2;
          if (end) {
            const { destroy, cleanup } = destroyer(stream, reading, writing);
            destroys.push(destroy);
            if (isReadable(stream) && isLastStream) {
              lastStreamCleanup.push(cleanup);
            }
          }
          stream.on("error", onError2);
          if (isReadable(stream) && isLastStream) {
            lastStreamCleanup.push(() => {
              stream.removeListener("error", onError2);
            });
          }
        }
        if (i === 0) {
          if (typeof stream === "function") {
            ret = stream({
              signal
            });
            if (!isIterable(ret)) {
              throw new ERR_INVALID_RETURN_VALUE("Iterable, AsyncIterable or Stream", "source", ret);
            }
          } else if (isIterable(stream) || isReadableNodeStream(stream) || isTransformStream(stream)) {
            ret = stream;
          } else {
            ret = Duplex.from(stream);
          }
        } else if (typeof stream === "function") {
          if (isTransformStream(ret)) {
            var _ret;
            ret = makeAsyncIterable((_ret = ret) === null || _ret === void 0 ? void 0 : _ret.readable);
          } else {
            ret = makeAsyncIterable(ret);
          }
          ret = stream(ret, {
            signal
          });
          if (reading) {
            if (!isIterable(ret, true)) {
              throw new ERR_INVALID_RETURN_VALUE("AsyncIterable", `transform[${i - 1}]`, ret);
            }
          } else {
            var _ret2;
            if (!PassThrough) {
              PassThrough = require_passthrough();
            }
            const pt = new PassThrough({
              objectMode: true
            });
            const then = (_ret2 = ret) === null || _ret2 === void 0 ? void 0 : _ret2.then;
            if (typeof then === "function") {
              finishCount++;
              then.call(
                ret,
                (val) => {
                  value = val;
                  if (val != null) {
                    pt.write(val);
                  }
                  if (end) {
                    pt.end();
                  }
                  process2.nextTick(finish);
                },
                (err) => {
                  pt.destroy(err);
                  process2.nextTick(finish, err);
                }
              );
            } else if (isIterable(ret, true)) {
              finishCount++;
              pumpToNode(ret, pt, finish, {
                end
              });
            } else if (isReadableStream(ret) || isTransformStream(ret)) {
              const toRead = ret.readable || ret;
              finishCount++;
              pumpToNode(toRead, pt, finish, {
                end
              });
            } else {
              throw new ERR_INVALID_RETURN_VALUE("AsyncIterable or Promise", "destination", ret);
            }
            ret = pt;
            const { destroy, cleanup } = destroyer(ret, false, true);
            destroys.push(destroy);
            if (isLastStream) {
              lastStreamCleanup.push(cleanup);
            }
          }
        } else if (isNodeStream(stream)) {
          if (isReadableNodeStream(ret)) {
            finishCount += 2;
            const cleanup = pipe(ret, stream, finish, {
              end
            });
            if (isReadable(stream) && isLastStream) {
              lastStreamCleanup.push(cleanup);
            }
          } else if (isTransformStream(ret) || isReadableStream(ret)) {
            const toRead = ret.readable || ret;
            finishCount++;
            pumpToNode(toRead, stream, finish, {
              end
            });
          } else if (isIterable(ret)) {
            finishCount++;
            pumpToNode(ret, stream, finish, {
              end
            });
          } else {
            throw new ERR_INVALID_ARG_TYPE(
              "val",
              ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
              ret
            );
          }
          ret = stream;
        } else if (isWebStream(stream)) {
          if (isReadableNodeStream(ret)) {
            finishCount++;
            pumpToWeb(makeAsyncIterable(ret), stream, finish, {
              end
            });
          } else if (isReadableStream(ret) || isIterable(ret)) {
            finishCount++;
            pumpToWeb(ret, stream, finish, {
              end
            });
          } else if (isTransformStream(ret)) {
            finishCount++;
            pumpToWeb(ret.readable, stream, finish, {
              end
            });
          } else {
            throw new ERR_INVALID_ARG_TYPE(
              "val",
              ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
              ret
            );
          }
          ret = stream;
        } else {
          ret = Duplex.from(stream);
        }
      }
      if (signal !== null && signal !== void 0 && signal.aborted || outerSignal !== null && outerSignal !== void 0 && outerSignal.aborted) {
        process2.nextTick(abort);
      }
      return ret;
    }
    function pipe(src, dst, finish, { end }) {
      let ended = false;
      dst.on("close", () => {
        if (!ended) {
          finish(new ERR_STREAM_PREMATURE_CLOSE());
        }
      });
      src.pipe(dst, {
        end: false
      });
      if (end) {
        let endFn2 = function() {
          ended = true;
          dst.end();
        };
        var endFn = endFn2;
        if (isReadableFinished(src)) {
          process2.nextTick(endFn2);
        } else {
          src.once("end", endFn2);
        }
      } else {
        finish();
      }
      eos(
        src,
        {
          readable: true,
          writable: false
        },
        (err) => {
          const rState = src._readableState;
          if (err && err.code === "ERR_STREAM_PREMATURE_CLOSE" && rState && rState.ended && !rState.errored && !rState.errorEmitted) {
            src.once("end", finish).once("error", finish);
          } else {
            finish(err);
          }
        }
      );
      return eos(
        dst,
        {
          readable: false,
          writable: true
        },
        finish
      );
    }
    module2.exports = {
      pipelineImpl,
      pipeline
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/compose.js
var require_compose = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/compose.js"(exports2, module2) {
    "use strict";
    var { pipeline } = require_pipeline();
    var Duplex = require_duplex();
    var { destroyer } = require_destroy();
    var {
      isNodeStream,
      isReadable,
      isWritable,
      isWebStream,
      isTransformStream,
      isWritableStream,
      isReadableStream
    } = require_utils();
    var {
      AbortError,
      codes: { ERR_INVALID_ARG_VALUE, ERR_MISSING_ARGS }
    } = require_errors();
    var eos = require_end_of_stream();
    module2.exports = function compose(...streams) {
      if (streams.length === 0) {
        throw new ERR_MISSING_ARGS("streams");
      }
      if (streams.length === 1) {
        return Duplex.from(streams[0]);
      }
      const orgStreams = [...streams];
      if (typeof streams[0] === "function") {
        streams[0] = Duplex.from(streams[0]);
      }
      if (typeof streams[streams.length - 1] === "function") {
        const idx = streams.length - 1;
        streams[idx] = Duplex.from(streams[idx]);
      }
      for (let n = 0; n < streams.length; ++n) {
        if (!isNodeStream(streams[n]) && !isWebStream(streams[n])) {
          continue;
        }
        if (n < streams.length - 1 && !(isReadable(streams[n]) || isReadableStream(streams[n]) || isTransformStream(streams[n]))) {
          throw new ERR_INVALID_ARG_VALUE(`streams[${n}]`, orgStreams[n], "must be readable");
        }
        if (n > 0 && !(isWritable(streams[n]) || isWritableStream(streams[n]) || isTransformStream(streams[n]))) {
          throw new ERR_INVALID_ARG_VALUE(`streams[${n}]`, orgStreams[n], "must be writable");
        }
      }
      let ondrain;
      let onfinish;
      let onreadable;
      let onclose;
      let d;
      function onfinished(err) {
        const cb = onclose;
        onclose = null;
        if (cb) {
          cb(err);
        } else if (err) {
          d.destroy(err);
        } else if (!readable && !writable) {
          d.destroy();
        }
      }
      const head = streams[0];
      const tail = pipeline(streams, onfinished);
      const writable = !!(isWritable(head) || isWritableStream(head) || isTransformStream(head));
      const readable = !!(isReadable(tail) || isReadableStream(tail) || isTransformStream(tail));
      d = new Duplex({
        // TODO (ronag): highWaterMark?
        writableObjectMode: !!(head !== null && head !== void 0 && head.writableObjectMode),
        readableObjectMode: !!(tail !== null && tail !== void 0 && tail.readableObjectMode),
        writable,
        readable
      });
      if (writable) {
        if (isNodeStream(head)) {
          d._write = function(chunk, encoding, callback) {
            if (head.write(chunk, encoding)) {
              callback();
            } else {
              ondrain = callback;
            }
          };
          d._final = function(callback) {
            head.end();
            onfinish = callback;
          };
          head.on("drain", function() {
            if (ondrain) {
              const cb = ondrain;
              ondrain = null;
              cb();
            }
          });
        } else if (isWebStream(head)) {
          const writable2 = isTransformStream(head) ? head.writable : head;
          const writer = writable2.getWriter();
          d._write = async function(chunk, encoding, callback) {
            try {
              await writer.ready;
              writer.write(chunk).catch(() => {
              });
              callback();
            } catch (err) {
              callback(err);
            }
          };
          d._final = async function(callback) {
            try {
              await writer.ready;
              writer.close().catch(() => {
              });
              onfinish = callback;
            } catch (err) {
              callback(err);
            }
          };
        }
        const toRead = isTransformStream(tail) ? tail.readable : tail;
        eos(toRead, () => {
          if (onfinish) {
            const cb = onfinish;
            onfinish = null;
            cb();
          }
        });
      }
      if (readable) {
        if (isNodeStream(tail)) {
          tail.on("readable", function() {
            if (onreadable) {
              const cb = onreadable;
              onreadable = null;
              cb();
            }
          });
          tail.on("end", function() {
            d.push(null);
          });
          d._read = function() {
            while (true) {
              const buf = tail.read();
              if (buf === null) {
                onreadable = d._read;
                return;
              }
              if (!d.push(buf)) {
                return;
              }
            }
          };
        } else if (isWebStream(tail)) {
          const readable2 = isTransformStream(tail) ? tail.readable : tail;
          const reader = readable2.getReader();
          d._read = async function() {
            while (true) {
              try {
                const { value, done } = await reader.read();
                if (!d.push(value)) {
                  return;
                }
                if (done) {
                  d.push(null);
                  return;
                }
              } catch {
                return;
              }
            }
          };
        }
      }
      d._destroy = function(err, callback) {
        if (!err && onclose !== null) {
          err = new AbortError();
        }
        onreadable = null;
        ondrain = null;
        onfinish = null;
        if (onclose === null) {
          callback(err);
        } else {
          onclose = callback;
          if (isNodeStream(tail)) {
            destroyer(tail, err);
          }
        }
      };
      return d;
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/operators.js
var require_operators = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/operators.js"(exports2, module2) {
    "use strict";
    var AbortController = globalThis.AbortController || require_abort_controller().AbortController;
    var {
      codes: { ERR_INVALID_ARG_VALUE, ERR_INVALID_ARG_TYPE, ERR_MISSING_ARGS, ERR_OUT_OF_RANGE },
      AbortError
    } = require_errors();
    var { validateAbortSignal, validateInteger, validateObject } = require_validators();
    var kWeakHandler = require_primordials().Symbol("kWeak");
    var kResistStopPropagation = require_primordials().Symbol("kResistStopPropagation");
    var { finished } = require_end_of_stream();
    var staticCompose = require_compose();
    var { addAbortSignalNoValidate } = require_add_abort_signal();
    var { isWritable, isNodeStream } = require_utils();
    var { deprecate } = require_util();
    var {
      ArrayPrototypePush,
      Boolean: Boolean2,
      MathFloor,
      Number: Number2,
      NumberIsNaN,
      Promise: Promise2,
      PromiseReject,
      PromiseResolve,
      PromisePrototypeThen,
      Symbol: Symbol2
    } = require_primordials();
    var kEmpty = Symbol2("kEmpty");
    var kEof = Symbol2("kEof");
    function compose(stream, options) {
      if (options != null) {
        validateObject(options, "options");
      }
      if ((options === null || options === void 0 ? void 0 : options.signal) != null) {
        validateAbortSignal(options.signal, "options.signal");
      }
      if (isNodeStream(stream) && !isWritable(stream)) {
        throw new ERR_INVALID_ARG_VALUE("stream", stream, "must be writable");
      }
      const composedStream = staticCompose(this, stream);
      if (options !== null && options !== void 0 && options.signal) {
        addAbortSignalNoValidate(options.signal, composedStream);
      }
      return composedStream;
    }
    function map(fn, options) {
      if (typeof fn !== "function") {
        throw new ERR_INVALID_ARG_TYPE("fn", ["Function", "AsyncFunction"], fn);
      }
      if (options != null) {
        validateObject(options, "options");
      }
      if ((options === null || options === void 0 ? void 0 : options.signal) != null) {
        validateAbortSignal(options.signal, "options.signal");
      }
      let concurrency = 1;
      if ((options === null || options === void 0 ? void 0 : options.concurrency) != null) {
        concurrency = MathFloor(options.concurrency);
      }
      let highWaterMark = concurrency - 1;
      if ((options === null || options === void 0 ? void 0 : options.highWaterMark) != null) {
        highWaterMark = MathFloor(options.highWaterMark);
      }
      validateInteger(concurrency, "options.concurrency", 1);
      validateInteger(highWaterMark, "options.highWaterMark", 0);
      highWaterMark += concurrency;
      return async function* map2() {
        const signal = require_util().AbortSignalAny(
          [options === null || options === void 0 ? void 0 : options.signal].filter(Boolean2)
        );
        const stream = this;
        const queue = [];
        const signalOpt = {
          signal
        };
        let next;
        let resume;
        let done = false;
        let cnt = 0;
        function onCatch() {
          done = true;
          afterItemProcessed();
        }
        function afterItemProcessed() {
          cnt -= 1;
          maybeResume();
        }
        function maybeResume() {
          if (resume && !done && cnt < concurrency && queue.length < highWaterMark) {
            resume();
            resume = null;
          }
        }
        async function pump() {
          try {
            for await (let val of stream) {
              if (done) {
                return;
              }
              if (signal.aborted) {
                throw new AbortError();
              }
              try {
                val = fn(val, signalOpt);
                if (val === kEmpty) {
                  continue;
                }
                val = PromiseResolve(val);
              } catch (err) {
                val = PromiseReject(err);
              }
              cnt += 1;
              PromisePrototypeThen(val, afterItemProcessed, onCatch);
              queue.push(val);
              if (next) {
                next();
                next = null;
              }
              if (!done && (queue.length >= highWaterMark || cnt >= concurrency)) {
                await new Promise2((resolve) => {
                  resume = resolve;
                });
              }
            }
            queue.push(kEof);
          } catch (err) {
            const val = PromiseReject(err);
            PromisePrototypeThen(val, afterItemProcessed, onCatch);
            queue.push(val);
          } finally {
            done = true;
            if (next) {
              next();
              next = null;
            }
          }
        }
        pump();
        try {
          while (true) {
            while (queue.length > 0) {
              const val = await queue[0];
              if (val === kEof) {
                return;
              }
              if (signal.aborted) {
                throw new AbortError();
              }
              if (val !== kEmpty) {
                yield val;
              }
              queue.shift();
              maybeResume();
            }
            await new Promise2((resolve) => {
              next = resolve;
            });
          }
        } finally {
          done = true;
          if (resume) {
            resume();
            resume = null;
          }
        }
      }.call(this);
    }
    function asIndexedPairs(options = void 0) {
      if (options != null) {
        validateObject(options, "options");
      }
      if ((options === null || options === void 0 ? void 0 : options.signal) != null) {
        validateAbortSignal(options.signal, "options.signal");
      }
      return async function* asIndexedPairs2() {
        let index = 0;
        for await (const val of this) {
          var _options$signal;
          if (options !== null && options !== void 0 && (_options$signal = options.signal) !== null && _options$signal !== void 0 && _options$signal.aborted) {
            throw new AbortError({
              cause: options.signal.reason
            });
          }
          yield [index++, val];
        }
      }.call(this);
    }
    async function some(fn, options = void 0) {
      for await (const unused of filter.call(this, fn, options)) {
        return true;
      }
      return false;
    }
    async function every(fn, options = void 0) {
      if (typeof fn !== "function") {
        throw new ERR_INVALID_ARG_TYPE("fn", ["Function", "AsyncFunction"], fn);
      }
      return !await some.call(
        this,
        async (...args) => {
          return !await fn(...args);
        },
        options
      );
    }
    async function find(fn, options) {
      for await (const result of filter.call(this, fn, options)) {
        return result;
      }
      return void 0;
    }
    async function forEach(fn, options) {
      if (typeof fn !== "function") {
        throw new ERR_INVALID_ARG_TYPE("fn", ["Function", "AsyncFunction"], fn);
      }
      async function forEachFn(value, options2) {
        await fn(value, options2);
        return kEmpty;
      }
      for await (const unused of map.call(this, forEachFn, options))
        ;
    }
    function filter(fn, options) {
      if (typeof fn !== "function") {
        throw new ERR_INVALID_ARG_TYPE("fn", ["Function", "AsyncFunction"], fn);
      }
      async function filterFn(value, options2) {
        if (await fn(value, options2)) {
          return value;
        }
        return kEmpty;
      }
      return map.call(this, filterFn, options);
    }
    var ReduceAwareErrMissingArgs = class extends ERR_MISSING_ARGS {
      constructor() {
        super("reduce");
        this.message = "Reduce of an empty stream requires an initial value";
      }
    };
    async function reduce(reducer, initialValue, options) {
      var _options$signal2;
      if (typeof reducer !== "function") {
        throw new ERR_INVALID_ARG_TYPE("reducer", ["Function", "AsyncFunction"], reducer);
      }
      if (options != null) {
        validateObject(options, "options");
      }
      if ((options === null || options === void 0 ? void 0 : options.signal) != null) {
        validateAbortSignal(options.signal, "options.signal");
      }
      let hasInitialValue = arguments.length > 1;
      if (options !== null && options !== void 0 && (_options$signal2 = options.signal) !== null && _options$signal2 !== void 0 && _options$signal2.aborted) {
        const err = new AbortError(void 0, {
          cause: options.signal.reason
        });
        this.once("error", () => {
        });
        await finished(this.destroy(err));
        throw err;
      }
      const ac = new AbortController();
      const signal = ac.signal;
      if (options !== null && options !== void 0 && options.signal) {
        const opts = {
          once: true,
          [kWeakHandler]: this,
          [kResistStopPropagation]: true
        };
        options.signal.addEventListener("abort", () => ac.abort(), opts);
      }
      let gotAnyItemFromStream = false;
      try {
        for await (const value of this) {
          var _options$signal3;
          gotAnyItemFromStream = true;
          if (options !== null && options !== void 0 && (_options$signal3 = options.signal) !== null && _options$signal3 !== void 0 && _options$signal3.aborted) {
            throw new AbortError();
          }
          if (!hasInitialValue) {
            initialValue = value;
            hasInitialValue = true;
          } else {
            initialValue = await reducer(initialValue, value, {
              signal
            });
          }
        }
        if (!gotAnyItemFromStream && !hasInitialValue) {
          throw new ReduceAwareErrMissingArgs();
        }
      } finally {
        ac.abort();
      }
      return initialValue;
    }
    async function toArray(options) {
      if (options != null) {
        validateObject(options, "options");
      }
      if ((options === null || options === void 0 ? void 0 : options.signal) != null) {
        validateAbortSignal(options.signal, "options.signal");
      }
      const result = [];
      for await (const val of this) {
        var _options$signal4;
        if (options !== null && options !== void 0 && (_options$signal4 = options.signal) !== null && _options$signal4 !== void 0 && _options$signal4.aborted) {
          throw new AbortError(void 0, {
            cause: options.signal.reason
          });
        }
        ArrayPrototypePush(result, val);
      }
      return result;
    }
    function flatMap(fn, options) {
      const values = map.call(this, fn, options);
      return async function* flatMap2() {
        for await (const val of values) {
          yield* val;
        }
      }.call(this);
    }
    function toIntegerOrInfinity(number) {
      number = Number2(number);
      if (NumberIsNaN(number)) {
        return 0;
      }
      if (number < 0) {
        throw new ERR_OUT_OF_RANGE("number", ">= 0", number);
      }
      return number;
    }
    function drop(number, options = void 0) {
      if (options != null) {
        validateObject(options, "options");
      }
      if ((options === null || options === void 0 ? void 0 : options.signal) != null) {
        validateAbortSignal(options.signal, "options.signal");
      }
      number = toIntegerOrInfinity(number);
      return async function* drop2() {
        var _options$signal5;
        if (options !== null && options !== void 0 && (_options$signal5 = options.signal) !== null && _options$signal5 !== void 0 && _options$signal5.aborted) {
          throw new AbortError();
        }
        for await (const val of this) {
          var _options$signal6;
          if (options !== null && options !== void 0 && (_options$signal6 = options.signal) !== null && _options$signal6 !== void 0 && _options$signal6.aborted) {
            throw new AbortError();
          }
          if (number-- <= 0) {
            yield val;
          }
        }
      }.call(this);
    }
    function take(number, options = void 0) {
      if (options != null) {
        validateObject(options, "options");
      }
      if ((options === null || options === void 0 ? void 0 : options.signal) != null) {
        validateAbortSignal(options.signal, "options.signal");
      }
      number = toIntegerOrInfinity(number);
      return async function* take2() {
        var _options$signal7;
        if (options !== null && options !== void 0 && (_options$signal7 = options.signal) !== null && _options$signal7 !== void 0 && _options$signal7.aborted) {
          throw new AbortError();
        }
        for await (const val of this) {
          var _options$signal8;
          if (options !== null && options !== void 0 && (_options$signal8 = options.signal) !== null && _options$signal8 !== void 0 && _options$signal8.aborted) {
            throw new AbortError();
          }
          if (number-- > 0) {
            yield val;
          }
          if (number <= 0) {
            return;
          }
        }
      }.call(this);
    }
    module2.exports.streamReturningOperators = {
      asIndexedPairs: deprecate(asIndexedPairs, "readable.asIndexedPairs will be removed in a future version."),
      drop,
      filter,
      flatMap,
      map,
      take,
      compose
    };
    module2.exports.promiseReturningOperators = {
      every,
      forEach,
      reduce,
      toArray,
      some,
      find
    };
  }
});

// node_modules/readable-stream/lib/stream/promises.js
var require_promises = __commonJS({
  "node_modules/readable-stream/lib/stream/promises.js"(exports2, module2) {
    "use strict";
    var { ArrayPrototypePop, Promise: Promise2 } = require_primordials();
    var { isIterable, isNodeStream, isWebStream } = require_utils();
    var { pipelineImpl: pl } = require_pipeline();
    var { finished } = require_end_of_stream();
    require_stream();
    function pipeline(...streams) {
      return new Promise2((resolve, reject) => {
        let signal;
        let end;
        const lastArg = streams[streams.length - 1];
        if (lastArg && typeof lastArg === "object" && !isNodeStream(lastArg) && !isIterable(lastArg) && !isWebStream(lastArg)) {
          const options = ArrayPrototypePop(streams);
          signal = options.signal;
          end = options.end;
        }
        pl(
          streams,
          (err, value) => {
            if (err) {
              reject(err);
            } else {
              resolve(value);
            }
          },
          {
            signal,
            end
          }
        );
      });
    }
    module2.exports = {
      finished,
      pipeline
    };
  }
});

// node_modules/readable-stream/lib/stream.js
var require_stream = __commonJS({
  "node_modules/readable-stream/lib/stream.js"(exports2, module2) {
    "use strict";
    var { Buffer: Buffer2 } = require("buffer");
    var { ObjectDefineProperty, ObjectKeys, ReflectApply } = require_primordials();
    var {
      promisify: { custom: customPromisify }
    } = require_util();
    var { streamReturningOperators, promiseReturningOperators } = require_operators();
    var {
      codes: { ERR_ILLEGAL_CONSTRUCTOR }
    } = require_errors();
    var compose = require_compose();
    var { setDefaultHighWaterMark, getDefaultHighWaterMark } = require_state();
    var { pipeline } = require_pipeline();
    var { destroyer } = require_destroy();
    var eos = require_end_of_stream();
    var promises = require_promises();
    var utils = require_utils();
    var Stream = module2.exports = require_legacy().Stream;
    Stream.isDestroyed = utils.isDestroyed;
    Stream.isDisturbed = utils.isDisturbed;
    Stream.isErrored = utils.isErrored;
    Stream.isReadable = utils.isReadable;
    Stream.isWritable = utils.isWritable;
    Stream.Readable = require_readable();
    for (const key of ObjectKeys(streamReturningOperators)) {
      let fn = function(...args) {
        if (new.target) {
          throw ERR_ILLEGAL_CONSTRUCTOR();
        }
        return Stream.Readable.from(ReflectApply(op, this, args));
      };
      const op = streamReturningOperators[key];
      ObjectDefineProperty(fn, "name", {
        __proto__: null,
        value: op.name
      });
      ObjectDefineProperty(fn, "length", {
        __proto__: null,
        value: op.length
      });
      ObjectDefineProperty(Stream.Readable.prototype, key, {
        __proto__: null,
        value: fn,
        enumerable: false,
        configurable: true,
        writable: true
      });
    }
    for (const key of ObjectKeys(promiseReturningOperators)) {
      let fn = function(...args) {
        if (new.target) {
          throw ERR_ILLEGAL_CONSTRUCTOR();
        }
        return ReflectApply(op, this, args);
      };
      const op = promiseReturningOperators[key];
      ObjectDefineProperty(fn, "name", {
        __proto__: null,
        value: op.name
      });
      ObjectDefineProperty(fn, "length", {
        __proto__: null,
        value: op.length
      });
      ObjectDefineProperty(Stream.Readable.prototype, key, {
        __proto__: null,
        value: fn,
        enumerable: false,
        configurable: true,
        writable: true
      });
    }
    Stream.Writable = require_writable();
    Stream.Duplex = require_duplex();
    Stream.Transform = require_transform();
    Stream.PassThrough = require_passthrough();
    Stream.pipeline = pipeline;
    var { addAbortSignal } = require_add_abort_signal();
    Stream.addAbortSignal = addAbortSignal;
    Stream.finished = eos;
    Stream.destroy = destroyer;
    Stream.compose = compose;
    Stream.setDefaultHighWaterMark = setDefaultHighWaterMark;
    Stream.getDefaultHighWaterMark = getDefaultHighWaterMark;
    ObjectDefineProperty(Stream, "promises", {
      __proto__: null,
      configurable: true,
      enumerable: true,
      get() {
        return promises;
      }
    });
    ObjectDefineProperty(pipeline, customPromisify, {
      __proto__: null,
      enumerable: true,
      get() {
        return promises.pipeline;
      }
    });
    ObjectDefineProperty(eos, customPromisify, {
      __proto__: null,
      enumerable: true,
      get() {
        return promises.finished;
      }
    });
    Stream.Stream = Stream;
    Stream._isUint8Array = function isUint8Array(value) {
      return value instanceof Uint8Array;
    };
    Stream._uint8ArrayToBuffer = function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk.buffer, chunk.byteOffset, chunk.byteLength);
    };
  }
});

// node_modules/readable-stream/lib/ours/index.js
var require_ours = __commonJS({
  "node_modules/readable-stream/lib/ours/index.js"(exports2, module2) {
    "use strict";
    var Stream = require("stream");
    if (Stream && process.env.READABLE_STREAM === "disable") {
      const promises = Stream.promises;
      module2.exports._uint8ArrayToBuffer = Stream._uint8ArrayToBuffer;
      module2.exports._isUint8Array = Stream._isUint8Array;
      module2.exports.isDisturbed = Stream.isDisturbed;
      module2.exports.isErrored = Stream.isErrored;
      module2.exports.isReadable = Stream.isReadable;
      module2.exports.Readable = Stream.Readable;
      module2.exports.Writable = Stream.Writable;
      module2.exports.Duplex = Stream.Duplex;
      module2.exports.Transform = Stream.Transform;
      module2.exports.PassThrough = Stream.PassThrough;
      module2.exports.addAbortSignal = Stream.addAbortSignal;
      module2.exports.finished = Stream.finished;
      module2.exports.destroy = Stream.destroy;
      module2.exports.pipeline = Stream.pipeline;
      module2.exports.compose = Stream.compose;
      Object.defineProperty(Stream, "promises", {
        configurable: true,
        enumerable: true,
        get() {
          return promises;
        }
      });
      module2.exports.Stream = Stream.Stream;
    } else {
      const CustomStream = require_stream();
      const promises = require_promises();
      const originalDestroy = CustomStream.Readable.destroy;
      module2.exports = CustomStream.Readable;
      module2.exports._uint8ArrayToBuffer = CustomStream._uint8ArrayToBuffer;
      module2.exports._isUint8Array = CustomStream._isUint8Array;
      module2.exports.isDisturbed = CustomStream.isDisturbed;
      module2.exports.isErrored = CustomStream.isErrored;
      module2.exports.isReadable = CustomStream.isReadable;
      module2.exports.Readable = CustomStream.Readable;
      module2.exports.Writable = CustomStream.Writable;
      module2.exports.Duplex = CustomStream.Duplex;
      module2.exports.Transform = CustomStream.Transform;
      module2.exports.PassThrough = CustomStream.PassThrough;
      module2.exports.addAbortSignal = CustomStream.addAbortSignal;
      module2.exports.finished = CustomStream.finished;
      module2.exports.destroy = CustomStream.destroy;
      module2.exports.destroy = originalDestroy;
      module2.exports.pipeline = CustomStream.pipeline;
      module2.exports.compose = CustomStream.compose;
      Object.defineProperty(CustomStream, "promises", {
        configurable: true,
        enumerable: true,
        get() {
          return promises;
        }
      });
      module2.exports.Stream = CustomStream.Stream;
    }
    module2.exports.default = module2.exports;
  }
});

// node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "node_modules/inherits/inherits_browser.js"(exports2, module2) {
    if (typeof Object.create === "function") {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  }
});

// node_modules/inherits/inherits.js
var require_inherits = __commonJS({
  "node_modules/inherits/inherits.js"(exports2, module2) {
    try {
      util = require("util");
      if (typeof util.inherits !== "function")
        throw "";
      module2.exports = util.inherits;
    } catch (e) {
      module2.exports = require_inherits_browser();
    }
    var util;
  }
});

// node_modules/bl/BufferList.js
var require_BufferList = __commonJS({
  "node_modules/bl/BufferList.js"(exports2, module2) {
    "use strict";
    var { Buffer: Buffer2 } = require("buffer");
    var symbol = Symbol.for("BufferList");
    function BufferList(buf) {
      if (!(this instanceof BufferList)) {
        return new BufferList(buf);
      }
      BufferList._init.call(this, buf);
    }
    BufferList._init = function _init(buf) {
      Object.defineProperty(this, symbol, { value: true });
      this._bufs = [];
      this.length = 0;
      if (buf) {
        this.append(buf);
      }
    };
    BufferList.prototype._new = function _new(buf) {
      return new BufferList(buf);
    };
    BufferList.prototype._offset = function _offset(offset) {
      if (offset === 0) {
        return [0, 0];
      }
      let tot = 0;
      for (let i = 0; i < this._bufs.length; i++) {
        const _t = tot + this._bufs[i].length;
        if (offset < _t || i === this._bufs.length - 1) {
          return [i, offset - tot];
        }
        tot = _t;
      }
    };
    BufferList.prototype._reverseOffset = function(blOffset) {
      const bufferId = blOffset[0];
      let offset = blOffset[1];
      for (let i = 0; i < bufferId; i++) {
        offset += this._bufs[i].length;
      }
      return offset;
    };
    BufferList.prototype.getBuffers = function getBuffers() {
      return this._bufs;
    };
    BufferList.prototype.get = function get(index) {
      if (index > this.length || index < 0) {
        return void 0;
      }
      const offset = this._offset(index);
      return this._bufs[offset[0]][offset[1]];
    };
    BufferList.prototype.slice = function slice(start, end) {
      if (typeof start === "number" && start < 0) {
        start += this.length;
      }
      if (typeof end === "number" && end < 0) {
        end += this.length;
      }
      return this.copy(null, 0, start, end);
    };
    BufferList.prototype.copy = function copy(dst, dstStart, srcStart, srcEnd) {
      if (typeof srcStart !== "number" || srcStart < 0) {
        srcStart = 0;
      }
      if (typeof srcEnd !== "number" || srcEnd > this.length) {
        srcEnd = this.length;
      }
      if (srcStart >= this.length) {
        return dst || Buffer2.alloc(0);
      }
      if (srcEnd <= 0) {
        return dst || Buffer2.alloc(0);
      }
      const copy2 = !!dst;
      const off = this._offset(srcStart);
      const len = srcEnd - srcStart;
      let bytes = len;
      let bufoff = copy2 && dstStart || 0;
      let start = off[1];
      if (srcStart === 0 && srcEnd === this.length) {
        if (!copy2) {
          return this._bufs.length === 1 ? this._bufs[0] : Buffer2.concat(this._bufs, this.length);
        }
        for (let i = 0; i < this._bufs.length; i++) {
          this._bufs[i].copy(dst, bufoff);
          bufoff += this._bufs[i].length;
        }
        return dst;
      }
      if (bytes <= this._bufs[off[0]].length - start) {
        return copy2 ? this._bufs[off[0]].copy(dst, dstStart, start, start + bytes) : this._bufs[off[0]].slice(start, start + bytes);
      }
      if (!copy2) {
        dst = Buffer2.allocUnsafe(len);
      }
      for (let i = off[0]; i < this._bufs.length; i++) {
        const l = this._bufs[i].length - start;
        if (bytes > l) {
          this._bufs[i].copy(dst, bufoff, start);
          bufoff += l;
        } else {
          this._bufs[i].copy(dst, bufoff, start, start + bytes);
          bufoff += l;
          break;
        }
        bytes -= l;
        if (start) {
          start = 0;
        }
      }
      if (dst.length > bufoff)
        return dst.slice(0, bufoff);
      return dst;
    };
    BufferList.prototype.shallowSlice = function shallowSlice(start, end) {
      start = start || 0;
      end = typeof end !== "number" ? this.length : end;
      if (start < 0) {
        start += this.length;
      }
      if (end < 0) {
        end += this.length;
      }
      if (start === end) {
        return this._new();
      }
      const startOffset = this._offset(start);
      const endOffset = this._offset(end);
      const buffers = this._bufs.slice(startOffset[0], endOffset[0] + 1);
      if (endOffset[1] === 0) {
        buffers.pop();
      } else {
        buffers[buffers.length - 1] = buffers[buffers.length - 1].slice(0, endOffset[1]);
      }
      if (startOffset[1] !== 0) {
        buffers[0] = buffers[0].slice(startOffset[1]);
      }
      return this._new(buffers);
    };
    BufferList.prototype.toString = function toString(encoding, start, end) {
      return this.slice(start, end).toString(encoding);
    };
    BufferList.prototype.consume = function consume(bytes) {
      bytes = Math.trunc(bytes);
      if (Number.isNaN(bytes) || bytes <= 0)
        return this;
      while (this._bufs.length) {
        if (bytes >= this._bufs[0].length) {
          bytes -= this._bufs[0].length;
          this.length -= this._bufs[0].length;
          this._bufs.shift();
        } else {
          this._bufs[0] = this._bufs[0].slice(bytes);
          this.length -= bytes;
          break;
        }
      }
      return this;
    };
    BufferList.prototype.duplicate = function duplicate() {
      const copy = this._new();
      for (let i = 0; i < this._bufs.length; i++) {
        copy.append(this._bufs[i]);
      }
      return copy;
    };
    BufferList.prototype.append = function append(buf) {
      return this._attach(buf, BufferList.prototype._appendBuffer);
    };
    BufferList.prototype.prepend = function prepend(buf) {
      return this._attach(buf, BufferList.prototype._prependBuffer, true);
    };
    BufferList.prototype._attach = function _attach(buf, attacher, prepend) {
      if (buf == null) {
        return this;
      }
      if (buf.buffer) {
        attacher.call(this, Buffer2.from(buf.buffer, buf.byteOffset, buf.byteLength));
      } else if (Array.isArray(buf)) {
        const [starting, modifier] = prepend ? [buf.length - 1, -1] : [0, 1];
        for (let i = starting; i >= 0 && i < buf.length; i += modifier) {
          this._attach(buf[i], attacher, prepend);
        }
      } else if (this._isBufferList(buf)) {
        const [starting, modifier] = prepend ? [buf._bufs.length - 1, -1] : [0, 1];
        for (let i = starting; i >= 0 && i < buf._bufs.length; i += modifier) {
          this._attach(buf._bufs[i], attacher, prepend);
        }
      } else {
        if (typeof buf === "number") {
          buf = buf.toString();
        }
        attacher.call(this, Buffer2.from(buf));
      }
      return this;
    };
    BufferList.prototype._appendBuffer = function appendBuffer(buf) {
      this._bufs.push(buf);
      this.length += buf.length;
    };
    BufferList.prototype._prependBuffer = function prependBuffer(buf) {
      this._bufs.unshift(buf);
      this.length += buf.length;
    };
    BufferList.prototype.indexOf = function(search, offset, encoding) {
      if (encoding === void 0 && typeof offset === "string") {
        encoding = offset;
        offset = void 0;
      }
      if (typeof search === "function" || Array.isArray(search)) {
        throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');
      } else if (typeof search === "number") {
        search = Buffer2.from([search]);
      } else if (typeof search === "string") {
        search = Buffer2.from(search, encoding);
      } else if (this._isBufferList(search)) {
        search = search.slice();
      } else if (Array.isArray(search.buffer)) {
        search = Buffer2.from(search.buffer, search.byteOffset, search.byteLength);
      } else if (!Buffer2.isBuffer(search)) {
        search = Buffer2.from(search);
      }
      offset = Number(offset || 0);
      if (isNaN(offset)) {
        offset = 0;
      }
      if (offset < 0) {
        offset = this.length + offset;
      }
      if (offset < 0) {
        offset = 0;
      }
      if (search.length === 0) {
        return offset > this.length ? this.length : offset;
      }
      const blOffset = this._offset(offset);
      let blIndex = blOffset[0];
      let buffOffset = blOffset[1];
      for (; blIndex < this._bufs.length; blIndex++) {
        const buff = this._bufs[blIndex];
        while (buffOffset < buff.length) {
          const availableWindow = buff.length - buffOffset;
          if (availableWindow >= search.length) {
            const nativeSearchResult = buff.indexOf(search, buffOffset);
            if (nativeSearchResult !== -1) {
              return this._reverseOffset([blIndex, nativeSearchResult]);
            }
            buffOffset = buff.length - search.length + 1;
          } else {
            const revOffset = this._reverseOffset([blIndex, buffOffset]);
            if (this._match(revOffset, search)) {
              return revOffset;
            }
            buffOffset++;
          }
        }
        buffOffset = 0;
      }
      return -1;
    };
    BufferList.prototype._match = function(offset, search) {
      if (this.length - offset < search.length) {
        return false;
      }
      for (let searchOffset = 0; searchOffset < search.length; searchOffset++) {
        if (this.get(offset + searchOffset) !== search[searchOffset]) {
          return false;
        }
      }
      return true;
    };
    (function() {
      const methods = {
        readDoubleBE: 8,
        readDoubleLE: 8,
        readFloatBE: 4,
        readFloatLE: 4,
        readBigInt64BE: 8,
        readBigInt64LE: 8,
        readBigUInt64BE: 8,
        readBigUInt64LE: 8,
        readInt32BE: 4,
        readInt32LE: 4,
        readUInt32BE: 4,
        readUInt32LE: 4,
        readInt16BE: 2,
        readInt16LE: 2,
        readUInt16BE: 2,
        readUInt16LE: 2,
        readInt8: 1,
        readUInt8: 1,
        readIntBE: null,
        readIntLE: null,
        readUIntBE: null,
        readUIntLE: null
      };
      for (const m in methods) {
        (function(m2) {
          if (methods[m2] === null) {
            BufferList.prototype[m2] = function(offset, byteLength) {
              return this.slice(offset, offset + byteLength)[m2](0, byteLength);
            };
          } else {
            BufferList.prototype[m2] = function(offset = 0) {
              return this.slice(offset, offset + methods[m2])[m2](0);
            };
          }
        })(m);
      }
    })();
    BufferList.prototype._isBufferList = function _isBufferList(b) {
      return b instanceof BufferList || BufferList.isBufferList(b);
    };
    BufferList.isBufferList = function isBufferList(b) {
      return b != null && b[symbol];
    };
    module2.exports = BufferList;
  }
});

// node_modules/bl/bl.js
var require_bl = __commonJS({
  "node_modules/bl/bl.js"(exports2, module2) {
    "use strict";
    var DuplexStream = require_ours().Duplex;
    var inherits = require_inherits();
    var BufferList = require_BufferList();
    function BufferListStream(callback) {
      if (!(this instanceof BufferListStream)) {
        return new BufferListStream(callback);
      }
      if (typeof callback === "function") {
        this._callback = callback;
        const piper = function piper2(err) {
          if (this._callback) {
            this._callback(err);
            this._callback = null;
          }
        }.bind(this);
        this.on("pipe", function onPipe(src) {
          src.on("error", piper);
        });
        this.on("unpipe", function onUnpipe(src) {
          src.removeListener("error", piper);
        });
        callback = null;
      }
      BufferList._init.call(this, callback);
      DuplexStream.call(this);
    }
    inherits(BufferListStream, DuplexStream);
    Object.assign(BufferListStream.prototype, BufferList.prototype);
    BufferListStream.prototype._new = function _new(callback) {
      return new BufferListStream(callback);
    };
    BufferListStream.prototype._write = function _write(buf, encoding, callback) {
      this._appendBuffer(buf);
      if (typeof callback === "function") {
        callback();
      }
    };
    BufferListStream.prototype._read = function _read(size) {
      if (!this.length) {
        return this.push(null);
      }
      size = Math.min(size, this.length);
      this.push(this.slice(0, size));
      this.consume(size);
    };
    BufferListStream.prototype.end = function end(chunk) {
      DuplexStream.prototype.end.call(this, chunk);
      if (this._callback) {
        this._callback(null, this.slice());
        this._callback = null;
      }
    };
    BufferListStream.prototype._destroy = function _destroy(err, cb) {
      this._bufs.length = 0;
      this.length = 0;
      cb(err);
    };
    BufferListStream.prototype._isBufferList = function _isBufferList(b) {
      return b instanceof BufferListStream || b instanceof BufferList || BufferListStream.isBufferList(b);
    };
    BufferListStream.isBufferList = BufferList.isBufferList;
    module2.exports = BufferListStream;
    module2.exports.BufferListStream = BufferListStream;
    module2.exports.BufferList = BufferList;
  }
});

// node_modules/mqtt-packet/packet.js
var require_packet = __commonJS({
  "node_modules/mqtt-packet/packet.js"(exports2, module2) {
    var Packet = class {
      constructor() {
        this.cmd = null;
        this.retain = false;
        this.qos = 0;
        this.dup = false;
        this.length = -1;
        this.topic = null;
        this.payload = null;
      }
    };
    module2.exports = Packet;
  }
});

// node_modules/mqtt-packet/constants.js
var require_constants = __commonJS({
  "node_modules/mqtt-packet/constants.js"(exports2, module2) {
    var protocol = module2.exports;
    var { Buffer: Buffer2 } = require("buffer");
    protocol.types = {
      0: "reserved",
      1: "connect",
      2: "connack",
      3: "publish",
      4: "puback",
      5: "pubrec",
      6: "pubrel",
      7: "pubcomp",
      8: "subscribe",
      9: "suback",
      10: "unsubscribe",
      11: "unsuback",
      12: "pingreq",
      13: "pingresp",
      14: "disconnect",
      15: "auth"
    };
    protocol.requiredHeaderFlags = {
      1: 0,
      // 'connect'
      2: 0,
      // 'connack'
      4: 0,
      // 'puback'
      5: 0,
      // 'pubrec'
      6: 2,
      // 'pubrel'
      7: 0,
      // 'pubcomp'
      8: 2,
      // 'subscribe'
      9: 0,
      // 'suback'
      10: 2,
      // 'unsubscribe'
      11: 0,
      // 'unsuback'
      12: 0,
      // 'pingreq'
      13: 0,
      // 'pingresp'
      14: 0,
      // 'disconnect'
      15: 0
      // 'auth'
    };
    protocol.requiredHeaderFlagsErrors = {};
    for (const k in protocol.requiredHeaderFlags) {
      const v = protocol.requiredHeaderFlags[k];
      protocol.requiredHeaderFlagsErrors[k] = "Invalid header flag bits, must be 0x" + v.toString(16) + " for " + protocol.types[k] + " packet";
    }
    protocol.codes = {};
    for (const k in protocol.types) {
      const v = protocol.types[k];
      protocol.codes[v] = k;
    }
    protocol.CMD_SHIFT = 4;
    protocol.CMD_MASK = 240;
    protocol.DUP_MASK = 8;
    protocol.QOS_MASK = 3;
    protocol.QOS_SHIFT = 1;
    protocol.RETAIN_MASK = 1;
    protocol.VARBYTEINT_MASK = 127;
    protocol.VARBYTEINT_FIN_MASK = 128;
    protocol.VARBYTEINT_MAX = 268435455;
    protocol.SESSIONPRESENT_MASK = 1;
    protocol.SESSIONPRESENT_HEADER = Buffer2.from([protocol.SESSIONPRESENT_MASK]);
    protocol.CONNACK_HEADER = Buffer2.from([protocol.codes.connack << protocol.CMD_SHIFT]);
    protocol.USERNAME_MASK = 128;
    protocol.PASSWORD_MASK = 64;
    protocol.WILL_RETAIN_MASK = 32;
    protocol.WILL_QOS_MASK = 24;
    protocol.WILL_QOS_SHIFT = 3;
    protocol.WILL_FLAG_MASK = 4;
    protocol.CLEAN_SESSION_MASK = 2;
    protocol.CONNECT_HEADER = Buffer2.from([protocol.codes.connect << protocol.CMD_SHIFT]);
    protocol.properties = {
      sessionExpiryInterval: 17,
      willDelayInterval: 24,
      receiveMaximum: 33,
      maximumPacketSize: 39,
      topicAliasMaximum: 34,
      requestResponseInformation: 25,
      requestProblemInformation: 23,
      userProperties: 38,
      authenticationMethod: 21,
      authenticationData: 22,
      payloadFormatIndicator: 1,
      messageExpiryInterval: 2,
      contentType: 3,
      responseTopic: 8,
      correlationData: 9,
      maximumQoS: 36,
      retainAvailable: 37,
      assignedClientIdentifier: 18,
      reasonString: 31,
      wildcardSubscriptionAvailable: 40,
      subscriptionIdentifiersAvailable: 41,
      sharedSubscriptionAvailable: 42,
      serverKeepAlive: 19,
      responseInformation: 26,
      serverReference: 28,
      topicAlias: 35,
      subscriptionIdentifier: 11
    };
    protocol.propertiesCodes = {};
    for (const prop in protocol.properties) {
      const id = protocol.properties[prop];
      protocol.propertiesCodes[id] = prop;
    }
    protocol.propertiesTypes = {
      sessionExpiryInterval: "int32",
      willDelayInterval: "int32",
      receiveMaximum: "int16",
      maximumPacketSize: "int32",
      topicAliasMaximum: "int16",
      requestResponseInformation: "byte",
      requestProblemInformation: "byte",
      userProperties: "pair",
      authenticationMethod: "string",
      authenticationData: "binary",
      payloadFormatIndicator: "byte",
      messageExpiryInterval: "int32",
      contentType: "string",
      responseTopic: "string",
      correlationData: "binary",
      maximumQoS: "int8",
      retainAvailable: "byte",
      assignedClientIdentifier: "string",
      reasonString: "string",
      wildcardSubscriptionAvailable: "byte",
      subscriptionIdentifiersAvailable: "byte",
      sharedSubscriptionAvailable: "byte",
      serverKeepAlive: "int16",
      responseInformation: "string",
      serverReference: "string",
      topicAlias: "int16",
      subscriptionIdentifier: "var"
    };
    function genHeader(type) {
      return [0, 1, 2].map((qos) => {
        return [0, 1].map((dup) => {
          return [0, 1].map((retain) => {
            const buf = Buffer2.alloc(1);
            buf.writeUInt8(
              protocol.codes[type] << protocol.CMD_SHIFT | (dup ? protocol.DUP_MASK : 0) | qos << protocol.QOS_SHIFT | retain,
              0,
              true
            );
            return buf;
          });
        });
      });
    }
    protocol.PUBLISH_HEADER = genHeader("publish");
    protocol.SUBSCRIBE_HEADER = genHeader("subscribe");
    protocol.SUBSCRIBE_OPTIONS_QOS_MASK = 3;
    protocol.SUBSCRIBE_OPTIONS_NL_MASK = 1;
    protocol.SUBSCRIBE_OPTIONS_NL_SHIFT = 2;
    protocol.SUBSCRIBE_OPTIONS_RAP_MASK = 1;
    protocol.SUBSCRIBE_OPTIONS_RAP_SHIFT = 3;
    protocol.SUBSCRIBE_OPTIONS_RH_MASK = 3;
    protocol.SUBSCRIBE_OPTIONS_RH_SHIFT = 4;
    protocol.SUBSCRIBE_OPTIONS_RH = [0, 16, 32];
    protocol.SUBSCRIBE_OPTIONS_NL = 4;
    protocol.SUBSCRIBE_OPTIONS_RAP = 8;
    protocol.SUBSCRIBE_OPTIONS_QOS = [0, 1, 2];
    protocol.UNSUBSCRIBE_HEADER = genHeader("unsubscribe");
    protocol.ACKS = {
      unsuback: genHeader("unsuback"),
      puback: genHeader("puback"),
      pubcomp: genHeader("pubcomp"),
      pubrel: genHeader("pubrel"),
      pubrec: genHeader("pubrec")
    };
    protocol.SUBACK_HEADER = Buffer2.from([protocol.codes.suback << protocol.CMD_SHIFT]);
    protocol.VERSION3 = Buffer2.from([3]);
    protocol.VERSION4 = Buffer2.from([4]);
    protocol.VERSION5 = Buffer2.from([5]);
    protocol.VERSION131 = Buffer2.from([131]);
    protocol.VERSION132 = Buffer2.from([132]);
    protocol.QOS = [0, 1, 2].map((qos) => {
      return Buffer2.from([qos]);
    });
    protocol.EMPTY = {
      pingreq: Buffer2.from([protocol.codes.pingreq << 4, 0]),
      pingresp: Buffer2.from([protocol.codes.pingresp << 4, 0]),
      disconnect: Buffer2.from([protocol.codes.disconnect << 4, 0])
    };
    protocol.MQTT5_PUBACK_PUBREC_CODES = {
      0: "Success",
      16: "No matching subscribers",
      128: "Unspecified error",
      131: "Implementation specific error",
      135: "Not authorized",
      144: "Topic Name invalid",
      145: "Packet identifier in use",
      151: "Quota exceeded",
      153: "Payload format invalid"
    };
    protocol.MQTT5_PUBREL_PUBCOMP_CODES = {
      0: "Success",
      146: "Packet Identifier not found"
    };
    protocol.MQTT5_SUBACK_CODES = {
      0: "Granted QoS 0",
      1: "Granted QoS 1",
      2: "Granted QoS 2",
      128: "Unspecified error",
      131: "Implementation specific error",
      135: "Not authorized",
      143: "Topic Filter invalid",
      145: "Packet Identifier in use",
      151: "Quota exceeded",
      158: "Shared Subscriptions not supported",
      161: "Subscription Identifiers not supported",
      162: "Wildcard Subscriptions not supported"
    };
    protocol.MQTT5_UNSUBACK_CODES = {
      0: "Success",
      17: "No subscription existed",
      128: "Unspecified error",
      131: "Implementation specific error",
      135: "Not authorized",
      143: "Topic Filter invalid",
      145: "Packet Identifier in use"
    };
    protocol.MQTT5_DISCONNECT_CODES = {
      0: "Normal disconnection",
      4: "Disconnect with Will Message",
      128: "Unspecified error",
      129: "Malformed Packet",
      130: "Protocol Error",
      131: "Implementation specific error",
      135: "Not authorized",
      137: "Server busy",
      139: "Server shutting down",
      141: "Keep Alive timeout",
      142: "Session taken over",
      143: "Topic Filter invalid",
      144: "Topic Name invalid",
      147: "Receive Maximum exceeded",
      148: "Topic Alias invalid",
      149: "Packet too large",
      150: "Message rate too high",
      151: "Quota exceeded",
      152: "Administrative action",
      153: "Payload format invalid",
      154: "Retain not supported",
      155: "QoS not supported",
      156: "Use another server",
      157: "Server moved",
      158: "Shared Subscriptions not supported",
      159: "Connection rate exceeded",
      160: "Maximum connect time",
      161: "Subscription Identifiers not supported",
      162: "Wildcard Subscriptions not supported"
    };
    protocol.MQTT5_AUTH_CODES = {
      0: "Success",
      24: "Continue authentication",
      25: "Re-authenticate"
    };
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports2, module2) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/debug/src/common.js"(exports2, module2) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self2 = debug;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self2.diff = ms;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self2, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
        for (const ns of split) {
          if (ns[0] === "-") {
            createDebug.skips.push(ns.slice(1));
          } else {
            createDebug.names.push(ns);
          }
        }
      }
      function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while (searchIndex < search.length) {
          if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
            if (template[templateIndex] === "*") {
              starIndex = templateIndex;
              matchIndex = searchIndex;
              templateIndex++;
            } else {
              searchIndex++;
              templateIndex++;
            }
          } else if (starIndex !== -1) {
            templateIndex = starIndex + 1;
            matchIndex++;
            searchIndex = matchIndex;
          } else {
            return false;
          }
        }
        while (templateIndex < template.length && template[templateIndex] === "*") {
          templateIndex++;
        }
        return templateIndex === template.length;
      }
      function disable() {
        const namespaces = [
          ...createDebug.names,
          ...createDebug.skips.map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        for (const skip of createDebug.skips) {
          if (matchesTemplate(name, skip)) {
            return false;
          }
        }
        for (const ns of createDebug.names) {
          if (matchesTemplate(name, ns)) {
            return true;
          }
        }
        return false;
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module2.exports = setup;
  }
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/debug/src/browser.js"(exports2, module2) {
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.storage = localstorage();
    exports2.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports2.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      let m;
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports2.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports2.storage.setItem("debug", namespaces);
        } else {
          exports2.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports2.storage.getItem("debug") || exports2.storage.getItem("DEBUG");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module2.exports = require_common()(exports2);
    var { formatters } = module2.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "node_modules/has-flag/index.js"(exports2, module2) {
    "use strict";
    module2.exports = (flag, argv = process.argv) => {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv.indexOf(prefix + flag);
      const terminatorPosition = argv.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    };
  }
});

// node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "node_modules/supports-color/index.js"(exports2, module2) {
    "use strict";
    var os = require("os");
    var tty = require("tty");
    var hasFlag = require_has_flag();
    var { env } = process;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      forceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = 1;
    }
    if ("FORCE_COLOR" in env) {
      if (env.FORCE_COLOR === "true") {
        forceColor = 1;
      } else if (env.FORCE_COLOR === "false") {
        forceColor = 0;
      } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(haveStream, streamIsTTY) {
      if (forceColor === 0) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env.TERM === "dumb") {
        return min;
      }
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      return min;
    }
    function getSupportLevel(stream) {
      const level = supportsColor(stream, stream && stream.isTTY);
      return translateLevel(level);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: translateLevel(supportsColor(true, tty.isatty(1))),
      stderr: translateLevel(supportsColor(true, tty.isatty(2)))
    };
  }
});

// node_modules/debug/src/node.js
var require_node = __commonJS({
  "node_modules/debug/src/node.js"(exports2, module2) {
    var tty = require("tty");
    var util = require("util");
    exports2.init = init;
    exports2.log = log;
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.destroy = util.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
    exports2.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = require_supports_color();
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports2.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error) {
    }
    exports2.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports2.inspectOpts ? Boolean(exports2.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} \x1B[0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module2.exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    function getDate() {
      if (exports2.inspectOpts.hideDate) {
        return "";
      }
      return (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function log(...args) {
      return process.stderr.write(util.formatWithOptions(exports2.inspectOpts, ...args) + "\n");
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function init(debug) {
      debug.inspectOpts = {};
      const keys = Object.keys(exports2.inspectOpts);
      for (let i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports2.inspectOpts[keys[i]];
      }
    }
    module2.exports = require_common()(exports2);
    var { formatters } = module2.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
  }
});

// node_modules/debug/src/index.js
var require_src = __commonJS({
  "node_modules/debug/src/index.js"(exports2, module2) {
    if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
      module2.exports = require_browser();
    } else {
      module2.exports = require_node();
    }
  }
});

// node_modules/mqtt-packet/parser.js
var require_parser = __commonJS({
  "node_modules/mqtt-packet/parser.js"(exports2, module2) {
    var bl = require_bl();
    var { EventEmitter: EventEmitter2 } = require("events");
    var Packet = require_packet();
    var constants = require_constants();
    var debug = require_src()("mqtt-packet:parser");
    var Parser = class _Parser extends EventEmitter2 {
      constructor() {
        super();
        this.parser = this.constructor.parser;
      }
      static parser(opt) {
        if (!(this instanceof _Parser))
          return new _Parser().parser(opt);
        this.settings = opt || {};
        this._states = [
          "_parseHeader",
          "_parseLength",
          "_parsePayload",
          "_newPacket"
        ];
        this._resetState();
        return this;
      }
      _resetState() {
        debug("_resetState: resetting packet, error, _list, and _stateCounter");
        this.packet = new Packet();
        this.error = null;
        this._list = bl();
        this._stateCounter = 0;
      }
      parse(buf) {
        if (this.error)
          this._resetState();
        this._list.append(buf);
        debug("parse: current state: %s", this._states[this._stateCounter]);
        while ((this.packet.length !== -1 || this._list.length > 0) && this[this._states[this._stateCounter]]() && !this.error) {
          this._stateCounter++;
          debug("parse: state complete. _stateCounter is now: %d", this._stateCounter);
          debug("parse: packet.length: %d, buffer list length: %d", this.packet.length, this._list.length);
          if (this._stateCounter >= this._states.length)
            this._stateCounter = 0;
        }
        debug("parse: exited while loop. packet: %d, buffer list length: %d", this.packet.length, this._list.length);
        return this._list.length;
      }
      _parseHeader() {
        const zero = this._list.readUInt8(0);
        const cmdIndex = zero >> constants.CMD_SHIFT;
        this.packet.cmd = constants.types[cmdIndex];
        const headerFlags = zero & 15;
        const requiredHeaderFlags = constants.requiredHeaderFlags[cmdIndex];
        if (requiredHeaderFlags != null && headerFlags !== requiredHeaderFlags) {
          return this._emitError(new Error(constants.requiredHeaderFlagsErrors[cmdIndex]));
        }
        this.packet.retain = (zero & constants.RETAIN_MASK) !== 0;
        this.packet.qos = zero >> constants.QOS_SHIFT & constants.QOS_MASK;
        if (this.packet.qos > 2) {
          return this._emitError(new Error("Packet must not have both QoS bits set to 1"));
        }
        this.packet.dup = (zero & constants.DUP_MASK) !== 0;
        debug("_parseHeader: packet: %o", this.packet);
        this._list.consume(1);
        return true;
      }
      _parseLength() {
        const result = this._parseVarByteNum(true);
        if (result) {
          this.packet.length = result.value;
          this._list.consume(result.bytes);
        }
        debug("_parseLength %d", result.value);
        return !!result;
      }
      _parsePayload() {
        debug("_parsePayload: payload %O", this._list);
        let result = false;
        if (this.packet.length === 0 || this._list.length >= this.packet.length) {
          this._pos = 0;
          switch (this.packet.cmd) {
            case "connect":
              this._parseConnect();
              break;
            case "connack":
              this._parseConnack();
              break;
            case "publish":
              this._parsePublish();
              break;
            case "puback":
            case "pubrec":
            case "pubrel":
            case "pubcomp":
              this._parseConfirmation();
              break;
            case "subscribe":
              this._parseSubscribe();
              break;
            case "suback":
              this._parseSuback();
              break;
            case "unsubscribe":
              this._parseUnsubscribe();
              break;
            case "unsuback":
              this._parseUnsuback();
              break;
            case "pingreq":
            case "pingresp":
              break;
            case "disconnect":
              this._parseDisconnect();
              break;
            case "auth":
              this._parseAuth();
              break;
            default:
              this._emitError(new Error("Not supported"));
          }
          result = true;
        }
        debug("_parsePayload complete result: %s", result);
        return result;
      }
      _parseConnect() {
        debug("_parseConnect");
        let topic;
        let payload;
        let password;
        let username;
        const flags = {};
        const packet = this.packet;
        const protocolId = this._parseString();
        if (protocolId === null)
          return this._emitError(new Error("Cannot parse protocolId"));
        if (protocolId !== "MQTT" && protocolId !== "MQIsdp") {
          return this._emitError(new Error("Invalid protocolId"));
        }
        packet.protocolId = protocolId;
        if (this._pos >= this._list.length)
          return this._emitError(new Error("Packet too short"));
        packet.protocolVersion = this._list.readUInt8(this._pos);
        if (packet.protocolVersion >= 128) {
          packet.bridgeMode = true;
          packet.protocolVersion = packet.protocolVersion - 128;
        }
        if (packet.protocolVersion !== 3 && packet.protocolVersion !== 4 && packet.protocolVersion !== 5) {
          return this._emitError(new Error("Invalid protocol version"));
        }
        this._pos++;
        if (this._pos >= this._list.length) {
          return this._emitError(new Error("Packet too short"));
        }
        if (this._list.readUInt8(this._pos) & 1) {
          return this._emitError(new Error("Connect flag bit 0 must be 0, but got 1"));
        }
        flags.username = this._list.readUInt8(this._pos) & constants.USERNAME_MASK;
        flags.password = this._list.readUInt8(this._pos) & constants.PASSWORD_MASK;
        flags.will = this._list.readUInt8(this._pos) & constants.WILL_FLAG_MASK;
        const willRetain = !!(this._list.readUInt8(this._pos) & constants.WILL_RETAIN_MASK);
        const willQos = (this._list.readUInt8(this._pos) & constants.WILL_QOS_MASK) >> constants.WILL_QOS_SHIFT;
        if (flags.will) {
          packet.will = {};
          packet.will.retain = willRetain;
          packet.will.qos = willQos;
        } else {
          if (willRetain) {
            return this._emitError(new Error("Will Retain Flag must be set to zero when Will Flag is set to 0"));
          }
          if (willQos) {
            return this._emitError(new Error("Will QoS must be set to zero when Will Flag is set to 0"));
          }
        }
        packet.clean = (this._list.readUInt8(this._pos) & constants.CLEAN_SESSION_MASK) !== 0;
        this._pos++;
        packet.keepalive = this._parseNum();
        if (packet.keepalive === -1)
          return this._emitError(new Error("Packet too short"));
        if (packet.protocolVersion === 5) {
          const properties = this._parseProperties();
          if (Object.getOwnPropertyNames(properties).length) {
            packet.properties = properties;
          }
        }
        const clientId = this._parseString();
        if (clientId === null)
          return this._emitError(new Error("Packet too short"));
        packet.clientId = clientId;
        debug("_parseConnect: packet.clientId: %s", packet.clientId);
        if (flags.will) {
          if (packet.protocolVersion === 5) {
            const willProperties = this._parseProperties();
            if (Object.getOwnPropertyNames(willProperties).length) {
              packet.will.properties = willProperties;
            }
          }
          topic = this._parseString();
          if (topic === null)
            return this._emitError(new Error("Cannot parse will topic"));
          packet.will.topic = topic;
          debug("_parseConnect: packet.will.topic: %s", packet.will.topic);
          payload = this._parseBuffer();
          if (payload === null)
            return this._emitError(new Error("Cannot parse will payload"));
          packet.will.payload = payload;
          debug("_parseConnect: packet.will.paylaod: %s", packet.will.payload);
        }
        if (flags.username) {
          username = this._parseString();
          if (username === null)
            return this._emitError(new Error("Cannot parse username"));
          packet.username = username;
          debug("_parseConnect: packet.username: %s", packet.username);
        }
        if (flags.password) {
          password = this._parseBuffer();
          if (password === null)
            return this._emitError(new Error("Cannot parse password"));
          packet.password = password;
        }
        this.settings = packet;
        debug("_parseConnect: complete");
        return packet;
      }
      _parseConnack() {
        debug("_parseConnack");
        const packet = this.packet;
        if (this._list.length < 1)
          return null;
        const flags = this._list.readUInt8(this._pos++);
        if (flags > 1) {
          return this._emitError(new Error("Invalid connack flags, bits 7-1 must be set to 0"));
        }
        packet.sessionPresent = !!(flags & constants.SESSIONPRESENT_MASK);
        if (this.settings.protocolVersion === 5) {
          if (this._list.length >= 2) {
            packet.reasonCode = this._list.readUInt8(this._pos++);
          } else {
            packet.reasonCode = 0;
          }
        } else {
          if (this._list.length < 2)
            return null;
          packet.returnCode = this._list.readUInt8(this._pos++);
        }
        if (packet.returnCode === -1 || packet.reasonCode === -1)
          return this._emitError(new Error("Cannot parse return code"));
        if (this.settings.protocolVersion === 5) {
          const properties = this._parseProperties();
          if (Object.getOwnPropertyNames(properties).length) {
            packet.properties = properties;
          }
        }
        debug("_parseConnack: complete");
      }
      _parsePublish() {
        debug("_parsePublish");
        const packet = this.packet;
        packet.topic = this._parseString();
        if (packet.topic === null)
          return this._emitError(new Error("Cannot parse topic"));
        if (packet.qos > 0) {
          if (!this._parseMessageId()) {
            return;
          }
        }
        if (this.settings.protocolVersion === 5) {
          const properties = this._parseProperties();
          if (Object.getOwnPropertyNames(properties).length) {
            packet.properties = properties;
          }
        }
        packet.payload = this._list.slice(this._pos, packet.length);
        debug("_parsePublish: payload from buffer list: %o", packet.payload);
      }
      _parseSubscribe() {
        debug("_parseSubscribe");
        const packet = this.packet;
        let topic;
        let options;
        let qos;
        let rh;
        let rap;
        let nl;
        let subscription;
        packet.subscriptions = [];
        if (!this._parseMessageId()) {
          return;
        }
        if (this.settings.protocolVersion === 5) {
          const properties = this._parseProperties();
          if (Object.getOwnPropertyNames(properties).length) {
            packet.properties = properties;
          }
        }
        if (packet.length <= 0) {
          return this._emitError(new Error("Malformed subscribe, no payload specified"));
        }
        while (this._pos < packet.length) {
          topic = this._parseString();
          if (topic === null)
            return this._emitError(new Error("Cannot parse topic"));
          if (this._pos >= packet.length)
            return this._emitError(new Error("Malformed Subscribe Payload"));
          options = this._parseByte();
          if (this.settings.protocolVersion === 5) {
            if (options & 192) {
              return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-6 must be 0"));
            }
          } else {
            if (options & 252) {
              return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-2 must be 0"));
            }
          }
          qos = options & constants.SUBSCRIBE_OPTIONS_QOS_MASK;
          if (qos > 2) {
            return this._emitError(new Error("Invalid subscribe QoS, must be <= 2"));
          }
          nl = (options >> constants.SUBSCRIBE_OPTIONS_NL_SHIFT & constants.SUBSCRIBE_OPTIONS_NL_MASK) !== 0;
          rap = (options >> constants.SUBSCRIBE_OPTIONS_RAP_SHIFT & constants.SUBSCRIBE_OPTIONS_RAP_MASK) !== 0;
          rh = options >> constants.SUBSCRIBE_OPTIONS_RH_SHIFT & constants.SUBSCRIBE_OPTIONS_RH_MASK;
          if (rh > 2) {
            return this._emitError(new Error("Invalid retain handling, must be <= 2"));
          }
          subscription = { topic, qos };
          if (this.settings.protocolVersion === 5) {
            subscription.nl = nl;
            subscription.rap = rap;
            subscription.rh = rh;
          } else if (this.settings.bridgeMode) {
            subscription.rh = 0;
            subscription.rap = true;
            subscription.nl = true;
          }
          debug("_parseSubscribe: push subscription `%s` to subscription", subscription);
          packet.subscriptions.push(subscription);
        }
      }
      _parseSuback() {
        debug("_parseSuback");
        const packet = this.packet;
        this.packet.granted = [];
        if (!this._parseMessageId()) {
          return;
        }
        if (this.settings.protocolVersion === 5) {
          const properties = this._parseProperties();
          if (Object.getOwnPropertyNames(properties).length) {
            packet.properties = properties;
          }
        }
        if (packet.length <= 0) {
          return this._emitError(new Error("Malformed suback, no payload specified"));
        }
        while (this._pos < this.packet.length) {
          const code = this._list.readUInt8(this._pos++);
          if (this.settings.protocolVersion === 5) {
            if (!constants.MQTT5_SUBACK_CODES[code]) {
              return this._emitError(new Error("Invalid suback code"));
            }
          } else {
            if (code > 2 && code !== 128) {
              return this._emitError(new Error("Invalid suback QoS, must be 0, 1, 2 or 128"));
            }
          }
          this.packet.granted.push(code);
        }
      }
      _parseUnsubscribe() {
        debug("_parseUnsubscribe");
        const packet = this.packet;
        packet.unsubscriptions = [];
        if (!this._parseMessageId()) {
          return;
        }
        if (this.settings.protocolVersion === 5) {
          const properties = this._parseProperties();
          if (Object.getOwnPropertyNames(properties).length) {
            packet.properties = properties;
          }
        }
        if (packet.length <= 0) {
          return this._emitError(new Error("Malformed unsubscribe, no payload specified"));
        }
        while (this._pos < packet.length) {
          const topic = this._parseString();
          if (topic === null)
            return this._emitError(new Error("Cannot parse topic"));
          debug("_parseUnsubscribe: push topic `%s` to unsubscriptions", topic);
          packet.unsubscriptions.push(topic);
        }
      }
      _parseUnsuback() {
        debug("_parseUnsuback");
        const packet = this.packet;
        if (!this._parseMessageId())
          return this._emitError(new Error("Cannot parse messageId"));
        if ((this.settings.protocolVersion === 3 || this.settings.protocolVersion === 4) && packet.length !== 2) {
          return this._emitError(new Error("Malformed unsuback, payload length must be 2"));
        }
        if (packet.length <= 0) {
          return this._emitError(new Error("Malformed unsuback, no payload specified"));
        }
        if (this.settings.protocolVersion === 5) {
          const properties = this._parseProperties();
          if (Object.getOwnPropertyNames(properties).length) {
            packet.properties = properties;
          }
          packet.granted = [];
          while (this._pos < this.packet.length) {
            const code = this._list.readUInt8(this._pos++);
            if (!constants.MQTT5_UNSUBACK_CODES[code]) {
              return this._emitError(new Error("Invalid unsuback code"));
            }
            this.packet.granted.push(code);
          }
        }
      }
      // parse packets like puback, pubrec, pubrel, pubcomp
      _parseConfirmation() {
        debug("_parseConfirmation: packet.cmd: `%s`", this.packet.cmd);
        const packet = this.packet;
        this._parseMessageId();
        if (this.settings.protocolVersion === 5) {
          if (packet.length > 2) {
            packet.reasonCode = this._parseByte();
            switch (this.packet.cmd) {
              case "puback":
              case "pubrec":
                if (!constants.MQTT5_PUBACK_PUBREC_CODES[packet.reasonCode]) {
                  return this._emitError(new Error("Invalid " + this.packet.cmd + " reason code"));
                }
                break;
              case "pubrel":
              case "pubcomp":
                if (!constants.MQTT5_PUBREL_PUBCOMP_CODES[packet.reasonCode]) {
                  return this._emitError(new Error("Invalid " + this.packet.cmd + " reason code"));
                }
                break;
            }
            debug("_parseConfirmation: packet.reasonCode `%d`", packet.reasonCode);
          } else {
            packet.reasonCode = 0;
          }
          if (packet.length > 3) {
            const properties = this._parseProperties();
            if (Object.getOwnPropertyNames(properties).length) {
              packet.properties = properties;
            }
          }
        }
        return true;
      }
      // parse disconnect packet
      _parseDisconnect() {
        const packet = this.packet;
        debug("_parseDisconnect");
        if (this.settings.protocolVersion === 5) {
          if (this._list.length > 0) {
            packet.reasonCode = this._parseByte();
            if (!constants.MQTT5_DISCONNECT_CODES[packet.reasonCode]) {
              this._emitError(new Error("Invalid disconnect reason code"));
            }
          } else {
            packet.reasonCode = 0;
          }
          const properties = this._parseProperties();
          if (Object.getOwnPropertyNames(properties).length) {
            packet.properties = properties;
          }
        }
        debug("_parseDisconnect result: true");
        return true;
      }
      // parse auth packet
      _parseAuth() {
        debug("_parseAuth");
        const packet = this.packet;
        if (this.settings.protocolVersion !== 5) {
          return this._emitError(new Error("Not supported auth packet for this version MQTT"));
        }
        packet.reasonCode = this._parseByte();
        if (!constants.MQTT5_AUTH_CODES[packet.reasonCode]) {
          return this._emitError(new Error("Invalid auth reason code"));
        }
        const properties = this._parseProperties();
        if (Object.getOwnPropertyNames(properties).length) {
          packet.properties = properties;
        }
        debug("_parseAuth: result: true");
        return true;
      }
      _parseMessageId() {
        const packet = this.packet;
        packet.messageId = this._parseNum();
        if (packet.messageId === null) {
          this._emitError(new Error("Cannot parse messageId"));
          return false;
        }
        debug("_parseMessageId: packet.messageId %d", packet.messageId);
        return true;
      }
      _parseString(maybeBuffer) {
        const length = this._parseNum();
        const end = length + this._pos;
        if (length === -1 || end > this._list.length || end > this.packet.length)
          return null;
        const result = this._list.toString("utf8", this._pos, end);
        this._pos += length;
        debug("_parseString: result: %s", result);
        return result;
      }
      _parseStringPair() {
        debug("_parseStringPair");
        return {
          name: this._parseString(),
          value: this._parseString()
        };
      }
      _parseBuffer() {
        const length = this._parseNum();
        const end = length + this._pos;
        if (length === -1 || end > this._list.length || end > this.packet.length)
          return null;
        const result = this._list.slice(this._pos, end);
        this._pos += length;
        debug("_parseBuffer: result: %o", result);
        return result;
      }
      _parseNum() {
        if (this._list.length - this._pos < 2)
          return -1;
        const result = this._list.readUInt16BE(this._pos);
        this._pos += 2;
        debug("_parseNum: result: %s", result);
        return result;
      }
      _parse4ByteNum() {
        if (this._list.length - this._pos < 4)
          return -1;
        const result = this._list.readUInt32BE(this._pos);
        this._pos += 4;
        debug("_parse4ByteNum: result: %s", result);
        return result;
      }
      _parseVarByteNum(fullInfoFlag) {
        debug("_parseVarByteNum");
        const maxBytes = 4;
        let bytes = 0;
        let mul = 1;
        let value = 0;
        let result = false;
        let current;
        const padding = this._pos ? this._pos : 0;
        while (bytes < maxBytes && padding + bytes < this._list.length) {
          current = this._list.readUInt8(padding + bytes++);
          value += mul * (current & constants.VARBYTEINT_MASK);
          mul *= 128;
          if ((current & constants.VARBYTEINT_FIN_MASK) === 0) {
            result = true;
            break;
          }
          if (this._list.length <= bytes) {
            break;
          }
        }
        if (!result && bytes === maxBytes && this._list.length >= bytes) {
          this._emitError(new Error("Invalid variable byte integer"));
        }
        if (padding) {
          this._pos += bytes;
        }
        if (result) {
          if (fullInfoFlag) {
            result = { bytes, value };
          } else {
            result = value;
          }
        } else {
          result = false;
        }
        debug("_parseVarByteNum: result: %o", result);
        return result;
      }
      _parseByte() {
        let result;
        if (this._pos < this._list.length) {
          result = this._list.readUInt8(this._pos);
          this._pos++;
        }
        debug("_parseByte: result: %o", result);
        return result;
      }
      _parseByType(type) {
        debug("_parseByType: type: %s", type);
        switch (type) {
          case "byte": {
            return this._parseByte() !== 0;
          }
          case "int8": {
            return this._parseByte();
          }
          case "int16": {
            return this._parseNum();
          }
          case "int32": {
            return this._parse4ByteNum();
          }
          case "var": {
            return this._parseVarByteNum();
          }
          case "string": {
            return this._parseString();
          }
          case "pair": {
            return this._parseStringPair();
          }
          case "binary": {
            return this._parseBuffer();
          }
        }
      }
      _parseProperties() {
        debug("_parseProperties");
        const length = this._parseVarByteNum();
        const start = this._pos;
        const end = start + length;
        const result = {};
        while (this._pos < end) {
          const type = this._parseByte();
          if (!type) {
            this._emitError(new Error("Cannot parse property code type"));
            return false;
          }
          const name = constants.propertiesCodes[type];
          if (!name) {
            this._emitError(new Error("Unknown property"));
            return false;
          }
          if (name === "userProperties") {
            if (!result[name]) {
              result[name] = /* @__PURE__ */ Object.create(null);
            }
            const currentUserProperty = this._parseByType(constants.propertiesTypes[name]);
            if (result[name][currentUserProperty.name]) {
              if (Array.isArray(result[name][currentUserProperty.name])) {
                result[name][currentUserProperty.name].push(currentUserProperty.value);
              } else {
                const currentValue = result[name][currentUserProperty.name];
                result[name][currentUserProperty.name] = [currentValue];
                result[name][currentUserProperty.name].push(currentUserProperty.value);
              }
            } else {
              result[name][currentUserProperty.name] = currentUserProperty.value;
            }
            continue;
          }
          if (result[name]) {
            if (Array.isArray(result[name])) {
              result[name].push(this._parseByType(constants.propertiesTypes[name]));
            } else {
              result[name] = [result[name]];
              result[name].push(this._parseByType(constants.propertiesTypes[name]));
            }
          } else {
            result[name] = this._parseByType(constants.propertiesTypes[name]);
          }
        }
        return result;
      }
      _newPacket() {
        debug("_newPacket");
        if (this.packet) {
          this._list.consume(this.packet.length);
          debug("_newPacket: parser emit packet: packet.cmd: %s, packet.payload: %s, packet.length: %d", this.packet.cmd, this.packet.payload, this.packet.length);
          this.emit("packet", this.packet);
        }
        debug("_newPacket: new packet");
        this.packet = new Packet();
        this._pos = 0;
        return true;
      }
      _emitError(err) {
        debug("_emitError", err);
        this.error = err;
        this.emit("error", err);
      }
    };
    module2.exports = Parser;
  }
});

// node_modules/mqtt-packet/numbers.js
var require_numbers = __commonJS({
  "node_modules/mqtt-packet/numbers.js"(exports2, module2) {
    var { Buffer: Buffer2 } = require("buffer");
    var max = 65536;
    var cache = {};
    var SubOk = Buffer2.isBuffer(Buffer2.from([1, 2]).subarray(0, 1));
    function generateBuffer(i) {
      const buffer = Buffer2.allocUnsafe(2);
      buffer.writeUInt8(i >> 8, 0);
      buffer.writeUInt8(i & 255, 0 + 1);
      return buffer;
    }
    function generateCache() {
      for (let i = 0; i < max; i++) {
        cache[i] = generateBuffer(i);
      }
    }
    function genBufVariableByteInt(num) {
      const maxLength = 4;
      let digit = 0;
      let pos = 0;
      const buffer = Buffer2.allocUnsafe(maxLength);
      do {
        digit = num % 128 | 0;
        num = num / 128 | 0;
        if (num > 0)
          digit = digit | 128;
        buffer.writeUInt8(digit, pos++);
      } while (num > 0 && pos < maxLength);
      if (num > 0) {
        pos = 0;
      }
      return SubOk ? buffer.subarray(0, pos) : buffer.slice(0, pos);
    }
    function generate4ByteBuffer(num) {
      const buffer = Buffer2.allocUnsafe(4);
      buffer.writeUInt32BE(num, 0);
      return buffer;
    }
    module2.exports = {
      cache,
      generateCache,
      generateNumber: generateBuffer,
      genBufVariableByteInt,
      generate4ByteBuffer
    };
  }
});

// node_modules/process-nextick-args/index.js
var require_process_nextick_args = __commonJS({
  "node_modules/process-nextick-args/index.js"(exports2, module2) {
    "use strict";
    if (typeof process === "undefined" || !process.version || process.version.indexOf("v0.") === 0 || process.version.indexOf("v1.") === 0 && process.version.indexOf("v1.8.") !== 0) {
      module2.exports = { nextTick };
    } else {
      module2.exports = process;
    }
    function nextTick(fn, arg1, arg2, arg3) {
      if (typeof fn !== "function") {
        throw new TypeError('"callback" argument must be a function');
      }
      var len = arguments.length;
      var args, i;
      switch (len) {
        case 0:
        case 1:
          return process.nextTick(fn);
        case 2:
          return process.nextTick(function afterTickOne() {
            fn.call(null, arg1);
          });
        case 3:
          return process.nextTick(function afterTickTwo() {
            fn.call(null, arg1, arg2);
          });
        case 4:
          return process.nextTick(function afterTickThree() {
            fn.call(null, arg1, arg2, arg3);
          });
        default:
          args = new Array(len - 1);
          i = 0;
          while (i < args.length) {
            args[i++] = arguments[i];
          }
          return process.nextTick(function afterTick() {
            fn.apply(null, args);
          });
      }
    }
  }
});

// node_modules/mqtt-packet/writeToStream.js
var require_writeToStream = __commonJS({
  "node_modules/mqtt-packet/writeToStream.js"(exports2, module2) {
    var protocol = require_constants();
    var { Buffer: Buffer2 } = require("buffer");
    var empty = Buffer2.allocUnsafe(0);
    var zeroBuf = Buffer2.from([0]);
    var numbers = require_numbers();
    var nextTick = require_process_nextick_args().nextTick;
    var debug = require_src()("mqtt-packet:writeToStream");
    var numCache = numbers.cache;
    var generateNumber = numbers.generateNumber;
    var generateCache = numbers.generateCache;
    var genBufVariableByteInt = numbers.genBufVariableByteInt;
    var generate4ByteBuffer = numbers.generate4ByteBuffer;
    var writeNumber = writeNumberCached;
    var toGenerate = true;
    function generate(packet, stream, opts) {
      debug("generate called");
      if (stream.cork) {
        stream.cork();
        nextTick(uncork, stream);
      }
      if (toGenerate) {
        toGenerate = false;
        generateCache();
      }
      debug("generate: packet.cmd: %s", packet.cmd);
      switch (packet.cmd) {
        case "connect":
          return connect2(packet, stream, opts);
        case "connack":
          return connack(packet, stream, opts);
        case "publish":
          return publish(packet, stream, opts);
        case "puback":
        case "pubrec":
        case "pubrel":
        case "pubcomp":
          return confirmation(packet, stream, opts);
        case "subscribe":
          return subscribe(packet, stream, opts);
        case "suback":
          return suback(packet, stream, opts);
        case "unsubscribe":
          return unsubscribe(packet, stream, opts);
        case "unsuback":
          return unsuback(packet, stream, opts);
        case "pingreq":
        case "pingresp":
          return emptyPacket(packet, stream, opts);
        case "disconnect":
          return disconnect(packet, stream, opts);
        case "auth":
          return auth(packet, stream, opts);
        default:
          stream.destroy(new Error("Unknown command"));
          return false;
      }
    }
    Object.defineProperty(generate, "cacheNumbers", {
      get() {
        return writeNumber === writeNumberCached;
      },
      set(value) {
        if (value) {
          if (!numCache || Object.keys(numCache).length === 0)
            toGenerate = true;
          writeNumber = writeNumberCached;
        } else {
          toGenerate = false;
          writeNumber = writeNumberGenerated;
        }
      }
    });
    function uncork(stream) {
      stream.uncork();
    }
    function connect2(packet, stream, opts) {
      const settings = packet || {};
      const protocolId = settings.protocolId || "MQTT";
      let protocolVersion = settings.protocolVersion || 4;
      const will = settings.will;
      let clean = settings.clean;
      const keepalive = settings.keepalive || 0;
      const clientId = settings.clientId || "";
      const username = settings.username;
      const password = settings.password;
      const properties = settings.properties;
      if (clean === void 0)
        clean = true;
      let length = 0;
      if (!protocolId || typeof protocolId !== "string" && !Buffer2.isBuffer(protocolId)) {
        stream.destroy(new Error("Invalid protocolId"));
        return false;
      } else
        length += protocolId.length + 2;
      if (protocolVersion !== 3 && protocolVersion !== 4 && protocolVersion !== 5) {
        stream.destroy(new Error("Invalid protocol version"));
        return false;
      } else
        length += 1;
      if ((typeof clientId === "string" || Buffer2.isBuffer(clientId)) && (clientId || protocolVersion >= 4) && (clientId || clean)) {
        length += Buffer2.byteLength(clientId) + 2;
      } else {
        if (protocolVersion < 4) {
          stream.destroy(new Error("clientId must be supplied before 3.1.1"));
          return false;
        }
        if (clean * 1 === 0) {
          stream.destroy(new Error("clientId must be given if cleanSession set to 0"));
          return false;
        }
      }
      if (typeof keepalive !== "number" || keepalive < 0 || keepalive > 65535 || keepalive % 1 !== 0) {
        stream.destroy(new Error("Invalid keepalive"));
        return false;
      } else
        length += 2;
      length += 1;
      let propertiesData;
      let willProperties;
      if (protocolVersion === 5) {
        propertiesData = getProperties(stream, properties);
        if (!propertiesData) {
          return false;
        }
        length += propertiesData.length;
      }
      if (will) {
        if (typeof will !== "object") {
          stream.destroy(new Error("Invalid will"));
          return false;
        }
        if (!will.topic || typeof will.topic !== "string") {
          stream.destroy(new Error("Invalid will topic"));
          return false;
        } else {
          length += Buffer2.byteLength(will.topic) + 2;
        }
        length += 2;
        if (will.payload) {
          if (will.payload.length >= 0) {
            if (typeof will.payload === "string") {
              length += Buffer2.byteLength(will.payload);
            } else {
              length += will.payload.length;
            }
          } else {
            stream.destroy(new Error("Invalid will payload"));
            return false;
          }
        }
        willProperties = {};
        if (protocolVersion === 5) {
          willProperties = getProperties(stream, will.properties);
          if (!willProperties) {
            return false;
          }
          length += willProperties.length;
        }
      }
      let providedUsername = false;
      if (username != null) {
        if (isStringOrBuffer(username)) {
          providedUsername = true;
          length += Buffer2.byteLength(username) + 2;
        } else {
          stream.destroy(new Error("Invalid username"));
          return false;
        }
      }
      if (password != null) {
        if (!providedUsername) {
          stream.destroy(new Error("Username is required to use password"));
          return false;
        }
        if (isStringOrBuffer(password)) {
          length += byteLength(password) + 2;
        } else {
          stream.destroy(new Error("Invalid password"));
          return false;
        }
      }
      stream.write(protocol.CONNECT_HEADER);
      writeVarByteInt(stream, length);
      writeStringOrBuffer(stream, protocolId);
      if (settings.bridgeMode) {
        protocolVersion += 128;
      }
      stream.write(
        protocolVersion === 131 ? protocol.VERSION131 : protocolVersion === 132 ? protocol.VERSION132 : protocolVersion === 4 ? protocol.VERSION4 : protocolVersion === 5 ? protocol.VERSION5 : protocol.VERSION3
      );
      let flags = 0;
      flags |= username != null ? protocol.USERNAME_MASK : 0;
      flags |= password != null ? protocol.PASSWORD_MASK : 0;
      flags |= will && will.retain ? protocol.WILL_RETAIN_MASK : 0;
      flags |= will && will.qos ? will.qos << protocol.WILL_QOS_SHIFT : 0;
      flags |= will ? protocol.WILL_FLAG_MASK : 0;
      flags |= clean ? protocol.CLEAN_SESSION_MASK : 0;
      stream.write(Buffer2.from([flags]));
      writeNumber(stream, keepalive);
      if (protocolVersion === 5) {
        propertiesData.write();
      }
      writeStringOrBuffer(stream, clientId);
      if (will) {
        if (protocolVersion === 5) {
          willProperties.write();
        }
        writeString(stream, will.topic);
        writeStringOrBuffer(stream, will.payload);
      }
      if (username != null) {
        writeStringOrBuffer(stream, username);
      }
      if (password != null) {
        writeStringOrBuffer(stream, password);
      }
      return true;
    }
    function connack(packet, stream, opts) {
      const version = opts ? opts.protocolVersion : 4;
      const settings = packet || {};
      const rc = version === 5 ? settings.reasonCode : settings.returnCode;
      const properties = settings.properties;
      let length = 2;
      if (typeof rc !== "number") {
        stream.destroy(new Error("Invalid return code"));
        return false;
      }
      let propertiesData = null;
      if (version === 5) {
        propertiesData = getProperties(stream, properties);
        if (!propertiesData) {
          return false;
        }
        length += propertiesData.length;
      }
      stream.write(protocol.CONNACK_HEADER);
      writeVarByteInt(stream, length);
      stream.write(settings.sessionPresent ? protocol.SESSIONPRESENT_HEADER : zeroBuf);
      stream.write(Buffer2.from([rc]));
      if (propertiesData != null) {
        propertiesData.write();
      }
      return true;
    }
    function publish(packet, stream, opts) {
      debug("publish: packet: %o", packet);
      const version = opts ? opts.protocolVersion : 4;
      const settings = packet || {};
      const qos = settings.qos || 0;
      const retain = settings.retain ? protocol.RETAIN_MASK : 0;
      const topic = settings.topic;
      const payload = settings.payload || empty;
      const id = settings.messageId;
      const properties = settings.properties;
      let length = 0;
      if (typeof topic === "string")
        length += Buffer2.byteLength(topic) + 2;
      else if (Buffer2.isBuffer(topic))
        length += topic.length + 2;
      else {
        stream.destroy(new Error("Invalid topic"));
        return false;
      }
      if (!Buffer2.isBuffer(payload))
        length += Buffer2.byteLength(payload);
      else
        length += payload.length;
      if (qos && typeof id !== "number") {
        stream.destroy(new Error("Invalid messageId"));
        return false;
      } else if (qos)
        length += 2;
      let propertiesData = null;
      if (version === 5) {
        propertiesData = getProperties(stream, properties);
        if (!propertiesData) {
          return false;
        }
        length += propertiesData.length;
      }
      stream.write(protocol.PUBLISH_HEADER[qos][settings.dup ? 1 : 0][retain ? 1 : 0]);
      writeVarByteInt(stream, length);
      writeNumber(stream, byteLength(topic));
      stream.write(topic);
      if (qos > 0)
        writeNumber(stream, id);
      if (propertiesData != null) {
        propertiesData.write();
      }
      debug("publish: payload: %o", payload);
      return stream.write(payload);
    }
    function confirmation(packet, stream, opts) {
      const version = opts ? opts.protocolVersion : 4;
      const settings = packet || {};
      const type = settings.cmd || "puback";
      const id = settings.messageId;
      const dup = settings.dup && type === "pubrel" ? protocol.DUP_MASK : 0;
      let qos = 0;
      const reasonCode = settings.reasonCode;
      const properties = settings.properties;
      let length = version === 5 ? 3 : 2;
      if (type === "pubrel")
        qos = 1;
      if (typeof id !== "number") {
        stream.destroy(new Error("Invalid messageId"));
        return false;
      }
      let propertiesData = null;
      if (version === 5) {
        if (typeof properties === "object") {
          propertiesData = getPropertiesByMaximumPacketSize(stream, properties, opts, length);
          if (!propertiesData) {
            return false;
          }
          length += propertiesData.length;
        }
      }
      stream.write(protocol.ACKS[type][qos][dup][0]);
      if (length === 3)
        length += reasonCode !== 0 ? 1 : -1;
      writeVarByteInt(stream, length);
      writeNumber(stream, id);
      if (version === 5 && length !== 2) {
        stream.write(Buffer2.from([reasonCode]));
      }
      if (propertiesData !== null) {
        propertiesData.write();
      } else {
        if (length === 4) {
          stream.write(Buffer2.from([0]));
        }
      }
      return true;
    }
    function subscribe(packet, stream, opts) {
      debug("subscribe: packet: ");
      const version = opts ? opts.protocolVersion : 4;
      const settings = packet || {};
      const dup = settings.dup ? protocol.DUP_MASK : 0;
      const id = settings.messageId;
      const subs = settings.subscriptions;
      const properties = settings.properties;
      let length = 0;
      if (typeof id !== "number") {
        stream.destroy(new Error("Invalid messageId"));
        return false;
      } else
        length += 2;
      let propertiesData = null;
      if (version === 5) {
        propertiesData = getProperties(stream, properties);
        if (!propertiesData) {
          return false;
        }
        length += propertiesData.length;
      }
      if (typeof subs === "object" && subs.length) {
        for (let i = 0; i < subs.length; i += 1) {
          const itopic = subs[i].topic;
          const iqos = subs[i].qos;
          if (typeof itopic !== "string") {
            stream.destroy(new Error("Invalid subscriptions - invalid topic"));
            return false;
          }
          if (typeof iqos !== "number") {
            stream.destroy(new Error("Invalid subscriptions - invalid qos"));
            return false;
          }
          if (version === 5) {
            const nl = subs[i].nl || false;
            if (typeof nl !== "boolean") {
              stream.destroy(new Error("Invalid subscriptions - invalid No Local"));
              return false;
            }
            const rap = subs[i].rap || false;
            if (typeof rap !== "boolean") {
              stream.destroy(new Error("Invalid subscriptions - invalid Retain as Published"));
              return false;
            }
            const rh = subs[i].rh || 0;
            if (typeof rh !== "number" || rh > 2) {
              stream.destroy(new Error("Invalid subscriptions - invalid Retain Handling"));
              return false;
            }
          }
          length += Buffer2.byteLength(itopic) + 2 + 1;
        }
      } else {
        stream.destroy(new Error("Invalid subscriptions"));
        return false;
      }
      debug("subscribe: writing to stream: %o", protocol.SUBSCRIBE_HEADER);
      stream.write(protocol.SUBSCRIBE_HEADER[1][dup ? 1 : 0][0]);
      writeVarByteInt(stream, length);
      writeNumber(stream, id);
      if (propertiesData !== null) {
        propertiesData.write();
      }
      let result = true;
      for (const sub of subs) {
        const jtopic = sub.topic;
        const jqos = sub.qos;
        const jnl = +sub.nl;
        const jrap = +sub.rap;
        const jrh = sub.rh;
        let joptions;
        writeString(stream, jtopic);
        joptions = protocol.SUBSCRIBE_OPTIONS_QOS[jqos];
        if (version === 5) {
          joptions |= jnl ? protocol.SUBSCRIBE_OPTIONS_NL : 0;
          joptions |= jrap ? protocol.SUBSCRIBE_OPTIONS_RAP : 0;
          joptions |= jrh ? protocol.SUBSCRIBE_OPTIONS_RH[jrh] : 0;
        }
        result = stream.write(Buffer2.from([joptions]));
      }
      return result;
    }
    function suback(packet, stream, opts) {
      const version = opts ? opts.protocolVersion : 4;
      const settings = packet || {};
      const id = settings.messageId;
      const granted = settings.granted;
      const properties = settings.properties;
      let length = 0;
      if (typeof id !== "number") {
        stream.destroy(new Error("Invalid messageId"));
        return false;
      } else
        length += 2;
      if (typeof granted === "object" && granted.length) {
        for (let i = 0; i < granted.length; i += 1) {
          if (typeof granted[i] !== "number") {
            stream.destroy(new Error("Invalid qos vector"));
            return false;
          }
          length += 1;
        }
      } else {
        stream.destroy(new Error("Invalid qos vector"));
        return false;
      }
      let propertiesData = null;
      if (version === 5) {
        propertiesData = getPropertiesByMaximumPacketSize(stream, properties, opts, length);
        if (!propertiesData) {
          return false;
        }
        length += propertiesData.length;
      }
      stream.write(protocol.SUBACK_HEADER);
      writeVarByteInt(stream, length);
      writeNumber(stream, id);
      if (propertiesData !== null) {
        propertiesData.write();
      }
      return stream.write(Buffer2.from(granted));
    }
    function unsubscribe(packet, stream, opts) {
      const version = opts ? opts.protocolVersion : 4;
      const settings = packet || {};
      const id = settings.messageId;
      const dup = settings.dup ? protocol.DUP_MASK : 0;
      const unsubs = settings.unsubscriptions;
      const properties = settings.properties;
      let length = 0;
      if (typeof id !== "number") {
        stream.destroy(new Error("Invalid messageId"));
        return false;
      } else {
        length += 2;
      }
      if (typeof unsubs === "object" && unsubs.length) {
        for (let i = 0; i < unsubs.length; i += 1) {
          if (typeof unsubs[i] !== "string") {
            stream.destroy(new Error("Invalid unsubscriptions"));
            return false;
          }
          length += Buffer2.byteLength(unsubs[i]) + 2;
        }
      } else {
        stream.destroy(new Error("Invalid unsubscriptions"));
        return false;
      }
      let propertiesData = null;
      if (version === 5) {
        propertiesData = getProperties(stream, properties);
        if (!propertiesData) {
          return false;
        }
        length += propertiesData.length;
      }
      stream.write(protocol.UNSUBSCRIBE_HEADER[1][dup ? 1 : 0][0]);
      writeVarByteInt(stream, length);
      writeNumber(stream, id);
      if (propertiesData !== null) {
        propertiesData.write();
      }
      let result = true;
      for (let j = 0; j < unsubs.length; j++) {
        result = writeString(stream, unsubs[j]);
      }
      return result;
    }
    function unsuback(packet, stream, opts) {
      const version = opts ? opts.protocolVersion : 4;
      const settings = packet || {};
      const id = settings.messageId;
      const dup = settings.dup ? protocol.DUP_MASK : 0;
      const granted = settings.granted;
      const properties = settings.properties;
      const type = settings.cmd;
      const qos = 0;
      let length = 2;
      if (typeof id !== "number") {
        stream.destroy(new Error("Invalid messageId"));
        return false;
      }
      if (version === 5) {
        if (typeof granted === "object" && granted.length) {
          for (let i = 0; i < granted.length; i += 1) {
            if (typeof granted[i] !== "number") {
              stream.destroy(new Error("Invalid qos vector"));
              return false;
            }
            length += 1;
          }
        } else {
          stream.destroy(new Error("Invalid qos vector"));
          return false;
        }
      }
      let propertiesData = null;
      if (version === 5) {
        propertiesData = getPropertiesByMaximumPacketSize(stream, properties, opts, length);
        if (!propertiesData) {
          return false;
        }
        length += propertiesData.length;
      }
      stream.write(protocol.ACKS[type][qos][dup][0]);
      writeVarByteInt(stream, length);
      writeNumber(stream, id);
      if (propertiesData !== null) {
        propertiesData.write();
      }
      if (version === 5) {
        stream.write(Buffer2.from(granted));
      }
      return true;
    }
    function emptyPacket(packet, stream, opts) {
      return stream.write(protocol.EMPTY[packet.cmd]);
    }
    function disconnect(packet, stream, opts) {
      const version = opts ? opts.protocolVersion : 4;
      const settings = packet || {};
      const reasonCode = settings.reasonCode;
      const properties = settings.properties;
      let length = version === 5 ? 1 : 0;
      let propertiesData = null;
      if (version === 5) {
        propertiesData = getPropertiesByMaximumPacketSize(stream, properties, opts, length);
        if (!propertiesData) {
          return false;
        }
        length += propertiesData.length;
      }
      stream.write(Buffer2.from([protocol.codes.disconnect << 4]));
      writeVarByteInt(stream, length);
      if (version === 5) {
        stream.write(Buffer2.from([reasonCode]));
      }
      if (propertiesData !== null) {
        propertiesData.write();
      }
      return true;
    }
    function auth(packet, stream, opts) {
      const version = opts ? opts.protocolVersion : 4;
      const settings = packet || {};
      const reasonCode = settings.reasonCode;
      const properties = settings.properties;
      let length = version === 5 ? 1 : 0;
      if (version !== 5)
        stream.destroy(new Error("Invalid mqtt version for auth packet"));
      const propertiesData = getPropertiesByMaximumPacketSize(stream, properties, opts, length);
      if (!propertiesData) {
        return false;
      }
      length += propertiesData.length;
      stream.write(Buffer2.from([protocol.codes.auth << 4]));
      writeVarByteInt(stream, length);
      stream.write(Buffer2.from([reasonCode]));
      if (propertiesData !== null) {
        propertiesData.write();
      }
      return true;
    }
    var varByteIntCache = {};
    function writeVarByteInt(stream, num) {
      if (num > protocol.VARBYTEINT_MAX) {
        stream.destroy(new Error(`Invalid variable byte integer: ${num}`));
        return false;
      }
      let buffer = varByteIntCache[num];
      if (!buffer) {
        buffer = genBufVariableByteInt(num);
        if (num < 16384)
          varByteIntCache[num] = buffer;
      }
      debug("writeVarByteInt: writing to stream: %o", buffer);
      return stream.write(buffer);
    }
    function writeString(stream, string) {
      const strlen = Buffer2.byteLength(string);
      writeNumber(stream, strlen);
      debug("writeString: %s", string);
      return stream.write(string, "utf8");
    }
    function writeStringPair(stream, name, value) {
      writeString(stream, name);
      writeString(stream, value);
    }
    function writeNumberCached(stream, number) {
      debug("writeNumberCached: number: %d", number);
      debug("writeNumberCached: %o", numCache[number]);
      return stream.write(numCache[number]);
    }
    function writeNumberGenerated(stream, number) {
      const generatedNumber = generateNumber(number);
      debug("writeNumberGenerated: %o", generatedNumber);
      return stream.write(generatedNumber);
    }
    function write4ByteNumber(stream, number) {
      const generated4ByteBuffer = generate4ByteBuffer(number);
      debug("write4ByteNumber: %o", generated4ByteBuffer);
      return stream.write(generated4ByteBuffer);
    }
    function writeStringOrBuffer(stream, toWrite) {
      if (typeof toWrite === "string") {
        writeString(stream, toWrite);
      } else if (toWrite) {
        writeNumber(stream, toWrite.length);
        stream.write(toWrite);
      } else
        writeNumber(stream, 0);
    }
    function getProperties(stream, properties) {
      if (typeof properties !== "object" || properties.length != null) {
        return {
          length: 1,
          write() {
            writeProperties(stream, {}, 0);
          }
        };
      }
      let propertiesLength = 0;
      function getLengthProperty(name, value) {
        const type = protocol.propertiesTypes[name];
        let length = 0;
        switch (type) {
          case "byte": {
            if (typeof value !== "boolean") {
              stream.destroy(new Error(`Invalid ${name}: ${value}`));
              return false;
            }
            length += 1 + 1;
            break;
          }
          case "int8": {
            if (typeof value !== "number" || value < 0 || value > 255) {
              stream.destroy(new Error(`Invalid ${name}: ${value}`));
              return false;
            }
            length += 1 + 1;
            break;
          }
          case "binary": {
            if (value && value === null) {
              stream.destroy(new Error(`Invalid ${name}: ${value}`));
              return false;
            }
            length += 1 + Buffer2.byteLength(value) + 2;
            break;
          }
          case "int16": {
            if (typeof value !== "number" || value < 0 || value > 65535) {
              stream.destroy(new Error(`Invalid ${name}: ${value}`));
              return false;
            }
            length += 1 + 2;
            break;
          }
          case "int32": {
            if (typeof value !== "number" || value < 0 || value > 4294967295) {
              stream.destroy(new Error(`Invalid ${name}: ${value}`));
              return false;
            }
            length += 1 + 4;
            break;
          }
          case "var": {
            if (typeof value !== "number" || value < 0 || value > 268435455) {
              stream.destroy(new Error(`Invalid ${name}: ${value}`));
              return false;
            }
            length += 1 + Buffer2.byteLength(genBufVariableByteInt(value));
            break;
          }
          case "string": {
            if (typeof value !== "string") {
              stream.destroy(new Error(`Invalid ${name}: ${value}`));
              return false;
            }
            length += 1 + 2 + Buffer2.byteLength(value.toString());
            break;
          }
          case "pair": {
            if (typeof value !== "object") {
              stream.destroy(new Error(`Invalid ${name}: ${value}`));
              return false;
            }
            length += Object.getOwnPropertyNames(value).reduce((result, name2) => {
              const currentValue = value[name2];
              if (Array.isArray(currentValue)) {
                result += currentValue.reduce((currentLength, value2) => {
                  currentLength += 1 + 2 + Buffer2.byteLength(name2.toString()) + 2 + Buffer2.byteLength(value2.toString());
                  return currentLength;
                }, 0);
              } else {
                result += 1 + 2 + Buffer2.byteLength(name2.toString()) + 2 + Buffer2.byteLength(value[name2].toString());
              }
              return result;
            }, 0);
            break;
          }
          default: {
            stream.destroy(new Error(`Invalid property ${name}: ${value}`));
            return false;
          }
        }
        return length;
      }
      if (properties) {
        for (const propName in properties) {
          let propLength = 0;
          let propValueLength = 0;
          const propValue = properties[propName];
          if (propValue === void 0) {
            continue;
          } else if (Array.isArray(propValue)) {
            for (let valueIndex = 0; valueIndex < propValue.length; valueIndex++) {
              propValueLength = getLengthProperty(propName, propValue[valueIndex]);
              if (!propValueLength) {
                return false;
              }
              propLength += propValueLength;
            }
          } else {
            propValueLength = getLengthProperty(propName, propValue);
            if (!propValueLength) {
              return false;
            }
            propLength = propValueLength;
          }
          if (!propLength)
            return false;
          propertiesLength += propLength;
        }
      }
      const propertiesLengthLength = Buffer2.byteLength(genBufVariableByteInt(propertiesLength));
      return {
        length: propertiesLengthLength + propertiesLength,
        write() {
          writeProperties(stream, properties, propertiesLength);
        }
      };
    }
    function getPropertiesByMaximumPacketSize(stream, properties, opts, length) {
      const mayEmptyProps = ["reasonString", "userProperties"];
      const maximumPacketSize = opts && opts.properties && opts.properties.maximumPacketSize ? opts.properties.maximumPacketSize : 0;
      let propertiesData = getProperties(stream, properties);
      if (maximumPacketSize) {
        while (length + propertiesData.length > maximumPacketSize) {
          const currentMayEmptyProp = mayEmptyProps.shift();
          if (currentMayEmptyProp && properties[currentMayEmptyProp]) {
            delete properties[currentMayEmptyProp];
            propertiesData = getProperties(stream, properties);
          } else {
            return false;
          }
        }
      }
      return propertiesData;
    }
    function writeProperty(stream, propName, value) {
      const type = protocol.propertiesTypes[propName];
      switch (type) {
        case "byte": {
          stream.write(Buffer2.from([protocol.properties[propName]]));
          stream.write(Buffer2.from([+value]));
          break;
        }
        case "int8": {
          stream.write(Buffer2.from([protocol.properties[propName]]));
          stream.write(Buffer2.from([value]));
          break;
        }
        case "binary": {
          stream.write(Buffer2.from([protocol.properties[propName]]));
          writeStringOrBuffer(stream, value);
          break;
        }
        case "int16": {
          stream.write(Buffer2.from([protocol.properties[propName]]));
          writeNumber(stream, value);
          break;
        }
        case "int32": {
          stream.write(Buffer2.from([protocol.properties[propName]]));
          write4ByteNumber(stream, value);
          break;
        }
        case "var": {
          stream.write(Buffer2.from([protocol.properties[propName]]));
          writeVarByteInt(stream, value);
          break;
        }
        case "string": {
          stream.write(Buffer2.from([protocol.properties[propName]]));
          writeString(stream, value);
          break;
        }
        case "pair": {
          Object.getOwnPropertyNames(value).forEach((name) => {
            const currentValue = value[name];
            if (Array.isArray(currentValue)) {
              currentValue.forEach((value2) => {
                stream.write(Buffer2.from([protocol.properties[propName]]));
                writeStringPair(stream, name.toString(), value2.toString());
              });
            } else {
              stream.write(Buffer2.from([protocol.properties[propName]]));
              writeStringPair(stream, name.toString(), currentValue.toString());
            }
          });
          break;
        }
        default: {
          stream.destroy(new Error(`Invalid property ${propName} value: ${value}`));
          return false;
        }
      }
    }
    function writeProperties(stream, properties, propertiesLength) {
      writeVarByteInt(stream, propertiesLength);
      for (const propName in properties) {
        if (Object.prototype.hasOwnProperty.call(properties, propName) && properties[propName] != null) {
          const value = properties[propName];
          if (Array.isArray(value)) {
            for (let valueIndex = 0; valueIndex < value.length; valueIndex++) {
              writeProperty(stream, propName, value[valueIndex]);
            }
          } else {
            writeProperty(stream, propName, value);
          }
        }
      }
    }
    function byteLength(bufOrString) {
      if (!bufOrString)
        return 0;
      else if (bufOrString instanceof Buffer2)
        return bufOrString.length;
      else
        return Buffer2.byteLength(bufOrString);
    }
    function isStringOrBuffer(field) {
      return typeof field === "string" || field instanceof Buffer2;
    }
    module2.exports = generate;
  }
});

// node_modules/mqtt-packet/generate.js
var require_generate = __commonJS({
  "node_modules/mqtt-packet/generate.js"(exports2, module2) {
    var writeToStream = require_writeToStream();
    var { EventEmitter: EventEmitter2 } = require("events");
    var { Buffer: Buffer2 } = require("buffer");
    function generate(packet, opts) {
      const stream = new Accumulator();
      writeToStream(packet, stream, opts);
      return stream.concat();
    }
    var Accumulator = class extends EventEmitter2 {
      constructor() {
        super();
        this._array = new Array(20);
        this._i = 0;
      }
      write(chunk) {
        this._array[this._i++] = chunk;
        return true;
      }
      concat() {
        let length = 0;
        const lengths = new Array(this._array.length);
        const list = this._array;
        let pos = 0;
        let i;
        for (i = 0; i < list.length && list[i] !== void 0; i++) {
          if (typeof list[i] !== "string")
            lengths[i] = list[i].length;
          else
            lengths[i] = Buffer2.byteLength(list[i]);
          length += lengths[i];
        }
        const result = Buffer2.allocUnsafe(length);
        for (i = 0; i < list.length && list[i] !== void 0; i++) {
          if (typeof list[i] !== "string") {
            list[i].copy(result, pos);
            pos += lengths[i];
          } else {
            result.write(list[i], pos);
            pos += lengths[i];
          }
        }
        return result;
      }
      destroy(err) {
        if (err)
          this.emit("error", err);
      }
    };
    module2.exports = generate;
  }
});

// node_modules/mqtt-packet/mqtt.js
var require_mqtt = __commonJS({
  "node_modules/mqtt-packet/mqtt.js"(exports2) {
    exports2.parser = require_parser().parser;
    exports2.generate = require_generate();
    exports2.writeToStream = require_writeToStream();
  }
});

// node_modules/mqtt/build/lib/default-message-id-provider.js
var require_default_message_id_provider = __commonJS({
  "node_modules/mqtt/build/lib/default-message-id-provider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var DefaultMessageIdProvider = class {
      constructor() {
        this.nextId = Math.max(1, Math.floor(Math.random() * 65535));
      }
      allocate() {
        const id = this.nextId++;
        if (this.nextId === 65536) {
          this.nextId = 1;
        }
        return id;
      }
      getLastAllocated() {
        return this.nextId === 1 ? 65535 : this.nextId - 1;
      }
      register(messageId) {
        return true;
      }
      deallocate(messageId) {
      }
      clear() {
      }
    };
    exports2.default = DefaultMessageIdProvider;
  }
});

// node_modules/rfdc/index.js
var require_rfdc = __commonJS({
  "node_modules/rfdc/index.js"(exports2, module2) {
    "use strict";
    module2.exports = rfdc;
    function copyBuffer(cur) {
      if (cur instanceof Buffer) {
        return Buffer.from(cur);
      }
      return new cur.constructor(cur.buffer.slice(), cur.byteOffset, cur.length);
    }
    function rfdc(opts) {
      opts = opts || {};
      if (opts.circles)
        return rfdcCircles(opts);
      const constructorHandlers = /* @__PURE__ */ new Map();
      constructorHandlers.set(Date, (o) => new Date(o));
      constructorHandlers.set(Map, (o, fn) => new Map(cloneArray(Array.from(o), fn)));
      constructorHandlers.set(Set, (o, fn) => new Set(cloneArray(Array.from(o), fn)));
      if (opts.constructorHandlers) {
        for (const handler2 of opts.constructorHandlers) {
          constructorHandlers.set(handler2[0], handler2[1]);
        }
      }
      let handler = null;
      return opts.proto ? cloneProto : clone;
      function cloneArray(a, fn) {
        const keys = Object.keys(a);
        const a2 = new Array(keys.length);
        for (let i = 0; i < keys.length; i++) {
          const k = keys[i];
          const cur = a[k];
          if (typeof cur !== "object" || cur === null) {
            a2[k] = cur;
          } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
            a2[k] = handler(cur, fn);
          } else if (ArrayBuffer.isView(cur)) {
            a2[k] = copyBuffer(cur);
          } else {
            a2[k] = fn(cur);
          }
        }
        return a2;
      }
      function clone(o) {
        if (typeof o !== "object" || o === null)
          return o;
        if (Array.isArray(o))
          return cloneArray(o, clone);
        if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) {
          return handler(o, clone);
        }
        const o2 = {};
        for (const k in o) {
          if (Object.hasOwnProperty.call(o, k) === false)
            continue;
          const cur = o[k];
          if (typeof cur !== "object" || cur === null) {
            o2[k] = cur;
          } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
            o2[k] = handler(cur, clone);
          } else if (ArrayBuffer.isView(cur)) {
            o2[k] = copyBuffer(cur);
          } else {
            o2[k] = clone(cur);
          }
        }
        return o2;
      }
      function cloneProto(o) {
        if (typeof o !== "object" || o === null)
          return o;
        if (Array.isArray(o))
          return cloneArray(o, cloneProto);
        if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) {
          return handler(o, cloneProto);
        }
        const o2 = {};
        for (const k in o) {
          const cur = o[k];
          if (typeof cur !== "object" || cur === null) {
            o2[k] = cur;
          } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
            o2[k] = handler(cur, cloneProto);
          } else if (ArrayBuffer.isView(cur)) {
            o2[k] = copyBuffer(cur);
          } else {
            o2[k] = cloneProto(cur);
          }
        }
        return o2;
      }
    }
    function rfdcCircles(opts) {
      const refs = [];
      const refsNew = [];
      const constructorHandlers = /* @__PURE__ */ new Map();
      constructorHandlers.set(Date, (o) => new Date(o));
      constructorHandlers.set(Map, (o, fn) => new Map(cloneArray(Array.from(o), fn)));
      constructorHandlers.set(Set, (o, fn) => new Set(cloneArray(Array.from(o), fn)));
      if (opts.constructorHandlers) {
        for (const handler2 of opts.constructorHandlers) {
          constructorHandlers.set(handler2[0], handler2[1]);
        }
      }
      let handler = null;
      return opts.proto ? cloneProto : clone;
      function cloneArray(a, fn) {
        const keys = Object.keys(a);
        const a2 = new Array(keys.length);
        for (let i = 0; i < keys.length; i++) {
          const k = keys[i];
          const cur = a[k];
          if (typeof cur !== "object" || cur === null) {
            a2[k] = cur;
          } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
            a2[k] = handler(cur, fn);
          } else if (ArrayBuffer.isView(cur)) {
            a2[k] = copyBuffer(cur);
          } else {
            const index = refs.indexOf(cur);
            if (index !== -1) {
              a2[k] = refsNew[index];
            } else {
              a2[k] = fn(cur);
            }
          }
        }
        return a2;
      }
      function clone(o) {
        if (typeof o !== "object" || o === null)
          return o;
        if (Array.isArray(o))
          return cloneArray(o, clone);
        if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) {
          return handler(o, clone);
        }
        const o2 = {};
        refs.push(o);
        refsNew.push(o2);
        for (const k in o) {
          if (Object.hasOwnProperty.call(o, k) === false)
            continue;
          const cur = o[k];
          if (typeof cur !== "object" || cur === null) {
            o2[k] = cur;
          } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
            o2[k] = handler(cur, clone);
          } else if (ArrayBuffer.isView(cur)) {
            o2[k] = copyBuffer(cur);
          } else {
            const i = refs.indexOf(cur);
            if (i !== -1) {
              o2[k] = refsNew[i];
            } else {
              o2[k] = clone(cur);
            }
          }
        }
        refs.pop();
        refsNew.pop();
        return o2;
      }
      function cloneProto(o) {
        if (typeof o !== "object" || o === null)
          return o;
        if (Array.isArray(o))
          return cloneArray(o, cloneProto);
        if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) {
          return handler(o, cloneProto);
        }
        const o2 = {};
        refs.push(o);
        refsNew.push(o2);
        for (const k in o) {
          const cur = o[k];
          if (typeof cur !== "object" || cur === null) {
            o2[k] = cur;
          } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
            o2[k] = handler(cur, cloneProto);
          } else if (ArrayBuffer.isView(cur)) {
            o2[k] = copyBuffer(cur);
          } else {
            const i = refs.indexOf(cur);
            if (i !== -1) {
              o2[k] = refsNew[i];
            } else {
              o2[k] = cloneProto(cur);
            }
          }
        }
        refs.pop();
        refsNew.pop();
        return o2;
      }
    }
  }
});

// node_modules/rfdc/default.js
var require_default = __commonJS({
  "node_modules/rfdc/default.js"(exports2, module2) {
    "use strict";
    module2.exports = require_rfdc()();
  }
});

// node_modules/mqtt/build/lib/validations.js
var require_validations = __commonJS({
  "node_modules/mqtt/build/lib/validations.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.validateTopic = validateTopic;
    exports2.validateTopics = validateTopics;
    function validateTopic(topic) {
      const parts = topic.split("/");
      for (let i = 0; i < parts.length; i++) {
        if (parts[i] === "+") {
          continue;
        }
        if (parts[i] === "#") {
          return i === parts.length - 1;
        }
        if (parts[i].indexOf("+") !== -1 || parts[i].indexOf("#") !== -1) {
          return false;
        }
      }
      return true;
    }
    function validateTopics(topics) {
      if (topics.length === 0) {
        return "empty_topic_list";
      }
      for (let i = 0; i < topics.length; i++) {
        if (!validateTopic(topics[i])) {
          return topics[i];
        }
      }
      return null;
    }
  }
});

// node_modules/mqtt/build/lib/store.js
var require_store = __commonJS({
  "node_modules/mqtt/build/lib/store.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var readable_stream_1 = require_ours();
    var streamsOpts = { objectMode: true };
    var defaultStoreOptions = {
      clean: true
    };
    var Store = class {
      constructor(options) {
        this.options = options || {};
        this.options = Object.assign(Object.assign({}, defaultStoreOptions), options);
        this._inflights = /* @__PURE__ */ new Map();
      }
      put(packet, cb) {
        this._inflights.set(packet.messageId, packet);
        if (cb) {
          cb();
        }
        return this;
      }
      createStream() {
        const stream = new readable_stream_1.Readable(streamsOpts);
        const values = [];
        let destroyed = false;
        let i = 0;
        this._inflights.forEach((value, key) => {
          values.push(value);
        });
        stream._read = () => {
          if (!destroyed && i < values.length) {
            stream.push(values[i++]);
          } else {
            stream.push(null);
          }
        };
        stream.destroy = (err) => {
          if (destroyed) {
            return;
          }
          destroyed = true;
          setTimeout(() => {
            stream.emit("close");
          }, 0);
          return stream;
        };
        return stream;
      }
      del(packet, cb) {
        const toDelete = this._inflights.get(packet.messageId);
        if (toDelete) {
          this._inflights.delete(packet.messageId);
          cb(null, toDelete);
        } else if (cb) {
          cb(new Error("missing packet"));
        }
        return this;
      }
      get(packet, cb) {
        const storedPacket = this._inflights.get(packet.messageId);
        if (storedPacket) {
          cb(null, storedPacket);
        } else if (cb) {
          cb(new Error("missing packet"));
        }
        return this;
      }
      close(cb) {
        if (this.options.clean) {
          this._inflights = null;
        }
        if (cb) {
          cb();
        }
      }
    };
    exports2.default = Store;
  }
});

// node_modules/mqtt/build/lib/handlers/publish.js
var require_publish = __commonJS({
  "node_modules/mqtt/build/lib/handlers/publish.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var validReasonCodes = [0, 16, 128, 131, 135, 144, 145, 151, 153];
    var handlePublish = (client, packet, done) => {
      client.log("handlePublish: packet %o", packet);
      done = typeof done !== "undefined" ? done : client.noop;
      let topic = packet.topic.toString();
      const message = packet.payload;
      const { qos } = packet;
      const { messageId } = packet;
      const { options } = client;
      if (client.options.protocolVersion === 5) {
        let alias;
        if (packet.properties) {
          alias = packet.properties.topicAlias;
        }
        if (typeof alias !== "undefined") {
          if (topic.length === 0) {
            if (alias > 0 && alias <= 65535) {
              const gotTopic = client["topicAliasRecv"].getTopicByAlias(alias);
              if (gotTopic) {
                topic = gotTopic;
                client.log("handlePublish :: topic complemented by alias. topic: %s - alias: %d", topic, alias);
              } else {
                client.log("handlePublish :: unregistered topic alias. alias: %d", alias);
                client.emit("error", new Error("Received unregistered Topic Alias"));
                return;
              }
            } else {
              client.log("handlePublish :: topic alias out of range. alias: %d", alias);
              client.emit("error", new Error("Received Topic Alias is out of range"));
              return;
            }
          } else if (client["topicAliasRecv"].put(topic, alias)) {
            client.log("handlePublish :: registered topic: %s - alias: %d", topic, alias);
          } else {
            client.log("handlePublish :: topic alias out of range. alias: %d", alias);
            client.emit("error", new Error("Received Topic Alias is out of range"));
            return;
          }
        }
      }
      client.log("handlePublish: qos %d", qos);
      switch (qos) {
        case 2: {
          options.customHandleAcks(topic, message, packet, (error, code) => {
            if (typeof error === "number") {
              code = error;
              error = null;
            }
            if (error) {
              return client.emit("error", error);
            }
            if (validReasonCodes.indexOf(code) === -1) {
              return client.emit("error", new Error("Wrong reason code for pubrec"));
            }
            if (code) {
              client["_sendPacket"]({ cmd: "pubrec", messageId, reasonCode: code }, done);
            } else {
              client.incomingStore.put(packet, () => {
                client["_sendPacket"]({ cmd: "pubrec", messageId }, done);
              });
            }
          });
          break;
        }
        case 1: {
          options.customHandleAcks(topic, message, packet, (error, code) => {
            if (typeof error === "number") {
              code = error;
              error = null;
            }
            if (error) {
              return client.emit("error", error);
            }
            if (validReasonCodes.indexOf(code) === -1) {
              return client.emit("error", new Error("Wrong reason code for puback"));
            }
            if (!code) {
              client.emit("message", topic, message, packet);
            }
            client.handleMessage(packet, (err) => {
              if (err) {
                return done && done(err);
              }
              client["_sendPacket"]({ cmd: "puback", messageId, reasonCode: code }, done);
            });
          });
          break;
        }
        case 0:
          client.emit("message", topic, message, packet);
          client.handleMessage(packet, done);
          break;
        default:
          client.log("handlePublish: unknown QoS. Doing nothing.");
          break;
      }
    };
    exports2.default = handlePublish;
  }
});

// node_modules/mqtt/package.json
var require_package = __commonJS({
  "node_modules/mqtt/package.json"(exports2, module2) {
    module2.exports = {
      name: "mqtt",
      description: "A library for the MQTT protocol",
      version: "5.13.1",
      contributors: [
        "Adam Rudd <adamvrr@gmail.com>",
        "Matteo Collina <matteo.collina@gmail.com> (https://github.com/mcollina)",
        "Siarhei Buntsevich <scarry0506@gmail.com> (https://github.com/scarry1992)",
        "Yoseph Maguire <yomaguir@microsoft.com> (https://github.com/YoDaMa)",
        "Daniel Lando <daniel.sorridi@gmail.com> (https://github.com/robertsLando)"
      ],
      keywords: [
        "mqtt",
        "publish/subscribe",
        "publish",
        "subscribe"
      ],
      license: "MIT",
      repository: {
        type: "git",
        url: "git://github.com/mqttjs/MQTT.js.git"
      },
      main: "./build/index.js",
      module: "./dist/mqtt.esm.js",
      bin: {
        mqtt_pub: "./build/bin/pub.js",
        mqtt_sub: "./build/bin/sub.js",
        mqtt: "./build/bin/mqtt.js"
      },
      files: [
        "dist/",
        "CONTRIBUTING.md",
        "LICENSE.md",
        "help/",
        "build/",
        "src/"
      ],
      exports: {
        ".": {
          "react-native": "./dist/mqtt.esm.js",
          browser: {
            import: "./dist/mqtt.esm.js",
            default: "./dist/mqtt.min.js"
          },
          default: "./build/index.js"
        },
        "./package.json": "./package.json",
        "./*.map": "./build/*.js.map",
        "./dist/*": "./dist/*.js",
        "./*": "./build/*.js"
      },
      types: "build/index.d.ts",
      typesVersions: {
        "*": {
          "*": [
            "./build/index.d.ts"
          ]
        }
      },
      scripts: {
        lint: "eslint --ext .ts .",
        "lint-fix": "eslint --fix --ext .ts .",
        "build:ts": "rimraf build/ && tsc -p tsconfig.build.json",
        "build:browser": "node esbuild.js",
        build: "npm run build:ts && npm run build:browser",
        prepare: "npm run build",
        "unit-test:node": "node -r esbuild-register --test-concurrency 4 --test-reporter=junit --test-reporter-destination=junit.xml --test-reporter=spec --test-reporter-destination=stdout --test test/node/*.ts ",
        "unit-test:browser": "wtr",
        "test:node": "node_modules/.bin/nyc npm run unit-test:node",
        "test:browser": "npm run build && npm run unit-test:browser",
        test: "npm run test:node",
        changelog: "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md",
        "changelog-init": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0",
        release: "read -p 'GITHUB_TOKEN: ' GITHUB_TOKEN && export GITHUB_TOKEN=$GITHUB_TOKEN && release-it"
      },
      "release-it": {
        github: {
          release: true
        },
        git: {
          tagName: "v${version}",
          commitMessage: "chore(release): ${version}"
        },
        hooks: {
          "before:init": [
            "npm run test"
          ]
        },
        npm: {
          publish: true
        },
        plugins: {
          "@release-it/conventional-changelog": {
            preset: "angular",
            infile: "CHANGELOG.md"
          }
        }
      },
      publishConfig: {
        provenance: true
      },
      "pre-commit": [
        "lint"
      ],
      engines: {
        node: ">=16.0.0"
      },
      browser: {
        "./mqtt.js": "./dist/mqtt.js",
        fs: false,
        tls: false,
        net: false
      },
      dependencies: {
        commist: "^3.2.0",
        "concat-stream": "^2.0.0",
        debug: "^4.4.0",
        "help-me": "^5.0.0",
        "lru-cache": "^10.4.3",
        minimist: "^1.2.8",
        "mqtt-packet": "^9.0.2",
        "number-allocator": "^1.0.14",
        "readable-stream": "^4.7.0",
        rfdc: "^1.4.1",
        socks: "^2.8.3",
        split2: "^4.2.0",
        "worker-timers": "^7.1.8",
        ws: "^8.18.0"
      },
      devDependencies: {
        "@esm-bundle/chai": "^4.3.4",
        "@release-it/conventional-changelog": "^7.0.2",
        "@types/chai": "^4.3.20",
        "@types/node": "^20.17.16",
        "@types/readable-stream": "^4.0.18",
        "@types/sinon": "^17.0.3",
        "@types/tape": "^5.8.1",
        "@types/ws": "^8.18.1",
        "@typescript-eslint/eslint-plugin": "^6.21.0",
        "@typescript-eslint/parser": "^6.21.0",
        "@web/test-runner": "^0.19.0",
        "@web/test-runner-playwright": "^0.11.0",
        "aedes-cli": "^0.8.0",
        chai: "^4.5.0",
        chokidar: "^3.6.0",
        "conventional-changelog-cli": "^4.1.0",
        "end-of-stream": "^1.4.4",
        esbuild: "^0.25.0",
        "esbuild-plugin-polyfill-node": "^0.3.0",
        "esbuild-register": "^3.6.0",
        eslint: "^8.57.1",
        "eslint-config-airbnb-base": "^15.0.0",
        "eslint-config-airbnb-typescript": "^17.1.0",
        "eslint-config-prettier": "^9.1.0",
        "eslint-plugin-import": "^2.31.0",
        "eslint-plugin-prettier": "^5.2.3",
        global: "^4.4.0",
        "leaked-handles": "^5.2.0",
        mkdirp: "^3.0.1",
        "mqtt-connection": "^4.1.0",
        "mqtt-level-store": "^3.1.0",
        nyc: "^15.1.0",
        "pre-commit": "^1.2.2",
        prettier: "^3.4.2",
        "release-it": "^16.3.0",
        rimraf: "^5.0.10",
        should: "^13.2.3",
        sinon: "^17.0.2",
        snazzy: "^9.0.0",
        tape: "^5.9.0",
        "ts-node": "^10.9.2",
        typescript: "^5.7.3"
      }
    };
  }
});

// node_modules/mqtt/build/lib/shared.js
var require_shared = __commonJS({
  "node_modules/mqtt/build/lib/shared.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MQTTJS_VERSION = exports2.nextTick = exports2.ErrorWithSubackPacket = exports2.ErrorWithReasonCode = void 0;
    exports2.applyMixin = applyMixin;
    var ErrorWithReasonCode = class _ErrorWithReasonCode extends Error {
      constructor(message, code) {
        super(message);
        this.code = code;
        Object.setPrototypeOf(this, _ErrorWithReasonCode.prototype);
        Object.getPrototypeOf(this).name = "ErrorWithReasonCode";
      }
    };
    exports2.ErrorWithReasonCode = ErrorWithReasonCode;
    var ErrorWithSubackPacket = class _ErrorWithSubackPacket extends Error {
      constructor(message, packet) {
        super(message);
        this.packet = packet;
        Object.setPrototypeOf(this, _ErrorWithSubackPacket.prototype);
        Object.getPrototypeOf(this).name = "ErrorWithSubackPacket";
      }
    };
    exports2.ErrorWithSubackPacket = ErrorWithSubackPacket;
    function applyMixin(target, mixin, includeConstructor = false) {
      var _a;
      const inheritanceChain = [mixin];
      while (true) {
        const current = inheritanceChain[0];
        const base = Object.getPrototypeOf(current);
        if (base === null || base === void 0 ? void 0 : base.prototype) {
          inheritanceChain.unshift(base);
        } else {
          break;
        }
      }
      for (const ctor of inheritanceChain) {
        for (const prop of Object.getOwnPropertyNames(ctor.prototype)) {
          if (includeConstructor || prop !== "constructor") {
            Object.defineProperty(target.prototype, prop, (_a = Object.getOwnPropertyDescriptor(ctor.prototype, prop)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ Object.create(null));
          }
        }
      }
    }
    exports2.nextTick = typeof (process === null || process === void 0 ? void 0 : process.nextTick) === "function" ? process.nextTick : (callback) => {
      setTimeout(callback, 0);
    };
    exports2.MQTTJS_VERSION = require_package().version;
  }
});

// node_modules/mqtt/build/lib/handlers/ack.js
var require_ack = __commonJS({
  "node_modules/mqtt/build/lib/handlers/ack.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ReasonCodes = void 0;
    var shared_1 = require_shared();
    exports2.ReasonCodes = {
      0: "",
      1: "Unacceptable protocol version",
      2: "Identifier rejected",
      3: "Server unavailable",
      4: "Bad username or password",
      5: "Not authorized",
      16: "No matching subscribers",
      17: "No subscription existed",
      128: "Unspecified error",
      129: "Malformed Packet",
      130: "Protocol Error",
      131: "Implementation specific error",
      132: "Unsupported Protocol Version",
      133: "Client Identifier not valid",
      134: "Bad User Name or Password",
      135: "Not authorized",
      136: "Server unavailable",
      137: "Server busy",
      138: "Banned",
      139: "Server shutting down",
      140: "Bad authentication method",
      141: "Keep Alive timeout",
      142: "Session taken over",
      143: "Topic Filter invalid",
      144: "Topic Name invalid",
      145: "Packet identifier in use",
      146: "Packet Identifier not found",
      147: "Receive Maximum exceeded",
      148: "Topic Alias invalid",
      149: "Packet too large",
      150: "Message rate too high",
      151: "Quota exceeded",
      152: "Administrative action",
      153: "Payload format invalid",
      154: "Retain not supported",
      155: "QoS not supported",
      156: "Use another server",
      157: "Server moved",
      158: "Shared Subscriptions not supported",
      159: "Connection rate exceeded",
      160: "Maximum connect time",
      161: "Subscription Identifiers not supported",
      162: "Wildcard Subscriptions not supported"
    };
    var handleAck = (client, packet) => {
      const { messageId } = packet;
      const type = packet.cmd;
      let response = null;
      const cb = client.outgoing[messageId] ? client.outgoing[messageId].cb : null;
      let err = null;
      if (!cb) {
        client.log("_handleAck :: Server sent an ack in error. Ignoring.");
        return;
      }
      client.log("_handleAck :: packet type", type);
      switch (type) {
        case "pubcomp":
        case "puback": {
          const pubackRC = packet.reasonCode;
          if (pubackRC && pubackRC > 0 && pubackRC !== 16) {
            err = new shared_1.ErrorWithReasonCode(`Publish error: ${exports2.ReasonCodes[pubackRC]}`, pubackRC);
            client["_removeOutgoingAndStoreMessage"](messageId, () => {
              cb(err, packet);
            });
          } else {
            client["_removeOutgoingAndStoreMessage"](messageId, cb);
          }
          break;
        }
        case "pubrec": {
          response = {
            cmd: "pubrel",
            qos: 2,
            messageId
          };
          const pubrecRC = packet.reasonCode;
          if (pubrecRC && pubrecRC > 0 && pubrecRC !== 16) {
            err = new shared_1.ErrorWithReasonCode(`Publish error: ${exports2.ReasonCodes[pubrecRC]}`, pubrecRC);
            client["_removeOutgoingAndStoreMessage"](messageId, () => {
              cb(err, packet);
            });
          } else {
            client["_sendPacket"](response);
          }
          break;
        }
        case "suback": {
          delete client.outgoing[messageId];
          client.messageIdProvider.deallocate(messageId);
          const granted = packet.granted;
          for (let grantedI = 0; grantedI < granted.length; grantedI++) {
            const subackRC = granted[grantedI];
            if ((subackRC & 128) !== 0) {
              err = new Error(`Subscribe error: ${exports2.ReasonCodes[subackRC]}`);
              err.code = subackRC;
              const topics = client.messageIdToTopic[messageId];
              if (topics) {
                topics.forEach((topic) => {
                  delete client["_resubscribeTopics"][topic];
                });
              }
            }
          }
          delete client.messageIdToTopic[messageId];
          client["_invokeStoreProcessingQueue"]();
          cb(err, packet);
          break;
        }
        case "unsuback": {
          delete client.outgoing[messageId];
          client.messageIdProvider.deallocate(messageId);
          client["_invokeStoreProcessingQueue"]();
          cb(null, packet);
          break;
        }
        default:
          client.emit("error", new Error("unrecognized packet type"));
      }
      if (client.disconnecting && Object.keys(client.outgoing).length === 0) {
        client.emit("outgoingEmpty");
      }
    };
    exports2.default = handleAck;
  }
});

// node_modules/mqtt/build/lib/handlers/auth.js
var require_auth = __commonJS({
  "node_modules/mqtt/build/lib/handlers/auth.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var shared_1 = require_shared();
    var ack_1 = require_ack();
    var handleAuth = (client, packet) => {
      const { options } = client;
      const version = options.protocolVersion;
      const rc = version === 5 ? packet.reasonCode : packet.returnCode;
      if (version !== 5) {
        const err = new shared_1.ErrorWithReasonCode(`Protocol error: Auth packets are only supported in MQTT 5. Your version:${version}`, rc);
        client.emit("error", err);
        return;
      }
      client.handleAuth(packet, (err, packet2) => {
        if (err) {
          client.emit("error", err);
          return;
        }
        if (rc === 24) {
          client.reconnecting = false;
          client["_sendPacket"](packet2);
        } else {
          const error = new shared_1.ErrorWithReasonCode(`Connection refused: ${ack_1.ReasonCodes[rc]}`, rc);
          client.emit("error", error);
        }
      });
    };
    exports2.default = handleAuth;
  }
});

// node_modules/lru-cache/dist/commonjs/index.js
var require_commonjs = __commonJS({
  "node_modules/lru-cache/dist/commonjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LRUCache = void 0;
    var perf = typeof performance === "object" && performance && typeof performance.now === "function" ? performance : Date;
    var warned = /* @__PURE__ */ new Set();
    var PROCESS = typeof process === "object" && !!process ? process : {};
    var emitWarning = (msg, type, code, fn) => {
      typeof PROCESS.emitWarning === "function" ? PROCESS.emitWarning(msg, type, code, fn) : console.error(`[${code}] ${type}: ${msg}`);
    };
    var AC = globalThis.AbortController;
    var AS = globalThis.AbortSignal;
    if (typeof AC === "undefined") {
      AS = class AbortSignal {
        onabort;
        _onabort = [];
        reason;
        aborted = false;
        addEventListener(_, fn) {
          this._onabort.push(fn);
        }
      };
      AC = class AbortController {
        constructor() {
          warnACPolyfill();
        }
        signal = new AS();
        abort(reason) {
          if (this.signal.aborted)
            return;
          this.signal.reason = reason;
          this.signal.aborted = true;
          for (const fn of this.signal._onabort) {
            fn(reason);
          }
          this.signal.onabort?.(reason);
        }
      };
      let printACPolyfillWarning = PROCESS.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1";
      const warnACPolyfill = () => {
        if (!printACPolyfillWarning)
          return;
        printACPolyfillWarning = false;
        emitWarning("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", warnACPolyfill);
      };
    }
    var shouldWarn = (code) => !warned.has(code);
    var TYPE = Symbol("type");
    var isPosInt = (n) => n && n === Math.floor(n) && n > 0 && isFinite(n);
    var getUintArray = (max) => !isPosInt(max) ? null : max <= Math.pow(2, 8) ? Uint8Array : max <= Math.pow(2, 16) ? Uint16Array : max <= Math.pow(2, 32) ? Uint32Array : max <= Number.MAX_SAFE_INTEGER ? ZeroArray : null;
    var ZeroArray = class extends Array {
      constructor(size) {
        super(size);
        this.fill(0);
      }
    };
    var Stack = class _Stack {
      heap;
      length;
      // private constructor
      static #constructing = false;
      static create(max) {
        const HeapCls = getUintArray(max);
        if (!HeapCls)
          return [];
        _Stack.#constructing = true;
        const s = new _Stack(max, HeapCls);
        _Stack.#constructing = false;
        return s;
      }
      constructor(max, HeapCls) {
        if (!_Stack.#constructing) {
          throw new TypeError("instantiate Stack using Stack.create(n)");
        }
        this.heap = new HeapCls(max);
        this.length = 0;
      }
      push(n) {
        this.heap[this.length++] = n;
      }
      pop() {
        return this.heap[--this.length];
      }
    };
    var LRUCache = class _LRUCache {
      // options that cannot be changed without disaster
      #max;
      #maxSize;
      #dispose;
      #disposeAfter;
      #fetchMethod;
      #memoMethod;
      /**
       * {@link LRUCache.OptionsBase.ttl}
       */
      ttl;
      /**
       * {@link LRUCache.OptionsBase.ttlResolution}
       */
      ttlResolution;
      /**
       * {@link LRUCache.OptionsBase.ttlAutopurge}
       */
      ttlAutopurge;
      /**
       * {@link LRUCache.OptionsBase.updateAgeOnGet}
       */
      updateAgeOnGet;
      /**
       * {@link LRUCache.OptionsBase.updateAgeOnHas}
       */
      updateAgeOnHas;
      /**
       * {@link LRUCache.OptionsBase.allowStale}
       */
      allowStale;
      /**
       * {@link LRUCache.OptionsBase.noDisposeOnSet}
       */
      noDisposeOnSet;
      /**
       * {@link LRUCache.OptionsBase.noUpdateTTL}
       */
      noUpdateTTL;
      /**
       * {@link LRUCache.OptionsBase.maxEntrySize}
       */
      maxEntrySize;
      /**
       * {@link LRUCache.OptionsBase.sizeCalculation}
       */
      sizeCalculation;
      /**
       * {@link LRUCache.OptionsBase.noDeleteOnFetchRejection}
       */
      noDeleteOnFetchRejection;
      /**
       * {@link LRUCache.OptionsBase.noDeleteOnStaleGet}
       */
      noDeleteOnStaleGet;
      /**
       * {@link LRUCache.OptionsBase.allowStaleOnFetchAbort}
       */
      allowStaleOnFetchAbort;
      /**
       * {@link LRUCache.OptionsBase.allowStaleOnFetchRejection}
       */
      allowStaleOnFetchRejection;
      /**
       * {@link LRUCache.OptionsBase.ignoreFetchAbort}
       */
      ignoreFetchAbort;
      // computed properties
      #size;
      #calculatedSize;
      #keyMap;
      #keyList;
      #valList;
      #next;
      #prev;
      #head;
      #tail;
      #free;
      #disposed;
      #sizes;
      #starts;
      #ttls;
      #hasDispose;
      #hasFetchMethod;
      #hasDisposeAfter;
      /**
       * Do not call this method unless you need to inspect the
       * inner workings of the cache.  If anything returned by this
       * object is modified in any way, strange breakage may occur.
       *
       * These fields are private for a reason!
       *
       * @internal
       */
      static unsafeExposeInternals(c) {
        return {
          // properties
          starts: c.#starts,
          ttls: c.#ttls,
          sizes: c.#sizes,
          keyMap: c.#keyMap,
          keyList: c.#keyList,
          valList: c.#valList,
          next: c.#next,
          prev: c.#prev,
          get head() {
            return c.#head;
          },
          get tail() {
            return c.#tail;
          },
          free: c.#free,
          // methods
          isBackgroundFetch: (p) => c.#isBackgroundFetch(p),
          backgroundFetch: (k, index, options, context) => c.#backgroundFetch(k, index, options, context),
          moveToTail: (index) => c.#moveToTail(index),
          indexes: (options) => c.#indexes(options),
          rindexes: (options) => c.#rindexes(options),
          isStale: (index) => c.#isStale(index)
        };
      }
      // Protected read-only members
      /**
       * {@link LRUCache.OptionsBase.max} (read-only)
       */
      get max() {
        return this.#max;
      }
      /**
       * {@link LRUCache.OptionsBase.maxSize} (read-only)
       */
      get maxSize() {
        return this.#maxSize;
      }
      /**
       * The total computed size of items in the cache (read-only)
       */
      get calculatedSize() {
        return this.#calculatedSize;
      }
      /**
       * The number of items stored in the cache (read-only)
       */
      get size() {
        return this.#size;
      }
      /**
       * {@link LRUCache.OptionsBase.fetchMethod} (read-only)
       */
      get fetchMethod() {
        return this.#fetchMethod;
      }
      get memoMethod() {
        return this.#memoMethod;
      }
      /**
       * {@link LRUCache.OptionsBase.dispose} (read-only)
       */
      get dispose() {
        return this.#dispose;
      }
      /**
       * {@link LRUCache.OptionsBase.disposeAfter} (read-only)
       */
      get disposeAfter() {
        return this.#disposeAfter;
      }
      constructor(options) {
        const { max = 0, ttl, ttlResolution = 1, ttlAutopurge, updateAgeOnGet, updateAgeOnHas, allowStale, dispose, disposeAfter, noDisposeOnSet, noUpdateTTL, maxSize = 0, maxEntrySize = 0, sizeCalculation, fetchMethod, memoMethod, noDeleteOnFetchRejection, noDeleteOnStaleGet, allowStaleOnFetchRejection, allowStaleOnFetchAbort, ignoreFetchAbort } = options;
        if (max !== 0 && !isPosInt(max)) {
          throw new TypeError("max option must be a nonnegative integer");
        }
        const UintArray = max ? getUintArray(max) : Array;
        if (!UintArray) {
          throw new Error("invalid max value: " + max);
        }
        this.#max = max;
        this.#maxSize = maxSize;
        this.maxEntrySize = maxEntrySize || this.#maxSize;
        this.sizeCalculation = sizeCalculation;
        if (this.sizeCalculation) {
          if (!this.#maxSize && !this.maxEntrySize) {
            throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
          }
          if (typeof this.sizeCalculation !== "function") {
            throw new TypeError("sizeCalculation set to non-function");
          }
        }
        if (memoMethod !== void 0 && typeof memoMethod !== "function") {
          throw new TypeError("memoMethod must be a function if defined");
        }
        this.#memoMethod = memoMethod;
        if (fetchMethod !== void 0 && typeof fetchMethod !== "function") {
          throw new TypeError("fetchMethod must be a function if specified");
        }
        this.#fetchMethod = fetchMethod;
        this.#hasFetchMethod = !!fetchMethod;
        this.#keyMap = /* @__PURE__ */ new Map();
        this.#keyList = new Array(max).fill(void 0);
        this.#valList = new Array(max).fill(void 0);
        this.#next = new UintArray(max);
        this.#prev = new UintArray(max);
        this.#head = 0;
        this.#tail = 0;
        this.#free = Stack.create(max);
        this.#size = 0;
        this.#calculatedSize = 0;
        if (typeof dispose === "function") {
          this.#dispose = dispose;
        }
        if (typeof disposeAfter === "function") {
          this.#disposeAfter = disposeAfter;
          this.#disposed = [];
        } else {
          this.#disposeAfter = void 0;
          this.#disposed = void 0;
        }
        this.#hasDispose = !!this.#dispose;
        this.#hasDisposeAfter = !!this.#disposeAfter;
        this.noDisposeOnSet = !!noDisposeOnSet;
        this.noUpdateTTL = !!noUpdateTTL;
        this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection;
        this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection;
        this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort;
        this.ignoreFetchAbort = !!ignoreFetchAbort;
        if (this.maxEntrySize !== 0) {
          if (this.#maxSize !== 0) {
            if (!isPosInt(this.#maxSize)) {
              throw new TypeError("maxSize must be a positive integer if specified");
            }
          }
          if (!isPosInt(this.maxEntrySize)) {
            throw new TypeError("maxEntrySize must be a positive integer if specified");
          }
          this.#initializeSizeTracking();
        }
        this.allowStale = !!allowStale;
        this.noDeleteOnStaleGet = !!noDeleteOnStaleGet;
        this.updateAgeOnGet = !!updateAgeOnGet;
        this.updateAgeOnHas = !!updateAgeOnHas;
        this.ttlResolution = isPosInt(ttlResolution) || ttlResolution === 0 ? ttlResolution : 1;
        this.ttlAutopurge = !!ttlAutopurge;
        this.ttl = ttl || 0;
        if (this.ttl) {
          if (!isPosInt(this.ttl)) {
            throw new TypeError("ttl must be a positive integer if specified");
          }
          this.#initializeTTLTracking();
        }
        if (this.#max === 0 && this.ttl === 0 && this.#maxSize === 0) {
          throw new TypeError("At least one of max, maxSize, or ttl is required");
        }
        if (!this.ttlAutopurge && !this.#max && !this.#maxSize) {
          const code = "LRU_CACHE_UNBOUNDED";
          if (shouldWarn(code)) {
            warned.add(code);
            const msg = "TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.";
            emitWarning(msg, "UnboundedCacheWarning", code, _LRUCache);
          }
        }
      }
      /**
       * Return the number of ms left in the item's TTL. If item is not in cache,
       * returns `0`. Returns `Infinity` if item is in cache without a defined TTL.
       */
      getRemainingTTL(key) {
        return this.#keyMap.has(key) ? Infinity : 0;
      }
      #initializeTTLTracking() {
        const ttls = new ZeroArray(this.#max);
        const starts = new ZeroArray(this.#max);
        this.#ttls = ttls;
        this.#starts = starts;
        this.#setItemTTL = (index, ttl, start = perf.now()) => {
          starts[index] = ttl !== 0 ? start : 0;
          ttls[index] = ttl;
          if (ttl !== 0 && this.ttlAutopurge) {
            const t = setTimeout(() => {
              if (this.#isStale(index)) {
                this.#delete(this.#keyList[index], "expire");
              }
            }, ttl + 1);
            if (t.unref) {
              t.unref();
            }
          }
        };
        this.#updateItemAge = (index) => {
          starts[index] = ttls[index] !== 0 ? perf.now() : 0;
        };
        this.#statusTTL = (status, index) => {
          if (ttls[index]) {
            const ttl = ttls[index];
            const start = starts[index];
            if (!ttl || !start)
              return;
            status.ttl = ttl;
            status.start = start;
            status.now = cachedNow || getNow();
            const age = status.now - start;
            status.remainingTTL = ttl - age;
          }
        };
        let cachedNow = 0;
        const getNow = () => {
          const n = perf.now();
          if (this.ttlResolution > 0) {
            cachedNow = n;
            const t = setTimeout(() => cachedNow = 0, this.ttlResolution);
            if (t.unref) {
              t.unref();
            }
          }
          return n;
        };
        this.getRemainingTTL = (key) => {
          const index = this.#keyMap.get(key);
          if (index === void 0) {
            return 0;
          }
          const ttl = ttls[index];
          const start = starts[index];
          if (!ttl || !start) {
            return Infinity;
          }
          const age = (cachedNow || getNow()) - start;
          return ttl - age;
        };
        this.#isStale = (index) => {
          const s = starts[index];
          const t = ttls[index];
          return !!t && !!s && (cachedNow || getNow()) - s > t;
        };
      }
      // conditionally set private methods related to TTL
      #updateItemAge = () => {
      };
      #statusTTL = () => {
      };
      #setItemTTL = () => {
      };
      /* c8 ignore stop */
      #isStale = () => false;
      #initializeSizeTracking() {
        const sizes = new ZeroArray(this.#max);
        this.#calculatedSize = 0;
        this.#sizes = sizes;
        this.#removeItemSize = (index) => {
          this.#calculatedSize -= sizes[index];
          sizes[index] = 0;
        };
        this.#requireSize = (k, v, size, sizeCalculation) => {
          if (this.#isBackgroundFetch(v)) {
            return 0;
          }
          if (!isPosInt(size)) {
            if (sizeCalculation) {
              if (typeof sizeCalculation !== "function") {
                throw new TypeError("sizeCalculation must be a function");
              }
              size = sizeCalculation(v, k);
              if (!isPosInt(size)) {
                throw new TypeError("sizeCalculation return invalid (expect positive integer)");
              }
            } else {
              throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
            }
          }
          return size;
        };
        this.#addItemSize = (index, size, status) => {
          sizes[index] = size;
          if (this.#maxSize) {
            const maxSize = this.#maxSize - sizes[index];
            while (this.#calculatedSize > maxSize) {
              this.#evict(true);
            }
          }
          this.#calculatedSize += sizes[index];
          if (status) {
            status.entrySize = size;
            status.totalCalculatedSize = this.#calculatedSize;
          }
        };
      }
      #removeItemSize = (_i) => {
      };
      #addItemSize = (_i, _s, _st) => {
      };
      #requireSize = (_k, _v, size, sizeCalculation) => {
        if (size || sizeCalculation) {
          throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
        }
        return 0;
      };
      *#indexes({ allowStale = this.allowStale } = {}) {
        if (this.#size) {
          for (let i = this.#tail; true; ) {
            if (!this.#isValidIndex(i)) {
              break;
            }
            if (allowStale || !this.#isStale(i)) {
              yield i;
            }
            if (i === this.#head) {
              break;
            } else {
              i = this.#prev[i];
            }
          }
        }
      }
      *#rindexes({ allowStale = this.allowStale } = {}) {
        if (this.#size) {
          for (let i = this.#head; true; ) {
            if (!this.#isValidIndex(i)) {
              break;
            }
            if (allowStale || !this.#isStale(i)) {
              yield i;
            }
            if (i === this.#tail) {
              break;
            } else {
              i = this.#next[i];
            }
          }
        }
      }
      #isValidIndex(index) {
        return index !== void 0 && this.#keyMap.get(this.#keyList[index]) === index;
      }
      /**
       * Return a generator yielding `[key, value]` pairs,
       * in order from most recently used to least recently used.
       */
      *entries() {
        for (const i of this.#indexes()) {
          if (this.#valList[i] !== void 0 && this.#keyList[i] !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
            yield [this.#keyList[i], this.#valList[i]];
          }
        }
      }
      /**
       * Inverse order version of {@link LRUCache.entries}
       *
       * Return a generator yielding `[key, value]` pairs,
       * in order from least recently used to most recently used.
       */
      *rentries() {
        for (const i of this.#rindexes()) {
          if (this.#valList[i] !== void 0 && this.#keyList[i] !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
            yield [this.#keyList[i], this.#valList[i]];
          }
        }
      }
      /**
       * Return a generator yielding the keys in the cache,
       * in order from most recently used to least recently used.
       */
      *keys() {
        for (const i of this.#indexes()) {
          const k = this.#keyList[i];
          if (k !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
            yield k;
          }
        }
      }
      /**
       * Inverse order version of {@link LRUCache.keys}
       *
       * Return a generator yielding the keys in the cache,
       * in order from least recently used to most recently used.
       */
      *rkeys() {
        for (const i of this.#rindexes()) {
          const k = this.#keyList[i];
          if (k !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
            yield k;
          }
        }
      }
      /**
       * Return a generator yielding the values in the cache,
       * in order from most recently used to least recently used.
       */
      *values() {
        for (const i of this.#indexes()) {
          const v = this.#valList[i];
          if (v !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
            yield this.#valList[i];
          }
        }
      }
      /**
       * Inverse order version of {@link LRUCache.values}
       *
       * Return a generator yielding the values in the cache,
       * in order from least recently used to most recently used.
       */
      *rvalues() {
        for (const i of this.#rindexes()) {
          const v = this.#valList[i];
          if (v !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
            yield this.#valList[i];
          }
        }
      }
      /**
       * Iterating over the cache itself yields the same results as
       * {@link LRUCache.entries}
       */
      [Symbol.iterator]() {
        return this.entries();
      }
      /**
       * A String value that is used in the creation of the default string
       * description of an object. Called by the built-in method
       * `Object.prototype.toString`.
       */
      [Symbol.toStringTag] = "LRUCache";
      /**
       * Find a value for which the supplied fn method returns a truthy value,
       * similar to `Array.find()`. fn is called as `fn(value, key, cache)`.
       */
      find(fn, getOptions = {}) {
        for (const i of this.#indexes()) {
          const v = this.#valList[i];
          const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
          if (value === void 0)
            continue;
          if (fn(value, this.#keyList[i], this)) {
            return this.get(this.#keyList[i], getOptions);
          }
        }
      }
      /**
       * Call the supplied function on each item in the cache, in order from most
       * recently used to least recently used.
       *
       * `fn` is called as `fn(value, key, cache)`.
       *
       * If `thisp` is provided, function will be called in the `this`-context of
       * the provided object, or the cache if no `thisp` object is provided.
       *
       * Does not update age or recenty of use, or iterate over stale values.
       */
      forEach(fn, thisp = this) {
        for (const i of this.#indexes()) {
          const v = this.#valList[i];
          const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
          if (value === void 0)
            continue;
          fn.call(thisp, value, this.#keyList[i], this);
        }
      }
      /**
       * The same as {@link LRUCache.forEach} but items are iterated over in
       * reverse order.  (ie, less recently used items are iterated over first.)
       */
      rforEach(fn, thisp = this) {
        for (const i of this.#rindexes()) {
          const v = this.#valList[i];
          const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
          if (value === void 0)
            continue;
          fn.call(thisp, value, this.#keyList[i], this);
        }
      }
      /**
       * Delete any stale entries. Returns true if anything was removed,
       * false otherwise.
       */
      purgeStale() {
        let deleted = false;
        for (const i of this.#rindexes({ allowStale: true })) {
          if (this.#isStale(i)) {
            this.#delete(this.#keyList[i], "expire");
            deleted = true;
          }
        }
        return deleted;
      }
      /**
       * Get the extended info about a given entry, to get its value, size, and
       * TTL info simultaneously. Returns `undefined` if the key is not present.
       *
       * Unlike {@link LRUCache#dump}, which is designed to be portable and survive
       * serialization, the `start` value is always the current timestamp, and the
       * `ttl` is a calculated remaining time to live (negative if expired).
       *
       * Always returns stale values, if their info is found in the cache, so be
       * sure to check for expirations (ie, a negative {@link LRUCache.Entry#ttl})
       * if relevant.
       */
      info(key) {
        const i = this.#keyMap.get(key);
        if (i === void 0)
          return void 0;
        const v = this.#valList[i];
        const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
        if (value === void 0)
          return void 0;
        const entry = { value };
        if (this.#ttls && this.#starts) {
          const ttl = this.#ttls[i];
          const start = this.#starts[i];
          if (ttl && start) {
            const remain = ttl - (perf.now() - start);
            entry.ttl = remain;
            entry.start = Date.now();
          }
        }
        if (this.#sizes) {
          entry.size = this.#sizes[i];
        }
        return entry;
      }
      /**
       * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
       * passed to {@link LRLUCache#load}.
       *
       * The `start` fields are calculated relative to a portable `Date.now()`
       * timestamp, even if `performance.now()` is available.
       *
       * Stale entries are always included in the `dump`, even if
       * {@link LRUCache.OptionsBase.allowStale} is false.
       *
       * Note: this returns an actual array, not a generator, so it can be more
       * easily passed around.
       */
      dump() {
        const arr = [];
        for (const i of this.#indexes({ allowStale: true })) {
          const key = this.#keyList[i];
          const v = this.#valList[i];
          const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
          if (value === void 0 || key === void 0)
            continue;
          const entry = { value };
          if (this.#ttls && this.#starts) {
            entry.ttl = this.#ttls[i];
            const age = perf.now() - this.#starts[i];
            entry.start = Math.floor(Date.now() - age);
          }
          if (this.#sizes) {
            entry.size = this.#sizes[i];
          }
          arr.unshift([key, entry]);
        }
        return arr;
      }
      /**
       * Reset the cache and load in the items in entries in the order listed.
       *
       * The shape of the resulting cache may be different if the same options are
       * not used in both caches.
       *
       * The `start` fields are assumed to be calculated relative to a portable
       * `Date.now()` timestamp, even if `performance.now()` is available.
       */
      load(arr) {
        this.clear();
        for (const [key, entry] of arr) {
          if (entry.start) {
            const age = Date.now() - entry.start;
            entry.start = perf.now() - age;
          }
          this.set(key, entry.value, entry);
        }
      }
      /**
       * Add a value to the cache.
       *
       * Note: if `undefined` is specified as a value, this is an alias for
       * {@link LRUCache#delete}
       *
       * Fields on the {@link LRUCache.SetOptions} options param will override
       * their corresponding values in the constructor options for the scope
       * of this single `set()` operation.
       *
       * If `start` is provided, then that will set the effective start
       * time for the TTL calculation. Note that this must be a previous
       * value of `performance.now()` if supported, or a previous value of
       * `Date.now()` if not.
       *
       * Options object may also include `size`, which will prevent
       * calling the `sizeCalculation` function and just use the specified
       * number if it is a positive integer, and `noDisposeOnSet` which
       * will prevent calling a `dispose` function in the case of
       * overwrites.
       *
       * If the `size` (or return value of `sizeCalculation`) for a given
       * entry is greater than `maxEntrySize`, then the item will not be
       * added to the cache.
       *
       * Will update the recency of the entry.
       *
       * If the value is `undefined`, then this is an alias for
       * `cache.delete(key)`. `undefined` is never stored in the cache.
       */
      set(k, v, setOptions = {}) {
        if (v === void 0) {
          this.delete(k);
          return this;
        }
        const { ttl = this.ttl, start, noDisposeOnSet = this.noDisposeOnSet, sizeCalculation = this.sizeCalculation, status } = setOptions;
        let { noUpdateTTL = this.noUpdateTTL } = setOptions;
        const size = this.#requireSize(k, v, setOptions.size || 0, sizeCalculation);
        if (this.maxEntrySize && size > this.maxEntrySize) {
          if (status) {
            status.set = "miss";
            status.maxEntrySizeExceeded = true;
          }
          this.#delete(k, "set");
          return this;
        }
        let index = this.#size === 0 ? void 0 : this.#keyMap.get(k);
        if (index === void 0) {
          index = this.#size === 0 ? this.#tail : this.#free.length !== 0 ? this.#free.pop() : this.#size === this.#max ? this.#evict(false) : this.#size;
          this.#keyList[index] = k;
          this.#valList[index] = v;
          this.#keyMap.set(k, index);
          this.#next[this.#tail] = index;
          this.#prev[index] = this.#tail;
          this.#tail = index;
          this.#size++;
          this.#addItemSize(index, size, status);
          if (status)
            status.set = "add";
          noUpdateTTL = false;
        } else {
          this.#moveToTail(index);
          const oldVal = this.#valList[index];
          if (v !== oldVal) {
            if (this.#hasFetchMethod && this.#isBackgroundFetch(oldVal)) {
              oldVal.__abortController.abort(new Error("replaced"));
              const { __staleWhileFetching: s } = oldVal;
              if (s !== void 0 && !noDisposeOnSet) {
                if (this.#hasDispose) {
                  this.#dispose?.(s, k, "set");
                }
                if (this.#hasDisposeAfter) {
                  this.#disposed?.push([s, k, "set"]);
                }
              }
            } else if (!noDisposeOnSet) {
              if (this.#hasDispose) {
                this.#dispose?.(oldVal, k, "set");
              }
              if (this.#hasDisposeAfter) {
                this.#disposed?.push([oldVal, k, "set"]);
              }
            }
            this.#removeItemSize(index);
            this.#addItemSize(index, size, status);
            this.#valList[index] = v;
            if (status) {
              status.set = "replace";
              const oldValue = oldVal && this.#isBackgroundFetch(oldVal) ? oldVal.__staleWhileFetching : oldVal;
              if (oldValue !== void 0)
                status.oldValue = oldValue;
            }
          } else if (status) {
            status.set = "update";
          }
        }
        if (ttl !== 0 && !this.#ttls) {
          this.#initializeTTLTracking();
        }
        if (this.#ttls) {
          if (!noUpdateTTL) {
            this.#setItemTTL(index, ttl, start);
          }
          if (status)
            this.#statusTTL(status, index);
        }
        if (!noDisposeOnSet && this.#hasDisposeAfter && this.#disposed) {
          const dt = this.#disposed;
          let task;
          while (task = dt?.shift()) {
            this.#disposeAfter?.(...task);
          }
        }
        return this;
      }
      /**
       * Evict the least recently used item, returning its value or
       * `undefined` if cache is empty.
       */
      pop() {
        try {
          while (this.#size) {
            const val = this.#valList[this.#head];
            this.#evict(true);
            if (this.#isBackgroundFetch(val)) {
              if (val.__staleWhileFetching) {
                return val.__staleWhileFetching;
              }
            } else if (val !== void 0) {
              return val;
            }
          }
        } finally {
          if (this.#hasDisposeAfter && this.#disposed) {
            const dt = this.#disposed;
            let task;
            while (task = dt?.shift()) {
              this.#disposeAfter?.(...task);
            }
          }
        }
      }
      #evict(free) {
        const head = this.#head;
        const k = this.#keyList[head];
        const v = this.#valList[head];
        if (this.#hasFetchMethod && this.#isBackgroundFetch(v)) {
          v.__abortController.abort(new Error("evicted"));
        } else if (this.#hasDispose || this.#hasDisposeAfter) {
          if (this.#hasDispose) {
            this.#dispose?.(v, k, "evict");
          }
          if (this.#hasDisposeAfter) {
            this.#disposed?.push([v, k, "evict"]);
          }
        }
        this.#removeItemSize(head);
        if (free) {
          this.#keyList[head] = void 0;
          this.#valList[head] = void 0;
          this.#free.push(head);
        }
        if (this.#size === 1) {
          this.#head = this.#tail = 0;
          this.#free.length = 0;
        } else {
          this.#head = this.#next[head];
        }
        this.#keyMap.delete(k);
        this.#size--;
        return head;
      }
      /**
       * Check if a key is in the cache, without updating the recency of use.
       * Will return false if the item is stale, even though it is technically
       * in the cache.
       *
       * Check if a key is in the cache, without updating the recency of
       * use. Age is updated if {@link LRUCache.OptionsBase.updateAgeOnHas} is set
       * to `true` in either the options or the constructor.
       *
       * Will return `false` if the item is stale, even though it is technically in
       * the cache. The difference can be determined (if it matters) by using a
       * `status` argument, and inspecting the `has` field.
       *
       * Will not update item age unless
       * {@link LRUCache.OptionsBase.updateAgeOnHas} is set.
       */
      has(k, hasOptions = {}) {
        const { updateAgeOnHas = this.updateAgeOnHas, status } = hasOptions;
        const index = this.#keyMap.get(k);
        if (index !== void 0) {
          const v = this.#valList[index];
          if (this.#isBackgroundFetch(v) && v.__staleWhileFetching === void 0) {
            return false;
          }
          if (!this.#isStale(index)) {
            if (updateAgeOnHas) {
              this.#updateItemAge(index);
            }
            if (status) {
              status.has = "hit";
              this.#statusTTL(status, index);
            }
            return true;
          } else if (status) {
            status.has = "stale";
            this.#statusTTL(status, index);
          }
        } else if (status) {
          status.has = "miss";
        }
        return false;
      }
      /**
       * Like {@link LRUCache#get} but doesn't update recency or delete stale
       * items.
       *
       * Returns `undefined` if the item is stale, unless
       * {@link LRUCache.OptionsBase.allowStale} is set.
       */
      peek(k, peekOptions = {}) {
        const { allowStale = this.allowStale } = peekOptions;
        const index = this.#keyMap.get(k);
        if (index === void 0 || !allowStale && this.#isStale(index)) {
          return;
        }
        const v = this.#valList[index];
        return this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
      }
      #backgroundFetch(k, index, options, context) {
        const v = index === void 0 ? void 0 : this.#valList[index];
        if (this.#isBackgroundFetch(v)) {
          return v;
        }
        const ac = new AC();
        const { signal } = options;
        signal?.addEventListener("abort", () => ac.abort(signal.reason), {
          signal: ac.signal
        });
        const fetchOpts = {
          signal: ac.signal,
          options,
          context
        };
        const cb = (v2, updateCache = false) => {
          const { aborted } = ac.signal;
          const ignoreAbort = options.ignoreFetchAbort && v2 !== void 0;
          if (options.status) {
            if (aborted && !updateCache) {
              options.status.fetchAborted = true;
              options.status.fetchError = ac.signal.reason;
              if (ignoreAbort)
                options.status.fetchAbortIgnored = true;
            } else {
              options.status.fetchResolved = true;
            }
          }
          if (aborted && !ignoreAbort && !updateCache) {
            return fetchFail(ac.signal.reason);
          }
          const bf2 = p;
          if (this.#valList[index] === p) {
            if (v2 === void 0) {
              if (bf2.__staleWhileFetching) {
                this.#valList[index] = bf2.__staleWhileFetching;
              } else {
                this.#delete(k, "fetch");
              }
            } else {
              if (options.status)
                options.status.fetchUpdated = true;
              this.set(k, v2, fetchOpts.options);
            }
          }
          return v2;
        };
        const eb = (er) => {
          if (options.status) {
            options.status.fetchRejected = true;
            options.status.fetchError = er;
          }
          return fetchFail(er);
        };
        const fetchFail = (er) => {
          const { aborted } = ac.signal;
          const allowStaleAborted = aborted && options.allowStaleOnFetchAbort;
          const allowStale = allowStaleAborted || options.allowStaleOnFetchRejection;
          const noDelete = allowStale || options.noDeleteOnFetchRejection;
          const bf2 = p;
          if (this.#valList[index] === p) {
            const del = !noDelete || bf2.__staleWhileFetching === void 0;
            if (del) {
              this.#delete(k, "fetch");
            } else if (!allowStaleAborted) {
              this.#valList[index] = bf2.__staleWhileFetching;
            }
          }
          if (allowStale) {
            if (options.status && bf2.__staleWhileFetching !== void 0) {
              options.status.returnedStale = true;
            }
            return bf2.__staleWhileFetching;
          } else if (bf2.__returned === bf2) {
            throw er;
          }
        };
        const pcall = (res, rej) => {
          const fmp = this.#fetchMethod?.(k, v, fetchOpts);
          if (fmp && fmp instanceof Promise) {
            fmp.then((v2) => res(v2 === void 0 ? void 0 : v2), rej);
          }
          ac.signal.addEventListener("abort", () => {
            if (!options.ignoreFetchAbort || options.allowStaleOnFetchAbort) {
              res(void 0);
              if (options.allowStaleOnFetchAbort) {
                res = (v2) => cb(v2, true);
              }
            }
          });
        };
        if (options.status)
          options.status.fetchDispatched = true;
        const p = new Promise(pcall).then(cb, eb);
        const bf = Object.assign(p, {
          __abortController: ac,
          __staleWhileFetching: v,
          __returned: void 0
        });
        if (index === void 0) {
          this.set(k, bf, { ...fetchOpts.options, status: void 0 });
          index = this.#keyMap.get(k);
        } else {
          this.#valList[index] = bf;
        }
        return bf;
      }
      #isBackgroundFetch(p) {
        if (!this.#hasFetchMethod)
          return false;
        const b = p;
        return !!b && b instanceof Promise && b.hasOwnProperty("__staleWhileFetching") && b.__abortController instanceof AC;
      }
      async fetch(k, fetchOptions = {}) {
        const {
          // get options
          allowStale = this.allowStale,
          updateAgeOnGet = this.updateAgeOnGet,
          noDeleteOnStaleGet = this.noDeleteOnStaleGet,
          // set options
          ttl = this.ttl,
          noDisposeOnSet = this.noDisposeOnSet,
          size = 0,
          sizeCalculation = this.sizeCalculation,
          noUpdateTTL = this.noUpdateTTL,
          // fetch exclusive options
          noDeleteOnFetchRejection = this.noDeleteOnFetchRejection,
          allowStaleOnFetchRejection = this.allowStaleOnFetchRejection,
          ignoreFetchAbort = this.ignoreFetchAbort,
          allowStaleOnFetchAbort = this.allowStaleOnFetchAbort,
          context,
          forceRefresh = false,
          status,
          signal
        } = fetchOptions;
        if (!this.#hasFetchMethod) {
          if (status)
            status.fetch = "get";
          return this.get(k, {
            allowStale,
            updateAgeOnGet,
            noDeleteOnStaleGet,
            status
          });
        }
        const options = {
          allowStale,
          updateAgeOnGet,
          noDeleteOnStaleGet,
          ttl,
          noDisposeOnSet,
          size,
          sizeCalculation,
          noUpdateTTL,
          noDeleteOnFetchRejection,
          allowStaleOnFetchRejection,
          allowStaleOnFetchAbort,
          ignoreFetchAbort,
          status,
          signal
        };
        let index = this.#keyMap.get(k);
        if (index === void 0) {
          if (status)
            status.fetch = "miss";
          const p = this.#backgroundFetch(k, index, options, context);
          return p.__returned = p;
        } else {
          const v = this.#valList[index];
          if (this.#isBackgroundFetch(v)) {
            const stale = allowStale && v.__staleWhileFetching !== void 0;
            if (status) {
              status.fetch = "inflight";
              if (stale)
                status.returnedStale = true;
            }
            return stale ? v.__staleWhileFetching : v.__returned = v;
          }
          const isStale = this.#isStale(index);
          if (!forceRefresh && !isStale) {
            if (status)
              status.fetch = "hit";
            this.#moveToTail(index);
            if (updateAgeOnGet) {
              this.#updateItemAge(index);
            }
            if (status)
              this.#statusTTL(status, index);
            return v;
          }
          const p = this.#backgroundFetch(k, index, options, context);
          const hasStale = p.__staleWhileFetching !== void 0;
          const staleVal = hasStale && allowStale;
          if (status) {
            status.fetch = isStale ? "stale" : "refresh";
            if (staleVal && isStale)
              status.returnedStale = true;
          }
          return staleVal ? p.__staleWhileFetching : p.__returned = p;
        }
      }
      async forceFetch(k, fetchOptions = {}) {
        const v = await this.fetch(k, fetchOptions);
        if (v === void 0)
          throw new Error("fetch() returned undefined");
        return v;
      }
      memo(k, memoOptions = {}) {
        const memoMethod = this.#memoMethod;
        if (!memoMethod) {
          throw new Error("no memoMethod provided to constructor");
        }
        const { context, forceRefresh, ...options } = memoOptions;
        const v = this.get(k, options);
        if (!forceRefresh && v !== void 0)
          return v;
        const vv = memoMethod(k, v, {
          options,
          context
        });
        this.set(k, vv, options);
        return vv;
      }
      /**
       * Return a value from the cache. Will update the recency of the cache
       * entry found.
       *
       * If the key is not found, get() will return `undefined`.
       */
      get(k, getOptions = {}) {
        const { allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, status } = getOptions;
        const index = this.#keyMap.get(k);
        if (index !== void 0) {
          const value = this.#valList[index];
          const fetching = this.#isBackgroundFetch(value);
          if (status)
            this.#statusTTL(status, index);
          if (this.#isStale(index)) {
            if (status)
              status.get = "stale";
            if (!fetching) {
              if (!noDeleteOnStaleGet) {
                this.#delete(k, "expire");
              }
              if (status && allowStale)
                status.returnedStale = true;
              return allowStale ? value : void 0;
            } else {
              if (status && allowStale && value.__staleWhileFetching !== void 0) {
                status.returnedStale = true;
              }
              return allowStale ? value.__staleWhileFetching : void 0;
            }
          } else {
            if (status)
              status.get = "hit";
            if (fetching) {
              return value.__staleWhileFetching;
            }
            this.#moveToTail(index);
            if (updateAgeOnGet) {
              this.#updateItemAge(index);
            }
            return value;
          }
        } else if (status) {
          status.get = "miss";
        }
      }
      #connect(p, n) {
        this.#prev[n] = p;
        this.#next[p] = n;
      }
      #moveToTail(index) {
        if (index !== this.#tail) {
          if (index === this.#head) {
            this.#head = this.#next[index];
          } else {
            this.#connect(this.#prev[index], this.#next[index]);
          }
          this.#connect(this.#tail, index);
          this.#tail = index;
        }
      }
      /**
       * Deletes a key out of the cache.
       *
       * Returns true if the key was deleted, false otherwise.
       */
      delete(k) {
        return this.#delete(k, "delete");
      }
      #delete(k, reason) {
        let deleted = false;
        if (this.#size !== 0) {
          const index = this.#keyMap.get(k);
          if (index !== void 0) {
            deleted = true;
            if (this.#size === 1) {
              this.#clear(reason);
            } else {
              this.#removeItemSize(index);
              const v = this.#valList[index];
              if (this.#isBackgroundFetch(v)) {
                v.__abortController.abort(new Error("deleted"));
              } else if (this.#hasDispose || this.#hasDisposeAfter) {
                if (this.#hasDispose) {
                  this.#dispose?.(v, k, reason);
                }
                if (this.#hasDisposeAfter) {
                  this.#disposed?.push([v, k, reason]);
                }
              }
              this.#keyMap.delete(k);
              this.#keyList[index] = void 0;
              this.#valList[index] = void 0;
              if (index === this.#tail) {
                this.#tail = this.#prev[index];
              } else if (index === this.#head) {
                this.#head = this.#next[index];
              } else {
                const pi = this.#prev[index];
                this.#next[pi] = this.#next[index];
                const ni = this.#next[index];
                this.#prev[ni] = this.#prev[index];
              }
              this.#size--;
              this.#free.push(index);
            }
          }
        }
        if (this.#hasDisposeAfter && this.#disposed?.length) {
          const dt = this.#disposed;
          let task;
          while (task = dt?.shift()) {
            this.#disposeAfter?.(...task);
          }
        }
        return deleted;
      }
      /**
       * Clear the cache entirely, throwing away all values.
       */
      clear() {
        return this.#clear("delete");
      }
      #clear(reason) {
        for (const index of this.#rindexes({ allowStale: true })) {
          const v = this.#valList[index];
          if (this.#isBackgroundFetch(v)) {
            v.__abortController.abort(new Error("deleted"));
          } else {
            const k = this.#keyList[index];
            if (this.#hasDispose) {
              this.#dispose?.(v, k, reason);
            }
            if (this.#hasDisposeAfter) {
              this.#disposed?.push([v, k, reason]);
            }
          }
        }
        this.#keyMap.clear();
        this.#valList.fill(void 0);
        this.#keyList.fill(void 0);
        if (this.#ttls && this.#starts) {
          this.#ttls.fill(0);
          this.#starts.fill(0);
        }
        if (this.#sizes) {
          this.#sizes.fill(0);
        }
        this.#head = 0;
        this.#tail = 0;
        this.#free.length = 0;
        this.#calculatedSize = 0;
        this.#size = 0;
        if (this.#hasDisposeAfter && this.#disposed) {
          const dt = this.#disposed;
          let task;
          while (task = dt?.shift()) {
            this.#disposeAfter?.(...task);
          }
        }
      }
    };
    exports2.LRUCache = LRUCache;
  }
});

// node_modules/js-sdsl/dist/cjs/container/ContainerBase/index.js
var require_ContainerBase = __commonJS({
  "node_modules/js-sdsl/dist/cjs/container/ContainerBase/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "t", {
      value: true
    });
    exports2.ContainerIterator = exports2.Container = exports2.Base = void 0;
    var ContainerIterator = class {
      constructor(t = 0) {
        this.iteratorType = t;
      }
      equals(t) {
        return this.o === t.o;
      }
    };
    exports2.ContainerIterator = ContainerIterator;
    var Base = class {
      constructor() {
        this.i = 0;
      }
      get length() {
        return this.i;
      }
      size() {
        return this.i;
      }
      empty() {
        return this.i === 0;
      }
    };
    exports2.Base = Base;
    var Container = class extends Base {
    };
    exports2.Container = Container;
  }
});

// node_modules/js-sdsl/dist/cjs/container/OtherContainer/Stack.js
var require_Stack = __commonJS({
  "node_modules/js-sdsl/dist/cjs/container/OtherContainer/Stack.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "t", {
      value: true
    });
    exports2.default = void 0;
    var _ContainerBase = require_ContainerBase();
    var Stack = class extends _ContainerBase.Base {
      constructor(t = []) {
        super();
        this.S = [];
        const s = this;
        t.forEach(function(t2) {
          s.push(t2);
        });
      }
      clear() {
        this.i = 0;
        this.S = [];
      }
      push(t) {
        this.S.push(t);
        this.i += 1;
        return this.i;
      }
      pop() {
        if (this.i === 0)
          return;
        this.i -= 1;
        return this.S.pop();
      }
      top() {
        return this.S[this.i - 1];
      }
    };
    var _default = Stack;
    exports2.default = _default;
  }
});

// node_modules/js-sdsl/dist/cjs/container/OtherContainer/Queue.js
var require_Queue = __commonJS({
  "node_modules/js-sdsl/dist/cjs/container/OtherContainer/Queue.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "t", {
      value: true
    });
    exports2.default = void 0;
    var _ContainerBase = require_ContainerBase();
    var Queue = class extends _ContainerBase.Base {
      constructor(t = []) {
        super();
        this.j = 0;
        this.q = [];
        const s = this;
        t.forEach(function(t2) {
          s.push(t2);
        });
      }
      clear() {
        this.q = [];
        this.i = this.j = 0;
      }
      push(t) {
        const s = this.q.length;
        if (this.j / s > 0.5 && this.j + this.i >= s && s > 4096) {
          const s2 = this.i;
          for (let t2 = 0; t2 < s2; ++t2) {
            this.q[t2] = this.q[this.j + t2];
          }
          this.j = 0;
          this.q[this.i] = t;
        } else
          this.q[this.j + this.i] = t;
        return ++this.i;
      }
      pop() {
        if (this.i === 0)
          return;
        const t = this.q[this.j++];
        this.i -= 1;
        return t;
      }
      front() {
        if (this.i === 0)
          return;
        return this.q[this.j];
      }
    };
    var _default = Queue;
    exports2.default = _default;
  }
});

// node_modules/js-sdsl/dist/cjs/container/OtherContainer/PriorityQueue.js
var require_PriorityQueue = __commonJS({
  "node_modules/js-sdsl/dist/cjs/container/OtherContainer/PriorityQueue.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "t", {
      value: true
    });
    exports2.default = void 0;
    var _ContainerBase = require_ContainerBase();
    var PriorityQueue = class extends _ContainerBase.Base {
      constructor(t = [], s = function(t2, s2) {
        if (t2 > s2)
          return -1;
        if (t2 < s2)
          return 1;
        return 0;
      }, i = true) {
        super();
        this.v = s;
        if (Array.isArray(t)) {
          this.C = i ? [...t] : t;
        } else {
          this.C = [];
          const s2 = this;
          t.forEach(function(t2) {
            s2.C.push(t2);
          });
        }
        this.i = this.C.length;
        const e = this.i >> 1;
        for (let t2 = this.i - 1 >> 1; t2 >= 0; --t2) {
          this.k(t2, e);
        }
      }
      m(t) {
        const s = this.C[t];
        while (t > 0) {
          const i = t - 1 >> 1;
          const e = this.C[i];
          if (this.v(e, s) <= 0)
            break;
          this.C[t] = e;
          t = i;
        }
        this.C[t] = s;
      }
      k(t, s) {
        const i = this.C[t];
        while (t < s) {
          let s2 = t << 1 | 1;
          const e = s2 + 1;
          let h = this.C[s2];
          if (e < this.i && this.v(h, this.C[e]) > 0) {
            s2 = e;
            h = this.C[e];
          }
          if (this.v(h, i) >= 0)
            break;
          this.C[t] = h;
          t = s2;
        }
        this.C[t] = i;
      }
      clear() {
        this.i = 0;
        this.C.length = 0;
      }
      push(t) {
        this.C.push(t);
        this.m(this.i);
        this.i += 1;
      }
      pop() {
        if (this.i === 0)
          return;
        const t = this.C[0];
        const s = this.C.pop();
        this.i -= 1;
        if (this.i) {
          this.C[0] = s;
          this.k(0, this.i >> 1);
        }
        return t;
      }
      top() {
        return this.C[0];
      }
      find(t) {
        return this.C.indexOf(t) >= 0;
      }
      remove(t) {
        const s = this.C.indexOf(t);
        if (s < 0)
          return false;
        if (s === 0) {
          this.pop();
        } else if (s === this.i - 1) {
          this.C.pop();
          this.i -= 1;
        } else {
          this.C.splice(s, 1, this.C.pop());
          this.i -= 1;
          this.m(s);
          this.k(s, this.i >> 1);
        }
        return true;
      }
      updateItem(t) {
        const s = this.C.indexOf(t);
        if (s < 0)
          return false;
        this.m(s);
        this.k(s, this.i >> 1);
        return true;
      }
      toArray() {
        return [...this.C];
      }
    };
    var _default = PriorityQueue;
    exports2.default = _default;
  }
});

// node_modules/js-sdsl/dist/cjs/container/SequentialContainer/Base/index.js
var require_Base = __commonJS({
  "node_modules/js-sdsl/dist/cjs/container/SequentialContainer/Base/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "t", {
      value: true
    });
    exports2.default = void 0;
    var _ContainerBase = require_ContainerBase();
    var SequentialContainer = class extends _ContainerBase.Container {
    };
    var _default = SequentialContainer;
    exports2.default = _default;
  }
});

// node_modules/js-sdsl/dist/cjs/utils/throwError.js
var require_throwError = __commonJS({
  "node_modules/js-sdsl/dist/cjs/utils/throwError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "t", {
      value: true
    });
    exports2.throwIteratorAccessError = throwIteratorAccessError;
    function throwIteratorAccessError() {
      throw new RangeError("Iterator access denied!");
    }
  }
});

// node_modules/js-sdsl/dist/cjs/container/SequentialContainer/Base/RandomIterator.js
var require_RandomIterator = __commonJS({
  "node_modules/js-sdsl/dist/cjs/container/SequentialContainer/Base/RandomIterator.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "t", {
      value: true
    });
    exports2.RandomIterator = void 0;
    var _ContainerBase = require_ContainerBase();
    var _throwError = require_throwError();
    var RandomIterator = class extends _ContainerBase.ContainerIterator {
      constructor(t, r) {
        super(r);
        this.o = t;
        if (this.iteratorType === 0) {
          this.pre = function() {
            if (this.o === 0) {
              (0, _throwError.throwIteratorAccessError)();
            }
            this.o -= 1;
            return this;
          };
          this.next = function() {
            if (this.o === this.container.size()) {
              (0, _throwError.throwIteratorAccessError)();
            }
            this.o += 1;
            return this;
          };
        } else {
          this.pre = function() {
            if (this.o === this.container.size() - 1) {
              (0, _throwError.throwIteratorAccessError)();
            }
            this.o += 1;
            return this;
          };
          this.next = function() {
            if (this.o === -1) {
              (0, _throwError.throwIteratorAccessError)();
            }
            this.o -= 1;
            return this;
          };
        }
      }
      get pointer() {
        return this.container.getElementByPos(this.o);
      }
      set pointer(t) {
        this.container.setElementByPos(this.o, t);
      }
    };
    exports2.RandomIterator = RandomIterator;
  }
});

// node_modules/js-sdsl/dist/cjs/container/SequentialContainer/Vector.js
var require_Vector = __commonJS({
  "node_modules/js-sdsl/dist/cjs/container/SequentialContainer/Vector.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "t", {
      value: true
    });
    exports2.default = void 0;
    var _Base = _interopRequireDefault(require_Base());
    var _RandomIterator = require_RandomIterator();
    function _interopRequireDefault(t) {
      return t && t.t ? t : {
        default: t
      };
    }
    var VectorIterator = class _VectorIterator extends _RandomIterator.RandomIterator {
      constructor(t, r, e) {
        super(t, e);
        this.container = r;
      }
      copy() {
        return new _VectorIterator(this.o, this.container, this.iteratorType);
      }
    };
    var Vector = class extends _Base.default {
      constructor(t = [], r = true) {
        super();
        if (Array.isArray(t)) {
          this.J = r ? [...t] : t;
          this.i = t.length;
        } else {
          this.J = [];
          const r2 = this;
          t.forEach(function(t2) {
            r2.pushBack(t2);
          });
        }
      }
      clear() {
        this.i = 0;
        this.J.length = 0;
      }
      begin() {
        return new VectorIterator(0, this);
      }
      end() {
        return new VectorIterator(this.i, this);
      }
      rBegin() {
        return new VectorIterator(this.i - 1, this, 1);
      }
      rEnd() {
        return new VectorIterator(-1, this, 1);
      }
      front() {
        return this.J[0];
      }
      back() {
        return this.J[this.i - 1];
      }
      getElementByPos(t) {
        if (t < 0 || t > this.i - 1) {
          throw new RangeError();
        }
        return this.J[t];
      }
      eraseElementByPos(t) {
        if (t < 0 || t > this.i - 1) {
          throw new RangeError();
        }
        this.J.splice(t, 1);
        this.i -= 1;
        return this.i;
      }
      eraseElementByValue(t) {
        let r = 0;
        for (let e = 0; e < this.i; ++e) {
          if (this.J[e] !== t) {
            this.J[r++] = this.J[e];
          }
        }
        this.i = this.J.length = r;
        return this.i;
      }
      eraseElementByIterator(t) {
        const r = t.o;
        t = t.next();
        this.eraseElementByPos(r);
        return t;
      }
      pushBack(t) {
        this.J.push(t);
        this.i += 1;
        return this.i;
      }
      popBack() {
        if (this.i === 0)
          return;
        this.i -= 1;
        return this.J.pop();
      }
      setElementByPos(t, r) {
        if (t < 0 || t > this.i - 1) {
          throw new RangeError();
        }
        this.J[t] = r;
      }
      insert(t, r, e = 1) {
        if (t < 0 || t > this.i) {
          throw new RangeError();
        }
        this.J.splice(t, 0, ...new Array(e).fill(r));
        this.i += e;
        return this.i;
      }
      find(t) {
        for (let r = 0; r < this.i; ++r) {
          if (this.J[r] === t) {
            return new VectorIterator(r, this);
          }
        }
        return this.end();
      }
      reverse() {
        this.J.reverse();
      }
      unique() {
        let t = 1;
        for (let r = 1; r < this.i; ++r) {
          if (this.J[r] !== this.J[r - 1]) {
            this.J[t++] = this.J[r];
          }
        }
        this.i = this.J.length = t;
        return this.i;
      }
      sort(t) {
        this.J.sort(t);
      }
      forEach(t) {
        for (let r = 0; r < this.i; ++r) {
          t(this.J[r], r, this);
        }
      }
      [Symbol.iterator]() {
        return function* () {
          yield* this.J;
        }.bind(this)();
      }
    };
    var _default = Vector;
    exports2.default = _default;
  }
});

// node_modules/js-sdsl/dist/cjs/container/SequentialContainer/LinkList.js
var require_LinkList = __commonJS({
  "node_modules/js-sdsl/dist/cjs/container/SequentialContainer/LinkList.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "t", {
      value: true
    });
    exports2.default = void 0;
    var _Base = _interopRequireDefault(require_Base());
    var _ContainerBase = require_ContainerBase();
    var _throwError = require_throwError();
    function _interopRequireDefault(t) {
      return t && t.t ? t : {
        default: t
      };
    }
    var LinkListIterator = class _LinkListIterator extends _ContainerBase.ContainerIterator {
      constructor(t, i, s, r) {
        super(r);
        this.o = t;
        this.h = i;
        this.container = s;
        if (this.iteratorType === 0) {
          this.pre = function() {
            if (this.o.L === this.h) {
              (0, _throwError.throwIteratorAccessError)();
            }
            this.o = this.o.L;
            return this;
          };
          this.next = function() {
            if (this.o === this.h) {
              (0, _throwError.throwIteratorAccessError)();
            }
            this.o = this.o.B;
            return this;
          };
        } else {
          this.pre = function() {
            if (this.o.B === this.h) {
              (0, _throwError.throwIteratorAccessError)();
            }
            this.o = this.o.B;
            return this;
          };
          this.next = function() {
            if (this.o === this.h) {
              (0, _throwError.throwIteratorAccessError)();
            }
            this.o = this.o.L;
            return this;
          };
        }
      }
      get pointer() {
        if (this.o === this.h) {
          (0, _throwError.throwIteratorAccessError)();
        }
        return this.o.l;
      }
      set pointer(t) {
        if (this.o === this.h) {
          (0, _throwError.throwIteratorAccessError)();
        }
        this.o.l = t;
      }
      copy() {
        return new _LinkListIterator(this.o, this.h, this.container, this.iteratorType);
      }
    };
    var LinkList = class extends _Base.default {
      constructor(t = []) {
        super();
        this.h = {};
        this.p = this._ = this.h.L = this.h.B = this.h;
        const i = this;
        t.forEach(function(t2) {
          i.pushBack(t2);
        });
      }
      V(t) {
        const { L: i, B: s } = t;
        i.B = s;
        s.L = i;
        if (t === this.p) {
          this.p = s;
        }
        if (t === this._) {
          this._ = i;
        }
        this.i -= 1;
      }
      G(t, i) {
        const s = i.B;
        const r = {
          l: t,
          L: i,
          B: s
        };
        i.B = r;
        s.L = r;
        if (i === this.h) {
          this.p = r;
        }
        if (s === this.h) {
          this._ = r;
        }
        this.i += 1;
      }
      clear() {
        this.i = 0;
        this.p = this._ = this.h.L = this.h.B = this.h;
      }
      begin() {
        return new LinkListIterator(this.p, this.h, this);
      }
      end() {
        return new LinkListIterator(this.h, this.h, this);
      }
      rBegin() {
        return new LinkListIterator(this._, this.h, this, 1);
      }
      rEnd() {
        return new LinkListIterator(this.h, this.h, this, 1);
      }
      front() {
        return this.p.l;
      }
      back() {
        return this._.l;
      }
      getElementByPos(t) {
        if (t < 0 || t > this.i - 1) {
          throw new RangeError();
        }
        let i = this.p;
        while (t--) {
          i = i.B;
        }
        return i.l;
      }
      eraseElementByPos(t) {
        if (t < 0 || t > this.i - 1) {
          throw new RangeError();
        }
        let i = this.p;
        while (t--) {
          i = i.B;
        }
        this.V(i);
        return this.i;
      }
      eraseElementByValue(t) {
        let i = this.p;
        while (i !== this.h) {
          if (i.l === t) {
            this.V(i);
          }
          i = i.B;
        }
        return this.i;
      }
      eraseElementByIterator(t) {
        const i = t.o;
        if (i === this.h) {
          (0, _throwError.throwIteratorAccessError)();
        }
        t = t.next();
        this.V(i);
        return t;
      }
      pushBack(t) {
        this.G(t, this._);
        return this.i;
      }
      popBack() {
        if (this.i === 0)
          return;
        const t = this._.l;
        this.V(this._);
        return t;
      }
      pushFront(t) {
        this.G(t, this.h);
        return this.i;
      }
      popFront() {
        if (this.i === 0)
          return;
        const t = this.p.l;
        this.V(this.p);
        return t;
      }
      setElementByPos(t, i) {
        if (t < 0 || t > this.i - 1) {
          throw new RangeError();
        }
        let s = this.p;
        while (t--) {
          s = s.B;
        }
        s.l = i;
      }
      insert(t, i, s = 1) {
        if (t < 0 || t > this.i) {
          throw new RangeError();
        }
        if (s <= 0)
          return this.i;
        if (t === 0) {
          while (s--)
            this.pushFront(i);
        } else if (t === this.i) {
          while (s--)
            this.pushBack(i);
        } else {
          let r = this.p;
          for (let i2 = 1; i2 < t; ++i2) {
            r = r.B;
          }
          const e = r.B;
          this.i += s;
          while (s--) {
            r.B = {
              l: i,
              L: r
            };
            r.B.L = r;
            r = r.B;
          }
          r.B = e;
          e.L = r;
        }
        return this.i;
      }
      find(t) {
        let i = this.p;
        while (i !== this.h) {
          if (i.l === t) {
            return new LinkListIterator(i, this.h, this);
          }
          i = i.B;
        }
        return this.end();
      }
      reverse() {
        if (this.i <= 1)
          return;
        let t = this.p;
        let i = this._;
        let s = 0;
        while (s << 1 < this.i) {
          const r = t.l;
          t.l = i.l;
          i.l = r;
          t = t.B;
          i = i.L;
          s += 1;
        }
      }
      unique() {
        if (this.i <= 1) {
          return this.i;
        }
        let t = this.p;
        while (t !== this.h) {
          let i = t;
          while (i.B !== this.h && i.l === i.B.l) {
            i = i.B;
            this.i -= 1;
          }
          t.B = i.B;
          t.B.L = t;
          t = t.B;
        }
        return this.i;
      }
      sort(t) {
        if (this.i <= 1)
          return;
        const i = [];
        this.forEach(function(t2) {
          i.push(t2);
        });
        i.sort(t);
        let s = this.p;
        i.forEach(function(t2) {
          s.l = t2;
          s = s.B;
        });
      }
      merge(t) {
        const i = this;
        if (this.i === 0) {
          t.forEach(function(t2) {
            i.pushBack(t2);
          });
        } else {
          let s = this.p;
          t.forEach(function(t2) {
            while (s !== i.h && s.l <= t2) {
              s = s.B;
            }
            i.G(t2, s.L);
          });
        }
        return this.i;
      }
      forEach(t) {
        let i = this.p;
        let s = 0;
        while (i !== this.h) {
          t(i.l, s++, this);
          i = i.B;
        }
      }
      [Symbol.iterator]() {
        return function* () {
          if (this.i === 0)
            return;
          let t = this.p;
          while (t !== this.h) {
            yield t.l;
            t = t.B;
          }
        }.bind(this)();
      }
    };
    var _default = LinkList;
    exports2.default = _default;
  }
});

// node_modules/js-sdsl/dist/cjs/container/SequentialContainer/Deque.js
var require_Deque = __commonJS({
  "node_modules/js-sdsl/dist/cjs/container/SequentialContainer/Deque.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "t", {
      value: true
    });
    exports2.default = void 0;
    var _Base = _interopRequireDefault(require_Base());
    var _RandomIterator = require_RandomIterator();
    function _interopRequireDefault(t) {
      return t && t.t ? t : {
        default: t
      };
    }
    var DequeIterator = class _DequeIterator extends _RandomIterator.RandomIterator {
      constructor(t, i, s) {
        super(t, s);
        this.container = i;
      }
      copy() {
        return new _DequeIterator(this.o, this.container, this.iteratorType);
      }
    };
    var Deque = class extends _Base.default {
      constructor(t = [], i = 1 << 12) {
        super();
        this.j = 0;
        this.D = 0;
        this.R = 0;
        this.N = 0;
        this.P = 0;
        this.A = [];
        const s = (() => {
          if (typeof t.length === "number")
            return t.length;
          if (typeof t.size === "number")
            return t.size;
          if (typeof t.size === "function")
            return t.size();
          throw new TypeError("Cannot get the length or size of the container");
        })();
        this.F = i;
        this.P = Math.max(Math.ceil(s / this.F), 1);
        for (let t2 = 0; t2 < this.P; ++t2) {
          this.A.push(new Array(this.F));
        }
        const h = Math.ceil(s / this.F);
        this.j = this.R = (this.P >> 1) - (h >> 1);
        this.D = this.N = this.F - s % this.F >> 1;
        const e = this;
        t.forEach(function(t2) {
          e.pushBack(t2);
        });
      }
      T() {
        const t = [];
        const i = Math.max(this.P >> 1, 1);
        for (let s = 0; s < i; ++s) {
          t[s] = new Array(this.F);
        }
        for (let i2 = this.j; i2 < this.P; ++i2) {
          t[t.length] = this.A[i2];
        }
        for (let i2 = 0; i2 < this.R; ++i2) {
          t[t.length] = this.A[i2];
        }
        t[t.length] = [...this.A[this.R]];
        this.j = i;
        this.R = t.length - 1;
        for (let s = 0; s < i; ++s) {
          t[t.length] = new Array(this.F);
        }
        this.A = t;
        this.P = t.length;
      }
      O(t) {
        const i = this.D + t + 1;
        const s = i % this.F;
        let h = s - 1;
        let e = this.j + (i - s) / this.F;
        if (s === 0)
          e -= 1;
        e %= this.P;
        if (h < 0)
          h += this.F;
        return {
          curNodeBucketIndex: e,
          curNodePointerIndex: h
        };
      }
      clear() {
        this.A = [new Array(this.F)];
        this.P = 1;
        this.j = this.R = this.i = 0;
        this.D = this.N = this.F >> 1;
      }
      begin() {
        return new DequeIterator(0, this);
      }
      end() {
        return new DequeIterator(this.i, this);
      }
      rBegin() {
        return new DequeIterator(this.i - 1, this, 1);
      }
      rEnd() {
        return new DequeIterator(-1, this, 1);
      }
      front() {
        if (this.i === 0)
          return;
        return this.A[this.j][this.D];
      }
      back() {
        if (this.i === 0)
          return;
        return this.A[this.R][this.N];
      }
      pushBack(t) {
        if (this.i) {
          if (this.N < this.F - 1) {
            this.N += 1;
          } else if (this.R < this.P - 1) {
            this.R += 1;
            this.N = 0;
          } else {
            this.R = 0;
            this.N = 0;
          }
          if (this.R === this.j && this.N === this.D)
            this.T();
        }
        this.i += 1;
        this.A[this.R][this.N] = t;
        return this.i;
      }
      popBack() {
        if (this.i === 0)
          return;
        const t = this.A[this.R][this.N];
        if (this.i !== 1) {
          if (this.N > 0) {
            this.N -= 1;
          } else if (this.R > 0) {
            this.R -= 1;
            this.N = this.F - 1;
          } else {
            this.R = this.P - 1;
            this.N = this.F - 1;
          }
        }
        this.i -= 1;
        return t;
      }
      pushFront(t) {
        if (this.i) {
          if (this.D > 0) {
            this.D -= 1;
          } else if (this.j > 0) {
            this.j -= 1;
            this.D = this.F - 1;
          } else {
            this.j = this.P - 1;
            this.D = this.F - 1;
          }
          if (this.j === this.R && this.D === this.N)
            this.T();
        }
        this.i += 1;
        this.A[this.j][this.D] = t;
        return this.i;
      }
      popFront() {
        if (this.i === 0)
          return;
        const t = this.A[this.j][this.D];
        if (this.i !== 1) {
          if (this.D < this.F - 1) {
            this.D += 1;
          } else if (this.j < this.P - 1) {
            this.j += 1;
            this.D = 0;
          } else {
            this.j = 0;
            this.D = 0;
          }
        }
        this.i -= 1;
        return t;
      }
      getElementByPos(t) {
        if (t < 0 || t > this.i - 1) {
          throw new RangeError();
        }
        const { curNodeBucketIndex: i, curNodePointerIndex: s } = this.O(t);
        return this.A[i][s];
      }
      setElementByPos(t, i) {
        if (t < 0 || t > this.i - 1) {
          throw new RangeError();
        }
        const { curNodeBucketIndex: s, curNodePointerIndex: h } = this.O(t);
        this.A[s][h] = i;
      }
      insert(t, i, s = 1) {
        if (t < 0 || t > this.i) {
          throw new RangeError();
        }
        if (t === 0) {
          while (s--)
            this.pushFront(i);
        } else if (t === this.i) {
          while (s--)
            this.pushBack(i);
        } else {
          const h = [];
          for (let i2 = t; i2 < this.i; ++i2) {
            h.push(this.getElementByPos(i2));
          }
          this.cut(t - 1);
          for (let t2 = 0; t2 < s; ++t2)
            this.pushBack(i);
          for (let t2 = 0; t2 < h.length; ++t2)
            this.pushBack(h[t2]);
        }
        return this.i;
      }
      cut(t) {
        if (t < 0) {
          this.clear();
          return 0;
        }
        const { curNodeBucketIndex: i, curNodePointerIndex: s } = this.O(t);
        this.R = i;
        this.N = s;
        this.i = t + 1;
        return this.i;
      }
      eraseElementByPos(t) {
        if (t < 0 || t > this.i - 1) {
          throw new RangeError();
        }
        if (t === 0)
          this.popFront();
        else if (t === this.i - 1)
          this.popBack();
        else {
          const i = [];
          for (let s2 = t + 1; s2 < this.i; ++s2) {
            i.push(this.getElementByPos(s2));
          }
          this.cut(t);
          this.popBack();
          const s = this;
          i.forEach(function(t2) {
            s.pushBack(t2);
          });
        }
        return this.i;
      }
      eraseElementByValue(t) {
        if (this.i === 0)
          return 0;
        const i = [];
        for (let s2 = 0; s2 < this.i; ++s2) {
          const h = this.getElementByPos(s2);
          if (h !== t)
            i.push(h);
        }
        const s = i.length;
        for (let t2 = 0; t2 < s; ++t2)
          this.setElementByPos(t2, i[t2]);
        return this.cut(s - 1);
      }
      eraseElementByIterator(t) {
        const i = t.o;
        this.eraseElementByPos(i);
        t = t.next();
        return t;
      }
      find(t) {
        for (let i = 0; i < this.i; ++i) {
          if (this.getElementByPos(i) === t) {
            return new DequeIterator(i, this);
          }
        }
        return this.end();
      }
      reverse() {
        let t = 0;
        let i = this.i - 1;
        while (t < i) {
          const s = this.getElementByPos(t);
          this.setElementByPos(t, this.getElementByPos(i));
          this.setElementByPos(i, s);
          t += 1;
          i -= 1;
        }
      }
      unique() {
        if (this.i <= 1) {
          return this.i;
        }
        let t = 1;
        let i = this.getElementByPos(0);
        for (let s = 1; s < this.i; ++s) {
          const h = this.getElementByPos(s);
          if (h !== i) {
            i = h;
            this.setElementByPos(t++, h);
          }
        }
        while (this.i > t)
          this.popBack();
        return this.i;
      }
      sort(t) {
        const i = [];
        for (let t2 = 0; t2 < this.i; ++t2) {
          i.push(this.getElementByPos(t2));
        }
        i.sort(t);
        for (let t2 = 0; t2 < this.i; ++t2)
          this.setElementByPos(t2, i[t2]);
      }
      shrinkToFit() {
        if (this.i === 0)
          return;
        const t = [];
        this.forEach(function(i) {
          t.push(i);
        });
        this.P = Math.max(Math.ceil(this.i / this.F), 1);
        this.i = this.j = this.R = this.D = this.N = 0;
        this.A = [];
        for (let t2 = 0; t2 < this.P; ++t2) {
          this.A.push(new Array(this.F));
        }
        for (let i = 0; i < t.length; ++i)
          this.pushBack(t[i]);
      }
      forEach(t) {
        for (let i = 0; i < this.i; ++i) {
          t(this.getElementByPos(i), i, this);
        }
      }
      [Symbol.iterator]() {
        return function* () {
          for (let t = 0; t < this.i; ++t) {
            yield this.getElementByPos(t);
          }
        }.bind(this)();
      }
    };
    var _default = Deque;
    exports2.default = _default;
  }
});

// node_modules/js-sdsl/dist/cjs/container/TreeContainer/Base/TreeNode.js
var require_TreeNode = __commonJS({
  "node_modules/js-sdsl/dist/cjs/container/TreeContainer/Base/TreeNode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "t", {
      value: true
    });
    exports2.TreeNodeEnableIndex = exports2.TreeNode = void 0;
    var TreeNode = class {
      constructor(e, t) {
        this.ee = 1;
        this.u = void 0;
        this.l = void 0;
        this.U = void 0;
        this.W = void 0;
        this.tt = void 0;
        this.u = e;
        this.l = t;
      }
      L() {
        let e = this;
        if (e.ee === 1 && e.tt.tt === e) {
          e = e.W;
        } else if (e.U) {
          e = e.U;
          while (e.W) {
            e = e.W;
          }
        } else {
          let t = e.tt;
          while (t.U === e) {
            e = t;
            t = e.tt;
          }
          e = t;
        }
        return e;
      }
      B() {
        let e = this;
        if (e.W) {
          e = e.W;
          while (e.U) {
            e = e.U;
          }
          return e;
        } else {
          let t = e.tt;
          while (t.W === e) {
            e = t;
            t = e.tt;
          }
          if (e.W !== t) {
            return t;
          } else
            return e;
        }
      }
      te() {
        const e = this.tt;
        const t = this.W;
        const s = t.U;
        if (e.tt === this)
          e.tt = t;
        else if (e.U === this)
          e.U = t;
        else
          e.W = t;
        t.tt = e;
        t.U = this;
        this.tt = t;
        this.W = s;
        if (s)
          s.tt = this;
        return t;
      }
      se() {
        const e = this.tt;
        const t = this.U;
        const s = t.W;
        if (e.tt === this)
          e.tt = t;
        else if (e.U === this)
          e.U = t;
        else
          e.W = t;
        t.tt = e;
        t.W = this;
        this.tt = t;
        this.U = s;
        if (s)
          s.tt = this;
        return t;
      }
    };
    exports2.TreeNode = TreeNode;
    var TreeNodeEnableIndex = class extends TreeNode {
      constructor() {
        super(...arguments);
        this.rt = 1;
      }
      te() {
        const e = super.te();
        this.ie();
        e.ie();
        return e;
      }
      se() {
        const e = super.se();
        this.ie();
        e.ie();
        return e;
      }
      ie() {
        this.rt = 1;
        if (this.U) {
          this.rt += this.U.rt;
        }
        if (this.W) {
          this.rt += this.W.rt;
        }
      }
    };
    exports2.TreeNodeEnableIndex = TreeNodeEnableIndex;
  }
});

// node_modules/js-sdsl/dist/cjs/container/TreeContainer/Base/index.js
var require_Base2 = __commonJS({
  "node_modules/js-sdsl/dist/cjs/container/TreeContainer/Base/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "t", {
      value: true
    });
    exports2.default = void 0;
    var _TreeNode = require_TreeNode();
    var _ContainerBase = require_ContainerBase();
    var _throwError = require_throwError();
    var TreeContainer = class extends _ContainerBase.Container {
      constructor(e = function(e2, t2) {
        if (e2 < t2)
          return -1;
        if (e2 > t2)
          return 1;
        return 0;
      }, t = false) {
        super();
        this.Y = void 0;
        this.v = e;
        if (t) {
          this.re = _TreeNode.TreeNodeEnableIndex;
          this.M = function(e2, t2, i) {
            const s = this.ne(e2, t2, i);
            if (s) {
              let e3 = s.tt;
              while (e3 !== this.h) {
                e3.rt += 1;
                e3 = e3.tt;
              }
              const t3 = this.he(s);
              if (t3) {
                const { parentNode: e4, grandParent: i2, curNode: s2 } = t3;
                e4.ie();
                i2.ie();
                s2.ie();
              }
            }
            return this.i;
          };
          this.V = function(e2) {
            let t2 = this.fe(e2);
            while (t2 !== this.h) {
              t2.rt -= 1;
              t2 = t2.tt;
            }
          };
        } else {
          this.re = _TreeNode.TreeNode;
          this.M = function(e2, t2, i) {
            const s = this.ne(e2, t2, i);
            if (s)
              this.he(s);
            return this.i;
          };
          this.V = this.fe;
        }
        this.h = new this.re();
      }
      X(e, t) {
        let i = this.h;
        while (e) {
          const s = this.v(e.u, t);
          if (s < 0) {
            e = e.W;
          } else if (s > 0) {
            i = e;
            e = e.U;
          } else
            return e;
        }
        return i;
      }
      Z(e, t) {
        let i = this.h;
        while (e) {
          const s = this.v(e.u, t);
          if (s <= 0) {
            e = e.W;
          } else {
            i = e;
            e = e.U;
          }
        }
        return i;
      }
      $(e, t) {
        let i = this.h;
        while (e) {
          const s = this.v(e.u, t);
          if (s < 0) {
            i = e;
            e = e.W;
          } else if (s > 0) {
            e = e.U;
          } else
            return e;
        }
        return i;
      }
      rr(e, t) {
        let i = this.h;
        while (e) {
          const s = this.v(e.u, t);
          if (s < 0) {
            i = e;
            e = e.W;
          } else {
            e = e.U;
          }
        }
        return i;
      }
      ue(e) {
        while (true) {
          const t = e.tt;
          if (t === this.h)
            return;
          if (e.ee === 1) {
            e.ee = 0;
            return;
          }
          if (e === t.U) {
            const i = t.W;
            if (i.ee === 1) {
              i.ee = 0;
              t.ee = 1;
              if (t === this.Y) {
                this.Y = t.te();
              } else
                t.te();
            } else {
              if (i.W && i.W.ee === 1) {
                i.ee = t.ee;
                t.ee = 0;
                i.W.ee = 0;
                if (t === this.Y) {
                  this.Y = t.te();
                } else
                  t.te();
                return;
              } else if (i.U && i.U.ee === 1) {
                i.ee = 1;
                i.U.ee = 0;
                i.se();
              } else {
                i.ee = 1;
                e = t;
              }
            }
          } else {
            const i = t.U;
            if (i.ee === 1) {
              i.ee = 0;
              t.ee = 1;
              if (t === this.Y) {
                this.Y = t.se();
              } else
                t.se();
            } else {
              if (i.U && i.U.ee === 1) {
                i.ee = t.ee;
                t.ee = 0;
                i.U.ee = 0;
                if (t === this.Y) {
                  this.Y = t.se();
                } else
                  t.se();
                return;
              } else if (i.W && i.W.ee === 1) {
                i.ee = 1;
                i.W.ee = 0;
                i.te();
              } else {
                i.ee = 1;
                e = t;
              }
            }
          }
        }
      }
      fe(e) {
        if (this.i === 1) {
          this.clear();
          return this.h;
        }
        let t = e;
        while (t.U || t.W) {
          if (t.W) {
            t = t.W;
            while (t.U)
              t = t.U;
          } else {
            t = t.U;
          }
          [e.u, t.u] = [t.u, e.u];
          [e.l, t.l] = [t.l, e.l];
          e = t;
        }
        if (this.h.U === t) {
          this.h.U = t.tt;
        } else if (this.h.W === t) {
          this.h.W = t.tt;
        }
        this.ue(t);
        const i = t.tt;
        if (t === i.U) {
          i.U = void 0;
        } else
          i.W = void 0;
        this.i -= 1;
        this.Y.ee = 0;
        return i;
      }
      oe(e, t) {
        if (e === void 0)
          return false;
        const i = this.oe(e.U, t);
        if (i)
          return true;
        if (t(e))
          return true;
        return this.oe(e.W, t);
      }
      he(e) {
        while (true) {
          const t = e.tt;
          if (t.ee === 0)
            return;
          const i = t.tt;
          if (t === i.U) {
            const s = i.W;
            if (s && s.ee === 1) {
              s.ee = t.ee = 0;
              if (i === this.Y)
                return;
              i.ee = 1;
              e = i;
              continue;
            } else if (e === t.W) {
              e.ee = 0;
              if (e.U)
                e.U.tt = t;
              if (e.W)
                e.W.tt = i;
              t.W = e.U;
              i.U = e.W;
              e.U = t;
              e.W = i;
              if (i === this.Y) {
                this.Y = e;
                this.h.tt = e;
              } else {
                const t2 = i.tt;
                if (t2.U === i) {
                  t2.U = e;
                } else
                  t2.W = e;
              }
              e.tt = i.tt;
              t.tt = e;
              i.tt = e;
              i.ee = 1;
              return {
                parentNode: t,
                grandParent: i,
                curNode: e
              };
            } else {
              t.ee = 0;
              if (i === this.Y) {
                this.Y = i.se();
              } else
                i.se();
              i.ee = 1;
            }
          } else {
            const s = i.U;
            if (s && s.ee === 1) {
              s.ee = t.ee = 0;
              if (i === this.Y)
                return;
              i.ee = 1;
              e = i;
              continue;
            } else if (e === t.U) {
              e.ee = 0;
              if (e.U)
                e.U.tt = i;
              if (e.W)
                e.W.tt = t;
              i.W = e.U;
              t.U = e.W;
              e.U = i;
              e.W = t;
              if (i === this.Y) {
                this.Y = e;
                this.h.tt = e;
              } else {
                const t2 = i.tt;
                if (t2.U === i) {
                  t2.U = e;
                } else
                  t2.W = e;
              }
              e.tt = i.tt;
              t.tt = e;
              i.tt = e;
              i.ee = 1;
              return {
                parentNode: t,
                grandParent: i,
                curNode: e
              };
            } else {
              t.ee = 0;
              if (i === this.Y) {
                this.Y = i.te();
              } else
                i.te();
              i.ee = 1;
            }
          }
          return;
        }
      }
      ne(e, t, i) {
        if (this.Y === void 0) {
          this.i += 1;
          this.Y = new this.re(e, t);
          this.Y.ee = 0;
          this.Y.tt = this.h;
          this.h.tt = this.Y;
          this.h.U = this.Y;
          this.h.W = this.Y;
          return;
        }
        let s;
        const r = this.h.U;
        const n = this.v(r.u, e);
        if (n === 0) {
          r.l = t;
          return;
        } else if (n > 0) {
          r.U = new this.re(e, t);
          r.U.tt = r;
          s = r.U;
          this.h.U = s;
        } else {
          const r2 = this.h.W;
          const n2 = this.v(r2.u, e);
          if (n2 === 0) {
            r2.l = t;
            return;
          } else if (n2 < 0) {
            r2.W = new this.re(e, t);
            r2.W.tt = r2;
            s = r2.W;
            this.h.W = s;
          } else {
            if (i !== void 0) {
              const r3 = i.o;
              if (r3 !== this.h) {
                const i2 = this.v(r3.u, e);
                if (i2 === 0) {
                  r3.l = t;
                  return;
                } else if (i2 > 0) {
                  const i3 = r3.L();
                  const n3 = this.v(i3.u, e);
                  if (n3 === 0) {
                    i3.l = t;
                    return;
                  } else if (n3 < 0) {
                    s = new this.re(e, t);
                    if (i3.W === void 0) {
                      i3.W = s;
                      s.tt = i3;
                    } else {
                      r3.U = s;
                      s.tt = r3;
                    }
                  }
                }
              }
            }
            if (s === void 0) {
              s = this.Y;
              while (true) {
                const i2 = this.v(s.u, e);
                if (i2 > 0) {
                  if (s.U === void 0) {
                    s.U = new this.re(e, t);
                    s.U.tt = s;
                    s = s.U;
                    break;
                  }
                  s = s.U;
                } else if (i2 < 0) {
                  if (s.W === void 0) {
                    s.W = new this.re(e, t);
                    s.W.tt = s;
                    s = s.W;
                    break;
                  }
                  s = s.W;
                } else {
                  s.l = t;
                  return;
                }
              }
            }
          }
        }
        this.i += 1;
        return s;
      }
      I(e, t) {
        while (e) {
          const i = this.v(e.u, t);
          if (i < 0) {
            e = e.W;
          } else if (i > 0) {
            e = e.U;
          } else
            return e;
        }
        return e || this.h;
      }
      clear() {
        this.i = 0;
        this.Y = void 0;
        this.h.tt = void 0;
        this.h.U = this.h.W = void 0;
      }
      updateKeyByIterator(e, t) {
        const i = e.o;
        if (i === this.h) {
          (0, _throwError.throwIteratorAccessError)();
        }
        if (this.i === 1) {
          i.u = t;
          return true;
        }
        if (i === this.h.U) {
          if (this.v(i.B().u, t) > 0) {
            i.u = t;
            return true;
          }
          return false;
        }
        if (i === this.h.W) {
          if (this.v(i.L().u, t) < 0) {
            i.u = t;
            return true;
          }
          return false;
        }
        const s = i.L().u;
        if (this.v(s, t) >= 0)
          return false;
        const r = i.B().u;
        if (this.v(r, t) <= 0)
          return false;
        i.u = t;
        return true;
      }
      eraseElementByPos(e) {
        if (e < 0 || e > this.i - 1) {
          throw new RangeError();
        }
        let t = 0;
        const i = this;
        this.oe(this.Y, function(s) {
          if (e === t) {
            i.V(s);
            return true;
          }
          t += 1;
          return false;
        });
        return this.i;
      }
      eraseElementByKey(e) {
        if (this.i === 0)
          return false;
        const t = this.I(this.Y, e);
        if (t === this.h)
          return false;
        this.V(t);
        return true;
      }
      eraseElementByIterator(e) {
        const t = e.o;
        if (t === this.h) {
          (0, _throwError.throwIteratorAccessError)();
        }
        const i = t.W === void 0;
        const s = e.iteratorType === 0;
        if (s) {
          if (i)
            e.next();
        } else {
          if (!i || t.U === void 0)
            e.next();
        }
        this.V(t);
        return e;
      }
      forEach(e) {
        let t = 0;
        for (const i of this)
          e(i, t++, this);
      }
      getElementByPos(e) {
        if (e < 0 || e > this.i - 1) {
          throw new RangeError();
        }
        let t;
        let i = 0;
        for (const s of this) {
          if (i === e) {
            t = s;
            break;
          }
          i += 1;
        }
        return t;
      }
      getHeight() {
        if (this.i === 0)
          return 0;
        const traversal = function(e) {
          if (!e)
            return 0;
          return Math.max(traversal(e.U), traversal(e.W)) + 1;
        };
        return traversal(this.Y);
      }
    };
    var _default = TreeContainer;
    exports2.default = _default;
  }
});

// node_modules/js-sdsl/dist/cjs/container/TreeContainer/Base/TreeIterator.js
var require_TreeIterator = __commonJS({
  "node_modules/js-sdsl/dist/cjs/container/TreeContainer/Base/TreeIterator.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "t", {
      value: true
    });
    exports2.default = void 0;
    var _ContainerBase = require_ContainerBase();
    var _throwError = require_throwError();
    var TreeIterator = class extends _ContainerBase.ContainerIterator {
      constructor(t, r, i) {
        super(i);
        this.o = t;
        this.h = r;
        if (this.iteratorType === 0) {
          this.pre = function() {
            if (this.o === this.h.U) {
              (0, _throwError.throwIteratorAccessError)();
            }
            this.o = this.o.L();
            return this;
          };
          this.next = function() {
            if (this.o === this.h) {
              (0, _throwError.throwIteratorAccessError)();
            }
            this.o = this.o.B();
            return this;
          };
        } else {
          this.pre = function() {
            if (this.o === this.h.W) {
              (0, _throwError.throwIteratorAccessError)();
            }
            this.o = this.o.B();
            return this;
          };
          this.next = function() {
            if (this.o === this.h) {
              (0, _throwError.throwIteratorAccessError)();
            }
            this.o = this.o.L();
            return this;
          };
        }
      }
      get index() {
        let t = this.o;
        const r = this.h.tt;
        if (t === this.h) {
          if (r) {
            return r.rt - 1;
          }
          return 0;
        }
        let i = 0;
        if (t.U) {
          i += t.U.rt;
        }
        while (t !== r) {
          const r2 = t.tt;
          if (t === r2.W) {
            i += 1;
            if (r2.U) {
              i += r2.U.rt;
            }
          }
          t = r2;
        }
        return i;
      }
    };
    var _default = TreeIterator;
    exports2.default = _default;
  }
});

// node_modules/js-sdsl/dist/cjs/container/TreeContainer/OrderedSet.js
var require_OrderedSet = __commonJS({
  "node_modules/js-sdsl/dist/cjs/container/TreeContainer/OrderedSet.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "t", {
      value: true
    });
    exports2.default = void 0;
    var _Base = _interopRequireDefault(require_Base2());
    var _TreeIterator = _interopRequireDefault(require_TreeIterator());
    var _throwError = require_throwError();
    function _interopRequireDefault(e) {
      return e && e.t ? e : {
        default: e
      };
    }
    var OrderedSetIterator = class _OrderedSetIterator extends _TreeIterator.default {
      constructor(e, t, r, i) {
        super(e, t, i);
        this.container = r;
      }
      get pointer() {
        if (this.o === this.h) {
          (0, _throwError.throwIteratorAccessError)();
        }
        return this.o.u;
      }
      copy() {
        return new _OrderedSetIterator(this.o, this.h, this.container, this.iteratorType);
      }
    };
    var OrderedSet = class extends _Base.default {
      constructor(e = [], t, r) {
        super(t, r);
        const i = this;
        e.forEach(function(e2) {
          i.insert(e2);
        });
      }
      *K(e) {
        if (e === void 0)
          return;
        yield* this.K(e.U);
        yield e.u;
        yield* this.K(e.W);
      }
      begin() {
        return new OrderedSetIterator(this.h.U || this.h, this.h, this);
      }
      end() {
        return new OrderedSetIterator(this.h, this.h, this);
      }
      rBegin() {
        return new OrderedSetIterator(this.h.W || this.h, this.h, this, 1);
      }
      rEnd() {
        return new OrderedSetIterator(this.h, this.h, this, 1);
      }
      front() {
        return this.h.U ? this.h.U.u : void 0;
      }
      back() {
        return this.h.W ? this.h.W.u : void 0;
      }
      insert(e, t) {
        return this.M(e, void 0, t);
      }
      find(e) {
        const t = this.I(this.Y, e);
        return new OrderedSetIterator(t, this.h, this);
      }
      lowerBound(e) {
        const t = this.X(this.Y, e);
        return new OrderedSetIterator(t, this.h, this);
      }
      upperBound(e) {
        const t = this.Z(this.Y, e);
        return new OrderedSetIterator(t, this.h, this);
      }
      reverseLowerBound(e) {
        const t = this.$(this.Y, e);
        return new OrderedSetIterator(t, this.h, this);
      }
      reverseUpperBound(e) {
        const t = this.rr(this.Y, e);
        return new OrderedSetIterator(t, this.h, this);
      }
      union(e) {
        const t = this;
        e.forEach(function(e2) {
          t.insert(e2);
        });
        return this.i;
      }
      [Symbol.iterator]() {
        return this.K(this.Y);
      }
    };
    var _default = OrderedSet;
    exports2.default = _default;
  }
});

// node_modules/js-sdsl/dist/cjs/container/TreeContainer/OrderedMap.js
var require_OrderedMap = __commonJS({
  "node_modules/js-sdsl/dist/cjs/container/TreeContainer/OrderedMap.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "t", {
      value: true
    });
    exports2.default = void 0;
    var _Base = _interopRequireDefault(require_Base2());
    var _TreeIterator = _interopRequireDefault(require_TreeIterator());
    var _throwError = require_throwError();
    function _interopRequireDefault(r) {
      return r && r.t ? r : {
        default: r
      };
    }
    var OrderedMapIterator = class _OrderedMapIterator extends _TreeIterator.default {
      constructor(r, t, e, s) {
        super(r, t, s);
        this.container = e;
      }
      get pointer() {
        if (this.o === this.h) {
          (0, _throwError.throwIteratorAccessError)();
        }
        const r = this;
        return new Proxy([], {
          get(t, e) {
            if (e === "0")
              return r.o.u;
            else if (e === "1")
              return r.o.l;
          },
          set(t, e, s) {
            if (e !== "1") {
              throw new TypeError("props must be 1");
            }
            r.o.l = s;
            return true;
          }
        });
      }
      copy() {
        return new _OrderedMapIterator(this.o, this.h, this.container, this.iteratorType);
      }
    };
    var OrderedMap = class extends _Base.default {
      constructor(r = [], t, e) {
        super(t, e);
        const s = this;
        r.forEach(function(r2) {
          s.setElement(r2[0], r2[1]);
        });
      }
      *K(r) {
        if (r === void 0)
          return;
        yield* this.K(r.U);
        yield [r.u, r.l];
        yield* this.K(r.W);
      }
      begin() {
        return new OrderedMapIterator(this.h.U || this.h, this.h, this);
      }
      end() {
        return new OrderedMapIterator(this.h, this.h, this);
      }
      rBegin() {
        return new OrderedMapIterator(this.h.W || this.h, this.h, this, 1);
      }
      rEnd() {
        return new OrderedMapIterator(this.h, this.h, this, 1);
      }
      front() {
        if (this.i === 0)
          return;
        const r = this.h.U;
        return [r.u, r.l];
      }
      back() {
        if (this.i === 0)
          return;
        const r = this.h.W;
        return [r.u, r.l];
      }
      lowerBound(r) {
        const t = this.X(this.Y, r);
        return new OrderedMapIterator(t, this.h, this);
      }
      upperBound(r) {
        const t = this.Z(this.Y, r);
        return new OrderedMapIterator(t, this.h, this);
      }
      reverseLowerBound(r) {
        const t = this.$(this.Y, r);
        return new OrderedMapIterator(t, this.h, this);
      }
      reverseUpperBound(r) {
        const t = this.rr(this.Y, r);
        return new OrderedMapIterator(t, this.h, this);
      }
      setElement(r, t, e) {
        return this.M(r, t, e);
      }
      find(r) {
        const t = this.I(this.Y, r);
        return new OrderedMapIterator(t, this.h, this);
      }
      getElementByKey(r) {
        const t = this.I(this.Y, r);
        return t.l;
      }
      union(r) {
        const t = this;
        r.forEach(function(r2) {
          t.setElement(r2[0], r2[1]);
        });
        return this.i;
      }
      [Symbol.iterator]() {
        return this.K(this.Y);
      }
    };
    var _default = OrderedMap;
    exports2.default = _default;
  }
});

// node_modules/js-sdsl/dist/cjs/utils/checkObject.js
var require_checkObject = __commonJS({
  "node_modules/js-sdsl/dist/cjs/utils/checkObject.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "t", {
      value: true
    });
    exports2.default = checkObject;
    function checkObject(e) {
      const t = typeof e;
      return t === "object" && e !== null || t === "function";
    }
  }
});

// node_modules/js-sdsl/dist/cjs/container/HashContainer/Base/index.js
var require_Base3 = __commonJS({
  "node_modules/js-sdsl/dist/cjs/container/HashContainer/Base/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "t", {
      value: true
    });
    exports2.HashContainerIterator = exports2.HashContainer = void 0;
    var _ContainerBase = require_ContainerBase();
    var _checkObject = _interopRequireDefault(require_checkObject());
    var _throwError = require_throwError();
    function _interopRequireDefault(t) {
      return t && t.t ? t : {
        default: t
      };
    }
    var HashContainerIterator = class extends _ContainerBase.ContainerIterator {
      constructor(t, e, i) {
        super(i);
        this.o = t;
        this.h = e;
        if (this.iteratorType === 0) {
          this.pre = function() {
            if (this.o.L === this.h) {
              (0, _throwError.throwIteratorAccessError)();
            }
            this.o = this.o.L;
            return this;
          };
          this.next = function() {
            if (this.o === this.h) {
              (0, _throwError.throwIteratorAccessError)();
            }
            this.o = this.o.B;
            return this;
          };
        } else {
          this.pre = function() {
            if (this.o.B === this.h) {
              (0, _throwError.throwIteratorAccessError)();
            }
            this.o = this.o.B;
            return this;
          };
          this.next = function() {
            if (this.o === this.h) {
              (0, _throwError.throwIteratorAccessError)();
            }
            this.o = this.o.L;
            return this;
          };
        }
      }
    };
    exports2.HashContainerIterator = HashContainerIterator;
    var HashContainer = class extends _ContainerBase.Container {
      constructor() {
        super();
        this.H = [];
        this.g = {};
        this.HASH_TAG = Symbol("@@HASH_TAG");
        Object.setPrototypeOf(this.g, null);
        this.h = {};
        this.h.L = this.h.B = this.p = this._ = this.h;
      }
      V(t) {
        const { L: e, B: i } = t;
        e.B = i;
        i.L = e;
        if (t === this.p) {
          this.p = i;
        }
        if (t === this._) {
          this._ = e;
        }
        this.i -= 1;
      }
      M(t, e, i) {
        if (i === void 0)
          i = (0, _checkObject.default)(t);
        let s;
        if (i) {
          const i2 = t[this.HASH_TAG];
          if (i2 !== void 0) {
            this.H[i2].l = e;
            return this.i;
          }
          Object.defineProperty(t, this.HASH_TAG, {
            value: this.H.length,
            configurable: true
          });
          s = {
            u: t,
            l: e,
            L: this._,
            B: this.h
          };
          this.H.push(s);
        } else {
          const i2 = this.g[t];
          if (i2) {
            i2.l = e;
            return this.i;
          }
          s = {
            u: t,
            l: e,
            L: this._,
            B: this.h
          };
          this.g[t] = s;
        }
        if (this.i === 0) {
          this.p = s;
          this.h.B = s;
        } else {
          this._.B = s;
        }
        this._ = s;
        this.h.L = s;
        return ++this.i;
      }
      I(t, e) {
        if (e === void 0)
          e = (0, _checkObject.default)(t);
        if (e) {
          const e2 = t[this.HASH_TAG];
          if (e2 === void 0)
            return this.h;
          return this.H[e2];
        } else {
          return this.g[t] || this.h;
        }
      }
      clear() {
        const t = this.HASH_TAG;
        this.H.forEach(function(e) {
          delete e.u[t];
        });
        this.H = [];
        this.g = {};
        Object.setPrototypeOf(this.g, null);
        this.i = 0;
        this.p = this._ = this.h.L = this.h.B = this.h;
      }
      eraseElementByKey(t, e) {
        let i;
        if (e === void 0)
          e = (0, _checkObject.default)(t);
        if (e) {
          const e2 = t[this.HASH_TAG];
          if (e2 === void 0)
            return false;
          delete t[this.HASH_TAG];
          i = this.H[e2];
          delete this.H[e2];
        } else {
          i = this.g[t];
          if (i === void 0)
            return false;
          delete this.g[t];
        }
        this.V(i);
        return true;
      }
      eraseElementByIterator(t) {
        const e = t.o;
        if (e === this.h) {
          (0, _throwError.throwIteratorAccessError)();
        }
        this.V(e);
        return t.next();
      }
      eraseElementByPos(t) {
        if (t < 0 || t > this.i - 1) {
          throw new RangeError();
        }
        let e = this.p;
        while (t--) {
          e = e.B;
        }
        this.V(e);
        return this.i;
      }
    };
    exports2.HashContainer = HashContainer;
  }
});

// node_modules/js-sdsl/dist/cjs/container/HashContainer/HashSet.js
var require_HashSet = __commonJS({
  "node_modules/js-sdsl/dist/cjs/container/HashContainer/HashSet.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "t", {
      value: true
    });
    exports2.default = void 0;
    var _Base = require_Base3();
    var _throwError = require_throwError();
    var HashSetIterator = class _HashSetIterator extends _Base.HashContainerIterator {
      constructor(t, e, r, s) {
        super(t, e, s);
        this.container = r;
      }
      get pointer() {
        if (this.o === this.h) {
          (0, _throwError.throwIteratorAccessError)();
        }
        return this.o.u;
      }
      copy() {
        return new _HashSetIterator(this.o, this.h, this.container, this.iteratorType);
      }
    };
    var HashSet = class extends _Base.HashContainer {
      constructor(t = []) {
        super();
        const e = this;
        t.forEach(function(t2) {
          e.insert(t2);
        });
      }
      begin() {
        return new HashSetIterator(this.p, this.h, this);
      }
      end() {
        return new HashSetIterator(this.h, this.h, this);
      }
      rBegin() {
        return new HashSetIterator(this._, this.h, this, 1);
      }
      rEnd() {
        return new HashSetIterator(this.h, this.h, this, 1);
      }
      front() {
        return this.p.u;
      }
      back() {
        return this._.u;
      }
      insert(t, e) {
        return this.M(t, void 0, e);
      }
      getElementByPos(t) {
        if (t < 0 || t > this.i - 1) {
          throw new RangeError();
        }
        let e = this.p;
        while (t--) {
          e = e.B;
        }
        return e.u;
      }
      find(t, e) {
        const r = this.I(t, e);
        return new HashSetIterator(r, this.h, this);
      }
      forEach(t) {
        let e = 0;
        let r = this.p;
        while (r !== this.h) {
          t(r.u, e++, this);
          r = r.B;
        }
      }
      [Symbol.iterator]() {
        return function* () {
          let t = this.p;
          while (t !== this.h) {
            yield t.u;
            t = t.B;
          }
        }.bind(this)();
      }
    };
    var _default = HashSet;
    exports2.default = _default;
  }
});

// node_modules/js-sdsl/dist/cjs/container/HashContainer/HashMap.js
var require_HashMap = __commonJS({
  "node_modules/js-sdsl/dist/cjs/container/HashContainer/HashMap.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "t", {
      value: true
    });
    exports2.default = void 0;
    var _Base = require_Base3();
    var _checkObject = _interopRequireDefault(require_checkObject());
    var _throwError = require_throwError();
    function _interopRequireDefault(t) {
      return t && t.t ? t : {
        default: t
      };
    }
    var HashMapIterator = class _HashMapIterator extends _Base.HashContainerIterator {
      constructor(t, e, r, s) {
        super(t, e, s);
        this.container = r;
      }
      get pointer() {
        if (this.o === this.h) {
          (0, _throwError.throwIteratorAccessError)();
        }
        const t = this;
        return new Proxy([], {
          get(e, r) {
            if (r === "0")
              return t.o.u;
            else if (r === "1")
              return t.o.l;
          },
          set(e, r, s) {
            if (r !== "1") {
              throw new TypeError("props must be 1");
            }
            t.o.l = s;
            return true;
          }
        });
      }
      copy() {
        return new _HashMapIterator(this.o, this.h, this.container, this.iteratorType);
      }
    };
    var HashMap = class extends _Base.HashContainer {
      constructor(t = []) {
        super();
        const e = this;
        t.forEach(function(t2) {
          e.setElement(t2[0], t2[1]);
        });
      }
      begin() {
        return new HashMapIterator(this.p, this.h, this);
      }
      end() {
        return new HashMapIterator(this.h, this.h, this);
      }
      rBegin() {
        return new HashMapIterator(this._, this.h, this, 1);
      }
      rEnd() {
        return new HashMapIterator(this.h, this.h, this, 1);
      }
      front() {
        if (this.i === 0)
          return;
        return [this.p.u, this.p.l];
      }
      back() {
        if (this.i === 0)
          return;
        return [this._.u, this._.l];
      }
      setElement(t, e, r) {
        return this.M(t, e, r);
      }
      getElementByKey(t, e) {
        if (e === void 0)
          e = (0, _checkObject.default)(t);
        if (e) {
          const e2 = t[this.HASH_TAG];
          return e2 !== void 0 ? this.H[e2].l : void 0;
        }
        const r = this.g[t];
        return r ? r.l : void 0;
      }
      getElementByPos(t) {
        if (t < 0 || t > this.i - 1) {
          throw new RangeError();
        }
        let e = this.p;
        while (t--) {
          e = e.B;
        }
        return [e.u, e.l];
      }
      find(t, e) {
        const r = this.I(t, e);
        return new HashMapIterator(r, this.h, this);
      }
      forEach(t) {
        let e = 0;
        let r = this.p;
        while (r !== this.h) {
          t([r.u, r.l], e++, this);
          r = r.B;
        }
      }
      [Symbol.iterator]() {
        return function* () {
          let t = this.p;
          while (t !== this.h) {
            yield [t.u, t.l];
            t = t.B;
          }
        }.bind(this)();
      }
    };
    var _default = HashMap;
    exports2.default = _default;
  }
});

// node_modules/js-sdsl/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/js-sdsl/dist/cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "t", {
      value: true
    });
    Object.defineProperty(exports2, "Deque", {
      enumerable: true,
      get: function() {
        return _Deque.default;
      }
    });
    Object.defineProperty(exports2, "HashMap", {
      enumerable: true,
      get: function() {
        return _HashMap.default;
      }
    });
    Object.defineProperty(exports2, "HashSet", {
      enumerable: true,
      get: function() {
        return _HashSet.default;
      }
    });
    Object.defineProperty(exports2, "LinkList", {
      enumerable: true,
      get: function() {
        return _LinkList.default;
      }
    });
    Object.defineProperty(exports2, "OrderedMap", {
      enumerable: true,
      get: function() {
        return _OrderedMap.default;
      }
    });
    Object.defineProperty(exports2, "OrderedSet", {
      enumerable: true,
      get: function() {
        return _OrderedSet.default;
      }
    });
    Object.defineProperty(exports2, "PriorityQueue", {
      enumerable: true,
      get: function() {
        return _PriorityQueue.default;
      }
    });
    Object.defineProperty(exports2, "Queue", {
      enumerable: true,
      get: function() {
        return _Queue.default;
      }
    });
    Object.defineProperty(exports2, "Stack", {
      enumerable: true,
      get: function() {
        return _Stack.default;
      }
    });
    Object.defineProperty(exports2, "Vector", {
      enumerable: true,
      get: function() {
        return _Vector.default;
      }
    });
    var _Stack = _interopRequireDefault(require_Stack());
    var _Queue = _interopRequireDefault(require_Queue());
    var _PriorityQueue = _interopRequireDefault(require_PriorityQueue());
    var _Vector = _interopRequireDefault(require_Vector());
    var _LinkList = _interopRequireDefault(require_LinkList());
    var _Deque = _interopRequireDefault(require_Deque());
    var _OrderedSet = _interopRequireDefault(require_OrderedSet());
    var _OrderedMap = _interopRequireDefault(require_OrderedMap());
    var _HashSet = _interopRequireDefault(require_HashSet());
    var _HashMap = _interopRequireDefault(require_HashMap());
    function _interopRequireDefault(e) {
      return e && e.t ? e : {
        default: e
      };
    }
  }
});

// node_modules/number-allocator/lib/number-allocator.js
var require_number_allocator = __commonJS({
  "node_modules/number-allocator/lib/number-allocator.js"(exports2, module2) {
    "use strict";
    var SortedSet = require_cjs().OrderedSet;
    var debugTrace = require_src()("number-allocator:trace");
    var debugError = require_src()("number-allocator:error");
    function Interval(low, high) {
      this.low = low;
      this.high = high;
    }
    Interval.prototype.equals = function(other) {
      return this.low === other.low && this.high === other.high;
    };
    Interval.prototype.compare = function(other) {
      if (this.low < other.low && this.high < other.low)
        return -1;
      if (other.low < this.low && other.high < this.low)
        return 1;
      return 0;
    };
    function NumberAllocator(min, max) {
      if (!(this instanceof NumberAllocator)) {
        return new NumberAllocator(min, max);
      }
      this.min = min;
      this.max = max;
      this.ss = new SortedSet(
        [],
        (lhs, rhs) => {
          return lhs.compare(rhs);
        }
      );
      debugTrace("Create");
      this.clear();
    }
    NumberAllocator.prototype.firstVacant = function() {
      if (this.ss.size() === 0)
        return null;
      return this.ss.front().low;
    };
    NumberAllocator.prototype.alloc = function() {
      if (this.ss.size() === 0) {
        debugTrace("alloc():empty");
        return null;
      }
      const it = this.ss.begin();
      const low = it.pointer.low;
      const high = it.pointer.high;
      const num = low;
      if (num + 1 <= high) {
        this.ss.updateKeyByIterator(it, new Interval(low + 1, high));
      } else {
        this.ss.eraseElementByPos(0);
      }
      debugTrace("alloc():" + num);
      return num;
    };
    NumberAllocator.prototype.use = function(num) {
      const key = new Interval(num, num);
      const it = this.ss.lowerBound(key);
      if (!it.equals(this.ss.end())) {
        const low = it.pointer.low;
        const high = it.pointer.high;
        if (it.pointer.equals(key)) {
          this.ss.eraseElementByIterator(it);
          debugTrace("use():" + num);
          return true;
        }
        if (low > num)
          return false;
        if (low === num) {
          this.ss.updateKeyByIterator(it, new Interval(low + 1, high));
          debugTrace("use():" + num);
          return true;
        }
        if (high === num) {
          this.ss.updateKeyByIterator(it, new Interval(low, high - 1));
          debugTrace("use():" + num);
          return true;
        }
        this.ss.updateKeyByIterator(it, new Interval(num + 1, high));
        this.ss.insert(new Interval(low, num - 1));
        debugTrace("use():" + num);
        return true;
      }
      debugTrace("use():failed");
      return false;
    };
    NumberAllocator.prototype.free = function(num) {
      if (num < this.min || num > this.max) {
        debugError("free():" + num + " is out of range");
        return;
      }
      const key = new Interval(num, num);
      const it = this.ss.upperBound(key);
      if (it.equals(this.ss.end())) {
        if (it.equals(this.ss.begin())) {
          this.ss.insert(key);
          return;
        }
        it.pre();
        const low = it.pointer.high;
        const high = it.pointer.high;
        if (high + 1 === num) {
          this.ss.updateKeyByIterator(it, new Interval(low, num));
        } else {
          this.ss.insert(key);
        }
      } else {
        if (it.equals(this.ss.begin())) {
          if (num + 1 === it.pointer.low) {
            const high = it.pointer.high;
            this.ss.updateKeyByIterator(it, new Interval(num, high));
          } else {
            this.ss.insert(key);
          }
        } else {
          const rLow = it.pointer.low;
          const rHigh = it.pointer.high;
          it.pre();
          const lLow = it.pointer.low;
          const lHigh = it.pointer.high;
          if (lHigh + 1 === num) {
            if (num + 1 === rLow) {
              this.ss.eraseElementByIterator(it);
              this.ss.updateKeyByIterator(it, new Interval(lLow, rHigh));
            } else {
              this.ss.updateKeyByIterator(it, new Interval(lLow, num));
            }
          } else {
            if (num + 1 === rLow) {
              this.ss.eraseElementByIterator(it.next());
              this.ss.insert(new Interval(num, rHigh));
            } else {
              this.ss.insert(key);
            }
          }
        }
      }
      debugTrace("free():" + num);
    };
    NumberAllocator.prototype.clear = function() {
      debugTrace("clear()");
      this.ss.clear();
      this.ss.insert(new Interval(this.min, this.max));
    };
    NumberAllocator.prototype.intervalCount = function() {
      return this.ss.size();
    };
    NumberAllocator.prototype.dump = function() {
      console.log("length:" + this.ss.size());
      for (const element of this.ss) {
        console.log(element);
      }
    };
    module2.exports = NumberAllocator;
  }
});

// node_modules/number-allocator/index.js
var require_number_allocator2 = __commonJS({
  "node_modules/number-allocator/index.js"(exports2, module2) {
    var NumberAllocator = require_number_allocator();
    module2.exports.NumberAllocator = NumberAllocator;
  }
});

// node_modules/mqtt/build/lib/topic-alias-send.js
var require_topic_alias_send = __commonJS({
  "node_modules/mqtt/build/lib/topic-alias-send.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var lru_cache_1 = require_commonjs();
    var number_allocator_1 = require_number_allocator2();
    var TopicAliasSend = class {
      constructor(max) {
        if (max > 0) {
          this.aliasToTopic = new lru_cache_1.LRUCache({ max });
          this.topicToAlias = {};
          this.numberAllocator = new number_allocator_1.NumberAllocator(1, max);
          this.max = max;
          this.length = 0;
        }
      }
      put(topic, alias) {
        if (alias === 0 || alias > this.max) {
          return false;
        }
        const entry = this.aliasToTopic.get(alias);
        if (entry) {
          delete this.topicToAlias[entry];
        }
        this.aliasToTopic.set(alias, topic);
        this.topicToAlias[topic] = alias;
        this.numberAllocator.use(alias);
        this.length = this.aliasToTopic.size;
        return true;
      }
      getTopicByAlias(alias) {
        return this.aliasToTopic.get(alias);
      }
      getAliasByTopic(topic) {
        const alias = this.topicToAlias[topic];
        if (typeof alias !== "undefined") {
          this.aliasToTopic.get(alias);
        }
        return alias;
      }
      clear() {
        this.aliasToTopic.clear();
        this.topicToAlias = {};
        this.numberAllocator.clear();
        this.length = 0;
      }
      getLruAlias() {
        const alias = this.numberAllocator.firstVacant();
        if (alias)
          return alias;
        return [...this.aliasToTopic.keys()][this.aliasToTopic.size - 1];
      }
    };
    exports2.default = TopicAliasSend;
  }
});

// node_modules/mqtt/build/lib/handlers/connack.js
var require_connack = __commonJS({
  "node_modules/mqtt/build/lib/handlers/connack.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var ack_1 = require_ack();
    var topic_alias_send_1 = __importDefault(require_topic_alias_send());
    var shared_1 = require_shared();
    var handleConnack = (client, packet) => {
      client.log("_handleConnack");
      const { options } = client;
      const version = options.protocolVersion;
      const rc = version === 5 ? packet.reasonCode : packet.returnCode;
      clearTimeout(client["connackTimer"]);
      delete client["topicAliasSend"];
      if (packet.properties) {
        if (packet.properties.topicAliasMaximum) {
          if (packet.properties.topicAliasMaximum > 65535) {
            client.emit("error", new Error("topicAliasMaximum from broker is out of range"));
            return;
          }
          if (packet.properties.topicAliasMaximum > 0) {
            client["topicAliasSend"] = new topic_alias_send_1.default(packet.properties.topicAliasMaximum);
          }
        }
        if (packet.properties.serverKeepAlive && options.keepalive) {
          options.keepalive = packet.properties.serverKeepAlive;
        }
        if (packet.properties.maximumPacketSize) {
          if (!options.properties) {
            options.properties = {};
          }
          options.properties.maximumPacketSize = packet.properties.maximumPacketSize;
        }
      }
      if (rc === 0) {
        client.reconnecting = false;
        client["_onConnect"](packet);
      } else if (rc > 0) {
        const err = new shared_1.ErrorWithReasonCode(`Connection refused: ${ack_1.ReasonCodes[rc]}`, rc);
        client.emit("error", err);
        if (client.options.reconnectOnConnackError) {
          client["_cleanUp"](true);
        }
      }
    };
    exports2.default = handleConnack;
  }
});

// node_modules/mqtt/build/lib/handlers/pubrel.js
var require_pubrel = __commonJS({
  "node_modules/mqtt/build/lib/handlers/pubrel.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var handlePubrel = (client, packet, done) => {
      client.log("handling pubrel packet");
      const callback = typeof done !== "undefined" ? done : client.noop;
      const { messageId } = packet;
      const comp = { cmd: "pubcomp", messageId };
      client.incomingStore.get(packet, (err, pub) => {
        if (!err) {
          client.emit("message", pub.topic, pub.payload, pub);
          client.handleMessage(pub, (err2) => {
            if (err2) {
              return callback(err2);
            }
            client.incomingStore.del(pub, client.noop);
            client["_sendPacket"](comp, callback);
          });
        } else {
          client["_sendPacket"](comp, callback);
        }
      });
    };
    exports2.default = handlePubrel;
  }
});

// node_modules/mqtt/build/lib/handlers/index.js
var require_handlers = __commonJS({
  "node_modules/mqtt/build/lib/handlers/index.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var publish_1 = __importDefault(require_publish());
    var auth_1 = __importDefault(require_auth());
    var connack_1 = __importDefault(require_connack());
    var ack_1 = __importDefault(require_ack());
    var pubrel_1 = __importDefault(require_pubrel());
    var handle = (client, packet, done) => {
      const { options } = client;
      if (options.protocolVersion === 5 && options.properties && options.properties.maximumPacketSize && options.properties.maximumPacketSize < packet.length) {
        client.emit("error", new Error(`exceeding packets size ${packet.cmd}`));
        client.end({
          reasonCode: 149,
          properties: { reasonString: "Maximum packet size was exceeded" }
        });
        return client;
      }
      client.log("_handlePacket :: emitting packetreceive");
      client.emit("packetreceive", packet);
      switch (packet.cmd) {
        case "publish":
          (0, publish_1.default)(client, packet, done);
          break;
        case "puback":
        case "pubrec":
        case "pubcomp":
        case "suback":
        case "unsuback":
          client.reschedulePing();
          (0, ack_1.default)(client, packet);
          done();
          break;
        case "pubrel":
          client.reschedulePing();
          (0, pubrel_1.default)(client, packet, done);
          break;
        case "connack":
          (0, connack_1.default)(client, packet);
          done();
          break;
        case "auth":
          client.reschedulePing();
          (0, auth_1.default)(client, packet);
          done();
          break;
        case "pingresp":
          client.log("_handlePacket :: received pingresp");
          client.reschedulePing(true);
          done();
          break;
        case "disconnect":
          client.emit("disconnect", packet);
          done();
          break;
        default:
          client.log("_handlePacket :: unknown command");
          done();
          break;
      }
    };
    exports2.default = handle;
  }
});

// node_modules/mqtt/build/lib/TypedEmitter.js
var require_TypedEmitter = __commonJS({
  "node_modules/mqtt/build/lib/TypedEmitter.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypedEventEmitter = void 0;
    var events_1 = __importDefault(require("events"));
    var shared_1 = require_shared();
    var TypedEventEmitter = class {
    };
    exports2.TypedEventEmitter = TypedEventEmitter;
    (0, shared_1.applyMixin)(TypedEventEmitter, events_1.default);
  }
});

// node_modules/mqtt/build/lib/is-browser.js
var require_is_browser = __commonJS({
  "node_modules/mqtt/build/lib/is-browser.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isReactNativeBrowser = exports2.isWebWorker = void 0;
    var isStandardBrowserEnv = () => {
      var _a;
      if (typeof window !== "undefined") {
        const electronRenderCheck = typeof navigator !== "undefined" && ((_a = navigator.userAgent) === null || _a === void 0 ? void 0 : _a.toLowerCase().indexOf(" electron/")) > -1;
        if (electronRenderCheck && (process === null || process === void 0 ? void 0 : process.versions)) {
          const electronMainCheck = Object.prototype.hasOwnProperty.call(process.versions, "electron");
          return !electronMainCheck;
        }
        return typeof window.document !== "undefined";
      }
      return false;
    };
    var isWebWorkerEnv = () => {
      var _a, _b;
      return Boolean(typeof self === "object" && ((_b = (_a = self === null || self === void 0 ? void 0 : self.constructor) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.includes("WorkerGlobalScope")));
    };
    var isReactNativeEnv = () => typeof navigator !== "undefined" && navigator.product === "ReactNative";
    var isBrowser = isStandardBrowserEnv() || isWebWorkerEnv() || isReactNativeEnv();
    exports2.isWebWorker = isWebWorkerEnv();
    exports2.isReactNativeBrowser = isReactNativeEnv();
    exports2.default = isBrowser;
  }
});

// node_modules/fast-unique-numbers/build/node/factories/add-unique-number.js
var require_add_unique_number = __commonJS({
  "node_modules/fast-unique-numbers/build/node/factories/add-unique-number.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.createAddUniqueNumber = void 0;
    var createAddUniqueNumber = (generateUniqueNumber) => {
      return (set) => {
        const number = generateUniqueNumber(set);
        set.add(number);
        return number;
      };
    };
    exports2.createAddUniqueNumber = createAddUniqueNumber;
  }
});

// node_modules/fast-unique-numbers/build/node/factories/cache.js
var require_cache = __commonJS({
  "node_modules/fast-unique-numbers/build/node/factories/cache.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.createCache = void 0;
    var createCache = (lastNumberWeakMap) => {
      return (collection, nextNumber) => {
        lastNumberWeakMap.set(collection, nextNumber);
        return nextNumber;
      };
    };
    exports2.createCache = createCache;
  }
});

// node_modules/fast-unique-numbers/build/node/factories/generate-unique-number.js
var require_generate_unique_number = __commonJS({
  "node_modules/fast-unique-numbers/build/node/factories/generate-unique-number.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.createGenerateUniqueNumber = void 0;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER === void 0 ? 9007199254740991 : Number.MAX_SAFE_INTEGER;
    var TWO_TO_THE_POWER_OF_TWENTY_NINE = 536870912;
    var TWO_TO_THE_POWER_OF_THIRTY = TWO_TO_THE_POWER_OF_TWENTY_NINE * 2;
    var createGenerateUniqueNumber = (cache, lastNumberWeakMap) => {
      return (collection) => {
        const lastNumber = lastNumberWeakMap.get(collection);
        let nextNumber = lastNumber === void 0 ? collection.size : lastNumber < TWO_TO_THE_POWER_OF_THIRTY ? lastNumber + 1 : 0;
        if (!collection.has(nextNumber)) {
          return cache(collection, nextNumber);
        }
        if (collection.size < TWO_TO_THE_POWER_OF_TWENTY_NINE) {
          while (collection.has(nextNumber)) {
            nextNumber = Math.floor(Math.random() * TWO_TO_THE_POWER_OF_THIRTY);
          }
          return cache(collection, nextNumber);
        }
        if (collection.size > MAX_SAFE_INTEGER) {
          throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
        }
        while (collection.has(nextNumber)) {
          nextNumber = Math.floor(Math.random() * MAX_SAFE_INTEGER);
        }
        return cache(collection, nextNumber);
      };
    };
    exports2.createGenerateUniqueNumber = createGenerateUniqueNumber;
  }
});

// node_modules/fast-unique-numbers/build/node/types/add-unique-number-factory.js
var require_add_unique_number_factory = __commonJS({
  "node_modules/fast-unique-numbers/build/node/types/add-unique-number-factory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
  }
});

// node_modules/fast-unique-numbers/build/node/types/add-unique-number-function.js
var require_add_unique_number_function = __commonJS({
  "node_modules/fast-unique-numbers/build/node/types/add-unique-number-function.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
  }
});

// node_modules/fast-unique-numbers/build/node/types/cache-factory.js
var require_cache_factory = __commonJS({
  "node_modules/fast-unique-numbers/build/node/types/cache-factory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
  }
});

// node_modules/fast-unique-numbers/build/node/types/cache-function.js
var require_cache_function = __commonJS({
  "node_modules/fast-unique-numbers/build/node/types/cache-function.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
  }
});

// node_modules/fast-unique-numbers/build/node/types/generate-unique-number-factory.js
var require_generate_unique_number_factory = __commonJS({
  "node_modules/fast-unique-numbers/build/node/types/generate-unique-number-factory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
  }
});

// node_modules/fast-unique-numbers/build/node/types/generate-unique-number-function.js
var require_generate_unique_number_function = __commonJS({
  "node_modules/fast-unique-numbers/build/node/types/generate-unique-number-function.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
  }
});

// node_modules/fast-unique-numbers/build/node/types/index.js
var require_types = __commonJS({
  "node_modules/fast-unique-numbers/build/node/types/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    var _addUniqueNumberFactory = require_add_unique_number_factory();
    Object.keys(_addUniqueNumberFactory).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports2 && exports2[key] === _addUniqueNumberFactory[key])
        return;
      Object.defineProperty(exports2, key, {
        enumerable: true,
        get: function() {
          return _addUniqueNumberFactory[key];
        }
      });
    });
    var _addUniqueNumberFunction = require_add_unique_number_function();
    Object.keys(_addUniqueNumberFunction).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports2 && exports2[key] === _addUniqueNumberFunction[key])
        return;
      Object.defineProperty(exports2, key, {
        enumerable: true,
        get: function() {
          return _addUniqueNumberFunction[key];
        }
      });
    });
    var _cacheFactory = require_cache_factory();
    Object.keys(_cacheFactory).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports2 && exports2[key] === _cacheFactory[key])
        return;
      Object.defineProperty(exports2, key, {
        enumerable: true,
        get: function() {
          return _cacheFactory[key];
        }
      });
    });
    var _cacheFunction = require_cache_function();
    Object.keys(_cacheFunction).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports2 && exports2[key] === _cacheFunction[key])
        return;
      Object.defineProperty(exports2, key, {
        enumerable: true,
        get: function() {
          return _cacheFunction[key];
        }
      });
    });
    var _generateUniqueNumberFactory = require_generate_unique_number_factory();
    Object.keys(_generateUniqueNumberFactory).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports2 && exports2[key] === _generateUniqueNumberFactory[key])
        return;
      Object.defineProperty(exports2, key, {
        enumerable: true,
        get: function() {
          return _generateUniqueNumberFactory[key];
        }
      });
    });
    var _generateUniqueNumberFunction = require_generate_unique_number_function();
    Object.keys(_generateUniqueNumberFunction).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports2 && exports2[key] === _generateUniqueNumberFunction[key])
        return;
      Object.defineProperty(exports2, key, {
        enumerable: true,
        get: function() {
          return _generateUniqueNumberFunction[key];
        }
      });
    });
  }
});

// node_modules/fast-unique-numbers/build/node/module.js
var require_module = __commonJS({
  "node_modules/fast-unique-numbers/build/node/module.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    var _exportNames = {
      addUniqueNumber: true,
      generateUniqueNumber: true
    };
    exports2.generateUniqueNumber = exports2.addUniqueNumber = void 0;
    var _addUniqueNumber = require_add_unique_number();
    var _cache = require_cache();
    var _generateUniqueNumber = require_generate_unique_number();
    var _index = require_types();
    Object.keys(_index).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key))
        return;
      if (key in exports2 && exports2[key] === _index[key])
        return;
      Object.defineProperty(exports2, key, {
        enumerable: true,
        get: function() {
          return _index[key];
        }
      });
    });
    var LAST_NUMBER_WEAK_MAP = /* @__PURE__ */ new WeakMap();
    var cache = (0, _cache.createCache)(LAST_NUMBER_WEAK_MAP);
    var generateUniqueNumber = exports2.generateUniqueNumber = (0, _generateUniqueNumber.createGenerateUniqueNumber)(cache, LAST_NUMBER_WEAK_MAP);
    var addUniqueNumber = exports2.addUniqueNumber = (0, _addUniqueNumber.createAddUniqueNumber)(generateUniqueNumber);
  }
});

// node_modules/worker-timers-broker/build/es5/bundle.js
var require_bundle = __commonJS({
  "node_modules/worker-timers-broker/build/es5/bundle.js"(exports2, module2) {
    (function(global2, factory) {
      typeof exports2 === "object" && typeof module2 !== "undefined" ? factory(exports2, require_module()) : typeof define === "function" && define.amd ? define(["exports", "fast-unique-numbers"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.workerTimersBroker = {}, global2.fastUniqueNumbers));
    })(exports2, function(exports3, fastUniqueNumbers) {
      "use strict";
      var isCallNotification = function isCallNotification2(message) {
        return message.method !== void 0 && message.method === "call";
      };
      var isClearResponse = function isClearResponse2(message) {
        return message.error === null && typeof message.id === "number";
      };
      var load = function load2(url) {
        var scheduledIntervalFunctions = /* @__PURE__ */ new Map([[0, function() {
        }]]);
        var scheduledTimeoutFunctions = /* @__PURE__ */ new Map([[0, function() {
        }]]);
        var unrespondedRequests = /* @__PURE__ */ new Map();
        var worker = new Worker(url);
        worker.addEventListener("message", function(_ref) {
          var data = _ref.data;
          if (isCallNotification(data)) {
            var _data$params = data.params, timerId = _data$params.timerId, timerType = _data$params.timerType;
            if (timerType === "interval") {
              var idOrFunc = scheduledIntervalFunctions.get(timerId);
              if (typeof idOrFunc === "number") {
                var timerIdAndTimerType = unrespondedRequests.get(idOrFunc);
                if (timerIdAndTimerType === void 0 || timerIdAndTimerType.timerId !== timerId || timerIdAndTimerType.timerType !== timerType) {
                  throw new Error("The timer is in an undefined state.");
                }
              } else if (typeof idOrFunc !== "undefined") {
                idOrFunc();
              } else {
                throw new Error("The timer is in an undefined state.");
              }
            } else if (timerType === "timeout") {
              var _idOrFunc = scheduledTimeoutFunctions.get(timerId);
              if (typeof _idOrFunc === "number") {
                var _timerIdAndTimerType = unrespondedRequests.get(_idOrFunc);
                if (_timerIdAndTimerType === void 0 || _timerIdAndTimerType.timerId !== timerId || _timerIdAndTimerType.timerType !== timerType) {
                  throw new Error("The timer is in an undefined state.");
                }
              } else if (typeof _idOrFunc !== "undefined") {
                _idOrFunc();
                scheduledTimeoutFunctions["delete"](timerId);
              } else {
                throw new Error("The timer is in an undefined state.");
              }
            }
          } else if (isClearResponse(data)) {
            var id = data.id;
            var _timerIdAndTimerType2 = unrespondedRequests.get(id);
            if (_timerIdAndTimerType2 === void 0) {
              throw new Error("The timer is in an undefined state.");
            }
            var _timerId = _timerIdAndTimerType2.timerId, _timerType = _timerIdAndTimerType2.timerType;
            unrespondedRequests["delete"](id);
            if (_timerType === "interval") {
              scheduledIntervalFunctions["delete"](_timerId);
            } else {
              scheduledTimeoutFunctions["delete"](_timerId);
            }
          } else {
            var message = data.error.message;
            throw new Error(message);
          }
        });
        var clearInterval2 = function clearInterval3(timerId) {
          var id = fastUniqueNumbers.generateUniqueNumber(unrespondedRequests);
          unrespondedRequests.set(id, {
            timerId,
            timerType: "interval"
          });
          scheduledIntervalFunctions.set(timerId, id);
          worker.postMessage({
            id,
            method: "clear",
            params: {
              timerId,
              timerType: "interval"
            }
          });
        };
        var clearTimeout2 = function clearTimeout3(timerId) {
          var id = fastUniqueNumbers.generateUniqueNumber(unrespondedRequests);
          unrespondedRequests.set(id, {
            timerId,
            timerType: "timeout"
          });
          scheduledTimeoutFunctions.set(timerId, id);
          worker.postMessage({
            id,
            method: "clear",
            params: {
              timerId,
              timerType: "timeout"
            }
          });
        };
        var setInterval2 = function setInterval3(func) {
          var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          var timerId = fastUniqueNumbers.generateUniqueNumber(scheduledIntervalFunctions);
          scheduledIntervalFunctions.set(timerId, function() {
            func();
            if (typeof scheduledIntervalFunctions.get(timerId) === "function") {
              worker.postMessage({
                id: null,
                method: "set",
                params: {
                  delay,
                  now: performance.now(),
                  timerId,
                  timerType: "interval"
                }
              });
            }
          });
          worker.postMessage({
            id: null,
            method: "set",
            params: {
              delay,
              now: performance.now(),
              timerId,
              timerType: "interval"
            }
          });
          return timerId;
        };
        var setTimeout2 = function setTimeout3(func) {
          var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          var timerId = fastUniqueNumbers.generateUniqueNumber(scheduledTimeoutFunctions);
          scheduledTimeoutFunctions.set(timerId, func);
          worker.postMessage({
            id: null,
            method: "set",
            params: {
              delay,
              now: performance.now(),
              timerId,
              timerType: "timeout"
            }
          });
          return timerId;
        };
        return {
          clearInterval: clearInterval2,
          clearTimeout: clearTimeout2,
          setInterval: setInterval2,
          setTimeout: setTimeout2
        };
      };
      exports3.load = load;
    });
  }
});

// node_modules/worker-timers/build/es5/bundle.js
var require_bundle2 = __commonJS({
  "node_modules/worker-timers/build/es5/bundle.js"(exports2, module2) {
    (function(global2, factory) {
      typeof exports2 === "object" && typeof module2 !== "undefined" ? factory(exports2, require_bundle()) : typeof define === "function" && define.amd ? define(["exports", "worker-timers-broker"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.workerTimers = {}, global2.workerTimersBroker));
    })(exports2, function(exports3, workerTimersBroker) {
      "use strict";
      var createLoadOrReturnBroker = function createLoadOrReturnBroker2(loadBroker, worker2) {
        var broker = null;
        return function() {
          if (broker !== null) {
            return broker;
          }
          var blob = new Blob([worker2], {
            type: "application/javascript; charset=utf-8"
          });
          var url = URL.createObjectURL(blob);
          broker = loadBroker(url);
          setTimeout(function() {
            return URL.revokeObjectURL(url);
          });
          return broker;
        };
      };
      var worker = `(()=>{var e={472:(e,t,r)=>{var o,i;void 0===(i="function"==typeof(o=function(){"use strict";var e=new Map,t=new Map,r=function(t){var r=e.get(t);if(void 0===r)throw new Error('There is no interval scheduled with the given id "'.concat(t,'".'));clearTimeout(r),e.delete(t)},o=function(e){var r=t.get(e);if(void 0===r)throw new Error('There is no timeout scheduled with the given id "'.concat(e,'".'));clearTimeout(r),t.delete(e)},i=function(e,t){var r,o=performance.now();return{expected:o+(r=e-Math.max(0,o-t)),remainingDelay:r}},n=function e(t,r,o,i){var n=performance.now();n>o?postMessage({id:null,method:"call",params:{timerId:r,timerType:i}}):t.set(r,setTimeout(e,o-n,t,r,o,i))},a=function(t,r,o){var a=i(t,o),s=a.expected,d=a.remainingDelay;e.set(r,setTimeout(n,d,e,r,s,"interval"))},s=function(e,r,o){var a=i(e,o),s=a.expected,d=a.remainingDelay;t.set(r,setTimeout(n,d,t,r,s,"timeout"))};addEventListener("message",(function(e){var t=e.data;try{if("clear"===t.method){var i=t.id,n=t.params,d=n.timerId,c=n.timerType;if("interval"===c)r(d),postMessage({error:null,id:i});else{if("timeout"!==c)throw new Error('The given type "'.concat(c,'" is not supported'));o(d),postMessage({error:null,id:i})}}else{if("set"!==t.method)throw new Error('The given method "'.concat(t.method,'" is not supported'));var u=t.params,l=u.delay,p=u.now,m=u.timerId,v=u.timerType;if("interval"===v)a(l,m,p);else{if("timeout"!==v)throw new Error('The given type "'.concat(v,'" is not supported'));s(l,m,p)}}}catch(e){postMessage({error:{message:e.message},id:t.id,result:null})}}))})?o.call(t,r,t,e):o)||(e.exports=i)}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(472)})()})();`;
      var loadOrReturnBroker = createLoadOrReturnBroker(workerTimersBroker.load, worker);
      var clearInterval2 = function clearInterval3(timerId) {
        return loadOrReturnBroker().clearInterval(timerId);
      };
      var clearTimeout2 = function clearTimeout3(timerId) {
        return loadOrReturnBroker().clearTimeout(timerId);
      };
      var setInterval2 = function setInterval3() {
        var _loadOrReturnBroker;
        return (_loadOrReturnBroker = loadOrReturnBroker()).setInterval.apply(_loadOrReturnBroker, arguments);
      };
      var setTimeout$1 = function setTimeout2() {
        var _loadOrReturnBroker2;
        return (_loadOrReturnBroker2 = loadOrReturnBroker()).setTimeout.apply(_loadOrReturnBroker2, arguments);
      };
      exports3.clearInterval = clearInterval2;
      exports3.clearTimeout = clearTimeout2;
      exports3.setInterval = setInterval2;
      exports3.setTimeout = setTimeout$1;
    });
  }
});

// node_modules/mqtt/build/lib/get-timer.js
var require_get_timer = __commonJS({
  "node_modules/mqtt/build/lib/get-timer.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2)
            if (Object.prototype.hasOwnProperty.call(o2, k))
              ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++)
            if (k[i] !== "default")
              __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var is_browser_1 = __importStar(require_is_browser());
    var worker_timers_1 = require_bundle2();
    var workerTimer = {
      set: worker_timers_1.setInterval,
      clear: worker_timers_1.clearInterval
    };
    var nativeTimer = {
      set: (func, time) => setInterval(func, time),
      clear: (timerId) => clearInterval(timerId)
    };
    var getTimer = (variant) => {
      switch (variant) {
        case "native": {
          return nativeTimer;
        }
        case "worker": {
          return workerTimer;
        }
        case "auto":
        default: {
          return is_browser_1.default && !is_browser_1.isWebWorker && !is_browser_1.isReactNativeBrowser ? workerTimer : nativeTimer;
        }
      }
    };
    exports2.default = getTimer;
  }
});

// node_modules/mqtt/build/lib/KeepaliveManager.js
var require_KeepaliveManager = __commonJS({
  "node_modules/mqtt/build/lib/KeepaliveManager.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var get_timer_1 = __importDefault(require_get_timer());
    var KeepaliveManager = class {
      get keepaliveTimeoutTimestamp() {
        return this._keepaliveTimeoutTimestamp;
      }
      get intervalEvery() {
        return this._intervalEvery;
      }
      get keepalive() {
        return this._keepalive;
      }
      constructor(client, variant) {
        this.destroyed = false;
        this.client = client;
        this.timer = typeof variant === "object" && "set" in variant && "clear" in variant ? variant : (0, get_timer_1.default)(variant);
        this.setKeepalive(client.options.keepalive);
      }
      clear() {
        if (this.timerId) {
          this.timer.clear(this.timerId);
          this.timerId = null;
        }
      }
      setKeepalive(value) {
        value *= 1e3;
        if (isNaN(value) || value <= 0 || value > 2147483647) {
          throw new Error(`Keepalive value must be an integer between 0 and 2147483647. Provided value is ${value}`);
        }
        this._keepalive = value;
        this.reschedule();
        this.client["log"](`KeepaliveManager: set keepalive to ${value}ms`);
      }
      destroy() {
        this.clear();
        this.destroyed = true;
      }
      reschedule() {
        if (this.destroyed) {
          return;
        }
        this.clear();
        this.counter = 0;
        const keepAliveTimeout = Math.ceil(this._keepalive * 1.5);
        this._keepaliveTimeoutTimestamp = Date.now() + keepAliveTimeout;
        this._intervalEvery = Math.ceil(this._keepalive / 2);
        this.timerId = this.timer.set(() => {
          if (this.destroyed) {
            return;
          }
          this.counter += 1;
          if (this.counter === 2) {
            this.client.sendPing();
          } else if (this.counter > 2) {
            this.client.onKeepaliveTimeout();
          }
        }, this._intervalEvery);
      }
    };
    exports2.default = KeepaliveManager;
  }
});

// node_modules/mqtt/build/lib/client.js
var require_client = __commonJS({
  "node_modules/mqtt/build/lib/client.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2)
            if (Object.prototype.hasOwnProperty.call(o2, k))
              ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++)
            if (k[i] !== "default")
              __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    }();
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var topic_alias_recv_1 = __importDefault(require_topic_alias_recv());
    var mqtt_packet_1 = __importDefault(require_mqtt());
    var default_message_id_provider_1 = __importDefault(require_default_message_id_provider());
    var readable_stream_1 = require_ours();
    var default_1 = __importDefault(require_default());
    var validations = __importStar(require_validations());
    var debug_1 = __importDefault(require_src());
    var store_1 = __importDefault(require_store());
    var handlers_1 = __importDefault(require_handlers());
    var shared_1 = require_shared();
    var TypedEmitter_1 = require_TypedEmitter();
    var KeepaliveManager_1 = __importDefault(require_KeepaliveManager());
    var is_browser_1 = __importStar(require_is_browser());
    var setImmediate2 = globalThis.setImmediate || ((...args) => {
      const callback = args.shift();
      (0, shared_1.nextTick)(() => {
        callback(...args);
      });
    });
    var defaultConnectOptions = {
      keepalive: 60,
      reschedulePings: true,
      protocolId: "MQTT",
      protocolVersion: 4,
      reconnectPeriod: 1e3,
      connectTimeout: 30 * 1e3,
      clean: true,
      resubscribe: true,
      subscribeBatchSize: null,
      writeCache: true,
      timerVariant: "auto"
    };
    var MqttClient2 = class _MqttClient extends TypedEmitter_1.TypedEventEmitter {
      static defaultId() {
        return `mqttjs_${Math.random().toString(16).substr(2, 8)}`;
      }
      constructor(streamBuilder, options) {
        super();
        this.options = options || {};
        for (const k in defaultConnectOptions) {
          if (typeof this.options[k] === "undefined") {
            this.options[k] = defaultConnectOptions[k];
          } else {
            this.options[k] = options[k];
          }
        }
        this.log = this.options.log || (0, debug_1.default)("mqttjs:client");
        this.noop = this._noop.bind(this);
        this.log("MqttClient :: version:", _MqttClient.VERSION);
        if (is_browser_1.isWebWorker) {
          this.log("MqttClient :: environment", "webworker");
        } else {
          this.log("MqttClient :: environment", is_browser_1.default ? "browser" : "node");
        }
        this.log("MqttClient :: options.protocol", options.protocol);
        this.log("MqttClient :: options.protocolVersion", options.protocolVersion);
        this.log("MqttClient :: options.username", options.username);
        this.log("MqttClient :: options.keepalive", options.keepalive);
        this.log("MqttClient :: options.reconnectPeriod", options.reconnectPeriod);
        this.log("MqttClient :: options.rejectUnauthorized", options.rejectUnauthorized);
        this.log("MqttClient :: options.properties.topicAliasMaximum", options.properties ? options.properties.topicAliasMaximum : void 0);
        this.options.clientId = typeof options.clientId === "string" ? options.clientId : _MqttClient.defaultId();
        this.log("MqttClient :: clientId", this.options.clientId);
        this.options.customHandleAcks = options.protocolVersion === 5 && options.customHandleAcks ? options.customHandleAcks : (...args) => {
          args[3](null, 0);
        };
        if (!this.options.writeCache) {
          mqtt_packet_1.default.writeToStream.cacheNumbers = false;
        }
        this.streamBuilder = streamBuilder;
        this.messageIdProvider = typeof this.options.messageIdProvider === "undefined" ? new default_message_id_provider_1.default() : this.options.messageIdProvider;
        this.outgoingStore = options.outgoingStore || new store_1.default();
        this.incomingStore = options.incomingStore || new store_1.default();
        this.queueQoSZero = options.queueQoSZero === void 0 ? true : options.queueQoSZero;
        this._resubscribeTopics = {};
        this.messageIdToTopic = {};
        this.keepaliveManager = null;
        this.connected = false;
        this.disconnecting = false;
        this.reconnecting = false;
        this.queue = [];
        this.connackTimer = null;
        this.reconnectTimer = null;
        this._storeProcessing = false;
        this._packetIdsDuringStoreProcessing = {};
        this._storeProcessingQueue = [];
        this.outgoing = {};
        this._firstConnection = true;
        if (options.properties && options.properties.topicAliasMaximum > 0) {
          if (options.properties.topicAliasMaximum > 65535) {
            this.log("MqttClient :: options.properties.topicAliasMaximum is out of range");
          } else {
            this.topicAliasRecv = new topic_alias_recv_1.default(options.properties.topicAliasMaximum);
          }
        }
        this.on("connect", () => {
          const { queue } = this;
          const deliver = () => {
            const entry = queue.shift();
            this.log("deliver :: entry %o", entry);
            let packet = null;
            if (!entry) {
              this._resubscribe();
              return;
            }
            packet = entry.packet;
            this.log("deliver :: call _sendPacket for %o", packet);
            let send = true;
            if (packet.messageId && packet.messageId !== 0) {
              if (!this.messageIdProvider.register(packet.messageId)) {
                send = false;
              }
            }
            if (send) {
              this._sendPacket(packet, (err) => {
                if (entry.cb) {
                  entry.cb(err);
                }
                deliver();
              });
            } else {
              this.log("messageId: %d has already used. The message is skipped and removed.", packet.messageId);
              deliver();
            }
          };
          this.log("connect :: sending queued packets");
          deliver();
        });
        this.on("close", () => {
          this.log("close :: connected set to `false`");
          this.connected = false;
          this.log("close :: clearing connackTimer");
          clearTimeout(this.connackTimer);
          this._destroyKeepaliveManager();
          if (this.topicAliasRecv) {
            this.topicAliasRecv.clear();
          }
          this.log("close :: calling _setupReconnect");
          this._setupReconnect();
        });
        if (!this.options.manualConnect) {
          this.log("MqttClient :: setting up stream");
          this.connect();
        }
      }
      handleAuth(packet, callback) {
        callback();
      }
      handleMessage(packet, callback) {
        callback();
      }
      _nextId() {
        return this.messageIdProvider.allocate();
      }
      getLastMessageId() {
        return this.messageIdProvider.getLastAllocated();
      }
      connect() {
        var _a;
        const writable = new readable_stream_1.Writable();
        const parser = mqtt_packet_1.default.parser(this.options);
        let completeParse = null;
        const packets = [];
        this.log("connect :: calling method to clear reconnect");
        this._clearReconnect();
        if (this.disconnected && !this.reconnecting) {
          this.incomingStore = this.options.incomingStore || new store_1.default();
          this.outgoingStore = this.options.outgoingStore || new store_1.default();
          this.disconnecting = false;
          this.disconnected = false;
        }
        this.log("connect :: using streamBuilder provided to client to create stream");
        this.stream = this.streamBuilder(this);
        parser.on("packet", (packet) => {
          this.log("parser :: on packet push to packets array.");
          packets.push(packet);
        });
        const work = () => {
          this.log("work :: getting next packet in queue");
          const packet = packets.shift();
          if (packet) {
            this.log("work :: packet pulled from queue");
            (0, handlers_1.default)(this, packet, nextTickWork);
          } else {
            this.log("work :: no packets in queue");
            const done = completeParse;
            completeParse = null;
            this.log("work :: done flag is %s", !!done);
            if (done)
              done();
          }
        };
        const nextTickWork = () => {
          if (packets.length) {
            (0, shared_1.nextTick)(work);
          } else {
            const done = completeParse;
            completeParse = null;
            done();
          }
        };
        writable._write = (buf, enc, done) => {
          completeParse = done;
          this.log("writable stream :: parsing buffer");
          parser.parse(buf);
          work();
        };
        const streamErrorHandler = (error) => {
          this.log("streamErrorHandler :: error", error.message);
          if (error.code) {
            this.log("streamErrorHandler :: emitting error");
            this.emit("error", error);
          } else {
            this.noop(error);
          }
        };
        this.log("connect :: pipe stream to writable stream");
        this.stream.pipe(writable);
        this.stream.on("error", streamErrorHandler);
        this.stream.on("close", () => {
          this.log("(%s)stream :: on close", this.options.clientId);
          this._flushVolatile();
          this.log("stream: emit close to MqttClient");
          this.emit("close");
        });
        this.log("connect: sending packet `connect`");
        const connectPacket = {
          cmd: "connect",
          protocolId: this.options.protocolId,
          protocolVersion: this.options.protocolVersion,
          clean: this.options.clean,
          clientId: this.options.clientId,
          keepalive: this.options.keepalive,
          username: this.options.username,
          password: this.options.password,
          properties: this.options.properties
        };
        if (this.options.will) {
          connectPacket.will = Object.assign(Object.assign({}, this.options.will), { payload: (_a = this.options.will) === null || _a === void 0 ? void 0 : _a.payload });
        }
        if (this.topicAliasRecv) {
          if (!connectPacket.properties) {
            connectPacket.properties = {};
          }
          if (this.topicAliasRecv) {
            connectPacket.properties.topicAliasMaximum = this.topicAliasRecv.max;
          }
        }
        this._writePacket(connectPacket);
        parser.on("error", this.emit.bind(this, "error"));
        if (this.options.properties) {
          if (!this.options.properties.authenticationMethod && this.options.properties.authenticationData) {
            this.end(() => this.emit("error", new Error("Packet has no Authentication Method")));
            return this;
          }
          if (this.options.properties.authenticationMethod && this.options.authPacket && typeof this.options.authPacket === "object") {
            const authPacket = Object.assign({ cmd: "auth", reasonCode: 0 }, this.options.authPacket);
            this._writePacket(authPacket);
          }
        }
        this.stream.setMaxListeners(1e3);
        clearTimeout(this.connackTimer);
        this.connackTimer = setTimeout(() => {
          this.log("!!connectTimeout hit!! Calling _cleanUp with force `true`");
          this.emit("error", new Error("connack timeout"));
          this._cleanUp(true);
        }, this.options.connectTimeout);
        return this;
      }
      publish(topic, message, opts, callback) {
        this.log("publish :: message `%s` to topic `%s`", message, topic);
        const { options } = this;
        if (typeof opts === "function") {
          callback = opts;
          opts = null;
        }
        opts = opts || {};
        const defaultOpts = {
          qos: 0,
          retain: false,
          dup: false
        };
        opts = Object.assign(Object.assign({}, defaultOpts), opts);
        const { qos, retain, dup, properties, cbStorePut } = opts;
        if (this._checkDisconnecting(callback)) {
          return this;
        }
        const publishProc = () => {
          let messageId = 0;
          if (qos === 1 || qos === 2) {
            messageId = this._nextId();
            if (messageId === null) {
              this.log("No messageId left");
              return false;
            }
          }
          const packet = {
            cmd: "publish",
            topic,
            payload: message,
            qos,
            retain,
            messageId,
            dup
          };
          if (options.protocolVersion === 5) {
            packet.properties = properties;
          }
          this.log("publish :: qos", qos);
          switch (qos) {
            case 1:
            case 2:
              this.outgoing[packet.messageId] = {
                volatile: false,
                cb: callback || this.noop
              };
              this.log("MqttClient:publish: packet cmd: %s", packet.cmd);
              this._sendPacket(packet, void 0, cbStorePut);
              break;
            default:
              this.log("MqttClient:publish: packet cmd: %s", packet.cmd);
              this._sendPacket(packet, callback, cbStorePut);
              break;
          }
          return true;
        };
        if (this._storeProcessing || this._storeProcessingQueue.length > 0 || !publishProc()) {
          this._storeProcessingQueue.push({
            invoke: publishProc,
            cbStorePut: opts.cbStorePut,
            callback
          });
        }
        return this;
      }
      publishAsync(topic, message, opts) {
        return new Promise((resolve, reject) => {
          this.publish(topic, message, opts, (err, packet) => {
            if (err) {
              reject(err);
            } else {
              resolve(packet);
            }
          });
        });
      }
      subscribe(topicObject, opts, callback) {
        const version = this.options.protocolVersion;
        if (typeof opts === "function") {
          callback = opts;
        }
        callback = callback || this.noop;
        let resubscribe = false;
        let topicsList = [];
        if (typeof topicObject === "string") {
          topicObject = [topicObject];
          topicsList = topicObject;
        } else if (Array.isArray(topicObject)) {
          topicsList = topicObject;
        } else if (typeof topicObject === "object") {
          resubscribe = topicObject.resubscribe;
          delete topicObject.resubscribe;
          topicsList = Object.keys(topicObject);
        }
        const invalidTopic = validations.validateTopics(topicsList);
        if (invalidTopic !== null) {
          setImmediate2(callback, new Error(`Invalid topic ${invalidTopic}`));
          return this;
        }
        if (this._checkDisconnecting(callback)) {
          this.log("subscribe: discconecting true");
          return this;
        }
        const defaultOpts = {
          qos: 0
        };
        if (version === 5) {
          defaultOpts.nl = false;
          defaultOpts.rap = false;
          defaultOpts.rh = 0;
        }
        opts = Object.assign(Object.assign({}, defaultOpts), opts);
        const properties = opts.properties;
        const subs = [];
        const parseSub = (topic, subOptions) => {
          subOptions = subOptions || opts;
          if (!Object.prototype.hasOwnProperty.call(this._resubscribeTopics, topic) || this._resubscribeTopics[topic].qos < subOptions.qos || resubscribe) {
            const currentOpts = {
              topic,
              qos: subOptions.qos
            };
            if (version === 5) {
              currentOpts.nl = subOptions.nl;
              currentOpts.rap = subOptions.rap;
              currentOpts.rh = subOptions.rh;
              currentOpts.properties = properties;
            }
            this.log("subscribe: pushing topic `%s` and qos `%s` to subs list", currentOpts.topic, currentOpts.qos);
            subs.push(currentOpts);
          }
        };
        if (Array.isArray(topicObject)) {
          topicObject.forEach((topic) => {
            this.log("subscribe: array topic %s", topic);
            parseSub(topic);
          });
        } else {
          Object.keys(topicObject).forEach((topic) => {
            this.log("subscribe: object topic %s, %o", topic, topicObject[topic]);
            parseSub(topic, topicObject[topic]);
          });
        }
        if (!subs.length) {
          callback(null, []);
          return this;
        }
        const subscribeChunkedSubs = (chunkedSubs, messageId) => {
          const packet = {
            cmd: "subscribe",
            subscriptions: chunkedSubs,
            messageId
          };
          if (properties) {
            packet.properties = properties;
          }
          if (this.options.resubscribe) {
            this.log("subscribe :: resubscribe true");
            const topics = [];
            chunkedSubs.forEach((sub) => {
              if (this.options.reconnectPeriod > 0) {
                const topic = { qos: sub.qos };
                if (version === 5) {
                  topic.nl = sub.nl || false;
                  topic.rap = sub.rap || false;
                  topic.rh = sub.rh || 0;
                  topic.properties = sub.properties;
                }
                this._resubscribeTopics[sub.topic] = topic;
                topics.push(sub.topic);
              }
            });
            this.messageIdToTopic[packet.messageId] = topics;
          }
          const promise = new Promise((resolve, reject) => {
            this.outgoing[packet.messageId] = {
              volatile: true,
              cb(err, packet2) {
                if (!err) {
                  const { granted } = packet2;
                  for (let grantedI = 0; grantedI < granted.length; grantedI += 1) {
                    chunkedSubs[grantedI].qos = granted[grantedI];
                  }
                }
                if (!err) {
                  resolve(packet2);
                } else {
                  reject(new shared_1.ErrorWithSubackPacket(err.message, packet2));
                }
              }
            };
          });
          this.log("subscribe :: call _sendPacket");
          this._sendPacket(packet);
          return promise;
        };
        const subscribeProc = () => {
          var _a;
          const batchSize = (_a = this.options.subscribeBatchSize) !== null && _a !== void 0 ? _a : subs.length;
          const subscribePromises = [];
          for (let i = 0; i < subs.length; i += batchSize) {
            const chunkedSubs = subs.slice(i, i + batchSize);
            const messageId = this._nextId();
            if (messageId === null) {
              this.log("No messageId left");
              return false;
            }
            subscribePromises.push(subscribeChunkedSubs(chunkedSubs, messageId));
          }
          Promise.all(subscribePromises).then((packets) => {
            callback(null, subs, packets.at(-1));
          }).catch((err) => {
            callback(err, subs, err.packet);
          });
          return true;
        };
        if (this._storeProcessing || this._storeProcessingQueue.length > 0 || !subscribeProc()) {
          this._storeProcessingQueue.push({
            invoke: subscribeProc,
            callback
          });
        }
        return this;
      }
      subscribeAsync(topicObject, opts) {
        return new Promise((resolve, reject) => {
          this.subscribe(topicObject, opts, (err, granted) => {
            if (err) {
              reject(err);
            } else {
              resolve(granted);
            }
          });
        });
      }
      unsubscribe(topic, opts, callback) {
        if (typeof topic === "string") {
          topic = [topic];
        }
        if (typeof opts === "function") {
          callback = opts;
        }
        callback = callback || this.noop;
        const invalidTopic = validations.validateTopics(topic);
        if (invalidTopic !== null) {
          setImmediate2(callback, new Error(`Invalid topic ${invalidTopic}`));
          return this;
        }
        if (this._checkDisconnecting(callback)) {
          return this;
        }
        const unsubscribeProc = () => {
          const messageId = this._nextId();
          if (messageId === null) {
            this.log("No messageId left");
            return false;
          }
          const packet = {
            cmd: "unsubscribe",
            messageId,
            unsubscriptions: []
          };
          if (typeof topic === "string") {
            packet.unsubscriptions = [topic];
          } else if (Array.isArray(topic)) {
            packet.unsubscriptions = topic;
          }
          if (this.options.resubscribe) {
            packet.unsubscriptions.forEach((topic2) => {
              delete this._resubscribeTopics[topic2];
            });
          }
          if (typeof opts === "object" && opts.properties) {
            packet.properties = opts.properties;
          }
          this.outgoing[packet.messageId] = {
            volatile: true,
            cb: callback
          };
          this.log("unsubscribe: call _sendPacket");
          this._sendPacket(packet);
          return true;
        };
        if (this._storeProcessing || this._storeProcessingQueue.length > 0 || !unsubscribeProc()) {
          this._storeProcessingQueue.push({
            invoke: unsubscribeProc,
            callback
          });
        }
        return this;
      }
      unsubscribeAsync(topic, opts) {
        return new Promise((resolve, reject) => {
          this.unsubscribe(topic, opts, (err, packet) => {
            if (err) {
              reject(err);
            } else {
              resolve(packet);
            }
          });
        });
      }
      end(force, opts, cb) {
        this.log("end :: (%s)", this.options.clientId);
        if (force == null || typeof force !== "boolean") {
          cb = cb || opts;
          opts = force;
          force = false;
        }
        if (typeof opts !== "object") {
          cb = cb || opts;
          opts = null;
        }
        this.log("end :: cb? %s", !!cb);
        if (!cb || typeof cb !== "function") {
          cb = this.noop;
        }
        const closeStores = () => {
          this.log("end :: closeStores: closing incoming and outgoing stores");
          this.disconnected = true;
          this.incomingStore.close((e1) => {
            this.outgoingStore.close((e2) => {
              this.log("end :: closeStores: emitting end");
              this.emit("end");
              if (cb) {
                const err = e1 || e2;
                this.log("end :: closeStores: invoking callback with args");
                cb(err);
              }
            });
          });
          if (this._deferredReconnect) {
            this._deferredReconnect();
          } else if (this.options.reconnectPeriod === 0 || this.options.manualConnect) {
            this.disconnecting = false;
          }
        };
        const finish = () => {
          this.log("end :: (%s) :: finish :: calling _cleanUp with force %s", this.options.clientId, force);
          this._cleanUp(force, () => {
            this.log("end :: finish :: calling process.nextTick on closeStores");
            (0, shared_1.nextTick)(closeStores);
          }, opts);
        };
        if (this.disconnecting) {
          cb();
          return this;
        }
        this._clearReconnect();
        this.disconnecting = true;
        if (!force && Object.keys(this.outgoing).length > 0) {
          this.log("end :: (%s) :: calling finish in 10ms once outgoing is empty", this.options.clientId);
          this.once("outgoingEmpty", setTimeout.bind(null, finish, 10));
        } else {
          this.log("end :: (%s) :: immediately calling finish", this.options.clientId);
          finish();
        }
        return this;
      }
      endAsync(force, opts) {
        return new Promise((resolve, reject) => {
          this.end(force, opts, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        });
      }
      removeOutgoingMessage(messageId) {
        if (this.outgoing[messageId]) {
          const { cb } = this.outgoing[messageId];
          this._removeOutgoingAndStoreMessage(messageId, () => {
            cb(new Error("Message removed"));
          });
        }
        return this;
      }
      reconnect(opts) {
        this.log("client reconnect");
        const f = () => {
          if (opts) {
            this.options.incomingStore = opts.incomingStore;
            this.options.outgoingStore = opts.outgoingStore;
          } else {
            this.options.incomingStore = null;
            this.options.outgoingStore = null;
          }
          this.incomingStore = this.options.incomingStore || new store_1.default();
          this.outgoingStore = this.options.outgoingStore || new store_1.default();
          this.disconnecting = false;
          this.disconnected = false;
          this._deferredReconnect = null;
          this._reconnect();
        };
        if (this.disconnecting && !this.disconnected) {
          this._deferredReconnect = f;
        } else {
          f();
        }
        return this;
      }
      _flushVolatile() {
        if (this.outgoing) {
          this.log("_flushVolatile :: deleting volatile messages from the queue and setting their callbacks as error function");
          Object.keys(this.outgoing).forEach((messageId) => {
            if (this.outgoing[messageId].volatile && typeof this.outgoing[messageId].cb === "function") {
              this.outgoing[messageId].cb(new Error("Connection closed"));
              delete this.outgoing[messageId];
            }
          });
        }
      }
      _flush() {
        if (this.outgoing) {
          this.log("_flush: queue exists? %b", !!this.outgoing);
          Object.keys(this.outgoing).forEach((messageId) => {
            if (typeof this.outgoing[messageId].cb === "function") {
              this.outgoing[messageId].cb(new Error("Connection closed"));
              delete this.outgoing[messageId];
            }
          });
        }
      }
      _removeTopicAliasAndRecoverTopicName(packet) {
        let alias;
        if (packet.properties) {
          alias = packet.properties.topicAlias;
        }
        let topic = packet.topic.toString();
        this.log("_removeTopicAliasAndRecoverTopicName :: alias %d, topic %o", alias, topic);
        if (topic.length === 0) {
          if (typeof alias === "undefined") {
            return new Error("Unregistered Topic Alias");
          }
          topic = this.topicAliasSend.getTopicByAlias(alias);
          if (typeof topic === "undefined") {
            return new Error("Unregistered Topic Alias");
          }
          packet.topic = topic;
        }
        if (alias) {
          delete packet.properties.topicAlias;
        }
      }
      _checkDisconnecting(callback) {
        if (this.disconnecting) {
          if (callback && callback !== this.noop) {
            callback(new Error("client disconnecting"));
          } else {
            this.emit("error", new Error("client disconnecting"));
          }
        }
        return this.disconnecting;
      }
      _reconnect() {
        this.log("_reconnect: emitting reconnect to client");
        this.emit("reconnect");
        if (this.connected) {
          this.end(() => {
            this.connect();
          });
          this.log("client already connected. disconnecting first.");
        } else {
          this.log("_reconnect: calling connect");
          this.connect();
        }
      }
      _setupReconnect() {
        if (!this.disconnecting && !this.reconnectTimer && this.options.reconnectPeriod > 0) {
          if (!this.reconnecting) {
            this.log("_setupReconnect :: emit `offline` state");
            this.emit("offline");
            this.log("_setupReconnect :: set `reconnecting` to `true`");
            this.reconnecting = true;
          }
          this.log("_setupReconnect :: setting reconnectTimer for %d ms", this.options.reconnectPeriod);
          this.reconnectTimer = setInterval(() => {
            this.log("reconnectTimer :: reconnect triggered!");
            this._reconnect();
          }, this.options.reconnectPeriod);
        } else {
          this.log("_setupReconnect :: doing nothing...");
        }
      }
      _clearReconnect() {
        this.log("_clearReconnect : clearing reconnect timer");
        if (this.reconnectTimer) {
          clearInterval(this.reconnectTimer);
          this.reconnectTimer = null;
        }
      }
      _cleanUp(forced, done, opts = {}) {
        if (done) {
          this.log("_cleanUp :: done callback provided for on stream close");
          this.stream.on("close", done);
        }
        this.log("_cleanUp :: forced? %s", forced);
        if (forced) {
          if (this.options.reconnectPeriod === 0 && this.options.clean) {
            this._flush();
          }
          this.log("_cleanUp :: (%s) :: destroying stream", this.options.clientId);
          this.stream.destroy();
        } else {
          const packet = Object.assign({ cmd: "disconnect" }, opts);
          this.log("_cleanUp :: (%s) :: call _sendPacket with disconnect packet", this.options.clientId);
          this._sendPacket(packet, () => {
            this.log("_cleanUp :: (%s) :: destroying stream", this.options.clientId);
            setImmediate2(() => {
              this.stream.end(() => {
                this.log("_cleanUp :: (%s) :: stream destroyed", this.options.clientId);
              });
            });
          });
        }
        if (!this.disconnecting && !this.reconnecting) {
          this.log("_cleanUp :: client not disconnecting/reconnecting. Clearing and resetting reconnect.");
          this._clearReconnect();
          this._setupReconnect();
        }
        this._destroyKeepaliveManager();
        if (done && !this.connected) {
          this.log("_cleanUp :: (%s) :: removing stream `done` callback `close` listener", this.options.clientId);
          this.stream.removeListener("close", done);
          done();
        }
      }
      _storeAndSend(packet, cb, cbStorePut) {
        this.log("storeAndSend :: store packet with cmd %s to outgoingStore", packet.cmd);
        let storePacket = packet;
        let err;
        if (storePacket.cmd === "publish") {
          storePacket = (0, default_1.default)(packet);
          err = this._removeTopicAliasAndRecoverTopicName(storePacket);
          if (err) {
            return cb && cb(err);
          }
        }
        this.outgoingStore.put(storePacket, (err2) => {
          if (err2) {
            return cb && cb(err2);
          }
          cbStorePut();
          this._writePacket(packet, cb);
        });
      }
      _applyTopicAlias(packet) {
        if (this.options.protocolVersion === 5) {
          if (packet.cmd === "publish") {
            let alias;
            if (packet.properties) {
              alias = packet.properties.topicAlias;
            }
            const topic = packet.topic.toString();
            if (this.topicAliasSend) {
              if (alias) {
                if (topic.length !== 0) {
                  this.log("applyTopicAlias :: register topic: %s - alias: %d", topic, alias);
                  if (!this.topicAliasSend.put(topic, alias)) {
                    this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d", topic, alias);
                    return new Error("Sending Topic Alias out of range");
                  }
                }
              } else if (topic.length !== 0) {
                if (this.options.autoAssignTopicAlias) {
                  alias = this.topicAliasSend.getAliasByTopic(topic);
                  if (alias) {
                    packet.topic = "";
                    packet.properties = Object.assign(Object.assign({}, packet.properties), { topicAlias: alias });
                    this.log("applyTopicAlias :: auto assign(use) topic: %s - alias: %d", topic, alias);
                  } else {
                    alias = this.topicAliasSend.getLruAlias();
                    this.topicAliasSend.put(topic, alias);
                    packet.properties = Object.assign(Object.assign({}, packet.properties), { topicAlias: alias });
                    this.log("applyTopicAlias :: auto assign topic: %s - alias: %d", topic, alias);
                  }
                } else if (this.options.autoUseTopicAlias) {
                  alias = this.topicAliasSend.getAliasByTopic(topic);
                  if (alias) {
                    packet.topic = "";
                    packet.properties = Object.assign(Object.assign({}, packet.properties), { topicAlias: alias });
                    this.log("applyTopicAlias :: auto use topic: %s - alias: %d", topic, alias);
                  }
                }
              }
            } else if (alias) {
              this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d", topic, alias);
              return new Error("Sending Topic Alias out of range");
            }
          }
        }
      }
      _noop(err) {
        this.log("noop ::", err);
      }
      _writePacket(packet, cb) {
        this.log("_writePacket :: packet: %O", packet);
        this.log("_writePacket :: emitting `packetsend`");
        this.emit("packetsend", packet);
        this.log("_writePacket :: writing to stream");
        const result = mqtt_packet_1.default.writeToStream(packet, this.stream, this.options);
        this.log("_writePacket :: writeToStream result %s", result);
        if (!result && cb && cb !== this.noop) {
          this.log("_writePacket :: handle events on `drain` once through callback.");
          this.stream.once("drain", cb);
        } else if (cb) {
          this.log("_writePacket :: invoking cb");
          cb();
        }
      }
      _sendPacket(packet, cb, cbStorePut, noStore) {
        this.log("_sendPacket :: (%s) ::  start", this.options.clientId);
        cbStorePut = cbStorePut || this.noop;
        cb = cb || this.noop;
        const err = this._applyTopicAlias(packet);
        if (err) {
          cb(err);
          return;
        }
        if (!this.connected) {
          if (packet.cmd === "auth") {
            this._writePacket(packet, cb);
            return;
          }
          this.log("_sendPacket :: client not connected. Storing packet offline.");
          this._storePacket(packet, cb, cbStorePut);
          return;
        }
        if (noStore) {
          this._writePacket(packet, cb);
          return;
        }
        switch (packet.cmd) {
          case "publish":
            break;
          case "pubrel":
            this._storeAndSend(packet, cb, cbStorePut);
            return;
          default:
            this._writePacket(packet, cb);
            return;
        }
        switch (packet.qos) {
          case 2:
          case 1:
            this._storeAndSend(packet, cb, cbStorePut);
            break;
          case 0:
          default:
            this._writePacket(packet, cb);
            break;
        }
        this.log("_sendPacket :: (%s) ::  end", this.options.clientId);
      }
      _storePacket(packet, cb, cbStorePut) {
        this.log("_storePacket :: packet: %o", packet);
        this.log("_storePacket :: cb? %s", !!cb);
        cbStorePut = cbStorePut || this.noop;
        let storePacket = packet;
        if (storePacket.cmd === "publish") {
          storePacket = (0, default_1.default)(packet);
          const err = this._removeTopicAliasAndRecoverTopicName(storePacket);
          if (err) {
            return cb && cb(err);
          }
        }
        const qos = storePacket.qos || 0;
        if (qos === 0 && this.queueQoSZero || storePacket.cmd !== "publish") {
          this.queue.push({ packet: storePacket, cb });
        } else if (qos > 0) {
          cb = this.outgoing[storePacket.messageId] ? this.outgoing[storePacket.messageId].cb : null;
          this.outgoingStore.put(storePacket, (err) => {
            if (err) {
              return cb && cb(err);
            }
            cbStorePut();
          });
        } else if (cb) {
          cb(new Error("No connection to broker"));
        }
      }
      _setupKeepaliveManager() {
        this.log("_setupKeepaliveManager :: keepalive %d (seconds)", this.options.keepalive);
        if (!this.keepaliveManager && this.options.keepalive) {
          this.keepaliveManager = new KeepaliveManager_1.default(this, this.options.timerVariant);
        }
      }
      _destroyKeepaliveManager() {
        if (this.keepaliveManager) {
          this.log("_destroyKeepaliveManager :: destroying keepalive manager");
          this.keepaliveManager.destroy();
          this.keepaliveManager = null;
        }
      }
      reschedulePing(force = false) {
        if (this.keepaliveManager && this.options.keepalive && (force || this.options.reschedulePings)) {
          this._reschedulePing();
        }
      }
      _reschedulePing() {
        this.log("_reschedulePing :: rescheduling ping");
        this.keepaliveManager.reschedule();
      }
      sendPing() {
        this.log("_sendPing :: sending pingreq");
        this._sendPacket({ cmd: "pingreq" });
      }
      onKeepaliveTimeout() {
        this.emit("error", new Error("Keepalive timeout"));
        this.log("onKeepaliveTimeout :: calling _cleanUp with force true");
        this._cleanUp(true);
      }
      _resubscribe() {
        this.log("_resubscribe");
        const _resubscribeTopicsKeys = Object.keys(this._resubscribeTopics);
        if (!this._firstConnection && (this.options.clean || this.options.protocolVersion >= 4 && !this.connackPacket.sessionPresent) && _resubscribeTopicsKeys.length > 0) {
          if (this.options.resubscribe) {
            if (this.options.protocolVersion === 5) {
              this.log("_resubscribe: protocolVersion 5");
              for (let topicI = 0; topicI < _resubscribeTopicsKeys.length; topicI++) {
                const resubscribeTopic = {};
                resubscribeTopic[_resubscribeTopicsKeys[topicI]] = this._resubscribeTopics[_resubscribeTopicsKeys[topicI]];
                resubscribeTopic.resubscribe = true;
                this.subscribe(resubscribeTopic, {
                  properties: resubscribeTopic[_resubscribeTopicsKeys[topicI]].properties
                });
              }
            } else {
              this._resubscribeTopics.resubscribe = true;
              this.subscribe(this._resubscribeTopics);
            }
          } else {
            this._resubscribeTopics = {};
          }
        }
        this._firstConnection = false;
      }
      _onConnect(packet) {
        if (this.disconnected) {
          this.emit("connect", packet);
          return;
        }
        this.connackPacket = packet;
        this.messageIdProvider.clear();
        this._setupKeepaliveManager();
        this.connected = true;
        const startStreamProcess = () => {
          let outStore = this.outgoingStore.createStream();
          const remove = () => {
            outStore.destroy();
            outStore = null;
            this._flushStoreProcessingQueue();
            clearStoreProcessing();
          };
          const clearStoreProcessing = () => {
            this._storeProcessing = false;
            this._packetIdsDuringStoreProcessing = {};
          };
          this.once("close", remove);
          outStore.on("error", (err) => {
            clearStoreProcessing();
            this._flushStoreProcessingQueue();
            this.removeListener("close", remove);
            this.emit("error", err);
          });
          const storeDeliver = () => {
            if (!outStore) {
              return;
            }
            const packet2 = outStore.read(1);
            let cb;
            if (!packet2) {
              outStore.once("readable", storeDeliver);
              return;
            }
            this._storeProcessing = true;
            if (this._packetIdsDuringStoreProcessing[packet2.messageId]) {
              storeDeliver();
              return;
            }
            if (!this.disconnecting && !this.reconnectTimer) {
              cb = this.outgoing[packet2.messageId] ? this.outgoing[packet2.messageId].cb : null;
              this.outgoing[packet2.messageId] = {
                volatile: false,
                cb(err, status) {
                  if (cb) {
                    cb(err, status);
                  }
                  storeDeliver();
                }
              };
              this._packetIdsDuringStoreProcessing[packet2.messageId] = true;
              if (this.messageIdProvider.register(packet2.messageId)) {
                this._sendPacket(packet2, void 0, void 0, true);
              } else {
                this.log("messageId: %d has already used.", packet2.messageId);
              }
            } else if (outStore.destroy) {
              outStore.destroy();
            }
          };
          outStore.on("end", () => {
            let allProcessed = true;
            for (const id in this._packetIdsDuringStoreProcessing) {
              if (!this._packetIdsDuringStoreProcessing[id]) {
                allProcessed = false;
                break;
              }
            }
            this.removeListener("close", remove);
            if (allProcessed) {
              clearStoreProcessing();
              this._invokeAllStoreProcessingQueue();
              this.emit("connect", packet);
            } else {
              startStreamProcess();
            }
          });
          storeDeliver();
        };
        startStreamProcess();
      }
      _invokeStoreProcessingQueue() {
        if (!this._storeProcessing && this._storeProcessingQueue.length > 0) {
          const f = this._storeProcessingQueue[0];
          if (f && f.invoke()) {
            this._storeProcessingQueue.shift();
            return true;
          }
        }
        return false;
      }
      _invokeAllStoreProcessingQueue() {
        while (this._invokeStoreProcessingQueue()) {
        }
      }
      _flushStoreProcessingQueue() {
        for (const f of this._storeProcessingQueue) {
          if (f.cbStorePut)
            f.cbStorePut(new Error("Connection closed"));
          if (f.callback)
            f.callback(new Error("Connection closed"));
        }
        this._storeProcessingQueue.splice(0);
      }
      _removeOutgoingAndStoreMessage(messageId, cb) {
        delete this.outgoing[messageId];
        this.outgoingStore.del({ messageId }, (err, packet) => {
          cb(err, packet);
          this.messageIdProvider.deallocate(messageId);
          this._invokeStoreProcessingQueue();
        });
      }
    };
    MqttClient2.VERSION = shared_1.MQTTJS_VERSION;
    exports2.default = MqttClient2;
  }
});

// node_modules/mqtt/build/lib/unique-message-id-provider.js
var require_unique_message_id_provider = __commonJS({
  "node_modules/mqtt/build/lib/unique-message-id-provider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var number_allocator_1 = require_number_allocator2();
    var UniqueMessageIdProvider = class {
      constructor() {
        this.numberAllocator = new number_allocator_1.NumberAllocator(1, 65535);
      }
      allocate() {
        this.lastId = this.numberAllocator.alloc();
        return this.lastId;
      }
      getLastAllocated() {
        return this.lastId;
      }
      register(messageId) {
        return this.numberAllocator.use(messageId);
      }
      deallocate(messageId) {
        this.numberAllocator.free(messageId);
      }
      clear() {
        this.numberAllocator.clear();
      }
    };
    exports2.default = UniqueMessageIdProvider;
  }
});

// node_modules/ws/lib/constants.js
var require_constants2 = __commonJS({
  "node_modules/ws/lib/constants.js"(exports2, module2) {
    "use strict";
    var BINARY_TYPES = ["nodebuffer", "arraybuffer", "fragments"];
    var hasBlob = typeof Blob !== "undefined";
    if (hasBlob)
      BINARY_TYPES.push("blob");
    module2.exports = {
      BINARY_TYPES,
      EMPTY_BUFFER: Buffer.alloc(0),
      GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
      hasBlob,
      kForOnEventAttribute: Symbol("kIsForOnEventAttribute"),
      kListener: Symbol("kListener"),
      kStatusCode: Symbol("status-code"),
      kWebSocket: Symbol("websocket"),
      NOOP: () => {
      }
    };
  }
});

// node_modules/ws/lib/buffer-util.js
var require_buffer_util = __commonJS({
  "node_modules/ws/lib/buffer-util.js"(exports2, module2) {
    "use strict";
    var { EMPTY_BUFFER } = require_constants2();
    var FastBuffer = Buffer[Symbol.species];
    function concat(list, totalLength) {
      if (list.length === 0)
        return EMPTY_BUFFER;
      if (list.length === 1)
        return list[0];
      const target = Buffer.allocUnsafe(totalLength);
      let offset = 0;
      for (let i = 0; i < list.length; i++) {
        const buf = list[i];
        target.set(buf, offset);
        offset += buf.length;
      }
      if (offset < totalLength) {
        return new FastBuffer(target.buffer, target.byteOffset, offset);
      }
      return target;
    }
    function _mask(source, mask, output, offset, length) {
      for (let i = 0; i < length; i++) {
        output[offset + i] = source[i] ^ mask[i & 3];
      }
    }
    function _unmask(buffer, mask) {
      for (let i = 0; i < buffer.length; i++) {
        buffer[i] ^= mask[i & 3];
      }
    }
    function toArrayBuffer(buf) {
      if (buf.length === buf.buffer.byteLength) {
        return buf.buffer;
      }
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
    }
    function toBuffer(data) {
      toBuffer.readOnly = true;
      if (Buffer.isBuffer(data))
        return data;
      let buf;
      if (data instanceof ArrayBuffer) {
        buf = new FastBuffer(data);
      } else if (ArrayBuffer.isView(data)) {
        buf = new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
      } else {
        buf = Buffer.from(data);
        toBuffer.readOnly = false;
      }
      return buf;
    }
    module2.exports = {
      concat,
      mask: _mask,
      toArrayBuffer,
      toBuffer,
      unmask: _unmask
    };
    if (!process.env.WS_NO_BUFFER_UTIL) {
      try {
        const bufferUtil = require("bufferutil");
        module2.exports.mask = function(source, mask, output, offset, length) {
          if (length < 48)
            _mask(source, mask, output, offset, length);
          else
            bufferUtil.mask(source, mask, output, offset, length);
        };
        module2.exports.unmask = function(buffer, mask) {
          if (buffer.length < 32)
            _unmask(buffer, mask);
          else
            bufferUtil.unmask(buffer, mask);
        };
      } catch (e) {
      }
    }
  }
});

// node_modules/ws/lib/limiter.js
var require_limiter = __commonJS({
  "node_modules/ws/lib/limiter.js"(exports2, module2) {
    "use strict";
    var kDone = Symbol("kDone");
    var kRun = Symbol("kRun");
    var Limiter = class {
      /**
       * Creates a new `Limiter`.
       *
       * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
       *     to run concurrently
       */
      constructor(concurrency) {
        this[kDone] = () => {
          this.pending--;
          this[kRun]();
        };
        this.concurrency = concurrency || Infinity;
        this.jobs = [];
        this.pending = 0;
      }
      /**
       * Adds a job to the queue.
       *
       * @param {Function} job The job to run
       * @public
       */
      add(job) {
        this.jobs.push(job);
        this[kRun]();
      }
      /**
       * Removes a job from the queue and runs it if possible.
       *
       * @private
       */
      [kRun]() {
        if (this.pending === this.concurrency)
          return;
        if (this.jobs.length) {
          const job = this.jobs.shift();
          this.pending++;
          job(this[kDone]);
        }
      }
    };
    module2.exports = Limiter;
  }
});

// node_modules/ws/lib/permessage-deflate.js
var require_permessage_deflate = __commonJS({
  "node_modules/ws/lib/permessage-deflate.js"(exports2, module2) {
    "use strict";
    var zlib = require("zlib");
    var bufferUtil = require_buffer_util();
    var Limiter = require_limiter();
    var { kStatusCode } = require_constants2();
    var FastBuffer = Buffer[Symbol.species];
    var TRAILER = Buffer.from([0, 0, 255, 255]);
    var kPerMessageDeflate = Symbol("permessage-deflate");
    var kTotalLength = Symbol("total-length");
    var kCallback = Symbol("callback");
    var kBuffers = Symbol("buffers");
    var kError = Symbol("error");
    var zlibLimiter;
    var PerMessageDeflate = class {
      /**
       * Creates a PerMessageDeflate instance.
       *
       * @param {Object} [options] Configuration options
       * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
       *     for, or request, a custom client window size
       * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
       *     acknowledge disabling of client context takeover
       * @param {Number} [options.concurrencyLimit=10] The number of concurrent
       *     calls to zlib
       * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
       *     use of a custom server window size
       * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
       *     disabling of server context takeover
       * @param {Number} [options.threshold=1024] Size (in bytes) below which
       *     messages should not be compressed if context takeover is disabled
       * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
       *     deflate
       * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
       *     inflate
       * @param {Boolean} [isServer=false] Create the instance in either server or
       *     client mode
       * @param {Number} [maxPayload=0] The maximum allowed message length
       */
      constructor(options, isServer, maxPayload) {
        this._maxPayload = maxPayload | 0;
        this._options = options || {};
        this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024;
        this._isServer = !!isServer;
        this._deflate = null;
        this._inflate = null;
        this.params = null;
        if (!zlibLimiter) {
          const concurrency = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
          zlibLimiter = new Limiter(concurrency);
        }
      }
      /**
       * @type {String}
       */
      static get extensionName() {
        return "permessage-deflate";
      }
      /**
       * Create an extension negotiation offer.
       *
       * @return {Object} Extension parameters
       * @public
       */
      offer() {
        const params = {};
        if (this._options.serverNoContextTakeover) {
          params.server_no_context_takeover = true;
        }
        if (this._options.clientNoContextTakeover) {
          params.client_no_context_takeover = true;
        }
        if (this._options.serverMaxWindowBits) {
          params.server_max_window_bits = this._options.serverMaxWindowBits;
        }
        if (this._options.clientMaxWindowBits) {
          params.client_max_window_bits = this._options.clientMaxWindowBits;
        } else if (this._options.clientMaxWindowBits == null) {
          params.client_max_window_bits = true;
        }
        return params;
      }
      /**
       * Accept an extension negotiation offer/response.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Object} Accepted configuration
       * @public
       */
      accept(configurations) {
        configurations = this.normalizeParams(configurations);
        this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
        return this.params;
      }
      /**
       * Releases all resources used by the extension.
       *
       * @public
       */
      cleanup() {
        if (this._inflate) {
          this._inflate.close();
          this._inflate = null;
        }
        if (this._deflate) {
          const callback = this._deflate[kCallback];
          this._deflate.close();
          this._deflate = null;
          if (callback) {
            callback(
              new Error(
                "The deflate stream was closed while data was being processed"
              )
            );
          }
        }
      }
      /**
       *  Accept an extension negotiation offer.
       *
       * @param {Array} offers The extension negotiation offers
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsServer(offers) {
        const opts = this._options;
        const accepted = offers.find((params) => {
          if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === "number" && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === "number" && !params.client_max_window_bits) {
            return false;
          }
          return true;
        });
        if (!accepted) {
          throw new Error("None of the extension offers can be accepted");
        }
        if (opts.serverNoContextTakeover) {
          accepted.server_no_context_takeover = true;
        }
        if (opts.clientNoContextTakeover) {
          accepted.client_no_context_takeover = true;
        }
        if (typeof opts.serverMaxWindowBits === "number") {
          accepted.server_max_window_bits = opts.serverMaxWindowBits;
        }
        if (typeof opts.clientMaxWindowBits === "number") {
          accepted.client_max_window_bits = opts.clientMaxWindowBits;
        } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
          delete accepted.client_max_window_bits;
        }
        return accepted;
      }
      /**
       * Accept the extension negotiation response.
       *
       * @param {Array} response The extension negotiation response
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsClient(response) {
        const params = response[0];
        if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
          throw new Error('Unexpected parameter "client_no_context_takeover"');
        }
        if (!params.client_max_window_bits) {
          if (typeof this._options.clientMaxWindowBits === "number") {
            params.client_max_window_bits = this._options.clientMaxWindowBits;
          }
        } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === "number" && params.client_max_window_bits > this._options.clientMaxWindowBits) {
          throw new Error(
            'Unexpected or invalid parameter "client_max_window_bits"'
          );
        }
        return params;
      }
      /**
       * Normalize parameters.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Array} The offers/response with normalized parameters
       * @private
       */
      normalizeParams(configurations) {
        configurations.forEach((params) => {
          Object.keys(params).forEach((key) => {
            let value = params[key];
            if (value.length > 1) {
              throw new Error(`Parameter "${key}" must have only a single value`);
            }
            value = value[0];
            if (key === "client_max_window_bits") {
              if (value !== true) {
                const num = +value;
                if (!Number.isInteger(num) || num < 8 || num > 15) {
                  throw new TypeError(
                    `Invalid value for parameter "${key}": ${value}`
                  );
                }
                value = num;
              } else if (!this._isServer) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else if (key === "server_max_window_bits") {
              const num = +value;
              if (!Number.isInteger(num) || num < 8 || num > 15) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
              value = num;
            } else if (key === "client_no_context_takeover" || key === "server_no_context_takeover") {
              if (value !== true) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else {
              throw new Error(`Unknown parameter "${key}"`);
            }
            params[key] = value;
          });
        });
        return configurations;
      }
      /**
       * Decompress data. Concurrency limited.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      decompress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._decompress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      /**
       * Compress data. Concurrency limited.
       *
       * @param {(Buffer|String)} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      compress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._compress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      /**
       * Decompress data.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _decompress(data, fin, callback) {
        const endpoint = this._isServer ? "client" : "server";
        if (!this._inflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._inflate = zlib.createInflateRaw({
            ...this._options.zlibInflateOptions,
            windowBits
          });
          this._inflate[kPerMessageDeflate] = this;
          this._inflate[kTotalLength] = 0;
          this._inflate[kBuffers] = [];
          this._inflate.on("error", inflateOnError);
          this._inflate.on("data", inflateOnData);
        }
        this._inflate[kCallback] = callback;
        this._inflate.write(data);
        if (fin)
          this._inflate.write(TRAILER);
        this._inflate.flush(() => {
          const err = this._inflate[kError];
          if (err) {
            this._inflate.close();
            this._inflate = null;
            callback(err);
            return;
          }
          const data2 = bufferUtil.concat(
            this._inflate[kBuffers],
            this._inflate[kTotalLength]
          );
          if (this._inflate._readableState.endEmitted) {
            this._inflate.close();
            this._inflate = null;
          } else {
            this._inflate[kTotalLength] = 0;
            this._inflate[kBuffers] = [];
            if (fin && this.params[`${endpoint}_no_context_takeover`]) {
              this._inflate.reset();
            }
          }
          callback(null, data2);
        });
      }
      /**
       * Compress data.
       *
       * @param {(Buffer|String)} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _compress(data, fin, callback) {
        const endpoint = this._isServer ? "server" : "client";
        if (!this._deflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._deflate = zlib.createDeflateRaw({
            ...this._options.zlibDeflateOptions,
            windowBits
          });
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          this._deflate.on("data", deflateOnData);
        }
        this._deflate[kCallback] = callback;
        this._deflate.write(data);
        this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
          if (!this._deflate) {
            return;
          }
          let data2 = bufferUtil.concat(
            this._deflate[kBuffers],
            this._deflate[kTotalLength]
          );
          if (fin) {
            data2 = new FastBuffer(data2.buffer, data2.byteOffset, data2.length - 4);
          }
          this._deflate[kCallback] = null;
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          if (fin && this.params[`${endpoint}_no_context_takeover`]) {
            this._deflate.reset();
          }
          callback(null, data2);
        });
      }
    };
    module2.exports = PerMessageDeflate;
    function deflateOnData(chunk) {
      this[kBuffers].push(chunk);
      this[kTotalLength] += chunk.length;
    }
    function inflateOnData(chunk) {
      this[kTotalLength] += chunk.length;
      if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
        this[kBuffers].push(chunk);
        return;
      }
      this[kError] = new RangeError("Max payload size exceeded");
      this[kError].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH";
      this[kError][kStatusCode] = 1009;
      this.removeListener("data", inflateOnData);
      this.reset();
    }
    function inflateOnError(err) {
      this[kPerMessageDeflate]._inflate = null;
      if (this[kError]) {
        this[kCallback](this[kError]);
        return;
      }
      err[kStatusCode] = 1007;
      this[kCallback](err);
    }
  }
});

// node_modules/ws/lib/validation.js
var require_validation = __commonJS({
  "node_modules/ws/lib/validation.js"(exports2, module2) {
    "use strict";
    var { isUtf8 } = require("buffer");
    var { hasBlob } = require_constants2();
    var tokenChars = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 0 - 15
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 16 - 31
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      // 32 - 47
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      // 48 - 63
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 64 - 79
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      // 80 - 95
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 96 - 111
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0
      // 112 - 127
    ];
    function isValidStatusCode(code) {
      return code >= 1e3 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3e3 && code <= 4999;
    }
    function _isValidUTF8(buf) {
      const len = buf.length;
      let i = 0;
      while (i < len) {
        if ((buf[i] & 128) === 0) {
          i++;
        } else if ((buf[i] & 224) === 192) {
          if (i + 1 === len || (buf[i + 1] & 192) !== 128 || (buf[i] & 254) === 192) {
            return false;
          }
          i += 2;
        } else if ((buf[i] & 240) === 224) {
          if (i + 2 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || buf[i] === 224 && (buf[i + 1] & 224) === 128 || // Overlong
          buf[i] === 237 && (buf[i + 1] & 224) === 160) {
            return false;
          }
          i += 3;
        } else if ((buf[i] & 248) === 240) {
          if (i + 3 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || (buf[i + 3] & 192) !== 128 || buf[i] === 240 && (buf[i + 1] & 240) === 128 || // Overlong
          buf[i] === 244 && buf[i + 1] > 143 || buf[i] > 244) {
            return false;
          }
          i += 4;
        } else {
          return false;
        }
      }
      return true;
    }
    function isBlob(value) {
      return hasBlob && typeof value === "object" && typeof value.arrayBuffer === "function" && typeof value.type === "string" && typeof value.stream === "function" && (value[Symbol.toStringTag] === "Blob" || value[Symbol.toStringTag] === "File");
    }
    module2.exports = {
      isBlob,
      isValidStatusCode,
      isValidUTF8: _isValidUTF8,
      tokenChars
    };
    if (isUtf8) {
      module2.exports.isValidUTF8 = function(buf) {
        return buf.length < 24 ? _isValidUTF8(buf) : isUtf8(buf);
      };
    } else if (!process.env.WS_NO_UTF_8_VALIDATE) {
      try {
        const isValidUTF8 = require("utf-8-validate");
        module2.exports.isValidUTF8 = function(buf) {
          return buf.length < 32 ? _isValidUTF8(buf) : isValidUTF8(buf);
        };
      } catch (e) {
      }
    }
  }
});

// node_modules/ws/lib/receiver.js
var require_receiver = __commonJS({
  "node_modules/ws/lib/receiver.js"(exports2, module2) {
    "use strict";
    var { Writable } = require("stream");
    var PerMessageDeflate = require_permessage_deflate();
    var {
      BINARY_TYPES,
      EMPTY_BUFFER,
      kStatusCode,
      kWebSocket
    } = require_constants2();
    var { concat, toArrayBuffer, unmask } = require_buffer_util();
    var { isValidStatusCode, isValidUTF8 } = require_validation();
    var FastBuffer = Buffer[Symbol.species];
    var GET_INFO = 0;
    var GET_PAYLOAD_LENGTH_16 = 1;
    var GET_PAYLOAD_LENGTH_64 = 2;
    var GET_MASK = 3;
    var GET_DATA = 4;
    var INFLATING = 5;
    var DEFER_EVENT = 6;
    var Receiver = class extends Writable {
      /**
       * Creates a Receiver instance.
       *
       * @param {Object} [options] Options object
       * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {String} [options.binaryType=nodebuffer] The type for binary data
       * @param {Object} [options.extensions] An object containing the negotiated
       *     extensions
       * @param {Boolean} [options.isServer=false] Specifies whether to operate in
       *     client or server mode
       * @param {Number} [options.maxPayload=0] The maximum allowed message length
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       */
      constructor(options = {}) {
        super();
        this._allowSynchronousEvents = options.allowSynchronousEvents !== void 0 ? options.allowSynchronousEvents : true;
        this._binaryType = options.binaryType || BINARY_TYPES[0];
        this._extensions = options.extensions || {};
        this._isServer = !!options.isServer;
        this._maxPayload = options.maxPayload | 0;
        this._skipUTF8Validation = !!options.skipUTF8Validation;
        this[kWebSocket] = void 0;
        this._bufferedBytes = 0;
        this._buffers = [];
        this._compressed = false;
        this._payloadLength = 0;
        this._mask = void 0;
        this._fragmented = 0;
        this._masked = false;
        this._fin = false;
        this._opcode = 0;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragments = [];
        this._errored = false;
        this._loop = false;
        this._state = GET_INFO;
      }
      /**
       * Implements `Writable.prototype._write()`.
       *
       * @param {Buffer} chunk The chunk of data to write
       * @param {String} encoding The character encoding of `chunk`
       * @param {Function} cb Callback
       * @private
       */
      _write(chunk, encoding, cb) {
        if (this._opcode === 8 && this._state == GET_INFO)
          return cb();
        this._bufferedBytes += chunk.length;
        this._buffers.push(chunk);
        this.startLoop(cb);
      }
      /**
       * Consumes `n` bytes from the buffered data.
       *
       * @param {Number} n The number of bytes to consume
       * @return {Buffer} The consumed bytes
       * @private
       */
      consume(n) {
        this._bufferedBytes -= n;
        if (n === this._buffers[0].length)
          return this._buffers.shift();
        if (n < this._buffers[0].length) {
          const buf = this._buffers[0];
          this._buffers[0] = new FastBuffer(
            buf.buffer,
            buf.byteOffset + n,
            buf.length - n
          );
          return new FastBuffer(buf.buffer, buf.byteOffset, n);
        }
        const dst = Buffer.allocUnsafe(n);
        do {
          const buf = this._buffers[0];
          const offset = dst.length - n;
          if (n >= buf.length) {
            dst.set(this._buffers.shift(), offset);
          } else {
            dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
            this._buffers[0] = new FastBuffer(
              buf.buffer,
              buf.byteOffset + n,
              buf.length - n
            );
          }
          n -= buf.length;
        } while (n > 0);
        return dst;
      }
      /**
       * Starts the parsing loop.
       *
       * @param {Function} cb Callback
       * @private
       */
      startLoop(cb) {
        this._loop = true;
        do {
          switch (this._state) {
            case GET_INFO:
              this.getInfo(cb);
              break;
            case GET_PAYLOAD_LENGTH_16:
              this.getPayloadLength16(cb);
              break;
            case GET_PAYLOAD_LENGTH_64:
              this.getPayloadLength64(cb);
              break;
            case GET_MASK:
              this.getMask();
              break;
            case GET_DATA:
              this.getData(cb);
              break;
            case INFLATING:
            case DEFER_EVENT:
              this._loop = false;
              return;
          }
        } while (this._loop);
        if (!this._errored)
          cb();
      }
      /**
       * Reads the first two bytes of a frame.
       *
       * @param {Function} cb Callback
       * @private
       */
      getInfo(cb) {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        const buf = this.consume(2);
        if ((buf[0] & 48) !== 0) {
          const error = this.createError(
            RangeError,
            "RSV2 and RSV3 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_2_3"
          );
          cb(error);
          return;
        }
        const compressed = (buf[0] & 64) === 64;
        if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
          const error = this.createError(
            RangeError,
            "RSV1 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_1"
          );
          cb(error);
          return;
        }
        this._fin = (buf[0] & 128) === 128;
        this._opcode = buf[0] & 15;
        this._payloadLength = buf[1] & 127;
        if (this._opcode === 0) {
          if (compressed) {
            const error = this.createError(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
            cb(error);
            return;
          }
          if (!this._fragmented) {
            const error = this.createError(
              RangeError,
              "invalid opcode 0",
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
            cb(error);
            return;
          }
          this._opcode = this._fragmented;
        } else if (this._opcode === 1 || this._opcode === 2) {
          if (this._fragmented) {
            const error = this.createError(
              RangeError,
              `invalid opcode ${this._opcode}`,
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
            cb(error);
            return;
          }
          this._compressed = compressed;
        } else if (this._opcode > 7 && this._opcode < 11) {
          if (!this._fin) {
            const error = this.createError(
              RangeError,
              "FIN must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_FIN"
            );
            cb(error);
            return;
          }
          if (compressed) {
            const error = this.createError(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
            cb(error);
            return;
          }
          if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
            const error = this.createError(
              RangeError,
              `invalid payload length ${this._payloadLength}`,
              true,
              1002,
              "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"
            );
            cb(error);
            return;
          }
        } else {
          const error = this.createError(
            RangeError,
            `invalid opcode ${this._opcode}`,
            true,
            1002,
            "WS_ERR_INVALID_OPCODE"
          );
          cb(error);
          return;
        }
        if (!this._fin && !this._fragmented)
          this._fragmented = this._opcode;
        this._masked = (buf[1] & 128) === 128;
        if (this._isServer) {
          if (!this._masked) {
            const error = this.createError(
              RangeError,
              "MASK must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_MASK"
            );
            cb(error);
            return;
          }
        } else if (this._masked) {
          const error = this.createError(
            RangeError,
            "MASK must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_MASK"
          );
          cb(error);
          return;
        }
        if (this._payloadLength === 126)
          this._state = GET_PAYLOAD_LENGTH_16;
        else if (this._payloadLength === 127)
          this._state = GET_PAYLOAD_LENGTH_64;
        else
          this.haveLength(cb);
      }
      /**
       * Gets extended payload length (7+16).
       *
       * @param {Function} cb Callback
       * @private
       */
      getPayloadLength16(cb) {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        this._payloadLength = this.consume(2).readUInt16BE(0);
        this.haveLength(cb);
      }
      /**
       * Gets extended payload length (7+64).
       *
       * @param {Function} cb Callback
       * @private
       */
      getPayloadLength64(cb) {
        if (this._bufferedBytes < 8) {
          this._loop = false;
          return;
        }
        const buf = this.consume(8);
        const num = buf.readUInt32BE(0);
        if (num > Math.pow(2, 53 - 32) - 1) {
          const error = this.createError(
            RangeError,
            "Unsupported WebSocket frame: payload length > 2^53 - 1",
            false,
            1009,
            "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH"
          );
          cb(error);
          return;
        }
        this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
        this.haveLength(cb);
      }
      /**
       * Payload length has been read.
       *
       * @param {Function} cb Callback
       * @private
       */
      haveLength(cb) {
        if (this._payloadLength && this._opcode < 8) {
          this._totalPayloadLength += this._payloadLength;
          if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
            const error = this.createError(
              RangeError,
              "Max payload size exceeded",
              false,
              1009,
              "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
            );
            cb(error);
            return;
          }
        }
        if (this._masked)
          this._state = GET_MASK;
        else
          this._state = GET_DATA;
      }
      /**
       * Reads mask bytes.
       *
       * @private
       */
      getMask() {
        if (this._bufferedBytes < 4) {
          this._loop = false;
          return;
        }
        this._mask = this.consume(4);
        this._state = GET_DATA;
      }
      /**
       * Reads data bytes.
       *
       * @param {Function} cb Callback
       * @private
       */
      getData(cb) {
        let data = EMPTY_BUFFER;
        if (this._payloadLength) {
          if (this._bufferedBytes < this._payloadLength) {
            this._loop = false;
            return;
          }
          data = this.consume(this._payloadLength);
          if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) {
            unmask(data, this._mask);
          }
        }
        if (this._opcode > 7) {
          this.controlMessage(data, cb);
          return;
        }
        if (this._compressed) {
          this._state = INFLATING;
          this.decompress(data, cb);
          return;
        }
        if (data.length) {
          this._messageLength = this._totalPayloadLength;
          this._fragments.push(data);
        }
        this.dataMessage(cb);
      }
      /**
       * Decompresses data.
       *
       * @param {Buffer} data Compressed data
       * @param {Function} cb Callback
       * @private
       */
      decompress(data, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        perMessageDeflate.decompress(data, this._fin, (err, buf) => {
          if (err)
            return cb(err);
          if (buf.length) {
            this._messageLength += buf.length;
            if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
              const error = this.createError(
                RangeError,
                "Max payload size exceeded",
                false,
                1009,
                "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
              );
              cb(error);
              return;
            }
            this._fragments.push(buf);
          }
          this.dataMessage(cb);
          if (this._state === GET_INFO)
            this.startLoop(cb);
        });
      }
      /**
       * Handles a data message.
       *
       * @param {Function} cb Callback
       * @private
       */
      dataMessage(cb) {
        if (!this._fin) {
          this._state = GET_INFO;
          return;
        }
        const messageLength = this._messageLength;
        const fragments = this._fragments;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragmented = 0;
        this._fragments = [];
        if (this._opcode === 2) {
          let data;
          if (this._binaryType === "nodebuffer") {
            data = concat(fragments, messageLength);
          } else if (this._binaryType === "arraybuffer") {
            data = toArrayBuffer(concat(fragments, messageLength));
          } else if (this._binaryType === "blob") {
            data = new Blob(fragments);
          } else {
            data = fragments;
          }
          if (this._allowSynchronousEvents) {
            this.emit("message", data, true);
            this._state = GET_INFO;
          } else {
            this._state = DEFER_EVENT;
            setImmediate(() => {
              this.emit("message", data, true);
              this._state = GET_INFO;
              this.startLoop(cb);
            });
          }
        } else {
          const buf = concat(fragments, messageLength);
          if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
            const error = this.createError(
              Error,
              "invalid UTF-8 sequence",
              true,
              1007,
              "WS_ERR_INVALID_UTF8"
            );
            cb(error);
            return;
          }
          if (this._state === INFLATING || this._allowSynchronousEvents) {
            this.emit("message", buf, false);
            this._state = GET_INFO;
          } else {
            this._state = DEFER_EVENT;
            setImmediate(() => {
              this.emit("message", buf, false);
              this._state = GET_INFO;
              this.startLoop(cb);
            });
          }
        }
      }
      /**
       * Handles a control message.
       *
       * @param {Buffer} data Data to handle
       * @return {(Error|RangeError|undefined)} A possible error
       * @private
       */
      controlMessage(data, cb) {
        if (this._opcode === 8) {
          if (data.length === 0) {
            this._loop = false;
            this.emit("conclude", 1005, EMPTY_BUFFER);
            this.end();
          } else {
            const code = data.readUInt16BE(0);
            if (!isValidStatusCode(code)) {
              const error = this.createError(
                RangeError,
                `invalid status code ${code}`,
                true,
                1002,
                "WS_ERR_INVALID_CLOSE_CODE"
              );
              cb(error);
              return;
            }
            const buf = new FastBuffer(
              data.buffer,
              data.byteOffset + 2,
              data.length - 2
            );
            if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
              const error = this.createError(
                Error,
                "invalid UTF-8 sequence",
                true,
                1007,
                "WS_ERR_INVALID_UTF8"
              );
              cb(error);
              return;
            }
            this._loop = false;
            this.emit("conclude", code, buf);
            this.end();
          }
          this._state = GET_INFO;
          return;
        }
        if (this._allowSynchronousEvents) {
          this.emit(this._opcode === 9 ? "ping" : "pong", data);
          this._state = GET_INFO;
        } else {
          this._state = DEFER_EVENT;
          setImmediate(() => {
            this.emit(this._opcode === 9 ? "ping" : "pong", data);
            this._state = GET_INFO;
            this.startLoop(cb);
          });
        }
      }
      /**
       * Builds an error object.
       *
       * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
       * @param {String} message The error message
       * @param {Boolean} prefix Specifies whether or not to add a default prefix to
       *     `message`
       * @param {Number} statusCode The status code
       * @param {String} errorCode The exposed error code
       * @return {(Error|RangeError)} The error
       * @private
       */
      createError(ErrorCtor, message, prefix, statusCode, errorCode) {
        this._loop = false;
        this._errored = true;
        const err = new ErrorCtor(
          prefix ? `Invalid WebSocket frame: ${message}` : message
        );
        Error.captureStackTrace(err, this.createError);
        err.code = errorCode;
        err[kStatusCode] = statusCode;
        return err;
      }
    };
    module2.exports = Receiver;
  }
});

// node_modules/ws/lib/sender.js
var require_sender = __commonJS({
  "node_modules/ws/lib/sender.js"(exports2, module2) {
    "use strict";
    var { Duplex } = require("stream");
    var { randomFillSync } = require("crypto");
    var PerMessageDeflate = require_permessage_deflate();
    var { EMPTY_BUFFER, kWebSocket, NOOP } = require_constants2();
    var { isBlob, isValidStatusCode } = require_validation();
    var { mask: applyMask, toBuffer } = require_buffer_util();
    var kByteLength = Symbol("kByteLength");
    var maskBuffer = Buffer.alloc(4);
    var RANDOM_POOL_SIZE = 8 * 1024;
    var randomPool;
    var randomPoolPointer = RANDOM_POOL_SIZE;
    var DEFAULT = 0;
    var DEFLATING = 1;
    var GET_BLOB_DATA = 2;
    var Sender = class _Sender {
      /**
       * Creates a Sender instance.
       *
       * @param {Duplex} socket The connection socket
       * @param {Object} [extensions] An object containing the negotiated extensions
       * @param {Function} [generateMask] The function used to generate the masking
       *     key
       */
      constructor(socket, extensions, generateMask) {
        this._extensions = extensions || {};
        if (generateMask) {
          this._generateMask = generateMask;
          this._maskBuffer = Buffer.alloc(4);
        }
        this._socket = socket;
        this._firstFragment = true;
        this._compress = false;
        this._bufferedBytes = 0;
        this._queue = [];
        this._state = DEFAULT;
        this.onerror = NOOP;
        this[kWebSocket] = void 0;
      }
      /**
       * Frames a piece of data according to the HyBi WebSocket protocol.
       *
       * @param {(Buffer|String)} data The data to frame
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @return {(Buffer|String)[]} The framed data
       * @public
       */
      static frame(data, options) {
        let mask;
        let merge = false;
        let offset = 2;
        let skipMasking = false;
        if (options.mask) {
          mask = options.maskBuffer || maskBuffer;
          if (options.generateMask) {
            options.generateMask(mask);
          } else {
            if (randomPoolPointer === RANDOM_POOL_SIZE) {
              if (randomPool === void 0) {
                randomPool = Buffer.alloc(RANDOM_POOL_SIZE);
              }
              randomFillSync(randomPool, 0, RANDOM_POOL_SIZE);
              randomPoolPointer = 0;
            }
            mask[0] = randomPool[randomPoolPointer++];
            mask[1] = randomPool[randomPoolPointer++];
            mask[2] = randomPool[randomPoolPointer++];
            mask[3] = randomPool[randomPoolPointer++];
          }
          skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
          offset = 6;
        }
        let dataLength;
        if (typeof data === "string") {
          if ((!options.mask || skipMasking) && options[kByteLength] !== void 0) {
            dataLength = options[kByteLength];
          } else {
            data = Buffer.from(data);
            dataLength = data.length;
          }
        } else {
          dataLength = data.length;
          merge = options.mask && options.readOnly && !skipMasking;
        }
        let payloadLength = dataLength;
        if (dataLength >= 65536) {
          offset += 8;
          payloadLength = 127;
        } else if (dataLength > 125) {
          offset += 2;
          payloadLength = 126;
        }
        const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);
        target[0] = options.fin ? options.opcode | 128 : options.opcode;
        if (options.rsv1)
          target[0] |= 64;
        target[1] = payloadLength;
        if (payloadLength === 126) {
          target.writeUInt16BE(dataLength, 2);
        } else if (payloadLength === 127) {
          target[2] = target[3] = 0;
          target.writeUIntBE(dataLength, 4, 6);
        }
        if (!options.mask)
          return [target, data];
        target[1] |= 128;
        target[offset - 4] = mask[0];
        target[offset - 3] = mask[1];
        target[offset - 2] = mask[2];
        target[offset - 1] = mask[3];
        if (skipMasking)
          return [target, data];
        if (merge) {
          applyMask(data, mask, target, offset, dataLength);
          return [target];
        }
        applyMask(data, mask, data, 0, dataLength);
        return [target, data];
      }
      /**
       * Sends a close message to the other peer.
       *
       * @param {Number} [code] The status code component of the body
       * @param {(String|Buffer)} [data] The message component of the body
       * @param {Boolean} [mask=false] Specifies whether or not to mask the message
       * @param {Function} [cb] Callback
       * @public
       */
      close(code, data, mask, cb) {
        let buf;
        if (code === void 0) {
          buf = EMPTY_BUFFER;
        } else if (typeof code !== "number" || !isValidStatusCode(code)) {
          throw new TypeError("First argument must be a valid error code number");
        } else if (data === void 0 || !data.length) {
          buf = Buffer.allocUnsafe(2);
          buf.writeUInt16BE(code, 0);
        } else {
          const length = Buffer.byteLength(data);
          if (length > 123) {
            throw new RangeError("The message must not be greater than 123 bytes");
          }
          buf = Buffer.allocUnsafe(2 + length);
          buf.writeUInt16BE(code, 0);
          if (typeof data === "string") {
            buf.write(data, 2);
          } else {
            buf.set(data, 2);
          }
        }
        const options = {
          [kByteLength]: buf.length,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 8,
          readOnly: false,
          rsv1: false
        };
        if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, buf, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(buf, options), cb);
        }
      }
      /**
       * Sends a ping message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      ping(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 9,
          readOnly,
          rsv1: false
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, false, options, cb]);
          } else {
            this.getBlobData(data, false, options, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(data, options), cb);
        }
      }
      /**
       * Sends a pong message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      pong(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 10,
          readOnly,
          rsv1: false
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, false, options, cb]);
          } else {
            this.getBlobData(data, false, options, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(data, options), cb);
        }
      }
      /**
       * Sends a data message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Object} options Options object
       * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
       *     or text
       * @param {Boolean} [options.compress=false] Specifies whether or not to
       *     compress `data`
       * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Function} [cb] Callback
       * @public
       */
      send(data, options, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        let opcode = options.binary ? 2 : 1;
        let rsv1 = options.compress;
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (this._firstFragment) {
          this._firstFragment = false;
          if (rsv1 && perMessageDeflate && perMessageDeflate.params[perMessageDeflate._isServer ? "server_no_context_takeover" : "client_no_context_takeover"]) {
            rsv1 = byteLength >= perMessageDeflate._threshold;
          }
          this._compress = rsv1;
        } else {
          rsv1 = false;
          opcode = 0;
        }
        if (options.fin)
          this._firstFragment = true;
        const opts = {
          [kByteLength]: byteLength,
          fin: options.fin,
          generateMask: this._generateMask,
          mask: options.mask,
          maskBuffer: this._maskBuffer,
          opcode,
          readOnly,
          rsv1
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, this._compress, opts, cb]);
          } else {
            this.getBlobData(data, this._compress, opts, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, this._compress, opts, cb]);
        } else {
          this.dispatch(data, this._compress, opts, cb);
        }
      }
      /**
       * Gets the contents of a blob as binary data.
       *
       * @param {Blob} blob The blob
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     the data
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      getBlobData(blob, compress, options, cb) {
        this._bufferedBytes += options[kByteLength];
        this._state = GET_BLOB_DATA;
        blob.arrayBuffer().then((arrayBuffer) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while the blob was being read"
            );
            process.nextTick(callCallbacks, this, err, cb);
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          const data = toBuffer(arrayBuffer);
          if (!compress) {
            this._state = DEFAULT;
            this.sendFrame(_Sender.frame(data, options), cb);
            this.dequeue();
          } else {
            this.dispatch(data, compress, options, cb);
          }
        }).catch((err) => {
          process.nextTick(onError, this, err, cb);
        });
      }
      /**
       * Dispatches a message.
       *
       * @param {(Buffer|String)} data The message to send
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     `data`
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      dispatch(data, compress, options, cb) {
        if (!compress) {
          this.sendFrame(_Sender.frame(data, options), cb);
          return;
        }
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        this._bufferedBytes += options[kByteLength];
        this._state = DEFLATING;
        perMessageDeflate.compress(data, options.fin, (_, buf) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while data was being compressed"
            );
            callCallbacks(this, err, cb);
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          this._state = DEFAULT;
          options.readOnly = false;
          this.sendFrame(_Sender.frame(buf, options), cb);
          this.dequeue();
        });
      }
      /**
       * Executes queued send operations.
       *
       * @private
       */
      dequeue() {
        while (this._state === DEFAULT && this._queue.length) {
          const params = this._queue.shift();
          this._bufferedBytes -= params[3][kByteLength];
          Reflect.apply(params[0], this, params.slice(1));
        }
      }
      /**
       * Enqueues a send operation.
       *
       * @param {Array} params Send operation parameters.
       * @private
       */
      enqueue(params) {
        this._bufferedBytes += params[3][kByteLength];
        this._queue.push(params);
      }
      /**
       * Sends a frame.
       *
       * @param {(Buffer | String)[]} list The frame to send
       * @param {Function} [cb] Callback
       * @private
       */
      sendFrame(list, cb) {
        if (list.length === 2) {
          this._socket.cork();
          this._socket.write(list[0]);
          this._socket.write(list[1], cb);
          this._socket.uncork();
        } else {
          this._socket.write(list[0], cb);
        }
      }
    };
    module2.exports = Sender;
    function callCallbacks(sender, err, cb) {
      if (typeof cb === "function")
        cb(err);
      for (let i = 0; i < sender._queue.length; i++) {
        const params = sender._queue[i];
        const callback = params[params.length - 1];
        if (typeof callback === "function")
          callback(err);
      }
    }
    function onError(sender, err, cb) {
      callCallbacks(sender, err, cb);
      sender.onerror(err);
    }
  }
});

// node_modules/ws/lib/event-target.js
var require_event_target = __commonJS({
  "node_modules/ws/lib/event-target.js"(exports2, module2) {
    "use strict";
    var { kForOnEventAttribute, kListener } = require_constants2();
    var kCode = Symbol("kCode");
    var kData = Symbol("kData");
    var kError = Symbol("kError");
    var kMessage = Symbol("kMessage");
    var kReason = Symbol("kReason");
    var kTarget = Symbol("kTarget");
    var kType = Symbol("kType");
    var kWasClean = Symbol("kWasClean");
    var Event = class {
      /**
       * Create a new `Event`.
       *
       * @param {String} type The name of the event
       * @throws {TypeError} If the `type` argument is not specified
       */
      constructor(type) {
        this[kTarget] = null;
        this[kType] = type;
      }
      /**
       * @type {*}
       */
      get target() {
        return this[kTarget];
      }
      /**
       * @type {String}
       */
      get type() {
        return this[kType];
      }
    };
    Object.defineProperty(Event.prototype, "target", { enumerable: true });
    Object.defineProperty(Event.prototype, "type", { enumerable: true });
    var CloseEvent = class extends Event {
      /**
       * Create a new `CloseEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {Number} [options.code=0] The status code explaining why the
       *     connection was closed
       * @param {String} [options.reason=''] A human-readable string explaining why
       *     the connection was closed
       * @param {Boolean} [options.wasClean=false] Indicates whether or not the
       *     connection was cleanly closed
       */
      constructor(type, options = {}) {
        super(type);
        this[kCode] = options.code === void 0 ? 0 : options.code;
        this[kReason] = options.reason === void 0 ? "" : options.reason;
        this[kWasClean] = options.wasClean === void 0 ? false : options.wasClean;
      }
      /**
       * @type {Number}
       */
      get code() {
        return this[kCode];
      }
      /**
       * @type {String}
       */
      get reason() {
        return this[kReason];
      }
      /**
       * @type {Boolean}
       */
      get wasClean() {
        return this[kWasClean];
      }
    };
    Object.defineProperty(CloseEvent.prototype, "code", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "reason", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "wasClean", { enumerable: true });
    var ErrorEvent = class extends Event {
      /**
       * Create a new `ErrorEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.error=null] The error that generated this event
       * @param {String} [options.message=''] The error message
       */
      constructor(type, options = {}) {
        super(type);
        this[kError] = options.error === void 0 ? null : options.error;
        this[kMessage] = options.message === void 0 ? "" : options.message;
      }
      /**
       * @type {*}
       */
      get error() {
        return this[kError];
      }
      /**
       * @type {String}
       */
      get message() {
        return this[kMessage];
      }
    };
    Object.defineProperty(ErrorEvent.prototype, "error", { enumerable: true });
    Object.defineProperty(ErrorEvent.prototype, "message", { enumerable: true });
    var MessageEvent = class extends Event {
      /**
       * Create a new `MessageEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.data=null] The message content
       */
      constructor(type, options = {}) {
        super(type);
        this[kData] = options.data === void 0 ? null : options.data;
      }
      /**
       * @type {*}
       */
      get data() {
        return this[kData];
      }
    };
    Object.defineProperty(MessageEvent.prototype, "data", { enumerable: true });
    var EventTarget = {
      /**
       * Register an event listener.
       *
       * @param {String} type A string representing the event type to listen for
       * @param {(Function|Object)} handler The listener to add
       * @param {Object} [options] An options object specifies characteristics about
       *     the event listener
       * @param {Boolean} [options.once=false] A `Boolean` indicating that the
       *     listener should be invoked at most once after being added. If `true`,
       *     the listener would be automatically removed when invoked.
       * @public
       */
      addEventListener(type, handler, options = {}) {
        for (const listener of this.listeners(type)) {
          if (!options[kForOnEventAttribute] && listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            return;
          }
        }
        let wrapper;
        if (type === "message") {
          wrapper = function onMessage(data, isBinary) {
            const event = new MessageEvent("message", {
              data: isBinary ? data : data.toString()
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "close") {
          wrapper = function onClose(code, message) {
            const event = new CloseEvent("close", {
              code,
              reason: message.toString(),
              wasClean: this._closeFrameReceived && this._closeFrameSent
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "error") {
          wrapper = function onError(error) {
            const event = new ErrorEvent("error", {
              error,
              message: error.message
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "open") {
          wrapper = function onOpen() {
            const event = new Event("open");
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else {
          return;
        }
        wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
        wrapper[kListener] = handler;
        if (options.once) {
          this.once(type, wrapper);
        } else {
          this.on(type, wrapper);
        }
      },
      /**
       * Remove an event listener.
       *
       * @param {String} type A string representing the event type to remove
       * @param {(Function|Object)} handler The listener to remove
       * @public
       */
      removeEventListener(type, handler) {
        for (const listener of this.listeners(type)) {
          if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            this.removeListener(type, listener);
            break;
          }
        }
      }
    };
    module2.exports = {
      CloseEvent,
      ErrorEvent,
      Event,
      EventTarget,
      MessageEvent
    };
    function callListener(listener, thisArg, event) {
      if (typeof listener === "object" && listener.handleEvent) {
        listener.handleEvent.call(listener, event);
      } else {
        listener.call(thisArg, event);
      }
    }
  }
});

// node_modules/ws/lib/extension.js
var require_extension = __commonJS({
  "node_modules/ws/lib/extension.js"(exports2, module2) {
    "use strict";
    var { tokenChars } = require_validation();
    function push(dest, name, elem) {
      if (dest[name] === void 0)
        dest[name] = [elem];
      else
        dest[name].push(elem);
    }
    function parse(header) {
      const offers = /* @__PURE__ */ Object.create(null);
      let params = /* @__PURE__ */ Object.create(null);
      let mustUnescape = false;
      let isEscaping = false;
      let inQuotes = false;
      let extensionName;
      let paramName;
      let start = -1;
      let code = -1;
      let end = -1;
      let i = 0;
      for (; i < header.length; i++) {
        code = header.charCodeAt(i);
        if (extensionName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1)
              start = i;
          } else if (i !== 0 && (code === 32 || code === 9)) {
            if (end === -1 && start !== -1)
              end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1)
              end = i;
            const name = header.slice(start, end);
            if (code === 44) {
              push(offers, name, params);
              params = /* @__PURE__ */ Object.create(null);
            } else {
              extensionName = name;
            }
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else if (paramName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1)
              start = i;
          } else if (code === 32 || code === 9) {
            if (end === -1 && start !== -1)
              end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1)
              end = i;
            push(params, header.slice(start, end), true);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            start = end = -1;
          } else if (code === 61 && start !== -1 && end === -1) {
            paramName = header.slice(start, i);
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else {
          if (isEscaping) {
            if (tokenChars[code] !== 1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (start === -1)
              start = i;
            else if (!mustUnescape)
              mustUnescape = true;
            isEscaping = false;
          } else if (inQuotes) {
            if (tokenChars[code] === 1) {
              if (start === -1)
                start = i;
            } else if (code === 34 && start !== -1) {
              inQuotes = false;
              end = i;
            } else if (code === 92) {
              isEscaping = true;
            } else {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
          } else if (code === 34 && header.charCodeAt(i - 1) === 61) {
            inQuotes = true;
          } else if (end === -1 && tokenChars[code] === 1) {
            if (start === -1)
              start = i;
          } else if (start !== -1 && (code === 32 || code === 9)) {
            if (end === -1)
              end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1)
              end = i;
            let value = header.slice(start, end);
            if (mustUnescape) {
              value = value.replace(/\\/g, "");
              mustUnescape = false;
            }
            push(params, paramName, value);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            paramName = void 0;
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        }
      }
      if (start === -1 || inQuotes || code === 32 || code === 9) {
        throw new SyntaxError("Unexpected end of input");
      }
      if (end === -1)
        end = i;
      const token = header.slice(start, end);
      if (extensionName === void 0) {
        push(offers, token, params);
      } else {
        if (paramName === void 0) {
          push(params, token, true);
        } else if (mustUnescape) {
          push(params, paramName, token.replace(/\\/g, ""));
        } else {
          push(params, paramName, token);
        }
        push(offers, extensionName, params);
      }
      return offers;
    }
    function format(extensions) {
      return Object.keys(extensions).map((extension) => {
        let configurations = extensions[extension];
        if (!Array.isArray(configurations))
          configurations = [configurations];
        return configurations.map((params) => {
          return [extension].concat(
            Object.keys(params).map((k) => {
              let values = params[k];
              if (!Array.isArray(values))
                values = [values];
              return values.map((v) => v === true ? k : `${k}=${v}`).join("; ");
            })
          ).join("; ");
        }).join(", ");
      }).join(", ");
    }
    module2.exports = { format, parse };
  }
});

// node_modules/ws/lib/websocket.js
var require_websocket = __commonJS({
  "node_modules/ws/lib/websocket.js"(exports2, module2) {
    "use strict";
    var EventEmitter2 = require("events");
    var https = require("https");
    var http = require("http");
    var net = require("net");
    var tls = require("tls");
    var { randomBytes, createHash } = require("crypto");
    var { Duplex, Readable } = require("stream");
    var { URL: URL2 } = require("url");
    var PerMessageDeflate = require_permessage_deflate();
    var Receiver = require_receiver();
    var Sender = require_sender();
    var { isBlob } = require_validation();
    var {
      BINARY_TYPES,
      EMPTY_BUFFER,
      GUID,
      kForOnEventAttribute,
      kListener,
      kStatusCode,
      kWebSocket,
      NOOP
    } = require_constants2();
    var {
      EventTarget: { addEventListener, removeEventListener }
    } = require_event_target();
    var { format, parse } = require_extension();
    var { toBuffer } = require_buffer_util();
    var closeTimeout = 30 * 1e3;
    var kAborted = Symbol("kAborted");
    var protocolVersions = [8, 13];
    var readyStates = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];
    var subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
    var WebSocket2 = class _WebSocket extends EventEmitter2 {
      /**
       * Create a new `WebSocket`.
       *
       * @param {(String|URL)} address The URL to which to connect
       * @param {(String|String[])} [protocols] The subprotocols
       * @param {Object} [options] Connection options
       */
      constructor(address, protocols, options) {
        super();
        this._binaryType = BINARY_TYPES[0];
        this._closeCode = 1006;
        this._closeFrameReceived = false;
        this._closeFrameSent = false;
        this._closeMessage = EMPTY_BUFFER;
        this._closeTimer = null;
        this._errorEmitted = false;
        this._extensions = {};
        this._paused = false;
        this._protocol = "";
        this._readyState = _WebSocket.CONNECTING;
        this._receiver = null;
        this._sender = null;
        this._socket = null;
        if (address !== null) {
          this._bufferedAmount = 0;
          this._isServer = false;
          this._redirects = 0;
          if (protocols === void 0) {
            protocols = [];
          } else if (!Array.isArray(protocols)) {
            if (typeof protocols === "object" && protocols !== null) {
              options = protocols;
              protocols = [];
            } else {
              protocols = [protocols];
            }
          }
          initAsClient(this, address, protocols, options);
        } else {
          this._autoPong = options.autoPong;
          this._isServer = true;
        }
      }
      /**
       * For historical reasons, the custom "nodebuffer" type is used by the default
       * instead of "blob".
       *
       * @type {String}
       */
      get binaryType() {
        return this._binaryType;
      }
      set binaryType(type) {
        if (!BINARY_TYPES.includes(type))
          return;
        this._binaryType = type;
        if (this._receiver)
          this._receiver._binaryType = type;
      }
      /**
       * @type {Number}
       */
      get bufferedAmount() {
        if (!this._socket)
          return this._bufferedAmount;
        return this._socket._writableState.length + this._sender._bufferedBytes;
      }
      /**
       * @type {String}
       */
      get extensions() {
        return Object.keys(this._extensions).join();
      }
      /**
       * @type {Boolean}
       */
      get isPaused() {
        return this._paused;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onclose() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onerror() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onopen() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onmessage() {
        return null;
      }
      /**
       * @type {String}
       */
      get protocol() {
        return this._protocol;
      }
      /**
       * @type {Number}
       */
      get readyState() {
        return this._readyState;
      }
      /**
       * @type {String}
       */
      get url() {
        return this._url;
      }
      /**
       * Set up the socket and the internal resources.
       *
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Object} options Options object
       * @param {Boolean} [options.allowSynchronousEvents=false] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Number} [options.maxPayload=0] The maximum allowed message size
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @private
       */
      setSocket(socket, head, options) {
        const receiver = new Receiver({
          allowSynchronousEvents: options.allowSynchronousEvents,
          binaryType: this.binaryType,
          extensions: this._extensions,
          isServer: this._isServer,
          maxPayload: options.maxPayload,
          skipUTF8Validation: options.skipUTF8Validation
        });
        const sender = new Sender(socket, this._extensions, options.generateMask);
        this._receiver = receiver;
        this._sender = sender;
        this._socket = socket;
        receiver[kWebSocket] = this;
        sender[kWebSocket] = this;
        socket[kWebSocket] = this;
        receiver.on("conclude", receiverOnConclude);
        receiver.on("drain", receiverOnDrain);
        receiver.on("error", receiverOnError);
        receiver.on("message", receiverOnMessage);
        receiver.on("ping", receiverOnPing);
        receiver.on("pong", receiverOnPong);
        sender.onerror = senderOnError;
        if (socket.setTimeout)
          socket.setTimeout(0);
        if (socket.setNoDelay)
          socket.setNoDelay();
        if (head.length > 0)
          socket.unshift(head);
        socket.on("close", socketOnClose);
        socket.on("data", socketOnData);
        socket.on("end", socketOnEnd);
        socket.on("error", socketOnError);
        this._readyState = _WebSocket.OPEN;
        this.emit("open");
      }
      /**
       * Emit the `'close'` event.
       *
       * @private
       */
      emitClose() {
        if (!this._socket) {
          this._readyState = _WebSocket.CLOSED;
          this.emit("close", this._closeCode, this._closeMessage);
          return;
        }
        if (this._extensions[PerMessageDeflate.extensionName]) {
          this._extensions[PerMessageDeflate.extensionName].cleanup();
        }
        this._receiver.removeAllListeners();
        this._readyState = _WebSocket.CLOSED;
        this.emit("close", this._closeCode, this._closeMessage);
      }
      /**
       * Start a closing handshake.
       *
       *          +----------+   +-----------+   +----------+
       *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
       *    |     +----------+   +-----------+   +----------+     |
       *          +----------+   +-----------+         |
       * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
       *          +----------+   +-----------+   |
       *    |           |                        |   +---+        |
       *                +------------------------+-->|fin| - - - -
       *    |         +---+                      |   +---+
       *     - - - - -|fin|<---------------------+
       *              +---+
       *
       * @param {Number} [code] Status code explaining why the connection is closing
       * @param {(String|Buffer)} [data] The reason why the connection is
       *     closing
       * @public
       */
      close(code, data) {
        if (this.readyState === _WebSocket.CLOSED)
          return;
        if (this.readyState === _WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this.readyState === _WebSocket.CLOSING) {
          if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
            this._socket.end();
          }
          return;
        }
        this._readyState = _WebSocket.CLOSING;
        this._sender.close(code, data, !this._isServer, (err) => {
          if (err)
            return;
          this._closeFrameSent = true;
          if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) {
            this._socket.end();
          }
        });
        setCloseTimer(this);
      }
      /**
       * Pause the socket.
       *
       * @public
       */
      pause() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
          return;
        }
        this._paused = true;
        this._socket.pause();
      }
      /**
       * Send a ping.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the ping is sent
       * @public
       */
      ping(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number")
          data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0)
          mask = !this._isServer;
        this._sender.ping(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Send a pong.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the pong is sent
       * @public
       */
      pong(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number")
          data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0)
          mask = !this._isServer;
        this._sender.pong(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Resume the socket.
       *
       * @public
       */
      resume() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
          return;
        }
        this._paused = false;
        if (!this._receiver._writableState.needDrain)
          this._socket.resume();
      }
      /**
       * Send a data message.
       *
       * @param {*} data The message to send
       * @param {Object} [options] Options object
       * @param {Boolean} [options.binary] Specifies whether `data` is binary or
       *     text
       * @param {Boolean} [options.compress] Specifies whether or not to compress
       *     `data`
       * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when data is written out
       * @public
       */
      send(data, options, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof options === "function") {
          cb = options;
          options = {};
        }
        if (typeof data === "number")
          data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        const opts = {
          binary: typeof data !== "string",
          mask: !this._isServer,
          compress: true,
          fin: true,
          ...options
        };
        if (!this._extensions[PerMessageDeflate.extensionName]) {
          opts.compress = false;
        }
        this._sender.send(data || EMPTY_BUFFER, opts, cb);
      }
      /**
       * Forcibly close the connection.
       *
       * @public
       */
      terminate() {
        if (this.readyState === _WebSocket.CLOSED)
          return;
        if (this.readyState === _WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this._socket) {
          this._readyState = _WebSocket.CLOSING;
          this._socket.destroy();
        }
      }
    };
    Object.defineProperty(WebSocket2, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket2.prototype, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket2, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket2.prototype, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket2, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket2.prototype, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket2, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    Object.defineProperty(WebSocket2.prototype, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    [
      "binaryType",
      "bufferedAmount",
      "extensions",
      "isPaused",
      "protocol",
      "readyState",
      "url"
    ].forEach((property) => {
      Object.defineProperty(WebSocket2.prototype, property, { enumerable: true });
    });
    ["open", "error", "close", "message"].forEach((method) => {
      Object.defineProperty(WebSocket2.prototype, `on${method}`, {
        enumerable: true,
        get() {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute])
              return listener[kListener];
          }
          return null;
        },
        set(handler) {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) {
              this.removeListener(method, listener);
              break;
            }
          }
          if (typeof handler !== "function")
            return;
          this.addEventListener(method, handler, {
            [kForOnEventAttribute]: true
          });
        }
      });
    });
    WebSocket2.prototype.addEventListener = addEventListener;
    WebSocket2.prototype.removeEventListener = removeEventListener;
    module2.exports = WebSocket2;
    function initAsClient(websocket, address, protocols, options) {
      const opts = {
        allowSynchronousEvents: true,
        autoPong: true,
        protocolVersion: protocolVersions[1],
        maxPayload: 100 * 1024 * 1024,
        skipUTF8Validation: false,
        perMessageDeflate: true,
        followRedirects: false,
        maxRedirects: 10,
        ...options,
        socketPath: void 0,
        hostname: void 0,
        protocol: void 0,
        timeout: void 0,
        method: "GET",
        host: void 0,
        path: void 0,
        port: void 0
      };
      websocket._autoPong = opts.autoPong;
      if (!protocolVersions.includes(opts.protocolVersion)) {
        throw new RangeError(
          `Unsupported protocol version: ${opts.protocolVersion} (supported versions: ${protocolVersions.join(", ")})`
        );
      }
      let parsedUrl;
      if (address instanceof URL2) {
        parsedUrl = address;
      } else {
        try {
          parsedUrl = new URL2(address);
        } catch (e) {
          throw new SyntaxError(`Invalid URL: ${address}`);
        }
      }
      if (parsedUrl.protocol === "http:") {
        parsedUrl.protocol = "ws:";
      } else if (parsedUrl.protocol === "https:") {
        parsedUrl.protocol = "wss:";
      }
      websocket._url = parsedUrl.href;
      const isSecure = parsedUrl.protocol === "wss:";
      const isIpcUrl = parsedUrl.protocol === "ws+unix:";
      let invalidUrlMessage;
      if (parsedUrl.protocol !== "ws:" && !isSecure && !isIpcUrl) {
        invalidUrlMessage = `The URL's protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"`;
      } else if (isIpcUrl && !parsedUrl.pathname) {
        invalidUrlMessage = "The URL's pathname is empty";
      } else if (parsedUrl.hash) {
        invalidUrlMessage = "The URL contains a fragment identifier";
      }
      if (invalidUrlMessage) {
        const err = new SyntaxError(invalidUrlMessage);
        if (websocket._redirects === 0) {
          throw err;
        } else {
          emitErrorAndClose(websocket, err);
          return;
        }
      }
      const defaultPort = isSecure ? 443 : 80;
      const key = randomBytes(16).toString("base64");
      const request = isSecure ? https.request : http.request;
      const protocolSet = /* @__PURE__ */ new Set();
      let perMessageDeflate;
      opts.createConnection = opts.createConnection || (isSecure ? tlsConnect : netConnect);
      opts.defaultPort = opts.defaultPort || defaultPort;
      opts.port = parsedUrl.port || defaultPort;
      opts.host = parsedUrl.hostname.startsWith("[") ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
      opts.headers = {
        ...opts.headers,
        "Sec-WebSocket-Version": opts.protocolVersion,
        "Sec-WebSocket-Key": key,
        Connection: "Upgrade",
        Upgrade: "websocket"
      };
      opts.path = parsedUrl.pathname + parsedUrl.search;
      opts.timeout = opts.handshakeTimeout;
      if (opts.perMessageDeflate) {
        perMessageDeflate = new PerMessageDeflate(
          opts.perMessageDeflate !== true ? opts.perMessageDeflate : {},
          false,
          opts.maxPayload
        );
        opts.headers["Sec-WebSocket-Extensions"] = format({
          [PerMessageDeflate.extensionName]: perMessageDeflate.offer()
        });
      }
      if (protocols.length) {
        for (const protocol of protocols) {
          if (typeof protocol !== "string" || !subprotocolRegex.test(protocol) || protocolSet.has(protocol)) {
            throw new SyntaxError(
              "An invalid or duplicated subprotocol was specified"
            );
          }
          protocolSet.add(protocol);
        }
        opts.headers["Sec-WebSocket-Protocol"] = protocols.join(",");
      }
      if (opts.origin) {
        if (opts.protocolVersion < 13) {
          opts.headers["Sec-WebSocket-Origin"] = opts.origin;
        } else {
          opts.headers.Origin = opts.origin;
        }
      }
      if (parsedUrl.username || parsedUrl.password) {
        opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
      }
      if (isIpcUrl) {
        const parts = opts.path.split(":");
        opts.socketPath = parts[0];
        opts.path = parts[1];
      }
      let req;
      if (opts.followRedirects) {
        if (websocket._redirects === 0) {
          websocket._originalIpc = isIpcUrl;
          websocket._originalSecure = isSecure;
          websocket._originalHostOrSocketPath = isIpcUrl ? opts.socketPath : parsedUrl.host;
          const headers = options && options.headers;
          options = { ...options, headers: {} };
          if (headers) {
            for (const [key2, value] of Object.entries(headers)) {
              options.headers[key2.toLowerCase()] = value;
            }
          }
        } else if (websocket.listenerCount("redirect") === 0) {
          const isSameHost = isIpcUrl ? websocket._originalIpc ? opts.socketPath === websocket._originalHostOrSocketPath : false : websocket._originalIpc ? false : parsedUrl.host === websocket._originalHostOrSocketPath;
          if (!isSameHost || websocket._originalSecure && !isSecure) {
            delete opts.headers.authorization;
            delete opts.headers.cookie;
            if (!isSameHost)
              delete opts.headers.host;
            opts.auth = void 0;
          }
        }
        if (opts.auth && !options.headers.authorization) {
          options.headers.authorization = "Basic " + Buffer.from(opts.auth).toString("base64");
        }
        req = websocket._req = request(opts);
        if (websocket._redirects) {
          websocket.emit("redirect", websocket.url, req);
        }
      } else {
        req = websocket._req = request(opts);
      }
      if (opts.timeout) {
        req.on("timeout", () => {
          abortHandshake(websocket, req, "Opening handshake has timed out");
        });
      }
      req.on("error", (err) => {
        if (req === null || req[kAborted])
          return;
        req = websocket._req = null;
        emitErrorAndClose(websocket, err);
      });
      req.on("response", (res) => {
        const location = res.headers.location;
        const statusCode = res.statusCode;
        if (location && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
          if (++websocket._redirects > opts.maxRedirects) {
            abortHandshake(websocket, req, "Maximum redirects exceeded");
            return;
          }
          req.abort();
          let addr;
          try {
            addr = new URL2(location, address);
          } catch (e) {
            const err = new SyntaxError(`Invalid URL: ${location}`);
            emitErrorAndClose(websocket, err);
            return;
          }
          initAsClient(websocket, addr, protocols, options);
        } else if (!websocket.emit("unexpected-response", req, res)) {
          abortHandshake(
            websocket,
            req,
            `Unexpected server response: ${res.statusCode}`
          );
        }
      });
      req.on("upgrade", (res, socket, head) => {
        websocket.emit("upgrade", res);
        if (websocket.readyState !== WebSocket2.CONNECTING)
          return;
        req = websocket._req = null;
        const upgrade = res.headers.upgrade;
        if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
          abortHandshake(websocket, socket, "Invalid Upgrade header");
          return;
        }
        const digest = createHash("sha1").update(key + GUID).digest("base64");
        if (res.headers["sec-websocket-accept"] !== digest) {
          abortHandshake(websocket, socket, "Invalid Sec-WebSocket-Accept header");
          return;
        }
        const serverProt = res.headers["sec-websocket-protocol"];
        let protError;
        if (serverProt !== void 0) {
          if (!protocolSet.size) {
            protError = "Server sent a subprotocol but none was requested";
          } else if (!protocolSet.has(serverProt)) {
            protError = "Server sent an invalid subprotocol";
          }
        } else if (protocolSet.size) {
          protError = "Server sent no subprotocol";
        }
        if (protError) {
          abortHandshake(websocket, socket, protError);
          return;
        }
        if (serverProt)
          websocket._protocol = serverProt;
        const secWebSocketExtensions = res.headers["sec-websocket-extensions"];
        if (secWebSocketExtensions !== void 0) {
          if (!perMessageDeflate) {
            const message = "Server sent a Sec-WebSocket-Extensions header but no extension was requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          let extensions;
          try {
            extensions = parse(secWebSocketExtensions);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          const extensionNames = Object.keys(extensions);
          if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate.extensionName) {
            const message = "Server indicated an extension that was not requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          try {
            perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          websocket._extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
        }
        websocket.setSocket(socket, head, {
          allowSynchronousEvents: opts.allowSynchronousEvents,
          generateMask: opts.generateMask,
          maxPayload: opts.maxPayload,
          skipUTF8Validation: opts.skipUTF8Validation
        });
      });
      if (opts.finishRequest) {
        opts.finishRequest(req, websocket);
      } else {
        req.end();
      }
    }
    function emitErrorAndClose(websocket, err) {
      websocket._readyState = WebSocket2.CLOSING;
      websocket._errorEmitted = true;
      websocket.emit("error", err);
      websocket.emitClose();
    }
    function netConnect(options) {
      options.path = options.socketPath;
      return net.connect(options);
    }
    function tlsConnect(options) {
      options.path = void 0;
      if (!options.servername && options.servername !== "") {
        options.servername = net.isIP(options.host) ? "" : options.host;
      }
      return tls.connect(options);
    }
    function abortHandshake(websocket, stream, message) {
      websocket._readyState = WebSocket2.CLOSING;
      const err = new Error(message);
      Error.captureStackTrace(err, abortHandshake);
      if (stream.setHeader) {
        stream[kAborted] = true;
        stream.abort();
        if (stream.socket && !stream.socket.destroyed) {
          stream.socket.destroy();
        }
        process.nextTick(emitErrorAndClose, websocket, err);
      } else {
        stream.destroy(err);
        stream.once("error", websocket.emit.bind(websocket, "error"));
        stream.once("close", websocket.emitClose.bind(websocket));
      }
    }
    function sendAfterClose(websocket, data, cb) {
      if (data) {
        const length = isBlob(data) ? data.size : toBuffer(data).length;
        if (websocket._socket)
          websocket._sender._bufferedBytes += length;
        else
          websocket._bufferedAmount += length;
      }
      if (cb) {
        const err = new Error(
          `WebSocket is not open: readyState ${websocket.readyState} (${readyStates[websocket.readyState]})`
        );
        process.nextTick(cb, err);
      }
    }
    function receiverOnConclude(code, reason) {
      const websocket = this[kWebSocket];
      websocket._closeFrameReceived = true;
      websocket._closeMessage = reason;
      websocket._closeCode = code;
      if (websocket._socket[kWebSocket] === void 0)
        return;
      websocket._socket.removeListener("data", socketOnData);
      process.nextTick(resume, websocket._socket);
      if (code === 1005)
        websocket.close();
      else
        websocket.close(code, reason);
    }
    function receiverOnDrain() {
      const websocket = this[kWebSocket];
      if (!websocket.isPaused)
        websocket._socket.resume();
    }
    function receiverOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket._socket[kWebSocket] !== void 0) {
        websocket._socket.removeListener("data", socketOnData);
        process.nextTick(resume, websocket._socket);
        websocket.close(err[kStatusCode]);
      }
      if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit("error", err);
      }
    }
    function receiverOnFinish() {
      this[kWebSocket].emitClose();
    }
    function receiverOnMessage(data, isBinary) {
      this[kWebSocket].emit("message", data, isBinary);
    }
    function receiverOnPing(data) {
      const websocket = this[kWebSocket];
      if (websocket._autoPong)
        websocket.pong(data, !this._isServer, NOOP);
      websocket.emit("ping", data);
    }
    function receiverOnPong(data) {
      this[kWebSocket].emit("pong", data);
    }
    function resume(stream) {
      stream.resume();
    }
    function senderOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket.readyState === WebSocket2.CLOSED)
        return;
      if (websocket.readyState === WebSocket2.OPEN) {
        websocket._readyState = WebSocket2.CLOSING;
        setCloseTimer(websocket);
      }
      this._socket.end();
      if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit("error", err);
      }
    }
    function setCloseTimer(websocket) {
      websocket._closeTimer = setTimeout(
        websocket._socket.destroy.bind(websocket._socket),
        closeTimeout
      );
    }
    function socketOnClose() {
      const websocket = this[kWebSocket];
      this.removeListener("close", socketOnClose);
      this.removeListener("data", socketOnData);
      this.removeListener("end", socketOnEnd);
      websocket._readyState = WebSocket2.CLOSING;
      let chunk;
      if (!this._readableState.endEmitted && !websocket._closeFrameReceived && !websocket._receiver._writableState.errorEmitted && (chunk = websocket._socket.read()) !== null) {
        websocket._receiver.write(chunk);
      }
      websocket._receiver.end();
      this[kWebSocket] = void 0;
      clearTimeout(websocket._closeTimer);
      if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
        websocket.emitClose();
      } else {
        websocket._receiver.on("error", receiverOnFinish);
        websocket._receiver.on("finish", receiverOnFinish);
      }
    }
    function socketOnData(chunk) {
      if (!this[kWebSocket]._receiver.write(chunk)) {
        this.pause();
      }
    }
    function socketOnEnd() {
      const websocket = this[kWebSocket];
      websocket._readyState = WebSocket2.CLOSING;
      websocket._receiver.end();
      this.end();
    }
    function socketOnError() {
      const websocket = this[kWebSocket];
      this.removeListener("error", socketOnError);
      this.on("error", NOOP);
      if (websocket) {
        websocket._readyState = WebSocket2.CLOSING;
        this.destroy();
      }
    }
  }
});

// node_modules/ws/lib/stream.js
var require_stream2 = __commonJS({
  "node_modules/ws/lib/stream.js"(exports2, module2) {
    "use strict";
    var WebSocket2 = require_websocket();
    var { Duplex } = require("stream");
    function emitClose(stream) {
      stream.emit("close");
    }
    function duplexOnEnd() {
      if (!this.destroyed && this._writableState.finished) {
        this.destroy();
      }
    }
    function duplexOnError(err) {
      this.removeListener("error", duplexOnError);
      this.destroy();
      if (this.listenerCount("error") === 0) {
        this.emit("error", err);
      }
    }
    function createWebSocketStream(ws, options) {
      let terminateOnDestroy = true;
      const duplex = new Duplex({
        ...options,
        autoDestroy: false,
        emitClose: false,
        objectMode: false,
        writableObjectMode: false
      });
      ws.on("message", function message(msg, isBinary) {
        const data = !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;
        if (!duplex.push(data))
          ws.pause();
      });
      ws.once("error", function error(err) {
        if (duplex.destroyed)
          return;
        terminateOnDestroy = false;
        duplex.destroy(err);
      });
      ws.once("close", function close() {
        if (duplex.destroyed)
          return;
        duplex.push(null);
      });
      duplex._destroy = function(err, callback) {
        if (ws.readyState === ws.CLOSED) {
          callback(err);
          process.nextTick(emitClose, duplex);
          return;
        }
        let called = false;
        ws.once("error", function error(err2) {
          called = true;
          callback(err2);
        });
        ws.once("close", function close() {
          if (!called)
            callback(err);
          process.nextTick(emitClose, duplex);
        });
        if (terminateOnDestroy)
          ws.terminate();
      };
      duplex._final = function(callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._final(callback);
          });
          return;
        }
        if (ws._socket === null)
          return;
        if (ws._socket._writableState.finished) {
          callback();
          if (duplex._readableState.endEmitted)
            duplex.destroy();
        } else {
          ws._socket.once("finish", function finish() {
            callback();
          });
          ws.close();
        }
      };
      duplex._read = function() {
        if (ws.isPaused)
          ws.resume();
      };
      duplex._write = function(chunk, encoding, callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._write(chunk, encoding, callback);
          });
          return;
        }
        ws.send(chunk, callback);
      };
      duplex.on("end", duplexOnEnd);
      duplex.on("error", duplexOnError);
      return duplex;
    }
    module2.exports = createWebSocketStream;
  }
});

// node_modules/ws/lib/subprotocol.js
var require_subprotocol = __commonJS({
  "node_modules/ws/lib/subprotocol.js"(exports2, module2) {
    "use strict";
    var { tokenChars } = require_validation();
    function parse(header) {
      const protocols = /* @__PURE__ */ new Set();
      let start = -1;
      let end = -1;
      let i = 0;
      for (i; i < header.length; i++) {
        const code = header.charCodeAt(i);
        if (end === -1 && tokenChars[code] === 1) {
          if (start === -1)
            start = i;
        } else if (i !== 0 && (code === 32 || code === 9)) {
          if (end === -1 && start !== -1)
            end = i;
        } else if (code === 44) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1)
            end = i;
          const protocol2 = header.slice(start, end);
          if (protocols.has(protocol2)) {
            throw new SyntaxError(`The "${protocol2}" subprotocol is duplicated`);
          }
          protocols.add(protocol2);
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      }
      if (start === -1 || end !== -1) {
        throw new SyntaxError("Unexpected end of input");
      }
      const protocol = header.slice(start, i);
      if (protocols.has(protocol)) {
        throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
      }
      protocols.add(protocol);
      return protocols;
    }
    module2.exports = { parse };
  }
});

// node_modules/ws/lib/websocket-server.js
var require_websocket_server = __commonJS({
  "node_modules/ws/lib/websocket-server.js"(exports2, module2) {
    "use strict";
    var EventEmitter2 = require("events");
    var http = require("http");
    var { Duplex } = require("stream");
    var { createHash } = require("crypto");
    var extension = require_extension();
    var PerMessageDeflate = require_permessage_deflate();
    var subprotocol = require_subprotocol();
    var WebSocket2 = require_websocket();
    var { GUID, kWebSocket } = require_constants2();
    var keyRegex = /^[+/0-9A-Za-z]{22}==$/;
    var RUNNING = 0;
    var CLOSING = 1;
    var CLOSED = 2;
    var WebSocketServer = class extends EventEmitter2 {
      /**
       * Create a `WebSocketServer` instance.
       *
       * @param {Object} options Configuration options
       * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {Boolean} [options.autoPong=true] Specifies whether or not to
       *     automatically send a pong in response to a ping
       * @param {Number} [options.backlog=511] The maximum length of the queue of
       *     pending connections
       * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
       *     track clients
       * @param {Function} [options.handleProtocols] A hook to handle protocols
       * @param {String} [options.host] The hostname where to bind the server
       * @param {Number} [options.maxPayload=104857600] The maximum allowed message
       *     size
       * @param {Boolean} [options.noServer=false] Enable no server mode
       * @param {String} [options.path] Accept only connections matching this path
       * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
       *     permessage-deflate
       * @param {Number} [options.port] The port where to bind the server
       * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
       *     server to use
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @param {Function} [options.verifyClient] A hook to reject connections
       * @param {Function} [options.WebSocket=WebSocket] Specifies the `WebSocket`
       *     class to use. It must be the `WebSocket` class or class that extends it
       * @param {Function} [callback] A listener for the `listening` event
       */
      constructor(options, callback) {
        super();
        options = {
          allowSynchronousEvents: true,
          autoPong: true,
          maxPayload: 100 * 1024 * 1024,
          skipUTF8Validation: false,
          perMessageDeflate: false,
          handleProtocols: null,
          clientTracking: true,
          verifyClient: null,
          noServer: false,
          backlog: null,
          // use default (511 as implemented in net.js)
          server: null,
          host: null,
          path: null,
          port: null,
          WebSocket: WebSocket2,
          ...options
        };
        if (options.port == null && !options.server && !options.noServer || options.port != null && (options.server || options.noServer) || options.server && options.noServer) {
          throw new TypeError(
            'One and only one of the "port", "server", or "noServer" options must be specified'
          );
        }
        if (options.port != null) {
          this._server = http.createServer((req, res) => {
            const body = http.STATUS_CODES[426];
            res.writeHead(426, {
              "Content-Length": body.length,
              "Content-Type": "text/plain"
            });
            res.end(body);
          });
          this._server.listen(
            options.port,
            options.host,
            options.backlog,
            callback
          );
        } else if (options.server) {
          this._server = options.server;
        }
        if (this._server) {
          const emitConnection = this.emit.bind(this, "connection");
          this._removeListeners = addListeners(this._server, {
            listening: this.emit.bind(this, "listening"),
            error: this.emit.bind(this, "error"),
            upgrade: (req, socket, head) => {
              this.handleUpgrade(req, socket, head, emitConnection);
            }
          });
        }
        if (options.perMessageDeflate === true)
          options.perMessageDeflate = {};
        if (options.clientTracking) {
          this.clients = /* @__PURE__ */ new Set();
          this._shouldEmitClose = false;
        }
        this.options = options;
        this._state = RUNNING;
      }
      /**
       * Returns the bound address, the address family name, and port of the server
       * as reported by the operating system if listening on an IP socket.
       * If the server is listening on a pipe or UNIX domain socket, the name is
       * returned as a string.
       *
       * @return {(Object|String|null)} The address of the server
       * @public
       */
      address() {
        if (this.options.noServer) {
          throw new Error('The server is operating in "noServer" mode');
        }
        if (!this._server)
          return null;
        return this._server.address();
      }
      /**
       * Stop the server from accepting new connections and emit the `'close'` event
       * when all existing connections are closed.
       *
       * @param {Function} [cb] A one-time listener for the `'close'` event
       * @public
       */
      close(cb) {
        if (this._state === CLOSED) {
          if (cb) {
            this.once("close", () => {
              cb(new Error("The server is not running"));
            });
          }
          process.nextTick(emitClose, this);
          return;
        }
        if (cb)
          this.once("close", cb);
        if (this._state === CLOSING)
          return;
        this._state = CLOSING;
        if (this.options.noServer || this.options.server) {
          if (this._server) {
            this._removeListeners();
            this._removeListeners = this._server = null;
          }
          if (this.clients) {
            if (!this.clients.size) {
              process.nextTick(emitClose, this);
            } else {
              this._shouldEmitClose = true;
            }
          } else {
            process.nextTick(emitClose, this);
          }
        } else {
          const server = this._server;
          this._removeListeners();
          this._removeListeners = this._server = null;
          server.close(() => {
            emitClose(this);
          });
        }
      }
      /**
       * See if a given request should be handled by this server instance.
       *
       * @param {http.IncomingMessage} req Request object to inspect
       * @return {Boolean} `true` if the request is valid, else `false`
       * @public
       */
      shouldHandle(req) {
        if (this.options.path) {
          const index = req.url.indexOf("?");
          const pathname = index !== -1 ? req.url.slice(0, index) : req.url;
          if (pathname !== this.options.path)
            return false;
        }
        return true;
      }
      /**
       * Handle a HTTP Upgrade request.
       *
       * @param {http.IncomingMessage} req The request object
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @public
       */
      handleUpgrade(req, socket, head, cb) {
        socket.on("error", socketOnError);
        const key = req.headers["sec-websocket-key"];
        const upgrade = req.headers.upgrade;
        const version = +req.headers["sec-websocket-version"];
        if (req.method !== "GET") {
          const message = "Invalid HTTP method";
          abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
          return;
        }
        if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
          const message = "Invalid Upgrade header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (key === void 0 || !keyRegex.test(key)) {
          const message = "Missing or invalid Sec-WebSocket-Key header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (version !== 13 && version !== 8) {
          const message = "Missing or invalid Sec-WebSocket-Version header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message, {
            "Sec-WebSocket-Version": "13, 8"
          });
          return;
        }
        if (!this.shouldHandle(req)) {
          abortHandshake(socket, 400);
          return;
        }
        const secWebSocketProtocol = req.headers["sec-websocket-protocol"];
        let protocols = /* @__PURE__ */ new Set();
        if (secWebSocketProtocol !== void 0) {
          try {
            protocols = subprotocol.parse(secWebSocketProtocol);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Protocol header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        const secWebSocketExtensions = req.headers["sec-websocket-extensions"];
        const extensions = {};
        if (this.options.perMessageDeflate && secWebSocketExtensions !== void 0) {
          const perMessageDeflate = new PerMessageDeflate(
            this.options.perMessageDeflate,
            true,
            this.options.maxPayload
          );
          try {
            const offers = extension.parse(secWebSocketExtensions);
            if (offers[PerMessageDeflate.extensionName]) {
              perMessageDeflate.accept(offers[PerMessageDeflate.extensionName]);
              extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
            }
          } catch (err) {
            const message = "Invalid or unacceptable Sec-WebSocket-Extensions header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        if (this.options.verifyClient) {
          const info = {
            origin: req.headers[`${version === 8 ? "sec-websocket-origin" : "origin"}`],
            secure: !!(req.socket.authorized || req.socket.encrypted),
            req
          };
          if (this.options.verifyClient.length === 2) {
            this.options.verifyClient(info, (verified, code, message, headers) => {
              if (!verified) {
                return abortHandshake(socket, code || 401, message, headers);
              }
              this.completeUpgrade(
                extensions,
                key,
                protocols,
                req,
                socket,
                head,
                cb
              );
            });
            return;
          }
          if (!this.options.verifyClient(info))
            return abortHandshake(socket, 401);
        }
        this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
      }
      /**
       * Upgrade the connection to WebSocket.
       *
       * @param {Object} extensions The accepted extensions
       * @param {String} key The value of the `Sec-WebSocket-Key` header
       * @param {Set} protocols The subprotocols
       * @param {http.IncomingMessage} req The request object
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @throws {Error} If called more than once with the same socket
       * @private
       */
      completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
        if (!socket.readable || !socket.writable)
          return socket.destroy();
        if (socket[kWebSocket]) {
          throw new Error(
            "server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration"
          );
        }
        if (this._state > RUNNING)
          return abortHandshake(socket, 503);
        const digest = createHash("sha1").update(key + GUID).digest("base64");
        const headers = [
          "HTTP/1.1 101 Switching Protocols",
          "Upgrade: websocket",
          "Connection: Upgrade",
          `Sec-WebSocket-Accept: ${digest}`
        ];
        const ws = new this.options.WebSocket(null, void 0, this.options);
        if (protocols.size) {
          const protocol = this.options.handleProtocols ? this.options.handleProtocols(protocols, req) : protocols.values().next().value;
          if (protocol) {
            headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
            ws._protocol = protocol;
          }
        }
        if (extensions[PerMessageDeflate.extensionName]) {
          const params = extensions[PerMessageDeflate.extensionName].params;
          const value = extension.format({
            [PerMessageDeflate.extensionName]: [params]
          });
          headers.push(`Sec-WebSocket-Extensions: ${value}`);
          ws._extensions = extensions;
        }
        this.emit("headers", headers, req);
        socket.write(headers.concat("\r\n").join("\r\n"));
        socket.removeListener("error", socketOnError);
        ws.setSocket(socket, head, {
          allowSynchronousEvents: this.options.allowSynchronousEvents,
          maxPayload: this.options.maxPayload,
          skipUTF8Validation: this.options.skipUTF8Validation
        });
        if (this.clients) {
          this.clients.add(ws);
          ws.on("close", () => {
            this.clients.delete(ws);
            if (this._shouldEmitClose && !this.clients.size) {
              process.nextTick(emitClose, this);
            }
          });
        }
        cb(ws, req);
      }
    };
    module2.exports = WebSocketServer;
    function addListeners(server, map) {
      for (const event of Object.keys(map))
        server.on(event, map[event]);
      return function removeListeners() {
        for (const event of Object.keys(map)) {
          server.removeListener(event, map[event]);
        }
      };
    }
    function emitClose(server) {
      server._state = CLOSED;
      server.emit("close");
    }
    function socketOnError() {
      this.destroy();
    }
    function abortHandshake(socket, code, message, headers) {
      message = message || http.STATUS_CODES[code];
      headers = {
        Connection: "close",
        "Content-Type": "text/html",
        "Content-Length": Buffer.byteLength(message),
        ...headers
      };
      socket.once("finish", socket.destroy);
      socket.end(
        `HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r
` + Object.keys(headers).map((h) => `${h}: ${headers[h]}`).join("\r\n") + "\r\n\r\n" + message
      );
    }
    function abortHandshakeOrEmitwsClientError(server, req, socket, code, message, headers) {
      if (server.listenerCount("wsClientError")) {
        const err = new Error(message);
        Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);
        server.emit("wsClientError", err, socket, req);
      } else {
        abortHandshake(socket, code, message, headers);
      }
    }
  }
});

// node_modules/ws/index.js
var require_ws = __commonJS({
  "node_modules/ws/index.js"(exports2, module2) {
    "use strict";
    var WebSocket2 = require_websocket();
    WebSocket2.createWebSocketStream = require_stream2();
    WebSocket2.Server = require_websocket_server();
    WebSocket2.Receiver = require_receiver();
    WebSocket2.Sender = require_sender();
    WebSocket2.WebSocket = WebSocket2;
    WebSocket2.WebSocketServer = WebSocket2.Server;
    module2.exports = WebSocket2;
  }
});

// node_modules/mqtt/build/lib/BufferedDuplex.js
var require_BufferedDuplex = __commonJS({
  "node_modules/mqtt/build/lib/BufferedDuplex.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BufferedDuplex = void 0;
    exports2.writev = writev;
    var readable_stream_1 = require_ours();
    var buffer_1 = require("buffer");
    function writev(chunks, cb) {
      const buffers = new Array(chunks.length);
      for (let i = 0; i < chunks.length; i++) {
        if (typeof chunks[i].chunk === "string") {
          buffers[i] = buffer_1.Buffer.from(chunks[i].chunk, "utf8");
        } else {
          buffers[i] = chunks[i].chunk;
        }
      }
      this._write(buffer_1.Buffer.concat(buffers), "binary", cb);
    }
    var BufferedDuplex = class extends readable_stream_1.Duplex {
      constructor(opts, proxy, socket) {
        super({
          objectMode: true
        });
        this.proxy = proxy;
        this.socket = socket;
        this.writeQueue = [];
        if (!opts.objectMode) {
          this._writev = writev.bind(this);
        }
        this.isSocketOpen = false;
        this.proxy.on("data", (chunk) => {
          if (!this.destroyed && this.readable) {
            this.push(chunk);
          }
        });
      }
      _read(size) {
        this.proxy.read(size);
      }
      _write(chunk, encoding, cb) {
        if (!this.isSocketOpen) {
          this.writeQueue.push({ chunk, encoding, cb });
        } else {
          this.writeToProxy(chunk, encoding, cb);
        }
      }
      _final(callback) {
        this.writeQueue = [];
        this.proxy.end(callback);
      }
      _destroy(err, callback) {
        this.writeQueue = [];
        this.proxy.destroy();
        callback(err);
      }
      socketReady() {
        this.emit("connect");
        this.isSocketOpen = true;
        this.processWriteQueue();
      }
      writeToProxy(chunk, encoding, cb) {
        if (this.proxy.write(chunk, encoding) === false) {
          this.proxy.once("drain", cb);
        } else {
          cb();
        }
      }
      processWriteQueue() {
        while (this.writeQueue.length > 0) {
          const { chunk, encoding, cb } = this.writeQueue.shift();
          this.writeToProxy(chunk, encoding, cb);
        }
      }
    };
    exports2.BufferedDuplex = BufferedDuplex;
  }
});

// node_modules/mqtt/build/lib/connect/ws.js
var require_ws2 = __commonJS({
  "node_modules/mqtt/build/lib/connect/ws.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.streamBuilder = exports2.browserStreamBuilder = void 0;
    var buffer_1 = require("buffer");
    var ws_1 = __importDefault(require_ws());
    var debug_1 = __importDefault(require_src());
    var readable_stream_1 = require_ours();
    var is_browser_1 = __importDefault(require_is_browser());
    var BufferedDuplex_1 = require_BufferedDuplex();
    var debug = (0, debug_1.default)("mqttjs:ws");
    var WSS_OPTIONS = [
      "rejectUnauthorized",
      "ca",
      "cert",
      "key",
      "pfx",
      "passphrase"
    ];
    function buildUrl(opts, client) {
      let url = `${opts.protocol}://${opts.hostname}:${opts.port}${opts.path}`;
      if (typeof opts.transformWsUrl === "function") {
        url = opts.transformWsUrl(url, opts, client);
      }
      return url;
    }
    function setDefaultOpts(opts) {
      const options = opts;
      if (!opts.port) {
        if (opts.protocol === "wss") {
          options.port = 443;
        } else {
          options.port = 80;
        }
      }
      if (!opts.path) {
        options.path = "/";
      }
      if (!opts.wsOptions) {
        options.wsOptions = {};
      }
      if (!is_browser_1.default && !opts.forceNativeWebSocket && opts.protocol === "wss") {
        WSS_OPTIONS.forEach((prop) => {
          if (Object.prototype.hasOwnProperty.call(opts, prop) && !Object.prototype.hasOwnProperty.call(opts.wsOptions, prop)) {
            options.wsOptions[prop] = opts[prop];
          }
        });
      }
      return options;
    }
    function setDefaultBrowserOpts(opts) {
      const options = setDefaultOpts(opts);
      if (!options.hostname) {
        options.hostname = options.host;
      }
      if (!options.hostname) {
        if (typeof document === "undefined") {
          throw new Error("Could not determine host. Specify host manually.");
        }
        const parsed = new URL(document.URL);
        options.hostname = parsed.hostname;
        if (!options.port) {
          options.port = Number(parsed.port);
        }
      }
      if (options.objectMode === void 0) {
        options.objectMode = !(options.binary === true || options.binary === void 0);
      }
      return options;
    }
    function createWebSocket(client, url, opts) {
      debug("createWebSocket");
      debug(`protocol: ${opts.protocolId} ${opts.protocolVersion}`);
      const websocketSubProtocol = opts.protocolId === "MQIsdp" && opts.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
      debug(`creating new Websocket for url: ${url} and protocol: ${websocketSubProtocol}`);
      let socket;
      if (opts.createWebsocket) {
        socket = opts.createWebsocket(url, [websocketSubProtocol], opts);
      } else {
        socket = new ws_1.default(url, [websocketSubProtocol], opts.wsOptions);
      }
      return socket;
    }
    function createBrowserWebSocket(client, opts) {
      const websocketSubProtocol = opts.protocolId === "MQIsdp" && opts.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
      const url = buildUrl(opts, client);
      let socket;
      if (opts.createWebsocket) {
        socket = opts.createWebsocket(url, [websocketSubProtocol], opts);
      } else {
        socket = new WebSocket(url, [websocketSubProtocol]);
      }
      socket.binaryType = "arraybuffer";
      return socket;
    }
    var streamBuilder = (client, opts) => {
      debug("streamBuilder");
      const options = setDefaultOpts(opts);
      options.hostname = options.hostname || options.host || "localhost";
      const url = buildUrl(options, client);
      const socket = createWebSocket(client, url, options);
      const webSocketStream = ws_1.default.createWebSocketStream(socket, options.wsOptions);
      webSocketStream["url"] = url;
      socket.on("close", () => {
        webSocketStream.destroy();
      });
      return webSocketStream;
    };
    exports2.streamBuilder = streamBuilder;
    var browserStreamBuilder = (client, opts) => {
      debug("browserStreamBuilder");
      let stream;
      const options = setDefaultBrowserOpts(opts);
      const bufferSize = options.browserBufferSize || 1024 * 512;
      const bufferTimeout = opts.browserBufferTimeout || 1e3;
      const coerceToBuffer = !opts.objectMode;
      const socket = createBrowserWebSocket(client, opts);
      const proxy = buildProxy(opts, socketWriteBrowser, socketEndBrowser);
      if (!opts.objectMode) {
        proxy._writev = BufferedDuplex_1.writev.bind(proxy);
      }
      proxy.on("close", () => {
        socket.close();
      });
      const eventListenerSupport = typeof socket.addEventListener !== "undefined";
      if (socket.readyState === socket.OPEN) {
        stream = proxy;
        stream.socket = socket;
      } else {
        stream = new BufferedDuplex_1.BufferedDuplex(opts, proxy, socket);
        if (eventListenerSupport) {
          socket.addEventListener("open", onOpen);
        } else {
          socket.onopen = onOpen;
        }
      }
      if (eventListenerSupport) {
        socket.addEventListener("close", onClose);
        socket.addEventListener("error", onError);
        socket.addEventListener("message", onMessage);
      } else {
        socket.onclose = onClose;
        socket.onerror = onError;
        socket.onmessage = onMessage;
      }
      function buildProxy(pOptions, socketWrite, socketEnd) {
        const _proxy = new readable_stream_1.Transform({
          objectMode: pOptions.objectMode
        });
        _proxy._write = socketWrite;
        _proxy._flush = socketEnd;
        return _proxy;
      }
      function onOpen() {
        debug("WebSocket onOpen");
        if (stream instanceof BufferedDuplex_1.BufferedDuplex) {
          stream.socketReady();
        }
      }
      function onClose(event) {
        debug("WebSocket onClose", event);
        stream.end();
        stream.destroy();
      }
      function onError(err) {
        debug("WebSocket onError", err);
        const error = new Error("WebSocket error");
        error["event"] = err;
        stream.destroy(error);
      }
      async function onMessage(event) {
        if (!proxy || proxy.destroyed || !proxy.readable) {
          return;
        }
        let { data } = event;
        if (data instanceof ArrayBuffer)
          data = buffer_1.Buffer.from(data);
        else if (data instanceof Blob)
          data = buffer_1.Buffer.from(await new Response(data).arrayBuffer());
        else
          data = buffer_1.Buffer.from(data, "utf8");
        proxy.push(data);
      }
      function socketWriteBrowser(chunk, enc, next) {
        if (socket.bufferedAmount > bufferSize) {
          setTimeout(socketWriteBrowser, bufferTimeout, chunk, enc, next);
          return;
        }
        if (coerceToBuffer && typeof chunk === "string") {
          chunk = buffer_1.Buffer.from(chunk, "utf8");
        }
        try {
          socket.send(chunk);
        } catch (err) {
          return next(err);
        }
        next();
      }
      function socketEndBrowser(done) {
        socket.close();
        done();
      }
      return stream;
    };
    exports2.browserStreamBuilder = browserStreamBuilder;
  }
});

// node_modules/smart-buffer/build/utils.js
var require_utils2 = __commonJS({
  "node_modules/smart-buffer/build/utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var buffer_1 = require("buffer");
    var ERRORS = {
      INVALID_ENCODING: "Invalid encoding provided. Please specify a valid encoding the internal Node.js Buffer supports.",
      INVALID_SMARTBUFFER_SIZE: "Invalid size provided. Size must be a valid integer greater than zero.",
      INVALID_SMARTBUFFER_BUFFER: "Invalid Buffer provided in SmartBufferOptions.",
      INVALID_SMARTBUFFER_OBJECT: "Invalid SmartBufferOptions object supplied to SmartBuffer constructor or factory methods.",
      INVALID_OFFSET: "An invalid offset value was provided.",
      INVALID_OFFSET_NON_NUMBER: "An invalid offset value was provided. A numeric value is required.",
      INVALID_LENGTH: "An invalid length value was provided.",
      INVALID_LENGTH_NON_NUMBER: "An invalid length value was provived. A numeric value is required.",
      INVALID_TARGET_OFFSET: "Target offset is beyond the bounds of the internal SmartBuffer data.",
      INVALID_TARGET_LENGTH: "Specified length value moves cursor beyong the bounds of the internal SmartBuffer data.",
      INVALID_READ_BEYOND_BOUNDS: "Attempted to read beyond the bounds of the managed data.",
      INVALID_WRITE_BEYOND_BOUNDS: "Attempted to write beyond the bounds of the managed data."
    };
    exports2.ERRORS = ERRORS;
    function checkEncoding(encoding) {
      if (!buffer_1.Buffer.isEncoding(encoding)) {
        throw new Error(ERRORS.INVALID_ENCODING);
      }
    }
    exports2.checkEncoding = checkEncoding;
    function isFiniteInteger(value) {
      return typeof value === "number" && isFinite(value) && isInteger(value);
    }
    exports2.isFiniteInteger = isFiniteInteger;
    function checkOffsetOrLengthValue(value, offset) {
      if (typeof value === "number") {
        if (!isFiniteInteger(value) || value < 0) {
          throw new Error(offset ? ERRORS.INVALID_OFFSET : ERRORS.INVALID_LENGTH);
        }
      } else {
        throw new Error(offset ? ERRORS.INVALID_OFFSET_NON_NUMBER : ERRORS.INVALID_LENGTH_NON_NUMBER);
      }
    }
    function checkLengthValue(length) {
      checkOffsetOrLengthValue(length, false);
    }
    exports2.checkLengthValue = checkLengthValue;
    function checkOffsetValue(offset) {
      checkOffsetOrLengthValue(offset, true);
    }
    exports2.checkOffsetValue = checkOffsetValue;
    function checkTargetOffset(offset, buff) {
      if (offset < 0 || offset > buff.length) {
        throw new Error(ERRORS.INVALID_TARGET_OFFSET);
      }
    }
    exports2.checkTargetOffset = checkTargetOffset;
    function isInteger(value) {
      return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    }
    function bigIntAndBufferInt64Check(bufferMethod) {
      if (typeof BigInt === "undefined") {
        throw new Error("Platform does not support JS BigInt type.");
      }
      if (typeof buffer_1.Buffer.prototype[bufferMethod] === "undefined") {
        throw new Error(`Platform does not support Buffer.prototype.${bufferMethod}.`);
      }
    }
    exports2.bigIntAndBufferInt64Check = bigIntAndBufferInt64Check;
  }
});

// node_modules/smart-buffer/build/smartbuffer.js
var require_smartbuffer = __commonJS({
  "node_modules/smart-buffer/build/smartbuffer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var utils_1 = require_utils2();
    var DEFAULT_SMARTBUFFER_SIZE = 4096;
    var DEFAULT_SMARTBUFFER_ENCODING = "utf8";
    var SmartBuffer = class _SmartBuffer {
      /**
       * Creates a new SmartBuffer instance.
       *
       * @param options { SmartBufferOptions } The SmartBufferOptions to apply to this instance.
       */
      constructor(options) {
        this.length = 0;
        this._encoding = DEFAULT_SMARTBUFFER_ENCODING;
        this._writeOffset = 0;
        this._readOffset = 0;
        if (_SmartBuffer.isSmartBufferOptions(options)) {
          if (options.encoding) {
            utils_1.checkEncoding(options.encoding);
            this._encoding = options.encoding;
          }
          if (options.size) {
            if (utils_1.isFiniteInteger(options.size) && options.size > 0) {
              this._buff = Buffer.allocUnsafe(options.size);
            } else {
              throw new Error(utils_1.ERRORS.INVALID_SMARTBUFFER_SIZE);
            }
          } else if (options.buff) {
            if (Buffer.isBuffer(options.buff)) {
              this._buff = options.buff;
              this.length = options.buff.length;
            } else {
              throw new Error(utils_1.ERRORS.INVALID_SMARTBUFFER_BUFFER);
            }
          } else {
            this._buff = Buffer.allocUnsafe(DEFAULT_SMARTBUFFER_SIZE);
          }
        } else {
          if (typeof options !== "undefined") {
            throw new Error(utils_1.ERRORS.INVALID_SMARTBUFFER_OBJECT);
          }
          this._buff = Buffer.allocUnsafe(DEFAULT_SMARTBUFFER_SIZE);
        }
      }
      /**
       * Creates a new SmartBuffer instance with the provided internal Buffer size and optional encoding.
       *
       * @param size { Number } The size of the internal Buffer.
       * @param encoding { String } The BufferEncoding to use for strings.
       *
       * @return { SmartBuffer }
       */
      static fromSize(size, encoding) {
        return new this({
          size,
          encoding
        });
      }
      /**
       * Creates a new SmartBuffer instance with the provided Buffer and optional encoding.
       *
       * @param buffer { Buffer } The Buffer to use as the internal Buffer value.
       * @param encoding { String } The BufferEncoding to use for strings.
       *
       * @return { SmartBuffer }
       */
      static fromBuffer(buff, encoding) {
        return new this({
          buff,
          encoding
        });
      }
      /**
       * Creates a new SmartBuffer instance with the provided SmartBufferOptions options.
       *
       * @param options { SmartBufferOptions } The options to use when creating the SmartBuffer instance.
       */
      static fromOptions(options) {
        return new this(options);
      }
      /**
       * Type checking function that determines if an object is a SmartBufferOptions object.
       */
      static isSmartBufferOptions(options) {
        const castOptions = options;
        return castOptions && (castOptions.encoding !== void 0 || castOptions.size !== void 0 || castOptions.buff !== void 0);
      }
      // Signed integers
      /**
       * Reads an Int8 value from the current read position or an optionally provided offset.
       *
       * @param offset { Number } The offset to read data from (optional)
       * @return { Number }
       */
      readInt8(offset) {
        return this._readNumberValue(Buffer.prototype.readInt8, 1, offset);
      }
      /**
       * Reads an Int16BE value from the current read position or an optionally provided offset.
       *
       * @param offset { Number } The offset to read data from (optional)
       * @return { Number }
       */
      readInt16BE(offset) {
        return this._readNumberValue(Buffer.prototype.readInt16BE, 2, offset);
      }
      /**
       * Reads an Int16LE value from the current read position or an optionally provided offset.
       *
       * @param offset { Number } The offset to read data from (optional)
       * @return { Number }
       */
      readInt16LE(offset) {
        return this._readNumberValue(Buffer.prototype.readInt16LE, 2, offset);
      }
      /**
       * Reads an Int32BE value from the current read position or an optionally provided offset.
       *
       * @param offset { Number } The offset to read data from (optional)
       * @return { Number }
       */
      readInt32BE(offset) {
        return this._readNumberValue(Buffer.prototype.readInt32BE, 4, offset);
      }
      /**
       * Reads an Int32LE value from the current read position or an optionally provided offset.
       *
       * @param offset { Number } The offset to read data from (optional)
       * @return { Number }
       */
      readInt32LE(offset) {
        return this._readNumberValue(Buffer.prototype.readInt32LE, 4, offset);
      }
      /**
       * Reads a BigInt64BE value from the current read position or an optionally provided offset.
       *
       * @param offset { Number } The offset to read data from (optional)
       * @return { BigInt }
       */
      readBigInt64BE(offset) {
        utils_1.bigIntAndBufferInt64Check("readBigInt64BE");
        return this._readNumberValue(Buffer.prototype.readBigInt64BE, 8, offset);
      }
      /**
       * Reads a BigInt64LE value from the current read position or an optionally provided offset.
       *
       * @param offset { Number } The offset to read data from (optional)
       * @return { BigInt }
       */
      readBigInt64LE(offset) {
        utils_1.bigIntAndBufferInt64Check("readBigInt64LE");
        return this._readNumberValue(Buffer.prototype.readBigInt64LE, 8, offset);
      }
      /**
       * Writes an Int8 value to the current write position (or at optional offset).
       *
       * @param value { Number } The value to write.
       * @param offset { Number } The offset to write the value at.
       *
       * @return this
       */
      writeInt8(value, offset) {
        this._writeNumberValue(Buffer.prototype.writeInt8, 1, value, offset);
        return this;
      }
      /**
       * Inserts an Int8 value at the given offset value.
       *
       * @param value { Number } The value to insert.
       * @param offset { Number } The offset to insert the value at.
       *
       * @return this
       */
      insertInt8(value, offset) {
        return this._insertNumberValue(Buffer.prototype.writeInt8, 1, value, offset);
      }
      /**
       * Writes an Int16BE value to the current write position (or at optional offset).
       *
       * @param value { Number } The value to write.
       * @param offset { Number } The offset to write the value at.
       *
       * @return this
       */
      writeInt16BE(value, offset) {
        return this._writeNumberValue(Buffer.prototype.writeInt16BE, 2, value, offset);
      }
      /**
       * Inserts an Int16BE value at the given offset value.
       *
       * @param value { Number } The value to insert.
       * @param offset { Number } The offset to insert the value at.
       *
       * @return this
       */
      insertInt16BE(value, offset) {
        return this._insertNumberValue(Buffer.prototype.writeInt16BE, 2, value, offset);
      }
      /**
       * Writes an Int16LE value to the current write position (or at optional offset).
       *
       * @param value { Number } The value to write.
       * @param offset { Number } The offset to write the value at.
       *
       * @return this
       */
      writeInt16LE(value, offset) {
        return this._writeNumberValue(Buffer.prototype.writeInt16LE, 2, value, offset);
      }
      /**
       * Inserts an Int16LE value at the given offset value.
       *
       * @param value { Number } The value to insert.
       * @param offset { Number } The offset to insert the value at.
       *
       * @return this
       */
      insertInt16LE(value, offset) {
        return this._insertNumberValue(Buffer.prototype.writeInt16LE, 2, value, offset);
      }
      /**
       * Writes an Int32BE value to the current write position (or at optional offset).
       *
       * @param value { Number } The value to write.
       * @param offset { Number } The offset to write the value at.
       *
       * @return this
       */
      writeInt32BE(value, offset) {
        return this._writeNumberValue(Buffer.prototype.writeInt32BE, 4, value, offset);
      }
      /**
       * Inserts an Int32BE value at the given offset value.
       *
       * @param value { Number } The value to insert.
       * @param offset { Number } The offset to insert the value at.
       *
       * @return this
       */
      insertInt32BE(value, offset) {
        return this._insertNumberValue(Buffer.prototype.writeInt32BE, 4, value, offset);
      }
      /**
       * Writes an Int32LE value to the current write position (or at optional offset).
       *
       * @param value { Number } The value to write.
       * @param offset { Number } The offset to write the value at.
       *
       * @return this
       */
      writeInt32LE(value, offset) {
        return this._writeNumberValue(Buffer.prototype.writeInt32LE, 4, value, offset);
      }
      /**
       * Inserts an Int32LE value at the given offset value.
       *
       * @param value { Number } The value to insert.
       * @param offset { Number } The offset to insert the value at.
       *
       * @return this
       */
      insertInt32LE(value, offset) {
        return this._insertNumberValue(Buffer.prototype.writeInt32LE, 4, value, offset);
      }
      /**
       * Writes a BigInt64BE value to the current write position (or at optional offset).
       *
       * @param value { BigInt } The value to write.
       * @param offset { Number } The offset to write the value at.
       *
       * @return this
       */
      writeBigInt64BE(value, offset) {
        utils_1.bigIntAndBufferInt64Check("writeBigInt64BE");
        return this._writeNumberValue(Buffer.prototype.writeBigInt64BE, 8, value, offset);
      }
      /**
       * Inserts a BigInt64BE value at the given offset value.
       *
       * @param value { BigInt } The value to insert.
       * @param offset { Number } The offset to insert the value at.
       *
       * @return this
       */
      insertBigInt64BE(value, offset) {
        utils_1.bigIntAndBufferInt64Check("writeBigInt64BE");
        return this._insertNumberValue(Buffer.prototype.writeBigInt64BE, 8, value, offset);
      }
      /**
       * Writes a BigInt64LE value to the current write position (or at optional offset).
       *
       * @param value { BigInt } The value to write.
       * @param offset { Number } The offset to write the value at.
       *
       * @return this
       */
      writeBigInt64LE(value, offset) {
        utils_1.bigIntAndBufferInt64Check("writeBigInt64LE");
        return this._writeNumberValue(Buffer.prototype.writeBigInt64LE, 8, value, offset);
      }
      /**
       * Inserts a Int64LE value at the given offset value.
       *
       * @param value { BigInt } The value to insert.
       * @param offset { Number } The offset to insert the value at.
       *
       * @return this
       */
      insertBigInt64LE(value, offset) {
        utils_1.bigIntAndBufferInt64Check("writeBigInt64LE");
        return this._insertNumberValue(Buffer.prototype.writeBigInt64LE, 8, value, offset);
      }
      // Unsigned Integers
      /**
       * Reads an UInt8 value from the current read position or an optionally provided offset.
       *
       * @param offset { Number } The offset to read data from (optional)
       * @return { Number }
       */
      readUInt8(offset) {
        return this._readNumberValue(Buffer.prototype.readUInt8, 1, offset);
      }
      /**
       * Reads an UInt16BE value from the current read position or an optionally provided offset.
       *
       * @param offset { Number } The offset to read data from (optional)
       * @return { Number }
       */
      readUInt16BE(offset) {
        return this._readNumberValue(Buffer.prototype.readUInt16BE, 2, offset);
      }
      /**
       * Reads an UInt16LE value from the current read position or an optionally provided offset.
       *
       * @param offset { Number } The offset to read data from (optional)
       * @return { Number }
       */
      readUInt16LE(offset) {
        return this._readNumberValue(Buffer.prototype.readUInt16LE, 2, offset);
      }
      /**
       * Reads an UInt32BE value from the current read position or an optionally provided offset.
       *
       * @param offset { Number } The offset to read data from (optional)
       * @return { Number }
       */
      readUInt32BE(offset) {
        return this._readNumberValue(Buffer.prototype.readUInt32BE, 4, offset);
      }
      /**
       * Reads an UInt32LE value from the current read position or an optionally provided offset.
       *
       * @param offset { Number } The offset to read data from (optional)
       * @return { Number }
       */
      readUInt32LE(offset) {
        return this._readNumberValue(Buffer.prototype.readUInt32LE, 4, offset);
      }
      /**
       * Reads a BigUInt64BE value from the current read position or an optionally provided offset.
       *
       * @param offset { Number } The offset to read data from (optional)
       * @return { BigInt }
       */
      readBigUInt64BE(offset) {
        utils_1.bigIntAndBufferInt64Check("readBigUInt64BE");
        return this._readNumberValue(Buffer.prototype.readBigUInt64BE, 8, offset);
      }
      /**
       * Reads a BigUInt64LE value from the current read position or an optionally provided offset.
       *
       * @param offset { Number } The offset to read data from (optional)
       * @return { BigInt }
       */
      readBigUInt64LE(offset) {
        utils_1.bigIntAndBufferInt64Check("readBigUInt64LE");
        return this._readNumberValue(Buffer.prototype.readBigUInt64LE, 8, offset);
      }
      /**
       * Writes an UInt8 value to the current write position (or at optional offset).
       *
       * @param value { Number } The value to write.
       * @param offset { Number } The offset to write the value at.
       *
       * @return this
       */
      writeUInt8(value, offset) {
        return this._writeNumberValue(Buffer.prototype.writeUInt8, 1, value, offset);
      }
      /**
       * Inserts an UInt8 value at the given offset value.
       *
       * @param value { Number } The value to insert.
       * @param offset { Number } The offset to insert the value at.
       *
       * @return this
       */
      insertUInt8(value, offset) {
        return this._insertNumberValue(Buffer.prototype.writeUInt8, 1, value, offset);
      }
      /**
       * Writes an UInt16BE value to the current write position (or at optional offset).
       *
       * @param value { Number } The value to write.
       * @param offset { Number } The offset to write the value at.
       *
       * @return this
       */
      writeUInt16BE(value, offset) {
        return this._writeNumberValue(Buffer.prototype.writeUInt16BE, 2, value, offset);
      }
      /**
       * Inserts an UInt16BE value at the given offset value.
       *
       * @param value { Number } The value to insert.
       * @param offset { Number } The offset to insert the value at.
       *
       * @return this
       */
      insertUInt16BE(value, offset) {
        return this._insertNumberValue(Buffer.prototype.writeUInt16BE, 2, value, offset);
      }
      /**
       * Writes an UInt16LE value to the current write position (or at optional offset).
       *
       * @param value { Number } The value to write.
       * @param offset { Number } The offset to write the value at.
       *
       * @return this
       */
      writeUInt16LE(value, offset) {
        return this._writeNumberValue(Buffer.prototype.writeUInt16LE, 2, value, offset);
      }
      /**
       * Inserts an UInt16LE value at the given offset value.
       *
       * @param value { Number } The value to insert.
       * @param offset { Number } The offset to insert the value at.
       *
       * @return this
       */
      insertUInt16LE(value, offset) {
        return this._insertNumberValue(Buffer.prototype.writeUInt16LE, 2, value, offset);
      }
      /**
       * Writes an UInt32BE value to the current write position (or at optional offset).
       *
       * @param value { Number } The value to write.
       * @param offset { Number } The offset to write the value at.
       *
       * @return this
       */
      writeUInt32BE(value, offset) {
        return this._writeNumberValue(Buffer.prototype.writeUInt32BE, 4, value, offset);
      }
      /**
       * Inserts an UInt32BE value at the given offset value.
       *
       * @param value { Number } The value to insert.
       * @param offset { Number } The offset to insert the value at.
       *
       * @return this
       */
      insertUInt32BE(value, offset) {
        return this._insertNumberValue(Buffer.prototype.writeUInt32BE, 4, value, offset);
      }
      /**
       * Writes an UInt32LE value to the current write position (or at optional offset).
       *
       * @param value { Number } The value to write.
       * @param offset { Number } The offset to write the value at.
       *
       * @return this
       */
      writeUInt32LE(value, offset) {
        return this._writeNumberValue(Buffer.prototype.writeUInt32LE, 4, value, offset);
      }
      /**
       * Inserts an UInt32LE value at the given offset value.
       *
       * @param value { Number } The value to insert.
       * @param offset { Number } The offset to insert the value at.
       *
       * @return this
       */
      insertUInt32LE(value, offset) {
        return this._insertNumberValue(Buffer.prototype.writeUInt32LE, 4, value, offset);
      }
      /**
       * Writes a BigUInt64BE value to the current write position (or at optional offset).
       *
       * @param value { Number } The value to write.
       * @param offset { Number } The offset to write the value at.
       *
       * @return this
       */
      writeBigUInt64BE(value, offset) {
        utils_1.bigIntAndBufferInt64Check("writeBigUInt64BE");
        return this._writeNumberValue(Buffer.prototype.writeBigUInt64BE, 8, value, offset);
      }
      /**
       * Inserts a BigUInt64BE value at the given offset value.
       *
       * @param value { Number } The value to insert.
       * @param offset { Number } The offset to insert the value at.
       *
       * @return this
       */
      insertBigUInt64BE(value, offset) {
        utils_1.bigIntAndBufferInt64Check("writeBigUInt64BE");
        return this._insertNumberValue(Buffer.prototype.writeBigUInt64BE, 8, value, offset);
      }
      /**
       * Writes a BigUInt64LE value to the current write position (or at optional offset).
       *
       * @param value { Number } The value to write.
       * @param offset { Number } The offset to write the value at.
       *
       * @return this
       */
      writeBigUInt64LE(value, offset) {
        utils_1.bigIntAndBufferInt64Check("writeBigUInt64LE");
        return this._writeNumberValue(Buffer.prototype.writeBigUInt64LE, 8, value, offset);
      }
      /**
       * Inserts a BigUInt64LE value at the given offset value.
       *
       * @param value { Number } The value to insert.
       * @param offset { Number } The offset to insert the value at.
       *
       * @return this
       */
      insertBigUInt64LE(value, offset) {
        utils_1.bigIntAndBufferInt64Check("writeBigUInt64LE");
        return this._insertNumberValue(Buffer.prototype.writeBigUInt64LE, 8, value, offset);
      }
      // Floating Point
      /**
       * Reads an FloatBE value from the current read position or an optionally provided offset.
       *
       * @param offset { Number } The offset to read data from (optional)
       * @return { Number }
       */
      readFloatBE(offset) {
        return this._readNumberValue(Buffer.prototype.readFloatBE, 4, offset);
      }
      /**
       * Reads an FloatLE value from the current read position or an optionally provided offset.
       *
       * @param offset { Number } The offset to read data from (optional)
       * @return { Number }
       */
      readFloatLE(offset) {
        return this._readNumberValue(Buffer.prototype.readFloatLE, 4, offset);
      }
      /**
       * Writes a FloatBE value to the current write position (or at optional offset).
       *
       * @param value { Number } The value to write.
       * @param offset { Number } The offset to write the value at.
       *
       * @return this
       */
      writeFloatBE(value, offset) {
        return this._writeNumberValue(Buffer.prototype.writeFloatBE, 4, value, offset);
      }
      /**
       * Inserts a FloatBE value at the given offset value.
       *
       * @param value { Number } The value to insert.
       * @param offset { Number } The offset to insert the value at.
       *
       * @return this
       */
      insertFloatBE(value, offset) {
        return this._insertNumberValue(Buffer.prototype.writeFloatBE, 4, value, offset);
      }
      /**
       * Writes a FloatLE value to the current write position (or at optional offset).
       *
       * @param value { Number } The value to write.
       * @param offset { Number } The offset to write the value at.
       *
       * @return this
       */
      writeFloatLE(value, offset) {
        return this._writeNumberValue(Buffer.prototype.writeFloatLE, 4, value, offset);
      }
      /**
       * Inserts a FloatLE value at the given offset value.
       *
       * @param value { Number } The value to insert.
       * @param offset { Number } The offset to insert the value at.
       *
       * @return this
       */
      insertFloatLE(value, offset) {
        return this._insertNumberValue(Buffer.prototype.writeFloatLE, 4, value, offset);
      }
      // Double Floating Point
      /**
       * Reads an DoublEBE value from the current read position or an optionally provided offset.
       *
       * @param offset { Number } The offset to read data from (optional)
       * @return { Number }
       */
      readDoubleBE(offset) {
        return this._readNumberValue(Buffer.prototype.readDoubleBE, 8, offset);
      }
      /**
       * Reads an DoubleLE value from the current read position or an optionally provided offset.
       *
       * @param offset { Number } The offset to read data from (optional)
       * @return { Number }
       */
      readDoubleLE(offset) {
        return this._readNumberValue(Buffer.prototype.readDoubleLE, 8, offset);
      }
      /**
       * Writes a DoubleBE value to the current write position (or at optional offset).
       *
       * @param value { Number } The value to write.
       * @param offset { Number } The offset to write the value at.
       *
       * @return this
       */
      writeDoubleBE(value, offset) {
        return this._writeNumberValue(Buffer.prototype.writeDoubleBE, 8, value, offset);
      }
      /**
       * Inserts a DoubleBE value at the given offset value.
       *
       * @param value { Number } The value to insert.
       * @param offset { Number } The offset to insert the value at.
       *
       * @return this
       */
      insertDoubleBE(value, offset) {
        return this._insertNumberValue(Buffer.prototype.writeDoubleBE, 8, value, offset);
      }
      /**
       * Writes a DoubleLE value to the current write position (or at optional offset).
       *
       * @param value { Number } The value to write.
       * @param offset { Number } The offset to write the value at.
       *
       * @return this
       */
      writeDoubleLE(value, offset) {
        return this._writeNumberValue(Buffer.prototype.writeDoubleLE, 8, value, offset);
      }
      /**
       * Inserts a DoubleLE value at the given offset value.
       *
       * @param value { Number } The value to insert.
       * @param offset { Number } The offset to insert the value at.
       *
       * @return this
       */
      insertDoubleLE(value, offset) {
        return this._insertNumberValue(Buffer.prototype.writeDoubleLE, 8, value, offset);
      }
      // Strings
      /**
       * Reads a String from the current read position.
       *
       * @param arg1 { Number | String } The number of bytes to read as a String, or the BufferEncoding to use for
       *             the string (Defaults to instance level encoding).
       * @param encoding { String } The BufferEncoding to use for the string (Defaults to instance level encoding).
       *
       * @return { String }
       */
      readString(arg1, encoding) {
        let lengthVal;
        if (typeof arg1 === "number") {
          utils_1.checkLengthValue(arg1);
          lengthVal = Math.min(arg1, this.length - this._readOffset);
        } else {
          encoding = arg1;
          lengthVal = this.length - this._readOffset;
        }
        if (typeof encoding !== "undefined") {
          utils_1.checkEncoding(encoding);
        }
        const value = this._buff.slice(this._readOffset, this._readOffset + lengthVal).toString(encoding || this._encoding);
        this._readOffset += lengthVal;
        return value;
      }
      /**
       * Inserts a String
       *
       * @param value { String } The String value to insert.
       * @param offset { Number } The offset to insert the string at.
       * @param encoding { String } The BufferEncoding to use for writing strings (defaults to instance encoding).
       *
       * @return this
       */
      insertString(value, offset, encoding) {
        utils_1.checkOffsetValue(offset);
        return this._handleString(value, true, offset, encoding);
      }
      /**
       * Writes a String
       *
       * @param value { String } The String value to write.
       * @param arg2 { Number | String } The offset to write the string at, or the BufferEncoding to use.
       * @param encoding { String } The BufferEncoding to use for writing strings (defaults to instance encoding).
       *
       * @return this
       */
      writeString(value, arg2, encoding) {
        return this._handleString(value, false, arg2, encoding);
      }
      /**
       * Reads a null-terminated String from the current read position.
       *
       * @param encoding { String } The BufferEncoding to use for the string (Defaults to instance level encoding).
       *
       * @return { String }
       */
      readStringNT(encoding) {
        if (typeof encoding !== "undefined") {
          utils_1.checkEncoding(encoding);
        }
        let nullPos = this.length;
        for (let i = this._readOffset; i < this.length; i++) {
          if (this._buff[i] === 0) {
            nullPos = i;
            break;
          }
        }
        const value = this._buff.slice(this._readOffset, nullPos);
        this._readOffset = nullPos + 1;
        return value.toString(encoding || this._encoding);
      }
      /**
       * Inserts a null-terminated String.
       *
       * @param value { String } The String value to write.
       * @param arg2 { Number | String } The offset to write the string to, or the BufferEncoding to use.
       * @param encoding { String } The BufferEncoding to use for writing strings (defaults to instance encoding).
       *
       * @return this
       */
      insertStringNT(value, offset, encoding) {
        utils_1.checkOffsetValue(offset);
        this.insertString(value, offset, encoding);
        this.insertUInt8(0, offset + value.length);
        return this;
      }
      /**
       * Writes a null-terminated String.
       *
       * @param value { String } The String value to write.
       * @param arg2 { Number | String } The offset to write the string to, or the BufferEncoding to use.
       * @param encoding { String } The BufferEncoding to use for writing strings (defaults to instance encoding).
       *
       * @return this
       */
      writeStringNT(value, arg2, encoding) {
        this.writeString(value, arg2, encoding);
        this.writeUInt8(0, typeof arg2 === "number" ? arg2 + value.length : this.writeOffset);
        return this;
      }
      // Buffers
      /**
       * Reads a Buffer from the internal read position.
       *
       * @param length { Number } The length of data to read as a Buffer.
       *
       * @return { Buffer }
       */
      readBuffer(length) {
        if (typeof length !== "undefined") {
          utils_1.checkLengthValue(length);
        }
        const lengthVal = typeof length === "number" ? length : this.length;
        const endPoint = Math.min(this.length, this._readOffset + lengthVal);
        const value = this._buff.slice(this._readOffset, endPoint);
        this._readOffset = endPoint;
        return value;
      }
      /**
       * Writes a Buffer to the current write position.
       *
       * @param value { Buffer } The Buffer to write.
       * @param offset { Number } The offset to write the Buffer to.
       *
       * @return this
       */
      insertBuffer(value, offset) {
        utils_1.checkOffsetValue(offset);
        return this._handleBuffer(value, true, offset);
      }
      /**
       * Writes a Buffer to the current write position.
       *
       * @param value { Buffer } The Buffer to write.
       * @param offset { Number } The offset to write the Buffer to.
       *
       * @return this
       */
      writeBuffer(value, offset) {
        return this._handleBuffer(value, false, offset);
      }
      /**
       * Reads a null-terminated Buffer from the current read poisiton.
       *
       * @return { Buffer }
       */
      readBufferNT() {
        let nullPos = this.length;
        for (let i = this._readOffset; i < this.length; i++) {
          if (this._buff[i] === 0) {
            nullPos = i;
            break;
          }
        }
        const value = this._buff.slice(this._readOffset, nullPos);
        this._readOffset = nullPos + 1;
        return value;
      }
      /**
       * Inserts a null-terminated Buffer.
       *
       * @param value { Buffer } The Buffer to write.
       * @param offset { Number } The offset to write the Buffer to.
       *
       * @return this
       */
      insertBufferNT(value, offset) {
        utils_1.checkOffsetValue(offset);
        this.insertBuffer(value, offset);
        this.insertUInt8(0, offset + value.length);
        return this;
      }
      /**
       * Writes a null-terminated Buffer.
       *
       * @param value { Buffer } The Buffer to write.
       * @param offset { Number } The offset to write the Buffer to.
       *
       * @return this
       */
      writeBufferNT(value, offset) {
        if (typeof offset !== "undefined") {
          utils_1.checkOffsetValue(offset);
        }
        this.writeBuffer(value, offset);
        this.writeUInt8(0, typeof offset === "number" ? offset + value.length : this._writeOffset);
        return this;
      }
      /**
       * Clears the SmartBuffer instance to its original empty state.
       */
      clear() {
        this._writeOffset = 0;
        this._readOffset = 0;
        this.length = 0;
        return this;
      }
      /**
       * Gets the remaining data left to be read from the SmartBuffer instance.
       *
       * @return { Number }
       */
      remaining() {
        return this.length - this._readOffset;
      }
      /**
       * Gets the current read offset value of the SmartBuffer instance.
       *
       * @return { Number }
       */
      get readOffset() {
        return this._readOffset;
      }
      /**
       * Sets the read offset value of the SmartBuffer instance.
       *
       * @param offset { Number } - The offset value to set.
       */
      set readOffset(offset) {
        utils_1.checkOffsetValue(offset);
        utils_1.checkTargetOffset(offset, this);
        this._readOffset = offset;
      }
      /**
       * Gets the current write offset value of the SmartBuffer instance.
       *
       * @return { Number }
       */
      get writeOffset() {
        return this._writeOffset;
      }
      /**
       * Sets the write offset value of the SmartBuffer instance.
       *
       * @param offset { Number } - The offset value to set.
       */
      set writeOffset(offset) {
        utils_1.checkOffsetValue(offset);
        utils_1.checkTargetOffset(offset, this);
        this._writeOffset = offset;
      }
      /**
       * Gets the currently set string encoding of the SmartBuffer instance.
       *
       * @return { BufferEncoding } The string Buffer encoding currently set.
       */
      get encoding() {
        return this._encoding;
      }
      /**
       * Sets the string encoding of the SmartBuffer instance.
       *
       * @param encoding { BufferEncoding } The string Buffer encoding to set.
       */
      set encoding(encoding) {
        utils_1.checkEncoding(encoding);
        this._encoding = encoding;
      }
      /**
       * Gets the underlying internal Buffer. (This includes unmanaged data in the Buffer)
       *
       * @return { Buffer } The Buffer value.
       */
      get internalBuffer() {
        return this._buff;
      }
      /**
       * Gets the value of the internal managed Buffer (Includes managed data only)
       *
       * @param { Buffer }
       */
      toBuffer() {
        return this._buff.slice(0, this.length);
      }
      /**
       * Gets the String value of the internal managed Buffer
       *
       * @param encoding { String } The BufferEncoding to display the Buffer as (defaults to instance level encoding).
       */
      toString(encoding) {
        const encodingVal = typeof encoding === "string" ? encoding : this._encoding;
        utils_1.checkEncoding(encodingVal);
        return this._buff.toString(encodingVal, 0, this.length);
      }
      /**
       * Destroys the SmartBuffer instance.
       */
      destroy() {
        this.clear();
        return this;
      }
      /**
       * Handles inserting and writing strings.
       *
       * @param value { String } The String value to insert.
       * @param isInsert { Boolean } True if inserting a string, false if writing.
       * @param arg2 { Number | String } The offset to insert the string at, or the BufferEncoding to use.
       * @param encoding { String } The BufferEncoding to use for writing strings (defaults to instance encoding).
       */
      _handleString(value, isInsert, arg3, encoding) {
        let offsetVal = this._writeOffset;
        let encodingVal = this._encoding;
        if (typeof arg3 === "number") {
          offsetVal = arg3;
        } else if (typeof arg3 === "string") {
          utils_1.checkEncoding(arg3);
          encodingVal = arg3;
        }
        if (typeof encoding === "string") {
          utils_1.checkEncoding(encoding);
          encodingVal = encoding;
        }
        const byteLength = Buffer.byteLength(value, encodingVal);
        if (isInsert) {
          this.ensureInsertable(byteLength, offsetVal);
        } else {
          this._ensureWriteable(byteLength, offsetVal);
        }
        this._buff.write(value, offsetVal, byteLength, encodingVal);
        if (isInsert) {
          this._writeOffset += byteLength;
        } else {
          if (typeof arg3 === "number") {
            this._writeOffset = Math.max(this._writeOffset, offsetVal + byteLength);
          } else {
            this._writeOffset += byteLength;
          }
        }
        return this;
      }
      /**
       * Handles writing or insert of a Buffer.
       *
       * @param value { Buffer } The Buffer to write.
       * @param offset { Number } The offset to write the Buffer to.
       */
      _handleBuffer(value, isInsert, offset) {
        const offsetVal = typeof offset === "number" ? offset : this._writeOffset;
        if (isInsert) {
          this.ensureInsertable(value.length, offsetVal);
        } else {
          this._ensureWriteable(value.length, offsetVal);
        }
        value.copy(this._buff, offsetVal);
        if (isInsert) {
          this._writeOffset += value.length;
        } else {
          if (typeof offset === "number") {
            this._writeOffset = Math.max(this._writeOffset, offsetVal + value.length);
          } else {
            this._writeOffset += value.length;
          }
        }
        return this;
      }
      /**
       * Ensures that the internal Buffer is large enough to read data.
       *
       * @param length { Number } The length of the data that needs to be read.
       * @param offset { Number } The offset of the data that needs to be read.
       */
      ensureReadable(length, offset) {
        let offsetVal = this._readOffset;
        if (typeof offset !== "undefined") {
          utils_1.checkOffsetValue(offset);
          offsetVal = offset;
        }
        if (offsetVal < 0 || offsetVal + length > this.length) {
          throw new Error(utils_1.ERRORS.INVALID_READ_BEYOND_BOUNDS);
        }
      }
      /**
       * Ensures that the internal Buffer is large enough to insert data.
       *
       * @param dataLength { Number } The length of the data that needs to be written.
       * @param offset { Number } The offset of the data to be written.
       */
      ensureInsertable(dataLength, offset) {
        utils_1.checkOffsetValue(offset);
        this._ensureCapacity(this.length + dataLength);
        if (offset < this.length) {
          this._buff.copy(this._buff, offset + dataLength, offset, this._buff.length);
        }
        if (offset + dataLength > this.length) {
          this.length = offset + dataLength;
        } else {
          this.length += dataLength;
        }
      }
      /**
       * Ensures that the internal Buffer is large enough to write data.
       *
       * @param dataLength { Number } The length of the data that needs to be written.
       * @param offset { Number } The offset of the data to be written (defaults to writeOffset).
       */
      _ensureWriteable(dataLength, offset) {
        const offsetVal = typeof offset === "number" ? offset : this._writeOffset;
        this._ensureCapacity(offsetVal + dataLength);
        if (offsetVal + dataLength > this.length) {
          this.length = offsetVal + dataLength;
        }
      }
      /**
       * Ensures that the internal Buffer is large enough to write at least the given amount of data.
       *
       * @param minLength { Number } The minimum length of the data needs to be written.
       */
      _ensureCapacity(minLength) {
        const oldLength = this._buff.length;
        if (minLength > oldLength) {
          let data = this._buff;
          let newLength = oldLength * 3 / 2 + 1;
          if (newLength < minLength) {
            newLength = minLength;
          }
          this._buff = Buffer.allocUnsafe(newLength);
          data.copy(this._buff, 0, 0, oldLength);
        }
      }
      /**
       * Reads a numeric number value using the provided function.
       *
       * @typeparam T { number | bigint } The type of the value to be read
       *
       * @param func { Function(offset: number) => number } The function to read data on the internal Buffer with.
       * @param byteSize { Number } The number of bytes read.
       * @param offset { Number } The offset to read from (optional). When this is not provided, the managed readOffset is used instead.
       *
       * @returns { T } the number value
       */
      _readNumberValue(func, byteSize, offset) {
        this.ensureReadable(byteSize, offset);
        const value = func.call(this._buff, typeof offset === "number" ? offset : this._readOffset);
        if (typeof offset === "undefined") {
          this._readOffset += byteSize;
        }
        return value;
      }
      /**
       * Inserts a numeric number value based on the given offset and value.
       *
       * @typeparam T { number | bigint } The type of the value to be written
       *
       * @param func { Function(offset: T, offset?) => number} The function to write data on the internal Buffer with.
       * @param byteSize { Number } The number of bytes written.
       * @param value { T } The number value to write.
       * @param offset { Number } the offset to write the number at (REQUIRED).
       *
       * @returns SmartBuffer this buffer
       */
      _insertNumberValue(func, byteSize, value, offset) {
        utils_1.checkOffsetValue(offset);
        this.ensureInsertable(byteSize, offset);
        func.call(this._buff, value, offset);
        this._writeOffset += byteSize;
        return this;
      }
      /**
       * Writes a numeric number value based on the given offset and value.
       *
       * @typeparam T { number | bigint } The type of the value to be written
       *
       * @param func { Function(offset: T, offset?) => number} The function to write data on the internal Buffer with.
       * @param byteSize { Number } The number of bytes written.
       * @param value { T } The number value to write.
       * @param offset { Number } the offset to write the number at (REQUIRED).
       *
       * @returns SmartBuffer this buffer
       */
      _writeNumberValue(func, byteSize, value, offset) {
        if (typeof offset === "number") {
          if (offset < 0) {
            throw new Error(utils_1.ERRORS.INVALID_WRITE_BEYOND_BOUNDS);
          }
          utils_1.checkOffsetValue(offset);
        }
        const offsetVal = typeof offset === "number" ? offset : this._writeOffset;
        this._ensureWriteable(byteSize, offsetVal);
        func.call(this._buff, value, offsetVal);
        if (typeof offset === "number") {
          this._writeOffset = Math.max(this._writeOffset, offsetVal + byteSize);
        } else {
          this._writeOffset += byteSize;
        }
        return this;
      }
    };
    exports2.SmartBuffer = SmartBuffer;
  }
});

// node_modules/socks/build/common/constants.js
var require_constants3 = __commonJS({
  "node_modules/socks/build/common/constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SOCKS5_NO_ACCEPTABLE_AUTH = exports2.SOCKS5_CUSTOM_AUTH_END = exports2.SOCKS5_CUSTOM_AUTH_START = exports2.SOCKS_INCOMING_PACKET_SIZES = exports2.SocksClientState = exports2.Socks5Response = exports2.Socks5HostType = exports2.Socks5Auth = exports2.Socks4Response = exports2.SocksCommand = exports2.ERRORS = exports2.DEFAULT_TIMEOUT = void 0;
    var DEFAULT_TIMEOUT = 3e4;
    exports2.DEFAULT_TIMEOUT = DEFAULT_TIMEOUT;
    var ERRORS = {
      InvalidSocksCommand: "An invalid SOCKS command was provided. Valid options are connect, bind, and associate.",
      InvalidSocksCommandForOperation: "An invalid SOCKS command was provided. Only a subset of commands are supported for this operation.",
      InvalidSocksCommandChain: "An invalid SOCKS command was provided. Chaining currently only supports the connect command.",
      InvalidSocksClientOptionsDestination: "An invalid destination host was provided.",
      InvalidSocksClientOptionsExistingSocket: "An invalid existing socket was provided. This should be an instance of stream.Duplex.",
      InvalidSocksClientOptionsProxy: "Invalid SOCKS proxy details were provided.",
      InvalidSocksClientOptionsTimeout: "An invalid timeout value was provided. Please enter a value above 0 (in ms).",
      InvalidSocksClientOptionsProxiesLength: "At least two socks proxies must be provided for chaining.",
      InvalidSocksClientOptionsCustomAuthRange: "Custom auth must be a value between 0x80 and 0xFE.",
      InvalidSocksClientOptionsCustomAuthOptions: "When a custom_auth_method is provided, custom_auth_request_handler, custom_auth_response_size, and custom_auth_response_handler must also be provided and valid.",
      NegotiationError: "Negotiation error",
      SocketClosed: "Socket closed",
      ProxyConnectionTimedOut: "Proxy connection timed out",
      InternalError: "SocksClient internal error (this should not happen)",
      InvalidSocks4HandshakeResponse: "Received invalid Socks4 handshake response",
      Socks4ProxyRejectedConnection: "Socks4 Proxy rejected connection",
      InvalidSocks4IncomingConnectionResponse: "Socks4 invalid incoming connection response",
      Socks4ProxyRejectedIncomingBoundConnection: "Socks4 Proxy rejected incoming bound connection",
      InvalidSocks5InitialHandshakeResponse: "Received invalid Socks5 initial handshake response",
      InvalidSocks5IntiailHandshakeSocksVersion: "Received invalid Socks5 initial handshake (invalid socks version)",
      InvalidSocks5InitialHandshakeNoAcceptedAuthType: "Received invalid Socks5 initial handshake (no accepted authentication type)",
      InvalidSocks5InitialHandshakeUnknownAuthType: "Received invalid Socks5 initial handshake (unknown authentication type)",
      Socks5AuthenticationFailed: "Socks5 Authentication failed",
      InvalidSocks5FinalHandshake: "Received invalid Socks5 final handshake response",
      InvalidSocks5FinalHandshakeRejected: "Socks5 proxy rejected connection",
      InvalidSocks5IncomingConnectionResponse: "Received invalid Socks5 incoming connection response",
      Socks5ProxyRejectedIncomingBoundConnection: "Socks5 Proxy rejected incoming bound connection"
    };
    exports2.ERRORS = ERRORS;
    var SOCKS_INCOMING_PACKET_SIZES = {
      Socks5InitialHandshakeResponse: 2,
      Socks5UserPassAuthenticationResponse: 2,
      // Command response + incoming connection (bind)
      Socks5ResponseHeader: 5,
      // We need at least 5 to read the hostname length, then we wait for the address+port information.
      Socks5ResponseIPv4: 10,
      // 4 header + 4 ip + 2 port
      Socks5ResponseIPv6: 22,
      // 4 header + 16 ip + 2 port
      Socks5ResponseHostname: (hostNameLength) => hostNameLength + 7,
      // 4 header + 1 host length + host + 2 port
      // Command response + incoming connection (bind)
      Socks4Response: 8
      // 2 header + 2 port + 4 ip
    };
    exports2.SOCKS_INCOMING_PACKET_SIZES = SOCKS_INCOMING_PACKET_SIZES;
    var SocksCommand;
    (function(SocksCommand2) {
      SocksCommand2[SocksCommand2["connect"] = 1] = "connect";
      SocksCommand2[SocksCommand2["bind"] = 2] = "bind";
      SocksCommand2[SocksCommand2["associate"] = 3] = "associate";
    })(SocksCommand || (exports2.SocksCommand = SocksCommand = {}));
    var Socks4Response;
    (function(Socks4Response2) {
      Socks4Response2[Socks4Response2["Granted"] = 90] = "Granted";
      Socks4Response2[Socks4Response2["Failed"] = 91] = "Failed";
      Socks4Response2[Socks4Response2["Rejected"] = 92] = "Rejected";
      Socks4Response2[Socks4Response2["RejectedIdent"] = 93] = "RejectedIdent";
    })(Socks4Response || (exports2.Socks4Response = Socks4Response = {}));
    var Socks5Auth;
    (function(Socks5Auth2) {
      Socks5Auth2[Socks5Auth2["NoAuth"] = 0] = "NoAuth";
      Socks5Auth2[Socks5Auth2["GSSApi"] = 1] = "GSSApi";
      Socks5Auth2[Socks5Auth2["UserPass"] = 2] = "UserPass";
    })(Socks5Auth || (exports2.Socks5Auth = Socks5Auth = {}));
    var SOCKS5_CUSTOM_AUTH_START = 128;
    exports2.SOCKS5_CUSTOM_AUTH_START = SOCKS5_CUSTOM_AUTH_START;
    var SOCKS5_CUSTOM_AUTH_END = 254;
    exports2.SOCKS5_CUSTOM_AUTH_END = SOCKS5_CUSTOM_AUTH_END;
    var SOCKS5_NO_ACCEPTABLE_AUTH = 255;
    exports2.SOCKS5_NO_ACCEPTABLE_AUTH = SOCKS5_NO_ACCEPTABLE_AUTH;
    var Socks5Response;
    (function(Socks5Response2) {
      Socks5Response2[Socks5Response2["Granted"] = 0] = "Granted";
      Socks5Response2[Socks5Response2["Failure"] = 1] = "Failure";
      Socks5Response2[Socks5Response2["NotAllowed"] = 2] = "NotAllowed";
      Socks5Response2[Socks5Response2["NetworkUnreachable"] = 3] = "NetworkUnreachable";
      Socks5Response2[Socks5Response2["HostUnreachable"] = 4] = "HostUnreachable";
      Socks5Response2[Socks5Response2["ConnectionRefused"] = 5] = "ConnectionRefused";
      Socks5Response2[Socks5Response2["TTLExpired"] = 6] = "TTLExpired";
      Socks5Response2[Socks5Response2["CommandNotSupported"] = 7] = "CommandNotSupported";
      Socks5Response2[Socks5Response2["AddressNotSupported"] = 8] = "AddressNotSupported";
    })(Socks5Response || (exports2.Socks5Response = Socks5Response = {}));
    var Socks5HostType;
    (function(Socks5HostType2) {
      Socks5HostType2[Socks5HostType2["IPv4"] = 1] = "IPv4";
      Socks5HostType2[Socks5HostType2["Hostname"] = 3] = "Hostname";
      Socks5HostType2[Socks5HostType2["IPv6"] = 4] = "IPv6";
    })(Socks5HostType || (exports2.Socks5HostType = Socks5HostType = {}));
    var SocksClientState;
    (function(SocksClientState2) {
      SocksClientState2[SocksClientState2["Created"] = 0] = "Created";
      SocksClientState2[SocksClientState2["Connecting"] = 1] = "Connecting";
      SocksClientState2[SocksClientState2["Connected"] = 2] = "Connected";
      SocksClientState2[SocksClientState2["SentInitialHandshake"] = 3] = "SentInitialHandshake";
      SocksClientState2[SocksClientState2["ReceivedInitialHandshakeResponse"] = 4] = "ReceivedInitialHandshakeResponse";
      SocksClientState2[SocksClientState2["SentAuthentication"] = 5] = "SentAuthentication";
      SocksClientState2[SocksClientState2["ReceivedAuthenticationResponse"] = 6] = "ReceivedAuthenticationResponse";
      SocksClientState2[SocksClientState2["SentFinalHandshake"] = 7] = "SentFinalHandshake";
      SocksClientState2[SocksClientState2["ReceivedFinalResponse"] = 8] = "ReceivedFinalResponse";
      SocksClientState2[SocksClientState2["BoundWaitingForConnection"] = 9] = "BoundWaitingForConnection";
      SocksClientState2[SocksClientState2["Established"] = 10] = "Established";
      SocksClientState2[SocksClientState2["Disconnected"] = 11] = "Disconnected";
      SocksClientState2[SocksClientState2["Error"] = 99] = "Error";
    })(SocksClientState || (exports2.SocksClientState = SocksClientState = {}));
  }
});

// node_modules/socks/build/common/util.js
var require_util2 = __commonJS({
  "node_modules/socks/build/common/util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.shuffleArray = exports2.SocksClientError = void 0;
    var SocksClientError = class extends Error {
      constructor(message, options) {
        super(message);
        this.options = options;
      }
    };
    exports2.SocksClientError = SocksClientError;
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    exports2.shuffleArray = shuffleArray;
  }
});

// node_modules/ip-address/dist/common.js
var require_common2 = __commonJS({
  "node_modules/ip-address/dist/common.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isCorrect = exports2.isInSubnet = void 0;
    function isInSubnet(address) {
      if (this.subnetMask < address.subnetMask) {
        return false;
      }
      if (this.mask(address.subnetMask) === address.mask()) {
        return true;
      }
      return false;
    }
    exports2.isInSubnet = isInSubnet;
    function isCorrect(defaultBits) {
      return function() {
        if (this.addressMinusSuffix !== this.correctForm()) {
          return false;
        }
        if (this.subnetMask === defaultBits && !this.parsedSubnet) {
          return true;
        }
        return this.parsedSubnet === String(this.subnetMask);
      };
    }
    exports2.isCorrect = isCorrect;
  }
});

// node_modules/ip-address/dist/v4/constants.js
var require_constants4 = __commonJS({
  "node_modules/ip-address/dist/v4/constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RE_SUBNET_STRING = exports2.RE_ADDRESS = exports2.GROUPS = exports2.BITS = void 0;
    exports2.BITS = 32;
    exports2.GROUPS = 4;
    exports2.RE_ADDRESS = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g;
    exports2.RE_SUBNET_STRING = /\/\d{1,2}$/;
  }
});

// node_modules/ip-address/dist/address-error.js
var require_address_error = __commonJS({
  "node_modules/ip-address/dist/address-error.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AddressError = void 0;
    var AddressError = class extends Error {
      constructor(message, parseMessage) {
        super(message);
        this.name = "AddressError";
        if (parseMessage !== null) {
          this.parseMessage = parseMessage;
        }
      }
    };
    exports2.AddressError = AddressError;
  }
});

// node_modules/jsbn/index.js
var require_jsbn = __commonJS({
  "node_modules/jsbn/index.js"(exports2, module2) {
    (function() {
      var dbits;
      var canary = 244837814094590;
      var j_lm = (canary & 16777215) == 15715070;
      function BigInteger(a, b, c) {
        if (a != null)
          if ("number" == typeof a)
            this.fromNumber(a, b, c);
          else if (b == null && "string" != typeof a)
            this.fromString(a, 256);
          else
            this.fromString(a, b);
      }
      function nbi() {
        return new BigInteger(null);
      }
      function am1(i, x, w, j, c, n) {
        while (--n >= 0) {
          var v = x * this[i++] + w[j] + c;
          c = Math.floor(v / 67108864);
          w[j++] = v & 67108863;
        }
        return c;
      }
      function am2(i, x, w, j, c, n) {
        var xl = x & 32767, xh = x >> 15;
        while (--n >= 0) {
          var l = this[i] & 32767;
          var h = this[i++] >> 15;
          var m = xh * l + h * xl;
          l = xl * l + ((m & 32767) << 15) + w[j] + (c & 1073741823);
          c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
          w[j++] = l & 1073741823;
        }
        return c;
      }
      function am3(i, x, w, j, c, n) {
        var xl = x & 16383, xh = x >> 14;
        while (--n >= 0) {
          var l = this[i] & 16383;
          var h = this[i++] >> 14;
          var m = xh * l + h * xl;
          l = xl * l + ((m & 16383) << 14) + w[j] + c;
          c = (l >> 28) + (m >> 14) + xh * h;
          w[j++] = l & 268435455;
        }
        return c;
      }
      var inBrowser = typeof navigator !== "undefined";
      if (inBrowser && j_lm && navigator.appName == "Microsoft Internet Explorer") {
        BigInteger.prototype.am = am2;
        dbits = 30;
      } else if (inBrowser && j_lm && navigator.appName != "Netscape") {
        BigInteger.prototype.am = am1;
        dbits = 26;
      } else {
        BigInteger.prototype.am = am3;
        dbits = 28;
      }
      BigInteger.prototype.DB = dbits;
      BigInteger.prototype.DM = (1 << dbits) - 1;
      BigInteger.prototype.DV = 1 << dbits;
      var BI_FP = 52;
      BigInteger.prototype.FV = Math.pow(2, BI_FP);
      BigInteger.prototype.F1 = BI_FP - dbits;
      BigInteger.prototype.F2 = 2 * dbits - BI_FP;
      var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
      var BI_RC = new Array();
      var rr, vv;
      rr = "0".charCodeAt(0);
      for (vv = 0; vv <= 9; ++vv)
        BI_RC[rr++] = vv;
      rr = "a".charCodeAt(0);
      for (vv = 10; vv < 36; ++vv)
        BI_RC[rr++] = vv;
      rr = "A".charCodeAt(0);
      for (vv = 10; vv < 36; ++vv)
        BI_RC[rr++] = vv;
      function int2char(n) {
        return BI_RM.charAt(n);
      }
      function intAt(s, i) {
        var c = BI_RC[s.charCodeAt(i)];
        return c == null ? -1 : c;
      }
      function bnpCopyTo(r) {
        for (var i = this.t - 1; i >= 0; --i)
          r[i] = this[i];
        r.t = this.t;
        r.s = this.s;
      }
      function bnpFromInt(x) {
        this.t = 1;
        this.s = x < 0 ? -1 : 0;
        if (x > 0)
          this[0] = x;
        else if (x < -1)
          this[0] = x + this.DV;
        else
          this.t = 0;
      }
      function nbv(i) {
        var r = nbi();
        r.fromInt(i);
        return r;
      }
      function bnpFromString(s, b) {
        var k;
        if (b == 16)
          k = 4;
        else if (b == 8)
          k = 3;
        else if (b == 256)
          k = 8;
        else if (b == 2)
          k = 1;
        else if (b == 32)
          k = 5;
        else if (b == 4)
          k = 2;
        else {
          this.fromRadix(s, b);
          return;
        }
        this.t = 0;
        this.s = 0;
        var i = s.length, mi = false, sh = 0;
        while (--i >= 0) {
          var x = k == 8 ? s[i] & 255 : intAt(s, i);
          if (x < 0) {
            if (s.charAt(i) == "-")
              mi = true;
            continue;
          }
          mi = false;
          if (sh == 0)
            this[this.t++] = x;
          else if (sh + k > this.DB) {
            this[this.t - 1] |= (x & (1 << this.DB - sh) - 1) << sh;
            this[this.t++] = x >> this.DB - sh;
          } else
            this[this.t - 1] |= x << sh;
          sh += k;
          if (sh >= this.DB)
            sh -= this.DB;
        }
        if (k == 8 && (s[0] & 128) != 0) {
          this.s = -1;
          if (sh > 0)
            this[this.t - 1] |= (1 << this.DB - sh) - 1 << sh;
        }
        this.clamp();
        if (mi)
          BigInteger.ZERO.subTo(this, this);
      }
      function bnpClamp() {
        var c = this.s & this.DM;
        while (this.t > 0 && this[this.t - 1] == c)
          --this.t;
      }
      function bnToString(b) {
        if (this.s < 0)
          return "-" + this.negate().toString(b);
        var k;
        if (b == 16)
          k = 4;
        else if (b == 8)
          k = 3;
        else if (b == 2)
          k = 1;
        else if (b == 32)
          k = 5;
        else if (b == 4)
          k = 2;
        else
          return this.toRadix(b);
        var km = (1 << k) - 1, d, m = false, r = "", i = this.t;
        var p = this.DB - i * this.DB % k;
        if (i-- > 0) {
          if (p < this.DB && (d = this[i] >> p) > 0) {
            m = true;
            r = int2char(d);
          }
          while (i >= 0) {
            if (p < k) {
              d = (this[i] & (1 << p) - 1) << k - p;
              d |= this[--i] >> (p += this.DB - k);
            } else {
              d = this[i] >> (p -= k) & km;
              if (p <= 0) {
                p += this.DB;
                --i;
              }
            }
            if (d > 0)
              m = true;
            if (m)
              r += int2char(d);
          }
        }
        return m ? r : "0";
      }
      function bnNegate() {
        var r = nbi();
        BigInteger.ZERO.subTo(this, r);
        return r;
      }
      function bnAbs() {
        return this.s < 0 ? this.negate() : this;
      }
      function bnCompareTo(a) {
        var r = this.s - a.s;
        if (r != 0)
          return r;
        var i = this.t;
        r = i - a.t;
        if (r != 0)
          return this.s < 0 ? -r : r;
        while (--i >= 0)
          if ((r = this[i] - a[i]) != 0)
            return r;
        return 0;
      }
      function nbits(x) {
        var r = 1, t2;
        if ((t2 = x >>> 16) != 0) {
          x = t2;
          r += 16;
        }
        if ((t2 = x >> 8) != 0) {
          x = t2;
          r += 8;
        }
        if ((t2 = x >> 4) != 0) {
          x = t2;
          r += 4;
        }
        if ((t2 = x >> 2) != 0) {
          x = t2;
          r += 2;
        }
        if ((t2 = x >> 1) != 0) {
          x = t2;
          r += 1;
        }
        return r;
      }
      function bnBitLength() {
        if (this.t <= 0)
          return 0;
        return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
      }
      function bnpDLShiftTo(n, r) {
        var i;
        for (i = this.t - 1; i >= 0; --i)
          r[i + n] = this[i];
        for (i = n - 1; i >= 0; --i)
          r[i] = 0;
        r.t = this.t + n;
        r.s = this.s;
      }
      function bnpDRShiftTo(n, r) {
        for (var i = n; i < this.t; ++i)
          r[i - n] = this[i];
        r.t = Math.max(this.t - n, 0);
        r.s = this.s;
      }
      function bnpLShiftTo(n, r) {
        var bs = n % this.DB;
        var cbs = this.DB - bs;
        var bm = (1 << cbs) - 1;
        var ds = Math.floor(n / this.DB), c = this.s << bs & this.DM, i;
        for (i = this.t - 1; i >= 0; --i) {
          r[i + ds + 1] = this[i] >> cbs | c;
          c = (this[i] & bm) << bs;
        }
        for (i = ds - 1; i >= 0; --i)
          r[i] = 0;
        r[ds] = c;
        r.t = this.t + ds + 1;
        r.s = this.s;
        r.clamp();
      }
      function bnpRShiftTo(n, r) {
        r.s = this.s;
        var ds = Math.floor(n / this.DB);
        if (ds >= this.t) {
          r.t = 0;
          return;
        }
        var bs = n % this.DB;
        var cbs = this.DB - bs;
        var bm = (1 << bs) - 1;
        r[0] = this[ds] >> bs;
        for (var i = ds + 1; i < this.t; ++i) {
          r[i - ds - 1] |= (this[i] & bm) << cbs;
          r[i - ds] = this[i] >> bs;
        }
        if (bs > 0)
          r[this.t - ds - 1] |= (this.s & bm) << cbs;
        r.t = this.t - ds;
        r.clamp();
      }
      function bnpSubTo(a, r) {
        var i = 0, c = 0, m = Math.min(a.t, this.t);
        while (i < m) {
          c += this[i] - a[i];
          r[i++] = c & this.DM;
          c >>= this.DB;
        }
        if (a.t < this.t) {
          c -= a.s;
          while (i < this.t) {
            c += this[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
          }
          c += this.s;
        } else {
          c += this.s;
          while (i < a.t) {
            c -= a[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
          }
          c -= a.s;
        }
        r.s = c < 0 ? -1 : 0;
        if (c < -1)
          r[i++] = this.DV + c;
        else if (c > 0)
          r[i++] = c;
        r.t = i;
        r.clamp();
      }
      function bnpMultiplyTo(a, r) {
        var x = this.abs(), y = a.abs();
        var i = x.t;
        r.t = i + y.t;
        while (--i >= 0)
          r[i] = 0;
        for (i = 0; i < y.t; ++i)
          r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
        r.s = 0;
        r.clamp();
        if (this.s != a.s)
          BigInteger.ZERO.subTo(r, r);
      }
      function bnpSquareTo(r) {
        var x = this.abs();
        var i = r.t = 2 * x.t;
        while (--i >= 0)
          r[i] = 0;
        for (i = 0; i < x.t - 1; ++i) {
          var c = x.am(i, x[i], r, 2 * i, 0, 1);
          if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
            r[i + x.t] -= x.DV;
            r[i + x.t + 1] = 1;
          }
        }
        if (r.t > 0)
          r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
        r.s = 0;
        r.clamp();
      }
      function bnpDivRemTo(m, q, r) {
        var pm = m.abs();
        if (pm.t <= 0)
          return;
        var pt = this.abs();
        if (pt.t < pm.t) {
          if (q != null)
            q.fromInt(0);
          if (r != null)
            this.copyTo(r);
          return;
        }
        if (r == null)
          r = nbi();
        var y = nbi(), ts = this.s, ms = m.s;
        var nsh = this.DB - nbits(pm[pm.t - 1]);
        if (nsh > 0) {
          pm.lShiftTo(nsh, y);
          pt.lShiftTo(nsh, r);
        } else {
          pm.copyTo(y);
          pt.copyTo(r);
        }
        var ys = y.t;
        var y0 = y[ys - 1];
        if (y0 == 0)
          return;
        var yt = y0 * (1 << this.F1) + (ys > 1 ? y[ys - 2] >> this.F2 : 0);
        var d1 = this.FV / yt, d2 = (1 << this.F1) / yt, e = 1 << this.F2;
        var i = r.t, j = i - ys, t2 = q == null ? nbi() : q;
        y.dlShiftTo(j, t2);
        if (r.compareTo(t2) >= 0) {
          r[r.t++] = 1;
          r.subTo(t2, r);
        }
        BigInteger.ONE.dlShiftTo(ys, t2);
        t2.subTo(y, y);
        while (y.t < ys)
          y[y.t++] = 0;
        while (--j >= 0) {
          var qd = r[--i] == y0 ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
          if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
            y.dlShiftTo(j, t2);
            r.subTo(t2, r);
            while (r[i] < --qd)
              r.subTo(t2, r);
          }
        }
        if (q != null) {
          r.drShiftTo(ys, q);
          if (ts != ms)
            BigInteger.ZERO.subTo(q, q);
        }
        r.t = ys;
        r.clamp();
        if (nsh > 0)
          r.rShiftTo(nsh, r);
        if (ts < 0)
          BigInteger.ZERO.subTo(r, r);
      }
      function bnMod(a) {
        var r = nbi();
        this.abs().divRemTo(a, null, r);
        if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0)
          a.subTo(r, r);
        return r;
      }
      function Classic(m) {
        this.m = m;
      }
      function cConvert(x) {
        if (x.s < 0 || x.compareTo(this.m) >= 0)
          return x.mod(this.m);
        else
          return x;
      }
      function cRevert(x) {
        return x;
      }
      function cReduce(x) {
        x.divRemTo(this.m, null, x);
      }
      function cMulTo(x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
      }
      function cSqrTo(x, r) {
        x.squareTo(r);
        this.reduce(r);
      }
      Classic.prototype.convert = cConvert;
      Classic.prototype.revert = cRevert;
      Classic.prototype.reduce = cReduce;
      Classic.prototype.mulTo = cMulTo;
      Classic.prototype.sqrTo = cSqrTo;
      function bnpInvDigit() {
        if (this.t < 1)
          return 0;
        var x = this[0];
        if ((x & 1) == 0)
          return 0;
        var y = x & 3;
        y = y * (2 - (x & 15) * y) & 15;
        y = y * (2 - (x & 255) * y) & 255;
        y = y * (2 - ((x & 65535) * y & 65535)) & 65535;
        y = y * (2 - x * y % this.DV) % this.DV;
        return y > 0 ? this.DV - y : -y;
      }
      function Montgomery(m) {
        this.m = m;
        this.mp = m.invDigit();
        this.mpl = this.mp & 32767;
        this.mph = this.mp >> 15;
        this.um = (1 << m.DB - 15) - 1;
        this.mt2 = 2 * m.t;
      }
      function montConvert(x) {
        var r = nbi();
        x.abs().dlShiftTo(this.m.t, r);
        r.divRemTo(this.m, null, r);
        if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0)
          this.m.subTo(r, r);
        return r;
      }
      function montRevert(x) {
        var r = nbi();
        x.copyTo(r);
        this.reduce(r);
        return r;
      }
      function montReduce(x) {
        while (x.t <= this.mt2)
          x[x.t++] = 0;
        for (var i = 0; i < this.m.t; ++i) {
          var j = x[i] & 32767;
          var u0 = j * this.mpl + ((j * this.mph + (x[i] >> 15) * this.mpl & this.um) << 15) & x.DM;
          j = i + this.m.t;
          x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
          while (x[j] >= x.DV) {
            x[j] -= x.DV;
            x[++j]++;
          }
        }
        x.clamp();
        x.drShiftTo(this.m.t, x);
        if (x.compareTo(this.m) >= 0)
          x.subTo(this.m, x);
      }
      function montSqrTo(x, r) {
        x.squareTo(r);
        this.reduce(r);
      }
      function montMulTo(x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
      }
      Montgomery.prototype.convert = montConvert;
      Montgomery.prototype.revert = montRevert;
      Montgomery.prototype.reduce = montReduce;
      Montgomery.prototype.mulTo = montMulTo;
      Montgomery.prototype.sqrTo = montSqrTo;
      function bnpIsEven() {
        return (this.t > 0 ? this[0] & 1 : this.s) == 0;
      }
      function bnpExp(e, z2) {
        if (e > 4294967295 || e < 1)
          return BigInteger.ONE;
        var r = nbi(), r2 = nbi(), g = z2.convert(this), i = nbits(e) - 1;
        g.copyTo(r);
        while (--i >= 0) {
          z2.sqrTo(r, r2);
          if ((e & 1 << i) > 0)
            z2.mulTo(r2, g, r);
          else {
            var t2 = r;
            r = r2;
            r2 = t2;
          }
        }
        return z2.revert(r);
      }
      function bnModPowInt(e, m) {
        var z2;
        if (e < 256 || m.isEven())
          z2 = new Classic(m);
        else
          z2 = new Montgomery(m);
        return this.exp(e, z2);
      }
      BigInteger.prototype.copyTo = bnpCopyTo;
      BigInteger.prototype.fromInt = bnpFromInt;
      BigInteger.prototype.fromString = bnpFromString;
      BigInteger.prototype.clamp = bnpClamp;
      BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
      BigInteger.prototype.drShiftTo = bnpDRShiftTo;
      BigInteger.prototype.lShiftTo = bnpLShiftTo;
      BigInteger.prototype.rShiftTo = bnpRShiftTo;
      BigInteger.prototype.subTo = bnpSubTo;
      BigInteger.prototype.multiplyTo = bnpMultiplyTo;
      BigInteger.prototype.squareTo = bnpSquareTo;
      BigInteger.prototype.divRemTo = bnpDivRemTo;
      BigInteger.prototype.invDigit = bnpInvDigit;
      BigInteger.prototype.isEven = bnpIsEven;
      BigInteger.prototype.exp = bnpExp;
      BigInteger.prototype.toString = bnToString;
      BigInteger.prototype.negate = bnNegate;
      BigInteger.prototype.abs = bnAbs;
      BigInteger.prototype.compareTo = bnCompareTo;
      BigInteger.prototype.bitLength = bnBitLength;
      BigInteger.prototype.mod = bnMod;
      BigInteger.prototype.modPowInt = bnModPowInt;
      BigInteger.ZERO = nbv(0);
      BigInteger.ONE = nbv(1);
      function bnClone() {
        var r = nbi();
        this.copyTo(r);
        return r;
      }
      function bnIntValue() {
        if (this.s < 0) {
          if (this.t == 1)
            return this[0] - this.DV;
          else if (this.t == 0)
            return -1;
        } else if (this.t == 1)
          return this[0];
        else if (this.t == 0)
          return 0;
        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
      }
      function bnByteValue() {
        return this.t == 0 ? this.s : this[0] << 24 >> 24;
      }
      function bnShortValue() {
        return this.t == 0 ? this.s : this[0] << 16 >> 16;
      }
      function bnpChunkSize(r) {
        return Math.floor(Math.LN2 * this.DB / Math.log(r));
      }
      function bnSigNum() {
        if (this.s < 0)
          return -1;
        else if (this.t <= 0 || this.t == 1 && this[0] <= 0)
          return 0;
        else
          return 1;
      }
      function bnpToRadix(b) {
        if (b == null)
          b = 10;
        if (this.signum() == 0 || b < 2 || b > 36)
          return "0";
        var cs = this.chunkSize(b);
        var a = Math.pow(b, cs);
        var d = nbv(a), y = nbi(), z2 = nbi(), r = "";
        this.divRemTo(d, y, z2);
        while (y.signum() > 0) {
          r = (a + z2.intValue()).toString(b).substr(1) + r;
          y.divRemTo(d, y, z2);
        }
        return z2.intValue().toString(b) + r;
      }
      function bnpFromRadix(s, b) {
        this.fromInt(0);
        if (b == null)
          b = 10;
        var cs = this.chunkSize(b);
        var d = Math.pow(b, cs), mi = false, j = 0, w = 0;
        for (var i = 0; i < s.length; ++i) {
          var x = intAt(s, i);
          if (x < 0) {
            if (s.charAt(i) == "-" && this.signum() == 0)
              mi = true;
            continue;
          }
          w = b * w + x;
          if (++j >= cs) {
            this.dMultiply(d);
            this.dAddOffset(w, 0);
            j = 0;
            w = 0;
          }
        }
        if (j > 0) {
          this.dMultiply(Math.pow(b, j));
          this.dAddOffset(w, 0);
        }
        if (mi)
          BigInteger.ZERO.subTo(this, this);
      }
      function bnpFromNumber(a, b, c) {
        if ("number" == typeof b) {
          if (a < 2)
            this.fromInt(1);
          else {
            this.fromNumber(a, c);
            if (!this.testBit(a - 1))
              this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
            if (this.isEven())
              this.dAddOffset(1, 0);
            while (!this.isProbablePrime(b)) {
              this.dAddOffset(2, 0);
              if (this.bitLength() > a)
                this.subTo(BigInteger.ONE.shiftLeft(a - 1), this);
            }
          }
        } else {
          var x = new Array(), t2 = a & 7;
          x.length = (a >> 3) + 1;
          b.nextBytes(x);
          if (t2 > 0)
            x[0] &= (1 << t2) - 1;
          else
            x[0] = 0;
          this.fromString(x, 256);
        }
      }
      function bnToByteArray() {
        var i = this.t, r = new Array();
        r[0] = this.s;
        var p = this.DB - i * this.DB % 8, d, k = 0;
        if (i-- > 0) {
          if (p < this.DB && (d = this[i] >> p) != (this.s & this.DM) >> p)
            r[k++] = d | this.s << this.DB - p;
          while (i >= 0) {
            if (p < 8) {
              d = (this[i] & (1 << p) - 1) << 8 - p;
              d |= this[--i] >> (p += this.DB - 8);
            } else {
              d = this[i] >> (p -= 8) & 255;
              if (p <= 0) {
                p += this.DB;
                --i;
              }
            }
            if ((d & 128) != 0)
              d |= -256;
            if (k == 0 && (this.s & 128) != (d & 128))
              ++k;
            if (k > 0 || d != this.s)
              r[k++] = d;
          }
        }
        return r;
      }
      function bnEquals(a) {
        return this.compareTo(a) == 0;
      }
      function bnMin(a) {
        return this.compareTo(a) < 0 ? this : a;
      }
      function bnMax(a) {
        return this.compareTo(a) > 0 ? this : a;
      }
      function bnpBitwiseTo(a, op, r) {
        var i, f, m = Math.min(a.t, this.t);
        for (i = 0; i < m; ++i)
          r[i] = op(this[i], a[i]);
        if (a.t < this.t) {
          f = a.s & this.DM;
          for (i = m; i < this.t; ++i)
            r[i] = op(this[i], f);
          r.t = this.t;
        } else {
          f = this.s & this.DM;
          for (i = m; i < a.t; ++i)
            r[i] = op(f, a[i]);
          r.t = a.t;
        }
        r.s = op(this.s, a.s);
        r.clamp();
      }
      function op_and(x, y) {
        return x & y;
      }
      function bnAnd(a) {
        var r = nbi();
        this.bitwiseTo(a, op_and, r);
        return r;
      }
      function op_or(x, y) {
        return x | y;
      }
      function bnOr(a) {
        var r = nbi();
        this.bitwiseTo(a, op_or, r);
        return r;
      }
      function op_xor(x, y) {
        return x ^ y;
      }
      function bnXor(a) {
        var r = nbi();
        this.bitwiseTo(a, op_xor, r);
        return r;
      }
      function op_andnot(x, y) {
        return x & ~y;
      }
      function bnAndNot(a) {
        var r = nbi();
        this.bitwiseTo(a, op_andnot, r);
        return r;
      }
      function bnNot() {
        var r = nbi();
        for (var i = 0; i < this.t; ++i)
          r[i] = this.DM & ~this[i];
        r.t = this.t;
        r.s = ~this.s;
        return r;
      }
      function bnShiftLeft(n) {
        var r = nbi();
        if (n < 0)
          this.rShiftTo(-n, r);
        else
          this.lShiftTo(n, r);
        return r;
      }
      function bnShiftRight(n) {
        var r = nbi();
        if (n < 0)
          this.lShiftTo(-n, r);
        else
          this.rShiftTo(n, r);
        return r;
      }
      function lbit(x) {
        if (x == 0)
          return -1;
        var r = 0;
        if ((x & 65535) == 0) {
          x >>= 16;
          r += 16;
        }
        if ((x & 255) == 0) {
          x >>= 8;
          r += 8;
        }
        if ((x & 15) == 0) {
          x >>= 4;
          r += 4;
        }
        if ((x & 3) == 0) {
          x >>= 2;
          r += 2;
        }
        if ((x & 1) == 0)
          ++r;
        return r;
      }
      function bnGetLowestSetBit() {
        for (var i = 0; i < this.t; ++i)
          if (this[i] != 0)
            return i * this.DB + lbit(this[i]);
        if (this.s < 0)
          return this.t * this.DB;
        return -1;
      }
      function cbit(x) {
        var r = 0;
        while (x != 0) {
          x &= x - 1;
          ++r;
        }
        return r;
      }
      function bnBitCount() {
        var r = 0, x = this.s & this.DM;
        for (var i = 0; i < this.t; ++i)
          r += cbit(this[i] ^ x);
        return r;
      }
      function bnTestBit(n) {
        var j = Math.floor(n / this.DB);
        if (j >= this.t)
          return this.s != 0;
        return (this[j] & 1 << n % this.DB) != 0;
      }
      function bnpChangeBit(n, op) {
        var r = BigInteger.ONE.shiftLeft(n);
        this.bitwiseTo(r, op, r);
        return r;
      }
      function bnSetBit(n) {
        return this.changeBit(n, op_or);
      }
      function bnClearBit(n) {
        return this.changeBit(n, op_andnot);
      }
      function bnFlipBit(n) {
        return this.changeBit(n, op_xor);
      }
      function bnpAddTo(a, r) {
        var i = 0, c = 0, m = Math.min(a.t, this.t);
        while (i < m) {
          c += this[i] + a[i];
          r[i++] = c & this.DM;
          c >>= this.DB;
        }
        if (a.t < this.t) {
          c += a.s;
          while (i < this.t) {
            c += this[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
          }
          c += this.s;
        } else {
          c += this.s;
          while (i < a.t) {
            c += a[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
          }
          c += a.s;
        }
        r.s = c < 0 ? -1 : 0;
        if (c > 0)
          r[i++] = c;
        else if (c < -1)
          r[i++] = this.DV + c;
        r.t = i;
        r.clamp();
      }
      function bnAdd(a) {
        var r = nbi();
        this.addTo(a, r);
        return r;
      }
      function bnSubtract(a) {
        var r = nbi();
        this.subTo(a, r);
        return r;
      }
      function bnMultiply(a) {
        var r = nbi();
        this.multiplyTo(a, r);
        return r;
      }
      function bnSquare() {
        var r = nbi();
        this.squareTo(r);
        return r;
      }
      function bnDivide(a) {
        var r = nbi();
        this.divRemTo(a, r, null);
        return r;
      }
      function bnRemainder(a) {
        var r = nbi();
        this.divRemTo(a, null, r);
        return r;
      }
      function bnDivideAndRemainder(a) {
        var q = nbi(), r = nbi();
        this.divRemTo(a, q, r);
        return new Array(q, r);
      }
      function bnpDMultiply(n) {
        this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
        ++this.t;
        this.clamp();
      }
      function bnpDAddOffset(n, w) {
        if (n == 0)
          return;
        while (this.t <= w)
          this[this.t++] = 0;
        this[w] += n;
        while (this[w] >= this.DV) {
          this[w] -= this.DV;
          if (++w >= this.t)
            this[this.t++] = 0;
          ++this[w];
        }
      }
      function NullExp() {
      }
      function nNop(x) {
        return x;
      }
      function nMulTo(x, y, r) {
        x.multiplyTo(y, r);
      }
      function nSqrTo(x, r) {
        x.squareTo(r);
      }
      NullExp.prototype.convert = nNop;
      NullExp.prototype.revert = nNop;
      NullExp.prototype.mulTo = nMulTo;
      NullExp.prototype.sqrTo = nSqrTo;
      function bnPow(e) {
        return this.exp(e, new NullExp());
      }
      function bnpMultiplyLowerTo(a, n, r) {
        var i = Math.min(this.t + a.t, n);
        r.s = 0;
        r.t = i;
        while (i > 0)
          r[--i] = 0;
        var j;
        for (j = r.t - this.t; i < j; ++i)
          r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);
        for (j = Math.min(a.t, n); i < j; ++i)
          this.am(0, a[i], r, i, 0, n - i);
        r.clamp();
      }
      function bnpMultiplyUpperTo(a, n, r) {
        --n;
        var i = r.t = this.t + a.t - n;
        r.s = 0;
        while (--i >= 0)
          r[i] = 0;
        for (i = Math.max(n - this.t, 0); i < a.t; ++i)
          r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);
        r.clamp();
        r.drShiftTo(1, r);
      }
      function Barrett(m) {
        this.r2 = nbi();
        this.q3 = nbi();
        BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
        this.mu = this.r2.divide(m);
        this.m = m;
      }
      function barrettConvert(x) {
        if (x.s < 0 || x.t > 2 * this.m.t)
          return x.mod(this.m);
        else if (x.compareTo(this.m) < 0)
          return x;
        else {
          var r = nbi();
          x.copyTo(r);
          this.reduce(r);
          return r;
        }
      }
      function barrettRevert(x) {
        return x;
      }
      function barrettReduce(x) {
        x.drShiftTo(this.m.t - 1, this.r2);
        if (x.t > this.m.t + 1) {
          x.t = this.m.t + 1;
          x.clamp();
        }
        this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
        this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
        while (x.compareTo(this.r2) < 0)
          x.dAddOffset(1, this.m.t + 1);
        x.subTo(this.r2, x);
        while (x.compareTo(this.m) >= 0)
          x.subTo(this.m, x);
      }
      function barrettSqrTo(x, r) {
        x.squareTo(r);
        this.reduce(r);
      }
      function barrettMulTo(x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
      }
      Barrett.prototype.convert = barrettConvert;
      Barrett.prototype.revert = barrettRevert;
      Barrett.prototype.reduce = barrettReduce;
      Barrett.prototype.mulTo = barrettMulTo;
      Barrett.prototype.sqrTo = barrettSqrTo;
      function bnModPow(e, m) {
        var i = e.bitLength(), k, r = nbv(1), z2;
        if (i <= 0)
          return r;
        else if (i < 18)
          k = 1;
        else if (i < 48)
          k = 3;
        else if (i < 144)
          k = 4;
        else if (i < 768)
          k = 5;
        else
          k = 6;
        if (i < 8)
          z2 = new Classic(m);
        else if (m.isEven())
          z2 = new Barrett(m);
        else
          z2 = new Montgomery(m);
        var g = new Array(), n = 3, k1 = k - 1, km = (1 << k) - 1;
        g[1] = z2.convert(this);
        if (k > 1) {
          var g2 = nbi();
          z2.sqrTo(g[1], g2);
          while (n <= km) {
            g[n] = nbi();
            z2.mulTo(g2, g[n - 2], g[n]);
            n += 2;
          }
        }
        var j = e.t - 1, w, is1 = true, r2 = nbi(), t2;
        i = nbits(e[j]) - 1;
        while (j >= 0) {
          if (i >= k1)
            w = e[j] >> i - k1 & km;
          else {
            w = (e[j] & (1 << i + 1) - 1) << k1 - i;
            if (j > 0)
              w |= e[j - 1] >> this.DB + i - k1;
          }
          n = k;
          while ((w & 1) == 0) {
            w >>= 1;
            --n;
          }
          if ((i -= n) < 0) {
            i += this.DB;
            --j;
          }
          if (is1) {
            g[w].copyTo(r);
            is1 = false;
          } else {
            while (n > 1) {
              z2.sqrTo(r, r2);
              z2.sqrTo(r2, r);
              n -= 2;
            }
            if (n > 0)
              z2.sqrTo(r, r2);
            else {
              t2 = r;
              r = r2;
              r2 = t2;
            }
            z2.mulTo(r2, g[w], r);
          }
          while (j >= 0 && (e[j] & 1 << i) == 0) {
            z2.sqrTo(r, r2);
            t2 = r;
            r = r2;
            r2 = t2;
            if (--i < 0) {
              i = this.DB - 1;
              --j;
            }
          }
        }
        return z2.revert(r);
      }
      function bnGCD(a) {
        var x = this.s < 0 ? this.negate() : this.clone();
        var y = a.s < 0 ? a.negate() : a.clone();
        if (x.compareTo(y) < 0) {
          var t2 = x;
          x = y;
          y = t2;
        }
        var i = x.getLowestSetBit(), g = y.getLowestSetBit();
        if (g < 0)
          return x;
        if (i < g)
          g = i;
        if (g > 0) {
          x.rShiftTo(g, x);
          y.rShiftTo(g, y);
        }
        while (x.signum() > 0) {
          if ((i = x.getLowestSetBit()) > 0)
            x.rShiftTo(i, x);
          if ((i = y.getLowestSetBit()) > 0)
            y.rShiftTo(i, y);
          if (x.compareTo(y) >= 0) {
            x.subTo(y, x);
            x.rShiftTo(1, x);
          } else {
            y.subTo(x, y);
            y.rShiftTo(1, y);
          }
        }
        if (g > 0)
          y.lShiftTo(g, y);
        return y;
      }
      function bnpModInt(n) {
        if (n <= 0)
          return 0;
        var d = this.DV % n, r = this.s < 0 ? n - 1 : 0;
        if (this.t > 0)
          if (d == 0)
            r = this[0] % n;
          else
            for (var i = this.t - 1; i >= 0; --i)
              r = (d * r + this[i]) % n;
        return r;
      }
      function bnModInverse(m) {
        var ac = m.isEven();
        if (this.isEven() && ac || m.signum() == 0)
          return BigInteger.ZERO;
        var u = m.clone(), v = this.clone();
        var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
        while (u.signum() != 0) {
          while (u.isEven()) {
            u.rShiftTo(1, u);
            if (ac) {
              if (!a.isEven() || !b.isEven()) {
                a.addTo(this, a);
                b.subTo(m, b);
              }
              a.rShiftTo(1, a);
            } else if (!b.isEven())
              b.subTo(m, b);
            b.rShiftTo(1, b);
          }
          while (v.isEven()) {
            v.rShiftTo(1, v);
            if (ac) {
              if (!c.isEven() || !d.isEven()) {
                c.addTo(this, c);
                d.subTo(m, d);
              }
              c.rShiftTo(1, c);
            } else if (!d.isEven())
              d.subTo(m, d);
            d.rShiftTo(1, d);
          }
          if (u.compareTo(v) >= 0) {
            u.subTo(v, u);
            if (ac)
              a.subTo(c, a);
            b.subTo(d, b);
          } else {
            v.subTo(u, v);
            if (ac)
              c.subTo(a, c);
            d.subTo(b, d);
          }
        }
        if (v.compareTo(BigInteger.ONE) != 0)
          return BigInteger.ZERO;
        if (d.compareTo(m) >= 0)
          return d.subtract(m);
        if (d.signum() < 0)
          d.addTo(m, d);
        else
          return d;
        if (d.signum() < 0)
          return d.add(m);
        else
          return d;
      }
      var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
      var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];
      function bnIsProbablePrime(t2) {
        var i, x = this.abs();
        if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
          for (i = 0; i < lowprimes.length; ++i)
            if (x[0] == lowprimes[i])
              return true;
          return false;
        }
        if (x.isEven())
          return false;
        i = 1;
        while (i < lowprimes.length) {
          var m = lowprimes[i], j = i + 1;
          while (j < lowprimes.length && m < lplim)
            m *= lowprimes[j++];
          m = x.modInt(m);
          while (i < j)
            if (m % lowprimes[i++] == 0)
              return false;
        }
        return x.millerRabin(t2);
      }
      function bnpMillerRabin(t2) {
        var n1 = this.subtract(BigInteger.ONE);
        var k = n1.getLowestSetBit();
        if (k <= 0)
          return false;
        var r = n1.shiftRight(k);
        t2 = t2 + 1 >> 1;
        if (t2 > lowprimes.length)
          t2 = lowprimes.length;
        var a = nbi();
        for (var i = 0; i < t2; ++i) {
          a.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
          var y = a.modPow(r, this);
          if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
            var j = 1;
            while (j++ < k && y.compareTo(n1) != 0) {
              y = y.modPowInt(2, this);
              if (y.compareTo(BigInteger.ONE) == 0)
                return false;
            }
            if (y.compareTo(n1) != 0)
              return false;
          }
        }
        return true;
      }
      BigInteger.prototype.chunkSize = bnpChunkSize;
      BigInteger.prototype.toRadix = bnpToRadix;
      BigInteger.prototype.fromRadix = bnpFromRadix;
      BigInteger.prototype.fromNumber = bnpFromNumber;
      BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
      BigInteger.prototype.changeBit = bnpChangeBit;
      BigInteger.prototype.addTo = bnpAddTo;
      BigInteger.prototype.dMultiply = bnpDMultiply;
      BigInteger.prototype.dAddOffset = bnpDAddOffset;
      BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
      BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
      BigInteger.prototype.modInt = bnpModInt;
      BigInteger.prototype.millerRabin = bnpMillerRabin;
      BigInteger.prototype.clone = bnClone;
      BigInteger.prototype.intValue = bnIntValue;
      BigInteger.prototype.byteValue = bnByteValue;
      BigInteger.prototype.shortValue = bnShortValue;
      BigInteger.prototype.signum = bnSigNum;
      BigInteger.prototype.toByteArray = bnToByteArray;
      BigInteger.prototype.equals = bnEquals;
      BigInteger.prototype.min = bnMin;
      BigInteger.prototype.max = bnMax;
      BigInteger.prototype.and = bnAnd;
      BigInteger.prototype.or = bnOr;
      BigInteger.prototype.xor = bnXor;
      BigInteger.prototype.andNot = bnAndNot;
      BigInteger.prototype.not = bnNot;
      BigInteger.prototype.shiftLeft = bnShiftLeft;
      BigInteger.prototype.shiftRight = bnShiftRight;
      BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
      BigInteger.prototype.bitCount = bnBitCount;
      BigInteger.prototype.testBit = bnTestBit;
      BigInteger.prototype.setBit = bnSetBit;
      BigInteger.prototype.clearBit = bnClearBit;
      BigInteger.prototype.flipBit = bnFlipBit;
      BigInteger.prototype.add = bnAdd;
      BigInteger.prototype.subtract = bnSubtract;
      BigInteger.prototype.multiply = bnMultiply;
      BigInteger.prototype.divide = bnDivide;
      BigInteger.prototype.remainder = bnRemainder;
      BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
      BigInteger.prototype.modPow = bnModPow;
      BigInteger.prototype.modInverse = bnModInverse;
      BigInteger.prototype.pow = bnPow;
      BigInteger.prototype.gcd = bnGCD;
      BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
      BigInteger.prototype.square = bnSquare;
      BigInteger.prototype.Barrett = Barrett;
      var rng_state;
      var rng_pool;
      var rng_pptr;
      function rng_seed_int(x) {
        rng_pool[rng_pptr++] ^= x & 255;
        rng_pool[rng_pptr++] ^= x >> 8 & 255;
        rng_pool[rng_pptr++] ^= x >> 16 & 255;
        rng_pool[rng_pptr++] ^= x >> 24 & 255;
        if (rng_pptr >= rng_psize)
          rng_pptr -= rng_psize;
      }
      function rng_seed_time() {
        rng_seed_int((/* @__PURE__ */ new Date()).getTime());
      }
      if (rng_pool == null) {
        rng_pool = new Array();
        rng_pptr = 0;
        var t;
        if (typeof window !== "undefined" && window.crypto) {
          if (window.crypto.getRandomValues) {
            var ua = new Uint8Array(32);
            window.crypto.getRandomValues(ua);
            for (t = 0; t < 32; ++t)
              rng_pool[rng_pptr++] = ua[t];
          } else if (navigator.appName == "Netscape" && navigator.appVersion < "5") {
            var z = window.crypto.random(32);
            for (t = 0; t < z.length; ++t)
              rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
          }
        }
        while (rng_pptr < rng_psize) {
          t = Math.floor(65536 * Math.random());
          rng_pool[rng_pptr++] = t >>> 8;
          rng_pool[rng_pptr++] = t & 255;
        }
        rng_pptr = 0;
        rng_seed_time();
      }
      function rng_get_byte() {
        if (rng_state == null) {
          rng_seed_time();
          rng_state = prng_newstate();
          rng_state.init(rng_pool);
          for (rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
            rng_pool[rng_pptr] = 0;
          rng_pptr = 0;
        }
        return rng_state.next();
      }
      function rng_get_bytes(ba) {
        var i;
        for (i = 0; i < ba.length; ++i)
          ba[i] = rng_get_byte();
      }
      function SecureRandom() {
      }
      SecureRandom.prototype.nextBytes = rng_get_bytes;
      function Arcfour() {
        this.i = 0;
        this.j = 0;
        this.S = new Array();
      }
      function ARC4init(key) {
        var i, j, t2;
        for (i = 0; i < 256; ++i)
          this.S[i] = i;
        j = 0;
        for (i = 0; i < 256; ++i) {
          j = j + this.S[i] + key[i % key.length] & 255;
          t2 = this.S[i];
          this.S[i] = this.S[j];
          this.S[j] = t2;
        }
        this.i = 0;
        this.j = 0;
      }
      function ARC4next() {
        var t2;
        this.i = this.i + 1 & 255;
        this.j = this.j + this.S[this.i] & 255;
        t2 = this.S[this.i];
        this.S[this.i] = this.S[this.j];
        this.S[this.j] = t2;
        return this.S[t2 + this.S[this.i] & 255];
      }
      Arcfour.prototype.init = ARC4init;
      Arcfour.prototype.next = ARC4next;
      function prng_newstate() {
        return new Arcfour();
      }
      var rng_psize = 256;
      if (typeof exports2 !== "undefined") {
        exports2 = module2.exports = {
          default: BigInteger,
          BigInteger,
          SecureRandom
        };
      } else {
        this.jsbn = {
          BigInteger,
          SecureRandom
        };
      }
    }).call(exports2);
  }
});

// node_modules/sprintf-js/src/sprintf.js
var require_sprintf = __commonJS({
  "node_modules/sprintf-js/src/sprintf.js"(exports2) {
    !function() {
      "use strict";
      var re = {
        not_string: /[^s]/,
        not_bool: /[^t]/,
        not_type: /[^T]/,
        not_primitive: /[^v]/,
        number: /[diefg]/,
        numeric_arg: /[bcdiefguxX]/,
        json: /[j]/,
        not_json: /[^j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[+-]/
      };
      function sprintf(key) {
        return sprintf_format(sprintf_parse(key), arguments);
      }
      function vsprintf(fmt, argv) {
        return sprintf.apply(null, [fmt].concat(argv || []));
      }
      function sprintf_format(parse_tree, argv) {
        var cursor = 1, tree_length = parse_tree.length, arg, output = "", i, k, ph, pad, pad_character, pad_length, is_positive, sign;
        for (i = 0; i < tree_length; i++) {
          if (typeof parse_tree[i] === "string") {
            output += parse_tree[i];
          } else if (typeof parse_tree[i] === "object") {
            ph = parse_tree[i];
            if (ph.keys) {
              arg = argv[cursor];
              for (k = 0; k < ph.keys.length; k++) {
                if (arg == void 0) {
                  throw new Error(sprintf('[sprintf] Cannot access property "%s" of undefined value "%s"', ph.keys[k], ph.keys[k - 1]));
                }
                arg = arg[ph.keys[k]];
              }
            } else if (ph.param_no) {
              arg = argv[ph.param_no];
            } else {
              arg = argv[cursor++];
            }
            if (re.not_type.test(ph.type) && re.not_primitive.test(ph.type) && arg instanceof Function) {
              arg = arg();
            }
            if (re.numeric_arg.test(ph.type) && (typeof arg !== "number" && isNaN(arg))) {
              throw new TypeError(sprintf("[sprintf] expecting number but found %T", arg));
            }
            if (re.number.test(ph.type)) {
              is_positive = arg >= 0;
            }
            switch (ph.type) {
              case "b":
                arg = parseInt(arg, 10).toString(2);
                break;
              case "c":
                arg = String.fromCharCode(parseInt(arg, 10));
                break;
              case "d":
              case "i":
                arg = parseInt(arg, 10);
                break;
              case "j":
                arg = JSON.stringify(arg, null, ph.width ? parseInt(ph.width) : 0);
                break;
              case "e":
                arg = ph.precision ? parseFloat(arg).toExponential(ph.precision) : parseFloat(arg).toExponential();
                break;
              case "f":
                arg = ph.precision ? parseFloat(arg).toFixed(ph.precision) : parseFloat(arg);
                break;
              case "g":
                arg = ph.precision ? String(Number(arg.toPrecision(ph.precision))) : parseFloat(arg);
                break;
              case "o":
                arg = (parseInt(arg, 10) >>> 0).toString(8);
                break;
              case "s":
                arg = String(arg);
                arg = ph.precision ? arg.substring(0, ph.precision) : arg;
                break;
              case "t":
                arg = String(!!arg);
                arg = ph.precision ? arg.substring(0, ph.precision) : arg;
                break;
              case "T":
                arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase();
                arg = ph.precision ? arg.substring(0, ph.precision) : arg;
                break;
              case "u":
                arg = parseInt(arg, 10) >>> 0;
                break;
              case "v":
                arg = arg.valueOf();
                arg = ph.precision ? arg.substring(0, ph.precision) : arg;
                break;
              case "x":
                arg = (parseInt(arg, 10) >>> 0).toString(16);
                break;
              case "X":
                arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase();
                break;
            }
            if (re.json.test(ph.type)) {
              output += arg;
            } else {
              if (re.number.test(ph.type) && (!is_positive || ph.sign)) {
                sign = is_positive ? "+" : "-";
                arg = arg.toString().replace(re.sign, "");
              } else {
                sign = "";
              }
              pad_character = ph.pad_char ? ph.pad_char === "0" ? "0" : ph.pad_char.charAt(1) : " ";
              pad_length = ph.width - (sign + arg).length;
              pad = ph.width ? pad_length > 0 ? pad_character.repeat(pad_length) : "" : "";
              output += ph.align ? sign + arg + pad : pad_character === "0" ? sign + pad + arg : pad + sign + arg;
            }
          }
        }
        return output;
      }
      var sprintf_cache = /* @__PURE__ */ Object.create(null);
      function sprintf_parse(fmt) {
        if (sprintf_cache[fmt]) {
          return sprintf_cache[fmt];
        }
        var _fmt = fmt, match, parse_tree = [], arg_names = 0;
        while (_fmt) {
          if ((match = re.text.exec(_fmt)) !== null) {
            parse_tree.push(match[0]);
          } else if ((match = re.modulo.exec(_fmt)) !== null) {
            parse_tree.push("%");
          } else if ((match = re.placeholder.exec(_fmt)) !== null) {
            if (match[2]) {
              arg_names |= 1;
              var field_list = [], replacement_field = match[2], field_match = [];
              if ((field_match = re.key.exec(replacement_field)) !== null) {
                field_list.push(field_match[1]);
                while ((replacement_field = replacement_field.substring(field_match[0].length)) !== "") {
                  if ((field_match = re.key_access.exec(replacement_field)) !== null) {
                    field_list.push(field_match[1]);
                  } else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
                    field_list.push(field_match[1]);
                  } else {
                    throw new SyntaxError("[sprintf] failed to parse named argument key");
                  }
                }
              } else {
                throw new SyntaxError("[sprintf] failed to parse named argument key");
              }
              match[2] = field_list;
            } else {
              arg_names |= 2;
            }
            if (arg_names === 3) {
              throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
            }
            parse_tree.push(
              {
                placeholder: match[0],
                param_no: match[1],
                keys: match[2],
                sign: match[3],
                pad_char: match[4],
                align: match[5],
                width: match[6],
                precision: match[7],
                type: match[8]
              }
            );
          } else {
            throw new SyntaxError("[sprintf] unexpected placeholder");
          }
          _fmt = _fmt.substring(match[0].length);
        }
        return sprintf_cache[fmt] = parse_tree;
      }
      if (typeof exports2 !== "undefined") {
        exports2["sprintf"] = sprintf;
        exports2["vsprintf"] = vsprintf;
      }
      if (typeof window !== "undefined") {
        window["sprintf"] = sprintf;
        window["vsprintf"] = vsprintf;
        if (typeof define === "function" && define["amd"]) {
          define(function() {
            return {
              "sprintf": sprintf,
              "vsprintf": vsprintf
            };
          });
        }
      }
    }();
  }
});

// node_modules/ip-address/dist/ipv4.js
var require_ipv4 = __commonJS({
  "node_modules/ip-address/dist/ipv4.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Address4 = void 0;
    var common = __importStar(require_common2());
    var constants = __importStar(require_constants4());
    var address_error_1 = require_address_error();
    var jsbn_1 = require_jsbn();
    var sprintf_js_1 = require_sprintf();
    var Address4 = class _Address4 {
      constructor(address) {
        this.groups = constants.GROUPS;
        this.parsedAddress = [];
        this.parsedSubnet = "";
        this.subnet = "/32";
        this.subnetMask = 32;
        this.v4 = true;
        this.isCorrect = common.isCorrect(constants.BITS);
        this.isInSubnet = common.isInSubnet;
        this.address = address;
        const subnet = constants.RE_SUBNET_STRING.exec(address);
        if (subnet) {
          this.parsedSubnet = subnet[0].replace("/", "");
          this.subnetMask = parseInt(this.parsedSubnet, 10);
          this.subnet = `/${this.subnetMask}`;
          if (this.subnetMask < 0 || this.subnetMask > constants.BITS) {
            throw new address_error_1.AddressError("Invalid subnet mask.");
          }
          address = address.replace(constants.RE_SUBNET_STRING, "");
        }
        this.addressMinusSuffix = address;
        this.parsedAddress = this.parse(address);
      }
      static isValid(address) {
        try {
          new _Address4(address);
          return true;
        } catch (e) {
          return false;
        }
      }
      /*
       * Parses a v4 address
       */
      parse(address) {
        const groups = address.split(".");
        if (!address.match(constants.RE_ADDRESS)) {
          throw new address_error_1.AddressError("Invalid IPv4 address.");
        }
        return groups;
      }
      /**
       * Returns the correct form of an address
       * @memberof Address4
       * @instance
       * @returns {String}
       */
      correctForm() {
        return this.parsedAddress.map((part) => parseInt(part, 10)).join(".");
      }
      /**
       * Converts a hex string to an IPv4 address object
       * @memberof Address4
       * @static
       * @param {string} hex - a hex string to convert
       * @returns {Address4}
       */
      static fromHex(hex) {
        const padded = hex.replace(/:/g, "").padStart(8, "0");
        const groups = [];
        let i;
        for (i = 0; i < 8; i += 2) {
          const h = padded.slice(i, i + 2);
          groups.push(parseInt(h, 16));
        }
        return new _Address4(groups.join("."));
      }
      /**
       * Converts an integer into a IPv4 address object
       * @memberof Address4
       * @static
       * @param {integer} integer - a number to convert
       * @returns {Address4}
       */
      static fromInteger(integer) {
        return _Address4.fromHex(integer.toString(16));
      }
      /**
       * Return an address from in-addr.arpa form
       * @memberof Address4
       * @static
       * @param {string} arpaFormAddress - an 'in-addr.arpa' form ipv4 address
       * @returns {Adress4}
       * @example
       * var address = Address4.fromArpa(42.2.0.192.in-addr.arpa.)
       * address.correctForm(); // '192.0.2.42'
       */
      static fromArpa(arpaFormAddress) {
        const leader = arpaFormAddress.replace(/(\.in-addr\.arpa)?\.$/, "");
        const address = leader.split(".").reverse().join(".");
        return new _Address4(address);
      }
      /**
       * Converts an IPv4 address object to a hex string
       * @memberof Address4
       * @instance
       * @returns {String}
       */
      toHex() {
        return this.parsedAddress.map((part) => (0, sprintf_js_1.sprintf)("%02x", parseInt(part, 10))).join(":");
      }
      /**
       * Converts an IPv4 address object to an array of bytes
       * @memberof Address4
       * @instance
       * @returns {Array}
       */
      toArray() {
        return this.parsedAddress.map((part) => parseInt(part, 10));
      }
      /**
       * Converts an IPv4 address object to an IPv6 address group
       * @memberof Address4
       * @instance
       * @returns {String}
       */
      toGroup6() {
        const output = [];
        let i;
        for (i = 0; i < constants.GROUPS; i += 2) {
          const hex = (0, sprintf_js_1.sprintf)("%02x%02x", parseInt(this.parsedAddress[i], 10), parseInt(this.parsedAddress[i + 1], 10));
          output.push((0, sprintf_js_1.sprintf)("%x", parseInt(hex, 16)));
        }
        return output.join(":");
      }
      /**
       * Returns the address as a BigInteger
       * @memberof Address4
       * @instance
       * @returns {BigInteger}
       */
      bigInteger() {
        return new jsbn_1.BigInteger(this.parsedAddress.map((n) => (0, sprintf_js_1.sprintf)("%02x", parseInt(n, 10))).join(""), 16);
      }
      /**
       * Helper function getting start address.
       * @memberof Address4
       * @instance
       * @returns {BigInteger}
       */
      _startAddress() {
        return new jsbn_1.BigInteger(this.mask() + "0".repeat(constants.BITS - this.subnetMask), 2);
      }
      /**
       * The first address in the range given by this address' subnet.
       * Often referred to as the Network Address.
       * @memberof Address4
       * @instance
       * @returns {Address4}
       */
      startAddress() {
        return _Address4.fromBigInteger(this._startAddress());
      }
      /**
       * The first host address in the range given by this address's subnet ie
       * the first address after the Network Address
       * @memberof Address4
       * @instance
       * @returns {Address4}
       */
      startAddressExclusive() {
        const adjust = new jsbn_1.BigInteger("1");
        return _Address4.fromBigInteger(this._startAddress().add(adjust));
      }
      /**
       * Helper function getting end address.
       * @memberof Address4
       * @instance
       * @returns {BigInteger}
       */
      _endAddress() {
        return new jsbn_1.BigInteger(this.mask() + "1".repeat(constants.BITS - this.subnetMask), 2);
      }
      /**
       * The last address in the range given by this address' subnet
       * Often referred to as the Broadcast
       * @memberof Address4
       * @instance
       * @returns {Address4}
       */
      endAddress() {
        return _Address4.fromBigInteger(this._endAddress());
      }
      /**
       * The last host address in the range given by this address's subnet ie
       * the last address prior to the Broadcast Address
       * @memberof Address4
       * @instance
       * @returns {Address4}
       */
      endAddressExclusive() {
        const adjust = new jsbn_1.BigInteger("1");
        return _Address4.fromBigInteger(this._endAddress().subtract(adjust));
      }
      /**
       * Converts a BigInteger to a v4 address object
       * @memberof Address4
       * @static
       * @param {BigInteger} bigInteger - a BigInteger to convert
       * @returns {Address4}
       */
      static fromBigInteger(bigInteger) {
        return _Address4.fromInteger(parseInt(bigInteger.toString(), 10));
      }
      /**
       * Returns the first n bits of the address, defaulting to the
       * subnet mask
       * @memberof Address4
       * @instance
       * @returns {String}
       */
      mask(mask) {
        if (mask === void 0) {
          mask = this.subnetMask;
        }
        return this.getBitsBase2(0, mask);
      }
      /**
       * Returns the bits in the given range as a base-2 string
       * @memberof Address4
       * @instance
       * @returns {string}
       */
      getBitsBase2(start, end) {
        return this.binaryZeroPad().slice(start, end);
      }
      /**
       * Return the reversed ip6.arpa form of the address
       * @memberof Address4
       * @param {Object} options
       * @param {boolean} options.omitSuffix - omit the "in-addr.arpa" suffix
       * @instance
       * @returns {String}
       */
      reverseForm(options) {
        if (!options) {
          options = {};
        }
        const reversed = this.correctForm().split(".").reverse().join(".");
        if (options.omitSuffix) {
          return reversed;
        }
        return (0, sprintf_js_1.sprintf)("%s.in-addr.arpa.", reversed);
      }
      /**
       * Returns true if the given address is a multicast address
       * @memberof Address4
       * @instance
       * @returns {boolean}
       */
      isMulticast() {
        return this.isInSubnet(new _Address4("224.0.0.0/4"));
      }
      /**
       * Returns a zero-padded base-2 string representation of the address
       * @memberof Address4
       * @instance
       * @returns {string}
       */
      binaryZeroPad() {
        return this.bigInteger().toString(2).padStart(constants.BITS, "0");
      }
      /**
       * Groups an IPv4 address for inclusion at the end of an IPv6 address
       * @returns {String}
       */
      groupForV6() {
        const segments = this.parsedAddress;
        return this.address.replace(constants.RE_ADDRESS, (0, sprintf_js_1.sprintf)('<span class="hover-group group-v4 group-6">%s</span>.<span class="hover-group group-v4 group-7">%s</span>', segments.slice(0, 2).join("."), segments.slice(2, 4).join(".")));
      }
    };
    exports2.Address4 = Address4;
  }
});

// node_modules/ip-address/dist/v6/constants.js
var require_constants5 = __commonJS({
  "node_modules/ip-address/dist/v6/constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RE_URL_WITH_PORT = exports2.RE_URL = exports2.RE_ZONE_STRING = exports2.RE_SUBNET_STRING = exports2.RE_BAD_ADDRESS = exports2.RE_BAD_CHARACTERS = exports2.TYPES = exports2.SCOPES = exports2.GROUPS = exports2.BITS = void 0;
    exports2.BITS = 128;
    exports2.GROUPS = 8;
    exports2.SCOPES = {
      0: "Reserved",
      1: "Interface local",
      2: "Link local",
      4: "Admin local",
      5: "Site local",
      8: "Organization local",
      14: "Global",
      15: "Reserved"
    };
    exports2.TYPES = {
      "ff01::1/128": "Multicast (All nodes on this interface)",
      "ff01::2/128": "Multicast (All routers on this interface)",
      "ff02::1/128": "Multicast (All nodes on this link)",
      "ff02::2/128": "Multicast (All routers on this link)",
      "ff05::2/128": "Multicast (All routers in this site)",
      "ff02::5/128": "Multicast (OSPFv3 AllSPF routers)",
      "ff02::6/128": "Multicast (OSPFv3 AllDR routers)",
      "ff02::9/128": "Multicast (RIP routers)",
      "ff02::a/128": "Multicast (EIGRP routers)",
      "ff02::d/128": "Multicast (PIM routers)",
      "ff02::16/128": "Multicast (MLDv2 reports)",
      "ff01::fb/128": "Multicast (mDNSv6)",
      "ff02::fb/128": "Multicast (mDNSv6)",
      "ff05::fb/128": "Multicast (mDNSv6)",
      "ff02::1:2/128": "Multicast (All DHCP servers and relay agents on this link)",
      "ff05::1:2/128": "Multicast (All DHCP servers and relay agents in this site)",
      "ff02::1:3/128": "Multicast (All DHCP servers on this link)",
      "ff05::1:3/128": "Multicast (All DHCP servers in this site)",
      "::/128": "Unspecified",
      "::1/128": "Loopback",
      "ff00::/8": "Multicast",
      "fe80::/10": "Link-local unicast"
    };
    exports2.RE_BAD_CHARACTERS = /([^0-9a-f:/%])/gi;
    exports2.RE_BAD_ADDRESS = /([0-9a-f]{5,}|:{3,}|[^:]:$|^:[^:]|\/$)/gi;
    exports2.RE_SUBNET_STRING = /\/\d{1,3}(?=%|$)/;
    exports2.RE_ZONE_STRING = /%.*$/;
    exports2.RE_URL = new RegExp(/^\[{0,1}([0-9a-f:]+)\]{0,1}/);
    exports2.RE_URL_WITH_PORT = new RegExp(/\[([0-9a-f:]+)\]:([0-9]{1,5})/);
  }
});

// node_modules/ip-address/dist/v6/helpers.js
var require_helpers = __commonJS({
  "node_modules/ip-address/dist/v6/helpers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.simpleGroup = exports2.spanLeadingZeroes = exports2.spanAll = exports2.spanAllZeroes = void 0;
    var sprintf_js_1 = require_sprintf();
    function spanAllZeroes(s) {
      return s.replace(/(0+)/g, '<span class="zero">$1</span>');
    }
    exports2.spanAllZeroes = spanAllZeroes;
    function spanAll(s, offset = 0) {
      const letters = s.split("");
      return letters.map(
        (n, i) => (0, sprintf_js_1.sprintf)('<span class="digit value-%s position-%d">%s</span>', n, i + offset, spanAllZeroes(n))
        // XXX Use #base-2 .value-0 instead?
      ).join("");
    }
    exports2.spanAll = spanAll;
    function spanLeadingZeroesSimple(group) {
      return group.replace(/^(0+)/, '<span class="zero">$1</span>');
    }
    function spanLeadingZeroes(address) {
      const groups = address.split(":");
      return groups.map((g) => spanLeadingZeroesSimple(g)).join(":");
    }
    exports2.spanLeadingZeroes = spanLeadingZeroes;
    function simpleGroup(addressString, offset = 0) {
      const groups = addressString.split(":");
      return groups.map((g, i) => {
        if (/group-v4/.test(g)) {
          return g;
        }
        return (0, sprintf_js_1.sprintf)('<span class="hover-group group-%d">%s</span>', i + offset, spanLeadingZeroesSimple(g));
      });
    }
    exports2.simpleGroup = simpleGroup;
  }
});

// node_modules/ip-address/dist/v6/regular-expressions.js
var require_regular_expressions = __commonJS({
  "node_modules/ip-address/dist/v6/regular-expressions.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.possibleElisions = exports2.simpleRegularExpression = exports2.ADDRESS_BOUNDARY = exports2.padGroup = exports2.groupPossibilities = void 0;
    var v6 = __importStar(require_constants5());
    var sprintf_js_1 = require_sprintf();
    function groupPossibilities(possibilities) {
      return (0, sprintf_js_1.sprintf)("(%s)", possibilities.join("|"));
    }
    exports2.groupPossibilities = groupPossibilities;
    function padGroup(group) {
      if (group.length < 4) {
        return (0, sprintf_js_1.sprintf)("0{0,%d}%s", 4 - group.length, group);
      }
      return group;
    }
    exports2.padGroup = padGroup;
    exports2.ADDRESS_BOUNDARY = "[^A-Fa-f0-9:]";
    function simpleRegularExpression(groups) {
      const zeroIndexes = [];
      groups.forEach((group, i) => {
        const groupInteger = parseInt(group, 16);
        if (groupInteger === 0) {
          zeroIndexes.push(i);
        }
      });
      const possibilities = zeroIndexes.map((zeroIndex) => groups.map((group, i) => {
        if (i === zeroIndex) {
          const elision = i === 0 || i === v6.GROUPS - 1 ? ":" : "";
          return groupPossibilities([padGroup(group), elision]);
        }
        return padGroup(group);
      }).join(":"));
      possibilities.push(groups.map(padGroup).join(":"));
      return groupPossibilities(possibilities);
    }
    exports2.simpleRegularExpression = simpleRegularExpression;
    function possibleElisions(elidedGroups, moreLeft, moreRight) {
      const left = moreLeft ? "" : ":";
      const right = moreRight ? "" : ":";
      const possibilities = [];
      if (!moreLeft && !moreRight) {
        possibilities.push("::");
      }
      if (moreLeft && moreRight) {
        possibilities.push("");
      }
      if (moreRight && !moreLeft || !moreRight && moreLeft) {
        possibilities.push(":");
      }
      possibilities.push((0, sprintf_js_1.sprintf)("%s(:0{1,4}){1,%d}", left, elidedGroups - 1));
      possibilities.push((0, sprintf_js_1.sprintf)("(0{1,4}:){1,%d}%s", elidedGroups - 1, right));
      possibilities.push((0, sprintf_js_1.sprintf)("(0{1,4}:){%d}0{1,4}", elidedGroups - 1));
      for (let groups = 1; groups < elidedGroups - 1; groups++) {
        for (let position = 1; position < elidedGroups - groups; position++) {
          possibilities.push((0, sprintf_js_1.sprintf)("(0{1,4}:){%d}:(0{1,4}:){%d}0{1,4}", position, elidedGroups - position - groups - 1));
        }
      }
      return groupPossibilities(possibilities);
    }
    exports2.possibleElisions = possibleElisions;
  }
});

// node_modules/ip-address/dist/ipv6.js
var require_ipv6 = __commonJS({
  "node_modules/ip-address/dist/ipv6.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Address6 = void 0;
    var common = __importStar(require_common2());
    var constants4 = __importStar(require_constants4());
    var constants6 = __importStar(require_constants5());
    var helpers = __importStar(require_helpers());
    var ipv4_1 = require_ipv4();
    var regular_expressions_1 = require_regular_expressions();
    var address_error_1 = require_address_error();
    var jsbn_1 = require_jsbn();
    var sprintf_js_1 = require_sprintf();
    function assert(condition) {
      if (!condition) {
        throw new Error("Assertion failed.");
      }
    }
    function addCommas(number) {
      const r = /(\d+)(\d{3})/;
      while (r.test(number)) {
        number = number.replace(r, "$1,$2");
      }
      return number;
    }
    function spanLeadingZeroes4(n) {
      n = n.replace(/^(0{1,})([1-9]+)$/, '<span class="parse-error">$1</span>$2');
      n = n.replace(/^(0{1,})(0)$/, '<span class="parse-error">$1</span>$2');
      return n;
    }
    function compact(address, slice) {
      const s1 = [];
      const s2 = [];
      let i;
      for (i = 0; i < address.length; i++) {
        if (i < slice[0]) {
          s1.push(address[i]);
        } else if (i > slice[1]) {
          s2.push(address[i]);
        }
      }
      return s1.concat(["compact"]).concat(s2);
    }
    function paddedHex(octet) {
      return (0, sprintf_js_1.sprintf)("%04x", parseInt(octet, 16));
    }
    function unsignByte(b) {
      return b & 255;
    }
    var Address6 = class _Address6 {
      constructor(address, optionalGroups) {
        this.addressMinusSuffix = "";
        this.parsedSubnet = "";
        this.subnet = "/128";
        this.subnetMask = 128;
        this.v4 = false;
        this.zone = "";
        this.isInSubnet = common.isInSubnet;
        this.isCorrect = common.isCorrect(constants6.BITS);
        if (optionalGroups === void 0) {
          this.groups = constants6.GROUPS;
        } else {
          this.groups = optionalGroups;
        }
        this.address = address;
        const subnet = constants6.RE_SUBNET_STRING.exec(address);
        if (subnet) {
          this.parsedSubnet = subnet[0].replace("/", "");
          this.subnetMask = parseInt(this.parsedSubnet, 10);
          this.subnet = `/${this.subnetMask}`;
          if (Number.isNaN(this.subnetMask) || this.subnetMask < 0 || this.subnetMask > constants6.BITS) {
            throw new address_error_1.AddressError("Invalid subnet mask.");
          }
          address = address.replace(constants6.RE_SUBNET_STRING, "");
        } else if (/\//.test(address)) {
          throw new address_error_1.AddressError("Invalid subnet mask.");
        }
        const zone = constants6.RE_ZONE_STRING.exec(address);
        if (zone) {
          this.zone = zone[0];
          address = address.replace(constants6.RE_ZONE_STRING, "");
        }
        this.addressMinusSuffix = address;
        this.parsedAddress = this.parse(this.addressMinusSuffix);
      }
      static isValid(address) {
        try {
          new _Address6(address);
          return true;
        } catch (e) {
          return false;
        }
      }
      /**
       * Convert a BigInteger to a v6 address object
       * @memberof Address6
       * @static
       * @param {BigInteger} bigInteger - a BigInteger to convert
       * @returns {Address6}
       * @example
       * var bigInteger = new BigInteger('1000000000000');
       * var address = Address6.fromBigInteger(bigInteger);
       * address.correctForm(); // '::e8:d4a5:1000'
       */
      static fromBigInteger(bigInteger) {
        const hex = bigInteger.toString(16).padStart(32, "0");
        const groups = [];
        let i;
        for (i = 0; i < constants6.GROUPS; i++) {
          groups.push(hex.slice(i * 4, (i + 1) * 4));
        }
        return new _Address6(groups.join(":"));
      }
      /**
       * Convert a URL (with optional port number) to an address object
       * @memberof Address6
       * @static
       * @param {string} url - a URL with optional port number
       * @example
       * var addressAndPort = Address6.fromURL('http://[ffff::]:8080/foo/');
       * addressAndPort.address.correctForm(); // 'ffff::'
       * addressAndPort.port; // 8080
       */
      static fromURL(url) {
        let host;
        let port = null;
        let result;
        if (url.indexOf("[") !== -1 && url.indexOf("]:") !== -1) {
          result = constants6.RE_URL_WITH_PORT.exec(url);
          if (result === null) {
            return {
              error: "failed to parse address with port",
              address: null,
              port: null
            };
          }
          host = result[1];
          port = result[2];
        } else if (url.indexOf("/") !== -1) {
          url = url.replace(/^[a-z0-9]+:\/\//, "");
          result = constants6.RE_URL.exec(url);
          if (result === null) {
            return {
              error: "failed to parse address from URL",
              address: null,
              port: null
            };
          }
          host = result[1];
        } else {
          host = url;
        }
        if (port) {
          port = parseInt(port, 10);
          if (port < 0 || port > 65536) {
            port = null;
          }
        } else {
          port = null;
        }
        return {
          address: new _Address6(host),
          port
        };
      }
      /**
       * Create an IPv6-mapped address given an IPv4 address
       * @memberof Address6
       * @static
       * @param {string} address - An IPv4 address string
       * @returns {Address6}
       * @example
       * var address = Address6.fromAddress4('192.168.0.1');
       * address.correctForm(); // '::ffff:c0a8:1'
       * address.to4in6(); // '::ffff:192.168.0.1'
       */
      static fromAddress4(address) {
        const address4 = new ipv4_1.Address4(address);
        const mask6 = constants6.BITS - (constants4.BITS - address4.subnetMask);
        return new _Address6(`::ffff:${address4.correctForm()}/${mask6}`);
      }
      /**
       * Return an address from ip6.arpa form
       * @memberof Address6
       * @static
       * @param {string} arpaFormAddress - an 'ip6.arpa' form address
       * @returns {Adress6}
       * @example
       * var address = Address6.fromArpa(e.f.f.f.3.c.2.6.f.f.f.e.6.6.8.e.1.0.6.7.9.4.e.c.0.0.0.0.1.0.0.2.ip6.arpa.)
       * address.correctForm(); // '2001:0:ce49:7601:e866:efff:62c3:fffe'
       */
      static fromArpa(arpaFormAddress) {
        let address = arpaFormAddress.replace(/(\.ip6\.arpa)?\.$/, "");
        const semicolonAmount = 7;
        if (address.length !== 63) {
          throw new address_error_1.AddressError("Invalid 'ip6.arpa' form.");
        }
        const parts = address.split(".").reverse();
        for (let i = semicolonAmount; i > 0; i--) {
          const insertIndex = i * 4;
          parts.splice(insertIndex, 0, ":");
        }
        address = parts.join("");
        return new _Address6(address);
      }
      /**
       * Return the Microsoft UNC transcription of the address
       * @memberof Address6
       * @instance
       * @returns {String} the Microsoft UNC transcription of the address
       */
      microsoftTranscription() {
        return (0, sprintf_js_1.sprintf)("%s.ipv6-literal.net", this.correctForm().replace(/:/g, "-"));
      }
      /**
       * Return the first n bits of the address, defaulting to the subnet mask
       * @memberof Address6
       * @instance
       * @param {number} [mask=subnet] - the number of bits to mask
       * @returns {String} the first n bits of the address as a string
       */
      mask(mask = this.subnetMask) {
        return this.getBitsBase2(0, mask);
      }
      /**
       * Return the number of possible subnets of a given size in the address
       * @memberof Address6
       * @instance
       * @param {number} [size=128] - the subnet size
       * @returns {String}
       */
      // TODO: probably useful to have a numeric version of this too
      possibleSubnets(subnetSize = 128) {
        const availableBits = constants6.BITS - this.subnetMask;
        const subnetBits = Math.abs(subnetSize - constants6.BITS);
        const subnetPowers = availableBits - subnetBits;
        if (subnetPowers < 0) {
          return "0";
        }
        return addCommas(new jsbn_1.BigInteger("2", 10).pow(subnetPowers).toString(10));
      }
      /**
       * Helper function getting start address.
       * @memberof Address6
       * @instance
       * @returns {BigInteger}
       */
      _startAddress() {
        return new jsbn_1.BigInteger(this.mask() + "0".repeat(constants6.BITS - this.subnetMask), 2);
      }
      /**
       * The first address in the range given by this address' subnet
       * Often referred to as the Network Address.
       * @memberof Address6
       * @instance
       * @returns {Address6}
       */
      startAddress() {
        return _Address6.fromBigInteger(this._startAddress());
      }
      /**
       * The first host address in the range given by this address's subnet ie
       * the first address after the Network Address
       * @memberof Address6
       * @instance
       * @returns {Address6}
       */
      startAddressExclusive() {
        const adjust = new jsbn_1.BigInteger("1");
        return _Address6.fromBigInteger(this._startAddress().add(adjust));
      }
      /**
       * Helper function getting end address.
       * @memberof Address6
       * @instance
       * @returns {BigInteger}
       */
      _endAddress() {
        return new jsbn_1.BigInteger(this.mask() + "1".repeat(constants6.BITS - this.subnetMask), 2);
      }
      /**
       * The last address in the range given by this address' subnet
       * Often referred to as the Broadcast
       * @memberof Address6
       * @instance
       * @returns {Address6}
       */
      endAddress() {
        return _Address6.fromBigInteger(this._endAddress());
      }
      /**
       * The last host address in the range given by this address's subnet ie
       * the last address prior to the Broadcast Address
       * @memberof Address6
       * @instance
       * @returns {Address6}
       */
      endAddressExclusive() {
        const adjust = new jsbn_1.BigInteger("1");
        return _Address6.fromBigInteger(this._endAddress().subtract(adjust));
      }
      /**
       * Return the scope of the address
       * @memberof Address6
       * @instance
       * @returns {String}
       */
      getScope() {
        let scope = constants6.SCOPES[this.getBits(12, 16).intValue()];
        if (this.getType() === "Global unicast" && scope !== "Link local") {
          scope = "Global";
        }
        return scope || "Unknown";
      }
      /**
       * Return the type of the address
       * @memberof Address6
       * @instance
       * @returns {String}
       */
      getType() {
        for (const subnet of Object.keys(constants6.TYPES)) {
          if (this.isInSubnet(new _Address6(subnet))) {
            return constants6.TYPES[subnet];
          }
        }
        return "Global unicast";
      }
      /**
       * Return the bits in the given range as a BigInteger
       * @memberof Address6
       * @instance
       * @returns {BigInteger}
       */
      getBits(start, end) {
        return new jsbn_1.BigInteger(this.getBitsBase2(start, end), 2);
      }
      /**
       * Return the bits in the given range as a base-2 string
       * @memberof Address6
       * @instance
       * @returns {String}
       */
      getBitsBase2(start, end) {
        return this.binaryZeroPad().slice(start, end);
      }
      /**
       * Return the bits in the given range as a base-16 string
       * @memberof Address6
       * @instance
       * @returns {String}
       */
      getBitsBase16(start, end) {
        const length = end - start;
        if (length % 4 !== 0) {
          throw new Error("Length of bits to retrieve must be divisible by four");
        }
        return this.getBits(start, end).toString(16).padStart(length / 4, "0");
      }
      /**
       * Return the bits that are set past the subnet mask length
       * @memberof Address6
       * @instance
       * @returns {String}
       */
      getBitsPastSubnet() {
        return this.getBitsBase2(this.subnetMask, constants6.BITS);
      }
      /**
       * Return the reversed ip6.arpa form of the address
       * @memberof Address6
       * @param {Object} options
       * @param {boolean} options.omitSuffix - omit the "ip6.arpa" suffix
       * @instance
       * @returns {String}
       */
      reverseForm(options) {
        if (!options) {
          options = {};
        }
        const characters = Math.floor(this.subnetMask / 4);
        const reversed = this.canonicalForm().replace(/:/g, "").split("").slice(0, characters).reverse().join(".");
        if (characters > 0) {
          if (options.omitSuffix) {
            return reversed;
          }
          return (0, sprintf_js_1.sprintf)("%s.ip6.arpa.", reversed);
        }
        if (options.omitSuffix) {
          return "";
        }
        return "ip6.arpa.";
      }
      /**
       * Return the correct form of the address
       * @memberof Address6
       * @instance
       * @returns {String}
       */
      correctForm() {
        let i;
        let groups = [];
        let zeroCounter = 0;
        const zeroes = [];
        for (i = 0; i < this.parsedAddress.length; i++) {
          const value = parseInt(this.parsedAddress[i], 16);
          if (value === 0) {
            zeroCounter++;
          }
          if (value !== 0 && zeroCounter > 0) {
            if (zeroCounter > 1) {
              zeroes.push([i - zeroCounter, i - 1]);
            }
            zeroCounter = 0;
          }
        }
        if (zeroCounter > 1) {
          zeroes.push([this.parsedAddress.length - zeroCounter, this.parsedAddress.length - 1]);
        }
        const zeroLengths = zeroes.map((n) => n[1] - n[0] + 1);
        if (zeroes.length > 0) {
          const index = zeroLengths.indexOf(Math.max(...zeroLengths));
          groups = compact(this.parsedAddress, zeroes[index]);
        } else {
          groups = this.parsedAddress;
        }
        for (i = 0; i < groups.length; i++) {
          if (groups[i] !== "compact") {
            groups[i] = parseInt(groups[i], 16).toString(16);
          }
        }
        let correct = groups.join(":");
        correct = correct.replace(/^compact$/, "::");
        correct = correct.replace(/^compact|compact$/, ":");
        correct = correct.replace(/compact/, "");
        return correct;
      }
      /**
       * Return a zero-padded base-2 string representation of the address
       * @memberof Address6
       * @instance
       * @returns {String}
       * @example
       * var address = new Address6('2001:4860:4001:803::1011');
       * address.binaryZeroPad();
       * // '0010000000000001010010000110000001000000000000010000100000000011
       * //  0000000000000000000000000000000000000000000000000001000000010001'
       */
      binaryZeroPad() {
        return this.bigInteger().toString(2).padStart(constants6.BITS, "0");
      }
      // TODO: Improve the semantics of this helper function
      parse4in6(address) {
        const groups = address.split(":");
        const lastGroup = groups.slice(-1)[0];
        const address4 = lastGroup.match(constants4.RE_ADDRESS);
        if (address4) {
          this.parsedAddress4 = address4[0];
          this.address4 = new ipv4_1.Address4(this.parsedAddress4);
          for (let i = 0; i < this.address4.groups; i++) {
            if (/^0[0-9]+/.test(this.address4.parsedAddress[i])) {
              throw new address_error_1.AddressError("IPv4 addresses can't have leading zeroes.", address.replace(constants4.RE_ADDRESS, this.address4.parsedAddress.map(spanLeadingZeroes4).join(".")));
            }
          }
          this.v4 = true;
          groups[groups.length - 1] = this.address4.toGroup6();
          address = groups.join(":");
        }
        return address;
      }
      // TODO: Make private?
      parse(address) {
        address = this.parse4in6(address);
        const badCharacters = address.match(constants6.RE_BAD_CHARACTERS);
        if (badCharacters) {
          throw new address_error_1.AddressError((0, sprintf_js_1.sprintf)("Bad character%s detected in address: %s", badCharacters.length > 1 ? "s" : "", badCharacters.join("")), address.replace(constants6.RE_BAD_CHARACTERS, '<span class="parse-error">$1</span>'));
        }
        const badAddress = address.match(constants6.RE_BAD_ADDRESS);
        if (badAddress) {
          throw new address_error_1.AddressError((0, sprintf_js_1.sprintf)("Address failed regex: %s", badAddress.join("")), address.replace(constants6.RE_BAD_ADDRESS, '<span class="parse-error">$1</span>'));
        }
        let groups = [];
        const halves = address.split("::");
        if (halves.length === 2) {
          let first = halves[0].split(":");
          let last = halves[1].split(":");
          if (first.length === 1 && first[0] === "") {
            first = [];
          }
          if (last.length === 1 && last[0] === "") {
            last = [];
          }
          const remaining = this.groups - (first.length + last.length);
          if (!remaining) {
            throw new address_error_1.AddressError("Error parsing groups");
          }
          this.elidedGroups = remaining;
          this.elisionBegin = first.length;
          this.elisionEnd = first.length + this.elidedGroups;
          groups = groups.concat(first);
          for (let i = 0; i < remaining; i++) {
            groups.push("0");
          }
          groups = groups.concat(last);
        } else if (halves.length === 1) {
          groups = address.split(":");
          this.elidedGroups = 0;
        } else {
          throw new address_error_1.AddressError("Too many :: groups found");
        }
        groups = groups.map((group) => (0, sprintf_js_1.sprintf)("%x", parseInt(group, 16)));
        if (groups.length !== this.groups) {
          throw new address_error_1.AddressError("Incorrect number of groups found");
        }
        return groups;
      }
      /**
       * Return the canonical form of the address
       * @memberof Address6
       * @instance
       * @returns {String}
       */
      canonicalForm() {
        return this.parsedAddress.map(paddedHex).join(":");
      }
      /**
       * Return the decimal form of the address
       * @memberof Address6
       * @instance
       * @returns {String}
       */
      decimal() {
        return this.parsedAddress.map((n) => (0, sprintf_js_1.sprintf)("%05d", parseInt(n, 16))).join(":");
      }
      /**
       * Return the address as a BigInteger
       * @memberof Address6
       * @instance
       * @returns {BigInteger}
       */
      bigInteger() {
        return new jsbn_1.BigInteger(this.parsedAddress.map(paddedHex).join(""), 16);
      }
      /**
       * Return the last two groups of this address as an IPv4 address string
       * @memberof Address6
       * @instance
       * @returns {Address4}
       * @example
       * var address = new Address6('2001:4860:4001::1825:bf11');
       * address.to4().correctForm(); // '24.37.191.17'
       */
      to4() {
        const binary = this.binaryZeroPad().split("");
        return ipv4_1.Address4.fromHex(new jsbn_1.BigInteger(binary.slice(96, 128).join(""), 2).toString(16));
      }
      /**
       * Return the v4-in-v6 form of the address
       * @memberof Address6
       * @instance
       * @returns {String}
       */
      to4in6() {
        const address4 = this.to4();
        const address6 = new _Address6(this.parsedAddress.slice(0, 6).join(":"), 6);
        const correct = address6.correctForm();
        let infix = "";
        if (!/:$/.test(correct)) {
          infix = ":";
        }
        return correct + infix + address4.address;
      }
      /**
       * Return an object containing the Teredo properties of the address
       * @memberof Address6
       * @instance
       * @returns {Object}
       */
      inspectTeredo() {
        const prefix = this.getBitsBase16(0, 32);
        const udpPort = this.getBits(80, 96).xor(new jsbn_1.BigInteger("ffff", 16)).toString();
        const server4 = ipv4_1.Address4.fromHex(this.getBitsBase16(32, 64));
        const client4 = ipv4_1.Address4.fromHex(this.getBits(96, 128).xor(new jsbn_1.BigInteger("ffffffff", 16)).toString(16));
        const flags = this.getBits(64, 80);
        const flagsBase2 = this.getBitsBase2(64, 80);
        const coneNat = flags.testBit(15);
        const reserved = flags.testBit(14);
        const groupIndividual = flags.testBit(8);
        const universalLocal = flags.testBit(9);
        const nonce = new jsbn_1.BigInteger(flagsBase2.slice(2, 6) + flagsBase2.slice(8, 16), 2).toString(10);
        return {
          prefix: (0, sprintf_js_1.sprintf)("%s:%s", prefix.slice(0, 4), prefix.slice(4, 8)),
          server4: server4.address,
          client4: client4.address,
          flags: flagsBase2,
          coneNat,
          microsoft: {
            reserved,
            universalLocal,
            groupIndividual,
            nonce
          },
          udpPort
        };
      }
      /**
       * Return an object containing the 6to4 properties of the address
       * @memberof Address6
       * @instance
       * @returns {Object}
       */
      inspect6to4() {
        const prefix = this.getBitsBase16(0, 16);
        const gateway = ipv4_1.Address4.fromHex(this.getBitsBase16(16, 48));
        return {
          prefix: (0, sprintf_js_1.sprintf)("%s", prefix.slice(0, 4)),
          gateway: gateway.address
        };
      }
      /**
       * Return a v6 6to4 address from a v6 v4inv6 address
       * @memberof Address6
       * @instance
       * @returns {Address6}
       */
      to6to4() {
        if (!this.is4()) {
          return null;
        }
        const addr6to4 = [
          "2002",
          this.getBitsBase16(96, 112),
          this.getBitsBase16(112, 128),
          "",
          "/16"
        ].join(":");
        return new _Address6(addr6to4);
      }
      /**
       * Return a byte array
       * @memberof Address6
       * @instance
       * @returns {Array}
       */
      toByteArray() {
        const byteArray = this.bigInteger().toByteArray();
        if (byteArray.length === 17 && byteArray[0] === 0) {
          return byteArray.slice(1);
        }
        return byteArray;
      }
      /**
       * Return an unsigned byte array
       * @memberof Address6
       * @instance
       * @returns {Array}
       */
      toUnsignedByteArray() {
        return this.toByteArray().map(unsignByte);
      }
      /**
       * Convert a byte array to an Address6 object
       * @memberof Address6
       * @static
       * @returns {Address6}
       */
      static fromByteArray(bytes) {
        return this.fromUnsignedByteArray(bytes.map(unsignByte));
      }
      /**
       * Convert an unsigned byte array to an Address6 object
       * @memberof Address6
       * @static
       * @returns {Address6}
       */
      static fromUnsignedByteArray(bytes) {
        const BYTE_MAX = new jsbn_1.BigInteger("256", 10);
        let result = new jsbn_1.BigInteger("0", 10);
        let multiplier = new jsbn_1.BigInteger("1", 10);
        for (let i = bytes.length - 1; i >= 0; i--) {
          result = result.add(multiplier.multiply(new jsbn_1.BigInteger(bytes[i].toString(10), 10)));
          multiplier = multiplier.multiply(BYTE_MAX);
        }
        return _Address6.fromBigInteger(result);
      }
      /**
       * Returns true if the address is in the canonical form, false otherwise
       * @memberof Address6
       * @instance
       * @returns {boolean}
       */
      isCanonical() {
        return this.addressMinusSuffix === this.canonicalForm();
      }
      /**
       * Returns true if the address is a link local address, false otherwise
       * @memberof Address6
       * @instance
       * @returns {boolean}
       */
      isLinkLocal() {
        if (this.getBitsBase2(0, 64) === "1111111010000000000000000000000000000000000000000000000000000000") {
          return true;
        }
        return false;
      }
      /**
       * Returns true if the address is a multicast address, false otherwise
       * @memberof Address6
       * @instance
       * @returns {boolean}
       */
      isMulticast() {
        return this.getType() === "Multicast";
      }
      /**
       * Returns true if the address is a v4-in-v6 address, false otherwise
       * @memberof Address6
       * @instance
       * @returns {boolean}
       */
      is4() {
        return this.v4;
      }
      /**
       * Returns true if the address is a Teredo address, false otherwise
       * @memberof Address6
       * @instance
       * @returns {boolean}
       */
      isTeredo() {
        return this.isInSubnet(new _Address6("2001::/32"));
      }
      /**
       * Returns true if the address is a 6to4 address, false otherwise
       * @memberof Address6
       * @instance
       * @returns {boolean}
       */
      is6to4() {
        return this.isInSubnet(new _Address6("2002::/16"));
      }
      /**
       * Returns true if the address is a loopback address, false otherwise
       * @memberof Address6
       * @instance
       * @returns {boolean}
       */
      isLoopback() {
        return this.getType() === "Loopback";
      }
      // #endregion
      // #region HTML
      /**
       * @returns {String} the address in link form with a default port of 80
       */
      href(optionalPort) {
        if (optionalPort === void 0) {
          optionalPort = "";
        } else {
          optionalPort = (0, sprintf_js_1.sprintf)(":%s", optionalPort);
        }
        return (0, sprintf_js_1.sprintf)("http://[%s]%s/", this.correctForm(), optionalPort);
      }
      /**
       * @returns {String} a link suitable for conveying the address via a URL hash
       */
      link(options) {
        if (!options) {
          options = {};
        }
        if (options.className === void 0) {
          options.className = "";
        }
        if (options.prefix === void 0) {
          options.prefix = "/#address=";
        }
        if (options.v4 === void 0) {
          options.v4 = false;
        }
        let formFunction = this.correctForm;
        if (options.v4) {
          formFunction = this.to4in6;
        }
        if (options.className) {
          return (0, sprintf_js_1.sprintf)('<a href="%1$s%2$s" class="%3$s">%2$s</a>', options.prefix, formFunction.call(this), options.className);
        }
        return (0, sprintf_js_1.sprintf)('<a href="%1$s%2$s">%2$s</a>', options.prefix, formFunction.call(this));
      }
      /**
       * Groups an address
       * @returns {String}
       */
      group() {
        if (this.elidedGroups === 0) {
          return helpers.simpleGroup(this.address).join(":");
        }
        assert(typeof this.elidedGroups === "number");
        assert(typeof this.elisionBegin === "number");
        const output = [];
        const [left, right] = this.address.split("::");
        if (left.length) {
          output.push(...helpers.simpleGroup(left));
        } else {
          output.push("");
        }
        const classes = ["hover-group"];
        for (let i = this.elisionBegin; i < this.elisionBegin + this.elidedGroups; i++) {
          classes.push((0, sprintf_js_1.sprintf)("group-%d", i));
        }
        output.push((0, sprintf_js_1.sprintf)('<span class="%s"></span>', classes.join(" ")));
        if (right.length) {
          output.push(...helpers.simpleGroup(right, this.elisionEnd));
        } else {
          output.push("");
        }
        if (this.is4()) {
          assert(this.address4 instanceof ipv4_1.Address4);
          output.pop();
          output.push(this.address4.groupForV6());
        }
        return output.join(":");
      }
      // #endregion
      // #region Regular expressions
      /**
       * Generate a regular expression string that can be used to find or validate
       * all variations of this address
       * @memberof Address6
       * @instance
       * @param {boolean} substringSearch
       * @returns {string}
       */
      regularExpressionString(substringSearch = false) {
        let output = [];
        const address6 = new _Address6(this.correctForm());
        if (address6.elidedGroups === 0) {
          output.push((0, regular_expressions_1.simpleRegularExpression)(address6.parsedAddress));
        } else if (address6.elidedGroups === constants6.GROUPS) {
          output.push((0, regular_expressions_1.possibleElisions)(constants6.GROUPS));
        } else {
          const halves = address6.address.split("::");
          if (halves[0].length) {
            output.push((0, regular_expressions_1.simpleRegularExpression)(halves[0].split(":")));
          }
          assert(typeof address6.elidedGroups === "number");
          output.push((0, regular_expressions_1.possibleElisions)(address6.elidedGroups, halves[0].length !== 0, halves[1].length !== 0));
          if (halves[1].length) {
            output.push((0, regular_expressions_1.simpleRegularExpression)(halves[1].split(":")));
          }
          output = [output.join(":")];
        }
        if (!substringSearch) {
          output = [
            "(?=^|",
            regular_expressions_1.ADDRESS_BOUNDARY,
            "|[^\\w\\:])(",
            ...output,
            ")(?=[^\\w\\:]|",
            regular_expressions_1.ADDRESS_BOUNDARY,
            "|$)"
          ];
        }
        return output.join("");
      }
      /**
       * Generate a regular expression that can be used to find or validate all
       * variations of this address.
       * @memberof Address6
       * @instance
       * @param {boolean} substringSearch
       * @returns {RegExp}
       */
      regularExpression(substringSearch = false) {
        return new RegExp(this.regularExpressionString(substringSearch), "i");
      }
    };
    exports2.Address6 = Address6;
  }
});

// node_modules/ip-address/dist/ip-address.js
var require_ip_address = __commonJS({
  "node_modules/ip-address/dist/ip-address.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.v6 = exports2.AddressError = exports2.Address6 = exports2.Address4 = void 0;
    var ipv4_1 = require_ipv4();
    Object.defineProperty(exports2, "Address4", { enumerable: true, get: function() {
      return ipv4_1.Address4;
    } });
    var ipv6_1 = require_ipv6();
    Object.defineProperty(exports2, "Address6", { enumerable: true, get: function() {
      return ipv6_1.Address6;
    } });
    var address_error_1 = require_address_error();
    Object.defineProperty(exports2, "AddressError", { enumerable: true, get: function() {
      return address_error_1.AddressError;
    } });
    var helpers = __importStar(require_helpers());
    exports2.v6 = { helpers };
  }
});

// node_modules/socks/build/common/helpers.js
var require_helpers2 = __commonJS({
  "node_modules/socks/build/common/helpers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ipToBuffer = exports2.int32ToIpv4 = exports2.ipv4ToInt32 = exports2.validateSocksClientChainOptions = exports2.validateSocksClientOptions = void 0;
    var util_1 = require_util2();
    var constants_1 = require_constants3();
    var stream = require("stream");
    var ip_address_1 = require_ip_address();
    var net = require("net");
    function validateSocksClientOptions(options, acceptedCommands = ["connect", "bind", "associate"]) {
      if (!constants_1.SocksCommand[options.command]) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksCommand, options);
      }
      if (acceptedCommands.indexOf(options.command) === -1) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksCommandForOperation, options);
      }
      if (!isValidSocksRemoteHost(options.destination)) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsDestination, options);
      }
      if (!isValidSocksProxy(options.proxy)) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsProxy, options);
      }
      validateCustomProxyAuth(options.proxy, options);
      if (options.timeout && !isValidTimeoutValue(options.timeout)) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsTimeout, options);
      }
      if (options.existing_socket && !(options.existing_socket instanceof stream.Duplex)) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsExistingSocket, options);
      }
    }
    exports2.validateSocksClientOptions = validateSocksClientOptions;
    function validateSocksClientChainOptions(options) {
      if (options.command !== "connect") {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksCommandChain, options);
      }
      if (!isValidSocksRemoteHost(options.destination)) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsDestination, options);
      }
      if (!(options.proxies && Array.isArray(options.proxies) && options.proxies.length >= 2)) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsProxiesLength, options);
      }
      options.proxies.forEach((proxy) => {
        if (!isValidSocksProxy(proxy)) {
          throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsProxy, options);
        }
        validateCustomProxyAuth(proxy, options);
      });
      if (options.timeout && !isValidTimeoutValue(options.timeout)) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsTimeout, options);
      }
    }
    exports2.validateSocksClientChainOptions = validateSocksClientChainOptions;
    function validateCustomProxyAuth(proxy, options) {
      if (proxy.custom_auth_method !== void 0) {
        if (proxy.custom_auth_method < constants_1.SOCKS5_CUSTOM_AUTH_START || proxy.custom_auth_method > constants_1.SOCKS5_CUSTOM_AUTH_END) {
          throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsCustomAuthRange, options);
        }
        if (proxy.custom_auth_request_handler === void 0 || typeof proxy.custom_auth_request_handler !== "function") {
          throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsCustomAuthOptions, options);
        }
        if (proxy.custom_auth_response_size === void 0) {
          throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsCustomAuthOptions, options);
        }
        if (proxy.custom_auth_response_handler === void 0 || typeof proxy.custom_auth_response_handler !== "function") {
          throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsCustomAuthOptions, options);
        }
      }
    }
    function isValidSocksRemoteHost(remoteHost) {
      return remoteHost && typeof remoteHost.host === "string" && typeof remoteHost.port === "number" && remoteHost.port >= 0 && remoteHost.port <= 65535;
    }
    function isValidSocksProxy(proxy) {
      return proxy && (typeof proxy.host === "string" || typeof proxy.ipaddress === "string") && typeof proxy.port === "number" && proxy.port >= 0 && proxy.port <= 65535 && (proxy.type === 4 || proxy.type === 5);
    }
    function isValidTimeoutValue(value) {
      return typeof value === "number" && value > 0;
    }
    function ipv4ToInt32(ip) {
      const address = new ip_address_1.Address4(ip);
      return address.toArray().reduce((acc, part) => (acc << 8) + part, 0) >>> 0;
    }
    exports2.ipv4ToInt32 = ipv4ToInt32;
    function int32ToIpv4(int32) {
      const octet1 = int32 >>> 24 & 255;
      const octet2 = int32 >>> 16 & 255;
      const octet3 = int32 >>> 8 & 255;
      const octet4 = int32 & 255;
      return [octet1, octet2, octet3, octet4].join(".");
    }
    exports2.int32ToIpv4 = int32ToIpv4;
    function ipToBuffer(ip) {
      if (net.isIPv4(ip)) {
        const address = new ip_address_1.Address4(ip);
        return Buffer.from(address.toArray());
      } else if (net.isIPv6(ip)) {
        const address = new ip_address_1.Address6(ip);
        return Buffer.from(address.canonicalForm().split(":").map((segment) => segment.padStart(4, "0")).join(""), "hex");
      } else {
        throw new Error("Invalid IP address format");
      }
    }
    exports2.ipToBuffer = ipToBuffer;
  }
});

// node_modules/socks/build/common/receivebuffer.js
var require_receivebuffer = __commonJS({
  "node_modules/socks/build/common/receivebuffer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ReceiveBuffer = void 0;
    var ReceiveBuffer = class {
      constructor(size = 4096) {
        this.buffer = Buffer.allocUnsafe(size);
        this.offset = 0;
        this.originalSize = size;
      }
      get length() {
        return this.offset;
      }
      append(data) {
        if (!Buffer.isBuffer(data)) {
          throw new Error("Attempted to append a non-buffer instance to ReceiveBuffer.");
        }
        if (this.offset + data.length >= this.buffer.length) {
          const tmp = this.buffer;
          this.buffer = Buffer.allocUnsafe(Math.max(this.buffer.length + this.originalSize, this.buffer.length + data.length));
          tmp.copy(this.buffer);
        }
        data.copy(this.buffer, this.offset);
        return this.offset += data.length;
      }
      peek(length) {
        if (length > this.offset) {
          throw new Error("Attempted to read beyond the bounds of the managed internal data.");
        }
        return this.buffer.slice(0, length);
      }
      get(length) {
        if (length > this.offset) {
          throw new Error("Attempted to read beyond the bounds of the managed internal data.");
        }
        const value = Buffer.allocUnsafe(length);
        this.buffer.slice(0, length).copy(value);
        this.buffer.copyWithin(0, length, length + this.offset - length);
        this.offset -= length;
        return value;
      }
    };
    exports2.ReceiveBuffer = ReceiveBuffer;
  }
});

// node_modules/socks/build/client/socksclient.js
var require_socksclient = __commonJS({
  "node_modules/socks/build/client/socksclient.js"(exports2) {
    "use strict";
    var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SocksClientError = exports2.SocksClient = void 0;
    var events_1 = require("events");
    var net = require("net");
    var smart_buffer_1 = require_smartbuffer();
    var constants_1 = require_constants3();
    var helpers_1 = require_helpers2();
    var receivebuffer_1 = require_receivebuffer();
    var util_1 = require_util2();
    Object.defineProperty(exports2, "SocksClientError", { enumerable: true, get: function() {
      return util_1.SocksClientError;
    } });
    var ip_address_1 = require_ip_address();
    var SocksClient = class _SocksClient extends events_1.EventEmitter {
      constructor(options) {
        super();
        this.options = Object.assign({}, options);
        (0, helpers_1.validateSocksClientOptions)(options);
        this.setState(constants_1.SocksClientState.Created);
      }
      /**
       * Creates a new SOCKS connection.
       *
       * Note: Supports callbacks and promises. Only supports the connect command.
       * @param options { SocksClientOptions } Options.
       * @param callback { Function } An optional callback function.
       * @returns { Promise }
       */
      static createConnection(options, callback) {
        return new Promise((resolve, reject) => {
          try {
            (0, helpers_1.validateSocksClientOptions)(options, ["connect"]);
          } catch (err) {
            if (typeof callback === "function") {
              callback(err);
              return resolve(err);
            } else {
              return reject(err);
            }
          }
          const client = new _SocksClient(options);
          client.connect(options.existing_socket);
          client.once("established", (info) => {
            client.removeAllListeners();
            if (typeof callback === "function") {
              callback(null, info);
              resolve(info);
            } else {
              resolve(info);
            }
          });
          client.once("error", (err) => {
            client.removeAllListeners();
            if (typeof callback === "function") {
              callback(err);
              resolve(err);
            } else {
              reject(err);
            }
          });
        });
      }
      /**
       * Creates a new SOCKS connection chain to a destination host through 2 or more SOCKS proxies.
       *
       * Note: Supports callbacks and promises. Only supports the connect method.
       * Note: Implemented via createConnection() factory function.
       * @param options { SocksClientChainOptions } Options
       * @param callback { Function } An optional callback function.
       * @returns { Promise }
       */
      static createConnectionChain(options, callback) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
          try {
            (0, helpers_1.validateSocksClientChainOptions)(options);
          } catch (err) {
            if (typeof callback === "function") {
              callback(err);
              return resolve(err);
            } else {
              return reject(err);
            }
          }
          if (options.randomizeChain) {
            (0, util_1.shuffleArray)(options.proxies);
          }
          try {
            let sock;
            for (let i = 0; i < options.proxies.length; i++) {
              const nextProxy = options.proxies[i];
              const nextDestination = i === options.proxies.length - 1 ? options.destination : {
                host: options.proxies[i + 1].host || options.proxies[i + 1].ipaddress,
                port: options.proxies[i + 1].port
              };
              const result = yield _SocksClient.createConnection({
                command: "connect",
                proxy: nextProxy,
                destination: nextDestination,
                existing_socket: sock
              });
              sock = sock || result.socket;
            }
            if (typeof callback === "function") {
              callback(null, { socket: sock });
              resolve({ socket: sock });
            } else {
              resolve({ socket: sock });
            }
          } catch (err) {
            if (typeof callback === "function") {
              callback(err);
              resolve(err);
            } else {
              reject(err);
            }
          }
        }));
      }
      /**
       * Creates a SOCKS UDP Frame.
       * @param options
       */
      static createUDPFrame(options) {
        const buff = new smart_buffer_1.SmartBuffer();
        buff.writeUInt16BE(0);
        buff.writeUInt8(options.frameNumber || 0);
        if (net.isIPv4(options.remoteHost.host)) {
          buff.writeUInt8(constants_1.Socks5HostType.IPv4);
          buff.writeUInt32BE((0, helpers_1.ipv4ToInt32)(options.remoteHost.host));
        } else if (net.isIPv6(options.remoteHost.host)) {
          buff.writeUInt8(constants_1.Socks5HostType.IPv6);
          buff.writeBuffer((0, helpers_1.ipToBuffer)(options.remoteHost.host));
        } else {
          buff.writeUInt8(constants_1.Socks5HostType.Hostname);
          buff.writeUInt8(Buffer.byteLength(options.remoteHost.host));
          buff.writeString(options.remoteHost.host);
        }
        buff.writeUInt16BE(options.remoteHost.port);
        buff.writeBuffer(options.data);
        return buff.toBuffer();
      }
      /**
       * Parses a SOCKS UDP frame.
       * @param data
       */
      static parseUDPFrame(data) {
        const buff = smart_buffer_1.SmartBuffer.fromBuffer(data);
        buff.readOffset = 2;
        const frameNumber = buff.readUInt8();
        const hostType = buff.readUInt8();
        let remoteHost;
        if (hostType === constants_1.Socks5HostType.IPv4) {
          remoteHost = (0, helpers_1.int32ToIpv4)(buff.readUInt32BE());
        } else if (hostType === constants_1.Socks5HostType.IPv6) {
          remoteHost = ip_address_1.Address6.fromByteArray(Array.from(buff.readBuffer(16))).canonicalForm();
        } else {
          remoteHost = buff.readString(buff.readUInt8());
        }
        const remotePort = buff.readUInt16BE();
        return {
          frameNumber,
          remoteHost: {
            host: remoteHost,
            port: remotePort
          },
          data: buff.readBuffer()
        };
      }
      /**
       * Internal state setter. If the SocksClient is in an error state, it cannot be changed to a non error state.
       */
      setState(newState) {
        if (this.state !== constants_1.SocksClientState.Error) {
          this.state = newState;
        }
      }
      /**
       * Starts the connection establishment to the proxy and destination.
       * @param existingSocket Connected socket to use instead of creating a new one (internal use).
       */
      connect(existingSocket) {
        this.onDataReceived = (data) => this.onDataReceivedHandler(data);
        this.onClose = () => this.onCloseHandler();
        this.onError = (err) => this.onErrorHandler(err);
        this.onConnect = () => this.onConnectHandler();
        const timer = setTimeout(() => this.onEstablishedTimeout(), this.options.timeout || constants_1.DEFAULT_TIMEOUT);
        if (timer.unref && typeof timer.unref === "function") {
          timer.unref();
        }
        if (existingSocket) {
          this.socket = existingSocket;
        } else {
          this.socket = new net.Socket();
        }
        this.socket.once("close", this.onClose);
        this.socket.once("error", this.onError);
        this.socket.once("connect", this.onConnect);
        this.socket.on("data", this.onDataReceived);
        this.setState(constants_1.SocksClientState.Connecting);
        this.receiveBuffer = new receivebuffer_1.ReceiveBuffer();
        if (existingSocket) {
          this.socket.emit("connect");
        } else {
          this.socket.connect(this.getSocketOptions());
          if (this.options.set_tcp_nodelay !== void 0 && this.options.set_tcp_nodelay !== null) {
            this.socket.setNoDelay(!!this.options.set_tcp_nodelay);
          }
        }
        this.prependOnceListener("established", (info) => {
          setImmediate(() => {
            if (this.receiveBuffer.length > 0) {
              const excessData = this.receiveBuffer.get(this.receiveBuffer.length);
              info.socket.emit("data", excessData);
            }
            info.socket.resume();
          });
        });
      }
      // Socket options (defaults host/port to options.proxy.host/options.proxy.port)
      getSocketOptions() {
        return Object.assign(Object.assign({}, this.options.socket_options), { host: this.options.proxy.host || this.options.proxy.ipaddress, port: this.options.proxy.port });
      }
      /**
       * Handles internal Socks timeout callback.
       * Note: If the Socks client is not BoundWaitingForConnection or Established, the connection will be closed.
       */
      onEstablishedTimeout() {
        if (this.state !== constants_1.SocksClientState.Established && this.state !== constants_1.SocksClientState.BoundWaitingForConnection) {
          this.closeSocket(constants_1.ERRORS.ProxyConnectionTimedOut);
        }
      }
      /**
       * Handles Socket connect event.
       */
      onConnectHandler() {
        this.setState(constants_1.SocksClientState.Connected);
        if (this.options.proxy.type === 4) {
          this.sendSocks4InitialHandshake();
        } else {
          this.sendSocks5InitialHandshake();
        }
        this.setState(constants_1.SocksClientState.SentInitialHandshake);
      }
      /**
       * Handles Socket data event.
       * @param data
       */
      onDataReceivedHandler(data) {
        this.receiveBuffer.append(data);
        this.processData();
      }
      /**
       * Handles processing of the data we have received.
       */
      processData() {
        while (this.state !== constants_1.SocksClientState.Established && this.state !== constants_1.SocksClientState.Error && this.receiveBuffer.length >= this.nextRequiredPacketBufferSize) {
          if (this.state === constants_1.SocksClientState.SentInitialHandshake) {
            if (this.options.proxy.type === 4) {
              this.handleSocks4FinalHandshakeResponse();
            } else {
              this.handleInitialSocks5HandshakeResponse();
            }
          } else if (this.state === constants_1.SocksClientState.SentAuthentication) {
            this.handleInitialSocks5AuthenticationHandshakeResponse();
          } else if (this.state === constants_1.SocksClientState.SentFinalHandshake) {
            this.handleSocks5FinalHandshakeResponse();
          } else if (this.state === constants_1.SocksClientState.BoundWaitingForConnection) {
            if (this.options.proxy.type === 4) {
              this.handleSocks4IncomingConnectionResponse();
            } else {
              this.handleSocks5IncomingConnectionResponse();
            }
          } else {
            this.closeSocket(constants_1.ERRORS.InternalError);
            break;
          }
        }
      }
      /**
       * Handles Socket close event.
       * @param had_error
       */
      onCloseHandler() {
        this.closeSocket(constants_1.ERRORS.SocketClosed);
      }
      /**
       * Handles Socket error event.
       * @param err
       */
      onErrorHandler(err) {
        this.closeSocket(err.message);
      }
      /**
       * Removes internal event listeners on the underlying Socket.
       */
      removeInternalSocketHandlers() {
        this.socket.pause();
        this.socket.removeListener("data", this.onDataReceived);
        this.socket.removeListener("close", this.onClose);
        this.socket.removeListener("error", this.onError);
        this.socket.removeListener("connect", this.onConnect);
      }
      /**
       * Closes and destroys the underlying Socket. Emits an error event.
       * @param err { String } An error string to include in error event.
       */
      closeSocket(err) {
        if (this.state !== constants_1.SocksClientState.Error) {
          this.setState(constants_1.SocksClientState.Error);
          this.socket.destroy();
          this.removeInternalSocketHandlers();
          this.emit("error", new util_1.SocksClientError(err, this.options));
        }
      }
      /**
       * Sends initial Socks v4 handshake request.
       */
      sendSocks4InitialHandshake() {
        const userId = this.options.proxy.userId || "";
        const buff = new smart_buffer_1.SmartBuffer();
        buff.writeUInt8(4);
        buff.writeUInt8(constants_1.SocksCommand[this.options.command]);
        buff.writeUInt16BE(this.options.destination.port);
        if (net.isIPv4(this.options.destination.host)) {
          buff.writeBuffer((0, helpers_1.ipToBuffer)(this.options.destination.host));
          buff.writeStringNT(userId);
        } else {
          buff.writeUInt8(0);
          buff.writeUInt8(0);
          buff.writeUInt8(0);
          buff.writeUInt8(1);
          buff.writeStringNT(userId);
          buff.writeStringNT(this.options.destination.host);
        }
        this.nextRequiredPacketBufferSize = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks4Response;
        this.socket.write(buff.toBuffer());
      }
      /**
       * Handles Socks v4 handshake response.
       * @param data
       */
      handleSocks4FinalHandshakeResponse() {
        const data = this.receiveBuffer.get(8);
        if (data[1] !== constants_1.Socks4Response.Granted) {
          this.closeSocket(`${constants_1.ERRORS.Socks4ProxyRejectedConnection} - (${constants_1.Socks4Response[data[1]]})`);
        } else {
          if (constants_1.SocksCommand[this.options.command] === constants_1.SocksCommand.bind) {
            const buff = smart_buffer_1.SmartBuffer.fromBuffer(data);
            buff.readOffset = 2;
            const remoteHost = {
              port: buff.readUInt16BE(),
              host: (0, helpers_1.int32ToIpv4)(buff.readUInt32BE())
            };
            if (remoteHost.host === "0.0.0.0") {
              remoteHost.host = this.options.proxy.ipaddress;
            }
            this.setState(constants_1.SocksClientState.BoundWaitingForConnection);
            this.emit("bound", { remoteHost, socket: this.socket });
          } else {
            this.setState(constants_1.SocksClientState.Established);
            this.removeInternalSocketHandlers();
            this.emit("established", { socket: this.socket });
          }
        }
      }
      /**
       * Handles Socks v4 incoming connection request (BIND)
       * @param data
       */
      handleSocks4IncomingConnectionResponse() {
        const data = this.receiveBuffer.get(8);
        if (data[1] !== constants_1.Socks4Response.Granted) {
          this.closeSocket(`${constants_1.ERRORS.Socks4ProxyRejectedIncomingBoundConnection} - (${constants_1.Socks4Response[data[1]]})`);
        } else {
          const buff = smart_buffer_1.SmartBuffer.fromBuffer(data);
          buff.readOffset = 2;
          const remoteHost = {
            port: buff.readUInt16BE(),
            host: (0, helpers_1.int32ToIpv4)(buff.readUInt32BE())
          };
          this.setState(constants_1.SocksClientState.Established);
          this.removeInternalSocketHandlers();
          this.emit("established", { remoteHost, socket: this.socket });
        }
      }
      /**
       * Sends initial Socks v5 handshake request.
       */
      sendSocks5InitialHandshake() {
        const buff = new smart_buffer_1.SmartBuffer();
        const supportedAuthMethods = [constants_1.Socks5Auth.NoAuth];
        if (this.options.proxy.userId || this.options.proxy.password) {
          supportedAuthMethods.push(constants_1.Socks5Auth.UserPass);
        }
        if (this.options.proxy.custom_auth_method !== void 0) {
          supportedAuthMethods.push(this.options.proxy.custom_auth_method);
        }
        buff.writeUInt8(5);
        buff.writeUInt8(supportedAuthMethods.length);
        for (const authMethod of supportedAuthMethods) {
          buff.writeUInt8(authMethod);
        }
        this.nextRequiredPacketBufferSize = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5InitialHandshakeResponse;
        this.socket.write(buff.toBuffer());
        this.setState(constants_1.SocksClientState.SentInitialHandshake);
      }
      /**
       * Handles initial Socks v5 handshake response.
       * @param data
       */
      handleInitialSocks5HandshakeResponse() {
        const data = this.receiveBuffer.get(2);
        if (data[0] !== 5) {
          this.closeSocket(constants_1.ERRORS.InvalidSocks5IntiailHandshakeSocksVersion);
        } else if (data[1] === constants_1.SOCKS5_NO_ACCEPTABLE_AUTH) {
          this.closeSocket(constants_1.ERRORS.InvalidSocks5InitialHandshakeNoAcceptedAuthType);
        } else {
          if (data[1] === constants_1.Socks5Auth.NoAuth) {
            this.socks5ChosenAuthType = constants_1.Socks5Auth.NoAuth;
            this.sendSocks5CommandRequest();
          } else if (data[1] === constants_1.Socks5Auth.UserPass) {
            this.socks5ChosenAuthType = constants_1.Socks5Auth.UserPass;
            this.sendSocks5UserPassAuthentication();
          } else if (data[1] === this.options.proxy.custom_auth_method) {
            this.socks5ChosenAuthType = this.options.proxy.custom_auth_method;
            this.sendSocks5CustomAuthentication();
          } else {
            this.closeSocket(constants_1.ERRORS.InvalidSocks5InitialHandshakeUnknownAuthType);
          }
        }
      }
      /**
       * Sends Socks v5 user & password auth handshake.
       *
       * Note: No auth and user/pass are currently supported.
       */
      sendSocks5UserPassAuthentication() {
        const userId = this.options.proxy.userId || "";
        const password = this.options.proxy.password || "";
        const buff = new smart_buffer_1.SmartBuffer();
        buff.writeUInt8(1);
        buff.writeUInt8(Buffer.byteLength(userId));
        buff.writeString(userId);
        buff.writeUInt8(Buffer.byteLength(password));
        buff.writeString(password);
        this.nextRequiredPacketBufferSize = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5UserPassAuthenticationResponse;
        this.socket.write(buff.toBuffer());
        this.setState(constants_1.SocksClientState.SentAuthentication);
      }
      sendSocks5CustomAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
          this.nextRequiredPacketBufferSize = this.options.proxy.custom_auth_response_size;
          this.socket.write(yield this.options.proxy.custom_auth_request_handler());
          this.setState(constants_1.SocksClientState.SentAuthentication);
        });
      }
      handleSocks5CustomAuthHandshakeResponse(data) {
        return __awaiter(this, void 0, void 0, function* () {
          return yield this.options.proxy.custom_auth_response_handler(data);
        });
      }
      handleSocks5AuthenticationNoAuthHandshakeResponse(data) {
        return __awaiter(this, void 0, void 0, function* () {
          return data[1] === 0;
        });
      }
      handleSocks5AuthenticationUserPassHandshakeResponse(data) {
        return __awaiter(this, void 0, void 0, function* () {
          return data[1] === 0;
        });
      }
      /**
       * Handles Socks v5 auth handshake response.
       * @param data
       */
      handleInitialSocks5AuthenticationHandshakeResponse() {
        return __awaiter(this, void 0, void 0, function* () {
          this.setState(constants_1.SocksClientState.ReceivedAuthenticationResponse);
          let authResult = false;
          if (this.socks5ChosenAuthType === constants_1.Socks5Auth.NoAuth) {
            authResult = yield this.handleSocks5AuthenticationNoAuthHandshakeResponse(this.receiveBuffer.get(2));
          } else if (this.socks5ChosenAuthType === constants_1.Socks5Auth.UserPass) {
            authResult = yield this.handleSocks5AuthenticationUserPassHandshakeResponse(this.receiveBuffer.get(2));
          } else if (this.socks5ChosenAuthType === this.options.proxy.custom_auth_method) {
            authResult = yield this.handleSocks5CustomAuthHandshakeResponse(this.receiveBuffer.get(this.options.proxy.custom_auth_response_size));
          }
          if (!authResult) {
            this.closeSocket(constants_1.ERRORS.Socks5AuthenticationFailed);
          } else {
            this.sendSocks5CommandRequest();
          }
        });
      }
      /**
       * Sends Socks v5 final handshake request.
       */
      sendSocks5CommandRequest() {
        const buff = new smart_buffer_1.SmartBuffer();
        buff.writeUInt8(5);
        buff.writeUInt8(constants_1.SocksCommand[this.options.command]);
        buff.writeUInt8(0);
        if (net.isIPv4(this.options.destination.host)) {
          buff.writeUInt8(constants_1.Socks5HostType.IPv4);
          buff.writeBuffer((0, helpers_1.ipToBuffer)(this.options.destination.host));
        } else if (net.isIPv6(this.options.destination.host)) {
          buff.writeUInt8(constants_1.Socks5HostType.IPv6);
          buff.writeBuffer((0, helpers_1.ipToBuffer)(this.options.destination.host));
        } else {
          buff.writeUInt8(constants_1.Socks5HostType.Hostname);
          buff.writeUInt8(this.options.destination.host.length);
          buff.writeString(this.options.destination.host);
        }
        buff.writeUInt16BE(this.options.destination.port);
        this.nextRequiredPacketBufferSize = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseHeader;
        this.socket.write(buff.toBuffer());
        this.setState(constants_1.SocksClientState.SentFinalHandshake);
      }
      /**
       * Handles Socks v5 final handshake response.
       * @param data
       */
      handleSocks5FinalHandshakeResponse() {
        const header = this.receiveBuffer.peek(5);
        if (header[0] !== 5 || header[1] !== constants_1.Socks5Response.Granted) {
          this.closeSocket(`${constants_1.ERRORS.InvalidSocks5FinalHandshakeRejected} - ${constants_1.Socks5Response[header[1]]}`);
        } else {
          const addressType = header[3];
          let remoteHost;
          let buff;
          if (addressType === constants_1.Socks5HostType.IPv4) {
            const dataNeeded = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseIPv4;
            if (this.receiveBuffer.length < dataNeeded) {
              this.nextRequiredPacketBufferSize = dataNeeded;
              return;
            }
            buff = smart_buffer_1.SmartBuffer.fromBuffer(this.receiveBuffer.get(dataNeeded).slice(4));
            remoteHost = {
              host: (0, helpers_1.int32ToIpv4)(buff.readUInt32BE()),
              port: buff.readUInt16BE()
            };
            if (remoteHost.host === "0.0.0.0") {
              remoteHost.host = this.options.proxy.ipaddress;
            }
          } else if (addressType === constants_1.Socks5HostType.Hostname) {
            const hostLength = header[4];
            const dataNeeded = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseHostname(hostLength);
            if (this.receiveBuffer.length < dataNeeded) {
              this.nextRequiredPacketBufferSize = dataNeeded;
              return;
            }
            buff = smart_buffer_1.SmartBuffer.fromBuffer(this.receiveBuffer.get(dataNeeded).slice(5));
            remoteHost = {
              host: buff.readString(hostLength),
              port: buff.readUInt16BE()
            };
          } else if (addressType === constants_1.Socks5HostType.IPv6) {
            const dataNeeded = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseIPv6;
            if (this.receiveBuffer.length < dataNeeded) {
              this.nextRequiredPacketBufferSize = dataNeeded;
              return;
            }
            buff = smart_buffer_1.SmartBuffer.fromBuffer(this.receiveBuffer.get(dataNeeded).slice(4));
            remoteHost = {
              host: ip_address_1.Address6.fromByteArray(Array.from(buff.readBuffer(16))).canonicalForm(),
              port: buff.readUInt16BE()
            };
          }
          this.setState(constants_1.SocksClientState.ReceivedFinalResponse);
          if (constants_1.SocksCommand[this.options.command] === constants_1.SocksCommand.connect) {
            this.setState(constants_1.SocksClientState.Established);
            this.removeInternalSocketHandlers();
            this.emit("established", { remoteHost, socket: this.socket });
          } else if (constants_1.SocksCommand[this.options.command] === constants_1.SocksCommand.bind) {
            this.setState(constants_1.SocksClientState.BoundWaitingForConnection);
            this.nextRequiredPacketBufferSize = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseHeader;
            this.emit("bound", { remoteHost, socket: this.socket });
          } else if (constants_1.SocksCommand[this.options.command] === constants_1.SocksCommand.associate) {
            this.setState(constants_1.SocksClientState.Established);
            this.removeInternalSocketHandlers();
            this.emit("established", {
              remoteHost,
              socket: this.socket
            });
          }
        }
      }
      /**
       * Handles Socks v5 incoming connection request (BIND).
       */
      handleSocks5IncomingConnectionResponse() {
        const header = this.receiveBuffer.peek(5);
        if (header[0] !== 5 || header[1] !== constants_1.Socks5Response.Granted) {
          this.closeSocket(`${constants_1.ERRORS.Socks5ProxyRejectedIncomingBoundConnection} - ${constants_1.Socks5Response[header[1]]}`);
        } else {
          const addressType = header[3];
          let remoteHost;
          let buff;
          if (addressType === constants_1.Socks5HostType.IPv4) {
            const dataNeeded = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseIPv4;
            if (this.receiveBuffer.length < dataNeeded) {
              this.nextRequiredPacketBufferSize = dataNeeded;
              return;
            }
            buff = smart_buffer_1.SmartBuffer.fromBuffer(this.receiveBuffer.get(dataNeeded).slice(4));
            remoteHost = {
              host: (0, helpers_1.int32ToIpv4)(buff.readUInt32BE()),
              port: buff.readUInt16BE()
            };
            if (remoteHost.host === "0.0.0.0") {
              remoteHost.host = this.options.proxy.ipaddress;
            }
          } else if (addressType === constants_1.Socks5HostType.Hostname) {
            const hostLength = header[4];
            const dataNeeded = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseHostname(hostLength);
            if (this.receiveBuffer.length < dataNeeded) {
              this.nextRequiredPacketBufferSize = dataNeeded;
              return;
            }
            buff = smart_buffer_1.SmartBuffer.fromBuffer(this.receiveBuffer.get(dataNeeded).slice(5));
            remoteHost = {
              host: buff.readString(hostLength),
              port: buff.readUInt16BE()
            };
          } else if (addressType === constants_1.Socks5HostType.IPv6) {
            const dataNeeded = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseIPv6;
            if (this.receiveBuffer.length < dataNeeded) {
              this.nextRequiredPacketBufferSize = dataNeeded;
              return;
            }
            buff = smart_buffer_1.SmartBuffer.fromBuffer(this.receiveBuffer.get(dataNeeded).slice(4));
            remoteHost = {
              host: ip_address_1.Address6.fromByteArray(Array.from(buff.readBuffer(16))).canonicalForm(),
              port: buff.readUInt16BE()
            };
          }
          this.setState(constants_1.SocksClientState.Established);
          this.removeInternalSocketHandlers();
          this.emit("established", { remoteHost, socket: this.socket });
        }
      }
      get socksClientOptions() {
        return Object.assign({}, this.options);
      }
    };
    exports2.SocksClient = SocksClient;
  }
});

// node_modules/socks/build/index.js
var require_build = __commonJS({
  "node_modules/socks/build/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_socksclient(), exports2);
  }
});

// node_modules/mqtt/build/lib/connect/socks.js
var require_socks = __commonJS({
  "node_modules/mqtt/build/lib/connect/socks.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2)
            if (Object.prototype.hasOwnProperty.call(o2, k))
              ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++)
            if (k[i] !== "default")
              __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    }();
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = openSocks;
    var debug_1 = __importDefault(require_src());
    var stream_1 = require("stream");
    var socks_1 = require_build();
    var dns = __importStar(require("dns"));
    var util_1 = require("util");
    var assert_1 = __importDefault(require("assert"));
    var debug = (0, debug_1.default)("mqttjs:socks");
    var ProxyStream = class extends stream_1.Duplex {
      constructor() {
        super({ autoDestroy: false });
        this._flowing = false;
        this._onData = (chunk) => {
          (0, assert_1.default)(this._socket);
          this._flowing = this.push(chunk);
          if (!this._flowing)
            this._socket.pause();
        };
        this._onEnd = () => {
          debug("proxy stream received EOF");
          this.push(null);
        };
        this._onClose = () => {
          debug("proxy stream closed");
          this.destroy();
        };
        this._onError = (err) => {
          debug("proxy stream died with error %s", err);
          this.destroy(err);
        };
        this.cork();
      }
      _start(socket) {
        debug("proxy stream started");
        (0, assert_1.default)(!this._socket);
        if (this.destroyed) {
          socket.destroy(this.errored);
          return;
        }
        this._socket = socket;
        if (!this._flowing)
          socket.pause();
        socket.on("data", this._onData);
        socket.on("end", this._onEnd);
        socket.on("error", this._onError);
        socket.on("close", this._onClose);
        socket.emit("connect");
        this.uncork();
      }
      _write(chunk, encoding, callback) {
        (0, assert_1.default)(this._socket);
        this._socket.write(chunk, callback);
      }
      _read(size) {
        var _a, _b;
        this._flowing = true;
        (_b = (_a = this._socket) === null || _a === void 0 ? void 0 : _a.resume) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
      _destroy(error, callback) {
        var _a, _b;
        (_b = (_a = this._socket) === null || _a === void 0 ? void 0 : _a.destroy) === null || _b === void 0 ? void 0 : _b.call(_a, error);
        callback(error);
      }
    };
    function fatal(e) {
      try {
        if (e.code === void 0)
          e.code = "SOCKS";
        return e;
      } catch (_a) {
        return e;
      }
    }
    function typeFromProtocol(proto) {
      switch (proto) {
        case "socks5h:":
          return [5, true];
        case "socks4a:":
          return [4, true];
        case "socks5:":
          return [5, false];
        case "socks4:":
          return [4, false];
        default:
          return [void 0, false];
      }
    }
    function parseSocksUrl(url) {
      const parsedUrl = new URL(url);
      if (parsedUrl.pathname || parsedUrl.hash || parsedUrl.search) {
        throw fatal(new Error("bad SOCKS URL"));
      }
      const [type, resolveThroughProxy] = typeFromProtocol(parsedUrl.protocol);
      if (!type) {
        throw fatal(new Error("bad SOCKS URL: invalid protocol"));
      }
      const port = parseInt(parsedUrl.port, 10);
      if (Number.isNaN(port)) {
        throw fatal(new Error("bad SOCKS URL: invalid port"));
      }
      const proxy = {
        host: parsedUrl.hostname,
        port,
        type
      };
      return [proxy, resolveThroughProxy];
    }
    async function connectSocks(destinationHost, destinationPort, socksUrl, stream, options = {}) {
      var _a;
      const lookup = (_a = options.lookup) !== null && _a !== void 0 ? _a : (0, util_1.promisify)(dns.lookup);
      const [proxy, resolveThroughProxy] = parseSocksUrl(socksUrl);
      if (!resolveThroughProxy) {
        debug("resolving %s locally", destinationHost);
        destinationHost = (await lookup(destinationHost, {
          family: proxy.type === 4 ? 4 : 0
        })).address;
      }
      debug("establishing SOCKS%d connection to %s:%d via %s:%d", proxy.type, destinationHost, destinationPort, proxy.host, proxy.port);
      const socksClient = new socks_1.SocksClient({
        command: "connect",
        destination: {
          host: destinationHost,
          port: destinationPort
        },
        proxy: Object.assign({}, proxy),
        timeout: options.timeout
      });
      socksClient.connect();
      socksClient.on("established", ({ socket }) => stream._start(socket));
      socksClient.on("error", (e) => {
        debug("SOCKS failed: %s", e);
        stream.destroy(fatal(e));
      });
    }
    function openSocks(destinationHost, destinationPort, socksUrl, options) {
      debug("SOCKS connection to %s:%d via %s", destinationHost, destinationPort, socksUrl);
      const stream = new ProxyStream();
      connectSocks(destinationHost, destinationPort, socksUrl, stream, options).catch((e) => {
        debug("SOCKS failed: %s", e);
        stream.destroy(e);
      });
      return stream;
    }
  }
});

// node_modules/mqtt/build/lib/connect/tcp.js
var require_tcp = __commonJS({
  "node_modules/mqtt/build/lib/connect/tcp.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var net_1 = __importDefault(require("net"));
    var debug_1 = __importDefault(require_src());
    var socks_1 = __importDefault(require_socks());
    var debug = (0, debug_1.default)("mqttjs:tcp");
    var buildStream = (client, opts) => {
      opts.port = opts.port || 1883;
      opts.hostname = opts.hostname || opts.host || "localhost";
      if (opts.socksProxy) {
        return (0, socks_1.default)(opts.hostname, opts.port, opts.socksProxy, {
          timeout: opts.socksTimeout
        });
      }
      const { port, path } = opts;
      const host = opts.hostname;
      debug("port %d and host %s", port, host);
      return net_1.default.createConnection({ port, host, path });
    };
    exports2.default = buildStream;
  }
});

// node_modules/mqtt/build/lib/connect/tls.js
var require_tls = __commonJS({
  "node_modules/mqtt/build/lib/connect/tls.js"(exports2) {
    "use strict";
    var __rest = exports2 && exports2.__rest || function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tls_1 = __importDefault(require("tls"));
    var net_1 = __importDefault(require("net"));
    var debug_1 = __importDefault(require_src());
    var socks_1 = __importDefault(require_socks());
    var debug = (0, debug_1.default)("mqttjs:tls");
    function connect2(opts) {
      const { host, port, socksProxy } = opts, rest = __rest(opts, ["host", "port", "socksProxy"]);
      return tls_1.default.connect(socksProxy ? Object.assign(Object.assign({}, rest), { socket: (0, socks_1.default)(host, port, socksProxy, {
        timeout: opts.socksTimeout
      }) }) : opts);
    }
    var buildStream = (client, opts) => {
      opts.port = opts.port || 8883;
      opts.host = opts.hostname || opts.host || "localhost";
      if (net_1.default.isIP(opts.host) === 0) {
        opts.servername = opts.host;
      }
      opts.rejectUnauthorized = opts.rejectUnauthorized !== false;
      delete opts.path;
      debug("port %d host %s rejectUnauthorized %b", opts.port, opts.host, opts.rejectUnauthorized);
      const connection = connect2(opts);
      connection.on("secureConnect", () => {
        if (opts.rejectUnauthorized && !connection.authorized) {
          connection.emit("error", new Error("TLS not authorized"));
        } else {
          connection.removeListener("error", handleTLSerrors);
        }
      });
      function handleTLSerrors(err) {
        if (opts.rejectUnauthorized) {
          client.emit("error", err);
        }
        connection.end();
      }
      connection.on("error", handleTLSerrors);
      return connection;
    };
    exports2.default = buildStream;
  }
});

// node_modules/mqtt/build/lib/connect/wx.js
var require_wx = __commonJS({
  "node_modules/mqtt/build/lib/connect/wx.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var buffer_1 = require("buffer");
    var readable_stream_1 = require_ours();
    var BufferedDuplex_1 = require_BufferedDuplex();
    var socketTask;
    var proxy;
    var stream;
    function buildProxy() {
      const _proxy = new readable_stream_1.Transform();
      _proxy._write = (chunk, encoding, next) => {
        socketTask.send({
          data: chunk.buffer,
          success() {
            next();
          },
          fail(errMsg) {
            next(new Error(errMsg));
          }
        });
      };
      _proxy._flush = (done) => {
        socketTask.close({
          success() {
            done();
          }
        });
      };
      return _proxy;
    }
    function setDefaultOpts(opts) {
      if (!opts.hostname) {
        opts.hostname = "localhost";
      }
      if (!opts.path) {
        opts.path = "/";
      }
      if (!opts.wsOptions) {
        opts.wsOptions = {};
      }
    }
    function buildUrl(opts, client) {
      const protocol = opts.protocol === "wxs" ? "wss" : "ws";
      let url = `${protocol}://${opts.hostname}${opts.path}`;
      if (opts.port && opts.port !== 80 && opts.port !== 443) {
        url = `${protocol}://${opts.hostname}:${opts.port}${opts.path}`;
      }
      if (typeof opts.transformWsUrl === "function") {
        url = opts.transformWsUrl(url, opts, client);
      }
      return url;
    }
    function bindEventHandler() {
      socketTask.onOpen(() => {
        stream.socketReady();
      });
      socketTask.onMessage((res) => {
        let { data } = res;
        if (data instanceof ArrayBuffer)
          data = buffer_1.Buffer.from(data);
        else
          data = buffer_1.Buffer.from(data, "utf8");
        proxy.push(data);
      });
      socketTask.onClose(() => {
        stream.emit("close");
        stream.end();
        stream.destroy();
      });
      socketTask.onError((error) => {
        const err = new Error(error.errMsg);
        stream.destroy(err);
      });
    }
    var buildStream = (client, opts) => {
      opts.hostname = opts.hostname || opts.host;
      if (!opts.hostname) {
        throw new Error("Could not determine host. Specify host manually.");
      }
      const websocketSubProtocol = opts.protocolId === "MQIsdp" && opts.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
      setDefaultOpts(opts);
      const url = buildUrl(opts, client);
      socketTask = wx.connectSocket({
        url,
        protocols: [websocketSubProtocol]
      });
      proxy = buildProxy();
      stream = new BufferedDuplex_1.BufferedDuplex(opts, proxy, socketTask);
      stream._destroy = (err, cb) => {
        socketTask.close({
          success() {
            if (cb)
              cb(err);
          }
        });
      };
      const destroyRef = stream.destroy;
      stream.destroy = (err, cb) => {
        stream.destroy = destroyRef;
        setTimeout(() => {
          socketTask.close({
            fail() {
              stream._destroy(err, cb);
            }
          });
        }, 0);
        return stream;
      };
      bindEventHandler();
      return stream;
    };
    exports2.default = buildStream;
  }
});

// node_modules/mqtt/build/lib/connect/ali.js
var require_ali = __commonJS({
  "node_modules/mqtt/build/lib/connect/ali.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var buffer_1 = require("buffer");
    var readable_stream_1 = require_ours();
    var BufferedDuplex_1 = require_BufferedDuplex();
    var my;
    var proxy;
    var stream;
    var isInitialized = false;
    function buildProxy() {
      const _proxy = new readable_stream_1.Transform();
      _proxy._write = (chunk, encoding, next) => {
        my.sendSocketMessage({
          data: chunk.buffer,
          success() {
            next();
          },
          fail() {
            next(new Error());
          }
        });
      };
      _proxy._flush = (done) => {
        my.closeSocket({
          success() {
            done();
          }
        });
      };
      return _proxy;
    }
    function setDefaultOpts(opts) {
      if (!opts.hostname) {
        opts.hostname = "localhost";
      }
      if (!opts.path) {
        opts.path = "/";
      }
      if (!opts.wsOptions) {
        opts.wsOptions = {};
      }
    }
    function buildUrl(opts, client) {
      const protocol = opts.protocol === "alis" ? "wss" : "ws";
      let url = `${protocol}://${opts.hostname}${opts.path}`;
      if (opts.port && opts.port !== 80 && opts.port !== 443) {
        url = `${protocol}://${opts.hostname}:${opts.port}${opts.path}`;
      }
      if (typeof opts.transformWsUrl === "function") {
        url = opts.transformWsUrl(url, opts, client);
      }
      return url;
    }
    function bindEventHandler() {
      if (isInitialized)
        return;
      isInitialized = true;
      my.onSocketOpen(() => {
        stream.socketReady();
      });
      my.onSocketMessage((res) => {
        if (typeof res.data === "string") {
          const buffer = buffer_1.Buffer.from(res.data, "base64");
          proxy.push(buffer);
        } else {
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            let data = reader.result;
            if (data instanceof ArrayBuffer)
              data = buffer_1.Buffer.from(data);
            else
              data = buffer_1.Buffer.from(data, "utf8");
            proxy.push(data);
          });
          reader.readAsArrayBuffer(res.data);
        }
      });
      my.onSocketClose(() => {
        stream.end();
        stream.destroy();
      });
      my.onSocketError((err) => {
        stream.destroy(err);
      });
    }
    var buildStream = (client, opts) => {
      opts.hostname = opts.hostname || opts.host;
      if (!opts.hostname) {
        throw new Error("Could not determine host. Specify host manually.");
      }
      const websocketSubProtocol = opts.protocolId === "MQIsdp" && opts.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
      setDefaultOpts(opts);
      const url = buildUrl(opts, client);
      my = opts.my;
      my.connectSocket({
        url,
        protocols: websocketSubProtocol
      });
      proxy = buildProxy();
      stream = new BufferedDuplex_1.BufferedDuplex(opts, proxy, my);
      bindEventHandler();
      return stream;
    };
    exports2.default = buildStream;
  }
});

// node_modules/mqtt/build/lib/connect/index.js
var require_connect = __commonJS({
  "node_modules/mqtt/build/lib/connect/index.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.connectAsync = connectAsync;
    var debug_1 = __importDefault(require_src());
    var url_1 = __importDefault(require("url"));
    var client_1 = __importDefault(require_client());
    var is_browser_1 = __importDefault(require_is_browser());
    if (typeof (process === null || process === void 0 ? void 0 : process.nextTick) !== "function") {
      process.nextTick = setImmediate;
    }
    var debug = (0, debug_1.default)("mqttjs");
    var protocols = null;
    function parseAuthOptions(opts) {
      let matches;
      if (opts.auth) {
        matches = opts.auth.match(/^(.+):(.+)$/);
        if (matches) {
          opts.username = matches[1];
          opts.password = matches[2];
        } else {
          opts.username = opts.auth;
        }
      }
    }
    function connect2(brokerUrl, opts) {
      var _a, _b, _c;
      debug("connecting to an MQTT broker...");
      if (typeof brokerUrl === "object" && !opts) {
        opts = brokerUrl;
        brokerUrl = "";
      }
      opts = opts || {};
      if (brokerUrl && typeof brokerUrl === "string") {
        const parsedUrl = url_1.default.parse(brokerUrl, true);
        const parsedOptions = {};
        if (parsedUrl.port != null) {
          parsedOptions.port = Number(parsedUrl.port);
        }
        parsedOptions.host = parsedUrl.hostname;
        parsedOptions.query = parsedUrl.query;
        parsedOptions.auth = parsedUrl.auth;
        parsedOptions.protocol = parsedUrl.protocol;
        parsedOptions.path = parsedUrl.path;
        opts = Object.assign(Object.assign({}, parsedOptions), opts);
        if (!opts.protocol) {
          throw new Error("Missing protocol");
        }
        opts.protocol = opts.protocol.replace(/:$/, "");
      }
      opts.unixSocket = opts.unixSocket || ((_a = opts.protocol) === null || _a === void 0 ? void 0 : _a.includes("+unix"));
      if (opts.unixSocket) {
        opts.protocol = opts.protocol.replace("+unix", "");
      } else if (!((_b = opts.protocol) === null || _b === void 0 ? void 0 : _b.startsWith("ws")) && !((_c = opts.protocol) === null || _c === void 0 ? void 0 : _c.startsWith("wx"))) {
        delete opts.path;
      }
      parseAuthOptions(opts);
      if (opts.query && typeof opts.query.clientId === "string") {
        opts.clientId = opts.query.clientId;
      }
      if (is_browser_1.default || opts.unixSocket) {
        opts.socksProxy = void 0;
      } else if (opts.socksProxy === void 0 && typeof process !== "undefined") {
        opts.socksProxy = process.env["MQTTJS_SOCKS_PROXY"];
      }
      if (opts.cert && opts.key) {
        if (opts.protocol) {
          if (["mqtts", "wss", "wxs", "alis"].indexOf(opts.protocol) === -1) {
            switch (opts.protocol) {
              case "mqtt":
                opts.protocol = "mqtts";
                break;
              case "ws":
                opts.protocol = "wss";
                break;
              case "wx":
                opts.protocol = "wxs";
                break;
              case "ali":
                opts.protocol = "alis";
                break;
              default:
                throw new Error(`Unknown protocol for secure connection: "${opts.protocol}"!`);
            }
          }
        } else {
          throw new Error("Missing secure protocol key");
        }
      }
      if (!protocols) {
        protocols = {};
        if (!is_browser_1.default && !opts.forceNativeWebSocket) {
          protocols.ws = require_ws2().streamBuilder;
          protocols.wss = require_ws2().streamBuilder;
          protocols.mqtt = require_tcp().default;
          protocols.tcp = require_tcp().default;
          protocols.ssl = require_tls().default;
          protocols.tls = protocols.ssl;
          protocols.mqtts = require_tls().default;
        } else {
          protocols.ws = require_ws2().browserStreamBuilder;
          protocols.wss = require_ws2().browserStreamBuilder;
          protocols.wx = require_wx().default;
          protocols.wxs = require_wx().default;
          protocols.ali = require_ali().default;
          protocols.alis = require_ali().default;
        }
      }
      if (!protocols[opts.protocol]) {
        const isSecure = ["mqtts", "wss"].indexOf(opts.protocol) !== -1;
        opts.protocol = [
          "mqtt",
          "mqtts",
          "ws",
          "wss",
          "wx",
          "wxs",
          "ali",
          "alis"
        ].filter((key, index) => {
          if (isSecure && index % 2 === 0) {
            return false;
          }
          return typeof protocols[key] === "function";
        })[0];
      }
      if (opts.clean === false && !opts.clientId) {
        throw new Error("Missing clientId for unclean clients");
      }
      if (opts.protocol) {
        opts.defaultProtocol = opts.protocol;
      }
      function wrapper(client2) {
        if (opts.servers) {
          if (!client2._reconnectCount || client2._reconnectCount === opts.servers.length) {
            client2._reconnectCount = 0;
          }
          opts.host = opts.servers[client2._reconnectCount].host;
          opts.port = opts.servers[client2._reconnectCount].port;
          opts.protocol = !opts.servers[client2._reconnectCount].protocol ? opts.defaultProtocol : opts.servers[client2._reconnectCount].protocol;
          opts.hostname = opts.host;
          client2._reconnectCount++;
        }
        debug("calling streambuilder for", opts.protocol);
        return protocols[opts.protocol](client2, opts);
      }
      const client = new client_1.default(wrapper, opts);
      client.on("error", () => {
      });
      return client;
    }
    function connectAsync(brokerUrl, opts, allowRetries = true) {
      return new Promise((resolve, reject) => {
        const client = connect2(brokerUrl, opts);
        const promiseResolutionListeners = {
          connect: (connack) => {
            removePromiseResolutionListeners();
            resolve(client);
          },
          end: () => {
            removePromiseResolutionListeners();
            resolve(client);
          },
          error: (err) => {
            removePromiseResolutionListeners();
            client.end();
            reject(err);
          }
        };
        if (allowRetries === false) {
          promiseResolutionListeners.close = () => {
            promiseResolutionListeners.error(new Error("Couldn't connect to server"));
          };
        }
        function removePromiseResolutionListeners() {
          Object.keys(promiseResolutionListeners).forEach((eventName) => {
            client.off(eventName, promiseResolutionListeners[eventName]);
          });
        }
        Object.keys(promiseResolutionListeners).forEach((eventName) => {
          client.on(eventName, promiseResolutionListeners[eventName]);
        });
      });
    }
    exports2.default = connect2;
  }
});

// node_modules/mqtt/build/mqtt.js
var require_mqtt2 = __commonJS({
  "node_modules/mqtt/build/mqtt.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2)
            if (Object.prototype.hasOwnProperty.call(o2, k))
              ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++)
            if (k[i] !== "default")
              __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    }();
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding(exports3, m, p);
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ReasonCodes = exports2.KeepaliveManager = exports2.UniqueMessageIdProvider = exports2.DefaultMessageIdProvider = exports2.Store = exports2.MqttClient = exports2.connectAsync = exports2.connect = exports2.Client = void 0;
    var client_1 = __importDefault(require_client());
    exports2.MqttClient = client_1.default;
    var default_message_id_provider_1 = __importDefault(require_default_message_id_provider());
    exports2.DefaultMessageIdProvider = default_message_id_provider_1.default;
    var unique_message_id_provider_1 = __importDefault(require_unique_message_id_provider());
    exports2.UniqueMessageIdProvider = unique_message_id_provider_1.default;
    var store_1 = __importDefault(require_store());
    exports2.Store = store_1.default;
    var connect_1 = __importStar(require_connect());
    exports2.connect = connect_1.default;
    Object.defineProperty(exports2, "connectAsync", { enumerable: true, get: function() {
      return connect_1.connectAsync;
    } });
    var KeepaliveManager_1 = __importDefault(require_KeepaliveManager());
    exports2.KeepaliveManager = KeepaliveManager_1.default;
    exports2.Client = client_1.default;
    __exportStar(require_client(), exports2);
    __exportStar(require_shared(), exports2);
    var ack_1 = require_ack();
    Object.defineProperty(exports2, "ReasonCodes", { enumerable: true, get: function() {
      return ack_1.ReasonCodes;
    } });
  }
});

// node_modules/mqtt/build/index.js
var require_build2 = __commonJS({
  "node_modules/mqtt/build/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2)
            if (Object.prototype.hasOwnProperty.call(o2, k))
              ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++)
            if (k[i] !== "default")
              __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    }();
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var mqtt = __importStar(require_mqtt2());
    exports2.default = mqtt;
    __exportStar(require_mqtt2(), exports2);
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => MQTTNotePlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian3 = require("obsidian");

// src/settings.ts
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  brokerUrl: "",
  username: "",
  password: "",
  automaticPublishOnSave: false,
  outgoingPrefix: "obsidian/",
  incomingTopic: "homeassistant/#",
  incomingNoteFolder: "MQTT-Inbox/"
};
var MQTTNoteSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    this.addMQTTConnectionSettings();
    this.addPublishingModeSettings();
    this.addTopicConfigurationSettings();
    this.addFileManagementSettings();
  }
  addMQTTConnectionSettings() {
    const { containerEl } = this;
    containerEl.createEl("h2", { text: "MQTT Broker Connection" });
    new import_obsidian.Setting(containerEl).setName("Broker URL").setDesc("MQTT broker connection URL (e.g., mqtt://192.168.1.100:1883)").addText((text) => text.setPlaceholder("mqtt://192.168.1.100:1883").setValue(this.plugin.settings.brokerUrl).onChange(async (value) => {
      if (this.validateBrokerUrl(value)) {
        this.plugin.settings.brokerUrl = value;
        await this.plugin.saveSettings();
      }
    }));
    new import_obsidian.Setting(containerEl).setName("Username").setDesc("Leave empty if no authentication required").addText((text) => text.setPlaceholder("Leave empty if no authentication required").setValue(this.plugin.settings.username).onChange(async (value) => {
      this.plugin.settings.username = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("Password").setDesc("Leave empty if no authentication required").addText((text) => {
      text.inputEl.type = "password";
      text.setPlaceholder("Leave empty if no authentication required").setValue(this.plugin.settings.password).onChange(async (value) => {
        this.plugin.settings.password = value;
        await this.plugin.saveSettings();
      });
    });
  }
  addPublishingModeSettings() {
    const { containerEl } = this;
    containerEl.createEl("h2", { text: "Publishing Mode" });
    new import_obsidian.Setting(containerEl).setName("Automatic publishing on save").setDesc("Automatically publish notes when saved").addToggle((toggle) => toggle.setValue(this.plugin.settings.automaticPublishOnSave).onChange(async (value) => {
      this.plugin.settings.automaticPublishOnSave = value;
      await this.plugin.saveSettings();
    }));
  }
  addTopicConfigurationSettings() {
    const { containerEl } = this;
    containerEl.createEl("h2", { text: "Topic Configuration" });
    new import_obsidian.Setting(containerEl).setName("Outgoing Prefix").setDesc("Prefix for outgoing topic names").addText((text) => text.setPlaceholder("obsidian/").setValue(this.plugin.settings.outgoingPrefix).onChange(async (value) => {
      if (this.validateOutgoingPrefix(value)) {
        this.plugin.settings.outgoingPrefix = value;
        await this.plugin.saveSettings();
      }
    }));
    new import_obsidian.Setting(containerEl).setName("Incoming Topic").setDesc("Topic pattern to subscribe to").addText((text) => text.setPlaceholder("homeassistant/#").setValue(this.plugin.settings.incomingTopic).onChange(async (value) => {
      if (this.validateIncomingTopic(value)) {
        this.plugin.settings.incomingTopic = value;
        await this.plugin.saveSettings();
      }
    }));
  }
  addFileManagementSettings() {
    const { containerEl } = this;
    containerEl.createEl("h2", { text: "File Management" });
    new import_obsidian.Setting(containerEl).setName("Incoming Note Folder").setDesc("Folder for incoming MQTT notes").addText((text) => text.setPlaceholder("MQTT-Inbox/").setValue(this.plugin.settings.incomingNoteFolder).onChange(async (value) => {
      if (this.validateNoteFolder(value)) {
        this.plugin.settings.incomingNoteFolder = value;
        await this.plugin.saveSettings();
      }
    }));
  }
  validateBrokerUrl(url) {
    if (!url.trim()) {
      return true;
    }
    try {
      const parsed = new URL(url);
      return parsed.protocol === "mqtt:" || parsed.protocol === "mqtts:" || parsed.protocol === "ws:" || parsed.protocol === "wss:";
    } catch {
      return false;
    }
  }
  validateOutgoingPrefix(prefix) {
    return prefix.trim().length > 0;
  }
  validateIncomingTopic(topic) {
    return topic.trim().length > 0;
  }
  validateNoteFolder(folder) {
    if (!folder.trim()) {
      return false;
    }
    const invalidChars = /[<>:"|?*]/;
    return !invalidChars.test(folder);
  }
};

// src/mqttClient.ts
var import_mqtt = __toESM(require_build2());
var import_events = require("events");
var MQTTClient = class extends import_events.EventEmitter {
  // Start with 1 second
  constructor() {
    super();
    this.client = null;
    this.settings = null;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    this.reconnectDelay = 1e3;
  }
  async connect(settings) {
    if (this.isConnected()) {
      return;
    }
    this.settings = settings;
    if (!settings.brokerUrl) {
      throw new Error("Broker URL is required");
    }
    const options = {
      clean: true,
      connectTimeout: 3e4,
      reconnectPeriod: 0
      // We handle reconnection manually
    };
    if (settings.username) {
      options.username = settings.username;
    }
    if (settings.password) {
      options.password = settings.password;
    }
    return new Promise((resolve, reject) => {
      try {
        this.client = (0, import_mqtt.connect)(settings.brokerUrl, options);
        this.client.on("connect", () => {
          console.log("MQTT Client connected to broker");
          this.reconnectAttempts = 0;
          this.reconnectDelay = 1e3;
          this.emit("connected");
          resolve();
        });
        this.client.on("error", (error) => {
          console.error("MQTT Client error:", error);
          this.emit("error", error);
          reject(error);
        });
        this.client.on("close", () => {
          console.log("MQTT Client disconnected");
          this.emit("disconnected");
          this.scheduleReconnect();
        });
        this.client.on("message", (topic, payload) => {
          try {
            const message = {
              topic,
              payload: this.parsePayload(payload),
              timestamp: Date.now()
            };
            this.emit("message", message);
          } catch (error) {
            console.error("Error processing MQTT message:", error);
            this.emit("error", error);
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  }
  async disconnect() {
    if (!this.client) {
      return;
    }
    return new Promise((resolve) => {
      if (this.client) {
        this.client.end(false, {}, () => {
          console.log("MQTT Client disconnected gracefully");
          this.client = null;
          this.settings = null;
          this.reconnectAttempts = 0;
          resolve();
        });
      } else {
        resolve();
      }
    });
  }
  isConnected() {
    return this.client !== null && this.client.connected;
  }
  async publish(topic, payload) {
    if (!this.isConnected()) {
      throw new Error("MQTT client is not connected");
    }
    const message = typeof payload === "string" ? payload : JSON.stringify(payload);
    return new Promise((resolve, reject) => {
      this.client.publish(topic, message, { qos: 0 }, (error) => {
        if (error) {
          console.error("Error publishing MQTT message:", error);
          reject(error);
        } else {
          console.log(`Published message to topic: ${topic}`);
          resolve();
        }
      });
    });
  }
  async subscribe(topic, callback) {
    if (!this.isConnected()) {
      throw new Error("MQTT client is not connected");
    }
    return new Promise((resolve, reject) => {
      this.client.subscribe(topic, { qos: 0 }, (error) => {
        if (error) {
          console.error("Error subscribing to MQTT topic:", error);
          reject(error);
        } else {
          console.log(`Subscribed to topic: ${topic}`);
          this.on("message", (message) => {
            if (this.topicMatches(message.topic, topic)) {
              callback(message);
            }
          });
          resolve();
        }
      });
    });
  }
  parsePayload(payload) {
    const payloadStr = payload.toString();
    try {
      return JSON.parse(payloadStr);
    } catch {
      return payloadStr;
    }
  }
  topicMatches(messageTopic, subscriptionTopic) {
    const messageSegments = messageTopic.split("/");
    const subscriptionSegments = subscriptionTopic.split("/");
    for (let i = 0; i < subscriptionSegments.length; i++) {
      const subSegment = subscriptionSegments[i];
      const msgSegment = messageSegments[i];
      if (subSegment === "#") {
        return true;
      }
      if (subSegment === "+") {
        if (msgSegment === void 0) {
          return false;
        }
        continue;
      }
      if (subSegment !== msgSegment) {
        return false;
      }
    }
    return messageSegments.length === subscriptionSegments.length;
  }
  scheduleReconnect() {
    if (!this.settings || this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.log("Max reconnection attempts reached or no settings available");
      return;
    }
    this.reconnectAttempts++;
    const delay = this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1);
    console.log(`Scheduling reconnection attempt ${this.reconnectAttempts} in ${delay}ms`);
    setTimeout(async () => {
      try {
        await this.connect(this.settings);
      } catch (error) {
        console.error("Reconnection attempt failed:", error);
      }
    }, delay);
  }
};

// src/notePublisher.ts
var NotePublisher = class {
  // Obsidian App instance
  constructor(mqttClient, settings, app) {
    this.mqttClient = mqttClient;
    this.settings = settings;
    this.app = app;
  }
  /**
   * Updates the settings reference when settings change
   */
  updateSettings(settings) {
    this.settings = settings;
  }
  /**
   * Determines if a note should be published based on its frontmatter
   * Checks for 'mqtt: true' property in the frontmatter
   */
  shouldPublishNote(file) {
    try {
      const cache = this.app.metadataCache.getFileCache(file);
      if (!cache || !cache.frontmatter) {
        console.log(`Note ${file.name} has no frontmatter, skipping publish check`);
        return false;
      }
      const frontmatter = cache.frontmatter;
      const mqttProperty = frontmatter.mqtt;
      if (mqttProperty === true || mqttProperty === "true") {
        console.log(`Note ${file.name} has mqtt: true, should be published`);
        return true;
      }
      console.log(`Note ${file.name} does not have mqtt: true (value: ${mqttProperty}), skipping publish`);
      return false;
    } catch (error) {
      console.error(`Error checking frontmatter for note ${file.name}:`, error);
      return false;
    }
  }
  /**
   * Generates MQTT topic name from note title and configured prefix
   * Sanitizes the title to be MQTT-topic safe
   */
  generateTopic(file) {
    try {
      const title = file.basename;
      const sanitizedTitle = this.sanitizeTopicName(title);
      const topic = `${this.settings.outgoingPrefix}${sanitizedTitle}`;
      console.log(`Generated topic for note ${file.name}: ${topic}`);
      return topic;
    } catch (error) {
      console.error(`Error generating topic for note ${file.name}:`, error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      throw new Error(`Failed to generate topic for note ${file.name}: ${errorMessage}`);
    }
  }
  /**
   * Creates JSON payload containing frontmatter, content, and metadata
   */
  async createPayload(file) {
    try {
      const content = await this.app.vault.read(file);
      const { frontmatter, content: noteContent } = this.parseFrontmatterAndContent(content);
      const payload = {
        frontmatter: frontmatter || {},
        content: noteContent,
        title: file.basename,
        timestamp: Date.now(),
        path: file.path
      };
      console.log(`Created payload for note ${file.name} (content length: ${noteContent.length})`);
      return payload;
    } catch (error) {
      console.error(`Error creating payload for note ${file.name}:`, error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      throw new Error(`Failed to create payload for note ${file.name}: ${errorMessage}`);
    }
  }
  /**
   * Publishes a note to MQTT broker
   * Orchestrates the entire publish process: check, generate topic, create payload, publish
   */
  async publishNote(file) {
    const startTime = Date.now();
    try {
      console.log(`Starting publish process for note: ${file.name}`);
      if (!this.shouldPublishNote(file)) {
        console.log(`Skipping publish for note ${file.name} - does not meet criteria`);
        return;
      }
      if (!this.mqttClient.isConnected()) {
        throw new Error("MQTT client is not connected");
      }
      const topic = this.generateTopic(file);
      const payload = await this.createPayload(file);
      await this.mqttClient.publish(topic, payload);
      const duration = Date.now() - startTime;
      console.log(`Successfully published note ${file.name} to topic ${topic} (took ${duration}ms)`);
    } catch (error) {
      const duration = Date.now() - startTime;
      console.error(`Failed to publish note ${file.name} after ${duration}ms:`, error);
      throw error;
    }
  }
  /**
   * Publishes multiple notes in sequence
   * Useful for batch publishing operations
   */
  async publishNotes(files) {
    console.log(`Starting batch publish for ${files.length} notes`);
    const results = {
      successful: 0,
      skipped: 0,
      failed: 0
    };
    for (const file of files) {
      try {
        await this.publishNote(file);
        results.successful++;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        if (errorMessage.includes("does not meet criteria")) {
          results.skipped++;
        } else {
          results.failed++;
          console.error(`Failed to publish note ${file.name}:`, error);
        }
      }
    }
    console.log(`Batch publish completed: ${results.successful} successful, ${results.skipped} skipped, ${results.failed} failed`);
  }
  /**
   * Sanitizes note title to be safe for MQTT topic usage
   * Removes or replaces characters that are not allowed in MQTT topics
   */
  sanitizeTopicName(title) {
    return title.replace(/[\/\+\#\$\*\>\?\|]/g, "_").replace(/\s+/g, "_").replace(/[^\w\-_\.]/g, "").replace(/_{2,}/g, "_").replace(/^_+|_+$/g, "");
  }
  /**
   * Parses frontmatter and content from note text
   * Handles malformed frontmatter gracefully
   */
  parseFrontmatterAndContent(text) {
    try {
      if (!text.startsWith("---")) {
        return { frontmatter: null, content: text };
      }
      const lines = text.split("\n");
      let frontmatterEnd = -1;
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (line && line.trim() === "---") {
          frontmatterEnd = i;
          break;
        }
      }
      if (frontmatterEnd === -1) {
        console.warn("Malformed frontmatter: no closing delimiter found");
        return { frontmatter: null, content: text };
      }
      const frontmatterText = lines.slice(1, frontmatterEnd).join("\n");
      const content = lines.slice(frontmatterEnd + 1).join("\n");
      const frontmatter = this.parseYamlFrontmatter(frontmatterText);
      return { frontmatter, content };
    } catch (error) {
      console.error("Error parsing frontmatter:", error);
      return { frontmatter: null, content: text };
    }
  }
  /**
   * Simple YAML parser for frontmatter
   * Handles basic key-value pairs and common YAML structures
   */
  parseYamlFrontmatter(yamlText) {
    const frontmatter = {};
    try {
      const lines = yamlText.split("\n");
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) {
          continue;
        }
        const colonIndex = trimmed.indexOf(":");
        if (colonIndex === -1) {
          continue;
        }
        const key = trimmed.substring(0, colonIndex).trim();
        const value = trimmed.substring(colonIndex + 1).trim();
        if (key) {
          frontmatter[key] = this.parseYamlValue(value);
        }
      }
    } catch (error) {
      console.error("Error parsing YAML frontmatter:", error);
    }
    return frontmatter;
  }
  /**
   * Parses individual YAML values, handling common types
   */
  parseYamlValue(value) {
    if (!value) {
      return "";
    }
    const unquoted = value.replace(/^['"]|['"]$/g, "");
    if (unquoted.toLowerCase() === "true") {
      return true;
    }
    if (unquoted.toLowerCase() === "false") {
      return false;
    }
    if (unquoted.toLowerCase() === "null" || unquoted === "~") {
      return null;
    }
    if (/^-?\d+$/.test(unquoted)) {
      return parseInt(unquoted, 10);
    }
    if (/^-?\d+\.\d+$/.test(unquoted)) {
      return parseFloat(unquoted);
    }
    if (unquoted.startsWith("[") && unquoted.endsWith("]")) {
      const arrayContent = unquoted.slice(1, -1);
      return arrayContent.split(",").map((item) => this.parseYamlValue(item.trim()));
    }
    return unquoted;
  }
};

// src/noteCreator.ts
var import_obsidian2 = require("obsidian");
var NoteCreator = class {
  constructor(app) {
    this.app = app;
  }
  /**
   * Main entry point for handling incoming MQTT messages
   * Orchestrates the complete note creation process with comprehensive error handling
   */
  async handleIncomingMessage(message, settings) {
    const startTime = Date.now();
    try {
      console.log(`NoteCreator: Processing incoming message from topic: ${message.topic}`);
      if (!message.topic || message.topic.trim() === "") {
        throw new Error("Invalid MQTT topic: topic cannot be empty");
      }
      if (!settings.incomingNoteFolder) {
        throw new Error("Incoming note folder not configured in settings");
      }
      await this.ensureFolderExists(settings.incomingNoteFolder);
      const noteTitle = this.generateNoteTitle(message.topic);
      console.log(`NoteCreator: Generated note title: ${noteTitle}`);
      const existingNote = await this.findExistingNote(noteTitle, settings.incomingNoteFolder);
      if (existingNote) {
        console.log(`NoteCreator: Updating existing note: ${existingNote.name}`);
        await this.updateExistingNote(existingNote, message);
      } else {
        console.log(`NoteCreator: Creating new note: ${noteTitle}`);
        await this.createNoteFromMessage(message, noteTitle, settings.incomingNoteFolder);
      }
      const duration = Date.now() - startTime;
      console.log(`NoteCreator: Successfully processed message from topic ${message.topic} (took ${duration}ms)`);
    } catch (error) {
      const duration = Date.now() - startTime;
      console.error(`NoteCreator: Failed to process message from topic ${message.topic} after ${duration}ms:`, error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      new import_obsidian2.Notice(`Failed to create note from MQTT message: ${errorMessage}`);
      throw error;
    }
  }
  /**
   * Creates a new note from an MQTT message
   * Handles file creation with proper error handling and validation
   */
  async createNoteFromMessage(message, noteTitle, folder) {
    try {
      const sanitizedFilename = this.sanitizeFilename(noteTitle);
      const filePath = (0, import_obsidian2.normalizePath)(`${folder}/${sanitizedFilename}.md`);
      const content = this.createNoteContent(message);
      const file = await this.app.vault.create(filePath, content);
      console.log(`NoteCreator: Created new note: ${file.path}`);
      return file;
    } catch (error) {
      console.error(`NoteCreator: Failed to create note from message:`, error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      throw new Error(`Failed to create note: ${errorMessage}`);
    }
  }
  /**
   * Updates an existing note with new MQTT message content
   * Appends new content while preserving existing content
   */
  async updateExistingNote(file, message) {
    try {
      const existingContent = await this.app.vault.read(file);
      const newContentSection = this.createUpdateContent(message);
      const updatedContent = existingContent + "\n\n---\n\n" + newContentSection;
      await this.app.vault.modify(file, updatedContent);
      console.log(`NoteCreator: Updated existing note: ${file.path}`);
    } catch (error) {
      console.error(`NoteCreator: Failed to update existing note ${file.path}:`, error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      throw new Error(`Failed to update existing note: ${errorMessage}`);
    }
  }
  /**
   * Generates a valid note title from an MQTT topic
   * Converts topic hierarchy to readable filename
   */
  generateNoteTitle(topic) {
    try {
      const segments = topic.split("/").filter((segment) => segment.trim() !== "");
      if (segments.length === 0) {
        return "MQTT_Message";
      }
      if (segments.length === 1) {
        return segments[0] || "MQTT_Message";
      }
      const title = segments.map((segment) => this.capitalizeFirstLetter(segment)).join(" ");
      return title;
    } catch (error) {
      console.error("NoteCreator: Error generating note title:", error);
      return "MQTT_Message";
    }
  }
  /**
   * Sanitizes filename to be safe for filesystem
   * Removes or replaces invalid characters and handles edge cases
   */
  sanitizeFilename(filename) {
    try {
      return filename.replace(/[<>:"/\\|?*]/g, "_").replace(/\s+/g, " ").replace(/\s/g, "_").replace(/^[.\s]+|[.\s]+$/g, "").substring(0, 100) || "MQTT_Message";
    } catch (error) {
      console.error("NoteCreator: Error sanitizing filename:", error);
      return "MQTT_Message";
    }
  }
  /**
   * Formats payload content based on its type
   * Handles strings, numbers, and JSON objects with proper formatting
   */
  formatPayload(payload) {
    try {
      if (typeof payload === "string") {
        return payload;
      }
      if (typeof payload === "object" && payload !== null) {
        return "```json\n" + JSON.stringify(payload, null, 2) + "\n```";
      }
      return String(payload);
    } catch (error) {
      console.error("NoteCreator: Error formatting payload:", error);
      return String(payload);
    }
  }
  /**
   * Creates the complete note content with frontmatter and structured format
   */
  createNoteContent(message) {
    try {
      const timestamp = new Date(message.timestamp).toISOString();
      const formattedPayload = this.formatPayload(message.payload);
      return `---
mqtt_source: true
mqtt_topic: ${message.topic}
created: ${timestamp}
updated: ${timestamp}
---

# ${this.generateNoteTitle(message.topic)}

## Source Information
- **MQTT Topic:** \`${message.topic}\`
- **Received:** ${new Date(message.timestamp).toLocaleString()}
- **Payload Type:** ${typeof message.payload}

## Content

${formattedPayload}`;
    } catch (error) {
      console.error("NoteCreator: Error creating note content:", error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      return `# MQTT Message

Error creating note content: ${errorMessage}

Raw message: ${JSON.stringify(message, null, 2)}`;
    }
  }
  /**
   * Creates content for updating existing notes
   */
  createUpdateContent(message) {
    try {
      const timestamp = new Date(message.timestamp).toISOString();
      const formattedPayload = this.formatPayload(message.payload);
      return `## Update - ${new Date(message.timestamp).toLocaleString()}

**Topic:** \`${message.topic}\`
**Payload Type:** ${typeof message.payload}

${formattedPayload}`;
    } catch (error) {
      console.error("NoteCreator: Error creating update content:", error);
      return `## Update - ${(/* @__PURE__ */ new Date()).toLocaleString()}

Error creating update content: ${error}`;
    }
  }
  /**
   * Ensures that the specified folder exists, creating it if necessary
   */
  async ensureFolderExists(folderPath) {
    try {
      const normalizedPath = (0, import_obsidian2.normalizePath)(folderPath);
      const existingFolder = this.app.vault.getAbstractFileByPath(normalizedPath);
      if (existingFolder && existingFolder instanceof import_obsidian2.TFolder) {
        console.log(`NoteCreator: Folder already exists: ${normalizedPath}`);
        return;
      }
      await this.app.vault.createFolder(normalizedPath);
      console.log(`NoteCreator: Created folder: ${normalizedPath}`);
    } catch (error) {
      if (error instanceof Error && error.message.includes("already exists")) {
        console.log(`NoteCreator: Folder already exists: ${folderPath}`);
        return;
      }
      console.error(`NoteCreator: Failed to ensure folder exists: ${folderPath}`, error);
      throw new Error(`Failed to create folder: ${folderPath}`);
    }
  }
  /**
   * Finds an existing note with the given title in the specified folder
   */
  async findExistingNote(title, folder) {
    try {
      const sanitizedFilename = this.sanitizeFilename(title);
      const filePath = (0, import_obsidian2.normalizePath)(`${folder}/${sanitizedFilename}.md`);
      const file = this.app.vault.getAbstractFileByPath(filePath);
      if (file && file instanceof import_obsidian2.TFile) {
        console.log(`NoteCreator: Found existing note: ${file.path}`);
        return file;
      }
      return null;
    } catch (error) {
      console.error(`NoteCreator: Error finding existing note:`, error);
      return null;
    }
  }
  /**
   * Capitalizes the first letter of a string
   */
  capitalizeFirstLetter(str) {
    if (!str || str.length === 0) {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};

// src/main.ts
var MQTTNotePlugin = class extends import_obsidian3.Plugin {
  constructor() {
    super(...arguments);
    this.autoPublishDebounceMap = /* @__PURE__ */ new Map();
  }
  /**
   * Plugin initialization - loads settings, initializes components, registers commands
   */
  async onload() {
    console.log("MQTT Note Plugin: Starting initialization...");
    try {
      await this.loadSettings();
      this.mqttClient = new MQTTClient();
      this.notePublisher = new NotePublisher(this.mqttClient, this.settings, this.app);
      this.noteCreator = new NoteCreator(this.app);
      this.registerCommands();
      this.addSettingTab(new MQTTNoteSettingTab(this.app, this));
      this.setupEventListeners();
      console.log("MQTT Note Plugin: Initialization completed successfully");
      if (this.settings.brokerUrl) {
        await this.connectMQTTClient();
      }
    } catch (error) {
      console.error("MQTT Note Plugin: Failed to initialize:", error);
      new import_obsidian3.Notice("MQTT Note Plugin: Failed to initialize. Check console for details.");
    }
  }
  /**
   * Plugin cleanup - disconnects MQTT client and cleans up resources
   */
  onunload() {
    console.log("MQTT Note Plugin: Starting cleanup...");
    try {
      this.autoPublishDebounceMap.forEach((timeout) => {
        clearTimeout(timeout);
      });
      this.autoPublishDebounceMap.clear();
      if (this.mqttClient) {
        this.mqttClient.disconnect();
      }
      console.log("MQTT Note Plugin: Cleanup completed");
    } catch (error) {
      console.error("MQTT Note Plugin: Error during cleanup:", error);
    }
  }
  /**
   * Loads plugin settings from Obsidian's data storage
   */
  async loadSettings() {
    try {
      const savedSettings = await this.loadData();
      this.settings = Object.assign({}, DEFAULT_SETTINGS, savedSettings);
      console.log("MQTT Note Plugin: Settings loaded successfully");
    } catch (error) {
      console.error("MQTT Note Plugin: Failed to load settings:", error);
      this.settings = DEFAULT_SETTINGS;
    }
  }
  /**
   * Saves plugin settings to Obsidian's data storage
   */
  async saveSettings() {
    try {
      await this.saveData(this.settings);
      if (this.notePublisher) {
        this.notePublisher.updateSettings(this.settings);
      }
      console.log("MQTT Note Plugin: Settings saved successfully");
    } catch (error) {
      console.error("MQTT Note Plugin: Failed to save settings:", error);
      throw error;
    }
  }
  /**
   * Registers all plugin commands with Obsidian
   */
  registerCommands() {
    this.addCommand({
      id: "publish-note-to-mqtt",
      name: "Publish Note to MQTT",
      callback: () => this.publishCurrentNote(),
      hotkeys: []
    });
    this.addCommand({
      id: "toggle-mqtt-connection",
      name: "Toggle MQTT Connection",
      callback: () => this.toggleMQTTConnection(),
      hotkeys: []
    });
    console.log("MQTT Note Plugin: Commands registered successfully");
  }
  /**
   * Sets up event listeners for plugin functionality
   */
  setupEventListeners() {
    if (this.mqttClient) {
      this.mqttClient.on("connected", () => {
        console.log("MQTT Note Plugin: MQTT client connected");
        new import_obsidian3.Notice("MQTT client connected successfully");
      });
      this.mqttClient.on("disconnected", () => {
        console.log("MQTT Note Plugin: MQTT client disconnected");
        new import_obsidian3.Notice("MQTT client disconnected");
      });
      this.mqttClient.on("error", (error) => {
        console.error("MQTT Note Plugin: MQTT client error:", error);
        new import_obsidian3.Notice(`MQTT client error: ${error.message}`);
      });
      this.mqttClient.on("message", (message) => {
        this.handleIncomingMessage(message);
      });
    }
    this.registerEvent(
      this.app.vault.on("modify", (file) => {
        if (file instanceof import_obsidian3.TFile && file.extension === "md") {
          this.handleAutoPublishWithDebounce(file);
        }
      })
    );
    console.log("MQTT Note Plugin: Event listeners set up successfully");
  }
  /**
   * Attempts to connect to MQTT broker using current settings
   */
  async connectMQTTClient() {
    try {
      if (!this.settings.brokerUrl) {
        console.log("MQTT Note Plugin: No broker URL configured, skipping connection");
        return;
      }
      console.log("MQTT Note Plugin: Attempting to connect to MQTT broker...");
      await this.mqttClient.connect(this.settings);
      console.log("MQTT Note Plugin: MQTT client connected successfully");
      if (this.settings.incomingTopic) {
        await this.setupIncomingMessageSubscription();
      }
    } catch (error) {
      console.error("MQTT Note Plugin: Failed to connect to MQTT broker:", error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      new import_obsidian3.Notice(`Failed to connect to MQTT broker: ${errorMessage}`);
    }
  }
  /**
   * Toggles MQTT connection on/off
   */
  async toggleMQTTConnection() {
    try {
      if (this.mqttClient.isConnected()) {
        await this.mqttClient.disconnect();
        new import_obsidian3.Notice("MQTT client disconnected");
      } else {
        if (!this.settings.brokerUrl) {
          new import_obsidian3.Notice("Please configure MQTT settings first");
          return;
        }
        await this.mqttClient.connect(this.settings);
        if (this.settings.incomingTopic) {
          await this.setupIncomingMessageSubscription();
        }
        new import_obsidian3.Notice("MQTT client connected");
      }
    } catch (error) {
      console.error("MQTT Note Plugin: Failed to toggle MQTT connection:", error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      new import_obsidian3.Notice(`Failed to toggle MQTT connection: ${errorMessage}`);
    }
  }
  /**
   * Publishes the currently active note to MQTT
   * Main command handler for manual publishing
   */
  async publishCurrentNote() {
    try {
      console.log("MQTT Note Plugin: Manual publish command triggered");
      const activeFile = this.getCurrentFile();
      if (!activeFile) {
        new import_obsidian3.Notice("No active note to publish");
        return;
      }
      if (!this.validateSettings()) {
        return;
      }
      if (!this.mqttClient.isConnected()) {
        new import_obsidian3.Notice("MQTT client not connected. Please check your settings and connection.");
        return;
      }
      if (!this.notePublisher.shouldPublishNote(activeFile)) {
        new import_obsidian3.Notice("Note not published: mqtt property not set to true in frontmatter");
        return;
      }
      const progressNotice = new import_obsidian3.Notice("Publishing note to MQTT...", 0);
      try {
        await this.notePublisher.publishNote(activeFile);
        const topic = this.notePublisher.generateTopic(activeFile);
        progressNotice.hide();
        new import_obsidian3.Notice(`Note published successfully to topic: ${topic}`);
        console.log(`MQTT Note Plugin: Successfully published note ${activeFile.name} to topic ${topic}`);
      } catch (publishError) {
        progressNotice.hide();
        throw publishError;
      }
    } catch (error) {
      console.error("MQTT Note Plugin: Failed to publish note:", error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      new import_obsidian3.Notice(`Failed to publish note: ${errorMessage}`);
    }
  }
  /**
   * Gets the currently active file from Obsidian
   * Handles various edge cases for file detection
   */
  getCurrentFile() {
    try {
      const activeFile = this.app.workspace.getActiveFile();
      if (activeFile) {
        console.log(`MQTT Note Plugin: Active file detected: ${activeFile.name}`);
        return activeFile;
      }
      const activeView = this.app.workspace.getActiveViewOfType(import_obsidian3.MarkdownView);
      if (activeView && activeView.file) {
        console.log(`MQTT Note Plugin: Active file from view: ${activeView.file.name}`);
        return activeView.file;
      }
      console.log("MQTT Note Plugin: No active file found");
      return null;
    } catch (error) {
      console.error("MQTT Note Plugin: Error getting current file:", error);
      return null;
    }
  }
  /**
   * Validates that required settings are configured
   */
  validateSettings() {
    try {
      if (!this.settings.brokerUrl) {
        new import_obsidian3.Notice("Please configure MQTT broker URL in settings first");
        return false;
      }
      if (!this.settings.outgoingPrefix) {
        new import_obsidian3.Notice("Please configure outgoing prefix in settings first");
        return false;
      }
      return true;
    } catch (error) {
      console.error("MQTT Note Plugin: Error validating settings:", error);
      new import_obsidian3.Notice("Error validating settings. Please check plugin configuration.");
      return false;
    }
  }
  /**
   * Handles automatic publishing when notes are saved (if enabled)
   */
  async handleAutoPublish(file) {
    try {
      if (!this.settings.automaticPublishOnSave) {
        return;
      }
      if (!this.mqttClient.isConnected()) {
        console.log("MQTT Note Plugin: Auto-publish skipped - MQTT client not connected");
        return;
      }
      if (!this.notePublisher.shouldPublishNote(file)) {
        console.log(`MQTT Note Plugin: Auto-publish skipped - note ${file.name} does not meet criteria`);
        return;
      }
      console.log(`MQTT Note Plugin: Auto-publishing note ${file.name}`);
      await this.notePublisher.publishNote(file);
      const topic = this.notePublisher.generateTopic(file);
      console.log(`MQTT Note Plugin: Auto-published note ${file.name} to topic ${topic}`);
    } catch (error) {
      console.error("MQTT Note Plugin: Auto-publish failed:", error);
    }
  }
  /**
   * Handles auto-publish with debouncing to prevent spam on rapid file modifications
   * @param file The file that was modified
   */
  handleAutoPublishWithDebounce(file) {
    const debounceKey = file.path;
    const debounceDelay = 1e3;
    const existingTimeout = this.autoPublishDebounceMap.get(debounceKey);
    if (existingTimeout) {
      clearTimeout(existingTimeout);
    }
    const newTimeout = setTimeout(() => {
      this.handleAutoPublish(file);
      this.autoPublishDebounceMap.delete(debounceKey);
    }, debounceDelay);
    this.autoPublishDebounceMap.set(debounceKey, newTimeout);
  }
  /**
   * Sets up subscription for incoming MQTT messages
   */
  async setupIncomingMessageSubscription() {
    try {
      if (!this.settings.incomingTopic) {
        console.log("MQTT Note Plugin: No incoming topic configured, skipping subscription");
        return;
      }
      console.log(`MQTT Note Plugin: Setting up subscription for topic: ${this.settings.incomingTopic}`);
      await this.mqttClient.subscribe(this.settings.incomingTopic, (message) => {
        console.log(`MQTT Note Plugin: Received message from subscribed topic: ${message.topic}`);
      });
      console.log(`MQTT Note Plugin: Successfully subscribed to topic: ${this.settings.incomingTopic}`);
    } catch (error) {
      console.error("MQTT Note Plugin: Failed to set up incoming message subscription:", error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      new import_obsidian3.Notice(`Failed to subscribe to incoming messages: ${errorMessage}`);
    }
  }
  /**
   * Handles incoming MQTT messages by routing them to the NoteCreator
   */
  async handleIncomingMessage(message) {
    try {
      console.log(`MQTT Note Plugin: Handling incoming message from topic: ${message.topic}`);
      if (!this.settings.incomingNoteFolder) {
        console.log("MQTT Note Plugin: No incoming note folder configured, skipping message");
        return;
      }
      await this.noteCreator.handleIncomingMessage(message, this.settings);
      console.log(`MQTT Note Plugin: Successfully processed incoming message from topic: ${message.topic}`);
    } catch (error) {
      console.error("MQTT Note Plugin: Failed to handle incoming message:", error);
    }
  }
};
/*! Bundled license information:

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
