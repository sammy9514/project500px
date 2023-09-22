import { Hero } from "./Hero";
import { Wmud } from "./Wmud";
import CardScreen from "./CardScreen";
import EditorsChoice from "./EditorsChoice";

export const Homescreen = () => {
  return (
    <div>
      <Hero />
      <Wmud />
      <EditorsChoice />
      <CardScreen />
    </div>
  );
};
