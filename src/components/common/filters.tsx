import { Checkbox } from "../ui/checkbox";


export default function Filters() {

    return (

        <>
            <div>
                <div>
                    <div className="text-base font-semibold text-black">Employment Type</div>
                    <div className="flex items-center space-x-2 my-4 ">
                        <Checkbox id="fullTime" className="text-lg" />
                        <label
                            htmlFor="fullTime"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-1"
                        >
                            Full Time
                        </label>
                    </div>
                    <div className="flex items-center space-x-2 my-4">
                        <Checkbox id="partTime" />
                        <label
                            htmlFor="partTime"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-1"
                        >
                            Part Time
                        </label>
                    </div>
                    <div className="flex items-center space-x-2 my-4">
                        <Checkbox id="internship" />
                        <label
                            htmlFor="internship"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-1"
                        >
                            Internship
                        </label>
                    </div>

                </div>
                <div>
                    <div className="text-base font-semibold text-black">Employment Type</div>
                    <div className="flex items-center space-x-2 my-4 ">
                        <Checkbox id="fullTime" className="text-lg" />
                        <label
                            htmlFor="fullTime"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-1"
                        >
                            Full Time
                        </label>
                    </div>
                    <div className="flex items-center space-x-2 my-4">
                        <Checkbox id="partTime" />
                        <label
                            htmlFor="partTime"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-1"
                        >
                            Part Time
                        </label>
                    </div>
                    <div className="flex items-center space-x-2 my-4">
                        <Checkbox id="internship" />
                        <label
                            htmlFor="internship"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-1"
                        >
                            Internship
                        </label>
                    </div>

                </div>

            </div>
        </>

    )

}