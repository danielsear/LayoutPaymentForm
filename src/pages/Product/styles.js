import styled from "styled-components";
import { Box, Typography } from "@material-ui/core";

export const Page = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: #fafafa;
`;

export const PageContainer = styled(Box)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0 12rem;
`;

export const ProductContainer = styled(Box)`
  display: flex;
  background-color: #fff;
  padding: 12rem 0;
  max-width: 60%;
  border-radius: 0.5rem;
  box-shadow: 2px 0 12px -6px rgba(0, 0, 0, 0.4);
`;

export const ProductImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductImage = styled("img")`
  height: 600px;
  object-fit: cover;
`;

export const ProductContent = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
`;

export const Title = styled(Typography)`
  font-size: 28px;
  font-weight: bold;
`;
