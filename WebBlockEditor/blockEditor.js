function plugins_quorum_WebEditor_BlockEditor_() {
    this.GetTextForIDE$quorum_text = function(containerID) {
        let container = document.getElementById(containerID);
        if (container.dataset.codeForIde) {
            const data = JSON.parse(container.dataset.codeForIde);
            for (let i = 0; i < data.length; i++) {
              const fileObj = data[i];
              console.count("fileObj");
              const fileName = fileObj.file;
              const fileText = fileObj.data;
              return fileText;
            }
        }
        return "";
    }
    this.GetPaletteFileName$quorum_text = function(containerID) {
        let container = document.getElementById(containerID);
        if (container.dataset.paletteForIde) {
            return container.dataset.paletteForIde;
        }
        return "";
    }

    this.RunGame = function() {
        blockEditorRunCode('QuorumUIOutput','QuorumUIContainer');
    };
    this.StopGame = function() {
        window.BLOCK_EDITOR.BlockEditorStop();
    };

    this.UpdateTogglePaletteButton$quorum_boolean = function(status) {
        let hidePaletteContainer = document.getElementById("HidePaletteContainer");
        if (hidePaletteContainer != null) {
          if(status) {
            hidePaletteContainer.innerHTML = "Hide Palette";
          } else {
            hidePaletteContainer.innerHTML = "Show Palette";
          }
        }
    };
}
function quorum_WebEditor_Behaviors_FocusPaletteBehavior_(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.FocusPaletteBehavior'];
this.Libraries_Interface_Behaviors_Behavior__ = null;
this.Update$quorum_number = function(seconds) {
     return this.Libraries_Interface_Behaviors_Behavior__.Update$quorum_number(seconds);
}
this.Compare$quorum_Libraries_Language_Object = function(object) {
return global_Object_Compare(this.prototype, object);
}
this.SetRunOnUpdate$quorum_boolean = function(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
this.Dispose = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
this.IsFinished = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
this.IsRunningOnUpdate = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
this.Equals$quorum_Libraries_Language_Object = function(object) {
return global_Object_Equals(this.prototype, object);
}
this.GetHashCode = function() {
return global_Object_GetHashCode(this.prototype, );
}
this.HasBeenRun = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
this.SetHasRunFlag$quorum_boolean = function(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
this.Run$quorum_Libraries_Interface_Events_BehaviorEvent = function (event) {
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
var editor = global_CheckCast(manager.GetGame(), "WebEditor.BlockEditor");
if (editor.IsPaletteShowing()) {
editor.SetFocus$quorum_Libraries_Interface_Item(editor.GetBlockPalette());
}
};
this.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_ = function() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
this.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_ = function(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
this.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_ = function() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
this.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_ = function(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};
if(parents == null) {
   this.Libraries_Interface_Behaviors_Behavior__ = new quorum_Libraries_Interface_Behaviors_Behavior_(false);
   this.Libraries_Interface_Behaviors_Behavior__.prototype = this;
}

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;

};

function quorum_WebEditor_Behaviors_FocusEditorBehavior_(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.FocusEditorBehavior'];
this.Libraries_Interface_Behaviors_Behavior__ = null;
this.Update$quorum_number = function(seconds) {
     return this.Libraries_Interface_Behaviors_Behavior__.Update$quorum_number(seconds);
}
this.Compare$quorum_Libraries_Language_Object = function(object) {
return global_Object_Compare(this.prototype, object);
}
this.SetRunOnUpdate$quorum_boolean = function(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
this.Dispose = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
this.IsFinished = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
this.IsRunningOnUpdate = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
this.Equals$quorum_Libraries_Language_Object = function(object) {
return global_Object_Equals(this.prototype, object);
}
this.GetHashCode = function() {
return global_Object_GetHashCode(this.prototype, );
}
this.HasBeenRun = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
this.SetHasRunFlag$quorum_boolean = function(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
this.Run$quorum_Libraries_Interface_Events_BehaviorEvent = function (event) {
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
var editor = global_CheckCast(manager.GetGame(), "WebEditor.BlockEditor");
editor.SetFocus$quorum_Libraries_Interface_Item(editor.GetBlockEditor());
};
this.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_ = function() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
this.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_ = function(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
this.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_ = function() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
this.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_ = function(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};
if(parents == null) {
   this.Libraries_Interface_Behaviors_Behavior__ = new quorum_Libraries_Interface_Behaviors_Behavior_(false);
   this.Libraries_Interface_Behaviors_Behavior__.prototype = this;
}

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;

};

function quorum_WebEditor_CanvasResizeListener_(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Events.ResizeListener',  'WebEditor.CanvasResizeListener'];
this.Libraries_Interface_Events_ResizeListener__ = null;
this.Equals$quorum_Libraries_Language_Object = function(object) {
return global_Object_Equals(this.prototype, object);
}
this.GetHashCode = function() {
return global_Object_GetHashCode(this.prototype, );
}
this.Compare$quorum_Libraries_Language_Object = function(object) {
return global_Object_Compare(this.prototype, object);
}
this.SizeChanged$quorum_Libraries_Interface_Events_ResizeEvent = function (event) {
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
var editor = global_CheckCast(manager.GetGame(), "WebEditor.BlockEditor");
if (!editor.IsPaletteShowing()) {
return;
}
var width = event.GetWidth();
var height = event.GetHeight();
var mediaSize = this.prototype.MatchMediaQuery$quorum_integer(width);
if ((mediaSize != "")) {
this.prototype.ResizeControls$quorum_text(mediaSize);
}
};
this.ResizeControls$quorum_text = function (mediaSize) {
var palettePanel = this.Get_WebEditor_CanvasResizeListener__editorPanels_().Get$quorum_integer(0);
var blockPanel = this.Get_WebEditor_CanvasResizeListener__editorPanels_().Get$quorum_integer(1);
if ((mediaSize == this.Get_WebEditor_CanvasResizeListener__SM_())) {
palettePanel.SetPixelWidth$quorum_number(50 * 1.0);
}
else if( (mediaSize == this.Get_WebEditor_CanvasResizeListener__MD_())) {
palettePanel.SetPixelWidth$quorum_number(100 * 1.0);
}
else if( (mediaSize == this.Get_WebEditor_CanvasResizeListener__LG_())) {
palettePanel.SetPixelWidth$quorum_number(300 * 1.0);
}
else if( (mediaSize == this.Get_WebEditor_CanvasResizeListener__XL_())) {
palettePanel.SetPixelWidth$quorum_number(300 * 1.0);
}
else if( (mediaSize == this.Get_WebEditor_CanvasResizeListener__X2L_())) {
palettePanel.SetPixelWidth$quorum_number(350 * 1.0);
}
};
this.AddPanel$quorum_Libraries_Interface_Controls_Control = function (control) {
this.Get_WebEditor_CanvasResizeListener__editorPanels_().AddToEnd$quorum_Libraries_Language_Object(control);
};
this.MatchMediaQuery$quorum_integer = function (width) {
if ((width < this.Get_WebEditor_CanvasResizeListener__SMALL_())) {
return this.Get_WebEditor_CanvasResizeListener__SM_();
}
else if( (width < this.Get_WebEditor_CanvasResizeListener__MEDIUM_())) {
return this.Get_WebEditor_CanvasResizeListener__MD_();
}
else if( (width < this.Get_WebEditor_CanvasResizeListener__LARGE_())) {
return this.Get_WebEditor_CanvasResizeListener__LG_();
}
else if( (width < this.Get_WebEditor_CanvasResizeListener__X_LARGE_())) {
return this.Get_WebEditor_CanvasResizeListener__XL_();
}
else { 
return this.Get_WebEditor_CanvasResizeListener__X2L_();
}
return "";
};
this.Get_WebEditor_CanvasResizeListener__X2_LARGE_ = function() {
   return this.X2_LARGE;
};
this.Set_WebEditor_CanvasResizeListener__X2_LARGE_ = function(value) {
   this.X2_LARGE = value;
};
this.Get_WebEditor_CanvasResizeListener__LARGE_ = function() {
   return this.LARGE;
};
this.Set_WebEditor_CanvasResizeListener__LARGE_ = function(value) {
   this.LARGE = value;
};
this.Get_WebEditor_CanvasResizeListener__SMALL_ = function() {
   return this.SMALL;
};
this.Set_WebEditor_CanvasResizeListener__SMALL_ = function(value) {
   this.SMALL = value;
};
this.Get_WebEditor_CanvasResizeListener__MEDIUM_ = function() {
   return this.MEDIUM;
};
this.Set_WebEditor_CanvasResizeListener__MEDIUM_ = function(value) {
   this.MEDIUM = value;
};
this.Get_WebEditor_CanvasResizeListener__SM_ = function() {
   return this.SM;
};
this.Set_WebEditor_CanvasResizeListener__SM_ = function(value) {
   this.SM = value;
};
this.Get_WebEditor_CanvasResizeListener__X_LARGE_ = function() {
   return this.X_LARGE;
};
this.Set_WebEditor_CanvasResizeListener__X_LARGE_ = function(value) {
   this.X_LARGE = value;
};
this.Get_WebEditor_CanvasResizeListener__X2L_ = function() {
   return this.X2L;
};
this.Set_WebEditor_CanvasResizeListener__X2L_ = function(value) {
   this.X2L = value;
};
this.Get_WebEditor_CanvasResizeListener__editorPanels_ = function() {
   return this.editorPanels;
};
this.Set_WebEditor_CanvasResizeListener__editorPanels_ = function(value) {
   this.editorPanels = value;
};
this.Get_WebEditor_CanvasResizeListener__MD_ = function() {
   return this.MD;
};
this.Set_WebEditor_CanvasResizeListener__MD_ = function(value) {
   this.MD = value;
};
this.Get_WebEditor_CanvasResizeListener__LG_ = function() {
   return this.LG;
};
this.Set_WebEditor_CanvasResizeListener__LG_ = function(value) {
   this.LG = value;
};
this.Get_WebEditor_CanvasResizeListener__XL_ = function() {
   return this.XL;
};
this.Set_WebEditor_CanvasResizeListener__XL_ = function(value) {
   this.XL = value;
};
if(parents == null) {
   this.Libraries_Interface_Events_ResizeListener__ = new quorum_Libraries_Interface_Events_ResizeListener_(false);
   this.Libraries_Interface_Events_ResizeListener__.prototype = this;
}
this.SMALL = 640;
this.SM = "SM";
this.MEDIUM = 768;
this.MD = "MD";
this.LARGE = 1024;
this.LG = "LG";
this.X_LARGE = 1280;
this.XL = "XL";
this.X2_LARGE = 1536;
this.X2L = "X2L";
this.editorPanels = new quorum_Libraries_Containers_Array_();

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;

};

function quorum_WebEditor_Behaviors_StopGameBehavior_(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.StopGameBehavior'];
this.Libraries_Interface_Behaviors_Behavior__ = null;
this.Update$quorum_number = function(seconds) {
     return this.Libraries_Interface_Behaviors_Behavior__.Update$quorum_number(seconds);
}
this.Compare$quorum_Libraries_Language_Object = function(object) {
return global_Object_Compare(this.prototype, object);
}
this.SetRunOnUpdate$quorum_boolean = function(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
this.Dispose = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
this.IsFinished = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
this.IsRunningOnUpdate = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
this.Equals$quorum_Libraries_Language_Object = function(object) {
return global_Object_Equals(this.prototype, object);
}
this.GetHashCode = function() {
return global_Object_GetHashCode(this.prototype, );
}
this.HasBeenRun = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
this.SetHasRunFlag$quorum_boolean = function(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
this.Run$quorum_Libraries_Interface_Events_BehaviorEvent = function (event) {
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
var editor = global_CheckCast(manager.GetGame(), "WebEditor.BlockEditor");
editor.StopGame();
};
this.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_ = function() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
this.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_ = function(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
this.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_ = function() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
this.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_ = function(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};
if(parents == null) {
   this.Libraries_Interface_Behaviors_Behavior__ = new quorum_Libraries_Interface_Behaviors_Behavior_(false);
   this.Libraries_Interface_Behaviors_Behavior__.prototype = this;
}

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;

};

function quorum_WebEditor_Behaviors_ZoomBehavior_(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.ZoomBehavior'];
this.Libraries_Interface_Behaviors_Behavior__ = null;
this.Update$quorum_number = function(seconds) {
     return this.Libraries_Interface_Behaviors_Behavior__.Update$quorum_number(seconds);
}
this.Compare$quorum_Libraries_Language_Object = function(object) {
return global_Object_Compare(this.prototype, object);
}
this.SetRunOnUpdate$quorum_boolean = function(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
this.Dispose = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
this.IsFinished = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
this.IsRunningOnUpdate = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
this.Equals$quorum_Libraries_Language_Object = function(object) {
return global_Object_Equals(this.prototype, object);
}
this.GetHashCode = function() {
return global_Object_GetHashCode(this.prototype, );
}
this.HasBeenRun = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
this.SetHasRunFlag$quorum_boolean = function(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
this.SetToZoomIn = function () {
this.zoomIn = true;
};
this.SetToZoomOut = function () {
this.zoomIn = false;
};
this.Run$quorum_Libraries_Interface_Events_BehaviorEvent = function (event) {
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
var editor = global_CheckCast(manager.GetGame(), "WebEditor.BlockEditor");
if (this.Get_WebEditor_Behaviors_ZoomBehavior__zoomIn_()) {
editor.ScaleUp();
}
else { 
editor.ScaleDown();
}
};
this.Get_WebEditor_Behaviors_ZoomBehavior__zoomIn_ = function() {
   return this.zoomIn;
};
this.Set_WebEditor_Behaviors_ZoomBehavior__zoomIn_ = function(value) {
   this.zoomIn = value;
};
this.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_ = function() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
this.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_ = function(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
this.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_ = function() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
this.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_ = function(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};
if(parents == null) {
   this.Libraries_Interface_Behaviors_Behavior__ = new quorum_Libraries_Interface_Behaviors_Behavior_(false);
   this.Libraries_Interface_Behaviors_Behavior__.prototype = this;
}
this.zoomIn = true;

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;

};

function quorum_WebEditor_Behaviors_TogglePaletteBehavior_(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.TogglePaletteBehavior'];
this.Libraries_Interface_Behaviors_Behavior__ = null;
this.Update$quorum_number = function(seconds) {
     return this.Libraries_Interface_Behaviors_Behavior__.Update$quorum_number(seconds);
}
this.Compare$quorum_Libraries_Language_Object = function(object) {
return global_Object_Compare(this.prototype, object);
}
this.SetRunOnUpdate$quorum_boolean = function(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
this.Dispose = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
this.IsFinished = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
this.IsRunningOnUpdate = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
this.Equals$quorum_Libraries_Language_Object = function(object) {
return global_Object_Equals(this.prototype, object);
}
this.GetHashCode = function() {
return global_Object_GetHashCode(this.prototype, );
}
this.HasBeenRun = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
this.SetHasRunFlag$quorum_boolean = function(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
this.Run$quorum_Libraries_Interface_Events_BehaviorEvent = function (event) {
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
var editor = global_CheckCast(manager.GetGame(), "WebEditor.BlockEditor");
var status = editor.TogglePalette();
editor.UpdateTogglePaletteButton$quorum_boolean(status);
};
this.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_ = function() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
this.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_ = function(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
this.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_ = function() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
this.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_ = function(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};
if(parents == null) {
   this.Libraries_Interface_Behaviors_Behavior__ = new quorum_Libraries_Interface_Behaviors_Behavior_(false);
   this.Libraries_Interface_Behaviors_Behavior__.prototype = this;
}

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;

};

function quorum_Libraries_Interface_Controls_Blocks_BlockSelectionListener_(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Interface.Events.SelectionListener', 'Libraries.Language.Object',  'Libraries.Interface.Controls.Blocks.BlockSelectionListener'];
this.Libraries_Interface_Events_SelectionListener__ = null;
this.Equals$quorum_Libraries_Language_Object = function(object) {
return global_Object_Equals(this.prototype, object);
}
this.GetHashCode = function() {
return global_Object_GetHashCode(this.prototype, );
}
this.Compare$quorum_Libraries_Language_Object = function(object) {
return global_Object_Compare(this.prototype, object);
}
this.SelectionChanged$quorum_Libraries_Interface_Events_SelectionEvent = function (event) {
var selection = event.GetSelection();
if ((selection != null)) {
var blockSelection = global_CheckCast(selection, "Libraries.Interface.Selections.CodeEditorSelection");
var block = blockSelection.GetBlock();
if ((block != null)) {
}
}
};
if(parents == null) {
   this.Libraries_Interface_Events_SelectionListener__ = new quorum_Libraries_Interface_Events_SelectionListener_(false);
   this.Libraries_Interface_Events_SelectionListener__.prototype = this;
}

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;

};

function quorum_WebEditor_Behaviors_PalettePartitionDragBehavior_(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.PalettePartitionDragBehavior'];
this.Libraries_Interface_Behaviors_Behavior__ = null;
this.Update$quorum_number = function(seconds) {
     return this.Libraries_Interface_Behaviors_Behavior__.Update$quorum_number(seconds);
}
this.Compare$quorum_Libraries_Language_Object = function(object) {
return global_Object_Compare(this.prototype, object);
}
this.SetRunOnUpdate$quorum_boolean = function(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
this.Dispose = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
this.IsFinished = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
this.IsRunningOnUpdate = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
this.Equals$quorum_Libraries_Language_Object = function(object) {
return global_Object_Equals(this.prototype, object);
}
this.GetHashCode = function() {
return global_Object_GetHashCode(this.prototype, );
}
this.HasBeenRun = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
this.SetHasRunFlag$quorum_boolean = function(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
this.Run$quorum_Libraries_Interface_Events_BehaviorEvent = function (event) {
var dragEvent = event.GetDragAndDropEvent();
var editor = global_CheckCast(this.Get_WebEditor_Behaviors_PalettePartitionDragBehavior__manager_().GetGame(), "WebEditor.BlockEditor");
if (!editor.IsPaletteShowing()) {
return;
}
var set = event.GetInputSet();
if ((set.GetInputTrigger() == set.Get_Libraries_Game_InputSet__BEGIN_())) {
this.clickOffset = (dragEvent.GetStartX() - dragEvent.GetSource().GetGlobalX());
}
else if( (dragEvent.GetMovementX() != 0)) {
this.Get_WebEditor_Behaviors_PalettePartitionDragBehavior__panel_().SetPixelWidth$quorum_number(((dragEvent.GetX() - this.Get_WebEditor_Behaviors_PalettePartitionDragBehavior__clickOffset_()) / this.Get_WebEditor_Behaviors_PalettePartitionDragBehavior__panel_().GetInterfaceScale()));
this.Get_WebEditor_Behaviors_PalettePartitionDragBehavior__panel_().RequestLayout();
}
};
this.SetPanel$quorum_Libraries_Interface_Controls_Control = function (panel) {
this.panel = panel;
};
this.Get_WebEditor_Behaviors_PalettePartitionDragBehavior__panel_ = function() {
   return this.panel;
};
this.Set_WebEditor_Behaviors_PalettePartitionDragBehavior__panel_ = function(value) {
   this.panel = value;
};
this.Get_WebEditor_Behaviors_PalettePartitionDragBehavior__manager_ = function() {
   return this.manager;
};
this.Set_WebEditor_Behaviors_PalettePartitionDragBehavior__manager_ = function(value) {
   this.manager = value;
};
this.Get_WebEditor_Behaviors_PalettePartitionDragBehavior__clickOffset_ = function() {
   return this.clickOffset;
};
this.Set_WebEditor_Behaviors_PalettePartitionDragBehavior__clickOffset_ = function(value) {
   this.clickOffset = value;
};
this.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_ = function() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
this.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_ = function(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
this.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_ = function() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
this.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_ = function(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};
if(parents == null) {
   this.Libraries_Interface_Behaviors_Behavior__ = new quorum_Libraries_Interface_Behaviors_Behavior_(false);
   this.Libraries_Interface_Behaviors_Behavior__.prototype = this;
}
this.manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
this.clickOffset = 0;
this.panel = null;

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;

};

function quorum_WebEditor_Behaviors_RunGameBehavior_(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.RunGameBehavior'];
this.Libraries_Interface_Behaviors_Behavior__ = null;
this.Update$quorum_number = function(seconds) {
     return this.Libraries_Interface_Behaviors_Behavior__.Update$quorum_number(seconds);
}
this.Compare$quorum_Libraries_Language_Object = function(object) {
return global_Object_Compare(this.prototype, object);
}
this.SetRunOnUpdate$quorum_boolean = function(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
this.Dispose = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
this.IsFinished = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
this.IsRunningOnUpdate = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
this.Equals$quorum_Libraries_Language_Object = function(object) {
return global_Object_Equals(this.prototype, object);
}
this.GetHashCode = function() {
return global_Object_GetHashCode(this.prototype, );
}
this.HasBeenRun = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
this.SetHasRunFlag$quorum_boolean = function(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
this.Run$quorum_Libraries_Interface_Events_BehaviorEvent = function (event) {
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
var editor = global_CheckCast(manager.GetGame(), "WebEditor.BlockEditor");
editor.RunGame();
};
this.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_ = function() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
this.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_ = function(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
this.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_ = function() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
this.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_ = function(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};
if(parents == null) {
   this.Libraries_Interface_Behaviors_Behavior__ = new quorum_Libraries_Interface_Behaviors_Behavior_(false);
   this.Libraries_Interface_Behaviors_Behavior__.prototype = this;
}

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;

};
var OuTpUt_$tRiNg_ = "";

function quorum_WebEditor_BlockEditor_(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Interface.Events.TextChangeListener', 'Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior', 'Libraries.Game.Game',  'WebEditor.BlockEditor'];
this.Libraries_Interface_Events_TextChangeListener__ = null;
this.Libraries_Interface_Behaviors_Behavior__ = null;
this.Libraries_Game_Game__ = null;
this.IsWindowFocused = function() {
     return this.Libraries_Game_Game__.IsWindowFocused();
}
this.SaveScene$quorum_Libraries_System_File = function(file) {
     return this.Libraries_Game_Game__.SaveScene$quorum_Libraries_System_File(file);
}
this.ProcessScreenshots = function() {
     return this.Libraries_Game_Game__.ProcessScreenshots();
}
this.IsWindowMinimized = function() {
     return this.Libraries_Game_Game__.IsWindowMinimized();
}
this.SetVSync$quorum_boolean = function(vSync) {
     return this.Libraries_Game_Game__.SetVSync$quorum_boolean(vSync);
}
this.ResetDepthBuffer = function() {
     return this.Libraries_Game_Game__.ResetDepthBuffer();
}
this.FindItem2DByName$quorum_text = function(name) {
     return this.Libraries_Game_Game__.FindItem2DByName$quorum_text(name);
}
this.RemoveResizeListener$quorum_Libraries_Interface_Events_ResizeListener = function(listener) {
     return this.Libraries_Game_Game__.RemoveResizeListener$quorum_Libraries_Interface_Events_ResizeListener(listener);
}
this.GetInterfaceOptions = function() {
     return this.Libraries_Game_Game__.GetInterfaceOptions();
}
this.AddGestureListener$quorum_Libraries_Interface_Events_GestureListener = function(listener) {
     return this.Libraries_Game_Game__.AddGestureListener$quorum_Libraries_Interface_Events_GestureListener(listener);
}
this.RemoveMouseWheelListener$quorum_Libraries_Interface_Events_MouseWheelListener = function(listener) {
     return this.Libraries_Game_Game__.RemoveMouseWheelListener$quorum_Libraries_Interface_Events_MouseWheelListener(listener);
}
this.SetLayout$quorum_Libraries_Interface_Layouts_Layout = function(layout) {
     return this.Libraries_Game_Game__.SetLayout$quorum_Libraries_Interface_Layouts_Layout(layout);
}
this.RemoveControlActivationListener$quorum_Libraries_Interface_Events_ControlActivationListener = function(listener) {
     return this.Libraries_Game_Game__.RemoveControlActivationListener$quorum_Libraries_Interface_Events_ControlActivationListener(listener);
}
this.GetPointLights = function() {
     return this.Libraries_Game_Game__.GetPointLights();
}
this.RemoveKeyboardListener$quorum_Libraries_Interface_Events_KeyboardListener = function(listener) {
     return this.Libraries_Game_Game__.RemoveKeyboardListener$quorum_Libraries_Interface_Events_KeyboardListener(listener);
}
this.IsWindowMaximized = function() {
     return this.Libraries_Game_Game__.IsWindowMaximized();
}
this.AddLayer$quorum_integer$quorum_Libraries_Game_Layer = function(index, layer) {
     return this.Libraries_Game_Game__.AddLayer$quorum_integer$quorum_Libraries_Game_Layer(index, layer);
}
this.AddMouseListener$quorum_Libraries_Interface_Events_MouseListener = function(listener) {
     return this.Libraries_Game_Game__.AddMouseListener$quorum_Libraries_Interface_Events_MouseListener(listener);
}
this.AddTextInputListener$quorum_Libraries_Interface_Events_TextInputListener = function(listener) {
     return this.Libraries_Game_Game__.AddTextInputListener$quorum_Libraries_Interface_Events_TextInputListener(listener);
}
this.UpdateAll = function() {
     return this.Libraries_Game_Game__.UpdateAll();
}
this.RemoveLayer$quorum_integer = function(index) {
     return this.Libraries_Game_Game__.RemoveLayer$quorum_integer(index);
}
this.SetInterfaceScale$quorum_number = function(scale) {
     return this.Libraries_Game_Game__.SetInterfaceScale$quorum_number(scale);
}
this.IsFinished = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
this.SetLayer$quorum_integer$quorum_Libraries_Game_Layer = function(index, layer) {
     return this.Libraries_Game_Game__.SetLayer$quorum_integer$quorum_Libraries_Game_Layer(index, layer);
}
this.RemoveMouseListener$quorum_Libraries_Interface_Events_MouseListener = function(listener) {
     return this.Libraries_Game_Game__.RemoveMouseListener$quorum_Libraries_Interface_Events_MouseListener(listener);
}
this.GetSceneManager = function() {
     return this.Libraries_Game_Game__.GetSceneManager();
}
this.Screenshot$quorum_Libraries_Interface_Events_ScreenshotListener = function(callback) {
     return this.Libraries_Game_Game__.Screenshot$quorum_Libraries_Interface_Events_ScreenshotListener(callback);
}
this.AddCollisionListener$quorum_Libraries_Interface_Events_CollisionListener2D = function(listener) {
     return this.Libraries_Game_Game__.AddCollisionListener$quorum_Libraries_Interface_Events_CollisionListener2D(listener);
}
this.Screenshot$quorum_integer$quorum_integer$quorum_integer$quorum_integer$quorum_Libraries_Interface_Events_ScreenshotListener = function(x, y, width, height, callback) {
     return this.Libraries_Game_Game__.Screenshot$quorum_integer$quorum_integer$quorum_integer$quorum_integer$quorum_Libraries_Interface_Events_ScreenshotListener(x, y, width, height, callback);
}
this.AddMouseMovementListener$quorum_Libraries_Interface_Events_MouseMovementListener = function(listener) {
     return this.Libraries_Game_Game__.AddMouseMovementListener$quorum_Libraries_Interface_Events_MouseMovementListener(listener);
}
this.TestForCollisions$quorum_number = function(seconds) {
     return this.Libraries_Game_Game__.TestForCollisions$quorum_number(seconds);
}
this.GetFocus = function() {
     return this.Libraries_Game_Game__.GetFocus();
}
this.GetWebConfiguration = function() {
     return this.Libraries_Game_Game__.GetWebConfiguration();
}
this.Dispose = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
this.Remove$quorum_Libraries_Game_Graphics_PointLight = function(light) {
     return this.Libraries_Game_Game__.Remove$quorum_Libraries_Game_Graphics_PointLight(light);
}
this.GetShaderManager = function() {
     return this.Libraries_Game_Game__.GetShaderManager();
}
this.GetDesktopConfiguration = function() {
     return this.Libraries_Game_Game__.GetDesktopConfiguration();
}
this.RemoveMouseMovementListener$quorum_Libraries_Interface_Events_MouseMovementListener = function(listener) {
     return this.Libraries_Game_Game__.RemoveMouseMovementListener$quorum_Libraries_Interface_Events_MouseMovementListener(listener);
}
this.GetHashCode = function() {
return global_Object_GetHashCode(this.prototype, );
}
this.GetEditManager = function() {
     return this.Libraries_Game_Game__.GetEditManager();
}
this.GetFirstLetterNavigationTime = function() {
     return this.Libraries_Game_Game__.GetFirstLetterNavigationTime();
}
this.StartAndroidGame = function() {
     return this.Libraries_Game_Game__.StartAndroidGame();
}
this.SetScreenSize$quorum_integer$quorum_integer$quorum_boolean = function(width, height, adjustCameras) {
     return this.Libraries_Game_Game__.SetScreenSize$quorum_integer$quorum_integer$quorum_boolean(width, height, adjustCameras);
}
this.CompleteInitialSetup$quorum_Libraries_Game_Application = function(application) {
     return this.Libraries_Game_Game__.CompleteInitialSetup$quorum_Libraries_Game_Application(application);
}
this.GetFontManager = function() {
     return this.Libraries_Game_Game__.GetFontManager();
}
this.Remove$quorum_Libraries_Game_Graphics_DirectionalLight = function(light) {
     return this.Libraries_Game_Game__.Remove$quorum_Libraries_Game_Graphics_DirectionalLight(light);
}
this.AddFocusListener$quorum_Libraries_Interface_Events_FocusListener = function(listener) {
     return this.Libraries_Game_Game__.AddFocusListener$quorum_Libraries_Interface_Events_FocusListener(listener);
}
this.DrawAll = function() {
     return this.Libraries_Game_Game__.DrawAll();
}
this.GetCamera2D = function() {
     return this.Libraries_Game_Game__.GetCamera2D();
}
this.GetInterfaceScale = function() {
     return this.Libraries_Game_Game__.GetInterfaceScale();
}
this.SetSimulationThreshold2D$quorum_number = function(threshold) {
     return this.Libraries_Game_Game__.SetSimulationThreshold2D$quorum_number(threshold);
}
this.SaveScene = function() {
     return this.Libraries_Game_Game__.SaveScene();
}
this.Compare$quorum_Libraries_Language_Object = function(object) {
return global_Object_Compare(this.prototype, object);
}
this.GetDirectionalLight$quorum_integer = function(index) {
     return this.Libraries_Game_Game__.GetDirectionalLight$quorum_integer(index);
}
this.EnablePhysics2D$quorum_boolean = function(flag) {
     return this.Libraries_Game_Game__.EnablePhysics2D$quorum_boolean(flag);
}
this.SetAmbientLight$quorum_Libraries_Game_Graphics_AmbientLight = function(light) {
     return this.Libraries_Game_Game__.SetAmbientLight$quorum_Libraries_Game_Graphics_AmbientLight(light);
}
this.RemoveCollisionListener$quorum_Libraries_Interface_Events_CollisionListener2D = function(listener) {
     return this.Libraries_Game_Game__.RemoveCollisionListener$quorum_Libraries_Interface_Events_CollisionListener2D(listener);
}
this.SetCurrentLayer2D$quorum_Libraries_Game_Layer2D = function(layer) {
     return this.Libraries_Game_Game__.SetCurrentLayer2D$quorum_Libraries_Game_Layer2D(layer);
}
this.SetGameName$quorum_text = function(name) {
     return this.Libraries_Game_Game__.SetGameName$quorum_text(name);
}
this.GetAvailableResolutions = function() {
     return this.Libraries_Game_Game__.GetAvailableResolutions();
}
this.RemoveScreenshotListener$quorum_Libraries_Interface_Events_ScreenshotListener = function(listener) {
     return this.Libraries_Game_Game__.RemoveScreenshotListener$quorum_Libraries_Interface_Events_ScreenshotListener(listener);
}
this.SetGravity2D$quorum_Libraries_Compute_Vector2 = function(gravity) {
     return this.Libraries_Game_Game__.SetGravity2D$quorum_Libraries_Compute_Vector2(gravity);
}
this.RemoveGestureListener$quorum_Libraries_Interface_Events_GestureListener = function(listener) {
     return this.Libraries_Game_Game__.RemoveGestureListener$quorum_Libraries_Interface_Events_GestureListener(listener);
}
this.EnablePhysics3D$quorum_boolean = function(flag) {
     return this.Libraries_Game_Game__.EnablePhysics3D$quorum_boolean(flag);
}
this.AddInputTable$quorum_Libraries_Game_InputTable = function(table) {
     return this.Libraries_Game_Game__.AddInputTable$quorum_Libraries_Game_InputTable(table);
}
this.GetLayerIterator = function() {
     return this.Libraries_Game_Game__.GetLayerIterator();
}
this.UseDesktopResolution$quorum_boolean = function(adjustCameras) {
     return this.Libraries_Game_Game__.UseDesktopResolution$quorum_boolean(adjustCameras);
}
this.RemoveWindowFocusListener$quorum_Libraries_Interface_Events_WindowFocusListener = function(listener) {
     return this.Libraries_Game_Game__.RemoveWindowFocusListener$quorum_Libraries_Interface_Events_WindowFocusListener(listener);
}
this.Add$quorum_Libraries_Game_Graphics_DirectionalLight = function(light) {
     return this.Libraries_Game_Game__.Add$quorum_Libraries_Game_Graphics_DirectionalLight(light);
}
this.Screenshot = function() {
     return this.Libraries_Game_Game__.Screenshot();
}
this.GetPointLight$quorum_integer = function(index) {
     return this.Libraries_Game_Game__.GetPointLight$quorum_integer(index);
}
this.AddTextChangeListener$quorum_Libraries_Interface_Events_TextChangeListener = function(listener) {
     return this.Libraries_Game_Game__.AddTextChangeListener$quorum_Libraries_Interface_Events_TextChangeListener(listener);
}
this.GetScreenWidth = function() {
     return this.Libraries_Game_Game__.GetScreenWidth();
}
this.GetCamera3D = function() {
     return this.Libraries_Game_Game__.GetCamera3D();
}
this.RemoveTextChangeListener$quorum_Libraries_Interface_Events_TextChangeListener = function(listener) {
     return this.Libraries_Game_Game__.RemoveTextChangeListener$quorum_Libraries_Interface_Events_TextChangeListener(listener);
}
this.RemoveAmbientLight = function() {
     return this.Libraries_Game_Game__.RemoveAmbientLight();
}
this.SetWindowMinimized$quorum_boolean = function(minimized) {
     return this.Libraries_Game_Game__.SetWindowMinimized$quorum_boolean(minimized);
}
this.FindItem3DByName$quorum_text = function(name) {
     return this.Libraries_Game_Game__.FindItem3DByName$quorum_text(name);
}
this.RemoveTreeChangeListener$quorum_Libraries_Interface_Events_TreeChangeListener = function(listener) {
     return this.Libraries_Game_Game__.RemoveTreeChangeListener$quorum_Libraries_Interface_Events_TreeChangeListener(listener);
}
this.AddControlActivationListener$quorum_Libraries_Interface_Events_ControlActivationListener = function(listener) {
     return this.Libraries_Game_Game__.AddControlActivationListener$quorum_Libraries_Interface_Events_ControlActivationListener(listener);
}
this.SetApplicationIcon$quorum_Libraries_System_File = function(file) {
     return this.Libraries_Game_Game__.SetApplicationIcon$quorum_Libraries_System_File(file);
}
this.SetRunOnUpdate$quorum_boolean = function(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
this.SetScreenSize$quorum_integer$quorum_integer = function(width, height) {
     return this.Libraries_Game_Game__.SetScreenSize$quorum_integer$quorum_integer(width, height);
}
this.SetCamera3D$quorum_Libraries_Game_Graphics_Camera = function(cam) {
     return this.Libraries_Game_Game__.SetCamera3D$quorum_Libraries_Game_Graphics_Camera(cam);
}
this.RemoveCollisionListener$quorum_Libraries_Interface_Events_CollisionListener3D = function(listener) {
     return this.Libraries_Game_Game__.RemoveCollisionListener$quorum_Libraries_Interface_Events_CollisionListener3D(listener);
}
this.SetConfiguration$quorum_Libraries_Game_DesktopConfiguration = function(config) {
     return this.Libraries_Game_Game__.SetConfiguration$quorum_Libraries_Game_DesktopConfiguration(config);
}
this.AddLayer$quorum_Libraries_Game_Layer = function(layer) {
     return this.Libraries_Game_Game__.AddLayer$quorum_Libraries_Game_Layer(layer);
}
this.AddTouchListener$quorum_Libraries_Interface_Events_TouchListener = function(listener) {
     return this.Libraries_Game_Game__.AddTouchListener$quorum_Libraries_Interface_Events_TouchListener(listener);
}
this.HasBeenRun = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
this.SetDefaultInputTable$quorum_Libraries_Game_InputTable = function(table) {
     return this.Libraries_Game_Game__.SetDefaultInputTable$quorum_Libraries_Game_InputTable(table);
}
this.SetScreenResolution$quorum_Libraries_Game_ScreenResolution$quorum_boolean = function(resolution, adjustCameras) {
     return this.Libraries_Game_Game__.SetScreenResolution$quorum_Libraries_Game_ScreenResolution$quorum_boolean(resolution, adjustCameras);
}
this.SetSceneManager$quorum_Libraries_Game_Scenes_SceneManager = function(scene) {
     return this.Libraries_Game_Game__.SetSceneManager$quorum_Libraries_Game_Scenes_SceneManager(scene);
}
this.Exit = function() {
     return this.Libraries_Game_Game__.Exit();
}
this.LoadScene$quorum_Libraries_Game_Scenes_Scene = function(scene) {
     return this.Libraries_Game_Game__.LoadScene$quorum_Libraries_Game_Scenes_Scene(scene);
}
this.SetGravity3D$quorum_Libraries_Compute_Vector3 = function(gravity) {
     return this.Libraries_Game_Game__.SetGravity3D$quorum_Libraries_Compute_Vector3(gravity);
}
this.GetSecondsBetweenFrames = function() {
     return this.Libraries_Game_Game__.GetSecondsBetweenFrames();
}
this.RemoveLayer$quorum_Libraries_Game_Layer = function(layer) {
     return this.Libraries_Game_Game__.RemoveLayer$quorum_Libraries_Game_Layer(layer);
}
this.AddMenuChangeListener$quorum_Libraries_Interface_Events_MenuChangeListener = function(listener) {
     return this.Libraries_Game_Game__.AddMenuChangeListener$quorum_Libraries_Interface_Events_MenuChangeListener(listener);
}
this.ProcessInputEvents = function() {
     return this.Libraries_Game_Game__.ProcessInputEvents();
}
this.Remove$quorum_Libraries_Interface_Item3D = function(item) {
     return this.Libraries_Game_Game__.Remove$quorum_Libraries_Interface_Item3D(item);
}
this.SetFontManager$quorum_Libraries_Game_Graphics_Fonts_FontManager = function(fontManager) {
     return this.Libraries_Game_Game__.SetFontManager$quorum_Libraries_Game_Graphics_Fonts_FontManager(fontManager);
}
this.SetWindowMaximized$quorum_boolean = function(maximized) {
     return this.Libraries_Game_Game__.SetWindowMaximized$quorum_boolean(maximized);
}
this.Screenshot$quorum_integer$quorum_integer$quorum_integer$quorum_integer = function(x, y, width, height) {
     return this.Libraries_Game_Game__.Screenshot$quorum_integer$quorum_integer$quorum_integer$quorum_integer(x, y, width, height);
}
this.SetColorFilter$quorum_Libraries_Game_Graphics_Color = function(color) {
     return this.Libraries_Game_Game__.SetColorFilter$quorum_Libraries_Game_Graphics_Color(color);
}
this.SetScreenResolution$quorum_Libraries_Game_ScreenResolution = function(resolution) {
     return this.Libraries_Game_Game__.SetScreenResolution$quorum_Libraries_Game_ScreenResolution(resolution);
}
this.GetAmbientLight = function() {
     return this.Libraries_Game_Game__.GetAmbientLight();
}
this.SelectApplicationTypeNative = function() {
     return this.Libraries_Game_Game__.SelectApplicationTypeNative();
}
this.AddSelectionListener$quorum_Libraries_Interface_Events_SelectionListener = function(listener) {
     return this.Libraries_Game_Game__.AddSelectionListener$quorum_Libraries_Interface_Events_SelectionListener(listener);
}
this.AddMouseWheelListener$quorum_Libraries_Interface_Events_MouseWheelListener = function(listener) {
     return this.Libraries_Game_Game__.AddMouseWheelListener$quorum_Libraries_Interface_Events_MouseWheelListener(listener);
}
this.RemoveSelectionListener$quorum_Libraries_Interface_Events_SelectionListener = function(listener) {
     return this.Libraries_Game_Game__.RemoveSelectionListener$quorum_Libraries_Interface_Events_SelectionListener(listener);
}
this.SetGravity2D$quorum_number$quorum_number = function(gravityX, gravityY) {
     return this.Libraries_Game_Game__.SetGravity2D$quorum_number$quorum_number(gravityX, gravityY);
}
this.RemoveFocusListener$quorum_Libraries_Interface_Events_FocusListener = function(listener) {
     return this.Libraries_Game_Game__.RemoveFocusListener$quorum_Libraries_Interface_Events_FocusListener(listener);
}
this.RemoveTouchListener$quorum_Libraries_Interface_Events_TouchListener = function(listener) {
     return this.Libraries_Game_Game__.RemoveTouchListener$quorum_Libraries_Interface_Events_TouchListener(listener);
}
this.SetSkybox$quorum_Libraries_Game_Graphics_Skybox = function(skybox) {
     return this.Libraries_Game_Game__.SetSkybox$quorum_Libraries_Game_Graphics_Skybox(skybox);
}
this.GetFocusManager = function() {
     return this.Libraries_Game_Game__.GetFocusManager();
}
this.EnableResizing$quorum_boolean = function(resize) {
     return this.Libraries_Game_Game__.EnableResizing$quorum_boolean(resize);
}
this.Add$quorum_Libraries_Interface_Item2D = function(item) {
     return this.Libraries_Game_Game__.Add$quorum_Libraries_Interface_Item2D(item);
}
this.SetEditManager$quorum_Libraries_Interface_Undo_EditManager = function(edits) {
     return this.Libraries_Game_Game__.SetEditManager$quorum_Libraries_Interface_Undo_EditManager(edits);
}
this.InitializeLayers = function() {
     return this.Libraries_Game_Game__.InitializeLayers();
}
this.GetDefaultInputTable = function() {
     return this.Libraries_Game_Game__.GetDefaultInputTable();
}
this.SetInterfaceOptions$quorum_Libraries_Interface_Options_InterfaceOptions = function(options) {
     return this.Libraries_Game_Game__.SetInterfaceOptions$quorum_Libraries_Interface_Options_InterfaceOptions(options);
}
this.AddWindowFocusListener$quorum_Libraries_Interface_Events_WindowFocusListener = function(listener) {
     return this.Libraries_Game_Game__.AddWindowFocusListener$quorum_Libraries_Interface_Events_WindowFocusListener(listener);
}
this.RemoveTextInputListener$quorum_Libraries_Interface_Events_TextInputListener = function(listener) {
     return this.Libraries_Game_Game__.RemoveTextInputListener$quorum_Libraries_Interface_Events_TextInputListener(listener);
}
this.ClearScreen = function() {
     return this.Libraries_Game_Game__.ClearScreen();
}
this.GetDirectionalLights = function() {
     return this.Libraries_Game_Game__.GetDirectionalLights();
}
this.SetCamera2D$quorum_Libraries_Game_Graphics_Camera = function(cam) {
     return this.Libraries_Game_Game__.SetCamera2D$quorum_Libraries_Game_Graphics_Camera(cam);
}
this.SetWebContainerID$quorum_text = function(id) {
     return this.Libraries_Game_Game__.SetWebContainerID$quorum_text(id);
}
this.RemoveMenuChangeListener$quorum_Libraries_Interface_Events_MenuChangeListener = function(listener) {
     return this.Libraries_Game_Game__.RemoveMenuChangeListener$quorum_Libraries_Interface_Events_MenuChangeListener(listener);
}
this.AddResizeListener$quorum_Libraries_Interface_Events_ResizeListener = function(listener) {
     return this.Libraries_Game_Game__.AddResizeListener$quorum_Libraries_Interface_Events_ResizeListener(listener);
}
this.AddTreeChangeListener$quorum_Libraries_Interface_Events_TreeChangeListener = function(listener) {
     return this.Libraries_Game_Game__.AddTreeChangeListener$quorum_Libraries_Interface_Events_TreeChangeListener(listener);
}
this.SetFullScreen$quorum_boolean = function(fullScreen) {
     return this.Libraries_Game_Game__.SetFullScreen$quorum_boolean(fullScreen);
}
this.SelectApplicationType = function() {
     return this.Libraries_Game_Game__.SelectApplicationType();
}
this.OnExit = function() {
     return this.Libraries_Game_Game__.OnExit();
}
this.EnableTextureAutoResizing$quorum_boolean = function(resize) {
     return this.Libraries_Game_Game__.EnableTextureAutoResizing$quorum_boolean(resize);
}
this.GetSimulationThreshold2D = function() {
     return this.Libraries_Game_Game__.GetSimulationThreshold2D();
}
this.Run$quorum_Libraries_Interface_Events_BehaviorEvent = function(event) {
     return this.Libraries_Interface_Behaviors_Behavior__.Run$quorum_Libraries_Interface_Events_BehaviorEvent(event);
}
this.GetDesktopResolution = function() {
     return this.Libraries_Game_Game__.GetDesktopResolution();
}
this.SetFirstLetterNavigationTime$quorum_number = function(firstLetterNavigationTime) {
     return this.Libraries_Game_Game__.SetFirstLetterNavigationTime$quorum_number(firstLetterNavigationTime);
}
this.SetColliding$quorum_boolean = function(collide) {
     return this.Libraries_Game_Game__.SetColliding$quorum_boolean(collide);
}
this.IsRunningOnUpdate = function() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
this.SetConfiguration$quorum_Libraries_Game_WebConfiguration = function(config) {
     return this.Libraries_Game_Game__.SetConfiguration$quorum_Libraries_Game_WebConfiguration(config);
}
this.LoadScene$quorum_text = function(path) {
     return this.Libraries_Game_Game__.LoadScene$quorum_text(path);
}
this.GetGameName = function() {
     return this.Libraries_Game_Game__.GetGameName();
}
this.SetFocusManager$quorum_Libraries_Game_FocusManager = function(focus) {
     return this.Libraries_Game_Game__.SetFocusManager$quorum_Libraries_Game_FocusManager(focus);
}
this.StartGame = function() {
     return this.Libraries_Game_Game__.StartGame();
}
this.FocusWindow = function() {
     return this.Libraries_Game_Game__.FocusWindow();
}
this.TextChanged$quorum_Libraries_Interface_Events_TextChangeEvent = function(event) {
     return this.Libraries_Interface_Events_TextChangeListener__.TextChanged$quorum_Libraries_Interface_Events_TextChangeEvent(event);
}
this.SetFocus$quorum_Libraries_Interface_Item = function(item) {
     return this.Libraries_Game_Game__.SetFocus$quorum_Libraries_Interface_Item(item);
}
this.AddCollisionListener$quorum_Libraries_Interface_Events_CollisionListener3D = function(listener) {
     return this.Libraries_Game_Game__.AddCollisionListener$quorum_Libraries_Interface_Events_CollisionListener3D(listener);
}
this.LoadScene$quorum_Libraries_System_File = function(file) {
     return this.Libraries_Game_Game__.LoadScene$quorum_Libraries_System_File(file);
}
this.AddKeyboardListener$quorum_Libraries_Interface_Events_KeyboardListener = function(listener) {
     return this.Libraries_Game_Game__.AddKeyboardListener$quorum_Libraries_Interface_Events_KeyboardListener(listener);
}
this.Add$quorum_Libraries_Game_Graphics_PointLight = function(light) {
     return this.Libraries_Game_Game__.Add$quorum_Libraries_Game_Graphics_PointLight(light);
}
this.SetAccessibility$quorum_Libraries_Interface_Accessibility = function(accessibilityManager) {
     return this.Libraries_Game_Game__.SetAccessibility$quorum_Libraries_Interface_Accessibility(accessibilityManager);
}
this.GetSkybox = function() {
     return this.Libraries_Game_Game__.GetSkybox();
}
this.Equals$quorum_Libraries_Language_Object = function(object) {
return global_Object_Equals(this.prototype, object);
}
this.GetInputTable$quorum_text = function(key) {
     return this.Libraries_Game_Game__.GetInputTable$quorum_text(key);
}
this.GetLayout = function() {
     return this.Libraries_Game_Game__.GetLayout();
}
this.SetClipboard$quorum_text = function(value) {
     return this.Libraries_Game_Game__.SetClipboard$quorum_text(value);
}
this.SetGravity3D$quorum_number$quorum_number$quorum_number = function(gravityX, gravityY, gravityZ) {
     return this.Libraries_Game_Game__.SetGravity3D$quorum_number$quorum_number$quorum_number(gravityX, gravityY, gravityZ);
}
this.SetHasRunFlag$quorum_boolean = function(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
this.SetConfiguration$quorum_Libraries_Game_AndroidConfiguration = function(config) {
     return this.Libraries_Game_Game__.SetConfiguration$quorum_Libraries_Game_AndroidConfiguration(config);
}
this.SetColorFilter$quorum_number$quorum_number$quorum_number$quorum_number = function(red, green, blue, alpha) {
     return this.Libraries_Game_Game__.SetColorFilter$quorum_number$quorum_number$quorum_number$quorum_number(red, green, blue, alpha);
}
this.GetDialogLayerPool = function() {
     return this.Libraries_Game_Game__.GetDialogLayerPool();
}
this.GetAndroidConfiguration = function() {
     return this.Libraries_Game_Game__.GetAndroidConfiguration();
}
this.GetScreenHeight = function() {
     return this.Libraries_Game_Game__.GetScreenHeight();
}
this.RemoveTabChangeListener$quorum_Libraries_Interface_Events_TabChangeListener = function(listener) {
     return this.Libraries_Game_Game__.RemoveTabChangeListener$quorum_Libraries_Interface_Events_TabChangeListener(listener);
}
this.GetAccessibility = function() {
     return this.Libraries_Game_Game__.GetAccessibility();
}
this.GetSharedTextureManager = function() {
     return this.Libraries_Game_Game__.GetSharedTextureManager();
}
this.Remove$quorum_Libraries_Interface_Item2D = function(item) {
     return this.Libraries_Game_Game__.Remove$quorum_Libraries_Interface_Item2D(item);
}
this.AddScreenshotListener$quorum_Libraries_Interface_Events_ScreenshotListener = function(listener) {
     return this.Libraries_Game_Game__.AddScreenshotListener$quorum_Libraries_Interface_Events_ScreenshotListener(listener);
}
this.AddTabChangeListener$quorum_Libraries_Interface_Events_TabChangeListener = function(listener) {
     return this.Libraries_Game_Game__.AddTabChangeListener$quorum_Libraries_Interface_Events_TabChangeListener(listener);
}
this.GetCurrentLayer3D = function() {
     return this.Libraries_Game_Game__.GetCurrentLayer3D();
}
this.GetCurrentLayer2D = function() {
     return this.Libraries_Game_Game__.GetCurrentLayer2D();
}
this.Add$quorum_Libraries_Interface_Item3D = function(item) {
     return this.Libraries_Game_Game__.Add$quorum_Libraries_Interface_Item3D(item);
}
this.RemoveInputTable$quorum_text = function(key) {
     return this.Libraries_Game_Game__.RemoveInputTable$quorum_text(key);
}
this.IsColliding = function() {
     return this.Libraries_Game_Game__.IsColliding();
}
this.GetClipboard = function() {
     return this.Libraries_Game_Game__.GetClipboard();
}
this.CreateDefaultInputTables = function() {
     return this.Libraries_Game_Game__.CreateDefaultInputTables();
}
this.ContinueGame = function() {
     return this.Libraries_Game_Game__.ContinueGame();
}
this.GetScreenResolution = function() {
     return this.Libraries_Game_Game__.GetScreenResolution();
}
this.UseDesktopResolution = function() {
     return this.Libraries_Game_Game__.UseDesktopResolution();
}
this.SetCurrentLayer3D$quorum_Libraries_Game_Layer3D = function(layer) {
     return this.Libraries_Game_Game__.SetCurrentLayer3D$quorum_Libraries_Game_Layer3D(layer);
}
this.GetTextForIDE$quorum_text = function (containerID) {
return this.plugin_.GetTextForIDE$quorum_text(containerID);
};
this.GetPaletteFileName$quorum_text = function (containerID) {
return this.plugin_.GetPaletteFileName$quorum_text(containerID);
};
this.RunGame = function () {
return this.plugin_.RunGame();
};
this.StopGame = function () {
return this.plugin_.StopGame();
};
this.UpdateTogglePaletteButton$quorum_boolean = function (status) {
return this.plugin_.UpdateTogglePaletteButton$quorum_boolean(status);
};
this.Main = function () {
var config = this.prototype.GetWebConfiguration();
config.Set_Libraries_Game_WebConfiguration__title_("Block Editor");
config.Set_Libraries_Game_WebConfiguration__containerID_(this.Get_WebEditor_BlockEditor__CONTAINER_ID_());
this.prototype.SetConfiguration$quorum_Libraries_Game_WebConfiguration(config);
var deskConfig = this.prototype.GetDesktopConfiguration();
deskConfig.Set_Libraries_Game_DesktopConfiguration__resizable_(true);
this.prototype.StartGame();
};
this.CreateGame = function () {
var options = new quorum_Libraries_Interface_Options_LightBlockOptions_();
this.prototype.SetInterfaceOptions$quorum_Libraries_Interface_Options_InterfaceOptions(options);
this.Get_WebEditor_BlockEditor__listener_().Set_Libraries_Language_Compile_Blocks_ParserToBlockListener__startLine_(0);
var layout = new quorum_Libraries_Interface_Layouts_FlowLayout_();
this.prototype.SetLayout$quorum_Libraries_Interface_Layouts_Layout(layout);
var editor2 = new quorum_Libraries_Interface_Controls_Blocks_CodeEditor_();
this.editor = editor2;
this.Get_WebEditor_BlockEditor__editor_().SetBlockListener$quorum_Libraries_Language_Compile_Blocks_ParserToBlockListener(this.Get_WebEditor_BlockEditor__listener_());
var read = "";
read = this.prototype.GetTextForIDE$quorum_text(this.Get_WebEditor_BlockEditor__CONTAINER_ID_());
if ((read == "")) {
read = "output true";
}
read = this.prototype.Format$quorum_text(read);
var size = 12;
var listen = new quorum_Libraries_Interface_Controls_Blocks_BlockSelectionListener_();
this.Get_WebEditor_BlockEditor__editor_().SetPercentageWidth$quorum_number(1 * 1.0);
this.Get_WebEditor_BlockEditor__editor_().SetPercentageHeight$quorum_number(1 * 1.0);
this.Get_WebEditor_BlockEditor__editor_().SetFontSize$quorum_integer(size);
this.Get_WebEditor_BlockEditor__editor_().AddSelectionListener$quorum_Libraries_Interface_Events_SelectionListener(listen);
this.Get_WebEditor_BlockEditor__editor_().SetCode$quorum_text(read);
var palette = new quorum_Libraries_Interface_Controls_Blocks_Palette_BlockPalette_();
palette.SetPercentageHeight$quorum_number(1 * 1.0);
palette.SetPercentageWidth$quorum_number(1 * 1.0);
palette.SetEditor$quorum_Libraries_Interface_Controls_Blocks_CodeEditor(this.Get_WebEditor_BlockEditor__editor_());
var customPalettePage = new quorum_Libraries_System_File_();
customPalettePage = this.prototype.GetPaletteFile();
if ((customPalettePage != null)) {
palette.AddCustomPalettePage$quorum_Libraries_System_File(customPalettePage);
}
var color = new quorum_Libraries_Game_Graphics_Color_();
var panelFlow = new quorum_Libraries_Interface_Layouts_FlowLayout_();
panelFlow.SetSingleLine$quorum_boolean(true);
this.Get_WebEditor_BlockEditor__palettePanel_().SetLayout$quorum_Libraries_Interface_Layouts_Layout(panelFlow);
var panelProp = this.Get_WebEditor_BlockEditor__palettePanel_().GetDefaultLayoutProperties();
this.Get_WebEditor_BlockEditor__palettePanel_().SetPercentageX$quorum_number(0 * 1.0);
this.Get_WebEditor_BlockEditor__palettePanel_().SetPercentageY$quorum_number(0 * 1.0);
this.Get_WebEditor_BlockEditor__palettePanel_().SetPercentageHeight$quorum_number(1 * 1.0);
this.Get_WebEditor_BlockEditor__palettePanel_().SetPixelWidth$quorum_number(200 * 1.0);
var flow = new quorum_Libraries_Interface_Layouts_FlowLayout_();
this.Get_WebEditor_BlockEditor__editorPanel_().SetLayout$quorum_Libraries_Interface_Layouts_Layout(flow);
this.Get_WebEditor_BlockEditor__editorPanel_().SetPercentageY$quorum_number(0 * 1.0);
this.Get_WebEditor_BlockEditor__editorPanel_().SetPercentageHeight$quorum_number(1 * 1.0);
this.Get_WebEditor_BlockEditor__editorPanel_().SetHorizontalLayoutMode$quorum_integer(this.Get_WebEditor_BlockEditor__editorPanel_().Get_Libraries_Interface_Controls_Control__FILL_());
this.prototype.Add$quorum_Libraries_Interface_Item2D(this.Get_WebEditor_BlockEditor__palettePanel_());
this.Get_WebEditor_BlockEditor__palettePanel_().Add$quorum_Libraries_Interface_Item2D(palette);
palette.IncludeSuggestions$quorum_boolean(false);
palette.Setup();
var palettePartition = this.prototype.CreatePalettePartition();
this.prototype.Add$quorum_Libraries_Interface_Item2D(palettePartition);
this.prototype.AddPartitionInputTable$quorum_Libraries_Interface_Controls_Control(this.Get_WebEditor_BlockEditor__palettePanel_());
this.prototype.Add$quorum_Libraries_Interface_Item2D(this.Get_WebEditor_BlockEditor__editorPanel_());
this.Get_WebEditor_BlockEditor__editorPanel_().Add$quorum_Libraries_Interface_Item2D(this.Get_WebEditor_BlockEditor__editor_());
var resizeListener = new quorum_WebEditor_CanvasResizeListener_();
resizeListener.AddPanel$quorum_Libraries_Interface_Controls_Control(this.Get_WebEditor_BlockEditor__palettePanel_());
resizeListener.AddPanel$quorum_Libraries_Interface_Controls_Control(this.Get_WebEditor_BlockEditor__editorPanel_());
this.prototype.AddResizeListener$quorum_Libraries_Interface_Events_ResizeListener(resizeListener);
this.editorPalette = palette;
this.editorBlocks = this.Get_WebEditor_BlockEditor__editor_();
this.prototype.SetInterfaceScale$quorum_number(1.25);
this.prototype.SetScreenSize$quorum_integer$quorum_integer(2400, 1000);
this.prototype.AddDefaultKeys();
};
this.AddDefaultKeys = function () {
var keys = new quorum_Libraries_Interface_Events_KeyboardEvent_();
var defaultTable = this.prototype.GetDefaultInputTable();
var isWindows = true;
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
var webApp = global_CheckCast(manager.GetApplication(), "Libraries.Game.WebApplication");
if (webApp.GetWebOperatingSystem().Contains$quorum_text("Windows")) {
isWindows = true;
}
else { 
isWindows = false;
}
var focusPalette = new quorum_Libraries_Game_InputSet_();
focusPalette.SetKeyboardInput$quorum_integer(keys.Get_Libraries_Interface_Events_KeyboardEvent__NUM_1_());
focusPalette.AddModifier$quorum_integer(focusPalette.Get_Libraries_Game_InputSet__CONTROL_());
var focusPaletteBehavior = new quorum_WebEditor_Behaviors_FocusPaletteBehavior_();
defaultTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(focusPalette, focusPaletteBehavior);
var focusBlocks = new quorum_Libraries_Game_InputSet_();
focusBlocks.SetKeyboardInput$quorum_integer(keys.Get_Libraries_Interface_Events_KeyboardEvent__NUM_2_());
focusPalette.AddModifier$quorum_integer(focusBlocks.Get_Libraries_Game_InputSet__CONTROL_());
var focusEditorBehavior = new quorum_WebEditor_Behaviors_FocusEditorBehavior_();
defaultTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(focusBlocks, focusEditorBehavior);
var runSet = new quorum_Libraries_Game_InputSet_();
runSet.SetKeyboardInput$quorum_integer(keys.Get_Libraries_Interface_Events_KeyboardEvent__R_());
runSet.AddModifier$quorum_integer(runSet.Get_Libraries_Game_InputSet__SHIFT_());
if (isWindows) {
runSet.AddModifier$quorum_integer(runSet.Get_Libraries_Game_InputSet__ALT_());
}
else { 
runSet.AddModifier$quorum_integer(runSet.Get_Libraries_Game_InputSet__CONTROL_());
}
var runBehavior = new quorum_WebEditor_Behaviors_RunGameBehavior_();
defaultTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(runSet, runBehavior);
var stopSet = new quorum_Libraries_Game_InputSet_();
stopSet.SetKeyboardInput$quorum_integer(keys.Get_Libraries_Interface_Events_KeyboardEvent__S_());
stopSet.AddModifier$quorum_integer(runSet.Get_Libraries_Game_InputSet__SHIFT_());
if (isWindows) {
runSet.AddModifier$quorum_integer(runSet.Get_Libraries_Game_InputSet__ALT_());
}
else { 
runSet.AddModifier$quorum_integer(runSet.Get_Libraries_Game_InputSet__CONTROL_());
}
var stopBehavior = new quorum_WebEditor_Behaviors_StopGameBehavior_();
defaultTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(stopSet, stopBehavior);
var togglePaletteSet = new quorum_Libraries_Game_InputSet_();
togglePaletteSet.SetKeyboardInput$quorum_integer(keys.Get_Libraries_Interface_Events_KeyboardEvent__X_());
togglePaletteSet.AddModifier$quorum_integer(runSet.Get_Libraries_Game_InputSet__SHIFT_());
if (isWindows) {
togglePaletteSet.AddModifier$quorum_integer(togglePaletteSet.Get_Libraries_Game_InputSet__ALT_());
}
else { 
togglePaletteSet.AddModifier$quorum_integer(togglePaletteSet.Get_Libraries_Game_InputSet__CONTROL_());
}
var toggleBehavior = new quorum_WebEditor_Behaviors_TogglePaletteBehavior_();
defaultTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(togglePaletteSet, toggleBehavior);
var zoomInSet = new quorum_Libraries_Game_InputSet_();
zoomInSet.SetKeyboardInput$quorum_integer(keys.Get_Libraries_Interface_Events_KeyboardEvent__EQUALS_());
if (isWindows) {
zoomInSet.AddModifier$quorum_integer(zoomInSet.Get_Libraries_Game_InputSet__ALT_());
}
else { 
zoomInSet.AddModifier$quorum_integer(zoomInSet.Get_Libraries_Game_InputSet__CONTROL_());
}
var zoomInBehavior = new quorum_WebEditor_Behaviors_ZoomBehavior_();
zoomInBehavior.SetToZoomIn();
defaultTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(zoomInSet, zoomInBehavior);
var zoomOutSet = new quorum_Libraries_Game_InputSet_();
zoomOutSet.SetKeyboardInput$quorum_integer(keys.Get_Libraries_Interface_Events_KeyboardEvent__MINUS_());
if (isWindows) {
zoomOutSet.AddModifier$quorum_integer(zoomOutSet.Get_Libraries_Game_InputSet__ALT_());
}
else { 
zoomOutSet.AddModifier$quorum_integer(zoomOutSet.Get_Libraries_Game_InputSet__CONTROL_());
}
var zoomOutBehavior = new quorum_WebEditor_Behaviors_ZoomBehavior_();
zoomOutBehavior.SetToZoomOut();
defaultTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(zoomOutSet, zoomOutBehavior);
};
this.Format$quorum_text = function (source) {
var manager = new quorum_Libraries_Language_Compile_CompilerErrorManager_();
var lexer = new quorum_Libraries_Language_Compile_Parsing_QuorumLexer_();
lexer.SetIgnoreWhiteSpace$quorum_boolean(false);
lexer.SetCompilerErrorManager$quorum_Libraries_Language_Compile_CompilerErrorManager(manager);
lexer.Read$quorum_text(source);
if (!manager.IsCompilationErrorFree()) {
var value = manager.GetCompilerErrorsAsText();
global_Output_(value);
return source;
}
var parser = new quorum_Libraries_Language_Compile_Parsing_QuorumParser_();
parser.SetCompilerErrorManager$quorum_Libraries_Language_Compile_CompilerErrorManager(manager);
parser.SetLexer$quorum_Libraries_Language_Compile_Parsing_QuorumLexer(lexer);
var start = parser.Start();
if (!manager.IsCompilationErrorFree()) {
var value = manager.GetCompilerErrorsAsText();
global_Output_(value);
return source;
}
var formatter = new quorum_Libraries_Language_Compile_Parsing_FormatListener_();
formatter.SetQuorumLexer$quorum_Libraries_Language_Compile_Parsing_QuorumLexer(lexer);
formatter.SetSource$quorum_text(source);
start.Traverse$quorum_Libraries_Language_Compile_QuorumSourceListener(formatter);
var formatted = formatter.GetSourceFormatted();
return formatted;
};
this.CreatePalettePartition = function () {
var palettePartition = new quorum_Libraries_Interface_Controls_Control_();
var paletteProperties = palettePartition.GetDefaultLayoutProperties();
paletteProperties.SetPixelWidth$quorum_number(8 * 1.0);
paletteProperties.SetVerticalLayoutMode$quorum_integer(paletteProperties.Get_Libraries_Interface_Layouts_LayoutProperties__FILL_());
palettePartition.SetInputGroup$quorum_text("PalettePartition");
palettePartition.SetName$quorum_text("Palette Pane Partition");
return palettePartition;
};
this.AddPartitionInputTable$quorum_Libraries_Interface_Controls_Control = function (palettePanel) {
var palettePartitionTable = new quorum_Libraries_Game_InputTable_();
palettePartitionTable.SetIdentifier$quorum_text("PalettePartition");
var dragSet = new quorum_Libraries_Game_InputSet_();
dragSet.SetDragItemInput();
var dragContinueSet = dragSet.Copy();
dragContinueSet.SetInputTrigger$quorum_integer(dragContinueSet.Get_Libraries_Game_InputSet__CONTINUE_());
var paletteDrag = new quorum_WebEditor_Behaviors_PalettePartitionDragBehavior_();
paletteDrag.SetPanel$quorum_Libraries_Interface_Controls_Control(palettePanel);
palettePartitionTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(dragSet, paletteDrag);
palettePartitionTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(dragContinueSet, paletteDrag);
this.prototype.AddInputTable$quorum_Libraries_Game_InputTable(palettePartitionTable);
};
this.GetPaletteFile = function () {
var file = new quorum_Libraries_System_File_();
if ((this.prototype.GetPaletteFileName$quorum_text(this.Get_WebEditor_BlockEditor__CONTAINER_ID_()) != "")) {
file.SetPath$quorum_text(this.prototype.GetPaletteFileName$quorum_text(this.Get_WebEditor_BlockEditor__CONTAINER_ID_()));
return file;
}
return null;
};
this.SetCode$quorum_text = function (code) {
this.Get_WebEditor_BlockEditor__editor_().SetCode$quorum_text(code);
};
this.ScaleUp = function () {
var scale = this.prototype.GetInterfaceScale();
scale = (scale + this.Get_WebEditor_BlockEditor__scaleAmount_());
if ((scale >= 0.1)) {
this.prototype.SetInterfaceScale$quorum_number(scale);
}
};
this.ScaleDown = function () {
var scale = this.prototype.GetInterfaceScale();
scale = (scale - this.Get_WebEditor_BlockEditor__scaleAmount_());
if ((scale >= 0.1)) {
this.prototype.SetInterfaceScale$quorum_number(scale);
}
};
this.TogglePalette = function () {
if (this.Get_WebEditor_BlockEditor__palettePanel_().IsShowing()) {
this.lastWidth = this.Get_WebEditor_BlockEditor__palettePanel_().GetPixelWidth();
this.Get_WebEditor_BlockEditor__palettePanel_().SetPixelWidth$quorum_number(0 * 1.0);
this.Get_WebEditor_BlockEditor__palettePanel_().Hide();
this.Get_WebEditor_BlockEditor__palettePartition_().Hide();
this.Get_WebEditor_BlockEditor__editorBlocks_().Focus();
this.Get_WebEditor_BlockEditor__palettePanel_().RequestLayout();
return false;
}
else { 
this.Get_WebEditor_BlockEditor__palettePanel_().Show();
this.Get_WebEditor_BlockEditor__palettePartition_().Show();
this.Get_WebEditor_BlockEditor__palettePanel_().SetPixelWidth$quorum_number(this.Get_WebEditor_BlockEditor__lastWidth_());
this.Get_WebEditor_BlockEditor__palettePanel_().RequestLayout();
return true;
}
};
this.IsPaletteShowing = function () {
return this.Get_WebEditor_BlockEditor__palettePanel_().IsShowing();
};
this.GetBlockEditor = function () {
return this.Get_WebEditor_BlockEditor__editorBlocks_();
};
this.GetBlockPalette = function () {
return this.Get_WebEditor_BlockEditor__editorPalette_();
};
this.Update$quorum_number = function (seconds) {
};
this.Get_WebEditor_BlockEditor__palettePanel_ = function() {
   return this.palettePanel;
};
this.Set_WebEditor_BlockEditor__palettePanel_ = function(value) {
   this.palettePanel = value;
};
this.Get_WebEditor_BlockEditor__palettePartition_ = function() {
   return this.palettePartition;
};
this.Set_WebEditor_BlockEditor__palettePartition_ = function(value) {
   this.palettePartition = value;
};
this.Get_WebEditor_BlockEditor__CONTAINER_ID_ = function() {
   return this.CONTAINER_ID;
};
this.Set_WebEditor_BlockEditor__CONTAINER_ID_ = function(value) {
   this.CONTAINER_ID = value;
};
this.Get_WebEditor_BlockEditor__editor_ = function() {
   return this.editor;
};
this.Set_WebEditor_BlockEditor__editor_ = function(value) {
   this.editor = value;
};
this.Get_WebEditor_BlockEditor__scaleAmount_ = function() {
   return this.scaleAmount;
};
this.Set_WebEditor_BlockEditor__scaleAmount_ = function(value) {
   this.scaleAmount = value;
};
this.Get_WebEditor_BlockEditor__editorPanel_ = function() {
   return this.editorPanel;
};
this.Set_WebEditor_BlockEditor__editorPanel_ = function(value) {
   this.editorPanel = value;
};
this.Get_WebEditor_BlockEditor__listener_ = function() {
   return this.listener;
};
this.Set_WebEditor_BlockEditor__listener_ = function(value) {
   this.listener = value;
};
this.Get_WebEditor_BlockEditor__editorBlocks_ = function() {
   return this.editorBlocks;
};
this.Set_WebEditor_BlockEditor__editorBlocks_ = function(value) {
   this.editorBlocks = value;
};
this.Get_WebEditor_BlockEditor__lastWidth_ = function() {
   return this.lastWidth;
};
this.Set_WebEditor_BlockEditor__lastWidth_ = function(value) {
   this.lastWidth = value;
};
this.Get_WebEditor_BlockEditor__editorPalette_ = function() {
   return this.editorPalette;
};
this.Set_WebEditor_BlockEditor__editorPalette_ = function(value) {
   this.editorPalette = value;
};
this.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_ = function() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
this.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_ = function(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
this.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_ = function() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
this.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_ = function(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};
this.Get_Libraries_Game_Game__focusManager_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__focusManager_();
};
this.Set_Libraries_Game_Game__focusManager_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__focusManager_(value);
};
this.Get_Libraries_Game_Game__DESKTOP_APPLICATION_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__DESKTOP_APPLICATION_();
};
this.Set_Libraries_Game_Game__DESKTOP_APPLICATION_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__DESKTOP_APPLICATION_(value);
};
this.Get_Libraries_Game_Game__exitRequested_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__exitRequested_();
};
this.Set_Libraries_Game_Game__exitRequested_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__exitRequested_(value);
};
this.Get_Libraries_Game_Game__manager_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__manager_();
};
this.Set_Libraries_Game_Game__manager_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__manager_(value);
};
this.Get_Libraries_Game_Game__layers_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__layers_();
};
this.Set_Libraries_Game_Game__layers_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__layers_(value);
};
this.Get_Libraries_Game_Game__pendingScreenshots_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__pendingScreenshots_();
};
this.Set_Libraries_Game_Game__pendingScreenshots_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__pendingScreenshots_(value);
};
this.Get_Libraries_Game_Game__gameInput_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__gameInput_();
};
this.Set_Libraries_Game_Game__gameInput_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__gameInput_(value);
};
this.Get_Libraries_Game_Game__applicationType_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__applicationType_();
};
this.Set_Libraries_Game_Game__applicationType_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__applicationType_(value);
};
this.Get_Libraries_Game_Game__currentLayer3D_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__currentLayer3D_();
};
this.Set_Libraries_Game_Game__currentLayer3D_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__currentLayer3D_(value);
};
this.Get_Libraries_Game_Game__interfaceOptions_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__interfaceOptions_();
};
this.Set_Libraries_Game_Game__interfaceOptions_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__interfaceOptions_(value);
};
this.Get_Libraries_Game_Game__androidConfig_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__androidConfig_();
};
this.Set_Libraries_Game_Game__androidConfig_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__androidConfig_(value);
};
this.Get_Libraries_Game_Game__ANDROID_APPLICATION_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__ANDROID_APPLICATION_();
};
this.Set_Libraries_Game_Game__ANDROID_APPLICATION_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__ANDROID_APPLICATION_(value);
};
this.Get_Libraries_Game_Game__iosConfig_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__iosConfig_();
};
this.Set_Libraries_Game_Game__iosConfig_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__iosConfig_(value);
};
this.Get_Libraries_Game_Game__gl20_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__gl20_();
};
this.Set_Libraries_Game_Game__gl20_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__gl20_(value);
};
this.Get_Libraries_Game_Game__collide_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__collide_();
};
this.Set_Libraries_Game_Game__collide_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__collide_(value);
};
this.Get_Libraries_Game_Game__webConfig_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__webConfig_();
};
this.Set_Libraries_Game_Game__webConfig_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__webConfig_(value);
};
this.Get_Libraries_Game_Game__accessibility_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__accessibility_();
};
this.Set_Libraries_Game_Game__accessibility_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__accessibility_(value);
};
this.Get_Libraries_Game_Game__sharedTextureManager_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__sharedTextureManager_();
};
this.Set_Libraries_Game_Game__sharedTextureManager_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__sharedTextureManager_(value);
};
this.Get_Libraries_Game_Game__editManager_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__editManager_();
};
this.Set_Libraries_Game_Game__editManager_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__editManager_(value);
};
this.Get_Libraries_Game_Game__firstLetterNavigationTime_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__firstLetterNavigationTime_();
};
this.Set_Libraries_Game_Game__firstLetterNavigationTime_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__firstLetterNavigationTime_(value);
};
this.Get_Libraries_Game_Game__shaderManager_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__shaderManager_();
};
this.Set_Libraries_Game_Game__shaderManager_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__shaderManager_(value);
};
this.Get_Libraries_Game_Game__desktopConfig_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__desktopConfig_();
};
this.Set_Libraries_Game_Game__desktopConfig_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__desktopConfig_(value);
};
this.Get_Libraries_Game_Game__currentLayer2D_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__currentLayer2D_();
};
this.Set_Libraries_Game_Game__currentLayer2D_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__currentLayer2D_(value);
};
this.Get_Libraries_Game_Game__WEB_APPLICATION_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__WEB_APPLICATION_();
};
this.Set_Libraries_Game_Game__WEB_APPLICATION_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__WEB_APPLICATION_(value);
};
this.Get_Libraries_Game_Game__dialogLayerPool_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__dialogLayerPool_();
};
this.Set_Libraries_Game_Game__dialogLayerPool_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__dialogLayerPool_(value);
};
this.Get_Libraries_Game_Game__IOS_APPLICATION_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__IOS_APPLICATION_();
};
this.Set_Libraries_Game_Game__IOS_APPLICATION_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__IOS_APPLICATION_(value);
};
this.Get_Libraries_Game_Game__sceneManager_ = function() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__sceneManager_();
};
this.Set_Libraries_Game_Game__sceneManager_ = function(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__sceneManager_(value);
};
if(parents == null) {
   this.Libraries_Interface_Events_TextChangeListener__ = new quorum_Libraries_Interface_Events_TextChangeListener_(false);
   this.Libraries_Interface_Behaviors_Behavior__ = new quorum_Libraries_Interface_Behaviors_Behavior_(false);
   this.Libraries_Game_Game__ = new quorum_Libraries_Game_Game_(false);
   this.Libraries_Interface_Events_TextChangeListener__.prototype = this;
   this.Libraries_Interface_Behaviors_Behavior__.prototype = this;
   this.Libraries_Game_Game__.prototype = this;
}
this.plugin_ = new plugins_quorum_WebEditor_BlockEditor_(this);
this.CONTAINER_ID = "BlockUIContainer";
this.editor = null;
this.listener = new quorum_Libraries_Language_Compile_Blocks_ParserToBlockListener_();
this.palettePanel = new quorum_Libraries_Interface_Controls_Control_();
this.palettePartition = new quorum_Libraries_Interface_Controls_Control_();
this.editorPanel = new quorum_Libraries_Interface_Controls_Control_();
this.editorPalette = null;
this.editorBlocks = null;
this.scaleAmount = 0.2;
this.lastWidth = 0;

if(parents == null) {
this.Libraries_Game_Game__.constructor_();
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;

};
var $starter;function Start(){
$starter = new quorum_WebEditor_BlockEditor_();
$starter.Main();
OuTpUt_$tRiNg_;
}
function Stop(){
   var manager = new quorum_Libraries_Game_GameStateManager_();
   var game = manager.GetGame();
   if ((game != null)) {
       game.Exit();
   }
   else if (typeof plugins_quorum_Libraries_Sound_Audio_ === "function" && typeof plugins_quorum_Libraries_Sound_Audio_.StopAllSources === "function") {
       plugins_quorum_Libraries_Sound_Audio_.StopAllSources();
   }
   global_Empty_Shared_Classes();
}
function GetCode(){
    return $starter.editor.GetText();
}
function SetCode(text) {
    $starter.SetCode$quorum_text(text);
}
function ScaleUp() {
    $starter.ScaleUp();
}
function ScaleDown() {
    $starter.ScaleDown();
}
function TogglePalette() {
    return $starter.TogglePalette();
}
function BlockEditorStop() {
    var manager = new quorum_Libraries_Game_GameStateManager_();
    var game = manager.GetGame();
    let run = document.getElementById("Runnable");
    if (game.GetWebConfiguration().Get_Libraries_Game_WebConfiguration__title_() === 'Block Editor') {
        if (run != null) {
            let head = document.getElementsByTagName("head")[0];
            head.removeChild(run);
        }
        return;
    }
    if ((game != null)) {
        game.Exit();
    }
    else if (typeof plugins_quorum_Libraries_Sound_Audio_ === "function" && typeof plugins_quorum_Libraries_Sound_Audio_.StopAllSources === "function") {
        plugins_quorum_Libraries_Sound_Audio_.StopAllSources();
    }
    global_Empty_Shared_Classes();
    if (run != null) {
        let head = document.getElementsByTagName("head")[0];
        head.removeChild(run);
    }
}
export{Start, Stop, GetCode, SetCode, ScaleUp, ScaleDown, TogglePalette, BlockEditorStop}