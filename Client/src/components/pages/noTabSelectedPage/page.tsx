import Image from "next/image";
import logo from "../../../../public/favicon.ico";

function NoTabSelected() {
  return (
    <div className="flex flex-col items-center justify-center content-center h-full mt-20 opacity-10 backdrop-blur-2xl">
      <Image src={logo} width={300} height={300} alt="Picture of the author"  />
    </div>
  );
}

export default NoTabSelected;
