// WARNING! This file contains some subset of JS that is not supported by type inference.
// You can try checking 'Transpile to ES5' checkbox if you want the types to be inferred
'use strict';
(window.webpackJsonp = window.webpackJsonp || []).push([[28], {
  "83QH" : function(sometotal, value, i) {
    i.d(value, "a", function() {
      return a;
    });
    var self = i("D57K");
    var util = i("EM62");
    var b = i("OZ4H");
    var x = i("AA3q");
    let a = (() => {
      class FormulaEditor {
        constructor(mathDialog, equation) {
          this.dialog = mathDialog;
          this.sharedService = equation;
        }
        openDialog(data) {
          return Object(self.a)(this, void 0, void 0, function*() {
            if (this.dialog.openDialogs.some((timeline_mode) => {
              return "feedback-dialog-container" == timeline_mode.id;
            })) {
              return void $("#feedback-dialog-container").closest(".cdk-global-overlay-wrapper").css("z-index", ++this.sharedService.zIndexForDialog);
            }
            if (!data.id) {
              data.id = "feedback-dialog-container";
            }
            const that = yield i.e(9).then(i.bind(null, "qAfB"));
            this.dialog.open(that.DialogFeedbackModule.getComponent(), data).afterOpened().subscribe((canCreateDiscussions) => {
              $("#feedback-dialog-container").closest(".cdk-global-overlay-wrapper").css("z-index", ++this.sharedService.zIndexForDialog);
              $("#feedback-dialog-container").closest(".cdk-global-overlay-wrapper").addClass("z-index-manipulated");
            });
          });
        }
      }
      return FormulaEditor.\u0275fac = function(boardManager) {
        return new (boardManager || FormulaEditor)(util.cc(b.b), util.cc(x.a));
      }, FormulaEditor.\u0275prov = util.Ob({
        token : FormulaEditor,
        factory : FormulaEditor.\u0275fac,
        providedIn : "root"
      }), FormulaEditor;
    })();
  },
  "9e3K" : function(sometotal, value, i) {
    i.d(value, "a", function() {
      return c;
    });
    var self = i("D57K");
    var util = i("EM62");
    var b = i("OZ4H");
    var x = i("AA3q");
    var a = i("grJQ");
    let c = (() => {
      class FormulaEditor {
        constructor(mathDialog, equation, context) {
          this.dialog = mathDialog;
          this.sharedService = equation;
          this.keyboardShortcutsObj = context;
        }
        openDialog(data) {
          return Object(self.a)(this, void 0, void 0, function*() {
            if (this.dialog.openDialogs.some((timeline_mode) => {
              return "calculator-dialog-container" == timeline_mode.id;
            })) {
              return void $("#calculator-dialog-container").closest(".cdk-global-overlay-wrapper").css("z-index", ++this.sharedService.zIndexForDialog);
            }
            if (!data.id) {
              data.id = "calculator-dialog-container";
            }
            const that = yield i.e(6).then(i.bind(null, "uHE1"));
            this.dialog.open(that.DialogCalculatorModule.getComponent(), data).afterOpened().subscribe((canCreateDiscussions) => {
              $("#calculator-dialog-container").closest(".cdk-global-overlay-wrapper").css("z-index", ++this.sharedService.zIndexForDialog);
              $("#calculator-dialog-container").closest(".cdk-global-overlay-wrapper").addClass("z-index-manipulated");
            });
          });
        }
        initializeKeyboardShortcuts() {
          this.keyboardShortcutsObj._shortcutSettings.onCalculatorOpen = true;
        }
        resetKeyboardShortcuts() {
          this.keyboardShortcutsObj._shortcutSettings.onCalculatorOpen = false;
        }
        onKeyDown(keystroke) {
          this.keyboardShortcutsObj.onKeyDown(keystroke);
        }
      }
      return FormulaEditor.\u0275fac = function(boardManager) {
        return new (boardManager || FormulaEditor)(util.cc(b.b), util.cc(x.a), util.cc(a.a));
      }, FormulaEditor.\u0275prov = util.Ob({
        token : FormulaEditor,
        factory : FormulaEditor.\u0275fac,
        providedIn : "root"
      }), FormulaEditor;
    })();
  },
  ZTnr : function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return d;
    });
    var window = __webpack_require__("8lHc");
    var constants = __webpack_require__("pBxc");
    var __WEBPACK_LABELED_MODULE__3 = __webpack_require__("166K");
    var assert = __webpack_require__("EM62");
    var event = __webpack_require__("AA3q");
    var c = __webpack_require__("OZ4H");
    let d = (() => {
      class Utils {
        constructor(key, url) {
          this.sharedService = key;
          this.dialog = url;
          this.nightModeListener = null;
          this.nightModeOverridden = false;
          this.nightModeActive = false;
          this.nightModeListener = null;
        }
        get isActive() {
          return this.nightModeActive && !this.nightModeOverridden;
        }
        get isOverridden() {
          return this.nightModeOverridden;
        }
        overrideNightMode() {
          let value = new Date(Date.now());
          value.setDate(value.getDate() + 1);
          sessionStorage.setItem("autoNightModeOverridden" + this.sharedService._testInfo.subscriptionId, JSON.stringify(value));
          this.nightModeOverridden = true;
          if (this.nightModeActive) {
            this.switchFromNightMode();
            this.nightModeActive = false;
          }
        }
        reinstateNightMode() {
          this.startListener();
        }
        disableNightMode() {
          this.nightModeListener.unsubscribe();
          sessionStorage.removeItem("autoNightModeOverridden" + this.sharedService._testInfo.subscriptionId);
          this.nightModeOverridden = false;
          if (this.nightModeActive) {
            this.nightModeActive = false;
            this.switchFromNightMode();
          }
        }
        startListener() {
          let options = this.sharedService._userPreferences.jsonSettings.testPreferences.autoNightMode;
          let time = JSON.parse(sessionStorage.getItem("autoNightModeOverridden" + this.sharedService._testInfo.subscriptionId));
          if (null != time && null != time && (new Date(time)).getTime() >= Date.now() && (this.nightModeOverridden = true), null != this.nightModeListener && this.stopListener(), options.isTurnedOn) {
            var d = new Date;
            var a = this.getDateObject(options.startHour, options.startMinute, options.startAmPm);
            var c = this.getDateObject(options.endHour, options.endMinute, options.endAmPm);
            if (c < a) {
              c.setDate(c.getDate() + 1);
            }
            if (d < a) {
              a.setDate(a.getDate() - 1);
              c.setDate(c.getDate() - 1);
            }
            if (a <= d && d < c) {
              if (!this.nightModeOverridden) {
                this.switchToNightMode();
              }
              this.nightModeListener = Object(window.a)(c.getTime() - d.getTime()).subscribe((canCreateDiscussions) => {
                if (this.nightModeOverridden) {
                  return;
                }
                if (1 == this.sharedService._userPreferences.jsonSettings.testPreferences.colorMode) {
                  return;
                }
                let b = new __WEBPACK_LABELED_MODULE__3.a;
                b.Title = "Switch Out of Night Mode";
                b.Type = "Confirm";
                b.isConfirmBox = true;
                b.OKButtonText = "Switch now";
                b.CancelButtonText = "Switch on  next test";
                b.Description = "Based on your preferences, your interface is about to shift out of night mode";
                this.dialog.open(constants.a, {
                  width : "350px",
                  data : b,
                  disableClose : true,
                  panelClass : "myapp-no-padding-dialog"
                }).beforeClosed().subscribe((canCreateDiscussions) => {
                  if (canCreateDiscussions) {
                    this.switchFromNightMode();
                  } else {
                    this.nightModeOverridden = true;
                    this.nightModeActive = false;
                  }
                  this.nightModeListener.unsubscribe();
                  setTimeout(() => {
                    this.startListener();
                  }, 1E3);
                });
              });
            } else {
              if (d > c) {
                a.setDate(a.getDate() + 1);
              }
              if (!this.nightModeOverridden) {
                this.switchFromNightMode();
              }
              this.nightModeListener = Object(window.a)(a.getTime() - d.getTime()).subscribe((canCreateDiscussions) => {
                if (d > c && a.setDate(a.getDate() + 1), this.nightModeOverridden = false, 1 == this.sharedService._userPreferences.jsonSettings.testPreferences.colorMode) {
                  return;
                }
                let b = new __WEBPACK_LABELED_MODULE__3.a;
                b.Title = "Switch To Night Mode";
                b.Type = "Confirm";
                b.isConfirmBox = true;
                b.OKButtonText = "Switch now";
                b.CancelButtonText = "Switch on  next test";
                b.Description = "Based on your preferences, your interface is about to shift to night mode";
                this.dialog.open(constants.a, {
                  width : "350px",
                  data : b,
                  disableClose : true,
                  panelClass : "myapp-no-padding-dialog"
                }).beforeClosed().subscribe((canCreateDiscussions) => {
                  if (canCreateDiscussions) {
                    this.switchToNightMode();
                  } else {
                    this.nightModeOverridden = true;
                  }
                  this.nightModeListener.unsubscribe();
                  setTimeout(() => {
                    this.startListener();
                  }, 1E3);
                });
              });
            }
          } else {
            this.stopListener();
          }
        }
        stopListener() {
          if (null != this.nightModeListener) {
            this.nightModeListener.unsubscribe();
          }
          this.nightModeListener = null;
        }
        getDateObject(time, date, object) {
          let result = new Date;
          result.setMinutes(parseInt(date));
          var v = parseInt(time);
          return 12 == v && (v = 0), "PM" == object && (v = v + 12), result.setHours(v), result.setSeconds(0), result;
        }
        switchToNightMode() {
          let deps = ["light", "dark", "sepia", "grey"];
          var name;
          for (name of deps) {
            document.body.classList.remove("theme-" + name);
          }
          document.body.classList.add("theme-dark");
          this.nightModeActive = true;
        }
        switchFromNightMode() {
          let e = ["light", "dark", "sepia", "grey"];
          let fixWheelDelta = this.sharedService._userPreferences.jsonSettings.testPreferences.colorMode;
          document.body.classList.remove("theme-dark");
          if (this.sharedService._testInterfaceConfig.availableColorModes(this.sharedService._userPreferences.jsonSettings.testPreferences.theme).includes(this.sharedService._userPreferences.jsonSettings.testPreferences.colorMode)) {
            document.body.classList.add("theme-" + e[fixWheelDelta]);
          } else {
            document.body.classList.add("theme-" + e[0]);
          }
          this.nightModeActive = false;
        }
        ngOnDestroy() {
          if (null != this.nightModeListener) {
            this.nightModeListener.unsubscribe();
          }
        }
      }
      return Utils.\u0275fac = function(canCreateDiscussions) {
        return new (canCreateDiscussions || Utils)(assert.cc(event.a), assert.cc(c.b));
      }, Utils.\u0275prov = assert.Ob({
        token : Utils,
        factory : Utils.\u0275fac,
        providedIn : "root"
      }), Utils;
    })();
  },
  awpD : function(sometotal, value, $) {
    $.d(value, "a", function() {
      return d;
    });
    var e = $("D57K");
    var params = $("dBte");
    var self = $("EM62");
    var m = $("OZ4H");
    var feedback = $("AA3q");
    var event = $("e9Qz");
    let d = (() => {
      class QuickBase {
        constructor(action, options, callback) {
          this.dialog = action;
          this.sharedService = options;
          this.dockingService = callback;
          this.dialogId = "labvalues-dialog-container";
          this.tabIndex = 0;
          this.enableSI = true;
          this.enableSIButton = false;
          this.searchQuery = "";
          this.dockingService.dialogServices.set(params.b.labvalues, this);
          const logIntervalId = setInterval(() => {
            if (this.sharedService._clientConfig) {
              clearInterval(logIntervalId);
              if (this.sharedService._clientConfig.qBankId == params.h.pa) {
                this.enableSI = true;
                this.enableSIButton = false;
              } else {
                if (this.sharedService._clientConfig.qBankId == params.h.naplex) {
                  this.enableSI = false;
                  this.enableSIButton = false;
                } else {
                  this.enableSI = false;
                  this.enableSIButton = true;
                }
              }
            }
          }, 100);
        }
        get isDocked() {
          return this.sharedService._userPreferences.jsonSettings.testPreferences.dockedElements.labvalues;
        }
        openDialog(options) {
          return Object(e.a)(this, void 0, void 0, function*() {
            if (this.dialog.openDialogs.some((timeline_mode) => {
              return "labvalues-dialog-container" == timeline_mode.id;
            })) {
              return void $("#labvalues-dialog-container").closest(".cdk-global-overlay-wrapper").css("z-index", ++this.sharedService.zIndexForDialog);
            }
            if (!options.id) {
              options.id = "labvalues-dialog-container";
            }
            const that = yield Promise.all([$.e(3), $.e(12)]).then($.bind(null, "A6jo"));
            this.setDialogConfigSizeAndPosition(options);
            this.dialogRef = this.dialog.open(that.DialogLabvaluesModule.getComponent(), options);
            if (this.sharedService._toBeDocked == params.b.labvalues) {
              this.addDockingClassToDialogWrapperBeforeOpening(this.dialogRef);
            }
            this.dialogRef.afterOpened().subscribe((canCreateDiscussions) => {
              if (this.sharedService._toBeDocked == params.b.labvalues) {
                this.dockingService.dockDialog(params.b.labvalues);
              }
              $("#labvalues-dialog-container").closest(".cdk-global-overlay-wrapper").css("z-index", ++this.sharedService.zIndexForDialog);
              $("#labvalues-dialog-container").closest(".cdk-global-overlay-wrapper").addClass("z-index-manipulated");
              $("#labvalues-dialog-container").closest(".cdk-global-overlay-wrapper").addClass("lab-values-wrapper");
            });
            this.dialogRef.beforeClosed().subscribe((canCreateDiscussions) => {
              if (!(this.isDocked || this.sharedService._userPreferences.jsonSettings.testPreferences.theme == params.o.nbme)) {
                this.saveDialogPositionAndSize();
              }
            });
            this.dialogRef.afterClosed().subscribe((canCreateDiscussions) => {
              if (this.isDocked) {
                this.dockingService.openDialogToBeDocked();
              }
            });
          });
        }
        setDialogConfigSizeAndPosition(options) {
          if (this.width) {
            options.width = this.width;
          } else {
            if (options.width) {
              this.width = options.width;
            }
          }
          if (this.height) {
            options.height = this.height;
          } else {
            if (options.height) {
              this.height = options.height;
            }
          }
          if (this.position) {
            options.data.freeDragPosition = this.position;
          } else {
            if (options.data.freeDragPosition) {
              this.position = options.data.freeDragPosition;
            }
          }
        }
        addDockingClassToDialogWrapperBeforeOpening(options) {
          if (options._overlayRef.overlayElement) {
            options._overlayRef.overlayElement.parentElement.className += " docked-dialog";
            if (this.sharedService._currentQuestion.isMarked) {
              options._overlayRef.overlayElement.parentElement.className += " marked-question";
            }
            options._overlayRef.overlayElement.parentElement.style.width = this.dockingService.dockedDialogWidth + "px";
          }
        }
        saveDialogPositionAndSize() {
          const arrowDiv = $("#" + this.dialogId).closest(".cdk-overlay-pane");
          if (arrowDiv) {
            this.width = $(arrowDiv).css("width");
            this.height = $(arrowDiv).css("height");
            let sArrDayId = this.getTransform($(arrowDiv));
            this.position = {
              x : parseInt(sArrDayId[0]),
              y : parseInt(sArrDayId[1])
            };
          }
        }
        saveDialogPositionAndSizeBeforeDocking() {
          if (!(this.isDocked || this.sharedService._userPreferences.jsonSettings.testPreferences.theme == params.o.nbme)) {
            this.saveDialogPositionAndSize();
          }
        }
        setDialogPositionAndSizeAfterUndock() {
          if (this.sharedService._userPreferences.jsonSettings.testPreferences.theme != params.o.nbme) {
            this.dialogRef.componentInstance.getDialogResizeDirective().width = parseFloat(this.width.replace(/[^0-9.]/g, ""));
            this.dialogRef.componentInstance.getDialogResizeDirective().height = parseFloat(this.height.replace(/[^0-9.]/g, ""));
            this.dialogRef.componentInstance.getDialogResizeDirective().updateSize();
            if (this.position) {
              this.dialogRef.componentInstance.labvaluesUworldComponent.freeDragPosition = this.position;
            }
          }
        }
        getTransform(obj) {
          const e = (obj.css("-webkit-transform") || obj.css("-moz-transform") || obj.css("-ms-transform") || obj.css("-o-transform") || obj.css("transform")).replace(/[^0-9\-.,]/g, "").split(",");
          return [e[12] || e[4], e[13] || e[5]];
        }
      }
      return QuickBase.\u0275fac = function(canCreateDiscussions) {
        return new (canCreateDiscussions || QuickBase)(self.cc(m.b), self.cc(feedback.a), self.cc(event.a));
      }, QuickBase.\u0275prov = self.Ob({
        token : QuickBase,
        factory : QuickBase.\u0275fac,
        providedIn : "root"
      }), QuickBase;
    })();
  },
  ee9o : function(sometotal, value, i) {
    i.d(value, "a", function() {
      return l;
    });
    var self = i("D57K");
    var m = i("ZTXN");
    class o {
    }
    var d = i("dBte");
    var util = i("EM62");
    var b = i("OZ4H");
    var x = i("AA3q");
    let l = (() => {
      class FlyaroundController {
        constructor(mathDialog, equation) {
          this.dialog = mathDialog;
          this.sharedService = equation;
          this._saveExhibitsSizeAndPosition = new m.a;
        }
        openDialog(e) {
          if (this.dialog.openDialogs.some((p) => {
            return p.id == e.id;
          })) {
            $("#" + e.id).closest(".cdk-global-overlay-wrapper").css("z-index", ++this.sharedService.zIndexForDialog);
          } else {
            if (this.dialog.openDialogs.some((currentTab) => {
              return currentTab.id.startsWith("exhibit");
            }) && this.sharedService._userPreferences.jsonSettings.testPreferences.theme != d.o.cpa) {
              const rejectingServer = this.dialog.openDialogs.find((currentTab) => {
                return currentTab.id.startsWith("exhibit");
              });
              rejectingServer.afterClosed().subscribe((canCreateDiscussions) => {
                this.openNewExhibitDialog(e);
              });
              rejectingServer.close();
            } else {
              const width0 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
              const i = (width0 - Math.min(1E3, .5 * width0)) / 2;
              e.data.freeDragPosition = {
                x : 2 * i / 3,
                y : 0
              };
              this.dialog.openDialogs.forEach((currentTab, n) => {
                if (currentTab.id.startsWith("exhibit")) {
                  $("#" + e.id).closest(".cdk-global-overlay-wrapper").css("z-index", ++this.sharedService.zIndexForDialog);
                  e.data.freeDragPosition = {
                    x : 2 * i / 3 + 20 * (n + 1),
                    y : 20 * (n + 1)
                  };
                }
              });
              this.openNewExhibitDialog(e);
            }
          }
        }
        openNewExhibitDialog(params) {
          return Object(self.a)(this, void 0, void 0, function*() {
            const that = yield Promise.all([i.e(3), i.e(8)]).then(i.bind(null, "RVpu"));
            let item = this.dialog.open(that.DialogExhibitsModule.getComponent(), params);
            item.afterOpened().subscribe((canCreateDiscussions) => {
              $("#" + params.id).closest(".cdk-global-overlay-wrapper").css("z-index", ++this.sharedService.zIndexForDialog);
              $("#" + params.id).closest(".cdk-global-overlay-wrapper").addClass("z-index-manipulated");
            });
            item.beforeClosed().subscribe((canCreateDiscussions) => {
              setTimeout(() => {
                const arrowDiv = $("#" + item.id).closest(".cdk-overlay-pane");
                if (arrowDiv) {
                  let artistTrack = parseInt($(arrowDiv).css("width"), 10);
                  let i = parseInt($(arrowDiv).css("height"), 10);
                  let sArrDayId = this.getTransform($(arrowDiv));
                  this.addExhibitInfoInCollection(item.id, artistTrack, i, parseInt(sArrDayId[0]), parseInt(sArrDayId[1]), item.componentInstance.dialogMaximized);
                }
              }, 0);
            });
          });
        }
        setExhibitCollectionInStorage(delta) {
          sessionStorage.setItem("uw-exhibit-dialog-info-" + this.sharedService._testInterfaceConfig.subscriptionId, JSON.stringify(Array.from(delta.entries())));
        }
        getExhibitCollectionFromStorage() {
          return sessionStorage.getItem("uw-exhibit-dialog-info-" + this.sharedService._testInterfaceConfig.subscriptionId) ? new Map(JSON.parse(sessionStorage.getItem("uw-exhibit-dialog-info-" + this.sharedService._testInterfaceConfig.subscriptionId))) : new Map;
        }
        addExhibitInfoInCollection(e, text, node, n, decimals, previewSchema = false) {
          let a = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
          let diff1 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          let overlay = this.getExhibitCollectionFromStorage();
          let preview = new o;
          preview.dialogMaximized = previewSchema;
          preview.height = node;
          preview.width = text;
          preview.position_x = n + diff1 / 2 - preview.width / 2;
          preview.position_y = decimals + a / 2 - preview.height / 2;
          overlay.set(e, preview);
          this.setExhibitCollectionInStorage(overlay);
        }
        getTransform(el) {
          const e = (el.css("-webkit-transform") || el.css("-moz-transform") || el.css("-ms-transform") || el.css("-o-transform") || el.css("transform")).replace(/[^0-9\-.,]/g, "").split(",");
          return [e[12] || e[4], e[13] || e[5]];
        }
      }
      return FlyaroundController.\u0275fac = function(canCreateDiscussions) {
        return new (canCreateDiscussions || FlyaroundController)(util.cc(b.b), util.cc(x.a));
      }, FlyaroundController.\u0275prov = util.Ob({
        token : FlyaroundController,
        factory : FlyaroundController.\u0275fac,
        providedIn : "root"
      }), FlyaroundController;
    })();
  },
  grJQ : function(markRead, msg, $) {
    $.d(msg, "a", function() {
      return a;
    });
    var n = $("ZTXN");
    var _this = $("dBte");
    var t = $("EM62");
    var event = $("AA3q");
    let a = (() => {
      class View {
        constructor(options) {
          this.sharedService = options;
          this._onKeyboardShortcut = new n.a;
          this._onAnswerSelection = new n.a;
          this._onDialogClose = new n.a;
          this._reviewforQuestions = false;
          this._shortcutSettings = {
            enableReviewModeMcat : false,
            enableAnswerSelect : false,
            disableKeyboardEvents : false,
            toggleHighlightMenu : false,
            isHighlightMenuOpen : false,
            onEscape : [],
            onMarkQuestion : false,
            onReviewQuestion : false,
            onNextQuestion : false,
            onPreviousQuestion : false,
            onRedirectionQuestions : false,
            onSubmit : false,
            onReviewAllQuestions : false,
            onReviewIncompleteQuestions : false,
            onReviewMarkedQuestions : false,
            onReviewEndSection : false,
            onNavOpen : false,
            onPeriodicTableOpen : false,
            onStrikeout : false,
            onHighlight : false,
            onFeedbackOpen : false,
            onLabValuesOpen : false,
            onFlagQuestion : false,
            onFeedbackOpenMcat : false,
            onNotesOpen : false,
            onCalculatorOpen : false
          };
        }
        keydownEventIsOutsideDockContainer(to) {
          if (!to) {
            return false;
          }
          let messageElement = to.target;
          for (; messageElement;) {
            if (messageElement.classList.contains("docked-dialog")) {
              return false;
            }
            messageElement = messageElement.parentElement;
          }
          return true;
        }
        onKeyDown(e) {
          if (this._shortcutSettings.onNextQuestion && this._shortcutSettings.onPreviousQuestion && (e.altKey && (e.keyCode == _this.m.alph_p || e.keyCode == _this.m.alph_n) || e.keyCode == _this.m.leftarrow || e.keyCode == _this.m.rightarrow) && this.keydownEventIsOutsideDockContainer(e)) {
            this.handleNavigationEvent(e);
          }
          if (this._shortcutSettings.enableAnswerSelect) {
            if (!e.altKey) {
              this.handleAnswerSelectEvent(e.keyCode, e);
            }
          }
          if (this._shortcutSettings.onMarkQuestion) {
            this.handleMarkEvent(e);
          }
          if (this._shortcutSettings.onNavOpen) {
            this.handleNavOpenEvent(e);
          }
          if (this._shortcutSettings.onFeedbackOpen) {
            this.handleFeedbackOpenEvent(e);
          }
          if (this._shortcutSettings.onLabValuesOpen) {
            this.handleLabValuesEvent(e);
          }
          if (this._shortcutSettings.onPeriodicTableOpen) {
            this.handlePeriodicTableEvent(e);
          }
          if (this._shortcutSettings.onEscape.length > 0 && (e.keyCode == _this.m.esc || e.altKey && e.keyCode == _this.m.alph_c)) {
            this.handleEscEvent();
          }
          if (this._shortcutSettings.onHighlight) {
            this.handleHighlightEvent(e);
          }
          if (this._shortcutSettings.onStrikeout) {
            this.handleStrikeoutEvent(e);
          }
          if (this._shortcutSettings.onSubmit) {
            this.handleSubmitEvent(e);
          }
          if (this._shortcutSettings.onNotesOpen) {
            this.handleNotesEvent(e);
          }
          if (this._shortcutSettings.onCalculatorOpen) {
            this.handleCalculatorEvent(e);
          }
          if (this._shortcutSettings.onReviewAllQuestions) {
            this.handleReviewAllEvent(e);
          }
          if (this._shortcutSettings.onReviewIncompleteQuestions) {
            this.handleReviewIncompleteEvent(e);
          }
          if (this._shortcutSettings.onReviewMarkedQuestions) {
            this.handleReviewFlaggedEvent(e);
          }
          if (this._shortcutSettings.onReviewEndSection) {
            this.handleEndSectionEvent(e);
          }
        }
        handleNavigationEvent(event) {
          let actionElement = document.activeElement;
          if (event.altKey && event.keyCode == _this.m.alph_n || event.keyCode == _this.m.rightarrow) {
            if ("INPUT" == actionElement.nodeName && "text" == actionElement.getAttribute("type")) {
              return;
            }
            this._onKeyboardShortcut.next("nextQuestion");
            this._onKeyboardShortcut.next({
              fn : "nextQuestion",
              event : event
            });
          }
          if (event.altKey && event.keyCode == _this.m.alph_p || event.keyCode == _this.m.leftarrow) {
            if ("INPUT" == actionElement.nodeName && "text" == actionElement.getAttribute("type")) {
              return;
            }
            this._onKeyboardShortcut.next("previousQuestion");
            this._onKeyboardShortcut.next({
              fn : "previousQuestion",
              event : event
            });
          }
        }
        handleAnswerSelectEvent(s, method) {
          var ds = 0;
          if (s >= 65 && s <= 90) {
            ds = s - 64;
          } else {
            if (s >= 97 && s <= 122) {
              ds = s - 96;
            }
          }
          if (0 != ds) {
            this._onKeyboardShortcut.next({
              fn : "answerSelect",
              val : ds,
              event : method
            });
          }
        }
        handleMarkEvent(event) {
          if (event.altKey) {
            if (this.sharedService._clientConfig.qBankId == _this.h.mcat) {
              if (event.keyCode == _this.m.alph_f) {
                event.preventDefault();
                this._onKeyboardShortcut.next({
                  fn : "markQuestion",
                  event : event
                });
              }
            } else {
              if (event.keyCode == _this.m.alph_m) {
                this._onKeyboardShortcut.next("markQuestion");
                this._onKeyboardShortcut.next({
                  fn : "markQuestion",
                  event : event
                });
              }
            }
          }
        }
        handleNavOpenEvent(event) {
          if (event.altKey && event.keyCode == _this.m.alph_v) {
            event.preventDefault();
            this._onKeyboardShortcut.next("navigator");
          }
        }
        handleFeedbackOpenEvent(event) {
          if (event.altKey) {
            if (this.sharedService._clientConfig.qBankId == _this.h.mcat) {
              if (event.keyCode == _this.m.alph_b) {
                event.preventDefault();
                this._onKeyboardShortcut.next("feedback");
              }
            } else {
              if (event.keyCode == _this.m.alph_f) {
                event.preventDefault();
                this._onKeyboardShortcut.next("feedback");
              }
            }
          }
        }
        handleLabValuesEvent(event) {
          const RepoCodeController = ($mdDialog) => {
            return $mdDialog == _this.h.pa || $mdDialog == _this.h.naplex || $mdDialog == _this.h.naplex_faculty || $mdDialog == _this.h.step1 || $mdDialog == _this.h.step2 || $mdDialog == _this.h.step3 || $mdDialog == _this.h.comlex1 || $mdDialog == _this.h.comlex2 || $mdDialog == _this.h.opp_omt || $mdDialog == _this.h.opp_omt2 || $mdDialog == _this.h.ukmla;
          };
          if (event.altKey && (event.keyCode == _this.m.alph_l && RepoCodeController(this.sharedService._clientConfig.qBankId) || event.keyCode == _this.m.alph_r && !RepoCodeController(this.sharedService._clientConfig.qBankId))) {
            event.preventDefault();
            this._onKeyboardShortcut.next("labValues");
          }
        }
        handlePeriodicTableEvent(event) {
          if (event.altKey && event.keyCode == _this.m.alph_t) {
            event.preventDefault();
            this._onKeyboardShortcut.next("periodicTable");
          }
        }
        handleHighlightEvent(event) {
          if (event.altKey && event.keyCode == _this.m.alph_h) {
            event.preventDefault();
            this._onKeyboardShortcut.next("highlight");
          }
        }
        handleStrikeoutEvent(event) {
          if (event.altKey && event.keyCode == _this.m.alph_s) {
            event.preventDefault();
            this._onKeyboardShortcut.next("strikeOut");
          }
        }
        handleSubmitEvent(event) {
          if (event.keyCode == _this.m.enter) {
            event.preventDefault();
            this._onKeyboardShortcut.next("onsubmit");
          }
        }
        handleEscEvent() {
          this._onDialogClose.next();
        }
        handleNotesEvent(event) {
          if (event.altKey && event.keyCode == _this.m.alph_o) {
            event.preventDefault();
            this._onKeyboardShortcut.next("notes");
          }
        }
        handleCalculatorEvent(event) {
          if (document.activeElement == document.getElementById("calculator-dialog-container")) {
            if (event.shiftKey && event.keyCode == _this.m.shift_mul || event.keyCode == _this.m.numpad_mul) {
              event.preventDefault();
              this._onKeyboardShortcut.next({
                type : "operation",
                val : "*"
              });
            } else {
              if (event.shiftKey && event.keyCode == _this.m.shift_percentile) {
                event.preventDefault();
                this._onKeyboardShortcut.next({
                  type : "operation",
                  val : "%"
                });
              } else {
                if (event.keyCode == _this.m.numpad_add || event.shiftKey && event.keyCode == _this.m.shift_add) {
                  event.preventDefault();
                  this._onKeyboardShortcut.next({
                    type : "operation",
                    val : "+"
                  });
                } else {
                  if (event.keyCode == _this.m.sub || event.keyCode == _this.m.numpad_sub) {
                    event.preventDefault();
                    this._onKeyboardShortcut.next({
                      type : "operation",
                      val : "-"
                    });
                  } else {
                    if (event.keyCode == _this.m.shift_div || event.keyCode == _this.m.numpad_div) {
                      event.preventDefault();
                      this._onKeyboardShortcut.next({
                        type : "operation",
                        val : "/"
                      });
                    } else {
                      if (event.keyCode == _this.m.period || event.keyCode == _this.m.numpad_decimal) {
                        event.preventDefault();
                        this._onKeyboardShortcut.next({
                          type : "decimal",
                          val : "."
                        });
                      } else {
                        if (event.keyCode == _this.m.backspace) {
                          event.preventDefault();
                          this._onKeyboardShortcut.next({
                            type : "backspace",
                            val : null
                          });
                        } else {
                          if (event.keyCode == _this.m.enter) {
                            event.preventDefault();
                            this._onKeyboardShortcut.next({
                              type : "enter",
                              val : null
                            });
                          } else {
                            if (event.keyCode >= _this.m.num_0 && event.keyCode <= _this.m.num_9 || event.keyCode >= _this.m.numpad_96 && event.keyCode <= _this.m.numpad_105) {
                              event.preventDefault();
                              this._onKeyboardShortcut.next({
                                type : "input",
                                val : event.key
                              });
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (event.altKey && event.keyCode == _this.m.alph_u) {
              event.preventDefault();
              this._onKeyboardShortcut.next("calculator");
            }
          }
        }
        handleReviewAllEvent(event) {
          if (event.altKey && event.keyCode == _this.m.alph_a) {
            event.preventDefault();
            this._onKeyboardShortcut.next("reviewAll");
          }
        }
        handleReviewIncompleteEvent(event) {
          if (event.altKey && event.keyCode == _this.m.alph_i) {
            event.preventDefault();
            this._onKeyboardShortcut.next("reviewIncomplete");
          }
        }
        handleReviewFlaggedEvent(event) {
          if (event.altKey && event.keyCode == _this.m.alph_r) {
            event.preventDefault();
            this._onKeyboardShortcut.next("reviewFlagged");
          }
        }
        handleEndSectionEvent(event) {
          if (event.altKey && event.keyCode == _this.m.alph_e) {
            event.preventDefault();
            this._onKeyboardShortcut.next("endSection");
          }
        }
      }
      return View.\u0275fac = function(defaultViewCls) {
        return new (defaultViewCls || View)(t.cc(event.a));
      }, View.\u0275prov = t.Ob({
        token : View,
        factory : View.\u0275fac,
        providedIn : "root"
      }), View;
    })();
  },
  hMJf : function(preventPushState, id, require) {
    function wait_for_target(callback, target) {
      if (1 & callback) {
        self.Tb(0, "i", 28);
      }
    }
    function none(data, conditions) {
      if (1 & data) {
        self.Tb(0, "i", 29);
      }
    }
    function buildMenu(data, elem) {
      if (1 & data) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 25);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().bookmarkQuestion();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().bookmarkQuestion();
        });
        self.Sc(1, wait_for_target, 1, 0, "i", 26);
        self.Sc(2, none, 1, 0, "i", 27);
        self.Xb();
      }
      if (2 & data) {
        const e = self.kc();
        self.Db("aria-label", e.sharedService._currentQuestion.isMarked ? "Unmark Question" : "Mark Question");
        self.Cb(1);
        self.sc("ngIf", !e.sharedService._currentQuestion.isMarked);
        self.Cb(1);
        self.sc("ngIf", e.sharedService._currentQuestion.isMarked);
      }
    }
    function next(res, status) {
      if (1 & res) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 30);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showFlashcards();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showFlashcards();
        });
        self.Tb(1, "i", 31);
        self.Yb(2, "p", 32);
        self.Uc(3);
        self.Xb();
        self.Xb();
      }
      if (2 & res) {
        const newDataList = self.kc();
        self.Cb(3);
        self.Wc(" ", newDataList.sharedService._currentQuestion.flashcardServiceTracker[newDataList.flashCardCategory.current].totalCount, " ");
      }
    }
    function fetch(data, url) {
      if (1 & data) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 33);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showNotebook();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showNotebook();
        });
        self.Tb(1, "i", 34);
        self.Xb();
      }
    }
    function wxmlToFirebase(downcodeFunc, firebaseRef) {
      if (1 & downcodeFunc) {
        self.Tb(0, "i", 38);
      }
    }
    function _handleTabUpdated(tab, tabId) {
      if (1 & tab) {
        self.Tb(0, "i", 39);
      }
    }
    function get(crypt, fn) {
      if (1 & crypt) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 35);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showUserNotes();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showUserNotes();
        });
        self.Sc(1, wxmlToFirebase, 1, 0, "i", 36);
        self.Sc(2, _handleTabUpdated, 1, 0, "i", 37);
        self.Xb();
      }
      if (2 & crypt) {
        const e = self.kc();
        self.Cb(1);
        self.sc("ngIf", "" == e.sharedService._currentQuestion.notes || null == e.sharedService._currentQuestion.notes);
        self.Cb(1);
        self.sc("ngIf", "" != e.sharedService._currentQuestion.notes && null != e.sharedService._currentQuestion.notes);
      }
    }
    function sort(data, datapoints) {
      if (1 & data) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 40);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showLabValues();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showLabValues();
        });
        self.Tb(1, "i", 41);
        self.Xb();
      }
    }
    function Controller(server, connection) {
      if (1 & server) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 42);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showCalculator();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showCalculator();
        });
        self.Tb(1, "i", 43);
        self.Xb();
      }
    }
    function onload(url, layer) {
      if (1 & url) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 44);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().toggleFullScreen();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().toggleFullScreen();
        });
        self.Tb(1, "i", 45);
        self.Xb();
      }
    }
    function finish(event, other) {
      if (1 & event) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 46);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().toggleFullScreen();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().toggleFullScreen();
        });
        self.Tb(1, "i", 47);
        self.Xb();
      }
    }
    function Tile(_arg, options) {
      if (1 & _arg) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 48);
        self.gc("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().openHelpMenu();
        });
        self.Tb(1, "i", 49);
        self.Xb();
      }
      if (2 & _arg) {
        self.kc();
        const unexpandedFeatureDirectoryPaths = self.Ec(19);
        self.sc("matMenuTriggerFor", unexpandedFeatureDirectoryPaths);
      }
    }
    function animate(animation, startCallback) {
      if (1 & animation) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 50);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showUserSettings();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showUserSettings();
        });
        self.Tb(1, "i", 51);
        self.Xb();
      }
    }
    function expand(region, range) {
      if (1 & region) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 52);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showEditTestModeMenu();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showEditTestModeMenu();
        });
        self.Tb(1, "i", 53);
        self.Xb();
      }
    }
    function b(status, eventType) {
      if (1 & status) {
        self.Tb(0, "i", 57);
      }
    }
    function arc(ifrom, ito) {
      if (1 & ifrom && (self.Yb(0, "span"), self.Uc(1), self.lc(2, "toHHMMSS"), self.Xb()), 2 & ifrom) {
        const e = self.kc(2);
        self.Cb(1);
        self.Wc("\u00a0", self.mc(2, 1, e.sharedService._testInfo.timeInSeconds), "");
      }
    }
    function drawImage(width, context) {
      if (1 & width && (self.Yb(0, "span"), self.Uc(1), self.lc(2, "toMMSS"), self.Xb()), 2 & width) {
        const e = self.kc(2);
        self.Cb(1);
        self.Wc("\u00a0", self.mc(2, 1, e.sharedService._testInfo.timeInSeconds), "");
      }
    }
    function decode(pos, input) {
      if (1 & pos && (self.Yb(0, "a", 54), self.Sc(1, b, 1, 0, "i", 55), self.Sc(2, arc, 3, 3, "span", 56), self.Sc(3, drawImage, 3, 3, "span", 56), self.Xb()), 2 & pos) {
        const e = self.kc();
        self.Cb(1);
        self.sc("ngIf", !e.testInterfaceConfig.editTestMode);
        self.Cb(1);
        self.sc("ngIf", e.sharedService._testInfo.timeInSeconds >= 3600);
        self.Cb(1);
        self.sc("ngIf", e.sharedService._testInfo.timeInSeconds < 3600);
      }
    }
    function format(formatters, initialValue) {
      if (1 & formatters) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 17);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().saveTest(false);
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().saveTest(false);
        });
        self.Tb(1, "i", 18);
        self.Yb(2, "p", 5);
        self.Uc(3, "\u00a0Suspend");
        self.Xb();
        self.Xb();
      }
    }
    function run(index, count) {
      if (1 & index) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 19);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showFeedback();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showFeedback();
        });
        self.Tb(1, "i", 20);
        self.Yb(2, "p", 5);
        self.Uc(3, "\u00a0Feedback");
        self.Xb();
        self.Xb();
      }
    }
    function view(event, result) {
      if (1 & event) {
        const $allPanels = self.Zb();
        self.Yb(0, "button", 19);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().resetImageSize();
        });
        self.Uc(1, "Reset");
        self.Xb();
      }
    }
    function getPulls(element, context) {
      if (1 & element && self.Tb(0, "img", 4), 2 & element) {
        const value = context.$implicit;
        const i = self.kc();
        self.sc("src", i.sharedService._currentQuestion.questionMedia.baseUrl + value, self.Lc);
      }
    }
    function reset(countDownMS, options) {
      if (1 & countDownMS) {
        const $allPanels = self.Zb();
        self.Yb(0, "button", 19);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().resetFullScreenImage();
        });
        self.Uc(1, "Reset");
        self.Xb();
      }
    }
    function show(callback, callback_obj) {
      if (1 & callback) {
        const table = self.Zb();
        self.Yb(0, "div", 11);
        self.Yb(1, "div", 12);
        self.gc("mouseup", function(e) {
          return self.Ic(table), self.kc().checkAndShowTextContextMenu(e);
        });
        self.lc(2, "safeHtml");
        self.Xb();
        self.Xb();
      }
      if (2 & callback) {
        const e = self.kc();
        self.Cb(1);
        self.sc("ngStyle", self.yc(4, prop, e.sharedService._userPreferences.jsonSettings.testPreferences.fontSize + "pt"))("innerHTML", self.mc(2, 2, e.sharedService._currentAbstract.text), self.Jc);
      }
    }
    function colorComparator(a, b) {
      if (1 & a) {
        self.Yb(0, "div", 40);
        self.Yb(1, "span");
        self.Uc(2, "This question has been deactivated. Please do not rely on the content/concept discussed in this question as it might be outdated or inaccurate. Due to the volume of feedback, it is not possible for us to discuss the reason for deactivation in detail.");
        self.Xb();
        self.Xb();
      }
    }
    function g(index, count) {
      if (1 & index) {
        const $allPanels = self.Zb();
        self.Yb(0, "div", 41);
        self.Yb(1, "button", 42);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc(2).playMedia();
        });
        self.Uc(2, "Play Media");
        self.Xb();
        self.Xb();
      }
    }
    function template(callback, text) {
      if (1 & callback && (self.Yb(0, "tr"), self.Tb(1, "td", 45), self.lc(2, "safeHtml"), self.Xb()), 2 & callback) {
        const e = self.kc(3);
        self.Cb(1);
        self.sc("innerHTML", self.mc(2, 1, e.sharedService._currentQuestion.answerHeader), self.Jc);
      }
    }
    function rt(callback, id) {
      if (1 & callback) {
        self.Tb(0, "i", 55);
      }
    }
    function d3MapAddTopoJSONLayer(specificFeature, renderFrequency) {
      if (1 & specificFeature) {
        self.Tb(0, "i", 56);
      }
    }
    function ListItemContext(index, item) {
      if (1 & index && (self.Yb(0, "span"), self.Uc(1), self.Xb()), 2 & index) {
        const e = self.kc().$implicit;
        const data = self.kc(3);
        self.Cb(1);
        self.Wc(" \u00a0(", data.math.floor(100 * e.correctTaken / data.sharedService._currentQuestion.peopleTaken), "%) ");
      }
    }
    function dt(callback, name) {
      if (1 & callback) {
        self.Yb(0, "button", 58);
        self.Uc(1, "View Exhibits");
        self.Xb();
      }
    }
    function validate(schema, customFormatters) {
      if (1 & schema && (self.Yb(0, "td"), self.Sc(1, dt, 2, 0, "button", 57), self.Xb()), 2 & schema) {
        const e = self.kc(4);
        self.Cb(1);
        self.sc("ngIf", e.hasExhibitsInQuestion);
      }
    }
    function update(sensorid, context) {
      if (1 & sensorid) {
        const order = self.Zb();
        self.Yb(0, "tr", 46);
        self.Yb(1, "td", 47);
        self.Yb(2, "div");
        self.Sc(3, rt, 1, 0, "i", 48);
        self.Sc(4, d3MapAddTopoJSONLayer, 1, 0, "i", 49);
        self.Xb();
        self.Yb(5, "div");
        self.Yb(6, "mat-radio-group", 50);
        self.gc("ngModelChange", function(sq) {
          return self.Ic(order), self.kc(3).sharedService._currentQuestion.userAnswer = sq;
        })("change", function() {
          self.Ic(order);
          const i = context.$implicit;
          return self.kc(3).setUserAnswer(i.choiceNumber);
        });
        self.Tb(7, "mat-radio-button", 51);
        self.Xb();
        self.Xb();
        self.Yb(8, "div");
        self.Uc(9, " \u00a0");
        self.Yb(10, "span");
        self.Uc(11);
        self.lc(12, "numToChar");
        self.Xb();
        self.Xb();
        self.Xb();
        self.Yb(13, "td", 52);
        self.Yb(14, "span", 53);
        self.gc("mouseup", function(i) {
          self.Ic(order);
          const n = context.$implicit;
          return self.kc(3).invokeAnswerStrikeOut(i, n.choiceNumber);
        });
        self.Tb(15, "span", 54);
        self.lc(16, "safeHtml");
        self.Xb();
        self.Sc(17, ListItemContext, 2, 1, "span", 8);
        self.Xb();
        self.Sc(18, validate, 2, 1, "td", 8);
        self.Xb();
      }
      if (2 & sensorid) {
        const p = context.$implicit;
        const opts = self.kc(3);
        self.Cb(3);
        self.sc("ngIf", (opts.sharedService._launchTestOptions.canShowAnswer || opts.sharedService._testInfo.testModeId == opts.testMode.search) && ("," + opts.sharedService._currentQuestion.correctAnswer + ",").indexOf("," + p.choiceNumber + ",") > -1);
        self.Cb(1);
        self.sc("ngIf", opts.sharedService._launchTestOptions.canShowAnswer && ("," + opts.sharedService._currentQuestion.userAnswer + ",").indexOf("," + p.choiceNumber + ",") > -1 && -1 == ("," + opts.sharedService._currentQuestion.correctAnswer + ",").indexOf("," + p.choiceNumber + ","));
        self.Cb(2);
        self.sc("ngModel", opts.sharedService._currentQuestion.userAnswer);
        self.Cb(1);
        self.sc("value", p.choiceNumber)("disabled", opts.sharedService._currentQuestion.isAnswerChoiceDisabled)("ngClass", self.yc(17, me, opts.sharedService._currentQuestion.isAnswerChoiceDisabled))("aria-label", "option" + p.choiceNumber + (p.choice.toString().includes("<img") || p.choice.toString().includes("<tr") ? "exhibit" : p.choice));
        self.Cb(4);
        self.Wc("", self.mc(12, 13, p.choiceNumber), ".");
        self.Cb(2);
        self.sc("ngClass", self.yc(19, db, opts.hasExhibitsInQuestion));
        self.Cb(1);
        self.tc("id", "answerhighlight" + p.choiceNumber);
        self.Cb(1);
        self.sc("innerHtml", self.mc(16, 15, p.choice), self.Jc);
        self.Cb(2);
        self.sc("ngIf", opts.showCorrectPercentageForAnswerOptions);
        self.Cb(1);
        self.sc("ngIf", opts.sharedService._currentQuestion.answerChoiceList.length == p.choiceNumber);
      }
    }
    function filter(array, comparator) {
      if (1 & array && (self.Yb(0, "table", 43), self.Sc(1, template, 3, 3, "tr", 8), self.Sc(2, update, 19, 21, "tr", 44), self.Xb()), 2 & array) {
        const newRingbuffer = self.kc(2);
        self.sc("ngClass", self.yc(4, string, newRingbuffer.hasExhibitsInQuestion))("ngStyle", self.yc(6, prop, newRingbuffer.sharedService._userPreferences.jsonSettings.testPreferences.fontSize + "pt"));
        self.Cb(1);
        self.sc("ngIf", newRingbuffer.sharedService._currentQuestion.answerHeader);
        self.Cb(1);
        self.sc("ngForOf", newRingbuffer.sharedService._currentQuestion.answerChoiceList);
      }
    }
    function Button(text, isDisabled) {
      if (1 & text) {
        const $allPanels = self.Zb();
        self.Yb(0, "div", 59);
        self.Yb(1, "button", 60);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc(2).submitQuestion();
        });
        self.Uc(2, "Submit");
        self.Xb();
        self.Xb();
      }
      if (2 & text) {
        const themeProperties = self.kc(2);
        self.Cb(1);
        self.sc("ngClass", self.yc(1, pt, themeProperties.sharedService._userPreferences.jsonSettings.testPreferences.theme == themeProperties.themes.uworld));
      }
    }
    function Grid(components, options) {
      if (1 & components) {
        const $allPanels = self.Zb();
        self.Yb(0, "div", 61);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc(2).nextQuestion();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc(2).nextQuestion();
        });
        self.Uc(1, "Proceed To Next Item");
        self.Xb();
      }
    }
    function app(connection, type) {
      if (1 & connection) {
        self.Yb(0, "div", 79);
        self.Yb(1, "div");
        self.Uc(2, "Correct");
        self.Xb();
        self.Xb();
      }
    }
    function buildGraph($cont, data) {
      if (1 & $cont) {
        self.Yb(0, "div");
        self.Uc(1, "Incorrect");
        self.Xb();
      }
    }
    function predFn(v2, v1) {
      if (1 & v2 && (self.Yb(0, "div", 80), self.Sc(1, buildGraph, 2, 0, "div", 8), self.Yb(2, "div", 81), self.Yb(3, "span", 74), self.Uc(4, "Correct answer\u00a0"), self.Xb(), self.Tb(5, "span", 82), self.lc(6, "numToChar"), self.Xb(), self.Xb()), 2 & v2) {
        const e = self.kc(3);
        self.Cb(1);
        self.sc("ngIf", e.sharedService._currentQuestion.isIncorrect);
        self.Cb(4);
        self.sc("innerHTML", self.mc(6, 2, e.getCorrectAnswer()), self.Jc);
      }
    }
    function ColumnViewModel(element, aureliaUtils) {
      if (1 & element) {
        self.Yb(0, "div");
        self.Uc(1, "Omitted");
        self.Xb();
      }
    }
    function text(data, txt) {
      if (1 & data && (self.Yb(0, "div", 83), self.Sc(1, ColumnViewModel, 2, 0, "div", 8), self.Yb(2, "div", 81), self.Yb(3, "span", 74), self.Uc(4, "Correct answer\u00a0"), self.Xb(), self.Tb(5, "span", 82), self.lc(6, "numToChar"), self.Xb(), self.Xb()), 2 & data) {
        const e = self.kc(3);
        self.Cb(1);
        self.sc("ngIf", e.sharedService._currentQuestion.isOmitted);
        self.Cb(4);
        self.sc("innerHTML", self.mc(6, 2, e.getCorrectAnswer()), self.Jc);
      }
    }
    function el(name, n) {
      if (1 & name && (self.Yb(0, "div", 84), self.Yb(1, "div", 81), self.Yb(2, "span", 74), self.Uc(3, "Correct answer\u00a0"), self.Xb(), self.Tb(4, "span", 82), self.lc(5, "numToChar"), self.Xb(), self.Xb()), 2 & name) {
        const e = self.kc(3);
        self.Cb(4);
        self.sc("innerHTML", self.mc(5, 1, e.getCorrectAnswer()), self.Jc);
      }
    }
    function userToGroup(user, group) {
      if (1 & user) {
        self.Yb(0, "div");
        self.Uc(1, " Collecting Statistics ");
        self.Xb();
      }
    }
    function preProcessCommand(command, isWin32) {
      if (1 & command && (self.Yb(0, "div", 87), self.Tb(1, "i", 88), self.Yb(2, "div", 76), self.Yb(3, "span", 77), self.Uc(4), self.Xb(), self.Yb(5, "span", 74), self.Uc(6, "Answered correctly"), self.Xb(), self.Xb(), self.Xb()), 2 & command) {
        const e = self.kc(4);
        self.Cb(4);
        self.Wc("", e.sharedService._currentQuestion.correctPercentile, "%");
      }
    }
    function w(element, delay) {
      if (1 & element && (self.Yb(0, "div", 85), self.Sc(1, userToGroup, 2, 0, "div", 8), self.Sc(2, preProcessCommand, 7, 1, "div", 86), self.Xb()), 2 & element) {
        const e = self.kc(3);
        self.Cb(1);
        self.sc("ngIf", e.sharedService._currentQuestion.peopleTaken < 500);
        self.Cb(1);
        self.sc("ngIf", e.sharedService._currentQuestion.peopleTaken > 500);
      }
    }
    function star(userId, starred) {
      if (1 & userId && (self.Yb(0, "span", 77), self.Uc(1), self.lc(2, "toHHMMSSWithNotations"), self.Xb()), 2 & userId) {
        const e = self.kc(4);
        self.Cb(1);
        self.Vc(self.mc(2, 1, e.sharedService._currentQuestion.timeSpent));
      }
    }
    function searchWikipedia(searchTerm, over18) {
      if (1 & searchTerm && (self.Yb(0, "span", 77), self.Uc(1), self.lc(2, "toHHMMWithNotations"), self.Xb()), 2 & searchTerm) {
        const e = self.kc(4);
        self.Cb(1);
        self.Vc(self.mc(2, 1, e.sharedService._currentQuestion.timeSpent));
      }
    }
    function stdInto(transducer, initialValue) {
      if (1 & transducer) {
        self.Yb(0, "span", 77);
        self.Uc(1, "0 secs");
        self.Xb();
      }
    }
    function minify(image, options) {
      if (1 & image && (self.Yb(0, "span"), self.Sc(1, star, 3, 3, "span", 73), self.Sc(2, searchWikipedia, 3, 3, "span", 73), self.Sc(3, stdInto, 2, 0, "span", 73), self.Xb()), 2 & image) {
        const e = self.kc(3);
        self.Cb(1);
        self.sc("ngIf", e.sharedService._currentQuestion.timeSpent > 0 && e.sharedService._currentQuestion.timeSpent < 3600);
        self.Cb(1);
        self.sc("ngIf", e.sharedService._currentQuestion.timeSpent > 3600);
        self.Cb(1);
        self.sc("ngIf", 0 == e.sharedService._currentQuestion.timeSpent);
      }
    }
    function handleStartGame(formatters, customFormatters) {
      if (1 & formatters) {
        self.Yb(0, "span", 77);
        self.Uc(1, " N/A ");
        self.Xb();
      }
    }
    function loaded(data, linkedEntities) {
      if (1 & data) {
        self.Tb(0, "div", 89);
      }
    }
    function toString(datumValue, optionsValue) {
      if (1 & datumValue && (self.Yb(0, "div", 62, 63), self.Sc(2, app, 3, 0, "div", 64), self.Sc(3, predFn, 7, 4, "div", 65), self.Sc(4, text, 7, 4, "div", 66), self.Sc(5, el, 6, 3, "div", 67), self.Sc(6, w, 3, 2, "div", 68), self.Yb(7, "div", 69), self.Tb(8, "div"), self.Xb(), self.Yb(9, "div", 70), self.Tb(10, "i", 71), self.Yb(11, "div", 72), self.Sc(12, minify, 4, 3, "span", 8), self.Sc(13, handleStartGame, 2, 0, "span", 73), self.Yb(14, "span", 74), self.Uc(15, "Time Spent"), self.Xb(), self.Xb(), 
      self.Xb(), self.Yb(16, "div", 70), self.Tb(17, "i", 75), self.Yb(18, "div", 76), self.Yb(19, "span", 77), self.Uc(20), self.lc(21, "date"), self.Xb(), self.Yb(22, "span", 74), self.Uc(23, "Version"), self.Xb(), self.Xb(), self.Xb(), self.Sc(24, loaded, 1, 0, "div", 78), self.Xb()), 2 & datumValue) {
        const config = self.kc(2);
        self.Cb(2);
        self.sc("ngIf", config.sharedService._currentQuestion.isCorrect && config.sharedService._testInfo.testModeId != config.testMode.search);
        self.Cb(1);
        self.sc("ngIf", config.sharedService._currentQuestion.isIncorrect && config.sharedService._testInfo.testModeId != config.testMode.search);
        self.Cb(1);
        self.sc("ngIf", config.sharedService._currentQuestion.isOmitted && config.sharedService._testInfo.testModeId != config.testMode.search);
        self.Cb(1);
        self.sc("ngIf", config.sharedService._testInfo.testModeId == config.testMode.search);
        self.Cb(1);
        self.sc("ngIf", !config.sharedService._userPreferences.jsonSettings.testPreferences.hideAnswerStats);
        self.Cb(6);
        self.sc("ngIf", config.sharedService._testInfo.testModeId != config.testMode.search);
        self.Cb(1);
        self.sc("ngIf", config.sharedService._testInfo.testModeId == config.testMode.search);
        self.Cb(7);
        self.Vc(self.nc(21, 9, config.sharedService._currentQuestion.lastUpdatedDate, "yyyy"));
        self.Cb(4);
        self.sc("ngIf", config.showStatsBarDivider);
      }
    }
    function val(optionsValue, context) {
      if (1 & optionsValue && (self.Yb(0, "li"), self.Yb(1, "a", 93), self.Tb(2, "span", 94), self.lc(3, "safeHtml"), self.Xb(), self.Xb()), 2 & optionsValue) {
        const variation = context.$implicit;
        self.Cb(1);
        self.sc("href", variation.referenceLink, self.Lc);
        self.Cb(1);
        self.sc("innerHTML", self.mc(3, 2, variation.title), self.Jc);
      }
    }
    function link(value, text) {
      if (1 & value && (self.Yb(0, "div", 90), self.Yb(1, "div", 91), self.Yb(2, "b"), self.Uc(3, "References"), self.Xb(), self.Xb(), self.Yb(4, "div", 85), self.Yb(5, "ul"), self.Sc(6, val, 4, 4, "li", 92), self.Xb(), self.Xb(), self.Xb()), 2 & value) {
        const e = self.kc(2);
        self.sc("ngStyle", self.yc(2, prop, e.sharedService._userPreferences.jsonSettings.testPreferences.fontSize + "pt"));
        self.Cb(6);
        self.sc("ngForOf", e.sharedService._currentQuestion.questionMappingReferencesList);
      }
    }
    function expectedPackagePath(allowUnknown, context) {
      if (1 & allowUnknown && (self.Yb(0, "div", 98), self.Yb(1, "div", 99), self.Uc(2), self.Xb(), self.Yb(3, "div", 100), self.Uc(4), self.Xb(), self.Xb()), 2 & allowUnknown) {
        const e = context.$implicit;
        self.Cb(2);
        self.Vc(e.description);
        self.Cb(2);
        self.Vc(e.header);
      }
    }
    function handleChildRender_(node, attributeViewModelBindings) {
      if (1 & node && (self.Yb(0, "div", 95), self.Yb(1, "div", 96), self.Sc(2, expectedPackagePath, 5, 2, "div", 97), self.Xb(), self.Xb()), 2 & node) {
        const e = self.kc(2);
        self.Cb(2);
        self.sc("ngForOf", e.sharedService._currentQuestion.standards);
      }
    }
    function attributesToString(attributes, includeLiteralValues) {
      if (1 & attributes && (self.Yb(0, "span", 94), self.Tb(1, "br"), self.Xb()), 2 & attributes) {
        const e = self.kc(2);
        self.sc("innerHTML", e.sharedService._currentQuestion.copyrightText, self.Jc);
      }
    }
    function start(ev, _bindType) {
      if (1 & ev) {
        const $allPanels = self.Zb();
        self.Yb(0, "div", 101);
        self.Yb(1, "button", 102);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc(2).raiseHandOnQuestion();
        });
        self.Tb(2, "i", 103);
        self.Uc(3, " I read the answer explanation but I still need help. ");
        self.Xb();
        self.Xb();
      }
      if (2 & ev) {
        const e = self.kc(2);
        self.Cb(1);
        self.sc("ngClass", self.yc(1, status, e.sharedService._currentQuestion.isHelpNeeded));
      }
    }
    function callback(data, ifLast) {
      if (1 & data) {
        const pixel1 = self.Zb();
        self.Yb(0, "div", 13);
        self.Sc(1, colorComparator, 3, 0, "div", 14);
        self.Yb(2, "div", 15);
        self.gc("mouseup", function(pixel2) {
          return self.Ic(pixel1), self.kc().checkAndShowTextContextMenu(pixel2);
        });
        self.lc(3, "safeHtml");
        self.Xb();
        self.Sc(4, g, 3, 0, "div", 16);
        self.Yb(5, "div", 17);
        self.Sc(6, filter, 3, 8, "table", 18);
        self.Xb();
        self.Sc(7, Button, 3, 3, "div", 19);
        self.Sc(8, Grid, 2, 0, "div", 20);
        self.Sc(9, toString, 25, 12, "div", 21);
        self.Tb(10, "div", 22);
        self.Yb(11, "div", 23);
        self.Yb(12, "div");
        self.Yb(13, "ul", 24);
        self.Yb(14, "li", 25);
        self.Yb(15, "a", 26);
        self.Uc(16, "Explanation");
        self.Xb();
        self.Xb();
        self.Tb(17, "li", 27);
        self.Xb();
        self.Xb();
        self.Yb(18, "div", 28);
        self.gc("mouseup", function(pixel2) {
          return self.Ic(pixel1), self.kc().checkAndShowTextContextMenu(pixel2);
        });
        self.Yb(19, "div", 29);
        self.Yb(20, "div", 30);
        self.Yb(21, "div", 31);
        self.Yb(22, "b");
        self.Uc(23, "Explanation:");
        self.Xb();
        self.Xb();
        self.Yb(24, "div", 32);
        self.Yb(25, "b");
        self.Uc(26);
        self.Xb();
        self.Xb();
        self.Tb(27, "div", 33);
        self.Xb();
        self.Tb(28, "br");
        self.Tb(29, "div", 34);
        self.lc(30, "safeHtml");
        self.Xb();
        self.Xb();
        self.Sc(31, link, 7, 4, "div", 35);
        self.Sc(32, handleChildRender_, 3, 1, "div", 36);
        self.Yb(33, "div", 37);
        self.Sc(34, attributesToString, 2, 1, "span", 38);
        self.Yb(35, "span");
        self.Uc(36, "Copyright \u00a9 UWorld. All rights reserved.");
        self.Xb();
        self.Xb();
        self.Sc(37, start, 4, 3, "div", 39);
        self.Xb();
        self.Xb();
      }
      if (2 & data) {
        const config = self.kc();
        self.sc("ngStyle", self.zc(24, scale, config.sharedService._userPreferences.jsonSettings.testPreferences.splitScreen && config.isSplitScreenAllowed && 0 == config.sharedService._currentQuestion.abstractId ? config.sharedService._testInterfaceConfig.leftContentFlexBasis : "", config.reduceQuestionContentWidthForNBOME ? "70%" : ""))("ngClass", self.yc(27, extra, config.sharedService._userPreferences.jsonSettings.testPreferences.splitScreen && config.isSplitScreenAllowed || config.sharedService._currentQuestion.abstractId > 
        0));
        self.Cb(1);
        self.sc("ngIf", !config.sharedService._currentQuestion.isActive && 3 != config.sharedService._currentQuestion.activeStatusId);
        self.Cb(1);
        self.sc("ngStyle", self.yc(29, prop, config.sharedService._userPreferences.jsonSettings.testPreferences.fontSize + "pt"))("innerHTML", self.mc(3, 20, config.sharedService._currentQuestion.questionText), self.Jc);
        self.Cb(2);
        self.sc("ngIf", config.sharedService._currentQuestion.questionTypeId == config.questionType.media && (config.sharedService._currentQuestion.questionMedia.typeId == config.questionMediaType.audio || config.sharedService._currentQuestion.questionMedia.typeId == config.questionMediaType.video));
        self.Cb(2);
        self.sc("ngIf", config.sharedService._currentQuestion.formatTypeId == config.questionFormatType.singleBestResponse);
        self.Cb(1);
        self.sc("ngIf", !(config.sharedService._currentQuestion.isSubmitted || config.sharedService._clientConfig.isSim || config.sharedService._testInfo.testModeId != config.testMode.timedTutor && config.sharedService._testInfo.testModeId != config.testMode.tutor));
        self.Cb(1);
        self.sc("ngIf", config.sharedService._userPreferences.jsonSettings.testPreferences.theme == config.themes.nbme && !config.sharedService._launchTestOptions.canShowAnswer && (config.sharedService._testInfo.testModeId == config.testMode.timed || config.sharedService._testInfo.testModeId == config.testMode.untimed));
        self.Cb(1);
        self.sc("ngIf", config.sharedService._launchTestOptions.canShowAnswer);
        self.Cb(2);
        self.sc("hidden", !config.sharedService._launchTestOptions.canShowAnswer)("ngClass", self.yc(31, taskScore, config.sharedService._userPreferences.jsonSettings.testPreferences.splitScreen && config.isSplitScreenAllowed));
        self.Cb(4);
        self.sc("ngStyle", self.yc(33, prop, config.sharedService._userPreferences.jsonSettings.testPreferences.fontSize + "pt"));
        self.Cb(3);
        self.sc("ngStyle", self.yc(35, prop, config.sharedService._userPreferences.jsonSettings.testPreferences.fontSize + "pt"));
        self.Cb(8);
        self.Wc("User Id: ", config.sharedService._clientConfig.userId, "");
        self.Cb(3);
        self.sc("innerHTML", self.mc(30, 22, config.sharedService._currentQuestion.explanationText), self.Jc);
        self.Cb(2);
        self.sc("ngIf", null != config.sharedService._currentQuestion.questionMappingReferencesList);
        self.Cb(1);
        self.sc("ngIf", null != config.sharedService._currentQuestion.standards);
        self.Cb(2);
        self.sc("ngIf", config.sharedService._currentQuestion.copyrightText);
        self.Cb(3);
        self.sc("ngIf", null != config.sharedService._currentQuestion.isHelpNeeded);
      }
    }
    function collapse(after, context) {
      if (1 & after) {
        const $allPanels = self.Zb();
        self.Yb(0, "span", 108);
        self.gc("click", function(i) {
          self.Ic($allPanels);
          const otherRecord = context.$implicit;
          return self.kc(3).applyHighlight(i, otherRecord.id + "");
        })("keydown.enter", function(i) {
          self.Ic($allPanels);
          const otherRecord = context.$implicit;
          return self.kc(3).applyHighlight(i, otherRecord.id + "");
        });
        self.Tb(1, "i", 109);
        self.Tb(2, "i");
        self.Xb();
      }
      if (2 & after) {
        const e = context.$implicit;
        self.Cb(2);
        self.Hb("fas fa-circle highlighter fa-stack-1x highlighter-", e.color, "");
      }
    }
    function showSidebarTab(e, islongclick) {
      if (1 & e && (self.Wb(0), self.Sc(1, collapse, 3, 3, "span", 107), self.Vb()), 2 & e) {
        const e = self.kc(2);
        self.Cb(1);
        self.sc("ngForOf", e.highlightOptions);
      }
    }
    function setup(DSWMan, PWASet) {
      if (1 & DSWMan) {
        const $allPanels = self.Zb();
        self.Yb(0, "span", 110);
        self.gc("click", function(groupRefreshes) {
          self.Ic($allPanels);
          const $ax = self.kc(2);
          return $ax.applyHighlight(groupRefreshes, $ax.sharedService._userPreferences.jsonSettings.testPreferences.defaultHighlightColor.toString());
        })("keydown.enter", function(groupRefreshes) {
          self.Ic($allPanels);
          const $ax = self.kc(2);
          return $ax.applyHighlight(groupRefreshes, $ax.sharedService._userPreferences.jsonSettings.testPreferences.defaultHighlightColor.toString());
        });
        self.Tb(1, "i", 109);
        self.Tb(2, "i");
        self.Xb();
      }
      if (2 & DSWMan) {
        const e = self.kc(2);
        self.Cb(2);
        self.Hb("fas fa-circle highlighter fa-stack-1x highlighter-", e.highlightOptions[e.sharedService._userPreferences.jsonSettings.testPreferences.defaultHighlightColor - 1].color, "");
      }
    }
    function _expandPluralForm(ast, errors) {
      if (1 & ast && (self.Yb(0, "div", 104), self.Sc(1, showSidebarTab, 2, 1, "ng-container", 105), self.Sc(2, setup, 3, 3, "ng-template", null, 106, self.Tc), self.Xb()), 2 & ast) {
        const e = self.Ec(3);
        const t = self.kc();
        self.Cb(1);
        self.sc("ngIf", t.sharedService._userPreferences.jsonSettings.testPreferences.multicolorPicker)("ngIfElse", e);
      }
    }
    function transform(srcTxt, filename) {
      if (1 & srcTxt) {
        const $allPanels = self.Zb();
        self.Wb(0);
        self.Tb(1, "mat-divider", 111);
        self.Yb(2, "div", 112);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc(2).addContentToANewFlashcard();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc(2).addContentToANewFlashcard();
        });
        self.Tb(3, "i", 113);
        self.Yb(4, "span");
        self.Uc(5, "New");
        self.Xb();
        self.Xb();
        self.Vb();
      }
      if (2 & srcTxt) {
        const manager = self.kc(2);
        self.Cb(1);
        self.sc("vertical", true);
        self.Cb(1);
        self.sc("ngClass", self.yc(2, files, manager.sharedService._highlights.selectedContent != manager.contextMenuContent.Text));
      }
    }
    function setter(e, prop) {
      if (1 & e) {
        const $allPanels = self.Zb();
        self.Wb(0);
        self.Tb(1, "mat-divider", 111);
        self.Yb(2, "div", 114);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc(2).addContentToAnExistingFlashcard();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc(2).addContentToAnExistingFlashcard();
        });
        self.Yb(3, "span", 115);
        self.Tb(4, "i", 116);
        self.Tb(5, "i", 117);
        self.Xb();
        self.Yb(6, "span");
        self.Uc(7, "Existing");
        self.Xb();
        self.Xb();
        self.Vb();
      }
      if (2 & e) {
        const e = self.kc(2);
        self.Cb(1);
        self.sc("vertical", true);
        self.Cb(1);
        self.sc("ngClass", self.yc(2, lookup, !e.sharedService._testInterfaceConfig.myNoteBook || !e.sharedService._userPreferences.jsonSettings.testPreferences.isNotebookEnabled));
      }
    }
    function resize(e, type) {
      if (1 & e) {
        const $allPanels = self.Zb();
        self.Wb(0);
        self.Tb(1, "mat-divider", 111);
        self.Yb(2, "div", 118);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc(2).addContentToFlashcardInUse();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc(2).addContentToFlashcardInUse();
        });
        self.Yb(3, "span", 115);
        self.Tb(4, "i", 116);
        self.Tb(5, "i", 117);
        self.Xb();
        self.Yb(6, "span");
        self.Uc(7, "Add To Flashcard");
        self.Xb();
        self.Xb();
        self.Vb();
      }
      if (2 & e) {
        const manager = self.kc(2);
        self.Cb(1);
        self.sc("vertical", true);
        self.Cb(1);
        self.sc("ngClass", self.zc(2, watch, manager.sharedService._highlights.selectedContent != manager.contextMenuContent.Text && !manager.toolbarDisplayNonCurrentFlashcard, !manager.sharedService._testInterfaceConfig.myNoteBook || !manager.sharedService._userPreferences.jsonSettings.testPreferences.isNotebookEnabled));
      }
    }
    function Notebook(options, args) {
      if (1 & options) {
        const $allPanels = self.Zb();
        self.Wb(0);
        self.Tb(1, "mat-divider", 111);
        self.Yb(2, "div", 119);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc(2).addToNotebook();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc(2).addToNotebook();
        });
        self.Tb(3, "i", 120);
        self.Yb(4, "span");
        self.Uc(5, "Notebook");
        self.Xb();
        self.Xb();
        self.Vb();
      }
      if (2 & options) {
        self.Cb(1);
        self.sc("vertical", true);
      }
    }
    function _expandDefaultForm(ast, errors) {
      if (1 & ast && (self.Wb(0), self.Sc(1, transform, 6, 4, "ng-container", 8), self.Sc(2, setter, 8, 4, "ng-container", 8), self.Sc(3, resize, 8, 5, "ng-container", 8), self.Sc(4, Notebook, 6, 1, "ng-container", 8), self.Vb()), 2 & ast) {
        const e = self.kc();
        self.Cb(1);
        self.sc("ngIf", e.toolbarDisplayNonCurrentFlashcard);
        self.Cb(1);
        self.sc("ngIf", e.toolbarDisplayNonCurrentFlashcard);
        self.Cb(1);
        self.sc("ngIf", e.sharedService._userPreferences.jsonSettings.testPreferences.isflashcardsEnabled && e.individualFlashcardInUse());
        self.Cb(1);
        self.sc("ngIf", e.sharedService._testInterfaceConfig.myNoteBook && e.sharedService._userPreferences.jsonSettings.testPreferences.isNotebookEnabled);
      }
    }
    function encodeData(data, options) {
      if (1 & data && self.Tb(0, "testinterface-mediatypes-drugad", 121), 2 & data) {
        const e = self.kc();
        self.sc("isAnyDialogDocked", e.isAnyDialogDocked)("drugAdsList", e.sharedService._currentQuestion.questionMedia)("ngStyle", self.yc(3, shape, e.isAnyDialogDocked ? "600px" : "900px"));
      }
    }
    function selectTab(tab, fromHashChange) {
      if (1 & tab) {
        self.Tb(0, "common-content", 4);
      }
      if (2 & tab) {
        self.sc("ngStyle", self.xc(1, itemExt));
      }
    }
    function pi(text, parent) {
      if (1 & text) {
        self.Tb(0, "span", 14);
      }
    }
    function entitSetDefinition(formatters, customFormatters) {
      if (1 & formatters) {
        self.Tb(0, "span", 15);
      }
    }
    function vi(n, id) {
      if (1 & n) {
        self.Tb(0, "span", 16);
      }
    }
    function rest(arr, index) {
      if (1 & arr) {
        self.Tb(0, "span", 17);
      }
    }
    function pickHit(formatters, customFormatters) {
      if (1 & formatters) {
        self.Tb(0, "span", 18);
      }
    }
    function handler(match, context) {
      if (1 & match && (self.Yb(0, "td", 6), self.Yb(1, "span", 7), self.Sc(2, pi, 1, 0, "span", 8), self.Sc(3, entitSetDefinition, 1, 0, "span", 9), self.Sc(4, vi, 1, 0, "span", 10), self.Xb(), self.Yb(5, "span", 11), self.Uc(6), self.Xb(), self.Sc(7, rest, 1, 0, "span", 12), self.Sc(8, pickHit, 1, 0, "span", 13), self.Xb()), 2 & match) {
        const data = context.$implicit;
        const config = self.kc();
        self.sc("ngClass", self.yc(8, $weekDayColumns, data.questionSetSequenceId > 1 && data.isQuestionDisabled && data.questionToAnswerBeforeThis > 0));
        self.Cb(2);
        self.sc("ngIf", data.isOmitted);
        self.Cb(1);
        self.sc("ngIf", data.isCorrect && config.sharedService._testInfo.testModeId == config.testMode.review);
        self.Cb(1);
        self.sc("ngIf", data.isIncorrect && config.sharedService._testInfo.testModeId == config.testMode.review);
        self.Cb(1);
        self.sc("ngClass", self.Bc(10, e, data.sequenceId > 0, 1 == data.questionSetSequenceId, data.questionSetSequenceId > 0, config.checkIfLastQuestionInSequence(data.parentQuestionId, data.questionSetSequenceId)));
        self.Cb(1);
        self.Wc(" ", data.sequenceIdForDisplay, " ");
        self.Cb(1);
        self.sc("ngIf", data.isMarked);
        self.Cb(1);
        self.sc("ngIf", null != data.notes && "" != data.notes);
      }
    }
    function onExit(event, context) {
      if (1 & event) {
        const $allPanels = self.Zb();
        self.Yb(0, "tr", 19);
        self.gc("click", function(event) {
          self.Ic($allPanels);
          const packet = context.$implicit;
          const options = self.kc();
          return packet.isQuestionDisabled && options.sharedService._testInfo.testModeId != options.testMode.review ? event.stopPropagation() : options.changeQuestion(packet.sequenceId);
        });
        self.Xb();
      }
      if (2 & event) {
        const e = context.$implicit;
        const i = self.kc();
        self.sc("ngClass", self.yc(1, intoId, i.sharedService._currentQuestion.sequenceIdForDisplay == e.sequenceIdForDisplay));
      }
    }
    function main(expandedKey, nbrRounds) {
      if (1 & expandedKey) {
        const n = self.Zb();
        self.Yb(0, "a", 151);
        self.gc("click", function() {
          return self.Ic(n), self.kc().bookmarkQuestion();
        })("keydown.enter", function() {
          return self.Ic(n), self.kc().bookmarkQuestion();
        });
        self.Yb(1, "span");
        self.Yb(2, "input", 152);
        self.gc("checkedChange", function(k) {
          return self.Ic(n), self.kc().sharedService._currentQuestion.isMarked = k;
        });
        self.Xb();
        self.Xb();
        self.Yb(3, "span");
        self.jc();
        self.Yb(4, "svg");
        self.Yb(5, "svg", 104);
        self.Yb(6, "g", 153);
        self.Yb(7, "g", 32);
        self.Tb(8, "line", 33);
        self.Tb(9, "path", 34);
        self.Xb();
        self.Xb();
        self.Xb();
        self.Xb();
        self.Xb();
        self.ic();
        self.Yb(10, "span", 154);
        self.Uc(11, "Mark");
        self.Xb();
        self.Xb();
      }
      if (2 & expandedKey) {
        const vars = self.kc();
        self.Db("aria-label", vars.sharedService._currentQuestion.isMarked ? "Unmark Question" : "Mark Question");
        self.Cb(2);
        self.sc("ngStyle", self.yc(3, key, vars.sharedService._testInfo.testModeId == vars.testMode.search ? "none" : ""))("checked", vars.sharedService._currentQuestion.isMarked);
      }
    }
    function subscribe(onRejection, label) {
      if (1 & onRejection) {
        const $allPanels = self.Zb();
        self.jc();
        self.ic();
        self.Yb(0, "a", 155);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().toggleFullScreen();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().toggleFullScreen();
        });
        self.Tb(1, "i", 156);
        self.Yb(2, "div", 12);
        self.Uc(3, "Full Screen");
        self.Xb();
        self.Xb();
      }
    }
    function popLink(formatters, customFormatters) {
      if (1 & formatters) {
        const $allPanels = self.Zb();
        self.jc();
        self.ic();
        self.Yb(0, "a", 157);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().toggleFullScreen();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().toggleFullScreen();
        });
        self.Tb(1, "i", 158);
        self.Yb(2, "div", 12);
        self.Uc(3, "Exit Mode");
        self.Xb();
        self.Xb();
      }
    }
    function onChange(track, elem) {
      if (1 & track) {
        const $allPanels = self.Zb();
        self.jc();
        self.ic();
        self.Yb(0, "a", 159);
        self.gc("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().openHelpMenu();
        });
        self.Tb(1, "i", 160);
        self.Yb(2, "div", 12);
        self.Uc(3, "Tutorial");
        self.Xb();
        self.Xb();
      }
      if (2 & track) {
        self.kc();
        const unexpandedFeatureDirectoryPaths = self.Ec(141);
        self.sc("matMenuTriggerFor", unexpandedFeatureDirectoryPaths);
      }
    }
    function init(flightPhase, navigationLibrary) {
      if (1 & flightPhase) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 161);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showLabValues();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showLabValues();
        });
        self.jc();
        self.Yb(1, "svg");
        self.Yb(2, "svg", 58);
        self.Tb(3, "rect", 59);
        self.Tb(4, "rect", 60);
        self.Tb(5, "path", 61);
        self.Xb();
        self.Xb();
        self.ic();
        self.Yb(6, "div", 162);
        self.Uc(7, "Lab Values");
        self.Xb();
        self.Xb();
      }
    }
    function generate(metadata, set) {
      if (1 & metadata) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 163);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showUserNotes();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showUserNotes();
        });
        self.jc();
        self.Yb(1, "svg");
        self.Yb(2, "svg", 79);
        self.Tb(3, "rect", 80);
        self.Yb(4, "text", 81);
        self.Uc(5, "ABC");
        self.Xb();
        self.Yb(6, "g", 164);
        self.Yb(7, "g", 35);
        self.Tb(8, "rect", 36);
        self.Tb(9, "polyline", 37);
        self.Tb(10, "polyline", 38);
        self.Tb(11, "rect", 39);
        self.Xb();
        self.Xb();
        self.Xb();
        self.Xb();
        self.ic();
        self.Yb(12, "div", 165);
        self.Uc(13, "Notes");
        self.Xb();
        self.Xb();
      }
    }
    function factory(value, increment) {
      if (1 & value) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 166);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showCalculator();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showCalculator();
        });
        self.jc();
        self.Yb(1, "svg");
        self.Yb(2, "svg", 83);
        self.Tb(3, "rect", 84);
        self.Tb(4, "path", 85);
        self.Tb(5, "rect", 86);
        self.Yb(6, "text", 87);
        self.Yb(7, "tspan", 88);
        self.Uc(8, "0.25");
        self.Xb();
        self.Xb();
        self.Tb(9, "rect", 89);
        self.Tb(10, "rect", 90);
        self.Tb(11, "rect", 91);
        self.Tb(12, "rect", 92);
        self.Xb();
        self.Xb();
        self.ic();
        self.Yb(13, "div", 12);
        self.Uc(14, "Calculator");
        self.Xb();
        self.Xb();
      }
    }
    function createCircleOutOverlay(position, size) {
      if (1 & position) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 167);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showUserSettings();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showUserSettings();
        });
        self.jc();
        self.Yb(1, "svg");
        self.Yb(2, "svg", 54);
        self.Tb(3, "path", 55);
        self.Tb(4, "path", 56);
        self.Tb(5, "path", 57);
        self.Xb();
        self.Xb();
        self.ic();
        self.Yb(6, "div", 12);
        self.Uc(7, "Reverse Color");
        self.Xb();
        self.Xb();
      }
    }
    function parse(event, source) {
      if (1 & event) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 168);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showUserSettings();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showUserSettings();
        });
        self.Tb(1, "i", 169);
        self.Yb(2, "div", 170);
        self.Uc(3, "Text Zoom");
        self.Xb();
        self.Xb();
      }
    }
    function build(message, propertyDefinition) {
      if (1 & message) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 171);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showUserSettings();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showUserSettings();
        });
        self.Tb(1, "i", 172);
        self.Yb(2, "div", 173);
        self.Uc(3, "Settings");
        self.Xb();
        self.Xb();
      }
    }
    function chMsg(oldValue, newValue) {
      if (1 & oldValue) {
        self.Yb(0, "span");
        self.Uc(1, " Elapsed");
        self.Xb();
      }
    }
    function addFilterMenuItem(filter, type) {
      if (1 & filter) {
        self.Yb(0, "span");
        self.Uc(1, " Remaining");
        self.Xb();
      }
    }
    function handleSubmit(next, e) {
      if (1 & next && (self.Yb(0, "span"), self.Uc(1, " Block Time"), self.Sc(2, chMsg, 2, 0, "span", 25), self.Sc(3, addFilterMenuItem, 2, 0, "span", 25), self.Uc(4, ": "), self.Yb(5, "span", 26), self.Uc(6), self.lc(7, "toHHMMSS"), self.Xb(), self.Xb()), 2 & next) {
        const config = self.kc(2);
        self.Cb(2);
        self.sc("ngIf", config.sharedService._testInfo.testModeId == config.testMode.tutor);
        self.Cb(1);
        self.sc("ngIf", config.sharedService._testInfo.testModeId == config.testMode.timedTutor || config.sharedService._testInfo.testModeId == config.testMode.timed);
        self.Cb(3);
        self.Vc(self.mc(7, 3, config.sharedService._testInfo.timeInSeconds));
      }
    }
    function timeLineNodes(formatters, customFormatters) {
      if (1 & formatters) {
        self.Yb(0, "span", 28);
        self.Uc(1, "TIMED TUTOR");
        self.Xb();
      }
    }
    function lastTimeLine(formatters, customFormatters) {
      if (1 & formatters && (self.Yb(0, "span", 28), self.Uc(1), self.Xb()), 2 & formatters) {
        const e = self.kc(3);
        self.Cb(1);
        self.Vc(e.sharedService._testInfo.testModeName);
      }
    }
    function makeCheckBox(state, desc) {
      if (1 & state && (self.Yb(0, "span"), self.Tb(1, "br"), self.Sc(2, timeLineNodes, 2, 0, "span", 27), self.Sc(3, lastTimeLine, 2, 1, "span", 27), self.Xb()), 2 & state) {
        const config = self.kc(2);
        self.Cb(2);
        self.sc("ngIf", config.sharedService._testInfo.testModeId == config.testMode.timedTutor);
        self.Cb(1);
        self.sc("ngIf", config.sharedService._testInfo.testModeId != config.testMode.timedTutor);
      }
    }
    function createLegendRow(text, background) {
      if (1 & text && (self.Yb(0, "div", 24), self.Sc(1, handleSubmit, 8, 5, "span", 25), self.Sc(2, makeCheckBox, 4, 2, "span", 25), self.Xb()), 2 & text) {
        const e = self.kc();
        self.Cb(1);
        self.sc("ngIf", e.sharedService._userPreferences.jsonSettings.testPreferences.showTimer);
        self.Cb(1);
        self.sc("ngIf", !e.testInterfaceConfig.editTestMode);
      }
    }
    function softShowFieldDetails(message, e) {
      if (1 & message && (self.Yb(0, "span"), self.Uc(1), self.Xb()), 2 & message) {
        const e = self.kc(2);
        self.Cb(1);
        self.Wc("Test Id:\u00a0", e.sharedService._testInfo.testId, "");
      }
    }
    function merged_context(cmp, expectedPillsCount) {
      if (1 & cmp && (self.Yb(0, "span"), self.Uc(1), self.Xb()), 2 & cmp) {
        const e = self.kc(2);
        self.Cb(1);
        self.Vc(e.sharedService._testInfo.testName);
      }
    }
    function activate(isA11yMode, rawKeyset) {
      if (1 & isA11yMode) {
        self.Yb(0, "span");
        self.Uc(1, "REVIEW");
        self.Xb();
      }
    }
    function search(response, isApi) {
      if (1 & response) {
        self.Yb(0, "span");
        self.Uc(1, "SEARCH");
        self.Xb();
      }
    }
    function create(url, module) {
      if (1 & url && (self.Yb(0, "div", 29), self.Sc(1, softShowFieldDetails, 2, 1, "span", 25), self.Sc(2, merged_context, 2, 1, "span", 25), self.Tb(3, "br"), self.Sc(4, activate, 2, 0, "span", 25), self.Sc(5, search, 2, 0, "span", 25), self.Xb()), 2 & url) {
        const config = self.kc();
        self.Cb(1);
        self.sc("ngIf", config.sharedService._testInfo.testId > 0 && 0 == config.sharedService._testInfo.testName.length && !config.sharedService._testInfo.isSim);
        self.Cb(1);
        self.sc("ngIf", config.sharedService._testInfo.testId > 0 && config.sharedService._testInfo.testName.length > 0 && !config.sharedService._testInfo.isSim);
        self.Cb(2);
        self.sc("ngIf", config.sharedService._testInfo.testModeId == config.testMode.review);
        self.Cb(1);
        self.sc("ngIf", config.sharedService._testInfo.testModeId == config.testMode.search);
      }
    }
    function f(res, sub) {
      if (1 & res) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 30, 31);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showEditTestModeMenu();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showEditTestModeMenu();
        });
        self.Tb(2, "i", 32);
        self.Xb();
      }
    }
    function createImageBlock(i, decalelt) {
      if (1 & i) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 33);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showNotebook();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showNotebook();
        });
        self.Tb(1, "i", 34);
        self.Yb(2, "div", 15);
        self.Uc(3, "My Notebook");
        self.Xb();
        self.Xb();
      }
    }
    function set(value, refresh) {
      if (1 & value) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 35);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showFlashcards();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showFlashcards();
        });
        self.Tb(1, "i", 36);
        self.Yb(2, "span", 37);
        self.Uc(3);
        self.Xb();
        self.Yb(4, "div", 15);
        self.Uc(5, "Flashcards");
        self.Xb();
        self.Xb();
      }
      if (2 & value) {
        const newDataList = self.kc();
        self.Cb(3);
        self.Wc(" ", newDataList.sharedService._currentQuestion.flashcardServiceTracker[newDataList.flashCardCategory.current].totalCount, " ");
      }
    }
    function on(color, callback) {
      if (1 & color) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 38);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showFeedback();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showFeedback();
        });
        self.Tb(1, "i", 39);
        self.Yb(2, "div", 15);
        self.Uc(3, "Feedback");
        self.Xb();
        self.Xb();
      }
    }
    function render(accountId, customAudiences) {
      if (1 & accountId) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 40);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().saveTest(false);
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().saveTest(false);
        });
        self.Tb(1, "i", 41);
        self.Yb(2, "div", 15);
        self.Uc(3, "Suspend");
        self.Xb();
        self.Xb();
      }
    }
    function an(type, text) {
      if (1 & type) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 42);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().saveTest(false);
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().saveTest(false);
        });
        self.Tb(1, "i", 43);
        self.Xb();
      }
    }
    function REMOTE_WINS(record, remoteValue) {
      if (1 & record) {
        self.Tb(0, "common-content", 6);
      }
    }
    function _exit(evt, callback) {
      if (1 & evt) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 17);
        self.gc("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().openHelpMenu();
        });
        self.Tb(1, "i", 18);
        self.Xb();
      }
      if (2 & evt) {
        self.kc();
        const unexpandedFeatureDirectoryPaths = self.Ec(7);
        self.sc("matMenuTriggerFor", unexpandedFeatureDirectoryPaths);
      }
    }
    function AppController($state, $ionicModal) {
      if (1 & $state) {
        const $allPanels = self.Zb();
        self.Yb(0, "div", 7);
        self.Yb(1, "p", 19);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showKeyboardShortcuts();
        })("keydown.enter", function() {
          self.Ic($allPanels);
          const view = self.kc();
          return view.showKeyboardShortcuts(), view.trigger.closeMenu();
        });
        self.Uc(2, "Keyboard Shortcuts");
        self.Xb();
        self.Xb();
      }
    }
    function axisLinks(extension, extensionslist) {
      if (1 & extension) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 20);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showLabValues();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showLabValues();
        });
        self.Tb(1, "i", 21);
        self.Xb();
      }
    }
    function addSelectedPodcast(isSlidingUp, $cont) {
      if (1 & isSlidingUp) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 22);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showFlashcards();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showFlashcards();
        });
        self.Tb(1, "i", 23);
        self.Yb(2, "p", 24);
        self.Uc(3);
        self.Xb();
        self.Xb();
      }
      if (2 & isSlidingUp) {
        const newDataList = self.kc();
        self.Cb(3);
        self.Wc(" ", newDataList.sharedService._currentQuestion.flashcardServiceTracker[newDataList.flashCardCategory.current].totalCount, " ");
      }
    }
    function fn(fullFormat, regional) {
      if (1 & fullFormat) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 25);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showNotebook();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showNotebook();
        });
        self.Tb(1, "i", 26);
        self.Xb();
      }
    }
    function evaluate(context, chromeWindow) {
      if (1 & context) {
        self.Tb(0, "i", 30);
      }
    }
    function complete(component, curr) {
      if (1 & component) {
        self.Tb(0, "i", 31);
      }
    }
    function loop(renderPos, timePos) {
      if (1 & renderPos) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 27);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showUserNotes();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showUserNotes();
        });
        self.Sc(1, evaluate, 1, 0, "i", 28);
        self.Sc(2, complete, 1, 0, "i", 29);
        self.Xb();
      }
      if (2 & renderPos) {
        const e = self.kc();
        self.Cb(1);
        self.sc("ngIf", "" == e.sharedService._currentQuestion.notes || null == e.sharedService._currentQuestion.notes);
        self.Cb(1);
        self.sc("ngIf", "" != e.sharedService._currentQuestion.notes && null != e.sharedService._currentQuestion.notes);
      }
    }
    function query(extension, status) {
      if (1 & extension) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 32);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showUserSettings();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showUserSettings();
        });
        self.Tb(1, "i", 33);
        self.Xb();
      }
    }
    function prepare(value, size) {
      if (1 & value) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 34);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showEditTestModeMenu();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showEditTestModeMenu();
        });
        self.Tb(1, "i", 35);
        self.Xb();
      }
    }
    function removeFile(file, onlyRemoveElement) {
      if (1 & file) {
        self.Tb(0, "i", 39);
      }
    }
    function In(b, c) {
      if (1 & b && (self.Yb(0, "span"), self.Uc(1), self.lc(2, "toHHMMSS"), self.Xb()), 2 & b) {
        const e = self.kc(2);
        self.Cb(1);
        self.Wc("\u00a0", self.mc(2, 1, e.sharedService._testInfo.timeInSeconds), "");
      }
    }
    function rotate(src, blocking) {
      if (1 & src && (self.Yb(0, "span"), self.Uc(1), self.lc(2, "toMMSS"), self.Xb()), 2 & src) {
        const e = self.kc(2);
        self.Cb(1);
        self.Wc("\u00a0", self.mc(2, 1, e.sharedService._testInfo.timeInSeconds), "");
      }
    }
    function drawPrevious(update_callback, selection) {
      if (1 & update_callback && (self.Yb(0, "a", 36), self.Sc(1, removeFile, 1, 0, "i", 37), self.Sc(2, In, 3, 3, "span", 38), self.Sc(3, rotate, 3, 3, "span", 38), self.Xb()), 2 & update_callback) {
        const e = self.kc();
        self.Cb(1);
        self.sc("ngIf", !e.testInterfaceConfig.editTestMode);
        self.Cb(1);
        self.sc("ngIf", e.sharedService._testInfo.timeInSeconds >= 3600);
        self.Cb(1);
        self.sc("ngIf", e.sharedService._testInfo.timeInSeconds < 3600);
      }
    }
    function createAndShowDialog(formatters, customFormatters) {
      if (1 & formatters) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 17);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().saveTest(false);
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().saveTest(false);
        });
        self.Yb(1, "p", 8);
        self.Uc(2, "Suspend\u00a0");
        self.Xb();
        self.Tb(3, "i", 18);
        self.Xb();
      }
      if (2 & formatters) {
        const e = self.kc();
        self.sc("ngClass", self.yc(1, getEvents, !e.isReviewDialogOpened));
      }
    }
    function initialize(targetingSpecId, initialValue) {
      if (1 & targetingSpecId) {
        const $allPanels = self.Zb();
        self.Yb(0, "a", 19);
        self.gc("click", function() {
          return self.Ic($allPanels), self.kc().showFeedback();
        })("keydown.enter", function() {
          return self.Ic($allPanels), self.kc().showFeedback();
        });
        self.Yb(1, "p", 8);
        self.Uc(2, "Feedback\u00a0");
        self.Xb();
        self.Tb(3, "i", 20);
        self.Xb();
      }
      if (2 & targetingSpecId) {
        const e = self.kc();
        self.sc("ngClass", self.yc(1, content, !e.isReviewDialogOpened));
      }
    }
    function filePathClone(formatters, customFormatters) {
      if (1 & formatters) {
        self.Yb(0, "p", 8);
        self.Uc(1, "Mark\u00a0");
        self.Xb();
      }
    }
    function unexpandedFeatureDirectoryPaths(commitIndex, numTestsLeft) {
      if (1 & commitIndex) {
        self.Yb(0, "p", 8);
        self.Uc(1, "Unmark\u00a0");
        self.Xb();
      }
    }
    function open(url, keepFocus) {
      if (1 & url) {
        self.Yb(0, "div", 5);
        self.Yb(1, "span", 6);
        self.Tb(2, "i", 7);
        self.Uc(3, "\u00a0This question has been marked.");
        self.Xb();
        self.Xb();
      }
    }
    function BehaviorPropertyObserver(selfSubscriber, initialValue) {
      if (1 & selfSubscriber && self.Tb(0, "common-content", 8), 2 & selfSubscriber) {
        const e = self.kc();
        self.sc("ngClass", self.zc(1, createBlock, !e.sharedService._currentQuestion.isMarked, e.sharedService._currentQuestion.isMarked));
      }
    }
    function preview(data, event) {
      if (1 & data && (self.Yb(0, "div", 2), self.Tb(1, "mat-spinner", 3), self.Xb()), 2 & data) {
        const e = self.kc();
        self.sc("ngClass", self.yc(1, server, e.sharedService._testInterfaceConfig.showTransparentProgressSpinner));
      }
    }
    function currproductid(n, froot) {
      if (1 & n) {
        self.Tb(0, "uworld-layout");
      }
    }
    function enchantedPoints(isApi, parentOrigin) {
      if (1 & isApi) {
        self.Tb(0, "nbme-layout");
      }
    }
    function Spring(options, targets) {
      if (1 & options) {
        self.Tb(0, "nbome-layout");
      }
    }
    function installAppUrl(isSlidingUp, $cont) {
      if (1 & isSlidingUp) {
        self.Yb(0, "div", 7);
        self.Uc(1, " No Internet Connection ");
        self.Xb();
      }
    }
    function constructor($state, TodoService) {
      if (1 & $state && (self.Yb(0, "div", 4), self.Sc(1, currproductid, 1, 0, "uworld-layout", 5), self.Sc(2, enchantedPoints, 1, 0, "nbme-layout", 5), self.Sc(3, Spring, 1, 0, "nbome-layout", 5), self.Sc(4, installAppUrl, 2, 0, "div", 6), self.Xb()), 2 & $state) {
        const themeProperties = self.kc();
        self.Cb(1);
        self.sc("ngIf", themeProperties.sharedService._userPreferences.jsonSettings.testPreferences.theme == themeProperties.themes.uworld);
        self.Cb(1);
        self.sc("ngIf", themeProperties.sharedService._userPreferences.jsonSettings.testPreferences.theme == themeProperties.themes.nbme);
        self.Cb(1);
        self.sc("ngIf", themeProperties.sharedService._userPreferences.jsonSettings.testPreferences.theme == themeProperties.themes.nbome);
        self.Cb(1);
        self.sc("ngIf", !themeProperties.isInternetAvailable);
      }
    }
    require.r(id);
    require.d(id, "TestInterfaceModule", function() {
      return xs;
    });
    var m2 = require("sEIs");
    var answers = require("olBU");
    var options = require("dBte");
    class ArrayContainer {
      constructor() {
        this.theme = options.o.uworld;
        this.availableThemesAndColorModes = new Map;
        this.themeNames = [];
        this.contentType = options.a.common;
        this.hints = false;
        this.vocabulary = false;
        this.calculatorTips = false;
        this.currencyCodes = false;
        this.notes = false;
        this.flashcards = false;
        this.myNoteBook = false;
        this.calculator = false;
        this.scientificCalculator = false;
        this.smartContextMenu = false;
        this.labValues = false;
        this.help = true;
        this.settings = true;
        this.bookmark = true;
        this.feedback = true;
        this.strikethrough = false;
        this.caliper = false;
        this.highlight = false;
        this.reverseColor = false;
        this.textZoom = false;
        this.multicolorhighlight = true;
        this.returnUrl = "";
        this.returnPage = "";
        this.platform = options.g.B2C;
        this.subscriptionId = 0;
        this.leftContentFlexBasis = "50%";
        this.splitscreenExplanation = true;
        this.answerOmission = true;
        this.answerElimination = false;
        this.showDefinition = false;
        this.showPassagePreview = false;
        this.answerStats = true;
        this.choiceAnswerStats = true;
        this.showTotalStats = true;
        this.statsThreshold = 500;
        this.isDemo = false;
        this.feedbackCheckbox = true;
        this.referenceSheet = false;
        this.equationsSheetId = 0;
        this.periodicTable = false;
        this.simulationMode = false;
        this.canSkipQuestion = true;
        this.docking = false;
        this.suspendTestAtExpirationDate = false;
        this.showLectureFeedback = true;
        this.showLectureFeedbackCheckbox = true;
        this.showLectureNotes = false;
        this.showLectureTutorial = false;
        this.showTestProgressBar = false;
        this.isNotesDockingAvailable = true;
        this.showFootnotes = false;
        this.subject = "Subject";
        this.system = "System";
        this.topic = "Topic";
        this.isApQbank = false;
        this.demoContactUsBannerUrl = "";
        this.skipSecondWarningForEndTest = false;
        this.showTransparentProgressSpinner = false;
        this.titleForLabValue = "Lab Values";
        this.editTestMode = true;
        this.lectureDocumentBasePathRegex = "(http(s)?)?(.)*/accounting/v\\d*/";
        this.lockdownBrowser = false;
        this.upgradeDialog = null;
        this.showTestPrep = true;
        this.showLectures = true;
        this.keyboardShortcuts = true;
        this.hideVocabularySettings = false;
        this.hideDefinitionsSettings = false;
        this.hideHintsSettings = false;
        this.autoNightMode = true;
        this.showFullScreen = true;
      }
      get availableThemes() {
        return Array.from(this.availableThemesAndColorModes.keys());
      }
      availableColorModes(array) {
        return this.availableThemesAndColorModes.get(array);
      }
    }
    var content_panes = require("UrKP");
    var pkg = require("ruxD");
    var node = require("mdVS");
    var self = require("EM62");
    var window = require("ROBh");
    var domain = require("YtkY");
    var abs = require("fNv5");
    let up = (() => {
      class QuickBase {
        constructor(options) {
          this.clientTokenHttpService = options;
        }
        getTest(name, adminState = 0, callback, options) {
          return this.clientTokenHttpService.get(answers.a.apiBasePath + "getTest/" + name + "/" + adminState).pipe(Object(domain.a)((def) => {
            return def;
          }, this.clientTokenHttpService.handleError));
        }
        getTestByQuestionIndexes(callback) {
          return this.clientTokenHttpService.post(answers.a.apiBasePath + "getTestByQuestionIndexes/", callback).pipe(Object(domain.a)((canCreateDiscussions) => {
            return canCreateDiscussions;
          }, this.clientTokenHttpService.handleError));
        }
        getExhibits(action) {
          return this.clientTokenHttpService.get(answers.a.apiBasePath + "getExhibits/" + action).pipe(Object(domain.a)((canCreateDiscussions) => {
            return canCreateDiscussions;
          }, this.clientTokenHttpService.handleError));
        }
        saveReviewDate(callback) {
          return this.clientTokenHttpService.post(answers.a.apiBasePath + "saveReviewDate/", callback).pipe(Object(domain.a)((canCreateDiscussions) => {
            return canCreateDiscussions;
          }, this.clientTokenHttpService.handleError));
        }
        saveReviewTimes(callback) {
          return this.clientTokenHttpService.post(answers.a.apiBasePath + "saveReviewTimes/", callback).pipe(Object(domain.a)((canCreateDiscussions) => {
            return canCreateDiscussions;
          }, this.clientTokenHttpService.handleError));
        }
        submitQuestion(callback) {
          return this.clientTokenHttpService.post(answers.a.apiBasePath + "submitQuestion/", callback).pipe(Object(domain.a)((canCreateDiscussions) => {
            return canCreateDiscussions;
          }, this.clientTokenHttpService.handleError));
        }
        saveQuestion(callback) {
          return this.clientTokenHttpService.post(answers.a.apiBasePath + "saveQuestion/", callback).pipe(Object(domain.a)((canCreateDiscussions) => {
            return canCreateDiscussions;
          }, this.clientTokenHttpService.handleError));
        }
        saveTest(callback) {
          return this.clientTokenHttpService.post(answers.a.apiBasePath + "saveTest/", callback).pipe(Object(domain.a)((canCreateDiscussions) => {
            return canCreateDiscussions;
          }, this.clientTokenHttpService.handleError));
        }
      }
      return QuickBase.\u0275fac = function(canCreateDiscussions) {
        return new (canCreateDiscussions || QuickBase)(self.cc(abs.a));
      }, QuickBase.\u0275prov = self.Ob({
        token : QuickBase,
        factory : QuickBase.\u0275fac,
        providedIn : "root"
      }), QuickBase;
    })();
    var m = require("BFwO");
    var jsdocType = require("kmsS");
    var q = require("lmA0");
    var v = require("uvhl");
    let Model = (() => {
      class FlyaroundController {
        constructor(delta, e, n, nodeName, node) {
          this.testInterfaceHttpService = delta;
          this.preferencesService = e;
          this.previousTestService = n;
          this.commonService = nodeName;
          this.feedbackService = node;
        }
        getTest(idx, name, n, e) {
          return answers.a.isDemo ? this.commonService.getDemoData().pipe(Object(domain.a)((result) => {
            return result.subscriptions.find((p) => {
              return p.subscriptionId == answers.a.subscriptionId;
            }).testQuestions.find((data) => {
              return data.testId == idx;
            });
          })) : this.testInterfaceHttpService.getTest(idx, name, n, e);
        }
        getTestByQuestionIndexes(i, n, e) {
          return answers.a.isDemo ? this.commonService.getDemoData().pipe(Object(domain.a)((result) => {
            let group;
            return group = n == node.c.step2 || n == node.c.rn ? result.subscriptions.find((p) => {
              return p.subscriptionId == answers.a.subscriptionId;
            }).testQuestionByIndexes.find((data) => {
              return data.testId == i;
            }) : result.subscriptions.find((p) => {
              return p.subscriptionId == answers.a.subscriptionId;
            }).testQuestionByIndexes, group.questionList = group.questionList.filter((n) => {
              return e.includes(n.questionIndex);
            }), group;
          })) : this.testInterfaceHttpService.getTestByQuestionIndexes({
            TestRecordId : i,
            QbankId : n,
            QuestionIndexes : e
          });
        }
        getPreviousTestDataForAssessments(e) {
          return this.previousTestService.getPreviousTestDataForAssessments(e);
        }
        getUserPreferences() {
          return this.preferencesService.getUserPreferences();
        }
        getExhibits(e) {
          if (answers.a.isDemo) {
            let related_node_ids = `,${e},`;
            return e && "NaN" != e ? this.commonService.getDemoData().pipe(Object(domain.a)((result) => {
              return result.subscriptions.find((p) => {
                return p.subscriptionId == answers.a.subscriptionId;
              }).exhibits.filter((timeline_mode) => {
                return related_node_ids.indexOf(`,${timeline_mode.id},`) > -1;
              });
            })) : Object(window.a)([]);
          }
          return this.testInterfaceHttpService.getExhibits(e);
        }
        sendComment(n, author, message) {
          return answers.a.isDemo ? Object(window.a)(200) : this.feedbackService.SendComment({
            questionIndex : n,
            comment : author,
            qbankId : message
          });
        }
        createHelpDeskTicket(e) {
          return answers.a.isDemo ? Object(window.a)(200) : this.feedbackService.SubmitFeedback(e);
        }
        saveReviewDate(n) {
          return answers.a.isDemo ? Object(window.a)(200) : this.testInterfaceHttpService.saveReviewDate({
            questionIndex : n
          });
        }
        saveReviewTimes(n, decimals, decimal_sep) {
          return answers.a.isDemo ? Object(window.a)(200) : this.testInterfaceHttpService.saveReviewTimes({
            questionIndex : n,
            totalTimeSpentReview : decimals,
            dailyTimeSpentReview : decimal_sep
          });
        }
        submitQuestion(n, next, parent) {
          return answers.a.isDemo ? Object(window.a)(200) : this.testInterfaceHttpService.submitQuestion({
            testRecordId : n,
            question : next,
            totalTimeSpent : parent
          });
        }
        saveQuestion(attemptId, question, siteId, component) {
          return answers.a.isDemo ? Object(window.a)(200) : this.testInterfaceHttpService.saveQuestion({
            testRecordId : attemptId,
            question : question,
            testModeId : component,
            totalTimeSpent : siteId
          });
        }
        saveTest(e) {
          return answers.a.isDemo ? this.commonService.getDemoData().pipe(Object(domain.a)((result) => {
            if (result.subscriptions) {
              return Object(window.a)(200);
            }
          })) : this.testInterfaceHttpService.saveTest(e);
        }
        savePreferences(e) {
          return answers.a.isDemo ? this.commonService.getDemoData().pipe(Object(domain.a)((result) => {
            if (result.subscriptions) {
              return Object(window.a)(200);
            }
          })) : this.preferencesService.saveUserPreferences(e);
        }
        requestForHelp(n, decimals) {
          return Object(window.a)(200);
        }
        logEventDataToFirebase(e, n) {
          this.commonService.logEventToFireBase(e, n);
        }
        updateTestMode(e, n) {
          return this.previousTestService.updateTestMode(e, n);
        }
        getTimeRemainingForTestModeChange(e) {
          return this.previousTestService.getTimeRemainingForTestModeChange(e);
        }
      }
      return FlyaroundController.\u0275fac = function(canCreateDiscussions) {
        return new (canCreateDiscussions || FlyaroundController)(self.cc(up), self.cc(m.a), self.cc(jsdocType.a), self.cc(q.a), self.cc(v.a));
      }, FlyaroundController.\u0275prov = self.Ob({
        token : FlyaroundController,
        factory : FlyaroundController.\u0275fac,
        providedIn : "root"
      }), FlyaroundController;
    })();
    let $allPanels = (() => {
      class location {
        constructor(options) {
          this.clientTokenHttpService = options;
        }
        getLabValues() {
          return this.clientTokenHttpService.get("/assets/js/labs_v1.json").pipe(Object(domain.a)((canCreateDiscussions) => {
            return canCreateDiscussions;
          }, this.clientTokenHttpService.handleError));
        }
      }
      return location.\u0275fac = function(name) {
        return new (name || location)(self.cc(abs.a));
      }, location.\u0275prov = self.Ob({
        token : location,
        factory : location.\u0275fac,
        providedIn : "root"
      }), location;
    })();
    let rc_epoch = (() => {
      class Server extends Model {
        constructor(email, body, callback, metadata, http_servers, user_opts) {
          super(body, callback, metadata, http_servers, user_opts);
          this.testInterfaceUsmleHttpService = email;
          this.testInterfaceHttpService = body;
          this.preferencesService = callback;
          this.previousTestsService = metadata;
          this.commonService = http_servers;
          this.feedbackService = user_opts;
        }
        getLabValues() {
          return this.testInterfaceUsmleHttpService.getLabValues();
        }
      }
      return Server.\u0275fac = function(username) {
        return new (username || Server)(self.cc($allPanels), self.cc(up), self.cc(m.a), self.cc(jsdocType.a), self.cc(q.a), self.cc(v.a));
      }, Server.\u0275prov = self.Ob({
        token : Server,
        factory : Server.\u0275fac,
        providedIn : "root"
      }), Server;
    })();
    var EffectChain = require("FJSO");
    var ts = require("OZ4H");
    var localStorageObject = require("zS9E");
    var C = require("Jylc");
    var __current_script = require("TvKC");
    var c = require("AA3q");
    var ws = require("ovUw");
    var p = require("n3yR");
    var feedback = require("gMT8");
    var event = require("QNRt");
    let categoriesTitleElement = (() => {
      class GlobalEventHandler {
        constructor(mathDialog, routePath, handler, listener, eventName, doc, editorSession, comp, options, e) {
          this.dialog = mathDialog;
          this.flashcardTestInterfaceService = routePath;
          this.flashcardsService = handler;
          this.flashcardHttpService = listener;
          this.sharedService = eventName;
          this.dialogFlashcardService = doc;
          this.divisionsService = editorSession;
          this.commonService = comp;
          this.divisionUSMLEService = options;
          this.flashcardTestInterfaceLibraryService = e;
        }
        deckListFetched(e) {
          this.flashcardsService.testInterfaceDeckListFetched(e);
          this.flashcardTestInterfaceService.deckListFetched(this.flashcardsService.decksBySubscription);
        }
        getTestFlashcards(e, eventName) {
          return answers.a.isDemo ? this.commonService.getDemoData().pipe(Object(domain.a)((result) => {
            let t = result.subscriptions.find((p) => {
              return p.subscriptionId == answers.a.subscriptionId;
            });
            return {
              decks : t.deckList,
              flashCards : t.flashCardList
            };
          })) : this.flashcardTestInterfaceService.getTestFlashCards(e);
        }
        getRelatedOtherFlashcards(e = null) {
          return null == e && (e = this.sharedService._currentQuestion.questionIndex), this.flashcardTestInterfaceService.getRelatedOtherFlashCards(e);
        }
        openFlashcardsTIMainScreen() {
          this.openCardViewDialog({
            inTestInterface : true,
            flashcardScreen : EffectChain.a.TIMainScreen,
            selectedType : options.c.all,
            dialogMaximized : !this.sharedService._userPreferences.jsonSettings.testPreferences.isflashcardsMinimized,
            currentQuestion : this.sharedService._currentQuestion,
            qbankFilterList : this.sharedService._qbankFilterList && this.sharedService._currentQuestion && this.sharedService._currentQuestion.systemId ? this.sharedService._qbankFilterList : this.sharedService._qbankFilterList.map((askForResult) => {
              let universe = Object.assign({}, askForResult);
              return universe.systems = [], universe;
            }),
            deckTypeId : node.o.userDecks
          });
        }
        addContentToANewFlashcard(e, divinity = "") {
          if (this.dialog.openDialogs && this.dialog.openDialogs.some((timeline_mode) => {
            return "flashcards-ti-popup" == timeline_mode.id;
          })) {
            this.dialog.openDialogs.find((timeline_mode) => {
              return "flashcards-ti-popup" == timeline_mode.id;
            }).componentInstance.addContentToANewFlashcardFromContextMenu(e, divinity);
            $("#flashcards-ti-popup").closest(".cdk-global-overlay-wrapper").css("z-index", ++this.sharedService.zIndexForDialog);
          } else {
            this.openCardViewDialog({
              inTestInterface : true,
              flashcardScreen : EffectChain.a.CardAddEditScreen,
              contentToAddToANewCardFront : e,
              contentToAddToANewCardBack : divinity,
              selectedType : options.c.all,
              dialogMaximized : !this.sharedService._userPreferences.jsonSettings.testPreferences.isflashcardsMinimized,
              currentQuestion : this.sharedService._currentQuestion,
              qbankFilterList : this.sharedService._qbankFilterList,
              deckTypeId : node.o.userDecks
            });
          }
        }
        addContentToAnExistingFlashcard(e) {
          if (this.dialog.openDialogs && this.dialog.openDialogs.some((timeline_mode) => {
            return "flashcards-ti-popup" == timeline_mode.id;
          })) {
            this.dialog.openDialogs.find((timeline_mode) => {
              return "flashcards-ti-popup" == timeline_mode.id;
            }).componentInstance.addContentToAnExistingFlashcardFromContextMenu(e);
            $("#flashcards-ti-popup").closest(".cdk-global-overlay-wrapper").css("z-index", ++this.sharedService.zIndexForDialog);
          } else {
            this.openCardViewDialog({
              inTestInterface : true,
              flashcardScreen : EffectChain.a.TIMainScreen,
              selectedType : options.c.all,
              dialogMaximized : !this.sharedService._userPreferences.jsonSettings.testPreferences.isflashcardsMinimized,
              currentQuestion : this.sharedService._currentQuestion,
              qbankFilterList : this.sharedService._qbankFilterList,
              deckTypeId : node.o.userDecks,
              contentToAddToAnExistingCard : e
            });
          }
        }
        addContentToFlashcardInUse(e, divinity = "") {
          if (this.dialog.openDialogs && this.dialog.openDialogs.some((timeline_mode) => {
            return "flashcards-ti-popup" == timeline_mode.id;
          })) {
            this.dialog.openDialogs.find((timeline_mode) => {
              return "flashcards-ti-popup" == timeline_mode.id;
            }).componentInstance.addContentToFlashcardInUse(e, divinity);
            $("#flashcards-ti-popup").closest(".cdk-global-overlay-wrapper").css("z-index", ++this.sharedService.zIndexForDialog);
          }
        }
        openCardViewDialog(scope) {
          let width0 = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
          let BURN_MAX_HP_MOD = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          let neededWidth = Math.min(1E3, .5 * BURN_MAX_HP_MOD) + "px";
          let dxdydust = Math.min(1E3, .8 * width0) + "px";
          scope.userPreferences = this.sharedService._userPreferences;
          this.dialogFlashcardService.openDialog({
            id : "flashcards-ti-popup",
            panelClass : "cardview-dialog-container",
            hasBackdrop : false,
            width : neededWidth,
            height : dxdydust,
            data : scope,
            restoreFocus : false
          });
        }
        getDivisionNames() {
          return answers.a.isDemo ? this.commonService.getDemoData().pipe(Object(domain.a)((result) => {
            return result.subscriptions[0].divisions;
          })) : this.getClientConfig().topLevelProductId == options.p.USMLE ? this.divisionUSMLEService.getUSMLEDivisionNamesWholeObject() : this.divisionsService.getDivisionNames();
        }
        getClientConfig() {
          return this.commonService.clientConfig;
        }
        getSubscriptionId() {
          return answers.a.subscriptionId;
        }
        getQBankId() {
          return answers.a.qbankId;
        }
        isDemo() {
          return answers.a.isDemo;
        }
        searchFlashcards(e) {
          return this.flashcardHttpService.searchFlashcards(e);
        }
        testFlashcardsFetched(e) {
          this.flashcardTestInterfaceLibraryService.testFlashcardsFetched(e);
        }
        showFlashcardsOfAType(e, eventName) {
          this.flashcardTestInterfaceLibraryService.showFlashcardsOfAType(e, eventName);
        }
        moreFlashcardsFetchedInSearch(e) {
          this.flashcardTestInterfaceLibraryService.moreFlashcardsFetchedInSearch(e);
        }
        updateMainInterfaceFlashcardCount(e) {
          this.flashcardTestInterfaceLibraryService.updateMainInterfaceFlashcardCount(e);
        }
      }
      return GlobalEventHandler.\u0275fac = function(canCreateDiscussions) {
        return new (canCreateDiscussions || GlobalEventHandler)(self.cc(ts.b), self.cc(localStorageObject.a), self.cc(C.a), self.cc(__current_script.a), self.cc(c.a), self.cc(ws.a), self.cc(p.a), self.cc(q.a), self.cc(feedback.a), self.cc(event.a));
      }, GlobalEventHandler.\u0275prov = self.Ob({
        token : GlobalEventHandler,
        factory : GlobalEventHandler.\u0275fac,
        providedIn : "root"
      }), GlobalEventHandler;
    })();
    var doc = require("oJqm");
    var A = require("4tix");
    class KeyboardEventListener {
      constructor() {
        this.canShowBlockTime = true;
        this.canShowAnswer = true;
        this.canShowSuspend = true;
      }
    }
    var P = require("166K");
    var message = require("pBxc");
    var GenerateGif = require("aCC2");
    var currentTransformMatrix = require("C05f");
    let searchQ = (() => {
      class location {
        constructor(options) {
          this.sharedService = options;
          this.timer = null;
          this.questionTimer = null;
          this.reviewSearchTimer = null;
          this._onTimerEnd = new currentTransformMatrix.a(false);
          this._onSubscriptionTimerEnd = new currentTransformMatrix.a(false);
          this.timerPaused = false;
        }
        startTimer() {
          this.timerPaused = false;
          if (!this.timer) {
            this.timer = this.sharedService._testInfo.testModeId == options.n.timed || this.sharedService._testInfo.testModeId == options.n.timedTutor ? setInterval(this.runClockDescending.bind(this), 1E3) : setInterval(this.runClockAscending.bind(this), 1E3);
            this.startQuestionTimer();
          }
        }
        pauseTimer() {
          this.timerPaused = true;
        }
        resumeTimer() {
          this.timerPaused = false;
        }
        startQuestionTimer() {
          if (!this.questionTimer) {
            this.questionTimer = setInterval(this.runQuestionClockAscending.bind(this), 1E3);
          }
        }
        runClockDescending() {
          if (!this.timerPaused) {
            if (this.sharedService._testInfo.timeInSeconds > 0) {
              this.sharedService._testInfo.timeInSeconds--;
            }
            if (this.sharedService._testInfo.subscriptionElapsedTime > 0) {
              this.sharedService._testInfo.subscriptionElapsedTime--;
            }
            if (this.sharedService._examInfo && this.sharedService._examInfo.timeInSeconds > 0) {
              this.sharedService._examInfo.timeInSeconds--;
            }
            if (this.sharedService._examInfo && this.sharedService._examInfo.tests) {
              if (this.sharedService._examInfo.timeInSeconds < 0) {
                this.stopTimer();
                this._onTimerEnd.next(true);
              }
            } else {
              if (this.sharedService._testInfo.timeInSeconds <= 0) {
                this.stopTimer();
                this._onTimerEnd.next(true);
              } else {
                if (this.sharedService._testInfo.subscriptionElapsedTime <= 0) {
                  this.stopTimer();
                  this._onSubscriptionTimerEnd.next(true);
                }
              }
            }
          }
        }
        runClockAscending() {
          if (!this.timerPaused) {
            this.sharedService._testInfo.timeInSeconds++;
          }
        }
        runQuestionClockAscending() {
          if (!this.timerPaused) {
            if (this.sharedService._currentQuestion) {
              this.sharedService._currentQuestion.timeSpent++;
              this.sharedService._currentQuestion.dailyTimeSpent++;
            }
          }
        }
        stopTimer() {
          if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
          }
          this.stopQuestionTimer();
        }
        stopQuestionTimer() {
          if (this.questionTimer) {
            clearInterval(this.questionTimer);
            this.questionTimer = null;
          }
        }
        startReviewAndSearchTimer() {
          if (!this.reviewSearchTimer) {
            this.reviewSearchTimer = setInterval(this.runReviewSearchClock.bind(this), 1E3);
          }
        }
        stopReviewAndSearchTimer() {
          if (this.reviewSearchTimer) {
            clearInterval(this.reviewSearchTimer);
            this.reviewSearchTimer = null;
          }
        }
        runReviewSearchClock() {
          if (this.sharedService._currentQuestion) {
            this.sharedService._currentQuestion.totalTimeSpentReview++;
            this.sharedService._currentQuestion.dailyTimeSpentReview++;
          }
        }
        destroyTimers() {
          this.stopTimer();
          this.stopReviewAndSearchTimer();
        }
      }
      return location.\u0275fac = function(name) {
        return new (name || location)(self.cc(c.a));
      }, location.\u0275prov = self.Ob({
        token : location,
        factory : location.\u0275fac,
        providedIn : "root"
      }), location;
    })();
    class Assert {
      constructor(identifier) {
        this.id = identifier;
        this.serviceCallRequired = true;
        this.totalCount = 0;
        this.availableCount = 0;
      }
    }
    class z {
    }
    class U {
    }
    let configReplica = (() => {
      class body {
        parseQuestionsInTest(g) {
          let t = "initialnav";
          let i = false;
          return g.questionList.forEach((p, percent) => {
            if (p.isUpdateDateAttempted = false, p.sequenceId != g.lastQuestionVisited || i || (g.lastQuestionVisited = percent + 1, i = true), p.sequenceIdForDisplay = p.sequenceId, p.sequenceId = percent + 1, p.flashcardServiceTracker = {
              [options.c.current]:new Assert(options.c.current),
              [options.c.related]:new Assert(options.c.related),
              [options.c.other]:new Assert(options.c.other),
              [options.c.search]:null,
              [options.c.all]:null
            }, g.qbankId == options.h.med_math || g.qbankId == options.h.rn || g.qbankId == options.h.pn) {
              const i = p.sequenceId > 1 && g.questionList[p.sequenceId - 2].parentQuestionId == p.parentQuestionId;
              const xx = p.sequenceId < g.questionList.length && g.questionList[p.sequenceId].parentQuestionId == p.parentQuestionId;
              if (p.parentQuestionId > 0 && (i || xx)) {
                if (percent > 0 && p.parentQuestionId != g.questionList[percent - 1].parentQuestionId) {
                  t = "initialnav" == t ? "alternatenav" : "initialnav";
                }
                p.classToSet = t;
                if (g.qbankId == options.h.med_math && p.questionSetSequenceId > 1 && g.questionList[percent - 1] && (g.testModeId == options.n.timedTutor || g.testModeId == options.n.tutor) && g.questionList[percent - 1].isSubmitted) {
                  p.isQuestionDisabled = false;
                }
              } else {
                t = "";
              }
            }
          }), g;
        }
      }
      return body.\u0275fac = function(data) {
        return new (data || body);
      }, body.\u0275prov = self.Ob({
        token : body,
        factory : body.\u0275fac,
        providedIn : "root"
      }), body;
    })();
    var __WEBPACK_LABELED_MODULE__3 = require("grJQ");
    var renderAssign = require("ZTXN");
    var schema = require("P4Xx");
    var exportsB = require("ie6k");
    var $ = require("yg1t");
    var neatHelp = require("tegS");
    var constants = require("0ydL");
    var G = require("1+bn");
    var DhtEvent = require("oCy6");
    var CheckDailyStat = require("qCjJ");
    var EventConsts = require("awpD");
    var dialogGeometry = require("e9Qz");
    var props = require("2kYt");
    let clrVal = (() => {
      class Player {
        constructor(reason, amount, label, language, limit, time, options, id, data, entity, obj) {
          this.sharedService = reason;
          this.timerService = amount;
          this.dialog = label;
          this.flashcardTestInterfaceFeaturesService = language;
          this.inlineExhibitsService = limit;
          this.dialogNotesService = time;
          this.dialogLabvaluesService = options;
          this.dockingService = id;
          this.questionService = data;
          this.router = entity;
          this.location = obj;
          this.flashCardServiceCallDone = false;
          this.testFlashcardsFetched = false;
          this.saveQuestionInProgress = false;
          this.saveTestInProgress = false;
          this.shortcutsDisabled = false;
          this.time = 0;
          this.highlightsLoaded = false;
          this.oldUserAnswer = "";
          this.screenWidth = 0;
          this.displayLeftNavigator = true;
          this.loadHighlightsHandle = null;
          this.multipleExhibits = [];
          this.asyncServiceCallInProgress = false;
          this.showProgressSpinner = true;
          this.newTestModeId = null;
          this.changeTestModeInProgress = false;
          this.nextTriggerIndex = 0;
          this.lastTriggerIndex = 0;
          this._onQuestionChange = new renderAssign.a;
          this._onSubmitQuestion = new renderAssign.a;
          this._onQuestionLoad = new renderAssign.a;
          this._onSaveQuestion = new renderAssign.a;
          this.sharedService._commonContractImpl = this;
          this.dockingService.commonContractAssigned();
        }
        get onQuestionChange() {
          return this._onQuestionChange;
        }
        get onSubmitQuestion() {
          return this._onSubmitQuestion;
        }
        get onQuestionLoad() {
          return this._onQuestionLoad;
        }
        get isAnyDialogDocked() {
          return this.sharedService._userPreferences.jsonSettings.testPreferences.dockedElements.flashcards || this.sharedService._userPreferences.jsonSettings.testPreferences.dockedElements.labvalues || this.sharedService._userPreferences.jsonSettings.testPreferences.dockedElements.notebook || this.sharedService._userPreferences.jsonSettings.testPreferences.dockedElements.notes;
        }
        validateUserAnswer(data) {
          if (data) {
            data.isCorrect = false;
            data.isOmitted = false;
            data.isIncorrect = false;
            if (data.formatTypeId == options.i.singleBestResponse) {
              if (parseInt(data.correctAnswer) == data.userAnswer) {
                data.isCorrect = true;
              } else {
                if ("0" === data.userAnswer || "" === data.userAnswer) {
                  data.isOmitted = true;
                } else {
                  data.isIncorrect = true;
                }
              }
            }
          }
        }
        setUserAnswerStats() {
          this.sharedService._currentQuestion.isUpdateDateAttempted = true;
          if ("0" !== this.oldUserAnswer && "" !== this.oldUserAnswer) {
            if (this.oldUserAnswer != this.sharedService._currentQuestion.userAnswer) {
              if (this.sharedService._currentQuestion.userAnswer == this.sharedService._currentQuestion.correctAnswer) {
                this.sharedService._testInfo.incorrectToCorrect++;
              } else {
                if (this.oldUserAnswer == this.sharedService._currentQuestion.correctAnswer && this.sharedService._currentQuestion.userAnswer != this.sharedService._currentQuestion.correctAnswer) {
                  this.sharedService._testInfo.correctToIncorrect++;
                } else {
                  this.sharedService._testInfo.incorrectToIncorrect++;
                }
              }
              if (!this.sharedService._currentQuestion.isAnswerChoiceDisabled) {
                this.sharedService._currentQuestion.isUpdateDateAttempted = true;
              }
            }
          } else {
            this.sharedService._currentQuestion.isUpdateDateAttempted = true;
          }
          this.oldUserAnswer = this.sharedService._currentQuestion.userAnswer;
        }
        nextQuestion() {
          if (this.sharedService._testInfo.lastQuestionVisited < this.sharedService._testInfo.questionList.length) {
            this.changeQuestion(this.sharedService._testInfo.lastQuestionVisited + 1);
          } else {
            this.handleTestExit(true);
          }
        }
        previousQuestion() {
          if (this.sharedService._testInfo.lastQuestionVisited > 1) {
            let i = this.sharedService._testInfo.lastQuestionVisited - 1;
            if (this.sharedService._testInfo.questionList[i - 1].questionToAnswerBeforeThis > 0) {
              i = this.getIndexOfLastAnsweredQuestionInTheSet(i - 1) + 1;
            }
            this.changeQuestion(i);
          } else {
            let e = new P.a;
            e.Title = "Warning";
            e.isConfirmBox = false;
            e.OKButtonText = "Ok";
            e.Description = "You are already at the first item in the block.";
            this.dialog.open(message.a, {
              width : "600px",
              data : e,
              panelClass : "myapp-no-padding-dialog",
              hasBackdrop : true,
              disableClose : true
            }).afterClosed().subscribe((canCreateDiscussions) => {
            });
          }
        }
        setupHighlights() {
          if (this.mathjaxHook && (MathJax.Hub.signal.hooks["End Process"].Remove(this.mathjaxHook), this.mathjaxHook = null), this.hasMathjax()) {
            this.time = Date.now();
            let deepQuery = false;
            this.mathjaxHook = MathJax.Hub.Register.MessageHook("End Process", (canCreateDiscussions) => {
              let i = Date.now() - this.time;
              if (!deepQuery && i > 400) {
                deepQuery = true;
                this.loadHighlightsHandle = setTimeout(() => {
                  this.loadHighlights();
                  this.loadHighlightsHandle = null;
                });
              }
            });
          } else {
            this.loadHighlightsHandle = setTimeout(() => {
              this.loadHighlights();
              this.loadHighlightsHandle = null;
            });
          }
        }
        hasMathjax() {
          let args = this.sharedService._currentQuestion;
          return ((this.sharedService._launchTestOptions.canShowAnswer ? args.explanationText : "") + args.questionText + args.answerChoiceList.map((queuedDecision) => {
            return queuedDecision.choice;
          }).join("")).includes("<math");
        }
        unloadHighlights() {
          if (this.loadHighlightsHandle) {
            clearTimeout(this.loadHighlightsHandle);
            this.loadHighlightsHandle = null;
          }
          if (this.sharedService._highlights.highlightObj) {
            this.sharedService._highlights.highlightObj.clearHighlights();
          }
          this.sharedService._highlights.highlightObj = null;
          this.sharedService._highlights.annotationMap = null;
          this.highlightsLoaded = false;
        }
        loadHighlights() {
          var connection1 = this.sharedService._currentQuestion.highlights ? this.sharedService._currentQuestion.highlights : "";
          this.sharedService._highlights = new neatHelp.a(new GenerateGif.a, connection1, this.sharedService._highlights.removeOnClick);
          this.highlightsLoaded = true;
          this.onHighlightLimitReached = this.sharedService._highlights._onHighlightLimitReached.subscribe((asyncsRunning) => {
            if (asyncsRunning) {
              this.highlightsExceeded(asyncsRunning.count);
            }
          });
        }
        highlightsExceeded(authInfo) {
          let msg = new P.a;
          msg.Title = "Error";
          msg.isConfirmBox = false;
          msg.OKButtonText = "Ok";
          msg.Description = "You've already entered " + authInfo + " highlights / strikeouts for this question.";
          this.dialog.open(message.a, {
            width : "600px",
            data : msg,
            panelClass : "myapp-no-padding-dialog",
            hasBackdrop : true,
            disableClose : true
          });
        }
        saveHighlights() {
          if (this.highlightsLoaded) {
            const stripTerrain = this.sharedService._currentQuestion.highlights;
            const coast = this.sharedService._highlights.highlightObj.GetHighlightsString();
            if (stripTerrain != coast) {
              this.sharedService._currentQuestion.highlights = coast;
              this.sharedService._currentQuestion.isQuestionDirty = true;
            }
          }
        }
        getIndexOfLastAnsweredQuestionInTheSet(i) {
          let task = this.sharedService._testInfo.questionList[i];
          for (; i > 0 && task.questionToAnswerBeforeThis > 0 && task.isQuestionDisabled && !task.isSubmitted;) {
            i--;
            task = this.sharedService._testInfo.questionList[i];
          }
          return i;
        }
        reloadHighlights() {
          setTimeout(() => {
            var result;
            for (result of this.sharedService._highlights.highlightObj = new exportsB.a(this.sharedService._currentQuestion.highlights, this.sharedService._highlights._onHighlightClick, this.sharedService._highlights._onHighlightCount), null != this.sharedService._highlights.highlightObj.highlightList && this.sharedService._highlights.highlightObj.highlightList.length > 0 && (this.sharedService._highlights.annotationMap = new Map), this.sharedService._highlights.highlightObj.highlightList) {
              result.selectionState = $.a.highlight;
              this.sharedService._highlights.annotationMap.set(result.id, result);
            }
          }, 0);
        }
        selectQuestion(i) {
          if (!(i != this.sharedService._currentQuestion.sequenceId && this.sharedService._testInfo.testModeId != options.n.review && this.sharedService._testInfo.questionList[i - 1].isQuestionDisabled)) {
            this.changeQuestion(i);
          }
        }
        changeQuestion(i) {
          if (i != this.sharedService._currentQuestion.sequenceId) {
            if (this.checkIfQuestionDisabled(i - 1)) {
              return;
            }
            if (!this.sharedService.unSavedChangesInfo.skipDialogUnsavedChanges && !this.sharedService.handleDialogUnSavedChanges(options.q.ChangeQuestion, i)) {
              return;
            }
            this.saveCurrentQuestion();
            this.unloadHighlights();
            this.inlineExhibitsService.closeAllExhibits();
            this.closeDrugAdFullScreen();
            this.sharedService._testInfo.lastQuestionVisited = i;
            if (this.sharedService._testInfo.questionList.find((data) => {
              return data.sequenceId == i;
            }).serviceCallRequiredForData) {
              this.checkAndInitiateIncrementalLoading(i);
              this.sharedService._testInterfaceConfig.showTransparentProgressSpinner = true;
              this.shortcutsDisabled = true;
            } else {
              this.loadQuestion();
              this.onQuestionChange.next();
              if (!this.asyncServiceCallInProgress && this.sharedService._testInfo.questionList.slice(Math.max(i - 3, 0), i + 3).filter((canCreateDiscussions) => {
                return canCreateDiscussions.serviceCallRequiredForData;
              }).length > 0) {
                this.asyncServiceCallInProgress = true;
                this.checkAndInitiateIncrementalLoading(i);
              }
            }
          }
        }
        checkIfQuestionDisabled(i) {
          if (this.sharedService._testInfo.testModeId == options.n.review) {
            return false;
          }
          const t = this.sharedService._testInfo.questionList[i];
          if (i > 0 && t.questionToAnswerBeforeThis > 0 && t.isQuestionDisabled) {
            if ("0" == this.sharedService._testInfo.questionList[i - 1].userAnswer) {
              return this.showSetQuestionNotAnsweredWarning(i, "You have not answered this item.<br/> You will not be able to select an answer for this item if you proceed to next item.<br/><br/> Do you wish to proceed?"), true;
            }
            if (t.isQuestionDisabled) {
              return this.showSetQuestionNotAnsweredWarning(i, "You will not be able to change this answer if you proceed to next item.<br/><br/> Do you wish to proceed?"), true;
            }
          }
          return false;
        }
        showSetQuestionNotAnsweredWarning(i, file) {
          const coords1 = this.sharedService._testInfo.questionList[i];
          let info = new P.a;
          info.Title = "Warning";
          info.isConfirmBox = true;
          info.OKButtonText = "YES";
          info.CancelButtonText = "No";
          info.Description = file;
          this.dialog.open(message.a, {
            width : "600px",
            data : info,
            panelClass : "myapp-no-padding-dialog"
          }).beforeClosed().subscribe((canCreateDiscussions) => {
            if (canCreateDiscussions) {
              coords1.isQuestionDisabled = false;
              this.sharedService._testInfo.questionList.filter((coords0) => {
                return coords0.parentQuestionId === coords1.parentQuestionId && coords0.questionToAnswerBeforeThis < coords1.questionToAnswerBeforeThis;
              }).forEach((canCreateDiscussions) => {
                return canCreateDiscussions.isAnswerChoiceDisabled = true;
              });
              this.changeQuestion(i + 1);
            }
          });
        }
        saveCurrentQuestion() {
          this.saveHighlights();
          if (this.sharedService._testInfo.testModeId != options.n.search) {
            if (this.sharedService._currentQuestion && this.sharedService._currentQuestion.isQuestionDirty) {
              this.saveQuestion(this.sharedService._currentQuestion);
            } else {
              this.sharedService._testInterfaceContractImpl.saveReviewTimes(this.sharedService._currentQuestion.questionIndex, this.sharedService._currentQuestion.totalTimeSpentReview, this.sharedService._currentQuestion.dailyTimeSpentReview).subscribe();
              this._onSaveQuestion.next();
            }
          } else {
            if (this.sharedService._currentQuestion) {
              this.sharedService._testInterfaceContractImpl.saveReviewTimes(this.sharedService._currentQuestion.questionIndex, this.sharedService._currentQuestion.totalTimeSpentReview, this.sharedService._currentQuestion.dailyTimeSpentReview).subscribe();
              this._onSaveQuestion.next();
            }
          }
        }
        parseQuestionsInfo(e) {
          return e.questionList.forEach((action, canCreateDiscussions) => {
            let options = [];
            let fullStack = [];
            if (null != action.questionText.match(/<table[^>]*>/gi) && (options = action.questionText.match(/<td[^>]*(bgcolor=["']{0,1}(#c0c0c0)["']{0,1})[^>]*>/gi), null != options)) {
              fullStack = Object.assign([], options);
              var i = 0;
              for (; i < options.length; i++) {
                options[i] = options[i].replace(/(bgcolor=["']{0,1}(#c0c0c0)["']{0,1})/gi, 'id="vignettedescriptor"');
                action.questionText = action.questionText.replace(fullStack[i], options[i]);
              }
            }
            const directly = /href="([^"]*)"/g;
            let pipelets = [];
            let cache_message = [];
            let c = true;
            for (; null !== (cache_message = directly.exec(action.questionText));) {
              if (cache_message[1]) {
                pipelets = cache_message[1].split(",");
                c = true;
                pipelets.forEach((commentToCheck) => {
                  if ("" !== commentToCheck.trim() && isNaN(parseInt(commentToCheck.trim()))) {
                    c = false;
                  }
                });
                if (c) {
                  this.addMultipleExhibits(action.questionIndex, cache_message[1]);
                }
              }
            }
          }), e;
        }
        addMultipleExhibits(type, data) {
          var expRecords = this.multipleExhibits.filter(function(call) {
            if (call.questionIndex == type) {
              return call;
            }
          });
          if (expRecords.length > 0) {
            if (expRecords[0].exhibitId.filter(function(canCreateDiscussions) {
            }) <= 0) {
              expRecords[0].exhibitId.push(data);
            }
          } else {
            this.multipleExhibits.push({
              type : "Questions",
              questionIndex : type,
              exhibitId : [data]
            });
          }
        }
        loadQuestion() {
          var e;
          let i = this.sharedService._testInfo.lastQuestionVisited - 1;
          if (this.sharedService._currentQuestion = null, this.sharedService._currentAbstract = null, this.sharedService._currentQuestion = this.sharedService._testInfo.questionList[i], this.oldUserAnswer = null === (e = this.sharedService._currentQuestion) || void 0 === e ? void 0 : e.userAnswer, this.sharedService._currentQuestion.abstractId > 0 && (this.sharedService._currentAbstract = this.sharedService._testInfo.abstractList.find((timeline_mode) => {
            return timeline_mode.id == this.sharedService._currentQuestion.abstractId;
          })), "0" !== this.sharedService._currentQuestion.userAnswer && "" !== this.sharedService._currentQuestion.userAnswer && (this.sharedService._currentQuestion.userAnswer = parseInt(this.sharedService._currentQuestion.userAnswer)), this.sharedService._currentQuestion) {
            if (this.sharedService._testInfo.testModeId == options.n.review || this.sharedService._testInfo.testModeId == options.n.search) {
              this.sharedService._currentQuestion.isQuestionDirty = false;
              this.sharedService._currentQuestion.isAnswerChoiceDisabled = true;
              this.sharedService._testInterfaceContractImpl.saveReviewDate(this.sharedService._currentQuestion.questionIndex).subscribe();
              this.timerService.startReviewAndSearchTimer();
            } else {
              if (this.sharedService._testInfo.testModeId == options.n.tutor || this.sharedService._testInfo.testModeId == options.n.timedTutor) {
                if (this.sharedService._currentQuestion.isSubmitted) {
                  this.timerService.stopTimer();
                  this.sharedService._launchTestOptions.canShowAnswer = true;
                  this.sharedService._currentQuestion.isAnswerChoiceDisabled = true;
                  this.sharedService._testInterfaceContractImpl.saveReviewDate(this.sharedService._currentQuestion.questionIndex).subscribe();
                  this.timerService.startReviewAndSearchTimer();
                } else {
                  this.timerService.stopReviewAndSearchTimer();
                  this.timerService.startTimer();
                  this.sharedService._launchTestOptions.canShowAnswer = false;
                  this.sharedService._currentQuestion.isQuestionDirty = true;
                }
              } else {
                if (this.sharedService._currentQuestion.isQuestionDirty = true, this.sharedService._launchTestOptions.canShowAnswer = false, this.sharedService._currentQuestion.isAnswerChoiceDisabled = false, this.sharedService._currentQuestion.parentQuestionId > 0 && i + 1 < this.sharedService._testInfo.questionList.length) {
                  let e = this.sharedService._testInfo.questionList[i + 1];
                  if (e.parentQuestionId > 0 && e.parentQuestionId == this.sharedService._currentQuestion.parentQuestionId && e.questionToAnswerBeforeThis > 0 && !e.isQuestionDisabled) {
                    this.sharedService._currentQuestion.isAnswerChoiceDisabled = true;
                  }
                }
                this.timerService.startTimer();
              }
            }
            this.handleFlashcards();
            this.handleSplitScreen();
            setTimeout(() => {
              this.handleExhibits();
            }, 0);
            this.setupHighlights();
            this.scrollScreenTop();
          } else {
            let msg = new P.a;
            msg.Title = "Error";
            msg.isConfirmBox = false;
            msg.OKButtonText = "Ok";
            msg.Description = "Unable to load question, Please contact support@uworld.com";
            this.dialog.open(message.a, {
              width : "600px",
              data : msg,
              panelClass : "myapp-no-padding-dialog",
              hasBackdrop : true,
              disableClose : true
            }).afterClosed().subscribe((canCreateDiscussions) => {
            });
          }
          setTimeout(() => {
            var result;
            for (result of this.sharedService._highlights.highlightObj = new exportsB.a(this.sharedService._currentQuestion.highlights, this.sharedService._highlights._onHighlightClick, this.sharedService._highlights._onHighlightCount), null != this.sharedService._highlights.highlightObj.highlightList && this.sharedService._highlights.highlightObj.highlightList.length > 0 && (this.sharedService._highlights.annotationMap = new Map), this.sharedService._highlights.highlightObj.highlightList) {
              result.selectionState = $.a.highlight;
              this.sharedService._highlights.annotationMap.set(result.id, result);
            }
          }, 0);
          setTimeout(() => {
            return this.onQuestionLoad.next();
          });
        }
        handleFlashcards() {
          if (this.testFlashcardsFetched) {
            this.sharedService._currentQuestion.flashcardServiceTracker[options.c.current].totalCount = this.flashcardTestInterfaceFeaturesService.flashcardsMaster.filter((canCreateDiscussions) => {
              return canCreateDiscussions.questionIndex == this.sharedService._currentQuestion.questionIndex;
            }).length;
            this.callGetRelatedFlashcardsIfNeeded();
          } else {
            const __srcFile__ = this.flashcardTestInterfaceFeaturesService.getDivisions(this.sharedService._clientConfig.topLevelProductId);
            const handleDragInit = this.flashcardTestInterfaceFeaturesService.getTestFlashcards();
            Object(schema.a)(__srcFile__, handleDragInit).subscribe(([comparison, decksFromService]) => {
              if (decksFromService.decks) {
                this.testFlashcardsFetched = true;
                this.sharedService._qbankFilterList[0].subjects = comparison.subjectsList;
                this.sharedService._qbankFilterList[0].systems = comparison.systemsList;
                this.sharedService._currentQuestion.flashcardServiceTracker[options.c.current].totalCount = this.flashcardTestInterfaceFeaturesService.flashcardsMaster.filter((canCreateDiscussions) => {
                  return canCreateDiscussions.questionIndex == this.sharedService._currentQuestion.questionIndex;
                }).length;
                this.sharedService._currentQuestion.flashcardServiceTracker[options.c.current].availableCount = this.sharedService._currentQuestion.flashcardServiceTracker[options.c.current].totalCount;
              }
              this.callGetRelatedFlashcardsIfNeeded();
              setTimeout(() => {
                return this.dockingService.openFirstDockedDialog();
              });
            }, (canCreateDiscussions) => {
            });
          }
        }
        callGetRelatedFlashcardsIfNeeded() {
          if (this.dialog.openDialogs && this.dialog.openDialogs.some((timeline_mode) => {
            return "flashcards-ti-popup" == timeline_mode.id;
          })) {
            if (this.sharedService._currentQuestion.flashcardServiceTracker[options.c.related].serviceCallRequired) {
              this.flashcardTestInterfaceFeaturesService.getRelatedOtherFlashcards().subscribe((canCreateDiscussions) => {
                this.dialog.openDialogs.find((timeline_mode) => {
                  return "flashcards-ti-popup" == timeline_mode.id;
                }).componentInstance.updateCurrentQuestion(this.sharedService._currentQuestion);
              });
            } else {
              this.dialog.openDialogs.find((timeline_mode) => {
                return "flashcards-ti-popup" == timeline_mode.id;
              }).componentInstance.updateCurrentQuestion(this.sharedService._currentQuestion);
            }
          }
        }
        openNotes() {
          this.sharedService._toBeDocked = options.b.notes;
          this.dialogNotesService.openDialog({
            panelClass : "notes-dialog-container",
            hasBackdrop : false,
            data : this
          });
        }
        openLabValues() {
          this.dialogLabvaluesService.openDialog({
            panelClass : "labvalues-dialog-container",
            hasBackdrop : false,
            width : "650px",
            height : "648px",
            data : {
              commonContractImpl : this.sharedService._testInterfaceUsmleContractImpl,
              title : "Lab Values"
            }
          });
        }
        handleSplitScreen() {
          var ApiSession;
          this.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          let timeline_items = $("#explanation-container").detach();
          if (this.sharedService._userPreferences.jsonSettings.testPreferences.splitScreen && this.sharedService._launchTestOptions.canShowAnswer && this.screenWidth > 1200 && !this.sharedService._currentAbstract && !this.isAnyDialogDocked && (null === (ApiSession = this.sharedService._currentQuestion.questionMedia) || void 0 === ApiSession ? void 0 : ApiSession.typeId) != options.j.drugad && this.sharedService._currentQuestion.questionTypeId != options.k.drugad) {
            if (timeline_items) {
              $(timeline_items[0]).appendTo(".right-content");
            }
          } else {
            if (timeline_items) {
              $(timeline_items[0]).insertAfter(".explanation-placeholder");
            }
          }
        }
        submitQuestion() {
          if (!this.sharedService._userPreferences.jsonSettings.testPreferences.confirmAnswerOmission || "0" !== this.sharedService._currentQuestion.userAnswer && "" !== this.sharedService._currentQuestion.userAnswer) {
            this.invokeSubmitQuestion();
          } else {
            let node = new P.a;
            node.Title = "Omit question?";
            node.isConfirmBox = true;
            node.OKButtonText = "Yes";
            node.CancelButtonText = "No";
            node.Type = "Warning";
            node.Description = "You have not answered this question.<br/><br/>Do you wish to continue without answering?";
            this.dialog.open(message.a, {
              width : "600px",
              data : node,
              panelClass : "myapp-no-padding-dialog",
              hasBackdrop : true,
              disableClose : true
            }).afterClosed().subscribe((canCreateDiscussions) => {
              if (canCreateDiscussions) {
                this.invokeSubmitQuestion();
              }
            });
          }
        }
        invokeSubmitQuestion() {
          if (this.timerService.stopTimer(), this.sharedService._currentQuestion) {
            this.validateUserAnswer(this.sharedService._currentQuestion);
            const e = this.sharedService._testInfo.questionList[this.sharedService._currentQuestion.sequenceId];
            if (e && e.parentQuestionId > 0 && e.questionSetSequenceId > 1) {
              e.isQuestionDisabled = false;
            }
          }
          this.sharedService._launchTestOptions.canShowAnswer = true;
          this.onSubmitQuestion.next();
          this.sharedService._testInterfaceContractImpl.saveReviewDate(this.sharedService._currentQuestion.questionIndex).subscribe();
          this.timerService.stopReviewAndSearchTimer();
          this.sharedService._currentQuestion.isSubmitted = true;
          this.sharedService._currentQuestion.isUpdateDateAttempted = true;
          this.sharedService._currentQuestion.isAnswerChoiceDisabled = true;
          let data = new z;
          data.questionIndex = this.sharedService._currentQuestion.questionIndex;
          data.userAnswer = this.sharedService._currentQuestion.userAnswer;
          data.isCorrect = this.sharedService._currentQuestion.isCorrect;
          data.isIncorrect = this.sharedService._currentQuestion.isIncorrect;
          data.isOmitted = this.sharedService._currentQuestion.isOmitted;
          data.isSubmitted = this.sharedService._currentQuestion.isSubmitted;
          data.timeSpent = this.sharedService._currentQuestion.timeSpent;
          data.sequenceId = this.sharedService._currentQuestion.sequenceIdForDisplay;
          this.sharedService._testInterfaceContractImpl.submitQuestion(this.sharedService._testInfo.testId, data, this.sharedService._testInfo.timeInSeconds).subscribe((canCreateDiscussions) => {
          }, (canCreateDiscussions) => {
          });
          setTimeout(() => {
            this.handleSplitScreen();
          }, 0);
        }
        saveQuestion(data) {
          if (this.saveQuestionInProgress) {
            return;
          }
          this.saveQuestionInProgress = true;
          if (!(data.isSubmitted && this.sharedService._testInfo.testModeId != options.n.timed && this.sharedService._testInfo.testModeId != options.n.untimed)) {
            this.validateUserAnswer(data);
          }
          let $scope = new z;
          $scope.questionId = data.questionId;
          $scope.questionIndex = data.questionIndex;
          $scope.userAnswer = data.userAnswer;
          $scope.highlights = data.highlights;
          $scope.isCorrect = data.isCorrect;
          $scope.isIncorrect = data.isIncorrect;
          $scope.isOmitted = data.isOmitted;
          $scope.isMarked = data.isMarked;
          $scope.isSubmitted = data.isSubmitted;
          $scope.timeSpent = data.timeSpent;
          $scope.sequenceId = data.sequenceIdForDisplay;
          $scope.confSurveyValue = data.confSurveyValue;
          $scope.notes = data.notes;
          $scope.parentQuestionId = data.parentQuestionId;
          $scope.questionSetSequenceId = data.questionSetSequenceId;
          $scope.questionToAnswerBeforeThis = data.questionToAnswerBeforeThis;
          $scope.subParentQuestionId = data.subParentQuestionId;
          $scope.isHintUsed = data.isHintUsed;
          $scope.isUpdateDateAttempted = data.isUpdateDateAttempted;
          $scope.dailyTimeSpent = data.dailyTimeSpent;
          $scope.dailyTimeSpentReview = data.dailyTimeSpentReview;
          $scope.totalTimeSpentReview = data.totalTimeSpentReview;
          this.sharedService._testInterfaceContractImpl.saveQuestion(this.sharedService._testInfo.testId, $scope, this.sharedService._testInfo.timeInSeconds, this.sharedService._testInfo.testModeId).subscribe((canCreateDiscussions) => {
            this.sharedService._testInfo.questionList.find((val) => {
              return val.questionId == $scope.questionId;
            }).isQuestionDirty = false;
            this.saveQuestionInProgress = false;
            this._onSaveQuestion.next();
          }, (canCreateDiscussions) => {
            this.saveQuestionInProgress = false;
            this._onSaveQuestion.next();
          });
        }
        handleTestExit(autopause) {
          if (this.saveTestInProgress) {
            return;
          }
          if (!this.sharedService.unSavedChangesInfo.skipDialogUnsavedChanges && !this.sharedService.handleDialogUnSavedChanges(options.q.EndTest, autopause)) {
            return;
          }
          this.saveTestInProgress = true;
          let t = true;
          let description = this.sharedService._testInterfaceConfig.platform == options.g.B2C ? "Do you want to end this exam? <br/><br/> You can always resume the exam from previous tests." : "Do you want to end this exam? <br/>";
          let name = "End Test";
          if (autopause) {
            if (this.sharedService._testInfo.testModeId == options.n.review) {
              description = "Do you want to end this review?";
              name = "End Review?";
              t = false;
            } else {
              if (this.sharedService._testInfo.testModeId == options.n.search) {
                name = "End Search";
                description = "You are about to end this search. <br/><br/> Do you want to proceed?";
                t = false;
              }
            }
          } else {
            name = "Suspend Test";
            description = "You are about to suspend this exam. <br/><br/> Do you want to suspend this exam?";
            t = false;
          }
          let node = new P.a;
          node.Title = name;
          node.isConfirmBox = true;
          node.OKButtonText = "Yes";
          node.CancelButtonText = "No";
          node.Type = "Warning";
          node.Description = description;
          let r = this.dialog.open(message.a, {
            width : "600px",
            data : node,
            panelClass : "myapp-no-padding-dialog",
            hasBackdrop : true,
            disableClose : true
          });
          r.afterClosed().subscribe((i) => {
            if (i) {
              if (this.sharedService._testInfo.testModeId == options.n.search) {
                this.sharedService._testInterfaceContractImpl.saveReviewTimes(this.sharedService._currentQuestion.questionIndex, this.sharedService._currentQuestion.totalTimeSpentReview, this.sharedService._currentQuestion.dailyTimeSpentReview).subscribe();
                this.handleRedirects(autopause);
              } else {
                if (t) {
                  let node = new P.a;
                  node.Title = "End Test";
                  node.isConfirmBox = true;
                  node.OKButtonText = "Yes";
                  node.CancelButtonText = "No";
                  node.Type = "Error";
                  node.Description = "This is your final warning! <br/><br/> Are you sure you want to end this exam?";
                  r = this.dialog.open(message.a, {
                    width : "600px",
                    data : node,
                    panelClass : "myapp-no-padding-dialog",
                    hasBackdrop : true,
                    disableClose : true
                  });
                  r.afterClosed().subscribe((canCreateDiscussions) => {
                    if (canCreateDiscussions) {
                      this.saveTest(autopause);
                    } else {
                      this.saveTestInProgress = false;
                    }
                  });
                } else {
                  this.saveTest(autopause);
                }
              }
            } else {
              this.saveTestInProgress = false;
            }
          });
        }
        saveTest(muted, t = true) {
          this.sharedService._currentQuestion.highlights = this.sharedService._highlights.highlightObj.GetHighlightsString();
          this.validateUserAnswer(this.sharedService._currentQuestion);
          let self = new U;
          self.testId = this.sharedService._testInfo.testId;
          self.userId = this.sharedService._testInfo.userId;
          self.correctToIncorrect = this.sharedService._testInfo.correctToIncorrect;
          self.incorrectToCorrect = this.sharedService._testInfo.incorrectToCorrect;
          self.incorrectToIncorrect = this.sharedService._testInfo.incorrectToIncorrect;
          self.timeInSeconds = this.sharedService._testInfo.timeInSeconds;
          self.qbankId = this.sharedService._testInfo.qbankId;
          self.testModeId = this.sharedService._testInfo.testModeId;
          self.questionModeId = this.sharedService._testInfo.questionModeId;
          self.lastQuestionVisited = this.sharedService._testInfo.lastQuestionVisited;
          self.isEnded = muted;
          self.testDetails = [];
          this.sharedService._testInfo.questionList.forEach((data) => {
            if (this.sharedService._testInfo.testModeId != options.n.review) {
              this.validateUserAnswer(data);
            }
            let $scope = new z;
            $scope.questionId = data.questionId;
            $scope.questionIndex = data.questionIndex;
            $scope.userAnswer = data.userAnswer;
            $scope.highlights = data.highlights;
            $scope.isCorrect = data.isCorrect;
            $scope.isIncorrect = data.isIncorrect;
            $scope.isOmitted = data.isOmitted;
            $scope.isMarked = data.isMarked;
            $scope.isSubmitted = data.isSubmitted;
            $scope.timeSpent = data.timeSpent;
            $scope.sequenceId = data.sequenceIdForDisplay;
            $scope.confSurveyValue = data.confSurveyValue;
            $scope.notes = data.notes;
            $scope.parentQuestionId = data.parentQuestionId;
            $scope.questionSetSequenceId = data.questionSetSequenceId;
            $scope.questionToAnswerBeforeThis = data.questionToAnswerBeforeThis;
            $scope.subParentQuestionId = data.subParentQuestionId;
            $scope.isHintUsed = data.isHintUsed;
            $scope.isUpdateDateAttempted = data.isUpdateDateAttempted;
            $scope.dailyTimeSpent = data.dailyTimeSpent;
            $scope.dailyTimeSpentReview = data.dailyTimeSpentReview;
            $scope.totalTimeSpentReview = data.totalTimeSpentReview;
            $scope.weightScored = null;
            self.testDetails.push($scope);
          });
          this.sharedService._testInterfaceContractImpl.saveTest(self).subscribe((i) => {
            if (t) {
              this.handleRedirects(muted);
            }
          }, (data) => {
            this.saveTestInProgress = false;
            let err = new P.a;
            err.Title = "Error";
            err.isConfirmBox = false;
            err.OKButtonText = "Ok";
            err.Type = "Error";
            err.Description = data.error_description;
            this.dialog.open(message.a, {
              width : "600px",
              data : err,
              hasBackdrop : true,
              disableClose : true
            }).afterClosed().subscribe((canCreateDiscussions) => {
            });
          });
        }
        getKeyboardShortcuts() {
          let evts = [];
          return evts.push({
            key : "a,b,c,d",
            description : "Answer choice selector"
          }, {
            key : "Alt + m",
            description : "Mark question"
          }, {
            key : "Alt + p",
            description : "Previous question"
          }, {
            key : "Alt + n",
            description : "Next question"
          }, {
            key : "Alt + f",
            description : "Feedback"
          }, {
            key : "Alt + c",
            description : "Close window"
          }, {
            key : "Alt + v",
            description : "Navigator"
          }, {
            key : "Alt + o",
            description : "Notes"
          }, {
            key : "Alt + u",
            description : "Calculator"
          }, {
            key : "F11",
            description : "Full Screen"
          }), this.sharedService._testInterfaceConfig.labValues && evts.push({
            key : "Alt + l",
            description : "Lab Values"
          }), evts;
        }
        initializeKeyboardShortcuts() {
          this.keyboardShortcutsObj = new __WEBPACK_LABELED_MODULE__3.a(this.sharedService);
          this.keyboardShortcutsObj._shortcutSettings.onMarkQuestion = true;
          this.keyboardShortcutsObj._shortcutSettings.onNextQuestion = true;
          this.keyboardShortcutsObj._shortcutSettings.onPreviousQuestion = true;
          this.keyboardShortcutsObj._shortcutSettings.onRedirectionQuestions = true;
          this.keyboardShortcutsObj._shortcutSettings.onReviewEndSection = true;
          this.keyboardShortcutsObj._shortcutSettings.onFeedbackOpen = true;
          this.keyboardShortcutsObj._shortcutSettings.onLabValuesOpen = true;
          this.keyboardShortcutsObj._shortcutSettings.onNavOpen = true;
          this.keyboardShortcutsObj._shortcutSettings.onNotesOpen = true;
          this.keyboardShortcutsObj._shortcutSettings.onCalculatorOpen = true;
          this.keyboardShortcutsObj._shortcutSettings.enableAnswerSelect = true;
          this.keyboardShortcutsObj._shortcutSettings.onEscape = ["navigator", "notes", "labs", "feedback", "resources", "calculator", "uworldcalculator", "flashCards", "keyboardShortcuts"];
          this.handleDialogCloseEvent();
        }
        handleDialogCloseEvent() {
          this.onDialogClose = this.keyboardShortcutsObj._onDialogClose.subscribe((canCreateDiscussions) => {
            if (this.dialog.openDialogs.length) {
              let e = false;
              if (this.dialog.openDialogs.forEach((vNode) => {
                if (!e) {
                  if ("isDismissablePromptDialog" in vNode.componentInstance && vNode.componentInstance.isDismissablePromptDialog()) {
                    vNode.componentInstance.dismissPromptDialog();
                    e = true;
                  }
                }
              }), e) {
                return;
              }
              let i = this.dialog.openDialogs.findIndex((vNode) => {
                return !vNode.componentInstance.isDocked && "review-dialog-container" != vNode.id;
              });
              if (-1 == i) {
                return;
              }
              if ("requestDialogClose" in this.dialog.openDialogs[i].componentInstance) {
                this.dialog.openDialogs[i].componentInstance.requestDialogClose();
              } else {
                this.dialog.openDialogs[i].close();
              }
            }
          });
        }
        onKeyDown(event) {
          if (this.shortcutsDisabled || this.keyboardShortcutsObj.onKeyDown(event), "Tab" == event.key || event.shiftKey && "Tab" == event.key || "Enter" == event.key) {
            let transferArr = [".cdk-focus-trap-anchor"];
            if (null != document.querySelector(".review-nav-wrapper")) {
              transferArr = [...transferArr, ".pearson-content", ".footer-nav"];
            }
            let items = Array.prototype.filter.call(document.querySelectorAll('a, button, input, select, textarea, details, [tabindex]:not([tabindex="-1"])'), function(label) {
              return !(transferArr.some((rowContainerSelector) => {
                return label.closest(rowContainerSelector);
              }) || label.hasAttribute("aria-hidden") && "true" == label.getAttribute("aria-hidden") || label.offsetWidth <= 0 || label.offsetHeight <= 0 || label.hasAttribute("disabled"));
            });
            let i = items.indexOf(document.activeElement);
            if (i > -1) {
              if ("Enter" != event.key) {
                return event.shiftKey ? (i = 0 == i ? items.length - 1 : --i, items[i].focus()) : (i = i == items.length - 1 ? 0 : ++i, 0 == i && 0 != this.nextTriggerIndex ? ((this.nextTriggerIndex == this.lastTriggerIndex || this.nextTriggerIndex >= items.length - 1) && (this.nextTriggerIndex = 0), items[this.nextTriggerIndex].focus(), this.lastTriggerIndex = this.nextTriggerIndex) : (items[i] instanceof HTMLAnchorElement && null === items[i].getAttribute("tabIndex") && (items[i].tabIndex = 0), 
                items[i].focus())), event.preventDefault(), false;
              }
              {
                const {
                  target : li
                } = event;
                if (li instanceof HTMLElement && null != li.closest(".accessibility-triggers")) {
                  this.nextTriggerIndex = items.indexOf(event.target) + 1;
                  if (null == items[this.nextTriggerIndex].closest(".accessibility-triggers")) {
                    this.nextTriggerIndex = 0;
                  }
                }
              }
            }
          }
          return true;
        }
        handleRedirects(url) {
          let loc = "";
          if (this.sharedService._testInterfaceConfig.platform == options.g.B2C) {
            if (url) {
              if (this.sharedService._testInfo.testModeId == options.n.search) {
                location.href = this.sharedService._testInterfaceConfig.returnUrl + "/search/" + this.sharedService._testInterfaceConfig.subscriptionId;
              } else {
                if (this.sharedService._clientConfig.isSim && this.sharedService._testInfo.testModeId != options.n.review) {
                  this.sharedService._testInterfaceContractImpl.getPreviousTestDataForAssessments(this.sharedService._testInfo.formId).subscribe((wrappersTemplates) => {
                    let i = false;
                    let n = 0;
                    wrappersTemplates.forEach(function(easingY) {
                      if (!easingY.isEnded) {
                        n++;
                      }
                    });
                    if (0 == n) {
                      i = true;
                    }
                    loc = i ? this.sharedService._testInterfaceConfig.returnUrl + "/performance/assessmentreports/" + this.sharedService._testInterfaceConfig.subscriptionId : this.sharedService._testInterfaceConfig.returnUrl + "/blocks/" + this.sharedService._testInterfaceConfig.subscriptionId + "/true";
                    location.href = loc;
                  }, (canCreateDiscussions) => {
                    location.href = this.sharedService._testInterfaceConfig.returnUrl + "/blocks/" + this.sharedService._testInterfaceConfig.subscriptionId + "/true";
                  });
                } else {
                  loc = "testanalysis" == this.sharedService._testInterfaceConfig.returnPage ? this.sharedService._testInterfaceConfig.returnUrl + "/performance/test/analysis/" + this.sharedService._testInterfaceConfig.subscriptionId + "/" + this.sharedService._testInfo.testId + "/" + this.sharedService._testInfo.sequenceId + "/true" : this.sharedService._testInterfaceConfig.returnUrl + "/performance/test/results/" + this.sharedService._testInterfaceConfig.subscriptionId + "/" + this.sharedService._testInfo.testId + 
                  "/" + this.sharedService._testInfo.sequenceId + "/true";
                  location.href = loc;
                }
              }
            } else {
              loc = this.sharedService._clientConfig.isSim ? this.sharedService._testInterfaceConfig.returnUrl + "/blocks/" + this.sharedService._testInterfaceConfig.subscriptionId + "/true" : this.sharedService._testInterfaceConfig.returnUrl + "/previoustests/" + this.sharedService._testInterfaceConfig.subscriptionId;
              location.href = loc;
            }
          } else {
            if (this.sharedService._testInterfaceConfig.isDemo) {
              return void window.close();
            }
            location.href = this.sharedService._testInterfaceConfig.returnUrl;
          }
        }
        handleExhibits() {
          if (this.sharedService._userPreferences.jsonSettings.testPreferences.theme == options.o.nbome) {
            this.inlineExhibitsService.handleNbomeExhibits();
          } else {
            this.inlineExhibitsService.handleExhibits();
          }
        }
        openExhibitsDialog(autopause) {
          this.inlineExhibitsService.openExhibitsDialog(autopause);
        }
        toggleLeftNavigator() {
          this.displayLeftNavigator = !this.displayLeftNavigator;
          if (this.displayLeftNavigator) {
            $(".left-navigator").css({
              display : "block"
            });
            this.scrollQuestionIntoView();
          } else {
            $(".left-navigator").css({
              display : "none"
            });
          }
          this.calculateWindowWidth();
        }
        initializeLeftNavigator(e = false) {
          let t = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          if ($(".left-navigator").is(":visible") && !e && t < 769) {
            $(".left-navigator").css({
              display : "none"
            });
            this.displayLeftNavigator = false;
          }
          if (e) {
            $(".left-navigator").css({
              display : "block"
            });
            this.displayLeftNavigator = true;
          }
          this.calculateWindowWidth();
        }
        calculateWindowWidth() {
          let paneWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          if (this.displayLeftNavigator && paneWidth > 1200) {
            $(".nbme-body").css({
              width : paneWidth - 110 + "px",
              marginLeft : "110px"
            });
          } else {
            $(".nbme-body").css({
              width : paneWidth + "px",
              marginLeft : "0px"
            });
          }
        }
        loadCurrentQuestionsStandards() {
          if (this.sharedService._currentQuestion.standards = [], this.sharedService._currentQuestion.subject) {
            if (this.sharedService._currentQuestion.secondarySubject) {
              var message = this.sharedService._currentQuestion.subject + "/" + this.sharedService._currentQuestion.secondarySubject;
            } else {
              message = this.sharedService._currentQuestion.subject;
            }
            this.sharedService._currentQuestion.standards.push({
              header : "Subject",
              description : message,
              typeId : 0
            });
          }
          if (this.sharedService._currentQuestion.system) {
            this.sharedService._currentQuestion.standards.push({
              header : "System",
              description : this.sharedService._currentQuestion.system,
              typeId : 0
            });
          }
          if (this.sharedService._currentQuestion.topic) {
            this.sharedService._currentQuestion.standards.push({
              header : "Topic",
              description : this.sharedService._currentQuestion.topic,
              typeId : 0
            });
          }
        }
        allDialogsDocked() {
          let e = false;
          return this.dialog.openDialogs.forEach((timeline_mode) => {
            if (e) {
              return;
            }
            const i = timeline_mode.id;
            if (!(i && $("#" + i).parents(".docked-dialog").length)) {
              e = true;
            }
          }), !e;
        }
        keydownEventIsOutsideDockContainer(loop) {
          let messageElement = loop.target;
          for (; messageElement;) {
            if (messageElement.classList.contains("docked-dialog")) {
              return false;
            }
            messageElement = messageElement.parentElement;
          }
          return true;
        }
        scrollScreenTop() {
          if (this.sharedService._currentQuestion.isSubmitted && this.sharedService._userPreferences.jsonSettings.testPreferences.splitScreen) {
            $(".left-content").scrollTop(0);
            $(".right-content").scrollTop(0);
          }
        }
        checkAndInitiateIncrementalLoading(limit) {
          let userCanSeeItems = this.getNearByEmptyQuestions(this.sharedService._testInfo.questionList.findIndex((data) => {
            return data.sequenceId == limit;
          }));
          if (null != userCanSeeItems && userCanSeeItems.length > 0) {
            this.fetchAndUpdateQuestionList(userCanSeeItems);
          } else {
            this.asyncServiceCallInProgress = false;
          }
        }
        getNearByEmptyQuestions(i) {
          let loadedAddons = [];
          let j = 0;
          for (; loadedAddons.length < 20;) {
            if (0 == j && this.sharedService._testInfo.questionList[i].serviceCallRequiredForData) {
              loadedAddons.push(this.sharedService._testInfo.questionList[i].questionIndex);
              j++;
            } else {
              if (i + j < this.sharedService._testInfo.questionList.length && this.sharedService._testInfo.questionList[i + j].serviceCallRequiredForData && loadedAddons.push(this.sharedService._testInfo.questionList[i + j].questionIndex), i - j >= 0 && this.sharedService._testInfo.questionList[i - j].serviceCallRequiredForData && loadedAddons.push(this.sharedService._testInfo.questionList[i - j].questionIndex), i + j >= this.sharedService._testInfo.questionList.length && i - j < 0) {
                break;
              }
              j++;
            }
          }
          return loadedAddons;
        }
        fetchAndUpdateQuestionList(autopause) {
          this.sharedService._testInterfaceContractImpl.getTestByQuestionIndexes(this.sharedService._testInfo.testId, this.sharedService._testInfo.qbankId, autopause).subscribe((e) => {
            if (e && e.questionList && e.questionList.length > 0) {
              e = this.questionService.parseQuestionsInTest(e);
              e = this.parseQuestionsInfo(e);
              let filteredView = JSON.parse(sessionStorage.getItem("testQuestionIndexes") || "[]");
              e.questionList.forEach((p) => {
                let i = this.sharedService._testInfo.questionList.findIndex((name) => {
                  return name.questionIndex == p.questionIndex;
                });
                if (i > -1) {
                  let state = filteredView.find((name) => {
                    return name.qIndex == p.questionIndex;
                  });
                  if (state) {
                    p.sequenceIdForDisplay = state.sId;
                  }
                  p.sequenceId = i + 1;
                  p.serviceCallRequiredForData = false;
                  this.sharedService._testInfo.questionList[i] = p;
                }
              });
            }
            if (e && e.abstractList && e.abstractList.length > 0) {
              if (this.sharedService._testInfo.abstractList) {
                this.sharedService._testInfo.abstractList = this.sharedService._testInfo.abstractList.concat(e.abstractList);
                this.sharedService._testInfo.abstractList = this.sharedService._testInfo.abstractList.filter((searchLyrInfo, canCreateDiscussions, gcRootPath) => {
                  return gcRootPath.findIndex((opLyrInfo) => {
                    return opLyrInfo.id === searchLyrInfo.id;
                  }) === canCreateDiscussions;
                });
              } else {
                this.sharedService._testInfo.abstractList = e.abstractList;
              }
            }
            if (this.sharedService._testInterfaceConfig.showTransparentProgressSpinner) {
              this.loadQuestion();
              this.onQuestionChange.next();
              this.sharedService._testInterfaceConfig.showTransparentProgressSpinner = false;
              this.shortcutsDisabled = false;
              this.asyncServiceCallInProgress = false;
            }
          }, (canCreateDiscussions) => {
            this.sharedService._testInterfaceConfig.showTransparentProgressSpinner = false;
            this.shortcutsDisabled = false;
            this.asyncServiceCallInProgress = false;
          });
        }
        updateSequenceIdForTestInfo() {
          let filteredView = JSON.parse(sessionStorage.getItem("testQuestionIndexes") || "[]");
          this.sharedService._testInfo.questionList.forEach((p, url) => {
            let state = filteredView.find((name) => {
              return name.qIndex == p.questionIndex;
            });
            if (state) {
              p.sequenceId = url + 1;
              p.sequenceIdForDisplay = state.sId;
            }
          });
        }
        closeDrugAdFullScreen() {
          let boxChild = document.getElementById("overlay-drugAdScreen");
          if (boxChild) {
            boxChild.style.display = "none";
          }
        }
        setUIForTestModeChange() {
          this.changeTestModeInProgress = true;
          this.showSpinner();
          this.timerService.stopTimer();
          this.saveCurrentQuestion();
        }
        getTimeRemainingForTestModeChange() {
          this.changeTestModeInProgress = false;
          this.showSpinner();
          this.sharedService._testInterfaceContractImpl.getTimeRemainingForTestModeChange(this.sharedService._testInfo.testId).subscribe((deadline) => {
            let artistTrack = 0;
            if (deadline && deadline.timeRemaining) {
              artistTrack = deadline.timeRemaining;
            }
            this.showTestModeChangeConfirmationPopUp(true, false, artistTrack);
            this.hideSpinner();
            this.shortcutsDisabled = true;
          }, (canCreateDiscussions) => {
            this.hideSpinner();
            this.timerService.startTimer();
            this.sharedService.showErrorDialog("Unable to update test mode, Please contact support@uworld.com");
          });
        }
        showTestModeChangeConfirmationPopUp(event, end = false, attached = 0) {
          this.changeTestModeInProgress = false;
          let n = this.sharedService._testInfo.testModeId;
          this.dialog.open(constants.a, {
            width : "340px",
            panelClass : "test-mode-dialog-container",
            restoreFocus : false,
            autoFocus : false,
            hasBackdrop : true,
            data : {
              oldTestModeName : this.sharedService.getTestModeForDisplayOnUI(this.sharedService._testInfo.testModeId),
              newTestModeName : this.sharedService.getTestModeForDisplayOnUI(this.newTestModeId),
              timeRemainingInSeconds : event ? attached : -1,
              endTest : end
            }
          }).afterClosed().subscribe((canCreateDiscussions) => {
            if (canCreateDiscussions) {
              this.showSpinner();
              this.updateTestMode(end, n);
            } else {
              this.hideSpinner();
              this.loadQuestion();
            }
          });
        }
        updateTestMode(index, mode) {
          this.sharedService._testInterfaceContractImpl.updateTestMode(this.sharedService._testInfo.testId, this.newTestModeId).subscribe((t) => {
            if (index) {
              this.closeDrugAdFullScreen();
              if (t && t.timeInSeconds) {
                this.sharedService._testInfo.timeInSeconds = t.timeInSeconds;
              }
              this.sharedService._testInfo.testModeId = this.newTestModeId;
              this.sharedService._testInfo.testModeName = this.sharedService.getTestModeNameById(this.newTestModeId);
              this.saveTest(true, true);
            } else {
              if (t && t.timeInSeconds) {
                this.sharedService._testInfo.timeInSeconds = t.timeInSeconds;
              }
              this.sharedService._testInfo.testModeId = this.newTestModeId;
              this.sharedService._testInfo.testModeName = this.sharedService.getTestModeNameById(this.newTestModeId);
              this.hideSpinner();
              this.loadQuestion();
              if (this.sharedService._testInterfaceConfig.platform == options.g.B2C) {
                this.location.replaceState(this.router.url.replace("/" + this.sharedService._testInfo.testId + "/" + mode + "/", "/" + this.sharedService._testInfo.testId + "/" + this.newTestModeId + "/"));
              }
            }
          }, (canCreateDiscussions) => {
            this.hideSpinner();
            this.sharedService.showErrorDialog("Unable to update test mode, Please contact support@uworld.com");
          });
        }
        showSpinner() {
          this.showProgressSpinner = true;
          $(".cdk-overlay-container").addClass("d-none");
          this.shortcutsDisabled = true;
        }
        hideSpinner() {
          this.showProgressSpinner = false;
          $(".cdk-overlay-container").removeClass("d-none");
          this.shortcutsDisabled = false;
        }
        triggerTestModeChangeConfirmationPopUp() {
          this.hideSpinner();
          if (this.changeTestModeInProgress) {
            if (this.sharedService._testInfo.testModeId != options.n.tutor && this.sharedService._testInfo.testModeId != options.n.untimed && this.sharedService._testInfo.testModeId != options.n.timed && this.sharedService._testInfo.testModeId != options.n.timedTutor || this.newTestModeId != options.n.timed && this.newTestModeId != options.n.timedTutor) {
              this.showTestModeChangeConfirmationPopUp(false);
            } else {
              if (-1 == this.sharedService._testInfo.questionList.findIndex((data) => {
                return data.isOmitted && !data.isSubmitted;
              })) {
                this.showTestModeChangeConfirmationPopUp(false, true);
              } else {
                this.getTimeRemainingForTestModeChange();
              }
            }
          }
        }
        scrollQuestionIntoView() {
          let e = $(".left-navigator").prop("scrollHeight") / this.sharedService._testInfo.questionList.length;
          let width = $(".left-navigator").prop("clientHeight") - 25;
          let aux = e * (this.sharedService._testInfo.lastQuestionVisited - 1);
          let headerHeight = Math.floor(aux / width) * width;
          let y = aux % width;
          if (y <= width / 2) {
            headerHeight = headerHeight - (width / 2 - y);
          } else {
            headerHeight = headerHeight + (y - width / 2);
          }
          $(".left-navigator").scrollTop(headerHeight);
        }
      }
      return Player.\u0275fac = function(canCreateDiscussions) {
        return new (canCreateDiscussions || Player)(self.cc(c.a), self.cc(searchQ), self.cc(ts.b), self.cc(G.a), self.cc(DhtEvent.a), self.cc(CheckDailyStat.a), self.cc(EventConsts.a), self.cc(dialogGeometry.a), self.cc(configReplica), self.cc(m2.c), self.cc(props.n));
      }, Player.\u0275prov = self.Ob({
        token : Player,
        factory : Player.\u0275fac,
        providedIn : "root"
      }), Player;
    })();
    var BaseObjectService = require("ZTnr");
    var data = require("pZsO");
    var is = require("m0u6");
    var new_opts = require("csyo");
    var normalizedMatrix = require("Jb3d");
    var introJs = require("Drf6");
    var childProc = require("9e3K");
    var deps = require("D57K");
    let trytes = (() => {
      class FormulaEditor {
        constructor(mathDialog, equation) {
          this.dialog = mathDialog;
          this.sharedService = equation;
        }
        openDialog(data) {
          return Object(deps.a)(this, void 0, void 0, function*() {
            if (this.dialog.openDialogs.some((timeline_mode) => {
              return "keyboardshortcuts-dialog-container" == timeline_mode.id;
            })) {
              return void $("#keyboardshortcuts-dialog-container").closest(".cdk-global-overlay-wrapper").css("z-index", ++this.sharedService.zIndexForDialog);
            }
            if (!data.id) {
              data.id = "keyboardshortcuts-dialog-container";
            }
            const that = yield require.e(17).then(require.bind(null, "mzh8"));
            this.dialog.open(that.DialogShortcutsModule.getComponent(), data).afterOpened().subscribe((canCreateDiscussions) => {
              $("#keyboardshortcuts-dialog-container").closest(".cdk-global-overlay-wrapper").css("z-index", ++this.sharedService.zIndexForDialog);
              $("#keyboardshortcuts-dialog-container").closest(".cdk-global-overlay-wrapper").addClass("z-index-manipulated");
            });
          });
        }
      }
      return FormulaEditor.\u0275fac = function(boardManager) {
        return new (boardManager || FormulaEditor)(self.cc(ts.b), self.cc(c.a));
      }, FormulaEditor.\u0275prov = self.Ob({
        token : FormulaEditor,
        factory : FormulaEditor.\u0275fac,
        providedIn : "root"
      }), FormulaEditor;
    })();
    let hitokoto = (() => {
      class FormulaEditor {
        constructor(mathDialog, equation) {
          this.dialog = mathDialog;
          this.sharedService = equation;
        }
        openDialog(data) {
          return Object(deps.a)(this, void 0, void 0, function*() {
            if (this.dialog.openDialogs.some((timeline_mode) => {
              return "navigator-dialog-container" == timeline_mode.id;
            })) {
              return void $("#navigator-dialog-container").closest(".cdk-global-overlay-wrapper").css("z-index", ++this.sharedService.zIndexForDialog);
            }
            if (!data.id) {
              data.id = "navigator-dialog-container";
            }
            const that = yield require.e(13).then(require.bind(null, "eGPM"));
            this.dialog.open(that.DialogNavigatorModule.getComponent(), data).afterOpened().subscribe((canCreateDiscussions) => {
              if (this.sharedService._userPreferences.jsonSettings.testPreferences.theme != options.o.cpa) {
                $("#navigator-dialog-container").closest(".cdk-global-overlay-wrapper").css("z-index", ++this.sharedService.zIndexForDialog);
                $("#navigator-dialog-container").closest(".cdk-global-overlay-wrapper").addClass("z-index-manipulated");
              }
            });
          });
        }
      }
      return FormulaEditor.\u0275fac = function(boardManager) {
        return new (boardManager || FormulaEditor)(self.cc(ts.b), self.cc(c.a));
      }, FormulaEditor.\u0275prov = self.Ob({
        token : FormulaEditor,
        factory : FormulaEditor.\u0275fac,
        providedIn : "root"
      }), FormulaEditor;
    })();
    let curAttrs = (() => {
      class location {
        constructor(mathDialog) {
          this.dialog = mathDialog;
          this._isOpen = false;
        }
        get IsOpen() {
          return this._isOpen;
        }
        openDialog(options) {
          return Object(deps.a)(this, void 0, void 0, function*() {
            const that = yield require.e(19).then(require.bind(null, "WnZa"));
            let n = this.dialog.open(that.DialogUsersettingsModule.getComponent(), options);
            return this._isOpen = true, n.afterClosed().subscribe((canCreateDiscussions) => {
              this._isOpen = false;
            }), n;
          });
        }
      }
      return location.\u0275fac = function(name) {
        return new (name || location)(self.cc(ts.b));
      }, location.\u0275prov = self.Ob({
        token : location,
        factory : location.\u0275fac,
        providedIn : "root"
      }), location;
    })();
    let _maskLayerSimulate = (() => {
      class FormulaEditor {
        constructor(mathDialog, equation) {
          this.dialog = mathDialog;
          this.sharedService = equation;
        }
        openDialog(data) {
          return Object(deps.a)(this, void 0, void 0, function*() {
            if (this.dialog.openDialogs.some((timeline_mode) => {
              return "test-mode-menu-dialog-container" == timeline_mode.id;
            })) {
              return void $("#test-mode-menu-dialog-container").closest(".cdk-global-overlay-wrapper").css("z-index", ++this.sharedService.zIndexForDialog);
            }
            if (!data.id) {
              data.id = "test-mode-menu-dialog-container";
            }
            const that = yield require.e(18).then(require.bind(null, "EdMP"));
            setTimeout(() => {
              this.dialog.open(that.DialogTestmodeMenuModule.getComponent(), data);
            }, 0);
          });
        }
      }
      return FormulaEditor.\u0275fac = function(boardManager) {
        return new (boardManager || FormulaEditor)(self.cc(ts.b), self.cc(c.a));
      }, FormulaEditor.\u0275prov = self.Ob({
        token : FormulaEditor,
        factory : FormulaEditor.\u0275fac,
        providedIn : "root"
      }), FormulaEditor;
    })();
    var cssKeys = require("zqYx");
    let ROUTER_DIRECTIVES = (() => {
      class Parser {
        constructor(mathDialog, equation, debug, error, line, f, ast, tokens, rules, word, callback, model, range) {
          this.dialog = mathDialog;
          this.sharedService = equation;
          this.usmleService = debug;
          this.dialogNotesService = error;
          this.dialogCalculatorService = line;
          this.dialogShortcutsService = f;
          this.dialogNavigatorService = ast;
          this.dialogLabsService = tokens;
          this.dialogUsersettingsService = rules;
          this.flashcardTestInterfaceFeaturesService = word;
          this.timerService = callback;
          this.dockingService = model;
          this.dialogTestmodeMenuService = range;
          this.testInterfaceConfig = null;
          this.flashCardCategory = options.c;
          this.isSafari = false;
        }
        get isFullScreen() {
          return document.fullscreenElement || document.mozFullScreen || document.webkitIsFullScreen;
        }
        ngOnInit() {
          this.testInterfaceConfig = this.sharedService._testInterfaceConfig;
          this.initializePopover();
          this.subscribeToServiceEvents();
        }
        ngAfterViewInit() {
          this.checkIfSafari();
        }
        checkIfSafari() {
          this.isSafari = navigator.vendor && navigator.vendor.indexOf("Apple") > -1 && navigator.userAgent && -1 == navigator.userAgent.indexOf("CriOS") && -1 == navigator.userAgent.indexOf("FxiOS");
        }
        toggleFullScreen() {
          if (this.sharedService._testInterfaceContractImpl.logEventDataToFirebase("toggle_full_screen", {
            parent_screen : "TestInterface"
          }), this.isSafari) {
            if (window.document.fullscreenElement || window.document.mozFullScreenElement || window.document.webkitFullscreenElement || window.document.msFullscreenElement) {
              document.webkitExitFullscreen();
            } else {
              document.documentElement.webkitRequestFullscreen();
            }
          } else {
            var doc = document.documentElement;
            if (document.fullscreenElement) {
              document.exitFullscreen();
            } else {
              doc.requestFullscreen();
            }
          }
        }
        subscribeToServiceEvents() {
          this.onKeyboardShortcut = this.usmleService.keyboardShortcutsObj._onKeyboardShortcut.subscribe(($ax) => {
            if ((!this.dialog.openDialogs.length || "markQuestion" == $ax.fn && this.usmleService.allDialogsDocked() && this.usmleService.keydownEventIsOutsideDockContainer($ax.event)) && "markQuestion" == $ax.fn) {
              this.bookmarkQuestion();
            }
            if ("navigator" == $ax) {
              this.showNavigator();
            }
            if ("labValues" == $ax && this.testInterfaceConfig.labValues) {
              this.showLabValues();
            }
            if ("notes" == $ax) {
              this.showUserNotes();
            }
            if ("calculator" == $ax) {
              this.showCalculator();
            }
          });
        }
        bookmarkQuestion() {
          if (this.sharedService._testInfo.testModeId != options.n.search) {
            this.sharedService._currentQuestion.isMarked = !this.sharedService._currentQuestion.isMarked;
          } else {
            this.sharedService.showWarningDialog("Mark feature is available during test mode only.");
          }
        }
        showFlashcards() {
          if (this.sharedService._userPreferences.jsonSettings.testPreferences.dockedElements.flashcards) {
            this.sharedService._toBeDocked = options.b.flashcards;
            this.dockingService.closeActiveDockedWindow(options.b.flashcards);
          } else {
            this.flashcardTestInterfaceFeaturesService.openFlashcardsTIMainScreen();
          }
        }
        showUserNotes() {
          if (this.sharedService._testInfo.testModeId == options.n.search) {
            return void this.sharedService.showWarningDialog("Notes feature is available during test mode only.");
          }
          let commandName = {
            panelClass : "notes-dialog-container",
            hasBackdrop : false,
            data : this.usmleService
          };
          if (this.sharedService._userPreferences.jsonSettings.testPreferences.dockedElements.notes) {
            this.sharedService._toBeDocked = options.b.notes;
            this.dockingService.closeActiveDockedWindow(options.b.notes);
          } else {
            this.dialogNotesService.openDialog(commandName);
          }
        }
        showNotebook() {
          if (this.sharedService._userPreferences.jsonSettings.testPreferences.dockedElements.notebook) {
            this.sharedService._toBeDocked = options.b.notebook;
            this.dockingService.closeActiveDockedWindow(options.b.notebook);
          } else {
            this.sharedService._notebookContractImpl.openNotebook();
          }
        }
        showNavigator() {
          this.dialogNavigatorService.openDialog({
            panelClass : "navigator-dialog-container",
            hasBackdrop : false,
            data : {
              commonContractImpl : this.usmleService
            }
          });
        }
        showKeyboardShortcuts() {
          let commandName = {
            panelClass : "keyboardshortcuts-dialog-container",
            hasBackdrop : false,
            width : "500px",
            data : {
              keyboardShortcuts : this.usmleService.getKeyboardShortcuts()
            }
          };
          this.dialogShortcutsService.openDialog(commandName);
        }
        showUserSettings() {
          if (!this.dialogUsersettingsService.IsOpen) {
            this.dialogUsersettingsService.openDialog({
              panelClass : "usersettings-dialog-container",
              width : "330px",
              height : "100vh",
              position : {
                right : "0"
              },
              hasBackdrop : false
            }).then((canCreateDiscussions) => {
            });
          }
        }
        showCalculator() {
          this.dialogCalculatorService.openDialog({
            panelClass : "calculator-dialog-container",
            hasBackdrop : false
          });
        }
        showLabValues() {
          if (this.sharedService._userPreferences.jsonSettings.testPreferences.dockedElements.labvalues) {
            this.sharedService._toBeDocked = options.b.labvalues;
            this.dockingService.closeActiveDockedWindow(options.b.labvalues);
          } else {
            this.dialogLabsService.openDialog({
              panelClass : "labvalues-dialog-container",
              hasBackdrop : false,
              width : "650px",
              height : "648px",
              data : {
                commonContractImpl : this.sharedService._testInterfaceUsmleContractImpl,
                title : "Lab Values"
              }
            });
          }
        }
        openHelpMenu() {
          if (!this.usmleService.shortcutsDisabled) {
            this.trigger.openMenu();
          }
        }
        launchTutorial() {
          var intro = introJs();
          intro.setOptions({
            showStepNumbers : true,
            showBullets : false,
            exitOnOverlayClick : true,
            disableInteraction : true,
            keyboardNavigation : true,
            scrollToElement : true,
            steps : [{
              element : document.querySelector(".step1"),
              intro : "Mark questions to review them later",
              position : "right"
            }, {
              element : document.querySelector(".step2"),
              intro : "Add important concepts/images to flashcards",
              position : "right"
            }, {
              element : document.querySelector(".step3"),
              intro : "Add key concepts, tables, and images to your Notebook for later review.",
              position : "right"
            }, {
              element : document.querySelector(".step4"),
              intro : "Add important things to notes",
              position : "right"
            }, {
              element : document.querySelector(".step5"),
              intro : "Reference sheet for lab values",
              position : "right"
            }, {
              element : document.querySelector(".step6"),
              intro : "Provides access to calculator",
              position : "right"
            }, {
              element : document.querySelector(".step7"),
              intro : "Jump to any question in the test",
              position : "bottom"
            }, {
              element : document.querySelector(".step8"),
              intro : "Toggle between full screen view and regular view",
              position : "left"
            }, {
              element : document.querySelector(".step9"),
              intro : "Adjust your preferences using the settings option",
              position : "left"
            }, {
              element : document.querySelector(".step10"),
              intro : "Change the Test Mode",
              position : "left"
            }, {
              element : document.querySelector(".step11"),
              intro : "End the test or save test to resume later",
              position : "right"
            }, {
              element : document.querySelector(".step12"),
              intro : "Provide feedback on an individual question",
              position : "top"
            }, {
              element : document.querySelector(".step13"),
              intro : "Navigate between questions using previous and next buttons",
              position : "left"
            }].filter((arrowIcon) => {
              return arrowIcon.element;
            })
          });
          intro.start();
          this.trigger.restoreFocus = false;
          this.usmleService.shortcutsDisabled = true;
          this.timerService.pauseTimer();
          intro.onexit(() => {
            this.trigger.focus();
            this.trigger.restoreFocus = true;
            setTimeout(() => {
              return this.usmleService.shortcutsDisabled = false;
            });
            this.timerService.resumeTimer();
          });
          intro.oncomplete(() => {
            this.timerService.resumeTimer();
          });
        }
        initializePopover() {
          setTimeout(() => {
            $("#help-tooltip").popover({
              html : true,
              content : $("#help-tooltip-description").html()
            });
          }, 1500);
        }
        showEditTestModeMenu() {
          this.dialogTestmodeMenuService.openDialog({
            width : "225px",
            panelClass : "test-mode-menu-dialog-container",
            restoreFocus : false,
            autoFocus : false,
            backdropClass : "test-mode-menu-backdrop",
            position : {
              top : "48px",
              right : "12px"
            },
            data : {
              commonContractImpl : this.usmleService
            }
          });
        }
        ngOnDestroy() {
          this.onKeyboardShortcut.unsubscribe();
        }
      }
      return Parser.\u0275fac = function(parser) {
        return new (parser || Parser)(self.Sb(ts.b), self.Sb(c.a), self.Sb(clrVal), self.Sb(CheckDailyStat.a), self.Sb(childProc.a), self.Sb(trytes), self.Sb(hitokoto), self.Sb(EventConsts.a), self.Sb(curAttrs), self.Sb(G.a), self.Sb(searchQ), self.Sb(dialogGeometry.a), self.Sb(_maskLayerSimulate));
      }, Parser.\u0275cmp = self.Mb({
        type : Parser,
        selectors : [["uworld-header"]],
        viewQuery : function(query, options) {
          var data;
          if (1 & query) {
            self.ad(normalizedMatrix.c, true);
          }
          if (2 & query && self.Dc(data = self.hc())) {
            options.trigger = data.first;
          }
        },
        decls : 29,
        vars : 14,
        consts : [[1, "uworld-header", "d-flex", "justify-content-between", "accessibility-triggers"], [1, "d-flex", "align-items-center", "col-5"], ["class", "step1", "tabindex", "0", "role", "button", 3, "click", "keydown.enter", 4, "ngIf"], ["class", "step2 position-relative", "aria-label", "Open Flashcards Dialog", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], ["class", "step3", "aria-label", "Open Notebook Dialog", "tabindex", "0", "role", "application", 3, 
        "click", "keydown.enter", 4, "ngIf"], ["class", "step4", "aria-label", "Open Notes Dialog", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], ["class", "step5", "aria-label", "Open Lab Values", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], ["class", "step6", "aria-label", "Open Calculator", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], [1, "d-flex", "align-items-center", "col-2"], [1, "m-auto"], 
        ["aria-label", "Open Navigator", "tabindex", "0", "role", "application", 1, "step7", 3, "click", "keydown.enter"], [1, "question-progress"], ["title", "", 1, "fal", "fa-angle-down"], [1, "d-flex", "align-items-center", "col-5", "justify-content-end"], ["class", "step8", "aria-label", "Open Fullscreen", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], ["class", "step8", "aria-label", "Minimize Fullscreen", "tabindex", "0", "role", "application", 3, "click", 
        "keydown.enter", 4, "ngIf"], ["aria-label", "Help", "tabindex", "0", "role", "menu", 3, "matMenuTriggerFor", "keydown.enter", 4, "ngIf"], ["xPosition", "before", 1, "uworld-tutorial-panel-class"], ["menu", "matMenu"], [1, "help-option"], ["mat-menu-item", "", "aria-label", "Launch Tutorial", 3, "click", "keydown.enter"], ["mat-menu-item", "", "aria-label", "Open Keyboard Shortcuts", 3, "click", "keydown.enter"], ["class", "step9", "aria-label", "Open Settings Dialog", "tabindex", "0", "role", 
        "application", 3, "click", "keydown.enter", 4, "ngIf"], ["class", "step10", "tabindex", "0", "role", "application", "aria-label", "Edit Test Mode Dialog", 3, "click", "keydown.enter", 4, "ngIf"], ["style", "cursor:default;", "class", "d-flex align-items-center", 4, "ngIf"], ["tabindex", "0", "role", "button", 1, "step1", 3, "click", "keydown.enter"], ["class", "fal fa-bookmark", "title", "Mark/Flag", 4, "ngIf"], ["class", "fas fa-bookmark", "title", "Mark/Flag", 4, "ngIf"], ["title", "Mark/Flag", 
        1, "fal", "fa-bookmark"], ["title", "Mark/Flag", 1, "fas", "fa-bookmark"], ["aria-label", "Open Flashcards Dialog", "tabindex", "0", "role", "application", 1, "step2", "position-relative", 3, "click", "keydown.enter"], ["title", "Flashcards", 1, "fal", "fa-bolt"], [1, "flashcard-count"], ["aria-label", "Open Notebook Dialog", "tabindex", "0", "role", "application", 1, "step3", 3, "click", "keydown.enter"], ["title", "My Notebook", 1, "fal", "fa-book"], ["aria-label", "Open Notes Dialog", 
        "tabindex", "0", "role", "application", 1, "step4", 3, "click", "keydown.enter"], ["class", "fal fa-file-edit", "title", "Notes", 4, "ngIf"], ["class", "fas fa-file-edit", "title", "Notes", 4, "ngIf"], ["title", "Notes", 1, "fal", "fa-file-edit"], ["title", "Notes", 1, "fas", "fa-file-edit"], ["aria-label", "Open Lab Values", "tabindex", "0", "role", "application", 1, "step5", 3, "click", "keydown.enter"], ["title", "Lab Values", 1, "fal", "fa-vial"], ["aria-label", "Open Calculator", "tabindex", 
        "0", "role", "application", 1, "step6", 3, "click", "keydown.enter"], ["title", "Calculator", 1, "fal", "fa-calculator"], ["aria-label", "Open Fullscreen", "tabindex", "0", "role", "application", 1, "step8", 3, "click", "keydown.enter"], ["title", "Enter full screen", 1, "fal", "fa-expand", "d-none", "d-lg-inline"], ["aria-label", "Minimize Fullscreen", "tabindex", "0", "role", "application", 1, "step8", 3, "click", "keydown.enter"], ["title", "Exit full screen", 1, "fal", "fa-compress-wide", 
        "d-none", "d-lg-inline"], ["aria-label", "Help", "tabindex", "0", "role", "menu", 3, "matMenuTriggerFor", "keydown.enter"], ["title", "How to use", 1, "fal", "fa-question-circle", "d-none", "d-sm-none", "d-md-inline"], ["aria-label", "Open Settings Dialog", "tabindex", "0", "role", "application", 1, "step9", 3, "click", "keydown.enter"], ["title", "Settings", 1, "fal", "fa-cog"], ["tabindex", "0", "role", "application", "aria-label", "Edit Test Mode Dialog", 1, "step10", 3, "click", "keydown.enter"], 
        ["title", "Edit Test Mode", 1, "fal", "fa-tasks-alt"], [1, "d-flex", "align-items-center", 2, "cursor", "default"], ["class", "fal fa-clock mr-1", "style", "cursor:default;", 4, "ngIf"], [4, "ngIf"], [1, "fal", "fa-clock", "mr-1", 2, "cursor", "default"]],
        template : function(text, obj) {
          if (1 & text) {
            self.Yb(0, "div", 0);
            self.Yb(1, "div", 1);
            self.Sc(2, buildMenu, 3, 3, "a", 2);
            self.Sc(3, next, 4, 1, "a", 3);
            self.Sc(4, fetch, 2, 0, "a", 4);
            self.Sc(5, get, 3, 2, "a", 5);
            self.Sc(6, sort, 2, 0, "a", 6);
            self.Sc(7, Controller, 2, 0, "a", 7);
            self.Xb();
            self.Yb(8, "div", 8);
            self.Yb(9, "div", 9);
            self.Yb(10, "a", 10);
            self.gc("click", function() {
              return obj.showNavigator();
            })("keydown.enter", function() {
              return obj.showNavigator();
            });
            self.Yb(11, "span", 11);
            self.Uc(12);
            self.Xb();
            self.Tb(13, "i", 12);
            self.Xb();
            self.Xb();
            self.Xb();
            self.Yb(14, "div", 13);
            self.Sc(15, onload, 2, 0, "a", 14);
            self.Sc(16, finish, 2, 0, "a", 15);
            self.Sc(17, Tile, 2, 1, "a", 16);
            self.Yb(18, "mat-menu", 17, 18);
            self.Yb(20, "div", 19);
            self.Yb(21, "p", 20);
            self.gc("click", function() {
              return obj.launchTutorial();
            })("keydown.enter", function() {
              return obj.launchTutorial(), obj.trigger.closeMenu();
            });
            self.Uc(22, "Interface Tutorial");
            self.Xb();
            self.Xb();
            self.Yb(23, "div", 19);
            self.Yb(24, "p", 21);
            self.gc("click", function() {
              return obj.showKeyboardShortcuts();
            })("keydown.enter", function() {
              return obj.showKeyboardShortcuts(), obj.trigger.closeMenu();
            });
            self.Uc(25, "Keyboard Shortcuts");
            self.Xb();
            self.Xb();
            self.Xb();
            self.Sc(26, animate, 2, 0, "a", 22);
            self.Sc(27, expand, 2, 0, "a", 23);
            self.Sc(28, decode, 4, 3, "a", 24);
            self.Xb();
            self.Xb();
          }
          if (2 & text) {
            self.Cb(2);
            self.sc("ngIf", obj.testInterfaceConfig.bookmark);
            self.Cb(1);
            self.sc("ngIf", obj.testInterfaceConfig.flashcards);
            self.Cb(1);
            self.sc("ngIf", obj.testInterfaceConfig.myNoteBook);
            self.Cb(1);
            self.sc("ngIf", obj.testInterfaceConfig.notes);
            self.Cb(1);
            self.sc("ngIf", obj.testInterfaceConfig.labValues);
            self.Cb(1);
            self.sc("ngIf", obj.testInterfaceConfig.calculator);
            self.Cb(5);
            self.Xc("", obj.sharedService._testInfo.lastQuestionVisited, "/", obj.sharedService._testInfo.questionList.length, "\u00a0");
            self.Cb(3);
            self.sc("ngIf", !obj.isFullScreen);
            self.Cb(1);
            self.sc("ngIf", obj.isFullScreen);
            self.Cb(1);
            self.sc("ngIf", obj.testInterfaceConfig.help);
            self.Cb(9);
            self.sc("ngIf", obj.testInterfaceConfig.settings);
            self.Cb(1);
            self.sc("ngIf", obj.testInterfaceConfig.editTestMode);
            self.Cb(1);
            self.sc("ngIf", obj.sharedService._launchTestOptions.canShowBlockTime && obj.sharedService._userPreferences.jsonSettings.testPreferences.showTimer);
          }
        },
        directives : [props.t, normalizedMatrix.d, normalizedMatrix.a, normalizedMatrix.c],
        pipes : [cssKeys.i, cssKeys.l],
        styles : [".uworld-header{height:52px}.uworld-header>div{padding-left:0;padding-right:0}.uworld-header .flashcard-count{position:absolute;top:10px;left:11px;font-size:.75em}.uworld-tutorial-panel-class{width:200px;position:relative;top:20px;left:95px;box-shadow:0 0 12px 0 rgba(0,0,0,.22);padding:8px 0}.uworld-tutorial-panel-class p{margin:0}.uworld-tutorial-panel-class .help-option p{cursor:pointer;height:20px;line-height:20px;font-family:inherit}.uworld-tutorial-panel-class .help-option p:hover{text-decoration:underline;color:grey}.uworld-tutorial-panel-class .help-option:not(:last-child){margin-bottom:10px}"],
        encapsulation : 2
      }), Parser;
    })();
    var extl = require("83QH");
    let ze = (() => {
      class FlyaroundController {
        constructor(node, e, n, decimals) {
          this.sharedService = node;
          this.usmleService = e;
          this.dialogFeedbackService = n;
          this.dialog = decimals;
          this.testInterfaceConfig = null;
        }
        ngOnInit() {
          this.testInterfaceConfig = this.sharedService._testInterfaceConfig;
          this.subscribeToServiceEvents();
        }
        subscribeToServiceEvents() {
          this.onKeyboardShortcut = this.usmleService.keyboardShortcutsObj._onKeyboardShortcut.subscribe((frame) => {
            if ("feedback" == frame) {
              this.showFeedback();
            }
            if (!this.dialog.openDialogs.length || ["previousQuestion", "nextQuestion"].includes(frame.fn) && this.usmleService.allDialogsDocked() && this.usmleService.keydownEventIsOutsideDockContainer(frame.event)) {
              if ("previousQuestion" == frame.fn) {
                this.previousQuestion();
              }
              if ("nextQuestion" == frame.fn) {
                this.nextQuestion();
              }
            }
          });
        }
        saveTest(e) {
          this.usmleService.handleTestExit(e);
        }
        showFeedback() {
          this.dialogFeedbackService.openDialog({
            panelClass : "feedback-dialog-container",
            hasBackdrop : false,
            width : "650px",
            height : "450px"
          });
        }
        previousQuestion() {
          this.usmleService.previousQuestion();
        }
        nextQuestion() {
          this.usmleService.nextQuestion();
        }
        ngOnDestroy() {
          if (this.onKeyboardShortcut) {
            this.onKeyboardShortcut.unsubscribe();
          }
        }
      }
      return FlyaroundController.\u0275fac = function(canCreateDiscussions) {
        return new (canCreateDiscussions || FlyaroundController)(self.Sb(c.a), self.Sb(clrVal), self.Sb(extl.a), self.Sb(ts.b));
      }, FlyaroundController.\u0275cmp = self.Mb({
        type : FlyaroundController,
        selectors : [["uworld-footer"]],
        decls : 22,
        vars : 2,
        consts : [[1, "uworld-footer", "d-flex", "row-content", "justify-content-between", "accessibility-triggers"], [1, "d-flex", "align-items-center", "col-5", "col-sm-5"], [1, "step11", "d-flex", "align-items-center"], ["aria-label", "End Test", "tabindex", "0", "role", "application", 1, "d-flex", "align-items-center", 3, "click", "keydown.enter"], ["title", "End", 1, "fal", "fa-stop-circle"], [1, "d-none", "d-sm-none", "d-md-none", "d-lg-inline", "mb-0"], ["class", "d-flex align-items-center", 
        "aria-label", "Suspend Test", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], [1, "d-flex", "align-items-center", "col-2", "col-sm-2"], [1, "m-auto", "d-flex", "align-items-center"], ["class", "step12 d-flex align-items-center", "aria-label", "Open feedback Dialog", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], [1, "d-flex", "align-items-center", "col-5", "col-sm-5", "text-right"], [1, "ml-auto"], [1, "step13", "d-flex", 
        "align-items-center"], ["aria-label", "Navigate to Previous Question", "tabindex", "0", "role", "application", 1, "d-flex", "align-items-center", 3, "click", "keydown.enter"], ["title", "Previous", 1, "fal", "fa-arrow-left"], ["aria-label", "Navigate to Next Question", "tabindex", "0", "role", "application", 1, "d-flex", "align-items-center", 3, "click", "keydown.enter"], ["title", "Next", 1, "fal", "fa-arrow-right"], ["aria-label", "Suspend Test", "tabindex", "0", "role", "application", 
        1, "d-flex", "align-items-center", 3, "click", "keydown.enter"], ["title", "Suspend", 1, "fal", "fa-pause-circle"], ["aria-label", "Open feedback Dialog", "tabindex", "0", "role", "application", 1, "step12", "d-flex", "align-items-center", 3, "click", "keydown.enter"], ["title", "Feedback", 1, "fal", "fa-comment-alt"]],
        template : function($location, $scope) {
          if (1 & $location) {
            self.Yb(0, "div", 0);
            self.Yb(1, "div", 1);
            self.Yb(2, "div", 2);
            self.Yb(3, "a", 3);
            self.gc("click", function() {
              return $scope.saveTest(true);
            })("keydown.enter", function() {
              return $scope.saveTest(true);
            });
            self.Tb(4, "i", 4);
            self.Yb(5, "p", 5);
            self.Uc(6, "\u00a0End");
            self.Xb();
            self.Xb();
            self.Sc(7, format, 4, 0, "a", 6);
            self.Xb();
            self.Xb();
            self.Yb(8, "div", 7);
            self.Yb(9, "div", 8);
            self.Sc(10, run, 4, 0, "a", 9);
            self.Xb();
            self.Xb();
            self.Yb(11, "div", 10);
            self.Yb(12, "div", 11);
            self.Yb(13, "div", 12);
            self.Yb(14, "a", 13);
            self.gc("click", function() {
              return $scope.previousQuestion();
            })("keydown.enter", function() {
              return $scope.previousQuestion();
            });
            self.Tb(15, "i", 14);
            self.Yb(16, "p", 5);
            self.Uc(17, "\u00a0Previous");
            self.Xb();
            self.Xb();
            self.Yb(18, "a", 15);
            self.gc("click", function() {
              return $scope.nextQuestion();
            })("keydown.enter", function() {
              return $scope.nextQuestion();
            });
            self.Yb(19, "p", 5);
            self.Uc(20, "Next\u00a0");
            self.Xb();
            self.Tb(21, "i", 16);
            self.Xb();
            self.Xb();
            self.Xb();
            self.Xb();
            self.Xb();
          }
          if (2 & $location) {
            self.Cb(7);
            self.sc("ngIf", $scope.sharedService._launchTestOptions.canShowSuspend);
            self.Cb(3);
            self.sc("ngIf", $scope.testInterfaceConfig.feedback);
          }
        },
        directives : [props.t],
        styles : [".uworld-footer[_ngcontent-%COMP%]{height:52px;padding-left:10px;padding-right:10px}.uworld-footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.uworld-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.1em}"]
      }), FlyaroundController;
    })();
    var exports = require("mlZH");
    let dappId = (() => {
      class location {
        constructor(mathDialog) {
          this.dialog = mathDialog;
        }
        openDialog(options) {
          return Object(deps.a)(this, void 0, void 0, function*() {
            if (this.dialog.openDialogs.some((timeline_mode) => {
              return "drugad-dialog-container" == timeline_mode.id;
            })) {
              return;
            }
            if (!options.id) {
              options.id = "drugad-dialog-container";
            }
            const that = yield require.e(7).then(require.bind(null, "vUuC"));
            this.dialog.open(that.DialogDrugAdModule.getComponent(), options);
          });
        }
      }
      return location.\u0275fac = function(name) {
        return new (name || location)(self.cc(ts.b));
      }, location.\u0275prov = self.Ob({
        token : location,
        factory : location.\u0275fac,
        providedIn : "root"
      }), location;
    })();
    var morphNormal = require("PBFl");
    var tParentMatrix = require("F1o0");
    var obj = require("nIj0");
    var alias = require("zmEM");
    const body = ["drugAdPreview"];
    let Ge = (() => {
      class QuickBase {
        constructor(action, callback) {
          this.sharedService = action;
          this.usmleService = callback;
          this.questionFormatType = options.i;
          this.testMode = options.n;
          this._drugAdsList = [];
          this.currDrugAdPage = 1;
          this.currZoomLevelInFullScreen = 1;
          this.offset = .25;
          this.options = {
            imgWidth : 0,
            imgHeight : 0,
            currentZoomLevel : 0,
            zoomLevelCount : 0,
            width : [],
            height : [],
            zoomLevels : []
          };
        }
        set drugAdsList(result) {
          this._drugAdsList = result.fileName.split(";");
          this.refreshValues();
          this.initImageData();
        }
        ngOnInit() {
        }
        ngAfterViewInit() {
          this.initImageData();
        }
        refreshValues() {
          this.currDrugAdPage = 1;
          this.options = {
            imgWidth : 0,
            imgHeight : 0,
            currentZoomLevel : 2,
            zoomLevelCount : 13,
            width : [],
            height : [],
            zoomLevels : [.5, .75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3, 3.5, 4, 4.5, 5]
          };
        }
        initImageData() {
          if (this.imageElement) {
            const data = this.imageElement.nativeElement;
            const logIntervalId = setInterval(() => {
              if (data.complete) {
                clearInterval(logIntervalId);
                this.options.imgWidth = data.naturalWidth;
                this.options.imgHeight = data.naturalHeight;
                this.recalculateValues();
              }
            }, 100);
          }
        }
        recalculateValues() {
          for (let i = 0; i < this.options.zoomLevels.length; i++) {
            this.options.width[i] = this.options.zoomLevels[i] * this.options.imgWidth;
            this.options.height[i] = this.options.zoomLevels[i] * this.options.imgHeight;
          }
          this.refreshSize();
        }
        gotoNextPageInDrugAd() {
          this.sharedService._testInterfaceContractImpl.logEventDataToFirebase("go_to_page", {
            parent_screen : "TestInterface",
            dialog : "DrugAd"
          });
          this.currDrugAdPage = this.currDrugAdPage % this._drugAdsList.length + 1;
        }
        viewDrugAdInFullScreen() {
          this.sharedService._testInterfaceContractImpl.logEventDataToFirebase("full_screen", {
            parent_screen : "TestInterface",
            dialog : "DrugAd"
          });
          document.getElementById("overlay-drugAdScreen").style.display = "flex";
          this.resetImageSize();
          this.currZoomLevelInFullScreen = 1.25;
          this.initializeFullScreenImageSize();
          $("#drugAd-Images").css("zoom", this.currZoomLevelInFullScreen);
        }
        closeDrugAdFullScreen() {
          document.getElementById("overlay-drugAdScreen").style.display = "none";
        }
        initializeFullScreenImageSize() {
          $("#drugAd-Images img").each(function() {
            $(this).height(620);
            $(this).width(480);
          });
        }
        zoomIn() {
          this.sharedService._testInterfaceContractImpl.logEventDataToFirebase("zoom_in", {
            parent_screen : "TestInterface",
            dialog : "DrugAd"
          });
          if (this.options.currentZoomLevel < this.options.zoomLevelCount - 1) {
            this.options.currentZoomLevel++;
            this.refreshSize();
          }
        }
        zoomOut() {
          this.sharedService._testInterfaceContractImpl.logEventDataToFirebase("zoom_out", {
            parent_screen : "TestInterface",
            dialog : "DrugAd"
          });
          if (this.options.currentZoomLevel > 0) {
            this.options.currentZoomLevel--;
            this.refreshSize();
          }
        }
        resetImageSize() {
          this.sharedService._testInterfaceContractImpl.logEventDataToFirebase("reset", {
            parent_screen : "TestInterface",
            dialog : "DrugAd"
          });
          this.options.currentZoomLevel = 2;
          this.refreshSize();
        }
        refreshSize() {
          const cssChanges = this.imageElement.nativeElement;
          cssChanges.width = this.options.width[this.options.currentZoomLevel];
          cssChanges.height = this.options.height[this.options.currentZoomLevel];
        }
        resetFullScreenImage() {
          this.currZoomLevelInFullScreen = 1;
          $("#drugAd-Images").css("zoom", 1);
        }
        zoomImageInFullScreen(options) {
          if (options && this.currZoomLevelInFullScreen + this.offset <= 5) {
            this.currZoomLevelInFullScreen += this.offset;
          } else {
            if (options || !(this.currZoomLevelInFullScreen - this.offset >= .5)) {
              return;
            }
            this.currZoomLevelInFullScreen -= this.offset;
          }
          $("#drugAd-Images").css("zoom", this.currZoomLevelInFullScreen);
        }
        ngOnDestroy() {
        }
      }
      return QuickBase.\u0275fac = function(boardManager) {
        return new (boardManager || QuickBase)(self.Sb(c.a), self.Sb(clrVal));
      }, QuickBase.\u0275cmp = self.Mb({
        type : QuickBase,
        selectors : [["testinterface-mediatypes-drugad"]],
        viewQuery : function(query, options) {
          var el;
          if (1 & query) {
            self.ad(body, true);
          }
          if (2 & query && self.Dc(el = self.hc())) {
            options.imageElement = el.first;
          }
        },
        inputs : {
          isAnyDialogDocked : "isAnyDialogDocked",
          drugAdsList : "drugAdsList"
        },
        decls : 30,
        vars : 9,
        consts : [["onmousedown", "return false", 1, "d-flex", "flex-column", "drug-ad"], [1, "button-yellow", 3, "click"], [1, "button-red", 3, "click"], ["id", "image-container", 1, "content-body", 3, "hidden"], [3, "src"], ["drugAdPreview", ""], [1, "drug-ad-footer", "d-flex", "align-items-center", "justify-content-center"], ["aria-label", "Zoom In Drug-Ad", 1, "button-yellow", 3, "click"], [1, "fal", "fa-2x", "fa-search-plus", "reverse-icon"], ["aria-label", "Zoom Out Drug-Ad", 1, "button-yellow", 
        3, "click"], [1, "fal", "fa-2x", "fa-search-minus", "reverse-icon"], ["class", "button-yellow reset-btn", 3, "click", 4, "ngIf"], ["id", "overlay-drugAdScreen", "onmousedown", "return false", 1, "overlay-drugAd"], ["aria-label", "Close Full Screen", "tabindex", "0", "role", "button", 1, "fal", "fa-4x", "fa-times", "close-btn", 3, "click", "keydown.enter"], ["id", "drugAd-Images", 1, "d-flex", "overlay-drugAd-content"], [3, "src", 4, "ngFor", "ngForOf"], [1, "drugad-footer-fullscreen", "d-flex", 
        "align-items-center", "justify-content-center"], [1, "fal", "fa-3x", "fa-search-plus", "reverse-icon"], [1, "fal", "fa-3x", "fa-search-minus", "reverse-icon"], [1, "button-yellow", "reset-btn", 3, "click"]],
        template : function(text, context) {
          if (1 & text) {
            self.Yb(0, "div", 0);
            self.Yb(1, "div");
            self.Yb(2, "button", 1);
            self.gc("click", function() {
              return context.gotoNextPageInDrugAd();
            });
            self.Yb(3, "strong");
            self.Uc(4);
            self.Xb();
            self.Xb();
            self.Yb(5, "button", 2);
            self.gc("click", function() {
              return context.viewDrugAdInFullScreen();
            });
            self.Uc(6, "View Full Screen");
            self.Xb();
            self.Xb();
            self.Yb(7, "div", 3);
            self.Tb(8, "img", 4, 5);
            self.Xb();
            self.Yb(10, "div", 6);
            self.Yb(11, "button", 7);
            self.gc("click", function() {
              return context.zoomIn();
            });
            self.Tb(12, "i", 8);
            self.Xb();
            self.Yb(13, "button", 9);
            self.gc("click", function() {
              return context.zoomOut();
            });
            self.Tb(14, "i", 10);
            self.Xb();
            self.Yb(15, "span");
            self.Uc(16);
            self.Xb();
            self.Sc(17, view, 2, 0, "button", 11);
            self.Xb();
            self.Xb();
            self.Yb(18, "div", 12);
            self.Yb(19, "i", 13);
            self.gc("click", function() {
              return context.closeDrugAdFullScreen();
            })("keydown.enter", function() {
              return context.closeDrugAdFullScreen();
            });
            self.Xb();
            self.Yb(20, "div", 14);
            self.Sc(21, getPulls, 1, 1, "img", 15);
            self.Xb();
            self.Yb(22, "div", 16);
            self.Yb(23, "button", 1);
            self.gc("click", function() {
              return context.zoomImageInFullScreen(true);
            });
            self.Tb(24, "i", 17);
            self.Xb();
            self.Yb(25, "button", 1);
            self.gc("click", function() {
              return context.zoomImageInFullScreen(false);
            });
            self.Tb(26, "i", 18);
            self.Xb();
            self.Yb(27, "span");
            self.Uc(28);
            self.Xb();
            self.Sc(29, reset, 2, 0, "button", 11);
            self.Xb();
            self.Xb();
          }
          if (2 & text) {
            self.Cb(4);
            self.Xc("Go to Page ", context.currDrugAdPage % context._drugAdsList.length + 1, " of ", context._drugAdsList.length, "");
            self.Cb(3);
            self.sc("hidden", null == context._drugAdsList[context.currDrugAdPage - 1] || "" == context._drugAdsList[context.currDrugAdPage - 1]);
            self.Cb(1);
            self.sc("src", context.sharedService._currentQuestion.questionMedia.baseUrl + context._drugAdsList[context.currDrugAdPage - 1], self.Lc);
            self.Cb(8);
            self.Vc(100 * context.options.zoomLevels[context.options.currentZoomLevel] + "%");
            self.Cb(1);
            self.sc("ngIf", 2 != context.options.currentZoomLevel);
            self.Cb(4);
            self.sc("ngForOf", context._drugAdsList);
            self.Cb(7);
            self.Vc(100 * context.currZoomLevelInFullScreen + "%");
            self.Cb(1);
            self.sc("ngIf", 1 != context.currZoomLevelInFullScreen);
          }
        },
        directives : [props.t, props.s],
        styles : ["button{margin:0 8px;cursor:pointer;border-radius:3px;border-color:var(--drug-ad-btn-border-color)}.button-yellow{background:var(--drug-ad-common-btn-color)}.button-red{color:#fff;background:var(--drug-ad-fullscreen-btn-color)}.reset-btn{height:100%;font-weight:700}.drug-ad{padding:22px 10px 15px;width:100%}.drug-ad .content-body{overflow:auto;margin:10px 0;height:100%;scrollbar-width:thin}.drug-ad .content-body::-webkit-scrollbar{width:5px;height:5px}.drug-ad .content-body::-webkit-scrollbar-track{background:none}.drug-ad .content-body::-webkit-scrollbar-thumb{background:#cdcdcd}.drug-ad .content-body::-webkit-scrollbar-thumb:hover{background:#a6a6a6}.drug-ad .reverse-icon{transform:rotateY(180deg)}.overlay-drugAd{height:100%;width:100%;display:none;position:fixed;z-index:1001;top:0;left:0;right:0;bottom:0;background-color:#a9a9a9;padding:40px;flex-direction:column}.overlay-drugAd .overlay-drugAd-content{overflow:auto;zoom:1;height:100%;padding:0 140px}.overlay-drugAd .overlay-drugAd-content img{padding-right:10px}.overlay-drugAd .close-btn{position:absolute;top:-10px;right:0;text-align:right;color:#fff;background-color:#545454;height:55px}.overlay-drugAd .drugad-footer-fullscreen{padding-top:20px}.overlay-drugAd .drugad-footer-fullscreen .reset-btn{font-size:18px}.overlay-drugAd .drugad-footer-fullscreen .reverse-icon{transform:rotateY(180deg)}"],
        encapsulation : 2
      }), QuickBase;
    })();
    const ary = ["statsBar"];
    const prop = function(value) {
      return {
        "font-size" : value
      };
    };
    const me = function(res) {
      return {
        "disabled-state" : res
      };
    };
    const db = function(size) {
      return {
        "answer-choice-content-width" : size
      };
    };
    const string = function(sStringValue) {
      return {
        "answer-container-table-width" : sStringValue
      };
    };
    const pt = function(ratioAngle) {
      return {
        "rounded-pill" : ratioAngle
      };
    };
    const status = function(options) {
      return {
        "raised-hand" : options
      };
    };
    const scale = function(height, width) {
      return {
        "flex-basis" : height,
        "max-width" : width
      };
    };
    const extra = function(extra) {
      return {
        "split-screen" : extra
      };
    };
    const taskScore = function(decreaseCounter) {
      return {
        "mt-0" : decreaseCounter
      };
    };
    const files = function(checkForFiles) {
      return {
        "left-border" : checkForFiles
      };
    };
    const lookup = function(name) {
      return {
        "right-border" : name
      };
    };
    const watch = function(schema, callback) {
      return {
        "left-border" : schema,
        "right-border" : callback
      };
    };
    const shape = function(opt_height) {
      return {
        "max-width" : opt_height
      };
    };
    const hash = function(context, partials) {
      return {
        "has-highlight-dropdown" : context,
        "any-dialog-docked" : partials
      };
    };
    const command = function(selector) {
      return {
        resizing : selector
      };
    };
    const datum = function(value) {
      return {
        "any-dialog-docked" : value
      };
    };
    const zoom = function(width) {
      return {
        width : width
      };
    };
    let li = (() => {
      class DelveConfiguration {
        constructor(provider, event, i, store, file, watcher, events) {
          this.sharedService = provider;
          this.usmleService = event;
          this.flashcardTestInterfaceFeaturesService = i;
          this.dockingService = store;
          this.dialog = file;
          this.dialogDrugAdService = watcher;
          this.themeChangeService = events;
          this.loadQuestion = false;
          this.testInterfaceContractImpl = null;
          this.questionType = options.k;
          this.questionMediaType = options.j;
          this.questionFormatType = options.i;
          this.contextMenuContent = exports.a;
          this.flashCardType = options.d;
          this.testMode = options.n;
          this.themes = options.o;
          this.math = Math;
          this.isMouseDownOnResizeLine = false;
          this.isMouseDownOnDockResizeLine = false;
          this.screenWidth = 0;
          this.triggeredTextContextMenuOnMouseUp = false;
          this.drugAdsList = [];
          this.noUserSelect = {
            "-webkit-touch-callout" : "none",
            "-webkit-user-select" : "none",
            "-moz-user-select" : "none",
            "-ms-user-select" : "none",
            "user-select" : "none"
          };
          this.highlightOptions = [{
            id : 1,
            color : "yellow"
          }, {
            id : 2,
            color : "green"
          }, {
            id : 3,
            color : "blue"
          }, {
            id : 4,
            color : "pink"
          }, {
            id : 5,
            color : "orange"
          }];
        }
        get toolbarDisplayHighlights() {
          return !this.hasHighlightDropdown && this.sharedService._testInfo.testModeId != options.n.search && this.sharedService._highlights.selectedContent == exports.a.Text;
        }
        get toolbarDisplayNonCurrentFlashcard() {
          return this.sharedService._userPreferences.jsonSettings.testPreferences.isflashcardsEnabled && !this.individualFlashcardInUse();
        }
        get showStatsBarDivider() {
          return null != this.statsBar && this.statsBar.nativeElement.offsetHeight > 90;
        }
        get hasHighlightDropdown() {
          return false;
        }
        get isSplitScreenAllowed() {
          var ApiSession;
          return this.sharedService._launchTestOptions.canShowAnswer && this.screenWidth > 1200 && !this.isAnyDialogDocked && (null === (ApiSession = this.sharedService._currentQuestion.questionMedia) || void 0 === ApiSession ? void 0 : ApiSession.typeId) != options.j.drugad && this.sharedService._currentQuestion.questionTypeId != options.k.drugad;
        }
        get showCorrectPercentageForAnswerOptions() {
          return (this.sharedService._launchTestOptions.canShowAnswer || this.sharedService._testInfo.testModeId == options.n.search) && this.sharedService._currentQuestion.formatTypeId == options.i.singleBestResponse && !this.sharedService._userPreferences.jsonSettings.testPreferences.hideAnswerStats && this.sharedService._currentQuestion.peopleTaken >= 500;
        }
        get isAnyDialogDocked() {
          return this.sharedService._userPreferences.jsonSettings.testPreferences.dockedElements.flashcards || this.sharedService._userPreferences.jsonSettings.testPreferences.dockedElements.labvalues || this.sharedService._userPreferences.jsonSettings.testPreferences.dockedElements.notebook || this.sharedService._userPreferences.jsonSettings.testPreferences.dockedElements.notes;
        }
        get smartContextMenuRestricts() {
          return this.sharedService._testInterfaceConfig.smartContextMenu && this.sharedService._userPreferences.jsonSettings.testPreferences.smartContextMenu && !this.sharedService._launchTestOptions.canShowAnswer;
        }
        get hasExhibitsInQuestion() {
          return this.sharedService._userPreferences.jsonSettings.testPreferences.theme == options.o.nbome && this.usmleService.multipleExhibits.filter((canCreateDiscussions) => {
            return canCreateDiscussions.questionIndex == this.sharedService._currentQuestion.questionIndex;
          }).length > 0;
        }
        get reduceQuestionContentWidthForNBOME() {
          return (!this.sharedService._userPreferences.jsonSettings.testPreferences.splitScreen || this.sharedService._userPreferences.jsonSettings.testPreferences.splitScreen && !this.sharedService._launchTestOptions.canShowAnswer && !this.sharedService._currentAbstract) && this.sharedService._userPreferences.jsonSettings.testPreferences.theme == options.o.nbome && !this.isAnyDialogDocked && this.screenWidth > 1200;
        }
        get contentMinWidth() {
          var ApiSession;
          return (null === (ApiSession = this.sharedService._currentQuestion.questionMedia) || void 0 === ApiSession ? void 0 : ApiSession.typeId) == options.j.drugad || this.sharedService._currentQuestion.questionTypeId == options.k.drugad ? 800 : 400;
        }
        ngOnInit() {
          this.testInterfaceContractImpl = this.sharedService._testInterfaceContractImpl;
          this.contextMenuOpened = false;
          setTimeout(() => {
            this.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            this.usmleService.initializeLeftNavigator(true);
            this.usmleService.handleSplitScreen();
          }, 100);
          this.subscribeToServiceEvents();
          this.usmleService._onQuestionChange.subscribe(() => {
            this.usmleService.loadCurrentQuestionsStandards();
            if (this.sharedService._userPreferences.jsonSettings.testPreferences.theme == options.o.nbome) {
              this.initializeQuestionContentView();
            }
            setTimeout(() => {
              var $options_element;
              var $listView;
              var $suggestionContainer;
              $(".common-content").scrollTop(0);
              if (!(null === ($options_element = $(".split-screen.left-content")) || void 0 === $options_element)) {
                $options_element.scrollTop(0);
              }
              if (!(null === ($listView = $(".split-screen.right-content")) || void 0 === $listView)) {
                $listView.scrollTop(0);
              }
              if (!(null === ($suggestionContainer = $(".question-abstract")) || void 0 === $suggestionContainer)) {
                $suggestionContainer.scrollTop(0);
              }
            });
          });
          this.usmleService.loadCurrentQuestionsStandards();
          this.onThemeChange = this.themeChangeService._onThemeChange.subscribe(() => {
            if (this.isAnyDialogDocked) {
              setTimeout(() => {
                const binCnt = $("common-content").width();
                const starLoadedCheck = Math.min(this.dockingService.dockedDialogWidth, binCnt - this.contentMinWidth);
                this.dockingService.onDockContainerResize.next(starLoadedCheck);
              });
            }
          });
        }
        ngAfterContentInit() {
          this.initializeHighlightMenu();
          this.loadQuestion = true;
          if (!MathJax.isReady) {
            this.sharedService.showWarningDialog("Failed to load MathJax, Please refresh the browser.");
          }
        }
        ngAfterViewInit() {
          if (this.sharedService._userPreferences.jsonSettings.testPreferences.theme == options.o.nbome) {
            this.initializeQuestionContentView();
          }
        }
        initializeQuestionContentView() {
          setTimeout(() => {
            $("#questionText table").each(function() {
              if ($(this).find("#vignettedescriptor").length > 0) {
                $(this).css("margin-left", "0");
              }
            });
          });
        }
        initializeHighlightMenu() {
          this.hideMenu = (callback) => {
            setTimeout(() => {
              if (!(this.sharedService._highlights.checkSelection() || this.contextMenuOpened)) {
                this.sharedService._highlights.hideContextMenu("context-menu");
              }
              this.contextMenuOpened = false;
            });
          };
          document.addEventListener("click", this.hideMenu);
          document.addEventListener("keydown", this.hideMenu);
        }
        subscribeToServiceEvents() {
          this.onKeyboardShortcut = this.usmleService.keyboardShortcutsObj._onKeyboardShortcut.subscribe((e) => {
            if ((!this.dialog.openDialogs.length || "answerSelect" == e.fn && this.usmleService.allDialogsDocked() && this.usmleService.keydownEventIsOutsideDockContainer(e.event)) && "answerSelect" == e.fn) {
              this.setUserAnswer(e.val);
            }
          });
        }
        playMedia() {
          this.usmleService.openExhibitsDialog([{
            id : this.sharedService._currentQuestion.questionMedia.id,
            fileName : this.sharedService._currentQuestion.questionMedia.fileName,
            typeId : this.sharedService._currentQuestion.questionMedia.typeId,
            title : "Exhibit 1",
            sequenceId : 1,
            baseUrl : this.sharedService._currentQuestion.questionMedia.baseUrl
          }]);
        }
        setUserAnswer(i) {
          if (i <= this.sharedService._currentQuestion.answerChoiceList.length && !this.sharedService._currentQuestion.isAnswerChoiceDisabled) {
            this.sharedService._currentQuestion.userAnswer = i;
          }
          this.usmleService.setUserAnswerStats();
        }
        invokeAnswerStrikeOut(event, i) {
          if (1 != event.which && 3 != event.which) {
            return;
          }
          let _maskLayer = $("#answerhighlight" + i)[0];
          this.sharedService._highlights.toggleAnswerStrikeout(_maskLayer);
        }
        nextQuestion() {
          this.usmleService.nextQuestion();
        }
        submitQuestion() {
          this.sharedService._testInterfaceContractImpl.logEventDataToFirebase("submit_question", {
            parent_screen : "TestInterface"
          });
          this.usmleService.submitQuestion();
        }
        getCorrectAnswer() {
          return this.sharedService._currentQuestion.answerChoiceList[parseInt(this.sharedService._currentQuestion.correctAnswer) - 1].choiceNumber;
        }
        raiseHandOnQuestion() {
          this.sharedService._testInterfaceContractImpl.logEventDataToFirebase("raise_hand", {
            parent_screen : "TestInterface"
          });
          this.testInterfaceContractImpl.requestForHelp(this.sharedService._currentQuestion.questionIndex, this.sharedService._testInfo.testId).subscribe((canCreateDiscussions) => {
            this.sharedService._currentQuestion.isHelpNeeded = !this.sharedService._currentQuestion.isHelpNeeded;
          });
        }
        mouseDownOnResizeLine() {
          this.isMouseDownOnResizeLine = true;
          this.toggleDragStyles();
        }
        mouseDownOnDockResizeLine() {
          this.isMouseDownOnDockResizeLine = true;
          this.toggleDragStyles();
        }
        checkAndShowTextContextMenu(event) {
          this.triggeredTextContextMenuOnMouseUp = false;
          if (!this.clickedOnHTMLElementWithGivenId(event, "vignettedescriptor")) {
            setTimeout(() => {
              if (this.sharedService._highlights.checkSelection()) {
                this.sharedService._highlights.selectedContent = exports.a.Text;
                if (this.noOptionAvailableInContextMenu()) {
                  if (!(this.hasHighlightDropdown || this.sharedService._testInfo.testModeId == options.n.search)) {
                    this.applyHighlight(event, this.sharedService._userPreferences.jsonSettings.testPreferences.defaultHighlightColor.toString());
                  }
                } else {
                  this.sharedService._testInterfaceContractImpl.logEventDataToFirebase("show_context_menu", {
                    parent_screen : "TestInterface"
                  });
                  this.sharedService._highlights.showContextMenu(event, "context-menu");
                  this.contextMenuOpened = true;
                  this.triggeredTextContextMenuOnMouseUp = true;
                }
              }
            });
          }
        }
        individualFlashcardInUse() {
          var element_chooser;
          return (null === (element_chooser = this.dialog.openDialogs) || void 0 === element_chooser ? void 0 : element_chooser.some((timeline_mode) => {
            return "flashcards-ti-popup" == timeline_mode.id;
          })) && (this.flashcardTestInterfaceFeaturesService.cardViewFlashcardScreen == options.e.CardAddEditScreen || this.flashcardTestInterfaceFeaturesService.cardViewFlashcardScreen == options.e.CardViewScreen);
        }
        applyHighlight(event, i) {
          event.preventDefault();
          this.sharedService._highlights.restoreTextSelection(this.sharedService._highlights.currentSelection);
          this.sharedService._highlights.addHighlight(i);
        }
        addContentToANewFlashcard() {
          let e = this.sharedService._highlights.getSelectedContent();
          if (this.sharedService._highlights.isValidSelection(e)) {
            if (this.sharedService._userPreferences.jsonSettings.testPreferences.dockedElements.flashcards && !this.dialog.openDialogs.some((timeline_mode) => {
              return "flashcards-ti-popup" == timeline_mode.id;
            })) {
              this.dockingService.contentToAddToANewCardFront = e;
              this.dockingService.contentToAddToAnExistingCard = "";
              this.dockingService.dockDialog(options.b.flashcards);
            } else {
              this.flashcardTestInterfaceFeaturesService.addContentToANewFlashcard(e);
            }
          }
        }
        addContentToAnExistingFlashcard() {
          let e = this.sharedService._highlights.getSelectedContent();
          if (this.sharedService._highlights.isValidSelection(e)) {
            if (this.sharedService._userPreferences.jsonSettings.testPreferences.dockedElements.flashcards && !this.dialog.openDialogs.some((timeline_mode) => {
              return "flashcards-ti-popup" == timeline_mode.id;
            })) {
              this.dockingService.contentToAddToANewCardFront = "";
              this.dockingService.contentToAddToAnExistingCard = e;
              this.dockingService.dockDialog(options.b.flashcards);
            } else {
              this.flashcardTestInterfaceFeaturesService.addContentToAnExistingFlashcard(e);
            }
          }
        }
        addContentToFlashcardInUse() {
          let e = this.sharedService._highlights.getSelectedContent();
          if (this.sharedService._highlights.isValidSelection(e)) {
            this.flashcardTestInterfaceFeaturesService.addContentToFlashcardInUse(e);
          }
        }
        addToNotebook() {
          let e = this.sharedService._highlights.getSelectedContent();
          if (this.sharedService._highlights.isValidSelection(e)) {
            if (this.sharedService._userPreferences.jsonSettings.testPreferences.dockedElements.notebook && !this.dialog.openDialogs.some((timeline_mode) => {
              return "notebook-dialog-container" == timeline_mode.id;
            })) {
              this.dockingService.contentToAddToNotebook = e;
              this.dockingService.dockDialog(options.b.notebook);
            } else {
              this.sharedService._notebookContractImpl.addToNotebook(e);
            }
          }
        }
        noOptionAvailableInContextMenu() {
          return (!this.sharedService._testInterfaceConfig.flashcards || !this.sharedService._userPreferences.jsonSettings.testPreferences.isflashcardsEnabled || this.smartContextMenuRestricts) && (!this.sharedService._testInterfaceConfig.myNoteBook || !this.sharedService._userPreferences.jsonSettings.testPreferences.isNotebookEnabled || this.smartContextMenuRestricts) && (!this.sharedService._userPreferences.jsonSettings.testPreferences.multicolorPicker || this.sharedService._testInfo.testModeId == 
          options.n.search);
        }
        commonContentOnMouseClick(event) {
          setTimeout(() => {
            if (!this.triggeredTextContextMenuOnMouseUp) {
              if (this.clickedOnAnswerContainer(event)) {
                return;
              }
              if (this.clickedOnHTMLElementWithGivenId(event, "vignettedescriptor")) {
                return;
              }
              const artistTrack = this.clickedOnHTMLTag(event, "IMG");
              if (artistTrack) {
                const e = this.createExhibitObjectFromImage(artistTrack);
                return void this.usmleService.openExhibitsDialog([e]);
              }
              if (this.noOptionAvailableInContextMenu()) {
                return;
              }
              const i = this.clickedOnHTMLTag(event, "TABLE");
              if (i) {
                this.sharedService._highlights.currentTableSelection = i;
                this.sharedService._highlights.selectedContent = exports.a.Table;
                this.sharedService._highlights.showContextMenu(event, "context-menu");
                this.contextMenuOpened = true;
              }
            }
          });
        }
        createExhibitObjectFromImage(file) {
          var _ref1;
          let parts = file.src.split("/");
          return {
            baseUrl : parts.slice(0, parts.length - 1).join("/") + "/",
            fileName : parts[parts.length - 1],
            id : (null === (_ref1 = file.id) || void 0 === _ref1 ? void 0 : _ref1.length) ? parseInt(file.id) : 0,
            sequenceId : 1,
            title : "",
            typeId : 1
          };
        }
        clickedOnHTMLTag(file, event) {
          let item = file.target;
          for (; item && item.tagName != event;) {
            item = item.parentElement;
          }
          return item;
        }
        clickedOnHTMLElementWithGivenId(file, event) {
          let item = file.target;
          for (; item && item.id != event;) {
            item = item.parentElement;
          }
          return item;
        }
        clickedOnAnswerContainer(event) {
          let acElem = event.target;
          for (; acElem && "answerContainer" != acElem.id;) {
            acElem = acElem.parentElement;
          }
          return acElem;
        }
        onMouseMove(event) {
          if (this.isMouseDownOnResizeLine) {
            event.preventDefault();
            let maxElementCount = $(window).width() - this.contentMinWidth - 35 - 5;
            const pageCount = event.clientX - $("#questionInformation").offset().left;
            this.sharedService._testInterfaceConfig.leftContentFlexBasis = pageCount < maxElementCount ? pageCount + "px" : maxElementCount + "px";
          } else {
            if (this.isMouseDownOnDockResizeLine) {
              event.preventDefault();
              let t = $(window).width() - event.clientX;
              t = Math.max(t, this.dockingService.minDockedDialogSize);
              const binCnt = $("common-content").width();
              t = Math.min(t, binCnt - this.contentMinWidth);
              this.dockingService.onDockContainerResize.next(t);
              if (t > 700) {
                $(".mat-tab-header-pagination").css("display", "none");
                $(".mat-tab-list").css("transform", "translateX(0px)");
              } else {
                if (this.sharedService._userPreferences.jsonSettings.testPreferences.theme != options.o.nbme) {
                  $(".mat-tab-header-pagination").css("display", "flex");
                  if ($(".mat-tab-label-active").attr("id").includes("3") || $(".mat-tab-label-active").attr("id").includes("2")) {
                    $(".mat-tab-list").css("transform", "translateX(-246px)");
                  }
                }
              }
            }
          }
        }
        onMouseUp(event) {
          if (this.isMouseDownOnResizeLine) {
            this.isMouseDownOnResizeLine = false;
            this.toggleDragStyles();
          } else {
            if (this.isMouseDownOnDockResizeLine) {
              this.isMouseDownOnDockResizeLine = false;
              this.toggleDragStyles();
            }
          }
        }
        onResize(event) {
          if (this.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, this.usmleService.initializeLeftNavigator(), this.usmleService.handleSplitScreen(), this.isAnyDialogDocked) {
            let e = Math.max(this.dockingService.dockedDialogWidth, this.dockingService.minDockedDialogSize);
            e = Math.min(e, $(window).width() - this.contentMinWidth);
            if (e < 100) {
              e = 100;
            }
            this.dockingService.onDockContainerResize.next(e);
          }
        }
        ngOnDestroy() {
          this.onKeyboardShortcut.unsubscribe();
          this.onThemeChange.unsubscribe();
          document.removeEventListener("click", this.hideMenu);
          document.removeEventListener("keydown", this.hideMenu);
        }
        toggleDragStyles() {
          document.getSelection().empty();
          let scopeIcons = document.body;
          if (this.isMouseDownOnResizeLine || this.isMouseDownOnDockResizeLine) {
            Object.keys(this.noUserSelect).forEach((i) => {
              scopeIcons.style.setProperty("" + i, this.noUserSelect[i]);
            });
          } else {
            Object.keys(this.noUserSelect).forEach((i) => {
              scopeIcons.style.removeProperty("" + i);
            });
          }
        }
      }
      return DelveConfiguration.\u0275fac = function(canCreateDiscussions) {
        return new (canCreateDiscussions || DelveConfiguration)(self.Sb(c.a), self.Sb(clrVal), self.Sb(G.a), self.Sb(dialogGeometry.a), self.Sb(ts.b), self.Sb(dappId), self.Sb(data.a));
      }, DelveConfiguration.\u0275cmp = self.Mb({
        type : DelveConfiguration,
        selectors : [["common-content"]],
        viewQuery : function(query, options) {
          var el;
          if (1 & query) {
            self.ad(ary, true);
          }
          if (2 & query && self.Dc(el = self.hc())) {
            options.statsBar = el.first;
          }
        },
        hostBindings : function(pip_offset_base, p) {
          if (1 & pip_offset_base) {
            self.gc("mousemove", function(time) {
              return p.onMouseMove(time);
            }, false, self.Gc)("mouseup", function(i) {
              return p.onMouseUp(i);
            }, false, self.Gc)("resize", function(value) {
              return p.onResize(value);
            }, false, self.Hc);
          }
        },
        decls : 14,
        vars : 23,
        consts : [["oncopy", "return false;", "oncut", "return false;", 1, "common-content", 3, "ngClass", "click"], ["class", "question-abstract", 4, "ngIf"], ["id", "questionInformation", "class", "question-content left-content", 3, "ngStyle", "ngClass", 4, "ngIf"], [1, "vertical-divider-line", 3, "ngClass", "hidden"], [1, "wide-for-mouse-events", "show-resize-handle", 3, "mousedown"], [1, "question-content", "right-content", 3, "ngClass", "hidden"], ["id", "context-menu", 1, "context-menu", 2, 
        "display", "none", 3, "click"], ["class", "highlight-buttons left-border", 4, "ngIf"], [4, "ngIf"], ["class", "d-flex drug-ad-main-container", 3, "isAnyDialogDocked", "drugAdsList", "ngStyle", 4, "ngIf"], [1, "dock-container", 3, "ngClass", "ngStyle"], [1, "question-abstract"], ["id", "questionAbstract", 3, "ngStyle", "innerHTML", "mouseup"], ["id", "questionInformation", 1, "question-content", "left-content", 3, "ngStyle", "ngClass"], ["class", "deactivated-question", 4, "ngIf"], ["id", 
        "questionText", 3, "ngStyle", "innerHTML", "mouseup"], ["class", "media-button", 4, "ngIf"], ["id", "answerContainer"], ["class", "answer-container", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "pb-4", 4, "ngIf"], ["class", "proceed-to-next-btn", "aria-label", "Proceed to Next Item", "tabindex", "0", "role", "button", 3, "click", "keydown.enter", 4, "ngIf"], ["role", "alert", "class", "stats-bar d-flex align-items-center flex-wrap", 4, "ngIf"], [1, "explanation-placeholder", 2, "display", 
        "none"], ["id", "explanation-container", 1, "explanation", 3, "hidden", "ngClass"], ["role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["data-toggle", "tab", "data-target", "#first-explanation", 1, "nav-link", "active", 3, "ngStyle"], [1, "nav-item", "empty-nav-item"], ["id", "explanation", 3, "ngStyle", "mouseup"], [1, "tab-content"], [2, "visibility", "hidden", "height", "0px"], [1, "pull-left"], [1, "pull-right"], [1, "clearfix"], ["id", "first-explanation", 1, "tab-pane", "active", 
        3, "innerHTML"], ["class", "references", 3, "ngStyle", 4, "ngIf"], ["class", "standards", 4, "ngIf"], [1, "copyright", "text-center"], [3, "innerHTML", 4, "ngIf"], ["class", "raised-hand-container", 4, "ngIf"], [1, "deactivated-question"], [1, "media-button"], ["mat-stroked-button", "", "aria-label", "Play Media", 1, "play-media-btn", 3, "click"], [1, "answer-container", 3, "ngClass", "ngStyle"], ["class", "d-flex align-items-start my-2 answer-choice-background", 4, "ngFor", "ngForOf"], [2, 
        "padding-left", "83px", 3, "innerHTML"], [1, "d-flex", "align-items-start", "my-2", "answer-choice-background"], [1, "d-flex", "align-items-start", "left-td"], ["class", "fal fa-lg fa-check", 4, "ngIf"], ["class", "fal fa-lg fa-times", 4, "ngIf"], [3, "ngModel", "ngModelChange", "change"], [3, "value", "disabled", "ngClass", "aria-label"], [1, "d-flex", "answer-choice-content", 3, "ngClass"], [3, "id", "mouseup"], [3, "innerHtml"], [1, "fal", "fa-lg", "fa-check"], [1, "fal", "fa-lg", "fa-times"], 
        ["id", "viewQuestionExhibits", "class", "nbome-btn nbome-btn-view-Exhibits", "title", "View Exhibits", "aria-label", "View Exhibits", 4, "ngIf"], ["id", "viewQuestionExhibits", "title", "View Exhibits", "aria-label", "View Exhibits", 1, "nbome-btn", "nbome-btn-view-Exhibits"], [1, "pb-4"], ["aria-label", "Submit", 1, "submit-btn", 3, "ngClass", "click"], ["aria-label", "Proceed to Next Item", "tabindex", "0", "role", "button", 1, "proceed-to-next-btn", 3, "click", "keydown.enter"], ["role", 
        "alert", 1, "stats-bar", "d-flex", "align-items-center", "flex-wrap"], ["statsBar", ""], ["class", "correct-answer content", 4, "ngIf"], ["class", "incorrect-answer content d-flex align-items-start flex-column", 4, "ngIf"], ["class", "omitted-answer content d-flex align-items-start flex-column", 4, "ngIf"], ["class", "search-answer content", 4, "ngIf"], ["class", "content", 4, "ngIf"], [1, "break", ".d-none", ".d-sm-block", ".d-md-none"], [1, "content", "d-flex", "align-items-center"], [1, 
        "fal", "fa-clock"], [1, "d-flex", "align-items-start", "flex-column", "pl-1"], ["class", "stats-value", 4, "ngIf"], [1, "stats-label"], [1, "fal", "fa-calendar-alt"], [1, "d-flex", "align-items-start", "flex-column", "pl-2"], [1, "stats-value"], ["class", "answer-div-splitter", 4, "ngIf"], [1, "correct-answer", "content"], [1, "incorrect-answer", "content", "d-flex", "align-items-start", "flex-column"], [1, "d-flex", "align-items-start", "flex-column"], [1, "stats-value", 3, "innerHTML"], 
        [1, "omitted-answer", "content", "d-flex", "align-items-start", "flex-column"], [1, "search-answer", "content"], [1, "content"], ["class", "d-flex align-items-center", 4, "ngIf"], [1, "d-flex", "align-items-center"], [1, "fal", "fa-chart-bar"], [1, "answer-div-splitter"], [1, "references", 3, "ngStyle"], [1, "header"], [4, "ngFor", "ngForOf"], ["target", "_blank", 3, "href"], [3, "innerHTML"], [1, "standards"], [1, "content", "d-flex", "justify-content-start"], ["class", "standard d-flex flex-column", 
        4, "ngFor", "ngForOf"], [1, "standard", "d-flex", "flex-column"], [1, "standard-description"], [1, "standard-header"], [1, "raised-hand-container"], ["aria-label", "Raise a Hand", 3, "ngClass", "click"], [1, "fal", "fa-2x", "fa-hand-paper", "mr-3"], [1, "highlight-buttons", "left-border"], [4, "ngIf", "ngIfElse"], ["singleColor", ""], ["class", "fa-stack", "aria-label", "Apply Highlight to selected content", "tabindex", "0", "role", "button", 3, "click", "keydown.enter", 4, "ngFor", "ngForOf"], 
        ["aria-label", "Apply Highlight to selected content", "tabindex", "0", "role", "button", 1, "fa-stack", 3, "click", "keydown.enter"], [1, "fas", "fa-circle", "highlighter", "fa-stack-2x", "highlighter-outline"], ["aria-label", "Apply or Remove Highlight to selected content", "tabindex", "0", "role", "button", 1, "fa-stack", 3, "click", "keydown.enter"], [3, "vertical"], ["aria-label", "Add Selected Content to a New Flashcard", "tabindex", "0", "role", "button", 1, "add-to-flashcard", "d-flex", 
        "align-items-center", 3, "ngClass", "click", "keydown.enter"], [1, "fal", "fa-lg", "fa-bolt"], ["aria-label", "Add Selected Content to an Existing Flashcard", "tabindex", "0", "role", "button", 1, "add-to-flashcard", "d-flex", "align-items-center", 3, "ngClass", "click", "keydown.enter"], [1, "fa-stack"], [1, "fal", "fa-lg", "fa-bolt", "fa-stack-1x"], [1, "fal", "fa-square", "fa-stack-1x"], ["aria-label", "Add Selected Content to Flashcard in Use", "tabindex", "0", "role", "button", 1, "add-to-flashcard", 
        "d-flex", "align-items-center", 3, "ngClass", "click", "keydown.enter"], ["aria-label", "Add Selected Content to Notebook", "tabindex", "0", "role", "button", 1, "add-to-flashcard", "d-flex", "align-items-center", "right-border", 3, "click", "keydown.enter"], [1, "fal", "fa-lg", "fa-book"], [1, "d-flex", "drug-ad-main-container", 3, "isAnyDialogDocked", "drugAdsList", "ngStyle"]],
        template : function(grunt, opts) {
          if (1 & grunt) {
            self.Yb(0, "div", 0);
            self.gc("click", function(maxRefFollow) {
              return opts.commonContentOnMouseClick(maxRefFollow);
            });
            self.Sc(1, show, 3, 6, "div", 1);
            self.Sc(2, callback, 38, 37, "div", 2);
            self.Yb(3, "div", 3);
            self.Yb(4, "div", 4);
            self.gc("mousedown", function() {
              return opts.mouseDownOnResizeLine();
            });
            self.Uc(5, "\u00a0");
            self.Xb();
            self.Xb();
            self.Tb(6, "div", 5);
            self.Xb();
            self.Yb(7, "div", 6);
            self.gc("click", function() {
              return opts.sharedService._highlights.hideContextMenu("context-menu");
            });
            self.Sc(8, _expandPluralForm, 4, 2, "div", 7);
            self.Sc(9, _expandDefaultForm, 5, 4, "ng-container", 8);
            self.Xb();
            self.Sc(10, encodeData, 1, 5, "testinterface-mediatypes-drugad", 9);
            self.Yb(11, "div", 10);
            self.Yb(12, "div", 4);
            self.gc("mousedown", function() {
              return opts.mouseDownOnDockResizeLine();
            });
            self.Uc(13, "\u00a0");
            self.Xb();
            self.Xb();
          }
          if (2 & grunt) {
            self.sc("ngClass", self.zc(12, hash, opts.hasHighlightDropdown, opts.isAnyDialogDocked));
            self.Cb(1);
            self.sc("ngIf", opts.sharedService._currentAbstract);
            self.Cb(1);
            self.sc("ngIf", opts.loadQuestion);
            self.Cb(1);
            self.sc("ngClass", self.yc(15, command, opts.isMouseDownOnResizeLine))("hidden", !(opts.sharedService._userPreferences.jsonSettings.testPreferences.splitScreen && opts.isSplitScreenAllowed));
            self.Cb(3);
            self.sc("ngClass", self.yc(17, extra, opts.sharedService._userPreferences.jsonSettings.testPreferences.splitScreen && opts.isSplitScreenAllowed && 0 == opts.sharedService._currentQuestion.abstractId))("hidden", !(opts.sharedService._userPreferences.jsonSettings.testPreferences.splitScreen && opts.isSplitScreenAllowed && 0 == opts.sharedService._currentQuestion.abstractId));
            self.Cb(2);
            self.sc("ngIf", opts.toolbarDisplayHighlights);
            self.Cb(1);
            self.sc("ngIf", !opts.smartContextMenuRestricts);
            self.Cb(1);
            self.sc("ngIf", (null == opts.sharedService._currentQuestion.questionMedia ? null : opts.sharedService._currentQuestion.questionMedia.typeId) == opts.questionMediaType.drugad || opts.sharedService._currentQuestion.questionTypeId == opts.questionType.drugad);
            self.Cb(1);
            self.sc("ngClass", self.yc(19, datum, opts.isAnyDialogDocked))("ngStyle", self.yc(21, zoom, opts.isAnyDialogDocked ? opts.dockingService.dockedDialogWidth + "px" : ""));
          }
        },
        directives : [props.q, props.t, props.w, morphNormal.b, props.s, tParentMatrix.b, obj.q, obj.t, tParentMatrix.a, alias.a, Ge],
        pipes : [cssKeys.d, cssKeys.c, props.f, cssKeys.j, cssKeys.k],
        styles : ['.common-content{overflow-y:auto!important;overflow-x:auto!important;display:flex;flex:1;scrollbar-width:thin}.common-content::-webkit-scrollbar{width:5px;height:5px}.common-content::-webkit-scrollbar-track{background:none}.common-content::-webkit-scrollbar-thumb{background:#cdcdcd}.common-content::-webkit-scrollbar-thumb:hover{background:#a6a6a6}.common-content table .TableCellHighlight{background-color:inherit!important;font-weight:700}.common-content table{margin:10px 0}.common-content a{text-decoration:none!important;font-weight:400}.common-content a,.common-content a:hover{color:var(--action)}.common-content .question-abstract{padding:22px 20px 20px 30px;width:50%;max-width:100%;border-right:1px solid var(--tab-secondary);overflow:auto;scrollbar-width:thin}.common-content .question-abstract::-webkit-scrollbar{width:5px;height:5px}.common-content .question-abstract::-webkit-scrollbar-track{background:none}.common-content .question-abstract::-webkit-scrollbar-thumb{background:#cdcdcd}.common-content .question-abstract::-webkit-scrollbar-thumb:hover{background:#a6a6a6}.common-content .question-abstract #questionAbstract{line-height:1.6em}.common-content a[href],.common-content a[href]>*{font-weight:400!important}.common-content .question-content{max-width:min(1000px,100%);padding:22px 20px 20px 30px;line-height:1.6em}.common-content .question-content #questionText{line-height:1.6em}.common-content .question-content #questionText #vignettedescriptor{background-color:var(--vignette-descriptor)}.common-content .question-content.split-screen{width:50%;max-width:100%}.common-content .question-content.split-screen.left-content{flex-basis:50%;margin-right:3px;min-width:400px;flex-grow:0;flex-shrink:0;display:flex;flex-direction:column;overflow:auto;scrollbar-width:thin}.common-content .question-content.split-screen.left-content::-webkit-scrollbar{width:5px;height:5px}.common-content .question-content.split-screen.left-content::-webkit-scrollbar-track{background:none}.common-content .question-content.split-screen.left-content::-webkit-scrollbar-thumb{background:#cdcdcd}.common-content .question-content.split-screen.left-content::-webkit-scrollbar-thumb:hover{background:#a6a6a6}.common-content .question-content.split-screen.right-content{min-width:400px;flex-grow:1;flex-shrink:1;overflow:auto;scrollbar-width:thin}.common-content .question-content.split-screen.right-content::-webkit-scrollbar{width:5px;height:5px}.common-content .question-content.split-screen.right-content::-webkit-scrollbar-track{background:none}.common-content .question-content.split-screen.right-content::-webkit-scrollbar-thumb{background:#cdcdcd}.common-content .question-content.split-screen.right-content::-webkit-scrollbar-thumb:hover{background:#a6a6a6}.common-content .question-content.split-screen .stats-bar{box-shadow:0 1px 3px 0 rgba(10,5,5,.25)}.common-content .question-content.split-screen .stats-bar .content{width:150px;padding-left:10px!important;flex:1 0 auto}.common-content .question-content img{max-width:700px;cursor:pointer}.common-content .question-content .deactivated-question{padding:10px;margin-bottom:10px;border-radius:3px;color:var(--font);background-color:var(--deactivated-bg);border:1px solid;border-color:var(--deactivated-bg);border-left:5px solid var(--primary)}.common-content .question-content .media-button{text-align:right;padding:10px}.common-content .question-content .media-button .drug-ad-button{cursor:pointer;background:var(--drug-ad-btn-bg);color:var(--drug-ad-btn-color);border-width:1px;border-radius:3px;font-size:14.6px}.common-content .question-content .media-button .play-media-btn{background-color:var(--play-media-btn-color)}.common-content .question-content .media-button .play-media-btn:hover{background-color:var(--vignette-descriptor)}.common-content .question-content .answer-container{-moz-user-select:none;-webkit-user-select:none;line-height:1.6em}.common-content .question-content .answer-container .answer-choice-content-width,.common-content .question-content .answer-container.answer-container-table-width{width:100%}.common-content .question-content .answer-container .disabled-state{opacity:.5;cursor:default}.common-content .question-content .answer-container label{margin-bottom:.1rem}.common-content .question-content .answer-container .left-td{max-width:200px}.common-content .question-content .answer-container .left-td>div:first-child{min-width:25px}.common-content .question-content .answer-container .left-td>div:first-child .fa-check{color:#02a604;font-size:20px!important}.common-content .question-content .answer-container .left-td>div:first-child .fa-times{color:red;font-size:20px!important}.common-content .question-content .answer-container .answer-choice-content{padding-left:8px}.common-content .question-content .answer-container .answer-choice-content p{display:inline}.common-content .question-content .answer-container .answer-choice-content table{margin:0!important}.common-content .question-content .answer-container .answer-choice-content table td{vertical-align:top}.common-content .question-content .answer-container strike .MathJax{position:relative}.common-content .question-content .answer-container strike .MathJax:after{position:absolute;left:0;top:50%;height:1px;content:"";width:100%;display:block;background-color:var(--font)}.common-content .question-content .proceed-to-next-btn{height:28px;width:154px;cursor:pointer;margin:20px auto auto;border-radius:5px;text-align:center;line-height:28px;background:var(--proceed-btn-fade-low);background:linear-gradient(180deg,var(--proceed-btn-fade-low),var(--proceed-btn-fade-high));color:#fff}.common-content .question-content .submit-btn{border:none;background-color:var(--content-btn-bg);color:var(--content-btn-color);display:flex;align-items:center;justify-content:center;cursor:pointer}.common-content .question-content .submit-btn:hover{color:var(--iconhover)}.common-content .question-content .submit-btn.rounded-pill{border-radius:20px;font-size:14px!important}.common-content .question-content .submit-btn.rounded-pill:hover{color:var(--content-btn-color)!important}.common-content .question-content .stats-bar{box-shadow:0 1px 3px 0 rgba(10,5,5,.25);background-color:var(--stats-bg);margin:10px 0 20px}.common-content .question-content .stats-bar .answer-div-splitter{position:relative;top:-80px;width:100%;height:2px;background-color:var(--stats-divider)}.common-content .question-content .stats-bar .content{min-width:160px;height:80px;padding:22px 0 18px 10px;line-height:16px;flex:1;color:var(--font);font-size:16px!important;display:flex;align-items:center}.common-content .question-content .stats-bar .content .fal{color:#6a6a6a;font-size:28px!important}.common-content .question-content .stats-bar .content .stats-label{color:var(--stats-label);font-size:12px!important}.common-content .question-content .stats-bar .content .stats-value{font-size:14px!important;color:var(--stats-value)}.common-content .question-content .stats-bar .content.correct-answer{border-left:5px solid #20c528;color:#20c528;line-height:80px;padding:0 0 0 20px}.common-content .question-content .stats-bar .content.incorrect-answer{border-left:5px solid #f60001;line-height:17px;padding:14px 0 15px 20px}.common-content .question-content .stats-bar .content.incorrect-answer>div:first-child{color:#f60001;padding-bottom:.1rem}.common-content .question-content .stats-bar .content.omitted-answer{border-left:5px solid #689bf7;line-height:17px;padding:14px 0 15px 20px}.common-content .question-content .stats-bar .content.omitted-answer>div:first-child{color:#689bf7;padding-bottom:.1rem}.common-content .question-content .stats-bar .content.search-answer{line-height:18px;padding:22px 0 18px 20px;height:80px}.common-content .question-content .explanation{margin-top:20px}.common-content .question-content .explanation #explanation{line-height:1.6em}.common-content .question-content .explanation #explanation .table-default-style td{border:1px solid var(--font)!important}.common-content .question-content .explanation #explanation .table-default-style:hover{cursor:pointer}.common-content .question-content .explanation .nav-tabs .nav-link{border-bottom-color:var(--border)}.common-content .question-content .explanation .nav-tabs .nav-link.active{background-color:transparent;border-top-color:var(--border);border-left-color:var(--border);border-right-color:var(--border);color:var(--font)}.common-content .question-content .explanation .references{margin-top:10px;line-height:1.6em}.common-content .question-content .explanation .references .content{padding:3px 5px}.common-content .question-content .explanation .references .content ul{margin-left:-20px;margin-bottom:0}.common-content .question-content .explanation .references .content ul a{font-weight:400;color:var(--action)}.common-content .question-content .explanation .standards{margin-top:15px}.common-content .question-content .explanation .standards .content{padding:15px 5px 15px 0;border-top:1px solid var(--standards-border);flex-wrap:wrap}.common-content .question-content .explanation .standards .content .standard{padding-right:50px}.common-content .question-content .explanation .standards .content .standard .standard-description{font-size:11pt}.common-content .question-content .explanation .standards .content .standard .standard-header{font-size:9pt;color:var(--standards-header)}.common-content .question-content .explanation .copyright{font-size:12px;color:#ababb2}.common-content .question-content .explanation .raised-hand-container{margin-top:75px}.common-content .question-content .explanation .raised-hand-container button{display:flex;align-items:center;background:none;border:2px solid #2196f3;color:#2196f3;padding:15px;cursor:pointer}.common-content .question-content .explanation .raised-hand-container button.raised-hand{color:#fff;background-color:#2196f3}.common-content .nbome-Exhibits-Text{color:var(--font)!important;font-weight:400;cursor:text!important}.common-content .nbome-Exhibits-Text:hover{color:var(--font)!important}.common-content .nbome-btn-view-Exhibits{font-weight:400;white-space:nowrap;float:right;background-color:#fcdc7c;border:1px solid #d6bb6a;font-size:14px;cursor:pointer!important}.common-content .nbome-btn-view-Exhibits,.common-content .nbome-btn-view-Exhibits:hover{color:var(--view-exhibits-text-color)!important}.common-content .nbome-btn{position:relative;height:39px;border-radius:2px;opacity:1;padding-left:15px;padding-right:15px;margin-right:2px;outline:none;bottom:9px}.common-content .vertical-divider-line{position:relative;flex-grow:0;flex-shrink:0;width:1px;height:100%;background-color:var(--border)}.common-content .vertical-divider-line.resizing,.common-content .vertical-divider-line:hover{background-color:var(--action)}.common-content .vertical-divider-line .wide-for-mouse-events{position:absolute;height:100%;left:-4px;width:8px}.common-content .vertical-divider-line .wide-for-mouse-events.show-resize-handle{cursor:col-resize}.common-content .mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#2196f3}.common-content .mat-radio-button.mat-radio-disabled .mat-radio-outer-circle{border-color:var(--answer-choice-mat-radio-border)!important}.common-content .mat-checkbox-inner-container{height:20px;width:20px}.common-content .mat-checkbox-inner-container:hover .mat-checkbox-frame{border-color:#2196f3}.common-content .mat-checkbox-checked.mat-accent .mat-checkbox-background,.common-content .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#2196f3}.common-content .mat-radio-container:hover .mat-radio-outer-circle{border-color:#2196f3}.common-content .mat-radio-container .mat-radio-outer-circle{border-color:var(--font)!important}.common-content .mat-checkbox-frame,.common-content .mat-radio-outer-circle{border-width:1px}.common-content .mat-checkbox-layout{white-space:normal!important}.common-content .table-default-style td{border:1px solid var(--font)!important}@media (max-width:767px){.common-content .break{flex-basis:100%;height:2px}.common-content .break>div{height:1px;background-color:#f7f7f7;margin:0 30px}.common-content .stats-bar .content{min-width:0!important;flex-basis:50%}}.drug-ad-main-container{overflow:auto;flex:1;scrollbar-width:thin}.drug-ad-main-container::-webkit-scrollbar{width:5px;height:5px}.drug-ad-main-container::-webkit-scrollbar-track{background:none}.drug-ad-main-container::-webkit-scrollbar-thumb{background:#cdcdcd}.drug-ad-main-container::-webkit-scrollbar-thumb:hover{background:#a6a6a6}.highlight-color-1{background-color:#ff0}.highlight-color-2{background-color:#b2ff59}.highlight-color-3{background-color:#85feff}.highlight-color-4{background-color:#fcb1cb}.highlight-color-5{background-color:#ffac00}.context-menu{background-color:#242422;border-radius:4px;display:flex;flex-direction:row;z-index:10000}.context-menu .left-border{border-top-left-radius:4px;border-bottom-left-radius:4px}.context-menu .right-border{border-top-right-radius:4px;border-bottom-right-radius:4px}.context-menu .add-to-flashcard,.context-menu .highlight-buttons{padding:4px}.context-menu .add-to-flashcard:hover,.context-menu .highlight-buttons:hover,.context-menu mat-divider{background-color:#4a4a4a}.context-menu .highlight-buttons{padding-right:8px}.context-menu .highlight-buttons span:hover .highlighter-outline{color:#fff}.context-menu .highlight-buttons .fa-stack{width:32px;height:32px;line-height:32px}.context-menu .highlight-buttons .fa-stack .fa-stack-1x{left:0!important;top:1px!important}.context-menu .highlight-buttons .fa-stack .fa-stack-2x{top:0!important}.context-menu .highlight-buttons .highlighter{margin:0 3px;font-size:23px;height:32px;width:32px}.context-menu .highlight-buttons .highlighter-yellow{color:#ff0}.context-menu .highlight-buttons .highlighter-green{color:#b2ff59}.context-menu .highlight-buttons .highlighter-blue{color:#85feff}.context-menu .highlight-buttons .highlighter-pink{color:#fcb1cb}.context-menu .highlight-buttons .highlighter-orange{color:#ffac00}.context-menu .highlight-buttons .highlighter-outline{color:transparent;font-size:26px;line-height:inherit}.context-menu .add-to-flashcard{cursor:pointer;color:#fff}.context-menu .add-to-flashcard span:not(.fa-stack){margin-left:5px;font-size:14px}.context-menu .add-to-flashcard .fa-stack{width:20px;margin-right:5px;margin-left:-3px}.context-menu .add-to-flashcard .fa-stack .fa-square{-webkit-clip-path:polygon(30% 0,100% 0,100% 100%,30% 100%);clip-path:polygon(30% 0,100% 0,100% 100%,30% 100%);margin-left:7px}.uworld .common-content{background:var(--background)}.uworld .common-content .submit-btn{width:85px;height:34px;margin:15px 0 0 27px;font-size:18px!important}.uworld .common-content .explanation .nav-tabs .nav-link.active{border-bottom-color:var(--background)}.uworld .textHighlight:hover{cursor:pointer}.nbome .common-content{background:var(--background)!important;border:1px solid var(--border)}.nbome .common-content .question-content{max-width:100%}.nbome .common-content .play-media-btn{background-color:#fcdc7c!important}.nbome .common-content .play-media-btn,.nbome .common-content .play-media-btn:hover{color:var(--view-exhibits-text-color)!important}.nbome .common-content .mat-radio-container,.nbome .common-content .mat-radio-inner-circle,.nbome .common-content .mat-radio-outer-circle{height:15px;width:15px}.nbome .common-content .mat-radio-outer-circle{opacity:.5;border-color:#0075ff}.nbome .common-content .mat-radio-checked .mat-radio-outer-circle{border-color:#2196f3!important;opacity:.8}.nbome .common-content .mat-radio-inner-circle{transform:scale(0)}.nbome .common-content .mat-radio-checked .mat-radio-inner-circle{transform:scale(.6)!important;opacity:.8}.nbome .common-content .explanation .nav-tabs .nav-link.active{border-bottom-color:var(--background)}.nbome .common-content .submit-btn{font-size:15px!important;width:74px;height:40px;border-radius:2px;margin-left:25px}.nbome .common-content .submit-btn:hover{background-color:var(--hover-bg-color);color:var(--content-btn-color)!important}.nbome .drug-ad-main-container{background:var(--background)}.nbome .textHighlight:hover{cursor:pointer}.nbme-dialog-position{position:absolute!important;bottom:55px;right:15px;display:block}.nbme .common-content{background:var(--background-fade-low);background:linear-gradient(180deg,var(--background-fade-low),var(--background-fade-high));background-color:var(--background)}.nbme .common-content .submit-btn{width:100px;height:30px;margin:20px 0 0;font-size:16px!important}.nbme .common-content .explanation .nav-tabs{border-bottom:none!important}.nbme .common-content .explanation .nav-tabs .nav-link.active{border-bottom:none}.nbme .common-content .explanation .nav-tabs .empty-nav-item{flex:1 0 0;border-bottom:1px solid var(--border)}.nbme .textHighlight:hover{cursor:pointer}.nbme .has-highlight-dropdown .textHighlight:hover{cursor:default}.nbme .answer-container{border:solid var(--left-nav-selected-bg);border-width:1px 1px 5px;min-width:300px}.nbme .answer-container tr{padding:0 5px}.nbme .answer-container .answer-choice-background:hover{background:#ddd;color:var(--answer-choice-hover-text)}.nbme .answer-container .answer-choice-background:hover strike{-webkit-text-decoration-color:var(--answer-choice-hover-text);text-decoration-color:var(--answer-choice-hover-text)}.textStrikeout{text-decoration:line-through}.textStrikeout,strike{-webkit-text-decoration-color:var(--font);text-decoration-color:var(--font)}strike table{text-decoration:line-through}.theme-dark .textHighlight{color:#000}.theme-dark .textHighlight a,.theme-dark a .textHighlight{color:var(--action)}.dock-container{flex:0 0 auto;width:0;position:relative;background:linear-gradient(180deg,var(--background-fade-low),var(--background-fade-high))}.dock-container:not(.any-dialog-docked){display:none}.dock-container .wide-for-mouse-events{position:absolute;height:100%;left:-7.5px;width:15px;z-index:1000}.dock-container .wide-for-mouse-events.show-resize-handle{cursor:col-resize}.cdk-global-overlay-wrapper.docked-dialog{height:auto;top:52px;bottom:52px;left:auto;right:0;z-index:500!important}.cdk-global-overlay-wrapper.docked-dialog .cdk-overlay-pane{width:100%!important;height:100%!important;transform:none!important;min-width:0;box-shadow:none}.cdk-global-overlay-wrapper.docked-dialog .cdk-overlay-pane .mat-dialog-container{border-left:1px solid var(--dock-container-border)}.cdk-global-overlay-wrapper.docked-dialog .cdk-overlay-pane .mat-dialog-container .div-warning-message .warning-text{white-space:normal!important}.nbome .cdk-global-overlay-wrapper.docked-dialog{top:72px;bottom:110px;right:20px}.nbome .cdk-global-overlay-wrapper.docked-dialog.marked-question{top:132px}.nbome .cdk-global-overlay-wrapper.docked-dialog .cdk-overlay-pane .mat-dialog-container{border:1px solid var(--dock-container-border)}.common-content.any-dialog-docked{margin-right:10px}'],
        encapsulation : 2
      }), DelveConfiguration;
    })();
    const itemExt = function() {
      return {
        height : "calc(100vh - 104px)"
      };
    };
    let bi = (() => {
      class Component {
        constructor(ngContentIndexMatcher) {
          this.sharedService = ngContentIndexMatcher;
          this.contentType = options.a;
          this.testInterfaceConfig = null;
        }
        ngOnInit() {
          this.testInterfaceConfig = this.sharedService._testInterfaceConfig;
        }
      }
      return Component.\u0275fac = function(wrapperClassName) {
        return new (wrapperClassName || Component)(self.Sb(c.a));
      }, Component.\u0275cmp = self.Mb({
        type : Component,
        selectors : [["uworld-layout"]],
        decls : 4,
        vars : 1,
        consts : [[1, "uworld-layout"], [1, "header-nav"], ["class", "uworld-content", 3, "ngStyle", 4, "ngIf"], [1, "footer-nav"], [1, "uworld-content", 3, "ngStyle"]],
        template : function(object, config) {
          if (1 & object) {
            self.Yb(0, "div", 0);
            self.Tb(1, "uworld-header", 1);
            self.Sc(2, selectTab, 1, 2, "common-content", 2);
            self.Tb(3, "uworld-footer", 3);
            self.Xb();
          }
          if (2 & object) {
            self.Cb(2);
            self.sc("ngIf", config.testInterfaceConfig.contentType == config.contentType.common);
          }
        },
        directives : [ROUTER_DIRECTIVES, props.t, ze, li, props.w],
        styles : [".uworld-layout .footer-nav a,.uworld-layout .footer-nav span,.uworld-layout .header-nav a,.uworld-layout .header-nav span{color:#fff!important}.uworld-layout .footer-nav i,.uworld-layout .header-nav i{color:var(--icon)!important}.uworld.theme-light{--primary:#2f4050;--header:#dfdfdf;--ink-bar:#2f4050;--background:#fff;--font:#000;--action:#2196f3;--secondary:#d9d9d9;--background-secondary:#fff;--border:#ddd;--action-secondary:#ececec;--selected:rgba(33,150,243,0.1);--deactivated-bg:#d7d7da;--stats-label:#6a6a6a;--stats-value:#1a1a1a;--stats-divider:#f7f7f7;--stats-bg:#fff;--shortcut-key:#333;--content-btn-bg:#2f4050;--popup-header:#d9d9d9;--popup-header-font:#000;--fc-popup-border:none;--fc-popup-border-color:none;--ti-popup-header-bg:#d9d9d9;--ti-popup-header-color:#000;--docked-window-header-font-secondary:rgba(0,0,0,0.38);--docked-window-content-bg:#fff;--docked-window-content-font:#65656a;--docked-window-border:#ddd;--dock-container-border:#ddd;--drug-ad-btn-bg:#efefef;--drug-ad-btn-color:#000;--vignette-descriptor:hsla(0,0%,74.9%,0.5);--play-media-btn-color:hsla(0,0%,74.9%,0.25);--calc-button-hover:#fff;--calc-button-hover-text:#000;--drug-ad-fullscreen-btn-color:#e85a55;--drug-ad-common-btn-color:#dfc871;--feedback-background:#fff;--feedback-btn-color:#2196f3;--drug-ad-btn-border-color:#000;--fc-popup-box-shadow:0 4px 20px 0 rgba(0,0,0,0.25)}.uworld.theme-dark,.uworld.theme-light{--icon:#5ab0f6;--content-btn-color:#fff;--vertical-divider:#ddd;--navigator-marked:#2196f3;--standards-border:#ddd}.uworld.theme-dark{--primary:#1e1e1e;--header:#2a2a2a;--ink-bar:#4c4c4c;--background:#121212;--font:#fff;--action:#2196f3;--secondary:#2a2a2a;--background-secondary:#1e1e1e;--border:#4c4c4c;--action-secondary:#6a6a6a;--selected:#2a2a2a;--deactivated-bg:#666;--stats-label:hsla(0,0%,100%,0.6);--stats-value:hsla(0,0%,100%,0.87);--stats-divider:#4c4c4c;--stats-bg:#2a2a2a;--shortcut-key:#3c4150;--content-btn-bg:#445;--popup-header:#252525;--popup-header-font:hsla(0,0%,100%,0.87);--fc-popup-border:1px solid #2a2a2a;--fc-popup-border-color:#2a2a2a;--ti-popup-header-bg:#2a2a2a;--ti-popup-header-color:#fff;--docked-window-header-font-secondary:hsla(0,0%,100%,0.38);--docked-window-content-bg:#1e1e1e;--docked-window-content-font:hsla(0,0%,100%,0.87);--docked-window-border:#2a2a2a;--dock-container-border:#252525;--drug-ad-btn-bg:#2f4050;--drug-ad-btn-color:#fff;--vignette-descriptor:#3c4150;--play-media-btn-color:rgba(60,65,80,0.5);--calc-button-hover:#121212;--calc-button-hover-text:#fff;--drug-ad-fullscreen-btn-color:#e85a55;--drug-ad-common-btn-color:#dfc871;--feedback-background:#121212;--feedback-btn-color:#2196f3;--drug-ad-btn-border-color:#fff;--fc-popup-box-shadow:none}.uworld.theme-sepia{--primary:#5f4938;--header:#e7debf;--ink-bar:#5f4938;--background:#fbf0da;--font:#5d4037;--action:#bf360c;--icon:#e7debf;--secondary:#e7debf;--background-secondary:#f6efdc;--border:#c3b59f;--selected:#e7debf;--action-secondary:#776150;--deactivated-bg:#d9d5ca;--stats-bg:#fbf0da;--shortcut-key:#5d4037;--content-btn-bg:#5f4938;--vertical-divider:#ddd;--popup-header:#e7debf;--popup-header-font:#5f4938;--navigator-marked:#5f4938;--ti-popup-header-bg:#e7debf;--ti-popup-header-color:#5f4938;--docked-window-header-font-secondary:rgba(95,73,56,0.38);--docked-window-content-bg:#f6efdc;--docked-window-content-font:#5d4037;--docked-window-border:#c3b59f;--dock-container-border:#bfb09c;--drug-ad-btn-bg:#5f4938;--drug-ad-btn-color:hsla(0,0%,100%,0.87);--vignette-descriptor:rgba(95,73,56,0.2);--standards-border:grey;--play-media-btn-color:rgba(95,73,56,0.1);--calc-button-hover:#fbf0da;--calc-button-hover-text:#776150;--drug-ad-fullscreen-btn-color:#e85a55;--drug-ad-common-btn-color:#dfc871;--feedback-background:#fbf0da;--feedback-btn-color:#bf360c;--drug-ad-btn-border-color:#000}.uworld.theme-grey,.uworld.theme-sepia{--stats-label:#6a6a6a;--stats-value:#1a1a1a;--stats-divider:#fff;--content-btn-color:#fff;--fc-popup-border:none;--fc-popup-border-color:none;--fc-popup-box-shadow:0 4px 20px 0 rgba(0,0,0,0.25)}.uworld.theme-grey{--primary:#2f4050;--header:#ccc;--ink-bar:#2f4050;--background:#ddd;--font:#000;--action:#2196f3;--icon:#5ab0f6;--secondary:#d9d9d9;--background-secondary:#ddd;--action-secondary:#ececec;--border:#ccc;--selected:rgba(33,150,243,0.1);--deactivated-bg:#d7d7da;--stats-bg:#ddd;--shortcut-key:#333;--content-btn-bg:#2f4050;--vertical-divider:#fff;--popup-header:#d9d9d9;--popup-header-font:#000;--navigator-marked:#2196f3;--ti-popup-header-bg:#ccc;--ti-popup-header-color:#000;--docked-window-header-font-secondary:rgba(0,0,0,0.38);--docked-window-content-bg:#fff;--docked-window-content-font:#65656a;--docked-window-border:#ddd;--dock-container-border:#bbb;--drug-ad-btn-bg:#efefef;--drug-ad-btn-color:#000;--vignette-descriptor:hsla(0,0%,74.9%,0.5);--standards-border:#ccc;--play-media-btn-color:hsla(0,0%,74.9%,0.25);--calc-button-hover:#ddd;--calc-button-hover-text:#000;--drug-ad-fullscreen-btn-color:#e85a55;--drug-ad-common-btn-color:#dfc871;--feedback-background:#ddd;--feedback-btn-color:#2196f3;--drug-ad-btn-border-color:#000}body.uworld{font-family:Arial,Verdana,Helvetica}.uworld-layout{width:100%;height:100%;color:var(--font);font-size:12pt}.uworld-layout .footer-nav,.uworld-layout .header-nav{width:100%;display:block;background-color:var(--primary)}.uworld-layout .footer-nav a,.uworld-layout .header-nav a{text-decoration:none;margin:0 12px;cursor:pointer;font-weight:400}.uworld-layout .footer-nav span,.uworld-layout .header-nav span{vertical-align:top;font-size:1.1em}.uworld-layout .footer-nav i,.uworld-layout .header-nav i{font-size:1.5em;cursor:pointer}.uworld-layout .uworld-content{height:calc(100vh - 104px);display:flex;background:var(--background)}.uworld .calculator-dialog-container .mat-dialog-container,.uworld .exhibits-dialog-container .mat-dialog-container,.uworld .feedback-dialog-container .mat-dialog-container,.uworld .notes-dialog-container .mat-dialog-container{border:var(--fc-popup-border);box-shadow:var(--fc-popup-box-shadow);background:var(--fc-popup-border-color)}"],
        encapsulation : 2
      }), Component;
    })();
    var h = require("FlRo");
    var M = require("cePI");
    const $weekDayColumns = function(canCreateDiscussions) {
      return {
        "row-disabled" : canCreateDiscussions
      };
    };
    const e = function(data, type, i, n) {
      return {
        questionindex : data,
        "sequence-first" : type,
        "sequence-middle" : i,
        "sequence-last" : n
      };
    };
    const intoId = function(modstatus) {
      return {
        "row-selected" : modstatus
      };
    };
    const _ = ["toggle-nav"];
    let AsyncPipeExample = (() => {
      class Nucleus {
        constructor(genes, nucleus, i, dt, entity) {
          this.sharedService = genes;
          this.usmleService = nucleus;
          this.dialogShortcutsService = i;
          this.dialogNavigatorService = dt;
          this.dialog = entity;
          this.testInterfaceContractImpl = null;
          this.testInterfaceConfig = null;
          this.qbankIds = options.h;
          this.dataSource = new h.o;
          this.testMode = node.i;
        }
        get isFullScreen() {
          return document.fullscreenElement || document.mozFullScreen || document.webkitIsFullScreen;
        }
        ngOnInit() {
          this.testInterfaceContractImpl = this.sharedService._testInterfaceContractImpl;
          this.testInterfaceConfig = this.sharedService._testInterfaceConfig;
          this.initializeData();
          this.subscribeToServiceEvents();
        }
        ngAfterViewInit() {
        }
        initializeData() {
          this.dataSource.data = this.sharedService._testInfo.questionList;
          this.displayedColumns = this.getColumnsToDisplay().map((timeline_mode) => {
            return timeline_mode.id;
          });
        }
        getColumnsToDisplay() {
          return [{
            id : "question",
            name : "Question"
          }];
        }
        clickout(attr) {
          let t = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          if (this.usmleService.displayLeftNavigator && t <= 1200) {
            setTimeout(() => {
              let t = false;
              let nn = this.path(attr.target);
              if (nn.length > 0) {
                if (nn[0].className.includes("left-navigator")) {
                  return;
                }
                var n;
                for (n of nn) {
                  if (n.classList) {
                    var child;
                    for (child of n.classList) {
                      if (_.includes(child)) {
                        return;
                      }
                    }
                  }
                  if ("leftNavigator" == n.id) {
                    t = true;
                  }
                }
                if (!t) {
                  this.usmleService.toggleLeftNavigator();
                }
              }
            });
          }
        }
        path(svg) {
          let path = [];
          for (; svg;) {
            if (path.push(svg), "HTML" === svg.tagName) {
              return path.push(document), path.push(window), path;
            }
            svg = svg.parentElement;
          }
          return path;
        }
        selectQuestion(event) {
          this.usmleService.selectQuestion(event);
        }
        changeQuestion(i) {
          this.usmleService.changeQuestion(i);
        }
        checkIfLastQuestionInSequence(genes, nucleus) {
          let i = false;
          if (genes > 0) {
            let n = $.grep(this.sharedService._testInfo.questionList, function(canCreateDiscussions) {
              return canCreateDiscussions.parentQuestionId == genes;
            });
            if (null != n && null != n && n.length > 0 && n[n.length - 1].questionSetSequenceId == nucleus) {
              i = true;
            }
          }
          return i;
        }
        subscribeToServiceEvents() {
          this.onKeyboardShortcut = this.usmleService.keyboardShortcutsObj._onKeyboardShortcut.subscribe((canCreateDiscussions) => {
          });
        }
        ngOnDestroy() {
          this.onKeyboardShortcut.unsubscribe();
        }
      }
      return Nucleus.\u0275fac = function(canCreateDiscussions) {
        return new (canCreateDiscussions || Nucleus)(self.Sb(c.a), self.Sb(clrVal), self.Sb(trytes), self.Sb(hitokoto), self.Sb(ts.b));
      }, Nucleus.\u0275cmp = self.Mb({
        type : Nucleus,
        selectors : [["nbme-navigator"]],
        hostBindings : function(database2, options) {
          if (1 & database2) {
            self.gc("click", function(expectedOption) {
              return options.clickout(expectedOption);
            }, false, self.Gc);
          }
        },
        decls : 6,
        vars : 2,
        consts : [["id", "leftNavigator", 1, "nbme-left-navigator", "d-flex", "flex-column", "justify-content-start"], [1, "body"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "question"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["mat-row", "", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-cell", "", 3, "ngClass"], [1, "questionstatus"], ["class", "omitted-dot", 4, "ngIf"], ["class", "fas fa-xs fa-check correctanswer", 4, "ngIf"], ["class", "fas fa-times wronganswer", 
        4, "ngIf"], [3, "ngClass"], ["class", "questionmarked", 4, "ngIf"], ["class", "questionnotes", 4, "ngIf"], [1, "omitted-dot"], [1, "fas", "fa-xs", "fa-check", "correctanswer"], [1, "fas", "fa-times", "wronganswer"], [1, "questionmarked"], [1, "questionnotes"], ["mat-row", "", 3, "ngClass", "click"]],
        template : function(elem, options) {
          if (1 & elem) {
            self.Yb(0, "div", 0);
            self.Yb(1, "div", 1);
            self.Yb(2, "table", 2);
            self.Wb(3, 3);
            self.Sc(4, handler, 9, 15, "td", 4);
            self.Vb();
            self.Sc(5, onExit, 1, 3, "tr", 5);
            self.Xb();
            self.Xb();
            self.Xb();
          }
          if (2 & elem) {
            self.Cb(2);
            self.sc("dataSource", options.dataSource);
            self.Cb(3);
            self.sc("matRowDefColumns", options.displayedColumns);
          }
        },
        directives : [h.n, M.a, h.c, h.b, h.m, h.a, props.q, props.t, h.l],
        styles : [".nbme-left-navigator{color:var(--font)}.nbme-left-navigator table{width:100%;background-color:var(--background)!important}.nbme-left-navigator table .mat-row:nth-child(2n){background-color:var(--nav-row-alternate)}.nbme-left-navigator table .mat-row:nth-child(odd){background-color:var(--background)}.nbme-left-navigator table tr{height:25px!important}.nbme-left-navigator table tr.row-selected{background-color:var(--left-nav-selected-bg)!important}.nbme-left-navigator table tr.row-selected td{color:var(--left-nav-selected-text)!important}.nbme-left-navigator table tr.row-selected td .sequence-first{border-top:1px solid var(--left-nav-selected-text)!important}.nbme-left-navigator table tr.row-selected td .sequence-middle{border-right:1px solid var(--left-nav-selected-text)!important;border-left:1px solid var(--left-nav-selected-text)!important}.nbme-left-navigator table tr.row-selected td .sequence-last{border-bottom:1px solid var(--left-nav-selected-text)!important}.nbme-left-navigator table tr td{padding:0 0 0 10px!important;color:var(--font)!important;border-bottom:0!important;font-size:10pt}.nbme-left-navigator table tr td.row-disabled{color:#676767!important}.nbme-left-navigator table tr td .questionstatus{width:15px;display:inline-block}.nbme-left-navigator table tr td .questionstatus .omitted-dot{width:3px;height:3px;border-radius:50%;margin-top:12px;background-color:var(--font);display:inline-block}.nbme-left-navigator table tr td .questionstatus .correctanswer{color:#03d703}.nbme-left-navigator table tr td .questionstatus .wronganswer{color:#c80505}.nbme-left-navigator table tr td .questionmarked{background-image:url(assets/images/testinterface/flag.png);height:15px}.nbme-left-navigator table tr td .questionmarked,.nbme-left-navigator table tr td .questionnotes{background-position:50%;background-repeat:no-repeat;width:15px;vertical-align:middle;display:inline-block}.nbme-left-navigator table tr td .questionnotes{background-image:url(assets/images/testinterface/annotateIconTrans.png);height:13px}.nbme-left-navigator table tr td .sequence-first{border-top:1px solid var(--font)}.nbme-left-navigator table tr td .sequence-middle{border-right:1px solid var(--font);border-left:1px solid var(--font)}.nbme-left-navigator table tr td .sequence-last{border-bottom:1px solid var(--font)}.nbme-left-navigator table .questionindex{width:25px;display:inline-block;text-align:right;line-height:25px;padding-right:4px;margin-right:10px}"],
        encapsulation : 2
      }), Nucleus;
    })();
    var cleanRange = require("jSSt");
    const key = function(p) {
      return {
        "pointer-events" : p
      };
    };
    const value = function(fn, initialValue) {
      return {
        fal : fn,
        fas : initialValue
      };
    };
    let Tree = (() => {
      class Renderer {
        constructor(vdomNode, seq, val, size, scene, template, type, gameEngine, clientEngine, gl, canvas, texture) {
          this.sharedService = vdomNode;
          this.usmleService = seq;
          this.dialogShortcutsService = val;
          this.dialogNotesService = size;
          this.dialogCalculatorService = scene;
          this.dialogNavigatorService = template;
          this.dialogLabsService = type;
          this.dialogUsersettingsService = gameEngine;
          this.dialogReviewService = clientEngine;
          this.dialog = gl;
          this.timerService = canvas;
          this.dockingService = texture;
          this.testInterfaceContractImpl = null;
          this.testInterfaceConfig = null;
          this.flashCardCategory = options.c;
          this.qbankIds = options.h;
          this.contextMenuOpened = false;
          this.isSafari = false;
          this.testMode = options.n;
          this.highlightOptions = [{
            id : 1,
            color : "yellow"
          }, {
            id : 2,
            color : "green"
          }, {
            id : 3,
            color : "blue"
          }, {
            id : 4,
            color : "pink"
          }, {
            id : 5,
            color : "orange"
          }];
          this.selectedHighlight = "0";
        }
        get currentHighlight() {
          return "0" == this.selectedHighlight ? this.selectedHighlight : this.sharedService._userPreferences.jsonSettings.testPreferences.defaultHighlightColor.toString();
        }
        get isFullScreen() {
          return document.fullscreenElement || document.mozFullScreen || document.webkitIsFullScreen;
        }
        ngOnInit() {
          this.testInterfaceContractImpl = this.sharedService._testInterfaceContractImpl;
          this.testInterfaceConfig = this.sharedService._testInterfaceConfig;
          this.selectedHighlight = this.sharedService._userPreferences.jsonSettings.testPreferences.defaultHighlightColor.toString();
          this.initializePopover();
          this.initializeData();
          this.usmleService.initializeLeftNavigator(true);
          this.subscribeToServiceEvents();
        }
        ngAfterViewInit() {
        }
        initializeData() {
          this.checkIfSafari();
        }
        checkIfSafari() {
          this.isSafari = navigator.vendor && navigator.vendor.indexOf("Apple") > -1 && navigator.userAgent && -1 == navigator.userAgent.indexOf("CriOS") && -1 == navigator.userAgent.indexOf("FxiOS");
        }
        subscribeToServiceEvents() {
          this.onKeyboardShortcut = this.usmleService.keyboardShortcutsObj._onKeyboardShortcut.subscribe((frame) => {
            if (!this.dialog.openDialogs.length || ["markQuestion", "previousQuestion", "nextQuestion"].includes(frame.fn) && this.usmleService.allDialogsDocked() && this.usmleService.keydownEventIsOutsideDockContainer(frame.event)) {
              if ("markQuestion" == frame.fn) {
                this.bookmarkQuestion();
              }
              if ("previousQuestion" == frame.fn) {
                this.previousQuestion();
              }
              if ("nextQuestion" == frame.fn) {
                this.nextQuestion();
              }
            }
            if ("notes" == frame) {
              this.showUserNotes();
            }
            if ("calculator" == frame) {
              this.showCalculator();
            }
            if ("labValues" == frame && this.testInterfaceConfig.labValues) {
              this.showLabValues();
            }
          });
        }
        toggleLeftNavigator() {
          this.usmleService.toggleLeftNavigator();
        }
        bookmarkQuestion() {
          if (this.sharedService._testInfo.testModeId != options.n.search) {
            this.sharedService._currentQuestion.isMarked = !this.sharedService._currentQuestion.isMarked;
          } else {
            this.sharedService.showWarningDialog("Mark feature is available during test mode only.");
          }
        }
        previousQuestion() {
          this.usmleService.previousQuestion();
          let bounds = $(".row-selected")[0].getBoundingClientRect();
          let offset = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
          if (bounds.top <= 25 || bounds.top >= offset) {
            this.usmleService.scrollQuestionIntoView();
          }
        }
        nextQuestion() {
          this.usmleService.nextQuestion();
          let scrollableRect = $(".row-selected")[0].getBoundingClientRect();
          let contentBottom = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - 25;
          if (scrollableRect.bottom >= contentBottom || scrollableRect.top <= 0) {
            this.usmleService.scrollQuestionIntoView();
          }
        }
        toggleFullScreen() {
          if (this.sharedService._testInterfaceContractImpl.logEventDataToFirebase("toggle_full_screen", {
            parent_screen : "TestInterface"
          }), this.isSafari) {
            if (window.document.fullscreenElement || window.document.mozFullScreenElement || window.document.webkitFullscreenElement || window.document.msFullscreenElement) {
              document.webkitExitFullscreen();
            } else {
              document.documentElement.webkitRequestFullscreen();
            }
          } else {
            var doc = document.documentElement;
            if (document.fullscreenElement) {
              document.exitFullscreen();
            } else {
              doc.requestFullscreen();
            }
          }
        }
        initializePopover() {
          setTimeout(() => {
            $("#help-tooltip").popover({
              html : true,
              content : $("#help-tooltip-description").html()
            });
          }, 1500);
        }
        openHelpMenu() {
          if (!this.usmleService.shortcutsDisabled) {
            this.trigger.openMenu();
          }
        }
        launchTutorial() {
          var intro = introJs();
          intro.setOptions({
            showStepNumbers : true,
            showBullets : false,
            exitOnOverlayClick : true,
            disableInteraction : true,
            keyboardNavigation : true,
            scrollToElement : true,
            steps : [{
              element : document.querySelector(".step1"),
              intro : "Mark questions to review later",
              position : "right",
              tooltipClass : "introjs-tooltip-at-top",
              highlightClass : "introjs-highlight-nbme-header"
            }, {
              element : document.querySelector(".step2"),
              intro : "Navigate to previous question using the previous button",
              position : "right",
              tooltipClass : "introjs-tooltip-at-top",
              highlightClass : "introjs-highlight-nbme-header"
            }, {
              element : document.querySelector(".step3"),
              intro : "Navigate to next question using the next button",
              position : "right",
              tooltipClass : "introjs-tooltip-at-top",
              highlightClass : "introjs-highlight-nbme-header"
            }, {
              element : document.querySelector(".step4"),
              intro : "Toggle between full screen view and regular view",
              position : "right",
              tooltipClass : "introjs-tooltip-at-top",
              highlightClass : "introjs-highlight-nbme-header"
            }, {
              element : document.querySelector(".step5"),
              intro : "Reference sheet for lab values",
              position : "right",
              tooltipClass : "introjs-tooltip-at-top",
              highlightClass : "introjs-highlight-nbme-header"
            }, {
              element : document.querySelector(".step6"),
              intro : "Add important things to notes",
              position : "right",
              tooltipClass : "introjs-tooltip-at-top",
              highlightClass : "introjs-highlight-nbme-header"
            }, {
              element : document.querySelector(".step7"),
              intro : "Provides access to calculator",
              position : "right",
              tooltipClass : "introjs-tooltip-at-top",
              highlightClass : "introjs-highlight-nbme-header"
            }, {
              element : document.querySelector(".step8"),
              intro : "Adjust your color preference using the reverse color option",
              position : "left",
              tooltipClass : "introjs-tooltip-at-top",
              highlightClass : "introjs-highlight-nbme-header"
            }, {
              element : document.querySelector(".step9"),
              intro : "Adjust your font size using the text zoom option",
              position : "left",
              tooltipClass : "introjs-tooltip-at-top",
              highlightClass : "introjs-highlight-nbme-header"
            }, {
              element : document.querySelector(".step10"),
              intro : "Adjust your preferences using the settings option",
              position : "left",
              tooltipClass : "introjs-tooltip-at-top",
              highlightClass : "introjs-highlight-nbme-header"
            }, {
              element : document.querySelector(".step11"),
              intro : "Change the Test Mode",
              position : "right",
              tooltipClass : "introjs-tooltip-at-bottom",
              highlightClass : "introjs-highlight-nbme-footer"
            }, {
              element : document.querySelector(".step12"),
              intro : "Add key concepts, tables, and images to your Notebook for later review.",
              position : "left",
              tooltipClass : "introjs-tooltip-at-bottom",
              highlightClass : "introjs-highlight-nbme-footer"
            }, {
              element : document.querySelector(".step13"),
              intro : "Add important concepts/images to flashcards",
              position : "left",
              tooltipClass : "introjs-tooltip-at-bottom",
              highlightClass : "introjs-highlight-nbme-footer"
            }, {
              element : document.querySelector(".step14"),
              intro : "Provide feedback on an individual question",
              position : "left",
              tooltipClass : "introjs-tooltip-at-bottom",
              highlightClass : "introjs-highlight-nbme-footer"
            }, {
              element : document.querySelector(".step15"),
              intro : "Suspend test to resume later",
              position : "left",
              tooltipClass : "introjs-tooltip-at-bottom",
              highlightClass : "introjs-highlight-nbme-footer"
            }, {
              element : document.querySelector(".step16"),
              intro : "End the test",
              position : "left",
              tooltipClass : "introjs-tooltip-at-bottom",
              highlightClass : "introjs-highlight-nbme-footer"
            }].filter((arrowIcon) => {
              return arrowIcon.element;
            })
          });
          intro.start();
          this.trigger.restoreFocus = false;
          this.usmleService.shortcutsDisabled = true;
          this.timerService.pauseTimer();
          intro.onexit(() => {
            this.trigger.focus();
            this.trigger.restoreFocus = true;
            setTimeout(() => {
              return this.usmleService.shortcutsDisabled = false;
            });
            this.timerService.resumeTimer();
          });
          intro.oncomplete(() => {
            this.timerService.resumeTimer();
          });
        }
        showKeyboardShortcuts() {
          let commandName = {
            panelClass : "keyboardshortcuts-dialog-container",
            hasBackdrop : false,
            width : "500px",
            data : {
              keyboardShortcuts : this.usmleService.getKeyboardShortcuts()
            }
          };
          this.dialogShortcutsService.openDialog(commandName);
        }
        showLabValues() {
          if (this.sharedService._testInterfaceConfig.docking) {
            this.sharedService._toBeDocked = options.b.labvalues;
            this.dockingService.openDialogToBeDocked();
          } else {
            this.dialogLabsService.openDialog({
              panelClass : "labvalues-dialog-container",
              hasBackdrop : false,
              width : "650px",
              height : "507px",
              data : {
                commonContractImpl : this.sharedService._testInterfaceUsmleContractImpl,
                title : "Lab Values"
              }
            });
          }
        }
        showUserNotes() {
          if (this.sharedService._testInfo.testModeId == options.n.search) {
            return void this.sharedService.showWarningDialog("Notes feature is available during test mode only.");
          }
          let commandName = {
            panelClass : "notes-dialog-container",
            hasBackdrop : false,
            data : this.usmleService
          };
          if (this.sharedService._userPreferences.jsonSettings.testPreferences.dockedElements.notes) {
            this.sharedService._toBeDocked = options.b.notes;
            this.dockingService.closeActiveDockedWindow(options.b.notes);
          } else {
            this.dialogNotesService.openDialog(commandName);
          }
        }
        showCalculator() {
          this.dialogCalculatorService.openDialog({
            panelClass : "calculator-dialog-container",
            hasBackdrop : false
          });
        }
        showUserSettings() {
          if (!this.dialogUsersettingsService.IsOpen) {
            this.dialogUsersettingsService.openDialog({
              panelClass : "usersettings-dialog-container",
              width : "330px",
              height : "100vh",
              position : {
                right : "0"
              },
              hasBackdrop : false,
              autoFocus : false
            }).then((canCreateDiscussions) => {
            });
          }
        }
        ngOnDestroy() {
          this.onKeyboardShortcut.unsubscribe();
          document.removeEventListener("click", this.hideMenu);
          document.removeEventListener("keydown", this.hideMenu);
        }
      }
      return Renderer.\u0275fac = function(canCreateDiscussions) {
        return new (canCreateDiscussions || Renderer)(self.Sb(c.a), self.Sb(clrVal), self.Sb(trytes), self.Sb(CheckDailyStat.a), self.Sb(childProc.a), self.Sb(hitokoto), self.Sb(EventConsts.a), self.Sb(curAttrs), self.Sb(cleanRange.a), self.Sb(ts.b), self.Sb(searchQ), self.Sb(dialogGeometry.a));
      }, Renderer.\u0275cmp = self.Mb({
        type : Renderer,
        selectors : [["nbme-header"]],
        viewQuery : function(query, options) {
          var data;
          if (1 & query) {
            self.ad(normalizedMatrix.c, true);
          }
          if (2 & query && self.Dc(data = self.hc())) {
            options.trigger = data.first;
          }
        },
        decls : 168,
        vars : 18,
        consts : [[1, "nbme-header", "d-flex", "justify-content-between", "accessibility-triggers"], [1, "d-flex", "align-items-center"], [1, "mr-3"], ["aria-label", "Toggel Left Navigator", "tabindex", "0", "role", "application", 1, "far", "fa-bars", "fa-2x", "cursor", "toggle-nav", 3, "click", "keydown.enter"], [1, "question-details"], [1, "question-id"], ["class", "step1 d-none d-md-flex bookmark-question", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], ["tabindex", 
        "0", "role", "application", 1, "d-flex", "d-md-none", 3, "click", "keydown.enter"], [1, "fa-bookmark", "fa-lg", 3, "ngClass"], [1, "align-items-center", "d-none", "d-md-flex"], ["aria-label", "Navigate to Previous Question", "tabindex", "0", "role", "application", 1, "step2", "medium-screen-icon", 3, "click", "keydown.enter"], [1, "previous-icon"], [1, "header-icon-text"], ["aria-label", "Navigate to Next Question", "tabindex", "0", "role", "application", 1, "step3", "medium-screen-icon", 
        3, "click", "keydown.enter"], [1, "next-icon"], [1, "align-items-center", "justify-content-end", "d-none", "d-md-flex", "medium-screen-icons", "nbme-header-right-side"], ["xmlns", "http://www.w3.org/2000/svg", 2, "visibility", "hidden", "width", "0", "height", "0"], ["type", "text/css"], ["x1", "8", "y1", "19", "x2", "31", "y2", "19", "id", "lg1"], ["offset", "0", 2, "stop-color", "#666"], ["offset", "1", 2, "stop-color", "#CCC"], ["id", "yellowBeaker", "x2", "0", "y2", "1"], ["offset", "15%", 
        "stop-color", "rgba(255,255,255,0.7)"], ["offset", "17%", "stop-color", "yellow"], ["id", "pinkBeaker", "x2", "0", "y2", "1"], ["offset", "30%", "stop-color", "rgba(255,255,255,0.7)"], ["offset", "35%", "stop-color", "pink"], ["id", "tealBeaker", "x2", "0", "y2", "1"], ["offset", "40%", "stop-color", "rgba(255,255,255,0.85)"], ["offset", "42%", "stop-color", "skyblue"], ["id", "arrow"], ["stroke-linejoin", "round", "points", "6,12 20,12 20,6 35,15 20,26 20,20 6,20"], ["id", "flag"], ["x1", 
        "10", "y1", "35", "x2", "1.5", "y2", "4", 1, "icon"], ["d", "M20,8c-2,3-4,7-7,8c-2,1-5,2-7,3C5,14,4,9,1,5C8,1,13,10,20,8z", 1, "icon"], ["id", "pencil"], ["transform", "rotate(-60,90,48)", "width", "90", "height", "30", 2, "fill", "#F7971D"], ["points", "3,102 5,127 30,117", 2, "fill", "#FFF"], ["points", "4.5,117 5,127 14.5,123"], ["transform", "rotate(-60,45,-30)", "width", "25", "height", "30", 2, "fill", "#F06567"], ["id", "Group_4935", "data-name", "Group 4935", "transform", "translate(322 -1279)"], 
        ["id", "Rectangle_240", "data-name", "Rectangle 240", "d", "M30,0H130a0,0,0,0,1,0,0V158a0,0,0,0,1,0,0H30A30,30,0,0,1,0,128V30A30,30,0,0,1,30,0Z", "transform", "translate(-317 1295)", "fill", "#d7dced"], ["id", "Rectangle_237", "data-name", "Rectangle 237", "transform", "translate(-322 1289)", "fill", "rgba(255,255,255,0)", "stroke", "#fff", "stroke-width", "7"], ["width", "396", "height", "169", "rx", "35", "stroke", "none"], ["x", "3.5", "y", "3.5", "width", "389", "height", "162", "rx", 
        "31.5", "fill", "none"], ["id", "Rectangle_238", "data-name", "Rectangle 238", "width", "6", "height", "169", "transform", "translate(-190 1289)", "fill", "#fff"], ["id", "Rectangle_239", "data-name", "Rectangle 239", "width", "6", "height", "169", "transform", "translate(-64 1289)", "fill", "#fff"], ["id", "Group_4934", "data-name", "Group 4934", "transform", "translate(0 -4)"], ["id", "A", "transform", "translate(-253 1400)", "font-size", "70", "font-family", "ArialNarrow-Bold, Arial Narrow", 
        "font-weight", "700", "letter-spacing", "-0.002em"], ["x", "-20.713", "y", "0"], ["id", "A-2", "data-name", "A", "transform", "translate(-124 1415)", "fill", "#fff", "font-size", "110", "font-family", "ArialNarrow-Bold, Arial Narrow", "font-weight", "700", "letter-spacing", "-0.002em"], ["x", "-32.549", "y", "0"], ["id", "A-3", "data-name", "A", "transform", "translate(5 1433)", "fill", "#fff", "font-size", "160", "font-family", "ArialNarrow-Bold, Arial Narrow", "font-weight", "700", "letter-spacing", 
        "-0.002em"], ["x", "-47.344", "y", "0"], ["id", "invertIcon", "viewBox", "4 2 28 32"], ["d", "m 31,17.5 a 13,13 0 1 1 -26,0 13,13 0 1 1 26,0", 2, "fill", "#F8F8F8", "stroke", "#333", "stroke-width", "1"], ["d", "m 29,11 a 12,12 0 0 1 -22,13 z", 2, "fill", "url(#lg1)", "stroke", "#111", "stroke-width", "1"], ["d", "m 28,11 a 11,11 0 0 1 -21.5,12.5 z", 2, "fill", "#111"], ["id", "labsIcon", "viewBox", "0 0 260 340"], ["x", "59", "y", "30", "width", "140", "height", "200", "rx", "20", "ry", 
        "20", "fill", "url(#yellowBeaker)"], ["x", "175", "y", "14", "width", "55", "height", "290", "rx", "10", "ry", "10", "fill", "url(#pinkBeaker)"], ["d", "M50,90 l-35,130 t-1,30 0,30 t48,20 130,-20 v-60 l-35-130 z", "fill", "url(#tealBeaker)"], ["id", "refIcon", "viewBox", "0 0 48 48"], ["x", "58", "y", "38", "width", "20", "height", "29", "transform", "matrix(1,0,-0.815,0.58,0,0)", 2, "fill", "#333", "stroke", "#333", "stroke-width", "0.5"], ["x", "29", "y", "56", "rx", "1", "ry", "1", "width", 
        "29", "height", "8.1", "transform", "matrix(0.81,-0.58,0,1,0,0)", 2, "fill", "#935BBF", "stroke", "#333", "stroke-width", "1"], ["x", "2.1", "y", "40", "width", "21.3", "height", "7", 2, "fill", "#C8C8C8"], ["x", "1.7", "y", "39", "width", "22", "height", "0.9", 2, "fill", "#333"], ["x", "1.6", "y", "47", "width", "22", "height", "0.9", 2, "fill", "#333"], ["x", "29", "y", "47", "rx", "1", "ry", "1", "width", "29", "height", "8.1", "transform", "matrix(0.81,-0.58,0,1,0,0)", 2, "fill", "#8D91F0", 
        "stroke", "#45736F", "stroke-width", "1"], ["x", "0", "y", "31", "width", "22.5", "height", "7", 2, "fill", "#C8C8C8"], ["x", "45", "y", "23", "rx", "1", "ry", "1", "width", "20", "height", "29", "transform", "matrix(1,0,-0.81,0.58,0,0)", 2, "fill", "#8D91F0", "stroke", "#45736F", "stroke-width", "1"], ["x", "0", "y", "30", "width", "24", "height", "1", 2, "fill", "#45736F"], ["x", "0", "y", "38", "width", "24", "height", "1", 2, "fill", "#45736F"], ["x", "26", "y", "36", "rx", "1", "ry", 
        "1", "width", "29", "height", "8.1", "transform", "matrix(0.81,-0.58,0,1,0,0)", 2, "fill", "#A67C52", "stroke", "#98414E", "stroke-width", "1"], ["x", "1", "y", "20.7", "width", "20", "height", "8.1", 2, "fill", "#C8C8C8"], ["x", "30", "y", "6.9", "width", "20", "height", "29", "transform", "matrix(1,0,-0.81,0.58,0,0)", 2, "fill", "#A67C52", "stroke", "#98414E", "stroke-width", "1"], ["x", "0.7", "y", "21", "width", "20.4", "height", "0.7", 2, "fill", "#98414E"], ["x", "0.63", "y", "28.8", 
        "width", "20.3", "height", "1", 2, "fill", "#98414E"], ["x", "36", "y", "17", "width", "6.5", "height", "11", "transform", "matrix(1,0,-0.81,0.59,0,0)", 2, "fill", "#C8C8C8", "stroke", "#444", "stroke-width", "0.7"], ["id", "noteIcon", "viewBox", "0 0 160 160"], ["x", "0", "y", "20", "width", "130", "height", "80", "fill", "#FCFCFC"], ["x", "20", "y", "70", 2, "font-family", "'Chalkboard SE', 'Segoe Print', cursive", "font-size", "40px"], [0, "xlink", "href", "#pencil", "transform", "rotate(25) translate(100,-20)"], 
        ["id", "calcIcon", "viewBox", "2 2 32 28"], ["width", "28", "height", "24", "x", "3.5", "y", "3.5", "rx", "3.5", 2, "fill", "#999"], ["d", "M3.5,22.5 l 0,5 l 28,0 l 0,-5", 2, "fill", "#999"], ["width", "24", "height", "10", "x", "5.5", "y", "7.5"], [2, "font-size", "8px", "font-family", "Tahoma"], ["x", "9", "y", "15"], ["width", "4", "height", "3", "x", "5.5", "y", "21.5"], ["width", "4", "height", "3", "x", "11.5", "y", "21.5"], ["width", "4", "height", "3", "x", "18.5", "y", "21.5"], ["width", 
        "4", "height", "3", "x", "24.5", "y", "21.5"], ["id", "lockIcon", "viewBox", "0 0 32 30"], ["cx", "16", "cy", "15", "r", "12", 2, "stroke-width", "3"], ["cx", "16", "cy", "12", "r", "3", 2, "stroke-width", "2"], ["x", "11", "y", "13", "width", "10", "height", "9", "rx", "1", 2, "fill", "#EE0"], ["d", "M 15,21 l 0,-2 a 1.75,1.75 0 1 1 2,0 l 0,2 z", 2, "fill", "#457"], ["id", "goIcon", "viewBox", "0 0 40 30"], [0, "xlink", "href", "#arrow", 2, "fill", "green", "stroke", "green", "stroke-width", 
        "6"], [0, "xlink", "href", "#arrow", 2, "fill", "green", "stroke", "white", "stroke-width", "2"], ["id", "stopIcon", "viewBox", "0 0 32 32"], ["d", "M 3,11 3,21 11,29 21,29 29,21 29,11 21,3 11,3 z", 2, "fill", "#A00", "stroke", "#A00"], ["d", "M 5,12 5,20 12,27 20,27 27,20 27,12 20,5 12,5 z", 2, "fill", "#F00", "stroke", "#FFF", "stroke-width", "2"], ["id", "whiteflag", "viewBox", "0 0 22 30"], [0, "xlink", "href", "#flag", 2, "stroke", "#FCFCFC", "stroke-width", "2.2", "fill", "#B70808"], 
        ["id", "darkflag", "viewBox", "0 0 22 30"], [0, "xlink", "href", "#flag", 2, "stroke", "#555", "stroke-width", "2", "fill", "#D92A2A"], ["id", "pencilIcon", "viewBox", "0 0 80 160"], [0, "xlink", "href", "#pencil"], ["id", "warningIcon", "viewBox", "0 0 10 10"], ["points", "5,0 10,10 0,10", 2, "fill", "yellow"], ["points", "5,1 9,9.4 1,9.4", 2, "stroke", "orange", "stroke-width", "0.2", "fill", "yellow"], ["x", "5", "y", "8.7", 2, "text-anchor", "middle", "font-size", "8px", "font-family", 
        "'Baskerville Old Face', 'Bookman Old Style', Georgia, serif", "font-weight", "bold"], ["id", "zoomout", "viewBox", "0 0 50 50"], ["r", "16", "cx", "32", "cy", "20"], ["x", "25", "y", "18", "width", "14", "height", "4", "rx", "2", "ry", "2"], ["x", "10", "y", "50", "width", "20", "height", "8", "rx", "3", "ry", "3", "transform", "rotate(135 20 45)"], ["id", "zoomin", "viewBox", "0 0 50 50"], [0, "xlink", "href", "#zoomout"], ["x", "30", "y", "12", "width", "4", "height", "16", "rx", "2", 
        "ry", "2"], ["id", "textZoom", "viewBox", "0 0 160 160"], [0, "xlink", "href", "#Group_4935"], ["class", "step4 d-none d-lg-block medium-screen-icon", "aria-label", "Open Fullscreen", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], ["class", "step4 d-none d-lg-block medium-screen-icon", "aria-label", "Minimize Fullscreen", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], ["class", "medium-screen-icon", "aria-label", "Help", 
        "tabindex", "0", "role", "menu", 3, "matMenuTriggerFor", "keydown.enter", 4, "ngIf"], [1, "nbme-tutorial-panel-class"], ["menu", "matMenu"], [1, "help-option"], ["mat-menu-item", "", "aria-label", "Launch Tutorial", 3, "click", "keydown.enter"], ["mat-menu-item", "", "aria-label", "Open Keyboard Shortcuts", 3, "click", "keydown.enter"], ["class", "step5 medium-screen-icon", "aria-label", "Open Lab Values", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], ["class", 
        "step6 medium-screen-icon", "aria-label", "Open Notes Dialog", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], ["class", "step7 medium-screen-icon", "aria-label", "Open Calculator", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], ["class", "step8 d-none d-lg-block medium-screen-icon", "aria-label", "Reverse Color", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], ["class", "step9 d-none d-lg-block medium-screen-icon", 
        "aria-label", "Zoom Text", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], ["class", "step10 medium-screen-icon", "aria-label", "Open Settings Dialog", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], [1, "align-items-center", "col-3", "justify-content-end", "d-flex", "d-md-none", "small-screen-icons"], ["aria-label", "Navigate to Previous Question", "tabindex", "0", "role", "application", 3, "click", "keydown.enter"], [1, "fas", 
        "fa-caret-left", "header-fa-icon"], ["aria-label", "Navigate to Next Question", "tabindex", "0", "role", "application", 3, "click", "keydown.enter"], [1, "fas", "fa-caret-right", "header-fa-icon"], [1, "align-items-center", "col-5", "justify-content-end", "d-flex", "d-md-none", "small-screen-icons"], ["aria-label", "Open Lab Values", "tabindex", "0", "role", "application", 3, "click", "keydown.enter"], [1, "fal", "fa-vial"], ["aria-label", "Open Notes Dialog", "tabindex", "0", "role", "application", 
        3, "click", "keydown.enter"], [1, "fal", "fa-file-edit"], ["aria-label", "Open Calculator", "tabindex", "0", "role", "application", 3, "click", "keydown.enter"], [1, "fal", "fa-calculator"], ["aria-label", "Open Settings Dialog", "tabindex", "0", "role", "application", 3, "click", "keydown.enter"], [1, "fal", "fa-cog"], ["tabindex", "0", "role", "application", 1, "step1", "d-none", "d-md-flex", "bookmark-question", 3, "click", "keydown.enter"], ["type", "checkbox", 2, "margin-top", "8px", 
        3, "ngStyle", "checked", "checkedChange"], [2, "stroke", "#FCFCFC", "stroke-width", "2.2", "fill", "#B70808"], [2, "margin-top", "8px"], ["aria-label", "Open Fullscreen", "tabindex", "0", "role", "application", 1, "step4", "d-none", "d-lg-block", "medium-screen-icon", 3, "click", "keydown.enter"], ["title", "Enter full screen", 1, "fal", "fa-2x", "fa-expand", "header-fa-icon"], ["aria-label", "Minimize Fullscreen", "tabindex", "0", "role", "application", 1, "step4", "d-none", "d-lg-block", 
        "medium-screen-icon", 3, "click", "keydown.enter"], ["title", "Exit full screen", 1, "fal", "fa-2x", "fa-compress-wide", "header-fa-icon"], ["aria-label", "Help", "tabindex", "0", "role", "menu", 1, "medium-screen-icon", 3, "matMenuTriggerFor", "keydown.enter"], [1, "header-icon", "tutorial-icon", "header-fa-icon"], ["aria-label", "Open Lab Values", "tabindex", "0", "role", "application", 1, "step5", "medium-screen-icon", 3, "click", "keydown.enter"], [1, "header-icon-text", "lab-values-header-icon-text"], 
        ["aria-label", "Open Notes Dialog", "tabindex", "0", "role", "application", 1, "step6", "medium-screen-icon", 3, "click", "keydown.enter"], ["transform", "rotate(25) translate(100,-20)"], [1, "header-icon-text", "notes-header-icon-text"], ["aria-label", "Open Calculator", "tabindex", "0", "role", "application", 1, "step7", "medium-screen-icon", 3, "click", "keydown.enter"], ["aria-label", "Reverse Color", "tabindex", "0", "role", "application", 1, "step8", "d-none", "d-lg-block", "medium-screen-icon", 
        3, "click", "keydown.enter"], ["aria-label", "Zoom Text", "tabindex", "0", "role", "application", 1, "step9", "d-none", "d-lg-block", "medium-screen-icon", 3, "click", "keydown.enter"], [1, "header-icon", "textzoom-icon"], [1, "header-icon-text", "text-zoom-header-icon-text"], ["aria-label", "Open Settings Dialog", "tabindex", "0", "role", "application", 1, "step10", "medium-screen-icon", 3, "click", "keydown.enter"], [1, "header-fa-icon", "fal", "fa-cog"], [1, "header-icon-text", "settings-header-icon-text"]],
        template : function(text, obj) {
          if (1 & text) {
            self.Yb(0, "div", 0);
            self.Yb(1, "div", 1);
            self.Yb(2, "div", 2);
            self.Yb(3, "i", 3);
            self.gc("click", function() {
              return obj.toggleLeftNavigator();
            })("keydown.enter", function() {
              return obj.toggleLeftNavigator();
            });
            self.Xb();
            self.Xb();
            self.Yb(4, "div", 4);
            self.Uc(5);
            self.Tb(6, "br");
            self.Yb(7, "span", 5);
            self.Uc(8);
            self.Xb();
            self.Xb();
            self.Sc(9, main, 12, 5, "a", 6);
            self.Yb(10, "a", 7);
            self.gc("click", function() {
              return obj.bookmarkQuestion();
            })("keydown.enter", function() {
              return obj.bookmarkQuestion();
            });
            self.Tb(11, "i", 8);
            self.Xb();
            self.Xb();
            self.Yb(12, "div", 9);
            self.Yb(13, "a", 10);
            self.gc("click", function() {
              return obj.previousQuestion();
            })("keydown.enter", function() {
              return obj.previousQuestion();
            });
            self.Tb(14, "i", 11);
            self.Yb(15, "div", 12);
            self.Uc(16, "Previous");
            self.Xb();
            self.Xb();
            self.Yb(17, "a", 13);
            self.gc("click", function() {
              return obj.nextQuestion();
            })("keydown.enter", function() {
              return obj.nextQuestion();
            });
            self.Tb(18, "i", 14);
            self.Yb(19, "div", 12);
            self.Uc(20, "Next");
            self.Xb();
            self.Xb();
            self.Xb();
            self.Yb(21, "div", 15);
            self.jc();
            self.Yb(22, "svg", 16);
            self.Yb(23, "style", 17);
            self.Uc(24, " #labsIcon rect, #labsIcon path { stroke: #000; stroke-width: 10; } #noteIcon rect { stroke: #000; stroke-width: 2; } #calcIcon rect, #calcIcon path { fill: #FFF; stroke: #000; stroke-width: 0.5; } #lockIcon circle, #lockIcon rect { fill: none; stroke: #EE0; } #pencil rect, #pencil polyline { stroke: #000; stroke-width: 2; } #zoomout circle { stroke: #000; stroke-width: 2; fill: none; } ");
            self.Xb();
            self.Yb(25, "defs");
            self.Yb(26, "linearGradient", 18);
            self.Tb(27, "stop", 19);
            self.Tb(28, "stop", 20);
            self.Xb();
            self.Yb(29, "linearGradient", 21);
            self.Tb(30, "stop", 22);
            self.Tb(31, "stop", 23);
            self.Xb();
            self.Yb(32, "linearGradient", 24);
            self.Tb(33, "stop", 25);
            self.Tb(34, "stop", 26);
            self.Xb();
            self.Yb(35, "linearGradient", 27);
            self.Tb(36, "stop", 28);
            self.Tb(37, "stop", 29);
            self.Xb();
            self.Yb(38, "g", 30);
            self.Tb(39, "polygon", 31);
            self.Xb();
            self.Yb(40, "g", 32);
            self.Tb(41, "line", 33);
            self.Tb(42, "path", 34);
            self.Xb();
            self.Yb(43, "g", 35);
            self.Tb(44, "rect", 36);
            self.Tb(45, "polyline", 37);
            self.Tb(46, "polyline", 38);
            self.Tb(47, "rect", 39);
            self.Xb();
            self.Yb(48, "g", 40);
            self.Tb(49, "path", 41);
            self.Yb(50, "g", 42);
            self.Tb(51, "rect", 43);
            self.Tb(52, "rect", 44);
            self.Xb();
            self.Tb(53, "rect", 45);
            self.Tb(54, "rect", 46);
            self.Yb(55, "g", 47);
            self.Yb(56, "text", 48);
            self.Yb(57, "tspan", 49);
            self.Uc(58, "A");
            self.Xb();
            self.Xb();
            self.Yb(59, "text", 50);
            self.Yb(60, "tspan", 51);
            self.Uc(61, "A");
            self.Xb();
            self.Xb();
            self.Yb(62, "text", 52);
            self.Yb(63, "tspan", 53);
            self.Uc(64, "A");
            self.Xb();
            self.Xb();
            self.Xb();
            self.Xb();
            self.Xb();
            self.Yb(65, "symbol", 54);
            self.Tb(66, "path", 55);
            self.Tb(67, "path", 56);
            self.Tb(68, "path", 57);
            self.Xb();
            self.Yb(69, "symbol", 58);
            self.Tb(70, "rect", 59);
            self.Tb(71, "rect", 60);
            self.Tb(72, "path", 61);
            self.Xb();
            self.Yb(73, "symbol", 62);
            self.Tb(74, "rect", 63);
            self.Tb(75, "rect", 64);
            self.Tb(76, "rect", 65);
            self.Tb(77, "rect", 66);
            self.Tb(78, "rect", 67);
            self.Tb(79, "rect", 68);
            self.Tb(80, "rect", 69);
            self.Tb(81, "rect", 70);
            self.Tb(82, "rect", 71);
            self.Tb(83, "rect", 72);
            self.Tb(84, "rect", 73);
            self.Tb(85, "rect", 74);
            self.Tb(86, "rect", 75);
            self.Tb(87, "rect", 76);
            self.Tb(88, "rect", 77);
            self.Tb(89, "rect", 78);
            self.Xb();
            self.Yb(90, "symbol", 79);
            self.Tb(91, "rect", 80);
            self.Yb(92, "text", 81);
            self.Uc(93, "ABC");
            self.Xb();
            self.Tb(94, "use", 82);
            self.Xb();
            self.Yb(95, "symbol", 83);
            self.Tb(96, "rect", 84);
            self.Tb(97, "path", 85);
            self.Tb(98, "rect", 86);
            self.Yb(99, "text", 87);
            self.Yb(100, "tspan", 88);
            self.Uc(101, "0.25");
            self.Xb();
            self.Xb();
            self.Tb(102, "rect", 89);
            self.Tb(103, "rect", 90);
            self.Tb(104, "rect", 91);
            self.Tb(105, "rect", 92);
            self.Xb();
            self.Yb(106, "symbol", 93);
            self.Tb(107, "circle", 94);
            self.Tb(108, "circle", 95);
            self.Tb(109, "rect", 96);
            self.Tb(110, "path", 97);
            self.Xb();
            self.Yb(111, "symbol", 98);
            self.Tb(112, "use", 99);
            self.Tb(113, "use", 100);
            self.Xb();
            self.Yb(114, "symbol", 101);
            self.Tb(115, "path", 102);
            self.Tb(116, "path", 103);
            self.Xb();
            self.Yb(117, "symbol", 104);
            self.Tb(118, "use", 105);
            self.Xb();
            self.Yb(119, "symbol", 106);
            self.Tb(120, "use", 107);
            self.Xb();
            self.Yb(121, "symbol", 108);
            self.Tb(122, "use", 109);
            self.Xb();
            self.Yb(123, "symbol", 110);
            self.Tb(124, "polygon", 111);
            self.Tb(125, "polygon", 112);
            self.Yb(126, "text", 113);
            self.Uc(127, "!");
            self.Xb();
            self.Xb();
            self.Yb(128, "symbol", 114);
            self.Tb(129, "circle", 115);
            self.Tb(130, "rect", 116);
            self.Tb(131, "rect", 117);
            self.Xb();
            self.Yb(132, "symbol", 118);
            self.Tb(133, "use", 119);
            self.Tb(134, "rect", 120);
            self.Xb();
            self.Yb(135, "symbol", 121);
            self.Tb(136, "use", 122);
            self.Xb();
            self.Xb();
            self.Sc(137, subscribe, 4, 0, "a", 123);
            self.Sc(138, popLink, 4, 0, "a", 124);
            self.Sc(139, onChange, 4, 1, "a", 125);
            self.ic();
            self.Yb(140, "mat-menu", 126, 127);
            self.Yb(142, "div", 128);
            self.Yb(143, "p", 129);
            self.gc("click", function() {
              return obj.launchTutorial();
            })("keydown.enter", function() {
              return obj.launchTutorial(), obj.trigger.closeMenu();
            });
            self.Uc(144, "Interface Tutorial");
            self.Xb();
            self.Xb();
            self.Yb(145, "div", 128);
            self.Yb(146, "p", 130);
            self.gc("click", function() {
              return obj.showKeyboardShortcuts();
            })("keydown.enter", function() {
              return obj.showKeyboardShortcuts(), obj.trigger.closeMenu();
            });
            self.Uc(147, "Keyboard Shortcuts");
            self.Xb();
            self.Xb();
            self.Xb();
            self.Sc(148, init, 8, 0, "a", 131);
            self.Sc(149, generate, 14, 0, "a", 132);
            self.Sc(150, factory, 15, 0, "a", 133);
            self.Sc(151, createCircleOutOverlay, 8, 0, "a", 134);
            self.Sc(152, parse, 4, 0, "a", 135);
            self.Sc(153, build, 4, 0, "a", 136);
            self.Xb();
            self.Yb(154, "div", 137);
            self.Yb(155, "a", 138);
            self.gc("click", function() {
              return obj.previousQuestion();
            })("keydown.enter", function() {
              return obj.previousQuestion();
            });
            self.Tb(156, "i", 139);
            self.Xb();
            self.Yb(157, "a", 140);
            self.gc("click", function() {
              return obj.nextQuestion();
            })("keydown.enter", function() {
              return obj.nextQuestion();
            });
            self.Tb(158, "i", 141);
            self.Xb();
            self.Xb();
            self.Yb(159, "div", 142);
            self.Yb(160, "a", 143);
            self.gc("click", function() {
              return obj.showLabValues();
            })("keydown.enter", function() {
              return obj.showLabValues();
            });
            self.Tb(161, "i", 144);
            self.Xb();
            self.Yb(162, "a", 145);
            self.gc("click", function() {
              return obj.showUserNotes();
            })("keydown.enter", function() {
              return obj.showUserNotes();
            });
            self.Tb(163, "i", 146);
            self.Xb();
            self.Yb(164, "a", 147);
            self.gc("click", function() {
              return obj.showCalculator();
            })("keydown.enter", function() {
              return obj.showCalculator();
            });
            self.Tb(165, "i", 148);
            self.Xb();
            self.Yb(166, "a", 149);
            self.gc("click", function() {
              return obj.showUserSettings();
            })("keydown.enter", function() {
              return obj.showUserSettings();
            });
            self.Tb(167, "i", 150);
            self.Xb();
            self.Xb();
            self.Xb();
          }
          if (2 & text) {
            self.Cb(5);
            self.Xc(" Item ", obj.sharedService._currentQuestion.sequenceId, " of ", obj.sharedService._testInfo.questionList.length, " ");
            self.Cb(3);
            self.Wc("Question Id: ", obj.sharedService._currentQuestion.questionIndex, "");
            self.Cb(1);
            self.sc("ngIf", obj.testInterfaceConfig.bookmark);
            self.Cb(1);
            self.Db("aria-label", obj.sharedService._currentQuestion.isMarked ? "Unmark Question" : "Mark Question");
            self.Cb(1);
            self.sc("ngClass", self.zc(15, value, !obj.sharedService._currentQuestion.isMarked, obj.sharedService._currentQuestion.isMarked));
            self.Cb(126);
            self.sc("ngIf", !obj.isFullScreen);
            self.Cb(1);
            self.sc("ngIf", obj.isFullScreen);
            self.Cb(1);
            self.sc("ngIf", obj.testInterfaceConfig.help);
            self.Cb(9);
            self.sc("ngIf", obj.testInterfaceConfig.labValues);
            self.Cb(1);
            self.sc("ngIf", obj.testInterfaceConfig.notes);
            self.Cb(1);
            self.sc("ngIf", obj.testInterfaceConfig.calculator);
            self.Cb(1);
            self.sc("ngIf", obj.testInterfaceConfig.reverseColor);
            self.Cb(1);
            self.sc("ngIf", obj.testInterfaceConfig.textZoom);
            self.Cb(1);
            self.sc("ngIf", obj.testInterfaceConfig.settings);
          }
        },
        directives : [props.t, props.q, normalizedMatrix.d, normalizedMatrix.a, props.w, normalizedMatrix.c],
        styles : ['.nbme-header{height:52px;padding:0 5px}.nbme-header>div{padding-left:0;padding-right:0}.nbme-header .header-icon-text{font-size:.9em!important;font-weight:400;line-height:1.1em}.nbme-header .nbme-header-right-side .header-icon-text{margin-top:3px;white-space:nowrap}.nbme-header .nbme-header-right-side .lab-values-header-icon-text,.nbme-header .nbme-header-right-side .notes-header-icon-text,.nbme-header .nbme-header-right-side .text-zoom-header-icon-text{margin-top:2px}.nbme-header .nbme-header-right-side .settings-header-icon-text{margin-top:6px}.nbme-header a svg{display:block;width:32px;height:28px;margin:auto}.nbme-header .bookmark-question{padding:9px 6px!important}.nbme-header .bookmark-question:hover{background-color:var(--icon-hover);cursor:pointer}.nbme-header .question-details{text-align:left;padding:4px;font-weight:700;font-size:15px;width:135px}.nbme-header .question-details .question-id{line-height:15px;font-size:12px;display:inline-block;margin-top:5px}.nbme-header .header-icon{height:24px;width:24px;display:inline-block;background-size:contain;background-repeat:no-repeat;background-color:var(--icon);-webkit-mask-size:24px 24px;mask-size:24px 24px}.nbme-header .header-fa-icon{font-size:2em!important}.nbme-header .next-icon,.nbme-header .previous-icon{position:relative;padding:27px 0 0;background-image:none;display:inline-block}.nbme-header .next-icon:before,.nbme-header .previous-icon:before{content:"";display:block;position:absolute;top:5px;left:calc(50% - 12px);width:0;height:0;margin:auto;border-color:var(--icon);border-width:1px;border-left:0 solid var(--icon);border-bottom:9px solid transparent;border-right:26px solid var(--icon);border-top:9px solid transparent}.nbme-header .next-icon:after,.nbme-header .previous-icon:after{content:"";display:block;position:absolute;top:8px;left:calc(50% - 7px);width:0;height:0;margin:auto;border-color:transparent #5490cc;border-style:solid;border-width:6px 20px 6px 0}.nbme-header .next-icon:before{border-width:9px 0 9px 26px!important}.nbme-header .next-icon:after{left:calc(50% - 11px)!important;border-width:6px 0 6px 20px!important}.nbme-header .tutorial-icon{-webkit-mask-image:url(assets/images/testinterface/Tutorial.svg);mask-image:url(assets/images/testinterface/Tutorial.svg)}.nbme-header .labvalues-icon{-webkit-mask-image:url(assets/images/testinterface/labs.png);mask-image:url(assets/images/testinterface/labs.png)}.nbme-header .notes-icon{-webkit-mask-image:url(assets/images/testinterface/notes.png);mask-image:url(assets/images/testinterface/notes.png)}.nbme-header .calculator-icon{-webkit-mask-image:url(assets/images/testinterface/calculator.png);mask-image:url(assets/images/testinterface/calculator.png)}.nbme-header .reversecolor-icon{-webkit-mask-image:url(assets/images/testinterface/Tutorial.svg);mask-image:url(assets/images/testinterface/Tutorial.svg)}.nbme-header .textzoom-icon{-webkit-mask-image:url(assets/images/testinterface/TextZoom.svg);mask-image:url(assets/images/testinterface/TextZoom.svg);-webkit-mask-size:55px 25px;mask-size:55px 25px;height:25px;width:55px}.nbme-tutorial-panel-class{width:200px;position:relative;top:20px;left:-63px;box-shadow:0 0 12px 0 rgba(0,0,0,.22);padding:8px 0}.nbme-tutorial-panel-class p{margin:0}.nbme-tutorial-panel-class .help-option p{cursor:pointer;height:20px;line-height:20px;font-family:inherit}.nbme-tutorial-panel-class .help-option p:hover{text-decoration:underline;color:grey}.nbme-tutorial-panel-class .help-option:not(:last-child){margin-bottom:10px}'],
        encapsulation : 2
      }), Renderer;
    })();
    const task = ["TestModeNameElementRef"];
    let cn = (() => {
      class Player {
        constructor(e, source, n, id, name, reason, label) {
          this.sharedService = e;
          this.usmleService = source;
          this.flashcardTestInterfaceFeaturesService = n;
          this.dialogFeedbackService = id;
          this.dialog = name;
          this.dockingService = reason;
          this.dialogTestmodeMenuService = label;
          this.testInterfaceConfig = null;
          this.qbankIds = node.c;
          this.testMode = node.i;
          this.displaySuspend = true;
          this.testInterfaceContractImpl = null;
          this.flashCardCategory = options.c;
        }
        ngOnInit() {
          this.testInterfaceContractImpl = this.sharedService._testInterfaceContractImpl;
          this.testInterfaceConfig = this.sharedService._testInterfaceConfig;
          this.selectedHighlight = this.sharedService._userPreferences.jsonSettings.testPreferences.defaultHighlightColor.toString();
          this.subscribeToServiceEvents();
          if (!(this.sharedService._testInfo.testModeId != node.i.review && this.sharedService._testInfo.testModeId != node.i.search)) {
            this.displaySuspend = false;
          }
        }
        saveTest(autopause) {
          this.usmleService.handleTestExit(autopause);
        }
        showFeedback() {
          this.dialogFeedbackService.openDialog({
            panelClass : "feedback-dialog-container",
            hasBackdrop : false,
            height : "445px",
            width : "525px"
          });
        }
        showFlashcards() {
          if (this.sharedService._userPreferences.jsonSettings.testPreferences.dockedElements.flashcards) {
            this.sharedService._toBeDocked = options.b.flashcards;
            this.dockingService.closeActiveDockedWindow(options.b.flashcards);
          } else {
            this.flashcardTestInterfaceFeaturesService.openFlashcardsTIMainScreen();
          }
        }
        showNotebook() {
          if (this.sharedService._userPreferences.jsonSettings.testPreferences.dockedElements.notebook) {
            this.sharedService._toBeDocked = options.b.notebook;
            this.dockingService.closeActiveDockedWindow(options.b.notebook);
          } else {
            this.sharedService._notebookContractImpl.openNotebook();
          }
        }
        subscribeToServiceEvents() {
          this.onKeyboardShortcut = this.usmleService.keyboardShortcutsObj._onKeyboardShortcut.subscribe((cid) => {
            if ("feedback" == cid) {
              this.showFeedback();
            }
            if ("flashcards" == cid) {
              this.showFlashcards();
            }
          });
        }
        showEditTestModeMenu() {
          let collisionNode = this.testModeNameElement.nativeElement.getBoundingClientRect();
          let X2 = this.usmleService.displayLeftNavigator ? "195px" : "85px";
          if (collisionNode) {
            X2 = Math.max(Math.floor(collisionNode.x + collisionNode.width / 2 - 112), 10) + "px";
          }
          this.dialogTestmodeMenuService.openDialog({
            width : "225px",
            panelClass : "test-mode-menu-dialog-container",
            restoreFocus : false,
            autoFocus : false,
            backdropClass : "test-mode-menu-backdrop",
            position : {
              bottom : "65px",
              left : X2
            },
            data : {
              commonContractImpl : this.usmleService
            }
          });
        }
        ngOnDestroy() {
          this.onKeyboardShortcut.unsubscribe();
        }
      }
      return Player.\u0275fac = function(canCreateDiscussions) {
        return new (canCreateDiscussions || Player)(self.Sb(c.a), self.Sb(clrVal), self.Sb(G.a), self.Sb(extl.a), self.Sb(ts.b), self.Sb(dialogGeometry.a), self.Sb(_maskLayerSimulate));
      }, Player.\u0275cmp = self.Mb({
        type : Player,
        selectors : [["nbme-footer"]],
        viewQuery : function(query, options) {
          var el;
          if (1 & query) {
            self.ad(task, true);
          }
          if (2 & query && self.Dc(el = self.hc())) {
            options.testModeNameElement = el.first;
          }
        },
        decls : 25,
        vars : 8,
        consts : [[1, "nbme-footer", "d-flex", "justify-content-between", "accessibility-triggers"], [1, "d-flex", "align-items-center", "col-5"], ["class", "block-time", 4, "ngIf"], ["class", "subject-display", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-end", "medium-screen-icons", "h-100"], ["class", "step11 medium-screen-icon d-flex align-items-center justify-content-center h-75", "tabindex", "0", "role", "application", "aria-label", "Edit Test Mode Dialog", 3, "click", "keydown.enter", 
        4, "ngIf"], [1, "align-items-center", "col-7", "justify-content-end", "d-none", "d-md-flex", "medium-screen-icons"], ["class", "step12 medium-screen-icon", "aria-label", "Open Notebook Dialog", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], ["class", "step13 medium-screen-icon", "aria-label", "Open Flashcards Dialog", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], ["class", "step14 medium-screen-icon", "aria-label", "Open feedback Dialog", 
        "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], ["class", "step15 medium-screen-icon", "aria-label", "Suspend Test", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], ["aria-label", "End Test", "tabindex", "0", "role", "application", 1, "step16", "medium-screen-icon", 3, "click", "keydown.enter"], ["id", "stopIcon", "viewBox", "0 0 32 32"], ["d", "M 3,11 3,21 11,29 21,29 29,21 29,11 21,3 11,3 z", 2, "fill", "#A00", "stroke", 
        "#A00"], ["d", "M 5,12 5,20 12,27 20,27 27,20 27,12 20,5 12,5 z", 2, "fill", "#F00", "stroke", "#FFF", "stroke-width", "2"], [1, "footer-icon-text"], [1, "align-items-center", "col-4", "justify-content-end", "d-flex", "d-md-none", "small-screen-icons"], ["aria-label", "Open Flashcards Dialog", "tabindex", "0", "role", "application", 3, "click", "keydown.enter"], [1, "fal", "fa-bolt", "footer-fa-icon"], ["aria-label", "Open feedback Dialog", "tabindex", "0", "role", "application", 3, "click", 
        "keydown.enter"], [1, "fal", "fa-comment-alt", "footer-fa-icon"], ["aria-label", "Suspend Test", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], ["aria-label", "End Test", "tabindex", "0", "role", "application", 3, "click", "keydown.enter"], [1, "fal", "fa-stop-circle", "footer-fa-icon"], [1, "block-time"], [4, "ngIf"], ["id", "time"], ["class", "nbme-testmode", 4, "ngIf"], [1, "nbme-testmode"], [1, "subject-display"], ["tabindex", "0", "role", "application", 
        "aria-label", "Edit Test Mode Dialog", 1, "step11", "medium-screen-icon", "d-flex", "align-items-center", "justify-content-center", "h-75", 3, "click", "keydown.enter"], ["TestModeNameElementRef", ""], ["title", "Edit Test Mode", 1, "fal", "fa-tasks-alt"], ["aria-label", "Open Notebook Dialog", "tabindex", "0", "role", "application", 1, "step12", "medium-screen-icon", 3, "click", "keydown.enter"], [1, "fal", "fa-book", "footer-icon", "notebook-footer-icon"], ["aria-label", "Open Flashcards Dialog", 
        "tabindex", "0", "role", "application", 1, "step13", "medium-screen-icon", 3, "click", "keydown.enter"], [1, "fal", "fa-bolt", "footer-icon", "fc-footer-icon"], [1, "flashcard-count"], ["aria-label", "Open feedback Dialog", "tabindex", "0", "role", "application", 1, "step14", "medium-screen-icon", 3, "click", "keydown.enter"], [1, "footer-icon", "feedback-icon"], ["aria-label", "Suspend Test", "tabindex", "0", "role", "application", 1, "step15", "medium-screen-icon", 3, "click", "keydown.enter"], 
        [1, "footer-icon", "suspend-icon"], ["aria-label", "Suspend Test", "tabindex", "0", "role", "application", 3, "click", "keydown.enter"], [1, "fal", "fa-pause-circle", "footer-fa-icon"]],
        template : function(tpl, ctx) {
          if (1 & tpl) {
            self.Yb(0, "div", 0);
            self.Yb(1, "div", 1);
            self.Sc(2, createLegendRow, 3, 2, "div", 2);
            self.Sc(3, create, 6, 4, "div", 3);
            self.Yb(4, "div", 4);
            self.Sc(5, f, 3, 0, "a", 5);
            self.Xb();
            self.Xb();
            self.Yb(6, "div", 6);
            self.Sc(7, createImageBlock, 4, 0, "a", 7);
            self.Sc(8, set, 6, 1, "a", 8);
            self.Sc(9, on, 4, 0, "a", 9);
            self.Sc(10, render, 4, 0, "a", 10);
            self.Yb(11, "a", 11);
            self.gc("click", function() {
              return ctx.saveTest(true);
            })("keydown.enter", function() {
              return ctx.saveTest(true);
            });
            self.jc();
            self.Yb(12, "svg", 12);
            self.Tb(13, "path", 13);
            self.Tb(14, "path", 14);
            self.Xb();
            self.ic();
            self.Yb(15, "div", 15);
            self.Uc(16, "End Block");
            self.Xb();
            self.Xb();
            self.Xb();
            self.Yb(17, "div", 16);
            self.Yb(18, "a", 17);
            self.gc("click", function() {
              return ctx.showFlashcards();
            })("keydown.enter", function() {
              return ctx.showFlashcards();
            });
            self.Tb(19, "i", 18);
            self.Xb();
            self.Yb(20, "a", 19);
            self.gc("click", function() {
              return ctx.showFeedback();
            })("keydown.enter", function() {
              return ctx.showFeedback();
            });
            self.Tb(21, "i", 20);
            self.Xb();
            self.Sc(22, an, 2, 0, "a", 21);
            self.Yb(23, "a", 22);
            self.gc("click", function() {
              return ctx.saveTest(true);
            })("keydown.enter", function() {
              return ctx.saveTest(true);
            });
            self.Tb(24, "i", 23);
            self.Xb();
            self.Xb();
            self.Xb();
          }
          if (2 & tpl) {
            self.Cb(2);
            self.sc("ngIf", ctx.sharedService._launchTestOptions.canShowBlockTime);
            self.Cb(1);
            self.sc("ngIf", !ctx.sharedService._launchTestOptions.canShowBlockTime);
            self.Cb(2);
            self.sc("ngIf", ctx.testInterfaceConfig.editTestMode);
            self.Cb(2);
            self.sc("ngIf", ctx.testInterfaceConfig.myNoteBook);
            self.Cb(1);
            self.sc("ngIf", ctx.testInterfaceConfig.flashcards);
            self.Cb(1);
            self.sc("ngIf", ctx.testInterfaceConfig.feedback);
            self.Cb(1);
            self.sc("ngIf", ctx.displaySuspend);
            self.Cb(12);
            self.sc("ngIf", ctx.displaySuspend);
          }
        },
        directives : [props.t],
        pipes : [cssKeys.i],
        styles : [".nbme-footer{height:52px;padding:0 5px}.nbme-footer>div{padding-left:0;padding-right:0}.nbme-footer .footer-icon-text{font-size:.9em!important;font-weight:400;line-height:1.1em}.nbme-footer a svg{display:block;width:32px;height:28px;margin:auto}.nbme-footer .block-time{line-height:20px;text-align:left;float:left;padding:4px;font-weight:700;font-size:14px}.nbme-footer .block-time .nbme-testmode{font-size:12px;display:inline-block;margin-top:2px}.nbme-footer .flashcard-count{position:absolute;top:16px;left:38px;font-size:.9em}.nbme-footer .footer-icon{height:24px;width:24px;display:inline-block;background-size:contain;background-repeat:no-repeat;background-color:var(--icon);-webkit-mask-size:24px 24px;mask-size:24px 24px;margin-top:2px}.nbme-footer .fc-footer-icon,.nbme-footer .notebook-footer-icon{background:none;font-size:1.8em!important}.nbme-footer .fc-footer-icon~.footer-icon-text,.nbme-footer .notebook-footer-icon~.footer-icon-text{margin-top:2px}.nbme-footer .footer-fa-icon{padding:3px 0 11px}.nbme-footer .notebook-icon{-webkit-mask-image:url(assets/images/testinterface/prev.png);mask-image:url(assets/images/testinterface/prev.png)}.nbme-footer .feedback-icon{-webkit-mask-image:url(assets/images/testinterface/Feedback.svg);mask-image:url(assets/images/testinterface/Feedback.svg)}.nbme-footer .suspend-icon{-webkit-mask-image:url(assets/images/testinterface/Suspend.svg);mask-image:url(assets/images/testinterface/Suspend.svg)}.nbme-footer .end-icon{-webkit-mask-image:url(assets/images/testinterface/endtest.png);mask-image:url(assets/images/testinterface/endtest.png)}"],
        encapsulation : 2
      }), Player;
    })();
    let ln = (() => {
      class Component {
        constructor(callback, type) {
          this.sharedService = callback;
          this.usmleService = type;
          this.contentType = options.a;
          this.testInterfaceConfig = null;
          this.qbankIds = options.h;
          this.clientConfig = null;
          this.testMode = options.n;
        }
        ngOnInit() {
          this.clientConfig = this.sharedService._clientConfig;
          this.testInterfaceConfig = this.sharedService._testInterfaceConfig;
        }
        ngAfterViewInit() {
          this.usmleService.scrollQuestionIntoView();
        }
      }
      return Component.\u0275fac = function(wrapperClassName) {
        return new (wrapperClassName || Component)(self.Sb(c.a), self.Sb(clrVal));
      }, Component.\u0275cmp = self.Mb({
        type : Component,
        selectors : [["nbme-layout"]],
        decls : 7,
        vars : 1,
        consts : [[1, "nbme-layout", "d-flex"], [1, "left-navigator"], [1, "nbme-body"], [1, "header-nav"], ["class", "nbme-content", 4, "ngIf"], [1, "footer-nav"], [1, "nbme-content"]],
        template : function(object, config) {
          if (1 & object) {
            self.Yb(0, "div", 0);
            self.Yb(1, "div", 1);
            self.Tb(2, "nbme-navigator");
            self.Xb();
            self.Yb(3, "div", 2);
            self.Tb(4, "nbme-header", 3);
            self.Sc(5, REMOTE_WINS, 1, 0, "common-content", 4);
            self.Tb(6, "nbme-footer", 5);
            self.Xb();
            self.Xb();
          }
          if (2 & object) {
            self.Cb(5);
            self.sc("ngIf", config.testInterfaceConfig.contentType == config.contentType.common);
          }
        },
        directives : [AsyncPipeExample, Tree, props.t, cn, li],
        styles : [".nbme-layout .footer-nav a,.nbme-layout .footer-nav span,.nbme-layout .header-nav a,.nbme-layout .header-nav span{color:#fff!important}.nbme-layout .footer-nav i,.nbme-layout .header-nav i{color:var(--icon)!important}.nbme.theme-light{--primary:#3852a4;--background:#fff;--background-fade-low:#fcfcfc;--background-fade-high:#d7dced;--font:#000;--tab-font:var(--primary);--tab:var(--background);--tab-secondary:silver;--header:#3852a4;--header-font:#fff;--action:#4160c2;--border:#ddd;--icon:#fff;--action-secondary:#ff4;--deactivated-bg:#d7d7da;--stats-label:#6a6a6a;--stats-value:#1a1a1a;--stats-divider:#f7f7f7;--nav-header:#7cafe8;--nav-font:#fff;--nav-sort-arrow-font:#fff;--nav-header-font:#fff;--secondary:#3852a4;--nav-row-alternate:#e3e3e3;--shortcut-key:#333;--top-header:#3852a4;--content-btn-bg:#0067a9;--vertical-divider:#ddd;--calc-font:navy;--calc-action-font:red;--calc-mem-font:#888;--popup-header:#d9d9d9;--popup-header-font:#000;--navigator-marked:#2196f3;--navigator-hover-text:var(--font);--icon-hover:#283294;--left-explanation-tab-border:#eaedf5;--right-explanation-tab-border:#f4f5f9;--save-close-img-url:url(assets/images/testinterface/Save-Close.jpg);--delete-notes-img-url:url(assets/images/testinterface/Delete-Notes.jpg);--dialog-bg:#eee;--submit-img-url:url(assets/images/testinterface/submit.png);--calculator-bg:#fff;--one-img-url:url(assets/images/testinterface/nbme-calculator/1.jpg);--two-img-url:url(assets/images/testinterface/nbme-calculator/2.jpg);--three-img-url:url(assets/images/testinterface/nbme-calculator/3.jpg);--four-img-url:url(assets/images/testinterface/nbme-calculator/4.jpg);--five-img-url:url(assets/images/testinterface/nbme-calculator/5.jpg);--six-img-url:url(assets/images/testinterface/nbme-calculator/6.jpg);--seven-img-url:url(assets/images/testinterface/nbme-calculator/7.jpg);--eight-img-url:url(assets/images/testinterface/nbme-calculator/8.jpg);--nine-img-url:url(assets/images/testinterface/nbme-calculator/9.jpg);--zero-img-url:url(assets/images/testinterface/nbme-calculator/0.jpg);--plus-img-url:url(assets/images/testinterface/nbme-calculator/Plus.jpg);--minus-img-url:url(assets/images/testinterface/nbme-calculator/Sub.jpg);--multiply-img-url:url(assets/images/testinterface/nbme-calculator/X.jpg);--divide-img-url:url(assets/images/testinterface/nbme-calculator/Div.jpg);--decimal-img-url:url(assets/images/testinterface/nbme-calculator/dot.jpg);--equal-img-url:url(assets/images/testinterface/nbme-calculator/Eqal.jpg);--clear-img-url:url(assets/images/testinterface/nbme-calculator/C.jpg);--reverse-sign-img-url:url(assets/images/testinterface/nbme-calculator/Add-Sub.jpg);--sqrt-img-url:url(assets/images/testinterface/nbme-calculator/Sqrt.jpg);--div-x-img-url:url(assets/images/testinterface/nbme-calculator/Div-X.jpg);--mplus-img-url:url(assets/images/testinterface/nbme-calculator/Mplus.jpg);--mr-img-url:url(assets/images/testinterface/nbme-calculator/MR.jpg);--mc-img-url:url(assets/images/testinterface/nbme-calculator/MC.jpg);--calculator-input-font:#000;--calculator-input-bg:#fff;--lab-values-background:#fff;--lab-values-table-background:#d7dced;--lab-values-header:#dfdfdf;--lab-values-search-bg:#fff;--lab-values-tab-bg:#fff;--lab-values-active-tab-bg:#d7dced;--lab-values-tab-font:#000;--left-nav-border-right:#ddd;--left-nav-selected-bg:#5590cc;--left-nav-selected-text:#fff;--standards-header:#6a6a6a;--answer-choice-hover-text:#1a1a1a;--answer-choice-mat-radio-border:#000;--vignette-descriptor:hsla(0,0%,75.3%,0.5);--keyboard-body-bg:#fff;--docked-window-header-bg:#d9d9d9;--docked-window-header-font:#000;--docked-window-header-font-secondary:rgba(0,0,0,0.38);--docked-window-content-bg:#fff;--docked-window-content-font:#65656a;--docked-window-border:#ddd;--dock-container-border:#ddd;--drug-ad-btn-bg:#efefef;--drug-ad-btn-color:#000;--standards-border:#ccc;--play-media-btn-color:hsla(0,0%,75.3%,0.25);--ti-popup-header-bg:#d9d9d9;--ti-popup-header-color:#000;--drug-ad-fullscreen-btn-color:#e85a55;--drug-ad-common-btn-color:#dfc871;--drug-ad-btn-border-color:#000;--fc-popup-border:none}.nbme.theme-dark,.nbme.theme-light{--iconhover:#ffff67;--top-font:#fff;--footer:var(--top-header);--content-btn-color:#fff;--dialog-header:#3852a4;--proceed-btn-fade-low:#588cc5;--proceed-btn-fade-high:#3754a1}.nbme.theme-dark{--primary:#1e1e1e;--background:#121212;--background-fade-low:#121212;--background-fade-high:#121212;--font:hsla(0,0%,100%,0.87);--tab-font:#fff;--tab:var(--background);--tab-secondary:#2a2a2a;--header:#2a2a2a;--header-font:#fff;--action:#2196f3;--icon:#fff;--action-secondary:#ff4;--border:#4c4c4c;--deactivated-bg:#666;--stats-label:hsla(0,0%,100%,0.6);--stats-value:hsla(0,0%,100%,0.87);--stats-divider:#4c4c4c;--stats-bg:#1e1e1e;--nav-header:#1e1e1e;--nav-font:#fff;--nav-sort-arrow-font:#fff;--nav-header-font:#fff;--secondary:#3c4150;--nav-row-alternate:#1e1e1e;--shortcut-key:#3c4150;--top-header:#2a2a2a;--content-btn-bg:#445;--vertical-divider:#4c4c4c;--calc-font:#fff;--calc-action-font:red;--calc-mem-font:#888;--popup-header:#252525;--popup-header-font:hsla(0,0%,100%,0.87);--navigator-marked:#2196f3;--navigator-hover-text:#1a1a1a;--icon-hover:#4c4c4c;--left-explanation-tab-border:#121212;--right-explanation-tab-border:#121212;--save-close-img-url:url(assets/images/testinterface/Save-Close-Black.jpg);--delete-notes-img-url:url(assets/images/testinterface/Delete-Notes-Black.jpg);--dialog-bg:#3c4150;--submit-img-url:url(assets/images/testinterface/submit_black.png);--calculator-bg:#3c4150;--one-img-url:url(assets/images/testinterface/nbme-calculator/1_black.jpg);--two-img-url:url(assets/images/testinterface/nbme-calculator/2_black.jpg);--three-img-url:url(assets/images/testinterface/nbme-calculator/3_black.jpg);--four-img-url:url(assets/images/testinterface/nbme-calculator/4_black.jpg);--five-img-url:url(assets/images/testinterface/nbme-calculator/5_black.jpg);--six-img-url:url(assets/images/testinterface/nbme-calculator/6_black.jpg);--seven-img-url:url(assets/images/testinterface/nbme-calculator/7_black.jpg);--eight-img-url:url(assets/images/testinterface/nbme-calculator/8_black.jpg);--nine-img-url:url(assets/images/testinterface/nbme-calculator/9_black.jpg);--zero-img-url:url(assets/images/testinterface/nbme-calculator/0_black.jpg);--plus-img-url:url(assets/images/testinterface/nbme-calculator/Plus_black.jpg);--minus-img-url:url(assets/images/testinterface/nbme-calculator/Sub_black.jpg);--multiply-img-url:url(assets/images/testinterface/nbme-calculator/X_black.jpg);--divide-img-url:url(assets/images/testinterface/nbme-calculator/Div_black.jpg);--decimal-img-url:url(assets/images/testinterface/nbme-calculator/dot_black.jpg);--equal-img-url:url(assets/images/testinterface/nbme-calculator/Eqal_black.jpg);--clear-img-url:url(assets/images/testinterface/nbme-calculator/C_black.jpg);--reverse-sign-img-url:url(assets/images/testinterface/nbme-calculator/Add-Sub_black.jpg);--sqrt-img-url:url(assets/images/testinterface/nbme-calculator/Sqrt_black.jpg);--div-x-img-url:url(assets/images/testinterface/nbme-calculator/Div-X_black.jpg);--mplus-img-url:url(assets/images/testinterface/nbme-calculator/Mplus_black.jpg);--mr-img-url:url(assets/images/testinterface/nbme-calculator/MR_black.jpg);--mc-img-url:url(assets/images/testinterface/nbme-calculator/MC_black.jpg);--calculator-input-font:#fff;--calculator-input-bg:#000;--lab-values-background:#3c4150;--lab-values-table-background:#3c4150;--lab-values-header:#2a2a2a;--lab-values-search-bg:#000;--lab-values-tab-bg:#474342;--lab-values-active-tab-bg:#000;--lab-values-tab-font:#fff;--left-nav-border-right:#4c4c4c;--left-nav-selected-bg:#a2ddff;--left-nav-selected-text:#000;--standards-header:#a6a6a6;--answer-choice-hover-text:#000;--answer-choice-mat-radio-border:grey;--vignette-descriptor:#3c4150;--keyboard-body-bg:#a3a6a8;--docked-window-header-bg:#2a2a2a;--docked-window-header-font:#fff;--docked-window-header-font-secondary:hsla(0,0%,100%,0.38);--docked-window-content-bg:#1e1e1e;--docked-window-content-font:hsla(0,0%,100%,0.87);--docked-window-border:#2a2a2a;--dock-container-border:#252525;--drug-ad-btn-bg:#5e626e;--drug-ad-btn-color:#fff;--standards-border:#ddd;--play-media-btn-color:rgba(60,65,80,0.5);--ti-popup-header-bg:#2a2a2a;--ti-popup-header-color:#fff;--drug-ad-fullscreen-btn-color:#e85a55;--drug-ad-common-btn-color:#dfc871;--drug-ad-btn-border-color:#fff;--fc-popup-border:1px solid #2a2a2a}.nbme.theme-sepia{--primary:#5f4938;--background:#fbf0da;--background-fade-low:#fbf0da;--background-fade-high:#fbf0da;--font:#5d4037;--icon:#e7debf;--tab-font:#5d4037;--tab:var(--background);--tab-secondary:#e7debf;--header:#e7debf;--header-font:#746149;--action:#bf360c;--action-secondary:#666;--border:#c3b59f;--deactivated-bg:#d9d5ca;--stats-bg:#fbf0da;--nav-header:#5f4938;--nav-font:#5d4037;--nav-sort-arrow-font:#fff;--nav-header-font:#fff;--secondary:#d3b794;--nav-row-alternate:#d9d5ca;--shortcut-key:#5d4037;--top-header:#e7debf;--top-font:#5f4938;--footer:#5f4938;--content-btn-bg:grey;--vertical-divider:#ddd;--popup-header:#e7debf;--popup-header-font:#5f4938;--calc-font:var(--font);--calc-action-font:red;--calc-mem-font:#888;--navigator-marked:#5f4938;--navigator-hover-text:var(--font);--icon-hover:#453529;--left-explanation-tab-border:#fbf0da;--right-explanation-tab-border:#fbf0da;--save-close-img-url:url(assets/images/testinterface/Save-Close-Sepia.jpg);--delete-notes-img-url:url(assets/images/testinterface/Delete-Notes-Sepia.jpg);--dialog-bg:#d5d0c3;--dialog-header:grey;--calculator-bg:#d5d0c3;--calculator-input-font:#000;--calculator-input-bg:#fff;--lab-values-background:#d5d0c3;--lab-values-table-background:#d5d0c3;--lab-values-header:#e7debf;--lab-values-search-bg:#fff;--lab-values-tab-bg:#474342;--lab-values-active-tab-bg:#000;--lab-values-tab-font:#fff;--left-nav-border-right:#ddd;--left-nav-selected-bg:grey;--left-nav-selected-text:#fff;--standards-header:#8f7756;--answer-choice-hover-text:#000;--answer-choice-mat-radio-border:#5d4037;--proceed-btn-fade-low:grey;--proceed-btn-fade-high:grey;--vignette-descriptor:rgba(95,73,56,0.2);--keyboard-body-bg:#f5f3f0;--docked-window-header-bg:#e7debf;--docked-window-header-font:#5f4938;--docked-window-header-font-secondary:rgba(95,73,56,0.38);--docked-window-content-bg:#f6efdc;--docked-window-content-font:#5d4037;--docked-window-border:#c3b59f;--dock-container-border:#bfb09c;--drug-ad-btn-color:#5d4037;--standards-border:grey;--play-media-btn-color:rgba(95,73,56,0.1);--ti-popup-header-bg:#e7debf;--ti-popup-header-color:#5f4938;--drug-ad-fullscreen-btn-color:#e85a55;--drug-ad-common-btn-color:#dfc871;--drug-ad-btn-border-color:#000}.nbme.theme-grey,.nbme.theme-sepia{--iconhover:#ffff67;--stats-label:#6a6a6a;--stats-value:#1a1a1a;--stats-divider:#fff;--content-btn-color:#fff;--submit-img-url:url(assets/images/testinterface/submit.png);--one-img-url:url(assets/images/testinterface/nbme-calculator/1.jpg);--two-img-url:url(assets/images/testinterface/nbme-calculator/2.jpg);--three-img-url:url(assets/images/testinterface/nbme-calculator/3.jpg);--four-img-url:url(assets/images/testinterface/nbme-calculator/4.jpg);--five-img-url:url(assets/images/testinterface/nbme-calculator/5.jpg);--six-img-url:url(assets/images/testinterface/nbme-calculator/6.jpg);--seven-img-url:url(assets/images/testinterface/nbme-calculator/7.jpg);--eight-img-url:url(assets/images/testinterface/nbme-calculator/8.jpg);--nine-img-url:url(assets/images/testinterface/nbme-calculator/9.jpg);--zero-img-url:url(assets/images/testinterface/nbme-calculator/0.jpg);--plus-img-url:url(assets/images/testinterface/nbme-calculator/Plus.jpg);--minus-img-url:url(assets/images/testinterface/nbme-calculator/Sub.jpg);--multiply-img-url:url(assets/images/testinterface/nbme-calculator/X.jpg);--divide-img-url:url(assets/images/testinterface/nbme-calculator/Div.jpg);--decimal-img-url:url(assets/images/testinterface/nbme-calculator/dot.jpg);--equal-img-url:url(assets/images/testinterface/nbme-calculator/Eqal.jpg);--clear-img-url:url(assets/images/testinterface/nbme-calculator/C.jpg);--reverse-sign-img-url:url(assets/images/testinterface/nbme-calculator/Add-Sub.jpg);--sqrt-img-url:url(assets/images/testinterface/nbme-calculator/Sqrt.jpg);--div-x-img-url:url(assets/images/testinterface/nbme-calculator/Div-X.jpg);--mplus-img-url:url(assets/images/testinterface/nbme-calculator/Mplus.jpg);--mr-img-url:url(assets/images/testinterface/nbme-calculator/MR.jpg);--mc-img-url:url(assets/images/testinterface/nbme-calculator/MC.jpg);--drug-ad-btn-bg:#efefef;--fc-popup-border:none}.nbme.theme-grey{--primary:#0067a9;--background:#ddd;--tab-font:var(--primary);--tab:var(--background);--tab-secondary:silver;--header:#d9d9d9;--font:#1a1a1a;--action:#2196f3;--icon:#fff;--header-font:#fff;--action-secondary:#ff4;--deactivated-bg:#d7d7da;--border:#ccc;--stats-bg:#ddd;--nav-header:#7cafe8;--top-header:#0067a9;--top-font:#fff;--footer:var(--top-header);--shortcut-key:#333;--content-btn-bg:#0067a9;--vertical-divider:#fff;--nav-font:#fff;--nav-sort-arrow-font:#fff;--popup-header:#d9d9d9;--popup-header-font:#000;--calc-font:navy;--calc-action-font:red;--calc-mem-font:#888;--navigator-marked:#2196f3;--navigator-hover-text:var(--font);--icon-hover:#283294;--save-close-img-url:url(assets/images/testinterface/Save-Close.jpg);--delete-notes-img-url:url(assets/images/testinterface/Delete-Notes.jpg);--dialog-bg:#eee;--dialog-header:#3852a4;--calculator-bg:#fff;--calculator-input-font:#000;--calculator-input-bg:#fff;--keyboard-body-bg:#eee;--docked-window-header-bg:#ccc;--docked-window-header-font:#000;--docked-window-header-font-secondary:rgba(0,0,0,0.38);--docked-window-content-bg:#fff;--docked-window-content-font:#65656a;--docked-window-border:#ddd;--dock-container-border:#bbb;--drug-ad-btn-color:#000;--ti-popup-header-bg:#ccc;--ti-popup-header-color:#000;--drug-ad-fullscreen-btn-color:#e85a55;--drug-ad-common-btn-color:#dfc871;--drug-ad-btn-border-color:#000}body.nbme{font-family:Arial,Verdana,Helvetica}.nbme-layout{width:100%;height:100%;color:var(--font);background-color:var(--top-header)}.nbme-layout .left-navigator{font-family:Verdana,Arial,Georgia;position:fixed;left:0;top:0;width:110px;height:100%;overflow:auto;overflow-x:hidden;cursor:pointer;z-index:100;-webkit-overflow-scrolling:touch;background-color:var(--background);border-right:1px solid var(--left-nav-border-right)}.nbme-layout .nbme-body{width:100%}.nbme-layout .footer-nav,.nbme-layout .header-nav{width:100%;display:block;background-color:var(--primary);color:var(--nav-header-font)}.nbme-layout .footer-nav .medium-screen-icon,.nbme-layout .header-nav .medium-screen-icon{text-decoration:none;cursor:pointer;font-weight:400;line-height:1.1em;border-radius:3px;min-width:4rem;text-align:center;font-size:.8rem;padding:1px 3px;margin:0 4px;position:relative}.nbme-layout .footer-nav .medium-screen-icon:hover,.nbme-layout .header-nav .medium-screen-icon:hover{background-color:var(--icon-hover)}.nbme-layout .footer-nav .medium-screen-icon i,.nbme-layout .header-nav .medium-screen-icon i{font-size:2em;cursor:pointer}.nbme-layout .footer-nav .small-screen-icons a,.nbme-layout .header-nav .small-screen-icons a{text-decoration:none;text-align:center;padding:1px 6px;margin:0 3px}.nbme-layout .footer-nav .small-screen-icons i,.nbme-layout .header-nav .small-screen-icons i{font-size:1.5em;cursor:pointer}.nbme-layout .nbme-content{height:calc(100vh - 104px);display:flex;background:var(--background-fade-low);background:linear-gradient(180deg,var(--background-fade-low),var(--background-fade-high));background-color:var(--background)}"],
        encapsulation : 2
      }), Component;
    })();
    let undefinedValue = (() => {
      class Renderer {
        constructor(mathDialog, domConverter, selection, map, canvas, config, type, texture, gl, gameEngine, clientEngine) {
          this.dialog = mathDialog;
          this.sharedService = domConverter;
          this.usmleService = selection;
          this.dialogNotesService = map;
          this.dialogShortcutsService = canvas;
          this.dialogNavigatorService = config;
          this.dialogLabsService = type;
          this.dialogUsersettingsService = texture;
          this.flashcardTestInterfaceFeaturesService = gl;
          this.timerService = gameEngine;
          this.dialogTestmodeMenuService = clientEngine;
          this.testInterfaceConfig = null;
          this.flashCardCategory = options.c;
          this.isSafari = false;
          this.qbankIds = options.h;
          this.testMode = options.n;
        }
        get isFullScreen() {
          return document.fullscreenElement || document.mozFullScreen || document.webkitIsFullScreen;
        }
        get isReviewDialogOpened() {
          return this.dialog.openDialogs.some((timeline_mode) => {
            return "review-dialog-container" == timeline_mode.id;
          });
        }
        ngOnInit() {
          this.testInterfaceConfig = this.sharedService._testInterfaceConfig;
          this.initializePopover();
          this.subscribeToServiceEvents();
        }
        ngAfterViewInit() {
          this.checkIfSafari();
        }
        checkIfSafari() {
          this.isSafari = navigator.vendor && navigator.vendor.indexOf("Apple") > -1 && navigator.userAgent && -1 == navigator.userAgent.indexOf("CriOS") && -1 == navigator.userAgent.indexOf("FxiOS");
        }
        subscribeToServiceEvents() {
          this.onKeyboardShortcut = this.usmleService.keyboardShortcutsObj._onKeyboardShortcut.subscribe((undefined) => {
            if ("labValues" == undefined && this.testInterfaceConfig.labValues) {
              this.showLabValues();
            }
            if ("notes" == undefined) {
              this.showUserNotes();
            }
          });
        }
        showFlashcards() {
          if (this.sharedService._userPreferences.jsonSettings.testPreferences.dockedElements.flashcards) {
            this.sharedService._toBeDocked = options.b.flashcards;
          }
          this.flashcardTestInterfaceFeaturesService.openFlashcardsTIMainScreen();
        }
        showUserNotes() {
          if (this.sharedService._testInfo.testModeId == options.n.search) {
            return void this.sharedService.showWarningDialog("Notes feature is available during test mode only.");
          }
          let commandName = {
            panelClass : "notes-dialog-container",
            hasBackdrop : false,
            data : this.usmleService
          };
          if (this.sharedService._userPreferences.jsonSettings.testPreferences.dockedElements.notes) {
            this.sharedService._toBeDocked = options.b.notes;
          }
          this.dialogNotesService.openDialog(commandName);
        }
        showNotebook() {
          if (this.sharedService._userPreferences.jsonSettings.testPreferences.dockedElements.notebook) {
            this.sharedService._toBeDocked = options.b.notebook;
          }
          this.sharedService._notebookContractImpl.openNotebook();
        }
        showNavigator() {
          this.dialogNavigatorService.openDialog({
            panelClass : "navigator-dialog-container",
            hasBackdrop : false,
            data : {
              commonContractImpl : this.usmleService
            }
          });
        }
        showKeyboardShortcuts() {
          let commandName = {
            panelClass : "keyboardshortcuts-dialog-container",
            hasBackdrop : false,
            width : "500px",
            data : {
              keyboardShortcuts : this.usmleService.getKeyboardShortcuts()
            }
          };
          this.dialogShortcutsService.openDialog(commandName);
        }
        showUserSettings() {
          if (!this.dialogUsersettingsService.IsOpen) {
            this.dialogUsersettingsService.openDialog({
              panelClass : "usersettings-dialog-container",
              width : "330px",
              height : "100vh",
              position : {
                right : "0"
              },
              hasBackdrop : false
            }).then((canCreateDiscussions) => {
            });
          }
        }
        showLabValues() {
          if (this.sharedService._userPreferences.jsonSettings.testPreferences.dockedElements.labvalues) {
            this.sharedService._toBeDocked = options.b.labvalues;
          }
          this.dialogLabsService.openDialog({
            panelClass : "labvalues-dialog-container",
            hasBackdrop : false,
            width : "650px",
            height : "648px",
            data : {
              commonContractImpl : this.sharedService._testInterfaceUsmleContractImpl,
              title : "Lab Values"
            }
          });
        }
        openHelpMenu() {
          if (!this.usmleService.shortcutsDisabled) {
            this.trigger.openMenu();
          }
        }
        launchTutorial() {
          var intro = introJs();
          intro.setOptions({
            showStepNumbers : true,
            showBullets : false,
            exitOnOverlayClick : true,
            disableInteraction : true,
            keyboardNavigation : true,
            scrollToElement : true,
            steps : [{
              element : document.querySelector(".step1"),
              intro : "Reference sheet for lab values",
              position : "left"
            }, {
              element : document.querySelector(".step2"),
              intro : "Add important concepts/images to flashcards",
              position : "left"
            }, {
              element : document.querySelector(".step3"),
              intro : "Add key concepts, tables, and images to your Notebook for later review.",
              position : "left"
            }, {
              element : document.querySelector(".step4"),
              intro : "Add important things to notes",
              position : "left"
            }, {
              element : document.querySelector(".step5"),
              intro : "Adjust your preferences using the settings option",
              position : "left"
            }, {
              element : document.querySelector(".step6"),
              intro : "Change the Test Mode",
              position : "left"
            }, {
              element : document.querySelector(".step7"),
              intro : "Save test to resume later",
              position : "right"
            }, {
              element : document.querySelector(".step8"),
              intro : "Navigate to previous question using the previous button",
              position : "top"
            }, {
              element : document.querySelector(".step9"),
              intro : "Navigate to next question using the next button",
              position : "top"
            }, {
              element : document.querySelector(".step10"),
              intro : "Provide feedback on an individual question",
              position : "top"
            }, {
              element : document.querySelector(".step11"),
              intro : "Mark questions to review them later",
              position : "left"
            }, {
              element : document.querySelector(".step12"),
              intro : "Review your test progress, jump to a question, or submit your test",
              position : "left"
            }, {
              element : document.querySelector(".step13"),
              intro : "Return to the most recently viewed Question",
              position : "left"
            }, {
              element : document.querySelector(".step14"),
              intro : "Save test to resume later",
              position : "left"
            }, {
              element : document.querySelector(".step15"),
              intro : "End the test",
              position : "left"
            }].filter((arrowIcon) => {
              return arrowIcon.element;
            })
          });
          intro.start();
          this.trigger.restoreFocus = false;
          this.usmleService.shortcutsDisabled = true;
          this.timerService.pauseTimer();
          intro.onexit(() => {
            this.trigger.focus();
            this.trigger.restoreFocus = true;
            setTimeout(() => {
              return this.usmleService.shortcutsDisabled = false;
            });
            this.timerService.resumeTimer();
          });
          intro.oncomplete(() => {
            this.timerService.resumeTimer();
          });
        }
        initializePopover() {
          setTimeout(() => {
            $("#help-tooltip").popover({
              html : true,
              content : $("#help-tooltip-description").html()
            });
          }, 1500);
        }
        showEditTestModeMenu() {
          this.dialogTestmodeMenuService.openDialog({
            width : "225px",
            panelClass : "test-mode-menu-dialog-container",
            restoreFocus : false,
            autoFocus : false,
            backdropClass : "test-mode-menu-backdrop",
            position : {
              top : "48px",
              right : "12px"
            },
            data : {
              commonContractImpl : this.usmleService
            }
          });
        }
        ngOnDestroy() {
          this.onKeyboardShortcut.unsubscribe();
        }
      }
      return Renderer.\u0275fac = function(canCreateDiscussions) {
        return new (canCreateDiscussions || Renderer)(self.Sb(ts.b), self.Sb(c.a), self.Sb(clrVal), self.Sb(CheckDailyStat.a), self.Sb(trytes), self.Sb(hitokoto), self.Sb(EventConsts.a), self.Sb(curAttrs), self.Sb(G.a), self.Sb(searchQ), self.Sb(_maskLayerSimulate));
      }, Renderer.\u0275cmp = self.Mb({
        type : Renderer,
        selectors : [["nbome-header"]],
        viewQuery : function(query, options) {
          var data;
          if (1 & query) {
            self.ad(normalizedMatrix.c, true);
          }
          if (2 & query && self.Dc(data = self.hc())) {
            options.trigger = data.first;
          }
        },
        decls : 19,
        vars : 11,
        consts : [[1, "nbome-header", "d-flex", "justify-content-between", "accessibility-triggers"], [1, "d-flex", "align-items-center", "col-6"], [1, "heading"], [1, "d-flex", "align-items-center", "col-6", "justify-content-end"], ["aria-label", "Help", "tabindex", "0", "role", "menu", 3, "matMenuTriggerFor", "keydown.enter", 4, "ngIf"], [1, "nbome-tutorial-panel-class"], ["menu", "matMenu"], [1, "help-option"], ["mat-menu-item", "", "aria-label", "Launch Tutorial", 3, "click", "keydown.enter"], 
        ["class", "help-option", 4, "ngIf"], ["class", "step1", "aria-label", "Open Lab Values", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], ["class", "step2 position-relative", "aria-label", "Open Flashcards Dialog", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], ["class", "step3", "aria-label", "Open Notebook Dialog", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], ["class", "step4", "aria-label", 
        "Open Notes Dialog", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], ["class", "step5", "aria-label", "Open Settings Dialog", "tabindex", "0", "role", "application", 3, "click", "keydown.enter", 4, "ngIf"], ["class", "step6", "tabindex", "0", "role", "application", "aria-label", "Edit Test Mode Dialog", 3, "click", "keydown.enter", 4, "ngIf"], ["style", "cursor:default;", "class", "d-flex align-items-center", 4, "ngIf"], ["aria-label", "Help", "tabindex", 
        "0", "role", "menu", 3, "matMenuTriggerFor", "keydown.enter"], ["title", "How to use", 1, "fal", "fa-question-circle", "d-none", "d-sm-none", "d-md-inline"], ["mat-menu-item", "", "aria-label", "Open Keyboard Shortcuts", 3, "click", "keydown.enter"], ["aria-label", "Open Lab Values", "tabindex", "0", "role", "application", 1, "step1", 3, "click", "keydown.enter"], ["title", "Lab Values", 1, "fal", "fa-vial"], ["aria-label", "Open Flashcards Dialog", "tabindex", "0", "role", "application", 
        1, "step2", "position-relative", 3, "click", "keydown.enter"], ["title", "Flashcards", 1, "fal", "fa-bolt"], [1, "flashcard-count"], ["aria-label", "Open Notebook Dialog", "tabindex", "0", "role", "application", 1, "step3", 3, "click", "keydown.enter"], ["title", "My Notebook", 1, "fal", "fa-book"], ["aria-label", "Open Notes Dialog", "tabindex", "0", "role", "application", 1, "step4", 3, "click", "keydown.enter"], ["class", "fal fa-file-edit", "title", "Notes", 4, "ngIf"], ["class", "fas fa-file-edit", 
        "title", "Notes", 4, "ngIf"], ["title", "Notes", 1, "fal", "fa-file-edit"], ["title", "Notes", 1, "fas", "fa-file-edit"], ["aria-label", "Open Settings Dialog", "tabindex", "0", "role", "application", 1, "step5", 3, "click", "keydown.enter"], ["title", "Settings", 1, "fal", "fa-cog"], ["tabindex", "0", "role", "application", "aria-label", "Edit Test Mode Dialog", 1, "step6", 3, "click", "keydown.enter"], ["title", "Edit Test Mode", 1, "fal", "fa-tasks-alt"], [1, "d-flex", "align-items-center", 
        2, "cursor", "default"], ["class", "fal fa-clock mr-1", "style", "cursor:default;", 4, "ngIf"], [4, "ngIf"], [1, "fal", "fa-clock", "mr-1", 2, "cursor", "default"]],
        template : function(elem, options) {
          if (1 & elem) {
            self.Yb(0, "div", 0);
            self.Yb(1, "div", 1);
            self.Yb(2, "span", 2);
            self.Uc(3);
            self.Xb();
            self.Xb();
            self.Yb(4, "div", 3);
            self.Sc(5, _exit, 2, 1, "a", 4);
            self.Yb(6, "mat-menu", 5, 6);
            self.Yb(8, "div", 7);
            self.Yb(9, "p", 8);
            self.gc("click", function() {
              return options.launchTutorial();
            })("keydown.enter", function() {
              return options.launchTutorial(), options.trigger.closeMenu();
            });
            self.Uc(10, "Interface Tutorial");
            self.Xb();
            self.Xb();
            self.Sc(11, AppController, 3, 0, "div", 9);
            self.Xb();
            self.Sc(12, axisLinks, 2, 0, "a", 10);
            self.Sc(13, addSelectedPodcast, 4, 1, "a", 11);
            self.Sc(14, fn, 2, 0, "a", 12);
            self.Sc(15, loop, 3, 2, "a", 13);
            self.Sc(16, query, 2, 0, "a", 14);
            self.Sc(17, prepare, 2, 0, "a", 15);
            self.Sc(18, drawPrevious, 4, 3, "a", 16);
            self.Xb();
            self.Xb();
          }
          if (2 & elem) {
            self.Cb(3);
            self.Xc("COMLEX-OMT: Question ", options.sharedService._testInfo.lastQuestionVisited, " of ", options.sharedService._testInfo.questionList.length, "");
            self.Cb(2);
            self.sc("ngIf", options.testInterfaceConfig.help);
            self.Cb(6);
            self.sc("ngIf", !options.isReviewDialogOpened);
            self.Cb(1);
            self.sc("ngIf", options.testInterfaceConfig.labValues);
            self.Cb(1);
            self.sc("ngIf", options.testInterfaceConfig.flashcards);
            self.Cb(1);
            self.sc("ngIf", options.testInterfaceConfig.myNoteBook);
            self.Cb(1);
            self.sc("ngIf", options.testInterfaceConfig.notes);
            self.Cb(1);
            self.sc("ngIf", options.testInterfaceConfig.settings);
            self.Cb(1);
            self.sc("ngIf", options.testInterfaceConfig.editTestMode);
            self.Cb(1);
            self.sc("ngIf", options.sharedService._launchTestOptions.canShowBlockTime && options.sharedService._userPreferences.jsonSettings.testPreferences.showTimer);
          }
        },
        directives : [props.t, normalizedMatrix.d, normalizedMatrix.a, normalizedMatrix.c],
        pipes : [cssKeys.i, cssKeys.l],
        styles : [".nbome-header{height:52px}.nbome-header .heading{padding-left:20px;font-size:20px}.nbome-header>div{padding-left:0;padding-right:0}.nbome-header .flashcard-count{position:absolute;top:10px;left:11px;font-size:.75em}.nbome-tutorial-panel-class{width:200px;position:relative;top:20px;left:-95px;box-shadow:0 0 12px 0 rgba(0,0,0,.22);padding:8px 0}.nbome-tutorial-panel-class p{margin:0}.nbome-tutorial-panel-class .help-option p{cursor:pointer;height:20px;line-height:20px;font-family:inherit}.nbome-tutorial-panel-class .help-option p:hover{text-decoration:underline;color:grey}.nbome-tutorial-panel-class .help-option:not(:last-child){margin-bottom:10px}"],
        encapsulation : 2
      }), Renderer;
    })();
    const getEvents = function(callback) {
      return {
        step7 : callback
      };
    };
    const content = function(force) {
      return {
        step10 : force
      };
    };
    const x = function(dups) {
      return {
        step8 : dups
      };
    };
    const success = function(regionfilter) {
      return {
        step9 : regionfilter
      };
    };
    const md = function(ast) {
      return {
        step11 : ast
      };
    };
    const zone = function(keepLocalTime) {
      return {
        step12 : keepLocalTime
      };
    };
    let Pn = (() => {
      class Player {
        constructor(cards, name, source, n, label, id) {
          this.sharedService = cards;
          this.usmleService = name;
          this.dialogFeedbackService = source;
          this.dialogReviewService = n;
          this.dialog = label;
          this.dockingService = id;
          this.testInterfaceConfig = null;
        }
        get isReviewDialogOpened() {
          return this.dialog.openDialogs.some((timeline_mode) => {
            return "review-dialog-container" == timeline_mode.id;
          });
        }
        ngOnInit() {
          this.testInterfaceConfig = this.sharedService._testInterfaceConfig;
          this.subscribeToServiceEvents();
        }
        subscribeToServiceEvents() {
          this.onKeyboardShortcut = this.usmleService.keyboardShortcutsObj._onKeyboardShortcut.subscribe((frame) => {
            if ("feedback" == frame) {
              this.showFeedback();
            }
            if (!this.dialog.openDialogs.length || ["markQuestion", "previousQuestion", "nextQuestion"].includes(frame.fn) && this.usmleService.allDialogsDocked() && this.usmleService.keydownEventIsOutsideDockContainer(frame.event)) {
              if ("previousQuestion" == frame.fn) {
                this.previousQuestion();
              }
              if ("nextQuestion" == frame.fn) {
                this.nextQuestion();
              }
              if ("markQuestion" == frame.fn) {
                this.bookmarkQuestion();
              }
            }
          });
        }
        saveTest(autopause) {
          this.usmleService.handleTestExit(autopause);
        }
        showFeedback() {
          this.dialogFeedbackService.openDialog({
            panelClass : "feedback-dialog-container",
            hasBackdrop : false,
            height : "400px",
            width : "700px"
          });
        }
        previousQuestion() {
          this.usmleService.previousQuestion();
        }
        nextQuestion() {
          if (this.sharedService._testInfo.lastQuestionVisited < this.sharedService._testInfo.questionList.length) {
            this.usmleService.nextQuestion();
          } else {
            this.showReviewPage();
          }
        }
        bookmarkQuestion() {
          if (this.sharedService._testInfo.testModeId != options.n.search) {
            this.sharedService._currentQuestion.isMarked = !this.sharedService._currentQuestion.isMarked;
            this.dockingService.onQuestionMarkToggle();
          } else {
            this.sharedService.showWarningDialog("Mark feature is available during test mode only.");
          }
        }
        showReviewPage() {
          this.dialogReviewService.openDialog({
            panelClass : "review-dialog-container",
            hasBackdrop : false,
            data : this.usmleService
          });
        }
        ngOnDestroy() {
          if (this.onKeyboardShortcut) {
            this.onKeyboardShortcut.unsubscribe();
          }
        }
      }
      return Player.\u0275fac = function(canCreateDiscussions) {
        return new (canCreateDiscussions || Player)(self.Sb(c.a), self.Sb(clrVal), self.Sb(extl.a), self.Sb(cleanRange.a), self.Sb(ts.b), self.Sb(dialogGeometry.a));
      }, Player.\u0275cmp = self.Mb({
        type : Player,
        selectors : [["nbome-footer"]],
        decls : 23,
        vars : 17,
        consts : [[1, "nbome-footer", "d-flex", "row-content", "justify-content-between", "accessibility-triggers"], [1, "d-flex", "align-items-center", "col-3", "col-sm-3"], [1, "d-flex", "align-items-center"], ["class", "d-flex align-items-center nbome-btn", "aria-label", "Suspend Test", "tabindex", "0", "role", "application", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], [1, "d-flex", "col-9", "col-sm-9", "text-right", "align-items-center"], [1, "d-flex", "ml-auto"], ["aria-label", "Navigate to Previous Question", 
        "tabindex", "0", "role", "application", 1, "d-flex", "align-items-center", "nbome-btn", 3, "ngClass", "click", "keydown.enter"], ["title", "Previous", 1, "fal", "fa-backward"], [1, "d-none", "d-sm-none", "d-md-inline", "d-lg-inline", "mb-0"], ["aria-label", "Navigate to Next Question", "tabindex", "0", "role", "application", 1, "d-flex", "align-items-center", "nbome-btn", 3, "ngClass", "click", "keydown.enter"], ["title", "Next", 1, "fal", "fa-forward"], ["class", "d-flex align-items-center nbome-btn", 
        "aria-label", "Open feedback Dialog", "tabindex", "0", "role", "application", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], ["tabindex", "0", "role", "application", 1, "d-flex", "align-items-center", "nbome-btn", 3, "ngClass", "click", "keydown.enter"], ["class", "d-none d-sm-none d-md-inline d-lg-inline mb-0", 4, "ngIf"], ["title", "Mark", 1, "fal", "fa-check"], ["aria-label", "Open Review Page", "tabindex", "0", "role", "application", 1, "d-flex", "align-items-center", "nbome-btn", 
        3, "ngClass", "click", "keydown.enter"], ["title", "Review", 1, "fal", "fa-ballot"], ["aria-label", "Suspend Test", "tabindex", "0", "role", "application", 1, "d-flex", "align-items-center", "nbome-btn", 3, "ngClass", "click", "keydown.enter"], ["title", "Suspend", 1, "fal", "fa-pause-circle"], ["aria-label", "Open feedback Dialog", "tabindex", "0", "role", "application", 1, "d-flex", "align-items-center", "nbome-btn", 3, "ngClass", "click", "keydown.enter"], ["title", "Feedback", 1, "fal", 
        "fa-comment-alt"]],
        template : function($location, $scope) {
          if (1 & $location) {
            self.Yb(0, "div", 0);
            self.Yb(1, "div", 1);
            self.Yb(2, "div", 2);
            self.Sc(3, createAndShowDialog, 4, 3, "a", 3);
            self.Xb();
            self.Xb();
            self.Yb(4, "div", 4);
            self.Yb(5, "div", 5);
            self.Yb(6, "a", 6);
            self.gc("click", function() {
              return $scope.previousQuestion();
            })("keydown.enter", function() {
              return $scope.previousQuestion();
            });
            self.Tb(7, "i", 7);
            self.Yb(8, "p", 8);
            self.Uc(9, "\u00a0Previous");
            self.Xb();
            self.Xb();
            self.Yb(10, "a", 9);
            self.gc("click", function() {
              return $scope.nextQuestion();
            })("keydown.enter", function() {
              return $scope.nextQuestion();
            });
            self.Yb(11, "p", 8);
            self.Uc(12, "Next\u00a0");
            self.Xb();
            self.Tb(13, "i", 10);
            self.Xb();
            self.Sc(14, initialize, 4, 3, "a", 11);
            self.Yb(15, "a", 12);
            self.gc("click", function() {
              return $scope.bookmarkQuestion();
            })("keydown.enter", function() {
              return $scope.bookmarkQuestion();
            });
            self.Sc(16, filePathClone, 2, 0, "p", 13);
            self.Sc(17, unexpandedFeatureDirectoryPaths, 2, 0, "p", 13);
            self.Tb(18, "i", 14);
            self.Xb();
            self.Yb(19, "a", 15);
            self.gc("click", function() {
              return $scope.showReviewPage();
            })("keydown.enter", function() {
              return $scope.showReviewPage();
            });
            self.Yb(20, "p", 8);
            self.Uc(21, "Review\u00a0");
            self.Xb();
            self.Tb(22, "i", 16);
            self.Xb();
            self.Xb();
            self.Xb();
            self.Xb();
          }
          if (2 & $location) {
            self.Cb(3);
            self.sc("ngIf", $scope.sharedService._launchTestOptions.canShowSuspend);
            self.Cb(3);
            self.sc("ngClass", self.yc(9, x, !$scope.isReviewDialogOpened));
            self.Cb(4);
            self.sc("ngClass", self.yc(11, success, !$scope.isReviewDialogOpened));
            self.Cb(4);
            self.sc("ngIf", $scope.testInterfaceConfig.feedback);
            self.Cb(1);
            self.sc("ngClass", self.yc(13, md, !$scope.isReviewDialogOpened));
            self.Db("aria-label", $scope.sharedService._currentQuestion.isMarked ? "Unmark Question" : "Mark Question");
            self.Cb(1);
            self.sc("ngIf", !$scope.sharedService._currentQuestion.isMarked);
            self.Cb(1);
            self.sc("ngIf", $scope.sharedService._currentQuestion.isMarked);
            self.Cb(2);
            self.sc("ngClass", self.yc(15, zone, !$scope.isReviewDialogOpened));
          }
        },
        directives : [props.t, props.q],
        styles : [".nbome-footer[_ngcontent-%COMP%]{height:70px;padding:0 15px}.nbome-footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.nbome-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px}.nbome-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0 2px}.nbome-footer[_ngcontent-%COMP%]   .nbome-btn[_ngcontent-%COMP%]{background-color:var(--primary);height:39px;padding-left:15px;padding-right:15px;border-radius:2px}.nbome-footer[_ngcontent-%COMP%]   .nbome-btn[_ngcontent-%COMP%]:hover{background-color:var(--hover-bg-color)}"]
      }), Player;
    })();
    const createBlock = function(initialValue, callback) {
      return {
        "content-height-without-banner" : initialValue,
        "content-height-with-banner" : callback
      };
    };
    let Ln = (() => {
      class Component {
        constructor(ngContentIndexMatcher) {
          this.sharedService = ngContentIndexMatcher;
          this.contentType = options.a;
          this.testInterfaceConfig = null;
        }
        ngOnInit() {
          this.testInterfaceConfig = this.sharedService._testInterfaceConfig;
        }
      }
      return Component.\u0275fac = function(wrapperClassName) {
        return new (wrapperClassName || Component)(self.Sb(c.a));
      }, Component.\u0275cmp = self.Mb({
        type : Component,
        selectors : [["nbome-layout"]],
        decls : 5,
        vars : 2,
        consts : [[1, "nbome-layout"], [1, "header-nav"], ["class", "markedsectiontext-div d-flex align-items-center", 4, "ngIf"], ["class", "nbome-content", 3, "ngClass", 4, "ngIf"], [1, "footer-nav"], [1, "markedsectiontext-div", "d-flex", "align-items-center"], [1, "markedsectiontext"], [1, "fal", "fa-info-circle", "markedsection-icon"], [1, "nbome-content", 3, "ngClass"]],
        template : function(object, config) {
          if (1 & object) {
            self.Yb(0, "div", 0);
            self.Tb(1, "nbome-header", 1);
            self.Sc(2, open, 4, 0, "div", 2);
            self.Sc(3, BehaviorPropertyObserver, 1, 4, "common-content", 3);
            self.Tb(4, "nbome-footer", 4);
            self.Xb();
          }
          if (2 & object) {
            self.Cb(2);
            self.sc("ngIf", config.sharedService._currentQuestion.isMarked);
            self.Cb(1);
            self.sc("ngIf", config.testInterfaceConfig.contentType == config.contentType.common);
          }
        },
        directives : [undefinedValue, props.t, Pn, li, props.q],
        styles : [".nbome-layout .footer-nav a,.nbome-layout .footer-nav i,.nbome-layout .footer-nav span,.nbome-layout .header-nav a,.nbome-layout .header-nav i,.nbome-layout .header-nav span{color:var(--icon)!important}.nbome.theme-light{--primary:#0572ce;--header:#dfdfdf;--background:#fff;--font:#000;--action:#2196f3;--secondary:#d9d9d9;--background-secondary:#f1f6fa;--border:#ddd;--action-secondary:#ececec;--selected:rgba(33,150,243,0.1);--deactivated-bg:#d7d7da;--stats-label:#6a6a6a;--stats-value:#1a1a1a;--stats-divider:#f7f7f7;--stats-bg:#fff;--shortcut-key:#333;--content-btn-bg:#0572ce;--popup-header:#d9d9d9;--popup-header-font:#000;--ti-popup-header-bg:#d9d9d9;--ti-popup-header-color:#000;--docked-window-header-font-secondary:rgba(0,0,0,0.38);--docked-window-content-bg:#fff;--docked-window-content-font:#65656a;--docked-window-border:#ddd;--dock-container-border:#ddd;--feedback-background:#fff;--feedback-header:#fff;--feedback-line-divider:#f2f2f2;--hover-bg-color:#057ee1;--table-cell-highlight:#fcfcfc;--vignette-descriptor:hsla(0,0%,74.9%,0.5);--drug-ad-btn-border-color:#000;--fc-popup-border:none}.nbome.theme-dark,.nbome.theme-light{--view-exhibits-text-color:#000;--icon:#fff;--content-btn-color:#fff;--vertical-divider:#ddd;--navigator-marked:#2196f3;--standards-border:#ddd;--play-media-btn-color:#fcdc7c;--drug-ad-fullscreen-btn-color:#e85a55;--drug-ad-common-btn-color:#dfc871}.nbome.theme-dark{--primary:#445;--header:#2a2a2a;--background:#1e1e1e;--font:#fff;--action:#2196f3;--secondary:#2a2a2a;--background-secondary:#121212;--border:#4c4c4c;--action-secondary:#6a6a6a;--selected:#2a2a2a;--deactivated-bg:#666;--stats-label:hsla(0,0%,100%,0.6);--stats-value:hsla(0,0%,100%,0.87);--stats-divider:#4c4c4c;--stats-bg:#2a2a2a;--shortcut-key:#3c4150;--content-btn-bg:#445;--popup-header:#252525;--popup-header-font:hsla(0,0%,100%,0.87);--ti-popup-header-bg:#2a2a2a;--ti-popup-header-color:#fff;--docked-window-header-font-secondary:hsla(0,0%,100%,0.38);--docked-window-content-bg:#1e1e1e;--docked-window-content-font:hsla(0,0%,100%,0.87);--docked-window-border:#2a2a2a;--dock-container-border:#252525;--feedback-background:#121212;--feedback-header:#2a2a2a;--feedback-line-divider:#2a2a2a;--hover-bg-color:#445;--table-cell-highlight:hsla(0,0%,100%,0.1);--vignette-descriptor:#3c4150;--drug-ad-btn-border-color:#fff;--fc-popup-border:1px solid #2a2a2a}.nbome.theme-sepia{--primary:#5f4938;--header:#e7debf;--background:#f6efdc;--font:#5d4037;--view-exhibits-text-color:#5d4037;--action:#bf360c;--icon:#e7debf;--secondary:#e7debf;--background-secondary:#e7debf;--border:#c3b59f;--selected:#e7debf;--action-secondary:#776150;--deactivated-bg:#d9d5ca;--stats-bg:#fbf0da;--shortcut-key:#5d4037;--content-btn-bg:#5f4938;--vertical-divider:#ddd;--popup-header:#e7debf;--popup-header-font:#5f4938;--navigator-marked:#5f4938;--ti-popup-header-bg:#e7debf;--ti-popup-header-color:#5f4938;--docked-window-header-font-secondary:rgba(95,73,56,0.38);--docked-window-content-bg:#f6efdc;--docked-window-content-font:#5d4037;--docked-window-border:#c3b59f;--dock-container-border:#bfb09c;--feedback-background:#fbf0da;--feedback-header:#e7debf;--feedback-line-divider:#e7debf;--hover-bg-color:#5f4938;--table-cell-highlight:#e7debf;--vignette-descriptor:rgba(95,73,56,0.2);--standards-border:grey;--play-media-btn-color:#fcdc7c}.nbome.theme-grey,.nbome.theme-sepia{--stats-label:#6a6a6a;--stats-value:#1a1a1a;--stats-divider:#fff;--content-btn-color:#fff;--drug-ad-fullscreen-btn-color:#e85a55;--drug-ad-common-btn-color:#dfc871;--drug-ad-btn-border-color:#000;--fc-popup-border:none}.nbome.theme-grey{--primary:#2f4050;--header:#ccc;--background:#ddd;--font:#000;--view-exhibits-text-color:#000;--action:#2196f3;--icon:#5ab0f6;--secondary:#d9d9d9;--background-secondary:#ddd;--action-secondary:#ececec;--border:#ccc;--selected:rgba(33,150,243,0.1);--deactivated-bg:#d7d7da;--stats-bg:#ddd;--shortcut-key:#333;--content-btn-bg:#2f4050;--vertical-divider:#fff;--popup-header:#d9d9d9;--popup-header-font:#000;--navigator-marked:#2196f3;--ti-popup-header-bg:#ccc;--ti-popup-header-color:#000;--docked-window-header-font-secondary:rgba(0,0,0,0.38);--docked-window-content-bg:#fff;--docked-window-content-font:#65656a;--docked-window-border:#ddd;--dock-container-border:#bbb;--feedback-background:#ddd;--feedback-header:#ccc;--feedback-line-divider:#ccc;--hover-bg-color:#057ee1;--table-cell-highlight:#e5e5e5;--vignette-descriptor:silver}body.nbome{font-family:Verdana,Regular}.user-settings{font-family:Arial,Verdana,Helvetica!important}.main-layout{height:100%;overflow:hidden}.nbome-layout{width:100%;height:100%;min-height:100%;color:var(--font);font-size:12pt;background-color:var(--background-secondary)}.nbome-layout .header-nav{width:100%;background-color:var(--primary)}.nbome-layout .header-nav i{font-size:1.25em;cursor:pointer}.nbome-layout .markedsectiontext-div{width:300px;height:60px;background:var(--background);box-shadow:0 2px 0 var(--border);opacity:1;font-size:14px;text-align:center}.nbome-layout .markedsectiontext-div .markedsectiontext{width:100%}.nbome-layout .markedsectiontext-div .markedsection-icon{color:#bc9d00}.nbome-layout .footer-nav{margin:0 20px 20px;background-color:var(--background);border:1px solid var(--border)}.nbome-layout .footer-nav i{font-size:.9em;cursor:pointer}.nbome-layout .footer-nav,.nbome-layout .header-nav{display:block}.nbome-layout .footer-nav a,.nbome-layout .header-nav a{text-decoration:none;margin:0 12px;cursor:pointer;font-weight:400}.nbome-layout .footer-nav span,.nbome-layout .header-nav span{vertical-align:top;font-size:1.25em}.nbome-layout .nbome-content{margin:20px;display:flex;background:var(--background-secondary)}.nbome-layout .nbome-content.content-height-without-banner{height:calc(100vh - 182px)}.nbome-layout .nbome-content.content-height-with-banner{height:calc(100vh - 242px)}"],
        encapsulation : 2
      }), Component;
    })();
    const server = function(cbAccept) {
      return {
        "transparent-show-progress-spinner" : cbAccept
      };
    };
    let CustomDirective = (() => {
      class FlyaroundController {
        constructor(delta, e, n, nodeName, node, mathDialog, equation, context) {
          this.sharedService = delta;
          this.timerService = e;
          this.questionService = n;
          this.usmleService = nodeName;
          this.autoNightModeService = node;
          this.dialog = mathDialog;
          this.themeChangeService = equation;
          this.highlightFactoryService = context;
          this.themes = options.o;
          this.flashCardServiceCallDone = false;
          this.autoNightModeInitialized = false;
          this.keys = options.m;
          this.waitTimer = null;
          this.waitCount = 0;
          this.bodyRightClickEventListener = null;
        }
        set testInterfaceContractImpl(canCreateDiscussions) {
          if (canCreateDiscussions) {
            this.sharedService._testInterfaceContractImpl = canCreateDiscussions;
          }
        }
        set testInterfaceUsmleContractImpl(canCreateDiscussions) {
          if (canCreateDiscussions) {
            this.sharedService._testInterfaceUsmleContractImpl = canCreateDiscussions;
          }
        }
        set testInterfaceConfig(canCreateDiscussions) {
          if (canCreateDiscussions) {
            this.sharedService._testInterfaceConfig = canCreateDiscussions;
          }
        }
        set flashcardContractImpl(canCreateDiscussions) {
          if (canCreateDiscussions) {
            this.sharedService._flashcardContractImpl = canCreateDiscussions;
          }
        }
        set notebookContractImpl(canCreateDiscussions) {
          if (canCreateDiscussions) {
            this.sharedService._notebookContractImpl = canCreateDiscussions;
          }
        }
        set testInfo(e) {
          if (null != e) {
            this.sharedService._testInfo = this.questionService.parseQuestionsInTest(e);
            this.waitCount++;
          }
        }
        set userPreferences(canCreateDiscussions) {
          if (null != canCreateDiscussions) {
            this.sharedService._userPreferences = canCreateDiscussions;
            this.waitCount++;
          }
        }
        set clientConfig(canCreateDiscussions) {
          if (null != canCreateDiscussions) {
            this.sharedService._clientConfig = canCreateDiscussions;
            this.waitCount++;
          }
        }
        ngOnInit() {
          this.waitTimer = setInterval(() => {
            if (3 == this.waitCount) {
              this.sharedService._qbankFilterList = [{
                id : this.sharedService._clientConfig.qBankId,
                name : "",
                subjects : [],
                systems : [],
                subscriptionIds : [this.sharedService._flashcardContractImpl.getSubscriptionId()]
              }];
              this.init();
              this.setUpView();
              this.usmleService.showProgressSpinner = false;
              clearInterval(this.waitTimer);
              this.waitTimer = null;
              this.waitCount = 0;
            }
          }, 1E3);
          this.onTimerEnd = this.timerService._onTimerEnd.subscribe((canCreateDiscussions) => {
            if (canCreateDiscussions) {
              let e = new P.a;
              e.Title = "Warning";
              e.isConfirmBox = false;
              e.OKButtonText = "Ok";
              e.Description = "Your time for the exam has expired.";
              let t = this.dialog.open(message.a, {
                width : "600px",
                data : e,
                panelClass : "myapp-no-padding-dialog",
                hasBackdrop : true,
                disableClose : true
              });
              this.usmleService.closeDrugAdFullScreen();
              this.usmleService.saveTest(true, false);
              t.afterClosed().subscribe((canCreateDiscussions) => {
                this.usmleService.handleRedirects(true);
              });
            }
          });
          this.usmleService.initializeKeyboardShortcuts();
          this.onThemeChange = this.themeChangeService._onThemeChange.subscribe((canCreateDiscussions) => {
            this.usmleService.saveHighlights();
            this.usmleService.unloadHighlights();
            this.usmleService.setupHighlights();
            setTimeout(() => {
              return this.usmleService.handleExhibits();
            });
          });
          this.onSaveQuestion = this.usmleService._onSaveQuestion.subscribe((canCreateDiscussions) => {
            this.usmleService.triggerTestModeChangeConfirmationPopUp();
          });
          this.bodyRightClickEventListener = (event) => {
            event.preventDefault();
          };
          document.body.addEventListener("contextmenu", this.bodyRightClickEventListener);
        }
        setUpView() {
          document.body.classList.remove("uworld");
          document.body.classList.remove("nbme");
          document.body.classList.remove("nbome");
          document.body.classList.add(this.themes[this.sharedService._userPreferences.jsonSettings.testPreferences.theme]);
          document.body.classList.add("usmle-test-interface-angular-material-theme");
          document.body.classList.remove("theme-light");
          let a = ["light", "dark", "sepia", "grey"];
          let array = this.sharedService._testInterfaceConfig.availableColorModes(this.sharedService._userPreferences.jsonSettings.testPreferences.theme);
          let i = this.sharedService._userPreferences.jsonSettings.testPreferences.colorMode;
          if (array.includes(i)) {
            document.body.classList.add("theme-" + a[i]);
          } else {
            document.body.classList.add("theme-" + a[array[0]]);
          }
          this.autoNightModeService.startListener();
        }
        init() {
          this.sharedService._launchTestOptions = new KeyboardEventListener;
          if (0 == this.sharedService._testInfo.testId) {
            this.sharedService._testInfo.testModeId = options.n.search;
            this.usmleService.updateSequenceIdForTestInfo();
          }
          if (this.sharedService._testInfo.testModeId == options.n.review || this.sharedService._testInfo.testModeId == options.n.search) {
            this.sharedService._launchTestOptions.canShowBlockTime = false;
            this.sharedService._launchTestOptions.canShowSuspend = false;
            this.sharedService._launchTestOptions.canShowAnswer = true;
          } else {
            this.sharedService._launchTestOptions.canShowBlockTime = true;
            this.sharedService._launchTestOptions.canShowAnswer = false;
          }
          this.sharedService._highlights = this.highlightFactoryService.createHighlight(new GenerateGif.a, "", true);
          this.sharedService._testInfo = this.usmleService.parseQuestionsInfo(this.sharedService._testInfo);
          this.usmleService.loadQuestion();
          if (this.sharedService._testInterfaceConfig.suspendTestAtExpirationDate && this.sharedService._testInfo.isSim && this.sharedService._testInfo.isFacultyControlled && this.sharedService._testInfo.testModeId != options.n.review && this.sharedService._testInfo.testModeId != options.n.search) {
            this.onSubscriptionTimerEnd = this.timerService._onSubscriptionTimerEnd.subscribe((canCreateDiscussions) => {
              if (canCreateDiscussions) {
                this.usmleService.saveTest(false, true);
              }
            });
          }
        }
        ngOnDestroy() {
          this.autoNightModeService.stopListener();
          this.timerService.destroyTimers();
          this.onTimerEnd.unsubscribe();
          this.onSubscriptionTimerEnd.unsubscribe();
          this.onKeyboardShortcut.unsubscribe();
          this.sharedService.clearData();
          this.usmleService.onDialogClose.unsubscribe();
          this.onSaveQuestion.unsubscribe();
          this.usmleService.onHighlightLimitReached.unsubscribe();
          document.body.removeEventListener("contextmenu", this.bodyRightClickEventListener);
          document.body.classList.remove("usmle-test-interface-angular-material-theme");
        }
        onKeyDown(e) {
          this.usmleService.onKeyDown(e);
        }
        onRightClick(e) {
          e.preventDefault();
        }
        get isInternetAvailable() {
          return window.navigator.onLine;
        }
      }
      return FlyaroundController.\u0275fac = function(canCreateDiscussions) {
        return new (canCreateDiscussions || FlyaroundController)(self.Sb(c.a), self.Sb(searchQ), self.Sb(configReplica), self.Sb(clrVal), self.Sb(BaseObjectService.a), self.Sb(ts.b), self.Sb(data.a), self.Sb(is.a));
      }, FlyaroundController.\u0275cmp = self.Mb({
        type : FlyaroundController,
        selectors : [["testinterface-usmle-mainlayout"]],
        hostBindings : function(quickReplyIndex, options) {
          if (1 & quickReplyIndex) {
            self.gc("keydown", function(canvas) {
              return options.onKeyDown(canvas);
            }, false, self.Gc)("contextmenu", function(event) {
              return options.onRightClick(event);
            }, false, self.Gc);
          }
        },
        inputs : {
          testInterfaceContractImpl : "testInterfaceContractImpl",
          testInterfaceUsmleContractImpl : "testInterfaceUsmleContractImpl",
          testInterfaceConfig : "testInterfaceConfig",
          flashcardContractImpl : "flashcardContractImpl",
          notebookContractImpl : "notebookContractImpl",
          testInfo : "testInfo",
          userPreferences : "userPreferences",
          clientConfig : "clientConfig"
        },
        decls : 2,
        vars : 2,
        consts : [["class", "spinner-card", 3, "ngClass", 4, "ngIf"], ["class", "main-layout", 4, "ngIf"], [1, "spinner-card", 3, "ngClass"], ["color", "primary"], [1, "main-layout"], [4, "ngIf"], ["class", "no-internet", 4, "ngIf"], [1, "no-internet"]],
        template : function(elts, basePCKey) {
          if (1 & elts) {
            self.Sc(0, preview, 2, 3, "div", 0);
            self.Sc(1, constructor, 5, 4, "div", 1);
          }
          if (2 & elts) {
            self.sc("ngIf", basePCKey.usmleService.showProgressSpinner || basePCKey.sharedService._testInterfaceConfig.showTransparentProgressSpinner);
            self.Cb(1);
            self.sc("ngIf", !basePCKey.usmleService.showProgressSpinner && basePCKey.sharedService._testInterfaceConfig);
          }
        },
        directives : [props.t, props.q, new_opts.c, bi, ln, Ln],
        styles : [".introjs-tooltip-at-bottom{top:-180px!important}.introjs-highlight-nbme-footer{height:47px!important;margin-top:2px}.introjs-tooltip-at-top{margin-top:10px}.introjs-highlight-nbme-header{height:44px!important;margin-top:5px}.transparent-show-progress-spinner{opacity:.5;position:absolute!important;z-index:11000}.no-internet{background-color:#f70a0a;color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.25);position:fixed;display:flex;align-items:center;justify-content:space-between;padding:0 50px;height:50px;left:45%;z-index:2001;bottom:55px;font-size:20px}"],
        encapsulation : 2
      }), FlyaroundController;
    })();
    const button2Component = [{
      path : "launchtest/:subscriptionId/:testId/:testModeId/:lastQuestionVisited",
      component : (() => {
        class MTLLoader extends content_panes.a {
          constructor(onProgress, onError, url, value, text, path, visitors, source, manager) {
            super(visitors);
            this.testInterfaceUsmleContractImpl = onProgress;
            this.testInterfaceContractImpl = onError;
            this.flashcardContractImpl = url;
            this.notebookContractImpl = value;
            this.commonService = text;
            this.route = path;
            this.dialog = visitors;
            this.authUtilityService = source;
            this.router = manager;
            this.clientConfig = null;
            this.testInterfaceConfig = null;
            this.subscriptionId = 0;
            this.testId = 0;
            this.testModeId = 0;
            this.lastQuestionVisited = 0;
            this.testInfo = null;
            this.questionIndexes = null;
            this.allottedTimeTypeId = 0;
            this.testQuestionIndexesForSearch = [];
            if (this.router.url.includes("demo")) {
              answers.a.isDemo = true;
            }
            if (1 == answers.a.isDemo) {
              answers.a.qbankId = 1;
            }
          }
          ngOnInit() {
            let data;
            this.route.params.subscribe((subscription) => {
              if (subscription.subscriptionId) {
                this.subscriptionId = subscription.subscriptionId;
              }
              if (subscription.testId) {
                this.testId = subscription.testId;
              }
              if (subscription.testModeId) {
                this.testModeId = parseInt(subscription.testModeId);
              }
              if (subscription.lastQuestionVisited) {
                this.lastQuestionVisited = subscription.lastQuestionVisited;
              }
            });
            this.testInterfaceConfig = new ArrayContainer;
            this.testInterfaceConfig.subscriptionId = this.subscriptionId;
            answers.a.subscriptionId = this.subscriptionId;
            if (1 == answers.a.isDemo) {
              answers.a.qbankId = this.subscriptionId;
            }
            data = this.authUtilityService.getCookie("uw_test_config");
            if (null != data && "" != data) {
              data = JSON.parse(data);
              this.testInterfaceConfig.returnUrl = data.returnUrl;
              this.testInterfaceConfig.returnPage = data.returnPage;
              this.questionIndexes = data.questionIndexes ? data.questionIndexes : null;
              this.allottedTimeTypeId = data.allottedTimeTypeId;
              this.testId = data.testId;
            }
            this.commonService.getClientConfig(this.subscriptionId).subscribe((clientConfig) => {
              this.clientConfig = clientConfig;
              if (this.questionIndexes) {
                this.getTestByQuestionIndexes();
              } else {
                this.getTest();
              }
              this.getPreferences();
            }, (e) => {
              this.handleError(e);
            });
          }
          getTest() {
            this.testInterfaceContractImpl.getTest(this.testId, this.allottedTimeTypeId, null, null).pipe(Object(pkg.a)(() => {
            })).subscribe((canCreateDiscussions) => {
              this.testInfo = canCreateDiscussions;
              this.testInfo.deckList.forEach((p) => {
                return p.subscriptionId = answers.a.subscriptionId;
              });
              this.flashcardContractImpl.deckListFetched(this.testInfo.deckList);
              this.testInfo.testModeId = this.testModeId;
              if (0 == this.testInfo.testId) {
                this.testInfo.testModeId = node.i.search;
              }
              if (this.testModeId == node.i.review) {
                this.testInfo.lastQuestionVisited = this.lastQuestionVisited;
              }
              this.testInterfaceConfig.editTestMode = !this.clientConfig.isSim && !this.testInfo.isSim;
            }, (e) => {
              this.handleError(e);
            });
          }
          getTestByQuestionIndexes() {
            this.testInterfaceContractImpl.getTestByQuestionIndexes(this.testId, this.clientConfig.qBankId, this.questionIndexes).subscribe((canCreateDiscussions) => {
              this.testInfo = canCreateDiscussions;
              this.testInfo.deckList.forEach((p) => {
                return p.subscriptionId = answers.a.subscriptionId;
              });
              this.flashcardContractImpl.deckListFetched(this.testInfo.deckList);
              this.testInfo.lastQuestionVisited = this.lastQuestionVisited;
              this.testInfo.testModeId = this.testModeId;
              if (0 == this.testInfo.testId) {
                this.testInfo.testModeId = node.i.search;
                this.testQuestionIndexesForSearch = JSON.parse(sessionStorage.getItem("testQuestionIndexes") || "[]");
                if (this.testInfo && this.testInfo.questionList && this.testInfo.questionList.length > 0) {
                  this.initializeEntireTestQuestionList();
                }
              }
              this.testInterfaceConfig.editTestMode = !this.clientConfig.isSim && !this.testInfo.isSim;
            }, (e) => {
              this.handleError(e);
            });
          }
          initializeEntireTestQuestionList() {
            this.testQuestionIndexesForSearch.map((canCreateDiscussions) => {
              return canCreateDiscussions.qIndex;
            }).forEach((preview, offset) => {
              let i = this.testInfo.questionList.findIndex((request) => {
                return request.questionIndex == preview;
              });
              let selection = this.testQuestionIndexesForSearch.find((request) => {
                return request.qIndex == preview;
              });
              if (i > -1) {
                this.testInfo.questionList[i].sequenceId = offset + 1;
                this.testInfo.questionList[i].sequenceIdForDisplay = selection ? selection.sId : offset + 1;
                this.testInfo.questionList[i].serviceCallRequiredForData = false;
              } else {
                let data = {};
                data.questionIndex = preview;
                data.questionId = 0;
                data.sequenceId = offset + 1;
                data.sequenceIdForDisplay = selection ? selection.sId : offset + 1;
                data.questionText = "";
                data.notes = null;
                data.serviceCallRequiredForData = true;
                this.testInfo.questionList.splice(offset, 0, data);
              }
            });
          }
          getPreferences() {
            this.testInterfaceContractImpl.getUserPreferences().subscribe((userPreferences) => {
              this.userPreferences = null;
              this.userPreferences = userPreferences;
              this.testInterfaceConfig.theme = this.userPreferences.jsonSettings.testPreferences.theme;
              this.testInterfaceConfig.availableThemesAndColorModes = new Map([[options.o.nbme, [options.f.Light, options.f.Dark, options.f.Sepia]]]);
              this.testInterfaceConfig.themeNames = [];
              this.testInterfaceConfig.themeNames.push("NBME");
              if (!(this.clientConfig.qBankId != options.h.comlex1 && this.clientConfig.qBankId != options.h.comlex2 && this.clientConfig.qBankId != options.h.opp_omt && this.clientConfig.qBankId != options.h.opp_omt2)) {
                this.testInterfaceConfig.themeNames.push("NBOME");
                this.testInterfaceConfig.availableThemesAndColorModes.set(options.o.nbome, [options.f.Light, options.f.Dark, options.f.Sepia]);
              }
              this.testInterfaceConfig.themeNames.push("UWorld");
              this.testInterfaceConfig.availableThemesAndColorModes.set(options.o.uworld, [options.f.Light, options.f.Grey, options.f.Dark, options.f.Sepia]);
              this.testInterfaceConfig.vocabulary = false;
              this.testInterfaceConfig.notes = true;
              this.testInterfaceConfig.calculator = true;
              this.testInterfaceConfig.scientificCalculator = false;
              this.testInterfaceConfig.flashcards = true;
              this.testInterfaceConfig.myNoteBook = !this.clientConfig.isSim;
              this.testInterfaceConfig.flagReview = true;
              this.testInterfaceConfig.strikethrough = true;
              this.testInterfaceConfig.smartContextMenu = true;
              this.testInterfaceConfig.caliper = false;
              this.testInterfaceConfig.highlight = true;
              if (this.clientConfig.qBankId != options.h.opp_omt && this.clientConfig.qBankId != options.h.opp_omt2) {
                this.testInterfaceConfig.labValues = true;
              }
              this.testInterfaceConfig.reverseColor = true;
              this.testInterfaceConfig.textZoom = true;
              this.testInterfaceConfig.platform = options.g.B2C;
              this.testInterfaceConfig.docking = true;
              this.testInterfaceConfig.suspendTestAtExpirationDate = true;
            }, (e) => {
              this.handleError(e);
            });
          }
        }
        return MTLLoader.\u0275fac = function(canCreateDiscussions) {
          return new (canCreateDiscussions || MTLLoader)(self.Sb(rc_epoch), self.Sb(Model), self.Sb(categoriesTitleElement), self.Sb(doc.a), self.Sb(q.a), self.Sb(m2.a), self.Sb(ts.b), self.Sb(A.a), self.Sb(m2.c));
        }, MTLLoader.\u0275cmp = self.Mb({
          type : MTLLoader,
          selectors : [["usmle-test-interface"]],
          features : [self.zb],
          decls : 1,
          vars : 8,
          consts : [[3, "testInterfaceContractImpl", "testInterfaceUsmleContractImpl", "testInterfaceConfig", "flashcardContractImpl", "notebookContractImpl", "testInfo", "userPreferences", "clientConfig"]],
          template : function(elem, options) {
            if (1 & elem) {
              self.Tb(0, "testinterface-usmle-mainlayout", 0);
            }
            if (2 & elem) {
              self.sc("testInterfaceContractImpl", options.testInterfaceContractImpl)("testInterfaceUsmleContractImpl", options.testInterfaceUsmleContractImpl)("testInterfaceConfig", options.testInterfaceConfig)("flashcardContractImpl", options.flashcardContractImpl)("notebookContractImpl", options.notebookContractImpl)("testInfo", options.testInfo)("userPreferences", options.userPreferences)("clientConfig", options.clientConfig);
            }
          },
          directives : [CustomDirective],
          encapsulation : 2
        }), MTLLoader;
      })()
    }];
    let Zn = (() => {
      class undefined {
      }
      return undefined.\u0275mod = self.Qb({
        type : undefined
      }), undefined.\u0275inj = self.Pb({
        factory : function(apiKey) {
          return new (apiKey || undefined);
        },
        imports : [[m2.f.forChild(button2Component)], m2.f]
      }), undefined;
    })();
    var ThoughtCollection = require("WXZZ");
    var shapePath = require("yplj");
    var originalB = require("Cd2c");
    var hpost = require("gcUQ");
    var hmVals = require("k8N0");
    var chromo = require("A7yd");
    var super$0 = require("3Uyd");
    var requestHelpers = require("jdnZ");
    var nest = require("lQ7A");
    var fd = require("mFH5");
    var ff00cc = require("nKqi");
    var domFixtures = require("KZIX");
    var nextkeymap = require("Meci");
    var curves = require("oqI+");
    var radio_runway_names = require("iAde");
    var uvRect = require("Y2X+");
    var gun_get = require("W1gw");
    var gs = require("R7+U");
    var objct = require("29Wa");
    var clonedI = require("+Tre");
    var ms = require("bFHC");
    var pa = require("S17y");
    var defaultTagAttributes = require("f3iV");
    let ks = (() => {
      class undefined {
      }
      return undefined.\u0275mod = self.Qb({
        type : undefined
      }), undefined.\u0275inj = self.Pb({
        factory : function(apiKey) {
          return new (apiKey || undefined);
        },
        imports : [[props.c, hpost.d, morphNormal.c, originalB.c, fd.l, hmVals.b, normalizedMatrix.b, nest.f, chromo.b, super$0.a, requestHelpers.a, ts.f, obj.k, obj.A, ff00cc.b, domFixtures.g, new_opts.b, nextkeymap.d, curves.g, h.p, radio_runway_names.c, uvRect.b, gun_get.c, gs.b, fd.o, objct.e, originalB.c, obj.A, M.c, tParentMatrix.c, clonedI.b, ms.b, pa.e, defaultTagAttributes.a], hpost.d, morphNormal.c, originalB.c, fd.l, hmVals.b, normalizedMatrix.b, nest.f, chromo.b, super$0.a, requestHelpers.a, 
        ts.f, obj.k, obj.A, ff00cc.b, domFixtures.g, new_opts.b, nextkeymap.d, curves.g, h.p, radio_runway_names.c, uvRect.b, gun_get.c, gs.b, fd.o, objct.e, originalB.c, obj.A, M.c, tParentMatrix.c, clonedI.b, ms.b, pa.e, defaultTagAttributes.a]
      }), undefined;
    })();
    var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_sprite_build___default = require("KGU2");
    let Is = (() => {
      class undefined {
      }
      return undefined.\u0275mod = self.Qb({
        type : undefined
      }), undefined.\u0275inj = self.Pb({
        factory : function(apiKey) {
          return new (apiKey || undefined);
        },
        providers : [],
        imports : [[props.c, ks, __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_sprite_build___default.a]]
      }), undefined;
    })();
    let xs = (() => {
      class undefined {
      }
      return undefined.\u0275mod = self.Qb({
        type : undefined
      }), undefined.\u0275inj = self.Pb({
        factory : function(apiKey) {
          return new (apiKey || undefined);
        },
        providers : [],
        imports : [[props.c, Zn, shapePath.c, ThoughtCollection.NotebookModule, Is]]
      }), undefined;
    })();
  },
  jSSt : function(sometotal, value, i) {
    i.d(value, "a", function() {
      return c;
    });
    var self = i("D57K");
    var util = i("EM62");
    var b = i("OZ4H");
    var x = i("grJQ");
    var a = i("e9Qz");
    let c = (() => {
      class FormulaEditor {
        constructor(mathDialog, equation, context) {
          this.dialog = mathDialog;
          this.keyboardShortcutsObj = equation;
          this.dockingService = context;
          this._isSectionReviewOpen = false;
        }
        openDialog(data) {
          return Object(self.a)(this, void 0, void 0, function*() {
            if (this.dialog.openDialogs.some((timeline_mode) => {
              return "review-dialog-container" == timeline_mode.id;
            })) {
              return;
            }
            if (!data.id) {
              data.id = "review-dialog-container";
            }
            const that = yield i.e(16).then(i.bind(null, "YKCN"));
            this.dialogRef = this.dialog.open(that.DialogReviewModule.getComponent(), data);
            this.dialogRef.afterOpened().subscribe((canCreateDiscussions) => {
              this.dockingService.onQuestionMarkToggle();
              $("#review-dialog-container").closest(".cdk-global-overlay-wrapper").css("z-index", 499);
            });
            this.dialogRef.afterClosed().subscribe((canCreateDiscussions) => {
              this.dockingService.onQuestionMarkToggle();
            });
          });
        }
        initializeKeyboardShortcuts() {
          this.keyboardShortcutsObj._shortcutSettings.onReviewEndSection = true;
          this.keyboardShortcutsObj._shortcutSettings.onReviewIncompleteQuestions = true;
          this.keyboardShortcutsObj._shortcutSettings.onReviewMarkedQuestions = true;
          this.keyboardShortcutsObj._shortcutSettings.onReviewAllQuestions = true;
          this.keyboardShortcutsObj._shortcutSettings.onFeedbackOpen = true;
        }
        onKeyDown(keystroke) {
          this.keyboardShortcutsObj.onKeyDown(keystroke);
        }
      }
      return FormulaEditor.\u0275fac = function(boardManager) {
        return new (boardManager || FormulaEditor)(util.cc(b.b), util.cc(x.a), util.cc(a.a));
      }, FormulaEditor.\u0275prov = util.Ob({
        token : FormulaEditor,
        factory : FormulaEditor.\u0275fac,
        providedIn : "root"
      }), FormulaEditor;
    })();
  },
  oCy6 : function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return d;
    });
    var __WEBPACK_LABELED_MODULE__3 = __webpack_require__("ZTXN");
    var noise = __webpack_require__("dBte");
    var assert = __webpack_require__("EM62");
    var event = __webpack_require__("AA3q");
    var feedback = __webpack_require__("ee9o");
    var c = __webpack_require__("OZ4H");
    let d = (() => {
      class GlobalEventHandler {
        constructor(eventName, handler, e) {
          this.sharedService = eventName;
          this.dialogExhibitsService = handler;
          this.dialog = e;
          this._onExhibitSizeChange = new __WEBPACK_LABELED_MODULE__3.a;
          this.storedExhibits = new Map;
        }
        handleExhibits() {
          let e = document.getElementById("exhibit");
          if (null !== e) {
            let expRecords = e.href.split("/");
            let length = expRecords[expRecords.length - 1];
            if (length && /^[0-9,]*$/.test(length)) {
              let removedRelations = this;
              e.href = "javascript:void(0)";
              e.addEventListener("click", (event) => {
                event.stopPropagation();
                event.overrideDeselect = true;
                removedRelations.loadExhibitsDialogByExhibitIds(length);
              });
            }
          }
          let embedElement = document.getElementById("questionText");
          let headerAndIconDir = Array.from(embedElement.getElementsByTagName("a"));
          let path_el = document.getElementById("explanation");
          let imageDataArr = Array.from(path_el.getElementsByTagName("a"));
          let keywordResults = headerAndIconDir.concat(imageDataArr);
          for (let i = 0; i < keywordResults.length; i++) {
            let e = keywordResults[i];
            if (e.href.includes("LN_") || e.name.includes("LN_")) {
              continue;
            }
            if (e.href.includes("javascript:void(0)")) {
              continue;
            }
            let expRecords = e.href.split("/");
            let length = expRecords[expRecords.length - 1];
            if (length && /^[0-9,]*$/.test(length)) {
              let removedRelations = this;
              e.href = "javascript:void(0)";
              e.addEventListener("click", function(canCreateDiscussions) {
                canCreateDiscussions.overrideDeselect = true;
                removedRelations.loadExhibitsDialogByExhibitIds(length);
              });
            }
          }
        }
        handleNbomeExhibits() {
          let embedElement = document.getElementById("questionText");
          let r = Array.from(embedElement.getElementsByTagName("a"));
          let path_el = document.getElementById("explanation");
          let n = Array.from(path_el.getElementsByTagName("a"));
          let Y = (r.concat(n), []);
          for (let i = 0; i < r.length; i++) {
            let bug = r[i];
            if (bug.href.includes("LN_") || bug.name.includes("LN_")) {
              continue;
            }
            if (bug.href.includes("javascript:void(0)")) {
              continue;
            }
            let expRecords = bug.href.split("/");
            let n = expRecords[expRecords.length - 1];
            if (!(n.length < 1 || !/^[0-9,]*$/.test(n))) {
              bug.href = "javascript:void(0)";
              bug.classList.add("nbome-Exhibits-Text");
              Y = Y.concat(n.split(",").map(Number));
            }
          }
          if (Y.length > 0) {
            let openLoginScreenBtn = document.getElementById("viewQuestionExhibits");
            if (null !== openLoginScreenBtn) {
              let t = this;
              openLoginScreenBtn.addEventListener("click", (event) => {
                event.stopPropagation();
                event.overrideDeselect = true;
                t.loadExhibitsDialogByExhibitIds(Y.join(","));
              });
            }
          }
          for (let i = 0; i < n.length; i++) {
            let e = n[i];
            if (e.href.includes("LN_") || e.name.includes("LN_")) {
              continue;
            }
            if (e.href.includes("javascript:void(0)")) {
              continue;
            }
            let expRecords = e.href.split("/");
            let val = expRecords[expRecords.length - 1];
            if (val.length < 1 || !/^[0-9,]*$/.test(val)) {
              continue;
            }
            let QuickBase = this;
            e.href = "javascript:void(0)";
            e.addEventListener("click", function(canCreateDiscussions) {
              canCreateDiscussions.overrideDeselect = true;
              QuickBase.loadExhibitsDialogByExhibitIds(val);
            });
          }
        }
        loadExhibitsDialogByExhibitIds(e) {
          if (e.split(",").some((start) => {
            return !this.storedExhibits.has(parseInt(start));
          })) {
            this.sharedService._testInterfaceContractImpl.getExhibits(e).subscribe((wrappersTemplates) => {
              wrappersTemplates.forEach((_bug) => {
                return this.storedExhibits.set(_bug.id, _bug);
              });
              if (wrappersTemplates) {
                this.openExhibitsDialogByExhibitIds(e);
              }
            });
          } else {
            this.openExhibitsDialogByExhibitIds(e);
          }
        }
        openExhibitsDialogByExhibitIds(options) {
          let result = [];
          options.split(",").map(Number).forEach((cssModel) => {
            return result.push(this.storedExhibits.get(cssModel));
          });
          this.openExhibitsDialog(result);
        }
        openExhibitsDialog(options, rationale = "") {
          let customClass = ["exhibits-dialog-container"];
          if (this.sharedService._userPreferences.jsonSettings.testPreferences.theme == noise.o.cpa) {
            customClass.push("cpa-exhibit-dialog-container-" + options.map((timeline_mode) => {
              return timeline_mode.id;
            }).join("-"));
          }
          if (this.sharedService._userPreferences.jsonSettings.testPreferences.theme == noise.o.uworld) {
            customClass.push("uworld-exhibits-dialog-container");
          }
          let commandName = {
            id : "exhibit-" + options.map((timeline_mode) => {
              return timeline_mode.id;
            }).join("-"),
            panelClass : customClass,
            hasBackdrop : false,
            data : {
              exhibits : options,
              optionalTitle : rationale
            }
          };
          this.dialogExhibitsService.openDialog(commandName);
        }
        closeAllExhibits() {
          this.dialog.openDialogs.forEach((v) => {
            if (v.id.startsWith("exhibit")) {
              v.close();
            }
          });
        }
        onExhibitSizeChange(e) {
          this._onExhibitSizeChange.next(e);
        }
      }
      return GlobalEventHandler.\u0275fac = function(canCreateDiscussions) {
        return new (canCreateDiscussions || GlobalEventHandler)(assert.cc(event.a), assert.cc(feedback.a), assert.cc(c.b));
      }, GlobalEventHandler.\u0275prov = assert.Ob({
        token : GlobalEventHandler,
        factory : GlobalEventHandler.\u0275fac,
        providedIn : "root"
      }), GlobalEventHandler;
    })();
  },
  pZsO : function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return r;
    });
    var __WEBPACK_LABELED_MODULE__3 = __webpack_require__("ZTXN");
    var assert = __webpack_require__("EM62");
    var event = __webpack_require__("AA3q");
    let r = (() => {
      class BasicMDP {
        constructor(options) {
          this.sharedService = options;
          this._onThemeChange = new __WEBPACK_LABELED_MODULE__3.a;
        }
        onThemeChange(e) {
          this.sharedService._userPreferences.jsonSettings.testPreferences.theme = e;
          this._onThemeChange.next(e);
        }
      }
      return BasicMDP.\u0275fac = function(boardManager) {
        return new (boardManager || BasicMDP)(assert.cc(event.a));
      }, BasicMDP.\u0275prov = assert.Ob({
        token : BasicMDP,
        factory : BasicMDP.\u0275fac,
        providedIn : "root"
      }), BasicMDP;
    })();
  },
  qCjJ : function(sometotal, value, i) {
    i.d(value, "a", function() {
      return d;
    });
    var self = i("D57K");
    var b = i("dBte");
    var util = i("EM62");
    var a = i("OZ4H");
    var x = i("AA3q");
    var val = i("e9Qz");
    let d = (() => {
      class FormulaEditor {
        constructor(mathDialog, equation, context) {
          this.dialog = mathDialog;
          this.sharedService = equation;
          this.dockingService = context;
          this.dialogId = "notes-dialog-container";
          this.dockingService.dialogServices.set(b.b.notes, this);
        }
        get isDocked() {
          return this.sharedService._userPreferences.jsonSettings.testPreferences.dockedElements.notes;
        }
        openDialog(data) {
          return Object(self.a)(this, void 0, void 0, function*() {
            if (this.dialog.openDialogs.some((timeline_mode) => {
              return "notes-dialog-container" == timeline_mode.id;
            })) {
              return void $("#notes-dialog-container").closest(".cdk-global-overlay-wrapper").css("z-index", ++this.sharedService.zIndexForDialog);
            }
            if (!data.id) {
              data.id = "notes-dialog-container";
            }
            const that = yield i.e(15).then(i.bind(null, "2yZh"));
            this.dialogRef = this.dialog.open(that.DialogNotesModule.getComponent(), data);
            if (this.sharedService._toBeDocked == b.b.notes) {
              this.addDockingClassToDialogWrapperBeforeOpening(this.dialogRef);
            }
            this.dialogRef.afterOpened().subscribe((canCreateDiscussions) => {
              if (this.sharedService._toBeDocked == b.b.notes) {
                this.dockingService.dockDialog(b.b.notes);
              }
              $("#notes-dialog-container").closest(".cdk-global-overlay-wrapper").css("z-index", ++this.sharedService.zIndexForDialog);
              $("#notes-dialog-container").closest(".cdk-global-overlay-wrapper").addClass("z-index-manipulated");
            });
            this.dialogRef.afterClosed().subscribe((canCreateDiscussions) => {
              if (this.isDocked) {
                this.dockingService.openDialogToBeDocked();
              }
            });
            this.dialogRef.beforeClosed().subscribe((canCreateDiscussions) => {
              if (!this.isDocked) {
                this.saveDialogPositionAndSize();
              }
            });
          });
        }
        addDockingClassToDialogWrapperBeforeOpening(mathDialog) {
          if (mathDialog._overlayRef.overlayElement) {
            mathDialog._overlayRef.overlayElement.parentElement.className += " docked-dialog";
            if (this.sharedService._currentQuestion.isMarked) {
              mathDialog._overlayRef.overlayElement.parentElement.className += " marked-question";
            }
            mathDialog._overlayRef.overlayElement.parentElement.style.width = this.dockingService.dockedDialogWidth + "px";
          }
        }
        saveDialogPositionAndSizeBeforeDocking() {
          if (!this.isDocked) {
            this.saveDialogPositionAndSize();
          }
        }
        setDialogPositionAndSizeAfterUndock() {
          setTimeout(() => {
            let self = this.dialogRef.componentInstance.getDialogResizeDirective();
            if (self && this.height && this.width && this.height > 0 && this.width > 0) {
              self.height = this.height;
              self.width = this.width;
              self.updateSize();
              if (this.position_x && this.position_y) {
                self.position.x = this.position_x;
                self.position.y = this.position_y;
                self.updateDialogPosition();
              }
            }
          }, 0);
        }
        saveDialogPositionAndSize() {
          setTimeout(() => {
            let aabb = this.dialogRef.componentInstance.getDialogResizeDirective();
            if (aabb) {
              this.width = aabb.width;
              this.height = aabb.height;
              this.position_x = aabb.position.x;
              this.position_y = aabb.position.y;
            }
          }, 0);
        }
        resetDialogDimensions() {
          this.width = 0;
          this.height = 0;
          this.position_x = 0;
          this.position_y = 0;
        }
      }
      return FormulaEditor.\u0275fac = function(canCreateDiscussions) {
        return new (canCreateDiscussions || FormulaEditor)(util.cc(a.b), util.cc(x.a), util.cc(val.a));
      }, FormulaEditor.\u0275prov = util.Ob({
        token : FormulaEditor,
        factory : FormulaEditor.\u0275fac,
        providedIn : "root"
      }), FormulaEditor;
    })();
  }
}]);
