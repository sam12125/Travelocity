import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function SideSelect2() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      style={{ display: "flex", justifyContent: "start" }}
      sx={{ width: "100%" , height:"50px"}}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab value="one" label="Debit/Credit Card" wrapped style={{fontWeight:"bolder",width:"max-content"}} />
        <Tab value="two" label="PayPal" style={{fontWeight:"500",width:"max-content"}} />
        <Tab value="three" label="Monthly Payments" style={{fontWeight:"500",width:"max-content"}} />
        <Tab value="four" label="Click-to-Pay" style={{fontWeight:"500",width:"max-content"}} />
      </Tabs>
    </Box>
  );
}