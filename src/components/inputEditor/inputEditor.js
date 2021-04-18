import React, { useState } from "react";
import Immutable from "immutable";
import { Editor, EditorState, RichUtils, Modifier } from "draft-js";
import "draft-js/dist/Draft.css";

import classes from "./inputEditor.module.css";
import Toolbar from "./toolbar/toolbar";

const InputEditor = (props) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  function handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  }

  function myBlockStyleFn(contentBlock) {
    const type = contentBlock.getType();
    if (type === "blockquote") {
      return "superFancyBlockquote";
    }
  }

  function onTabPress(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      const tabCharacter = "          ";
      let currentState = editorState;
      let newContentState = Modifier.replaceText(
        currentState.getCurrentContent(),
        currentState.getSelection(),
        tabCharacter
      );

      setEditorState(
        EditorState.push(currentState, newContentState, "insert-characters")
      );
    }
  }

  const blockRenderMap = Immutable.Map({
    "header-two": {
      element: "h2",
    },
    section: {
      element: "section",
    },
    unstyled: {
      element: "div",
      aliasedElements: ["p"],
    },
  });

  return (
    <div className={classes.Editor}>
      <Toolbar />
      <div className={classes.InputArea}>
        <Editor
          placeholder="Type something..."
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          blockStyleFn={myBlockStyleFn}
          blockRenderMap={blockRenderMap}
          onTab={(event) => onTabPress(event)}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
          }}
        />
      </div>
    </div>
  );
};

export default InputEditor;
