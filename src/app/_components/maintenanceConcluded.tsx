import Image from "next/image"
import appLogo from "../img/app_logo.png"
import whiteAppLogo from "../img/white_app_logo.png"
import concluded from "../img/maintenance_conclued_bg.png"
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";


const poppins = Poppins({
    weight:["600", "700","800", "900"],
    subsets: ['latin', 'latin-ext'],
    preload: true, 
    style:"normal"
})


export default function Concluded(){
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
                    O Portal Fulltime está de cara nova!!!
                </h1>
                <p className="text-xs sm:text-base text-muted-foreground">
                    Clique no botão abaixo e seja redirecionado para o novo portal!!
                </p>
                <Image
                    src={concluded}
                    width={900}
                    height={600}
                    alt="img"
                    quality={100}
                />
                <a href="https://portal.ops.fulltime.com.br/">
                    <Button variant={"defaultRed"} className="px-4 flex flex-row gap-2">
                        <div className="size-6">
                            <Image
                            src={whiteAppLogo}
                            width={1000}
                            height={1000}
                            alt="img"
                            quality={100}
                            />
                        </div>
                        <p className={`${poppins.className} font-semibold`}>
                            Portal Fulltime
                        </p>
                    </Button>
                </a>
            </section>
        </main>
    )
}