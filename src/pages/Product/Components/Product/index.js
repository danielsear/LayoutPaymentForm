import React from "react";
import { Box, Divider, Typography } from "@material-ui/core";
import iphone from "../../../../assets/img/iphone.png";
import { Star } from "@material-ui/icons";
import { iphone as product } from "../../../../data";
import {
  ProductContainer,
  ProductImageContainer,
  ProductImage,
  ProductContent,
  Title,
} from "../../styles";

export default function ProductComponent() {
  return (
    <ProductContainer>
      <ProductImageContainer>
        <ProductImage src={iphone} />
      </ProductImageContainer>
      <ProductContent>
        <Title>{product.title}</Title>
        <Box display="flex" margin=" 2rem 0 2rem 0">
          <Box marginRight="30px" display="flex">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <Typography>({product.numberOfAvaliations})</Typography>
          </Box>
          <Box>
            <Typography>(Cód.{product.code})</Typography>
          </Box>
        </Box>
        <Box margin=" 2rem 0 2rem 0">
          <Typography>{product.description}</Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <Typography style={{ margin: "2rem 0 2rem 0" }} component="a">
            mais informações
          </Typography>
          <Divider />
          <Typography style={{ margin: "2rem 0 2rem 0" }} component="a">
            política de troca e devolução
          </Typography>
        </Box>
      </ProductContent>
    </ProductContainer>
  );
}
