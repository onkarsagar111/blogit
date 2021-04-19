import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
// import { Editor, EditorState, RichUtils, Modifier } from "draft-js";
// import "draft-js/dist/Draft.css";

import classes from "./inputEditor.module.css";

const InputEditor = (props) => {
  

  return (
    <div className={classes.Editor}>
      <div className={classes.InputArea}>
        <Editor
        // toolbarOnFocus
          localization={{
            locale: 'en',
          }}
          onTab={props.onTabPress}
          hashtag={{}}
          editorState={props.editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          toolbarClassName={classes.Toolbar}
          onEditorStateChange={props.setEditorState}
        />
      </div>
    </div>
  );
};

export default InputEditor;
