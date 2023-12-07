import ItemCard from "./components/itemcard";
import gun1 from "../assets/guns/dg-58-call-of-duty-mw3.png";
import gun2 from "../assets/guns/fr_556-call-of-duty-mw3.png";
import gun3 from "../assets/guns/holger_556-call-of-duty-mw3.png";
import gun4 from "../assets/guns/mcw-call-of-duty-mw3.png";
import gun5 from "../assets/guns/mtz-556-call-of-duty-mw3.png";
import gun6 from "../assets/guns/sva-45-call-of-duty-mw3.png";
import gun7 from "../assets/guns/amr9-call-of-duty-mw3.png";
import gun8 from "../assets/guns/rival-9-call-of-duty-mw3.png";
import gun9 from "../assets/guns/striker-call-of-duty-mw3.png";
import gun10 from "../assets/guns/striker-9-call-of-duty-mw3.png";
import gun11 from "../assets/guns/wsp_swarm-call-of-duty-mw3.png";
import gun12 from "../assets/guns/wsp-9-call-of-duty-mw3.png";
import gildedcamo from "../assets/mastery/gilded_wm_155.jpg";
import forgedcamo from "../assets/mastery/forged_wm_155.jpg";
import pricelesscamo from "../assets/mastery/priceless_wm_155.jpg";
import camo1 from "../assets/camo/fractal-dirt.png";
import camo2 from "../assets/camo/magma-heat.png";
import camo3 from "../assets/camo/palette-rosemary.png";
import camo4 from "../assets/camo/topo-glitch.png";

export default function Home() {
  return (
    <main className="text-white container mx-auto">
      <div className="mt-20">
        {/* itemcards ar */}
        <div className="p-4 text-l font-bold ">Assault rifles</div>
        <div className="grid grid-cols-3 gap-5 w-full justify-center">
          <ItemCard
            imageSrc={gun5}
            title="mtz-556"
            description="ar"
            imageScrCamo={camo1}
            imageScrCamo2={camo2}
            imageScrCamo3={camo3}
            imageScrCamo4={camo4}
            imageScrCamogilded={gildedcamo}
            imageScrCamoforged={forgedcamo}
            imageScrCamopriceless={pricelesscamo}
          />

          <ItemCard
            imageSrc={gun4}
            title="mcw"
            description="ar"
            imageScrCamo={""}
            imageScrCamo2={""}
            imageScrCamo3={""}
            imageScrCamo4={""}
            imageScrCamogilded={gildedcamo}
            imageScrCamoforged={forgedcamo}
            imageScrCamopriceless={pricelesscamo}
          />

          <ItemCard
            imageSrc={gun6}
            title="sva-45"
            description="ar"
            imageScrCamo={""}
            imageScrCamo2={""}
            imageScrCamo3={""}
            imageScrCamo4={""}
            imageScrCamogilded={gildedcamo}
            imageScrCamoforged={forgedcamo}
            imageScrCamopriceless={pricelesscamo}
          />

          <ItemCard
            imageSrc={gun1}
            title="dg-58"
            description="ar"
            imageScrCamo={""}
            imageScrCamo2={""}
            imageScrCamo3={""}
            imageScrCamo4={""}
            imageScrCamogilded={gildedcamo}
            imageScrCamoforged={forgedcamo}
            imageScrCamopriceless={pricelesscamo}
          />

          <ItemCard
            imageSrc={gun2}
            title="fr-556"
            description="ar"
            imageScrCamo={""}
            imageScrCamo2={""}
            imageScrCamo3={""}
            imageScrCamo4={""}
            imageScrCamogilded={gildedcamo}
            imageScrCamoforged={forgedcamo}
            imageScrCamopriceless={pricelesscamo}
          />

          <ItemCard
            imageSrc={gun3}
            title="holger-556"
            description="ar"
            imageScrCamo={""}
            imageScrCamo2={""}
            imageScrCamo3={""}
            imageScrCamo4={""}
            imageScrCamogilded={gildedcamo}
            imageScrCamoforged={forgedcamo}
            imageScrCamopriceless={pricelesscamo}
          />
        </div>

        {/* itemcards smg */}
        <div className="p-4 text-l font-bold ">Submachine guns</div>
        <div className="grid grid-cols-3 gap-5 w-full justify-center">
          <ItemCard
            imageSrc={gun7}
            title="amr9"
            description="smg"
            imageScrCamo={""}
            imageScrCamo2={""}
            imageScrCamo3={""}
            imageScrCamo4={""}
            imageScrCamogilded={gildedcamo}
            imageScrCamoforged={forgedcamo}
            imageScrCamopriceless={pricelesscamo}
          />

          <ItemCard
            imageSrc={gun8}
            title="rival-9"
            description="smg"
            imageScrCamo={""}
            imageScrCamo2={""}
            imageScrCamo3={""}
            imageScrCamo4={""}
            imageScrCamogilded={gildedcamo}
            imageScrCamoforged={forgedcamo}
            imageScrCamopriceless={pricelesscamo}
          />

          <ItemCard
            imageSrc={gun9}
            title="striker"
            description="smg"
            imageScrCamo={""}
            imageScrCamo2={""}
            imageScrCamo3={""}
            imageScrCamo4={""}
            imageScrCamogilded={gildedcamo}
            imageScrCamoforged={forgedcamo}
            imageScrCamopriceless={pricelesscamo}
          />

          <ItemCard
            imageSrc={gun10}
            title="striker-9"
            description="smg"
            imageScrCamo={""}
            imageScrCamo2={""}
            imageScrCamo3={""}
            imageScrCamo4={""}
            imageScrCamogilded={gildedcamo}
            imageScrCamoforged={forgedcamo}
            imageScrCamopriceless={pricelesscamo}
          />

          <ItemCard
            imageSrc={gun11}
            title="wsp-swarm"
            description="smg"
            imageScrCamo={""}
            imageScrCamo2={""}
            imageScrCamo3={""}
            imageScrCamo4={""}
            imageScrCamogilded={gildedcamo}
            imageScrCamoforged={forgedcamo}
            imageScrCamopriceless={pricelesscamo}
          />

          <ItemCard
            imageSrc={gun12}
            title="wsp-9"
            description="smg"
            imageScrCamo={""}
            imageScrCamo2={""}
            imageScrCamo3={""}
            imageScrCamo4={""}
            imageScrCamogilded={gildedcamo}
            imageScrCamoforged={forgedcamo}
            imageScrCamopriceless={pricelesscamo}
          />
        </div>
      </div>
    </main>
  );
}
