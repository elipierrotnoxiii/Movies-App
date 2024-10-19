"use client";

import { Input } from "@nextui-org/react";
import { SearchIcon } from "./icons/SearchIcon";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";


const Search = () => {

  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleOnChange = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }
    replace(`/?${params.toString()}`)
  }, 600);

  return (
    <Input
          classNames={{
            base: "max-w-full md:w-[400px] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
          onChange={e => handleOnChange(e.target.value)}
        />
  )
}

export default Search
