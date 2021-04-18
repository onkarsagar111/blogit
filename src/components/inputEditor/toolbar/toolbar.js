import React from "react";
import { Button, Icon, Popup } from "semantic-ui-react";

import classes from "./toolbar.module.css";

const Toolbar = (params) => {
  return (
    <div className={classes.ToolbarPanel}>
      <Button.Group>
        <Popup
          trigger={
            <Button icon>
              <Icon name="undo" />
            </Button>
          }
          content="Undo"
          position="bottom center"
          basic
          size="mini"
          inverted
        />
        <Popup
          trigger={
            <Button icon>
              <Icon name="redo" />
            </Button>
          }
          content="Redo"
          position="bottom center"
          basic
          size="mini"
          inverted
        />
      </Button.Group>{" "}
      <Popup
        trigger={
          <Button icon>
            <Icon name="font" />
          </Button>
        }
        content="Font"
        position="bottom center"
        basic
        size="mini"
        inverted
      />
      <Button.Group>
        <Popup
          trigger={
            <Button icon>
              <Icon name="bold" />
            </Button>
          }
          content="Bold"
          position="bottom center"
          basic
          size="mini"
          inverted
        />
        <Popup
          trigger={
            <Button icon>
              <Icon name="italic" />
            </Button>
          }
          content="Italic"
          position="bottom center"
          basic
          size="mini"
          inverted
        />
        <Popup
          trigger={
            <Button icon>
              <Icon name="underline" />
            </Button>
          }
          content="Underline"
          position="bottom center"
          basic
          size="mini"
          inverted
        />
        <Popup
          trigger={
            <Button icon>
              <Icon name="strikethrough" />
            </Button>
          }
          content="Strikethrough"
          position="bottom center"
          basic
          size="mini"
          inverted
        />
      </Button.Group>{" "}
      <Button.Group>
        <Button icon>
          <Icon name="align left" />
        </Button>
        <Button icon>
          <Icon name="align center" />
        </Button>
        <Button icon>
          <Icon name="align right" />
        </Button>
        <Button icon>
          <Icon name="align justify" />
        </Button>
      </Button.Group>{" "}
      <Button.Group>
        <Popup
          trigger={
            <Button icon>
              <Icon name="unordered list" />
            </Button>
          }
          content="Bulleted List"
          position="bottom center"
          basic
          size="mini"
          inverted
        />
        <Popup
          trigger={
            <Button icon>
              <Icon name="numbered list" />
            </Button>
          }
          content="Numbered List"
          position="bottom center"
          basic
          size="mini"
          inverted
        />
        <Popup
          trigger={
            <Button icon>
              <Icon name="quote right" />
            </Button>
          }
          content="Quote Text"
          position="bottom center"
          basic
          size="mini"
          inverted
        />
        <Popup
          trigger={
            <Button icon>
              <Icon name="globe" />
            </Button>
          }
          content="Language"
          position="bottom center"
          basic
          size="mini"
          inverted
        />
      </Button.Group>{" "}
      {/* <Button icon="heading" /> */}
      {/* <Button icon="paragraph" /> */}
      <Button.Group>
        <Button icon>
          <Icon name="linkify" />
        </Button>
        <Button icon>
          <Icon name="image" />
        </Button>
        <Button icon>
          <Icon name="film" />
        </Button>
        <Button icon>
          <Icon name="smile outline" />
        </Button>
      </Button.Group>{" "}
    </div>
  );
};

export default Toolbar;
