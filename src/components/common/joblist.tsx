import Image from "next/image";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

export default function JobList() {
    return (
        <>
            <Card className="w-full p-5">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <div>
                            <Image
                                height={30}
                                width={30}
                                alt="logo"
                                src="https://jobicy.com/data/server-nyc0409/galaxy/mercury/2023/03/fe39c2bc9bb5ebb0b5e24318b1f3b60d.jpeg"

                            />
                        </div>
                        <div>
                            <div className="text-lg font-medium text-black">Investor Quality</div>
                            <div className="text-sm text-gray-300">Norway</div>
                        </div>
                    </div>
                    <div>
                        <div className="text-lg font-medium text-black text-right">$2k - $9k</div>
                        <div className="text-sm text-gray-300 text-right">Posted 2 years</div>
                    </div>
                </div>
                <div className="text-gray-400 my-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur placeat dignissimos excepturi itaque nobis vel, nisi, tempore quis impedit optio exercitationem commodi tempora est! Cum a fugit quos incidunt iste.
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-5">
                        <div className="bg-green-200 text-green-600 text-xs rounded-full p-[3px] px-4">Full-time</div>
                        <div className="bg-green-200 text-green-600 text-xs rounded-full p-[3px] px-4">Software</div>
                        <div className="bg-green-200 text-green-600 text-xs rounded-full p-[3px] px-4">React</div>
                    </div>
                    <div>
                        <Button className="rounded-full p-4 bg-yellow-400 text-black font-medium text-lg px-8">Apply</Button>
                    </div>
                </div>

            </Card>
        </>
    );
}
