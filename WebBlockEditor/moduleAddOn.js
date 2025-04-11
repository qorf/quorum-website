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
export{Start, Stop, GetCode, SetCode, ScaleUp, ScaleDown, TogglePalette, BlockEditorStop, PauseBlockExecution, GetFileCount, GetCodeAtFileIndex}