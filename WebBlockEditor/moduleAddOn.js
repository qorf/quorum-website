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
	
    /*
	If the code makes use of ChartOptions, we'll need to preserve it here, otherwise it'll get blown away
	and chart colors and other options won't apply.
	
	We have to handle this as a special case because the chart options are typically generated in the code immediately
	before a game would be loaded, purging the shared classes.
	*/
	var chartOptions = global_Get_Shared_Class("Libraries.Interface.Controls.Charts.ChartOptions");
	
    global_Empty_Shared_Classes();
	
	if (chartOptions != null)
	{
		global_Add_Shared_Class("Libraries.Interface.Controls.Charts.ChartOptions", chartOptions);
	}
}
export{Start, Stop, GetCode, SetCode, ScaleUp, ScaleDown, TogglePalette, BlockEditorStop, PauseBlockExecution, GetFileCount, GetCodeAtFileIndex, GetNameAtFileIndex}