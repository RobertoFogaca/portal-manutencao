import Image from "next/image";
import Maintenance from "./_components/maintenance";
import Concluded from "./_components/maintenanceConcluded";

export default function Home() {
  return (
    <main className="flex bg-white overflow-hidden h-screen w-full">
      <Maintenance/>
      {/* <Concluded/> */}
    </main>
  )
}
