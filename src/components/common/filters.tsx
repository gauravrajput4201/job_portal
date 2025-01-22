"use client";

import useStore from "@/store/store";
import { Checkbox } from "../ui/checkbox";
import { ScrollArea } from "../ui/scroll-area";

export default function Filters(props: { filterArr: any[] }) {
    const { filterArr } = props;

    // Get state and actions from the store
    const filters = useStore((state) => state.filters);
    const addFilter = useStore((state) => state.addFilter);
    const removeFilter = useStore((state) => state.removeFilter);

    // Function to handle checkbox changes
    const handleCheckboxChange = (id: string) => {
        if (filters.includes(id)) {
            removeFilter(id); // Remove filter if already selected
        } else {
            addFilter(id); // Add filter if not selected
        }
    };

    return (
        <div>
            <div>
                <div className="text-base font-semibold text-black">Employment Type</div>
                {/* Map through filterArr to render checkboxes dynamically */}
                <ScrollArea className="h-80 w-48 p-3 ">
                    {filterArr.map((item: any) => (

                        <div className="flex items-center space-x-2 my-4" key={item.id}>

                            <Checkbox
                                id={item.id}
                                className="text-lg"
                                checked={filters.includes(item.title)} // Check condition
                                onCheckedChange={() => handleCheckboxChange(item.title)} // Toggle filter
                            />
                            <label
                                htmlFor={item.id}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-1"
                            >
                                {item.title}
                            </label>
                        </div>
                    ))}
                </ScrollArea>
            </div>
        </div>
    );
}
