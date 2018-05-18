'use strict';

System.register(['aurelia-framework', 'aurelia-validation', 'aurelia-templating-resources', '@fortawesome/fontawesome', './utils/normalize-icon-spec.util', './utils/object-with-keys.util', './utils/classlist.util', './errors/warn-if-icon-html-missing', './errors/warn-if-icon-spec-missing', './errors/not-found-icon-html'], function (_export, _context) {
  "use strict";

  var containerless, customElement, bindable, bindingMode, inject, inlineView, noView, ViewCompiler, ViewSlot, Container, ViewResources, ValidationRules, HTMLSanitizer, fontawesome, faNormalizeIconSpec, objectWithKey, faClassList, faWarnIfIconHtmlMissing, faWarnIfIconSpecMissing, faNotFoundIconHtml, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, FontAwesomeIcon;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaFramework) {
      containerless = _aureliaFramework.containerless;
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
      bindingMode = _aureliaFramework.bindingMode;
      inject = _aureliaFramework.inject;
      inlineView = _aureliaFramework.inlineView;
      noView = _aureliaFramework.noView;
      ViewCompiler = _aureliaFramework.ViewCompiler;
      ViewSlot = _aureliaFramework.ViewSlot;
      Container = _aureliaFramework.Container;
      ViewResources = _aureliaFramework.ViewResources;
    }, function (_aureliaValidation) {
      ValidationRules = _aureliaValidation.ValidationRules;
    }, function (_aureliaTemplatingResources) {
      HTMLSanitizer = _aureliaTemplatingResources.HTMLSanitizer;
    }, function (_fortawesomeFontawesome) {
      fontawesome = _fortawesomeFontawesome.default;
    }, function (_utilsNormalizeIconSpecUtil) {
      faNormalizeIconSpec = _utilsNormalizeIconSpecUtil.faNormalizeIconSpec;
    }, function (_utilsObjectWithKeysUtil) {
      objectWithKey = _utilsObjectWithKeysUtil.objectWithKey;
    }, function (_utilsClasslistUtil) {
      faClassList = _utilsClasslistUtil.faClassList;
    }, function (_errorsWarnIfIconHtmlMissing) {
      faWarnIfIconHtmlMissing = _errorsWarnIfIconHtmlMissing.faWarnIfIconHtmlMissing;
    }, function (_errorsWarnIfIconSpecMissing) {
      faWarnIfIconSpecMissing = _errorsWarnIfIconSpecMissing.faWarnIfIconSpecMissing;
    }, function (_errorsNotFoundIconHtml) {
      faNotFoundIconHtml = _errorsNotFoundIconHtml.faNotFoundIconHtml;
    }],
    execute: function () {
      _export('FontAwesomeIcon', FontAwesomeIcon = (_dec = customElement('font-awesome-icon'), _dec2 = inject(HTMLSanitizer, ViewCompiler, ViewSlot, Container, ViewResources), _dec3 = bindable({ changeHandler: 'onChanges' }), _dec4 = bindable({ changeHandler: 'onChanges' }), _dec5 = bindable({ changeHandler: 'onChanges' }), _dec6 = bindable({ changeHandler: 'onChanges' }), _dec7 = bindable({ changeHandler: 'onChanges' }), _dec8 = bindable({ changeHandler: 'onChanges' }), _dec9 = bindable({ changeHandler: 'onChanges' }), _dec10 = bindable({ changeHandler: 'onChanges' }), _dec11 = bindable({ changeHandler: 'onChanges' }), _dec12 = bindable({ changeHandler: 'onChanges' }), _dec13 = bindable({ changeHandler: 'onChanges' }), _dec14 = bindable({ changeHandler: 'onChanges' }), _dec15 = bindable({ changeHandler: 'onChanges' }), _dec(_class = containerless(_class = noView(_class = _dec2(_class = (_class2 = function () {
        function FontAwesomeIcon(sanitizer, vc, vs, container, resources) {
          _classCallCheck(this, FontAwesomeIcon);

          _initDefineProp(this, 'border', _descriptor, this);

          _initDefineProp(this, 'fixedWidth', _descriptor2, this);

          _initDefineProp(this, 'flip', _descriptor3, this);

          _initDefineProp(this, 'icon', _descriptor4, this);

          _initDefineProp(this, 'mask', _descriptor5, this);

          _initDefineProp(this, 'listItem', _descriptor6, this);

          _initDefineProp(this, 'pull', _descriptor7, this);

          _initDefineProp(this, 'pulse', _descriptor8, this);

          _initDefineProp(this, 'rotation', _descriptor9, this);

          _initDefineProp(this, 'size', _descriptor10, this);

          _initDefineProp(this, 'spin', _descriptor11, this);

          _initDefineProp(this, 'transform', _descriptor12, this);

          _initDefineProp(this, 'symbol', _descriptor13, this);

          this.viewCompiler = vc;
          this.viewSlot = vs;
          this.container = container;
          this.resources = resources;

          this.sanitizer = sanitizer;
          this.iconHTML = "";
          this.params = null;
          this._icon = null;
          this.iconSpec = null;
        }

        FontAwesomeIcon.prototype.created = function created(parent, view) {
          this.view = view;
        };

        FontAwesomeIcon.prototype.bind = function bind(bindingContext, overrideContext) {
          this.bindingContext = bindingContext;
          this.updateIconSpec();
          this.updateParams();
          this.updateIcon();
          this.renderIcon();
        };

        FontAwesomeIcon.prototype.attached = function attached() {};

        FontAwesomeIcon.prototype.onChanges = function onChanges(oldValue, newValue) {
          if (newValue !== oldValue) {
            this.updateIconSpec();
            this.updateParams();
            this.updateIcon();
            this.renderIcon();
          }
        };

        FontAwesomeIcon.prototype.updateIconSpec = function updateIconSpec() {
          this.iconSpec = faNormalizeIconSpec(this.icon);
        };

        FontAwesomeIcon.prototype.updateParams = function updateParams() {
          var classOpts = {
            flip: this.flip,
            spin: this.spin !== false,
            pulse: this.pulse !== false,
            border: this.border !== false,
            inverse: this.inverse,
            listItem: this.listItem !== false,
            size: this.size || null,
            pull: this.pull || null,
            rotate: this.rotate || null,
            fixedWidth: this.fixedWidth !== false
          };

          var classes = objectWithKey('classes', [].concat(faClassList(classOpts), this.classes));
          var mask = objectWithKey('mask', faNormalizeIconSpec(this.mask));
          var parsedTransform = typeof this.transform === 'string' ? fontawesome.parse.transform(this.transform) : this.transform;
          var transform = objectWithKey('transform', parsedTransform);

          var title = this.title,
              styles = this.styles,
              symbol = this.symbol;

          this.params = Object.assign({}, { title: title }, { styles: styles }, { symbol: symbol }, classes, transform, mask);
        };

        FontAwesomeIcon.prototype.updateIcon = function updateIcon() {
          this._icon = fontawesome.icon(this.iconSpec, this.params);
        };

        FontAwesomeIcon.prototype.renderIcon = function renderIcon() {

          faWarnIfIconSpecMissing(this.iconSpec);
          faWarnIfIconHtmlMissing(this._icon, this.iconSpec);

          this.iconHTML = this._icon ? this._icon.html.join('\n') : faNotFoundIconHtml;

          var viewFactory = this.viewCompiler.compile('<template>' + this.iconHTML + '</template>', this.resources);
          var view = viewFactory.create(this.container, this.bindingContext);
          this.viewSlot.removeAll();
          this.viewSlot.add(view);
          this.viewSlot.attached();
        };

        return FontAwesomeIcon;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'border', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'fixedWidth', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'flip', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mask', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'listItem', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'pull', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'pulse', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'rotation', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'size', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'spin', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'transform', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'symbol', [_dec15], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class) || _class) || _class));

      _export('FontAwesomeIcon', FontAwesomeIcon);

      ValidationRules.ensure('flip').satisfies(function (value) {
        return ['horizontal', 'vertical', 'both'].indexOf(value) > -1;
      }).ensure('icon').required().ensure('pull').satisfies(function (value) {
        return ['right', 'left'].indexOf(value) > -1;
      }).ensure('rotation').satisfies(function (value) {
        return [90, 180, 270].indexOf(value) > -1;
      }).ensure('rotation').satisfies(function (value) {
        return ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].indexOf(value) > -1;
      }).on(FontAwesomeIcon);
    }
  };
});