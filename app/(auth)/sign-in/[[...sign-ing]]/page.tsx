import { SignIn } from "@clerk/nextjs"

export default function Page(){
    return(
    <div className=" w-screen h-screen pt-24 flex justify-center">
   <SignIn/>
    </div>
    )
}