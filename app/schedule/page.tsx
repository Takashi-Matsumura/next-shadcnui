import React from "react";

import { promises as fs } from "fs";
import path from "path";
import { taskSchema } from "@/data/schema";
import { columns } from "@/components/datatable/columns";

import { DataTable } from "@/components/datatable/data-table";
import { z } from "zod";

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(path.join(process.cwd(), "data/tasks.json"));

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

const page = async () => {
  const tasks = await getTasks();

  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <DataTable data={tasks} columns={columns} />
      </section>
    </>
  );
};

export default page;
