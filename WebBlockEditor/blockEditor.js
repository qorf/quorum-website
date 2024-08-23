function plugins_quorum_WebEditor_BlockEditor_() {
    this.GetTextForIDE$quorum_text = function(containerID) {
      if(code != null) {
        return code;
      }
        let container = document.getElementById(containerID);
        if (container.dataset.codeForIde) {
            const data = JSON.parse(container.dataset.codeForIde);
            for (let i = 0; i < data.length; i++) {
              const fileObj = data[i];
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

    this.ShowHelpModal = function() {
      showBlockHelpModal();
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

function quorum_WebEditor_EditorItem_(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Interface.Item', 'Libraries.Interface.Controls.Control', 'Libraries.Interface.Item2D', 'Libraries.Language.Object',  'WebEditor.EditorItem'];
this.Libraries_Interface_Item__ = null;
this.Libraries_Interface_Controls_Control__ = null;
this.Libraries_Interface_Item2D__ = null;
this.constructor_ = function () {
this.prototype.SetInputGroup$quorum_text("EditorItem");
this.prototype.SetAccessibilityCode$quorum_integer(this.Libraries_Interface_Item__.CUSTOM);
this.prototype.SetFocusable$quorum_boolean(true);
this.prototype.SetPixelWidth$quorum_number(1 * 1.0);
this.prototype.SetPixelHeight$quorum_number(1 * 1.0);
this.prototype.SetPixelX$quorum_number(0 * 1.0);
this.prototype.SetPixelY$quorum_number(0 * 1.0);
};
this.GetShadowColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetShadowColor();
}
this.GetTopRightPixelRounding = function() {
     return this.Libraries_Interface_Controls_Control__.GetTopRightPixelRounding();
}
this.SetOrigin$quorum_number$quorum_number = function(setX, setY) {
     return this.Libraries_Interface_Item2D__.SetOrigin$quorum_number$quorum_number(setX, setY);
}
this.RequireSimulation$quorum_boolean = function(flag) {
     return this.Libraries_Interface_Item2D__.RequireSimulation$quorum_boolean(flag);
}
this.HasBottomRightPixelRounding = function() {
     return this.Libraries_Interface_Controls_Control__.HasBottomRightPixelRounding();
}
this.BeginMouseOver = function() {
     return this.Libraries_Interface_Controls_Control__.BeginMouseOver();
}
this.SetTorque$quorum_number = function(torque) {
     return this.Libraries_Interface_Item2D__.SetTorque$quorum_number(torque);
}
this.RemoveMouseWheelListener$quorum_Libraries_Interface_Events_MouseWheelListener = function(listener) {
     return this.Libraries_Interface_Item__.RemoveMouseWheelListener$quorum_Libraries_Interface_Events_MouseWheelListener(listener);
}
this.GetLayoutRows = function() {
     return this.Libraries_Interface_Controls_Control__.GetLayoutRows();
}
this.SetLayout$quorum_Libraries_Interface_Layouts_Layout = function(layout) {
     return this.Libraries_Interface_Controls_Control__.SetLayout$quorum_Libraries_Interface_Layouts_Layout(layout);
}
this.IsRotationAllowed = function() {
     return this.Libraries_Interface_Item2D__.IsRotationAllowed();
}
this.SetUnfocusedSelectionFontColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetUnfocusedSelectionFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.IsSimulated = function() {
     return this.Libraries_Interface_Item2D__.IsSimulated();
}
this.SetShadowY$quorum_number = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetShadowY$quorum_number(value);
}
this.GetJointList = function() {
     return this.Libraries_Interface_Item2D__.GetJointList();
}
this.Synchronize$quorum_Libraries_Game_Collision_BroadphaseCollision2D$quorum_Libraries_Game_Collision_PhysicsPosition2D$quorum_Libraries_Game_Collision_PhysicsPosition2D = function(broadphase, transform1, transform2) {
     return this.Libraries_Interface_Item2D__.Synchronize$quorum_Libraries_Game_Collision_BroadphaseCollision2D$quorum_Libraries_Game_Collision_PhysicsPosition2D$quorum_Libraries_Game_Collision_PhysicsPosition2D(broadphase, transform1, transform2);
}
this.GetItemAt$quorum_number$quorum_number = function(x, y) {
     return this.Libraries_Interface_Item2D__.GetItemAt$quorum_number$quorum_number(x, y);
}
this.SetTopPadding$quorum_number = function(padding) {
     return this.Libraries_Interface_Controls_Control__.SetTopPadding$quorum_number(padding);
}
this.ApplyForceToCenter$quorum_Libraries_Compute_Vector2 = function(force) {
     return this.Libraries_Interface_Item2D__.ApplyForceToCenter$quorum_Libraries_Compute_Vector2(force);
}
this.SetMass$quorum_number = function(mass) {
     return this.Libraries_Interface_Item2D__.SetMass$quorum_number(mass);
}
this.SetResponsive = function() {
     return this.Libraries_Interface_Item2D__.SetResponsive();
}
this.GetLeftPadding = function() {
     return this.Libraries_Interface_Controls_Control__.GetLeftPadding();
}
this.SetPixelY$quorum_number = function(y) {
     return this.Libraries_Interface_Controls_Control__.SetPixelY$quorum_number(y);
}
this.HasTopRightPixelRounding = function() {
     return this.Libraries_Interface_Controls_Control__.HasTopRightPixelRounding();
}
this.SetPhysicsProperties$quorum_Libraries_Game_Physics_PhysicsProperties2D = function(properties) {
     return this.Libraries_Interface_Item2D__.SetPhysicsProperties$quorum_Libraries_Game_Physics_PhysicsProperties2D(properties);
}
this.SetGridHeight$quorum_integer = function(gridHeight) {
     return this.Libraries_Interface_Controls_Control__.SetGridHeight$quorum_integer(gridHeight);
}
this.IsSimulationRequired = function() {
     return this.Libraries_Interface_Item2D__.IsSimulationRequired();
}
this.GetAccentColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetAccentColor();
}
this.HasTopLeftRounding = function() {
     return this.Libraries_Interface_Controls_Control__.HasTopLeftRounding();
}
this.SetParent$quorum_Libraries_Interface_Item2D = function(newItem) {
     return this.Libraries_Interface_Item2D__.SetParent$quorum_Libraries_Interface_Item2D(newItem);
}
this.GetShadowX = function() {
     return this.Libraries_Interface_Controls_Control__.GetShadowX();
}
this.GetShadowY = function() {
     return this.Libraries_Interface_Controls_Control__.GetShadowY();
}
this.SelectByFirstLetters$quorum_text = function(firstLetter) {
     return this.Libraries_Interface_Controls_Control__.SelectByFirstLetters$quorum_text(firstLetter);
}
this.SetTransform$quorum_Libraries_Compute_Vector2$quorum_number = function(position, angle) {
     return this.Libraries_Interface_Item2D__.SetTransform$quorum_Libraries_Compute_Vector2$quorum_number(position, angle);
}
this.GetDefaultFontName = function() {
     return this.Libraries_Interface_Controls_Control__.GetDefaultFontName();
}
this.GetRightMargin = function() {
     return this.Libraries_Interface_Controls_Control__.GetRightMargin();
}
this.RequestLayout = function() {
     return this.Libraries_Interface_Controls_Control__.RequestLayout();
}
this.GetLinearDamping = function() {
     return this.Libraries_Interface_Item2D__.GetLinearDamping();
}
this.GetBottomRightRounding = function() {
     return this.Libraries_Interface_Controls_Control__.GetBottomRightRounding();
}
this.SetGridX$quorum_integer = function(gridX) {
     return this.Libraries_Interface_Controls_Control__.SetGridX$quorum_integer(gridX);
}
this.SetForegroundSelectionColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetForegroundSelectionColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.SetCollisionList$quorum_Libraries_Game_Collision_CollisionEdge2D = function(edge) {
     return this.Libraries_Interface_Item2D__.SetCollisionList$quorum_Libraries_Game_Collision_CollisionEdge2D(edge);
}
this.SetScale$quorum_number = function(scale) {
     return this.Libraries_Interface_Item2D__.SetScale$quorum_number(scale);
}
this.GetBottomMargin = function() {
     return this.Libraries_Interface_Controls_Control__.GetBottomMargin();
}
this.SetToSmallFont = function() {
     return this.Libraries_Interface_Controls_Control__.SetToSmallFont();
}
this.ClickedMouse = function() {
     return this.Libraries_Interface_Controls_Control__.ClickedMouse();
}
this.GetLinearVelocity = function() {
     return this.Libraries_Interface_Item2D__.GetLinearVelocity();
}
this.SetTransform0$quorum_Libraries_Game_Collision_PhysicsPosition2D = function(transform) {
     return this.Libraries_Interface_Item2D__.SetTransform0$quorum_Libraries_Game_Collision_PhysicsPosition2D(transform);
}
this.SetLinearVelocityX$quorum_number = function(linearVelocityX) {
     return this.Libraries_Interface_Item2D__.SetLinearVelocityX$quorum_number(linearVelocityX);
}
this.QueueForDrawing$quorum_Libraries_Game_Graphics_Painter2D = function(painter) {
     return this.Libraries_Interface_Item2D__.QueueForDrawing$quorum_Libraries_Game_Graphics_Painter2D(painter);
}
this.UpdateTransformY = function() {
     return this.Libraries_Interface_Item2D__.UpdateTransformY();
}
this.UpdateTransformX = function() {
     return this.Libraries_Interface_Item2D__.UpdateTransformX();
}
this.ApplyForce$quorum_Libraries_Compute_Vector2$quorum_Libraries_Compute_Vector2 = function(force, point) {
     return this.Libraries_Interface_Item2D__.ApplyForce$quorum_Libraries_Compute_Vector2$quorum_Libraries_Compute_Vector2(force, point);
}
this.GetVisibleItemAt$quorum_number$quorum_number = function(x, y) {
     return this.Libraries_Interface_Item2D__.GetVisibleItemAt$quorum_number$quorum_number(x, y);
}
this.IsRenderingSelection = function() {
     return this.Libraries_Interface_Controls_Control__.IsRenderingSelection();
}
this.IsEmpty = function() {
     return this.Libraries_Interface_Item2D__.IsEmpty();
}
this.AddControlActivationListener$quorum_Libraries_Interface_Events_ControlActivationListener = function(listener) {
     return this.Libraries_Interface_Controls_Control__.AddControlActivationListener$quorum_Libraries_Interface_Events_ControlActivationListener(listener);
}
this.SetLinearVelocityY$quorum_number = function(linearVelocityY) {
     return this.Libraries_Interface_Item2D__.SetLinearVelocityY$quorum_number(linearVelocityY);
}
this.GetShadowHeight = function() {
     return this.Libraries_Interface_Controls_Control__.GetShadowHeight();
}
this.IsFlippedY = function() {
     return this.Libraries_Interface_Item2D__.IsFlippedY();
}
this.IsFlippedX = function() {
     return this.Libraries_Interface_Item2D__.IsFlippedX();
}
this.GetGridHeight = function() {
     return this.Libraries_Interface_Controls_Control__.GetGridHeight();
}
this.GetFocusListeners = function() {
     return this.Libraries_Interface_Item__.GetFocusListeners();
}
this.AddTouchListener$quorum_Libraries_Interface_Events_TouchListener = function(listener) {
     return this.Libraries_Interface_Item__.AddTouchListener$quorum_Libraries_Interface_Events_TouchListener(listener);
}
this.SetMouseDownFontColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetMouseDownFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.SetTopRightRounding$quorum_number = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetTopRightRounding$quorum_number(value);
}
this.GetTransform0 = function() {
     return this.Libraries_Interface_Item2D__.GetTransform0();
}
this.GetInverseInertia = function() {
     return this.Libraries_Interface_Item2D__.GetInverseInertia();
}
this.Resize = function() {
     return this.Libraries_Interface_Item2D__.Resize();
}
this.GetCurrentLayoutProperties = function() {
     return this.Libraries_Interface_Controls_Control__.GetCurrentLayoutProperties();
}
this.FinishCollision$quorum_Libraries_Interface_Item = function(item) {
     return this.Libraries_Interface_Item__.FinishCollision$quorum_Libraries_Interface_Item(item);
}
this.AddSelectionListener$quorum_Libraries_Interface_Events_SelectionListener = function(listener) {
     return this.Libraries_Interface_Controls_Control__.AddSelectionListener$quorum_Libraries_Interface_Events_SelectionListener(listener);
}
this.RemoveSelectionListener$quorum_Libraries_Interface_Events_SelectionListener = function(listener) {
     return this.Libraries_Interface_Controls_Control__.RemoveSelectionListener$quorum_Libraries_Interface_Events_SelectionListener(listener);
}
this.RemoveFocusListener$quorum_Libraries_Interface_Events_FocusListener = function(listener) {
     return this.Libraries_Interface_Item__.RemoveFocusListener$quorum_Libraries_Interface_Events_FocusListener(listener);
}
this.SetAccessibilityCode$quorum_integer = function(newAccessibilityCode) {
     return this.Libraries_Interface_Item__.SetAccessibilityCode$quorum_integer(newAccessibilityCode);
}
this.HasShadowX = function() {
     return this.Libraries_Interface_Controls_Control__.HasShadowX();
}
this.SetBackgroundColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetBackgroundColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.HasShadowY = function() {
     return this.Libraries_Interface_Controls_Control__.HasShadowY();
}
this.GetAngularDamping = function() {
     return this.Libraries_Interface_Item2D__.GetAngularDamping();
}
this.SetInterfaceOptionsKey$quorum_text = function(key) {
     return this.Libraries_Interface_Controls_Control__.SetInterfaceOptionsKey$quorum_text(key);
}
this.RequestReloadGraphics = function() {
     return this.Libraries_Interface_Controls_Control__.RequestReloadGraphics();
}
this.GetAccessibilityRoleDescription = function() {
     return this.Libraries_Interface_Item__.GetAccessibilityRoleDescription();
}
this.GetRotationInRadians = function() {
     return this.Libraries_Interface_Item2D__.GetRotationInRadians();
}
this.MoveX$quorum_number = function(xAmount) {
     return this.Libraries_Interface_Item2D__.MoveX$quorum_number(xAmount);
}
this.ResetMass = function() {
     return this.Libraries_Interface_Item2D__.ResetMass();
}
this.GetFontColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetFontColor();
}
this.RequestVerticesUpdate = function() {
     return this.Libraries_Interface_Item2D__.RequestVerticesUpdate();
}
this.HasLeftBorder = function() {
     return this.Libraries_Interface_Controls_Control__.HasLeftBorder();
}
this.HasTopLeftPixelRounding = function() {
     return this.Libraries_Interface_Controls_Control__.HasTopLeftPixelRounding();
}
this.GetActivationBehavior = function() {
     return this.Libraries_Interface_Controls_Control__.GetActivationBehavior();
}
this.UpdateBehaviors$quorum_number = function(seconds) {
     return this.Libraries_Interface_Item__.UpdateBehaviors$quorum_number(seconds);
}
this.SetCollisionGroupIndex$quorum_integer = function(index) {
     return this.Libraries_Interface_Item2D__.SetCollisionGroupIndex$quorum_integer(index);
}
this.GetRestitution = function() {
     return this.Libraries_Interface_Item2D__.GetRestitution();
}
this.SetScreenPositionFromPhysicsPosition = function() {
     return this.Libraries_Interface_Item2D__.SetScreenPositionFromPhysicsPosition();
}
this.IsPhysicsEnabled = function() {
     return this.Libraries_Interface_Item2D__.IsPhysicsEnabled();
}
this.SetClipping$quorum_boolean = function(clip) {
     return this.Libraries_Interface_Item2D__.SetClipping$quorum_boolean(clip);
}
this.SetScaleFromCenter$quorum_number = function(scale) {
     return this.Libraries_Interface_Item2D__.SetScaleFromCenter$quorum_number(scale);
}
this.IsShowing = function() {
     return this.Libraries_Interface_Item__.IsShowing();
}
this.SetBorderStyle$quorum_integer = function(style) {
     return this.Libraries_Interface_Controls_Control__.SetBorderStyle$quorum_integer(style);
}
this.Contains$quorum_number$quorum_number = function(containsX, containsY) {
     return this.Libraries_Interface_Item2D__.Contains$quorum_number$quorum_number(containsX, containsY);
}
this.IsCollidable = function() {
     return this.Libraries_Interface_Item2D__.IsCollidable();
}
this.Simulate$quorum_boolean = function(flag) {
     return this.Libraries_Interface_Item2D__.Simulate$quorum_boolean(flag);
}
this.GetPhysicsProperties = function() {
     return this.Libraries_Interface_Item2D__.GetPhysicsProperties();
}
this.GetRightPadding = function() {
     return this.Libraries_Interface_Controls_Control__.GetRightPadding();
}
this.SetY$quorum_number = function(setY) {
     return this.Libraries_Interface_Item2D__.SetY$quorum_number(setY);
}
this.SetMass$quorum_Libraries_Game_Physics_Mass2D = function(mass) {
     return this.Libraries_Interface_Item2D__.SetMass$quorum_Libraries_Game_Physics_Mass2D(mass);
}
this.GetBorderThickness = function() {
     return this.Libraries_Interface_Controls_Control__.GetBorderThickness();
}
this.GetAccessibleParent = function() {
     return this.Libraries_Interface_Item2D__.GetAccessibleParent();
}
this.SetFlipY$quorum_boolean = function(flip) {
     return this.Libraries_Interface_Item2D__.SetFlipY$quorum_boolean(flip);
}
this.GetName = function() {
     return this.Libraries_Interface_Item__.GetName();
}
this.GetPixelWidth = function() {
     return this.Libraries_Interface_Controls_Control__.GetPixelWidth();
}
this.ManageShape = function() {
     return this.Libraries_Interface_Item2D__.ManageShape();
}
this.GetBottomLeftRounding = function() {
     return this.Libraries_Interface_Controls_Control__.GetBottomLeftRounding();
}
this.GetLeftMargin = function() {
     return this.Libraries_Interface_Controls_Control__.GetLeftMargin();
}
this.GetFriction = function() {
     return this.Libraries_Interface_Item2D__.GetFriction();
}
this.GetSelectionListeners = function() {
     return this.Libraries_Interface_Controls_Control__.GetSelectionListeners();
}
this.SetHasMoved$quorum_boolean = function(flag) {
     return this.Libraries_Interface_Item2D__.SetHasMoved$quorum_boolean(flag);
}
this.FastMoving$quorum_boolean = function(flag) {
     return this.Libraries_Interface_Item2D__.FastMoving$quorum_boolean(flag);
}
this.SetFont$quorum_Libraries_Game_Graphics_Font = function(font) {
     return this.Libraries_Interface_Controls_Control__.SetFont$quorum_Libraries_Game_Graphics_Font(font);
}
this.SetPercentageX$quorum_number = function(x) {
     return this.Libraries_Interface_Controls_Control__.SetPercentageX$quorum_number(x);
}
this.GetBorderStyle = function() {
     return this.Libraries_Interface_Controls_Control__.GetBorderStyle();
}
this.ResetLayoutFlag = function() {
     return this.Libraries_Interface_Controls_Control__.ResetLayoutFlag();
}
this.SetTopRightPixelRounding$quorum_number = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetTopRightPixelRounding$quorum_number(value);
}
this.UpdateTransformAngle = function() {
     return this.Libraries_Interface_Item2D__.UpdateTransformAngle();
}
this.GetUnfocusedSelectionBorderColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetUnfocusedSelectionBorderColor();
}
this.EmptySelectionListeners = function() {
     return this.Libraries_Interface_Controls_Control__.EmptySelectionListeners();
}
this.GetLayer = function() {
     return this.Libraries_Interface_Item2D__.GetLayer();
}
this.GetWorldVector$quorum_Libraries_Compute_Vector2 = function(localVector) {
     return this.Libraries_Interface_Item2D__.GetWorldVector$quorum_Libraries_Compute_Vector2(localVector);
}
this.GetMouseDownColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetMouseDownColor();
}
this.HasFontOutlineThickness = function() {
     return this.Libraries_Interface_Controls_Control__.HasFontOutlineThickness();
}
this.GetFocusFontColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetFocusFontColor();
}
this.SetGlowColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetGlowColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.GetInterfaceOptionsKey = function() {
     return this.Libraries_Interface_Controls_Control__.GetInterfaceOptionsKey();
}
this.GetHorizontalLayoutMode = function() {
     return this.Libraries_Interface_Controls_Control__.GetHorizontalLayoutMode();
}
this.SetGridWidth$quorum_integer = function(gridWidth) {
     return this.Libraries_Interface_Controls_Control__.SetGridWidth$quorum_integer(gridWidth);
}
this.GetMass$quorum_Libraries_Game_Physics_Mass2D = function(mass) {
     return this.Libraries_Interface_Item2D__.GetMass$quorum_Libraries_Game_Physics_Mass2D(mass);
}
this.SetToLargeFont = function() {
     return this.Libraries_Interface_Controls_Control__.SetToLargeFont();
}
this.AddGestureListener$quorum_Libraries_Interface_Events_GestureListener = function(listener) {
     return this.Libraries_Interface_Item__.AddGestureListener$quorum_Libraries_Interface_Events_GestureListener(listener);
}
this.SetCornerRounding$quorum_number$quorum_number$quorum_number$quorum_number = function(bottomLeft, bottomRight, topLeft, topRight) {
     return this.Libraries_Interface_Controls_Control__.SetCornerRounding$quorum_number$quorum_number$quorum_number$quorum_number(bottomLeft, bottomRight, topLeft, topRight);
}
this.SetScaleFromCenter$quorum_number$quorum_number = function(newX, newY) {
     return this.Libraries_Interface_Item2D__.SetScaleFromCenter$quorum_number$quorum_number(newX, newY);
}
this.SetAccentColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetAccentColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.GetContainerGridWidth = function() {
     return this.Libraries_Interface_Controls_Control__.GetContainerGridWidth();
}
this.HasBottomLeftPixelRounding = function() {
     return this.Libraries_Interface_Controls_Control__.HasBottomLeftPixelRounding();
}
this.GetDefaultFont = function() {
     return this.Libraries_Interface_Controls_Control__.GetDefaultFont();
}
this.GetMouseDownGlowColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetMouseDownGlowColor();
}
this.SetTransform$quorum_Libraries_Game_Collision_PhysicsPosition2D = function(transform) {
     return this.Libraries_Interface_Item2D__.SetTransform$quorum_Libraries_Game_Collision_PhysicsPosition2D(transform);
}
this.HasMoved = function() {
     return this.Libraries_Interface_Item2D__.HasMoved();
}
this.RemoveMouseListener$quorum_Libraries_Interface_Events_MouseListener = function(listener) {
     return this.Libraries_Interface_Item__.RemoveMouseListener$quorum_Libraries_Interface_Events_MouseListener(listener);
}
this.SetFontOutlineColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetFontOutlineColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.GetShapeType = function() {
     return this.Libraries_Interface_Item2D__.GetShapeType();
}
this.AddMouseMovementListener$quorum_Libraries_Interface_Events_MouseMovementListener = function(listener) {
     return this.Libraries_Interface_Item__.AddMouseMovementListener$quorum_Libraries_Interface_Events_MouseMovementListener(listener);
}
this.SetMouseDownGlowColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetMouseDownGlowColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.GetOffsetX = function() {
     return this.Libraries_Interface_Item2D__.GetOffsetX();
}
this.GetOffsetZ = function() {
     return this.Libraries_Interface_Item2D__.GetOffsetZ();
}
this.GetOffsetY = function() {
     return this.Libraries_Interface_Item2D__.GetOffsetY();
}
this.GetItems = function() {
     return this.Libraries_Interface_Item2D__.GetItems();
}
this.GetHashCode = function() {
return global_Object_GetHashCode(this.prototype, );
}
this.GetMouseOverColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetMouseOverColor();
}
this.GetPixelHeight = function() {
     return this.Libraries_Interface_Controls_Control__.GetPixelHeight();
}
this.SetOffsetY$quorum_number = function(yAmount) {
     return this.Libraries_Interface_Item2D__.SetOffsetY$quorum_number(yAmount);
}
this.HasProperty$quorum_text = function(key) {
     return this.Libraries_Interface_Item__.HasProperty$quorum_text(key);
}
this.AddFocusListener$quorum_Libraries_Interface_Events_FocusListener = function(listener) {
     return this.Libraries_Interface_Item__.AddFocusListener$quorum_Libraries_Interface_Events_FocusListener(listener);
}
this.SetLinearDamping$quorum_number = function(linearDamping) {
     return this.Libraries_Interface_Item2D__.SetLinearDamping$quorum_number(linearDamping);
}
this.PrepareVertices = function() {
     return this.Libraries_Interface_Item2D__.PrepareVertices();
}
this.SetChildrenProcessingMouseEvents$quorum_boolean = function(shouldProcess) {
     return this.Libraries_Interface_Item2D__.SetChildrenProcessingMouseEvents$quorum_boolean(shouldProcess);
}
this.GetTopLeftPixelRounding = function() {
     return this.Libraries_Interface_Controls_Control__.GetTopLeftPixelRounding();
}
this.GetBottomLeftPixelRounding = function() {
     return this.Libraries_Interface_Controls_Control__.GetBottomLeftPixelRounding();
}
this.GetBoundingBox$quorum_integer = function(childIndex) {
     return this.Libraries_Interface_Item2D__.GetBoundingBox$quorum_integer(childIndex);
}
this.GetWidth = function() {
     return this.Libraries_Interface_Item2D__.GetWidth();
}
this.SetPercentageOriginY$quorum_number = function(y) {
     return this.Libraries_Interface_Controls_Control__.SetPercentageOriginY$quorum_number(y);
}
this.HasBottomBorder = function() {
     return this.Libraries_Interface_Controls_Control__.HasBottomBorder();
}
this.HasTopRightRounding = function() {
     return this.Libraries_Interface_Controls_Control__.HasTopRightRounding();
}
this.Activate$quorum_Libraries_Interface_Events_BehaviorEvent = function(event) {
     return this.Libraries_Interface_Controls_Control__.Activate$quorum_Libraries_Interface_Events_BehaviorEvent(event);
}
this.IsFocusable = function() {
     return this.Libraries_Interface_Item__.IsFocusable();
}
this.NotifySelectionListeners$quorum_Libraries_Interface_Events_SelectionEvent = function(event) {
     return this.Libraries_Interface_Controls_Control__.NotifySelectionListeners$quorum_Libraries_Interface_Events_SelectionEvent(event);
}
this.GetCollisionList = function() {
     return this.Libraries_Interface_Item2D__.GetCollisionList();
}
this.GetPreviousFocus = function() {
     return this.Libraries_Interface_Item__.GetPreviousFocus();
}
this.SetFontSize$quorum_integer = function(size) {
     return this.Libraries_Interface_Controls_Control__.SetFontSize$quorum_integer(size);
}
this.GetDescription = function() {
     return this.Libraries_Interface_Item__.GetDescription();
}
this.GetUnfocusedSelectionColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetUnfocusedSelectionColor();
}
this.GetPercentageX = function() {
     return this.Libraries_Interface_Controls_Control__.GetPercentageX();
}
this.SetBottomLeftRounding$quorum_number = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetBottomLeftRounding$quorum_number(value);
}
this.GetPercentageY = function() {
     return this.Libraries_Interface_Controls_Control__.GetPercentageY();
}
this.SetView2D$quorum_Libraries_Interface_Views_View2D = function(content) {
     return this.Libraries_Interface_Item2D__.SetView2D$quorum_Libraries_Interface_Views_View2D(content);
}
this.GetBoundingRectangle = function() {
     return this.Libraries_Interface_Item2D__.GetBoundingRectangle();
}
this.GetMouseMovementListeners = function() {
     return this.Libraries_Interface_Item__.GetMouseMovementListeners();
}
this.SetFocusColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetFocusColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.SetGridY$quorum_integer = function(gridY) {
     return this.Libraries_Interface_Controls_Control__.SetGridY$quorum_integer(gridY);
}
this.GetHeight = function() {
     return this.Libraries_Interface_Item2D__.GetHeight();
}
this.GetPercentageWidth = function() {
     return this.Libraries_Interface_Controls_Control__.GetPercentageWidth();
}
this.GetProperty$quorum_text = function(key) {
     return this.Libraries_Interface_Item__.GetProperty$quorum_text(key);
}
this.LostSelection = function() {
     return this.Libraries_Interface_Controls_Control__.LostSelection();
}
this.Advance$quorum_number = function(time) {
     return this.Libraries_Interface_Item2D__.Advance$quorum_number(time);
}
this.SetOffset$quorum_number$quorum_number$quorum_number = function(xAmount, yAmount, zAmount) {
     return this.Libraries_Interface_Item2D__.SetOffset$quorum_number$quorum_number$quorum_number(xAmount, yAmount, zAmount);
}
this.GetUnfocusedSelectionFontColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetUnfocusedSelectionFontColor();
}
this.IsOnLayer = function() {
     return this.Libraries_Interface_Item2D__.IsOnLayer();
}
this.ProcessMouseEvent$quorum_Libraries_Interface_Events_MouseEvent = function(event) {
     return this.Libraries_Interface_Item2D__.ProcessMouseEvent$quorum_Libraries_Interface_Events_MouseEvent(event);
}
this.GetLayoutProperties$quorum_number$quorum_number = function(containerWidth, containerHeight) {
     return this.Libraries_Interface_Controls_Control__.GetLayoutProperties$quorum_number$quorum_number(containerWidth, containerHeight);
}
this.HasColorPropertyOverride$quorum_text = function(property) {
     return this.Libraries_Interface_Controls_Control__.HasColorPropertyOverride$quorum_text(property);
}
this.HasRightBorder = function() {
     return this.Libraries_Interface_Controls_Control__.HasRightBorder();
}
this.SetOffsetZ$quorum_number = function(zAmount) {
     return this.Libraries_Interface_Item2D__.SetOffsetZ$quorum_number(zAmount);
}
this.SetFlipX$quorum_boolean = function(flip) {
     return this.Libraries_Interface_Item2D__.SetFlipX$quorum_boolean(flip);
}
this.AddMouseWheelListener$quorum_Libraries_Interface_Events_MouseWheelListener = function(listener) {
     return this.Libraries_Interface_Item__.AddMouseWheelListener$quorum_Libraries_Interface_Events_MouseWheelListener(listener);
}
this.RemoveLayoutProperties$quorum_Libraries_Interface_Layouts_LayoutProperties = function(properties) {
     return this.Libraries_Interface_Controls_Control__.RemoveLayoutProperties$quorum_Libraries_Interface_Layouts_LayoutProperties(properties);
}
this.SetFriction$quorum_number = function(friction) {
     return this.Libraries_Interface_Item2D__.SetFriction$quorum_number(friction);
}
this.GetLocalPoint$quorum_Libraries_Compute_Vector2 = function(worldPoint) {
     return this.Libraries_Interface_Item2D__.GetLocalPoint$quorum_Libraries_Compute_Vector2(worldPoint);
}
this.GetLinearVelocityFromLocalPoint$quorum_Libraries_Compute_Vector2 = function(localPoint) {
     return this.Libraries_Interface_Item2D__.GetLinearVelocityFromLocalPoint$quorum_Libraries_Compute_Vector2(localPoint);
}
this.SetName$quorum_text = function(newName) {
     return this.Libraries_Interface_Item__.SetName$quorum_text(newName);
}
this.GainedSelection = function() {
     return this.Libraries_Interface_Controls_Control__.GainedSelection();
}
this.ManageLayers = function() {
     return this.Libraries_Interface_Item2D__.ManageLayers();
}
this.SetMouseOverFontColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetMouseOverFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.SetGridPosition$quorum_integer$quorum_integer = function(gridX, gridY) {
     return this.Libraries_Interface_Controls_Control__.SetGridPosition$quorum_integer$quorum_integer(gridX, gridY);
}
this.NotifyAccessibilityBoundsChanged = function() {
     return this.Libraries_Interface_Item2D__.NotifyAccessibilityBoundsChanged();
}
this.SetShadowX$quorum_number = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetShadowX$quorum_number(value);
}
this.SetRightMargin$quorum_number = function(padding) {
     return this.Libraries_Interface_Controls_Control__.SetRightMargin$quorum_number(padding);
}
this.HasBottomLeftRounding = function() {
     return this.Libraries_Interface_Controls_Control__.HasBottomLeftRounding();
}
this.AddLayoutProperties$quorum_Libraries_Interface_Layouts_LayoutProperties = function(properties) {
     return this.Libraries_Interface_Controls_Control__.AddLayoutProperties$quorum_Libraries_Interface_Layouts_LayoutProperties(properties);
}
this.LostFocus$quorum_Libraries_Interface_Events_FocusEvent = function(event) {
     return this.Libraries_Interface_Controls_Control__.LostFocus$quorum_Libraries_Interface_Events_FocusEvent(event);
}
this.CreateNodes$quorum_Libraries_Game_Collision_BroadphaseCollision2D$quorum_Libraries_Game_Collision_PhysicsPosition2D = function(broadphase, transform) {
     return this.Libraries_Interface_Item2D__.CreateNodes$quorum_Libraries_Game_Collision_BroadphaseCollision2D$quorum_Libraries_Game_Collision_PhysicsPosition2D(broadphase, transform);
}
this.SetCornerPixelRounding$quorum_number$quorum_number$quorum_number$quorum_number = function(bottomLeft, bottomRight, topLeft, topRight) {
     return this.Libraries_Interface_Controls_Control__.SetCornerPixelRounding$quorum_number$quorum_number$quorum_number$quorum_number(bottomLeft, bottomRight, topLeft, topRight);
}
this.SetBottomMargin$quorum_number = function(padding) {
     return this.Libraries_Interface_Controls_Control__.SetBottomMargin$quorum_number(padding);
}
this.HasProperties = function() {
     return this.Libraries_Interface_Item__.HasProperties();
}
this.SetHorizontalLayoutMode$quorum_integer = function(mode) {
     return this.Libraries_Interface_Controls_Control__.SetHorizontalLayoutMode$quorum_integer(mode);
}
this.SetPopupMenu$quorum_Libraries_Interface_Controls_PopupMenu = function(menu) {
     return this.Libraries_Interface_Controls_Control__.SetPopupMenu$quorum_Libraries_Interface_Controls_PopupMenu(menu);
}
this.SetMouseOverGlowColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetMouseOverGlowColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.SetAngularDamping$quorum_number = function(angularDamping) {
     return this.Libraries_Interface_Item2D__.SetAngularDamping$quorum_number(angularDamping);
}
this.GetShadowWidth = function() {
     return this.Libraries_Interface_Controls_Control__.GetShadowWidth();
}
this.HasShadowHeight = function() {
     return this.Libraries_Interface_Controls_Control__.HasShadowHeight();
}
this.GetNumberProperty$quorum_text = function(property) {
     return this.Libraries_Interface_Controls_Control__.GetNumberProperty$quorum_text(property);
}
this.HasBorderThickness = function() {
     return this.Libraries_Interface_Controls_Control__.HasBorderThickness();
}
this.GetMouseOverFontColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetMouseOverFontColor();
}
this.GetScaleY = function() {
     return this.Libraries_Interface_Item2D__.GetScaleY();
}
this.Equals$quorum_Libraries_Language_Object = function(object) {
return global_Object_Equals(this.prototype, object);
}
this.GetScaleX = function() {
     return this.Libraries_Interface_Item2D__.GetScaleX();
}
this.SetClipCoordinates$quorum_Libraries_Game_Graphics_Painter2D = function(painter) {
     return this.Libraries_Interface_Item2D__.SetClipCoordinates$quorum_Libraries_Game_Graphics_Painter2D(painter);
}
this.GetView2D = function() {
     return this.Libraries_Interface_Item2D__.GetView2D();
}
this.GetDefaultFontSize = function() {
     return this.Libraries_Interface_Controls_Control__.GetDefaultFontSize();
}
this.SetCollidable$quorum_boolean = function(flag) {
     return this.Libraries_Interface_Item2D__.SetCollidable$quorum_boolean(flag);
}
this.GainedFocus$quorum_Libraries_Interface_Events_FocusEvent = function(event) {
     return this.Libraries_Interface_Controls_Control__.GainedFocus$quorum_Libraries_Interface_Events_FocusEvent(event);
}
this.SetWidth$quorum_number = function(newWidth) {
     return this.Libraries_Interface_Item2D__.SetWidth$quorum_number(newWidth);
}
this.GetSelectionBorderColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetSelectionBorderColor();
}
this.SetSelectionFontColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetSelectionFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.GetInverseMass = function() {
     return this.Libraries_Interface_Item2D__.GetInverseMass();
}
this.GetTransform = function() {
     return this.Libraries_Interface_Item2D__.GetTransform();
}
this.HasBottomRightRounding = function() {
     return this.Libraries_Interface_Controls_Control__.HasBottomRightRounding();
}
this.GetRotation = function() {
     return this.Libraries_Interface_Item2D__.GetRotation();
}
this.GetDensity = function() {
     return this.Libraries_Interface_Item2D__.GetDensity();
}
this.GetPropertyKeyIterator = function() {
     return this.Libraries_Interface_Item__.GetPropertyKeyIterator();
}
this.SynchronizeNodes = function() {
     return this.Libraries_Interface_Item2D__.SynchronizeNodes();
}
this.SetProperty$quorum_text$quorum_Libraries_Data_Formats_JavaScriptObjectNotation = function(key, value) {
     return this.Libraries_Interface_Item__.SetProperty$quorum_text$quorum_Libraries_Data_Formats_JavaScriptObjectNotation(key, value);
}
this.GetDefaultLayoutProperties = function() {
     return this.Libraries_Interface_Controls_Control__.GetDefaultLayoutProperties();
}
this.SetLeftPadding$quorum_number = function(padding) {
     return this.Libraries_Interface_Controls_Control__.SetLeftPadding$quorum_number(padding);
}
this.SetLayer$quorum_Libraries_Game_Layer2D = function(parentLayer) {
     return this.Libraries_Interface_Item2D__.SetLayer$quorum_Libraries_Game_Layer2D(parentLayer);
}
this.IsRenderingFocus = function() {
     return this.Libraries_Interface_Controls_Control__.IsRenderingFocus();
}
this.GetForegroundSelectionColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetForegroundSelectionColor();
}
this.GetLocalCenter = function() {
     return this.Libraries_Interface_Item2D__.GetLocalCenter();
}
this.SetNonResponsive = function() {
     return this.Libraries_Interface_Item2D__.SetNonResponsive();
}
this.SetRotation$quorum_number = function(degrees) {
     return this.Libraries_Interface_Item2D__.SetRotation$quorum_number(degrees);
}
this.SetItem$quorum_integer$quorum_Libraries_Interface_Item2D = function(index, newItem) {
     return this.Libraries_Interface_Item2D__.SetItem$quorum_integer$quorum_Libraries_Interface_Item2D(index, newItem);
}
this.SetTopMargin$quorum_number = function(padding) {
     return this.Libraries_Interface_Controls_Control__.SetTopMargin$quorum_number(padding);
}
this.HasShadowWidth = function() {
     return this.Libraries_Interface_Controls_Control__.HasShadowWidth();
}
this.RemoveControlActivationListener$quorum_Libraries_Interface_Events_ControlActivationListener = function(listener) {
     return this.Libraries_Interface_Controls_Control__.RemoveControlActivationListener$quorum_Libraries_Interface_Events_ControlActivationListener(listener);
}
this.Focus = function() {
     return this.Libraries_Interface_Item__.Focus();
}
this.SetScale$quorum_number$quorum_number = function(newX, newY) {
     return this.Libraries_Interface_Item2D__.SetScale$quorum_number$quorum_number(newX, newY);
}
this.SetInterfaceScale$quorum_number = function(scale) {
     return this.Libraries_Interface_Controls_Control__.SetInterfaceScale$quorum_number(scale);
}
this.SetFocusFontColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetFocusFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.HasTopBorder = function() {
     return this.Libraries_Interface_Controls_Control__.HasTopBorder();
}
this.SetBottomRightRounding$quorum_number = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetBottomRightRounding$quorum_number(value);
}
this.ShouldCollide$quorum_Libraries_Interface_Item2D = function(otherItem) {
     return this.Libraries_Interface_Item2D__.ShouldCollide$quorum_Libraries_Interface_Item2D(otherItem);
}
this.SetNumberProperty$quorum_text$quorum_number = function(property, value) {
     return this.Libraries_Interface_Controls_Control__.SetNumberProperty$quorum_text$quorum_number(property, value);
}
this.SetFocusBorderColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetFocusBorderColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.SetAngularVelocity$quorum_number = function(angularVelocity) {
     return this.Libraries_Interface_Item2D__.SetAngularVelocity$quorum_number(angularVelocity);
}
this.ApplyAngularImpulse$quorum_number = function(impulse) {
     return this.Libraries_Interface_Item2D__.ApplyAngularImpulse$quorum_number(impulse);
}
this.SetSize$quorum_number$quorum_number = function(newWidth, newHeight) {
     return this.Libraries_Interface_Item2D__.SetSize$quorum_number$quorum_number(newWidth, newHeight);
}
this.SetContainerGridHeight$quorum_integer = function(containerGridHeight) {
     return this.Libraries_Interface_Controls_Control__.SetContainerGridHeight$quorum_integer(containerGridHeight);
}
this.SetUpdateTransform$quorum_boolean = function(flag) {
     return this.Libraries_Interface_Item2D__.SetUpdateTransform$quorum_boolean(flag);
}
this.Draw$quorum_Libraries_Game_Graphics_Painter2D = function(painter) {
     return this.Libraries_Interface_Item2D__.Draw$quorum_Libraries_Game_Graphics_Painter2D(painter);
}
this.Dispose = function() {
     return this.Libraries_Interface_Item__.Dispose();
}
this.GetItemCount = function() {
     return this.Libraries_Interface_Item2D__.GetItemCount();
}
this.RemoveMouseMovementListener$quorum_Libraries_Interface_Events_MouseMovementListener = function(listener) {
     return this.Libraries_Interface_Item__.RemoveMouseMovementListener$quorum_Libraries_Interface_Events_MouseMovementListener(listener);
}
this.GetIcon = function() {
     return this.Libraries_Interface_Controls_Control__.GetIcon();
}
this.SetDescription$quorum_text = function(newDescription) {
     return this.Libraries_Interface_Item__.SetDescription$quorum_text(newDescription);
}
this.GetGridX = function() {
     return this.Libraries_Interface_Controls_Control__.GetGridX();
}
this.GetGridY = function() {
     return this.Libraries_Interface_Controls_Control__.GetGridY();
}
this.GetColorProperty$quorum_text = function(property) {
     return this.Libraries_Interface_Controls_Control__.GetColorProperty$quorum_text(property);
}
this.GetBackgroundColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetBackgroundColor();
}
this.GetMouseDownFontColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetMouseDownFontColor();
}
this.SetForce$quorum_Libraries_Compute_Vector2 = function(force) {
     return this.Libraries_Interface_Item2D__.SetForce$quorum_Libraries_Compute_Vector2(force);
}
this.SetBorderThickness$quorum_number = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetBorderThickness$quorum_number(value);
}
this.CancelBehaviors = function() {
     return this.Libraries_Interface_Item__.CancelBehaviors();
}
this.SetDensity$quorum_number = function(density) {
     return this.Libraries_Interface_Item2D__.SetDensity$quorum_number(density);
}
this.GetItem$quorum_integer = function(index) {
     return this.Libraries_Interface_Item2D__.GetItem$quorum_integer(index);
}
this.GetLocalVector$quorum_Libraries_Compute_Vector2 = function(worldVector) {
     return this.Libraries_Interface_Item2D__.GetLocalVector$quorum_Libraries_Compute_Vector2(worldVector);
}
this.GetLayoutProperties = function() {
     return this.Libraries_Interface_Controls_Control__.GetLayoutProperties();
}
this.GetInterfaceScale = function() {
     return this.Libraries_Interface_Controls_Control__.GetInterfaceScale();
}
this.SetHeight$quorum_number = function(newHeight) {
     return this.Libraries_Interface_Item2D__.SetHeight$quorum_number(newHeight);
}
this.IsCustomDrawing = function() {
     return this.Libraries_Interface_Item2D__.IsCustomDrawing();
}
this.GetInputGroup = function() {
     return this.Libraries_Interface_Item__.GetInputGroup();
}
this.GetMass = function() {
     return this.Libraries_Interface_Item2D__.GetMass();
}
this.GetBottomRightPixelRounding = function() {
     return this.Libraries_Interface_Controls_Control__.GetBottomRightPixelRounding();
}
this.Compare$quorum_Libraries_Language_Object = function(object) {
return global_Object_Compare(this.prototype, object);
}
this.GetPercentageHeight = function() {
     return this.Libraries_Interface_Controls_Control__.GetPercentageHeight();
}
this.GetBorderColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetBorderColor();
}
this.GetGlobalZ = function() {
     return this.Libraries_Interface_Item2D__.GetGlobalZ();
}
this.GetGlobalY = function() {
     return this.Libraries_Interface_Item2D__.GetGlobalY();
}
this.RemoveGestureListener$quorum_Libraries_Interface_Events_GestureListener = function(listener) {
     return this.Libraries_Interface_Item__.RemoveGestureListener$quorum_Libraries_Interface_Events_GestureListener(listener);
}
this.GetTopPadding = function() {
     return this.Libraries_Interface_Controls_Control__.GetTopPadding();
}
this.SetLayoutRows$quorum_number = function(layoutRows) {
     return this.Libraries_Interface_Controls_Control__.SetLayoutRows$quorum_number(layoutRows);
}
this.SetPixelWidth$quorum_number = function(width) {
     return this.Libraries_Interface_Controls_Control__.SetPixelWidth$quorum_number(width);
}
this.NeedsLayout = function() {
     return this.Libraries_Interface_Controls_Control__.NeedsLayout();
}
this.LoadGraphics$quorum_Libraries_Interface_Layouts_LayoutProperties = function(properties) {
     return this.Libraries_Interface_Controls_Control__.LoadGraphics$quorum_Libraries_Interface_Layouts_LayoutProperties(properties);
}
this.SetOffset$quorum_number$quorum_number = function(xAmount, yAmount) {
     return this.Libraries_Interface_Item2D__.SetOffset$quorum_number$quorum_number(xAmount, yAmount);
}
this.GetAngularVelocity = function() {
     return this.Libraries_Interface_Item2D__.GetAngularVelocity();
}
this.GetInertia = function() {
     return this.Libraries_Interface_Item2D__.GetInertia();
}
this.SetScaleX$quorum_number = function(scaleX) {
     return this.Libraries_Interface_Item2D__.SetScaleX$quorum_number(scaleX);
}
this.GetGridWidth = function() {
     return this.Libraries_Interface_Controls_Control__.GetGridWidth();
}
this.GetLabelText = function() {
     return this.Libraries_Interface_Controls_Control__.GetLabelText();
}
this.DestroyNodes$quorum_Libraries_Game_Collision_BroadphaseCollision2D = function(broadphase) {
     return this.Libraries_Interface_Item2D__.DestroyNodes$quorum_Libraries_Game_Collision_BroadphaseCollision2D(broadphase);
}
this.GetGestureListeners = function() {
     return this.Libraries_Interface_Item__.GetGestureListeners();
}
this.SetIconColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetIconColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.GetFocusBorderColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetFocusBorderColor();
}
this.GetShadowEdgeFade = function() {
     return this.Libraries_Interface_Controls_Control__.GetShadowEdgeFade();
}
this.SetBoundingBox$quorum_number$quorum_number$quorum_number$quorum_number = function(newX, newY, newWidth, newHeight) {
     return this.Libraries_Interface_Item2D__.SetBoundingBox$quorum_number$quorum_number$quorum_number$quorum_number(newX, newY, newWidth, newHeight);
}
this.RemoveTouchListener$quorum_Libraries_Interface_Events_TouchListener = function(listener) {
     return this.Libraries_Interface_Item__.RemoveTouchListener$quorum_Libraries_Interface_Events_TouchListener(listener);
}
this.SetNextFocus$quorum_Libraries_Interface_Item = function(next) {
     return this.Libraries_Interface_Item__.SetNextFocus$quorum_Libraries_Interface_Item(next);
}
this.SetPosition$quorum_number$quorum_number = function(setX, setY) {
     return this.Libraries_Interface_Item2D__.SetPosition$quorum_number$quorum_number(setX, setY);
}
this.FlipY = function() {
     return this.Libraries_Interface_Item2D__.FlipY();
}
this.GetChildAsItem$quorum_integer = function(index) {
     return this.Libraries_Interface_Item2D__.GetChildAsItem$quorum_integer(index);
}
this.SetCenterY$quorum_number = function(setY) {
     return this.Libraries_Interface_Item2D__.SetCenterY$quorum_number(setY);
}
this.ReleasedMouse = function() {
     return this.Libraries_Interface_Controls_Control__.ReleasedMouse();
}
this.FlipX = function() {
     return this.Libraries_Interface_Item2D__.FlipX();
}
this.SetBottomRightPixelRounding$quorum_number = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetBottomRightPixelRounding$quorum_number(value);
}
this.GetCollisionGroupIndex = function() {
     return this.Libraries_Interface_Item2D__.GetCollisionGroupIndex();
}
this.SetRestitution$quorum_number = function(restitution) {
     return this.Libraries_Interface_Item2D__.SetRestitution$quorum_number(restitution);
}
this.EmptyChildren = function() {
     return this.Libraries_Interface_Item__.EmptyChildren();
}
this.GetSelectionFontColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetSelectionFontColor();
}
this.UpdateAll$quorum_number = function(seconds) {
     return this.Libraries_Interface_Controls_Control__.UpdateAll$quorum_number(seconds);
}
this.Move$quorum_Libraries_Compute_Vector2 = function(movement) {
     return this.Libraries_Interface_Item2D__.Move$quorum_Libraries_Compute_Vector2(movement);
}
this.GetSleepTime = function() {
     return this.Libraries_Interface_Item2D__.GetSleepTime();
}
this.GetTouchListeners = function() {
     return this.Libraries_Interface_Item__.GetTouchListeners();
}
this.SetGridSize$quorum_integer$quorum_integer = function(gridWidth, gridHeight) {
     return this.Libraries_Interface_Controls_Control__.SetGridSize$quorum_integer$quorum_integer(gridWidth, gridHeight);
}
this.GetX = function() {
     return this.Libraries_Interface_Item2D__.GetX();
}
this.GetY = function() {
     return this.Libraries_Interface_Item2D__.GetY();
}
this.GetTopMargin = function() {
     return this.Libraries_Interface_Controls_Control__.GetTopMargin();
}
this.GetZ = function() {
     return this.Libraries_Interface_Item2D__.GetZ();
}
this.SetCustomDrawing$quorum_boolean = function(isCustom) {
     return this.Libraries_Interface_Item2D__.SetCustomDrawing$quorum_boolean(isCustom);
}
this.EnablePhysics$quorum_boolean = function(flag) {
     return this.Libraries_Interface_Item2D__.EnablePhysics$quorum_boolean(flag);
}
this.SetLeftMargin$quorum_number = function(padding) {
     return this.Libraries_Interface_Controls_Control__.SetLeftMargin$quorum_number(padding);
}
this.SynchronizeTransform = function() {
     return this.Libraries_Interface_Item2D__.SynchronizeTransform();
}
this.SetIcon$quorum_Libraries_Game_Graphics_TextureRegion = function(icon) {
     return this.Libraries_Interface_Controls_Control__.SetIcon$quorum_Libraries_Game_Graphics_TextureRegion(icon);
}
this.IsNonResponsive = function() {
     return this.Libraries_Interface_Item2D__.IsNonResponsive();
}
this.SetShadowEdgeFade$quorum_number = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetShadowEdgeFade$quorum_number(value);
}
this.CanRotate$quorum_boolean = function(flag) {
     return this.Libraries_Interface_Item2D__.CanRotate$quorum_boolean(flag);
}
this.HasShadowEdgeFade = function() {
     return this.Libraries_Interface_Controls_Control__.HasShadowEdgeFade();
}
this.SetTopLeftPixelRounding$quorum_number = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetTopLeftPixelRounding$quorum_number(value);
}
this.GetShape = function() {
     return this.Libraries_Interface_Item2D__.GetShape();
}
this.SetPercentageHeight$quorum_number = function(height) {
     return this.Libraries_Interface_Controls_Control__.SetPercentageHeight$quorum_number(height);
}
this.Hide = function() {
     return this.Libraries_Interface_Item__.Hide();
}
this.SetTopLeftRounding$quorum_number = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetTopLeftRounding$quorum_number(value);
}
this.GetCenterY = function() {
     return this.Libraries_Interface_Item2D__.GetCenterY();
}
this.SetVerticalLayoutMode$quorum_integer = function(mode) {
     return this.Libraries_Interface_Controls_Control__.SetVerticalLayoutMode$quorum_integer(mode);
}
this.Rotate$quorum_number = function(degrees) {
     return this.Libraries_Interface_Item2D__.Rotate$quorum_number(degrees);
}
this.GetCenterX = function() {
     return this.Libraries_Interface_Item2D__.GetCenterX();
}
this.ComputeDistance$quorum_Libraries_Compute_Vector2$quorum_integer$quorum_Libraries_Compute_Vector2 = function(point, childIndex, normalOut) {
     return this.Libraries_Interface_Item2D__.ComputeDistance$quorum_Libraries_Compute_Vector2$quorum_integer$quorum_Libraries_Compute_Vector2(point, childIndex, normalOut);
}
this.GetAccessibilityType = function() {
     return this.Libraries_Interface_Item__.GetAccessibilityType();
}
this.Update$quorum_number = function(secondsSinceUpdate) {
     return this.Libraries_Interface_Item__.Update$quorum_number(secondsSinceUpdate);
}
this.GetCollisionGroupFlag = function() {
     return this.Libraries_Interface_Item2D__.GetCollisionGroupFlag();
}
this.IsRenderingMouseOver = function() {
     return this.Libraries_Interface_Controls_Control__.IsRenderingMouseOver();
}
this.SetShadowWidth$quorum_number = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetShadowWidth$quorum_number(value);
}
this.SetCenter$quorum_number$quorum_number = function(setX, setY) {
     return this.Libraries_Interface_Item2D__.SetCenter$quorum_number$quorum_number(setX, setY);
}
this.SetShape$quorum_Libraries_Game_Collision_Shapes_CollisionShape2D = function(shape) {
     return this.Libraries_Interface_Item2D__.SetShape$quorum_Libraries_Game_Collision_Shapes_CollisionShape2D(shape);
}
this.SetFocusable$quorum_boolean = function(focus) {
     return this.Libraries_Interface_Item__.SetFocusable$quorum_boolean(focus);
}
this.GetDrawableShape = function() {
     return this.Libraries_Interface_Item2D__.GetDrawableShape();
}
this.SetSelectionBorderColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetSelectionBorderColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.SetInputGroup$quorum_text = function(group) {
     return this.Libraries_Interface_Item__.SetInputGroup$quorum_text(group);
}
this.IsRenderingMouseDown = function() {
     return this.Libraries_Interface_Controls_Control__.IsRenderingMouseDown();
}
this.GetPercentageOriginX = function() {
     return this.Libraries_Interface_Controls_Control__.GetPercentageOriginX();
}
this.GetPercentageOriginY = function() {
     return this.Libraries_Interface_Controls_Control__.GetPercentageOriginY();
}
this.ProcessTouchEvent$quorum_Libraries_Interface_Events_TouchEvent = function(event) {
     return this.Libraries_Interface_Item2D__.ProcessTouchEvent$quorum_Libraries_Interface_Events_TouchEvent(event);
}
this.SetForegroundColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetForegroundColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.TestPoint$quorum_Libraries_Compute_Vector2 = function(point) {
     return this.Libraries_Interface_Item2D__.TestPoint$quorum_Libraries_Compute_Vector2(point);
}
this.GetNodes = function() {
     return this.Libraries_Interface_Item2D__.GetNodes();
}
this.GetForce = function() {
     return this.Libraries_Interface_Item2D__.GetForce();
}
this.GetChildren = function() {
     return this.Libraries_Interface_Item2D__.GetChildren();
}
this.SetCollisionGroupFlag$quorum_boolean = function(flag) {
     return this.Libraries_Interface_Item2D__.SetCollisionGroupFlag$quorum_boolean(flag);
}
this.GetForegroundColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetForegroundColor();
}
this.GetNextFocus = function() {
     return this.Libraries_Interface_Item__.GetNextFocus();
}
this.GetMouseOverGlowColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetMouseOverGlowColor();
}
this.ApplyTorque$quorum_number = function(torque) {
     return this.Libraries_Interface_Item2D__.ApplyTorque$quorum_number(torque);
}
this.CollideWithChildren = function() {
     return this.Libraries_Interface_Item2D__.CollideWithChildren();
}
this.Empty = function() {
     return this.Libraries_Interface_Item2D__.Empty();
}
this.GetScreenX = function() {
     return this.Libraries_Interface_Item2D__.GetScreenX();
}
this.Add$quorum_integer$quorum_Libraries_Interface_Item2D = function(index, newItem) {
     return this.Libraries_Interface_Controls_Control__.Add$quorum_integer$quorum_Libraries_Interface_Item2D(index, newItem);
}
this.GetScreenY = function() {
     return this.Libraries_Interface_Item2D__.GetScreenY();
}
this.SetShadowColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetShadowColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.GetWorldCenter = function() {
     return this.Libraries_Interface_Item2D__.GetWorldCenter();
}
this.ProcessGestureEvent$quorum_Libraries_Interface_Events_GestureEvent = function(event) {
     return this.Libraries_Interface_Item2D__.ProcessGestureEvent$quorum_Libraries_Interface_Events_GestureEvent(event);
}
this.GetFontOutlineColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetFontOutlineColor();
}
this.AddMouseListener$quorum_Libraries_Interface_Events_MouseListener = function(listener) {
     return this.Libraries_Interface_Item__.AddMouseListener$quorum_Libraries_Interface_Events_MouseListener(listener);
}
this.GetBottomPadding = function() {
     return this.Libraries_Interface_Controls_Control__.GetBottomPadding();
}
this.GetClipCoordinates$quorum_Libraries_Compute_Vector2$quorum_Libraries_Compute_Vector2 = function(xCoords, yCoords) {
     return this.Libraries_Interface_Item2D__.GetClipCoordinates$quorum_Libraries_Compute_Vector2$quorum_Libraries_Compute_Vector2(xCoords, yCoords);
}
this.Show = function() {
     return this.Libraries_Interface_Item__.Show();
}
this.GetFont = function() {
     return this.Libraries_Interface_Controls_Control__.GetFont();
}
this.EndMouseOver = function() {
     return this.Libraries_Interface_Controls_Control__.EndMouseOver();
}
this.SetOffsetX$quorum_number = function(xAmount) {
     return this.Libraries_Interface_Item2D__.SetOffsetX$quorum_number(xAmount);
}
this.SetPixelX$quorum_number = function(x) {
     return this.Libraries_Interface_Controls_Control__.SetPixelX$quorum_number(x);
}
this.SetFontOutlineThickness$quorum_number = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetFontOutlineThickness$quorum_number(value);
}
this.GetSweep = function() {
     return this.Libraries_Interface_Item2D__.GetSweep();
}
this.GetNodeCount = function() {
     return this.Libraries_Interface_Item2D__.GetNodeCount();
}
this.ApplyLinearImpulse$quorum_Libraries_Compute_Vector2$quorum_Libraries_Compute_Vector2 = function(impulse, point) {
     return this.Libraries_Interface_Item2D__.ApplyLinearImpulse$quorum_Libraries_Compute_Vector2$quorum_Libraries_Compute_Vector2(impulse, point);
}
this.Activate = function() {
     return this.Libraries_Interface_Controls_Control__.Activate();
}
this.SetLabelText$quorum_text = function(labelText) {
     return this.Libraries_Interface_Controls_Control__.SetLabelText$quorum_text(labelText);
}
this.GetIconColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetIconColor();
}
this.GetTopRightRounding = function() {
     return this.Libraries_Interface_Controls_Control__.GetTopRightRounding();
}
this.IsAcceptingMouseInput = function() {
     return this.Libraries_Interface_Item__.IsAcceptingMouseInput();
}
this.GetPropertiesSize = function() {
     return this.Libraries_Interface_Item__.GetPropertiesSize();
}
this.SetBottomPadding$quorum_number = function(padding) {
     return this.Libraries_Interface_Controls_Control__.SetBottomPadding$quorum_number(padding);
}
this.HasNumberPropertyOverride$quorum_text = function(property) {
     return this.Libraries_Interface_Controls_Control__.HasNumberPropertyOverride$quorum_text(property);
}
this.GetContainerGridHeight = function() {
     return this.Libraries_Interface_Controls_Control__.GetContainerGridHeight();
}
this.SetOriginCenter = function() {
     return this.Libraries_Interface_Item2D__.SetOriginCenter();
}
this.EmptyAll = function() {
     return this.Libraries_Interface_Item__.EmptyAll();
}
this.RequestHierarchyUpdate$quorum_Libraries_Interface_Item2D = function(item) {
     return this.Libraries_Interface_Item2D__.RequestHierarchyUpdate$quorum_Libraries_Interface_Item2D(item);
}
this.ScaleFromCenter$quorum_number = function(amount) {
     return this.Libraries_Interface_Item2D__.ScaleFromCenter$quorum_number(amount);
}
this.NotifyControlActivationListeners$quorum_Libraries_Interface_Events_ControlActivationEvent = function(event) {
     return this.Libraries_Interface_Controls_Control__.NotifyControlActivationListeners$quorum_Libraries_Interface_Events_ControlActivationEvent(event);
}
this.IsAccessibleParent = function() {
     return this.Libraries_Interface_Item__.IsAccessibleParent();
}
this.GetFontOutlineThickness = function() {
     return this.Libraries_Interface_Controls_Control__.GetFontOutlineThickness();
}
this.GetParent = function() {
     return this.Libraries_Interface_Item2D__.GetParent();
}
this.SetAcceptsMouseInput$quorum_boolean = function(accepts) {
     return this.Libraries_Interface_Item__.SetAcceptsMouseInput$quorum_boolean(accepts);
}
this.GetMouseListeners = function() {
     return this.Libraries_Interface_Item__.GetMouseListeners();
}
this.ScaleFromCenter$quorum_number$quorum_number = function(xAmount, yAmount) {
     return this.Libraries_Interface_Item2D__.ScaleFromCenter$quorum_number$quorum_number(xAmount, yAmount);
}
this.IsResponsive = function() {
     return this.Libraries_Interface_Item2D__.IsResponsive();
}
this.Remove$quorum_integer = function(index) {
     return this.Libraries_Interface_Controls_Control__.Remove$quorum_integer(index);
}
this.SetToMediumFont = function() {
     return this.Libraries_Interface_Controls_Control__.SetToMediumFont();
}
this.SetUnfocusedSelectionBorderColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetUnfocusedSelectionBorderColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.SetJointList$quorum_Libraries_Game_Physics_Joints_JointEdge2D = function(edge) {
     return this.Libraries_Interface_Item2D__.SetJointList$quorum_Libraries_Game_Physics_Joints_JointEdge2D(edge);
}
this.GetRawInertia = function() {
     return this.Libraries_Interface_Item2D__.GetRawInertia();
}
this.DisposeChildren = function() {
     return this.Libraries_Interface_Item__.DisposeChildren();
}
this.DisposeAll = function() {
     return this.Libraries_Interface_Item__.DisposeAll();
}
this.GetOriginY = function() {
     return this.Libraries_Interface_Item2D__.GetOriginY();
}
this.GetOriginX = function() {
     return this.Libraries_Interface_Item2D__.GetOriginX();
}
this.IsUnmovable = function() {
     return this.Libraries_Interface_Item2D__.IsUnmovable();
}
this.MoveZ$quorum_number = function(zAmount) {
     return this.Libraries_Interface_Item2D__.MoveZ$quorum_number(zAmount);
}
this.SetMouseDownColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetMouseDownColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.SetUnmovable = function() {
     return this.Libraries_Interface_Item2D__.SetUnmovable();
}
this.SetUnfocusedSelectionColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetUnfocusedSelectionColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.GetResponsiveness = function() {
     return this.Libraries_Interface_Item2D__.GetResponsiveness();
}
this.IsFocused = function() {
     return this.Libraries_Interface_Item__.IsFocused();
}
this.SetToDefaultFontSize = function() {
     return this.Libraries_Interface_Controls_Control__.SetToDefaultFontSize();
}
this.GetGlowColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetGlowColor();
}
this.SetScaleY$quorum_number = function(scaleY) {
     return this.Libraries_Interface_Item2D__.SetScaleY$quorum_number(scaleY);
}
this.GetMouseWheelListeners = function() {
     return this.Libraries_Interface_Item__.GetMouseWheelListeners();
}
this.GetInputTable = function() {
     return this.Libraries_Interface_Item__.GetInputTable();
}
this.SetBorderColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetBorderColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.SetCollideWithChildren$quorum_boolean = function(flag) {
     return this.Libraries_Interface_Item2D__.SetCollideWithChildren$quorum_boolean(flag);
}
this.SetSleepTime$quorum_number = function(time) {
     return this.Libraries_Interface_Item2D__.SetSleepTime$quorum_number(time);
}
this.SetFontColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.IsClipping = function() {
     return this.Libraries_Interface_Item2D__.IsClipping();
}
this.GetWorldPoint$quorum_Libraries_Compute_Vector2 = function(localPoint) {
     return this.Libraries_Interface_Item2D__.GetWorldPoint$quorum_Libraries_Compute_Vector2(localPoint);
}
this.GetLinearVelocityFromWorldPoint$quorum_Libraries_Compute_Vector2 = function(worldPoint) {
     return this.Libraries_Interface_Item2D__.GetLinearVelocityFromWorldPoint$quorum_Libraries_Compute_Vector2(worldPoint);
}
this.GetAccessibilityCode = function() {
     return this.Libraries_Interface_Item__.GetAccessibilityCode();
}
this.Add$quorum_Libraries_Interface_Item2D = function(newItem) {
     return this.Libraries_Interface_Controls_Control__.Add$quorum_Libraries_Interface_Item2D(newItem);
}
this.SetLinearVelocity$quorum_Libraries_Compute_Vector2 = function(linearVelocity) {
     return this.Libraries_Interface_Item2D__.SetLinearVelocity$quorum_Libraries_Compute_Vector2(linearVelocity);
}
this.SetRightPadding$quorum_number = function(padding) {
     return this.Libraries_Interface_Controls_Control__.SetRightPadding$quorum_number(padding);
}
this.Move$quorum_number$quorum_number = function(xAmount, yAmount) {
     return this.Libraries_Interface_Item2D__.Move$quorum_number$quorum_number(xAmount, yAmount);
}
this.Scale$quorum_number = function(amount) {
     return this.Libraries_Interface_Item2D__.Scale$quorum_number(amount);
}
this.AddBehavior$quorum_Libraries_Interface_Behaviors_Behavior = function(behavior) {
     return this.Libraries_Interface_Item__.AddBehavior$quorum_Libraries_Interface_Behaviors_Behavior(behavior);
}
this.SetBottomLeftPixelRounding$quorum_number = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetBottomLeftPixelRounding$quorum_number(value);
}
this.SetContainerGridWidth$quorum_integer = function(containerGridWidth) {
     return this.Libraries_Interface_Controls_Control__.SetContainerGridWidth$quorum_integer(containerGridWidth);
}
this.GetTopLeftRounding = function() {
     return this.Libraries_Interface_Controls_Control__.GetTopLeftRounding();
}
this.SetShadowHeight$quorum_number = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetShadowHeight$quorum_number(value);
}
this.SetPercentageWidth$quorum_number = function(width) {
     return this.Libraries_Interface_Controls_Control__.SetPercentageWidth$quorum_number(width);
}
this.GetGlobalX = function() {
     return this.Libraries_Interface_Item2D__.GetGlobalX();
}
this.MoveY$quorum_number = function(yAmount) {
     return this.Libraries_Interface_Item2D__.MoveY$quorum_number(yAmount);
}
this.SetCenterX$quorum_number = function(setX) {
     return this.Libraries_Interface_Item2D__.SetCenterX$quorum_number(setX);
}
this.SetMouseOverColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetMouseOverColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.GetPixelX = function() {
     return this.Libraries_Interface_Controls_Control__.GetPixelX();
}
this.GetPixelY = function() {
     return this.Libraries_Interface_Controls_Control__.GetPixelY();
}
this.SetX$quorum_number = function(setX) {
     return this.Libraries_Interface_Item2D__.SetX$quorum_number(setX);
}
this.SetToHugeFont = function() {
     return this.Libraries_Interface_Controls_Control__.SetToHugeFont();
}
this.SetAccessibilityRoleDescription$quorum_text = function(newRoleDescription) {
     return this.Libraries_Interface_Item__.SetAccessibilityRoleDescription$quorum_text(newRoleDescription);
}
this.AreChildrenProcessingMouseEvents = function() {
     return this.Libraries_Interface_Item2D__.AreChildrenProcessingMouseEvents();
}
this.CopyAndActivateInputTable$quorum_text = function(name) {
     return this.Libraries_Interface_Controls_Control__.CopyAndActivateInputTable$quorum_text(name);
}
this.SetPosition$quorum_number$quorum_number$quorum_number = function(setX, setY, setZ) {
     return this.Libraries_Interface_Item2D__.SetPosition$quorum_number$quorum_number$quorum_number(setX, setY, setZ);
}
this.GetTorque = function() {
     return this.Libraries_Interface_Item2D__.GetTorque();
}
this.GetFontSize = function() {
     return this.Libraries_Interface_Controls_Control__.GetFontSize();
}
this.IsFastMoving = function() {
     return this.Libraries_Interface_Item2D__.IsFastMoving();
}
this.SetPercentageOriginX$quorum_number = function(x) {
     return this.Libraries_Interface_Controls_Control__.SetPercentageOriginX$quorum_number(x);
}
this.SetPixelHeight$quorum_number = function(height) {
     return this.Libraries_Interface_Controls_Control__.SetPixelHeight$quorum_number(height);
}
this.GetLayout = function() {
     return this.Libraries_Interface_Controls_Control__.GetLayout();
}
this.GetFocusColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetFocusColor();
}
this.GetVerticalLayoutMode = function() {
     return this.Libraries_Interface_Controls_Control__.GetVerticalLayoutMode();
}
this.SetToTinyFont = function() {
     return this.Libraries_Interface_Controls_Control__.SetToTinyFont();
}
this.SetPreviousFocus$quorum_Libraries_Interface_Item = function(previous) {
     return this.Libraries_Interface_Item__.SetPreviousFocus$quorum_Libraries_Interface_Item(previous);
}
this.BeginCollision$quorum_Libraries_Interface_Item = function(item) {
     return this.Libraries_Interface_Item__.BeginCollision$quorum_Libraries_Interface_Item(item);
}
this.GetSelectionColor = function() {
     return this.Libraries_Interface_Controls_Control__.GetSelectionColor();
}
this.Scale$quorum_number$quorum_number = function(xAmount, yAmount) {
     return this.Libraries_Interface_Item2D__.Scale$quorum_number$quorum_number(xAmount, yAmount);
}
this.Remove$quorum_Libraries_Interface_Item2D = function(item) {
     return this.Libraries_Interface_Controls_Control__.Remove$quorum_Libraries_Interface_Item2D(item);
}
this.GetPopupMenu = function() {
     return this.Libraries_Interface_Controls_Control__.GetPopupMenu();
}
this.SetZ$quorum_number = function(setZ) {
     return this.Libraries_Interface_Item2D__.SetZ$quorum_number(setZ);
}
this.SetColorProperty$quorum_text$quorum_Libraries_Game_Graphics_ColorGroup = function(property, value) {
     return this.Libraries_Interface_Controls_Control__.SetColorProperty$quorum_text$quorum_Libraries_Game_Graphics_ColorGroup(property, value);
}
this.SetSelectionColor$quorum_Libraries_Game_Graphics_ColorGroup = function(value) {
     return this.Libraries_Interface_Controls_Control__.SetSelectionColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
this.SetPercentageY$quorum_number = function(y) {
     return this.Libraries_Interface_Controls_Control__.SetPercentageY$quorum_number(y);
}
this.SetResponsiveness$quorum_integer = function(type) {
     return this.Libraries_Interface_Item2D__.SetResponsiveness$quorum_integer(type);
}
this.SetTarget$quorum_Libraries_Interface_Controls_Control = function (target) {
this.target = target;
};
this.GetTarget = function () {
return this.Get_WebEditor_EditorItem__target_();
};
this.FocusTarget = function () {
this.Get_WebEditor_EditorItem__target_().Focus();
};
this.Get_WebEditor_EditorItem__target_ = function() {
   return this.target;
};
this.Set_WebEditor_EditorItem__target_ = function(value) {
   this.target = value;
};
this.Get_Libraries_Interface_Item__manager_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__manager_();
};
this.Set_Libraries_Interface_Item__manager_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__manager_(value);
};
this.Get_Libraries_Interface_Item__visible_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__visible_();
};
this.Set_Libraries_Interface_Item__visible_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__visible_(value);
};
this.Get_Libraries_Interface_Item__RADIO_BUTTON_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__RADIO_BUTTON_();
};
this.Set_Libraries_Interface_Item__RADIO_BUTTON_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__RADIO_BUTTON_(value);
};
this.Get_Libraries_Interface_Item__accessibilityRoleDescription_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__accessibilityRoleDescription_();
};
this.Set_Libraries_Interface_Item__accessibilityRoleDescription_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__accessibilityRoleDescription_(value);
};
this.Get_Libraries_Interface_Item__BUTTON_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__BUTTON_();
};
this.Set_Libraries_Interface_Item__BUTTON_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__BUTTON_(value);
};
this.Get_Libraries_Interface_Item__TOGGLE_BUTTON_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TOGGLE_BUTTON_();
};
this.Set_Libraries_Interface_Item__TOGGLE_BUTTON_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TOGGLE_BUTTON_(value);
};
this.Get_Libraries_Interface_Item__TABLE_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TABLE_();
};
this.Set_Libraries_Interface_Item__TABLE_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TABLE_(value);
};
this.Get_Libraries_Interface_Item__CELL_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__CELL_();
};
this.Set_Libraries_Interface_Item__CELL_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__CELL_(value);
};
this.Get_Libraries_Interface_Item__CHART_SECTION_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__CHART_SECTION_();
};
this.Set_Libraries_Interface_Item__CHART_SECTION_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__CHART_SECTION_(value);
};
this.Get_Libraries_Interface_Item__nextFocus_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__nextFocus_();
};
this.Set_Libraries_Interface_Item__nextFocus_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__nextFocus_(value);
};
this.Get_Libraries_Interface_Item__description_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__description_();
};
this.Set_Libraries_Interface_Item__description_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__description_(value);
};
this.Get_Libraries_Interface_Item__behaviors_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__behaviors_();
};
this.Set_Libraries_Interface_Item__behaviors_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__behaviors_(value);
};
this.Get_Libraries_Interface_Item__LIST_ITEM_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__LIST_ITEM_();
};
this.Set_Libraries_Interface_Item__LIST_ITEM_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__LIST_ITEM_(value);
};
this.Get_Libraries_Interface_Item__PANE_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__PANE_();
};
this.Set_Libraries_Interface_Item__PANE_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__PANE_(value);
};
this.Get_Libraries_Interface_Item__mouseWheelListeners_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__mouseWheelListeners_();
};
this.Set_Libraries_Interface_Item__mouseWheelListeners_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__mouseWheelListeners_(value);
};
this.Get_Libraries_Interface_Item__TREE_TABLE_CELL_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TREE_TABLE_CELL_();
};
this.Set_Libraries_Interface_Item__TREE_TABLE_CELL_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TREE_TABLE_CELL_(value);
};
this.Get_Libraries_Interface_Item__MENU_BAR_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__MENU_BAR_();
};
this.Set_Libraries_Interface_Item__MENU_BAR_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__MENU_BAR_(value);
};
this.Get_Libraries_Interface_Item__TREE_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TREE_();
};
this.Set_Libraries_Interface_Item__TREE_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TREE_(value);
};
this.Get_Libraries_Interface_Item__CUSTOM_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__CUSTOM_();
};
this.Set_Libraries_Interface_Item__CUSTOM_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__CUSTOM_(value);
};
this.Get_Libraries_Interface_Item__TAB_PANE_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TAB_PANE_();
};
this.Set_Libraries_Interface_Item__TAB_PANE_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TAB_PANE_(value);
};
this.Get_Libraries_Interface_Item__properties_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__properties_();
};
this.Set_Libraries_Interface_Item__properties_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__properties_(value);
};
this.Get_Libraries_Interface_Item__DIALOG_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__DIALOG_();
};
this.Set_Libraries_Interface_Item__DIALOG_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__DIALOG_(value);
};
this.Get_Libraries_Interface_Item__MENU_ITEM_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__MENU_ITEM_();
};
this.Set_Libraries_Interface_Item__MENU_ITEM_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__MENU_ITEM_(value);
};
this.Get_Libraries_Interface_Item__mouseMoveListeners_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__mouseMoveListeners_();
};
this.Set_Libraries_Interface_Item__mouseMoveListeners_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__mouseMoveListeners_(value);
};
this.Get_Libraries_Interface_Item__TEXTBOX_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TEXTBOX_();
};
this.Set_Libraries_Interface_Item__TEXTBOX_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TEXTBOX_(value);
};
this.Get_Libraries_Interface_Item__PROGRESS_BAR_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__PROGRESS_BAR_();
};
this.Set_Libraries_Interface_Item__PROGRESS_BAR_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__PROGRESS_BAR_(value);
};
this.Get_Libraries_Interface_Item__accessibilityCode_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__accessibilityCode_();
};
this.Set_Libraries_Interface_Item__accessibilityCode_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__accessibilityCode_(value);
};
this.Get_Libraries_Interface_Item__ITEM_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__ITEM_();
};
this.Set_Libraries_Interface_Item__ITEM_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__ITEM_(value);
};
this.Get_Libraries_Interface_Item__TEXT_FIELD_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TEXT_FIELD_();
};
this.Set_Libraries_Interface_Item__TEXT_FIELD_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TEXT_FIELD_(value);
};
this.Get_Libraries_Interface_Item__TREE_ITEM_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TREE_ITEM_();
};
this.Set_Libraries_Interface_Item__TREE_ITEM_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TREE_ITEM_(value);
};
this.Get_Libraries_Interface_Item__touchListeners_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__touchListeners_();
};
this.Set_Libraries_Interface_Item__touchListeners_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__touchListeners_(value);
};
this.Get_Libraries_Interface_Item__CHECKBOX_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__CHECKBOX_();
};
this.Set_Libraries_Interface_Item__CHECKBOX_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__CHECKBOX_(value);
};
this.Get_Libraries_Interface_Item__TAB_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TAB_();
};
this.Set_Libraries_Interface_Item__TAB_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TAB_(value);
};
this.Get_Libraries_Interface_Item__acceptsMouseInput_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__acceptsMouseInput_();
};
this.Set_Libraries_Interface_Item__acceptsMouseInput_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__acceptsMouseInput_(value);
};
this.Get_Libraries_Interface_Item__name_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__name_();
};
this.Set_Libraries_Interface_Item__name_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__name_(value);
};
this.Get_Libraries_Interface_Item__LIST_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__LIST_();
};
this.Set_Libraries_Interface_Item__LIST_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__LIST_(value);
};
this.Get_Libraries_Interface_Item__mouseListeners_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__mouseListeners_();
};
this.Set_Libraries_Interface_Item__mouseListeners_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__mouseListeners_(value);
};
this.Get_Libraries_Interface_Item__focusable_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__focusable_();
};
this.Set_Libraries_Interface_Item__focusable_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__focusable_(value);
};
this.Get_Libraries_Interface_Item__GROUP_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__GROUP_();
};
this.Set_Libraries_Interface_Item__GROUP_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__GROUP_(value);
};
this.Get_Libraries_Interface_Item__gestureListeners_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__gestureListeners_();
};
this.Set_Libraries_Interface_Item__gestureListeners_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__gestureListeners_(value);
};
this.Get_Libraries_Interface_Item__NOT_ACCESSIBLE_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__NOT_ACCESSIBLE_();
};
this.Set_Libraries_Interface_Item__NOT_ACCESSIBLE_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__NOT_ACCESSIBLE_(value);
};
this.Get_Libraries_Interface_Item__LABEL_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__LABEL_();
};
this.Set_Libraries_Interface_Item__LABEL_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__LABEL_(value);
};
this.Get_Libraries_Interface_Item__inputGroup_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__inputGroup_();
};
this.Set_Libraries_Interface_Item__inputGroup_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__inputGroup_(value);
};
this.Get_Libraries_Interface_Item__TOOLBAR_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TOOLBAR_();
};
this.Set_Libraries_Interface_Item__TOOLBAR_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TOOLBAR_(value);
};
this.Get_Libraries_Interface_Item__TREE_TABLE_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TREE_TABLE_();
};
this.Set_Libraries_Interface_Item__TREE_TABLE_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TREE_TABLE_(value);
};
this.Get_Libraries_Interface_Item__previousFocus_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__previousFocus_();
};
this.Set_Libraries_Interface_Item__previousFocus_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__previousFocus_(value);
};
this.Get_Libraries_Interface_Item__CHART_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__CHART_();
};
this.Set_Libraries_Interface_Item__CHART_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__CHART_(value);
};
this.Get_Libraries_Interface_Item__CHART_ITEM_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__CHART_ITEM_();
};
this.Set_Libraries_Interface_Item__CHART_ITEM_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__CHART_ITEM_(value);
};
this.Get_Libraries_Interface_Item__POPUP_MENU_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__POPUP_MENU_();
};
this.Set_Libraries_Interface_Item__POPUP_MENU_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__POPUP_MENU_(value);
};
this.Get_Libraries_Interface_Item__focusListeners_ = function() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__focusListeners_();
};
this.Set_Libraries_Interface_Item__focusListeners_ = function(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__focusListeners_(value);
};
this.Get_Libraries_Interface_Controls_Control__renderMouseDown_ = function() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__renderMouseDown_();
};
this.Set_Libraries_Interface_Controls_Control__renderMouseDown_ = function(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__renderMouseDown_(value);
};
this.Get_Libraries_Interface_Controls_Control__listeners_ = function() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__listeners_();
};
this.Set_Libraries_Interface_Controls_Control__listeners_ = function(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__listeners_(value);
};
this.Get_Libraries_Interface_Controls_Control__contextMenu_ = function() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__contextMenu_();
};
this.Set_Libraries_Interface_Controls_Control__contextMenu_ = function(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__contextMenu_(value);
};
this.Get_Libraries_Interface_Controls_Control__renderMouseOver_ = function() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__renderMouseOver_();
};
this.Set_Libraries_Interface_Controls_Control__renderMouseOver_ = function(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__renderMouseOver_(value);
};
this.Get_Libraries_Interface_Controls_Control__FILL_ = function() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__FILL_();
};
this.Set_Libraries_Interface_Controls_Control__FILL_ = function(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__FILL_(value);
};
this.Get_Libraries_Interface_Controls_Control__needsLayout_ = function() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__needsLayout_();
};
this.Set_Libraries_Interface_Controls_Control__needsLayout_ = function(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__needsLayout_(value);
};
this.Get_Libraries_Interface_Controls_Control__currentProperties_ = function() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__currentProperties_();
};
this.Set_Libraries_Interface_Controls_Control__currentProperties_ = function(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__currentProperties_(value);
};
this.Get_Libraries_Interface_Controls_Control__defaultProperties_ = function() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__defaultProperties_();
};
this.Set_Libraries_Interface_Controls_Control__defaultProperties_ = function(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__defaultProperties_(value);
};
this.Get_Libraries_Interface_Controls_Control__FIT_FONT_ = function() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__FIT_FONT_();
};
this.Set_Libraries_Interface_Controls_Control__FIT_FONT_ = function(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__FIT_FONT_(value);
};
this.Get_Libraries_Interface_Controls_Control__renderSelected_ = function() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__renderSelected_();
};
this.Set_Libraries_Interface_Controls_Control__renderSelected_ = function(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__renderSelected_(value);
};
this.Get_Libraries_Interface_Controls_Control__FIT_CONTENTS_ = function() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__FIT_CONTENTS_();
};
this.Set_Libraries_Interface_Controls_Control__FIT_CONTENTS_ = function(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__FIT_CONTENTS_(value);
};
this.Get_Libraries_Interface_Controls_Control__layout_ = function() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__layout_();
};
this.Set_Libraries_Interface_Controls_Control__layout_ = function(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__layout_(value);
};
this.Get_Libraries_Interface_Controls_Control__selectionListeners_ = function() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__selectionListeners_();
};
this.Set_Libraries_Interface_Controls_Control__selectionListeners_ = function(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__selectionListeners_(value);
};
this.Get_Libraries_Interface_Controls_Control__STANDARD_ = function() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__STANDARD_();
};
this.Set_Libraries_Interface_Controls_Control__STANDARD_ = function(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__STANDARD_(value);
};
this.Get_Libraries_Interface_Controls_Control__layoutProperties_ = function() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__layoutProperties_();
};
this.Set_Libraries_Interface_Controls_Control__layoutProperties_ = function(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__layoutProperties_(value);
};
this.Get_Libraries_Interface_Controls_Control__MAINTAIN_ASPECT_RATIO_ = function() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__MAINTAIN_ASPECT_RATIO_();
};
this.Set_Libraries_Interface_Controls_Control__MAINTAIN_ASPECT_RATIO_ = function(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__MAINTAIN_ASPECT_RATIO_(value);
};
this.Get_Libraries_Interface_Item2D__position_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__position_();
};
this.Set_Libraries_Interface_Item2D__position_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__position_(value);
};
this.Get_Libraries_Interface_Item2D__scale_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__scale_();
};
this.Set_Libraries_Interface_Item2D__scale_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__scale_(value);
};
this.Get_Libraries_Interface_Item2D__workVector2B_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__workVector2B_();
};
this.Set_Libraries_Interface_Item2D__workVector2B_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__workVector2B_(value);
};
this.Get_Libraries_Interface_Item2D__manager_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__manager_();
};
this.Set_Libraries_Interface_Item2D__manager_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__manager_(value);
};
this.Get_Libraries_Interface_Item2D__workVector2A_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__workVector2A_();
};
this.Set_Libraries_Interface_Item2D__workVector2A_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__workVector2A_(value);
};
this.Get_Libraries_Interface_Item2D__jointList_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__jointList_();
};
this.Set_Libraries_Interface_Item2D__jointList_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__jointList_(value);
};
this.Get_Libraries_Interface_Item2D__updateTransform_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__updateTransform_();
};
this.Set_Libraries_Interface_Item2D__updateTransform_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__updateTransform_(value);
};
this.Get_Libraries_Interface_Item2D__children_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__children_();
};
this.Set_Libraries_Interface_Item2D__children_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__children_(value);
};
this.Get_Libraries_Interface_Item2D__childrenProcessingMouseEvents_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__childrenProcessingMouseEvents_();
};
this.Set_Libraries_Interface_Item2D__childrenProcessingMouseEvents_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__childrenProcessingMouseEvents_(value);
};
this.Get_Libraries_Interface_Item2D__hasMoved_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__hasMoved_();
};
this.Set_Libraries_Interface_Item2D__hasMoved_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__hasMoved_(value);
};
this.Get_Libraries_Interface_Item2D__visualView_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__visualView_();
};
this.Set_Libraries_Interface_Item2D__visualView_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__visualView_(value);
};
this.Get_Libraries_Interface_Item2D__widthSet_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__widthSet_();
};
this.Set_Libraries_Interface_Item2D__widthSet_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__widthSet_(value);
};
this.Get_Libraries_Interface_Item2D__transform_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__transform_();
};
this.Set_Libraries_Interface_Item2D__transform_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__transform_(value);
};
this.Get_Libraries_Interface_Item2D__physicsEnabled_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__physicsEnabled_();
};
this.Set_Libraries_Interface_Item2D__physicsEnabled_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__physicsEnabled_(value);
};
this.Get_Libraries_Interface_Item2D__layerSet_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__layerSet_();
};
this.Set_Libraries_Interface_Item2D__layerSet_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__layerSet_(value);
};
this.Get_Libraries_Interface_Item2D__rotation_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__rotation_();
};
this.Set_Libraries_Interface_Item2D__rotation_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__rotation_(value);
};
this.Get_Libraries_Interface_Item2D__dimensions_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__dimensions_();
};
this.Set_Libraries_Interface_Item2D__dimensions_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__dimensions_(value);
};
this.Get_Libraries_Interface_Item2D__collideWithChildren_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__collideWithChildren_();
};
this.Set_Libraries_Interface_Item2D__collideWithChildren_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__collideWithChildren_(value);
};
this.Get_Libraries_Interface_Item2D__offset_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__offset_();
};
this.Set_Libraries_Interface_Item2D__offset_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__offset_(value);
};
this.Get_Libraries_Interface_Item2D__nodeCount_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__nodeCount_();
};
this.Set_Libraries_Interface_Item2D__nodeCount_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__nodeCount_(value);
};
this.Get_Libraries_Interface_Item2D__transform0_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__transform0_();
};
this.Set_Libraries_Interface_Item2D__transform0_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__transform0_(value);
};
this.Get_Libraries_Interface_Item2D__scaleOffset_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__scaleOffset_();
};
this.Set_Libraries_Interface_Item2D__scaleOffset_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__scaleOffset_(value);
};
this.Get_Libraries_Interface_Item2D__nodesSet_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__nodesSet_();
};
this.Set_Libraries_Interface_Item2D__nodesSet_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__nodesSet_(value);
};
this.Get_Libraries_Interface_Item2D__workVector3_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__workVector3_();
};
this.Set_Libraries_Interface_Item2D__workVector3_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__workVector3_(value);
};
this.Get_Libraries_Interface_Item2D__origin_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__origin_();
};
this.Set_Libraries_Interface_Item2D__origin_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__origin_(value);
};
this.Get_Libraries_Interface_Item2D__layer_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__layer_();
};
this.Set_Libraries_Interface_Item2D__layer_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__layer_(value);
};
this.Get_Libraries_Interface_Item2D__isCustomDrawing_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__isCustomDrawing_();
};
this.Set_Libraries_Interface_Item2D__isCustomDrawing_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__isCustomDrawing_(value);
};
this.Get_Libraries_Interface_Item2D__shape_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__shape_();
};
this.Set_Libraries_Interface_Item2D__shape_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__shape_(value);
};
this.Get_Libraries_Interface_Item2D__properties_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__properties_();
};
this.Set_Libraries_Interface_Item2D__properties_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__properties_(value);
};
this.Get_Libraries_Interface_Item2D__shouldTriggerSimulation_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__shouldTriggerSimulation_();
};
this.Set_Libraries_Interface_Item2D__shouldTriggerSimulation_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__shouldTriggerSimulation_(value);
};
this.Get_Libraries_Interface_Item2D__sweep_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__sweep_();
};
this.Set_Libraries_Interface_Item2D__sweep_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__sweep_(value);
};
this.Get_Libraries_Interface_Item2D__isResizing_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__isResizing_();
};
this.Set_Libraries_Interface_Item2D__isResizing_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__isResizing_(value);
};
this.Get_Libraries_Interface_Item2D__collidable_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__collidable_();
};
this.Set_Libraries_Interface_Item2D__collidable_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__collidable_(value);
};
this.Get_Libraries_Interface_Item2D__bounds_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__bounds_();
};
this.Set_Libraries_Interface_Item2D__bounds_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__bounds_(value);
};
this.Get_Libraries_Interface_Item2D__nodes_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__nodes_();
};
this.Set_Libraries_Interface_Item2D__nodes_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__nodes_(value);
};
this.Get_Libraries_Interface_Item2D__flipX_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__flipX_();
};
this.Set_Libraries_Interface_Item2D__flipX_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__flipX_(value);
};
this.Get_Libraries_Interface_Item2D__synchronizeNodesTempPosition_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__synchronizeNodesTempPosition_();
};
this.Set_Libraries_Interface_Item2D__synchronizeNodesTempPosition_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__synchronizeNodesTempPosition_(value);
};
this.Get_Libraries_Interface_Item2D__collisionList_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__collisionList_();
};
this.Set_Libraries_Interface_Item2D__collisionList_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__collisionList_(value);
};
this.Get_Libraries_Interface_Item2D__heightSet_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__heightSet_();
};
this.Set_Libraries_Interface_Item2D__heightSet_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__heightSet_(value);
};
this.Get_Libraries_Interface_Item2D__PHYSICS_ERROR_MESSAGE_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__PHYSICS_ERROR_MESSAGE_();
};
this.Set_Libraries_Interface_Item2D__PHYSICS_ERROR_MESSAGE_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__PHYSICS_ERROR_MESSAGE_(value);
};
this.Get_Libraries_Interface_Item2D__parentItem_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__parentItem_();
};
this.Set_Libraries_Interface_Item2D__parentItem_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__parentItem_(value);
};
this.Get_Libraries_Interface_Item2D__clipPixels_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__clipPixels_();
};
this.Set_Libraries_Interface_Item2D__clipPixels_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__clipPixels_(value);
};
this.Get_Libraries_Interface_Item2D__z_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__z_();
};
this.Set_Libraries_Interface_Item2D__z_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__z_(value);
};
this.Get_Libraries_Interface_Item2D__flipY_ = function() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__flipY_();
};
this.Set_Libraries_Interface_Item2D__flipY_ = function(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__flipY_(value);
};
if(parents == null) {
   this.Libraries_Interface_Item__ = new quorum_Libraries_Interface_Item_(false);
   this.Libraries_Interface_Item2D__ = new quorum_Libraries_Interface_Item2D_(false);
   this.Libraries_Interface_Controls_Control__ = new quorum_Libraries_Interface_Controls_Control_(false);
   this.Libraries_Interface_Item__.prototype = this;
   this.Libraries_Interface_Item2D__.Libraries_Interface_Item__ = this.Libraries_Interface_Item__;
   this.Libraries_Interface_Item2D__.prototype = this;
   this.Libraries_Interface_Item2D__.prototype = this;
   this.Libraries_Interface_Controls_Control__.Libraries_Interface_Item__ = this.Libraries_Interface_Item__;
   this.Libraries_Interface_Controls_Control__.prototype = this;
   this.Libraries_Interface_Controls_Control__.Libraries_Interface_Item2D__ = this.Libraries_Interface_Item2D__;
   this.Libraries_Interface_Controls_Control__.prototype = this;
   this.Libraries_Interface_Controls_Control__.prototype = this;
}
this.target = null;

if(parents == null) {
this.Libraries_Interface_Item2D__.constructor_();
}
if (parents == null) {this.constructor_();}
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

function quorum_WebEditor_Behaviors_ShowHelpModalBehavior_(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.ShowHelpModalBehavior'];
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
editor.ShowHelpModal();
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

function quorum_WebEditor_Behaviors_FocusEditorItemBehavior_(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.FocusEditorItemBehavior'];
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
var item = manager.GetFocus();
if (!global_InstanceOf(item,'Libraries.Interface.Item2D')) {
return;
}
var parentItem = global_CheckCast(item, "Libraries.Interface.Item2D");
if (global_InstanceOf(item,'WebEditor.EditorItem')) {
return;
}
var inPalette = false;
var inEditor = false;
while ((parentItem != null)) {
if (global_InstanceOf(parentItem,'Libraries.Interface.Controls.Blocks.Palette.BlockPalette')) {
inPalette = true;
parentItem = null;
}
else if( global_InstanceOf(parentItem,'Libraries.Interface.Controls.Blocks.CodeEditor')) {
inEditor = true;
parentItem = null;
}
if ((parentItem != null)) {
parentItem = parentItem.GetParent();
}
}
if (inPalette) {
this.Get_WebEditor_Behaviors_FocusEditorItemBehavior__paletteItem_().Focus();
}
else if( inEditor) {
this.Get_WebEditor_Behaviors_FocusEditorItemBehavior__blocksItem_().Focus();
}
};
this.SetPaletteItem$quorum_WebEditor_EditorItem = function (item) {
this.paletteItem = item;
};
this.SetBlocksItem$quorum_WebEditor_EditorItem = function (item) {
this.blocksItem = item;
};
this.Get_WebEditor_Behaviors_FocusEditorItemBehavior__blocksItem_ = function() {
   return this.blocksItem;
};
this.Set_WebEditor_Behaviors_FocusEditorItemBehavior__blocksItem_ = function(value) {
   this.blocksItem = value;
};
this.Get_WebEditor_Behaviors_FocusEditorItemBehavior__paletteItem_ = function() {
   return this.paletteItem;
};
this.Set_WebEditor_Behaviors_FocusEditorItemBehavior__paletteItem_ = function(value) {
   this.paletteItem = value;
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
this.paletteItem = null;
this.blocksItem = null;

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
palettePanel.SetPixelWidth$quorum_number(200 * 1.0);
}
else if( (mediaSize == this.Get_WebEditor_CanvasResizeListener__MD_())) {
palettePanel.SetPixelWidth$quorum_number(200 * 1.0);
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

function quorum_WebEditor_Behaviors_EditorItemFocusPrevious_(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.EditorItemFocusPrevious'];
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
if (global_InstanceOf(event.GetItem(),'WebEditor.EditorItem')) {
var editorItem = global_CheckCast(event.GetItem(), "WebEditor.EditorItem");
editorItem.GetPreviousFocus().Focus();
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

function quorum_WebEditor_Behaviors_EditorItemFocusNext_(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.EditorItemFocusNext'];
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
if (global_InstanceOf(event.GetItem(),'WebEditor.EditorItem')) {
var editorItem = global_CheckCast(event.GetItem(), "WebEditor.EditorItem");
editorItem.GetNextFocus().Focus();
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

function quorum_WebEditor_Behaviors_EditorItemFocusTargetBehavior_(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.EditorItemFocusTargetBehavior'];
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
if (global_InstanceOf(event.GetItem(),'WebEditor.EditorItem')) {
var editorItem = global_CheckCast(event.GetItem(), "WebEditor.EditorItem");
if (global_InstanceOf(editorItem.GetTarget(),'Libraries.Interface.Controls.Blocks.Palette.BlockPalette')) {
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
var editor = global_CheckCast(manager.GetGame(), "WebEditor.BlockEditor");
if (!editor.IsPaletteShowing()) {
editor.UpdateTogglePaletteButton$quorum_boolean(editor.TogglePalette());
}
}
editorItem.FocusTarget();
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
this.ShowHelpModal = function () {
return this.plugin_.ShowHelpModal();
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
this.Get_WebEditor_BlockEditor__palettePanel_().SetName$quorum_text("Palette Panel");
var flow = new quorum_Libraries_Interface_Layouts_FlowLayout_();
this.Get_WebEditor_BlockEditor__editorPanel_().SetLayout$quorum_Libraries_Interface_Layouts_Layout(flow);
this.Get_WebEditor_BlockEditor__editorPanel_().SetPercentageY$quorum_number(0 * 1.0);
this.Get_WebEditor_BlockEditor__editorPanel_().SetPercentageHeight$quorum_number(1 * 1.0);
this.Get_WebEditor_BlockEditor__editorPanel_().SetHorizontalLayoutMode$quorum_integer(this.Get_WebEditor_BlockEditor__editorPanel_().Get_Libraries_Interface_Controls_Control__FILL_());
this.Get_WebEditor_BlockEditor__editorPanel_().SetName$quorum_text("Editor Panel");
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
this.prototype.SetupEditorItems();
this.prototype.AddDefaultKeys();
this.Get_WebEditor_BlockEditor__paletteItem_().Focus();
};
this.SetupEditorItems = function () {
var tempPalette = new quorum_WebEditor_EditorItem_();
this.paletteItem = tempPalette;
this.Get_WebEditor_BlockEditor__paletteItem_().SetName$quorum_text("Palette, To navigate to the palette press Enter. To navigate to the editor use the arrow keys. To navigate back to here from the palette press Shift+Enter.");
this.Get_WebEditor_BlockEditor__paletteItem_().SetTarget$quorum_Libraries_Interface_Controls_Control(this.prototype.GetBlockPalette());
var tempBlocks = new quorum_WebEditor_EditorItem_();
this.blocksItem = tempBlocks;
this.Get_WebEditor_BlockEditor__blocksItem_().SetName$quorum_text("Block Editor, To navigate to the editor press Enter. To navigate to the palette use the arrow keys. To navigate back to here from the editor press Shift+Enter.");
this.Get_WebEditor_BlockEditor__blocksItem_().SetTarget$quorum_Libraries_Interface_Controls_Control(this.prototype.GetBlockEditor());
this.Get_WebEditor_BlockEditor__paletteItem_().SetNextFocus$quorum_Libraries_Interface_Item(this.Get_WebEditor_BlockEditor__blocksItem_());
this.Get_WebEditor_BlockEditor__paletteItem_().SetPreviousFocus$quorum_Libraries_Interface_Item(this.Get_WebEditor_BlockEditor__blocksItem_());
this.Get_WebEditor_BlockEditor__blocksItem_().SetNextFocus$quorum_Libraries_Interface_Item(this.Get_WebEditor_BlockEditor__paletteItem_());
this.Get_WebEditor_BlockEditor__blocksItem_().SetPreviousFocus$quorum_Libraries_Interface_Item(this.Get_WebEditor_BlockEditor__paletteItem_());
this.prototype.Add$quorum_Libraries_Interface_Item2D(this.Get_WebEditor_BlockEditor__paletteItem_());
this.prototype.Add$quorum_Libraries_Interface_Item2D(this.Get_WebEditor_BlockEditor__blocksItem_());
};
this.AddDefaultKeys = function () {
var keys = new quorum_Libraries_Interface_Events_KeyboardEvent_();
var defaultTable = this.prototype.GetDefaultInputTable();
var isMac = false;
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
var webApp = global_CheckCast(manager.GetApplication(), "Libraries.Game.WebApplication");
if (webApp.GetWebOperatingSystem().Contains$quorum_text("Mac")) {
isMac = true;
}
var focusPalette = new quorum_Libraries_Game_InputSet_();
focusPalette.SetKeyboardInput$quorum_integer(keys.Get_Libraries_Interface_Events_KeyboardEvent__NUM_1_());
if (isMac) {
focusPalette.AddModifier$quorum_integer(focusPalette.Get_Libraries_Game_InputSet__CONTROL_());
}
else { 
focusPalette.AddModifier$quorum_integer(focusPalette.Get_Libraries_Game_InputSet__ALT_());
}
var focusPaletteBehavior = new quorum_WebEditor_Behaviors_FocusPaletteBehavior_();
defaultTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(focusPalette, focusPaletteBehavior);
var focusBlocks = new quorum_Libraries_Game_InputSet_();
focusBlocks.SetKeyboardInput$quorum_integer(keys.Get_Libraries_Interface_Events_KeyboardEvent__NUM_2_());
if (isMac) {
focusBlocks.AddModifier$quorum_integer(focusBlocks.Get_Libraries_Game_InputSet__CONTROL_());
}
else { 
focusBlocks.AddModifier$quorum_integer(focusBlocks.Get_Libraries_Game_InputSet__ALT_());
}
var focusEditorBehavior = new quorum_WebEditor_Behaviors_FocusEditorBehavior_();
defaultTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(focusBlocks, focusEditorBehavior);
var runSet = new quorum_Libraries_Game_InputSet_();
runSet.SetKeyboardInput$quorum_integer(keys.Get_Libraries_Interface_Events_KeyboardEvent__R_());
runSet.AddModifier$quorum_integer(runSet.Get_Libraries_Game_InputSet__SHIFT_());
if (isMac) {
runSet.AddModifier$quorum_integer(runSet.Get_Libraries_Game_InputSet__CONTROL_());
}
else { 
runSet.AddModifier$quorum_integer(runSet.Get_Libraries_Game_InputSet__ALT_());
}
var runBehavior = new quorum_WebEditor_Behaviors_RunGameBehavior_();
defaultTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(runSet, runBehavior);
var stopSet = new quorum_Libraries_Game_InputSet_();
stopSet.SetKeyboardInput$quorum_integer(keys.Get_Libraries_Interface_Events_KeyboardEvent__S_());
stopSet.AddModifier$quorum_integer(runSet.Get_Libraries_Game_InputSet__SHIFT_());
if (isMac) {
stopSet.AddModifier$quorum_integer(runSet.Get_Libraries_Game_InputSet__CONTROL_());
}
else { 
stopSet.AddModifier$quorum_integer(runSet.Get_Libraries_Game_InputSet__ALT_());
}
var stopBehavior = new quorum_WebEditor_Behaviors_StopGameBehavior_();
defaultTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(stopSet, stopBehavior);
var togglePaletteSet = new quorum_Libraries_Game_InputSet_();
togglePaletteSet.SetKeyboardInput$quorum_integer(keys.Get_Libraries_Interface_Events_KeyboardEvent__X_());
togglePaletteSet.AddModifier$quorum_integer(runSet.Get_Libraries_Game_InputSet__SHIFT_());
if (isMac) {
togglePaletteSet.AddModifier$quorum_integer(togglePaletteSet.Get_Libraries_Game_InputSet__CONTROL_());
}
else { 
togglePaletteSet.AddModifier$quorum_integer(togglePaletteSet.Get_Libraries_Game_InputSet__ALT_());
}
var toggleBehavior = new quorum_WebEditor_Behaviors_TogglePaletteBehavior_();
defaultTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(togglePaletteSet, toggleBehavior);
var showHelpSet = new quorum_Libraries_Game_InputSet_();
showHelpSet.SetKeyboardInput$quorum_integer(keys.Get_Libraries_Interface_Events_KeyboardEvent__H_());
showHelpSet.AddModifier$quorum_integer(runSet.Get_Libraries_Game_InputSet__SHIFT_());
if (isMac) {
showHelpSet.AddModifier$quorum_integer(togglePaletteSet.Get_Libraries_Game_InputSet__CONTROL_());
}
else { 
showHelpSet.AddModifier$quorum_integer(togglePaletteSet.Get_Libraries_Game_InputSet__ALT_());
}
var helpBehavior = new quorum_WebEditor_Behaviors_ShowHelpModalBehavior_();
defaultTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(showHelpSet, helpBehavior);
var zoomInSet = new quorum_Libraries_Game_InputSet_();
zoomInSet.SetKeyboardInput$quorum_integer(keys.Get_Libraries_Interface_Events_KeyboardEvent__EQUALS_());
if (isMac) {
zoomInSet.AddModifier$quorum_integer(zoomInSet.Get_Libraries_Game_InputSet__CONTROL_());
}
else { 
zoomInSet.AddModifier$quorum_integer(zoomInSet.Get_Libraries_Game_InputSet__ALT_());
}
var zoomInBehavior = new quorum_WebEditor_Behaviors_ZoomBehavior_();
zoomInBehavior.SetToZoomIn();
defaultTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(zoomInSet, zoomInBehavior);
var zoomOutSet = new quorum_Libraries_Game_InputSet_();
zoomOutSet.SetKeyboardInput$quorum_integer(keys.Get_Libraries_Interface_Events_KeyboardEvent__MINUS_());
if (isMac) {
zoomOutSet.AddModifier$quorum_integer(zoomOutSet.Get_Libraries_Game_InputSet__CONTROL_());
}
else { 
zoomOutSet.AddModifier$quorum_integer(zoomOutSet.Get_Libraries_Game_InputSet__ALT_());
}
var zoomOutBehavior = new quorum_WebEditor_Behaviors_ZoomBehavior_();
zoomOutBehavior.SetToZoomOut();
defaultTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(zoomOutSet, zoomOutBehavior);
var editorTable = new quorum_Libraries_Game_InputTable_();
editorTable.SetIdentifier$quorum_text("EditorItem");
var focusTargetSet = new quorum_Libraries_Game_InputSet_();
focusTargetSet.SetKeyboardInput$quorum_integer(keys.Get_Libraries_Interface_Events_KeyboardEvent__ENTER_());
var focusTargetBehavior = new quorum_WebEditor_Behaviors_EditorItemFocusTargetBehavior_();
editorTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(focusTargetSet, focusTargetBehavior);
var left = new quorum_Libraries_Game_InputSet_();
left.SetKeyboardInput$quorum_integer(keys.Get_Libraries_Interface_Events_KeyboardEvent__LEFT_());
var right = new quorum_Libraries_Game_InputSet_();
right.SetKeyboardInput$quorum_integer(keys.Get_Libraries_Interface_Events_KeyboardEvent__RIGHT_());
var up = new quorum_Libraries_Game_InputSet_();
up.SetKeyboardInput$quorum_integer(keys.Get_Libraries_Interface_Events_KeyboardEvent__UP_());
var down = new quorum_Libraries_Game_InputSet_();
down.SetKeyboardInput$quorum_integer(keys.Get_Libraries_Interface_Events_KeyboardEvent__DOWN_());
var focusNext = new quorum_WebEditor_Behaviors_EditorItemFocusNext_();
var focusPrevious = new quorum_WebEditor_Behaviors_EditorItemFocusPrevious_();
editorTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(up, focusNext);
editorTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(right, focusNext);
editorTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(left, focusPrevious);
editorTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(down, focusPrevious);
this.prototype.AddInputTable$quorum_Libraries_Game_InputTable(editorTable);
var focusEditorItemSet = new quorum_Libraries_Game_InputSet_();
focusEditorItemSet.SetKeyboardInput$quorum_integer(keys.Get_Libraries_Interface_Events_KeyboardEvent__ENTER_());
focusEditorItemSet.AddModifier$quorum_integer(focusEditorItemSet.Get_Libraries_Game_InputSet__SHIFT_());
var focusEditorItemBehavior = new quorum_WebEditor_Behaviors_FocusEditorItemBehavior_();
focusEditorItemBehavior.SetPaletteItem$quorum_WebEditor_EditorItem(this.Get_WebEditor_BlockEditor__paletteItem_());
focusEditorItemBehavior.SetBlocksItem$quorum_WebEditor_EditorItem(this.Get_WebEditor_BlockEditor__blocksItem_());
defaultTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(focusEditorItemSet, focusEditorItemBehavior);
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
var palettePartition = new quorum_Libraries_Interface_Controls_Icon_();
var bgColor = new quorum_Libraries_Game_Graphics_Color_();
bgColor.SetColor$quorum_number$quorum_number$quorum_number$quorum_number(0.25, 0.25, 0.25, 1 * 1.0);
palettePartition.LoadFilledRectangle$quorum_integer$quorum_integer$quorum_Libraries_Game_Graphics_ColorGroup(4, 500, bgColor);
var paletteProperties = palettePartition.GetDefaultLayoutProperties();
paletteProperties.SetPixelWidth$quorum_number(8 * 1.0);
paletteProperties.SetVerticalLayoutMode$quorum_integer(paletteProperties.Get_Libraries_Interface_Layouts_LayoutProperties__FILL_());
palettePartition.SetInputGroup$quorum_text("PalettePartition");
palettePartition.SetName$quorum_text("Palette Pane Partition");
palettePartition.SetZ$quorum_number(-10 * 1.0);
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
this.Get_WebEditor_BlockEditor__blocksItem_ = function() {
   return this.blocksItem;
};
this.Set_WebEditor_BlockEditor__blocksItem_ = function(value) {
   this.blocksItem = value;
};
this.Get_WebEditor_BlockEditor__paletteItem_ = function() {
   return this.paletteItem;
};
this.Set_WebEditor_BlockEditor__paletteItem_ = function(value) {
   this.paletteItem = value;
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
this.paletteItem = null;
this.blocksItem = null;
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
    let gameMap = plugins_quorum_Libraries_Game_GameStateManager_.registeredGames
    for (let [game, gameInfo] of gameMap) {
        if(gameInfo.application === null) {
            gameMap.delete(game);
        }
    }
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
var code = null;
function PauseBlockExecution() {
    let gameMap = plugins_quorum_Libraries_Game_GameStateManager_.registeredGames
    code = GetCode();
    let game = null;
    for (let [key, value] of gameMap) {
        if (key instanceof quorum_WebEditor_BlockEditor_) {
            game = value.game
        }
    }
    if ((game != null)) {
        game.Exit();
    }
    global_Empty_Shared_Classes();
}
export{Start, Stop, GetCode, SetCode, ScaleUp, ScaleDown, TogglePalette, BlockEditorStop, PauseBlockExecution}