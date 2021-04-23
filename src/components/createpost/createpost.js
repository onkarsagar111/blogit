import React, { useState } from "react";
import { Button, Icon, Input } from "semantic-ui-react";
import { EditorState, Modifier, convertToRaw } from "draft-js";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import axios from "../../axios";
import Main from "../../helper/main/main";
import InputEditor from "../inputEditor/inputEditor";
import HorizontalLine from "../UI/horizontalLine/horizontalLine";
import VerticalLine from "../UI/verticalLine/verticalLine";

import classes from "./createpost.module.css";
import ErrorModal from "../UI/errorModal/errorModal";

const CreatePost = (props) => {
  var initialForm = {
    title: {
      isValid: true,
      type: "text",
      placeholder: "Enter Title",
      value: ""
    },
    content: {
      isValid: false,
      type: "textarea",
      placeholder: "Enter Article",
      value: "",
      rows: "8",
      cols: "20",
    },
    country: {
      isValid: true,
      type: "select",
      placeholder: "Select country",
      value: "",
      options: ["India", "US", "Canada", "Australia"],
    },
  };

  const [inputForm, setInputForm] = useState(initialForm);
  const [error, setError] = useState(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [editorContentHTML, setEditorContentHTML] = useState(draftToHtml(convertToRaw(editorState.getCurrentContent())));

  const changeTitleHandler = (event) => {
    let tempInputForm = { ...inputForm }
    let tempTitle = tempInputForm.title;
    tempTitle.value = event.target.value;
    tempInputForm.title = tempTitle;
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    setInputForm(tempInputForm);
  };

  const optimizeHtml = (htmlString) => {
    var str = htmlString;
    let index = 0;
    while (str.indexOf("<img", index) !== -1) {
      var start = str.indexOf('<img',index);
      var end = str.indexOf('>', start);
      var res = str.substring(start, end);

      var newRes = res.replace("height: auto", "height: 100%");
      newRes = newRes.replace("width: auto", "width: 100%");
      str = str.replace(res, newRes);
      // str = newStr;
      index = start+1;
    }

    return str;
  }


  const publishBlog = () => {
    let object = {
      title: inputForm.title.value,
      content: optimizeHtml(draftToHtml(convertToRaw(editorState.getCurrentContent()))),
      country: "India"
    }
    axios
      .post("/blogs.json", object)
      .then((response) => {
        setError(<ErrorModal success message='Blog has been Published successfully.' />);
      }).catch(error => {
        setError(<ErrorModal message='Some error occured while publishing the Blog!' />);
      });
  };

  return (
    <Main miniMode={props.miniMode}>
      <div className={classes.Body}>
        {error}
        <VerticalLine height="83%" color="grey" left="73%" size="1px" />
        <Input
          transparent
          placeholder="Title"
          className={classes.Input}
          size="huge"
          onChange={(event) => changeTitleHandler(event)}
        />
        <HorizontalLine width="65%" color="grey" left="6%" size="1px" />
        <br />
        <br />
        <InputEditor
          editorState={editorState}
          setEditorState={setEditorState}
          onTabPress={onTabPress}
        />
        <br />
        <div className={classes.buttonContainer}>
          <Button icon labelPosition="left" primary className={classes.button}>
            <Icon name="eye" />
            Preview
          </Button>
          <Button
            icon
            labelPosition="left"
            color="green"
            className={classes.button}
            onClick={publishBlog}
          >
            <Icon name="send" />
            Publish
          </Button>
        </div>
      </div>
    </Main>
  );

  // editor functions
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
};

export default CreatePost;
