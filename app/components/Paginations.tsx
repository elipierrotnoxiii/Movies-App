"use client";
import { Pagination } from "@nextui-org/react"
import { useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";

interface PaginationI{
  pages: number
  page: number
}


const Paginations: FC<PaginationI> = ({page, pages}) => {


  console.log('page :>> ', page);
  console.log('pages :>> ', pages);
  

  const searchParmas = useSearchParams();
  const router = useRouter();

  const handleOnChange = (_page: number) => {
    const params = new URLSearchParams(searchParmas);
    params.set("page", _page.toString());
    router.replace(`?${params}`)
  }

  

  return (
    <Pagination isCompact showControls total={pages} page={page} initialPage={1} onChange={handleOnChange}/>
  )
}

export default Paginations
