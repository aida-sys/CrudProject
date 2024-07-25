import TabelKontaks from "@/components/tabel-kontak";
import Pencarian from "@/components/pencarian";
import { TombolBuat } from "@/components/tombol";


const page = () => {
  return (
     <div className="max-w-screen-md mx-auto mt-5">
         <div className="flex items-center justify-between gap-1 mb-5">
                  <Pencarian/>
                   <TombolBuat />
            

         </div>
         < TabelKontaks/>
     </div>
  )
}

export default page