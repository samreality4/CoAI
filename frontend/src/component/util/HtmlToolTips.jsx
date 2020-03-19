import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core";

export const HtmlToolTips = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#f4eeff",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9"
  },
  arrow: {
      color: "#a6b1e1"
  }
}))(Tooltip);
