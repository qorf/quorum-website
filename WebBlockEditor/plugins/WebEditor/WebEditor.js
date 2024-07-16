function plugins_quorum_WebEditor_BlockEditor_() {
    this.GetTextForIDE$quorum_text = function(containerID) {
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