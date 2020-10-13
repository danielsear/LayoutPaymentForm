import React from "react";
import { Box } from "@material-ui/core";
import { Page, PageContainer } from "./styles";
import ProductComponent from "./Components/Product/index";

export default function Product() {
  return (
    <Page>
      <PageContainer>
        <Box>
          <ProductComponent />
        </Box>
      </PageContainer>
    </Page>
  );
}
