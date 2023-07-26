import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";

import DrawIcon from "@mui/icons-material/Draw";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import CampaignIcon from "@mui/icons-material/Campaign";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

import { useParams } from "react-router-dom";

import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    width: "50%",
    marginTop: "40px",
    textAlign: "center",
  },
  icon: {
    color: "gray",
    marginBottom: "5px",
    fontSize: "80px !important",
  },
  box: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

const MyPage = () => {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();

  return (
    <Box textAlign="center" className={classes.box}>
      <Link to={`/user/${id}/edit`} className={classes.link}>
        <DrawIcon className={classes.icon} />
        <Typography variant="subtitle2">プロフィール編集</Typography>
      </Link>
      <Link to="/verification" className={classes.link}>
        <FolderSharedIcon className={classes.icon} />
        <Typography variant="subtitle2">年齢確認</Typography>
      </Link>
      <Link to="/information" className={classes.link}>
        <CampaignIcon className={classes.icon} />
        <Typography variant="subtitle2">お知らせ</Typography>
      </Link>
      <Link to="/setting" className={classes.link}>
        <AppSettingsAltIcon className={classes.icon} />
        <Typography variant="subtitle2">各種設定</Typography>
      </Link>
      <Link to={`/myBoard/${id}`} className={classes.link}>
        <AssignmentIndIcon className={classes.icon} />
        <Typography variant="subtitle2">掲示板</Typography>
      </Link>
      <Link to="/myFav" className={classes.link}>
        <VolunteerActivismIcon className={classes.icon} />
        <Typography variant="subtitle2">いいね</Typography>
      </Link>
    </Box>
  );
};

export default MyPage;
