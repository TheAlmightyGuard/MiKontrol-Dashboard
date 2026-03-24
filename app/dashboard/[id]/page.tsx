"use server"

import { redirect } from "next/navigation";

export default async function Dashboard_Overview_M({
  params,
}: {
  params: Promise<{ id: string }>
}) {
    const { id } = await params
    redirect(`/dashboard/${id}/overview`)
}