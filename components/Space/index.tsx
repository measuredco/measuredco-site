import "./Space.css";

export type SpaceProps = {
  size:
    | "01"
    | "02"
    | "03"
    | "04"
    | "05"
    | "06"
    | "07"
    | "08"
    | "09"
    | "10"
    | "11"
    | "12";
};

const Space = ({ size }: SpaceProps) => (
  <div className={`msrd-Space ${size ? `msrd-Space--${size}` : ""}`}></div>
);

export default Space;
