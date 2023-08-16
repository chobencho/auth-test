export interface SendMessageButtonProps {
  onClick: Function;
  name: string;
  color: string;
  bgColor: string;
}

const SendMessageButton = ({
  onClick,
  name,
  color,
  bgColor,
}: SendMessageButtonProps) => {
  const buttonStyle: React.CSSProperties = {
    color: color,
    backgroundColor: bgColor,
    padding: "10px 20px", // お好みのパディングを設定してください
    borderRadius: "5px", // 角丸をお好みで設定してください
    border: "none", // ボーダーが不要な場合は設定してください
    cursor: "pointer",
  };

  return (
    <button onClick={() => onClick()} style={buttonStyle}>
      {name}
    </button>
  );
};

export default SendMessageButton;
