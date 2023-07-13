import Sede from "./Sede"
export default function Acordeon({ data }) {
    return <div className="accordion" id="accordionExample">
    { data.map(S => <Sede sede={S}/>) }
  </div>
};
