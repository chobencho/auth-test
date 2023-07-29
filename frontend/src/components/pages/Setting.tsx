import { Link } from "react-router-dom";
// Style
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import LockIcon from '@mui/icons-material/Lock';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import SecurityIcon from '@mui/icons-material/Security';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

const Setting = () => {
  return (
    <>
      <Link
        to="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="border m-2">
        <FormatAlignJustifyIcon />
        <span>
          お問い合わせ
        </span>
      </Link>
      <br />
      <Link to={`/changePassword`} className="border m-2"><LockIcon /><span>パスワード変更</span></Link><br />
      <Link to={`/terms`} className="border m-2"><BrandingWatermarkIcon /><span>利用規約</span></Link><br />
      <Link to={`/privacyPolicy`} className="border m-2"><SecurityIcon /><span>プライバシーポリシー</span></Link><br />
      <Link to={`/deleteAccount`} className="border m-2"><PersonRemoveIcon /><span>アカウント削除</span></Link><br />
    </>
  )
}

export default Setting
