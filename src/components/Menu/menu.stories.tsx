import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Menu from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

export const defaultMenu = () => (
  <Menu
    defaultIndex="[1-1]"
    onSelect={(index) => {
      action(`clicked ${index} item`);
    }}
  >
    <MenuItem>cool link</MenuItem>
    <SubMenu title="Hello">
      <MenuItem>cool link</MenuItem>
      <MenuItem>cool link</MenuItem>
      <MenuItem>cool link</MenuItem>
    </SubMenu>
    <MenuItem disabled>disabled</MenuItem>
    <MenuItem>cool link 2</MenuItem>
  </Menu>
);

storiesOf("Menu Component", module).add("Menu", defaultMenu);
