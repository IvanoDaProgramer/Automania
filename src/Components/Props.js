import Otkup from "./Otkup";

export default function Props() {
  let Prop = {
    Cijena1: "10000 €",
    Cijena2: "1000 €",
    Cijena3: "750 €",
    Rabljenost1: "100000 km",
    Rabljenost2: "202000 km",
    Rabljenost3: "220000 km",
    Godina1: "2017",
    Godina2: "2005",
    Godina3: "2001"
  };

  return (
    <div className="Props">
      <Otkup salji={Prop} />
    </div>
  );
}
