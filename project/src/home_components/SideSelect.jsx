import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function SideSelect() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      style={{ display: "flex", justifyContent: "center"  }}
      sx={{ width: "100%" , height:"50px"}}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab value="one" label="Stay " wrapped style={{fontWeight:"bolder"}} />
        <Tab value="two" label="Flights" style={{fontWeight:"500",width:"max-content"}} />
        <Tab value="three" label="Cars" style={{fontWeight:"500",width:"max-content"}} />
        <Tab value="four" label="Packages" style={{fontWeight:"500",width:"max-content"}} />
        <Tab value="five" label="Things to do" style={{fontWeight:"500",width:"max-content"}} />
        <Tab value="six" label="Cruises" style={{fontWeight:"500",width:"max-content"}} />
      </Tabs>
    </Box>
  );
}
