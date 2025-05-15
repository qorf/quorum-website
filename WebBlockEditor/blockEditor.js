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

    this.GetMultipleFileText$quorum_text$quorum_Libraries_Containers_Array$quorum_Libraries_Containers_Array = function(containerID, fileNames, fileTexts) {
            if (cachedCodeFiles != null)
            {
                for (let i = 0; i < cachedCodeFiles.length; i++)
                {
                    const fileObj = cachedCodeFiles[i];
                    const fileName = fileObj.fileName;
                    const fileText = fileObj.code;

                    let quorumName = new quorum_Libraries_Language_Types_Text_();
                    let quorumText = new quorum_Libraries_Language_Types_Text_();
                    quorumName.SetValue$quorum_text(fileName);
                    quorumText.SetValue$quorum_text(fileText);
                    fileNames.Add$quorum_Libraries_Language_Object(quorumName);
                    fileTexts.Add$quorum_Libraries_Language_Object(quorumText);
                }
                return;
            }

            let container = document.getElementById(containerID);
            if (container.dataset.codeForIde) {
                const data = JSON.parse(container.dataset.codeForIde);
                for (let i = 0; i < data.length; i++)
                {
                    const fileObj = data[i];
                    const fileName = fileObj.file;
                    const fileText = fileObj.data;

                    let quorumName = new quorum_Libraries_Language_Types_Text_();
                    let quorumText = new quorum_Libraries_Language_Types_Text_();
                    quorumName.SetValue$quorum_text(fileName);
                    quorumText.SetValue$quorum_text(fileText);
                    fileNames.Add$quorum_Libraries_Language_Object(quorumName);
                    fileTexts.Add$quorum_Libraries_Language_Object(quorumText);
                }
            }
        }
		
	this.SupportsMultipleFilesNative$quorum_text = function(containerID)
	{
		let container = document.getElementById(containerID);
		if (container.dataset.codeForIde) 
		{
			const data = JSON.parse(container.dataset.codeForIde);
			return data.length > 1;
		}
		
		return false;
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
var quorum_WebEditor_TextHighlightListener_ = class {
Equals$quorum_Libraries_Language_Object(object) {
return global_Object_Equals(this.prototype, object);
}
GetHashCode() {
return global_Object_GetHashCode(this.prototype, );
}
Compare$quorum_Libraries_Language_Object(object) {
return global_Object_Compare(this.prototype, object);
}
TextChanged$quorum_Libraries_Interface_Events_TextChangeEvent(event) {
var target = event.GetControl();
if (global_InstanceOf(target,'Libraries.Interface.Controls.Blocks.CodeEditor')) {
this.editor = global_CheckCast(target, "Libraries.Interface.Controls.Blocks.CodeEditor");
}
else if( global_InstanceOf(target,'Libraries.Interface.Controls.Blocks.EditRegion')) {
var region = global_CheckCast(target, "Libraries.Interface.Controls.Blocks.EditRegion");
if (global_InstanceOf(region.GetBlockEnvironment(),'Libraries.Interface.Controls.Blocks.CodeEditor')) {
this.editor = global_CheckCast(region.GetBlockEnvironment(), "Libraries.Interface.Controls.Blocks.CodeEditor");
}
}
else { 
return;
}
if ((this.Get_WebEditor_TextHighlightListener__editor_() == null)) {
return;
}
this.timer = 0;
this.pendingChanges = true;
};
Update$quorum_number(seconds) {
if (this.Get_WebEditor_TextHighlightListener__pendingChanges_()) {
this.timer = (this.Get_WebEditor_TextHighlightListener__timer_() + seconds);
if ((this.Get_WebEditor_TextHighlightListener__timer_() >= this.Get_WebEditor_TextHighlightListener__timerLimit_())) {
this.timer = 0;
this.pendingChanges = false;
this.prototype.PerformHighlighting$quorum_Libraries_Interface_Controls_Blocks_CodeEditor(this.Get_WebEditor_TextHighlightListener__editor_());
}
}
};
PerformHighlighting$quorum_Libraries_Interface_Controls_Blocks_CodeEditor(editor) {
if ((editor == null)) {
return;
}
var lexer = new quorum_Libraries_Language_Compile_Parsing_QuorumLexer_();
lexer.Read$quorum_text(editor.GetText());
var gms = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
var options = gms.GetInterfaceOptions();
var cgK = options.GetColorProperty$quorum_text(this.Get_WebEditor_TextHighlightListener__EDITOR_KEYWORD_COLOR_());
var cgS = options.GetColorProperty$quorum_text(this.Get_WebEditor_TextHighlightListener__EDITOR_STRUCTURE_COLOR_());
var cgT = options.GetColorProperty$quorum_text(this.Get_WebEditor_TextHighlightListener__EDITOR_TEXT_COLOR_());
var cgC = options.GetColorProperty$quorum_text(this.Get_WebEditor_TextHighlightListener__EDITOR_COMMENT_COLOR_());
if ((cgK != null)) {
this.keywordColor = global_CheckCast(cgK, "Libraries.Game.Graphics.Color");
}
else { 
this.keywordColor = global_CheckCast(editor.GetFontColor(), "Libraries.Game.Graphics.Color");
}
if ((cgS != null)) {
this.structureColor = global_CheckCast(cgS, "Libraries.Game.Graphics.Color");
}
else { 
this.structureColor = global_CheckCast(editor.GetFontColor(), "Libraries.Game.Graphics.Color");
}
if ((cgT != null)) {
this.textColor = global_CheckCast(cgT, "Libraries.Game.Graphics.Color");
}
else { 
this.textColor = global_CheckCast(editor.GetFontColor(), "Libraries.Game.Graphics.Color");
}
if ((cgC != null)) {
this.commentColor = global_CheckCast(cgC, "Libraries.Game.Graphics.Color");
}
else { 
this.commentColor = global_CheckCast(editor.GetFontColor(), "Libraries.Game.Graphics.Color");
}
var mainFileTokens = new quorum_Libraries_Containers_Array_();
mainFileTokens.SetMaxSize$quorum_integer(500);
editor.EmptyTextStyles();
var tokenIterator = lexer.GetIterator();
tokenIterator.SetReadingAllChannels$quorum_boolean(true);
var searchBlock = editor.GetRootBlock();
var foundBlock = null;
var i = 0;
while (tokenIterator.HasNext()) {
var token = tokenIterator.Next();
if ((token.Get_Libraries_Language_Compile_Parsing_Token__category_() != -1)) {
if (this.prototype.IsKeyword$quorum_Libraries_Language_Compile_Parsing_Token(token)) {
var style = this.prototype.GetTextStyle$quorum_Libraries_Language_Compile_Parsing_Token(token);
style.SetColor$quorum_Libraries_Game_Graphics_Color(this.Get_WebEditor_TextHighlightListener__keywordColor_());
foundBlock = editor.AddTextStyle$quorum_text$quorum_Libraries_Interface_Controls_TextStyles_TextStyle$quorum_Libraries_Interface_Controls_Blocks_Block(("Lexer" + i), style, searchBlock);
if ((foundBlock != null)) {
searchBlock = foundBlock;
}
}
else if( this.prototype.IsStructure$quorum_Libraries_Language_Compile_Parsing_Token(token)) {
var style = this.prototype.GetTextStyle$quorum_Libraries_Language_Compile_Parsing_Token(token);
style.SetColor$quorum_Libraries_Game_Graphics_Color(this.Get_WebEditor_TextHighlightListener__structureColor_());
foundBlock = editor.AddTextStyle$quorum_text$quorum_Libraries_Interface_Controls_TextStyles_TextStyle$quorum_Libraries_Interface_Controls_Blocks_Block(("Lexer" + i), style, searchBlock);
if ((foundBlock != null)) {
searchBlock = foundBlock;
}
}
else if( this.prototype.IsText$quorum_Libraries_Language_Compile_Parsing_Token(token)) {
var style = this.prototype.GetTextStyle$quorum_Libraries_Language_Compile_Parsing_Token(token);
style.SetColor$quorum_Libraries_Game_Graphics_Color(this.Get_WebEditor_TextHighlightListener__textColor_());
foundBlock = editor.AddTextStyle$quorum_text$quorum_Libraries_Interface_Controls_TextStyles_TextStyle$quorum_Libraries_Interface_Controls_Blocks_Block(("Lexer" + i), style, searchBlock);
if ((foundBlock != null)) {
searchBlock = foundBlock;
}
}
else if( this.prototype.IsComment$quorum_Libraries_Language_Compile_Parsing_Token(token)) {
var style = this.prototype.GetTextStyle$quorum_Libraries_Language_Compile_Parsing_Token(token);
style.SetColor$quorum_Libraries_Game_Graphics_Color(this.Get_WebEditor_TextHighlightListener__commentColor_());
foundBlock = editor.AddTextStyle$quorum_text$quorum_Libraries_Interface_Controls_TextStyles_TextStyle$quorum_Libraries_Interface_Controls_Blocks_Block(("Lexer" + i), style, searchBlock);
if ((foundBlock != null)) {
searchBlock = foundBlock;
}
}
mainFileTokens.Add$quorum_Libraries_Language_Object(token);
}
else { 
token = null;
}
i = (i + 1);
}
};
GetTextStyle$quorum_Libraries_Language_Compile_Parsing_Token(token) {
var style = new quorum_Libraries_Interface_Controls_TextStyles_TextStyle_();
style.SetIndex$quorum_integer(token.Get_Libraries_Language_Compile_Parsing_Token__startIndex_());
style.SetSize$quorum_integer(((token.Get_Libraries_Language_Compile_Parsing_Token__endIndex_() - token.Get_Libraries_Language_Compile_Parsing_Token__startIndex_()) + 1));
return style;
};
IsStructure$quorum_Libraries_Language_Compile_Parsing_Token(token) {
var lexer = (global_Get_Shared_Class("Libraries.Language.Compile.Parsing.QuorumLexerConstants") == null ? global_Add_Shared_Class("Libraries.Language.Compile.Parsing.QuorumLexerConstants", new quorum_Libraries_Language_Compile_Parsing_QuorumLexerConstants_()) : global_Get_Shared_Class("Libraries.Language.Compile.Parsing.QuorumLexerConstants"));
if (((((((((((((token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__OUTPUT_()) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__ON_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__CREATE_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__BLUEPRINT_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__NATIVE_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__ACTION_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__CLASS_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__END_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__IF_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__REPEAT_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__ELSE_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__ELSE_IF_()))) {
return true;
}
return false;
};
IsText$quorum_Libraries_Language_Compile_Parsing_Token(token) {
var lexer = (global_Get_Shared_Class("Libraries.Language.Compile.Parsing.QuorumLexerConstants") == null ? global_Add_Shared_Class("Libraries.Language.Compile.Parsing.QuorumLexerConstants", new quorum_Libraries_Language_Compile_Parsing_QuorumLexerConstants_()) : global_Get_Shared_Class("Libraries.Language.Compile.Parsing.QuorumLexerConstants"));
if ((token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__STRING_())) {
return true;
}
return false;
};
IsComment$quorum_Libraries_Language_Compile_Parsing_Token(token) {
var lexer = (global_Get_Shared_Class("Libraries.Language.Compile.Parsing.QuorumLexerConstants") == null ? global_Add_Shared_Class("Libraries.Language.Compile.Parsing.QuorumLexerConstants", new quorum_Libraries_Language_Compile_Parsing_QuorumLexerConstants_()) : global_Get_Shared_Class("Libraries.Language.Compile.Parsing.QuorumLexerConstants"));
if ((token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__COMMENTS_())) {
return true;
}
return false;
};
IsKeyword$quorum_Libraries_Language_Compile_Parsing_Token(token) {
var lexer = (global_Get_Shared_Class("Libraries.Language.Compile.Parsing.QuorumLexerConstants") == null ? global_Add_Shared_Class("Libraries.Language.Compile.Parsing.QuorumLexerConstants", new quorum_Libraries_Language_Compile_Parsing_QuorumLexerConstants_()) : global_Get_Shared_Class("Libraries.Language.Compile.Parsing.QuorumLexerConstants"));
if (((((((((((((((((((((((((((((((((((token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__OUTPUT_()) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__CONSTANT_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__ME_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__UNTIL_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__PUBLIC_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__PRIVATE_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__ALERT_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__DETECT_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__ALWAYS_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__CHECK_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__PARENT_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__CAST_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__STATIC_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__INPUT_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__SAY_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__NOW_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__WHILE_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__PACKAGE_NAME_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__TIMES_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__RETURNS_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__RETURN_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__AND_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__OR_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__NULL_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__INTEGER_KEYWORD_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__NUMBER_KEYWORD_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__TEXT_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__BOOLEAN_KEYWORD_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__USE_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__NOT_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__NOT_EQUALS_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__MODULO_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__BOOLEAN_())) || (token.Get_Libraries_Language_Compile_Parsing_Token__category_() == lexer.Get_Libraries_Language_Compile_Parsing_QuorumLexerConstants__INHERITS_()))) {
return true;
}
return false;
};
SetEditor$quorum_Libraries_Interface_Controls_Blocks_CodeEditor(editor) {
this.editor = editor;
this.pendingChanges = true;
};
Get_WebEditor_TextHighlightListener__textColor_() {
   return this.textColor;
};
Set_WebEditor_TextHighlightListener__textColor_(value) {
   this.textColor = value;
};
Get_WebEditor_TextHighlightListener__timerLimit_() {
   return this.timerLimit;
};
Set_WebEditor_TextHighlightListener__timerLimit_(value) {
   this.timerLimit = value;
};
Get_WebEditor_TextHighlightListener__EDITOR_KEYWORD_COLOR_() {
   return this.EDITOR_KEYWORD_COLOR;
};
Set_WebEditor_TextHighlightListener__EDITOR_KEYWORD_COLOR_(value) {
   this.EDITOR_KEYWORD_COLOR = value;
};
Get_WebEditor_TextHighlightListener__pendingChanges_() {
   return this.pendingChanges;
};
Set_WebEditor_TextHighlightListener__pendingChanges_(value) {
   this.pendingChanges = value;
};
Get_WebEditor_TextHighlightListener__commentColor_() {
   return this.commentColor;
};
Set_WebEditor_TextHighlightListener__commentColor_(value) {
   this.commentColor = value;
};
Get_WebEditor_TextHighlightListener__editor_() {
   return this.editor;
};
Set_WebEditor_TextHighlightListener__editor_(value) {
   this.editor = value;
};
Get_WebEditor_TextHighlightListener__keywordColor_() {
   return this.keywordColor;
};
Set_WebEditor_TextHighlightListener__keywordColor_(value) {
   this.keywordColor = value;
};
Get_WebEditor_TextHighlightListener__timer_() {
   return this.timer;
};
Set_WebEditor_TextHighlightListener__timer_(value) {
   this.timer = value;
};
Get_WebEditor_TextHighlightListener__EDITOR_STRUCTURE_COLOR_() {
   return this.EDITOR_STRUCTURE_COLOR;
};
Set_WebEditor_TextHighlightListener__EDITOR_STRUCTURE_COLOR_(value) {
   this.EDITOR_STRUCTURE_COLOR = value;
};
Get_WebEditor_TextHighlightListener__structureColor_() {
   return this.structureColor;
};
Set_WebEditor_TextHighlightListener__structureColor_(value) {
   this.structureColor = value;
};
Get_WebEditor_TextHighlightListener__EDITOR_COMMENT_COLOR_() {
   return this.EDITOR_COMMENT_COLOR;
};
Set_WebEditor_TextHighlightListener__EDITOR_COMMENT_COLOR_(value) {
   this.EDITOR_COMMENT_COLOR = value;
};
Get_WebEditor_TextHighlightListener__EDITOR_TEXT_COLOR_() {
   return this.EDITOR_TEXT_COLOR;
};
Set_WebEditor_TextHighlightListener__EDITOR_TEXT_COLOR_(value) {
   this.EDITOR_TEXT_COLOR = value;
};

constructor(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Interface.Events.TextChangeListener', 'Libraries.Language.Object',  'WebEditor.TextHighlightListener'];
this.Libraries_Interface_Events_TextChangeListener__ = null;
if(parents == null) {
   this.Libraries_Interface_Events_TextChangeListener__ = new quorum_Libraries_Interface_Events_TextChangeListener_(false);
   this.Libraries_Interface_Events_TextChangeListener__.prototype = this;
}
this.EDITOR_KEYWORD_COLOR = "EDITOR_KEYWORD_COLOR";
this.EDITOR_STRUCTURE_COLOR = "EDITOR_STRUCTURE_COLOR";
this.EDITOR_TEXT_COLOR = "EDITOR_TEXT_COLOR";
this.EDITOR_COMMENT_COLOR = "EDITOR_COMMENT_COLOR";
this.editor = null;
this.keywordColor = null;
this.structureColor = null;
this.textColor = null;
this.commentColor = null;
this.pendingChanges = false;
this.timerLimit = 0.5;
this.timer = 0;

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;
}

};


var quorum_WebEditor_Behaviors_FocusEditorBehavior_ = class {
Update$quorum_number(seconds) {
     return this.Libraries_Interface_Behaviors_Behavior__.Update$quorum_number(seconds);
}
Compare$quorum_Libraries_Language_Object(object) {
return global_Object_Compare(this.prototype, object);
}
SetRunOnUpdate$quorum_boolean(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
Dispose() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
IsFinished() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
IsRunningOnUpdate() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
Equals$quorum_Libraries_Language_Object(object) {
return global_Object_Equals(this.prototype, object);
}
GetHashCode() {
return global_Object_GetHashCode(this.prototype, );
}
HasBeenRun() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
SetHasRunFlag$quorum_boolean(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
Run$quorum_Libraries_Interface_Events_BehaviorEvent(event) {
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
var editor = global_CheckCast(manager.GetGame(), "WebEditor.BlockEditor");
editor.SetFocus$quorum_Libraries_Interface_Item(editor.GetBlockEditor());
};
Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};

constructor(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.FocusEditorBehavior'];
this.Libraries_Interface_Behaviors_Behavior__ = null;
if(parents == null) {
   this.Libraries_Interface_Behaviors_Behavior__ = new quorum_Libraries_Interface_Behaviors_Behavior_(false);
   this.Libraries_Interface_Behaviors_Behavior__.prototype = this;
}

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;
}

};


var quorum_WebEditor_Behaviors_WebEditorSingleTapBehavior_ = class {
Update$quorum_number(seconds) {
     return this.Libraries_Interface_Behaviors_Behavior__.Update$quorum_number(seconds);
}
Compare$quorum_Libraries_Language_Object(object) {
return global_Object_Compare(this.prototype, object);
}
SetRunOnUpdate$quorum_boolean(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
Dispose() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
IsFinished() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
IsRunningOnUpdate() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
Equals$quorum_Libraries_Language_Object(object) {
return global_Object_Equals(this.prototype, object);
}
GetHashCode() {
return global_Object_GetHashCode(this.prototype, );
}
HasBeenRun() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
SetHasRunFlag$quorum_boolean(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
Run$quorum_Libraries_Interface_Events_BehaviorEvent(event) {
if ((event.GetGestureEvent() != null)) {
var gesture = event.GetGestureEvent();
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
if (this.prototype.IsInBlockEditor$quorum_Libraries_Interface_Item(manager.GetFocus())) {
var editor = global_CheckCast(manager.GetGame(), "WebEditor.BlockEditor");
var blocks = editor.GetBlockEditor();
if (blocks.IsKeyboardMovingBlocks()) {
blocks.ConfirmKeyboardMovingBlocks();
return;
}
}
var layer = manager.GetGame().GetCurrentLayer2D();
var counter = layer.GetSize();
var temp = null;
var result = null;
var pointVector = layer.GetCamera().ScreenToWorldCoordinates$quorum_number$quorum_number(gesture.GetX() * 1.0, gesture.GetY() * 1.0);
while ((counter > 0)) {
counter = (counter - 1);
temp = layer.Get$quorum_integer(counter).GetItemAt$quorum_number$quorum_number(pointVector.GetX(), pointVector.GetY());
if (((temp != null) && (global_CheckCast(temp, "Libraries.Interface.Item") != manager.GetFocus()))) {
if ((global_InstanceOf(manager.GetFocus(),'Libraries.Interface.Controls.Blocks.Palette.BlockPaletteItem') && global_InstanceOf(temp,'Libraries.Interface.Controls.ScrollPaneRendererAnchor'))) {
return;
}
temp.Focus();
}
}
}
};
IsInPalette$quorum_Libraries_Interface_Item(item) {
while (!((item == null))) {
if (global_InstanceOf(item,'Libraries.Interface.Controls.Blocks.Palette.BlockPalette')) {
return true;
}
else { 
item = item.GetAccessibleParent();
}
}
return false;
};
IsInBlockEditor$quorum_Libraries_Interface_Item(item) {
while (!((item == null))) {
if (global_InstanceOf(item,'Libraries.Interface.Controls.Blocks.CodeEditor')) {
return true;
}
else { 
item = item.GetAccessibleParent();
}
}
return false;
};
Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};

constructor(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.WebEditorSingleTapBehavior'];
this.Libraries_Interface_Behaviors_Behavior__ = null;
if(parents == null) {
   this.Libraries_Interface_Behaviors_Behavior__ = new quorum_Libraries_Interface_Behaviors_Behavior_(false);
   this.Libraries_Interface_Behaviors_Behavior__.prototype = this;
}

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;
}

};


var quorum_WebEditor_EditorItem_ = class {
constructor_() {
this.prototype.SetInputGroup$quorum_text("EditorItem");
this.prototype.SetAccessibilityCode$quorum_integer(this.Libraries_Interface_Item__.CUSTOM);
this.prototype.SetFocusable$quorum_boolean(true);
this.prototype.SetPixelWidth$quorum_number(1 * 1.0);
this.prototype.SetPixelHeight$quorum_number(1 * 1.0);
this.prototype.SetPixelX$quorum_number(0 * 1.0);
this.prototype.SetPixelY$quorum_number(0 * 1.0);
};
GetShadowColor() {
     return this.Libraries_Interface_Controls_Control__.GetShadowColor();
}
GetTopRightPixelRounding() {
     return this.Libraries_Interface_Controls_Control__.GetTopRightPixelRounding();
}
SetOrigin$quorum_number$quorum_number(setX, setY) {
     return this.Libraries_Interface_Item2D__.SetOrigin$quorum_number$quorum_number(setX, setY);
}
RequireSimulation$quorum_boolean(flag) {
     return this.Libraries_Interface_Item2D__.RequireSimulation$quorum_boolean(flag);
}
HasBottomRightPixelRounding() {
     return this.Libraries_Interface_Controls_Control__.HasBottomRightPixelRounding();
}
BeginMouseOver() {
     return this.Libraries_Interface_Controls_Control__.BeginMouseOver();
}
SetTorque$quorum_number(torque) {
     return this.Libraries_Interface_Item2D__.SetTorque$quorum_number(torque);
}
RemoveMouseWheelListener$quorum_Libraries_Interface_Events_MouseWheelListener(listener) {
     return this.Libraries_Interface_Item__.RemoveMouseWheelListener$quorum_Libraries_Interface_Events_MouseWheelListener(listener);
}
GetLayoutRows() {
     return this.Libraries_Interface_Controls_Control__.GetLayoutRows();
}
SetLayout$quorum_Libraries_Interface_Layouts_Layout(layout) {
     return this.Libraries_Interface_Controls_Control__.SetLayout$quorum_Libraries_Interface_Layouts_Layout(layout);
}
IsRotationAllowed() {
     return this.Libraries_Interface_Item2D__.IsRotationAllowed();
}
SetUnfocusedSelectionFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetUnfocusedSelectionFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
IsSimulated() {
     return this.Libraries_Interface_Item2D__.IsSimulated();
}
SetShadowY$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetShadowY$quorum_number(value);
}
GetJointList() {
     return this.Libraries_Interface_Item2D__.GetJointList();
}
Synchronize$quorum_Libraries_Game_Collision_BroadphaseCollision2D$quorum_Libraries_Game_Collision_PhysicsPosition2D$quorum_Libraries_Game_Collision_PhysicsPosition2D(broadphase, transform1, transform2) {
     return this.Libraries_Interface_Item2D__.Synchronize$quorum_Libraries_Game_Collision_BroadphaseCollision2D$quorum_Libraries_Game_Collision_PhysicsPosition2D$quorum_Libraries_Game_Collision_PhysicsPosition2D(broadphase, transform1, transform2);
}
GetItemAt$quorum_number$quorum_number(x, y) {
     return this.Libraries_Interface_Item2D__.GetItemAt$quorum_number$quorum_number(x, y);
}
SetTopPadding$quorum_number(padding) {
     return this.Libraries_Interface_Controls_Control__.SetTopPadding$quorum_number(padding);
}
ApplyForceToCenter$quorum_Libraries_Compute_Vector2(force) {
     return this.Libraries_Interface_Item2D__.ApplyForceToCenter$quorum_Libraries_Compute_Vector2(force);
}
SetMass$quorum_number(mass) {
     return this.Libraries_Interface_Item2D__.SetMass$quorum_number(mass);
}
SetResponsive() {
     return this.Libraries_Interface_Item2D__.SetResponsive();
}
GetLeftPadding() {
     return this.Libraries_Interface_Controls_Control__.GetLeftPadding();
}
SetPixelY$quorum_number(y) {
     return this.Libraries_Interface_Controls_Control__.SetPixelY$quorum_number(y);
}
HasTopRightPixelRounding() {
     return this.Libraries_Interface_Controls_Control__.HasTopRightPixelRounding();
}
SetPhysicsProperties$quorum_Libraries_Game_Physics_PhysicsProperties2D(properties) {
     return this.Libraries_Interface_Item2D__.SetPhysicsProperties$quorum_Libraries_Game_Physics_PhysicsProperties2D(properties);
}
SetGridHeight$quorum_integer(gridHeight) {
     return this.Libraries_Interface_Controls_Control__.SetGridHeight$quorum_integer(gridHeight);
}
IsSimulationRequired() {
     return this.Libraries_Interface_Item2D__.IsSimulationRequired();
}
GetAccentColor() {
     return this.Libraries_Interface_Controls_Control__.GetAccentColor();
}
HasTopLeftRounding() {
     return this.Libraries_Interface_Controls_Control__.HasTopLeftRounding();
}
SetParent$quorum_Libraries_Interface_Item2D(newItem) {
     return this.Libraries_Interface_Item2D__.SetParent$quorum_Libraries_Interface_Item2D(newItem);
}
GetShadowX() {
     return this.Libraries_Interface_Controls_Control__.GetShadowX();
}
GetShadowY() {
     return this.Libraries_Interface_Controls_Control__.GetShadowY();
}
SelectByFirstLetters$quorum_text(firstLetter) {
     return this.Libraries_Interface_Controls_Control__.SelectByFirstLetters$quorum_text(firstLetter);
}
SetTransform$quorum_Libraries_Compute_Vector2$quorum_number(position, angle) {
     return this.Libraries_Interface_Item2D__.SetTransform$quorum_Libraries_Compute_Vector2$quorum_number(position, angle);
}
GetDefaultFontName() {
     return this.Libraries_Interface_Controls_Control__.GetDefaultFontName();
}
GetRightMargin() {
     return this.Libraries_Interface_Controls_Control__.GetRightMargin();
}
RequestLayout() {
     return this.Libraries_Interface_Controls_Control__.RequestLayout();
}
GetLinearDamping() {
     return this.Libraries_Interface_Item2D__.GetLinearDamping();
}
GetBottomRightRounding() {
     return this.Libraries_Interface_Controls_Control__.GetBottomRightRounding();
}
SetGridX$quorum_integer(gridX) {
     return this.Libraries_Interface_Controls_Control__.SetGridX$quorum_integer(gridX);
}
SetForegroundSelectionColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetForegroundSelectionColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
SetCollisionList$quorum_Libraries_Game_Collision_CollisionEdge2D(edge) {
     return this.Libraries_Interface_Item2D__.SetCollisionList$quorum_Libraries_Game_Collision_CollisionEdge2D(edge);
}
SetScale$quorum_number(scale) {
     return this.Libraries_Interface_Item2D__.SetScale$quorum_number(scale);
}
GetBottomMargin() {
     return this.Libraries_Interface_Controls_Control__.GetBottomMargin();
}
SetToSmallFont() {
     return this.Libraries_Interface_Controls_Control__.SetToSmallFont();
}
ClickedMouse() {
     return this.Libraries_Interface_Controls_Control__.ClickedMouse();
}
GetLinearVelocity() {
     return this.Libraries_Interface_Item2D__.GetLinearVelocity();
}
SetTransform0$quorum_Libraries_Game_Collision_PhysicsPosition2D(transform) {
     return this.Libraries_Interface_Item2D__.SetTransform0$quorum_Libraries_Game_Collision_PhysicsPosition2D(transform);
}
SetLinearVelocityX$quorum_number(linearVelocityX) {
     return this.Libraries_Interface_Item2D__.SetLinearVelocityX$quorum_number(linearVelocityX);
}
QueueForDrawing$quorum_Libraries_Game_Graphics_Painter2D(painter) {
     return this.Libraries_Interface_Item2D__.QueueForDrawing$quorum_Libraries_Game_Graphics_Painter2D(painter);
}
UpdateTransformY() {
     return this.Libraries_Interface_Item2D__.UpdateTransformY();
}
UpdateTransformX() {
     return this.Libraries_Interface_Item2D__.UpdateTransformX();
}
ApplyForce$quorum_Libraries_Compute_Vector2$quorum_Libraries_Compute_Vector2(force, point) {
     return this.Libraries_Interface_Item2D__.ApplyForce$quorum_Libraries_Compute_Vector2$quorum_Libraries_Compute_Vector2(force, point);
}
GetVisibleItemAt$quorum_number$quorum_number(x, y) {
     return this.Libraries_Interface_Item2D__.GetVisibleItemAt$quorum_number$quorum_number(x, y);
}
IsRenderingSelection() {
     return this.Libraries_Interface_Controls_Control__.IsRenderingSelection();
}
IsEmpty() {
     return this.Libraries_Interface_Item2D__.IsEmpty();
}
AddControlActivationListener$quorum_Libraries_Interface_Events_ControlActivationListener(listener) {
     return this.Libraries_Interface_Controls_Control__.AddControlActivationListener$quorum_Libraries_Interface_Events_ControlActivationListener(listener);
}
SetLinearVelocityY$quorum_number(linearVelocityY) {
     return this.Libraries_Interface_Item2D__.SetLinearVelocityY$quorum_number(linearVelocityY);
}
GetShadowHeight() {
     return this.Libraries_Interface_Controls_Control__.GetShadowHeight();
}
IsFlippedY() {
     return this.Libraries_Interface_Item2D__.IsFlippedY();
}
IsFlippedX() {
     return this.Libraries_Interface_Item2D__.IsFlippedX();
}
GetGridHeight() {
     return this.Libraries_Interface_Controls_Control__.GetGridHeight();
}
GetFocusListeners() {
     return this.Libraries_Interface_Item__.GetFocusListeners();
}
AddTouchListener$quorum_Libraries_Interface_Events_TouchListener(listener) {
     return this.Libraries_Interface_Item__.AddTouchListener$quorum_Libraries_Interface_Events_TouchListener(listener);
}
SetMouseDownFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetMouseDownFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
SetTopRightRounding$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetTopRightRounding$quorum_number(value);
}
GetTransform0() {
     return this.Libraries_Interface_Item2D__.GetTransform0();
}
GetInverseInertia() {
     return this.Libraries_Interface_Item2D__.GetInverseInertia();
}
Resize() {
     return this.Libraries_Interface_Item2D__.Resize();
}
GetCurrentLayoutProperties() {
     return this.Libraries_Interface_Controls_Control__.GetCurrentLayoutProperties();
}
FinishCollision$quorum_Libraries_Interface_Item(item) {
     return this.Libraries_Interface_Item__.FinishCollision$quorum_Libraries_Interface_Item(item);
}
AddSelectionListener$quorum_Libraries_Interface_Events_SelectionListener(listener) {
     return this.Libraries_Interface_Controls_Control__.AddSelectionListener$quorum_Libraries_Interface_Events_SelectionListener(listener);
}
RemoveSelectionListener$quorum_Libraries_Interface_Events_SelectionListener(listener) {
     return this.Libraries_Interface_Controls_Control__.RemoveSelectionListener$quorum_Libraries_Interface_Events_SelectionListener(listener);
}
RemoveFocusListener$quorum_Libraries_Interface_Events_FocusListener(listener) {
     return this.Libraries_Interface_Item__.RemoveFocusListener$quorum_Libraries_Interface_Events_FocusListener(listener);
}
SetAccessibilityCode$quorum_integer(newAccessibilityCode) {
     return this.Libraries_Interface_Item__.SetAccessibilityCode$quorum_integer(newAccessibilityCode);
}
HasShadowX() {
     return this.Libraries_Interface_Controls_Control__.HasShadowX();
}
SetBackgroundColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetBackgroundColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
HasShadowY() {
     return this.Libraries_Interface_Controls_Control__.HasShadowY();
}
GetAngularDamping() {
     return this.Libraries_Interface_Item2D__.GetAngularDamping();
}
SetInterfaceOptionsKey$quorum_text(key) {
     return this.Libraries_Interface_Controls_Control__.SetInterfaceOptionsKey$quorum_text(key);
}
RequestReloadGraphics() {
     return this.Libraries_Interface_Controls_Control__.RequestReloadGraphics();
}
GetAccessibilityRoleDescription() {
     return this.Libraries_Interface_Item__.GetAccessibilityRoleDescription();
}
GetRotationInRadians() {
     return this.Libraries_Interface_Item2D__.GetRotationInRadians();
}
MoveX$quorum_number(xAmount) {
     return this.Libraries_Interface_Item2D__.MoveX$quorum_number(xAmount);
}
ResetMass() {
     return this.Libraries_Interface_Item2D__.ResetMass();
}
GetFontColor() {
     return this.Libraries_Interface_Controls_Control__.GetFontColor();
}
RequestVerticesUpdate() {
     return this.Libraries_Interface_Item2D__.RequestVerticesUpdate();
}
HasLeftBorder() {
     return this.Libraries_Interface_Controls_Control__.HasLeftBorder();
}
HasTopLeftPixelRounding() {
     return this.Libraries_Interface_Controls_Control__.HasTopLeftPixelRounding();
}
GetActivationBehavior() {
     return this.Libraries_Interface_Controls_Control__.GetActivationBehavior();
}
UpdateBehaviors$quorum_number(seconds) {
     return this.Libraries_Interface_Item__.UpdateBehaviors$quorum_number(seconds);
}
SetCollisionGroupIndex$quorum_integer(index) {
     return this.Libraries_Interface_Item2D__.SetCollisionGroupIndex$quorum_integer(index);
}
GetRestitution() {
     return this.Libraries_Interface_Item2D__.GetRestitution();
}
SetScreenPositionFromPhysicsPosition() {
     return this.Libraries_Interface_Item2D__.SetScreenPositionFromPhysicsPosition();
}
IsPhysicsEnabled() {
     return this.Libraries_Interface_Item2D__.IsPhysicsEnabled();
}
SetClipping$quorum_boolean(clip) {
     return this.Libraries_Interface_Item2D__.SetClipping$quorum_boolean(clip);
}
SetScaleFromCenter$quorum_number(scale) {
     return this.Libraries_Interface_Item2D__.SetScaleFromCenter$quorum_number(scale);
}
IsShowing() {
     return this.Libraries_Interface_Item__.IsShowing();
}
SetBorderStyle$quorum_integer(style) {
     return this.Libraries_Interface_Controls_Control__.SetBorderStyle$quorum_integer(style);
}
Contains$quorum_number$quorum_number(containsX, containsY) {
     return this.Libraries_Interface_Item2D__.Contains$quorum_number$quorum_number(containsX, containsY);
}
IsCollidable() {
     return this.Libraries_Interface_Item2D__.IsCollidable();
}
Simulate$quorum_boolean(flag) {
     return this.Libraries_Interface_Item2D__.Simulate$quorum_boolean(flag);
}
GetPhysicsProperties() {
     return this.Libraries_Interface_Item2D__.GetPhysicsProperties();
}
GetRightPadding() {
     return this.Libraries_Interface_Controls_Control__.GetRightPadding();
}
SetY$quorum_number(setY) {
     return this.Libraries_Interface_Item2D__.SetY$quorum_number(setY);
}
SetMass$quorum_Libraries_Game_Physics_Mass2D(mass) {
     return this.Libraries_Interface_Item2D__.SetMass$quorum_Libraries_Game_Physics_Mass2D(mass);
}
GetBorderThickness() {
     return this.Libraries_Interface_Controls_Control__.GetBorderThickness();
}
GetAccessibleParent() {
     return this.Libraries_Interface_Item2D__.GetAccessibleParent();
}
SetFlipY$quorum_boolean(flip) {
     return this.Libraries_Interface_Item2D__.SetFlipY$quorum_boolean(flip);
}
GetName() {
     return this.Libraries_Interface_Item__.GetName();
}
GetPixelWidth() {
     return this.Libraries_Interface_Controls_Control__.GetPixelWidth();
}
ManageShape() {
     return this.Libraries_Interface_Item2D__.ManageShape();
}
GetBottomLeftRounding() {
     return this.Libraries_Interface_Controls_Control__.GetBottomLeftRounding();
}
GetLeftMargin() {
     return this.Libraries_Interface_Controls_Control__.GetLeftMargin();
}
GetFriction() {
     return this.Libraries_Interface_Item2D__.GetFriction();
}
GetSelectionListeners() {
     return this.Libraries_Interface_Controls_Control__.GetSelectionListeners();
}
SetHasMoved$quorum_boolean(flag) {
     return this.Libraries_Interface_Item2D__.SetHasMoved$quorum_boolean(flag);
}
FastMoving$quorum_boolean(flag) {
     return this.Libraries_Interface_Item2D__.FastMoving$quorum_boolean(flag);
}
SetFont$quorum_Libraries_Game_Graphics_Font(font) {
     return this.Libraries_Interface_Controls_Control__.SetFont$quorum_Libraries_Game_Graphics_Font(font);
}
SetPercentageX$quorum_number(x) {
     return this.Libraries_Interface_Controls_Control__.SetPercentageX$quorum_number(x);
}
GetBorderStyle() {
     return this.Libraries_Interface_Controls_Control__.GetBorderStyle();
}
ResetLayoutFlag() {
     return this.Libraries_Interface_Controls_Control__.ResetLayoutFlag();
}
SetTopRightPixelRounding$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetTopRightPixelRounding$quorum_number(value);
}
UpdateTransformAngle() {
     return this.Libraries_Interface_Item2D__.UpdateTransformAngle();
}
GetUnfocusedSelectionBorderColor() {
     return this.Libraries_Interface_Controls_Control__.GetUnfocusedSelectionBorderColor();
}
EmptySelectionListeners() {
     return this.Libraries_Interface_Controls_Control__.EmptySelectionListeners();
}
GetLayer() {
     return this.Libraries_Interface_Item2D__.GetLayer();
}
GetWorldVector$quorum_Libraries_Compute_Vector2(localVector) {
     return this.Libraries_Interface_Item2D__.GetWorldVector$quorum_Libraries_Compute_Vector2(localVector);
}
GetMouseDownColor() {
     return this.Libraries_Interface_Controls_Control__.GetMouseDownColor();
}
HasFontOutlineThickness() {
     return this.Libraries_Interface_Controls_Control__.HasFontOutlineThickness();
}
GetFocusFontColor() {
     return this.Libraries_Interface_Controls_Control__.GetFocusFontColor();
}
SetGlowColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetGlowColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
GetInterfaceOptionsKey() {
     return this.Libraries_Interface_Controls_Control__.GetInterfaceOptionsKey();
}
GetHorizontalLayoutMode() {
     return this.Libraries_Interface_Controls_Control__.GetHorizontalLayoutMode();
}
SetGridWidth$quorum_integer(gridWidth) {
     return this.Libraries_Interface_Controls_Control__.SetGridWidth$quorum_integer(gridWidth);
}
GetMass$quorum_Libraries_Game_Physics_Mass2D(mass) {
     return this.Libraries_Interface_Item2D__.GetMass$quorum_Libraries_Game_Physics_Mass2D(mass);
}
SetToLargeFont() {
     return this.Libraries_Interface_Controls_Control__.SetToLargeFont();
}
AddGestureListener$quorum_Libraries_Interface_Events_GestureListener(listener) {
     return this.Libraries_Interface_Item__.AddGestureListener$quorum_Libraries_Interface_Events_GestureListener(listener);
}
SetCornerRounding$quorum_number$quorum_number$quorum_number$quorum_number(bottomLeft, bottomRight, topLeft, topRight) {
     return this.Libraries_Interface_Controls_Control__.SetCornerRounding$quorum_number$quorum_number$quorum_number$quorum_number(bottomLeft, bottomRight, topLeft, topRight);
}
GetDefaultProportionalFontName() {
     return this.Libraries_Interface_Controls_Control__.GetDefaultProportionalFontName();
}
SetScaleFromCenter$quorum_number$quorum_number(newX, newY) {
     return this.Libraries_Interface_Item2D__.SetScaleFromCenter$quorum_number$quorum_number(newX, newY);
}
SetAccentColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetAccentColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
GetContainerGridWidth() {
     return this.Libraries_Interface_Controls_Control__.GetContainerGridWidth();
}
HasBottomLeftPixelRounding() {
     return this.Libraries_Interface_Controls_Control__.HasBottomLeftPixelRounding();
}
GetDefaultFont() {
     return this.Libraries_Interface_Controls_Control__.GetDefaultFont();
}
GetMouseDownGlowColor() {
     return this.Libraries_Interface_Controls_Control__.GetMouseDownGlowColor();
}
SetTransform$quorum_Libraries_Game_Collision_PhysicsPosition2D(transform) {
     return this.Libraries_Interface_Item2D__.SetTransform$quorum_Libraries_Game_Collision_PhysicsPosition2D(transform);
}
HasMoved() {
     return this.Libraries_Interface_Item2D__.HasMoved();
}
RemoveMouseListener$quorum_Libraries_Interface_Events_MouseListener(listener) {
     return this.Libraries_Interface_Item__.RemoveMouseListener$quorum_Libraries_Interface_Events_MouseListener(listener);
}
SetFontOutlineColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetFontOutlineColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
GetShapeType() {
     return this.Libraries_Interface_Item2D__.GetShapeType();
}
AddMouseMovementListener$quorum_Libraries_Interface_Events_MouseMovementListener(listener) {
     return this.Libraries_Interface_Item__.AddMouseMovementListener$quorum_Libraries_Interface_Events_MouseMovementListener(listener);
}
SetMouseDownGlowColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetMouseDownGlowColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
GetOffsetX() {
     return this.Libraries_Interface_Item2D__.GetOffsetX();
}
GetOffsetZ() {
     return this.Libraries_Interface_Item2D__.GetOffsetZ();
}
GetOffsetY() {
     return this.Libraries_Interface_Item2D__.GetOffsetY();
}
GetItems() {
     return this.Libraries_Interface_Item2D__.GetItems();
}
GetHashCode() {
return global_Object_GetHashCode(this.prototype, );
}
GetMouseOverColor() {
     return this.Libraries_Interface_Controls_Control__.GetMouseOverColor();
}
GetPixelHeight() {
     return this.Libraries_Interface_Controls_Control__.GetPixelHeight();
}
SetOffsetY$quorum_number(yAmount) {
     return this.Libraries_Interface_Item2D__.SetOffsetY$quorum_number(yAmount);
}
HasProperty$quorum_text(key) {
     return this.Libraries_Interface_Item__.HasProperty$quorum_text(key);
}
AddFocusListener$quorum_Libraries_Interface_Events_FocusListener(listener) {
     return this.Libraries_Interface_Item__.AddFocusListener$quorum_Libraries_Interface_Events_FocusListener(listener);
}
SetLinearDamping$quorum_number(linearDamping) {
     return this.Libraries_Interface_Item2D__.SetLinearDamping$quorum_number(linearDamping);
}
PrepareVertices() {
     return this.Libraries_Interface_Item2D__.PrepareVertices();
}
SetChildrenProcessingMouseEvents$quorum_boolean(shouldProcess) {
     return this.Libraries_Interface_Item2D__.SetChildrenProcessingMouseEvents$quorum_boolean(shouldProcess);
}
GetTopLeftPixelRounding() {
     return this.Libraries_Interface_Controls_Control__.GetTopLeftPixelRounding();
}
GetBottomLeftPixelRounding() {
     return this.Libraries_Interface_Controls_Control__.GetBottomLeftPixelRounding();
}
GetBoundingBox$quorum_integer(childIndex) {
     return this.Libraries_Interface_Item2D__.GetBoundingBox$quorum_integer(childIndex);
}
GetWidth() {
     return this.Libraries_Interface_Item2D__.GetWidth();
}
SetPercentageOriginY$quorum_number(y) {
     return this.Libraries_Interface_Controls_Control__.SetPercentageOriginY$quorum_number(y);
}
HasBottomBorder() {
     return this.Libraries_Interface_Controls_Control__.HasBottomBorder();
}
HasTopRightRounding() {
     return this.Libraries_Interface_Controls_Control__.HasTopRightRounding();
}
Activate$quorum_Libraries_Interface_Events_BehaviorEvent(event) {
     return this.Libraries_Interface_Controls_Control__.Activate$quorum_Libraries_Interface_Events_BehaviorEvent(event);
}
IsFocusable() {
     return this.Libraries_Interface_Item__.IsFocusable();
}
NotifySelectionListeners$quorum_Libraries_Interface_Events_SelectionEvent(event) {
     return this.Libraries_Interface_Controls_Control__.NotifySelectionListeners$quorum_Libraries_Interface_Events_SelectionEvent(event);
}
GetCollisionList() {
     return this.Libraries_Interface_Item2D__.GetCollisionList();
}
GetPreviousFocus() {
     return this.Libraries_Interface_Item__.GetPreviousFocus();
}
SetFontSize$quorum_integer(size) {
     return this.Libraries_Interface_Controls_Control__.SetFontSize$quorum_integer(size);
}
GetDescription() {
     return this.Libraries_Interface_Item__.GetDescription();
}
GetUnfocusedSelectionColor() {
     return this.Libraries_Interface_Controls_Control__.GetUnfocusedSelectionColor();
}
GetPercentageX() {
     return this.Libraries_Interface_Controls_Control__.GetPercentageX();
}
SetBottomLeftRounding$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetBottomLeftRounding$quorum_number(value);
}
GetPercentageY() {
     return this.Libraries_Interface_Controls_Control__.GetPercentageY();
}
SetView2D$quorum_Libraries_Interface_Views_View2D(content) {
     return this.Libraries_Interface_Item2D__.SetView2D$quorum_Libraries_Interface_Views_View2D(content);
}
GetBoundingRectangle() {
     return this.Libraries_Interface_Item2D__.GetBoundingRectangle();
}
GetMouseMovementListeners() {
     return this.Libraries_Interface_Item__.GetMouseMovementListeners();
}
SetFocusColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetFocusColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
SetGridY$quorum_integer(gridY) {
     return this.Libraries_Interface_Controls_Control__.SetGridY$quorum_integer(gridY);
}
GetHeight() {
     return this.Libraries_Interface_Item2D__.GetHeight();
}
GetPercentageWidth() {
     return this.Libraries_Interface_Controls_Control__.GetPercentageWidth();
}
GetProperty$quorum_text(key) {
     return this.Libraries_Interface_Item__.GetProperty$quorum_text(key);
}
LostSelection() {
     return this.Libraries_Interface_Controls_Control__.LostSelection();
}
Advance$quorum_number(time) {
     return this.Libraries_Interface_Item2D__.Advance$quorum_number(time);
}
SetOffset$quorum_number$quorum_number$quorum_number(xAmount, yAmount, zAmount) {
     return this.Libraries_Interface_Item2D__.SetOffset$quorum_number$quorum_number$quorum_number(xAmount, yAmount, zAmount);
}
GetUnfocusedSelectionFontColor() {
     return this.Libraries_Interface_Controls_Control__.GetUnfocusedSelectionFontColor();
}
IsOnLayer() {
     return this.Libraries_Interface_Item2D__.IsOnLayer();
}
ProcessMouseEvent$quorum_Libraries_Interface_Events_MouseEvent(event) {
     return this.Libraries_Interface_Item2D__.ProcessMouseEvent$quorum_Libraries_Interface_Events_MouseEvent(event);
}
GetLayoutProperties$quorum_number$quorum_number(containerWidth, containerHeight) {
     return this.Libraries_Interface_Controls_Control__.GetLayoutProperties$quorum_number$quorum_number(containerWidth, containerHeight);
}
HasColorPropertyOverride$quorum_text(property) {
     return this.Libraries_Interface_Controls_Control__.HasColorPropertyOverride$quorum_text(property);
}
HasRightBorder() {
     return this.Libraries_Interface_Controls_Control__.HasRightBorder();
}
SetOffsetZ$quorum_number(zAmount) {
     return this.Libraries_Interface_Item2D__.SetOffsetZ$quorum_number(zAmount);
}
SetFlipX$quorum_boolean(flip) {
     return this.Libraries_Interface_Item2D__.SetFlipX$quorum_boolean(flip);
}
AddMouseWheelListener$quorum_Libraries_Interface_Events_MouseWheelListener(listener) {
     return this.Libraries_Interface_Item__.AddMouseWheelListener$quorum_Libraries_Interface_Events_MouseWheelListener(listener);
}
RemoveLayoutProperties$quorum_Libraries_Interface_Layouts_LayoutProperties(properties) {
     return this.Libraries_Interface_Controls_Control__.RemoveLayoutProperties$quorum_Libraries_Interface_Layouts_LayoutProperties(properties);
}
SetFriction$quorum_number(friction) {
     return this.Libraries_Interface_Item2D__.SetFriction$quorum_number(friction);
}
GetLocalPoint$quorum_Libraries_Compute_Vector2(worldPoint) {
     return this.Libraries_Interface_Item2D__.GetLocalPoint$quorum_Libraries_Compute_Vector2(worldPoint);
}
GetLinearVelocityFromLocalPoint$quorum_Libraries_Compute_Vector2(localPoint) {
     return this.Libraries_Interface_Item2D__.GetLinearVelocityFromLocalPoint$quorum_Libraries_Compute_Vector2(localPoint);
}
SetName$quorum_text(newName) {
     return this.Libraries_Interface_Item__.SetName$quorum_text(newName);
}
GainedSelection() {
     return this.Libraries_Interface_Controls_Control__.GainedSelection();
}
ManageLayers() {
     return this.Libraries_Interface_Item2D__.ManageLayers();
}
SetMouseOverFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetMouseOverFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
SetGridPosition$quorum_integer$quorum_integer(gridX, gridY) {
     return this.Libraries_Interface_Controls_Control__.SetGridPosition$quorum_integer$quorum_integer(gridX, gridY);
}
NotifyAccessibilityBoundsChanged() {
     return this.Libraries_Interface_Item2D__.NotifyAccessibilityBoundsChanged();
}
SetShadowX$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetShadowX$quorum_number(value);
}
SetRightMargin$quorum_number(padding) {
     return this.Libraries_Interface_Controls_Control__.SetRightMargin$quorum_number(padding);
}
HasBottomLeftRounding() {
     return this.Libraries_Interface_Controls_Control__.HasBottomLeftRounding();
}
AddLayoutProperties$quorum_Libraries_Interface_Layouts_LayoutProperties(properties) {
     return this.Libraries_Interface_Controls_Control__.AddLayoutProperties$quorum_Libraries_Interface_Layouts_LayoutProperties(properties);
}
LostFocus$quorum_Libraries_Interface_Events_FocusEvent(event) {
     return this.Libraries_Interface_Controls_Control__.LostFocus$quorum_Libraries_Interface_Events_FocusEvent(event);
}
CreateNodes$quorum_Libraries_Game_Collision_BroadphaseCollision2D$quorum_Libraries_Game_Collision_PhysicsPosition2D(broadphase, transform) {
     return this.Libraries_Interface_Item2D__.CreateNodes$quorum_Libraries_Game_Collision_BroadphaseCollision2D$quorum_Libraries_Game_Collision_PhysicsPosition2D(broadphase, transform);
}
SetCornerPixelRounding$quorum_number$quorum_number$quorum_number$quorum_number(bottomLeft, bottomRight, topLeft, topRight) {
     return this.Libraries_Interface_Controls_Control__.SetCornerPixelRounding$quorum_number$quorum_number$quorum_number$quorum_number(bottomLeft, bottomRight, topLeft, topRight);
}
SetBottomMargin$quorum_number(padding) {
     return this.Libraries_Interface_Controls_Control__.SetBottomMargin$quorum_number(padding);
}
HasProperties() {
     return this.Libraries_Interface_Item__.HasProperties();
}
SetHorizontalLayoutMode$quorum_integer(mode) {
     return this.Libraries_Interface_Controls_Control__.SetHorizontalLayoutMode$quorum_integer(mode);
}
SetPopupMenu$quorum_Libraries_Interface_Controls_PopupMenu(menu) {
     return this.Libraries_Interface_Controls_Control__.SetPopupMenu$quorum_Libraries_Interface_Controls_PopupMenu(menu);
}
SetMouseOverGlowColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetMouseOverGlowColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
SetAngularDamping$quorum_number(angularDamping) {
     return this.Libraries_Interface_Item2D__.SetAngularDamping$quorum_number(angularDamping);
}
GetShadowWidth() {
     return this.Libraries_Interface_Controls_Control__.GetShadowWidth();
}
HasShadowHeight() {
     return this.Libraries_Interface_Controls_Control__.HasShadowHeight();
}
GetNumberProperty$quorum_text(property) {
     return this.Libraries_Interface_Controls_Control__.GetNumberProperty$quorum_text(property);
}
HasBorderThickness() {
     return this.Libraries_Interface_Controls_Control__.HasBorderThickness();
}
GetMouseOverFontColor() {
     return this.Libraries_Interface_Controls_Control__.GetMouseOverFontColor();
}
GetScaleY() {
     return this.Libraries_Interface_Item2D__.GetScaleY();
}
Equals$quorum_Libraries_Language_Object(object) {
return global_Object_Equals(this.prototype, object);
}
GetScaleX() {
     return this.Libraries_Interface_Item2D__.GetScaleX();
}
SetClipCoordinates$quorum_Libraries_Game_Graphics_Painter2D(painter) {
     return this.Libraries_Interface_Item2D__.SetClipCoordinates$quorum_Libraries_Game_Graphics_Painter2D(painter);
}
GetView2D() {
     return this.Libraries_Interface_Item2D__.GetView2D();
}
GetDefaultFontSize() {
     return this.Libraries_Interface_Controls_Control__.GetDefaultFontSize();
}
SetCollidable$quorum_boolean(flag) {
     return this.Libraries_Interface_Item2D__.SetCollidable$quorum_boolean(flag);
}
GainedFocus$quorum_Libraries_Interface_Events_FocusEvent(event) {
     return this.Libraries_Interface_Controls_Control__.GainedFocus$quorum_Libraries_Interface_Events_FocusEvent(event);
}
SetSelectionBorderThickness$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetSelectionBorderThickness$quorum_number(value);
}
SetWidth$quorum_number(newWidth) {
     return this.Libraries_Interface_Item2D__.SetWidth$quorum_number(newWidth);
}
GetSelectionBorderColor() {
     return this.Libraries_Interface_Controls_Control__.GetSelectionBorderColor();
}
SetSelectionFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetSelectionFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
GetInverseMass() {
     return this.Libraries_Interface_Item2D__.GetInverseMass();
}
GetTransform() {
     return this.Libraries_Interface_Item2D__.GetTransform();
}
HasBottomRightRounding() {
     return this.Libraries_Interface_Controls_Control__.HasBottomRightRounding();
}
GetRotation() {
     return this.Libraries_Interface_Item2D__.GetRotation();
}
GetDensity() {
     return this.Libraries_Interface_Item2D__.GetDensity();
}
GetPropertyKeyIterator() {
     return this.Libraries_Interface_Item__.GetPropertyKeyIterator();
}
SynchronizeNodes() {
     return this.Libraries_Interface_Item2D__.SynchronizeNodes();
}
SetProperty$quorum_text$quorum_Libraries_Data_Formats_JavaScriptObjectNotation(key, value) {
     return this.Libraries_Interface_Item__.SetProperty$quorum_text$quorum_Libraries_Data_Formats_JavaScriptObjectNotation(key, value);
}
GetDefaultLayoutProperties() {
     return this.Libraries_Interface_Controls_Control__.GetDefaultLayoutProperties();
}
SetLeftPadding$quorum_number(padding) {
     return this.Libraries_Interface_Controls_Control__.SetLeftPadding$quorum_number(padding);
}
SetLayer$quorum_Libraries_Game_Layer2D(parentLayer) {
     return this.Libraries_Interface_Item2D__.SetLayer$quorum_Libraries_Game_Layer2D(parentLayer);
}
IsRenderingFocus() {
     return this.Libraries_Interface_Controls_Control__.IsRenderingFocus();
}
GetForegroundSelectionColor() {
     return this.Libraries_Interface_Controls_Control__.GetForegroundSelectionColor();
}
GetLocalCenter() {
     return this.Libraries_Interface_Item2D__.GetLocalCenter();
}
SetNonResponsive() {
     return this.Libraries_Interface_Item2D__.SetNonResponsive();
}
SetRotation$quorum_number(degrees) {
     return this.Libraries_Interface_Item2D__.SetRotation$quorum_number(degrees);
}
SetItem$quorum_integer$quorum_Libraries_Interface_Item2D(index, newItem) {
     return this.Libraries_Interface_Item2D__.SetItem$quorum_integer$quorum_Libraries_Interface_Item2D(index, newItem);
}
SetTopMargin$quorum_number(padding) {
     return this.Libraries_Interface_Controls_Control__.SetTopMargin$quorum_number(padding);
}
GetDefaultMonospaceFontName() {
     return this.Libraries_Interface_Controls_Control__.GetDefaultMonospaceFontName();
}
HasShadowWidth() {
     return this.Libraries_Interface_Controls_Control__.HasShadowWidth();
}
RemoveControlActivationListener$quorum_Libraries_Interface_Events_ControlActivationListener(listener) {
     return this.Libraries_Interface_Controls_Control__.RemoveControlActivationListener$quorum_Libraries_Interface_Events_ControlActivationListener(listener);
}
Focus() {
     return this.Libraries_Interface_Item__.Focus();
}
SetScale$quorum_number$quorum_number(newX, newY) {
     return this.Libraries_Interface_Item2D__.SetScale$quorum_number$quorum_number(newX, newY);
}
SetInterfaceScale$quorum_number(scale) {
     return this.Libraries_Interface_Controls_Control__.SetInterfaceScale$quorum_number(scale);
}
SetFocusFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetFocusFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
HasTopBorder() {
     return this.Libraries_Interface_Controls_Control__.HasTopBorder();
}
SetBottomRightRounding$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetBottomRightRounding$quorum_number(value);
}
ShouldCollide$quorum_Libraries_Interface_Item2D(otherItem) {
     return this.Libraries_Interface_Item2D__.ShouldCollide$quorum_Libraries_Interface_Item2D(otherItem);
}
SetNumberProperty$quorum_text$quorum_number(property, value) {
     return this.Libraries_Interface_Controls_Control__.SetNumberProperty$quorum_text$quorum_number(property, value);
}
SetFocusBorderColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetFocusBorderColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
SetAngularVelocity$quorum_number(angularVelocity) {
     return this.Libraries_Interface_Item2D__.SetAngularVelocity$quorum_number(angularVelocity);
}
ApplyAngularImpulse$quorum_number(impulse) {
     return this.Libraries_Interface_Item2D__.ApplyAngularImpulse$quorum_number(impulse);
}
SetSize$quorum_number$quorum_number(newWidth, newHeight) {
     return this.Libraries_Interface_Item2D__.SetSize$quorum_number$quorum_number(newWidth, newHeight);
}
SetContainerGridHeight$quorum_integer(containerGridHeight) {
     return this.Libraries_Interface_Controls_Control__.SetContainerGridHeight$quorum_integer(containerGridHeight);
}
SetUpdateTransform$quorum_boolean(flag) {
     return this.Libraries_Interface_Item2D__.SetUpdateTransform$quorum_boolean(flag);
}
Draw$quorum_Libraries_Game_Graphics_Painter2D(painter) {
     return this.Libraries_Interface_Item2D__.Draw$quorum_Libraries_Game_Graphics_Painter2D(painter);
}
Dispose() {
     return this.Libraries_Interface_Item__.Dispose();
}
GetItemCount() {
     return this.Libraries_Interface_Item2D__.GetItemCount();
}
RemoveMouseMovementListener$quorum_Libraries_Interface_Events_MouseMovementListener(listener) {
     return this.Libraries_Interface_Item__.RemoveMouseMovementListener$quorum_Libraries_Interface_Events_MouseMovementListener(listener);
}
GetIcon() {
     return this.Libraries_Interface_Controls_Control__.GetIcon();
}
SetDescription$quorum_text(newDescription) {
     return this.Libraries_Interface_Item__.SetDescription$quorum_text(newDescription);
}
GetGridX() {
     return this.Libraries_Interface_Controls_Control__.GetGridX();
}
GetGridY() {
     return this.Libraries_Interface_Controls_Control__.GetGridY();
}
GetColorProperty$quorum_text(property) {
     return this.Libraries_Interface_Controls_Control__.GetColorProperty$quorum_text(property);
}
GetBackgroundColor() {
     return this.Libraries_Interface_Controls_Control__.GetBackgroundColor();
}
GetMouseDownFontColor() {
     return this.Libraries_Interface_Controls_Control__.GetMouseDownFontColor();
}
SetForce$quorum_Libraries_Compute_Vector2(force) {
     return this.Libraries_Interface_Item2D__.SetForce$quorum_Libraries_Compute_Vector2(force);
}
SetBorderThickness$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetBorderThickness$quorum_number(value);
}
CancelBehaviors() {
     return this.Libraries_Interface_Item__.CancelBehaviors();
}
SetDensity$quorum_number(density) {
     return this.Libraries_Interface_Item2D__.SetDensity$quorum_number(density);
}
GetItem$quorum_integer(index) {
     return this.Libraries_Interface_Item2D__.GetItem$quorum_integer(index);
}
GetLocalVector$quorum_Libraries_Compute_Vector2(worldVector) {
     return this.Libraries_Interface_Item2D__.GetLocalVector$quorum_Libraries_Compute_Vector2(worldVector);
}
GetLayoutProperties() {
     return this.Libraries_Interface_Controls_Control__.GetLayoutProperties();
}
GetInterfaceScale() {
     return this.Libraries_Interface_Controls_Control__.GetInterfaceScale();
}
SetHeight$quorum_number(newHeight) {
     return this.Libraries_Interface_Item2D__.SetHeight$quorum_number(newHeight);
}
IsCustomDrawing() {
     return this.Libraries_Interface_Item2D__.IsCustomDrawing();
}
GetInputGroup() {
     return this.Libraries_Interface_Item__.GetInputGroup();
}
GetMass() {
     return this.Libraries_Interface_Item2D__.GetMass();
}
GetBottomRightPixelRounding() {
     return this.Libraries_Interface_Controls_Control__.GetBottomRightPixelRounding();
}
Compare$quorum_Libraries_Language_Object(object) {
return global_Object_Compare(this.prototype, object);
}
GetPercentageHeight() {
     return this.Libraries_Interface_Controls_Control__.GetPercentageHeight();
}
GetBorderColor() {
     return this.Libraries_Interface_Controls_Control__.GetBorderColor();
}
GetGlobalZ() {
     return this.Libraries_Interface_Item2D__.GetGlobalZ();
}
GetGlobalY() {
     return this.Libraries_Interface_Item2D__.GetGlobalY();
}
RemoveGestureListener$quorum_Libraries_Interface_Events_GestureListener(listener) {
     return this.Libraries_Interface_Item__.RemoveGestureListener$quorum_Libraries_Interface_Events_GestureListener(listener);
}
GetTopPadding() {
     return this.Libraries_Interface_Controls_Control__.GetTopPadding();
}
SetLayoutRows$quorum_number(layoutRows) {
     return this.Libraries_Interface_Controls_Control__.SetLayoutRows$quorum_number(layoutRows);
}
SetPixelWidth$quorum_number(width) {
     return this.Libraries_Interface_Controls_Control__.SetPixelWidth$quorum_number(width);
}
NeedsLayout() {
     return this.Libraries_Interface_Controls_Control__.NeedsLayout();
}
LoadGraphics$quorum_Libraries_Interface_Layouts_LayoutProperties(properties) {
     return this.Libraries_Interface_Controls_Control__.LoadGraphics$quorum_Libraries_Interface_Layouts_LayoutProperties(properties);
}
SetOffset$quorum_number$quorum_number(xAmount, yAmount) {
     return this.Libraries_Interface_Item2D__.SetOffset$quorum_number$quorum_number(xAmount, yAmount);
}
GetAngularVelocity() {
     return this.Libraries_Interface_Item2D__.GetAngularVelocity();
}
GetInertia() {
     return this.Libraries_Interface_Item2D__.GetInertia();
}
SetScaleX$quorum_number(scaleX) {
     return this.Libraries_Interface_Item2D__.SetScaleX$quorum_number(scaleX);
}
GetGridWidth() {
     return this.Libraries_Interface_Controls_Control__.GetGridWidth();
}
GetLabelText() {
     return this.Libraries_Interface_Controls_Control__.GetLabelText();
}
DestroyNodes$quorum_Libraries_Game_Collision_BroadphaseCollision2D(broadphase) {
     return this.Libraries_Interface_Item2D__.DestroyNodes$quorum_Libraries_Game_Collision_BroadphaseCollision2D(broadphase);
}
GetGestureListeners() {
     return this.Libraries_Interface_Item__.GetGestureListeners();
}
SetIconColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetIconColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
GetFocusBorderColor() {
     return this.Libraries_Interface_Controls_Control__.GetFocusBorderColor();
}
GetShadowEdgeFade() {
     return this.Libraries_Interface_Controls_Control__.GetShadowEdgeFade();
}
SetBoundingBox$quorum_number$quorum_number$quorum_number$quorum_number(newX, newY, newWidth, newHeight) {
     return this.Libraries_Interface_Item2D__.SetBoundingBox$quorum_number$quorum_number$quorum_number$quorum_number(newX, newY, newWidth, newHeight);
}
RemoveTouchListener$quorum_Libraries_Interface_Events_TouchListener(listener) {
     return this.Libraries_Interface_Item__.RemoveTouchListener$quorum_Libraries_Interface_Events_TouchListener(listener);
}
SetNextFocus$quorum_Libraries_Interface_Item(next) {
     return this.Libraries_Interface_Item__.SetNextFocus$quorum_Libraries_Interface_Item(next);
}
SetPosition$quorum_number$quorum_number(setX, setY) {
     return this.Libraries_Interface_Item2D__.SetPosition$quorum_number$quorum_number(setX, setY);
}
FlipY() {
     return this.Libraries_Interface_Item2D__.FlipY();
}
GetChildAsItem$quorum_integer(index) {
     return this.Libraries_Interface_Item2D__.GetChildAsItem$quorum_integer(index);
}
SetCenterY$quorum_number(setY) {
     return this.Libraries_Interface_Item2D__.SetCenterY$quorum_number(setY);
}
ReleasedMouse() {
     return this.Libraries_Interface_Controls_Control__.ReleasedMouse();
}
FlipX() {
     return this.Libraries_Interface_Item2D__.FlipX();
}
SetBottomRightPixelRounding$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetBottomRightPixelRounding$quorum_number(value);
}
GetCollisionGroupIndex() {
     return this.Libraries_Interface_Item2D__.GetCollisionGroupIndex();
}
SetRestitution$quorum_number(restitution) {
     return this.Libraries_Interface_Item2D__.SetRestitution$quorum_number(restitution);
}
EmptyChildren() {
     return this.Libraries_Interface_Item__.EmptyChildren();
}
GetSelectionFontColor() {
     return this.Libraries_Interface_Controls_Control__.GetSelectionFontColor();
}
UpdateAll$quorum_number(seconds) {
     return this.Libraries_Interface_Controls_Control__.UpdateAll$quorum_number(seconds);
}
Move$quorum_Libraries_Compute_Vector2(movement) {
     return this.Libraries_Interface_Item2D__.Move$quorum_Libraries_Compute_Vector2(movement);
}
GetSleepTime() {
     return this.Libraries_Interface_Item2D__.GetSleepTime();
}
GetTouchListeners() {
     return this.Libraries_Interface_Item__.GetTouchListeners();
}
SetGridSize$quorum_integer$quorum_integer(gridWidth, gridHeight) {
     return this.Libraries_Interface_Controls_Control__.SetGridSize$quorum_integer$quorum_integer(gridWidth, gridHeight);
}
GetX() {
     return this.Libraries_Interface_Item2D__.GetX();
}
GetY() {
     return this.Libraries_Interface_Item2D__.GetY();
}
GetTopMargin() {
     return this.Libraries_Interface_Controls_Control__.GetTopMargin();
}
GetZ() {
     return this.Libraries_Interface_Item2D__.GetZ();
}
SetCustomDrawing$quorum_boolean(isCustom) {
     return this.Libraries_Interface_Item2D__.SetCustomDrawing$quorum_boolean(isCustom);
}
EnablePhysics$quorum_boolean(flag) {
     return this.Libraries_Interface_Item2D__.EnablePhysics$quorum_boolean(flag);
}
SetLeftMargin$quorum_number(padding) {
     return this.Libraries_Interface_Controls_Control__.SetLeftMargin$quorum_number(padding);
}
SynchronizeTransform() {
     return this.Libraries_Interface_Item2D__.SynchronizeTransform();
}
SetIcon$quorum_Libraries_Game_Graphics_TextureRegion(icon) {
     return this.Libraries_Interface_Controls_Control__.SetIcon$quorum_Libraries_Game_Graphics_TextureRegion(icon);
}
IsNonResponsive() {
     return this.Libraries_Interface_Item2D__.IsNonResponsive();
}
SetShadowEdgeFade$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetShadowEdgeFade$quorum_number(value);
}
CanRotate$quorum_boolean(flag) {
     return this.Libraries_Interface_Item2D__.CanRotate$quorum_boolean(flag);
}
HasShadowEdgeFade() {
     return this.Libraries_Interface_Controls_Control__.HasShadowEdgeFade();
}
SetTopLeftPixelRounding$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetTopLeftPixelRounding$quorum_number(value);
}
GetShape() {
     return this.Libraries_Interface_Item2D__.GetShape();
}
SetPercentageHeight$quorum_number(height) {
     return this.Libraries_Interface_Controls_Control__.SetPercentageHeight$quorum_number(height);
}
Hide() {
     return this.Libraries_Interface_Item__.Hide();
}
SetTopLeftRounding$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetTopLeftRounding$quorum_number(value);
}
GetCenterY() {
     return this.Libraries_Interface_Item2D__.GetCenterY();
}
SetVerticalLayoutMode$quorum_integer(mode) {
     return this.Libraries_Interface_Controls_Control__.SetVerticalLayoutMode$quorum_integer(mode);
}
Rotate$quorum_number(degrees) {
     return this.Libraries_Interface_Item2D__.Rotate$quorum_number(degrees);
}
GetCenterX() {
     return this.Libraries_Interface_Item2D__.GetCenterX();
}
ComputeDistance$quorum_Libraries_Compute_Vector2$quorum_integer$quorum_Libraries_Compute_Vector2(point, childIndex, normalOut) {
     return this.Libraries_Interface_Item2D__.ComputeDistance$quorum_Libraries_Compute_Vector2$quorum_integer$quorum_Libraries_Compute_Vector2(point, childIndex, normalOut);
}
GetAccessibilityType() {
     return this.Libraries_Interface_Item__.GetAccessibilityType();
}
Update$quorum_number(secondsSinceUpdate) {
     return this.Libraries_Interface_Item__.Update$quorum_number(secondsSinceUpdate);
}
GetCollisionGroupFlag() {
     return this.Libraries_Interface_Item2D__.GetCollisionGroupFlag();
}
GetSelectionBorderThickness() {
     return this.Libraries_Interface_Controls_Control__.GetSelectionBorderThickness();
}
IsRenderingMouseOver() {
     return this.Libraries_Interface_Controls_Control__.IsRenderingMouseOver();
}
SetShadowWidth$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetShadowWidth$quorum_number(value);
}
SetCenter$quorum_number$quorum_number(setX, setY) {
     return this.Libraries_Interface_Item2D__.SetCenter$quorum_number$quorum_number(setX, setY);
}
SetShape$quorum_Libraries_Game_Collision_Shapes_CollisionShape2D(shape) {
     return this.Libraries_Interface_Item2D__.SetShape$quorum_Libraries_Game_Collision_Shapes_CollisionShape2D(shape);
}
SetFocusable$quorum_boolean(focus) {
     return this.Libraries_Interface_Item__.SetFocusable$quorum_boolean(focus);
}
GetDrawableShape() {
     return this.Libraries_Interface_Item2D__.GetDrawableShape();
}
SetSelectionBorderColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetSelectionBorderColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
SetInputGroup$quorum_text(group) {
     return this.Libraries_Interface_Item__.SetInputGroup$quorum_text(group);
}
IsRenderingMouseDown() {
     return this.Libraries_Interface_Controls_Control__.IsRenderingMouseDown();
}
GetPercentageOriginX() {
     return this.Libraries_Interface_Controls_Control__.GetPercentageOriginX();
}
GetPercentageOriginY() {
     return this.Libraries_Interface_Controls_Control__.GetPercentageOriginY();
}
ProcessTouchEvent$quorum_Libraries_Interface_Events_TouchEvent(event) {
     return this.Libraries_Interface_Item2D__.ProcessTouchEvent$quorum_Libraries_Interface_Events_TouchEvent(event);
}
SetForegroundColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetForegroundColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
TestPoint$quorum_Libraries_Compute_Vector2(point) {
     return this.Libraries_Interface_Item2D__.TestPoint$quorum_Libraries_Compute_Vector2(point);
}
GetNodes() {
     return this.Libraries_Interface_Item2D__.GetNodes();
}
GetForce() {
     return this.Libraries_Interface_Item2D__.GetForce();
}
GetChildren() {
     return this.Libraries_Interface_Item2D__.GetChildren();
}
SetCollisionGroupFlag$quorum_boolean(flag) {
     return this.Libraries_Interface_Item2D__.SetCollisionGroupFlag$quorum_boolean(flag);
}
GetForegroundColor() {
     return this.Libraries_Interface_Controls_Control__.GetForegroundColor();
}
GetNextFocus() {
     return this.Libraries_Interface_Item__.GetNextFocus();
}
GetMouseOverGlowColor() {
     return this.Libraries_Interface_Controls_Control__.GetMouseOverGlowColor();
}
ApplyTorque$quorum_number(torque) {
     return this.Libraries_Interface_Item2D__.ApplyTorque$quorum_number(torque);
}
CollideWithChildren() {
     return this.Libraries_Interface_Item2D__.CollideWithChildren();
}
Empty() {
     return this.Libraries_Interface_Item2D__.Empty();
}
GetScreenX() {
     return this.Libraries_Interface_Item2D__.GetScreenX();
}
Add$quorum_integer$quorum_Libraries_Interface_Item2D(index, newItem) {
     return this.Libraries_Interface_Controls_Control__.Add$quorum_integer$quorum_Libraries_Interface_Item2D(index, newItem);
}
GetScreenY() {
     return this.Libraries_Interface_Item2D__.GetScreenY();
}
SetShadowColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetShadowColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
GetWorldCenter() {
     return this.Libraries_Interface_Item2D__.GetWorldCenter();
}
ProcessGestureEvent$quorum_Libraries_Interface_Events_GestureEvent(event) {
     return this.Libraries_Interface_Item2D__.ProcessGestureEvent$quorum_Libraries_Interface_Events_GestureEvent(event);
}
HasSelectionBorderThickness() {
     return this.Libraries_Interface_Controls_Control__.HasSelectionBorderThickness();
}
GetFontOutlineColor() {
     return this.Libraries_Interface_Controls_Control__.GetFontOutlineColor();
}
AddMouseListener$quorum_Libraries_Interface_Events_MouseListener(listener) {
     return this.Libraries_Interface_Item__.AddMouseListener$quorum_Libraries_Interface_Events_MouseListener(listener);
}
GetBottomPadding() {
     return this.Libraries_Interface_Controls_Control__.GetBottomPadding();
}
GetClipCoordinates$quorum_Libraries_Compute_Vector2$quorum_Libraries_Compute_Vector2(xCoords, yCoords) {
     return this.Libraries_Interface_Item2D__.GetClipCoordinates$quorum_Libraries_Compute_Vector2$quorum_Libraries_Compute_Vector2(xCoords, yCoords);
}
Show() {
     return this.Libraries_Interface_Item__.Show();
}
GetFont() {
     return this.Libraries_Interface_Controls_Control__.GetFont();
}
EndMouseOver() {
     return this.Libraries_Interface_Controls_Control__.EndMouseOver();
}
SetOffsetX$quorum_number(xAmount) {
     return this.Libraries_Interface_Item2D__.SetOffsetX$quorum_number(xAmount);
}
SetPixelX$quorum_number(x) {
     return this.Libraries_Interface_Controls_Control__.SetPixelX$quorum_number(x);
}
SetFontOutlineThickness$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetFontOutlineThickness$quorum_number(value);
}
GetSweep() {
     return this.Libraries_Interface_Item2D__.GetSweep();
}
GetNodeCount() {
     return this.Libraries_Interface_Item2D__.GetNodeCount();
}
ApplyLinearImpulse$quorum_Libraries_Compute_Vector2$quorum_Libraries_Compute_Vector2(impulse, point) {
     return this.Libraries_Interface_Item2D__.ApplyLinearImpulse$quorum_Libraries_Compute_Vector2$quorum_Libraries_Compute_Vector2(impulse, point);
}
Activate() {
     return this.Libraries_Interface_Controls_Control__.Activate();
}
SetLabelText$quorum_text(labelText) {
     return this.Libraries_Interface_Controls_Control__.SetLabelText$quorum_text(labelText);
}
GetIconColor() {
     return this.Libraries_Interface_Controls_Control__.GetIconColor();
}
GetTopRightRounding() {
     return this.Libraries_Interface_Controls_Control__.GetTopRightRounding();
}
IsAcceptingMouseInput() {
     return this.Libraries_Interface_Item__.IsAcceptingMouseInput();
}
GetPropertiesSize() {
     return this.Libraries_Interface_Item__.GetPropertiesSize();
}
SetBottomPadding$quorum_number(padding) {
     return this.Libraries_Interface_Controls_Control__.SetBottomPadding$quorum_number(padding);
}
HasNumberPropertyOverride$quorum_text(property) {
     return this.Libraries_Interface_Controls_Control__.HasNumberPropertyOverride$quorum_text(property);
}
GetContainerGridHeight() {
     return this.Libraries_Interface_Controls_Control__.GetContainerGridHeight();
}
SetOriginCenter() {
     return this.Libraries_Interface_Item2D__.SetOriginCenter();
}
EmptyAll() {
     return this.Libraries_Interface_Item__.EmptyAll();
}
RequestHierarchyUpdate$quorum_Libraries_Interface_Item2D(item) {
     return this.Libraries_Interface_Item2D__.RequestHierarchyUpdate$quorum_Libraries_Interface_Item2D(item);
}
ScaleFromCenter$quorum_number(amount) {
     return this.Libraries_Interface_Item2D__.ScaleFromCenter$quorum_number(amount);
}
NotifyControlActivationListeners$quorum_Libraries_Interface_Events_ControlActivationEvent(event) {
     return this.Libraries_Interface_Controls_Control__.NotifyControlActivationListeners$quorum_Libraries_Interface_Events_ControlActivationEvent(event);
}
IsAccessibleParent() {
     return this.Libraries_Interface_Item__.IsAccessibleParent();
}
GetFontOutlineThickness() {
     return this.Libraries_Interface_Controls_Control__.GetFontOutlineThickness();
}
GetParent() {
     return this.Libraries_Interface_Item2D__.GetParent();
}
SetAcceptsMouseInput$quorum_boolean(accepts) {
     return this.Libraries_Interface_Item__.SetAcceptsMouseInput$quorum_boolean(accepts);
}
GetMouseListeners() {
     return this.Libraries_Interface_Item__.GetMouseListeners();
}
ScaleFromCenter$quorum_number$quorum_number(xAmount, yAmount) {
     return this.Libraries_Interface_Item2D__.ScaleFromCenter$quorum_number$quorum_number(xAmount, yAmount);
}
IsResponsive() {
     return this.Libraries_Interface_Item2D__.IsResponsive();
}
Remove$quorum_integer(index) {
     return this.Libraries_Interface_Controls_Control__.Remove$quorum_integer(index);
}
SetToMediumFont() {
     return this.Libraries_Interface_Controls_Control__.SetToMediumFont();
}
SetUnfocusedSelectionBorderColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetUnfocusedSelectionBorderColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
SetJointList$quorum_Libraries_Game_Physics_Joints_JointEdge2D(edge) {
     return this.Libraries_Interface_Item2D__.SetJointList$quorum_Libraries_Game_Physics_Joints_JointEdge2D(edge);
}
GetRawInertia() {
     return this.Libraries_Interface_Item2D__.GetRawInertia();
}
DisposeChildren() {
     return this.Libraries_Interface_Item__.DisposeChildren();
}
DisposeAll() {
     return this.Libraries_Interface_Item__.DisposeAll();
}
GetOriginY() {
     return this.Libraries_Interface_Item2D__.GetOriginY();
}
GetOriginX() {
     return this.Libraries_Interface_Item2D__.GetOriginX();
}
IsUnmovable() {
     return this.Libraries_Interface_Item2D__.IsUnmovable();
}
MoveZ$quorum_number(zAmount) {
     return this.Libraries_Interface_Item2D__.MoveZ$quorum_number(zAmount);
}
SetMouseDownColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetMouseDownColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
SetUnmovable() {
     return this.Libraries_Interface_Item2D__.SetUnmovable();
}
SetUnfocusedSelectionColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetUnfocusedSelectionColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
GetResponsiveness() {
     return this.Libraries_Interface_Item2D__.GetResponsiveness();
}
IsFocused() {
     return this.Libraries_Interface_Item__.IsFocused();
}
SetToDefaultFontSize() {
     return this.Libraries_Interface_Controls_Control__.SetToDefaultFontSize();
}
GetGlowColor() {
     return this.Libraries_Interface_Controls_Control__.GetGlowColor();
}
SetScaleY$quorum_number(scaleY) {
     return this.Libraries_Interface_Item2D__.SetScaleY$quorum_number(scaleY);
}
GetMouseWheelListeners() {
     return this.Libraries_Interface_Item__.GetMouseWheelListeners();
}
GetInputTable() {
     return this.Libraries_Interface_Item__.GetInputTable();
}
SetBorderColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetBorderColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
SetCollideWithChildren$quorum_boolean(flag) {
     return this.Libraries_Interface_Item2D__.SetCollideWithChildren$quorum_boolean(flag);
}
SetSleepTime$quorum_number(time) {
     return this.Libraries_Interface_Item2D__.SetSleepTime$quorum_number(time);
}
SetFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
IsClipping() {
     return this.Libraries_Interface_Item2D__.IsClipping();
}
GetWorldPoint$quorum_Libraries_Compute_Vector2(localPoint) {
     return this.Libraries_Interface_Item2D__.GetWorldPoint$quorum_Libraries_Compute_Vector2(localPoint);
}
GetLinearVelocityFromWorldPoint$quorum_Libraries_Compute_Vector2(worldPoint) {
     return this.Libraries_Interface_Item2D__.GetLinearVelocityFromWorldPoint$quorum_Libraries_Compute_Vector2(worldPoint);
}
GetAccessibilityCode() {
     return this.Libraries_Interface_Item__.GetAccessibilityCode();
}
Add$quorum_Libraries_Interface_Item2D(newItem) {
     return this.Libraries_Interface_Controls_Control__.Add$quorum_Libraries_Interface_Item2D(newItem);
}
SetLinearVelocity$quorum_Libraries_Compute_Vector2(linearVelocity) {
     return this.Libraries_Interface_Item2D__.SetLinearVelocity$quorum_Libraries_Compute_Vector2(linearVelocity);
}
SetRightPadding$quorum_number(padding) {
     return this.Libraries_Interface_Controls_Control__.SetRightPadding$quorum_number(padding);
}
Move$quorum_number$quorum_number(xAmount, yAmount) {
     return this.Libraries_Interface_Item2D__.Move$quorum_number$quorum_number(xAmount, yAmount);
}
Scale$quorum_number(amount) {
     return this.Libraries_Interface_Item2D__.Scale$quorum_number(amount);
}
AddBehavior$quorum_Libraries_Interface_Behaviors_Behavior(behavior) {
     return this.Libraries_Interface_Item__.AddBehavior$quorum_Libraries_Interface_Behaviors_Behavior(behavior);
}
SetBottomLeftPixelRounding$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetBottomLeftPixelRounding$quorum_number(value);
}
SetContainerGridWidth$quorum_integer(containerGridWidth) {
     return this.Libraries_Interface_Controls_Control__.SetContainerGridWidth$quorum_integer(containerGridWidth);
}
GetTopLeftRounding() {
     return this.Libraries_Interface_Controls_Control__.GetTopLeftRounding();
}
SetShadowHeight$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetShadowHeight$quorum_number(value);
}
SetPercentageWidth$quorum_number(width) {
     return this.Libraries_Interface_Controls_Control__.SetPercentageWidth$quorum_number(width);
}
GetGlobalX() {
     return this.Libraries_Interface_Item2D__.GetGlobalX();
}
MoveY$quorum_number(yAmount) {
     return this.Libraries_Interface_Item2D__.MoveY$quorum_number(yAmount);
}
SetCenterX$quorum_number(setX) {
     return this.Libraries_Interface_Item2D__.SetCenterX$quorum_number(setX);
}
SetMouseOverColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetMouseOverColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
GetPixelX() {
     return this.Libraries_Interface_Controls_Control__.GetPixelX();
}
GetPixelY() {
     return this.Libraries_Interface_Controls_Control__.GetPixelY();
}
SetX$quorum_number(setX) {
     return this.Libraries_Interface_Item2D__.SetX$quorum_number(setX);
}
SetToHugeFont() {
     return this.Libraries_Interface_Controls_Control__.SetToHugeFont();
}
SetAccessibilityRoleDescription$quorum_text(newRoleDescription) {
     return this.Libraries_Interface_Item__.SetAccessibilityRoleDescription$quorum_text(newRoleDescription);
}
AreChildrenProcessingMouseEvents() {
     return this.Libraries_Interface_Item2D__.AreChildrenProcessingMouseEvents();
}
CopyAndActivateInputTable$quorum_text(name) {
     return this.Libraries_Interface_Controls_Control__.CopyAndActivateInputTable$quorum_text(name);
}
SetPosition$quorum_number$quorum_number$quorum_number(setX, setY, setZ) {
     return this.Libraries_Interface_Item2D__.SetPosition$quorum_number$quorum_number$quorum_number(setX, setY, setZ);
}
GetTorque() {
     return this.Libraries_Interface_Item2D__.GetTorque();
}
GetFontSize() {
     return this.Libraries_Interface_Controls_Control__.GetFontSize();
}
IsFastMoving() {
     return this.Libraries_Interface_Item2D__.IsFastMoving();
}
SetPercentageOriginX$quorum_number(x) {
     return this.Libraries_Interface_Controls_Control__.SetPercentageOriginX$quorum_number(x);
}
SetPixelHeight$quorum_number(height) {
     return this.Libraries_Interface_Controls_Control__.SetPixelHeight$quorum_number(height);
}
GetLayout() {
     return this.Libraries_Interface_Controls_Control__.GetLayout();
}
GetFocusColor() {
     return this.Libraries_Interface_Controls_Control__.GetFocusColor();
}
GetVerticalLayoutMode() {
     return this.Libraries_Interface_Controls_Control__.GetVerticalLayoutMode();
}
SetToTinyFont() {
     return this.Libraries_Interface_Controls_Control__.SetToTinyFont();
}
SetPreviousFocus$quorum_Libraries_Interface_Item(previous) {
     return this.Libraries_Interface_Item__.SetPreviousFocus$quorum_Libraries_Interface_Item(previous);
}
BeginCollision$quorum_Libraries_Interface_Item(item) {
     return this.Libraries_Interface_Item__.BeginCollision$quorum_Libraries_Interface_Item(item);
}
GetSelectionColor() {
     return this.Libraries_Interface_Controls_Control__.GetSelectionColor();
}
Scale$quorum_number$quorum_number(xAmount, yAmount) {
     return this.Libraries_Interface_Item2D__.Scale$quorum_number$quorum_number(xAmount, yAmount);
}
Remove$quorum_Libraries_Interface_Item2D(item) {
     return this.Libraries_Interface_Controls_Control__.Remove$quorum_Libraries_Interface_Item2D(item);
}
GetPopupMenu() {
     return this.Libraries_Interface_Controls_Control__.GetPopupMenu();
}
SetZ$quorum_number(setZ) {
     return this.Libraries_Interface_Item2D__.SetZ$quorum_number(setZ);
}
SetColorProperty$quorum_text$quorum_Libraries_Game_Graphics_ColorGroup(property, value) {
     return this.Libraries_Interface_Controls_Control__.SetColorProperty$quorum_text$quorum_Libraries_Game_Graphics_ColorGroup(property, value);
}
SetSelectionColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetSelectionColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
SetPercentageY$quorum_number(y) {
     return this.Libraries_Interface_Controls_Control__.SetPercentageY$quorum_number(y);
}
SetResponsiveness$quorum_integer(type) {
     return this.Libraries_Interface_Item2D__.SetResponsiveness$quorum_integer(type);
}
SetTarget$quorum_Libraries_Interface_Controls_Control(target) {
this.target = target;
};
GetTarget() {
return this.Get_WebEditor_EditorItem__target_();
};
FocusTarget() {
this.Get_WebEditor_EditorItem__target_().Focus();
};
Get_WebEditor_EditorItem__target_() {
   return this.target;
};
Set_WebEditor_EditorItem__target_(value) {
   this.target = value;
};
Get_Libraries_Interface_Item__manager_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__manager_();
};
Set_Libraries_Interface_Item__manager_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__manager_(value);
};
Get_Libraries_Interface_Item__visible_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__visible_();
};
Set_Libraries_Interface_Item__visible_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__visible_(value);
};
Get_Libraries_Interface_Item__RADIO_BUTTON_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__RADIO_BUTTON_();
};
Set_Libraries_Interface_Item__RADIO_BUTTON_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__RADIO_BUTTON_(value);
};
Get_Libraries_Interface_Item__accessibilityRoleDescription_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__accessibilityRoleDescription_();
};
Set_Libraries_Interface_Item__accessibilityRoleDescription_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__accessibilityRoleDescription_(value);
};
Get_Libraries_Interface_Item__BUTTON_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__BUTTON_();
};
Set_Libraries_Interface_Item__BUTTON_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__BUTTON_(value);
};
Get_Libraries_Interface_Item__TOGGLE_BUTTON_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TOGGLE_BUTTON_();
};
Set_Libraries_Interface_Item__TOGGLE_BUTTON_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TOGGLE_BUTTON_(value);
};
Get_Libraries_Interface_Item__TABLE_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TABLE_();
};
Set_Libraries_Interface_Item__TABLE_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TABLE_(value);
};
Get_Libraries_Interface_Item__CELL_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__CELL_();
};
Set_Libraries_Interface_Item__CELL_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__CELL_(value);
};
Get_Libraries_Interface_Item__CHART_SECTION_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__CHART_SECTION_();
};
Set_Libraries_Interface_Item__CHART_SECTION_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__CHART_SECTION_(value);
};
Get_Libraries_Interface_Item__nextFocus_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__nextFocus_();
};
Set_Libraries_Interface_Item__nextFocus_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__nextFocus_(value);
};
Get_Libraries_Interface_Item__description_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__description_();
};
Set_Libraries_Interface_Item__description_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__description_(value);
};
Get_Libraries_Interface_Item__behaviors_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__behaviors_();
};
Set_Libraries_Interface_Item__behaviors_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__behaviors_(value);
};
Get_Libraries_Interface_Item__LIST_ITEM_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__LIST_ITEM_();
};
Set_Libraries_Interface_Item__LIST_ITEM_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__LIST_ITEM_(value);
};
Get_Libraries_Interface_Item__PANE_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__PANE_();
};
Set_Libraries_Interface_Item__PANE_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__PANE_(value);
};
Get_Libraries_Interface_Item__mouseWheelListeners_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__mouseWheelListeners_();
};
Set_Libraries_Interface_Item__mouseWheelListeners_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__mouseWheelListeners_(value);
};
Get_Libraries_Interface_Item__TREE_TABLE_CELL_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TREE_TABLE_CELL_();
};
Set_Libraries_Interface_Item__TREE_TABLE_CELL_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TREE_TABLE_CELL_(value);
};
Get_Libraries_Interface_Item__MENU_BAR_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__MENU_BAR_();
};
Set_Libraries_Interface_Item__MENU_BAR_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__MENU_BAR_(value);
};
Get_Libraries_Interface_Item__TREE_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TREE_();
};
Set_Libraries_Interface_Item__TREE_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TREE_(value);
};
Get_Libraries_Interface_Item__CUSTOM_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__CUSTOM_();
};
Set_Libraries_Interface_Item__CUSTOM_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__CUSTOM_(value);
};
Get_Libraries_Interface_Item__TAB_PANE_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TAB_PANE_();
};
Set_Libraries_Interface_Item__TAB_PANE_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TAB_PANE_(value);
};
Get_Libraries_Interface_Item__properties_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__properties_();
};
Set_Libraries_Interface_Item__properties_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__properties_(value);
};
Get_Libraries_Interface_Item__DIALOG_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__DIALOG_();
};
Set_Libraries_Interface_Item__DIALOG_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__DIALOG_(value);
};
Get_Libraries_Interface_Item__MENU_ITEM_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__MENU_ITEM_();
};
Set_Libraries_Interface_Item__MENU_ITEM_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__MENU_ITEM_(value);
};
Get_Libraries_Interface_Item__mouseMoveListeners_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__mouseMoveListeners_();
};
Set_Libraries_Interface_Item__mouseMoveListeners_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__mouseMoveListeners_(value);
};
Get_Libraries_Interface_Item__TEXTBOX_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TEXTBOX_();
};
Set_Libraries_Interface_Item__TEXTBOX_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TEXTBOX_(value);
};
Get_Libraries_Interface_Item__PROGRESS_BAR_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__PROGRESS_BAR_();
};
Set_Libraries_Interface_Item__PROGRESS_BAR_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__PROGRESS_BAR_(value);
};
Get_Libraries_Interface_Item__accessibilityCode_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__accessibilityCode_();
};
Set_Libraries_Interface_Item__accessibilityCode_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__accessibilityCode_(value);
};
Get_Libraries_Interface_Item__ITEM_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__ITEM_();
};
Set_Libraries_Interface_Item__ITEM_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__ITEM_(value);
};
Get_Libraries_Interface_Item__TEXT_FIELD_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TEXT_FIELD_();
};
Set_Libraries_Interface_Item__TEXT_FIELD_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TEXT_FIELD_(value);
};
Get_Libraries_Interface_Item__TREE_ITEM_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TREE_ITEM_();
};
Set_Libraries_Interface_Item__TREE_ITEM_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TREE_ITEM_(value);
};
Get_Libraries_Interface_Item__touchListeners_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__touchListeners_();
};
Set_Libraries_Interface_Item__touchListeners_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__touchListeners_(value);
};
Get_Libraries_Interface_Item__CHECKBOX_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__CHECKBOX_();
};
Set_Libraries_Interface_Item__CHECKBOX_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__CHECKBOX_(value);
};
Get_Libraries_Interface_Item__TAB_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TAB_();
};
Set_Libraries_Interface_Item__TAB_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TAB_(value);
};
Get_Libraries_Interface_Item__acceptsMouseInput_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__acceptsMouseInput_();
};
Set_Libraries_Interface_Item__acceptsMouseInput_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__acceptsMouseInput_(value);
};
Get_Libraries_Interface_Item__name_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__name_();
};
Set_Libraries_Interface_Item__name_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__name_(value);
};
Get_Libraries_Interface_Item__LIST_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__LIST_();
};
Set_Libraries_Interface_Item__LIST_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__LIST_(value);
};
Get_Libraries_Interface_Item__mouseListeners_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__mouseListeners_();
};
Set_Libraries_Interface_Item__mouseListeners_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__mouseListeners_(value);
};
Get_Libraries_Interface_Item__focusable_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__focusable_();
};
Set_Libraries_Interface_Item__focusable_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__focusable_(value);
};
Get_Libraries_Interface_Item__GROUP_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__GROUP_();
};
Set_Libraries_Interface_Item__GROUP_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__GROUP_(value);
};
Get_Libraries_Interface_Item__gestureListeners_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__gestureListeners_();
};
Set_Libraries_Interface_Item__gestureListeners_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__gestureListeners_(value);
};
Get_Libraries_Interface_Item__NOT_ACCESSIBLE_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__NOT_ACCESSIBLE_();
};
Set_Libraries_Interface_Item__NOT_ACCESSIBLE_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__NOT_ACCESSIBLE_(value);
};
Get_Libraries_Interface_Item__LABEL_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__LABEL_();
};
Set_Libraries_Interface_Item__LABEL_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__LABEL_(value);
};
Get_Libraries_Interface_Item__inputGroup_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__inputGroup_();
};
Set_Libraries_Interface_Item__inputGroup_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__inputGroup_(value);
};
Get_Libraries_Interface_Item__TOOLBAR_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TOOLBAR_();
};
Set_Libraries_Interface_Item__TOOLBAR_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TOOLBAR_(value);
};
Get_Libraries_Interface_Item__TREE_TABLE_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TREE_TABLE_();
};
Set_Libraries_Interface_Item__TREE_TABLE_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TREE_TABLE_(value);
};
Get_Libraries_Interface_Item__previousFocus_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__previousFocus_();
};
Set_Libraries_Interface_Item__previousFocus_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__previousFocus_(value);
};
Get_Libraries_Interface_Item__CHART_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__CHART_();
};
Set_Libraries_Interface_Item__CHART_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__CHART_(value);
};
Get_Libraries_Interface_Item__CHART_ITEM_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__CHART_ITEM_();
};
Set_Libraries_Interface_Item__CHART_ITEM_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__CHART_ITEM_(value);
};
Get_Libraries_Interface_Item__POPUP_MENU_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__POPUP_MENU_();
};
Set_Libraries_Interface_Item__POPUP_MENU_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__POPUP_MENU_(value);
};
Get_Libraries_Interface_Item__focusListeners_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__focusListeners_();
};
Set_Libraries_Interface_Item__focusListeners_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__focusListeners_(value);
};
Get_Libraries_Interface_Controls_Control__renderMouseDown_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__renderMouseDown_();
};
Set_Libraries_Interface_Controls_Control__renderMouseDown_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__renderMouseDown_(value);
};
Get_Libraries_Interface_Controls_Control__listeners_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__listeners_();
};
Set_Libraries_Interface_Controls_Control__listeners_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__listeners_(value);
};
Get_Libraries_Interface_Controls_Control__contextMenu_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__contextMenu_();
};
Set_Libraries_Interface_Controls_Control__contextMenu_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__contextMenu_(value);
};
Get_Libraries_Interface_Controls_Control__renderMouseOver_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__renderMouseOver_();
};
Set_Libraries_Interface_Controls_Control__renderMouseOver_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__renderMouseOver_(value);
};
Get_Libraries_Interface_Controls_Control__FILL_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__FILL_();
};
Set_Libraries_Interface_Controls_Control__FILL_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__FILL_(value);
};
Get_Libraries_Interface_Controls_Control__needsLayout_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__needsLayout_();
};
Set_Libraries_Interface_Controls_Control__needsLayout_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__needsLayout_(value);
};
Get_Libraries_Interface_Controls_Control__currentProperties_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__currentProperties_();
};
Set_Libraries_Interface_Controls_Control__currentProperties_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__currentProperties_(value);
};
Get_Libraries_Interface_Controls_Control__defaultProperties_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__defaultProperties_();
};
Set_Libraries_Interface_Controls_Control__defaultProperties_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__defaultProperties_(value);
};
Get_Libraries_Interface_Controls_Control__FIT_FONT_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__FIT_FONT_();
};
Set_Libraries_Interface_Controls_Control__FIT_FONT_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__FIT_FONT_(value);
};
Get_Libraries_Interface_Controls_Control__renderSelected_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__renderSelected_();
};
Set_Libraries_Interface_Controls_Control__renderSelected_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__renderSelected_(value);
};
Get_Libraries_Interface_Controls_Control__FIT_CONTENTS_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__FIT_CONTENTS_();
};
Set_Libraries_Interface_Controls_Control__FIT_CONTENTS_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__FIT_CONTENTS_(value);
};
Get_Libraries_Interface_Controls_Control__layout_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__layout_();
};
Set_Libraries_Interface_Controls_Control__layout_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__layout_(value);
};
Get_Libraries_Interface_Controls_Control__selectionListeners_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__selectionListeners_();
};
Set_Libraries_Interface_Controls_Control__selectionListeners_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__selectionListeners_(value);
};
Get_Libraries_Interface_Controls_Control__STANDARD_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__STANDARD_();
};
Set_Libraries_Interface_Controls_Control__STANDARD_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__STANDARD_(value);
};
Get_Libraries_Interface_Controls_Control__layoutProperties_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__layoutProperties_();
};
Set_Libraries_Interface_Controls_Control__layoutProperties_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__layoutProperties_(value);
};
Get_Libraries_Interface_Controls_Control__MAINTAIN_ASPECT_RATIO_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__MAINTAIN_ASPECT_RATIO_();
};
Set_Libraries_Interface_Controls_Control__MAINTAIN_ASPECT_RATIO_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__MAINTAIN_ASPECT_RATIO_(value);
};
Get_Libraries_Interface_Item2D__position_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__position_();
};
Set_Libraries_Interface_Item2D__position_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__position_(value);
};
Get_Libraries_Interface_Item2D__scale_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__scale_();
};
Set_Libraries_Interface_Item2D__scale_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__scale_(value);
};
Get_Libraries_Interface_Item2D__workVector2B_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__workVector2B_();
};
Set_Libraries_Interface_Item2D__workVector2B_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__workVector2B_(value);
};
Get_Libraries_Interface_Item2D__manager_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__manager_();
};
Set_Libraries_Interface_Item2D__manager_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__manager_(value);
};
Get_Libraries_Interface_Item2D__workVector2A_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__workVector2A_();
};
Set_Libraries_Interface_Item2D__workVector2A_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__workVector2A_(value);
};
Get_Libraries_Interface_Item2D__jointList_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__jointList_();
};
Set_Libraries_Interface_Item2D__jointList_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__jointList_(value);
};
Get_Libraries_Interface_Item2D__updateTransform_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__updateTransform_();
};
Set_Libraries_Interface_Item2D__updateTransform_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__updateTransform_(value);
};
Get_Libraries_Interface_Item2D__children_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__children_();
};
Set_Libraries_Interface_Item2D__children_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__children_(value);
};
Get_Libraries_Interface_Item2D__childrenProcessingMouseEvents_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__childrenProcessingMouseEvents_();
};
Set_Libraries_Interface_Item2D__childrenProcessingMouseEvents_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__childrenProcessingMouseEvents_(value);
};
Get_Libraries_Interface_Item2D__hasMoved_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__hasMoved_();
};
Set_Libraries_Interface_Item2D__hasMoved_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__hasMoved_(value);
};
Get_Libraries_Interface_Item2D__visualView_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__visualView_();
};
Set_Libraries_Interface_Item2D__visualView_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__visualView_(value);
};
Get_Libraries_Interface_Item2D__widthSet_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__widthSet_();
};
Set_Libraries_Interface_Item2D__widthSet_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__widthSet_(value);
};
Get_Libraries_Interface_Item2D__transform_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__transform_();
};
Set_Libraries_Interface_Item2D__transform_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__transform_(value);
};
Get_Libraries_Interface_Item2D__physicsEnabled_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__physicsEnabled_();
};
Set_Libraries_Interface_Item2D__physicsEnabled_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__physicsEnabled_(value);
};
Get_Libraries_Interface_Item2D__layerSet_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__layerSet_();
};
Set_Libraries_Interface_Item2D__layerSet_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__layerSet_(value);
};
Get_Libraries_Interface_Item2D__rotation_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__rotation_();
};
Set_Libraries_Interface_Item2D__rotation_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__rotation_(value);
};
Get_Libraries_Interface_Item2D__dimensions_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__dimensions_();
};
Set_Libraries_Interface_Item2D__dimensions_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__dimensions_(value);
};
Get_Libraries_Interface_Item2D__collideWithChildren_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__collideWithChildren_();
};
Set_Libraries_Interface_Item2D__collideWithChildren_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__collideWithChildren_(value);
};
Get_Libraries_Interface_Item2D__offset_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__offset_();
};
Set_Libraries_Interface_Item2D__offset_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__offset_(value);
};
Get_Libraries_Interface_Item2D__nodeCount_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__nodeCount_();
};
Set_Libraries_Interface_Item2D__nodeCount_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__nodeCount_(value);
};
Get_Libraries_Interface_Item2D__transform0_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__transform0_();
};
Set_Libraries_Interface_Item2D__transform0_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__transform0_(value);
};
Get_Libraries_Interface_Item2D__scaleOffset_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__scaleOffset_();
};
Set_Libraries_Interface_Item2D__scaleOffset_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__scaleOffset_(value);
};
Get_Libraries_Interface_Item2D__nodesSet_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__nodesSet_();
};
Set_Libraries_Interface_Item2D__nodesSet_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__nodesSet_(value);
};
Get_Libraries_Interface_Item2D__workVector3_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__workVector3_();
};
Set_Libraries_Interface_Item2D__workVector3_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__workVector3_(value);
};
Get_Libraries_Interface_Item2D__origin_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__origin_();
};
Set_Libraries_Interface_Item2D__origin_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__origin_(value);
};
Get_Libraries_Interface_Item2D__layer_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__layer_();
};
Set_Libraries_Interface_Item2D__layer_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__layer_(value);
};
Get_Libraries_Interface_Item2D__isCustomDrawing_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__isCustomDrawing_();
};
Set_Libraries_Interface_Item2D__isCustomDrawing_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__isCustomDrawing_(value);
};
Get_Libraries_Interface_Item2D__shape_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__shape_();
};
Set_Libraries_Interface_Item2D__shape_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__shape_(value);
};
Get_Libraries_Interface_Item2D__properties_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__properties_();
};
Set_Libraries_Interface_Item2D__properties_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__properties_(value);
};
Get_Libraries_Interface_Item2D__shouldTriggerSimulation_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__shouldTriggerSimulation_();
};
Set_Libraries_Interface_Item2D__shouldTriggerSimulation_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__shouldTriggerSimulation_(value);
};
Get_Libraries_Interface_Item2D__sweep_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__sweep_();
};
Set_Libraries_Interface_Item2D__sweep_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__sweep_(value);
};
Get_Libraries_Interface_Item2D__isResizing_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__isResizing_();
};
Set_Libraries_Interface_Item2D__isResizing_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__isResizing_(value);
};
Get_Libraries_Interface_Item2D__collidable_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__collidable_();
};
Set_Libraries_Interface_Item2D__collidable_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__collidable_(value);
};
Get_Libraries_Interface_Item2D__bounds_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__bounds_();
};
Set_Libraries_Interface_Item2D__bounds_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__bounds_(value);
};
Get_Libraries_Interface_Item2D__nodes_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__nodes_();
};
Set_Libraries_Interface_Item2D__nodes_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__nodes_(value);
};
Get_Libraries_Interface_Item2D__flipX_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__flipX_();
};
Set_Libraries_Interface_Item2D__flipX_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__flipX_(value);
};
Get_Libraries_Interface_Item2D__synchronizeNodesTempPosition_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__synchronizeNodesTempPosition_();
};
Set_Libraries_Interface_Item2D__synchronizeNodesTempPosition_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__synchronizeNodesTempPosition_(value);
};
Get_Libraries_Interface_Item2D__collisionList_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__collisionList_();
};
Set_Libraries_Interface_Item2D__collisionList_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__collisionList_(value);
};
Get_Libraries_Interface_Item2D__heightSet_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__heightSet_();
};
Set_Libraries_Interface_Item2D__heightSet_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__heightSet_(value);
};
Get_Libraries_Interface_Item2D__PHYSICS_ERROR_MESSAGE_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__PHYSICS_ERROR_MESSAGE_();
};
Set_Libraries_Interface_Item2D__PHYSICS_ERROR_MESSAGE_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__PHYSICS_ERROR_MESSAGE_(value);
};
Get_Libraries_Interface_Item2D__parentItem_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__parentItem_();
};
Set_Libraries_Interface_Item2D__parentItem_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__parentItem_(value);
};
Get_Libraries_Interface_Item2D__clipPixels_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__clipPixels_();
};
Set_Libraries_Interface_Item2D__clipPixels_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__clipPixels_(value);
};
Get_Libraries_Interface_Item2D__z_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__z_();
};
Set_Libraries_Interface_Item2D__z_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__z_(value);
};
Get_Libraries_Interface_Item2D__flipY_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__flipY_();
};
Set_Libraries_Interface_Item2D__flipY_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__flipY_(value);
};

constructor(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Interface.Item', 'Libraries.Interface.Controls.Control', 'Libraries.Interface.Item2D', 'Libraries.Language.Object',  'WebEditor.EditorItem'];
this.Libraries_Interface_Item__ = null;
this.Libraries_Interface_Controls_Control__ = null;
this.Libraries_Interface_Item2D__ = null;
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
}

};


var quorum_WebEditor_WebControlPanel_ = class {
GetShadowColor() {
     return this.Libraries_Interface_Controls_Control__.GetShadowColor();
}
GetTopRightPixelRounding() {
     return this.Libraries_Interface_Controls_Control__.GetTopRightPixelRounding();
}
SetOrigin$quorum_number$quorum_number(setX, setY) {
     return this.Libraries_Interface_Item2D__.SetOrigin$quorum_number$quorum_number(setX, setY);
}
RequireSimulation$quorum_boolean(flag) {
     return this.Libraries_Interface_Item2D__.RequireSimulation$quorum_boolean(flag);
}
HasBottomRightPixelRounding() {
     return this.Libraries_Interface_Controls_Control__.HasBottomRightPixelRounding();
}
BeginMouseOver() {
     return this.Libraries_Interface_Controls_Control__.BeginMouseOver();
}
SetTorque$quorum_number(torque) {
     return this.Libraries_Interface_Item2D__.SetTorque$quorum_number(torque);
}
RemoveMouseWheelListener$quorum_Libraries_Interface_Events_MouseWheelListener(listener) {
     return this.Libraries_Interface_Item__.RemoveMouseWheelListener$quorum_Libraries_Interface_Events_MouseWheelListener(listener);
}
GetLayoutRows() {
     return this.Libraries_Interface_Controls_Control__.GetLayoutRows();
}
SetLayout$quorum_Libraries_Interface_Layouts_Layout(layout) {
     return this.Libraries_Interface_Controls_Control__.SetLayout$quorum_Libraries_Interface_Layouts_Layout(layout);
}
IsRotationAllowed() {
     return this.Libraries_Interface_Item2D__.IsRotationAllowed();
}
SetUnfocusedSelectionFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetUnfocusedSelectionFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
IsSimulated() {
     return this.Libraries_Interface_Item2D__.IsSimulated();
}
SetShadowY$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetShadowY$quorum_number(value);
}
GetJointList() {
     return this.Libraries_Interface_Item2D__.GetJointList();
}
Synchronize$quorum_Libraries_Game_Collision_BroadphaseCollision2D$quorum_Libraries_Game_Collision_PhysicsPosition2D$quorum_Libraries_Game_Collision_PhysicsPosition2D(broadphase, transform1, transform2) {
     return this.Libraries_Interface_Item2D__.Synchronize$quorum_Libraries_Game_Collision_BroadphaseCollision2D$quorum_Libraries_Game_Collision_PhysicsPosition2D$quorum_Libraries_Game_Collision_PhysicsPosition2D(broadphase, transform1, transform2);
}
GetItemAt$quorum_number$quorum_number(x, y) {
     return this.Libraries_Interface_Item2D__.GetItemAt$quorum_number$quorum_number(x, y);
}
SetTopPadding$quorum_number(padding) {
     return this.Libraries_Interface_Controls_Control__.SetTopPadding$quorum_number(padding);
}
ApplyForceToCenter$quorum_Libraries_Compute_Vector2(force) {
     return this.Libraries_Interface_Item2D__.ApplyForceToCenter$quorum_Libraries_Compute_Vector2(force);
}
SetMass$quorum_number(mass) {
     return this.Libraries_Interface_Item2D__.SetMass$quorum_number(mass);
}
SetResponsive() {
     return this.Libraries_Interface_Item2D__.SetResponsive();
}
GetLeftPadding() {
     return this.Libraries_Interface_Controls_Control__.GetLeftPadding();
}
SetPixelY$quorum_number(y) {
     return this.Libraries_Interface_Controls_Control__.SetPixelY$quorum_number(y);
}
HasTopRightPixelRounding() {
     return this.Libraries_Interface_Controls_Control__.HasTopRightPixelRounding();
}
SetPhysicsProperties$quorum_Libraries_Game_Physics_PhysicsProperties2D(properties) {
     return this.Libraries_Interface_Item2D__.SetPhysicsProperties$quorum_Libraries_Game_Physics_PhysicsProperties2D(properties);
}
SetGridHeight$quorum_integer(gridHeight) {
     return this.Libraries_Interface_Controls_Control__.SetGridHeight$quorum_integer(gridHeight);
}
IsSimulationRequired() {
     return this.Libraries_Interface_Item2D__.IsSimulationRequired();
}
GetAccentColor() {
     return this.Libraries_Interface_Controls_Control__.GetAccentColor();
}
HasTopLeftRounding() {
     return this.Libraries_Interface_Controls_Control__.HasTopLeftRounding();
}
SetParent$quorum_Libraries_Interface_Item2D(newItem) {
     return this.Libraries_Interface_Item2D__.SetParent$quorum_Libraries_Interface_Item2D(newItem);
}
GetShadowX() {
     return this.Libraries_Interface_Controls_Control__.GetShadowX();
}
GetShadowY() {
     return this.Libraries_Interface_Controls_Control__.GetShadowY();
}
SelectByFirstLetters$quorum_text(firstLetter) {
     return this.Libraries_Interface_Controls_Control__.SelectByFirstLetters$quorum_text(firstLetter);
}
SetTransform$quorum_Libraries_Compute_Vector2$quorum_number(position, angle) {
     return this.Libraries_Interface_Item2D__.SetTransform$quorum_Libraries_Compute_Vector2$quorum_number(position, angle);
}
GetDefaultFontName() {
     return this.Libraries_Interface_Controls_Control__.GetDefaultFontName();
}
GetRightMargin() {
     return this.Libraries_Interface_Controls_Control__.GetRightMargin();
}
RequestLayout() {
     return this.Libraries_Interface_Controls_Control__.RequestLayout();
}
GetLinearDamping() {
     return this.Libraries_Interface_Item2D__.GetLinearDamping();
}
GetBottomRightRounding() {
     return this.Libraries_Interface_Controls_Control__.GetBottomRightRounding();
}
SetGridX$quorum_integer(gridX) {
     return this.Libraries_Interface_Controls_Control__.SetGridX$quorum_integer(gridX);
}
SetForegroundSelectionColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetForegroundSelectionColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
SetCollisionList$quorum_Libraries_Game_Collision_CollisionEdge2D(edge) {
     return this.Libraries_Interface_Item2D__.SetCollisionList$quorum_Libraries_Game_Collision_CollisionEdge2D(edge);
}
SetScale$quorum_number(scale) {
     return this.Libraries_Interface_Item2D__.SetScale$quorum_number(scale);
}
GetBottomMargin() {
     return this.Libraries_Interface_Controls_Control__.GetBottomMargin();
}
SetToSmallFont() {
     return this.Libraries_Interface_Controls_Control__.SetToSmallFont();
}
ClickedMouse() {
     return this.Libraries_Interface_Controls_Control__.ClickedMouse();
}
GetLinearVelocity() {
     return this.Libraries_Interface_Item2D__.GetLinearVelocity();
}
SetTransform0$quorum_Libraries_Game_Collision_PhysicsPosition2D(transform) {
     return this.Libraries_Interface_Item2D__.SetTransform0$quorum_Libraries_Game_Collision_PhysicsPosition2D(transform);
}
SetLinearVelocityX$quorum_number(linearVelocityX) {
     return this.Libraries_Interface_Item2D__.SetLinearVelocityX$quorum_number(linearVelocityX);
}
QueueForDrawing$quorum_Libraries_Game_Graphics_Painter2D(painter) {
     return this.Libraries_Interface_Item2D__.QueueForDrawing$quorum_Libraries_Game_Graphics_Painter2D(painter);
}
UpdateTransformY() {
     return this.Libraries_Interface_Item2D__.UpdateTransformY();
}
UpdateTransformX() {
     return this.Libraries_Interface_Item2D__.UpdateTransformX();
}
ApplyForce$quorum_Libraries_Compute_Vector2$quorum_Libraries_Compute_Vector2(force, point) {
     return this.Libraries_Interface_Item2D__.ApplyForce$quorum_Libraries_Compute_Vector2$quorum_Libraries_Compute_Vector2(force, point);
}
GetVisibleItemAt$quorum_number$quorum_number(x, y) {
     return this.Libraries_Interface_Item2D__.GetVisibleItemAt$quorum_number$quorum_number(x, y);
}
IsRenderingSelection() {
     return this.Libraries_Interface_Controls_Control__.IsRenderingSelection();
}
IsEmpty() {
     return this.Libraries_Interface_Item2D__.IsEmpty();
}
AddControlActivationListener$quorum_Libraries_Interface_Events_ControlActivationListener(listener) {
     return this.Libraries_Interface_Controls_Control__.AddControlActivationListener$quorum_Libraries_Interface_Events_ControlActivationListener(listener);
}
SetLinearVelocityY$quorum_number(linearVelocityY) {
     return this.Libraries_Interface_Item2D__.SetLinearVelocityY$quorum_number(linearVelocityY);
}
GetShadowHeight() {
     return this.Libraries_Interface_Controls_Control__.GetShadowHeight();
}
IsFlippedY() {
     return this.Libraries_Interface_Item2D__.IsFlippedY();
}
IsFlippedX() {
     return this.Libraries_Interface_Item2D__.IsFlippedX();
}
GetGridHeight() {
     return this.Libraries_Interface_Controls_Control__.GetGridHeight();
}
GetFocusListeners() {
     return this.Libraries_Interface_Item__.GetFocusListeners();
}
AddTouchListener$quorum_Libraries_Interface_Events_TouchListener(listener) {
     return this.Libraries_Interface_Item__.AddTouchListener$quorum_Libraries_Interface_Events_TouchListener(listener);
}
SetMouseDownFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetMouseDownFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
SetTopRightRounding$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetTopRightRounding$quorum_number(value);
}
GetTransform0() {
     return this.Libraries_Interface_Item2D__.GetTransform0();
}
GetInverseInertia() {
     return this.Libraries_Interface_Item2D__.GetInverseInertia();
}
Resize() {
     return this.Libraries_Interface_Item2D__.Resize();
}
GetCurrentLayoutProperties() {
     return this.Libraries_Interface_Controls_Control__.GetCurrentLayoutProperties();
}
FinishCollision$quorum_Libraries_Interface_Item(item) {
     return this.Libraries_Interface_Item__.FinishCollision$quorum_Libraries_Interface_Item(item);
}
AddSelectionListener$quorum_Libraries_Interface_Events_SelectionListener(listener) {
     return this.Libraries_Interface_Controls_Control__.AddSelectionListener$quorum_Libraries_Interface_Events_SelectionListener(listener);
}
RemoveSelectionListener$quorum_Libraries_Interface_Events_SelectionListener(listener) {
     return this.Libraries_Interface_Controls_Control__.RemoveSelectionListener$quorum_Libraries_Interface_Events_SelectionListener(listener);
}
RemoveFocusListener$quorum_Libraries_Interface_Events_FocusListener(listener) {
     return this.Libraries_Interface_Item__.RemoveFocusListener$quorum_Libraries_Interface_Events_FocusListener(listener);
}
SetAccessibilityCode$quorum_integer(newAccessibilityCode) {
     return this.Libraries_Interface_Item__.SetAccessibilityCode$quorum_integer(newAccessibilityCode);
}
HasShadowX() {
     return this.Libraries_Interface_Controls_Control__.HasShadowX();
}
SetBackgroundColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetBackgroundColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
HasShadowY() {
     return this.Libraries_Interface_Controls_Control__.HasShadowY();
}
GetAngularDamping() {
     return this.Libraries_Interface_Item2D__.GetAngularDamping();
}
SetInterfaceOptionsKey$quorum_text(key) {
     return this.Libraries_Interface_Controls_Control__.SetInterfaceOptionsKey$quorum_text(key);
}
RequestReloadGraphics() {
     return this.Libraries_Interface_Controls_Control__.RequestReloadGraphics();
}
GetAccessibilityRoleDescription() {
     return this.Libraries_Interface_Item__.GetAccessibilityRoleDescription();
}
GetRotationInRadians() {
     return this.Libraries_Interface_Item2D__.GetRotationInRadians();
}
MoveX$quorum_number(xAmount) {
     return this.Libraries_Interface_Item2D__.MoveX$quorum_number(xAmount);
}
ResetMass() {
     return this.Libraries_Interface_Item2D__.ResetMass();
}
GetFontColor() {
     return this.Libraries_Interface_Controls_Control__.GetFontColor();
}
RequestVerticesUpdate() {
     return this.Libraries_Interface_Item2D__.RequestVerticesUpdate();
}
HasLeftBorder() {
     return this.Libraries_Interface_Controls_Control__.HasLeftBorder();
}
HasTopLeftPixelRounding() {
     return this.Libraries_Interface_Controls_Control__.HasTopLeftPixelRounding();
}
GetActivationBehavior() {
     return this.Libraries_Interface_Controls_Control__.GetActivationBehavior();
}
UpdateBehaviors$quorum_number(seconds) {
     return this.Libraries_Interface_Item__.UpdateBehaviors$quorum_number(seconds);
}
SetCollisionGroupIndex$quorum_integer(index) {
     return this.Libraries_Interface_Item2D__.SetCollisionGroupIndex$quorum_integer(index);
}
GetRestitution() {
     return this.Libraries_Interface_Item2D__.GetRestitution();
}
SetScreenPositionFromPhysicsPosition() {
     return this.Libraries_Interface_Item2D__.SetScreenPositionFromPhysicsPosition();
}
IsPhysicsEnabled() {
     return this.Libraries_Interface_Item2D__.IsPhysicsEnabled();
}
SetClipping$quorum_boolean(clip) {
     return this.Libraries_Interface_Item2D__.SetClipping$quorum_boolean(clip);
}
SetScaleFromCenter$quorum_number(scale) {
     return this.Libraries_Interface_Item2D__.SetScaleFromCenter$quorum_number(scale);
}
IsShowing() {
     return this.Libraries_Interface_Item__.IsShowing();
}
SetBorderStyle$quorum_integer(style) {
     return this.Libraries_Interface_Controls_Control__.SetBorderStyle$quorum_integer(style);
}
Contains$quorum_number$quorum_number(containsX, containsY) {
     return this.Libraries_Interface_Item2D__.Contains$quorum_number$quorum_number(containsX, containsY);
}
IsCollidable() {
     return this.Libraries_Interface_Item2D__.IsCollidable();
}
Simulate$quorum_boolean(flag) {
     return this.Libraries_Interface_Item2D__.Simulate$quorum_boolean(flag);
}
GetPhysicsProperties() {
     return this.Libraries_Interface_Item2D__.GetPhysicsProperties();
}
GetRightPadding() {
     return this.Libraries_Interface_Controls_Control__.GetRightPadding();
}
SetY$quorum_number(setY) {
     return this.Libraries_Interface_Item2D__.SetY$quorum_number(setY);
}
SetMass$quorum_Libraries_Game_Physics_Mass2D(mass) {
     return this.Libraries_Interface_Item2D__.SetMass$quorum_Libraries_Game_Physics_Mass2D(mass);
}
GetBorderThickness() {
     return this.Libraries_Interface_Controls_Control__.GetBorderThickness();
}
GetAccessibleParent() {
     return this.Libraries_Interface_Item2D__.GetAccessibleParent();
}
SetFlipY$quorum_boolean(flip) {
     return this.Libraries_Interface_Item2D__.SetFlipY$quorum_boolean(flip);
}
GetName() {
     return this.Libraries_Interface_Item__.GetName();
}
GetPixelWidth() {
     return this.Libraries_Interface_Controls_Control__.GetPixelWidth();
}
ManageShape() {
     return this.Libraries_Interface_Item2D__.ManageShape();
}
GetBottomLeftRounding() {
     return this.Libraries_Interface_Controls_Control__.GetBottomLeftRounding();
}
GetLeftMargin() {
     return this.Libraries_Interface_Controls_Control__.GetLeftMargin();
}
GetFriction() {
     return this.Libraries_Interface_Item2D__.GetFriction();
}
GetSelectionListeners() {
     return this.Libraries_Interface_Controls_Control__.GetSelectionListeners();
}
SetHasMoved$quorum_boolean(flag) {
     return this.Libraries_Interface_Item2D__.SetHasMoved$quorum_boolean(flag);
}
FastMoving$quorum_boolean(flag) {
     return this.Libraries_Interface_Item2D__.FastMoving$quorum_boolean(flag);
}
SetFont$quorum_Libraries_Game_Graphics_Font(font) {
     return this.Libraries_Interface_Controls_Control__.SetFont$quorum_Libraries_Game_Graphics_Font(font);
}
SetPercentageX$quorum_number(x) {
     return this.Libraries_Interface_Controls_Control__.SetPercentageX$quorum_number(x);
}
GetBorderStyle() {
     return this.Libraries_Interface_Controls_Control__.GetBorderStyle();
}
ResetLayoutFlag() {
     return this.Libraries_Interface_Controls_Control__.ResetLayoutFlag();
}
SetTopRightPixelRounding$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetTopRightPixelRounding$quorum_number(value);
}
UpdateTransformAngle() {
     return this.Libraries_Interface_Item2D__.UpdateTransformAngle();
}
GetUnfocusedSelectionBorderColor() {
     return this.Libraries_Interface_Controls_Control__.GetUnfocusedSelectionBorderColor();
}
EmptySelectionListeners() {
     return this.Libraries_Interface_Controls_Control__.EmptySelectionListeners();
}
GetLayer() {
     return this.Libraries_Interface_Item2D__.GetLayer();
}
GetWorldVector$quorum_Libraries_Compute_Vector2(localVector) {
     return this.Libraries_Interface_Item2D__.GetWorldVector$quorum_Libraries_Compute_Vector2(localVector);
}
GetMouseDownColor() {
     return this.Libraries_Interface_Controls_Control__.GetMouseDownColor();
}
HasFontOutlineThickness() {
     return this.Libraries_Interface_Controls_Control__.HasFontOutlineThickness();
}
GetFocusFontColor() {
     return this.Libraries_Interface_Controls_Control__.GetFocusFontColor();
}
SetGlowColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetGlowColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
GetInterfaceOptionsKey() {
     return this.Libraries_Interface_Controls_Control__.GetInterfaceOptionsKey();
}
GetHorizontalLayoutMode() {
     return this.Libraries_Interface_Controls_Control__.GetHorizontalLayoutMode();
}
SetGridWidth$quorum_integer(gridWidth) {
     return this.Libraries_Interface_Controls_Control__.SetGridWidth$quorum_integer(gridWidth);
}
GetMass$quorum_Libraries_Game_Physics_Mass2D(mass) {
     return this.Libraries_Interface_Item2D__.GetMass$quorum_Libraries_Game_Physics_Mass2D(mass);
}
SetToLargeFont() {
     return this.Libraries_Interface_Controls_Control__.SetToLargeFont();
}
AddGestureListener$quorum_Libraries_Interface_Events_GestureListener(listener) {
     return this.Libraries_Interface_Item__.AddGestureListener$quorum_Libraries_Interface_Events_GestureListener(listener);
}
SetCornerRounding$quorum_number$quorum_number$quorum_number$quorum_number(bottomLeft, bottomRight, topLeft, topRight) {
     return this.Libraries_Interface_Controls_Control__.SetCornerRounding$quorum_number$quorum_number$quorum_number$quorum_number(bottomLeft, bottomRight, topLeft, topRight);
}
GetDefaultProportionalFontName() {
     return this.Libraries_Interface_Controls_Control__.GetDefaultProportionalFontName();
}
SetScaleFromCenter$quorum_number$quorum_number(newX, newY) {
     return this.Libraries_Interface_Item2D__.SetScaleFromCenter$quorum_number$quorum_number(newX, newY);
}
SetAccentColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetAccentColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
GetContainerGridWidth() {
     return this.Libraries_Interface_Controls_Control__.GetContainerGridWidth();
}
HasBottomLeftPixelRounding() {
     return this.Libraries_Interface_Controls_Control__.HasBottomLeftPixelRounding();
}
GetDefaultFont() {
     return this.Libraries_Interface_Controls_Control__.GetDefaultFont();
}
GetMouseDownGlowColor() {
     return this.Libraries_Interface_Controls_Control__.GetMouseDownGlowColor();
}
SetTransform$quorum_Libraries_Game_Collision_PhysicsPosition2D(transform) {
     return this.Libraries_Interface_Item2D__.SetTransform$quorum_Libraries_Game_Collision_PhysicsPosition2D(transform);
}
HasMoved() {
     return this.Libraries_Interface_Item2D__.HasMoved();
}
RemoveMouseListener$quorum_Libraries_Interface_Events_MouseListener(listener) {
     return this.Libraries_Interface_Item__.RemoveMouseListener$quorum_Libraries_Interface_Events_MouseListener(listener);
}
SetFontOutlineColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetFontOutlineColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
GetShapeType() {
     return this.Libraries_Interface_Item2D__.GetShapeType();
}
AddMouseMovementListener$quorum_Libraries_Interface_Events_MouseMovementListener(listener) {
     return this.Libraries_Interface_Item__.AddMouseMovementListener$quorum_Libraries_Interface_Events_MouseMovementListener(listener);
}
SetMouseDownGlowColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetMouseDownGlowColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
GetOffsetX() {
     return this.Libraries_Interface_Item2D__.GetOffsetX();
}
GetOffsetZ() {
     return this.Libraries_Interface_Item2D__.GetOffsetZ();
}
GetOffsetY() {
     return this.Libraries_Interface_Item2D__.GetOffsetY();
}
GetItems() {
     return this.Libraries_Interface_Item2D__.GetItems();
}
GetHashCode() {
return global_Object_GetHashCode(this.prototype, );
}
GetMouseOverColor() {
     return this.Libraries_Interface_Controls_Control__.GetMouseOverColor();
}
GetPixelHeight() {
     return this.Libraries_Interface_Controls_Control__.GetPixelHeight();
}
SetOffsetY$quorum_number(yAmount) {
     return this.Libraries_Interface_Item2D__.SetOffsetY$quorum_number(yAmount);
}
HasProperty$quorum_text(key) {
     return this.Libraries_Interface_Item__.HasProperty$quorum_text(key);
}
AddFocusListener$quorum_Libraries_Interface_Events_FocusListener(listener) {
     return this.Libraries_Interface_Item__.AddFocusListener$quorum_Libraries_Interface_Events_FocusListener(listener);
}
SetLinearDamping$quorum_number(linearDamping) {
     return this.Libraries_Interface_Item2D__.SetLinearDamping$quorum_number(linearDamping);
}
PrepareVertices() {
     return this.Libraries_Interface_Item2D__.PrepareVertices();
}
SetChildrenProcessingMouseEvents$quorum_boolean(shouldProcess) {
     return this.Libraries_Interface_Item2D__.SetChildrenProcessingMouseEvents$quorum_boolean(shouldProcess);
}
GetTopLeftPixelRounding() {
     return this.Libraries_Interface_Controls_Control__.GetTopLeftPixelRounding();
}
GetBottomLeftPixelRounding() {
     return this.Libraries_Interface_Controls_Control__.GetBottomLeftPixelRounding();
}
GetBoundingBox$quorum_integer(childIndex) {
     return this.Libraries_Interface_Item2D__.GetBoundingBox$quorum_integer(childIndex);
}
GetWidth() {
     return this.Libraries_Interface_Item2D__.GetWidth();
}
SetPercentageOriginY$quorum_number(y) {
     return this.Libraries_Interface_Controls_Control__.SetPercentageOriginY$quorum_number(y);
}
HasBottomBorder() {
     return this.Libraries_Interface_Controls_Control__.HasBottomBorder();
}
HasTopRightRounding() {
     return this.Libraries_Interface_Controls_Control__.HasTopRightRounding();
}
Activate$quorum_Libraries_Interface_Events_BehaviorEvent(event) {
     return this.Libraries_Interface_Controls_Control__.Activate$quorum_Libraries_Interface_Events_BehaviorEvent(event);
}
IsFocusable() {
     return this.Libraries_Interface_Item__.IsFocusable();
}
NotifySelectionListeners$quorum_Libraries_Interface_Events_SelectionEvent(event) {
     return this.Libraries_Interface_Controls_Control__.NotifySelectionListeners$quorum_Libraries_Interface_Events_SelectionEvent(event);
}
GetCollisionList() {
     return this.Libraries_Interface_Item2D__.GetCollisionList();
}
GetPreviousFocus() {
     return this.Libraries_Interface_Item__.GetPreviousFocus();
}
SetFontSize$quorum_integer(size) {
     return this.Libraries_Interface_Controls_Control__.SetFontSize$quorum_integer(size);
}
GetDescription() {
     return this.Libraries_Interface_Item__.GetDescription();
}
GetUnfocusedSelectionColor() {
     return this.Libraries_Interface_Controls_Control__.GetUnfocusedSelectionColor();
}
GetPercentageX() {
     return this.Libraries_Interface_Controls_Control__.GetPercentageX();
}
SetBottomLeftRounding$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetBottomLeftRounding$quorum_number(value);
}
GetPercentageY() {
     return this.Libraries_Interface_Controls_Control__.GetPercentageY();
}
SetView2D$quorum_Libraries_Interface_Views_View2D(content) {
     return this.Libraries_Interface_Item2D__.SetView2D$quorum_Libraries_Interface_Views_View2D(content);
}
GetBoundingRectangle() {
     return this.Libraries_Interface_Item2D__.GetBoundingRectangle();
}
GetMouseMovementListeners() {
     return this.Libraries_Interface_Item__.GetMouseMovementListeners();
}
SetFocusColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetFocusColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
SetGridY$quorum_integer(gridY) {
     return this.Libraries_Interface_Controls_Control__.SetGridY$quorum_integer(gridY);
}
GetHeight() {
     return this.Libraries_Interface_Item2D__.GetHeight();
}
GetPercentageWidth() {
     return this.Libraries_Interface_Controls_Control__.GetPercentageWidth();
}
GetProperty$quorum_text(key) {
     return this.Libraries_Interface_Item__.GetProperty$quorum_text(key);
}
LostSelection() {
     return this.Libraries_Interface_Controls_Control__.LostSelection();
}
Advance$quorum_number(time) {
     return this.Libraries_Interface_Item2D__.Advance$quorum_number(time);
}
SetOffset$quorum_number$quorum_number$quorum_number(xAmount, yAmount, zAmount) {
     return this.Libraries_Interface_Item2D__.SetOffset$quorum_number$quorum_number$quorum_number(xAmount, yAmount, zAmount);
}
GetUnfocusedSelectionFontColor() {
     return this.Libraries_Interface_Controls_Control__.GetUnfocusedSelectionFontColor();
}
IsOnLayer() {
     return this.Libraries_Interface_Item2D__.IsOnLayer();
}
ProcessMouseEvent$quorum_Libraries_Interface_Events_MouseEvent(event) {
     return this.Libraries_Interface_Item2D__.ProcessMouseEvent$quorum_Libraries_Interface_Events_MouseEvent(event);
}
GetLayoutProperties$quorum_number$quorum_number(containerWidth, containerHeight) {
     return this.Libraries_Interface_Controls_Control__.GetLayoutProperties$quorum_number$quorum_number(containerWidth, containerHeight);
}
HasColorPropertyOverride$quorum_text(property) {
     return this.Libraries_Interface_Controls_Control__.HasColorPropertyOverride$quorum_text(property);
}
HasRightBorder() {
     return this.Libraries_Interface_Controls_Control__.HasRightBorder();
}
SetOffsetZ$quorum_number(zAmount) {
     return this.Libraries_Interface_Item2D__.SetOffsetZ$quorum_number(zAmount);
}
SetFlipX$quorum_boolean(flip) {
     return this.Libraries_Interface_Item2D__.SetFlipX$quorum_boolean(flip);
}
AddMouseWheelListener$quorum_Libraries_Interface_Events_MouseWheelListener(listener) {
     return this.Libraries_Interface_Item__.AddMouseWheelListener$quorum_Libraries_Interface_Events_MouseWheelListener(listener);
}
RemoveLayoutProperties$quorum_Libraries_Interface_Layouts_LayoutProperties(properties) {
     return this.Libraries_Interface_Controls_Control__.RemoveLayoutProperties$quorum_Libraries_Interface_Layouts_LayoutProperties(properties);
}
SetFriction$quorum_number(friction) {
     return this.Libraries_Interface_Item2D__.SetFriction$quorum_number(friction);
}
GetLocalPoint$quorum_Libraries_Compute_Vector2(worldPoint) {
     return this.Libraries_Interface_Item2D__.GetLocalPoint$quorum_Libraries_Compute_Vector2(worldPoint);
}
GetLinearVelocityFromLocalPoint$quorum_Libraries_Compute_Vector2(localPoint) {
     return this.Libraries_Interface_Item2D__.GetLinearVelocityFromLocalPoint$quorum_Libraries_Compute_Vector2(localPoint);
}
SetName$quorum_text(newName) {
     return this.Libraries_Interface_Item__.SetName$quorum_text(newName);
}
GainedSelection() {
     return this.Libraries_Interface_Controls_Control__.GainedSelection();
}
ManageLayers() {
     return this.Libraries_Interface_Item2D__.ManageLayers();
}
SetMouseOverFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetMouseOverFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
SetGridPosition$quorum_integer$quorum_integer(gridX, gridY) {
     return this.Libraries_Interface_Controls_Control__.SetGridPosition$quorum_integer$quorum_integer(gridX, gridY);
}
NotifyAccessibilityBoundsChanged() {
     return this.Libraries_Interface_Item2D__.NotifyAccessibilityBoundsChanged();
}
SetShadowX$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetShadowX$quorum_number(value);
}
SetRightMargin$quorum_number(padding) {
     return this.Libraries_Interface_Controls_Control__.SetRightMargin$quorum_number(padding);
}
HasBottomLeftRounding() {
     return this.Libraries_Interface_Controls_Control__.HasBottomLeftRounding();
}
AddLayoutProperties$quorum_Libraries_Interface_Layouts_LayoutProperties(properties) {
     return this.Libraries_Interface_Controls_Control__.AddLayoutProperties$quorum_Libraries_Interface_Layouts_LayoutProperties(properties);
}
LostFocus$quorum_Libraries_Interface_Events_FocusEvent(event) {
     return this.Libraries_Interface_Controls_Control__.LostFocus$quorum_Libraries_Interface_Events_FocusEvent(event);
}
CreateNodes$quorum_Libraries_Game_Collision_BroadphaseCollision2D$quorum_Libraries_Game_Collision_PhysicsPosition2D(broadphase, transform) {
     return this.Libraries_Interface_Item2D__.CreateNodes$quorum_Libraries_Game_Collision_BroadphaseCollision2D$quorum_Libraries_Game_Collision_PhysicsPosition2D(broadphase, transform);
}
SetCornerPixelRounding$quorum_number$quorum_number$quorum_number$quorum_number(bottomLeft, bottomRight, topLeft, topRight) {
     return this.Libraries_Interface_Controls_Control__.SetCornerPixelRounding$quorum_number$quorum_number$quorum_number$quorum_number(bottomLeft, bottomRight, topLeft, topRight);
}
SetBottomMargin$quorum_number(padding) {
     return this.Libraries_Interface_Controls_Control__.SetBottomMargin$quorum_number(padding);
}
HasProperties() {
     return this.Libraries_Interface_Item__.HasProperties();
}
SetHorizontalLayoutMode$quorum_integer(mode) {
     return this.Libraries_Interface_Controls_Control__.SetHorizontalLayoutMode$quorum_integer(mode);
}
SetPopupMenu$quorum_Libraries_Interface_Controls_PopupMenu(menu) {
     return this.Libraries_Interface_Controls_Control__.SetPopupMenu$quorum_Libraries_Interface_Controls_PopupMenu(menu);
}
SetMouseOverGlowColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetMouseOverGlowColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
SetAngularDamping$quorum_number(angularDamping) {
     return this.Libraries_Interface_Item2D__.SetAngularDamping$quorum_number(angularDamping);
}
GetShadowWidth() {
     return this.Libraries_Interface_Controls_Control__.GetShadowWidth();
}
HasShadowHeight() {
     return this.Libraries_Interface_Controls_Control__.HasShadowHeight();
}
GetNumberProperty$quorum_text(property) {
     return this.Libraries_Interface_Controls_Control__.GetNumberProperty$quorum_text(property);
}
HasBorderThickness() {
     return this.Libraries_Interface_Controls_Control__.HasBorderThickness();
}
GetMouseOverFontColor() {
     return this.Libraries_Interface_Controls_Control__.GetMouseOverFontColor();
}
GetScaleY() {
     return this.Libraries_Interface_Item2D__.GetScaleY();
}
Equals$quorum_Libraries_Language_Object(object) {
return global_Object_Equals(this.prototype, object);
}
GetScaleX() {
     return this.Libraries_Interface_Item2D__.GetScaleX();
}
SetClipCoordinates$quorum_Libraries_Game_Graphics_Painter2D(painter) {
     return this.Libraries_Interface_Item2D__.SetClipCoordinates$quorum_Libraries_Game_Graphics_Painter2D(painter);
}
GetView2D() {
     return this.Libraries_Interface_Item2D__.GetView2D();
}
GetDefaultFontSize() {
     return this.Libraries_Interface_Controls_Control__.GetDefaultFontSize();
}
SetCollidable$quorum_boolean(flag) {
     return this.Libraries_Interface_Item2D__.SetCollidable$quorum_boolean(flag);
}
GainedFocus$quorum_Libraries_Interface_Events_FocusEvent(event) {
     return this.Libraries_Interface_Controls_Control__.GainedFocus$quorum_Libraries_Interface_Events_FocusEvent(event);
}
SetSelectionBorderThickness$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetSelectionBorderThickness$quorum_number(value);
}
SetWidth$quorum_number(newWidth) {
     return this.Libraries_Interface_Item2D__.SetWidth$quorum_number(newWidth);
}
GetSelectionBorderColor() {
     return this.Libraries_Interface_Controls_Control__.GetSelectionBorderColor();
}
SetSelectionFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetSelectionFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
GetInverseMass() {
     return this.Libraries_Interface_Item2D__.GetInverseMass();
}
GetTransform() {
     return this.Libraries_Interface_Item2D__.GetTransform();
}
HasBottomRightRounding() {
     return this.Libraries_Interface_Controls_Control__.HasBottomRightRounding();
}
GetRotation() {
     return this.Libraries_Interface_Item2D__.GetRotation();
}
GetDensity() {
     return this.Libraries_Interface_Item2D__.GetDensity();
}
GetPropertyKeyIterator() {
     return this.Libraries_Interface_Item__.GetPropertyKeyIterator();
}
SynchronizeNodes() {
     return this.Libraries_Interface_Item2D__.SynchronizeNodes();
}
SetProperty$quorum_text$quorum_Libraries_Data_Formats_JavaScriptObjectNotation(key, value) {
     return this.Libraries_Interface_Item__.SetProperty$quorum_text$quorum_Libraries_Data_Formats_JavaScriptObjectNotation(key, value);
}
GetDefaultLayoutProperties() {
     return this.Libraries_Interface_Controls_Control__.GetDefaultLayoutProperties();
}
SetLeftPadding$quorum_number(padding) {
     return this.Libraries_Interface_Controls_Control__.SetLeftPadding$quorum_number(padding);
}
SetLayer$quorum_Libraries_Game_Layer2D(parentLayer) {
     return this.Libraries_Interface_Item2D__.SetLayer$quorum_Libraries_Game_Layer2D(parentLayer);
}
IsRenderingFocus() {
     return this.Libraries_Interface_Controls_Control__.IsRenderingFocus();
}
GetForegroundSelectionColor() {
     return this.Libraries_Interface_Controls_Control__.GetForegroundSelectionColor();
}
GetLocalCenter() {
     return this.Libraries_Interface_Item2D__.GetLocalCenter();
}
SetNonResponsive() {
     return this.Libraries_Interface_Item2D__.SetNonResponsive();
}
SetRotation$quorum_number(degrees) {
     return this.Libraries_Interface_Item2D__.SetRotation$quorum_number(degrees);
}
SetItem$quorum_integer$quorum_Libraries_Interface_Item2D(index, newItem) {
     return this.Libraries_Interface_Item2D__.SetItem$quorum_integer$quorum_Libraries_Interface_Item2D(index, newItem);
}
SetTopMargin$quorum_number(padding) {
     return this.Libraries_Interface_Controls_Control__.SetTopMargin$quorum_number(padding);
}
GetDefaultMonospaceFontName() {
     return this.Libraries_Interface_Controls_Control__.GetDefaultMonospaceFontName();
}
HasShadowWidth() {
     return this.Libraries_Interface_Controls_Control__.HasShadowWidth();
}
RemoveControlActivationListener$quorum_Libraries_Interface_Events_ControlActivationListener(listener) {
     return this.Libraries_Interface_Controls_Control__.RemoveControlActivationListener$quorum_Libraries_Interface_Events_ControlActivationListener(listener);
}
Focus() {
     return this.Libraries_Interface_Item__.Focus();
}
SetScale$quorum_number$quorum_number(newX, newY) {
     return this.Libraries_Interface_Item2D__.SetScale$quorum_number$quorum_number(newX, newY);
}
SetInterfaceScale$quorum_number(scale) {
     return this.Libraries_Interface_Controls_Control__.SetInterfaceScale$quorum_number(scale);
}
SetFocusFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetFocusFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
HasTopBorder() {
     return this.Libraries_Interface_Controls_Control__.HasTopBorder();
}
SetBottomRightRounding$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetBottomRightRounding$quorum_number(value);
}
ShouldCollide$quorum_Libraries_Interface_Item2D(otherItem) {
     return this.Libraries_Interface_Item2D__.ShouldCollide$quorum_Libraries_Interface_Item2D(otherItem);
}
SetNumberProperty$quorum_text$quorum_number(property, value) {
     return this.Libraries_Interface_Controls_Control__.SetNumberProperty$quorum_text$quorum_number(property, value);
}
SetFocusBorderColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetFocusBorderColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
SetAngularVelocity$quorum_number(angularVelocity) {
     return this.Libraries_Interface_Item2D__.SetAngularVelocity$quorum_number(angularVelocity);
}
ApplyAngularImpulse$quorum_number(impulse) {
     return this.Libraries_Interface_Item2D__.ApplyAngularImpulse$quorum_number(impulse);
}
SetSize$quorum_number$quorum_number(newWidth, newHeight) {
     return this.Libraries_Interface_Item2D__.SetSize$quorum_number$quorum_number(newWidth, newHeight);
}
SetContainerGridHeight$quorum_integer(containerGridHeight) {
     return this.Libraries_Interface_Controls_Control__.SetContainerGridHeight$quorum_integer(containerGridHeight);
}
SetUpdateTransform$quorum_boolean(flag) {
     return this.Libraries_Interface_Item2D__.SetUpdateTransform$quorum_boolean(flag);
}
Draw$quorum_Libraries_Game_Graphics_Painter2D(painter) {
     return this.Libraries_Interface_Item2D__.Draw$quorum_Libraries_Game_Graphics_Painter2D(painter);
}
Dispose() {
     return this.Libraries_Interface_Item__.Dispose();
}
GetItemCount() {
     return this.Libraries_Interface_Item2D__.GetItemCount();
}
RemoveMouseMovementListener$quorum_Libraries_Interface_Events_MouseMovementListener(listener) {
     return this.Libraries_Interface_Item__.RemoveMouseMovementListener$quorum_Libraries_Interface_Events_MouseMovementListener(listener);
}
GetIcon() {
     return this.Libraries_Interface_Controls_Control__.GetIcon();
}
SetDescription$quorum_text(newDescription) {
     return this.Libraries_Interface_Item__.SetDescription$quorum_text(newDescription);
}
GetGridX() {
     return this.Libraries_Interface_Controls_Control__.GetGridX();
}
GetGridY() {
     return this.Libraries_Interface_Controls_Control__.GetGridY();
}
GetColorProperty$quorum_text(property) {
     return this.Libraries_Interface_Controls_Control__.GetColorProperty$quorum_text(property);
}
GetBackgroundColor() {
     return this.Libraries_Interface_Controls_Control__.GetBackgroundColor();
}
GetMouseDownFontColor() {
     return this.Libraries_Interface_Controls_Control__.GetMouseDownFontColor();
}
SetForce$quorum_Libraries_Compute_Vector2(force) {
     return this.Libraries_Interface_Item2D__.SetForce$quorum_Libraries_Compute_Vector2(force);
}
SetBorderThickness$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetBorderThickness$quorum_number(value);
}
CancelBehaviors() {
     return this.Libraries_Interface_Item__.CancelBehaviors();
}
SetDensity$quorum_number(density) {
     return this.Libraries_Interface_Item2D__.SetDensity$quorum_number(density);
}
GetItem$quorum_integer(index) {
     return this.Libraries_Interface_Item2D__.GetItem$quorum_integer(index);
}
GetLocalVector$quorum_Libraries_Compute_Vector2(worldVector) {
     return this.Libraries_Interface_Item2D__.GetLocalVector$quorum_Libraries_Compute_Vector2(worldVector);
}
GetLayoutProperties() {
     return this.Libraries_Interface_Controls_Control__.GetLayoutProperties();
}
GetInterfaceScale() {
     return this.Libraries_Interface_Controls_Control__.GetInterfaceScale();
}
SetHeight$quorum_number(newHeight) {
     return this.Libraries_Interface_Item2D__.SetHeight$quorum_number(newHeight);
}
IsCustomDrawing() {
     return this.Libraries_Interface_Item2D__.IsCustomDrawing();
}
GetInputGroup() {
     return this.Libraries_Interface_Item__.GetInputGroup();
}
GetMass() {
     return this.Libraries_Interface_Item2D__.GetMass();
}
GetBottomRightPixelRounding() {
     return this.Libraries_Interface_Controls_Control__.GetBottomRightPixelRounding();
}
Compare$quorum_Libraries_Language_Object(object) {
return global_Object_Compare(this.prototype, object);
}
GetPercentageHeight() {
     return this.Libraries_Interface_Controls_Control__.GetPercentageHeight();
}
GetBorderColor() {
     return this.Libraries_Interface_Controls_Control__.GetBorderColor();
}
GetGlobalZ() {
     return this.Libraries_Interface_Item2D__.GetGlobalZ();
}
GetGlobalY() {
     return this.Libraries_Interface_Item2D__.GetGlobalY();
}
RemoveGestureListener$quorum_Libraries_Interface_Events_GestureListener(listener) {
     return this.Libraries_Interface_Item__.RemoveGestureListener$quorum_Libraries_Interface_Events_GestureListener(listener);
}
GetTopPadding() {
     return this.Libraries_Interface_Controls_Control__.GetTopPadding();
}
SetLayoutRows$quorum_number(layoutRows) {
     return this.Libraries_Interface_Controls_Control__.SetLayoutRows$quorum_number(layoutRows);
}
SetPixelWidth$quorum_number(width) {
     return this.Libraries_Interface_Controls_Control__.SetPixelWidth$quorum_number(width);
}
NeedsLayout() {
     return this.Libraries_Interface_Controls_Control__.NeedsLayout();
}
LoadGraphics$quorum_Libraries_Interface_Layouts_LayoutProperties(properties) {
     return this.Libraries_Interface_Controls_Control__.LoadGraphics$quorum_Libraries_Interface_Layouts_LayoutProperties(properties);
}
SetOffset$quorum_number$quorum_number(xAmount, yAmount) {
     return this.Libraries_Interface_Item2D__.SetOffset$quorum_number$quorum_number(xAmount, yAmount);
}
GetAngularVelocity() {
     return this.Libraries_Interface_Item2D__.GetAngularVelocity();
}
GetInertia() {
     return this.Libraries_Interface_Item2D__.GetInertia();
}
SetScaleX$quorum_number(scaleX) {
     return this.Libraries_Interface_Item2D__.SetScaleX$quorum_number(scaleX);
}
GetGridWidth() {
     return this.Libraries_Interface_Controls_Control__.GetGridWidth();
}
GetLabelText() {
     return this.Libraries_Interface_Controls_Control__.GetLabelText();
}
DestroyNodes$quorum_Libraries_Game_Collision_BroadphaseCollision2D(broadphase) {
     return this.Libraries_Interface_Item2D__.DestroyNodes$quorum_Libraries_Game_Collision_BroadphaseCollision2D(broadphase);
}
GetGestureListeners() {
     return this.Libraries_Interface_Item__.GetGestureListeners();
}
SetIconColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetIconColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
GetFocusBorderColor() {
     return this.Libraries_Interface_Controls_Control__.GetFocusBorderColor();
}
GetShadowEdgeFade() {
     return this.Libraries_Interface_Controls_Control__.GetShadowEdgeFade();
}
SetBoundingBox$quorum_number$quorum_number$quorum_number$quorum_number(newX, newY, newWidth, newHeight) {
     return this.Libraries_Interface_Item2D__.SetBoundingBox$quorum_number$quorum_number$quorum_number$quorum_number(newX, newY, newWidth, newHeight);
}
RemoveTouchListener$quorum_Libraries_Interface_Events_TouchListener(listener) {
     return this.Libraries_Interface_Item__.RemoveTouchListener$quorum_Libraries_Interface_Events_TouchListener(listener);
}
SetNextFocus$quorum_Libraries_Interface_Item(next) {
     return this.Libraries_Interface_Item__.SetNextFocus$quorum_Libraries_Interface_Item(next);
}
SetPosition$quorum_number$quorum_number(setX, setY) {
     return this.Libraries_Interface_Item2D__.SetPosition$quorum_number$quorum_number(setX, setY);
}
FlipY() {
     return this.Libraries_Interface_Item2D__.FlipY();
}
GetChildAsItem$quorum_integer(index) {
     return this.Libraries_Interface_Item2D__.GetChildAsItem$quorum_integer(index);
}
SetCenterY$quorum_number(setY) {
     return this.Libraries_Interface_Item2D__.SetCenterY$quorum_number(setY);
}
ReleasedMouse() {
     return this.Libraries_Interface_Controls_Control__.ReleasedMouse();
}
FlipX() {
     return this.Libraries_Interface_Item2D__.FlipX();
}
SetBottomRightPixelRounding$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetBottomRightPixelRounding$quorum_number(value);
}
GetCollisionGroupIndex() {
     return this.Libraries_Interface_Item2D__.GetCollisionGroupIndex();
}
SetRestitution$quorum_number(restitution) {
     return this.Libraries_Interface_Item2D__.SetRestitution$quorum_number(restitution);
}
EmptyChildren() {
     return this.Libraries_Interface_Item__.EmptyChildren();
}
GetSelectionFontColor() {
     return this.Libraries_Interface_Controls_Control__.GetSelectionFontColor();
}
UpdateAll$quorum_number(seconds) {
     return this.Libraries_Interface_Controls_Control__.UpdateAll$quorum_number(seconds);
}
Move$quorum_Libraries_Compute_Vector2(movement) {
     return this.Libraries_Interface_Item2D__.Move$quorum_Libraries_Compute_Vector2(movement);
}
GetSleepTime() {
     return this.Libraries_Interface_Item2D__.GetSleepTime();
}
GetTouchListeners() {
     return this.Libraries_Interface_Item__.GetTouchListeners();
}
SetGridSize$quorum_integer$quorum_integer(gridWidth, gridHeight) {
     return this.Libraries_Interface_Controls_Control__.SetGridSize$quorum_integer$quorum_integer(gridWidth, gridHeight);
}
GetX() {
     return this.Libraries_Interface_Item2D__.GetX();
}
GetY() {
     return this.Libraries_Interface_Item2D__.GetY();
}
GetTopMargin() {
     return this.Libraries_Interface_Controls_Control__.GetTopMargin();
}
GetZ() {
     return this.Libraries_Interface_Item2D__.GetZ();
}
SetCustomDrawing$quorum_boolean(isCustom) {
     return this.Libraries_Interface_Item2D__.SetCustomDrawing$quorum_boolean(isCustom);
}
EnablePhysics$quorum_boolean(flag) {
     return this.Libraries_Interface_Item2D__.EnablePhysics$quorum_boolean(flag);
}
SetLeftMargin$quorum_number(padding) {
     return this.Libraries_Interface_Controls_Control__.SetLeftMargin$quorum_number(padding);
}
SynchronizeTransform() {
     return this.Libraries_Interface_Item2D__.SynchronizeTransform();
}
SetIcon$quorum_Libraries_Game_Graphics_TextureRegion(icon) {
     return this.Libraries_Interface_Controls_Control__.SetIcon$quorum_Libraries_Game_Graphics_TextureRegion(icon);
}
IsNonResponsive() {
     return this.Libraries_Interface_Item2D__.IsNonResponsive();
}
SetShadowEdgeFade$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetShadowEdgeFade$quorum_number(value);
}
CanRotate$quorum_boolean(flag) {
     return this.Libraries_Interface_Item2D__.CanRotate$quorum_boolean(flag);
}
HasShadowEdgeFade() {
     return this.Libraries_Interface_Controls_Control__.HasShadowEdgeFade();
}
SetTopLeftPixelRounding$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetTopLeftPixelRounding$quorum_number(value);
}
GetShape() {
     return this.Libraries_Interface_Item2D__.GetShape();
}
SetPercentageHeight$quorum_number(height) {
     return this.Libraries_Interface_Controls_Control__.SetPercentageHeight$quorum_number(height);
}
Hide() {
     return this.Libraries_Interface_Item__.Hide();
}
SetTopLeftRounding$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetTopLeftRounding$quorum_number(value);
}
GetCenterY() {
     return this.Libraries_Interface_Item2D__.GetCenterY();
}
SetVerticalLayoutMode$quorum_integer(mode) {
     return this.Libraries_Interface_Controls_Control__.SetVerticalLayoutMode$quorum_integer(mode);
}
Rotate$quorum_number(degrees) {
     return this.Libraries_Interface_Item2D__.Rotate$quorum_number(degrees);
}
GetCenterX() {
     return this.Libraries_Interface_Item2D__.GetCenterX();
}
ComputeDistance$quorum_Libraries_Compute_Vector2$quorum_integer$quorum_Libraries_Compute_Vector2(point, childIndex, normalOut) {
     return this.Libraries_Interface_Item2D__.ComputeDistance$quorum_Libraries_Compute_Vector2$quorum_integer$quorum_Libraries_Compute_Vector2(point, childIndex, normalOut);
}
GetAccessibilityType() {
     return this.Libraries_Interface_Item__.GetAccessibilityType();
}
Update$quorum_number(secondsSinceUpdate) {
     return this.Libraries_Interface_Item__.Update$quorum_number(secondsSinceUpdate);
}
GetCollisionGroupFlag() {
     return this.Libraries_Interface_Item2D__.GetCollisionGroupFlag();
}
GetSelectionBorderThickness() {
     return this.Libraries_Interface_Controls_Control__.GetSelectionBorderThickness();
}
IsRenderingMouseOver() {
     return this.Libraries_Interface_Controls_Control__.IsRenderingMouseOver();
}
SetShadowWidth$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetShadowWidth$quorum_number(value);
}
SetCenter$quorum_number$quorum_number(setX, setY) {
     return this.Libraries_Interface_Item2D__.SetCenter$quorum_number$quorum_number(setX, setY);
}
SetShape$quorum_Libraries_Game_Collision_Shapes_CollisionShape2D(shape) {
     return this.Libraries_Interface_Item2D__.SetShape$quorum_Libraries_Game_Collision_Shapes_CollisionShape2D(shape);
}
SetFocusable$quorum_boolean(focus) {
     return this.Libraries_Interface_Item__.SetFocusable$quorum_boolean(focus);
}
GetDrawableShape() {
     return this.Libraries_Interface_Item2D__.GetDrawableShape();
}
SetSelectionBorderColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetSelectionBorderColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
SetInputGroup$quorum_text(group) {
     return this.Libraries_Interface_Item__.SetInputGroup$quorum_text(group);
}
IsRenderingMouseDown() {
     return this.Libraries_Interface_Controls_Control__.IsRenderingMouseDown();
}
GetPercentageOriginX() {
     return this.Libraries_Interface_Controls_Control__.GetPercentageOriginX();
}
GetPercentageOriginY() {
     return this.Libraries_Interface_Controls_Control__.GetPercentageOriginY();
}
ProcessTouchEvent$quorum_Libraries_Interface_Events_TouchEvent(event) {
     return this.Libraries_Interface_Item2D__.ProcessTouchEvent$quorum_Libraries_Interface_Events_TouchEvent(event);
}
SetForegroundColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetForegroundColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
TestPoint$quorum_Libraries_Compute_Vector2(point) {
     return this.Libraries_Interface_Item2D__.TestPoint$quorum_Libraries_Compute_Vector2(point);
}
GetNodes() {
     return this.Libraries_Interface_Item2D__.GetNodes();
}
GetForce() {
     return this.Libraries_Interface_Item2D__.GetForce();
}
GetChildren() {
     return this.Libraries_Interface_Item2D__.GetChildren();
}
SetCollisionGroupFlag$quorum_boolean(flag) {
     return this.Libraries_Interface_Item2D__.SetCollisionGroupFlag$quorum_boolean(flag);
}
GetForegroundColor() {
     return this.Libraries_Interface_Controls_Control__.GetForegroundColor();
}
GetNextFocus() {
     return this.Libraries_Interface_Item__.GetNextFocus();
}
GetMouseOverGlowColor() {
     return this.Libraries_Interface_Controls_Control__.GetMouseOverGlowColor();
}
ApplyTorque$quorum_number(torque) {
     return this.Libraries_Interface_Item2D__.ApplyTorque$quorum_number(torque);
}
CollideWithChildren() {
     return this.Libraries_Interface_Item2D__.CollideWithChildren();
}
Empty() {
     return this.Libraries_Interface_Item2D__.Empty();
}
GetScreenX() {
     return this.Libraries_Interface_Item2D__.GetScreenX();
}
Add$quorum_integer$quorum_Libraries_Interface_Item2D(index, newItem) {
     return this.Libraries_Interface_Controls_Control__.Add$quorum_integer$quorum_Libraries_Interface_Item2D(index, newItem);
}
GetScreenY() {
     return this.Libraries_Interface_Item2D__.GetScreenY();
}
SetShadowColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetShadowColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
GetWorldCenter() {
     return this.Libraries_Interface_Item2D__.GetWorldCenter();
}
ProcessGestureEvent$quorum_Libraries_Interface_Events_GestureEvent(event) {
     return this.Libraries_Interface_Item2D__.ProcessGestureEvent$quorum_Libraries_Interface_Events_GestureEvent(event);
}
HasSelectionBorderThickness() {
     return this.Libraries_Interface_Controls_Control__.HasSelectionBorderThickness();
}
GetFontOutlineColor() {
     return this.Libraries_Interface_Controls_Control__.GetFontOutlineColor();
}
AddMouseListener$quorum_Libraries_Interface_Events_MouseListener(listener) {
     return this.Libraries_Interface_Item__.AddMouseListener$quorum_Libraries_Interface_Events_MouseListener(listener);
}
GetBottomPadding() {
     return this.Libraries_Interface_Controls_Control__.GetBottomPadding();
}
GetClipCoordinates$quorum_Libraries_Compute_Vector2$quorum_Libraries_Compute_Vector2(xCoords, yCoords) {
     return this.Libraries_Interface_Item2D__.GetClipCoordinates$quorum_Libraries_Compute_Vector2$quorum_Libraries_Compute_Vector2(xCoords, yCoords);
}
Show() {
     return this.Libraries_Interface_Item__.Show();
}
GetFont() {
     return this.Libraries_Interface_Controls_Control__.GetFont();
}
EndMouseOver() {
     return this.Libraries_Interface_Controls_Control__.EndMouseOver();
}
SetOffsetX$quorum_number(xAmount) {
     return this.Libraries_Interface_Item2D__.SetOffsetX$quorum_number(xAmount);
}
SetPixelX$quorum_number(x) {
     return this.Libraries_Interface_Controls_Control__.SetPixelX$quorum_number(x);
}
SetFontOutlineThickness$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetFontOutlineThickness$quorum_number(value);
}
GetSweep() {
     return this.Libraries_Interface_Item2D__.GetSweep();
}
GetNodeCount() {
     return this.Libraries_Interface_Item2D__.GetNodeCount();
}
ApplyLinearImpulse$quorum_Libraries_Compute_Vector2$quorum_Libraries_Compute_Vector2(impulse, point) {
     return this.Libraries_Interface_Item2D__.ApplyLinearImpulse$quorum_Libraries_Compute_Vector2$quorum_Libraries_Compute_Vector2(impulse, point);
}
Activate() {
     return this.Libraries_Interface_Controls_Control__.Activate();
}
SetLabelText$quorum_text(labelText) {
     return this.Libraries_Interface_Controls_Control__.SetLabelText$quorum_text(labelText);
}
GetIconColor() {
     return this.Libraries_Interface_Controls_Control__.GetIconColor();
}
GetTopRightRounding() {
     return this.Libraries_Interface_Controls_Control__.GetTopRightRounding();
}
IsAcceptingMouseInput() {
     return this.Libraries_Interface_Item__.IsAcceptingMouseInput();
}
GetPropertiesSize() {
     return this.Libraries_Interface_Item__.GetPropertiesSize();
}
SetBottomPadding$quorum_number(padding) {
     return this.Libraries_Interface_Controls_Control__.SetBottomPadding$quorum_number(padding);
}
HasNumberPropertyOverride$quorum_text(property) {
     return this.Libraries_Interface_Controls_Control__.HasNumberPropertyOverride$quorum_text(property);
}
GetContainerGridHeight() {
     return this.Libraries_Interface_Controls_Control__.GetContainerGridHeight();
}
SetOriginCenter() {
     return this.Libraries_Interface_Item2D__.SetOriginCenter();
}
EmptyAll() {
     return this.Libraries_Interface_Item__.EmptyAll();
}
RequestHierarchyUpdate$quorum_Libraries_Interface_Item2D(item) {
     return this.Libraries_Interface_Item2D__.RequestHierarchyUpdate$quorum_Libraries_Interface_Item2D(item);
}
ScaleFromCenter$quorum_number(amount) {
     return this.Libraries_Interface_Item2D__.ScaleFromCenter$quorum_number(amount);
}
NotifyControlActivationListeners$quorum_Libraries_Interface_Events_ControlActivationEvent(event) {
     return this.Libraries_Interface_Controls_Control__.NotifyControlActivationListeners$quorum_Libraries_Interface_Events_ControlActivationEvent(event);
}
GetFontOutlineThickness() {
     return this.Libraries_Interface_Controls_Control__.GetFontOutlineThickness();
}
GetParent() {
     return this.Libraries_Interface_Item2D__.GetParent();
}
SetAcceptsMouseInput$quorum_boolean(accepts) {
     return this.Libraries_Interface_Item__.SetAcceptsMouseInput$quorum_boolean(accepts);
}
GetMouseListeners() {
     return this.Libraries_Interface_Item__.GetMouseListeners();
}
ScaleFromCenter$quorum_number$quorum_number(xAmount, yAmount) {
     return this.Libraries_Interface_Item2D__.ScaleFromCenter$quorum_number$quorum_number(xAmount, yAmount);
}
IsResponsive() {
     return this.Libraries_Interface_Item2D__.IsResponsive();
}
Remove$quorum_integer(index) {
     return this.Libraries_Interface_Controls_Control__.Remove$quorum_integer(index);
}
SetToMediumFont() {
     return this.Libraries_Interface_Controls_Control__.SetToMediumFont();
}
SetUnfocusedSelectionBorderColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetUnfocusedSelectionBorderColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
SetJointList$quorum_Libraries_Game_Physics_Joints_JointEdge2D(edge) {
     return this.Libraries_Interface_Item2D__.SetJointList$quorum_Libraries_Game_Physics_Joints_JointEdge2D(edge);
}
GetRawInertia() {
     return this.Libraries_Interface_Item2D__.GetRawInertia();
}
DisposeChildren() {
     return this.Libraries_Interface_Item__.DisposeChildren();
}
DisposeAll() {
     return this.Libraries_Interface_Item__.DisposeAll();
}
GetOriginY() {
     return this.Libraries_Interface_Item2D__.GetOriginY();
}
GetOriginX() {
     return this.Libraries_Interface_Item2D__.GetOriginX();
}
IsUnmovable() {
     return this.Libraries_Interface_Item2D__.IsUnmovable();
}
MoveZ$quorum_number(zAmount) {
     return this.Libraries_Interface_Item2D__.MoveZ$quorum_number(zAmount);
}
SetMouseDownColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetMouseDownColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
SetUnmovable() {
     return this.Libraries_Interface_Item2D__.SetUnmovable();
}
SetUnfocusedSelectionColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetUnfocusedSelectionColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
GetResponsiveness() {
     return this.Libraries_Interface_Item2D__.GetResponsiveness();
}
IsFocused() {
     return this.Libraries_Interface_Item__.IsFocused();
}
SetToDefaultFontSize() {
     return this.Libraries_Interface_Controls_Control__.SetToDefaultFontSize();
}
GetGlowColor() {
     return this.Libraries_Interface_Controls_Control__.GetGlowColor();
}
SetScaleY$quorum_number(scaleY) {
     return this.Libraries_Interface_Item2D__.SetScaleY$quorum_number(scaleY);
}
GetMouseWheelListeners() {
     return this.Libraries_Interface_Item__.GetMouseWheelListeners();
}
GetInputTable() {
     return this.Libraries_Interface_Item__.GetInputTable();
}
SetBorderColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetBorderColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
SetCollideWithChildren$quorum_boolean(flag) {
     return this.Libraries_Interface_Item2D__.SetCollideWithChildren$quorum_boolean(flag);
}
SetSleepTime$quorum_number(time) {
     return this.Libraries_Interface_Item2D__.SetSleepTime$quorum_number(time);
}
SetFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetFontColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
IsClipping() {
     return this.Libraries_Interface_Item2D__.IsClipping();
}
GetWorldPoint$quorum_Libraries_Compute_Vector2(localPoint) {
     return this.Libraries_Interface_Item2D__.GetWorldPoint$quorum_Libraries_Compute_Vector2(localPoint);
}
GetLinearVelocityFromWorldPoint$quorum_Libraries_Compute_Vector2(worldPoint) {
     return this.Libraries_Interface_Item2D__.GetLinearVelocityFromWorldPoint$quorum_Libraries_Compute_Vector2(worldPoint);
}
GetAccessibilityCode() {
     return this.Libraries_Interface_Item__.GetAccessibilityCode();
}
Add$quorum_Libraries_Interface_Item2D(newItem) {
     return this.Libraries_Interface_Controls_Control__.Add$quorum_Libraries_Interface_Item2D(newItem);
}
SetLinearVelocity$quorum_Libraries_Compute_Vector2(linearVelocity) {
     return this.Libraries_Interface_Item2D__.SetLinearVelocity$quorum_Libraries_Compute_Vector2(linearVelocity);
}
SetRightPadding$quorum_number(padding) {
     return this.Libraries_Interface_Controls_Control__.SetRightPadding$quorum_number(padding);
}
Move$quorum_number$quorum_number(xAmount, yAmount) {
     return this.Libraries_Interface_Item2D__.Move$quorum_number$quorum_number(xAmount, yAmount);
}
Scale$quorum_number(amount) {
     return this.Libraries_Interface_Item2D__.Scale$quorum_number(amount);
}
AddBehavior$quorum_Libraries_Interface_Behaviors_Behavior(behavior) {
     return this.Libraries_Interface_Item__.AddBehavior$quorum_Libraries_Interface_Behaviors_Behavior(behavior);
}
SetBottomLeftPixelRounding$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetBottomLeftPixelRounding$quorum_number(value);
}
SetContainerGridWidth$quorum_integer(containerGridWidth) {
     return this.Libraries_Interface_Controls_Control__.SetContainerGridWidth$quorum_integer(containerGridWidth);
}
GetTopLeftRounding() {
     return this.Libraries_Interface_Controls_Control__.GetTopLeftRounding();
}
SetShadowHeight$quorum_number(value) {
     return this.Libraries_Interface_Controls_Control__.SetShadowHeight$quorum_number(value);
}
SetPercentageWidth$quorum_number(width) {
     return this.Libraries_Interface_Controls_Control__.SetPercentageWidth$quorum_number(width);
}
GetGlobalX() {
     return this.Libraries_Interface_Item2D__.GetGlobalX();
}
MoveY$quorum_number(yAmount) {
     return this.Libraries_Interface_Item2D__.MoveY$quorum_number(yAmount);
}
SetCenterX$quorum_number(setX) {
     return this.Libraries_Interface_Item2D__.SetCenterX$quorum_number(setX);
}
SetMouseOverColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetMouseOverColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
GetPixelX() {
     return this.Libraries_Interface_Controls_Control__.GetPixelX();
}
GetPixelY() {
     return this.Libraries_Interface_Controls_Control__.GetPixelY();
}
SetX$quorum_number(setX) {
     return this.Libraries_Interface_Item2D__.SetX$quorum_number(setX);
}
SetToHugeFont() {
     return this.Libraries_Interface_Controls_Control__.SetToHugeFont();
}
SetAccessibilityRoleDescription$quorum_text(newRoleDescription) {
     return this.Libraries_Interface_Item__.SetAccessibilityRoleDescription$quorum_text(newRoleDescription);
}
AreChildrenProcessingMouseEvents() {
     return this.Libraries_Interface_Item2D__.AreChildrenProcessingMouseEvents();
}
CopyAndActivateInputTable$quorum_text(name) {
     return this.Libraries_Interface_Controls_Control__.CopyAndActivateInputTable$quorum_text(name);
}
SetPosition$quorum_number$quorum_number$quorum_number(setX, setY, setZ) {
     return this.Libraries_Interface_Item2D__.SetPosition$quorum_number$quorum_number$quorum_number(setX, setY, setZ);
}
GetTorque() {
     return this.Libraries_Interface_Item2D__.GetTorque();
}
GetFontSize() {
     return this.Libraries_Interface_Controls_Control__.GetFontSize();
}
IsFastMoving() {
     return this.Libraries_Interface_Item2D__.IsFastMoving();
}
SetPercentageOriginX$quorum_number(x) {
     return this.Libraries_Interface_Controls_Control__.SetPercentageOriginX$quorum_number(x);
}
SetPixelHeight$quorum_number(height) {
     return this.Libraries_Interface_Controls_Control__.SetPixelHeight$quorum_number(height);
}
GetLayout() {
     return this.Libraries_Interface_Controls_Control__.GetLayout();
}
GetFocusColor() {
     return this.Libraries_Interface_Controls_Control__.GetFocusColor();
}
GetVerticalLayoutMode() {
     return this.Libraries_Interface_Controls_Control__.GetVerticalLayoutMode();
}
SetToTinyFont() {
     return this.Libraries_Interface_Controls_Control__.SetToTinyFont();
}
SetPreviousFocus$quorum_Libraries_Interface_Item(previous) {
     return this.Libraries_Interface_Item__.SetPreviousFocus$quorum_Libraries_Interface_Item(previous);
}
BeginCollision$quorum_Libraries_Interface_Item(item) {
     return this.Libraries_Interface_Item__.BeginCollision$quorum_Libraries_Interface_Item(item);
}
GetSelectionColor() {
     return this.Libraries_Interface_Controls_Control__.GetSelectionColor();
}
Scale$quorum_number$quorum_number(xAmount, yAmount) {
     return this.Libraries_Interface_Item2D__.Scale$quorum_number$quorum_number(xAmount, yAmount);
}
Remove$quorum_Libraries_Interface_Item2D(item) {
     return this.Libraries_Interface_Controls_Control__.Remove$quorum_Libraries_Interface_Item2D(item);
}
GetPopupMenu() {
     return this.Libraries_Interface_Controls_Control__.GetPopupMenu();
}
SetZ$quorum_number(setZ) {
     return this.Libraries_Interface_Item2D__.SetZ$quorum_number(setZ);
}
SetColorProperty$quorum_text$quorum_Libraries_Game_Graphics_ColorGroup(property, value) {
     return this.Libraries_Interface_Controls_Control__.SetColorProperty$quorum_text$quorum_Libraries_Game_Graphics_ColorGroup(property, value);
}
SetSelectionColor$quorum_Libraries_Game_Graphics_ColorGroup(value) {
     return this.Libraries_Interface_Controls_Control__.SetSelectionColor$quorum_Libraries_Game_Graphics_ColorGroup(value);
}
SetPercentageY$quorum_number(y) {
     return this.Libraries_Interface_Controls_Control__.SetPercentageY$quorum_number(y);
}
SetResponsiveness$quorum_integer(type) {
     return this.Libraries_Interface_Item2D__.SetResponsiveness$quorum_integer(type);
}
IsAccessibleParent() {
return true;
};
Get_Libraries_Interface_Item__manager_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__manager_();
};
Set_Libraries_Interface_Item__manager_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__manager_(value);
};
Get_Libraries_Interface_Item__visible_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__visible_();
};
Set_Libraries_Interface_Item__visible_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__visible_(value);
};
Get_Libraries_Interface_Item__RADIO_BUTTON_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__RADIO_BUTTON_();
};
Set_Libraries_Interface_Item__RADIO_BUTTON_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__RADIO_BUTTON_(value);
};
Get_Libraries_Interface_Item__accessibilityRoleDescription_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__accessibilityRoleDescription_();
};
Set_Libraries_Interface_Item__accessibilityRoleDescription_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__accessibilityRoleDescription_(value);
};
Get_Libraries_Interface_Item__BUTTON_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__BUTTON_();
};
Set_Libraries_Interface_Item__BUTTON_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__BUTTON_(value);
};
Get_Libraries_Interface_Item__TOGGLE_BUTTON_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TOGGLE_BUTTON_();
};
Set_Libraries_Interface_Item__TOGGLE_BUTTON_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TOGGLE_BUTTON_(value);
};
Get_Libraries_Interface_Item__TABLE_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TABLE_();
};
Set_Libraries_Interface_Item__TABLE_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TABLE_(value);
};
Get_Libraries_Interface_Item__CELL_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__CELL_();
};
Set_Libraries_Interface_Item__CELL_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__CELL_(value);
};
Get_Libraries_Interface_Item__CHART_SECTION_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__CHART_SECTION_();
};
Set_Libraries_Interface_Item__CHART_SECTION_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__CHART_SECTION_(value);
};
Get_Libraries_Interface_Item__nextFocus_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__nextFocus_();
};
Set_Libraries_Interface_Item__nextFocus_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__nextFocus_(value);
};
Get_Libraries_Interface_Item__description_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__description_();
};
Set_Libraries_Interface_Item__description_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__description_(value);
};
Get_Libraries_Interface_Item__behaviors_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__behaviors_();
};
Set_Libraries_Interface_Item__behaviors_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__behaviors_(value);
};
Get_Libraries_Interface_Item__LIST_ITEM_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__LIST_ITEM_();
};
Set_Libraries_Interface_Item__LIST_ITEM_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__LIST_ITEM_(value);
};
Get_Libraries_Interface_Item__PANE_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__PANE_();
};
Set_Libraries_Interface_Item__PANE_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__PANE_(value);
};
Get_Libraries_Interface_Item__mouseWheelListeners_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__mouseWheelListeners_();
};
Set_Libraries_Interface_Item__mouseWheelListeners_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__mouseWheelListeners_(value);
};
Get_Libraries_Interface_Item__TREE_TABLE_CELL_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TREE_TABLE_CELL_();
};
Set_Libraries_Interface_Item__TREE_TABLE_CELL_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TREE_TABLE_CELL_(value);
};
Get_Libraries_Interface_Item__MENU_BAR_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__MENU_BAR_();
};
Set_Libraries_Interface_Item__MENU_BAR_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__MENU_BAR_(value);
};
Get_Libraries_Interface_Item__TREE_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TREE_();
};
Set_Libraries_Interface_Item__TREE_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TREE_(value);
};
Get_Libraries_Interface_Item__CUSTOM_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__CUSTOM_();
};
Set_Libraries_Interface_Item__CUSTOM_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__CUSTOM_(value);
};
Get_Libraries_Interface_Item__TAB_PANE_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TAB_PANE_();
};
Set_Libraries_Interface_Item__TAB_PANE_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TAB_PANE_(value);
};
Get_Libraries_Interface_Item__properties_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__properties_();
};
Set_Libraries_Interface_Item__properties_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__properties_(value);
};
Get_Libraries_Interface_Item__DIALOG_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__DIALOG_();
};
Set_Libraries_Interface_Item__DIALOG_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__DIALOG_(value);
};
Get_Libraries_Interface_Item__MENU_ITEM_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__MENU_ITEM_();
};
Set_Libraries_Interface_Item__MENU_ITEM_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__MENU_ITEM_(value);
};
Get_Libraries_Interface_Item__mouseMoveListeners_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__mouseMoveListeners_();
};
Set_Libraries_Interface_Item__mouseMoveListeners_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__mouseMoveListeners_(value);
};
Get_Libraries_Interface_Item__TEXTBOX_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TEXTBOX_();
};
Set_Libraries_Interface_Item__TEXTBOX_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TEXTBOX_(value);
};
Get_Libraries_Interface_Item__PROGRESS_BAR_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__PROGRESS_BAR_();
};
Set_Libraries_Interface_Item__PROGRESS_BAR_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__PROGRESS_BAR_(value);
};
Get_Libraries_Interface_Item__accessibilityCode_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__accessibilityCode_();
};
Set_Libraries_Interface_Item__accessibilityCode_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__accessibilityCode_(value);
};
Get_Libraries_Interface_Item__ITEM_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__ITEM_();
};
Set_Libraries_Interface_Item__ITEM_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__ITEM_(value);
};
Get_Libraries_Interface_Item__TEXT_FIELD_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TEXT_FIELD_();
};
Set_Libraries_Interface_Item__TEXT_FIELD_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TEXT_FIELD_(value);
};
Get_Libraries_Interface_Item__TREE_ITEM_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TREE_ITEM_();
};
Set_Libraries_Interface_Item__TREE_ITEM_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TREE_ITEM_(value);
};
Get_Libraries_Interface_Item__touchListeners_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__touchListeners_();
};
Set_Libraries_Interface_Item__touchListeners_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__touchListeners_(value);
};
Get_Libraries_Interface_Item__CHECKBOX_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__CHECKBOX_();
};
Set_Libraries_Interface_Item__CHECKBOX_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__CHECKBOX_(value);
};
Get_Libraries_Interface_Item__TAB_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TAB_();
};
Set_Libraries_Interface_Item__TAB_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TAB_(value);
};
Get_Libraries_Interface_Item__acceptsMouseInput_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__acceptsMouseInput_();
};
Set_Libraries_Interface_Item__acceptsMouseInput_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__acceptsMouseInput_(value);
};
Get_Libraries_Interface_Item__name_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__name_();
};
Set_Libraries_Interface_Item__name_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__name_(value);
};
Get_Libraries_Interface_Item__LIST_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__LIST_();
};
Set_Libraries_Interface_Item__LIST_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__LIST_(value);
};
Get_Libraries_Interface_Item__mouseListeners_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__mouseListeners_();
};
Set_Libraries_Interface_Item__mouseListeners_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__mouseListeners_(value);
};
Get_Libraries_Interface_Item__focusable_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__focusable_();
};
Set_Libraries_Interface_Item__focusable_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__focusable_(value);
};
Get_Libraries_Interface_Item__GROUP_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__GROUP_();
};
Set_Libraries_Interface_Item__GROUP_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__GROUP_(value);
};
Get_Libraries_Interface_Item__gestureListeners_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__gestureListeners_();
};
Set_Libraries_Interface_Item__gestureListeners_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__gestureListeners_(value);
};
Get_Libraries_Interface_Item__NOT_ACCESSIBLE_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__NOT_ACCESSIBLE_();
};
Set_Libraries_Interface_Item__NOT_ACCESSIBLE_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__NOT_ACCESSIBLE_(value);
};
Get_Libraries_Interface_Item__LABEL_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__LABEL_();
};
Set_Libraries_Interface_Item__LABEL_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__LABEL_(value);
};
Get_Libraries_Interface_Item__inputGroup_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__inputGroup_();
};
Set_Libraries_Interface_Item__inputGroup_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__inputGroup_(value);
};
Get_Libraries_Interface_Item__TOOLBAR_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TOOLBAR_();
};
Set_Libraries_Interface_Item__TOOLBAR_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TOOLBAR_(value);
};
Get_Libraries_Interface_Item__TREE_TABLE_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__TREE_TABLE_();
};
Set_Libraries_Interface_Item__TREE_TABLE_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__TREE_TABLE_(value);
};
Get_Libraries_Interface_Item__previousFocus_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__previousFocus_();
};
Set_Libraries_Interface_Item__previousFocus_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__previousFocus_(value);
};
Get_Libraries_Interface_Item__CHART_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__CHART_();
};
Set_Libraries_Interface_Item__CHART_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__CHART_(value);
};
Get_Libraries_Interface_Item__CHART_ITEM_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__CHART_ITEM_();
};
Set_Libraries_Interface_Item__CHART_ITEM_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__CHART_ITEM_(value);
};
Get_Libraries_Interface_Item__POPUP_MENU_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__POPUP_MENU_();
};
Set_Libraries_Interface_Item__POPUP_MENU_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__POPUP_MENU_(value);
};
Get_Libraries_Interface_Item__focusListeners_() {
   return this.Libraries_Interface_Item__.Get_Libraries_Interface_Item__focusListeners_();
};
Set_Libraries_Interface_Item__focusListeners_(value) {
   this.Libraries_Interface_Item__.Set_Libraries_Interface_Item__focusListeners_(value);
};
Get_Libraries_Interface_Controls_Control__renderMouseDown_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__renderMouseDown_();
};
Set_Libraries_Interface_Controls_Control__renderMouseDown_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__renderMouseDown_(value);
};
Get_Libraries_Interface_Controls_Control__listeners_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__listeners_();
};
Set_Libraries_Interface_Controls_Control__listeners_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__listeners_(value);
};
Get_Libraries_Interface_Controls_Control__contextMenu_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__contextMenu_();
};
Set_Libraries_Interface_Controls_Control__contextMenu_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__contextMenu_(value);
};
Get_Libraries_Interface_Controls_Control__renderMouseOver_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__renderMouseOver_();
};
Set_Libraries_Interface_Controls_Control__renderMouseOver_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__renderMouseOver_(value);
};
Get_Libraries_Interface_Controls_Control__FILL_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__FILL_();
};
Set_Libraries_Interface_Controls_Control__FILL_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__FILL_(value);
};
Get_Libraries_Interface_Controls_Control__needsLayout_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__needsLayout_();
};
Set_Libraries_Interface_Controls_Control__needsLayout_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__needsLayout_(value);
};
Get_Libraries_Interface_Controls_Control__currentProperties_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__currentProperties_();
};
Set_Libraries_Interface_Controls_Control__currentProperties_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__currentProperties_(value);
};
Get_Libraries_Interface_Controls_Control__defaultProperties_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__defaultProperties_();
};
Set_Libraries_Interface_Controls_Control__defaultProperties_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__defaultProperties_(value);
};
Get_Libraries_Interface_Controls_Control__FIT_FONT_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__FIT_FONT_();
};
Set_Libraries_Interface_Controls_Control__FIT_FONT_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__FIT_FONT_(value);
};
Get_Libraries_Interface_Controls_Control__renderSelected_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__renderSelected_();
};
Set_Libraries_Interface_Controls_Control__renderSelected_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__renderSelected_(value);
};
Get_Libraries_Interface_Controls_Control__FIT_CONTENTS_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__FIT_CONTENTS_();
};
Set_Libraries_Interface_Controls_Control__FIT_CONTENTS_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__FIT_CONTENTS_(value);
};
Get_Libraries_Interface_Controls_Control__layout_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__layout_();
};
Set_Libraries_Interface_Controls_Control__layout_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__layout_(value);
};
Get_Libraries_Interface_Controls_Control__selectionListeners_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__selectionListeners_();
};
Set_Libraries_Interface_Controls_Control__selectionListeners_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__selectionListeners_(value);
};
Get_Libraries_Interface_Controls_Control__STANDARD_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__STANDARD_();
};
Set_Libraries_Interface_Controls_Control__STANDARD_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__STANDARD_(value);
};
Get_Libraries_Interface_Controls_Control__layoutProperties_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__layoutProperties_();
};
Set_Libraries_Interface_Controls_Control__layoutProperties_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__layoutProperties_(value);
};
Get_Libraries_Interface_Controls_Control__MAINTAIN_ASPECT_RATIO_() {
   return this.Libraries_Interface_Controls_Control__.Get_Libraries_Interface_Controls_Control__MAINTAIN_ASPECT_RATIO_();
};
Set_Libraries_Interface_Controls_Control__MAINTAIN_ASPECT_RATIO_(value) {
   this.Libraries_Interface_Controls_Control__.Set_Libraries_Interface_Controls_Control__MAINTAIN_ASPECT_RATIO_(value);
};
Get_Libraries_Interface_Item2D__position_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__position_();
};
Set_Libraries_Interface_Item2D__position_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__position_(value);
};
Get_Libraries_Interface_Item2D__scale_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__scale_();
};
Set_Libraries_Interface_Item2D__scale_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__scale_(value);
};
Get_Libraries_Interface_Item2D__workVector2B_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__workVector2B_();
};
Set_Libraries_Interface_Item2D__workVector2B_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__workVector2B_(value);
};
Get_Libraries_Interface_Item2D__manager_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__manager_();
};
Set_Libraries_Interface_Item2D__manager_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__manager_(value);
};
Get_Libraries_Interface_Item2D__workVector2A_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__workVector2A_();
};
Set_Libraries_Interface_Item2D__workVector2A_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__workVector2A_(value);
};
Get_Libraries_Interface_Item2D__jointList_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__jointList_();
};
Set_Libraries_Interface_Item2D__jointList_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__jointList_(value);
};
Get_Libraries_Interface_Item2D__updateTransform_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__updateTransform_();
};
Set_Libraries_Interface_Item2D__updateTransform_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__updateTransform_(value);
};
Get_Libraries_Interface_Item2D__children_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__children_();
};
Set_Libraries_Interface_Item2D__children_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__children_(value);
};
Get_Libraries_Interface_Item2D__childrenProcessingMouseEvents_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__childrenProcessingMouseEvents_();
};
Set_Libraries_Interface_Item2D__childrenProcessingMouseEvents_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__childrenProcessingMouseEvents_(value);
};
Get_Libraries_Interface_Item2D__hasMoved_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__hasMoved_();
};
Set_Libraries_Interface_Item2D__hasMoved_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__hasMoved_(value);
};
Get_Libraries_Interface_Item2D__visualView_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__visualView_();
};
Set_Libraries_Interface_Item2D__visualView_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__visualView_(value);
};
Get_Libraries_Interface_Item2D__widthSet_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__widthSet_();
};
Set_Libraries_Interface_Item2D__widthSet_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__widthSet_(value);
};
Get_Libraries_Interface_Item2D__transform_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__transform_();
};
Set_Libraries_Interface_Item2D__transform_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__transform_(value);
};
Get_Libraries_Interface_Item2D__physicsEnabled_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__physicsEnabled_();
};
Set_Libraries_Interface_Item2D__physicsEnabled_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__physicsEnabled_(value);
};
Get_Libraries_Interface_Item2D__layerSet_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__layerSet_();
};
Set_Libraries_Interface_Item2D__layerSet_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__layerSet_(value);
};
Get_Libraries_Interface_Item2D__rotation_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__rotation_();
};
Set_Libraries_Interface_Item2D__rotation_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__rotation_(value);
};
Get_Libraries_Interface_Item2D__dimensions_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__dimensions_();
};
Set_Libraries_Interface_Item2D__dimensions_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__dimensions_(value);
};
Get_Libraries_Interface_Item2D__collideWithChildren_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__collideWithChildren_();
};
Set_Libraries_Interface_Item2D__collideWithChildren_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__collideWithChildren_(value);
};
Get_Libraries_Interface_Item2D__offset_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__offset_();
};
Set_Libraries_Interface_Item2D__offset_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__offset_(value);
};
Get_Libraries_Interface_Item2D__nodeCount_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__nodeCount_();
};
Set_Libraries_Interface_Item2D__nodeCount_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__nodeCount_(value);
};
Get_Libraries_Interface_Item2D__transform0_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__transform0_();
};
Set_Libraries_Interface_Item2D__transform0_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__transform0_(value);
};
Get_Libraries_Interface_Item2D__scaleOffset_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__scaleOffset_();
};
Set_Libraries_Interface_Item2D__scaleOffset_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__scaleOffset_(value);
};
Get_Libraries_Interface_Item2D__nodesSet_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__nodesSet_();
};
Set_Libraries_Interface_Item2D__nodesSet_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__nodesSet_(value);
};
Get_Libraries_Interface_Item2D__workVector3_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__workVector3_();
};
Set_Libraries_Interface_Item2D__workVector3_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__workVector3_(value);
};
Get_Libraries_Interface_Item2D__origin_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__origin_();
};
Set_Libraries_Interface_Item2D__origin_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__origin_(value);
};
Get_Libraries_Interface_Item2D__layer_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__layer_();
};
Set_Libraries_Interface_Item2D__layer_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__layer_(value);
};
Get_Libraries_Interface_Item2D__isCustomDrawing_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__isCustomDrawing_();
};
Set_Libraries_Interface_Item2D__isCustomDrawing_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__isCustomDrawing_(value);
};
Get_Libraries_Interface_Item2D__shape_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__shape_();
};
Set_Libraries_Interface_Item2D__shape_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__shape_(value);
};
Get_Libraries_Interface_Item2D__properties_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__properties_();
};
Set_Libraries_Interface_Item2D__properties_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__properties_(value);
};
Get_Libraries_Interface_Item2D__shouldTriggerSimulation_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__shouldTriggerSimulation_();
};
Set_Libraries_Interface_Item2D__shouldTriggerSimulation_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__shouldTriggerSimulation_(value);
};
Get_Libraries_Interface_Item2D__sweep_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__sweep_();
};
Set_Libraries_Interface_Item2D__sweep_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__sweep_(value);
};
Get_Libraries_Interface_Item2D__isResizing_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__isResizing_();
};
Set_Libraries_Interface_Item2D__isResizing_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__isResizing_(value);
};
Get_Libraries_Interface_Item2D__collidable_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__collidable_();
};
Set_Libraries_Interface_Item2D__collidable_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__collidable_(value);
};
Get_Libraries_Interface_Item2D__bounds_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__bounds_();
};
Set_Libraries_Interface_Item2D__bounds_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__bounds_(value);
};
Get_Libraries_Interface_Item2D__nodes_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__nodes_();
};
Set_Libraries_Interface_Item2D__nodes_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__nodes_(value);
};
Get_Libraries_Interface_Item2D__flipX_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__flipX_();
};
Set_Libraries_Interface_Item2D__flipX_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__flipX_(value);
};
Get_Libraries_Interface_Item2D__synchronizeNodesTempPosition_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__synchronizeNodesTempPosition_();
};
Set_Libraries_Interface_Item2D__synchronizeNodesTempPosition_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__synchronizeNodesTempPosition_(value);
};
Get_Libraries_Interface_Item2D__collisionList_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__collisionList_();
};
Set_Libraries_Interface_Item2D__collisionList_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__collisionList_(value);
};
Get_Libraries_Interface_Item2D__heightSet_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__heightSet_();
};
Set_Libraries_Interface_Item2D__heightSet_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__heightSet_(value);
};
Get_Libraries_Interface_Item2D__PHYSICS_ERROR_MESSAGE_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__PHYSICS_ERROR_MESSAGE_();
};
Set_Libraries_Interface_Item2D__PHYSICS_ERROR_MESSAGE_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__PHYSICS_ERROR_MESSAGE_(value);
};
Get_Libraries_Interface_Item2D__parentItem_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__parentItem_();
};
Set_Libraries_Interface_Item2D__parentItem_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__parentItem_(value);
};
Get_Libraries_Interface_Item2D__clipPixels_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__clipPixels_();
};
Set_Libraries_Interface_Item2D__clipPixels_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__clipPixels_(value);
};
Get_Libraries_Interface_Item2D__z_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__z_();
};
Set_Libraries_Interface_Item2D__z_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__z_(value);
};
Get_Libraries_Interface_Item2D__flipY_() {
   return this.Libraries_Interface_Item2D__.Get_Libraries_Interface_Item2D__flipY_();
};
Set_Libraries_Interface_Item2D__flipY_(value) {
   this.Libraries_Interface_Item2D__.Set_Libraries_Interface_Item2D__flipY_(value);
};

constructor(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Interface.Item', 'Libraries.Interface.Controls.Control', 'Libraries.Interface.Item2D', 'Libraries.Language.Object',  'WebEditor.WebControlPanel'];
this.Libraries_Interface_Item__ = null;
this.Libraries_Interface_Controls_Control__ = null;
this.Libraries_Interface_Item2D__ = null;
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

if(parents == null) {
this.Libraries_Interface_Item2D__.constructor_();
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;
}

};


var quorum_WebEditor_Behaviors_WebEditorLongPressBehavior_ = class {
Update$quorum_number(seconds) {
     return this.Libraries_Interface_Behaviors_Behavior__.Update$quorum_number(seconds);
}
Compare$quorum_Libraries_Language_Object(object) {
return global_Object_Compare(this.prototype, object);
}
SetRunOnUpdate$quorum_boolean(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
Dispose() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
IsFinished() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
IsRunningOnUpdate() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
Equals$quorum_Libraries_Language_Object(object) {
return global_Object_Equals(this.prototype, object);
}
GetHashCode() {
return global_Object_GetHashCode(this.prototype, );
}
HasBeenRun() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
SetHasRunFlag$quorum_boolean(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
Run$quorum_Libraries_Interface_Events_BehaviorEvent(event) {
if ((event.GetGestureEvent() != null)) {
var gesture = event.GetGestureEvent();
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
if (this.prototype.IsInBlockEditor$quorum_Libraries_Interface_Item(manager.GetFocus())) {
event.SetItem$quorum_Libraries_Interface_Item(manager.GetFocus());
var newLineBehavior = new quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorNewLineBehavior_();
newLineBehavior.Run$quorum_Libraries_Interface_Events_BehaviorEvent(event);
}
else if( global_InstanceOf(manager.GetFocus(),'Libraries.Interface.Controls.Blocks.Palette.BlockPaletteItem')) {
event.SetItem$quorum_Libraries_Interface_Item(manager.GetFocus());
var controlBehavior = new quorum_Libraries_Interface_Behaviors_Controls_ControlActivationBehavior_();
}
else { 
event.SetItem$quorum_Libraries_Interface_Item(manager.GetFocus());
var controlBehavior = new quorum_Libraries_Interface_Behaviors_Controls_ControlActivationBehavior_();
}
}
};
IsInPalette$quorum_Libraries_Interface_Item(item) {
while (!((item == null))) {
if (global_InstanceOf(item,'Libraries.Interface.Controls.Blocks.Palette.BlockPalette')) {
return true;
}
else { 
item = item.GetAccessibleParent();
}
}
return false;
};
IsInBlockEditor$quorum_Libraries_Interface_Item(item) {
while (!((item == null))) {
if (global_InstanceOf(item,'Libraries.Interface.Controls.Blocks.CodeEditor')) {
return true;
}
else { 
item = item.GetAccessibleParent();
}
}
return false;
};
Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};

constructor(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.WebEditorLongPressBehavior'];
this.Libraries_Interface_Behaviors_Behavior__ = null;
if(parents == null) {
   this.Libraries_Interface_Behaviors_Behavior__ = new quorum_Libraries_Interface_Behaviors_Behavior_(false);
   this.Libraries_Interface_Behaviors_Behavior__.prototype = this;
}

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;
}

};


var quorum_WebEditor_Behaviors_ShowHelpModalBehavior_ = class {
Update$quorum_number(seconds) {
     return this.Libraries_Interface_Behaviors_Behavior__.Update$quorum_number(seconds);
}
Compare$quorum_Libraries_Language_Object(object) {
return global_Object_Compare(this.prototype, object);
}
SetRunOnUpdate$quorum_boolean(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
Dispose() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
IsFinished() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
IsRunningOnUpdate() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
Equals$quorum_Libraries_Language_Object(object) {
return global_Object_Equals(this.prototype, object);
}
GetHashCode() {
return global_Object_GetHashCode(this.prototype, );
}
HasBeenRun() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
SetHasRunFlag$quorum_boolean(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
Run$quorum_Libraries_Interface_Events_BehaviorEvent(event) {
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
var editor = global_CheckCast(manager.GetGame(), "WebEditor.BlockEditor");
editor.ShowHelpModal();
};
Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};

constructor(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.ShowHelpModalBehavior'];
this.Libraries_Interface_Behaviors_Behavior__ = null;
if(parents == null) {
   this.Libraries_Interface_Behaviors_Behavior__ = new quorum_Libraries_Interface_Behaviors_Behavior_(false);
   this.Libraries_Interface_Behaviors_Behavior__.prototype = this;
}

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;
}

};


var quorum_WebEditor_Behaviors_TogglePaletteBehavior_ = class {
Update$quorum_number(seconds) {
     return this.Libraries_Interface_Behaviors_Behavior__.Update$quorum_number(seconds);
}
Compare$quorum_Libraries_Language_Object(object) {
return global_Object_Compare(this.prototype, object);
}
SetRunOnUpdate$quorum_boolean(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
Dispose() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
IsFinished() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
IsRunningOnUpdate() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
Equals$quorum_Libraries_Language_Object(object) {
return global_Object_Equals(this.prototype, object);
}
GetHashCode() {
return global_Object_GetHashCode(this.prototype, );
}
HasBeenRun() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
SetHasRunFlag$quorum_boolean(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
Run$quorum_Libraries_Interface_Events_BehaviorEvent(event) {
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
var editor = global_CheckCast(manager.GetGame(), "WebEditor.BlockEditor");
var status = editor.TogglePalette();
editor.UpdateTogglePaletteButton$quorum_boolean(status);
};
Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};

constructor(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.TogglePaletteBehavior'];
this.Libraries_Interface_Behaviors_Behavior__ = null;
if(parents == null) {
   this.Libraries_Interface_Behaviors_Behavior__ = new quorum_Libraries_Interface_Behaviors_Behavior_(false);
   this.Libraries_Interface_Behaviors_Behavior__.prototype = this;
}

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;
}

};


var quorum_WebEditor_Behaviors_FocusEditorItemBehavior_ = class {
Update$quorum_number(seconds) {
     return this.Libraries_Interface_Behaviors_Behavior__.Update$quorum_number(seconds);
}
Compare$quorum_Libraries_Language_Object(object) {
return global_Object_Compare(this.prototype, object);
}
SetRunOnUpdate$quorum_boolean(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
Dispose() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
IsFinished() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
IsRunningOnUpdate() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
Equals$quorum_Libraries_Language_Object(object) {
return global_Object_Equals(this.prototype, object);
}
GetHashCode() {
return global_Object_GetHashCode(this.prototype, );
}
HasBeenRun() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
SetHasRunFlag$quorum_boolean(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
Run$quorum_Libraries_Interface_Events_BehaviorEvent(event) {
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
SetPaletteItem$quorum_WebEditor_EditorItem(item) {
this.paletteItem = item;
};
SetBlocksItem$quorum_WebEditor_EditorItem(item) {
this.blocksItem = item;
};
Get_WebEditor_Behaviors_FocusEditorItemBehavior__blocksItem_() {
   return this.blocksItem;
};
Set_WebEditor_Behaviors_FocusEditorItemBehavior__blocksItem_(value) {
   this.blocksItem = value;
};
Get_WebEditor_Behaviors_FocusEditorItemBehavior__paletteItem_() {
   return this.paletteItem;
};
Set_WebEditor_Behaviors_FocusEditorItemBehavior__paletteItem_(value) {
   this.paletteItem = value;
};
Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};

constructor(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.FocusEditorItemBehavior'];
this.Libraries_Interface_Behaviors_Behavior__ = null;
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
}

};


var quorum_WebEditor_Behaviors_PalettePartitionDragBehavior_ = class {
Update$quorum_number(seconds) {
     return this.Libraries_Interface_Behaviors_Behavior__.Update$quorum_number(seconds);
}
Compare$quorum_Libraries_Language_Object(object) {
return global_Object_Compare(this.prototype, object);
}
SetRunOnUpdate$quorum_boolean(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
Dispose() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
IsFinished() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
IsRunningOnUpdate() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
Equals$quorum_Libraries_Language_Object(object) {
return global_Object_Equals(this.prototype, object);
}
GetHashCode() {
return global_Object_GetHashCode(this.prototype, );
}
HasBeenRun() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
SetHasRunFlag$quorum_boolean(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
Run$quorum_Libraries_Interface_Events_BehaviorEvent(event) {
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
SetPanel$quorum_Libraries_Interface_Controls_Control(panel) {
this.panel = panel;
};
Get_WebEditor_Behaviors_PalettePartitionDragBehavior__panel_() {
   return this.panel;
};
Set_WebEditor_Behaviors_PalettePartitionDragBehavior__panel_(value) {
   this.panel = value;
};
Get_WebEditor_Behaviors_PalettePartitionDragBehavior__manager_() {
   return this.manager;
};
Set_WebEditor_Behaviors_PalettePartitionDragBehavior__manager_(value) {
   this.manager = value;
};
Get_WebEditor_Behaviors_PalettePartitionDragBehavior__clickOffset_() {
   return this.clickOffset;
};
Set_WebEditor_Behaviors_PalettePartitionDragBehavior__clickOffset_(value) {
   this.clickOffset = value;
};
Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};

constructor(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.PalettePartitionDragBehavior'];
this.Libraries_Interface_Behaviors_Behavior__ = null;
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
}

};


var quorum_WebEditor_Behaviors_RunGameBehavior_ = class {
Update$quorum_number(seconds) {
     return this.Libraries_Interface_Behaviors_Behavior__.Update$quorum_number(seconds);
}
Compare$quorum_Libraries_Language_Object(object) {
return global_Object_Compare(this.prototype, object);
}
SetRunOnUpdate$quorum_boolean(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
Dispose() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
IsFinished() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
IsRunningOnUpdate() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
Equals$quorum_Libraries_Language_Object(object) {
return global_Object_Equals(this.prototype, object);
}
GetHashCode() {
return global_Object_GetHashCode(this.prototype, );
}
HasBeenRun() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
SetHasRunFlag$quorum_boolean(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
Run$quorum_Libraries_Interface_Events_BehaviorEvent(event) {
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
var editor = global_CheckCast(manager.GetGame(), "WebEditor.BlockEditor");
editor.RunGame();
};
Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};

constructor(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.RunGameBehavior'];
this.Libraries_Interface_Behaviors_Behavior__ = null;
if(parents == null) {
   this.Libraries_Interface_Behaviors_Behavior__ = new quorum_Libraries_Interface_Behaviors_Behavior_(false);
   this.Libraries_Interface_Behaviors_Behavior__.prototype = this;
}

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;
}

};


var quorum_WebEditor_Behaviors_FocusPaletteBehavior_ = class {
Update$quorum_number(seconds) {
     return this.Libraries_Interface_Behaviors_Behavior__.Update$quorum_number(seconds);
}
Compare$quorum_Libraries_Language_Object(object) {
return global_Object_Compare(this.prototype, object);
}
SetRunOnUpdate$quorum_boolean(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
Dispose() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
IsFinished() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
IsRunningOnUpdate() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
Equals$quorum_Libraries_Language_Object(object) {
return global_Object_Equals(this.prototype, object);
}
GetHashCode() {
return global_Object_GetHashCode(this.prototype, );
}
HasBeenRun() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
SetHasRunFlag$quorum_boolean(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
Run$quorum_Libraries_Interface_Events_BehaviorEvent(event) {
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
var editor = global_CheckCast(manager.GetGame(), "WebEditor.BlockEditor");
if (editor.IsPaletteShowing()) {
editor.SetFocus$quorum_Libraries_Interface_Item(editor.GetBlockPalette());
}
};
Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};

constructor(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.FocusPaletteBehavior'];
this.Libraries_Interface_Behaviors_Behavior__ = null;
if(parents == null) {
   this.Libraries_Interface_Behaviors_Behavior__ = new quorum_Libraries_Interface_Behaviors_Behavior_(false);
   this.Libraries_Interface_Behaviors_Behavior__.prototype = this;
}

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;
}

};


var quorum_WebEditor_Behaviors_StopGameBehavior_ = class {
Update$quorum_number(seconds) {
     return this.Libraries_Interface_Behaviors_Behavior__.Update$quorum_number(seconds);
}
Compare$quorum_Libraries_Language_Object(object) {
return global_Object_Compare(this.prototype, object);
}
SetRunOnUpdate$quorum_boolean(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
Dispose() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
IsFinished() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
IsRunningOnUpdate() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
Equals$quorum_Libraries_Language_Object(object) {
return global_Object_Equals(this.prototype, object);
}
GetHashCode() {
return global_Object_GetHashCode(this.prototype, );
}
HasBeenRun() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
SetHasRunFlag$quorum_boolean(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
Run$quorum_Libraries_Interface_Events_BehaviorEvent(event) {
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
var editor = global_CheckCast(manager.GetGame(), "WebEditor.BlockEditor");
editor.StopGame();
};
Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};

constructor(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.StopGameBehavior'];
this.Libraries_Interface_Behaviors_Behavior__ = null;
if(parents == null) {
   this.Libraries_Interface_Behaviors_Behavior__ = new quorum_Libraries_Interface_Behaviors_Behavior_(false);
   this.Libraries_Interface_Behaviors_Behavior__.prototype = this;
}

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;
}

};


var quorum_WebEditor_Behaviors_WebEditorDoubleTapBehavior_ = class {
Update$quorum_number(seconds) {
     return this.Libraries_Interface_Behaviors_Behavior__.Update$quorum_number(seconds);
}
Compare$quorum_Libraries_Language_Object(object) {
return global_Object_Compare(this.prototype, object);
}
SetRunOnUpdate$quorum_boolean(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
Dispose() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
IsFinished() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
IsRunningOnUpdate() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
Equals$quorum_Libraries_Language_Object(object) {
return global_Object_Equals(this.prototype, object);
}
GetHashCode() {
return global_Object_GetHashCode(this.prototype, );
}
HasBeenRun() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
SetHasRunFlag$quorum_boolean(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
Run$quorum_Libraries_Interface_Events_BehaviorEvent(event) {
if ((event.GetGestureEvent() != null)) {
var gesture = event.GetGestureEvent();
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
if (this.prototype.IsInBlockEditor$quorum_Libraries_Interface_Item(manager.GetFocus())) {
var editor = global_CheckCast(manager.GetGame(), "WebEditor.BlockEditor");
var blocks = editor.GetBlockEditor();
if (!blocks.IsKeyboardMovingBlocks()) {
var focused = manager.GetFocus();
if (global_InstanceOf(focused,'Libraries.Interface.Controls.Blocks.CodeEditor')) {
event.SetItem$quorum_Libraries_Interface_Item(blocks.GetSelectedBlocks().Get$quorum_integer(0));
}
else if( global_InstanceOf(focused,'Libraries.Interface.Controls.Blocks.Block')) {
event.SetItem$quorum_Libraries_Interface_Item(focused);
}
else { 
event.SetItem$quorum_Libraries_Interface_Item(focused);
}
var pickUpBehavior = new quorum_Libraries_Interface_Behaviors_Blocks_BlockPickUpBehavior_();
pickUpBehavior.Run$quorum_Libraries_Interface_Events_BehaviorEvent(event);
}
else { 
blocks.CancelKeyboardMovingBlocks();
}
}
else { 
event.SetItem$quorum_Libraries_Interface_Item(manager.GetFocus());
var controlBehavior = new quorum_Libraries_Interface_Behaviors_Controls_ControlActivationBehavior_();
controlBehavior.Run$quorum_Libraries_Interface_Events_BehaviorEvent(event);
}
}
};
IsInPalette$quorum_Libraries_Interface_Item(item) {
while (!((item == null))) {
if (global_InstanceOf(item,'Libraries.Interface.Controls.Blocks.Palette.BlockPalette')) {
return true;
}
else { 
item = item.GetAccessibleParent();
}
}
return false;
};
IsInBlockEditor$quorum_Libraries_Interface_Item(item) {
while (!((item == null))) {
if (global_InstanceOf(item,'Libraries.Interface.Controls.Blocks.CodeEditor')) {
return true;
}
else { 
item = item.GetAccessibleParent();
}
}
return false;
};
Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};

constructor(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.WebEditorDoubleTapBehavior'];
this.Libraries_Interface_Behaviors_Behavior__ = null;
if(parents == null) {
   this.Libraries_Interface_Behaviors_Behavior__ = new quorum_Libraries_Interface_Behaviors_Behavior_(false);
   this.Libraries_Interface_Behaviors_Behavior__.prototype = this;
}

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;
}

};


var quorum_WebEditor_CanvasResizeListener_ = class {
Equals$quorum_Libraries_Language_Object(object) {
return global_Object_Equals(this.prototype, object);
}
GetHashCode() {
return global_Object_GetHashCode(this.prototype, );
}
Compare$quorum_Libraries_Language_Object(object) {
return global_Object_Compare(this.prototype, object);
}
SizeChanged$quorum_Libraries_Interface_Events_ResizeEvent(event) {
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
ResizeControls$quorum_text(mediaSize) {
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
AddPanel$quorum_Libraries_Interface_Controls_Control(control) {
this.Get_WebEditor_CanvasResizeListener__editorPanels_().AddToEnd$quorum_Libraries_Language_Object(control);
};
MatchMediaQuery$quorum_integer(width) {
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
Get_WebEditor_CanvasResizeListener__X2_LARGE_() {
   return this.X2_LARGE;
};
Set_WebEditor_CanvasResizeListener__X2_LARGE_(value) {
   this.X2_LARGE = value;
};
Get_WebEditor_CanvasResizeListener__LARGE_() {
   return this.LARGE;
};
Set_WebEditor_CanvasResizeListener__LARGE_(value) {
   this.LARGE = value;
};
Get_WebEditor_CanvasResizeListener__SMALL_() {
   return this.SMALL;
};
Set_WebEditor_CanvasResizeListener__SMALL_(value) {
   this.SMALL = value;
};
Get_WebEditor_CanvasResizeListener__MEDIUM_() {
   return this.MEDIUM;
};
Set_WebEditor_CanvasResizeListener__MEDIUM_(value) {
   this.MEDIUM = value;
};
Get_WebEditor_CanvasResizeListener__SM_() {
   return this.SM;
};
Set_WebEditor_CanvasResizeListener__SM_(value) {
   this.SM = value;
};
Get_WebEditor_CanvasResizeListener__X_LARGE_() {
   return this.X_LARGE;
};
Set_WebEditor_CanvasResizeListener__X_LARGE_(value) {
   this.X_LARGE = value;
};
Get_WebEditor_CanvasResizeListener__X2L_() {
   return this.X2L;
};
Set_WebEditor_CanvasResizeListener__X2L_(value) {
   this.X2L = value;
};
Get_WebEditor_CanvasResizeListener__editorPanels_() {
   return this.editorPanels;
};
Set_WebEditor_CanvasResizeListener__editorPanels_(value) {
   this.editorPanels = value;
};
Get_WebEditor_CanvasResizeListener__MD_() {
   return this.MD;
};
Set_WebEditor_CanvasResizeListener__MD_(value) {
   this.MD = value;
};
Get_WebEditor_CanvasResizeListener__LG_() {
   return this.LG;
};
Set_WebEditor_CanvasResizeListener__LG_(value) {
   this.LG = value;
};
Get_WebEditor_CanvasResizeListener__XL_() {
   return this.XL;
};
Set_WebEditor_CanvasResizeListener__XL_(value) {
   this.XL = value;
};

constructor(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Events.ResizeListener',  'WebEditor.CanvasResizeListener'];
this.Libraries_Interface_Events_ResizeListener__ = null;
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
}

};


var quorum_WebEditor_Behaviors_WebEditorSwipeBehavior_ = class {
Update$quorum_number(seconds) {
     return this.Libraries_Interface_Behaviors_Behavior__.Update$quorum_number(seconds);
}
Compare$quorum_Libraries_Language_Object(object) {
return global_Object_Compare(this.prototype, object);
}
SetRunOnUpdate$quorum_boolean(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
Dispose() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
IsFinished() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
IsRunningOnUpdate() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
Equals$quorum_Libraries_Language_Object(object) {
return global_Object_Equals(this.prototype, object);
}
GetHashCode() {
return global_Object_GetHashCode(this.prototype, );
}
HasBeenRun() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
SetHasRunFlag$quorum_boolean(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
Run$quorum_Libraries_Interface_Events_BehaviorEvent(event) {
if ((event.GetGestureEvent() != null)) {
var gesture = event.GetGestureEvent();
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
if ((((gesture.Get_Libraries_Interface_Events_GestureEvent__maxFingerCount_() == 2) && (gesture.GetDirection() == gesture.Get_Libraries_Interface_Events_GestureEvent__RIGHT_())) && !this.prototype.IsInBlockEditor$quorum_Libraries_Interface_Item(manager.GetFocus()))) {
var editor = global_CheckCast(manager.GetGame(), "WebEditor.BlockEditor");
editor.SetFocus$quorum_Libraries_Interface_Item(editor.GetBlockEditor());
return;
}
if ((((gesture.Get_Libraries_Interface_Events_GestureEvent__maxFingerCount_() == 2) && (gesture.GetDirection() == gesture.Get_Libraries_Interface_Events_GestureEvent__UP_())) && this.prototype.IsInBlockEditor$quorum_Libraries_Interface_Item(manager.GetFocus()))) {
event.SetItem$quorum_Libraries_Interface_Item(manager.GetFocus());
var gotoStartBehavior = new quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorNavigateToStartBehavior_();
gotoStartBehavior.Run$quorum_Libraries_Interface_Events_BehaviorEvent(event);
return;
}
if ((((gesture.Get_Libraries_Interface_Events_GestureEvent__maxFingerCount_() == 2) && (gesture.GetDirection() == gesture.Get_Libraries_Interface_Events_GestureEvent__DOWN_())) && this.prototype.IsInBlockEditor$quorum_Libraries_Interface_Item(manager.GetFocus()))) {
event.SetItem$quorum_Libraries_Interface_Item(manager.GetFocus());
var gotoEndBehavior = new quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorNavigateToEndBehavior_();
gotoEndBehavior.Run$quorum_Libraries_Interface_Events_BehaviorEvent(event);
return;
}
if ((((gesture.Get_Libraries_Interface_Events_GestureEvent__maxFingerCount_() == 2) && (gesture.GetDirection() == gesture.Get_Libraries_Interface_Events_GestureEvent__LEFT_())) && !this.prototype.IsInPalette$quorum_Libraries_Interface_Item(manager.GetFocus()))) {
var editor = global_CheckCast(manager.GetGame(), "WebEditor.BlockEditor");
if (editor.IsPaletteShowing()) {
editor.SetFocus$quorum_Libraries_Interface_Item(editor.GetBlockPalette());
}
return;
}
if ((gesture.Get_Libraries_Interface_Events_GestureEvent__maxFingerCount_() == 3)) {
if (this.prototype.IsInBlockEditor$quorum_Libraries_Interface_Item(manager.GetFocus())) {
if (((gesture.GetDirection() == gesture.Get_Libraries_Interface_Events_GestureEvent__LEFT_()) || (gesture.GetDirection() == gesture.Get_Libraries_Interface_Events_GestureEvent__RIGHT_()))) {
var editor = global_CheckCast(manager.GetGame(), "WebEditor.BlockEditor");
var blocks = editor.GetBlockEditor();
if (!blocks.IsKeyboardMovingBlocks()) {
event.SetItem$quorum_Libraries_Interface_Item(manager.GetFocus());
var freeformBehavior = new quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorFreeformEditingBehavior_();
freeformBehavior.SetForceEditing$quorum_boolean(true);
freeformBehavior.Run$quorum_Libraries_Interface_Events_BehaviorEvent(event);
return;
}
}
else if( (gesture.GetDirection() == gesture.Get_Libraries_Interface_Events_GestureEvent__UP_())) {
var editor = global_CheckCast(manager.GetGame(), "WebEditor.BlockEditor");
var blocks = editor.GetBlockEditor();
if (!blocks.IsKeyboardMovingBlocks()) {
event.SetItem$quorum_Libraries_Interface_Item(manager.GetFocus());
var redo = new quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorRedoBehavior_();
redo.Run$quorum_Libraries_Interface_Events_BehaviorEvent(event);
return;
}
}
else if( (gesture.GetDirection() == gesture.Get_Libraries_Interface_Events_GestureEvent__DOWN_())) {
var editor = global_CheckCast(manager.GetGame(), "WebEditor.BlockEditor");
var blocks = editor.GetBlockEditor();
if (!blocks.IsKeyboardMovingBlocks()) {
event.SetItem$quorum_Libraries_Interface_Item(manager.GetFocus());
var undo = new quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorUndoBehavior_();
undo.Run$quorum_Libraries_Interface_Events_BehaviorEvent(event);
return;
}
}
}
}
if (this.prototype.IsInBlockEditor$quorum_Libraries_Interface_Item(manager.GetFocus())) {
var editor = global_CheckCast(manager.GetGame(), "WebEditor.BlockEditor");
var blocks = editor.GetBlockEditor();
event.SetItem$quorum_Libraries_Interface_Item(manager.GetFocus());
if ((gesture.GetDirection() == gesture.Get_Libraries_Interface_Events_GestureEvent__LEFT_())) {
if (blocks.IsKeyboardMovingBlocks()) {
blocks.CancelKeyboardMovingBlocks();
}
else { 
var previous = new quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorSelectPreviousBehavior_();
previous.Run$quorum_Libraries_Interface_Events_BehaviorEvent(event);
}
}
else if( (gesture.GetDirection() == gesture.Get_Libraries_Interface_Events_GestureEvent__RIGHT_())) {
if (blocks.IsKeyboardMovingBlocks()) {
blocks.ConfirmKeyboardMovingBlocks();
}
else { 
var next = new quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorSelectNextBehavior_();
next.Run$quorum_Libraries_Interface_Events_BehaviorEvent(event);
}
}
else if( (gesture.GetDirection() == gesture.Get_Libraries_Interface_Events_GestureEvent__UP_())) {
event.SetItem$quorum_Libraries_Interface_Item(blocks);
var up = new quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorSelectionUpBehavior_();
up.Run$quorum_Libraries_Interface_Events_BehaviorEvent(event);
}
else if( (gesture.GetDirection() == gesture.Get_Libraries_Interface_Events_GestureEvent__DOWN_())) {
event.SetItem$quorum_Libraries_Interface_Item(blocks);
var down = new quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorSelectionDownBehavior_();
down.Run$quorum_Libraries_Interface_Events_BehaviorEvent(event);
}
}
else { 
event.SetItem$quorum_Libraries_Interface_Item(manager.GetFocus());
if (((gesture.GetDirection() == gesture.Get_Libraries_Interface_Events_GestureEvent__LEFT_()) || (gesture.GetDirection() == gesture.Get_Libraries_Interface_Events_GestureEvent__UP_()))) {
var prevBehavior = new quorum_Libraries_Interface_Behaviors_FocusPreviousBehavior_();
prevBehavior.Run$quorum_Libraries_Interface_Events_BehaviorEvent(event);
}
else if( ((gesture.GetDirection() == gesture.Get_Libraries_Interface_Events_GestureEvent__RIGHT_()) || (gesture.GetDirection() == gesture.Get_Libraries_Interface_Events_GestureEvent__DOWN_()))) {
var nextBehavior = new quorum_Libraries_Interface_Behaviors_FocusNextBehavior_();
nextBehavior.Run$quorum_Libraries_Interface_Events_BehaviorEvent(event);
}
}
}
};
IsInPalette$quorum_Libraries_Interface_Item(item) {
while (!((item == null))) {
if (global_InstanceOf(item,'Libraries.Interface.Controls.Blocks.Palette.BlockPalette')) {
return true;
}
else { 
item = item.GetAccessibleParent();
}
}
return false;
};
IsInBlockEditor$quorum_Libraries_Interface_Item(item) {
while (!((item == null))) {
if (global_InstanceOf(item,'Libraries.Interface.Controls.Blocks.CodeEditor')) {
return true;
}
else { 
item = item.GetAccessibleParent();
}
}
return false;
};
Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};

constructor(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.WebEditorSwipeBehavior'];
this.Libraries_Interface_Behaviors_Behavior__ = null;
if(parents == null) {
   this.Libraries_Interface_Behaviors_Behavior__ = new quorum_Libraries_Interface_Behaviors_Behavior_(false);
   this.Libraries_Interface_Behaviors_Behavior__.prototype = this;
}

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;
}

};


var quorum_WebEditor_Behaviors_ZoomBehavior_ = class {
Update$quorum_number(seconds) {
     return this.Libraries_Interface_Behaviors_Behavior__.Update$quorum_number(seconds);
}
Compare$quorum_Libraries_Language_Object(object) {
return global_Object_Compare(this.prototype, object);
}
SetRunOnUpdate$quorum_boolean(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
Dispose() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
IsFinished() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
IsRunningOnUpdate() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
Equals$quorum_Libraries_Language_Object(object) {
return global_Object_Equals(this.prototype, object);
}
GetHashCode() {
return global_Object_GetHashCode(this.prototype, );
}
HasBeenRun() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
SetHasRunFlag$quorum_boolean(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
SetToZoomIn() {
this.zoomIn = true;
};
SetToZoomOut() {
this.zoomIn = false;
};
Run$quorum_Libraries_Interface_Events_BehaviorEvent(event) {
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
var editor = global_CheckCast(manager.GetGame(), "WebEditor.BlockEditor");
if (this.Get_WebEditor_Behaviors_ZoomBehavior__zoomIn_()) {
editor.ScaleUp();
}
else { 
editor.ScaleDown();
}
};
Get_WebEditor_Behaviors_ZoomBehavior__zoomIn_() {
   return this.zoomIn;
};
Set_WebEditor_Behaviors_ZoomBehavior__zoomIn_(value) {
   this.zoomIn = value;
};
Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};

constructor(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.ZoomBehavior'];
this.Libraries_Interface_Behaviors_Behavior__ = null;
if(parents == null) {
   this.Libraries_Interface_Behaviors_Behavior__ = new quorum_Libraries_Interface_Behaviors_Behavior_(false);
   this.Libraries_Interface_Behaviors_Behavior__.prototype = this;
}
this.zoomIn = true;

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;
}

};


var quorum_WebEditor_Behaviors_EditorItemFocusPrevious_ = class {
Update$quorum_number(seconds) {
     return this.Libraries_Interface_Behaviors_Behavior__.Update$quorum_number(seconds);
}
Compare$quorum_Libraries_Language_Object(object) {
return global_Object_Compare(this.prototype, object);
}
SetRunOnUpdate$quorum_boolean(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
Dispose() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
IsFinished() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
IsRunningOnUpdate() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
Equals$quorum_Libraries_Language_Object(object) {
return global_Object_Equals(this.prototype, object);
}
GetHashCode() {
return global_Object_GetHashCode(this.prototype, );
}
HasBeenRun() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
SetHasRunFlag$quorum_boolean(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
Run$quorum_Libraries_Interface_Events_BehaviorEvent(event) {
if (global_InstanceOf(event.GetItem(),'WebEditor.EditorItem')) {
var editorItem = global_CheckCast(event.GetItem(), "WebEditor.EditorItem");
editorItem.GetPreviousFocus().Focus();
}
};
Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};

constructor(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.EditorItemFocusPrevious'];
this.Libraries_Interface_Behaviors_Behavior__ = null;
if(parents == null) {
   this.Libraries_Interface_Behaviors_Behavior__ = new quorum_Libraries_Interface_Behaviors_Behavior_(false);
   this.Libraries_Interface_Behaviors_Behavior__.prototype = this;
}

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;
}

};


var quorum_Libraries_Interface_Controls_Blocks_BlockSelectionListener_ = class {
Equals$quorum_Libraries_Language_Object(object) {
return global_Object_Equals(this.prototype, object);
}
GetHashCode() {
return global_Object_GetHashCode(this.prototype, );
}
Compare$quorum_Libraries_Language_Object(object) {
return global_Object_Compare(this.prototype, object);
}
SelectionChanged$quorum_Libraries_Interface_Events_SelectionEvent(event) {
var selection = event.GetSelection();
if ((selection != null)) {
var blockSelection = global_CheckCast(selection, "Libraries.Interface.Selections.CodeEditorSelection");
var block = blockSelection.GetBlock();
if ((block != null)) {
}
}
};

constructor(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Interface.Events.SelectionListener', 'Libraries.Language.Object',  'Libraries.Interface.Controls.Blocks.BlockSelectionListener'];
this.Libraries_Interface_Events_SelectionListener__ = null;
if(parents == null) {
   this.Libraries_Interface_Events_SelectionListener__ = new quorum_Libraries_Interface_Events_SelectionListener_(false);
   this.Libraries_Interface_Events_SelectionListener__.prototype = this;
}

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;
}

};


var quorum_WebEditor_Behaviors_EditorItemFocusNext_ = class {
Update$quorum_number(seconds) {
     return this.Libraries_Interface_Behaviors_Behavior__.Update$quorum_number(seconds);
}
Compare$quorum_Libraries_Language_Object(object) {
return global_Object_Compare(this.prototype, object);
}
SetRunOnUpdate$quorum_boolean(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
Dispose() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
IsFinished() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
IsRunningOnUpdate() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
Equals$quorum_Libraries_Language_Object(object) {
return global_Object_Equals(this.prototype, object);
}
GetHashCode() {
return global_Object_GetHashCode(this.prototype, );
}
HasBeenRun() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
SetHasRunFlag$quorum_boolean(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
Run$quorum_Libraries_Interface_Events_BehaviorEvent(event) {
if (global_InstanceOf(event.GetItem(),'WebEditor.EditorItem')) {
var editorItem = global_CheckCast(event.GetItem(), "WebEditor.EditorItem");
editorItem.GetNextFocus().Focus();
}
};
Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};

constructor(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.EditorItemFocusNext'];
this.Libraries_Interface_Behaviors_Behavior__ = null;
if(parents == null) {
   this.Libraries_Interface_Behaviors_Behavior__ = new quorum_Libraries_Interface_Behaviors_Behavior_(false);
   this.Libraries_Interface_Behaviors_Behavior__.prototype = this;
}

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;
}

};


var quorum_WebEditor_Behaviors_WebEditorPanBehavior_ = class {
Update$quorum_number(seconds) {
     return this.Libraries_Interface_Behaviors_Behavior__.Update$quorum_number(seconds);
}
Compare$quorum_Libraries_Language_Object(object) {
return global_Object_Compare(this.prototype, object);
}
SetRunOnUpdate$quorum_boolean(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
Dispose() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
IsFinished() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
IsRunningOnUpdate() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
Equals$quorum_Libraries_Language_Object(object) {
return global_Object_Equals(this.prototype, object);
}
GetHashCode() {
return global_Object_GetHashCode(this.prototype, );
}
HasBeenRun() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
SetHasRunFlag$quorum_boolean(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
Run$quorum_Libraries_Interface_Events_BehaviorEvent(event) {
if ((event.GetGestureEvent() != null)) {
var gesture = event.GetGestureEvent();
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
var gameInput = global_CheckCast(manager.GetInput(), "Libraries.Game.StandardInput");
var layer = manager.GetGame().GetCurrentLayer2D();
var counter = layer.GetSize();
var temp = null;
var result = null;
var pointVector = layer.GetCamera().ScreenToWorldCoordinates$quorum_number$quorum_number(gesture.GetX() * 1.0, gesture.GetY() * 1.0);
while ((counter > 0)) {
counter = (counter - 1);
temp = layer.Get$quorum_integer(counter).GetItemAt$quorum_number$quorum_number(pointVector.GetX(), pointVector.GetY());
if ((temp != null)) {
result = temp;
}
}
if (((gesture.Get_Libraries_Interface_Events_GestureEvent__timingCode_() == gesture.Get_Libraries_Interface_Events_GestureEvent__BEGIN_()) && (result != null))) {
this.Get_WebEditor_Behaviors_WebEditorPanBehavior__dragEvent_().Set$quorum_integer$quorum_integer$quorum_integer$quorum_integer$quorum_integer$quorum_integer$quorum_integer$quorum_Libraries_Interface_Item$quorum_Libraries_Interface_Item(this.Get_WebEditor_Behaviors_WebEditorPanBehavior__dragEvent_().Get_Libraries_Interface_Events_DragAndDropEvent__DRAGGING_BEGAN_(), gesture.GetX(), gesture.GetY(), gesture.GetX(), gesture.GetY(), 0, 0, result, null);
}
else if( (gesture.Get_Libraries_Interface_Events_GestureEvent__timingCode_() == gesture.Get_Libraries_Interface_Events_GestureEvent__CONTINUE_())) {
if ((this.Get_WebEditor_Behaviors_WebEditorPanBehavior__startedDrag_() == false)) {
gameInput.ProcessDragEvent$quorum_Libraries_Interface_Events_DragAndDropEvent(this.Get_WebEditor_Behaviors_WebEditorPanBehavior__dragEvent_());
this.startedDrag = true;
}
this.Get_WebEditor_Behaviors_WebEditorPanBehavior__dragEvent_().Set$quorum_integer$quorum_integer$quorum_integer$quorum_integer$quorum_integer$quorum_integer$quorum_integer$quorum_Libraries_Interface_Item$quorum_Libraries_Interface_Item(this.Get_WebEditor_Behaviors_WebEditorPanBehavior__dragEvent_().Get_Libraries_Interface_Events_DragAndDropEvent__DRAGGING_CONTINUED_(), this.Get_WebEditor_Behaviors_WebEditorPanBehavior__dragEvent_().GetStartX(), this.Get_WebEditor_Behaviors_WebEditorPanBehavior__dragEvent_().GetStartY(), gesture.GetX(), gesture.GetY(), (gesture.GetX() - this.Get_WebEditor_Behaviors_WebEditorPanBehavior__dragEvent_().GetX()), (gesture.GetY() - this.Get_WebEditor_Behaviors_WebEditorPanBehavior__dragEvent_().GetY()), this.Get_WebEditor_Behaviors_WebEditorPanBehavior__dragEvent_().GetSource(), this.Get_WebEditor_Behaviors_WebEditorPanBehavior__dragEvent_().GetDestination());
gameInput.ProcessDragEvent$quorum_Libraries_Interface_Events_DragAndDropEvent(this.Get_WebEditor_Behaviors_WebEditorPanBehavior__dragEvent_());
}
else if( (gesture.Get_Libraries_Interface_Events_GestureEvent__timingCode_() == gesture.Get_Libraries_Interface_Events_GestureEvent__FINISH_())) {
this.Get_WebEditor_Behaviors_WebEditorPanBehavior__dragEvent_().Set$quorum_integer$quorum_integer$quorum_integer$quorum_integer$quorum_integer$quorum_integer$quorum_integer$quorum_Libraries_Interface_Item$quorum_Libraries_Interface_Item(this.Get_WebEditor_Behaviors_WebEditorPanBehavior__dragEvent_().Get_Libraries_Interface_Events_DragAndDropEvent__DROPPED_(), this.Get_WebEditor_Behaviors_WebEditorPanBehavior__dragEvent_().GetStartX(), this.Get_WebEditor_Behaviors_WebEditorPanBehavior__dragEvent_().GetStartY(), gesture.GetX(), gesture.GetY(), 0, 0, this.Get_WebEditor_Behaviors_WebEditorPanBehavior__dragEvent_().GetSource(), this.Get_WebEditor_Behaviors_WebEditorPanBehavior__dragEvent_().GetDestination());
gameInput.ProcessDragEvent$quorum_Libraries_Interface_Events_DragAndDropEvent(this.Get_WebEditor_Behaviors_WebEditorPanBehavior__dragEvent_());
this.startedDrag = false;
this.Get_WebEditor_Behaviors_WebEditorPanBehavior__dragEvent_().Set$quorum_integer$quorum_integer$quorum_integer$quorum_integer$quorum_integer$quorum_integer$quorum_integer$quorum_Libraries_Interface_Item$quorum_Libraries_Interface_Item(-1, 0, 0, 0, 0, 0, 0, null, null);
}
}
};
IsInPalette$quorum_Libraries_Interface_Item(item) {
while (!((item == null))) {
if (global_InstanceOf(item,'Libraries.Interface.Controls.Blocks.Palette.BlockPalette')) {
return true;
}
else { 
item = item.GetAccessibleParent();
}
}
return false;
};
IsInBlockEditor$quorum_Libraries_Interface_Item(item) {
while (!((item == null))) {
if (global_InstanceOf(item,'Libraries.Interface.Controls.Blocks.CodeEditor')) {
return true;
}
else { 
item = item.GetAccessibleParent();
}
}
return false;
};
Get_WebEditor_Behaviors_WebEditorPanBehavior__dragEvent_() {
   return this.dragEvent;
};
Set_WebEditor_Behaviors_WebEditorPanBehavior__dragEvent_(value) {
   this.dragEvent = value;
};
Get_WebEditor_Behaviors_WebEditorPanBehavior__startedDrag_() {
   return this.startedDrag;
};
Set_WebEditor_Behaviors_WebEditorPanBehavior__startedDrag_(value) {
   this.startedDrag = value;
};
Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};

constructor(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.WebEditorPanBehavior'];
this.Libraries_Interface_Behaviors_Behavior__ = null;
if(parents == null) {
   this.Libraries_Interface_Behaviors_Behavior__ = new quorum_Libraries_Interface_Behaviors_Behavior_(false);
   this.Libraries_Interface_Behaviors_Behavior__.prototype = this;
}
this.dragEvent = new quorum_Libraries_Interface_Events_DragAndDropEvent_();
this.startedDrag = false;

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;
}

};


var quorum_WebEditor_Behaviors_EditorItemFocusTargetBehavior_ = class {
Update$quorum_number(seconds) {
     return this.Libraries_Interface_Behaviors_Behavior__.Update$quorum_number(seconds);
}
Compare$quorum_Libraries_Language_Object(object) {
return global_Object_Compare(this.prototype, object);
}
SetRunOnUpdate$quorum_boolean(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
Dispose() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
IsFinished() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
IsRunningOnUpdate() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
Equals$quorum_Libraries_Language_Object(object) {
return global_Object_Equals(this.prototype, object);
}
GetHashCode() {
return global_Object_GetHashCode(this.prototype, );
}
HasBeenRun() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
SetHasRunFlag$quorum_boolean(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
Run$quorum_Libraries_Interface_Events_BehaviorEvent(event) {
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
Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};

constructor(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.Behaviors.EditorItemFocusTargetBehavior'];
this.Libraries_Interface_Behaviors_Behavior__ = null;
if(parents == null) {
   this.Libraries_Interface_Behaviors_Behavior__ = new quorum_Libraries_Interface_Behaviors_Behavior_(false);
   this.Libraries_Interface_Behaviors_Behavior__.prototype = this;
}

if(parents == null) {
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;
}

};

var OuTpUt_$tRiNg_ = "";

var quorum_WebEditor_BlockEditor_ = class {
IsWindowFocused() {
     return this.Libraries_Game_Game__.IsWindowFocused();
}
SaveScene$quorum_Libraries_System_File(file) {
     return this.Libraries_Game_Game__.SaveScene$quorum_Libraries_System_File(file);
}
ProcessScreenshots() {
     return this.Libraries_Game_Game__.ProcessScreenshots();
}
IsWindowMinimized() {
     return this.Libraries_Game_Game__.IsWindowMinimized();
}
SetVSync$quorum_boolean(vSync) {
     return this.Libraries_Game_Game__.SetVSync$quorum_boolean(vSync);
}
ResetDepthBuffer() {
     return this.Libraries_Game_Game__.ResetDepthBuffer();
}
FindItem2DByName$quorum_text(name) {
     return this.Libraries_Game_Game__.FindItem2DByName$quorum_text(name);
}
RemoveResizeListener$quorum_Libraries_Interface_Events_ResizeListener(listener) {
     return this.Libraries_Game_Game__.RemoveResizeListener$quorum_Libraries_Interface_Events_ResizeListener(listener);
}
GetInterfaceOptions() {
     return this.Libraries_Game_Game__.GetInterfaceOptions();
}
AddGestureListener$quorum_Libraries_Interface_Events_GestureListener(listener) {
     return this.Libraries_Game_Game__.AddGestureListener$quorum_Libraries_Interface_Events_GestureListener(listener);
}
RemoveMouseWheelListener$quorum_Libraries_Interface_Events_MouseWheelListener(listener) {
     return this.Libraries_Game_Game__.RemoveMouseWheelListener$quorum_Libraries_Interface_Events_MouseWheelListener(listener);
}
SetLayout$quorum_Libraries_Interface_Layouts_Layout(layout) {
     return this.Libraries_Game_Game__.SetLayout$quorum_Libraries_Interface_Layouts_Layout(layout);
}
RemoveControlActivationListener$quorum_Libraries_Interface_Events_ControlActivationListener(listener) {
     return this.Libraries_Game_Game__.RemoveControlActivationListener$quorum_Libraries_Interface_Events_ControlActivationListener(listener);
}
GetPointLights() {
     return this.Libraries_Game_Game__.GetPointLights();
}
RemoveKeyboardListener$quorum_Libraries_Interface_Events_KeyboardListener(listener) {
     return this.Libraries_Game_Game__.RemoveKeyboardListener$quorum_Libraries_Interface_Events_KeyboardListener(listener);
}
IsWindowMaximized() {
     return this.Libraries_Game_Game__.IsWindowMaximized();
}
AddLayer$quorum_integer$quorum_Libraries_Game_Layer(index, layer) {
     return this.Libraries_Game_Game__.AddLayer$quorum_integer$quorum_Libraries_Game_Layer(index, layer);
}
AddMouseListener$quorum_Libraries_Interface_Events_MouseListener(listener) {
     return this.Libraries_Game_Game__.AddMouseListener$quorum_Libraries_Interface_Events_MouseListener(listener);
}
AddTextInputListener$quorum_Libraries_Interface_Events_TextInputListener(listener) {
     return this.Libraries_Game_Game__.AddTextInputListener$quorum_Libraries_Interface_Events_TextInputListener(listener);
}
UpdateAll() {
     return this.Libraries_Game_Game__.UpdateAll();
}
RemoveLayer$quorum_integer(index) {
     return this.Libraries_Game_Game__.RemoveLayer$quorum_integer(index);
}
SetInterfaceScale$quorum_number(scale) {
     return this.Libraries_Game_Game__.SetInterfaceScale$quorum_number(scale);
}
SetLayer$quorum_integer$quorum_Libraries_Game_Layer(index, layer) {
     return this.Libraries_Game_Game__.SetLayer$quorum_integer$quorum_Libraries_Game_Layer(index, layer);
}
IsFinished() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsFinished();
}
RemoveMouseListener$quorum_Libraries_Interface_Events_MouseListener(listener) {
     return this.Libraries_Game_Game__.RemoveMouseListener$quorum_Libraries_Interface_Events_MouseListener(listener);
}
GetSceneManager() {
     return this.Libraries_Game_Game__.GetSceneManager();
}
Screenshot$quorum_Libraries_Interface_Events_ScreenshotListener(callback) {
     return this.Libraries_Game_Game__.Screenshot$quorum_Libraries_Interface_Events_ScreenshotListener(callback);
}
AddCollisionListener$quorum_Libraries_Interface_Events_CollisionListener2D(listener) {
     return this.Libraries_Game_Game__.AddCollisionListener$quorum_Libraries_Interface_Events_CollisionListener2D(listener);
}
Screenshot$quorum_integer$quorum_integer$quorum_integer$quorum_integer$quorum_Libraries_Interface_Events_ScreenshotListener(x, y, width, height, callback) {
     return this.Libraries_Game_Game__.Screenshot$quorum_integer$quorum_integer$quorum_integer$quorum_integer$quorum_Libraries_Interface_Events_ScreenshotListener(x, y, width, height, callback);
}
AddMouseMovementListener$quorum_Libraries_Interface_Events_MouseMovementListener(listener) {
     return this.Libraries_Game_Game__.AddMouseMovementListener$quorum_Libraries_Interface_Events_MouseMovementListener(listener);
}
TestForCollisions$quorum_number(seconds) {
     return this.Libraries_Game_Game__.TestForCollisions$quorum_number(seconds);
}
GetFocus() {
     return this.Libraries_Game_Game__.GetFocus();
}
GetWebConfiguration() {
     return this.Libraries_Game_Game__.GetWebConfiguration();
}
Remove$quorum_Libraries_Game_Graphics_PointLight(light) {
     return this.Libraries_Game_Game__.Remove$quorum_Libraries_Game_Graphics_PointLight(light);
}
Dispose() {
     return this.Libraries_Interface_Behaviors_Behavior__.Dispose();
}
GetShaderManager() {
     return this.Libraries_Game_Game__.GetShaderManager();
}
GetDesktopConfiguration() {
     return this.Libraries_Game_Game__.GetDesktopConfiguration();
}
RemoveMouseMovementListener$quorum_Libraries_Interface_Events_MouseMovementListener(listener) {
     return this.Libraries_Game_Game__.RemoveMouseMovementListener$quorum_Libraries_Interface_Events_MouseMovementListener(listener);
}
GetHashCode() {
return global_Object_GetHashCode(this.prototype, );
}
GetEditManager() {
     return this.Libraries_Game_Game__.GetEditManager();
}
GetFirstLetterNavigationTime() {
     return this.Libraries_Game_Game__.GetFirstLetterNavigationTime();
}
StartAndroidGame() {
     return this.Libraries_Game_Game__.StartAndroidGame();
}
SetScreenSize$quorum_integer$quorum_integer$quorum_boolean(width, height, adjustCameras) {
     return this.Libraries_Game_Game__.SetScreenSize$quorum_integer$quorum_integer$quorum_boolean(width, height, adjustCameras);
}
CompleteInitialSetup$quorum_Libraries_Game_Application(application) {
     return this.Libraries_Game_Game__.CompleteInitialSetup$quorum_Libraries_Game_Application(application);
}
GetFontManager() {
     return this.Libraries_Game_Game__.GetFontManager();
}
Remove$quorum_Libraries_Game_Graphics_DirectionalLight(light) {
     return this.Libraries_Game_Game__.Remove$quorum_Libraries_Game_Graphics_DirectionalLight(light);
}
AddFocusListener$quorum_Libraries_Interface_Events_FocusListener(listener) {
     return this.Libraries_Game_Game__.AddFocusListener$quorum_Libraries_Interface_Events_FocusListener(listener);
}
DrawAll() {
     return this.Libraries_Game_Game__.DrawAll();
}
GetCamera2D() {
     return this.Libraries_Game_Game__.GetCamera2D();
}
GetInterfaceScale() {
     return this.Libraries_Game_Game__.GetInterfaceScale();
}
SetSimulationThreshold2D$quorum_number(threshold) {
     return this.Libraries_Game_Game__.SetSimulationThreshold2D$quorum_number(threshold);
}
SaveScene() {
     return this.Libraries_Game_Game__.SaveScene();
}
GetDirectionalLight$quorum_integer(index) {
     return this.Libraries_Game_Game__.GetDirectionalLight$quorum_integer(index);
}
Compare$quorum_Libraries_Language_Object(object) {
return global_Object_Compare(this.prototype, object);
}
EnablePhysics2D$quorum_boolean(flag) {
     return this.Libraries_Game_Game__.EnablePhysics2D$quorum_boolean(flag);
}
SetAmbientLight$quorum_Libraries_Game_Graphics_AmbientLight(light) {
     return this.Libraries_Game_Game__.SetAmbientLight$quorum_Libraries_Game_Graphics_AmbientLight(light);
}
RemoveCollisionListener$quorum_Libraries_Interface_Events_CollisionListener2D(listener) {
     return this.Libraries_Game_Game__.RemoveCollisionListener$quorum_Libraries_Interface_Events_CollisionListener2D(listener);
}
SetCurrentLayer2D$quorum_Libraries_Game_Layer2D(layer) {
     return this.Libraries_Game_Game__.SetCurrentLayer2D$quorum_Libraries_Game_Layer2D(layer);
}
SetGameName$quorum_text(name) {
     return this.Libraries_Game_Game__.SetGameName$quorum_text(name);
}
GetAvailableResolutions() {
     return this.Libraries_Game_Game__.GetAvailableResolutions();
}
RemoveScreenshotListener$quorum_Libraries_Interface_Events_ScreenshotListener(listener) {
     return this.Libraries_Game_Game__.RemoveScreenshotListener$quorum_Libraries_Interface_Events_ScreenshotListener(listener);
}
SetGravity2D$quorum_Libraries_Compute_Vector2(gravity) {
     return this.Libraries_Game_Game__.SetGravity2D$quorum_Libraries_Compute_Vector2(gravity);
}
RemoveGestureListener$quorum_Libraries_Interface_Events_GestureListener(listener) {
     return this.Libraries_Game_Game__.RemoveGestureListener$quorum_Libraries_Interface_Events_GestureListener(listener);
}
EnablePhysics3D$quorum_boolean(flag) {
     return this.Libraries_Game_Game__.EnablePhysics3D$quorum_boolean(flag);
}
AddInputTable$quorum_Libraries_Game_InputTable(table) {
     return this.Libraries_Game_Game__.AddInputTable$quorum_Libraries_Game_InputTable(table);
}
GetLayerIterator() {
     return this.Libraries_Game_Game__.GetLayerIterator();
}
UseDesktopResolution$quorum_boolean(adjustCameras) {
     return this.Libraries_Game_Game__.UseDesktopResolution$quorum_boolean(adjustCameras);
}
RemoveWindowFocusListener$quorum_Libraries_Interface_Events_WindowFocusListener(listener) {
     return this.Libraries_Game_Game__.RemoveWindowFocusListener$quorum_Libraries_Interface_Events_WindowFocusListener(listener);
}
Add$quorum_Libraries_Game_Graphics_DirectionalLight(light) {
     return this.Libraries_Game_Game__.Add$quorum_Libraries_Game_Graphics_DirectionalLight(light);
}
Screenshot() {
     return this.Libraries_Game_Game__.Screenshot();
}
GetPointLight$quorum_integer(index) {
     return this.Libraries_Game_Game__.GetPointLight$quorum_integer(index);
}
AddTextChangeListener$quorum_Libraries_Interface_Events_TextChangeListener(listener) {
     return this.Libraries_Game_Game__.AddTextChangeListener$quorum_Libraries_Interface_Events_TextChangeListener(listener);
}
GetScreenWidth() {
     return this.Libraries_Game_Game__.GetScreenWidth();
}
GetCamera3D() {
     return this.Libraries_Game_Game__.GetCamera3D();
}
RemoveTextChangeListener$quorum_Libraries_Interface_Events_TextChangeListener(listener) {
     return this.Libraries_Game_Game__.RemoveTextChangeListener$quorum_Libraries_Interface_Events_TextChangeListener(listener);
}
RemoveAmbientLight() {
     return this.Libraries_Game_Game__.RemoveAmbientLight();
}
SetWindowMinimized$quorum_boolean(minimized) {
     return this.Libraries_Game_Game__.SetWindowMinimized$quorum_boolean(minimized);
}
FindItem3DByName$quorum_text(name) {
     return this.Libraries_Game_Game__.FindItem3DByName$quorum_text(name);
}
RemoveTreeChangeListener$quorum_Libraries_Interface_Events_TreeChangeListener(listener) {
     return this.Libraries_Game_Game__.RemoveTreeChangeListener$quorum_Libraries_Interface_Events_TreeChangeListener(listener);
}
AddControlActivationListener$quorum_Libraries_Interface_Events_ControlActivationListener(listener) {
     return this.Libraries_Game_Game__.AddControlActivationListener$quorum_Libraries_Interface_Events_ControlActivationListener(listener);
}
SetApplicationIcon$quorum_Libraries_System_File(file) {
     return this.Libraries_Game_Game__.SetApplicationIcon$quorum_Libraries_System_File(file);
}
SetRunOnUpdate$quorum_boolean(run) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetRunOnUpdate$quorum_boolean(run);
}
SetScreenSize$quorum_integer$quorum_integer(width, height) {
     return this.Libraries_Game_Game__.SetScreenSize$quorum_integer$quorum_integer(width, height);
}
SetCamera3D$quorum_Libraries_Game_Graphics_Camera(cam) {
     return this.Libraries_Game_Game__.SetCamera3D$quorum_Libraries_Game_Graphics_Camera(cam);
}
RemoveCollisionListener$quorum_Libraries_Interface_Events_CollisionListener3D(listener) {
     return this.Libraries_Game_Game__.RemoveCollisionListener$quorum_Libraries_Interface_Events_CollisionListener3D(listener);
}
SetConfiguration$quorum_Libraries_Game_DesktopConfiguration(config) {
     return this.Libraries_Game_Game__.SetConfiguration$quorum_Libraries_Game_DesktopConfiguration(config);
}
AddLayer$quorum_Libraries_Game_Layer(layer) {
     return this.Libraries_Game_Game__.AddLayer$quorum_Libraries_Game_Layer(layer);
}
AddTouchListener$quorum_Libraries_Interface_Events_TouchListener(listener) {
     return this.Libraries_Game_Game__.AddTouchListener$quorum_Libraries_Interface_Events_TouchListener(listener);
}
HasBeenRun() {
     return this.Libraries_Interface_Behaviors_Behavior__.HasBeenRun();
}
SetDefaultInputTable$quorum_Libraries_Game_InputTable(table) {
     return this.Libraries_Game_Game__.SetDefaultInputTable$quorum_Libraries_Game_InputTable(table);
}
SetScreenResolution$quorum_Libraries_Game_ScreenResolution$quorum_boolean(resolution, adjustCameras) {
     return this.Libraries_Game_Game__.SetScreenResolution$quorum_Libraries_Game_ScreenResolution$quorum_boolean(resolution, adjustCameras);
}
SetSceneManager$quorum_Libraries_Game_Scenes_SceneManager(scene) {
     return this.Libraries_Game_Game__.SetSceneManager$quorum_Libraries_Game_Scenes_SceneManager(scene);
}
Exit() {
     return this.Libraries_Game_Game__.Exit();
}
LoadScene$quorum_Libraries_Game_Scenes_Scene(scene) {
     return this.Libraries_Game_Game__.LoadScene$quorum_Libraries_Game_Scenes_Scene(scene);
}
SetGravity3D$quorum_Libraries_Compute_Vector3(gravity) {
     return this.Libraries_Game_Game__.SetGravity3D$quorum_Libraries_Compute_Vector3(gravity);
}
GetSecondsBetweenFrames() {
     return this.Libraries_Game_Game__.GetSecondsBetweenFrames();
}
RemoveLayer$quorum_Libraries_Game_Layer(layer) {
     return this.Libraries_Game_Game__.RemoveLayer$quorum_Libraries_Game_Layer(layer);
}
AddMenuChangeListener$quorum_Libraries_Interface_Events_MenuChangeListener(listener) {
     return this.Libraries_Game_Game__.AddMenuChangeListener$quorum_Libraries_Interface_Events_MenuChangeListener(listener);
}
ProcessInputEvents() {
     return this.Libraries_Game_Game__.ProcessInputEvents();
}
Remove$quorum_Libraries_Interface_Item3D(item) {
     return this.Libraries_Game_Game__.Remove$quorum_Libraries_Interface_Item3D(item);
}
SetFontManager$quorum_Libraries_Game_Graphics_Fonts_FontManager(fontManager) {
     return this.Libraries_Game_Game__.SetFontManager$quorum_Libraries_Game_Graphics_Fonts_FontManager(fontManager);
}
SetWindowMaximized$quorum_boolean(maximized) {
     return this.Libraries_Game_Game__.SetWindowMaximized$quorum_boolean(maximized);
}
Screenshot$quorum_integer$quorum_integer$quorum_integer$quorum_integer(x, y, width, height) {
     return this.Libraries_Game_Game__.Screenshot$quorum_integer$quorum_integer$quorum_integer$quorum_integer(x, y, width, height);
}
SetColorFilter$quorum_Libraries_Game_Graphics_Color(color) {
     return this.Libraries_Game_Game__.SetColorFilter$quorum_Libraries_Game_Graphics_Color(color);
}
SetScreenResolution$quorum_Libraries_Game_ScreenResolution(resolution) {
     return this.Libraries_Game_Game__.SetScreenResolution$quorum_Libraries_Game_ScreenResolution(resolution);
}
GetAmbientLight() {
     return this.Libraries_Game_Game__.GetAmbientLight();
}
SelectApplicationTypeNative() {
     return this.Libraries_Game_Game__.SelectApplicationTypeNative();
}
AddSelectionListener$quorum_Libraries_Interface_Events_SelectionListener(listener) {
     return this.Libraries_Game_Game__.AddSelectionListener$quorum_Libraries_Interface_Events_SelectionListener(listener);
}
AddMouseWheelListener$quorum_Libraries_Interface_Events_MouseWheelListener(listener) {
     return this.Libraries_Game_Game__.AddMouseWheelListener$quorum_Libraries_Interface_Events_MouseWheelListener(listener);
}
RemoveSelectionListener$quorum_Libraries_Interface_Events_SelectionListener(listener) {
     return this.Libraries_Game_Game__.RemoveSelectionListener$quorum_Libraries_Interface_Events_SelectionListener(listener);
}
SetGravity2D$quorum_number$quorum_number(gravityX, gravityY) {
     return this.Libraries_Game_Game__.SetGravity2D$quorum_number$quorum_number(gravityX, gravityY);
}
RemoveFocusListener$quorum_Libraries_Interface_Events_FocusListener(listener) {
     return this.Libraries_Game_Game__.RemoveFocusListener$quorum_Libraries_Interface_Events_FocusListener(listener);
}
RemoveTouchListener$quorum_Libraries_Interface_Events_TouchListener(listener) {
     return this.Libraries_Game_Game__.RemoveTouchListener$quorum_Libraries_Interface_Events_TouchListener(listener);
}
SetSkybox$quorum_Libraries_Game_Graphics_Skybox(skybox) {
     return this.Libraries_Game_Game__.SetSkybox$quorum_Libraries_Game_Graphics_Skybox(skybox);
}
GetFocusManager() {
     return this.Libraries_Game_Game__.GetFocusManager();
}
EnableResizing$quorum_boolean(resize) {
     return this.Libraries_Game_Game__.EnableResizing$quorum_boolean(resize);
}
Add$quorum_Libraries_Interface_Item2D(item) {
     return this.Libraries_Game_Game__.Add$quorum_Libraries_Interface_Item2D(item);
}
SetEditManager$quorum_Libraries_Interface_Undo_EditManager(edits) {
     return this.Libraries_Game_Game__.SetEditManager$quorum_Libraries_Interface_Undo_EditManager(edits);
}
InitializeLayers() {
     return this.Libraries_Game_Game__.InitializeLayers();
}
GetDefaultInputTable() {
     return this.Libraries_Game_Game__.GetDefaultInputTable();
}
SetInterfaceOptions$quorum_Libraries_Interface_Options_InterfaceOptions(options) {
     return this.Libraries_Game_Game__.SetInterfaceOptions$quorum_Libraries_Interface_Options_InterfaceOptions(options);
}
AddWindowFocusListener$quorum_Libraries_Interface_Events_WindowFocusListener(listener) {
     return this.Libraries_Game_Game__.AddWindowFocusListener$quorum_Libraries_Interface_Events_WindowFocusListener(listener);
}
RemoveTextInputListener$quorum_Libraries_Interface_Events_TextInputListener(listener) {
     return this.Libraries_Game_Game__.RemoveTextInputListener$quorum_Libraries_Interface_Events_TextInputListener(listener);
}
ClearScreen() {
     return this.Libraries_Game_Game__.ClearScreen();
}
GetDirectionalLights() {
     return this.Libraries_Game_Game__.GetDirectionalLights();
}
SetCamera2D$quorum_Libraries_Game_Graphics_Camera(cam) {
     return this.Libraries_Game_Game__.SetCamera2D$quorum_Libraries_Game_Graphics_Camera(cam);
}
SetWebContainerID$quorum_text(id) {
     return this.Libraries_Game_Game__.SetWebContainerID$quorum_text(id);
}
RemoveMenuChangeListener$quorum_Libraries_Interface_Events_MenuChangeListener(listener) {
     return this.Libraries_Game_Game__.RemoveMenuChangeListener$quorum_Libraries_Interface_Events_MenuChangeListener(listener);
}
AddResizeListener$quorum_Libraries_Interface_Events_ResizeListener(listener) {
     return this.Libraries_Game_Game__.AddResizeListener$quorum_Libraries_Interface_Events_ResizeListener(listener);
}
AddTreeChangeListener$quorum_Libraries_Interface_Events_TreeChangeListener(listener) {
     return this.Libraries_Game_Game__.AddTreeChangeListener$quorum_Libraries_Interface_Events_TreeChangeListener(listener);
}
SetFullScreen$quorum_boolean(fullScreen) {
     return this.Libraries_Game_Game__.SetFullScreen$quorum_boolean(fullScreen);
}
SelectApplicationType() {
     return this.Libraries_Game_Game__.SelectApplicationType();
}
EnableTextureAutoResizing$quorum_boolean(resize) {
     return this.Libraries_Game_Game__.EnableTextureAutoResizing$quorum_boolean(resize);
}
GetSimulationThreshold2D() {
     return this.Libraries_Game_Game__.GetSimulationThreshold2D();
}
Run$quorum_Libraries_Interface_Events_BehaviorEvent(event) {
     return this.Libraries_Interface_Behaviors_Behavior__.Run$quorum_Libraries_Interface_Events_BehaviorEvent(event);
}
GetDesktopResolution() {
     return this.Libraries_Game_Game__.GetDesktopResolution();
}
SetFirstLetterNavigationTime$quorum_number(firstLetterNavigationTime) {
     return this.Libraries_Game_Game__.SetFirstLetterNavigationTime$quorum_number(firstLetterNavigationTime);
}
SetColliding$quorum_boolean(collide) {
     return this.Libraries_Game_Game__.SetColliding$quorum_boolean(collide);
}
IsRunningOnUpdate() {
     return this.Libraries_Interface_Behaviors_Behavior__.IsRunningOnUpdate();
}
SetConfiguration$quorum_Libraries_Game_WebConfiguration(config) {
     return this.Libraries_Game_Game__.SetConfiguration$quorum_Libraries_Game_WebConfiguration(config);
}
LoadScene$quorum_text(path) {
     return this.Libraries_Game_Game__.LoadScene$quorum_text(path);
}
GetGameName() {
     return this.Libraries_Game_Game__.GetGameName();
}
SetFocusManager$quorum_Libraries_Game_FocusManager(focus) {
     return this.Libraries_Game_Game__.SetFocusManager$quorum_Libraries_Game_FocusManager(focus);
}
StartGame() {
     return this.Libraries_Game_Game__.StartGame();
}
FocusWindow() {
     return this.Libraries_Game_Game__.FocusWindow();
}
TextChanged$quorum_Libraries_Interface_Events_TextChangeEvent(event) {
     return this.Libraries_Interface_Events_TextChangeListener__.TextChanged$quorum_Libraries_Interface_Events_TextChangeEvent(event);
}
SetFocus$quorum_Libraries_Interface_Item(item) {
     return this.Libraries_Game_Game__.SetFocus$quorum_Libraries_Interface_Item(item);
}
AddCollisionListener$quorum_Libraries_Interface_Events_CollisionListener3D(listener) {
     return this.Libraries_Game_Game__.AddCollisionListener$quorum_Libraries_Interface_Events_CollisionListener3D(listener);
}
LoadScene$quorum_Libraries_System_File(file) {
     return this.Libraries_Game_Game__.LoadScene$quorum_Libraries_System_File(file);
}
AddKeyboardListener$quorum_Libraries_Interface_Events_KeyboardListener(listener) {
     return this.Libraries_Game_Game__.AddKeyboardListener$quorum_Libraries_Interface_Events_KeyboardListener(listener);
}
Add$quorum_Libraries_Game_Graphics_PointLight(light) {
     return this.Libraries_Game_Game__.Add$quorum_Libraries_Game_Graphics_PointLight(light);
}
SetAccessibility$quorum_Libraries_Interface_Accessibility(accessibilityManager) {
     return this.Libraries_Game_Game__.SetAccessibility$quorum_Libraries_Interface_Accessibility(accessibilityManager);
}
GetSkybox() {
     return this.Libraries_Game_Game__.GetSkybox();
}
GetInputTable$quorum_text(key) {
     return this.Libraries_Game_Game__.GetInputTable$quorum_text(key);
}
GetLayout() {
     return this.Libraries_Game_Game__.GetLayout();
}
Equals$quorum_Libraries_Language_Object(object) {
return global_Object_Equals(this.prototype, object);
}
SetClipboard$quorum_text(value) {
     return this.Libraries_Game_Game__.SetClipboard$quorum_text(value);
}
SetGravity3D$quorum_number$quorum_number$quorum_number(gravityX, gravityY, gravityZ) {
     return this.Libraries_Game_Game__.SetGravity3D$quorum_number$quorum_number$quorum_number(gravityX, gravityY, gravityZ);
}
SetHasRunFlag$quorum_boolean(hasRun) {
     return this.Libraries_Interface_Behaviors_Behavior__.SetHasRunFlag$quorum_boolean(hasRun);
}
SetConfiguration$quorum_Libraries_Game_AndroidConfiguration(config) {
     return this.Libraries_Game_Game__.SetConfiguration$quorum_Libraries_Game_AndroidConfiguration(config);
}
SetColorFilter$quorum_number$quorum_number$quorum_number$quorum_number(red, green, blue, alpha) {
     return this.Libraries_Game_Game__.SetColorFilter$quorum_number$quorum_number$quorum_number$quorum_number(red, green, blue, alpha);
}
GetDialogLayerPool() {
     return this.Libraries_Game_Game__.GetDialogLayerPool();
}
GetAndroidConfiguration() {
     return this.Libraries_Game_Game__.GetAndroidConfiguration();
}
GetScreenHeight() {
     return this.Libraries_Game_Game__.GetScreenHeight();
}
RemoveTabChangeListener$quorum_Libraries_Interface_Events_TabChangeListener(listener) {
     return this.Libraries_Game_Game__.RemoveTabChangeListener$quorum_Libraries_Interface_Events_TabChangeListener(listener);
}
GetAccessibility() {
     return this.Libraries_Game_Game__.GetAccessibility();
}
GetSharedTextureManager() {
     return this.Libraries_Game_Game__.GetSharedTextureManager();
}
Remove$quorum_Libraries_Interface_Item2D(item) {
     return this.Libraries_Game_Game__.Remove$quorum_Libraries_Interface_Item2D(item);
}
AddScreenshotListener$quorum_Libraries_Interface_Events_ScreenshotListener(listener) {
     return this.Libraries_Game_Game__.AddScreenshotListener$quorum_Libraries_Interface_Events_ScreenshotListener(listener);
}
AddTabChangeListener$quorum_Libraries_Interface_Events_TabChangeListener(listener) {
     return this.Libraries_Game_Game__.AddTabChangeListener$quorum_Libraries_Interface_Events_TabChangeListener(listener);
}
GetCurrentLayer3D() {
     return this.Libraries_Game_Game__.GetCurrentLayer3D();
}
GetCurrentLayer2D() {
     return this.Libraries_Game_Game__.GetCurrentLayer2D();
}
Add$quorum_Libraries_Interface_Item3D(item) {
     return this.Libraries_Game_Game__.Add$quorum_Libraries_Interface_Item3D(item);
}
RemoveInputTable$quorum_text(key) {
     return this.Libraries_Game_Game__.RemoveInputTable$quorum_text(key);
}
IsColliding() {
     return this.Libraries_Game_Game__.IsColliding();
}
GetClipboard() {
     return this.Libraries_Game_Game__.GetClipboard();
}
CreateDefaultInputTables() {
     return this.Libraries_Game_Game__.CreateDefaultInputTables();
}
ContinueGame() {
     return this.Libraries_Game_Game__.ContinueGame();
}
GetScreenResolution() {
     return this.Libraries_Game_Game__.GetScreenResolution();
}
UseDesktopResolution() {
     return this.Libraries_Game_Game__.UseDesktopResolution();
}
SetCurrentLayer3D$quorum_Libraries_Game_Layer3D(layer) {
     return this.Libraries_Game_Game__.SetCurrentLayer3D$quorum_Libraries_Game_Layer3D(layer);
}
GetTextForIDE$quorum_text(containerID) {
return this.plugin_.GetTextForIDE$quorum_text(containerID);
};
GetPaletteFileName$quorum_text(containerID) {
return this.plugin_.GetPaletteFileName$quorum_text(containerID);
};
RunGame() {
return this.plugin_.RunGame();
};
StopGame() {
return this.plugin_.StopGame();
};
UpdateTogglePaletteButton$quorum_boolean(status) {
return this.plugin_.UpdateTogglePaletteButton$quorum_boolean(status);
};
ShowHelpModal() {
return this.plugin_.ShowHelpModal();
};
SupportsMultipleFiles() {
if (this.Get_WebEditor_BlockEditor__alwaysSupportMultipleFiles_()) {
return true;
}
return this.prototype.SupportsMultipleFilesNative$quorum_text(this.Get_WebEditor_BlockEditor__CONTAINER_ID_());
};
SupportsMultipleFilesNative$quorum_text(containerID) {
return this.plugin_.SupportsMultipleFilesNative$quorum_text(containerID);
};
GetMultipleFileText$quorum_text$quorum_Libraries_Containers_Array$quorum_Libraries_Containers_Array(containerID, fileNames, fileTexts) {
return this.plugin_.GetMultipleFileText$quorum_text$quorum_Libraries_Containers_Array$quorum_Libraries_Containers_Array(containerID, fileNames, fileTexts);
};
Main() {
var config = this.prototype.GetWebConfiguration();
config.Set_Libraries_Game_WebConfiguration__title_("Block Editor");
config.Set_Libraries_Game_WebConfiguration__containerID_(this.Get_WebEditor_BlockEditor__CONTAINER_ID_());
config.Set_Libraries_Game_WebConfiguration__convertTouchToMouseEvents_(false);
this.prototype.SetConfiguration$quorum_Libraries_Game_WebConfiguration(config);
var deskConfig = this.prototype.GetDesktopConfiguration();
deskConfig.Set_Libraries_Game_DesktopConfiguration__resizable_(true);
this.prototype.StartGame();
};
OnExit() {
this.editor = null;
this.palettePanel = null;
this.palettePartition = null;
this.editorPanel = null;
this.editorPalette = null;
this.paletteItem = null;
this.blocksItem = null;
if ((this.Get_WebEditor_BlockEditor__editorPane_() != null)) {
this.Get_WebEditor_BlockEditor__editorPane_().Empty();
}
this.editorPane = null;
this.Get_WebEditor_BlockEditor__blockListeners_().Empty();
return true;
};
CreateGame() {
var landmarkCount = 5;
var extraNavigationText = "";
if (this.prototype.SupportsMultipleFiles()) {
extraNavigationText = " or let you navigate between the code files";
}
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
var webAccess = global_CheckCast(manager.GetAccessibility(), "Libraries.Interface.Accessibility.WebAccessibility");
webAccess.AddHiddenHeader$quorum_text$quorum_text("Navigation Area", (((("Navigation Menu, Landmark 1 of " + landmarkCount) + ",\n You are on the Navigation Menu, swipe right to find buttons that will take you directly to the tray or editor") + extraNavigationText) + ". "));
webAccess.AddHiddenButton$quorum_text("Go To Tray");
webAccess.AddHiddenButton$quorum_text("Go To Editor");
webAccess.AddHiddenButton$quorum_text("Exit");
if (this.prototype.SupportsMultipleFiles()) {
webAccess.AddHiddenButton$quorum_text("Open Next File");
webAccess.AddHiddenButton$quorum_text("Open Previous File");
}
webAccess.AddHiddenHeader$quorum_text$quorum_text("Block Control Area", (("Block Control Menu, Landmark 2 of " + landmarkCount) + ", \nYou are on the Block Control Menu, swipe right to find buttons to move blocks around or delete them."));
webAccess.AddHiddenButton$quorum_text("Pick Up Current");
webAccess.AddHiddenButton$quorum_text("Move Placeholder Block Up");
webAccess.AddHiddenButton$quorum_text("Move Placeholder Block Down");
webAccess.AddHiddenButton$quorum_text("Drop Block");
webAccess.AddHiddenButton$quorum_text("Delete");
webAccess.AddHiddenHeader$quorum_text$quorum_text("Edit Area", (("Edit Menu, Landmark 3 of " + landmarkCount) + ", \nYou are on the Edit Menu, swipe right to find buttons to help you Undo and Redo in the block editor"));
webAccess.AddHiddenButton$quorum_text("Undo");
webAccess.AddHiddenButton$quorum_text("Redo");
webAccess.AddWebAccessibilityListener$quorum_Libraries_Interface_Events_WebAccessibilityListener(this.prototype);
this.prototype.SetupInterfaceOptions();
var layout = new quorum_Libraries_Interface_Layouts_FlowLayout_();
this.prototype.SetLayout$quorum_Libraries_Interface_Layouts_Layout(layout);
var fontSize = 12;
if ((this.prototype.SupportsMultipleFiles() == false)) {
var editor2 = new quorum_Libraries_Interface_Controls_Blocks_CodeEditor_();
this.editor = editor2;
var listener = new quorum_Libraries_Language_Compile_Blocks_ParserToBlockListener_();
listener.Set_Libraries_Language_Compile_Blocks_ParserToBlockListener__startLine_(0);
this.Get_WebEditor_BlockEditor__editor_().SetBlockListener$quorum_Libraries_Language_Compile_Blocks_ParserToBlockListener(listener);
this.Get_WebEditor_BlockEditor__blockListeners_().Add$quorum_Libraries_Language_Object$quorum_Libraries_Language_Object(this.Get_WebEditor_BlockEditor__editor_(), listener);
this.Get_WebEditor_BlockEditor__editor_().AddTextChangeListener$quorum_Libraries_Interface_Events_TextChangeListener(this.Get_WebEditor_BlockEditor__textHighlightListener_());
this.Get_WebEditor_BlockEditor__textHighlightListener_().SetEditor$quorum_Libraries_Interface_Controls_Blocks_CodeEditor(this.Get_WebEditor_BlockEditor__editor_());
var read = "";
read = this.prototype.GetTextForIDE$quorum_text(this.Get_WebEditor_BlockEditor__CONTAINER_ID_());
global_Output_(("SINGLE FILE: Read = \n" + read));
var listen = new quorum_Libraries_Interface_Controls_Blocks_BlockSelectionListener_();
this.Get_WebEditor_BlockEditor__editor_().SetPercentageWidth$quorum_number(1 * 1.0);
this.Get_WebEditor_BlockEditor__editor_().SetPercentageHeight$quorum_number(1 * 1.0);
this.Get_WebEditor_BlockEditor__editor_().SetFontSize$quorum_integer(fontSize);
this.Get_WebEditor_BlockEditor__editor_().AddSelectionListener$quorum_Libraries_Interface_Events_SelectionListener(listen);
this.Get_WebEditor_BlockEditor__editor_().SetCode$quorum_text(read);
}
else { 
var tabPane = new quorum_Libraries_Interface_Controls_TabPane_();
this.editorPane = tabPane;
this.Get_WebEditor_BlockEditor__editorPane_().AddSelectionListener$quorum_Libraries_Interface_Events_SelectionListener(this.prototype);
this.Get_WebEditor_BlockEditor__editorPane_().SetPercentageWidth$quorum_number(1 * 1.0);
this.Get_WebEditor_BlockEditor__editorPane_().SetPercentageHeight$quorum_number(1 * 1.0);
var fileNames = new quorum_Libraries_Containers_Array_();
var fileTexts = new quorum_Libraries_Containers_Array_();
this.prototype.GetMultipleFileText$quorum_text$quorum_Libraries_Containers_Array$quorum_Libraries_Containers_Array(this.Get_WebEditor_BlockEditor__CONTAINER_ID_(), fileNames, fileTexts);
var i = 0;
while ((i < fileNames.GetSize())) {
var tab = new quorum_Libraries_Interface_Controls_Tab_();
tab.SetName$quorum_text(global_GetValue_(fileNames.Get$quorum_integer(i), "text"));
tab.DisplayCloseButton$quorum_boolean(false);
var newEditor = new quorum_Libraries_Interface_Controls_Blocks_CodeEditor_();
newEditor.SetName$quorum_text(global_GetValue_(fileNames.Get$quorum_integer(i), "text"));
var listener = new quorum_Libraries_Language_Compile_Blocks_ParserToBlockListener_();
listener.Set_Libraries_Language_Compile_Blocks_ParserToBlockListener__startLine_(0);
newEditor.SetBlockListener$quorum_Libraries_Language_Compile_Blocks_ParserToBlockListener(listener);
this.Get_WebEditor_BlockEditor__blockListeners_().Add$quorum_Libraries_Language_Object$quorum_Libraries_Language_Object(newEditor, listener);
newEditor.AddTextChangeListener$quorum_Libraries_Interface_Events_TextChangeListener(this.Get_WebEditor_BlockEditor__textHighlightListener_());
var code = global_GetValue_(fileTexts.Get$quorum_integer(i), "text");
global_Output_(((i + " Code: \n") + code));
var listen = new quorum_Libraries_Interface_Controls_Blocks_BlockSelectionListener_();
newEditor.SetPercentageWidth$quorum_number(1 * 1.0);
newEditor.SetPercentageHeight$quorum_number(1 * 1.0);
newEditor.SetFontSize$quorum_integer(fontSize);
newEditor.AddSelectionListener$quorum_Libraries_Interface_Events_SelectionListener(listen);
newEditor.SetCode$quorum_text(code);
if ((this.Get_WebEditor_BlockEditor__editor_() == null)) {
this.editor = newEditor;
}
tab.SetRelatedItem$quorum_Libraries_Interface_Item2D(newEditor);
this.Get_WebEditor_BlockEditor__editorPane_().Add$quorum_Libraries_Interface_Controls_Tab(tab);
i = (i + 1);
}
}
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
this.Get_WebEditor_BlockEditor__palettePanel_().SetAccessibilityCode$quorum_integer(9);
this.Get_WebEditor_BlockEditor__palettePanel_().SetFocusable$quorum_boolean(false);
var flow = new quorum_Libraries_Interface_Layouts_FlowLayout_();
this.Get_WebEditor_BlockEditor__editorPanel_().SetLayout$quorum_Libraries_Interface_Layouts_Layout(flow);
this.Get_WebEditor_BlockEditor__editorPanel_().SetPercentageY$quorum_number(0 * 1.0);
this.Get_WebEditor_BlockEditor__editorPanel_().SetPercentageHeight$quorum_number(1 * 1.0);
this.Get_WebEditor_BlockEditor__editorPanel_().SetHorizontalLayoutMode$quorum_integer(this.editorPanel.Libraries_Interface_Controls_Control__.FILL);
this.Get_WebEditor_BlockEditor__editorPanel_().SetName$quorum_text("Editor Panel");
this.Get_WebEditor_BlockEditor__editorPanel_().SetAccessibilityCode$quorum_integer(9);
this.Get_WebEditor_BlockEditor__editorPanel_().SetFocusable$quorum_boolean(false);
webAccess.AddHiddenHeader$quorum_text$quorum_text$quorum_boolean("paletteHeader", (("Block Tray, Landmark 4 of " + landmarkCount) + ", You are on the Block Tray Header, \nswipe right to find the items in the block tray, swipe left and you will find the other menus.\n Navigation by headings is recommended if you want to find other landmarks."), true);
webAccess.AddHiddenLabel$quorum_text$quorum_text$quorum_boolean("paletteLabel", "Block Tray Help. Activate or double tap an item in the tray to insert into the text. \nLandmark 2 will point you to buttons that can help move the activated tray item in the editor.", true);
this.prototype.Add$quorum_Libraries_Interface_Item2D(this.Get_WebEditor_BlockEditor__palettePanel_());
this.Get_WebEditor_BlockEditor__palettePanel_().Add$quorum_Libraries_Interface_Item2D(palette);
palette.IncludeSuggestions$quorum_boolean(false);
palette.Setup();
var palettePartition = this.prototype.CreatePalettePartition();
this.prototype.Add$quorum_Libraries_Interface_Item2D(palettePartition);
this.prototype.AddPartitionInputTable$quorum_Libraries_Interface_Controls_Control(this.Get_WebEditor_BlockEditor__palettePanel_());
webAccess.AddHiddenHeader$quorum_text$quorum_text$quorum_boolean("editorHeader", (("Code Editor, Landmark 5 of " + landmarkCount) + ", You are on the Code Editor Header, \nswipe right to find the items in the code editor, swipe left and you will find the tray.\n Navigation by headings is recommended if you want to find other landmarks."), true);
this.prototype.Add$quorum_Libraries_Interface_Item2D(this.Get_WebEditor_BlockEditor__editorPanel_());
if ((this.Get_WebEditor_BlockEditor__editorPane_() != null)) {
this.Get_WebEditor_BlockEditor__editorPanel_().Add$quorum_Libraries_Interface_Item2D(this.Get_WebEditor_BlockEditor__editorPane_());
}
else { 
this.Get_WebEditor_BlockEditor__editorPanel_().Add$quorum_Libraries_Interface_Item2D(this.Get_WebEditor_BlockEditor__editor_());
}
var resizeListener = new quorum_WebEditor_CanvasResizeListener_();
resizeListener.AddPanel$quorum_Libraries_Interface_Controls_Control(this.Get_WebEditor_BlockEditor__palettePanel_());
resizeListener.AddPanel$quorum_Libraries_Interface_Controls_Control(this.Get_WebEditor_BlockEditor__editorPanel_());
this.prototype.AddResizeListener$quorum_Libraries_Interface_Events_ResizeListener(resizeListener);
this.editorPalette = palette;
this.prototype.SetInterfaceScale$quorum_number(1.25);
this.prototype.SetupEditorItems();
this.prototype.AddDefaultKeys();
this.Get_WebEditor_BlockEditor__paletteItem_().Focus();
this.prototype.AddFocusListener$quorum_Libraries_Interface_Events_FocusListener(this.prototype);
this.prototype.SetColliding$quorum_boolean(false);
if (((this.Get_WebEditor_BlockEditor__editorPane_() != null) && (this.Get_WebEditor_BlockEditor__editorPane_().IsEmpty() == false))) {
this.Get_WebEditor_BlockEditor__editorPane_().Select$quorum_integer(0);
}
};
SetupEditorItems() {
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
var webApp = global_CheckCast(manager.GetApplication(), "Libraries.Game.WebApplication");
if (((webApp.GetWebOperatingSystem().Contains$quorum_text("Android") || webApp.GetWebOperatingSystem().Contains$quorum_text("iOS")) || webApp.GetWebOperatingSystem().Contains$quorum_text("Mobile"))) {
var tempPalette = new quorum_WebEditor_EditorItem_();
this.paletteItem = tempPalette;
this.Get_WebEditor_BlockEditor__paletteItem_().SetName$quorum_text("Block Editor, You are in the Block Editor.\n If you are using a mobile screen reader navigation by headings is recommended. You will find 5 landmarks corresponding\n to 3 menus, the block tray, and then the block editor. Swipe Left and Right to navigate item by item.\n Swipe up and down to navigate by landmarks.");
this.Get_WebEditor_BlockEditor__paletteItem_().SetTarget$quorum_Libraries_Interface_Controls_Control(this.prototype.GetBlockPalette());
this.prototype.Add$quorum_Libraries_Interface_Item2D(this.Get_WebEditor_BlockEditor__paletteItem_());
return;
}
var tempPalette = new quorum_WebEditor_EditorItem_();
this.paletteItem = tempPalette;
this.Get_WebEditor_BlockEditor__paletteItem_().SetName$quorum_text("Tray, To navigate to the tray press Enter. To navigate to the editor use the arrow keys. To navigate back to here from the tray press Shift+Enter.");
this.Get_WebEditor_BlockEditor__paletteItem_().SetTarget$quorum_Libraries_Interface_Controls_Control(this.prototype.GetBlockPalette());
var tempBlocks = new quorum_WebEditor_EditorItem_();
this.blocksItem = tempBlocks;
this.Get_WebEditor_BlockEditor__blocksItem_().SetName$quorum_text("Block Editor, To navigate to the editor press Enter. To navigate to the tray use the arrow keys. To navigate back to here from the editor press Shift+Enter.");
this.Get_WebEditor_BlockEditor__blocksItem_().SetTarget$quorum_Libraries_Interface_Controls_Control(this.prototype.GetBlockEditor());
this.Get_WebEditor_BlockEditor__paletteItem_().SetNextFocus$quorum_Libraries_Interface_Item(this.Get_WebEditor_BlockEditor__blocksItem_());
this.Get_WebEditor_BlockEditor__paletteItem_().SetPreviousFocus$quorum_Libraries_Interface_Item(this.Get_WebEditor_BlockEditor__blocksItem_());
this.Get_WebEditor_BlockEditor__blocksItem_().SetNextFocus$quorum_Libraries_Interface_Item(this.Get_WebEditor_BlockEditor__paletteItem_());
this.Get_WebEditor_BlockEditor__blocksItem_().SetPreviousFocus$quorum_Libraries_Interface_Item(this.Get_WebEditor_BlockEditor__paletteItem_());
this.prototype.Add$quorum_Libraries_Interface_Item2D(this.Get_WebEditor_BlockEditor__paletteItem_());
this.prototype.Add$quorum_Libraries_Interface_Item2D(this.Get_WebEditor_BlockEditor__blocksItem_());
};
AddDefaultKeys() {
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
var swipeSet = new quorum_Libraries_Game_InputSet_();
var gestures = new quorum_Libraries_Interface_Events_GestureEvent_();
swipeSet.SetGestureInput$quorum_integer(gestures.Get_Libraries_Interface_Events_GestureEvent__SWIPE_());
var tapSet = new quorum_Libraries_Game_InputSet_();
tapSet.SetGestureInput$quorum_integer(gestures.Get_Libraries_Interface_Events_GestureEvent__SINGLE_TAP_());
var doubleTapSet = new quorum_Libraries_Game_InputSet_();
doubleTapSet.SetGestureInput$quorum_integer(gestures.Get_Libraries_Interface_Events_GestureEvent__DOUBLE_TAP_());
var panBeginSet = new quorum_Libraries_Game_InputSet_();
panBeginSet.SetGestureInput$quorum_integer(gestures.Get_Libraries_Interface_Events_GestureEvent__PAN_());
panBeginSet.SetInputTrigger$quorum_integer(panBeginSet.Get_Libraries_Game_InputSet__BEGIN_());
var panContinueSet = new quorum_Libraries_Game_InputSet_();
panContinueSet.SetGestureInput$quorum_integer(gestures.Get_Libraries_Interface_Events_GestureEvent__PAN_());
panContinueSet.SetInputTrigger$quorum_integer(panContinueSet.Get_Libraries_Game_InputSet__CONTINUE_());
var panEndSet = new quorum_Libraries_Game_InputSet_();
panEndSet.SetGestureInput$quorum_integer(gestures.Get_Libraries_Interface_Events_GestureEvent__PAN_());
panEndSet.SetInputTrigger$quorum_integer(panEndSet.Get_Libraries_Game_InputSet__FINISH_());
var longPressSet = new quorum_Libraries_Game_InputSet_();
longPressSet.SetGestureInput$quorum_integer(gestures.Get_Libraries_Interface_Events_GestureEvent__LONG_PRESS_());
var pinchSet = new quorum_Libraries_Game_InputSet_();
pinchSet.SetGestureInput$quorum_integer(gestures.Get_Libraries_Interface_Events_GestureEvent__PINCH_());
var swipeBehavior = new quorum_WebEditor_Behaviors_WebEditorSwipeBehavior_();
defaultTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(swipeSet, swipeBehavior);
var doubleTapBehavior = new quorum_WebEditor_Behaviors_WebEditorDoubleTapBehavior_();
defaultTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(doubleTapSet, doubleTapBehavior);
var longPressBehavior = new quorum_WebEditor_Behaviors_WebEditorLongPressBehavior_();
defaultTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(longPressSet, longPressBehavior);
var singleTapBehavior = new quorum_WebEditor_Behaviors_WebEditorSingleTapBehavior_();
defaultTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(tapSet, singleTapBehavior);
var panBehavior = new quorum_WebEditor_Behaviors_WebEditorPanBehavior_();
defaultTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(panBeginSet, panBehavior);
defaultTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(panContinueSet, panBehavior);
defaultTable.Add$quorum_Libraries_Game_InputSet$quorum_Libraries_Interface_Behaviors_Behavior(panEndSet, panBehavior);
};
Format$quorum_text(source) {
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
CreatePalettePartition() {
var palettePartition = new quorum_Libraries_Interface_Controls_Icon_();
var bgColor = new quorum_Libraries_Game_Graphics_Color_();
bgColor.SetColor$quorum_number$quorum_number$quorum_number$quorum_number(0.25, 0.25, 0.25, 1 * 1.0);
palettePartition.LoadFilledRectangle$quorum_integer$quorum_integer$quorum_Libraries_Game_Graphics_ColorGroup(4, 500, bgColor);
var paletteProperties = palettePartition.GetDefaultLayoutProperties();
paletteProperties.SetPixelWidth$quorum_number(8 * 1.0);
paletteProperties.SetVerticalLayoutMode$quorum_integer(paletteProperties.Get_Libraries_Interface_Layouts_LayoutProperties__FILL_());
palettePartition.SetInputGroup$quorum_text("PalettePartition");
palettePartition.SetName$quorum_text("Tray Pane Partition");
palettePartition.SetZ$quorum_number(-10 * 1.0);
return palettePartition;
};
AddPartitionInputTable$quorum_Libraries_Interface_Controls_Control(palettePanel) {
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
GetPaletteFile() {
var file = new quorum_Libraries_System_File_();
if ((this.prototype.GetPaletteFileName$quorum_text(this.Get_WebEditor_BlockEditor__CONTAINER_ID_()) != "")) {
file.SetPath$quorum_text(this.prototype.GetPaletteFileName$quorum_text(this.Get_WebEditor_BlockEditor__CONTAINER_ID_()));
return file;
}
return null;
};
FocusChanged$quorum_Libraries_Interface_Events_WebAccessibilityEvent(event) {
var elementName = event.Get_Libraries_Interface_Events_WebAccessibilityEvent__elementName_();
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
var webAccess = global_CheckCast(manager.GetAccessibility(), "Libraries.Interface.Accessibility.WebAccessibility");
if ((elementName == "Go To Tray")) {
this.Get_WebEditor_BlockEditor__editorPalette_().Focus();
}
else if( (elementName == "Go To Editor")) {
this.Get_WebEditor_BlockEditor__editor_().Focus();
}
else if( (elementName == "Pick Up Current")) {
if (!this.Get_WebEditor_BlockEditor__editor_().IsKeyboardMovingBlocks()) {
var pickUpEvent = new quorum_Libraries_Interface_Events_BehaviorEvent_();
pickUpEvent.SetItem$quorum_Libraries_Interface_Item(this.Get_WebEditor_BlockEditor__editor_().GetSelectedBlocks().Get$quorum_integer(0));
var blockName = this.Get_WebEditor_BlockEditor__editor_().GetSelectedBlocks().Get$quorum_integer(0).GetName();
var pickUpBehavior = new quorum_Libraries_Interface_Behaviors_Blocks_BlockPickUpBehavior_();
pickUpBehavior.Run$quorum_Libraries_Interface_Events_BehaviorEvent(pickUpEvent);
webAccess.ModifyHiddenSlider$quorum_text$quorum_integer$quorum_integer$quorum_integer("Block Mover", 0, (this.Get_WebEditor_BlockEditor__editor_().GetLineCount() - 1), 1);
webAccess.SetHiddenSliderCurrentValue$quorum_text$quorum_integer("Block Mover", this.Get_WebEditor_BlockEditor__editor_().GetSelection().GetLine());
webAccess.SetHiddenSliderValueText$quorum_text$quorum_text("Block Mover", blockName);
webAccess.FocusHiddenElement$quorum_text("Block Mover");
}
}
else if( (elementName == "Move Placeholder Block Down")) {
if (this.Get_WebEditor_BlockEditor__editor_().IsKeyboardMovingBlocks()) {
this.Get_WebEditor_BlockEditor__editor_().MoveSelectionDown();
webAccess.FocusHiddenElement$quorum_text("Move Placeholder Block Down");
}
}
else if( (elementName == "Move Placeholder Block Up")) {
if (this.Get_WebEditor_BlockEditor__editor_().IsKeyboardMovingBlocks()) {
this.Get_WebEditor_BlockEditor__editor_().MoveSelectionUp();
webAccess.FocusHiddenElement$quorum_text("Move Placeholder Block Up");
}
}
else if( (elementName == "Drop Block")) {
if (this.Get_WebEditor_BlockEditor__editor_().IsKeyboardMovingBlocks()) {
this.Get_WebEditor_BlockEditor__editor_().ConfirmKeyboardMovingBlocks();
}
}
else if( (elementName == "Delete")) {
this.Get_WebEditor_BlockEditor__editor_().DeleteSelectedBlock$quorum_boolean(false);
this.Get_WebEditor_BlockEditor__editor_().Focus();
}
else if( (elementName == "Undo")) {
this.Get_WebEditor_BlockEditor__editor_().GetBlockEditManager().Undo();
this.Get_WebEditor_BlockEditor__editor_().Focus();
}
else if( (elementName == "Redo")) {
this.Get_WebEditor_BlockEditor__editor_().GetBlockEditManager().Redo();
this.Get_WebEditor_BlockEditor__editor_().Focus();
}
else if( (elementName == "Exit")) {
webAccess.ForceReleaseFocus();
}
else if( (elementName == "Move Up")) {
this.Get_WebEditor_BlockEditor__editor_().MoveSelectionUp();
this.Get_WebEditor_BlockEditor__editor_().Focus();
}
else if( (elementName == "Move Down")) {
this.Get_WebEditor_BlockEditor__editor_().MoveSelectionDown();
this.Get_WebEditor_BlockEditor__editor_().Focus();
}
else if( (elementName == "Open Next File")) {
if ((this.Get_WebEditor_BlockEditor__editorPane_() != null)) {
var select = this.Get_WebEditor_BlockEditor__editorPane_().GetSelection();
var index = ((select.GetIndex() + 1) % this.Get_WebEditor_BlockEditor__editorPane_().GetSize());
this.Get_WebEditor_BlockEditor__editorPane_().Select$quorum_integer(index);
webAccess.FocusHiddenElement$quorum_text("Open Next File");
}
}
else if( (elementName == "Open Previous File")) {
if ((this.Get_WebEditor_BlockEditor__editorPane_() != null)) {
var select = this.Get_WebEditor_BlockEditor__editorPane_().GetSelection();
var index = (select.GetIndex() - 1);
if ((index < 0)) {
index = (this.Get_WebEditor_BlockEditor__editorPane_().GetSize() - 1);
}
this.Get_WebEditor_BlockEditor__editorPane_().Select$quorum_integer(index);
webAccess.FocusHiddenElement$quorum_text("Open Previous File");
}
}
};
SliderChanged$quorum_Libraries_Interface_Events_WebAccessibilityEvent(event) {
var elementName = event.GetElementName();
var manager = (global_Get_Shared_Class("Libraries.Game.GameStateManager") == null ? global_Add_Shared_Class("Libraries.Game.GameStateManager", new quorum_Libraries_Game_GameStateManager_()) : global_Get_Shared_Class("Libraries.Game.GameStateManager"));
var webAccess = global_CheckCast(manager.GetAccessibility(), "Libraries.Interface.Accessibility.WebAccessibility");
if ((elementName == "Block Mover")) {
this.Get_WebEditor_BlockEditor__editor_().SelectBlockAtLine$quorum_integer(event.GetSliderValue());
var blockName = this.Get_WebEditor_BlockEditor__editor_().GetSelectedBlocks().Get$quorum_integer(0).GetName();
webAccess.SetHiddenSliderValueText$quorum_text$quorum_text("Block Mover", blockName);
webAccess.FocusHiddenElement$quorum_text("Block Mover");
}
};
HiddenElementClicked$quorum_Libraries_Interface_Events_WebAccessibilityEvent(event) {
var clicked = event.GetItem();
if (global_InstanceOf(clicked,'Libraries.Interface.Controls.Blocks.Block')) {
if (this.Get_WebEditor_BlockEditor__editor_().IsKeyboardMovingBlocks()) {
this.Get_WebEditor_BlockEditor__editor_().ConfirmKeyboardMovingBlocks();
}
}
};
GainedFocus$quorum_Libraries_Interface_Events_FocusEvent(event) {
};
LostFocus$quorum_Libraries_Interface_Events_FocusEvent(event) {
};
IsInPalette$quorum_Libraries_Interface_Item(item) {
while (!((item == null))) {
if (global_InstanceOf(item,'Libraries.Interface.Controls.Blocks.Palette.BlockPalette')) {
return true;
}
else { 
item = item.GetAccessibleParent();
}
}
return false;
};
IsInBlockEditor$quorum_Libraries_Interface_Item(item) {
while (!((item == null))) {
if (global_InstanceOf(item,'Libraries.Interface.Controls.Blocks.CodeEditor')) {
return true;
}
else { 
item = item.GetAccessibleParent();
}
}
return false;
};
SetCode$quorum_text(code) {
this.Get_WebEditor_BlockEditor__editor_().SetCode$quorum_text(code);
};
ScaleUp() {
var scale = this.prototype.GetInterfaceScale();
scale = (scale + this.Get_WebEditor_BlockEditor__scaleAmount_());
if ((scale >= 0.1)) {
this.prototype.SetInterfaceScale$quorum_number(scale);
}
};
ScaleDown() {
var scale = this.prototype.GetInterfaceScale();
scale = (scale - this.Get_WebEditor_BlockEditor__scaleAmount_());
if ((scale >= 0.1)) {
this.prototype.SetInterfaceScale$quorum_number(scale);
}
};
TogglePalette() {
if (this.Get_WebEditor_BlockEditor__palettePanel_().IsShowing()) {
this.lastWidth = this.Get_WebEditor_BlockEditor__palettePanel_().GetPixelWidth();
this.Get_WebEditor_BlockEditor__palettePanel_().SetPixelWidth$quorum_number(0 * 1.0);
this.Get_WebEditor_BlockEditor__palettePanel_().Hide();
this.Get_WebEditor_BlockEditor__palettePartition_().Hide();
this.Get_WebEditor_BlockEditor__editor_().Focus();
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
IsPaletteShowing() {
return this.Get_WebEditor_BlockEditor__palettePanel_().IsShowing();
};
GetBlockEditor() {
return this.Get_WebEditor_BlockEditor__editor_();
};
GetBlockPalette() {
return this.Get_WebEditor_BlockEditor__editorPalette_();
};
Update$quorum_number(seconds) {
if ((this.Get_WebEditor_BlockEditor__textHighlightListener_() != null)) {
this.Get_WebEditor_BlockEditor__textHighlightListener_().Update$quorum_number(seconds);
}
};
IsLightMode() {
return true;
};
SetupInterfaceOptions() {
var options = null;
var color = new quorum_Libraries_Game_Graphics_Color_();
var MAX = 255.0;
if (this.prototype.IsLightMode()) {
var lightOptions = new quorum_Libraries_Interface_Options_LightBlockOptions_();
options = lightOptions;
var keywords = color.CustomColor$quorum_number$quorum_number$quorum_number$quorum_number((8.0 / MAX), (57.0 / MAX), (181.0 / MAX), 1 * 1.0);
var comments = color.CustomColor$quorum_number$quorum_number$quorum_number$quorum_number((68.0 / MAX), (80.0 / MAX), (91.0 / MAX), 1 * 1.0);
var textColor = color.CustomColor$quorum_number$quorum_number$quorum_number$quorum_number((160.0 / MAX), (50.0 / MAX), (50.0 / MAX), 1 * 1.0);
var structure = color.CustomColor$quorum_number$quorum_number$quorum_number$quorum_number((113.0 / MAX), (83.0 / MAX), (38.0 / MAX), 1 * 1.0);
options.SetColorProperty$quorum_text$quorum_Libraries_Game_Graphics_ColorGroup(this.Get_WebEditor_BlockEditor__textHighlightListener_().Get_WebEditor_TextHighlightListener__EDITOR_KEYWORD_COLOR_(), keywords);
options.SetColorProperty$quorum_text$quorum_Libraries_Game_Graphics_ColorGroup(this.Get_WebEditor_BlockEditor__textHighlightListener_().Get_WebEditor_TextHighlightListener__EDITOR_STRUCTURE_COLOR_(), structure);
options.SetColorProperty$quorum_text$quorum_Libraries_Game_Graphics_ColorGroup(this.Get_WebEditor_BlockEditor__textHighlightListener_().Get_WebEditor_TextHighlightListener__EDITOR_TEXT_COLOR_(), textColor);
options.SetColorProperty$quorum_text$quorum_Libraries_Game_Graphics_ColorGroup(this.Get_WebEditor_BlockEditor__textHighlightListener_().Get_WebEditor_TextHighlightListener__EDITOR_COMMENT_COLOR_(), comments);
}
else { 
var darkOptions = new quorum_Libraries_Interface_Options_DarkBlockOptions_();
options = darkOptions;
var keywords = color.CustomColor$quorum_number$quorum_number$quorum_number$quorum_number((144.0 / MAX), (191.0 / MAX), (227.0 / MAX), 1 * 1.0);
var comments = color.CustomColor$quorum_number$quorum_number$quorum_number$quorum_number((175.0 / MAX), (186.0 / MAX), (255.0 / MAX), 1 * 1.0);
var textColor = color.CustomColor$quorum_number$quorum_number$quorum_number$quorum_number((255.0 / MAX), (165.0 / MAX), (127.0 / MAX), 1 * 1.0);
var structure = color.CustomColor$quorum_number$quorum_number$quorum_number$quorum_number((207.0 / MAX), (175.0 / MAX), (224.0 / MAX), 1 * 1.0);
options.SetColorProperty$quorum_text$quorum_Libraries_Game_Graphics_ColorGroup(this.Get_WebEditor_BlockEditor__textHighlightListener_().Get_WebEditor_TextHighlightListener__EDITOR_KEYWORD_COLOR_(), keywords);
options.SetColorProperty$quorum_text$quorum_Libraries_Game_Graphics_ColorGroup(this.Get_WebEditor_BlockEditor__textHighlightListener_().Get_WebEditor_TextHighlightListener__EDITOR_STRUCTURE_COLOR_(), structure);
options.SetColorProperty$quorum_text$quorum_Libraries_Game_Graphics_ColorGroup(this.Get_WebEditor_BlockEditor__textHighlightListener_().Get_WebEditor_TextHighlightListener__EDITOR_TEXT_COLOR_(), textColor);
options.SetColorProperty$quorum_text$quorum_Libraries_Game_Graphics_ColorGroup(this.Get_WebEditor_BlockEditor__textHighlightListener_().Get_WebEditor_TextHighlightListener__EDITOR_COMMENT_COLOR_(), comments);
}
this.prototype.SetInterfaceOptions$quorum_Libraries_Interface_Options_InterfaceOptions(options);
};
SelectionChanged$quorum_Libraries_Interface_Events_SelectionEvent(event) {
if (global_InstanceOf(event.GetSelection(),'Libraries.Interface.Selections.TabPaneSelection')) {
var selection = global_CheckCast(event.GetSelection(), "Libraries.Interface.Selections.TabPaneSelection");
var tab = selection.GetTab();
if (((tab != null) && global_InstanceOf(tab.GetRelatedItem(),'Libraries.Interface.Controls.Blocks.CodeEditor'))) {
var editor = global_CheckCast(tab.GetRelatedItem(), "Libraries.Interface.Controls.Blocks.CodeEditor");
this.editor = editor;
this.Get_WebEditor_BlockEditor__textHighlightListener_().SetEditor$quorum_Libraries_Interface_Controls_Blocks_CodeEditor(editor);
this.Get_WebEditor_BlockEditor__editorPalette_().SetEditor$quorum_Libraries_Interface_Controls_Blocks_CodeEditor(editor);
}
}
};
SetAlwaysSupportMultipleFiles$quorum_boolean(support) {
this.alwaysSupportMultipleFiles = support;
};
AlwaysSupportMultipleFiles() {
return this.Get_WebEditor_BlockEditor__alwaysSupportMultipleFiles_();
};
GetFileCount() {
if ((this.Get_WebEditor_BlockEditor__editorPane_() != null)) {
return this.Get_WebEditor_BlockEditor__editorPane_().GetSize();
}
else if( (this.Get_WebEditor_BlockEditor__editor_() != null)) {
return 1;
}
else { 
return 0;
}
};
GetCodeAtFileIndex$quorum_integer(index) {
if (((this.Get_WebEditor_BlockEditor__editorPane_() == null) && (this.Get_WebEditor_BlockEditor__editor_() != null))) {
if ((index != 0)) {
var exceptionInstance_ = new quorum_Libraries_Language_Errors_Error_();
 exceptionInstance_.SetErrorMessage$quorum_text((("Can't access a file at index " + index) + " -- this IDE doesn't support multiple files."));
throw exceptionInstance_;
}
else { 
return this.Get_WebEditor_BlockEditor__editor_().GetText();
}
}
else if( (this.Get_WebEditor_BlockEditor__editorPane_() != null)) {
var tabs = this.Get_WebEditor_BlockEditor__editorPane_().GetTabs();
var item = tabs.Get$quorum_integer(index).GetRelatedItem();
if (global_InstanceOf(item,'Libraries.Interface.Controls.Blocks.CodeEditor')) {
var currentEditor = global_CheckCast(item, "Libraries.Interface.Controls.Blocks.CodeEditor");
return currentEditor.GetText();
}
else { 
var exceptionInstance_ = new quorum_Libraries_Language_Errors_Error_();
 exceptionInstance_.SetErrorMessage$quorum_text((("I couldn't read from index " + index) + " because it wasn't a CodeEditor."));
throw exceptionInstance_;
}
}
return "";
};
GetNameAtFileIndex$quorum_integer(index) {
if (((this.Get_WebEditor_BlockEditor__editorPane_() == null) && (this.Get_WebEditor_BlockEditor__editor_() != null))) {
if ((index != 0)) {
var exceptionInstance_ = new quorum_Libraries_Language_Errors_Error_();
 exceptionInstance_.SetErrorMessage$quorum_text((("Can't access a file at index " + index) + " -- this IDE doesn't support multiple files."));
throw exceptionInstance_;
}
else { 
return "Main.quorum";
}
}
else if( (this.Get_WebEditor_BlockEditor__editorPane_() != null)) {
var tabs = this.Get_WebEditor_BlockEditor__editorPane_().GetTabs();
return tabs.Get$quorum_integer(index).GetName();
}
return "";
};
Get_WebEditor_BlockEditor__scaleAmount_() {
   return this.scaleAmount;
};
Set_WebEditor_BlockEditor__scaleAmount_(value) {
   this.scaleAmount = value;
};
Get_WebEditor_BlockEditor__editorPanel_() {
   return this.editorPanel;
};
Set_WebEditor_BlockEditor__editorPanel_(value) {
   this.editorPanel = value;
};
Get_WebEditor_BlockEditor__textHighlightListener_() {
   return this.textHighlightListener;
};
Set_WebEditor_BlockEditor__textHighlightListener_(value) {
   this.textHighlightListener = value;
};
Get_WebEditor_BlockEditor__alwaysSupportMultipleFiles_() {
   return this.alwaysSupportMultipleFiles;
};
Set_WebEditor_BlockEditor__alwaysSupportMultipleFiles_(value) {
   this.alwaysSupportMultipleFiles = value;
};
Get_WebEditor_BlockEditor__editorPane_() {
   return this.editorPane;
};
Set_WebEditor_BlockEditor__editorPane_(value) {
   this.editorPane = value;
};
Get_WebEditor_BlockEditor__palettePanel_() {
   return this.palettePanel;
};
Set_WebEditor_BlockEditor__palettePanel_(value) {
   this.palettePanel = value;
};
Get_WebEditor_BlockEditor__palettePartition_() {
   return this.palettePartition;
};
Set_WebEditor_BlockEditor__palettePartition_(value) {
   this.palettePartition = value;
};
Get_WebEditor_BlockEditor__CONTAINER_ID_() {
   return this.CONTAINER_ID;
};
Set_WebEditor_BlockEditor__CONTAINER_ID_(value) {
   this.CONTAINER_ID = value;
};
Get_WebEditor_BlockEditor__editor_() {
   return this.editor;
};
Set_WebEditor_BlockEditor__editor_(value) {
   this.editor = value;
};
Get_WebEditor_BlockEditor__blocksItem_() {
   return this.blocksItem;
};
Set_WebEditor_BlockEditor__blocksItem_(value) {
   this.blocksItem = value;
};
Get_WebEditor_BlockEditor__blockListeners_() {
   return this.blockListeners;
};
Set_WebEditor_BlockEditor__blockListeners_(value) {
   this.blockListeners = value;
};
Get_WebEditor_BlockEditor__paletteItem_() {
   return this.paletteItem;
};
Set_WebEditor_BlockEditor__paletteItem_(value) {
   this.paletteItem = value;
};
Get_WebEditor_BlockEditor__lastWidth_() {
   return this.lastWidth;
};
Set_WebEditor_BlockEditor__lastWidth_(value) {
   this.lastWidth = value;
};
Get_WebEditor_BlockEditor__editorPalette_() {
   return this.editorPalette;
};
Set_WebEditor_BlockEditor__editorPalette_(value) {
   this.editorPalette = value;
};
Get_Libraries_Game_Game__focusManager_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__focusManager_();
};
Set_Libraries_Game_Game__focusManager_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__focusManager_(value);
};
Get_Libraries_Game_Game__DESKTOP_APPLICATION_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__DESKTOP_APPLICATION_();
};
Set_Libraries_Game_Game__DESKTOP_APPLICATION_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__DESKTOP_APPLICATION_(value);
};
Get_Libraries_Game_Game__exitRequested_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__exitRequested_();
};
Set_Libraries_Game_Game__exitRequested_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__exitRequested_(value);
};
Get_Libraries_Game_Game__manager_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__manager_();
};
Set_Libraries_Game_Game__manager_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__manager_(value);
};
Get_Libraries_Game_Game__layers_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__layers_();
};
Set_Libraries_Game_Game__layers_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__layers_(value);
};
Get_Libraries_Game_Game__pendingScreenshots_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__pendingScreenshots_();
};
Set_Libraries_Game_Game__pendingScreenshots_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__pendingScreenshots_(value);
};
Get_Libraries_Game_Game__gameInput_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__gameInput_();
};
Set_Libraries_Game_Game__gameInput_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__gameInput_(value);
};
Get_Libraries_Game_Game__applicationType_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__applicationType_();
};
Set_Libraries_Game_Game__applicationType_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__applicationType_(value);
};
Get_Libraries_Game_Game__currentLayer3D_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__currentLayer3D_();
};
Set_Libraries_Game_Game__currentLayer3D_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__currentLayer3D_(value);
};
Get_Libraries_Game_Game__interfaceOptions_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__interfaceOptions_();
};
Set_Libraries_Game_Game__interfaceOptions_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__interfaceOptions_(value);
};
Get_Libraries_Game_Game__androidConfig_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__androidConfig_();
};
Set_Libraries_Game_Game__androidConfig_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__androidConfig_(value);
};
Get_Libraries_Game_Game__ANDROID_APPLICATION_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__ANDROID_APPLICATION_();
};
Set_Libraries_Game_Game__ANDROID_APPLICATION_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__ANDROID_APPLICATION_(value);
};
Get_Libraries_Game_Game__iosConfig_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__iosConfig_();
};
Set_Libraries_Game_Game__iosConfig_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__iosConfig_(value);
};
Get_Libraries_Game_Game__gl20_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__gl20_();
};
Set_Libraries_Game_Game__gl20_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__gl20_(value);
};
Get_Libraries_Game_Game__collide_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__collide_();
};
Set_Libraries_Game_Game__collide_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__collide_(value);
};
Get_Libraries_Game_Game__webConfig_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__webConfig_();
};
Set_Libraries_Game_Game__webConfig_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__webConfig_(value);
};
Get_Libraries_Game_Game__accessibility_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__accessibility_();
};
Set_Libraries_Game_Game__accessibility_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__accessibility_(value);
};
Get_Libraries_Game_Game__sharedTextureManager_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__sharedTextureManager_();
};
Set_Libraries_Game_Game__sharedTextureManager_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__sharedTextureManager_(value);
};
Get_Libraries_Game_Game__editManager_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__editManager_();
};
Set_Libraries_Game_Game__editManager_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__editManager_(value);
};
Get_Libraries_Game_Game__firstLetterNavigationTime_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__firstLetterNavigationTime_();
};
Set_Libraries_Game_Game__firstLetterNavigationTime_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__firstLetterNavigationTime_(value);
};
Get_Libraries_Game_Game__shaderManager_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__shaderManager_();
};
Set_Libraries_Game_Game__shaderManager_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__shaderManager_(value);
};
Get_Libraries_Game_Game__desktopConfig_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__desktopConfig_();
};
Set_Libraries_Game_Game__desktopConfig_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__desktopConfig_(value);
};
Get_Libraries_Game_Game__currentLayer2D_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__currentLayer2D_();
};
Set_Libraries_Game_Game__currentLayer2D_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__currentLayer2D_(value);
};
Get_Libraries_Game_Game__WEB_APPLICATION_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__WEB_APPLICATION_();
};
Set_Libraries_Game_Game__WEB_APPLICATION_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__WEB_APPLICATION_(value);
};
Get_Libraries_Game_Game__dialogLayerPool_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__dialogLayerPool_();
};
Set_Libraries_Game_Game__dialogLayerPool_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__dialogLayerPool_(value);
};
Get_Libraries_Game_Game__IOS_APPLICATION_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__IOS_APPLICATION_();
};
Set_Libraries_Game_Game__IOS_APPLICATION_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__IOS_APPLICATION_(value);
};
Get_Libraries_Game_Game__sceneManager_() {
   return this.Libraries_Game_Game__.Get_Libraries_Game_Game__sceneManager_();
};
Set_Libraries_Game_Game__sceneManager_(value) {
   this.Libraries_Game_Game__.Set_Libraries_Game_Game__sceneManager_(value);
};
Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__runOnUpdate_();
};
Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__runOnUpdate_(value);
};
Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_() {
   return this.Libraries_Interface_Behaviors_Behavior__.Get_Libraries_Interface_Behaviors_Behavior__hasBeenRun_();
};
Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value) {
   this.Libraries_Interface_Behaviors_Behavior__.Set_Libraries_Interface_Behaviors_Behavior__hasBeenRun_(value);
};

constructor(parents) {
this.prototype = this;
this.parentNames_ = ['Libraries.Interface.Events.FocusListener', 'Libraries.Interface.Events.TextChangeListener', 'Libraries.Interface.Events.WebAccessibilityListener', 'Libraries.Game.Game', 'Libraries.Interface.Events.SelectionListener', 'Libraries.Language.Object', 'Libraries.Interface.Behaviors.Behavior',  'WebEditor.BlockEditor'];
this.Libraries_Interface_Events_FocusListener__ = null;
this.Libraries_Interface_Events_TextChangeListener__ = null;
this.Libraries_Interface_Events_WebAccessibilityListener__ = null;
this.Libraries_Game_Game__ = null;
this.Libraries_Interface_Events_SelectionListener__ = null;
this.Libraries_Interface_Behaviors_Behavior__ = null;
if(parents == null) {
   this.Libraries_Interface_Events_FocusListener__ = new quorum_Libraries_Interface_Events_FocusListener_(false);
   this.Libraries_Interface_Events_TextChangeListener__ = new quorum_Libraries_Interface_Events_TextChangeListener_(false);
   this.Libraries_Interface_Events_WebAccessibilityListener__ = new quorum_Libraries_Interface_Events_WebAccessibilityListener_(false);
   this.Libraries_Game_Game__ = new quorum_Libraries_Game_Game_(false);
   this.Libraries_Interface_Events_SelectionListener__ = new quorum_Libraries_Interface_Events_SelectionListener_(false);
   this.Libraries_Interface_Behaviors_Behavior__ = new quorum_Libraries_Interface_Behaviors_Behavior_(false);
   this.Libraries_Interface_Events_FocusListener__.prototype = this;
   this.Libraries_Interface_Events_TextChangeListener__.prototype = this;
   this.Libraries_Interface_Events_WebAccessibilityListener__.prototype = this;
   this.Libraries_Game_Game__.prototype = this;
   this.Libraries_Interface_Events_SelectionListener__.prototype = this;
   this.Libraries_Interface_Behaviors_Behavior__.prototype = this;
}
this.plugin_ = new plugins_quorum_WebEditor_BlockEditor_(this);
this.CONTAINER_ID = "BlockUIContainer";
this.blockListeners = new quorum_Libraries_Containers_HashTable_();
this.palettePanel = new quorum_WebEditor_WebControlPanel_();
this.palettePartition = new quorum_Libraries_Interface_Controls_Control_();
this.editorPanel = new quorum_WebEditor_WebControlPanel_();
this.editorPalette = null;
this.paletteItem = null;
this.blocksItem = null;
this.alwaysSupportMultipleFiles = false;
this.editor = null;
this.editorPane = null;
this.textHighlightListener = new quorum_WebEditor_TextHighlightListener_();
this.scaleAmount = 0.2;
this.lastWidth = 0;

if(parents == null) {
this.Libraries_Game_Game__.constructor_();
}
this.myHash = globalStaticHash;
globalStaticHash = globalStaticHash + 1;
}

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
function GetFileCount() {
	return $starter.GetFileCount();
}
function GetCodeAtFileIndex(index) {
	return $starter.GetCodeAtFileIndex$quorum_integer(index);
}
function GetNameAtFileIndex(index) {
	return $starter.GetNameAtFileIndex$quorum_integer(index);
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
var cachedCodeFiles = null;
function PauseBlockExecution() {
    let gameMap = plugins_quorum_Libraries_Game_GameStateManager_.registeredGames
    code = GetCode();
	if (GetFileCount() > 1)
	{
		cachedCodeFiles = [];
		for (var i = 0; i < GetFileCount(); i++)
		{
			cachedCodeFiles[i] = {fileName: GetNameAtFileIndex(i), code: GetCodeAtFileIndex(i)};
		}
	}
	
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
export{Start, Stop, GetCode, SetCode, ScaleUp, ScaleDown, TogglePalette, BlockEditorStop, PauseBlockExecution, GetFileCount, GetCodeAtFileIndex, GetNameAtFileIndex}