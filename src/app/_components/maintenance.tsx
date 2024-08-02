import Image from "next/image"
import appLogo from "../img/app_logo.png"
import maintenance from "../img/maintenance_bg.png"
import { Poppins } from "next/font/google";
import { Separator } from "@/components/ui/separator";

const poppins = Poppins({
    weight:["600", "700","800", "900"],
    subsets: ['latin', 'latin-ext'],
    preload: true, 
    style:"normal"
})


export default function Maintenance(){
    return(
        <main className="flex flex-col px-[2rem] sm:px-[7rem] gap-4 h-full w-full items-center py-6">
            <nav className="flex flex-row items-center gap-2 font-bold text-xs sm:text-base lg:text-xl text-[#f11717]">
                <span className="size-[2rem]">
                    <Image
                    src={appLogo}
                    width={10000}
                    height={10000}
                    alt="img"
                    />
                </span>
                <p className={poppins.className}>Portal Fulltime</p>
            </nav>
            <section className="flex flex-col items-center justify-center text-center rounded-xl h-full w-full gap-4">
                <h1 className={`${poppins.className} flex flex-col font-bold text-zinc-700 text-base sm:text-xl    md:text-xl lg:text-xl`}>
                    O Portal Fulltime está passando por uma manutenção
                </h1>
                <p className="text-xs sm:text-base text-muted-foreground">
                    Nós estamos trabalhando para sua melhor experiência!
                </p>
                <Image
                    src={maintenance}
                    width={900}
                    height={600}
                    alt="img"
                    quality={100}
                />
            </section>
        </main>
    )
}