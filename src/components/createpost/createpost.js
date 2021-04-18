import React, { useState } from "react";
import { Button, Icon, Input } from "semantic-ui-react";
import Main from "../../helper/main/main";
import InputEditor from "../inputEditor/inputEditor";
import HorizontalLine from "../UI/horizontalLine/horizontalLine";
import VerticalLine from "../UI/verticalLine/verticalLine";

import classes from "./createpost.module.css";

const CreatePost = (props) => {
  var initialForm = {
    title: {
      isValid: true,
      type: "text",
      placeholder: "Enter Title",
      value: "",
    },
    desc: {
      isValid: true,
      type: "text",
      placeholder: "Enter Desc",
      value: "",
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

  return (
    <Main miniMode={props.miniMode}>
      <div className={classes.Body}>
        <VerticalLine height="83%" color="grey" left="73%" size="1px" />
        <Input
          transparent
          placeholder="Title"
          className={classes.Input}
          size="huge"
        />
        <HorizontalLine width="65%" color="grey" left="6%" size="1px" />
        <br />
        <br />
        <InputEditor />
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
          >
            <Icon name="send" />
            Publish
          </Button>
        </div>
      </div>
    </Main>
  );
};

export default CreatePost;
