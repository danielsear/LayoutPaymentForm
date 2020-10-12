import React from "react";
import { Box, Divider, Typography } from "@material-ui/core";
import iphone from "../../assets/img/iphone.png";
import { Star } from "@material-ui/icons";

export default function Product() {
  return (
    <Box
      style={{ background: "#fdfdfd" }}
      display="flex"
      flex={1}
      margin="3rem"
    >
      <Box display="flex">
        <Box>
          <img src={iphone} width="400px" height="400px" />
        </Box>
        <Box displa="flex" flexDirection="column">
          <Typography>
            iPhone 11 64GB Preto iOS 4G Câmera 12MP - Apple
          </Typography>
          <Box display="flex" margin=" 2rem 0 2rem 0">
            <Box marginRight="30px" display="flex">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <Typography>(55)</Typography>
            </Box>
            <Box>
              <Typography>(Cód.1611315933)</Typography>
            </Box>
          </Box>
          <Box margin=" 2rem 0 2rem 0">
            <Typography>
              Tudo. Na medida certa. O iPhone 11 tem novo sistema de câmera
              dupla para capturar mais do que você vê e ama. Ele vem com o chip
              mais rápido em um smartphone. E bateria para o dia todo: você faz
              muito e recarrega pouco. Também tem a melhor qualidade de vídeo em
              um celular. Assim, suas memórias ficam inesquecíveis de verdade.
            </Typography>
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
        </Box>
      </Box>
    </Box>
  );
}
