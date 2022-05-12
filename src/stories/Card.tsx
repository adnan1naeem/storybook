import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import MediaImage from "./assets/card-image.svg"
import Checkbox from "@mui/material/Checkbox"
import { Box } from "@mui/system"
import { useState } from "react"

interface CardProps {
  /**
   * Card contents
   */
  label: string
}

/**
 * Primary UI component for user interaction
 */
export const CardComponent = ({ label, ...props }: CardProps) => {
  const [check, setCheck] = useState(false)

  return (
    <Card
      sx={{
        width: 229,
        h: 150,
        padding: 0,
        borderRadius: "10px",
        boxShadow: 0,
        outline: !check ? "3px solid transparent" : "3px solid #21B6A8",
        outlineOffset: "-1px",
        "&:hover": {
          outline: "3px solid #21B6A8"
        }
      }}
    >
      <CardMedia component="img" height="100" image={MediaImage} />
      <CardActions>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}
        >
          <Checkbox
            onChange={(e) => setCheck(e.target.checked)}
            sx={{
              "&:hover": { background: "none" },
              "& .MuiSvgIcon-root": {
                fontSize: 22,
                color: check ? "#21B6A8" : "#616161"
              }
            }}
          />
          <Typography
            variant="body2"
            noWrap
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              color: " #1B1B1B",
              marginTop: "1px",
              fontFamily: "Plus Jakarta Sans"
            }}
          >
            {label}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  )
}
