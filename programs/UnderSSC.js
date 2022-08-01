import { Typography } from "@material-ui/core";

const UnderSSC = () => {
  return (
    <div>
      <>
        <div className="programsOffer pb-5">
          <Typography
            style={{ padding: "20px 10px", color: "#08c7ba", fontWeight: "bold" }}
            variant="h6"
            align="center"
          >
            Sorry!
          </Typography>

          <Typography
            style={{ padding: "20px 10px", color: "#08c7ba", fontWeight: "bold" }}
            align="center"
          >
            You are not eligible to apply here.
          </Typography>
        </div>
      </>
    </div>
  );
};

export default UnderSSC;
