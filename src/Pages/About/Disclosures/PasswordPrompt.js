import PageLayout from "../../../Components/PageLayout";
import "../../../Pages/layout.css";
import Password from "../../../Components/Password";
import PropTypes from "prop-types";
/**
 * @description password prompt works
 * @param {any} props - contains password:string
 * @returns
 */
function PasswordPrompt(props) {
  const passwordPrompt = (
    <div className="content-container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "4rem",
        }}
      >
        <div className="title">Access for NYU FCU Members</div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              color: "#91009e",
              fontSize: "min(2rem,5vw)",
              marginInline: "-2rem",
              maxWidth: "500px",
            }}
          >
            Please email nyufcu.memberassist@nyu.edu or call 212-995-3171 for
            access to this page.
          </div>
        </div>
        <Password
          password={props.password}
          allow={() => {
            props.pass();
          }}
        />
      </div>
    </div>
  );

  return <PageLayout content={passwordPrompt} />;
}

PasswordPrompt.propTypes = {
  password: PropTypes.string.isRequired,
  pass: PropTypes.func.isRequired,
};

export default PasswordPrompt;
