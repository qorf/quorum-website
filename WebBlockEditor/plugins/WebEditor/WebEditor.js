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
            hidePaletteContainer.innerHTML = "Hide Tray";
          } else {
            hidePaletteContainer.innerHTML = "Show Tray";
          }
        }
    };
}