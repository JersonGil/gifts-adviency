import { BsFillEmojiFrownFill } from "react-icons/bs";

const EmptyList = () => (
  <div className="d-flex align-items-baseline">
    <BsFillEmojiFrownFill />
    <h2 className="ms-2">No Hay Regalos</h2>
  </div>
);

EmptyList.propTypes = {};

export default EmptyList;
