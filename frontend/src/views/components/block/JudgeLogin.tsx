export interface JudgeLoginProps {
  stateLogin: string;
  iconColor: string;
}
const JudgeLogin = ({ stateLogin, iconColor }: JudgeLoginProps) => {
  return (
    <>
      <p className="absolute top-16 right-3">
        <span className={`${iconColor}`}>●</span>
        <>{stateLogin}</>
      </p>
    </>
  );
};

export default JudgeLogin;
